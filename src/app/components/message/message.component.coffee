angular.module 'irisAngular'
  .directive 'message', ->
    scope: true
    restrict: 'E'
    templateUrl: 'app/components/message/message.template.html'
    link: (scope, element, attrs) ->
      msg = scope.msg
      msg.likes = 0
      updateReactions = (reactions) ->
        likes = 0
        liked = false
        for k, v of reactions
          if v == 'like'
            likes++
            liked = true if k == scope.viewpoint.value and v == 'like'
        msg.likes = likes
        msg.liked = liked
      if msg.signedData.sharedMsg and not options.noRecursion
        scope.irisIndex.getMessageByHash(msg.signedData.sharedMsg).then (m) ->
          msg.sharedMsg = m
      updateReactions(msg.reactions) if msg.reactions
      msg.repliesArr = msg.repliesArr or []
      msg.replies = msg.replies or {}
      msg.sharesArr = msg.sharesArr or []
      msg.shares = msg.shares or {}
      updateReplies = (replies) ->
        for hash, replyRaw of replies
          window.irisLib.Message.fromSig(replyRaw).then (r) ->
            unless msg.replies[r.getHash()] and msg.replies[r.getHash()].author
              msg.replies[r.getHash()] = r
              msg.repliesArr.push(r)
      updateShares = (shares) ->
        for hash, shareRaw of shares
          window.irisLib.Message.fromSig(shareRaw).then (r) ->
            unless msg.shares[r.getHash()] and msg.shares[r.getHash()].author
              msg.shares[r.getHash()] = r
              msg.sharesArr.push(r)
      if msg.gun
        msg.gun.get('replies').open updateReplies
        msg.gun.get('reactions').on updateReactions
        msg.gun.get('shares').open updateShares
      # msg.author = msg.getAuthor(scope.irisIndex) # moved to processMessage
      # msg.author.gun.get('trustDistance').on (d) -> msg.authorTrustDistance = d
      msg.author.gun.get('attrs').open (d) ->
        mva = window.irisLib.Identity.getMostVerifiedAttributes(d)
        if mva.name
          msg.author_name = mva.name.attribute.value
        else if mva.nickname
          msg.author_name = mva.nickname.attribute.value
      msg.recipient = msg.getRecipient(scope.irisIndex)
      msg.recipient.gun.get('attrs').open (d) ->
        mva = window.irisLib.Identity.getMostVerifiedAttributes(d)
        if mva.name
          msg.recipient_name = mva.name.attribute.value
        else if mva.nickname
          msg.recipient_name = mva.nickname.attribute.value
      if msg.signedData.attachments
        msg.attachments = []
        addAttachment = (attachment) ->
          if attachment.uri
            type = attachment.type or 'image'
            typeSubstr = attachment.type.substr(0,5)
            if typeSubstr in ['audio', 'video']
              msg.attachments.push Object.assign {type, typeSubstr}, attachment
              console.log msg.attachments
            else
              scope.ipfsGet(attachment.uri, {base64type: type}).then (src) ->
                msg.attachments.push Object.assign {src, type, typeSubstr}, attachment
        addAttachment(attachment) for attachment in msg.signedData.attachments
      # TODO: make sure message signature is checked
      i = undefined
      i = 0
      smallestIndex = 1000
      msg.authorArray = msg.getAuthorArray()
      for a in msg.authorArray
        msg.linkToAuthor = a unless msg.linkToAuthor
        index = Object.keys(window.irisLib.Attribute.getUniqueIdValidators()).indexOf(a.type)
        if index > -1 and index < smallestIndex
          smallestIndex = index
          msg.linkToAuthor = a
        else if !msg.author_name and a.type in ['name', 'nickname']
          msg.author_name = a.value
        i++
      i = 0
      smallestIndex = 1000
      msg.recipientArray = msg.getRecipientArray()
      for a in msg.recipientArray
        msg.linkToRecipient = a unless msg.linkToAuthor
        index = Object.keys(window.irisLib.Attribute.getUniqueIdValidators()).indexOf(a.type)
        if index > -1 and index < smallestIndex
          smallestIndex = index
          msg.linkToRecipient = a
        else if !msg.recipient_name and a.type in ['name', 'nickname']
          msg.recipient_name = a.value
        i++
      if msg.linkToAuthor.equals(msg.linkToRecipient)
        msg.sameAuthorAndRecipient = true
      if !msg.author_name
        msg.author_name = msg.linkToAuthor.value
        if msg.linkToAuthor.type in ['keyID', 'uuid']
          msg.author_name = msg.author_name.slice(0, 6) + '...'
      if !msg.recipient_name
        msg.recipient_name = msg.linkToRecipient.value
        if msg.linkToAuthor.type in ['keyID', 'uuid']
          msg.recipient_name = msg.recipient_name.slice(0, 6) + '...'
      alpha = undefined
      msg.bgColor = ''
      msg.iconCount = new Array(1)
      switch msg.signedData.type
        when 'verify_identity', 'verification'
          msg.iconStyle = 'glyphicon glyphicon-ok-sign'
          msg.isVerification = true
        when 'unverify_identity', 'unverification'
          msg.iconStyle = 'glyphicon glyphicon-remove negative'
          msg.bgColor = 'background-color: #FFF0DE;border-color:#FFE2C6;'
          msg.isUnverification = true
        when 'post'
          msg.iconStyle = '' # fa fa-pencil
          msg.isPost = true
        when 'rating'
          rating = msg.signedData.rating
          neutralRating = (msg.signedData.minRating + msg.signedData.maxRating) / 2
          maxRatingDiff = msg.signedData.maxRating - neutralRating
          minRatingDiff = msg.signedData.minRating - neutralRating
          if rating > neutralRating
            if msg.signedData.context == 'verifier'
              msg.iconStyle = 'fa fa-shield positive'
            else
              msg.iconStyle = 'glyphicon glyphicon-thumbs-up positive'
              msg.iconCount = if maxRatingDiff < 2 then msg.iconCount else new Array(Math.ceil(3 * rating / maxRatingDiff))
            alpha = (rating - neutralRating - 0.5) / maxRatingDiff / 1.25 + 0.2
            msg.bgColor = 'background-color: rgba(223,240,216,' + alpha + ');'
          else if rating < neutralRating
            msg.iconStyle = 'glyphicon glyphicon-thumbs-down negative'
            msg.iconCount = if minRatingDiff > -2 then msg.iconCount else new Array(Math.ceil(3 * rating / minRatingDiff))
            alpha = (rating - neutralRating + 0.5) / minRatingDiff / 1.25 + 0.2
            msg.bgColor = 'background-color:rgba(242,222,222,' + alpha + ');'
          else
            msg.bgColor = 'background-color: #fcf8e3;'
            msg.iconStyle = 'glyphicon glyphicon-question-sign neutral'

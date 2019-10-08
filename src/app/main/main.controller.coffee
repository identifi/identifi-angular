'use strict'
angular.module('irisAngular').controller 'MainController', [
  '$scope'
  '$rootScope'
  '$location'
  '$http'
  '$state'
  'config',
  'localStorageService'
  'clipboard'
  '$uibModal'
  '$window'
  '$stateParams'
  '$transitions'
  '$q'
  'focus'
  'NotificationService'
  ($scope, $rootScope, $location, $http, $state, config,
  localStorageService, clipboard, $uibModal, $window, $stateParams,
  $transitions, $q, focus, NotificationService) ->
    opt =
      peers: []
      localStorage: false
    unless $window.location.hostname == 'localhost' and $window.location.port == '3000'
      opt.peers = ['https://gun-us.herokuapp.com/gun', 'https://gun-eu.herokuapp.com/gun'] # 'https://gunmeetingserver.herokuapp.com/gun'
    if $window.location.protocol != "https:"
      opt.peers.push('http://localhost:8765/gun')
    $scope.isElectron = (userAgent.indexOf(' electron/') > -1)
    opt.store = RindexedDB(opt) unless $scope.isElectron
    $scope.gun = $window.irisGun = new Gun(opt)

    # TODO: move everything to main controller?
    # set authentication
    $scope.authentication = {} # Authentication

    $scope.openTime = new Date()
    $scope.notificationService = NotificationService

    $scope.trustDistanceComparator = (a, b) ->
      return 1 if a.type != 'number'
      return -1 if b.type != 'number'
      return a.value - b.value

    $scope.getIdUrl = (type, value) ->
      if $window.location.hostname.indexOf('.') > -1 # differentiate between localhost / chrome plugin uri and DNS name
        return $state.href('identities.show', {type, value}, {absolute: true})
      else
        return 'https://iris.to/' + $state.href('identities.show', {type, value})

    $scope.getIdKey = (id) ->
      return encodeURIComponent(id.type) + ':' + encodeURIComponent(id.value)

    $scope.defaultIndexKeyID = 'b8ByaYNBDCMLNdZqMdas5oUFLCxBf2VH3-NjUulDaTo.DVzINErRVs6m5tyjAux6fcNfndadcgZVN5hLSwYTCLc'
    $scope.query = {}
    $scope.query.term = ''
    $scope.previousSearchKey = ''
    $scope.ids =
      list: []
    $scope.msgs =
      list: []
      seen: {}

    $scope.ipfs = new Ipfs(
      init: true
      start: true
      repo: 'ipfs7-iris'
    )

    $scope.capitalizeWords = (s) ->
      if s and s.length
        return (s.trim().split(' ').map (word) -> word[0].toUpperCase() + word[1..-1].toLowerCase()).join ' '
      else
        return s

    $scope.copyToClipboard = (text, event) ->
      originalText = event.target.innerHTML
      originalWidth = event.target.offsetWidth
      originalStyleWidth = event.target.style.width
      clipboard.copyText text
      if event
        event.target.innerHTML = 'Copied'
        event.target.style.width = originalWidth + 'px'
        setTimeout ->
          event.target.innerHTML = originalText
          event.target.style.width = originalStyleWidth
        , 2000

    $scope.copyCurrentLocationToClipboard = (event) ->
      $scope.copyToClipboard 'https://iris.to' + $window.location.pathname + $window.location.hash, event

    $scope.search = (query, limit) ->
      return unless $scope.irisIndex
      q = query or $scope.query.term
      if q and q.trim().indexOf('https://iris.to/#/') == 0
        $window.location.href = q.replace('https://iris.to/', '')
        $scope.query.term = ''
        return
      $scope.ids.activeKey = -1
      $scope.ids.list = []
      searchKey = (query or $scope.query.term or '').toLowerCase().trim()
      $scope.searchKey = searchKey
      $scope.previousSearchKey = searchKey
      limit = limit or 10
      cursor = ''
      if $scope.ids.list.length
        cursor = $scope.ids.list[$scope.ids.list.length - 1].cursor
      seen = {}

      resultFound = (i) ->
        return if searchKey != $scope.searchKey
        i.gun.on (data) ->
          i.data = data
          i.gun.get('linkTo').on (linkTo) ->
            return if i.linkTo or !linkTo
            s = linkTo.type + linkTo.value
            return if seen[s]
            seen[s] = true
            $scope.ids.list.push i
            i.linkTo = linkTo
        $scope.setIdentityNames(i, true)

      $scope.irisIndex.search(searchKey, undefined, resultFound, limit, cursor)
      return new Promise (resolve) -> # TODO: uib-typeahead is limited, but something better pls
        setTimeout ->
          resolve($scope.ids.list)
        , 1000

    $scope.onChatMessage = (msg, info = {}, chat) ->
      return unless msg
      chat.seen = {} unless chat.seen
      return if msg.hash and chat.seen[msg.hash]
      chat.seen[msg.hash] = true
      msg = msg.signedData or msg
      msg.time = new Date(msg.time)
      chat.latest = msg if (chat.latest == 0 or msg.time > chat.latest.time)

      if !$state.is('chats.show', {value:chat.idValue}) and !info.selfAuthored
        if chat.myMsgsLastSeenTime or (chat.chat and chat.chat.myMsgsLastSeenTime)
          if new Date(chat.myMsgsLastSeenTime or chat.chat.myMsgsLastSeenTime) < msg.time
            chat.unreadMsgs++
        else if $scope.openTime < msg.time
          chat.unreadMsgs++

      shouldNotify = () ->
        if $scope.localSettings.hasOwnProperty(chat.idValue) and $scope.localSettings[chat.idValue].muted
          return false
        if info.selfAuthored
          return false
        if $state.is('chats.show', {value:chat.idValue}) and not document.hidden
          return false
        if chat.myMsgsLastSeenTime or (chat.chat and chat.chat.myMsgsLastSeenTime)
          if new Date(chat.myMsgsLastSeenTime or chat.chat.myMsgsLastSeenTime) >= msg.time
            return false
        else if $scope.openTime >= msg.time
          return false
        return true
      if shouldNotify()
        NotificationService.create
          type: 'chat'
          from: if typeof msg.author == 'string' then msg.author else ''
          text: msg.text
          onClick: () ->
            $state.go 'chats.show', { type: chat.idType, value: chat.idValue }

    $scope.getPrivateChat = (chat) ->
      o = new $window.irisLib.Chat
        onMessage: (msg, info) -> $scope.onChatMessage(msg, info, chat)
        key: $scope.privateKey
        gun: $scope.gun
        participants: chat.idValue
      o.getMyMsgsLastSeenTime()
      return o

    setIndex = (i) ->
      i.setOnline(true) if i.writable
      i.ready.then ->
        $scope.ids.list = []
        $scope.msgs.list = []
        $scope.msgs.seen = {}
        $scope.irisIndex = i
        setTimeout -> # for some reason, dist version fails to show messages and identities without this
          $scope.search()
          $scope.showMoreMsgs()
        , 1000
        $scope.trustedIndexes = []
        $scope.chats = []
        $scope.chatKeys = {}
        if i.writable
          $scope.irisIndex.gun.user().get('iris').get('chatMessagesByUuid').map().on (node, key) ->
            return if $scope.chatKeys['uuid' + key]
            $scope.chatKeys['uuid' + key] = true
            chat =
              idValue: key
              idType: 'uuid'
              latest: 0
              unreadMsgs: 0
            $scope.irisIndex.gun.user().get('iris').get('chatMessagesByUuid').get(key).get('msgsLastSeenTime').on (time) ->
              chat.myMsgsLastSeenTime = new Date(time)
            $scope.$apply ->
              identity = $scope.irisIndex.get('uuid', key)
              $scope.setIdentityNames identity
              Object.assign chat, {identity}
              $scope.chats.push chat
              onMessage = (msg, info) ->
                $scope.$apply ->
                  msg.getHash()
                  $scope.onChatMessage(msg, info, chat)
              $scope.irisIndex.getChatMsgs(key, {callback: onMessage})
          timeout = 0
          $scope.irisIndex.gun.user().get('chat').map().on (node, key) ->
            return if $scope.chatKeys['keyID' + key]
            $scope.chatKeys['keyID' + key] = true
            setTimeout ->
              $scope.$apply ->
                identity = $scope.irisIndex.get('keyID', key)
                $scope.setIdentityNames identity
                chat =
                  idValue: key
                  idType: 'keyID'
                  identity: identity
                  latest: 0
                  unreadMsgs: 0
                chat.chat = $scope.getPrivateChat(chat)
                $scope.chats.push(chat)
            , timeout # TODO lol fix
            timeout = timeout + 500
        $scope.irisIndex.gun.get('trustedIndexes').open (r) ->
          for k, v of r
            $scope.trustedIndexes.push
              index: k
              attribute: new $window.irisLib.Attribute('keyID', k)
              identity: $scope.irisIndex.get('keyID', k)
        setTimeout () ->
          $scope.$broadcast('rzSliderForceRender')
        , 1000
        setTimeout () ->
          $scope.$broadcast('rzSliderForceRender')
        , 3000 # :---D
        setTimeout () ->
          $scope.$broadcast('rzSliderForceRender')
        , 5000 # :---D
        console.log 'Got index', $scope.irisIndex
        $scope.viewpoint.identity = $scope.irisIndex.get($scope.viewpoint.type, $scope.viewpoint.value)
        $scope.setIdentityNames($scope.viewpoint.identity)
        $scope.viewpoint.identity.gun.get('attrs').open (attrs) ->
          $scope.viewpoint.attrs = attrs
          $scope.viewpoint.mostVerifiedAttributes = $window.irisLib.Identity.getMostVerifiedAttributes(attrs)

    $scope.loadDefaultIndex = ->
      $scope.irisIndex = null
      $scope.viewpoint = {type: 'keyID', value: $scope.defaultIndexKeyID}
      i = new $window.irisLib.Index({gun: $scope.gun, pubKey: $scope.defaultIndexKeyID, ipfs: $scope.ipfs})
      setIndex(i)

    $scope.loginWithKey = (privateKeySerialized, self, previouslyExisting) ->
      $scope.irisIndex = null
      $scope.loggingIn = true
      $scope.privateKey = $window.irisLib.Key.fromString(privateKeySerialized)
      $scope.loginModal.close() if $scope.loginModal
      $scope.readQRModal.close() if $scope.readQRModal
      localStorageService.set('irisKey', privateKeySerialized)
      p = Promise.resolve()
      if previouslyExisting # hack to fix index overwrite bug https://github.com/irislib/iris-angular/issues/3
        p = new Promise (resolve) ->
          resolved = false
          a = new $window.irisLib.Attribute('keyID', $scope.privateKey.pub)
          $scope.gun.user($scope.privateKey.pub).get('iris').get('identitiesBySearchKey').get(a.uri()).on (data) ->
            if data
              resolved = true
              resolve()
          setTimeout ->
            unless resolved
              console.log('previously used index was not found,',
              'may cause overwrite issue https://github.com/irislib/iris-angular/issues/3')
              resolve()
          , 5000
      p.then ->
        $scope.authentication.user =
          idType: 'keyID'
          idValue: $window.irisLib.Key.getId($scope.privateKey)
        $scope.authentication.user.url = $scope.getIdUrl 'keyID', $scope.authentication.user.idValue
        keyID = $window.irisLib.Key.getId($scope.privateKey)
        $scope.viewpoint = {type: 'keyID', value: keyID}
        $scope.ids.list = []
        $scope.msgs.list = []
        $scope.msgs.seen = {}
        i = new $window.irisLib.Index({gun: $scope.gun, keypair: $scope.privateKey, self, ipfs: $scope.ipfs, debug: true})
        setIndex(i)
        i.ready.then ->
          $scope.loggingIn = false
          $scope.authentication.identity = $scope.irisIndex.get('keyID', keyID)
          $scope.authentication.identity.gun.get('attrs').open (val, key, msg, eve) ->
            mva = $window.irisLib.Identity.getMostVerifiedAttributes(val)
            $scope.authentication.identity.mva = mva
            eve.off() if mva.profilePhoto
          startAt = new Date()
          $scope.authentication.identity.gun.get('received').map().once (m) ->
            return if m.pubKey == $scope.viewpoint.value
            console.log 'you got a msg'
            $window.irisLib.Message.fromSig(m).then (msg) ->
              if new Date(msg.signedData.timestamp) > startAt
                author = msg.getAuthor($scope.irisIndex)
                $scope.setIdentityNames(author).then (name) ->
                  NotificationService.create
                    type: 'post'
                    from: name
                    text: "#{name} public messaged you!"
                    onClick: () ->
                      $state.go 'identities.show', { type: $scope.authentication.user.idType, value: $scope.authentication.user.idValue }
          $scope.authentication.identity.gun.on (data) ->
            if data.receivedPositive and $scope.authentication.identity.data and not $scope.authentication.identity.data.receivedPositive
              console.log 'great, you got your first upvote!'
              # TODO: notification
            $scope.authentication.identity.data = data

    privateKey = localStorageService.get('irisKey') or localStorageService.get('identifiKey')
    if privateKey
      $scope.loginWithKey(privateKey)
    else
      $scope.loadDefaultIndex()

    $scope.openChatModal = () ->
      $scope.openModal 'chatModal', { templateUrl: 'app/identities/chat.modal.html', size: 'md' }

    $scope.openVideoChatModal = () ->
      $scope.openModal 'videoChatModal', { templateUrl: 'app/identities/video.modal.html', size: 'md' }

    $scope.openReadQRModal = () ->
      $scope.openModal 'readQRModal', { templateUrl: 'app/identities/readqr.modal.html', size: 'md' }

    $scope.updateIpfsPeers = () ->
      $scope.ipfs.swarm.peers (err, peerInfos) ->
        if err
          console.error 'failed to fetch ipfs peers', err
        else
          $scope.$apply ->
            $scope.ipfsPeers = peerInfos if Array.isArray(peerInfos)

    $scope.ipfs.on 'ready', ->
      $scope.ipfsReady = true
      $window.ipfs = $scope.ipfs
      $scope.updateIpfsPeers()
      setInterval $scope.updateIpfsPeers, 5000

    $scope.localSettings = localStorageService.get('localSettings') || {}

    $scope.saveLocalSetting = (key, value) ->
      $scope.localSettings[key] = value
      localStorageService.set('localSettings', $scope.localSettings)

    $scope.closeProfileUploadNotification = ->
      $scope.saveLocalSetting 'profileUploadNotificationClosed', true

    $scope.openProfilePhotoUploadModal = ->
      return unless $scope.authentication.identity
      $scope.openUploadModal($scope.uploadProfilePhoto, 'Upload profile photo', true)

    $scope.uploadProfilePhoto = (blob) ->
      $scope.uploadFile(blob).then (files) ->
        recipient =
          profilePhoto: '/ipfs/' + files[0].path
        if $state.is 'identities.show'
          recipient[$stateParams.type] = $stateParams.value
        else
          recipient.keyID = $scope.authentication.user.idValue
          $scope.closeProfileUploadNotification()
        $window.irisLib.Message.createVerification({recipient}, $scope.privateKey).then (m) ->
          $scope.hideProfilePhoto = true # There's a weird bug where the profile identicon doesn't update
          $scope.irisIndex.addMessage(m).then ->
            $scope.hideProfilePhoto = false
            if !$state.is 'identities.show'
              $state.go 'identities.show', { type: $scope.authentication.user.idType, value: $scope.authentication.user.idValue }
          $scope.uploadModal.close()

    $scope.setPageTitle = (title) ->
      $rootScope.pageTitle = 'Iris'
      if (title)
        $rootScope.pageTitle += ' - ' + title

    $scope.ipfsGet = (uri, options = {}) ->
      return new Promise (resolve) ->
        go = ->
          $scope.ipfs.cat(uri).then (file) ->
            file = $scope.ipfs.types.Buffer(file)
            if options.getJson
              file = JSON.parse(file.toString())
            if options.base64type
              file = 'data:' + options.base64type + ';base64,' + file.toString('base64')
            resolve file

        if $scope.ipfsReady
          go()
        else
          $scope.ipfs.on 'ready', ->
            go()

    $scope.$watch 'newMessage.rating', (rating) ->
      if rating > 0
        alpha = (rating - 0.5) / 3 / 1.25 + 0.2
        $scope.newMessage.style = {'border-color': 'rgba(223,240,216,' + alpha + ')'}
      else if rating < 0
        alpha = (rating + 0.5) / -3 / 1.25 + 0.2
        $scope.newMessage.style = {'border-color': 'rgba(242,222,222,' + alpha + ')'}
      else
        $scope.newMessage.style = {'border-color': '#fcf8e3'}

    $scope.resetMsg = ->
      $scope.newMessage =
        rating: 1
        comment: ''
        files: []
      $scope.newVerification =
        type: ''
        value: ''
    $scope.resetMsg()

    $scope.vote = (msg, vote) ->
      console.log 'vote added'
      $scope.createMessage(null, {type: 'vote', replyTo: msg.getHash(), vote})

    # Create new Message
    $scope.createMessage = (event, msg, options = {}) ->
      $scope.addingMessage = true
      event.stopPropagation() if event
      delete msg.pollOptions if msg.pollOptions == false

      fileUploads = []
      if options.files # upload to ipfs
        msg.attachments = []
        addFile = (file) ->
          $scope.uploadFile(file).then (res) ->
            if res and res.length and res.length > 0 and res[0].path
              msg.attachments.push
                uri: '/ipfs/' + res[0].path
                size: file.size
                type: file.type
                name: file.name
        fileUploads.push addFile(file) for file in options.files

      Promise.all(fileUploads).then ->
        console.log 'msg.attachments', msg.attachments
        # Create new Message object
        message = null
        delete msg.files if msg.files
        if $state.is 'identities.show'
          msg.recipient = msg.recipient || {}
          if options.verifiedAttr and $stateParams.type == options.verifiedAttr.type
            msg.recipient[$stateParams.type] = [$stateParams.value, options.verifiedAttr.value]
          else
            msg.recipient[$stateParams.type] = $stateParams.value
            msg.recipient[options.verifiedAttr.type] = options.verifiedAttr.value if options.verifiedAttr
        if msg.type == 'rating'
          msg.maxRating |= 3
          msg.minRating |= -3
          message = $window.irisLib.Message.createRating(msg, $scope.privateKey)
        else if msg.type == 'verification'
          message = $window.irisLib.Message.createVerification(msg, $scope.privateKey)
        else
          message = $window.irisLib.Message.create(msg, $scope.privateKey)

        message.then (m) ->
          $scope.irisIndex.addMessage(m)
          $scope.msgs.seen[m.getHash()] = true
          $scope.processMessages([m])
        .then (messages) ->
          $scope.msgs.list.push(messages[0])
          if options.addTo and not options.addTo.seen[messages[0].getHash()]
            options.addTo.list.push messages[0]
            options.addTo.seen[messages[0].getHash()] = true
          if $scope.filters.type not in [msg.type, null]
            $scope.filters.type = msg.type
          $scope.resetMsg() # why not resetting uploaded files? D:
          options.files = [] if options.files
          $scope.addingMessage = false
          return message
        .catch (e) ->
          console.error(e)
          $scope.error = e
          $scope.addingMessage = false
          return message

    $scope.addAttribute = ->
      $location.path '#/identities/create/' + $scope.query.term

    $scope.login = ->
      $scope.filters.maxDistance = -1 # because the user doesn't have a trust index yet

    $scope.openModal = (modalName, options) ->
      options = Object.assign {size: 'md', animation: true, scope: $scope}, options
      $scope[modalName] = $uibModal.open(options)
      $scope[modalName].result.then (->), (->) # avoid backdrop rejection console error
      $scope[modalName].rendered.then ->
        document.activeElement.blur()
        focus(options.focusTo) if options.focusTo
      $transitions.onStart {}, ->
        $scope[modalName].close()

    $scope.openLoginModal = ->
      $scope.openModal('loginModal', {templateUrl: 'app/main/login.modal.html', focusTo: 'newUser'})

    $scope.openUploadModal = (callback, modalButtonText, squarify) ->
      $scope.uploadModalCallback = callback
      $scope.modalButtonText = modalButtonText or 'Upload'
      $scope.squarify = squarify
      $scope.openModal('uploadModal', {templateUrl: 'app/identities/upload.modal.html'})

    $scope.msgs.list = []
    $scope.msgs.seen = {}
    $scope.filteredMsgs = []
    $scope.showMoreMsgs = (cursor) ->
      limit = 20 # 10
      if cursor == undefined and $scope.msgs.last
        cursor = $scope.msgs.last
      console.log 'cursor', cursor
      found = 0
      $scope.loadingMsgs = true
      filter = false
      ###
      if $scope.filters.type == null
        filter = (m) ->
          r = m.signedData.type not in ['verification', 'unverification']
          console.log 'filterin', r
          return r
      else
        t = $scope.filters.type.split(':')[0]
        filter = (m) ->
          r = m.signedData.type == t
          console.log 'filterin', r
          return r
      ###
      resultFound = (msg) ->
        found += 1
        $scope.loadingMsgs = false if found >= limit
        return if $scope.msgs.seen[msg.getHash()]
        $scope.msgs.last = msg.signedData.timestamp if !$scope.msgs.last or msg.signedData.timestamp < $scope.msgs.last
        $scope.msgs.seen[msg.getHash()] = true
        $scope.processMessages [msg]
        $scope.$apply ->
          $scope.msgs.list.push msg

      $scope.filters.limit += limit
      if $scope.filters.limit > $scope.filteredMsgs.length
        $scope.irisIndex.getMessagesByTimestamp(resultFound, undefined, cursor)

    $scope.uploadFile = (blob) ->
      return new Promise (resolve, reject) ->
        fileReader = new FileReader()
        fileReader.onload = (event) ->
          buffer = $scope.ipfs.types.Buffer.from(event.target.result)
          $scope.ipfs.add buffer, (err, files) ->
            if err
              reject('adding to ipfs failed', err)
            else
              resolve(files)
              console.log 'done:', err, files
        fileReader.readAsArrayBuffer(blob)

    $scope.createUser = (name) ->
      return if name.indexOf('{') != -1 or name.indexOf('}') != -1 # prevent accidental private key paste
      name = name.trim()
      $scope.creatingUser = true
      self = {name}
      $window.irisLib.Key.generate()
      .then (key) ->
        $scope.privateKey = key
        $scope.privateKeySerialized = $window.irisLib.Key.toString($scope.privateKey)
        self.keyID = $window.irisLib.Key.getId($scope.privateKey)
        $scope.loginWithKey($scope.privateKeySerialized, self)
      .then (msg) ->
        $scope.creatingUser = false
        $scope.createMessage undefined,
          type: 'rating'
          rating: 1
          text: 'Trusted by default as a web of trust entry point.'
          recipient:
            keyID: $scope.defaultIndexKeyID
            name: 'Iris'
      .catch (e) ->
        console.error('failed to create user:', e)
        $scope.creatingUser = false

    $scope.generateKey = ->
      $window.irisLib.Key.generate().then (key) ->
        $scope.$apply ->
          $scope.privateKey = key
          $scope.privateKeySerialized = $window.irisLib.Key.toString($scope.privateKey)

    $scope.download = (filename, data, type, charset = 'utf-8', href) ->
      hiddenElement = document.createElement('a')
      hiddenElement.href = href or "data:#{type};charset=#{charset},#{encodeURI(data)}"
      hiddenElement.target = '_blank'
      hiddenElement.download = filename
      hiddenElement.click()

    $scope.downloadText = (text) ->
      $scope.download('iris_private_key.txt', text, 'text/csv', 'utf-8')

    $scope.openLogoutModal = ->
      $scope.openModal('logoutModal', {templateUrl: 'app/main/logout.modal.html'})

    $scope.logout = ->
      $scope.irisIndex.setOnline(false)
      $scope.filters.maxDistance = 0
      $scope.privateKeySerialized = ''
      $scope.authentication = {}
      localStorageService.clearAll()
      $state.go('identities.list')
      $scope.privateKey = null
      $scope.publicKey = null
      $scope.logoutModal.close()
      $scope.loadDefaultIndex()
      $scope.localSettings = {}

    $scope.msgFilter = (msg, index, array) ->
      data = msg.signedData
      return false if msg.signedData.replyTo
      if $scope.filters.type
        if $scope.filters.type.match /^rating/
          if data.type != 'rating'
            return false
          neutralRating = (data.maxRating + data.minRating) / 2
          if $scope.filters.type == 'rating:positive' and data.rating <= neutralRating
            return false
          else if $scope.filters.type == 'rating:negative' and data.rating >= neutralRating
            return false
          else if $scope.filters.type == 'rating:neutral' and data.rating != neutralRating
            return false
        else if $scope.filters.type == 'verification'
          return data.type in ['verification', 'unverification']
        else if data.type != $scope.filters.type
          return false
      if $scope.filters.maxDistance > -1
        if typeof msg.authorTrustDistance != 'number'
          return false
        if $scope.filters.maxDistance > 0 and msg.authorTrustDistance > $scope.filters.maxDistance
          return false
        if $scope.filters.maxDistance == 0 and msg.authorTrustDistance == 99
          return false
      return true

    $scope.setMsgRawData = (msg) ->
      showRawData =
        hash: msg.hash
        data: msg.signedData
        priority: msg.priority
        jws: msg.jws
      msg.strData = JSON.stringify(showRawData, undefined, 2)

    $scope.shareMessage = (msg, comment) ->
      $scope.createMessage(null, { type: 'post', sharedMsg: msg.getHash(), comment }).then (r) ->
        msg.shares = msg.shares or {}
        msg.shares[r.getHash()] = r
        msg.sharesArr = msg.sharesArr or []
        msg.sharesArr.push(r)
      $scope.shareModal.close()

    $scope.msgUtils =
      like: (msg) ->
        if msg.liked
          msg.liked = false
          msg.likes = if msg.likes then msg.likes - 1 else 0
          $scope.irisIndex.setReaction(msg, null)
        else
          msg.liked = true
          msg.likes = if msg.likes then msg.likes + 1 else 1
          $scope.irisIndex.setReaction(msg, 'like')
      share: (msg) ->
        $scope.message = msg
        $scope.openModal 'shareModal', { templateUrl: 'app/messages/share.modal.html', size: 'md' }
      replyTo: (msg, reply) ->
        $scope.createMessage(null, {
          type: 'post',
          replyTo: msg.getHash()
          comment: reply
        }).then (r) ->
          msg.replies = msg.replies or {}
          msg.replies[r.getHash()] = r
          msg.repliesArr = msg.repliesArr or []
          msg.repliesArr.push(r)

    $scope.openMessage = (event, message, size) ->
      event.stopPropagation() if event
      t = event.target
      return if angular.element(t).closest('a').length
      $scope.setMsgRawData(message)
      $scope.message = message
      # TODO: check sig
      if message.signedData.recipient
        $scope.message.recipient = $scope.message.getRecipient($scope.irisIndex)
        $scope.message.recipient.gun.get('attrs').open (d) ->
          mva = $window.irisLib.Identity.getMostVerifiedAttributes(d)
          if mva.name
            $scope.$apply -> $scope.message.recipient_name = mva.name.attribute.value
          else if mva.nickname
            $scope.$apply -> $scope.message.recipient_name = mva.nickname.attribute.value
      $scope.message.signerKeyID = $scope.message.getSignerKeyID()
      $scope.message.verifiedBy = $scope.irisIndex.get('keyID', $scope.message.signerKeyID)
      $scope.message.verifiedByAttr = new $window.irisLib.Attribute('keyID', $scope.message.signerKeyID)
      $scope.openModal('chatModal', {templateUrl: 'app/messages/show.modal.html', size})

    unless $scope.filters
      $scope.filters = Object.assign {}, config.defaultFilters

    $scope.isCollapsed = false
    # $scope.menu = Menus.getMenu('topbar')

    $scope.toggleCollapsibleMenu = ->
      $scope.isCollapsed = !$scope.isCollapsed

    $scope.processMessages = (messages, msgOptions = {}, options = {}) ->
      angular.forEach messages, (msg, key) ->
        msg[k] = v for k, v of msgOptions
        msg.author = msg.getAuthor($scope.irisIndex)
        msg.author.gun.get('trustDistance').on (d) -> msg.authorTrustDistance = d
      return messages

    scrollTo = (el) ->
      if !el
        return
      pos = el.getBoundingClientRect()
      if pos.top
        if pos.top - 60 < $window.pageYOffset
          $window.scrollTo 0, pos.top - 60
        else if pos.bottom > $window.pageYOffset + ($window.innerHeight or document.documentElement.clientHeight)
          $window.scrollTo 0, pos.bottom - ($window.innerHeight or document.documentElement.clientHeight) + 15
      return

    # should be moved to iris-lib?
    $scope.setIdentityNames = (i, htmlSafe, setTitle) ->
      i.wellVerified = false
      return new Promise (resolve) ->
        i.gun.get('attrs').open (attrs) ->
          $scope.$apply ->
            mva = $window.irisLib.Identity.getMostVerifiedAttributes(attrs)
            if mva.name
              i.primaryName = mva.name.attribute.value
              i.hasProperName = true
              i.wellVerified = true if mva.name.wellVerified
            else if mva.nickname
              i.primaryName = mva.nickname.attribute.value
              i.hasProperName = true
            else
              a = Object.values(attrs)[0]
              i.primaryName = a.value
              i.primaryName = i.primaryName.slice(0,6) + '...' if a.type in ['keyID', 'uuid']
            if i.primaryName
              if mva.nickname and mva.nickname.attribute.value != i.primaryName
                i.nickname = mva.nickname.attribute.value
                i.nickname = i.nickname.replace('<', '&lt;') if htmlSafe
              i.primaryName = i.primaryName.replace('<', '&lt;') if htmlSafe
            $scope.setPageTitle i.primaryName if setTitle
            resolve i.primaryName

    $scope.searchKeydown = (event) ->
      switch (if event then event.which else -1)
        when 38
          event.preventDefault()
          if $scope.ids.activeKey > -1
            $scope.addEntryActive = false
            $scope.ids.activeKey--
            id = if $scope.ids.activeKey > -1 then 'result' + $scope.ids.activeKey else 'createIdRow'
            document.getElementById(id).scrollIntoView()
        when 40
          event.preventDefault()
          if ($scope.ids.activeKey < ($scope.ids.list.length) - 1) and $scope.ids.activeKey < $scope.filters.limit
            $scope.ids.activeKey++
          document.getElementById('result' + $scope.ids.activeKey).scrollIntoView()
        when 13
          event.preventDefault()
          if $scope.ids.activeKey == -1
            $state.go 'identities.create'
          else
            document.getElementById('result' + $scope.ids.activeKey).click()
        when -1
          clearTimeout $scope.timer
          $scope.query.term = ''
          $scope.search()
        when 33, 34, 35, 36, 37, 39
        else
          el = angular.element(event.currentTarget)
          clearTimeout $scope.timer
          wait = setTimeout((->
            $scope.query.term = el.val()
            $scope.search()
            return
          ), 300)
          $scope.timer = wait
          break

    $scope.dropdownSearchSelect = (item) ->
      $state.go('identities.show', { type: item.linkTo.type, value: item.linkTo.value })
      $scope.query.term = ''

    $scope.addGunPeer = (url) ->
      $scope.gun.opt({peers: [url]}); # TODO: validate url

    $scope.removeGunPeer = (url) ->
      peer = $scope.gun._.opt.peers[url] # get the peer you want
      peer.url = peer.id = null # this prevents reconnecting to URL
      peer.wire.close() # if websocket interface
      delete $scope.gun._.opt.peers[url] # remove from peer list

    $scope.addIpfsPeer = (url) ->
      $scope.ipfs.bootstrap.add url
      $scope.ipfs.swarm.connect(url).then ->
        $scope.updateIpfsPeers()

    $scope.addDefaultIpfsPeers = ->
      $scope.ipfs.bootstrap.add('', {default: true}).then -> # TODO: errors
        $scope.updateIpfsPeers()

    $scope.removeIpfsPeer = (url) ->
      $scope.ipfs.bootstrap.rm url
      $scope.ipfs.swarm.disconnect(url).then ->
        $scope.updateIpfsPeers()

    $scope.onVideoError = (error) ->
      console.error 'video error', error

    $scope.muteChat = (key) ->
      muted = !($scope.localSettings.hasOwnProperty(key) and $scope.localSettings[key].muted)
      $scope.saveLocalSetting key, {muted}
      console.log $scope.localSettings

    $scope.desktopNotificationsAvailable = !!window.Notification
    $scope.notificationsPermitted = window.Notification and Notification.permission == 'granted'
    NotificationService.desktopNotificationsDisabled = $scope.localSettings.desktopNotificationsDisabled
    NotificationService.audioNotificationsDisabled = $scope.localSettings.audioNotificationsDisabled

    $scope.setAudioNotificationsDisabled = (disabled) ->
      $scope.saveLocalSetting('audioNotificationsDisabled', disabled)
      NotificationService.audioNotificationsDisabled = disabled

    $scope.setDesktopNotificationsDisabled = (disabled) ->
      $scope.saveLocalSetting 'desktopNotificationsDisabled', disabled
      $scope.saveLocalSetting('desktopNotificationsNotNow', false) if disabled
      NotificationService.desktopNotificationsDisabled = disabled
      if !disabled
        if window.Notification
          Notification.requestPermission (status) ->
            $scope.$apply ->
              $scope.notificationsPermitted = status == 'granted'
              $scope.enableNotificationsFailed = !$scope.notificationsPermitted
        else
          $scope.enableNotificationsFailed = true
]

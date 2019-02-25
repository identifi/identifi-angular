'use strict'
# Identities controller
angular.module('identifiAngular').controller 'IdentitiesController', [
  '$scope'
  '$state'
  '$rootScope'
  '$window'
  '$stateParams'
  '$transitions'
  '$location'
  '$http'
  '$q'
  '$timeout'
  '$uibModal'
  # 'Authentication'
  'config'
  'localStorageService'
  'focus'
  ($scope, $state, $rootScope, $window, $stateParams, $transitions, $location, $http, $q, $timeout, $uibModal, config,
  localStorageService, focus) -> #, Authentication
    $scope.newEntry = {}
    $scope.activeTab = 1
    $scope.activateTab = (tabId) -> $scope.activeTab = tabId
    $scope.sent = []
    $scope.received = []
    $scope.attributes = {}
    thumbsUpObj = {}
    thumbsDownObj = {}
    $scope.thumbsUp = []
    $scope.thumbsDown = []
    $scope.verifications = []
    $scope.query.term = $stateParams.search if $stateParams.search
    $scope.newVerification =
      type: ''
      value: ''
    $scope.collapseLevel = {}
    $scope.collapseFilters = $window.innerWidth < 992
    $scope.slider =
      options:
        floor: -3
        ceil: 3
        hidePointerLabels: true
        hideLimitLabels: true

    $scope.share = true if $location.search().share

    if $scope.query.term.length and $state.is 'identities.list'
      $scope.query.term = ''
      $scope.search()

    if $state.is 'identities.show'
      $scope.filters.maxDistance = 0

    $scope.addEntry = (event, entry) ->
      if entry.email
        linkTo = {type:'email', value: entry.email}
      else if entry.url
        linkTo = {type:'url', value: entry.url}
      else
        linkTo = $window.identifiLib.Attribute.getUuid()
        entry.uuid = linkTo.value
      params =
        type: 'verification'
        recipient: entry
      $scope.createMessage(event, params).then (response) ->
        $state.go 'identities.show', linkTo
      , (error) ->
        console.log "error", error

    $scope.guessAttributeType = ->
      if $scope.newVerification.value.length
        $scope.newVerification.type = $window.identifiLib.Attribute.guessTypeOf($scope.newVerification.value)
        unless $scope.newVerification.type
          unless $scope.newVerification.value.match /\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\,|\.|\>|\?|\/|\""|\;|\:/
            $scope.newVerification.type = 'name'
      else
        $scope.newVerification.type = ''

    $scope.addName = (name) ->
      if name
        recipient = {name}
        recipient[$scope.idType] = $scope.idValue
        $window.identifiLib.Message.createVerification({recipient}, $scope.privateKey).then (m) ->
          $scope.identifiIndex.addMessage(m)
        $scope.nameAdded = true
      else
        $scope.addingName = true
        focus('addNameFocus')

    $scope.getAttributes = ->
      $scope.identity.gun.get('attrs').open (attrs) ->
        console.log attrs
        connections = attrs or []
        if connections.length > 0
          c = connections[0]
          mostConfirmations = c.conf
        else
          mostConfirmations = 1
        $scope.attributes = Object.values(connections).sort (a, b) ->
          (b.conf - 2 * b.ref) - (a.conf - 2 * a.ref)
        for a in $scope.attributes
          return unless a.type and a.value
          a.attr = new $window.identifiLib.Attribute(a.type, a.value)
          a.isCurrent = new $window.identifiLib.Attribute($scope.idType, $scope.idValue).equals(a.attr)
          switch a.type
            when 'email'
              a.iconStyle = 'glyphicon glyphicon-envelope'
              a.btnStyle = 'btn-success'
              a.link = 'mailto:' + a.value
              a.quickContact = true
            when 'bitcoin_address', 'bitcoin'
              a.iconStyle = 'fa fa-bitcoin'
              a.btnStyle = 'btn-primary'
              a.link = 'https://blockchain.info/address/' + a.value
              a.quickContact = true
            when 'gpg_fingerprint', 'gpg_keyid'
              a.iconStyle = 'fa fa-key'
              a.btnStyle = 'btn-default'
              a.link = 'https://pgp.mit.edu/pks/lookup?op=get&search=0x' + a.value
            when 'account'
              a.iconStyle = 'fa fa-at'
            when 'nickname'
              $scope.identity.hasProperName = true
              a.iconStyle = 'glyphicon glyphicon-font'
            when 'name'
              $scope.identity.hasProperName = true
              a.iconStyle = 'glyphicon glyphicon-font'
            when 'tel', 'phone'
              a.iconStyle = 'glyphicon glyphicon-earphone'
              a.btnStyle = 'btn-success'
              a.link = 'tel:' + a.value
              a.quickContact = true
            when 'keyID'
              a.iconStyle = 'fa fa-key'
            when 'coverPhoto'
              if a.value.match /^\/ipfs\/[1-9A-Za-z]{40,60}$/
                $scope.ipfsGet(a.value).then (coverPhoto) ->
                  $scope.coverPhoto = $scope.coverPhoto or { 'background-image': 'url(data:image;base64,' + coverPhoto.toString('base64') + ')' }
            when 'url'
              a.link = a.value
              if a.value.indexOf('facebook.com/') > -1
                a.iconStyle = 'fa fa-facebook'
                a.btnStyle = 'btn-facebook'
                a.link = a.value
                a.linkName = a.value.split('facebook.com/')[1]
                a.quickContact = true
              else if a.value.indexOf('twitter.com/') > -1
                a.iconStyle = 'fa fa-twitter'
                a.btnStyle = 'btn-twitter'
                a.link = a.value
                a.linkName = a.value.split('twitter.com/')[1]
                a.quickContact = true
              else if a.value.indexOf('plus.google.com/') > -1
                a.iconStyle = 'fa fa-google-plus'
                a.btnStyle = 'btn-google-plus'
                a.link = a.value
                a.linkName = a.value.split('plus.google.com/')[1]
                a.quickContact = true
              else if a.value.indexOf('linkedin.com/') > -1
                a.iconStyle = 'fa fa-linkedin'
                a.btnStyle = 'btn-linkedin'
                a.link = a.value
                a.linkName = a.value.split('linkedin.com/')[1]
                a.quickContact = true
              else if a.value.indexOf('github.com/') > -1
                a.iconStyle = 'fa fa-github'
                a.btnStyle = 'btn-github'
                a.link = a.value
                a.linkName = a.value.split('github.com/')[1]
                a.quickContact = true
              else
                a.iconStyle = 'glyphicon glyphicon-link'
                a.btnStyle = 'btn-default'
          if a.value and a.value.match /^\/ipfs\/[1-9A-Za-z]{40,60}$/
            a.link = 'https://ipfs.io' + a.value
            a.linkName = a.value
            a.iconStyle = 'glyphicon glyphicon-link'
            a.btnStyle = 'btn-default'
          if a.conf + a.ref > 0
            percentage = a.conf * 100 / (a.conf + a.ref)
            if percentage >= 80
              alpha = a.conf / mostConfirmations * 0.7 + 0.3
              # a.rowStyle = 'background-color: rgba(223,240,216,' + alpha + ')'
            else if percentage >= 60
              a.rowClass = 'warning'
            else
              a.rowClass = 'danger'
          $scope.hasQuickContacts = $scope.hasQuickContacts or a.quickContact
        $scope.attributesLength = Object.keys($scope.attributes).length


    $scope.getConnectingMsgs = (id1, id2) ->
      getVerifications = $q (resolve) ->
        if !$scope.verifications.length
          if $scope.receivedIndex
            $scope.receivedIndex.searchText('', 10000, false, true).then (res) ->
              res.forEach (row) ->
                msg = $window.identifiLib.Message.fromJws(row.value.jws)
                if (msg.signedData.type in ['verify_identity', 'verification', 'unverify_identity', 'unverification'])
                  msg.linkToAuthor = msg.signedData.author[0]
                  $scope.verifications.push msg
              resolve()
          else
            resolve()
        else
          resolve()
      getVerifications.then ->
        msgs = []
        $scope.verifications.forEach (msg) ->
          hasId1 = hasId2 = false
          for id in msg.signedData.recipient
            return msgs.push msg if id.type == id2.type and id.value == id2.value
        return msgs

    $scope.connectionClicked = (event, id) ->
      if id.connecting_msgs
        id.collapse = !id.collapse
      else
        $scope.getConnectingMsgs([$scope.idType, $scope.idValue], id).then (msgs) ->
          id.connecting_msgs = msgs
          id.collapse = !id.collapse

    $scope.getSentMsgs = ->
      return unless $scope.identity and $scope.identifiIndex
      $scope.sent = []
      cursor = if $scope.sent.length then $scope.sent[$scope.sent.length - 1].cursor else ''
      resultFound = (msg) ->
        $scope.processMessages [msg], { authorIsSelf: true }
        $scope.sent.push msg

      $scope.identifiIndex.getSentMsgs($scope.identity, resultFound)

    $scope.getReceivedMsgs = ->
      return unless $scope.identity and $scope.identifiIndex
      $scope.received = []
      cursor = if $scope.received.length then $scope.received[$scope.received.length - 1].cursor else ''
      resultFound = (msg) ->
        $scope.processMessages [msg], { recipientIsSelf: true }
        $scope.$apply ->
          if msg.isPositive()
            if $scope.thumbsUp.length < 12 and not thumbsUpObj[JSON.stringify(msg.signedData.author)]
              thumbsUpObj[JSON.stringify(msg.signedData.author)] = true
              $scope.thumbsUp.push msg
              $scope.hasThumbsUp = true
          else if msg.isNegative() and $scope.thumbsDown.length < 12 and not thumbsDownObj[JSON.stringify(msg.signedData.author)]
            thumbsDownObj[JSON.stringify(msg.signedData.author)] = true
            $scope.thumbsDown.push msg
            $scope.hasThumbsDown = true
          $scope.received.push msg
      $scope.identifiIndex.getReceivedMsgs($scope.identity, resultFound, undefined, cursor)

    $scope.setFilters = (filters) ->
      angular.extend $scope.filters, filters

    $scope.uploadCoverPhoto = (blob, identity) ->
      $scope.uploadFile(blob).then (files) ->
        recipient = {coverPhoto: '/ipfs/' + files[0].path}
        recipient[$scope.idType] = $scope.idValue
        $window.identifiLib.Message.createVerification({recipient}, $scope.privateKey).then (m) ->
          $scope.identifiIndex.addMessage(m)
          $scope.uploadModal.close()

    $scope.openShareModal = () ->
      $scope.shareModal = $uibModal.open(
        animation: $scope.animationsEnabled
        templateUrl: 'app/identities/share.modal.html'
        size: 'md'
        scope: $scope
      )
      $scope.shareModal.result.then (->), (->) # avoid backdrop rejection console error
      $scope.shareModal.rendered.then ->
        document.activeElement.blur()
      $transitions.onStart {}, ->
        $scope.shareModal.close()

    $scope.openReadQRModal = () ->
      $scope.readQRModal = $uibModal.open(
        animation: $scope.animationsEnabled
        templateUrl: 'app/identities/readqr.modal.html'
        size: 'md'
        scope: $scope
      )
      $scope.readQRModal.result.then (->), (->) # avoid backdrop rejection console error
      $scope.readQRModal.rendered.then ->
        document.activeElement.blur()
      $transitions.onStart {}, ->
        $scope.readQRModal.close()

    $scope.openCoverPhotoUploadModal = ->
      return unless $scope.authentication.identity
      $scope.openUploadModal($scope.uploadCoverPhoto, 'Upload cover photo', false)

    $scope.findOne = ->
      return unless $scope.identifiIndex
      $scope.idType = $stateParams.type
      $scope.idValue = $stateParams.value
      $scope.idAttr = new $window.identifiLib.Attribute($scope.idType, $scope.idValue)
      $scope.idUrl = $scope.getIdUrl($scope.idType, $scope.idValue)
      $scope.isCurrentUser = $scope.authentication and
        $scope.authentication.user and
        $scope.idType == $scope.authentication.user.idType and
        $scope.idValue == $scope.authentication.user.idValue
      $scope.isUniqueType = $window.identifiLib.Attribute.isUniqueType($scope.idType)
      if !$scope.isUniqueType
        $state.go 'identities.list', { search: $scope.idValue }
        $scope.tabs[2].active = true if $scope.tabs
      if $state.is 'identities.show'
        $scope.setPageTitle $scope.idValue
      $scope.identity = $scope.identifiIndex.get($scope.idType, $scope.idValue)
      $scope.setIdentityNames($scope.identity, false, true)
      $scope.identity.gun.on (data) ->
        $scope.identity.data = data
      $scope.getAttributes()
      $scope.getSentMsgs()
      $scope.getReceivedMsgs()
      $scope.identity.gun.get('scores').open (scores) ->
        $scope.scores = scores

    load = ->
      if $scope.identifiIndex
        if $state.is 'identities.show'
          $scope.findOne()

        if $state.is 'identities.create'
          focus('idNameFocus')
          $scope.newEntry.name = $scope.capitalizeWords($scope.query.term)
    $scope.$watch 'identifiIndex', load

    $scope.qrScanSuccess = (data) ->
      a = data.split('/')
      if a.length > 4
        type = decodeURIComponent(a[a.length - 2])
        value = decodeURIComponent(a[a.length - 1].split('?')[0])
        console.log 'value', value
        console.log 'data', data
        $state.go 'identities.show', {type, value}
      else
        console.log 'Unrecognized identity url', data
    $scope.qrScanError = (e) ->
      # this is called each time a QR code is not found on the camera
      # console.error e
]

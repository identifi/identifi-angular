'use strict'
# Identities controller
angular.module('irisAngular').controller 'IdentitiesController', [
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
  'NotificationService'
  ($scope, $state, $rootScope, $window, $stateParams, $transitions, $location, $http, $q, $timeout, $uibModal, config,
  localStorageService, focus, NotificationService) -> #, Authentication
    $scope.newEntry = {}
    $scope.activeTab = 1
    $scope.activateTab = (tabId) -> $scope.activeTab = tabId
    $scope.sent = []
    $scope.received =
      list: []
      seen: {}
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
        disableAnimation: true

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
        linkTo = $window.irisLib.Attribute.getUuid()
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
        $scope.newVerification.type = $window.irisLib.Attribute.guessTypeOf($scope.newVerification.value)
        unless $scope.newVerification.type
          unless $scope.newVerification.value.match /\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\,|\.|\>|\?|\/|\""|\;|\:/
            $scope.newVerification.type = 'name'
      else
        $scope.newVerification.type = ''

    $scope.addName = (name) ->
      if name
        recipient = {name}
        recipient[$scope.idType] = $scope.idValue
        $window.irisLib.Message.createVerification({recipient}, $scope.privateKey).then (m) ->
          $scope.irisIndex.addMessage(m)
        $scope.nameAdded = true
      else
        $scope.addingName = true
        focus('addNameFocus')

    $scope.getAttributes = ->
      $scope.identity.gun.get('attrs').open (attrs) ->
        attributes = attrs or []
        if attributes.length > 0
          c = attributes[0]
          mostConfirmations = c.verifications
        else
          mostConfirmations = 1
        $scope.attributes = Object.values(attributes).sort (a, b) ->
          (b.verifications - 2 * b.unverifications) - (a.verifications - 2 * a.unverifications)
        for a in $scope.attributes
          return unless a.type and a.value
          a.attr = new $window.irisLib.Attribute(a.type, a.value)
          a.isCurrent = new $window.irisLib.Attribute($scope.idType, $scope.idValue).equals(a.attr)
          a.rowClass = 'cursor-default' if a.isCurrent
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
          if a.verifications + a.unverifications > 0
            percentage = a.verifications * 100 / (a.verifications + a.unverifications)
            if percentage >= 80
              alpha = a.verifications / mostConfirmations * 0.7 + 0.3
              # a.rowStyle = 'background-color: rgba(223,240,216,' + alpha + ')'
            else if percentage >= 60
              a.rowClass = 'warning'
            else
              a.rowClass = 'danger'
          $scope.hasQuickContacts = $scope.hasQuickContacts or a.quickContact
        $scope.attributesLength = Object.keys($scope.attributes).length

    $scope.attributeClicked = (event, attr) ->
      if attr.connectingMsgs
        attr.collapse = !attr.collapse
      else
        attr.connectingMsgs = []
        for msg in $scope.received.list
          continue unless msg.signedData.type in ['verification', 'unverification', 'verify_identity', 'unverify_identity']
          hasAttr1 = hasAttr2 = false
          for a in msg.getRecipientArray()
            hasAttr1 = hasAttr1 or a.type == attr.type and a.value == attr.value
            hasAttr2 = hasAttr2 or a.type == $scope.idType and a.value == $scope.idValue
            if hasAttr1 and hasAttr2
              attr.connectingMsgs.push msg
              break
        attr.collapse = !attr.collapse

    $scope.getSentMsgs = ->
      return unless $scope.identity and $scope.irisIndex
      $scope.sent = []
      cursor = if $scope.sent.length then $scope.sent[$scope.sent.length - 1].cursor else ''
      resultFound = (msg) ->
        $scope.processMessages [msg], { authorIsSelf: true }
        $scope.sent.push msg

      $scope.irisIndex.getSentMsgs($scope.identity, resultFound)

    $scope.getReceivedMsgs = ->
      return unless $scope.identity and $scope.irisIndex
      $scope.received =
        list: []
        seen: {}
      cursor = if $scope.received.list.length then $scope.received.list[$scope.received.list.length - 1].cursor else ''
      resultFound = (msg) ->
        return if $scope.received.seen[msg.getHash()]
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
          $scope.received.list.push msg
          $scope.received.seen[msg.getHash()] = true
      $scope.irisIndex.getReceivedMsgs($scope.identity, resultFound, undefined, cursor)

    $scope.setFilters = (filters) ->
      angular.extend $scope.filters, filters

    $scope.uploadCoverPhoto = (blob, identity) ->
      $scope.uploadFile(blob).then (files) ->
        recipient = {coverPhoto: '/ipfs/' + files[0].path}
        recipient[$scope.idType] = $scope.idValue
        $window.irisLib.Message.createVerification({recipient}, $scope.privateKey).then (m) ->
          $scope.irisIndex.addMessage(m)
          $scope.uploadModal.close()

    $scope.openSharePageModal = () ->
      $scope.openModal 'sharePageModal', { templateUrl: 'app/identities/share.modal.html', size: 'md' }

    $scope.openReadQRModal = () ->
      $scope.openModal 'readQRModal', { templateUrl: 'app/identities/readqr.modal.html', size: 'md' }

    $scope.openCoverPhotoUploadModal = ->
      return unless $scope.authentication.identity
      $scope.openUploadModal($scope.uploadCoverPhoto, 'Upload cover photo', false)

    $scope.findOne = ->
      return unless $scope.irisIndex
      $scope.idType = $stateParams.type
      $scope.idValue = $stateParams.value
      $scope.idAttr = new $window.irisLib.Attribute($scope.idType, $scope.idValue)
      $scope.idUrl = $scope.getIdUrl($scope.idType, $scope.idValue)
      $scope.isCurrentUser = $scope.authentication and
        $scope.authentication.user and
        $scope.idType == $scope.authentication.user.idType and
        $scope.idValue == $scope.authentication.user.idValue
      NotificationService.markAllSeen() if $scope.isCurrentUser
      $scope.isUniqueType = $window.irisLib.Attribute.isUniqueType($scope.idType)
      if !$scope.isUniqueType
        $state.go 'identities.list', { search: $scope.idValue }
        $scope.tabs[2].active = true if $scope.tabs
      if $state.is 'identities.show'
        $scope.setPageTitle $scope.idValue
      $scope.identity = $scope.irisIndex.get($scope.idType, $scope.idValue)
      $scope.setIdentityNames($scope.identity, false, true)
      $scope.identity.gun.on (data) ->
        $scope.identity.data = data
      $scope.getAttributes()
      $scope.getSentMsgs()
      $scope.getReceivedMsgs()
      $scope.identity.gun.get('scores').open (scores) ->
        $scope.scores = scores

    load = ->
      if $scope.irisIndex
        if $state.is 'identities.show'
          $scope.findOne()

        if $state.is 'identities.create'
          focus('idNameFocus')
          $scope.newEntry.name = $scope.capitalizeWords($scope.query.term)
    $scope.$watch 'irisIndex', load

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

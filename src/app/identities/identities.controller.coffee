'use strict'
# Identities controller
angular.module('identifiAngular').controller 'IdentitiesController', [
  '$scope'
  '$state'
  '$rootScope'
  '$window'
  '$stateParams'
  '$location'
  '$http'
  '$q'
  '$timeout'
  'clipboard'
  # 'Authentication'
  'config'
  'localStorageService'
  ($scope, $state, $rootScope, $window, $stateParams, $location, $http, $q, $timeout, clipboard, config, localStorageService) -> #, Authentication
    $scope.activeTab = 0
    $scope.activateTab = (tabId) -> $scope.activeTab = tabId
    $scope.sent = []
    $scope.received = []
    $scope.connections = {}
    thumbsUpObj = {}
    thumbsDownObj = {}
    $scope.thumbsUp = []
    $scope.thumbsDown = []
    $scope.verifications = []
    $scope.query.term = $stateParams.search if $stateParams.search
    $scope.newVerification =
      type: ''
      value: ''
    $scope.filters.type = null
    $scope.collapseLevel = {}
    $scope.collapseFilters = $window.innerWidth < 992
    $scope.slider =
      value: 0
      options:
        floor: -3
        ceil: 3
        hidePointerLabels: true
        hideLimitLabels: true

    $scope.$on 'MessageAdded', (event, args) ->
      $state.reload()

    $scope.copyIdLink = ->
      clipboard.copyText $scope.idUrl

    $scope.addEntry = (event, entry) ->
      recipient = []
      if entry.name
        recipient.push ['name', entry.name]
      if entry.email
        recipient.push ['email', entry.email]
      if entry.url
        recipient.push ['url', entry.url]
      if entry.phone
        recipient.push ['phone', entry.phone]
      params =
        type: 'verify_identity'
        recipient: recipient
      $scope.createMessage(event, params).then (response) ->
        $state.go 'messages.show', { id: response.ipfs_hash }
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

    $scope.getConnections = ->
      $scope.connections = {}
      connections = $scope.identity.data.attrs or []
      if connections.length > 0
        c = connections[0]
        mostConfirmations = c.conf
      else
        mostConfirmations = 1
      for id in connections
        $scope.connections[$scope.getIdKey(id)] = Object.assign({}, id)
      for key, conn of $scope.connections
        conn.isCurrent = conn.name == $scope.idType and conn.val == $scope.idValue
        switch conn.name
          when 'email'
            conn.iconStyle = 'glyphicon glyphicon-envelope'
            conn.btnStyle = 'btn-success'
            conn.link = 'mailto:' + conn.val
            conn.quickContact = true
          when 'bitcoin_address', 'bitcoin'
            conn.iconStyle = 'fa fa-bitcoin'
            conn.btnStyle = 'btn-primary'
            conn.link = 'https://blockchain.info/address/' + conn.val
            conn.quickContact = true
          when 'gpg_fingerprint', 'gpg_keyid'
            conn.iconStyle = 'fa fa-key'
            conn.btnStyle = 'btn-default'
            conn.link = 'https://pgp.mit.edu/pks/lookup?op=get&search=0x' + conn.val
          when 'account'
            conn.iconStyle = 'fa fa-at'
          when 'nickname'
            conn.iconStyle = 'glyphicon glyphicon-font'
          when 'name'
            conn.iconStyle = 'glyphicon glyphicon-font'
          when 'tel', 'phone'
            conn.iconStyle = 'glyphicon glyphicon-earphone'
            conn.btnStyle = 'btn-success'
            conn.link = 'tel:' + conn.val
            conn.quickContact = true
          when 'keyID'
            conn.iconStyle = 'fa fa-key'
          when 'coverPhoto'
            if conn.val.match /^\/ipfs\/[1-9A-Za-z]{40,60}$/
              $scope.coverPhoto = $scope.coverPhoto or { 'background-image': 'url(' + ($scope.ipfsRoot or '') + conn.val + ')' }
          when 'profilePhoto'
            if conn.val.match /^\/ipfs\/[1-9A-Za-z]{40,60}$/
              $scope.profilePhoto = $scope.profilePhoto or ($scope.ipfsRoot or '') + conn.val
          when 'url'
            conn.link = conn.val
            if conn.val.indexOf('facebook.com/') > -1
              conn.iconStyle = 'fa fa-facebook'
              conn.btnStyle = 'btn-facebook'
              conn.link = conn.val
              conn.linkName = conn.val.split('facebook.com/')[1]
              conn.quickContact = true
            else if conn.val.indexOf('twitter.com/') > -1
              conn.iconStyle = 'fa fa-twitter'
              conn.btnStyle = 'btn-twitter'
              conn.link = conn.val
              conn.linkName = conn.val.split('twitter.com/')[1]
              conn.quickContact = true
            else if conn.val.indexOf('plus.google.com/') > -1
              conn.iconStyle = 'fa fa-google-plus'
              conn.btnStyle = 'btn-google-plus'
              conn.link = conn.val
              conn.linkName = conn.val.split('plus.google.com/')[1]
              conn.quickContact = true
            else if conn.val.indexOf('linkedin.com/') > -1
              conn.iconStyle = 'fa fa-linkedin'
              conn.btnStyle = 'btn-linkedin'
              conn.link = conn.val
              conn.linkName = conn.val.split('linkedin.com/')[1]
              conn.quickContact = true
            else if conn.val.indexOf('github.com/') > -1
              conn.iconStyle = 'fa fa-github'
              conn.btnStyle = 'btn-github'
              conn.link = conn.val
              conn.linkName = conn.val.split('github.com/')[1]
              conn.quickContact = true
            else
              conn.iconStyle = 'glyphicon glyphicon-link'
              conn.btnStyle = 'btn-default'
        if conn.val and conn.val.match /^\/ipfs\/[1-9A-Za-z]{40,60}$/
          conn.link = ($scope.ipfsRoot or '') + conn.val
          conn.linkName = conn.val
          conn.iconStyle = 'glyphicon glyphicon-link'
          conn.btnStyle = 'btn-default'
        if conn.conf + conn.ref > 0
          percentage = conn.conf * 100 / (conn.conf + conn.ref)
          if percentage >= 80
            alpha = conn.conf / mostConfirmations * 0.7 + 0.3
            # conn.rowStyle = 'background-color: rgba(223,240,216,' + alpha + ')'
          else if percentage >= 60
            conn.rowClass = 'warning'
          else
            conn.rowClass = 'danger'
        $scope.hasQuickContacts = $scope.hasQuickContacts or conn.quickContact
      $scope.connectionsLength = Object.keys($scope.connections).length


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
            return msgs.push msg if id[0] == id2.name and id[1] == id2.val
        return msgs

    $scope.connectionClicked = (event, id) ->
      if id.connecting_msgs
        id.collapse = !id.collapse
      else
        $scope.getConnectingMsgs([$scope.idType, $scope.idValue], id).then (msgs) ->
          id.connecting_msgs = msgs
          id.collapse = !id.collapse

    $scope.getSentMsgs = ->
      return if $scope.sent.loading or not $scope.identity or not $scope.identity.data.sent
      $scope.sent.loading = true
      if $scope.sent.length == 0
        $scope.identity.data.sentPositive = 0
        $scope.identity.data.sentNeutral = 0
        $scope.identity.data.sentNegative = 0
      cursor = if $scope.sent.length then $scope.sent[$scope.sent.length - 1].cursor else ''
      $scope.identifiIndex.getSentMsgs($scope.identity, $scope.filters.limit, cursor)
      .then (sent) ->
        $scope.processMessages sent, { authorIsSelf: true }
        $scope.$apply ->
          Array.prototype.push.apply($scope.sent, sent)
          $scope.sent.loading = false
          if sent.length < $scope.filters.limit - 1
            $scope.sent.finished = true
        sent.forEach (msg) ->
          if msg.data.type == 'rating'
            neutralRating = (msg.data.maxRating + msg.data.minRating) / 2
            if msg.data.rating > neutralRating
              $scope.identity.data.sentPositive++
            else if msg.data.rating < neutralRating
              $scope.identity.data.sentNegative++
            else
              console.log msg
              $scope.identity.data.sentNeutral++
      .catch (error) ->
        console.log 'error loading sent messages', error
        $scope.sent.finished = true

    $scope.getReceivedMsgs = ->
      return if $scope.received.loading or not $scope.identity or not $scope.identity.data.received
      $scope.received.loading = true
      cursor = if $scope.received.length then $scope.received[$scope.received.length - 1].cursor else ''
      $scope.identifiIndex.getReceivedMsgs($scope.identity, $scope.filters.limit, cursor)
      .then (received) ->
        $scope.processMessages received, { recipientIsSelf: true }
        $scope.$apply ->
          Array.prototype.push.apply($scope.received, received)
          $scope.received.loading = false
          if received.length < $scope.filters.limit - 1
            $scope.received.finished = true
          received.forEach (msg) ->
            neutralRating = (msg.data.maxRating + msg.data.minRating) / 2
            if Object.keys(thumbsUpObj).length < 12 and msg.data.rating > neutralRating
              thumbsUpObj[msg.linkToAuthor] = msg
              $scope.thumbsUp = Object.values(thumbsUpObj)
              $scope.hasThumbsUp = true
            else if Object.keys(thumbsDownObj).length < 12 and msg.data.rating < neutralRating
              thumbsDownObj[msg.linkToAuthor] = msg
              $scope.thumbsDown = Object.values(thumbsDownObj)
              $scope.hasThumbsDown = true
      .catch (error) ->
        console.log 'error loading received messages', error
        $scope.received.finished = true

    $scope.setFilters = (filters) ->
      angular.extend $scope.filters, filters
      $scope.sent = []
      $scope.received = []
      $timeout -> $rootScope.$broadcast 'msgScrollCheck'

    $scope.findOne = ->
      $scope.idType = $stateParams.type
      $scope.idValue = $stateParams.value
      if $window.location.hostname.indexOf('.') > -1 # differentiate between localhost / chrome plugin uri and DNS name
        $scope.idUrl = $state.href('identities.show', {type: $scope.idType, value: $scope.idValue}, {absolute: true})
      else
        $scope.idUrl = 'https://identi.fi/' + $state.href('identities.show', {type: $scope.idType, value: $scope.idValue})
      $scope.isCurrentUser = $scope.authentication and
        $scope.authentication.user and
        $scope.idType == $scope.authentication.user.idType and
        $scope.idValue == $scope.authentication.user.idValue
      $scope.isUniqueType = config.uniqueAttributeTypes.indexOf($scope.idType) > -1
      if !$scope.isUniqueType
        $state.go 'identities.list', { search: $scope.idValue }
        $scope.tabs[2].active = true
      $scope.setPageTitle $scope.idValue
      $scope.$watch 'apiReady', (isReady) ->
        if isReady
          $scope.identifiIndex.get($scope.idValue, $scope.idType).then (profile) ->
            if profile
              $scope.identity = profile
              $scope.setIdentityNames($scope.identity)
              $scope.setPageTitle($scope.identity.primaryName)
              $scope.getSentMsgs(0)
              $scope.getReceivedMsgs(0)
            else
              $scope.$apply ->
                $scope.identity = new $window.identifiLib.Identity({attrs:[{name:$scope.idType, val:$scope.idValue}]})
            $scope.$apply ->
              $scope.getConnections()
          .catch (err) ->
            console.log 'error fetching profile', err

    if $state.is 'identities.show'
      $scope.findOne()
]

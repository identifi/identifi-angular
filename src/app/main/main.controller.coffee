'use strict'
angular.module('identifiAngular').controller 'MainController', [
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
  '$q'
  'focus'

  #'Authentication'
  #'Menus'
  #'Persona'
  ($scope, $rootScope, $location, $http, $state, config,
  localStorageService, clipboard, $uibModal, $window, $stateParams, $q, focus) -> # Authentication, Menus, Persona
    hosts = ['https://identifi.herokuapp.com/gun', 'https://identifi2.herokuapp.com/gun']
    if $window.location.protocol != "https:"
      hosts.push('http://localhost:8765/gun')

    $scope.gun = new Gun(hosts)

    # TODO: move everything to main controller?
    # set authentication
    $scope.authentication = {} # Authentication

    $scope.getIdUrl = (type, value) ->
      if $window.location.hostname.indexOf('.') > -1 # differentiate between localhost / chrome plugin uri and DNS name
        return $state.href('identities.show', {type, value}, {absolute: true}) + '?share'
      else
        return 'https://identi.fi/' + $state.href('identities.show', {type, value}) + '?share'

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
    $scope.phoneRegex = /^\+?\d+$/

    $scope.ipfs = new Ipfs(
      init: true
      start: true
      repo: 'ipfs7-identifi'
    )

    $scope.capitalizeWords = (s) ->
      if s and s.length
        return (s.trim().split(' ').map (word) -> word[0].toUpperCase() + word[1..-1].toLowerCase()).join ' '
      else
        return s

    $scope.copyToClipboard = (text) ->
      clipboard.copyText text

    $scope.search = (query, limit) ->
      return unless $scope.identifiIndex
      $scope.ids.activeKey = -1
      $scope.ids.list = []
      console.log 'search'
      searchKey = (query or $scope.query.term or '').toLowerCase().trim()
      $scope.searchKey = searchKey
      $scope.previousSearchKey = searchKey
      limit = limit or 10
      cursor = false
      if $scope.ids.list.length
        cursor = $scope.ids.list[$scope.ids.list.length - 1].cursor
      seen = {}

      resultFound = (i) ->
        return if searchKey != $scope.searchKey
        console.log 'i', i
        i.gun.on (data) ->
          i.data = data
          i.gun.get('linkTo').on (linkTo) ->
            return if i.linkTo or !linkTo
            s = linkTo.type + linkTo.value
            return if seen[s]
            seen[s] = true
            $scope.ids.list.push i
            $scope.$apply ->
              i.linkTo = linkTo
        $scope.setIdentityNames(i, true)

      $scope.identifiIndex.search(searchKey, undefined, resultFound, limit, cursor)
      return new Promise (resolve) -> # TODO: uib-typeahead is limited, but something better pls
        setTimeout ->
          resolve($scope.ids.list)
        , 1000

    setIndex = (results) ->
      $scope.query.term = '' if $scope.query.term != ''
      $scope.ids.list = []
      $scope.msgs.list = []
      $scope.identifiIndex = results
      setTimeout () ->
        $scope.$broadcast('rzSliderForceRender')
      , 1000
      setTimeout () ->
        $scope.$broadcast('rzSliderForceRender')
      , 3000 # :---D
      console.log 'Got index', $scope.identifiIndex
      $scope.viewpoint.identity = $scope.identifiIndex.get($scope.viewpoint.type, $scope.viewpoint.value)
      $scope.viewpoint.identity.gun.get('attrs').open (attrs) ->
        $scope.viewpoint.attrs = attrs
        $scope.viewpoint.mostVerifiedAttributes = $window.identifiLib.Identity.getMostVerifiedAttributes(attrs)

    $scope.loadDefaultIndex = ->
      $scope.viewpoint = {type: 'keyID', value: $scope.defaultIndexKeyID}
      setIndex new $window.identifiLib.Index($scope.gun.user($scope.defaultIndexKeyID).get('identifi'), {ipfs: $scope.ipfs})

    $scope.loginWithKey = (privateKeySerialized, self) ->
      $scope.loggingIn = true
      $scope.privateKey = $window.identifiLib.Key.fromJwk(privateKeySerialized)
      localStorageService.set('identifiKey', privateKeySerialized)
      $scope.authentication.user =
        idType: 'keyID'
        idValue: $window.identifiLib.Key.getId($scope.privateKey)
      $scope.authentication.user.url = $scope.getIdUrl 'keyID', $scope.authentication.user.idValue
      $scope.loginModal.close() if $scope.loginModal
      keyID = $window.identifiLib.Key.getId($scope.privateKey)
      $scope.viewpoint = {type: 'keyID', value: keyID}
      $scope.ids.list = []
      $scope.msgs.list = []
      $window.identifiLib.Index.create($scope.gun, $scope.privateKey, {self, ipfs: $scope.ipfs}).then (i) ->
        setIndex(i)
        $scope.loggingIn = false
        $scope.authentication.identity = $scope.identifiIndex.get('keyID', keyID)
        $scope.authentication.identity.gun.get('attrs').open (val, key, msg, eve) ->
          mva = $window.identifiLib.Identity.getMostVerifiedAttributes(val)
          $scope.authentication.identity.mva = mva
          eve.off() if mva.profilePhoto
        $scope.authentication.identity.gun.on (data) ->
          if data.receivedPositive and $scope.authentication.identity.data and not $scope.authentication.identity.data.receivedPositive
            console.log 'great, you got your first upvote!'
            # TODO: notification
          $scope.authentication.identity.data = data
      .catch (e) ->
        console.error(e)
        $scope.loggingIn = false

    privateKey = localStorageService.get('identifiKey')
    if privateKey
      $scope.loginWithKey(privateKey)
    else
      $scope.loadDefaultIndex()

    $scope.updateIpfsPeers = () ->
      $scope.ipfs.swarm.peers (err, peerInfos) ->
        if err
          console.error 'failed to fetch ipfs peers', err
        else
          $scope.$apply ->
            $scope.ipfsPeers = peerInfos

    $scope.ipfs.on 'ready', ->
      $scope.ipfsReady = true
      $window.ipfs = $scope.ipfs
      $scope.updateIpfsPeers()
      setInterval $scope.updateIpfsPeers, 5000

    $scope.localSettings = localStorageService.get('localSettings') || {}
    $scope.closeProfileUploadNotification = ->
      $scope.localSettings.profileUploadNotificationClosed = true
      localStorageService.set('localSettings', $scope.localSettings)

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
        $window.identifiLib.Message.createVerification({recipient}, $scope.privateKey).then (m) ->
          $scope.hideProfilePhoto = true # There's a weird bug where the profile identicon doesn't update
          $scope.identifiIndex.addMessage(m).then ->
            $scope.hideProfilePhoto = false
            if !$state.is 'identities.show'
              $state.go 'identities.show', { type: $scope.authentication.user.idType, value: $scope.authentication.user.idValue }
          $scope.uploadModal.close()

    $scope.setPageTitle = (title) ->
      $rootScope.pageTitle = 'Identifi'
      if (title)
        $rootScope.pageTitle += ' - ' + title

    $scope.ipfsGet = (uri, getJson) ->
      return new Promise (resolve) ->
        go = ->
          $scope.ipfs.cat(uri).then (file) ->
            file = $scope.ipfs.types.Buffer(file)
            if getJson
              file = JSON.parse(file.toString())
            resolve file

        if $scope.ipfsReady
          go()
        else
          $scope.ipfs.on 'ready', ->
            go()

    $scope.resetMsg = ->
      $scope.newMessage =
        rating: 1
        comment: ''
      $scope.newVerification =
        type: ''
        value: ''
    $scope.resetMsg()

    # Create new Message
    $scope.createMessage = (event, params, verifiedAttr) ->
      $scope.addingMessage = true
      event.stopPropagation() if event
      # Create new Message object
      message = null
      params.recipient = params.recipient || {}
      if $state.is 'identities.show'
        if verifiedAttr and $stateParams.type == verifiedAttr.type
          params.recipient[$stateParams.type] = [$stateParams.value, verifiedAttr.value]
        else
          params.recipient[$stateParams.type] = $stateParams.value
          params.recipient[verifiedAttr.type] = verifiedAttr.value if verifiedAttr
      else unless $state.is 'identities.create'
        params.recipient.keyID = $scope.authentication.user.idValue
      if params.type == 'rating'
        params.maxRating |= 3
        params.minRating |= -3
        message = $window.identifiLib.Message.createRating(params, $scope.privateKey)
      else if params.type == 'verification'
        message = $window.identifiLib.Message.createVerification(params, $scope.privateKey)
      else
        message = $window.identifiLib.Message.create(params, $scope.privateKey)
      options = {}

      message.then (m) ->
        console.log m
        $scope.identifiIndex.addMessage(m)
      .then ->
        if $scope.filters.type not in [params.type, null]
          $scope.filters.type = params.type
        $scope.resetMsg()
        $scope.addingMessage = false
      .catch (e) ->
        console.error(e)
        $scope.error = e
        $scope.addingMessage = false

    $scope.addAttribute = ->
      $location.path '#/identities/create/' + $scope.query.term

    $scope.login = ->
      $scope.filters.max_distance = -1 # because the user doesn't have a trust index yet

    $scope.openLoginModal = ->
      $scope.loginModal = $uibModal.open(
        animation: $scope.animationsEnabled
        templateUrl: 'app/main/login.modal.html'
        size: 'lg'
        scope: $scope
      )
      $scope.loginModal.rendered.then ->
        document.activeElement.blur()
        focus('newUser')
      $scope.$on '$stateChangeStart', ->
        $scope.loginModal.close()

    $scope.openUploadModal = (callback, modalButtonText, squarify) ->
      $scope.uploadModalCallback = callback
      $scope.modalButtonText = modalButtonText or 'Upload'
      $scope.squarify = squarify
      $scope.uploadModal = $uibModal.open(
        animation: $scope.animationsEnabled
        templateUrl: 'app/identities/upload.modal.html'
        size: 'lg'
        scope: $scope
      )
      $scope.uploadModal.rendered.then ->
        document.activeElement.blur()
      $scope.$on '$stateChangeStart', ->
        $scope.uploadModal.close()

    $scope.$on '$stateChangeStart', ->
      $scope.filters.type = null

    loadMsgs = ->
      limit = 40
      cursor = null
      $scope.msgs.list = []
      resultFound = (msg) ->
        console.log 'got msg', msg
        $scope.processMessages [msg]
        $scope.$apply ->
          $scope.msgs.list.push msg
      $scope.identifiIndex.getMessagesByTimestamp(resultFound, limit, cursor)

    $scope.$watch 'identifiIndex', ->
      return unless $scope.identifiIndex
      loadMsgs()
      $scope.search()

    $scope.uploadFile = (blob) ->
      return new Promise (resolve, reject) ->
        console.log 'uploading', blob
        fileReader = new FileReader()
        fileReader.onload = (event) ->
          buffer = $scope.ipfs.types.Buffer.from(event.target.result)
          console.log 'buffer', buffer
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
      $window.identifiLib.Key.generate()
      .then (key) ->
        $scope.privateKey = key
        $scope.privateKeySerialized = $window.identifiLib.Key.toJwk($scope.privateKey)
        self.keyID = $window.identifiLib.Key.getId($scope.privateKey)
        $scope.loginWithKey($scope.privateKeySerialized, self)
      .then (msg) ->
        $scope.creatingUser = false
      .catch (e) ->
        console.error('failed to create user:', e)
        $scope.creatingUser = false

    $scope.generateKey = ->
      $window.identifiLib.Key.generate().then (key) ->
        $scope.$apply ->
          $scope.privateKey = key
          console.log $scope.privateKey
          $scope.privateKeySerialized = $window.identifiLib.Key.toJwk($scope.privateKey)

    $scope.downloadText = (text) ->
      hiddenElement = document.createElement('a')
      hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(text)
      hiddenElement.target = '_blank'
      hiddenElement.download = 'identifi_private_key.txt'
      hiddenElement.click()

    $scope.openLogoutModal = ->
      $scope.logoutModal = $uibModal.open(
        animation: $scope.animationsEnabled
        templateUrl: 'app/main/logout.modal.html'
        size: 'lg'
        scope: $scope
      )
      $scope.logoutModal.rendered.then ->
        document.activeElement.blur()
      $scope.$on '$stateChangeStart', ->
        $scope.logoutModal.close()

    $scope.closeLogoutModal = ->
      $scope.logoutModal.close()

    $scope.logout = ->
      $scope.filters.max_distance = 0
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
        else if data.type != $scope.filters.type
          return false
      else
        if data.type in ['verification', 'unverification']
          return false
      if $scope.filters.max_distance
        if $scope.filters.max_distance == 0 and typeof value.authorTrustDistance != 'number'
          return false
        else if $scope.filters.max_distance > 0 and value.authorTrustDistance > $scope.filters.max_distance
          return false
      return true

    $scope.removeFocus = (event) ->
      event.currentTarget.blur()

    $scope.setMsgRawData = (msg) ->
      showRawData =
        hash: msg.hash
        data: msg.signedData
        priority: msg.priority
        jws: msg.jws
      msg.strData = JSON.stringify(showRawData, undefined, 2)

    $scope.openMessage = (event, message, size) ->
      t = event.target
      return if angular.element(t).closest('a').length
      $scope.setMsgRawData(message)
      $scope.message = message
      # TODO: check sig
      $scope.message.recipient = $scope.message.getRecipient($scope.identifiIndex)
      $scope.message.recipient.gun.get('attrs').open (d) ->
        mva = $window.identifiLib.Identity.getMostVerifiedAttributes(d)
        if mva.name
          $scope.$apply -> $scope.message.recipient_name = mva.name.attribute.value
        else if mva.nickname
          $scope.$apply -> $scope.message.recipient_name = mva.nickname.attribute.value
      $scope.message.signerKeyID = $scope.message.getSignerKeyID()
      $scope.message.verifiedBy = $scope.identifiIndex.get('keyID', $scope.message.signerKeyID)
      $scope.message.verifiedByAttr = new $window.identifiLib.Attribute('keyID', $scope.message.signerKeyID)
      $scope.messageModal = $uibModal.open(
        animation: $scope.animationsEnabled
        templateUrl: 'app/messages/show.modal.html'
        size: size
        scope: $scope
      )
      $scope.messageModal.rendered.then ->
        document.activeElement.blur()
      $scope.$on '$stateChangeStart', ->
        $scope.messageModal.close()

    $scope.filters = $scope.filters or config.defaultFilters

    $scope.isCollapsed = false
    # $scope.menu = Menus.getMenu('topbar')

    $scope.toggleCollapsibleMenu = ->
      $scope.isCollapsed = !$scope.isCollapsed

    $scope.processMessages = (messages, msgOptions) ->
      processMessage = (msg) ->
        msg.author = msg.getAuthor($scope.identifiIndex)
        msg.author.gun.get('trustDistance').on (d) -> msg.authorTrustDistance = d
        msg.author.gun.get('attrs').open (d) ->
          mva = $window.identifiLib.Identity.getMostVerifiedAttributes(d)
          if mva.name
            $scope.$apply -> msg.author_name = mva.name.attribute.value
          else if mva.nickname
            $scope.$apply -> msg.author_name = mva.nickname.attribute.value
        msg.recipient = msg.getRecipient($scope.identifiIndex)
        msg.recipient.gun.get('attrs').open (d) ->
          mva = $window.identifiLib.Identity.getMostVerifiedAttributes(d)
          if mva.name
            $scope.$apply -> msg.recipient_name = mva.name.attribute.value
          else if mva.nickname
            $scope.$apply -> msg.recipient_name = mva.nickname.attribute.value
        $scope.$apply ->
          # TODO: make sure message signature is checked
          i = undefined
          i = 0
          smallestIndex = 1000
          msg.authorArray = msg.getAuthorArray()
          for a in msg.authorArray
            msg.linkToAuthor = a unless msg.linkToAuthor
            index = Object.keys($window.identifiLib.Attribute.getUniqueIdValidators()).indexOf(a.type)
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
            index = Object.keys($window.identifiLib.Attribute.getUniqueIdValidators()).indexOf(a.type)
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
          msg.iconStyle = ''
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
              msg.iconStyle = 'fa fa-pencil'
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

      angular.forEach messages, (msg, key) ->
        msg[k] = v for k, v of msgOptions
        processMessage(msg)

    # Collapsing the menu after navigation
    $scope.$on '$stateChangeSuccess', ->
      $scope.isCollapsed = false

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

    $scope.setIdentityNames = (i, htmlSafe, setTitle) ->
      i.verified = false
      i.gun.get('attrs').open (attrs) ->
        $scope.$apply ->
          mva = $window.identifiLib.Identity.getMostVerifiedAttributes(attrs)
          if mva.name
            i.primaryName = mva.name.attribute.value
            i.hasProperName = true
            i.verified = true if mva.name.verified
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

    $scope.searchKeydown = (event) ->
      switch (if event then event.which else -1)
        when 38
          event.preventDefault()
          if $scope.ids.activeKey > -1
            $scope.addEntryActive = false
            $scope.ids.list[$scope.ids.activeKey].active = false
            $scope.ids.activeKey--
            if $scope.ids.activeKey >= 0
              $scope.ids.list[$scope.ids.activeKey].active = true
          scrollTo document.getElementById('result' + $scope.ids.activeKey)
        when 40
          event.preventDefault()
          if $scope.ids.activeKey < ($scope.ids.list.length || 0) - 1
            if $scope.ids.activeKey >= 0
              $scope.ids.list[$scope.ids.activeKey].active = false
            $scope.ids.list[$scope.ids.activeKey + 1].active = true
            $scope.ids.activeKey++
          scrollTo document.getElementById('result' + $scope.ids.activeKey)
        when 13
          event.preventDefault()
          if $scope.ids.activeKey == -1
            $state.go 'identities.create'
          else
            id = $scope.ids.list[$scope.ids.activeKey]
            $state.go 'identities.show', { type: id.linkTo.type, value: id.linkTo.value }
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
      console.log 'removeGunPeer' # TODO: how to do this?

    $scope.addIpfsPeer = (url) ->
      $scope.ipfs.swarm.connect(url).then ->
        $scope.updateIpfsPeers()

    $scope.removeIpfsPeer = (url) ->
      $scope.ipfs.swarm.disconnect(url).then ->
        $scope.updateIpfsPeers()
]

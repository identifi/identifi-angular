'use strict'
# Messages controller
angular.module('irisAngular').controller 'MessagesController', [
  '$scope'
  '$rootScope'
  '$window'
  '$stateParams'
  '$location'
  '$http'
  '$state'
  # 'Authentication'
  'config'
  '$timeout'
  'localStorageService'
  ($scope, $rootScope, $window, $stateParams, $location, $http, $state, config, $timeout, localStorageService) -> #, Authentication
    $scope.idType = $stateParams.type
    $scope.idValue = $stateParams.value

    $scope.iconCount = (rating) ->
      new Array(Math.max(1, Math.abs(rating)))

    $scope.iconStyle = (rating) ->
      iconStyle = 'neutral'
      if rating > 0
        iconStyle = 'positive'
      else if rating < 0
        iconStyle = 'negative'
      iconStyle

    $scope.iconClass = (rating) ->
      iconStyle = 'glyphicon-question-sign'
      if rating > 0
        iconStyle = 'glyphicon-thumbs-up'
      else if rating < 0
        iconStyle = 'glyphicon-thumbs-down'
      iconStyle

    $scope.collapseFilters = $window.innerWidth < 992

    $scope.setFilters = (filters) ->
      angular.extend $scope.filters, {limit: 10}, filters

    if $state.is 'messages.list'
      $scope.filters.type = config.defaultFilters.type

    # Find existing Message
    $scope.findOne = ->
      if $stateParams.id
        hash = $stateParams.id
        isIpfsHash = hash.match /^Qm[1-9A-Za-z]{40,50}$/

        processResponse = ->
          $scope.processMessages([$scope.message], {})
          $scope.setPageTitle 'Message ' + hash
          $scope.setMsgRawData($scope.message)
          $scope.message.signerKeyID = $scope.message.getSignerKeyID()
          $scope.message.verifiedBy = $scope.irisSocialNetwork.get('keyID', $scope.message.signerKeyID)
          $scope.setContactNames($scope.message.verifiedBy, true)
          $scope.message.verifiedByAttr = new $window.irisLib.Attribute('keyID', $scope.message.signerKeyID)
          $scope.message.ipfsUri = hash if isIpfsHash

        $scope.irisSocialNetwork.getMessageByHash(hash).then (m) ->
          $scope.$apply ->
            $scope.message = m
            processResponse()

    load = ->
      return unless $scope.irisSocialNetwork
      if $state.is('messages.show')
        $scope.findOne()
    $scope.$watch 'irisSocialNetwork', load
]

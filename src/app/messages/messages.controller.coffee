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
  ($scope, $rootScope, $window, $stateParams, $location, $http, $state, Messages, config, $timeout, localStorageService) -> #, Authentication
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

    # Find existing Message
    $scope.findOne = ->
      if $stateParams.id
        hash = $stateParams.id
        processResponse = ->
          $scope.processMessages([$scope.message], {})
          $scope.setPageTitle 'Message ' + hash
          $scope.setMsgRawData($scope.message)
          $scope.message.signerKeyID = $scope.message.getSignerKeyID()
          $scope.message.verifiedBy = $scope.irisIndex.get('keyID', $scope.message.signerKeyID)
          $scope.setIdentityNames($scope.message.verifiedBy, true)
          $scope.message.verifiedByAttr = new $window.irisLib.Attribute('keyID', $scope.message.signerKeyID)
        if hash.match /^Qm[1-9A-Za-z]{40,50}$/ # looks like an ipfs address
          $scope.ipfsGet(hash).then (res) ->
            s = JSON.parse(res.toString())
            console.log 'msg from ipfs', res, s
            $window.irisLib.Message.fromSig(s).then (r) ->
              $scope.message = r
              $scope.message.ipfsUri = hash
              processResponse()
          .catch (e) ->
            console.log e

    load = ->
      return unless $scope.irisIndex
      if $state.is('messages.show')
        $scope.findOne()
    $scope.$watch 'irisIndex', load
]

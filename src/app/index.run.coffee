angular.module 'irisAngular'
  .run ($log, $transitions, $rootScope, $state, $stateParams, $window, localStorageService) ->
    'ngInject'
    $log.debug 'runBlock end'
    $transitions.onSuccess {}, (params) ->
      $rootScope.pageTitle = $state.current.title || 'Iris'
      $window.scrollTo(0,0)

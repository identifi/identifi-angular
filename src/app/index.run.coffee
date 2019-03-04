angular.module 'irisAngular'
  .run ($log, $rootScope, $state, $stateParams, $window, localStorageService) ->
    'ngInject'
    $log.debug 'runBlock end'
    $rootScope.$on '$stateChangeSuccess', (event, current, previous) ->
      $rootScope.pageTitle = $state.current.title || 'Identifi'
      localStorageService.set('state', current.name)
      localStorageService.set('stateParams', $stateParams)
      $window.scrollTo(0,0)

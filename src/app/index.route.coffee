angular.module 'identifiAngular'
  .config ($stateProvider, $urlRouterProvider, $locationProvider) ->
    'ngInject'
    $locationProvider.hashPrefix('')
    $stateProvider
      .state 'identities',
        url: '/contacts'
        template: "<ui-view/>"
        abstract: true
      .state 'identities.list',
        url: ''
        templateUrl: 'app/identities/list.html'
        controller: 'IdentitiesController'
        controllerAs: 'identities'
        params:
          search: ''
        title: 'Identifi - Contacts'
      .state 'identities.create',
        url: '/create'
        templateUrl: 'app/identities/create.html'
        controller: 'IdentitiesController'
        controllerAs: 'identities'
      .state 'identities.show',
        url: '/:type/:value'
        templateUrl: 'app/identities/show.html'
        controller: 'IdentitiesController'
        controllerAs: 'identities'
      .state 'messages',
        url: ''
        template: "<ui-view/>"
        abstract: true
      .state 'messages.list',
        url: ''
        templateUrl: 'app/messages/list.html'
        controller: 'MessagesController'
        controllerAs: 'messages'
        title: 'Identifi'
      .state 'messages.show',
        url: '/messages/:id'
        templateUrl: 'app/messages/show.html'
        controller: 'MessagesController'
        controllerAs: 'messages'
      .state 'about',
        url: '/about'
        templateUrl: 'app/main/about.html'
        title: 'Identifi - About'
      .state 'settings',
        url: '/settings'
        templateUrl: 'app/main/settings.html'
        title: 'Identifi - Settings'
      .state 'privacy',
        url: '/privacy'
        templateUrl: 'app/main/privacy-policy.html'
        title: 'Identifi - Privacy policy'

    $urlRouterProvider.otherwise ''

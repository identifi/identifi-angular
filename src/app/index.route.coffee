angular.module 'irisAngular'
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
        title: 'Iris - Contacts'
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
      .state 'chats',
        url: '/chats'
        templateUrl: 'app/chats/index.html'
        abstract: true
      .state 'chats.create',
        url: '/create'
        templateUrl: 'app/chats/create.html'
        controller: 'IdentitiesController'
        controllerAs: 'messages'
        title: 'Iris - Create chat'
      .state 'chats.list',
        url: ''
        templateUrl: 'app/chats/default.html'
        controller: 'IdentitiesController'
        controllerAs: 'messages'
        title: 'Iris - Chats'
      .state 'chats.show',
        url: '/:type/:value'
        templateUrl: 'app/chats/show.html'
        controller: 'IdentitiesController'
        controllerAs: 'messages'
        title: 'Iris - Chats'
      .state 'messages',
        url: ''
        template: "<ui-view/>"
        abstract: true
      .state 'messages.list',
        url: ''
        templateUrl: 'app/messages/list.html'
        controller: 'MessagesController'
        controllerAs: 'messages'
        title: 'Iris'
      .state 'messages.show',
        url: '/messages/:id'
        templateUrl: 'app/messages/show.html'
        controller: 'MessagesController'
        controllerAs: 'messages'
      .state 'about',
        url: '/about'
        templateUrl: 'app/main/about.html'
        title: 'Iris - About'
      .state 'settings',
        url: '/settings'
        templateUrl: 'app/main/settings.html'
        title: 'Iris - Settings'
      .state 'privacy',
        url: '/privacy'
        templateUrl: 'app/main/privacy-policy.html'
        title: 'Iris - Privacy policy'

    $urlRouterProvider.otherwise ''

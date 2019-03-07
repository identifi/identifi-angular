'use strict'
angular.module('irisAngular').service 'NotificationService', [
  'Notification',
  (uiNotification) ->
    {
      notifications: []
      unseenCount: 0
      create: (options) ->
        defaultOptions =
          seen: false
          message: ''
          type: 'primary'
          positionX: 'right'
          positionY: 'bottom'
          delay: 10000
          replaceMessage: true
          templateUrl: 'app/services/notification.template.html'
        options = Object.assign(defaultOptions, options)
        this.notifications.push options
        this.notifications.splice 10 # maximum notifications length
        this.unseenCount++ unless options.seen
        uiNotification options
      markAllSeen: (options) ->
        n.seen = true for n in this.notifications
        this.unseenCount = 0
    }
]

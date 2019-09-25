'use strict'
angular.module('irisAngular').service 'NotificationService', [
  'Notification',
  (uiNotification) ->
    {
      notifications: []
      unseenChats: 0
      unseenPosts: 0
      create: (notification) ->
        defaultOptions =
          seen: false
          from: ''
          text: ''
          type: 'primary'
          positionX: 'right'
          positionY: 'bottom'
          delay: 10000
          replaceMessage: true
          templateUrl: 'app/services/notification.template.html'
        notification = Object.assign(defaultOptions, notification)
        notification.message = "#{notification.from}: #{notification.text}"
        this.notifications.push notification
        this.notifications.splice 10 # maximum notifications length
        unless notification.seen
          this.unseenPosts++ if notification.type == 'post'
          this.unseenChats++ if notification.type == 'chat'
        uiNotification notification
        if this.desktopNotificationsEnabled and document.hidden
          if window.Notification and Notification.permission == 'granted'
            navigator.serviceWorker.getRegistration().then (reg) ->
              reg.showNotification notification.from,
                body: notification.text
      markChatsSeen: (options) ->
        for n in this.notifications
          n.seen = true if n.type == 'chat'
        this.unseenChats = 0
      markPostsSeen: (options) ->
        for n in this.notifications
          n.seen = true if n.type == 'post'
        this.unseenPosts = 0
    }
]

angular.module 'irisAngular'
  .component 'message',
    bindings:
      ipfs: '=?'
      msg: '='
      pageInfo: '=?'
      showRecipient: '=?'
      msgUtils: '='
    templateUrl: 'app/components/message/message.template.html'

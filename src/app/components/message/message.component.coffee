angular.module 'identifiAngular'
  .component 'message',
    bindings:
      ipfs: '=?'
      msg: '='
      pageInfo: '=?'
      showRecipient: '=?'
    templateUrl: 'app/components/message/message.template.html'

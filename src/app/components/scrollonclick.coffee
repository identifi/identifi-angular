angular.module 'irisAngular'
.directive 'scrollOnClick', ->
  (scope, elem, attr) ->
    elem.on 'click', (e) ->
      e.currentTarget.blur()
      $("html,body").animate({scrollTop: 0}, "slow")

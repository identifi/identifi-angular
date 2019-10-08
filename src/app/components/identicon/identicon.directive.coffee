# coffeelint: disable=max_line_length
angular.module 'irisAngular'
  .directive 'identicon', ->
    scope:
      identity: '='
      ipfs: '='
    link: (scope, element, attrs) ->
      attrs.showDistance = if typeof attrs.showDistance == 'undefined' then true else !!parseInt(attrs.showDistance)
      attrs.border = if isNaN(attrs.border) then 3 else attrs.border
      update = ->
        if scope.identity && scope.identity.identicon
          identicon = scope.identity.identicon
            width: attrs.width
            border: attrs.border
            showDistance: attrs.showDistance
            ipfs: scope.ipfs
            outerGlow: attrs.outerGlow
          element.empty()
          element.append(identicon)
      scope.$watchGroup ['identity'], update

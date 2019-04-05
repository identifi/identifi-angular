# coffeelint: disable=max_line_length
angular.module 'irisAngular'
  .directive 'videostream', ->
    scope:
      uri: '='
      ipfs: '='
    link: (scope, element, attrs) ->
      go = ->
        return unless scope.ipfs and scope.uri
        el = document.createElement('video')
        el.setAttribute('controls', true)
        el.setAttribute('style', 'max-width: 100%;')
        el.setAttribute('preload', 'metadata')
        el.addEventListener 'loadedmetadata', () ->
          el.play() # make it display poster (preview image). may load unnecessary amount of data?
          el.pause()
        stream = null
        videostream = new window.videostream
          createReadStream: (opts) ->
            start = opts.start
            end = if opts.end then start + opts.end + 1 else undefined
            console.log('asked for data starting at byte', start, 'and ending at byte', end)
            stream.destroy() if stream and stream.destroy
            stream = scope.ipfs.catReadableStream(scope.uri, { offset: start, length: end && end - start })
            stream.on 'error', console.error
            return stream
        , el
        element.append(el)
      scope.$watchGroup ['uri', 'ipfs'], go

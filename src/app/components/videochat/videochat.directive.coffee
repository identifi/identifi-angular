# coffeelint: disable=max_line_length
angular.module 'irisAngular'
  .directive 'videochat', ->
    scope:
      pubkey: '='
      gun: '='
    link: (scope, element, attrs) ->
      # from streamer.js
      mimeCodec = 'video/webm; codecs="opus,vp8"'
      console.log 'supported mimeCodec?', MediaSource.isTypeSupported(mimeCodec)
      DB_RECORD = 'streams'
      RECORD_TIME = 750
      castButton = undefined
      liveButton = undefined
      screenCastVideo = undefined
      currentTorrentId = undefined
      cameraStream = undefined
      screenStream = undefined
      mixer = undefined
      lastCastId = undefined
      listening = false
      mediaRecorder = undefined
      remoteVideo = undefined
      sourceBuffer = undefined
      mediaSource = undefined

      initStream = ->
        liveButton = document.createElement('button')
        liveButton.innerHTML = 'start'
        element.append(liveButton)
        liveButton.onclick = startCasting
        screenCastVideo = document.createElement('video')
        screenCastVideo.setAttribute('style', 'max-width:100%;background:darkgray;')
        screenCastVideo.setAttribute('autoplay', 'true')
        element.append(screenCastVideo)
        return

      startCasting = ->
        startCameraShare()
        startScreenShare()
        return

      startScreenShare = ->
        screenCastConstraints = video:
          width:
            max: 640
            ideal: 640
          height:
            max: 400
            ideal: 400
          aspectRatio: ideal: 1.7777777778
        navigator.mediaDevices.getDisplayMedia(screenCastConstraints).then ((stream) ->
          screenStream = stream
          startRecording()
          setLiveButton 'casting'
          return
        ), (error) ->
          showError error
          setLiveButton 'error'
          return
        return

      setLiveButton = (state) ->
        switch state
          when 'casting'
            liveButton.innerHTML = 'GO OFFLINE'
            liveButton.onclick = stopStream
          else
            liveButton.innerHTML = 'GO LIVE'
            liveButton.onclick = startCasting
            break
        return

      startCameraShare = ->
        cameraCastConstraints =
          video:
            width:
              max: 160
              ideal: 160
            height:
              max: 100
              ideal: 100
            aspectRatio: ideal: 1.7777777778
          audio:
            sampleRate: 22000
            sampleSize: 8
            channelCount: 2
            latency: 1000
        navigator.mediaDevices.getUserMedia(cameraCastConstraints).then ((stream) ->
          cameraStream = stream
          startRecording()
          return
        ), (error) ->
          showError error
          return
        return

      stopStream = ->
        setLiveButton ''
        stopRecording()
        screenCastVideo.srcObject = null
        mediaRecorder = null
        screenStream = null
        cameraStream = null
        return

      showError = (error) ->
        console.log 'Unable to capture', error
        return

      startRecording = ->
        if screenStream and cameraStream and !mediaRecorder
          resizeScreenStream()
          resizeCameraStream()
          mixer = new MultiStreamsMixer([
            screenStream
            cameraStream
          ])
          mixer.frameInterval = 1
          mixer.startDrawingFrames()
          screenCastVideo.srcObject = mixer.getMixedStream()
          mediaRecorder = new MediaStreamRecorder(screenCastVideo.captureStream())
          mediaRecorder.mimeType = mimeCodec
          mediaRecorder.ondataavailable = onBlobAvailable
          mediaRecorder.start RECORD_TIME
          document.getElementsByTagName('canvas')[0].hidden = true
        return

      resizeScreenStream = ->
        screenStream.fullcanvas = true
        screenStream.width = window.innerWidth
        screenStream.height = window.innerHeight
        return

      resizeCameraStream = ->
        cameraStream.width = parseInt(20 / 100 * screenStream.width)
        cameraStream.height = parseInt(20 / 100 * screenStream.height)
        cameraStream.top = screenStream.height - (cameraStream.height)
        cameraStream.left = screenStream.width - (cameraStream.width)
        return

      onBlobAvailable = (blob) ->
        t0 = performance.now()
        url = URL.createObjectURL(blob)
        console.log 'fetch', url
        fetch(url).then((response) ->
          response.arrayBuffer()
        ).then((arrayBuffer) ->
          URL.revokeObjectURL url
          # let base64String = btoa(String.fromCharCode(...new Uint8Array(data)));
          base64String = btoa(new Uint8Array(arrayBuffer).reduce(((data, byte) ->
            data + String.fromCharCode(byte)
            return
          ), ''))
          writeToGun base64String.toString()
          t1 = performance.now()
          # console.log("FETCH   to doSomething took " + (t1 - t0) + " milliseconds.");
          return
        ).catch (err) ->
          console.log 111, err
          return
        return

      writeToGun = (base64data) ->
        # var stream = scope.gun.get(myStreamId).put({name: base64data}, ack);
        # stream.get(DB_RECORD).set(stream);
        lastUpdate = (new Date).getTime()
        user = scope.gun.user().get('stream').put({
          name: base64data
          timestamp: lastUpdate
        }, ack)
        # scope.gun.get(DB_RECORD).set user
        # localStorage.clear()
        # scope.gun.get('stream/' + myStreamId).put({ name: base64data }, ack);
        return

      removeFromGun = ->
        # localStorage.clear()
        user = scope.gun.user().get('stream')
        # scope.gun.get(DB_RECORD).unset user
        user.put null
        return

      ack = (ack) ->
        console.log 'ack from gun write'
        if ack.ok != 1 and ack.err != 'Error: No ACK received yet.'
          # localStorage.clear()
          # console.log(ack);
        else
          # console.log(ack)
          # localStorage.clear()
        return

      stopRecording = ->
        removeFromGun()
        mediaRecorder.stop()
        screenStream.getTracks().forEach (track) ->
          track.stop()
          return
        cameraStream.getTracks().forEach (track) ->
          track.stop()
          return
        return

      # reader = new FileReader

      # from viewer.js
      # var scope.pubkey = "example";//window.location.hash.replace('#', '')
      startLoading = ->
        # URL.revokeObjectURL remoteVideo.src
        console.log 'reading from', scope.pubkey, 'stream'
        scope.gun.user(scope.pubkey).get('stream').on (data) ->
          # console.log(data.name.substring(0, 4));
          #Optimiation still needed?
          # if (data.name.startsWith("GkXf")) {
          # sourceBuffer.abort();
          # console.log("OFFSET" + sourceBuffer.timestampOffset);
          # console.log("BUFFERED" + sourceBuffer.buffered.length);
          # if (sourceBuffer.timestampOffset > RECORD_TIME) {
          #     sourceBuffer.remove(0, (sourceBuffer.timestampOffset - RECORD_TIME));
          #     localStorage.clear();
          # }
          console.log 'read from gun', data
          if !remoteVideo.paused or remoteVideo.played.length == 0
            t0 = performance.now()
            addToSourceBuffer data.name
            t1 = performance.now()
            # console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
            # localStorage.clear()
          # }
          return
        return

      addToSourceBuffer = (b64Data) ->
        byteCharacters = atob(b64Data)
        byteArray = str2ab(byteCharacters)
        console.log 'mediaSource', mediaSource
        console.log 'adding to source buffer', sourceBuffer
        if !sourceBuffer.updating
          sourceBuffer.appendBuffer byteArray
        return

      str2ab = (str) ->
        buf = new ArrayBuffer(str.length)
        bufView = new Uint8Array(buf)
        i = 0
        strLen = str.length
        while i < strLen
          bufView[i] = str.charCodeAt(i)
          i++
        buf

      sourceOpen = () ->
        ms = this
        sourceBuffer = ms.addSourceBuffer(mimeCodec)
        sourceBuffer.onupdate = (a,b,c,d) -> console.warn 'onupdate',a,b,c,d
        sourceBuffer.onerror = (a,b,c,d) -> console.warn 'onerror',a,b,c,d
        sourceBuffer.onupdateend = (a,b,c,d) -> console.warn 'onupdateend',a,b,c,d
        sourceBuffer.onupdatestart = (a,b,c,d) -> console.warn 'onupdatestart',a,b,c,d
        sourceBuffer.onabort = (a,b,c,d) -> console.error 'onabort',a,b,c,d
        sourceBuffer.mode = 'sequence'
        console.log 'sourceBuffer:', sourceBuffer
        startLoading()
        return

      # ---
      # generated by js2coffee 2.2.0

      # ---
      # generated by js2coffee 2.2.0

      go = ->
        return unless scope.gun and scope.pubkey
        initStream()

        remoteVideo = document.createElement('video')
        remoteVideo.setAttribute('style', 'max-width:100%;background:gray;')
        remoteVideo.setAttribute('autoplay', 'true')
        element.append(remoteVideo)
        mediaSource = new MediaSource
        url = URL.createObjectURL(mediaSource)
        remoteVideo.src = url
        mediaSource.addEventListener 'sourceopen', sourceOpen
        mediaSource.addEventListener 'sourceclose', (a,b,c,d) ->
          console.log 'sourceclose',a,b,c,d
        # localStorage.clear()
        # startLoading()
      scope.$watch 'gun', go

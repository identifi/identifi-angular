# coffeelint: disable=max_line_length
angular.module 'irisAngular'
  .directive 'videochat', ->
    scope:
      pubkey: '='
      gun: '='
      watchOnly: '='
    link: (scope, element, attrs) ->
      MIMETYPE_VIDEO_AUDIO = 'video/webm; codecs="opus,vp8"'
      MIMETYPE_VIDEO_ONLY = 'video/webm; codecs="vp8"'
      MIMETYPE_AUDIO_ONLY = 'video/webm; codecs="opus"'
      MIME_TYPE_USE = MIMETYPE_VIDEO_AUDIO
      #Change to the correct one once you change
      STREAM_ID = 'remote'
      #Probably need a dynamic one make sure your video id is the same for the viewer
      #Config for camera recorder
      CAMERA_OPTIONS =
        video:
          width: 320
          height: 280
          facingMode: 'environment'
          frameRate: 24
        audio: true
      #Configure GunViewer
      viewer_config =
        mimeType: MIME_TYPE_USE
        streamerId: STREAM_ID
        catchup: false
        debug: false
      gunViewer = new GunViewer(viewer_config)
      #Configure GUN to pass to streamer
      peers = [ 'https://gunmeetingserver.herokuapp.com/gun' ]
      opt =
        peers: peers
        localStorage: false
        radisk: false
      gunDB = Gun(opt)
      # Get data from gun and pass along to viewer
      gunDB.get(STREAM_ID).on (data) ->
        gunViewer.onStreamerData data
        return
      #Config for the GUN GunStreamer
      streamer_config =
        dbRecord: 'gunmeeting'
        streamId: STREAM_ID
        gun: gunDB
        debug: false
        onStreamerData: gunViewer.onStreamerData
        url: '/assets/js/parser_worker.js'
      #GUN Streamer is the data side. It will convert data and write to GUN db
      gunStreamer = new GunStreamer(streamer_config)
      #This is a callback function about the recording state, following states possible
      # STOPPED: 1¸
      # RECORDING:2
      # NOT_AVAILABLE:3
      # UNKNOWN:4

      startCameraButton = document.createElement('button')
      startCameraButton.innerText = 'start camera'
      startCameraButton.setAttribute 'class', 'btn btn-default'
      startCameraButton.addEventListener 'click', () -> gunRecorder.startCamera()
      element.append startCameraButton

      recordButton = document.createElement('button')
      recordButton.innerHtml = '<span class="glyphicon glyphicon-facetime-video mar-right5"></span> Go live'
      recordButton.setAttribute 'class', 'btn btn-default'
      recordButton.addEventListener 'click', () -> gunRecorder.record()
      element.append recordButton
      onRecordStateChange = (state) ->
        switch state
          when recordState.RECORDING
            recordButton.innerHtml = '<span class="glyphicon glyphicon-facetime-video mar-right5"></span> Go offline'
          else
            recordButton.innerHtml = '<span class="glyphicon glyphicon-facetime-video mar-right5"></span> Go live'
            break
        return

      remoteVideo = document.createElement("video")
      remoteVideo.autoplay = true
      remoteVideo.controls = true
      remoteVideo.playsinline = true
      remoteVideo.style.display = "none"
      remoteVideo.style.width = "50%"
      remoteVideo.preload = "none"
      remoteVideo.id = "remote"
      element.append remoteVideo
      myVideo = document.createElement('video')
      myVideo.setAttribute('autoplay', true)
      myVideo.setAttribute('style', 'width: 100%;')
      myVideo.setAttribute('playsinline', true)
      myVideo.setAttribute('controls', true)
      myVideo.id = 'record_video'
      element.append myVideo

      recorder_config =
        mimeType: MIME_TYPE_USE
        video_id: 'record_video'
        onDataAvailable: gunStreamer.onDataAvailable
        onRecordStateChange: onRecordStateChange
        recordInterval: 800
        cameraOptions: CAMERA_OPTIONS
        debug: false
      #Init the recorder
      gunRecorder = new GunRecorder(recorder_config)

      element.on '$destroy', ->
        gunRecorder.setRecordingState(recordState.STOPPED)

      go = ->
        return unless scope.gun and scope.pubkey
        u = scope.gun.user()
        myPubKey = if u._.sea then u._.sea.pub else undefined
        if myPubKey != scope.pubkey
          if scope.watchOnly
            # buttonRow.style.display = 'none'
            remoteVideo.style.width = '100%'
            myVideo.style.display = 'none'
          myVideo.style.width = '50%'
          remoteVideo.style.display = 'inline-block'
          # openRemoteVideo()
        else
          myVideo.style.width = '100%'
          remoteVideo.style.display = 'none'
        streamId = myPubKey + '/stream'
      scope.$watch 'gun', go

###

      MIMETYPE = 'video/webm; codecs="opus,vp8"'
      RECORD_TIME = 500
      DEBUG = false
      PREFIX_RECORDER = 'data:video/webm; codecs="opus,vp8";base64,'
      DB_RECORD = 'gunmeeting'
      LOCAL = false
      RECORD_PREFIX = 'GkXf'
      SPEECH_DETECTION_ENABLED = false
      constraints = video: true
      recordedChunks = []
      mediaRecorder = undefined
      gunDB = undefined
      speechDetected = true
      initialData = undefined
      w = undefined
      code = -1

      LOG = (args...) ->
        console.log args... if DEBUG

      Streamer = (videoId, streamVideo) ->
        @id = videoId
        @streamVideo = streamVideo

        @init = ->
          @sourceBuffer = null
          @mediaSource = new MediaSource
          initViewer this
          return

        return

      initViewer = (streamer) ->
        streamer.streamVideo.src = window.URL.createObjectURL(streamer.mediaSource)
        streamer.mediaSource.addEventListener 'sourceopen', ->
          streamer.sourceBuffer = streamer.mediaSource.addSourceBuffer(MIMETYPE)
          streamer.sourceBuffer.mode = 'sequence'
          # Get video segments and append them to sourceBuffer.
          LOG 'Source is open and ready to append to sourcebuffer'
          if !LOCAL
            gunDB.get(streamer.id).on (data) ->
              if !check(streamer, data)
                streamer.streamVideo.style.visibility = "hidden"
                # streamer.streamVideo.parentElement.remove()
              else
                streamer.streamVideo.style.visibility = 'visible'
                if SPEECH_DETECTION_ENABLED
                  if data.isSpeaking
                    streamer.streamVideo.muted = false
                  else
                    streamer.streamVideo.muted = true
              LOG 'Tracks Video ::' + streamer.streamVideo.HAVE_METADATA
              # LOG("Tracks Buffer::" + streamer.sourceBuffer.videoTracks.length)
              # if (streamer.streamVideo.videoTracks.length > 0 && streamer.streamVideo.videoTracks.selectedIndex != -1) {
              if streamer.streamVideo.readyState != 0
                onString streamer, data.name
              else
                onString streamer, data.initial
              if streamer.streamVideo.readyState >= 2 and streamer.streamVideo.paused
                streamer.streamVideo.play()
              return
          return
        return

      check = (streamer, data) ->
        LOG JSON.stringify(streamer)
        LOG JSON.stringify(data.timestamp)
        currentTime = (new Date).getTime()
        difference = (currentTime - (data.timestamp)) / 1000
        LOG 'TIME::' + difference
        if difference > 120
          LOG 'remove::' + streamer.id
          removeFromGun streamer.id
          false
        else
          LOG 'keep::' + streamer.id
          true

      onString = (streamer, rawData) ->
        byteCharacters = atob(rawData)
        byteArray = str2ab(byteCharacters)
        addToBuffer streamer, byteArray
        byteCharacters = null
        byteArray = null
        return

      addToBuffer = (streamer, byteArray) ->
        # if (document.hidden) {
        #     LOG("Not Focused tab not adding to buffer")
        # }
        if !streamer.sourceBuffer.updating
          # if (streamer.sourceBuffer.buffered.length > 1) {
          #     streamer.sourceBuffer.remove(0, streamer.sourceBuffer.buffered.end(streamer.sourceBuffer.buffered.length - 1))
          # }
          LOG 'READY STATE::' + streamer.streamVideo.readyState
          # var hasEnough = streamer.streamVideo.readyState == 3 && treamer.streamVideo.readyState == 4
          # if (streamer.sourceBuffer.timestampOffset != 0 && hasEnough) {
          #     try {
          #         LOG("Reset offset::" + streamer.sourceBuffer.timestampOffset)
          #         streamer.sourceBuffer.timestampOffset = 0
          #         LOG("Did reset::" + streamer.sourceBuffer.timestampOffset)
          #     } catch (err) {
          #         code = 11
          #         LOG(err)
          #     }
          # } else {
          #     code = -1
          LOG 'Adding::' + JSON.stringify(streamer)
          streamer.sourceBuffer.appendBuffer byteArray
          # }
        else
          LOG 'BUFFER STILL BUSY'
        return

      str2ab = (str) ->
        buf = new ArrayBuffer(str.length)
        bufView = new Uint8Array(buf)
        i = 0
        strLen = str.length
        while i < strLen
          bufView[i] = str.charCodeAt(i)
          i++
        bufView = null
        buf

      # ---
      # generated by js2coffee 2.2.0

      isRecording = ->
        if mediaRecorder and mediaRecorder.state == 'recording'
          return true
        else
          false
        return

      pauseRecording = ->
        stopWorker()
        mediaRecorder.stop()
        return

      captureScreen = (stream) ->
        LOG 'Capture'
        if !mediaRecorder or mediaRecorder.state == 'inactive'
          recordStream stream
          if SPEECH_DETECTION_ENABLED
            attachSpeechDetection stream
        else
          stopWorker()
          mediaRecorder.stop()
        return

      recordStream = (stream) ->
        options =
          mimeType: MIMETYPE
          audioBitsPerSecond: 6000
          videoBitsPerSecond: 100000
        mediaRecorder = new MediaRecorder(stream, options)
        mediaRecorder.ondataavailable = onDataAvailable
        mediaRecorder.start RECORD_TIME
        startWorker()
        LOG 'Media recorder initiated'
        # setInterval(myTimer, RECORD_TIME)
        return

      myTimer = ->
        if mediaRecorder
          mediaRecorder.requestData()
        return

      startWorker = ->
        if typeof Worker != 'undefined'
          if typeof w == 'undefined'
            w = new Worker('assets/js/parser_worker.js')

          w.onmessage = (e) ->
            message = e.data
            writeToGun message
            return

        else
          LOG 'Sorry! No Web Worker support.'
        return

      stopWorker = ->
        w.terminate()
        w = undefined
        return

      onDataAvailable = (blobEvent) ->
        # LOG("Received data " + formatBytes(blobEvent.data.size))
        # addToAllRecordedChunks(blobEvent.data)
        if blobEvent.data and blobEvent.data.size
          # useBlob(blobEvent.data)
          useString blobEvent.data
        else
          LOG 'SKIP NO DATA?'
        return

      useBlob = (blob) ->
        onBlob blob
        return

      useString = (blob) ->
        response = new Response(blob).arrayBuffer().then((arrayBuffer) ->
          blob = null
          if LOCAL
            # onString(base64String)
          else
            if w != undefined
              w.postMessage arrayBuffer
            # parseSelf(arrayBuffer)
            # var data = new Uint8Array(arrayBuffer)
            # window.cl.write(data)
            # data = null
            # arrayBuffer = null
          return
        )
        response = null
        return

      # function useString(blob) {
      #     var url = URL.createObjectURL(blob)
      #     fetch(url).then(function (response) {
      #         URL.revokeObjectURL(url)
      #         return response.arrayBuffer()
      #     }).then(function (arrayBuffer) {
      #         // var base64String = btoa(
      #         //     new Uint8Array(arrayBuffer)
      #         //         .reduce((onData, byte) => onData + String.fromCharCode(byte), '')
      #         // )
      #         // LOG(buf2hex(arrayBuffer))
      #         // LOG(Utf8ArrayToStr(new Uint8Array(arrayBuffer)))
      #         if (LOCAL) {
      #             // onString(base64String)
      #         } else {
      #             window.cl.write(new Uint8Array(arrayBuffer))
      #             // writeToGun(base64String)
      #         }
      #         base64String = null
      #     })
      # }

      Utf8ArrayToStr = (array) ->
        out = undefined
        i = undefined
        len = undefined
        c = undefined
        char2 = undefined
        char3 = undefined
        out = ''
        len = array.length
        i = 0
        while i < len
          c = array[i++]
          switch c >> 4
            when 0, 1, 2, 3, 4, 5, 6, 7
              # 0xxxxxxx
              out += String.fromCharCode(c)
            when 12, 13
              # 110x xxxx   10xx xxxx
              char2 = array[i++]
              out += String.fromCharCode((c & 0x1F) << 6 | char2 & 0x3F)
            when 14
              # 1110 xxxx  10xx xxxx  10xx xxxx
              char2 = array[i++]
              char3 = array[i++]
              out += String.fromCharCode((c & 0x0F) << 12 | (char2 & 0x3F) << 6 | (char3 & 0x3F) << 0)
        out

      buf2hex = (buffer) ->
        # buffer is an ArrayBuffer
        Array::map.call(new Uint8Array(buffer), (x) ->
          ('00' + x.toString(16)).slice -2
        ).join ''

      writeToGun = (base64data) ->
        n = n || undefined
        LOG 'Write to GUN::' + base64data.substring(0, 100)
        lastUpdate = (new Date).getTime()
        user = undefined
        if initialData == undefined and base64data.startsWith(RECORD_PREFIX)
          LOG 'INITIAL'
          n = base64data.indexOf('wIEB')
          LOG 'RAW::' + n + '::' + base64data.substring(0, 252)
          initialData = base64data.substring(0, 252)
        else
          n = base64data.indexOf('H0O2dQH')
          LOG 'RAW::' + n + '::' + base64data
        LOG('streamId', streamId)
        user = gunDB.get(streamId).put({
          initial: initialData
          name: base64data
          id: streamId
          timestamp: lastUpdate
          isSpeaking: speechDetected
        }, ACK)
        gunDB.get(DB_RECORD).set user
        return

      addToAllRecordedChunks = (chunk) ->
        recordedChunks.push chunk
        superBuffer = new Blob(recordedChunks)
        LOG 'Total data size ' + formatBytes(superBuffer.size)
        return

      formatBytes = (bytes) ->
        if bytes < 1024
          bytes + ' Bytes'
        else if bytes < 1048576
          (bytes / 1024).toFixed(3) + ' KB'
        else if bytes < 1073741824
          (bytes / 1048576).toFixed(3) + ' MB'
        else
          (bytes / 1073741824).toFixed(3) + ' GB'

      attachSpeechDetection = (stream) ->
        options = {}
        speechEvents = hark(stream, options)
        speechEvents.on 'speaking', ->
          if SPEECH_DETECTION_ENABLED
            speechDetected = true
            LOG 'speaking'
          return
        speechEvents.on 'stopped_speaking', ->
          if SPEECH_DETECTION_ENABLED
            LOG 'stopped_speaking'
            speechDetected = false
          return
        return



      # Dom elements name constants
      REMOTE_VIDEO = 'video'
      #ID
      streamId = Date.now()
      # GUN ACK
      remoteVideo = document.createElement("video")
      remoteVideo.autoplay = true
      remoteVideo.controls = true
      remoteVideo.playsinline = true
      remoteVideo.style.display = "none"
      remoteVideo.style.width = "50%"
      remoteVideo.preload = "none"
      myVideo = document.createElement('video')
      myVideo.setAttribute('autoplay', true)
      myVideo.setAttribute('style', 'width: 100%;')
      myVideo.setAttribute('playsinline', true)
      myVideo.setAttribute('controls', true)
      element.append(myVideo)
      element.append(remoteVideo)
      buttonRow = document.createElement 'p'
      goLiveButton = document.createElement('button')
      goLiveButton.innerHTML = '<span class="glyphicon glyphicon-facetime-video mar-right5"></span> Go live'
      goLiveButton.setAttribute 'class', 'btn btn-default'
      buttonRow.append(goLiveButton)
      #toggleFullScreenButton = document.createElement('button')
      #toggleFullScreenButton.innerHTML = 'toggle fullscreen'
      #toggleFullScreenButton.setAttribute 'class', 'btn btn-default'
      #p.append(toggleFullScreenButton)
      switchCameraButton = document.createElement('button')
      switchCameraButton.innerHTML = 'Switch camera'
      switchCameraButton.style = 'display:none;'
      switchCameraButton.setAttribute 'class', 'btn btn-default'
      buttonRow.append(switchCameraButton)
      element.append buttonRow
      amountOfCameras = 0
      currentFacingMode = 'environment'
      gunDB = undefined

      ACK = (ack) ->
        if ack.ok != 1 and ack.err != 'Error: No ACK received yet.'
          LOG 'ack', ack
          # localStorage.clear()
        else
          LOG 'ack', ack
          # localStorage.clear()
        return

      removeFromGun = (id) ->
        # localStorage.clear()
        user = gunDB.get(streamId)
        gunDB.get(DB_RECORD).unset user
        # user.put null # can't put null to root level node
        return

      debug = (text) ->
        if DEBUG
          LOG text
        return

      initCameraUI = ->
        # https://developer.mozilla.org/nl/docs/Web/HTML/Element/button
        # https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_button_role
        goLiveButton.addEventListener 'click', ->
          takeSnapshot()
          return
        # -- switch camera part
        if amountOfCameras > 1
          switchCameraButton.style.display = 'inline-block'
          switchCameraButton.addEventListener 'click', ->
            if currentFacingMode == 'environment'
              currentFacingMode = 'user'
            else
              currentFacingMode = 'environment'
            initCameraStream()
            return
        return

      # https://github.com/webrtc/samples/blob/gh-pages/src/content/devices/input-output/js/main.js

      closeCameraStream = ->
        if window.stream
          window.stream.getTracks().forEach (track) ->
            track.stop()

      element.on '$destroy', ->
        closeCameraStream()

      initCameraStream = ->
        # stop any active streams in the window

        handleSuccess = (stream) ->
          window.stream = stream
          # make stream available to browser console
          myVideo.srcObject = stream
          myVideo.muted = true
          if constraints.video.facingMode
            if constraints.video.facingMode == 'environment'
              switchCameraButton.setAttribute 'aria-pressed', true
            else
              switchCameraButton.setAttribute 'aria-pressed', false
          navigator.mediaDevices.enumerateDevices()

        handleError = (error) ->
          LOG error
          #https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
          if error == 'PermissionDeniedError'
            alert 'Permission denied. Please refresh and give permission.'
          return

        closeCameraStream()

        constraints =
          audio: true
          video:
            width:
              min: 200
              ideal: 200
              max: 640
            height:
              min: 200
              ideal: 200
              max: 640
            facingMode: currentFacingMode
        navigator.mediaDevices.getUserMedia(constraints).then(handleSuccess).catch handleError
        return

      takeSnapshot = ->
        if !isRecording()
          captureScreen window.stream
          goLiveButton.style.backgroundColor = 'red'
          switchCameraButton.disabled = true
        else
          pauseRecording()
          goLiveButton.style.backgroundColor = ''
          switchCameraButton.disabled = false
        return

      openRemoteVideo = ->
        id = scope.pubkey + '/stream'
        streamer = new Streamer(id, remoteVideo)
        streamer.init()

      go = ->
        return unless scope.gun and scope.pubkey
        u = scope.gun.user()
        myPubKey = if u._.sea then u._.sea.pub else undefined
        if myPubKey != scope.pubkey
          if scope.watchOnly
            buttonRow.style.display = 'none'
            remoteVideo.style.width = '100%'
            myVideo.style.display = 'none'
          myVideo.style.width = '50%'
          remoteVideo.style.display = 'inline-block'
          openRemoteVideo()
        else
          myVideo.style.width = '100%'
          remoteVideo.style.display = 'none'
        streamId = myPubKey + '/stream'
        # gunDB = scope.gun.back(-1)
        # GUN
        peers = [ 'https://gunmeetingserver.herokuapp.com/gun' ]
        opt =
          peers: peers
          localStorage: false
          radisk: false
        gunDB = Gun(opt)
        removeFromGun streamId

        unless scope.watchOnly
          # do some WebRTC checks before creating the interface
          DetectRTC.load ->
            # do some checks
            if DetectRTC.isWebRTCSupported == false
              alert 'Please use Chrome, Firefox, iOS 11, Android 5 or higher, Safari 11 or higher'
            else
              if DetectRTC.hasWebcam == false
                alert 'Please install an external webcam device.'
              else
                amountOfCameras = DetectRTC.videoInputDevices.length
                initCameraUI()
                initCameraStream()
            LOG 'RTC Debug info: ' + '\n OS:                   ' + DetectRTC.osName + ' ' + DetectRTC.osVersion + '\n browser:              ' + DetectRTC.browser.fullVersion + ' ' + DetectRTC.browser.name + '\n is Mobile Device:     ' + DetectRTC.isMobileDevice + '\n has webcam:           ' + DetectRTC.hasWebcam + '\n has permission:       ' + DetectRTC.isWebsiteHasWebcamPermission + '\n getUserMedia Support: ' + DetectRTC.isGetUserMediaSupported + '\n isWebRTC Supported:   ' + DetectRTC.isWebRTCSupported + '\n WebAudio Supported:   ' + DetectRTC.isAudioContextSupported + '\n is Mobile Device:     ' + DetectRTC.isMobileDevice

      scope.$watch 'gun', go
###

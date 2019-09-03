# coffeelint: disable=max_line_length
angular.module 'irisAngular'
  .directive 'videochat', ->
    scope:
      pubkey: '='
      gun: '='
    link: (scope, element, attrs) ->
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
        console.log 'Capture'
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
        console.log 'Media recorder initiated'
        # setInterval(myTimer, RECORD_TIME);
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
          console.log 'Sorry! No Web Worker support.'
        return

      stopWorker = ->
        w.terminate()
        w = undefined
        return

      onDataAvailable = (blobEvent) ->
        # console.log("Received data " + formatBytes(blobEvent.data.size));
        # addToAllRecordedChunks(blobEvent.data);
        if blobEvent.data and blobEvent.data.size
          # useBlob(blobEvent.data);
          useString blobEvent.data
        else
          console.log 'SKIP NO DATA?'
        return

      useBlob = (blob) ->
        onBlob blob
        return

      useString = (blob) ->
        response = new Response(blob).arrayBuffer().then((arrayBuffer) ->
          blob = null
          if LOCAL
            # onString(base64String);
          else
            if w != undefined
              w.postMessage arrayBuffer
            # parseSelf(arrayBuffer);
            # var data = new Uint8Array(arrayBuffer)
            # window.cl.write(data);
            # data = null;
            # arrayBuffer = null;
          return
        )
        response = null
        return

      # function useString(blob) {
      #     var url = URL.createObjectURL(blob);
      #     fetch(url).then(function (response) {
      #         URL.revokeObjectURL(url);
      #         return response.arrayBuffer();
      #     }).then(function (arrayBuffer) {
      #         // var base64String = btoa(
      #         //     new Uint8Array(arrayBuffer)
      #         //         .reduce((onData, byte) => onData + String.fromCharCode(byte), '')
      #         // );
      #         // console.log(buf2hex(arrayBuffer));
      #         // console.log(Utf8ArrayToStr(new Uint8Array(arrayBuffer)));
      #         if (LOCAL) {
      #             // onString(base64String);
      #         } else {
      #             window.cl.write(new Uint8Array(arrayBuffer));
      #             // writeToGun(base64String);
      #         }
      #         base64String = null;
      #     });
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
        `var n`
        console.log 'Write to GUN::' + base64data.substring(0, 100)
        lastUpdate = (new Date).getTime()
        user = undefined
        if initialData == undefined and base64data.startsWith(RECORD_PREFIX)
          console.log 'INITIAL'
          n = base64data.indexOf('wIEB')
          console.log 'RAW::' + n + '::' + base64data.substring(0, 252)
          initialData = base64data.substring(0, 252)
        else
          n = base64data.indexOf('H0O2dQH')
          console.log 'RAW::' + n + '::' + base64data
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
        console.log 'Total data size ' + formatBytes(superBuffer.size)
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
            console.log 'speaking'
          return
        speechEvents.on 'stopped_speaking', ->
          if SPEECH_DETECTION_ENABLED
            console.log 'stopped_speaking'
            speechDetected = false
          return
        return



      # Dom elements name constants
      REMOTE_VIDEO = 'video'
      #ID
      streamId = Date.now()
      # GUN ACK
      video = document.createElement('video')
      video.setAttribute('autoplay', true)
      video.setAttribute('style', 'max-width: 100%;')
      video.setAttribute('playsinline', true)
      video.setAttribute('muted', true)
      video.setAttribute('controls', true)
      element.append(video)
      takePhotoButton = document.createElement('button')
      takePhotoButton.innerHTML = 'take photo'
      element.append(takePhotoButton)
      toggleFullScreenButton = document.createElement('button')
      toggleFullScreenButton.innerHTML = 'toggle fullscreen'
      element.append(toggleFullScreenButton)
      switchCameraButton = document.createElement('button')
      switchCameraButton.innerHTML = 'switch camera'
      element.append(switchCameraButton)
      muteButton = document.createElement('button')
      muteButton.innerHTML = 'mute'
      element.append(muteButton)
      amountOfCameras = 0
      currentFacingMode = 'environment'
      muted = true
      gunDB = undefined

      ACK = (ack) ->
        if ack.ok != 1 and ack.err != 'Error: No ACK received yet.'
          console.log ack
          # localStorage.clear()
        else
          console.log ack
          # localStorage.clear()
        return

      removeFromGun = (id) ->
        # localStorage.clear()
        user = gunDB.get(streamId)
        gunDB.get(DB_RECORD).unset user
        user.put null
        return

      # Debug console log helper

      console.log = (text) ->
        if DEBUG
          console.log text
        return

      debug = (text) ->
        if DEBUG
          console.log text
        return

      initCameraUI = ->
        # https://developer.mozilla.org/nl/docs/Web/HTML/Element/button
        # https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_button_role
        takePhotoButton.addEventListener 'click', ->
          takeSnapshot()
          return
        muteButton.addEventListener 'click', ->
          muteUnmute()
          return
        # -- switch camera part
        if amountOfCameras > 1
          switchCameraButton.style.display = 'block'
          switchCameraButton.addEventListener 'click', ->
            if currentFacingMode == 'environment'
              currentFacingMode = 'user'
            else
              currentFacingMode = 'environment'
            initCameraStream()
            return
        return

      # https://github.com/webrtc/samples/blob/gh-pages/src/content/devices/input-output/js/main.js

      initCameraStream = ->
        # stop any active streams in the window

        handleSuccess = (stream) ->
          window.stream = stream
          # make stream available to browser console
          video.srcObject = stream
          if constraints.video.facingMode
            if constraints.video.facingMode == 'environment'
              switchCameraButton.setAttribute 'aria-pressed', true
            else
              switchCameraButton.setAttribute 'aria-pressed', false
          navigator.mediaDevices.enumerateDevices()

        handleError = (error) ->
          console.log error
          #https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
          if error == 'PermissionDeniedError'
            alert 'Permission denied. Please refresh and give permission.'
          return

        if window.stream
          window.stream.getTracks().forEach (track) ->
            track.stop()
            return
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
          takePhotoButton.style.backgroundColor = 'red'
          switchCameraButton.disabled = true
        else
          pauseRecording()
          takePhotoButton.style.backgroundColor = ''
          switchCameraButton.disabled = false
        return

      muteUnmute = ->
        if muted
          muteButton.setAttribute 'aria-pressed', false
          muted = false
        else
          muteButton.setAttribute 'aria-pressed', true
          muted = true
        videos = document.getElementsByTagName('video')
        keys = Object.keys(videos)
        i = 0
        while i < keys.length
          if videos[i].id != 'video'
            videos[i].muted = muted
          i++
        return

      go = ->
        return unless scope.gun and scope.pubkey

        streamId = 'iris'
        console.log streamId
        # GUN
        # var peers = ['https://livecodegun.herokuapp.com/gun'];
        peers = [ 'https://gunmeetingserver.herokuapp.com/gun' ]
        opt =
          peers: peers
          localStorage: false
          radisk: false
        gunDB = Gun(opt)
        removeFromGun streamId

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
          console.log 'RTC Debug info: ' + '\n OS:                   ' + DetectRTC.osName + ' ' + DetectRTC.osVersion + '\n browser:              ' + DetectRTC.browser.fullVersion + ' ' + DetectRTC.browser.name + '\n is Mobile Device:     ' + DetectRTC.isMobileDevice + '\n has webcam:           ' + DetectRTC.hasWebcam + '\n has permission:       ' + DetectRTC.isWebsiteHasWebcamPermission + '\n getUserMedia Support: ' + DetectRTC.isGetUserMediaSupported + '\n isWebRTC Supported:   ' + DetectRTC.isWebRTCSupported + '\n WebAudio Supported:   ' + DetectRTC.isAudioContextSupported + '\n is Mobile Device:     ' + DetectRTC.isMobileDevice
          return
        return


      scope.$watch 'gun', go

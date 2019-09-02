# coffeelint: disable=max_line_length
angular.module 'irisAngular'
  .directive 'videochat', ->
    scope:
      pubkey: '='
      gun: '='
    link: (scope, element, attrs) ->
      # Constants
      DEBUG = false
      MIMETYPE = 'video/webm; codecs="opus,vp8"'
      RECORD_TIME = 500
      PREFIX_RECORDER = 'data:video/webm; codecs="opus,vp8";base64,'
      DB_RECORD = 'gunmeeting'
      LOCAL = false
      RECORD_PREFIX = 'GkXf'
      SPEECH_DETECTION_ENABLED = false
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

      scope.$watch 'gun', go

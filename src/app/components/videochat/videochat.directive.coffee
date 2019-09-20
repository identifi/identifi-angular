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
      REMOTE_STREAM_ID = scope.pubkey + '/stream'

      remoteVideo = document.createElement("video")
      remoteVideo.autoplay = true
      remoteVideo.controls = true
      remoteVideo.playsinline = true
      remoteVideo.style.display = "none"
      remoteVideo.style.width = "50%"
      remoteVideo.preload = "none"
      remoteVideo.id = REMOTE_STREAM_ID
      element.append remoteVideo
      myVideo = document.createElement('video')
      myVideo.setAttribute('autoplay', true)
      myVideo.setAttribute('style', 'width: 100%;')
      myVideo.setAttribute('playsinline', true)
      myVideo.setAttribute('controls', true)
      myVideo.id = 'record_video'
      element.append myVideo

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
        streamerId: REMOTE_STREAM_ID
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
      gunDB.get(REMOTE_STREAM_ID).on (data) ->
        gunViewer.onStreamerData data
        return

      u = scope.gun.user()
      myPubKey = if u._.sea then u._.sea.pub else undefined
      #Config for the GUN GunStreamer
      streamer_config =
        dbRecord: 'gunmeeting'
        streamId: myPubKey + '/stream'
        gun: gunDB
        debug: false
        onStreamerData: gunViewer.onStreamerData
        url: '/assets/js/parser_worker.js'
      #GUN Streamer is the data side. It will convert data and write to GUN db
      gunStreamer = new GunStreamer(streamer_config)

      startCameraButton = document.createElement('button')
      startCameraButton.innerText = 'start camera'
      startCameraButton.setAttribute 'class', 'btn btn-default'
      startCameraButton.addEventListener 'click', () -> gunRecorder.startCamera()
      element.append startCameraButton

      startScreenCaptureButton = document.createElement('button')
      startScreenCaptureButton.innerText = 'start screen capture'
      startScreenCaptureButton.setAttribute 'class', 'btn btn-default'
      startScreenCaptureButton.addEventListener 'click', () -> gunRecorder.startScreenCapture()
      element.append startScreenCaptureButton

      recordButton = document.createElement('button')
      #recordButton.innerHtml = '<span class="glyphicon glyphicon-facetime-video mar-right5"></span> Go live'
      recordButton.innerText = 'go live'
      recordButton.setAttribute 'class', 'btn btn-default'
      recordButton.addEventListener 'click', () -> gunRecorder.record()
      element.append recordButton

      #This is a callback function about the recording state, following states possible
      # STOPPED: 1¸
      # RECORDING:2
      # NOT_AVAILABLE:3
      # UNKNOWN:4
      onRecordStateChange = (state) ->
        switch state
          when recordState.RECORDING
            recordButton.innerHtml = '<span class="glyphicon glyphicon-facetime-video mar-right5"></span> Go offline'
          else
            recordButton.innerHtml = '<span class="glyphicon glyphicon-facetime-video mar-right5"></span> Go live'
            break
        return

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

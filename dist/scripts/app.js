(function() {
  angular.module('irisAngular', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'ui.bootstrap', 'angular-parallax', 'infinite-scroll', 'LocalStorageModule', 'rzSlider', 'angular-clipboard', 'monospaced.qrcode', 'ngFileUpload', 'qrScanner', 'hm.readmore', 'ui-notification', 'angular-notification-icons']);

  angular.module('irisAngular').filter('escape', [
    function() {
      return function(input) {
        return encodeURIComponent(encodeURIComponent(input));
      };
    }
  ]);

  angular.module('irisAngular').filter('encodeURIComponent', [
    function() {
      return function(input) {
        return encodeURIComponent(input);
      };
    }
  ]);

  angular.module('irisAngular').filter('highlight', function($sce) {
    return function(text, phrase) {
      if (typeof text === 'string' && phrase) {
        text = text.replace(new RegExp('(' + phrase + ')', 'gi'), '<b>$1</b>');
        return $sce.trustAsHtml(text.toString());
      }
      return text;
    };
  });

  angular.module('irisAngular').filter('ordinal', function() {
    return function(input) {
      var s, v;
      s = ['th', 'st', 'nd', 'rd'];
      v = input % 100;
      return input + (s[(v - 20) % 10] || s[v] || s[0]);
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgubW9kdWxlLmpzIiwic291cmNlcyI6WyJpbmRleC5tb2R1bGUuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxhQUFmLEVBQ0UsQ0FBQyxXQUFELEVBQWMsV0FBZCxFQUEyQixTQUEzQixFQUFzQyxZQUF0QyxFQUFvRCxZQUFwRCxFQUNBLFFBREEsRUFDVSxZQURWLEVBQ3dCLFdBRHhCLEVBQ3FDLGNBRHJDLEVBQ3FELGtCQURyRCxFQUVBLGlCQUZBLEVBRW1CLG9CQUZuQixFQUV5QyxVQUZ6QyxFQUVxRCxtQkFGckQsRUFHQSxtQkFIQSxFQUdxQixjQUhyQixFQUdxQyxXQUhyQyxFQUdrRCxhQUhsRCxFQUlBLGlCQUpBLEVBSW1CLDRCQUpuQixDQURGOztFQU9BLE9BQU8sQ0FBQyxNQUFSLENBQWUsYUFBZixDQUE2QixDQUFDLE1BQTlCLENBQXFDLFFBQXJDLEVBQStDO0lBQUUsUUFBQSxDQUFBLENBQUE7YUFDL0MsUUFBQSxDQUFDLEtBQUQsQ0FBQTtlQUNFLGtCQUFBLENBQW1CLGtCQUFBLENBQW1CLEtBQW5CLENBQW5CO01BREY7SUFEK0MsQ0FBRjtHQUEvQzs7RUFJQSxPQUFPLENBQUMsTUFBUixDQUFlLGFBQWYsQ0FBNkIsQ0FBQyxNQUE5QixDQUFxQyxvQkFBckMsRUFBMkQ7SUFBRSxRQUFBLENBQUEsQ0FBQTthQUMzRCxRQUFBLENBQUMsS0FBRCxDQUFBO2VBQ0Usa0JBQUEsQ0FBbUIsS0FBbkI7TUFERjtJQUQyRCxDQUFGO0dBQTNEOztFQUtBLE9BQU8sQ0FBQyxNQUFSLENBQWUsYUFBZixDQUE2QixDQUFDLE1BQTlCLENBQXFDLFdBQXJDLEVBQWtELFFBQUEsQ0FBQyxJQUFELENBQUE7V0FDaEQsUUFBQSxDQUFDLElBQUQsRUFBTyxNQUFQLENBQUE7TUFDRSxJQUFHLE9BQU8sSUFBUCxLQUFlLFFBQWYsSUFBNEIsTUFBL0I7UUFDRSxJQUFBLEdBQU8sSUFBSSxDQUFDLE9BQUwsQ0FBYSxJQUFJLE1BQUosQ0FBVyxHQUFBLEdBQU0sTUFBTixHQUFlLEdBQTFCLEVBQStCLElBQS9CLENBQWIsRUFBbUQsV0FBbkQ7QUFDUCxlQUFPLElBQUksQ0FBQyxXQUFMLENBQWlCLElBQUksQ0FBQyxRQUFMLENBQUEsQ0FBakIsRUFGVDs7QUFHQSxhQUFPO0lBSlQ7RUFEZ0QsQ0FBbEQ7O0VBT0EsT0FBTyxDQUFDLE1BQVIsQ0FBZSxhQUFmLENBQTZCLENBQUMsTUFBOUIsQ0FBcUMsU0FBckMsRUFBZ0QsUUFBQSxDQUFBLENBQUE7V0FDOUMsUUFBQSxDQUFDLEtBQUQsQ0FBQTtBQUNFLFVBQUEsQ0FBQSxFQUFBO01BQUEsQ0FBQSxHQUFJLENBQ0YsSUFERSxFQUVGLElBRkUsRUFHRixJQUhFLEVBSUYsSUFKRTtNQU1KLENBQUEsR0FBSSxLQUFBLEdBQVE7YUFDWixLQUFBLEdBQVEsQ0FBQyxDQUFFLENBQUEsQ0FBQyxDQUFBLEdBQUksRUFBTCxDQUFBLEdBQVcsRUFBWCxDQUFGLElBQW9CLENBQUUsQ0FBQSxDQUFBLENBQXRCLElBQTRCLENBQUUsQ0FBQSxDQUFBLENBQS9CO0lBUlY7RUFEOEMsQ0FBaEQ7QUF2QkEiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSAnaXJpc0FuZ3VsYXInLFxuICBbJ25nQW5pbWF0ZScsICduZ0Nvb2tpZXMnLCAnbmdUb3VjaCcsICduZ1Nhbml0aXplJywgJ25nTWVzc2FnZXMnLFxuICAnbmdBcmlhJywgJ25nUmVzb3VyY2UnLCAndWkucm91dGVyJywgJ3VpLmJvb3RzdHJhcCcsICdhbmd1bGFyLXBhcmFsbGF4JyxcbiAgJ2luZmluaXRlLXNjcm9sbCcsICdMb2NhbFN0b3JhZ2VNb2R1bGUnLCAncnpTbGlkZXInLCAnYW5ndWxhci1jbGlwYm9hcmQnLFxuICAnbW9ub3NwYWNlZC5xcmNvZGUnLCAnbmdGaWxlVXBsb2FkJywgJ3FyU2Nhbm5lcicsICdobS5yZWFkbW9yZScsXG4gICd1aS1ub3RpZmljYXRpb24nLCAnYW5ndWxhci1ub3RpZmljYXRpb24taWNvbnMnXVxuXG5hbmd1bGFyLm1vZHVsZSgnaXJpc0FuZ3VsYXInKS5maWx0ZXIgJ2VzY2FwZScsIFsgLT5cbiAgKGlucHV0KSAtPlxuICAgIGVuY29kZVVSSUNvbXBvbmVudCBlbmNvZGVVUklDb21wb25lbnQoaW5wdXQpXG4gXVxuYW5ndWxhci5tb2R1bGUoJ2lyaXNBbmd1bGFyJykuZmlsdGVyICdlbmNvZGVVUklDb21wb25lbnQnLCBbIC0+XG4gIChpbnB1dCkgLT5cbiAgICBlbmNvZGVVUklDb21wb25lbnQgaW5wdXRcbiBdXG5cbmFuZ3VsYXIubW9kdWxlKCdpcmlzQW5ndWxhcicpLmZpbHRlciAnaGlnaGxpZ2h0JywgKCRzY2UpIC0+XG4gICh0ZXh0LCBwaHJhc2UpIC0+XG4gICAgaWYgdHlwZW9mIHRleHQgPT0gJ3N0cmluZycgYW5kIHBocmFzZVxuICAgICAgdGV4dCA9IHRleHQucmVwbGFjZShuZXcgUmVnRXhwKCcoJyArIHBocmFzZSArICcpJywgJ2dpJyksICc8Yj4kMTwvYj4nKVxuICAgICAgcmV0dXJuICRzY2UudHJ1c3RBc0h0bWwgdGV4dC50b1N0cmluZygpXG4gICAgcmV0dXJuIHRleHRcblxuYW5ndWxhci5tb2R1bGUoJ2lyaXNBbmd1bGFyJykuZmlsdGVyICdvcmRpbmFsJywgLT5cbiAgKGlucHV0KSAtPlxuICAgIHMgPSBbXG4gICAgICAndGgnXG4gICAgICAnc3QnXG4gICAgICAnbmQnXG4gICAgICAncmQnXG4gICAgXVxuICAgIHYgPSBpbnB1dCAlIDEwMFxuICAgIGlucHV0ICsgKHNbKHYgLSAyMCkgJSAxMF0gb3Igc1t2XSBvciBzWzBdKVxuIl19

(function() {
  // coffeelint: disable=max_line_length
  angular.module('irisAngular').directive('videostream', function() {
    return {
      scope: {
        uri: '=',
        ipfs: '='
      },
      link: function(scope, element, attrs) {
        var go;
        go = function() {
          var el, stream, videostream;
          if (!(scope.ipfs && scope.uri)) {
            return;
          }
          el = document.createElement('video');
          el.setAttribute('controls', true);
          el.setAttribute('style', 'max-width: 100%;');
          el.setAttribute('preload', 'metadata');
          el.addEventListener('loadedmetadata', function() {
            el.play(); // make it display poster (preview image). may load unnecessary amount of data?
            return el.pause();
          });
          stream = null;
          videostream = new window.videostream({
            createReadStream: function(opts) {
              var end, start;
              start = opts.start;
              end = opts.end ? start + opts.end + 1 : void 0;
              console.log('asked for data starting at byte', start, 'and ending at byte', end);
              if (stream && stream.destroy) {
                stream.destroy();
              }
              stream = scope.ipfs.catReadableStream(scope.uri, {
                offset: start,
                length: end && end - start
              });
              stream.on('error', console.error);
              return stream;
            }
          }, el);
          return element.append(el);
        };
        return scope.$watchGroup(['uri', 'ipfs'], go);
      }
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy92aWRlb3N0cmVhbS92aWRlb3N0cmVhbS5kaXJlY3RpdmUuanMiLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdmlkZW9zdHJlYW0vdmlkZW9zdHJlYW0uZGlyZWN0aXZlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBO0VBQ0EsT0FBTyxDQUFDLE1BQVIsQ0FBZSxhQUFmLENBQ0UsQ0FBQyxTQURILENBQ2EsYUFEYixFQUM0QixRQUFBLENBQUEsQ0FBQTtXQUN4QjtNQUFBLEtBQUEsRUFDRTtRQUFBLEdBQUEsRUFBSyxHQUFMO1FBQ0EsSUFBQSxFQUFNO01BRE4sQ0FERjtNQUdBLElBQUEsRUFBTSxRQUFBLENBQUMsS0FBRCxFQUFRLE9BQVIsRUFBaUIsS0FBakIsQ0FBQTtBQUNKLFlBQUE7UUFBQSxFQUFBLEdBQUssUUFBQSxDQUFBLENBQUE7QUFDSCxjQUFBLEVBQUEsRUFBQSxNQUFBLEVBQUE7VUFBQSxJQUFBLENBQUEsQ0FBYyxLQUFLLENBQUMsSUFBTixJQUFlLEtBQUssQ0FBQyxHQUFuQyxDQUFBO0FBQUEsbUJBQUE7O1VBQ0EsRUFBQSxHQUFLLFFBQVEsQ0FBQyxhQUFULENBQXVCLE9BQXZCO1VBQ0wsRUFBRSxDQUFDLFlBQUgsQ0FBZ0IsVUFBaEIsRUFBNEIsSUFBNUI7VUFDQSxFQUFFLENBQUMsWUFBSCxDQUFnQixPQUFoQixFQUF5QixrQkFBekI7VUFDQSxFQUFFLENBQUMsWUFBSCxDQUFnQixTQUFoQixFQUEyQixVQUEzQjtVQUNBLEVBQUUsQ0FBQyxnQkFBSCxDQUFvQixnQkFBcEIsRUFBc0MsUUFBQSxDQUFBLENBQUE7WUFDcEMsRUFBRSxDQUFDLElBQUgsQ0FBQSxFQUFBO21CQUNBLEVBQUUsQ0FBQyxLQUFILENBQUE7VUFGb0MsQ0FBdEM7VUFHQSxNQUFBLEdBQVM7VUFDVCxXQUFBLEdBQWMsSUFBSSxNQUFNLENBQUMsV0FBWCxDQUNaO1lBQUEsZ0JBQUEsRUFBa0IsUUFBQSxDQUFDLElBQUQsQ0FBQTtBQUNoQixrQkFBQSxHQUFBLEVBQUE7Y0FBQSxLQUFBLEdBQVEsSUFBSSxDQUFDO2NBQ2IsR0FBQSxHQUFTLElBQUksQ0FBQyxHQUFSLEdBQWlCLEtBQUEsR0FBUSxJQUFJLENBQUMsR0FBYixHQUFtQixDQUFwQyxHQUEyQztjQUNqRCxPQUFPLENBQUMsR0FBUixDQUFZLGlDQUFaLEVBQStDLEtBQS9DLEVBQXNELG9CQUF0RCxFQUE0RSxHQUE1RTtjQUNBLElBQW9CLE1BQUEsSUFBVyxNQUFNLENBQUMsT0FBdEM7Z0JBQUEsTUFBTSxDQUFDLE9BQVAsQ0FBQSxFQUFBOztjQUNBLE1BQUEsR0FBUyxLQUFLLENBQUMsSUFBSSxDQUFDLGlCQUFYLENBQTZCLEtBQUssQ0FBQyxHQUFuQyxFQUF3QztnQkFBRSxNQUFBLEVBQVEsS0FBVjtnQkFBaUIsTUFBQSxFQUFRLEdBQUEsSUFBTyxHQUFBLEdBQU07Y0FBdEMsQ0FBeEM7Y0FDVCxNQUFNLENBQUMsRUFBUCxDQUFVLE9BQVYsRUFBbUIsT0FBTyxDQUFDLEtBQTNCO0FBQ0EscUJBQU87WUFQUztVQUFsQixDQURZLEVBU1osRUFUWTtpQkFVZCxPQUFPLENBQUMsTUFBUixDQUFlLEVBQWY7UUFwQkc7ZUFxQkwsS0FBSyxDQUFDLFdBQU4sQ0FBa0IsQ0FBQyxLQUFELEVBQVEsTUFBUixDQUFsQixFQUFtQyxFQUFuQztNQXRCSTtJQUhOO0VBRHdCLENBRDVCO0FBREEiLCJzb3VyY2VzQ29udGVudCI6WyIjIGNvZmZlZWxpbnQ6IGRpc2FibGU9bWF4X2xpbmVfbGVuZ3RoXG5hbmd1bGFyLm1vZHVsZSAnaXJpc0FuZ3VsYXInXG4gIC5kaXJlY3RpdmUgJ3ZpZGVvc3RyZWFtJywgLT5cbiAgICBzY29wZTpcbiAgICAgIHVyaTogJz0nXG4gICAgICBpcGZzOiAnPSdcbiAgICBsaW5rOiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSAtPlxuICAgICAgZ28gPSAtPlxuICAgICAgICByZXR1cm4gdW5sZXNzIHNjb3BlLmlwZnMgYW5kIHNjb3BlLnVyaVxuICAgICAgICBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJylcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdjb250cm9scycsIHRydWUpXG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnbWF4LXdpZHRoOiAxMDAlOycpXG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgncHJlbG9hZCcsICdtZXRhZGF0YScpXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIgJ2xvYWRlZG1ldGFkYXRhJywgKCkgLT5cbiAgICAgICAgICBlbC5wbGF5KCkgIyBtYWtlIGl0IGRpc3BsYXkgcG9zdGVyIChwcmV2aWV3IGltYWdlKS4gbWF5IGxvYWQgdW5uZWNlc3NhcnkgYW1vdW50IG9mIGRhdGE/XG4gICAgICAgICAgZWwucGF1c2UoKVxuICAgICAgICBzdHJlYW0gPSBudWxsXG4gICAgICAgIHZpZGVvc3RyZWFtID0gbmV3IHdpbmRvdy52aWRlb3N0cmVhbVxuICAgICAgICAgIGNyZWF0ZVJlYWRTdHJlYW06IChvcHRzKSAtPlxuICAgICAgICAgICAgc3RhcnQgPSBvcHRzLnN0YXJ0XG4gICAgICAgICAgICBlbmQgPSBpZiBvcHRzLmVuZCB0aGVuIHN0YXJ0ICsgb3B0cy5lbmQgKyAxIGVsc2UgdW5kZWZpbmVkXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYXNrZWQgZm9yIGRhdGEgc3RhcnRpbmcgYXQgYnl0ZScsIHN0YXJ0LCAnYW5kIGVuZGluZyBhdCBieXRlJywgZW5kKVxuICAgICAgICAgICAgc3RyZWFtLmRlc3Ryb3koKSBpZiBzdHJlYW0gYW5kIHN0cmVhbS5kZXN0cm95XG4gICAgICAgICAgICBzdHJlYW0gPSBzY29wZS5pcGZzLmNhdFJlYWRhYmxlU3RyZWFtKHNjb3BlLnVyaSwgeyBvZmZzZXQ6IHN0YXJ0LCBsZW5ndGg6IGVuZCAmJiBlbmQgLSBzdGFydCB9KVxuICAgICAgICAgICAgc3RyZWFtLm9uICdlcnJvcicsIGNvbnNvbGUuZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBzdHJlYW1cbiAgICAgICAgLCBlbFxuICAgICAgICBlbGVtZW50LmFwcGVuZChlbClcbiAgICAgIHNjb3BlLiR3YXRjaEdyb3VwIFsndXJpJywgJ2lwZnMnXSwgZ29cbiJdfQ==

(function() {
  // coffeelint: disable=max_line_length
  angular.module('irisAngular').directive('videochat', function() {
    return {
      scope: {
        pubkey: '=',
        gun: '='
      },
      link: function(scope, element, attrs) {
        var ACK, DB_RECORD, DEBUG, LOCAL, LOG, MIMETYPE, PREFIX_RECORDER, RECORD_PREFIX, RECORD_TIME, REMOTE_VIDEO, SPEECH_DETECTION_ENABLED, Streamer, Utf8ArrayToStr, addToAllRecordedChunks, addToBuffer, amountOfCameras, attachSpeechDetection, buf2hex, captureScreen, check, closeCameraStream, code, constraints, currentFacingMode, debug, formatBytes, go, goLiveButton, gunDB, initCameraStream, initCameraUI, initViewer, initialData, isRecording, mediaRecorder, muteButton, muteUnmute, muted, myTimer, myVideo, onDataAvailable, onString, openRemoteVideo, p, pauseRecording, recordStream, recordedChunks, remoteVideo, removeFromGun, speechDetected, startWorker, stopWorker, str2ab, streamId, switchCameraButton, takeSnapshot, useBlob, useString, w, writeToGun;
        MIMETYPE = 'video/webm; codecs="opus,vp8"';
        RECORD_TIME = 500;
        DEBUG = false;
        PREFIX_RECORDER = 'data:video/webm; codecs="opus,vp8";base64,';
        DB_RECORD = 'gunmeeting';
        LOCAL = false;
        RECORD_PREFIX = 'GkXf';
        SPEECH_DETECTION_ENABLED = false;
        constraints = {
          video: true
        };
        recordedChunks = [];
        mediaRecorder = void 0;
        gunDB = void 0;
        speechDetected = true;
        initialData = void 0;
        w = void 0;
        code = -1;
        LOG = function(...args) {
          if (DEBUG) {
            return console.log(...args);
          }
        };
        Streamer = function(videoId, streamVideo) {
          this.id = videoId;
          this.streamVideo = streamVideo;
          this.init = function() {
            this.sourceBuffer = null;
            this.mediaSource = new MediaSource;
            initViewer(this);
          };
        };
        initViewer = function(streamer) {
          streamer.streamVideo.src = window.URL.createObjectURL(streamer.mediaSource);
          streamer.mediaSource.addEventListener('sourceopen', function() {
            streamer.sourceBuffer = streamer.mediaSource.addSourceBuffer(MIMETYPE);
            streamer.sourceBuffer.mode = 'sequence';
            // Get video segments and append them to sourceBuffer.
            LOG('Source is open and ready to append to sourcebuffer');
            if (!LOCAL) {
              gunDB.get(streamer.id).on(function(data) {
                if (!check(streamer, data)) {
                  streamer.streamVideo.style.visibility = "hidden";
                } else {
                  // streamer.streamVideo.parentElement.remove()
                  streamer.streamVideo.style.visibility = 'visible';
                  if (SPEECH_DETECTION_ENABLED) {
                    if (data.isSpeaking) {
                      streamer.streamVideo.muted = false;
                    } else {
                      streamer.streamVideo.muted = true;
                    }
                  }
                }
                LOG('Tracks Video ::' + streamer.streamVideo.HAVE_METADATA);
                // LOG("Tracks Buffer::" + streamer.sourceBuffer.videoTracks.length)
                // if (streamer.streamVideo.videoTracks.length > 0 && streamer.streamVideo.videoTracks.selectedIndex != -1) {
                if (streamer.streamVideo.readyState !== 0) {
                  onString(streamer, data.name);
                } else {
                  onString(streamer, data.initial);
                }
                if (streamer.streamVideo.readyState >= 2 && streamer.streamVideo.paused) {
                  streamer.streamVideo.play();
                }
              });
            }
          });
        };
        check = function(streamer, data) {
          var currentTime, difference;
          LOG(JSON.stringify(streamer));
          LOG(JSON.stringify(data.timestamp));
          currentTime = (new Date).getTime();
          difference = (currentTime - data.timestamp) / 1000;
          LOG('TIME::' + difference);
          if (difference > 120) {
            LOG('remove::' + streamer.id);
            removeFromGun(streamer.id);
            return false;
          } else {
            LOG('keep::' + streamer.id);
            return true;
          }
        };
        onString = function(streamer, rawData) {
          var byteArray, byteCharacters;
          byteCharacters = atob(rawData);
          byteArray = str2ab(byteCharacters);
          addToBuffer(streamer, byteArray);
          byteCharacters = null;
          byteArray = null;
        };
        addToBuffer = function(streamer, byteArray) {
          if (!streamer.sourceBuffer.updating) {
            // if (streamer.sourceBuffer.buffered.length > 1) {
            //     streamer.sourceBuffer.remove(0, streamer.sourceBuffer.buffered.end(streamer.sourceBuffer.buffered.length - 1))
            // }
            LOG('READY STATE::' + streamer.streamVideo.readyState);
            // var hasEnough = streamer.streamVideo.readyState == 3 && treamer.streamVideo.readyState == 4
            // if (streamer.sourceBuffer.timestampOffset != 0 && hasEnough) {
            //     try {
            //         LOG("Reset offset::" + streamer.sourceBuffer.timestampOffset)
            //         streamer.sourceBuffer.timestampOffset = 0
            //         LOG("Did reset::" + streamer.sourceBuffer.timestampOffset)
            //     } catch (err) {
            //         code = 11
            //         LOG(err)
            //     }
            // } else {
            //     code = -1
            LOG('Adding::' + JSON.stringify(streamer));
            streamer.sourceBuffer.appendBuffer(byteArray);
          } else {
            // }
            LOG('BUFFER STILL BUSY');
          }
        };
        str2ab = function(str) {
          var buf, bufView, i, strLen;
          buf = new ArrayBuffer(str.length);
          bufView = new Uint8Array(buf);
          i = 0;
          strLen = str.length;
          while (i < strLen) {
            bufView[i] = str.charCodeAt(i);
            i++;
          }
          bufView = null;
          return buf;
        };
        // ---
        // generated by js2coffee 2.2.0
        isRecording = function() {
          if (mediaRecorder && mediaRecorder.state === 'recording') {
            return true;
          } else {
            false;
          }
        };
        pauseRecording = function() {
          stopWorker();
          mediaRecorder.stop();
        };
        captureScreen = function(stream) {
          LOG('Capture');
          if (!mediaRecorder || mediaRecorder.state === 'inactive') {
            recordStream(stream);
            if (SPEECH_DETECTION_ENABLED) {
              attachSpeechDetection(stream);
            }
          } else {
            stopWorker();
            mediaRecorder.stop();
          }
        };
        recordStream = function(stream) {
          var options;
          options = {
            mimeType: MIMETYPE,
            audioBitsPerSecond: 6000,
            videoBitsPerSecond: 100000
          };
          mediaRecorder = new MediaRecorder(stream, options);
          mediaRecorder.ondataavailable = onDataAvailable;
          mediaRecorder.start(RECORD_TIME);
          startWorker();
          LOG('Media recorder initiated');
        };
        // setInterval(myTimer, RECORD_TIME)
        myTimer = function() {
          if (mediaRecorder) {
            mediaRecorder.requestData();
          }
        };
        startWorker = function() {
          if (typeof Worker !== 'undefined') {
            if (typeof w === 'undefined') {
              w = new Worker('assets/js/parser_worker.js');
            }
            w.onmessage = function(e) {
              var message;
              message = e.data;
              writeToGun(message);
            };
          } else {
            LOG('Sorry! No Web Worker support.');
          }
        };
        stopWorker = function() {
          w.terminate();
          w = void 0;
        };
        onDataAvailable = function(blobEvent) {
          // LOG("Received data " + formatBytes(blobEvent.data.size))
          // addToAllRecordedChunks(blobEvent.data)
          if (blobEvent.data && blobEvent.data.size) {
            // useBlob(blobEvent.data)
            useString(blobEvent.data);
          } else {
            LOG('SKIP NO DATA?');
          }
        };
        useBlob = function(blob) {
          onBlob(blob);
        };
        useString = function(blob) {
          var response;
          response = new Response(blob).arrayBuffer().then(function(arrayBuffer) {
            blob = null;
            if (LOCAL) {

            } else {
              // onString(base64String)
              if (w !== void 0) {
                w.postMessage(arrayBuffer);
              }
            }
          });
          // parseSelf(arrayBuffer)
          // var data = new Uint8Array(arrayBuffer)
          // window.cl.write(data)
          // data = null
          // arrayBuffer = null
          response = null;
        };
        // function useString(blob) {
        //     var url = URL.createObjectURL(blob)
        //     fetch(url).then(function (response) {
        //         URL.revokeObjectURL(url)
        //         return response.arrayBuffer()
        //     }).then(function (arrayBuffer) {
        //         // var base64String = btoa(
        //         //     new Uint8Array(arrayBuffer)
        //         //         .reduce((onData, byte) => onData + String.fromCharCode(byte), '')
        //         // )
        //         // LOG(buf2hex(arrayBuffer))
        //         // LOG(Utf8ArrayToStr(new Uint8Array(arrayBuffer)))
        //         if (LOCAL) {
        //             // onString(base64String)
        //         } else {
        //             window.cl.write(new Uint8Array(arrayBuffer))
        //             // writeToGun(base64String)
        //         }
        //         base64String = null
        //     })
        // }
        Utf8ArrayToStr = function(array) {
          var c, char2, char3, i, len, out;
          out = void 0;
          i = void 0;
          len = void 0;
          c = void 0;
          char2 = void 0;
          char3 = void 0;
          out = '';
          len = array.length;
          i = 0;
          while (i < len) {
            c = array[i++];
            switch (c >> 4) {
              case 0:
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
              case 6:
              case 7:
                // 0xxxxxxx
                out += String.fromCharCode(c);
                break;
              case 12:
              case 13:
                // 110x xxxx   10xx xxxx
                char2 = array[i++];
                out += String.fromCharCode((c & 0x1F) << 6 | char2 & 0x3F);
                break;
              case 14:
                // 1110 xxxx  10xx xxxx  10xx xxxx
                char2 = array[i++];
                char3 = array[i++];
                out += String.fromCharCode((c & 0x0F) << 12 | (char2 & 0x3F) << 6 | (char3 & 0x3F) << 0);
            }
          }
          return out;
        };
        buf2hex = function(buffer) {
          // buffer is an ArrayBuffer
          return Array.prototype.map.call(new Uint8Array(buffer), function(x) {
            return ('00' + x.toString(16)).slice(-2);
          }).join('');
        };
        writeToGun = function(base64data) {
          var lastUpdate, n, user;
          n = n || void 0;
          LOG('Write to GUN::' + base64data.substring(0, 100));
          lastUpdate = (new Date).getTime();
          user = void 0;
          if (initialData === void 0 && base64data.startsWith(RECORD_PREFIX)) {
            LOG('INITIAL');
            n = base64data.indexOf('wIEB');
            LOG('RAW::' + n + '::' + base64data.substring(0, 252));
            initialData = base64data.substring(0, 252);
          } else {
            n = base64data.indexOf('H0O2dQH');
            LOG('RAW::' + n + '::' + base64data);
          }
          LOG('streamId', streamId);
          user = gunDB.get(streamId).put({
            initial: initialData,
            name: base64data,
            id: streamId,
            timestamp: lastUpdate,
            isSpeaking: speechDetected
          }, ACK);
          gunDB.get(DB_RECORD).set(user);
        };
        addToAllRecordedChunks = function(chunk) {
          var superBuffer;
          recordedChunks.push(chunk);
          superBuffer = new Blob(recordedChunks);
          LOG('Total data size ' + formatBytes(superBuffer.size));
        };
        formatBytes = function(bytes) {
          if (bytes < 1024) {
            return bytes + ' Bytes';
          } else if (bytes < 1048576) {
            return (bytes / 1024).toFixed(3) + ' KB';
          } else if (bytes < 1073741824) {
            return (bytes / 1048576).toFixed(3) + ' MB';
          } else {
            return (bytes / 1073741824).toFixed(3) + ' GB';
          }
        };
        attachSpeechDetection = function(stream) {
          var options, speechEvents;
          options = {};
          speechEvents = hark(stream, options);
          speechEvents.on('speaking', function() {
            if (SPEECH_DETECTION_ENABLED) {
              speechDetected = true;
              LOG('speaking');
            }
          });
          speechEvents.on('stopped_speaking', function() {
            if (SPEECH_DETECTION_ENABLED) {
              LOG('stopped_speaking');
              speechDetected = false;
            }
          });
        };
        // Dom elements name constants
        REMOTE_VIDEO = 'video';
        //ID
        streamId = Date.now();
        // GUN ACK
        remoteVideo = document.createElement("video");
        remoteVideo.autoplay = true;
        remoteVideo.controls = true;
        remoteVideo.muted = true;
        remoteVideo.playsinline = true;
        remoteVideo.style.visibility = "hidden";
        remoteVideo.style["max-width"] = "50%";
        remoteVideo.preload = "none";
        myVideo = document.createElement('video');
        myVideo.setAttribute('autoplay', true);
        myVideo.setAttribute('style', 'max-width: 50%;');
        myVideo.setAttribute('playsinline', true);
        myVideo.setAttribute('muted', true);
        myVideo.setAttribute('controls', true);
        element.append(myVideo);
        element.append(remoteVideo);
        p = document.createElement('p');
        goLiveButton = document.createElement('button');
        goLiveButton.innerHTML = 'Go live';
        goLiveButton.setAttribute('class', 'btn btn-default');
        p.append(goLiveButton);
        //toggleFullScreenButton = document.createElement('button')
        //toggleFullScreenButton.innerHTML = 'toggle fullscreen'
        //toggleFullScreenButton.setAttribute 'class', 'btn btn-default'
        //p.append(toggleFullScreenButton)
        switchCameraButton = document.createElement('button');
        switchCameraButton.innerHTML = 'switch camera';
        switchCameraButton.style = 'display:none;';
        switchCameraButton.setAttribute('class', 'btn btn-default');
        p.append(switchCameraButton);
        muteButton = document.createElement('button');
        muteButton.innerHTML = 'Mute';
        muteButton.setAttribute('class', 'btn btn-default');
        p.append(muteButton);
        element.append(p);
        amountOfCameras = 0;
        currentFacingMode = 'environment';
        muted = true;
        gunDB = void 0;
        ACK = function(ack) {
          if (ack.ok !== 1 && ack.err !== 'Error: No ACK received yet.') {
            LOG('ack', ack);
          } else {
            // localStorage.clear()
            LOG('ack', ack);
          }
        };
        // localStorage.clear()
        removeFromGun = function(id) {
          var user;
          // localStorage.clear()
          user = gunDB.get(streamId);
          gunDB.get(DB_RECORD).unset(user);
        };
        // user.put null # can't put null to root level node
        debug = function(text) {
          if (DEBUG) {
            LOG(text);
          }
        };
        initCameraUI = function() {
          // https://developer.mozilla.org/nl/docs/Web/HTML/Element/button
          // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_button_role
          goLiveButton.addEventListener('click', function() {
            takeSnapshot();
          });
          muteButton.addEventListener('click', function() {
            muteUnmute();
          });
          // -- switch camera part
          if (amountOfCameras > 1) {
            switchCameraButton.style.display = 'inline-block';
            switchCameraButton.addEventListener('click', function() {
              if (currentFacingMode === 'environment') {
                currentFacingMode = 'user';
              } else {
                currentFacingMode = 'environment';
              }
              initCameraStream();
            });
          }
        };
        // https://github.com/webrtc/samples/blob/gh-pages/src/content/devices/input-output/js/main.js
        closeCameraStream = function() {
          if (window.stream) {
            return window.stream.getTracks().forEach(function(track) {
              return track.stop();
            });
          }
        };
        element.on('$destroy', function() {
          return closeCameraStream();
        });
        initCameraStream = function() {
          var handleError, handleSuccess;
          // stop any active streams in the window
          handleSuccess = function(stream) {
            window.stream = stream;
            // make stream available to browser console
            myVideo.srcObject = stream;
            if (constraints.video.facingMode) {
              if (constraints.video.facingMode === 'environment') {
                switchCameraButton.setAttribute('aria-pressed', true);
              } else {
                switchCameraButton.setAttribute('aria-pressed', false);
              }
            }
            return navigator.mediaDevices.enumerateDevices();
          };
          handleError = function(error) {
            LOG(error);
            //https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
            if (error === 'PermissionDeniedError') {
              alert('Permission denied. Please refresh and give permission.');
            }
          };
          closeCameraStream();
          constraints = {
            audio: true,
            video: {
              width: {
                min: 200,
                ideal: 200,
                max: 640
              },
              height: {
                min: 200,
                ideal: 200,
                max: 640
              },
              facingMode: currentFacingMode
            }
          };
          navigator.mediaDevices.getUserMedia(constraints).then(handleSuccess).catch(handleError);
        };
        takeSnapshot = function() {
          if (!isRecording()) {
            captureScreen(window.stream);
            goLiveButton.style.backgroundColor = 'red';
            switchCameraButton.disabled = true;
          } else {
            pauseRecording();
            goLiveButton.style.backgroundColor = '';
            switchCameraButton.disabled = false;
          }
        };
        muteUnmute = function() {
          var i, keys, videos;
          if (muted) {
            muteButton.setAttribute('aria-pressed', false);
            muted = false;
          } else {
            muteButton.setAttribute('aria-pressed', true);
            muted = true;
          }
          videos = document.getElementsByTagName('video');
          keys = Object.keys(videos);
          i = 0;
          while (i < keys.length) {
            if (videos[i].id !== 'video') {
              videos[i].muted = muted;
            }
            i++;
          }
        };
        openRemoteVideo = function() {
          var id, streamer;
          id = scope.pubkey + '/stream';
          streamer = new Streamer(id, remoteVideo);
          return streamer.init();
        };
        go = function() {
          var myPubKey, opt, peers;
          if (!(scope.gun && scope.pubkey)) {
            return;
          }
          myPubKey = scope.gun.user()._.sea.pub;
          if (myPubKey !== scope.pubkey) {
            openRemoteVideo();
          }
          streamId = myPubKey + '/stream';
          // gunDB = scope.gun.back(-1)
          // GUN
          peers = ['https://gunmeetingserver.herokuapp.com/gun'];
          opt = {
            peers: peers,
            localStorage: false,
            radisk: false
          };
          gunDB = Gun(opt);
          removeFromGun(streamId);
          // do some WebRTC checks before creating the interface
          DetectRTC.load(function() {
            // do some checks
            if (DetectRTC.isWebRTCSupported === false) {
              alert('Please use Chrome, Firefox, iOS 11, Android 5 or higher, Safari 11 or higher');
            } else {
              if (DetectRTC.hasWebcam === false) {
                alert('Please install an external webcam device.');
              } else {
                amountOfCameras = DetectRTC.videoInputDevices.length;
                initCameraUI();
                initCameraStream();
              }
            }
            LOG('RTC Debug info: ' + '\n OS:                   ' + DetectRTC.osName + ' ' + DetectRTC.osVersion + '\n browser:              ' + DetectRTC.browser.fullVersion + ' ' + DetectRTC.browser.name + '\n is Mobile Device:     ' + DetectRTC.isMobileDevice + '\n has webcam:           ' + DetectRTC.hasWebcam + '\n has permission:       ' + DetectRTC.isWebsiteHasWebcamPermission + '\n getUserMedia Support: ' + DetectRTC.isGetUserMediaSupported + '\n isWebRTC Supported:   ' + DetectRTC.isWebRTCSupported + '\n WebAudio Supported:   ' + DetectRTC.isAudioContextSupported + '\n is Mobile Device:     ' + DetectRTC.isMobileDevice);
          });
        };
        return scope.$watch('gun', go);
      }
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy92aWRlb2NoYXQvdmlkZW9jaGF0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy92aWRlb2NoYXQvdmlkZW9jaGF0LmRpcmVjdGl2ZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQTtFQUNBLE9BQU8sQ0FBQyxNQUFSLENBQWUsYUFBZixDQUNFLENBQUMsU0FESCxDQUNhLFdBRGIsRUFDMEIsUUFBQSxDQUFBLENBQUE7V0FDdEI7TUFBQSxLQUFBLEVBQ0U7UUFBQSxNQUFBLEVBQVEsR0FBUjtRQUNBLEdBQUEsRUFBSztNQURMLENBREY7TUFHQSxJQUFBLEVBQU0sUUFBQSxDQUFDLEtBQUQsRUFBUSxPQUFSLEVBQWlCLEtBQWpCLENBQUE7QUFDSixZQUFBLEdBQUEsRUFBQSxTQUFBLEVBQUEsS0FBQSxFQUFBLEtBQUEsRUFBQSxHQUFBLEVBQUEsUUFBQSxFQUFBLGVBQUEsRUFBQSxhQUFBLEVBQUEsV0FBQSxFQUFBLFlBQUEsRUFBQSx3QkFBQSxFQUFBLFFBQUEsRUFBQSxjQUFBLEVBQUEsc0JBQUEsRUFBQSxXQUFBLEVBQUEsZUFBQSxFQUFBLHFCQUFBLEVBQUEsT0FBQSxFQUFBLGFBQUEsRUFBQSxLQUFBLEVBQUEsaUJBQUEsRUFBQSxJQUFBLEVBQUEsV0FBQSxFQUFBLGlCQUFBLEVBQUEsS0FBQSxFQUFBLFdBQUEsRUFBQSxFQUFBLEVBQUEsWUFBQSxFQUFBLEtBQUEsRUFBQSxnQkFBQSxFQUFBLFlBQUEsRUFBQSxVQUFBLEVBQUEsV0FBQSxFQUFBLFdBQUEsRUFBQSxhQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxLQUFBLEVBQUEsT0FBQSxFQUFBLE9BQUEsRUFBQSxlQUFBLEVBQUEsUUFBQSxFQUFBLGVBQUEsRUFBQSxDQUFBLEVBQUEsY0FBQSxFQUFBLFlBQUEsRUFBQSxjQUFBLEVBQUEsV0FBQSxFQUFBLGFBQUEsRUFBQSxjQUFBLEVBQUEsV0FBQSxFQUFBLFVBQUEsRUFBQSxNQUFB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QTs7VUFlQSxTQUFTLENBQUMsSUFBVixDQUFlLFFBQUEsQ0FBQSxDQUFBLEVBQUE7O1lBRWIsSUFBRyxTQUFTLENBQUMsaUJBQVYsS0FBK0IsS0FBbEM7Y0FDRSxLQUFBLENBQU0sOEVBQU4sRUFERjthQUFBLE1BQUE7Y0FHRSxJQUFHLFNBQVMsQ0FBQyxTQUFWLEtBQXVCLEtBQTFCO2dCQUNFLEtBQUEsQ0FBTSwyQ0FBTixFQURGO2VBQUEsTUFBQTtnQkFHRSxlQUFBLEdBQWtCLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDOUMsWUFBQSxDQUFBO2dCQUNBLGdCQUFBLENBQUEsRUFMRjtlQUhGOztZQVNBLEdBQUEsQ0FBSSxrQkFBQSxHQUFxQiwyQkFBckIsR0FBbUQsU0FBUyxDQUFDLE1BQTdELEdBQXNFLEdBQXRFLEdBQTRFLFNBQVMsQ0FBQyxTQUF0RixHQUFrRywyQkFBbEcsR0FBZ0ksU0FBUyxDQUFDLE9BQU8sQ0FBQyxXQUFsSixHQUFnSyxHQUFoSyxHQUFzSyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQXhMLEdBQStMLDJCQUEvTCxHQUE2TixTQUFTLENBQUMsY0FBdk8sR0FBd1AsMkJBQXhQLEdBQXNSLFNBQVMsQ0FBQyxTQUFoUyxHQUE0UywyQkFBNVMsR0FBMFUsU0FBUyxDQUFDLDRCQUFwVixHQUFtWCwyQkFBblgsR0FBaVosU0FBUyxDQUFDLHVCQUEzWixHQUFxYiwyQkFBcmIsR0FBbWQsU0FBUyxDQUFDLGlCQUE3ZCxHQUFpZiwyQkFBamYsR0FBK2dCLFNBQVMsQ0FBQyx1QkFBemhCLEdBQW1qQiwyQkFBbmpCLEdBQWlsQixTQUFTLENBQUMsY0FBL2xCO1VBWGEsQ0FBZjtRQWhCRztlQStCTCxLQUFLLENBQUMsTUFBTixDQUFhLEtBQWIsRUFBb0IsRUFBcEI7TUFuaEJJO0lBSE47RUFEc0IsQ0FEMUI7QUFEQSIsInNvdXJjZXNDb250ZW50IjpbIiMgY29mZmVlbGludDogZGlzYWJsZT1tYXhfbGluZV9sZW5ndGhcbmFuZ3VsYXIubW9kdWxlICdpcmlzQW5ndWxhcidcbiAgLmRpcmVjdGl2ZSAndmlkZW9jaGF0JywgLT5cbiAgICBzY29wZTpcbiAgICAgIHB1YmtleTogJz0nXG4gICAgICBndW46ICc9J1xuICAgIGxpbms6IChzY29wZSwgZWxlbWVudCwgYXR0cnMpIC0+XG4gICAgICBNSU1FVFlQRSA9ICd2aWRlby93ZWJtOyBjb2RlY3M9XCJvcHVzLHZwOFwiJ1xuICAgICAgUkVDT1JEX1RJTUUgPSA1MDBcbiAgICAgIERFQlVHID0gZmFsc2VcbiAgICAgIFBSRUZJWF9SRUNPUkRFUiA9ICdkYXRhOnZpZGVvL3dlYm07IGNvZGVjcz1cIm9wdXMsdnA4XCI7YmFzZTY0LCdcbiAgICAgIERCX1JFQ09SRCA9ICdndW5tZWV0aW5nJ1xuICAgICAgTE9DQUwgPSBmYWxzZVxuICAgICAgUkVDT1JEX1BSRUZJWCA9ICdHa1hmJ1xuICAgICAgU1BFRUNIX0RFVEVDVElPTl9FTkFCTEVEID0gZmFsc2VcbiAgICAgIGNvbnN0cmFpbnRzID0gdmlkZW86IHRydWVcbiAgICAgIHJlY29yZGVkQ2h1bmtzID0gW11cbiAgICAgIG1lZGlhUmVjb3JkZXIgPSB1bmRlZmluZWRcbiAgICAgIGd1bkRCID0gdW5kZWZpbmVkXG4gICAgICBzcGVlY2hEZXRlY3RlZCA9IHRydWVcbiAgICAgIGluaXRpYWxEYXRhID0gdW5kZWZpbmVkXG4gICAgICB3ID0gdW5kZWZpbmVkXG4gICAgICBjb2RlID0gLTFcblxuICAgICAgTE9HID0gKGFyZ3MuLi4pIC0+XG4gICAgICAgIGNvbnNvbGUubG9nIGFyZ3MuLi4gaWYgREVCVUdcblxuICAgICAgU3RyZWFtZXIgPSAodmlkZW9JZCwgc3RyZWFtVmlkZW8pIC0+XG4gICAgICAgIEBpZCA9IHZpZGVvSWRcbiAgICAgICAgQHN0cmVhbVZpZGVvID0gc3RyZWFtVmlkZW9cblxuICAgICAgICBAaW5pdCA9IC0+XG4gICAgICAgICAgQHNvdXJjZUJ1ZmZlciA9IG51bGxcbiAgICAgICAgICBAbWVkaWFTb3VyY2UgPSBuZXcgTWVkaWFTb3VyY2VcbiAgICAgICAgICBpbml0Vmlld2VyIHRoaXNcbiAgICAgICAgICByZXR1cm5cblxuICAgICAgICByZXR1cm5cblxuICAgICAgaW5pdFZpZXdlciA9IChzdHJlYW1lcikgLT5cbiAgICAgICAgc3RyZWFtZXIuc3RyZWFtVmlkZW8uc3JjID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoc3RyZWFtZXIubWVkaWFTb3VyY2UpXG4gICAgICAgIHN0cmVhbWVyLm1lZGlhU291cmNlLmFkZEV2ZW50TGlzdGVuZXIgJ3NvdXJjZW9wZW4nLCAtPlxuICAgICAgICAgIHN0cmVhbWVyLnNvdXJjZUJ1ZmZlciA9IHN0cmVhbWVyLm1lZGlhU291cmNlLmFkZFNvdXJjZUJ1ZmZlcihNSU1FVFlQRSlcbiAgICAgICAgICBzdHJlYW1lci5zb3VyY2VCdWZmZXIubW9kZSA9ICdzZXF1ZW5jZSdcbiAgICAgICAgICAjIEdldCB2aWRlbyBzZWdtZW50cyBhbmQgYXBwZW5kIHRoZW0gdG8gc291cmNlQnVmZmVyLlxuICAgICAgICAgIExPRyAnU291cmNlIGlzIG9wZW4gYW5kIHJlYWR5IHRvIGFwcGVuZCB0byBzb3VyY2VidWZmZXInXG4gICAgICAgICAgaWYgIUxPQ0FMXG4gICAgICAgICAgICBndW5EQi5nZXQoc3RyZWFtZXIuaWQpLm9uIChkYXRhKSAtPlxuICAgICAgICAgICAgICBpZiAhY2hlY2soc3RyZWFtZXIsIGRhdGEpXG4gICAgICAgICAgICAgICAgc3RyZWFtZXIuc3RyZWFtVmlkZW8uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAjIHN0cmVhbWVyLnN0cmVhbVZpZGVvLnBhcmVudEVsZW1lbnQucmVtb3ZlKClcbiAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHN0cmVhbWVyLnN0cmVhbVZpZGVvLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSdcbiAgICAgICAgICAgICAgICBpZiBTUEVFQ0hfREVURUNUSU9OX0VOQUJMRURcbiAgICAgICAgICAgICAgICAgIGlmIGRhdGEuaXNTcGVha2luZ1xuICAgICAgICAgICAgICAgICAgICBzdHJlYW1lci5zdHJlYW1WaWRlby5tdXRlZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHN0cmVhbWVyLnN0cmVhbVZpZGVvLm11dGVkID0gdHJ1ZVxuICAgICAgICAgICAgICBMT0cgJ1RyYWNrcyBWaWRlbyA6OicgKyBzdHJlYW1lci5zdHJlYW1WaWRlby5IQVZFX01FVEFEQVRBXG4gICAgICAgICAgICAgICMgTE9HKFwiVHJhY2tzIEJ1ZmZlcjo6XCIgKyBzdHJlYW1lci5zb3VyY2VCdWZmZXIudmlkZW9UcmFja3MubGVuZ3RoKVxuICAgICAgICAgICAgICAjIGlmIChzdHJlYW1lci5zdHJlYW1WaWRlby52aWRlb1RyYWNrcy5sZW5ndGggPiAwICYmIHN0cmVhbWVyLnN0cmVhbVZpZGVvLnZpZGVvVHJhY2tzLnNlbGVjdGVkSW5kZXggIT0gLTEpIHtcbiAgICAgICAgICAgICAgaWYgc3RyZWFtZXIuc3RyZWFtVmlkZW8ucmVhZHlTdGF0ZSAhPSAwXG4gICAgICAgICAgICAgICAgb25TdHJpbmcgc3RyZWFtZXIsIGRhdGEubmFtZVxuICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgb25TdHJpbmcgc3RyZWFtZXIsIGRhdGEuaW5pdGlhbFxuICAgICAgICAgICAgICBpZiBzdHJlYW1lci5zdHJlYW1WaWRlby5yZWFkeVN0YXRlID49IDIgYW5kIHN0cmVhbWVyLnN0cmVhbVZpZGVvLnBhdXNlZFxuICAgICAgICAgICAgICAgIHN0cmVhbWVyLnN0cmVhbVZpZGVvLnBsYXkoKVxuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIGNoZWNrID0gKHN0cmVhbWVyLCBkYXRhKSAtPlxuICAgICAgICBMT0cgSlNPTi5zdHJpbmdpZnkoc3RyZWFtZXIpXG4gICAgICAgIExPRyBKU09OLnN0cmluZ2lmeShkYXRhLnRpbWVzdGFtcClcbiAgICAgICAgY3VycmVudFRpbWUgPSAobmV3IERhdGUpLmdldFRpbWUoKVxuICAgICAgICBkaWZmZXJlbmNlID0gKGN1cnJlbnRUaW1lIC0gKGRhdGEudGltZXN0YW1wKSkgLyAxMDAwXG4gICAgICAgIExPRyAnVElNRTo6JyArIGRpZmZlcmVuY2VcbiAgICAgICAgaWYgZGlmZmVyZW5jZSA+IDEyMFxuICAgICAgICAgIExPRyAncmVtb3ZlOjonICsgc3RyZWFtZXIuaWRcbiAgICAgICAgICByZW1vdmVGcm9tR3VuIHN0cmVhbWVyLmlkXG4gICAgICAgICAgZmFsc2VcbiAgICAgICAgZWxzZVxuICAgICAgICAgIExPRyAna2VlcDo6JyArIHN0cmVhbWVyLmlkXG4gICAgICAgICAgdHJ1ZVxuXG4gICAgICBvblN0cmluZyA9IChzdHJlYW1lciwgcmF3RGF0YSkgLT5cbiAgICAgICAgYnl0ZUNoYXJhY3RlcnMgPSBhdG9iKHJhd0RhdGEpXG4gICAgICAgIGJ5dGVBcnJheSA9IHN0cjJhYihieXRlQ2hhcmFjdGVycylcbiAgICAgICAgYWRkVG9CdWZmZXIgc3RyZWFtZXIsIGJ5dGVBcnJheVxuICAgICAgICBieXRlQ2hhcmFjdGVycyA9IG51bGxcbiAgICAgICAgYnl0ZUFycmF5ID0gbnVsbFxuICAgICAgICByZXR1cm5cblxuICAgICAgYWRkVG9CdWZmZXIgPSAoc3RyZWFtZXIsIGJ5dGVBcnJheSkgLT5cbiAgICAgICAgIyBpZiAoZG9jdW1lbnQuaGlkZGVuKSB7XG4gICAgICAgICMgICAgIExPRyhcIk5vdCBGb2N1c2VkIHRhYiBub3QgYWRkaW5nIHRvIGJ1ZmZlclwiKVxuICAgICAgICAjIH1cbiAgICAgICAgaWYgIXN0cmVhbWVyLnNvdXJjZUJ1ZmZlci51cGRhdGluZ1xuICAgICAgICAgICMgaWYgKHN0cmVhbWVyLnNvdXJjZUJ1ZmZlci5idWZmZXJlZC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgIyAgICAgc3RyZWFtZXIuc291cmNlQnVmZmVyLnJlbW92ZSgwLCBzdHJlYW1lci5zb3VyY2VCdWZmZXIuYnVmZmVyZWQuZW5kKHN0cmVhbWVyLnNvdXJjZUJ1ZmZlci5idWZmZXJlZC5sZW5ndGggLSAxKSlcbiAgICAgICAgICAjIH1cbiAgICAgICAgICBMT0cgJ1JFQURZIFNUQVRFOjonICsgc3RyZWFtZXIuc3RyZWFtVmlkZW8ucmVhZHlTdGF0ZVxuICAgICAgICAgICMgdmFyIGhhc0Vub3VnaCA9IHN0cmVhbWVyLnN0cmVhbVZpZGVvLnJlYWR5U3RhdGUgPT0gMyAmJiB0cmVhbWVyLnN0cmVhbVZpZGVvLnJlYWR5U3RhdGUgPT0gNFxuICAgICAgICAgICMgaWYgKHN0cmVhbWVyLnNvdXJjZUJ1ZmZlci50aW1lc3RhbXBPZmZzZXQgIT0gMCAmJiBoYXNFbm91Z2gpIHtcbiAgICAgICAgICAjICAgICB0cnkge1xuICAgICAgICAgICMgICAgICAgICBMT0coXCJSZXNldCBvZmZzZXQ6OlwiICsgc3RyZWFtZXIuc291cmNlQnVmZmVyLnRpbWVzdGFtcE9mZnNldClcbiAgICAgICAgICAjICAgICAgICAgc3RyZWFtZXIuc291cmNlQnVmZmVyLnRpbWVzdGFtcE9mZnNldCA9IDBcbiAgICAgICAgICAjICAgICAgICAgTE9HKFwiRGlkIHJlc2V0OjpcIiArIHN0cmVhbWVyLnNvdXJjZUJ1ZmZlci50aW1lc3RhbXBPZmZzZXQpXG4gICAgICAgICAgIyAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgIyAgICAgICAgIGNvZGUgPSAxMVxuICAgICAgICAgICMgICAgICAgICBMT0coZXJyKVxuICAgICAgICAgICMgICAgIH1cbiAgICAgICAgICAjIH0gZWxzZSB7XG4gICAgICAgICAgIyAgICAgY29kZSA9IC0xXG4gICAgICAgICAgTE9HICdBZGRpbmc6OicgKyBKU09OLnN0cmluZ2lmeShzdHJlYW1lcilcbiAgICAgICAgICBzdHJlYW1lci5zb3VyY2VCdWZmZXIuYXBwZW5kQnVmZmVyIGJ5dGVBcnJheVxuICAgICAgICAgICMgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgTE9HICdCVUZGRVIgU1RJTEwgQlVTWSdcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIHN0cjJhYiA9IChzdHIpIC0+XG4gICAgICAgIGJ1ZiA9IG5ldyBBcnJheUJ1ZmZlcihzdHIubGVuZ3RoKVxuICAgICAgICBidWZWaWV3ID0gbmV3IFVpbnQ4QXJyYXkoYnVmKVxuICAgICAgICBpID0gMFxuICAgICAgICBzdHJMZW4gPSBzdHIubGVuZ3RoXG4gICAgICAgIHdoaWxlIGkgPCBzdHJMZW5cbiAgICAgICAgICBidWZWaWV3W2ldID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgICAgICAgICBpKytcbiAgICAgICAgYnVmVmlldyA9IG51bGxcbiAgICAgICAgYnVmXG5cbiAgICAgICMgLS0tXG4gICAgICAjIGdlbmVyYXRlZCBieSBqczJjb2ZmZWUgMi4yLjBcblxuICAgICAgaXNSZWNvcmRpbmcgPSAtPlxuICAgICAgICBpZiBtZWRpYVJlY29yZGVyIGFuZCBtZWRpYVJlY29yZGVyLnN0YXRlID09ICdyZWNvcmRpbmcnXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgZWxzZVxuICAgICAgICAgIGZhbHNlXG4gICAgICAgIHJldHVyblxuXG4gICAgICBwYXVzZVJlY29yZGluZyA9IC0+XG4gICAgICAgIHN0b3BXb3JrZXIoKVxuICAgICAgICBtZWRpYVJlY29yZGVyLnN0b3AoKVxuICAgICAgICByZXR1cm5cblxuICAgICAgY2FwdHVyZVNjcmVlbiA9IChzdHJlYW0pIC0+XG4gICAgICAgIExPRyAnQ2FwdHVyZSdcbiAgICAgICAgaWYgIW1lZGlhUmVjb3JkZXIgb3IgbWVkaWFSZWNvcmRlci5zdGF0ZSA9PSAnaW5hY3RpdmUnXG4gICAgICAgICAgcmVjb3JkU3RyZWFtIHN0cmVhbVxuICAgICAgICAgIGlmIFNQRUVDSF9ERVRFQ1RJT05fRU5BQkxFRFxuICAgICAgICAgICAgYXR0YWNoU3BlZWNoRGV0ZWN0aW9uIHN0cmVhbVxuICAgICAgICBlbHNlXG4gICAgICAgICAgc3RvcFdvcmtlcigpXG4gICAgICAgICAgbWVkaWFSZWNvcmRlci5zdG9wKClcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIHJlY29yZFN0cmVhbSA9IChzdHJlYW0pIC0+XG4gICAgICAgIG9wdGlvbnMgPVxuICAgICAgICAgIG1pbWVUeXBlOiBNSU1FVFlQRVxuICAgICAgICAgIGF1ZGlvQml0c1BlclNlY29uZDogNjAwMFxuICAgICAgICAgIHZpZGVvQml0c1BlclNlY29uZDogMTAwMDAwXG4gICAgICAgIG1lZGlhUmVjb3JkZXIgPSBuZXcgTWVkaWFSZWNvcmRlcihzdHJlYW0sIG9wdGlvbnMpXG4gICAgICAgIG1lZGlhUmVjb3JkZXIub25kYXRhYXZhaWxhYmxlID0gb25EYXRhQXZhaWxhYmxlXG4gICAgICAgIG1lZGlhUmVjb3JkZXIuc3RhcnQgUkVDT1JEX1RJTUVcbiAgICAgICAgc3RhcnRXb3JrZXIoKVxuICAgICAgICBMT0cgJ01lZGlhIHJlY29yZGVyIGluaXRpYXRlZCdcbiAgICAgICAgIyBzZXRJbnRlcnZhbChteVRpbWVyLCBSRUNPUkRfVElNRSlcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIG15VGltZXIgPSAtPlxuICAgICAgICBpZiBtZWRpYVJlY29yZGVyXG4gICAgICAgICAgbWVkaWFSZWNvcmRlci5yZXF1ZXN0RGF0YSgpXG4gICAgICAgIHJldHVyblxuXG4gICAgICBzdGFydFdvcmtlciA9IC0+XG4gICAgICAgIGlmIHR5cGVvZiBXb3JrZXIgIT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICBpZiB0eXBlb2YgdyA9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgdyA9IG5ldyBXb3JrZXIoJ2Fzc2V0cy9qcy9wYXJzZXJfd29ya2VyLmpzJylcblxuICAgICAgICAgIHcub25tZXNzYWdlID0gKGUpIC0+XG4gICAgICAgICAgICBtZXNzYWdlID0gZS5kYXRhXG4gICAgICAgICAgICB3cml0ZVRvR3VuIG1lc3NhZ2VcbiAgICAgICAgICAgIHJldHVyblxuXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBMT0cgJ1NvcnJ5ISBObyBXZWIgV29ya2VyIHN1cHBvcnQuJ1xuICAgICAgICByZXR1cm5cblxuICAgICAgc3RvcFdvcmtlciA9IC0+XG4gICAgICAgIHcudGVybWluYXRlKClcbiAgICAgICAgdyA9IHVuZGVmaW5lZFxuICAgICAgICByZXR1cm5cblxuICAgICAgb25EYXRhQXZhaWxhYmxlID0gKGJsb2JFdmVudCkgLT5cbiAgICAgICAgIyBMT0coXCJSZWNlaXZlZCBkYXRhIFwiICsgZm9ybWF0Qnl0ZXMoYmxvYkV2ZW50LmRhdGEuc2l6ZSkpXG4gICAgICAgICMgYWRkVG9BbGxSZWNvcmRlZENodW5rcyhibG9iRXZlbnQuZGF0YSlcbiAgICAgICAgaWYgYmxvYkV2ZW50LmRhdGEgYW5kIGJsb2JFdmVudC5kYXRhLnNpemVcbiAgICAgICAgICAjIHVzZUJsb2IoYmxvYkV2ZW50LmRhdGEpXG4gICAgICAgICAgdXNlU3RyaW5nIGJsb2JFdmVudC5kYXRhXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBMT0cgJ1NLSVAgTk8gREFUQT8nXG4gICAgICAgIHJldHVyblxuXG4gICAgICB1c2VCbG9iID0gKGJsb2IpIC0+XG4gICAgICAgIG9uQmxvYiBibG9iXG4gICAgICAgIHJldHVyblxuXG4gICAgICB1c2VTdHJpbmcgPSAoYmxvYikgLT5cbiAgICAgICAgcmVzcG9uc2UgPSBuZXcgUmVzcG9uc2UoYmxvYikuYXJyYXlCdWZmZXIoKS50aGVuKChhcnJheUJ1ZmZlcikgLT5cbiAgICAgICAgICBibG9iID0gbnVsbFxuICAgICAgICAgIGlmIExPQ0FMXG4gICAgICAgICAgICAjIG9uU3RyaW5nKGJhc2U2NFN0cmluZylcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBpZiB3ICE9IHVuZGVmaW5lZFxuICAgICAgICAgICAgICB3LnBvc3RNZXNzYWdlIGFycmF5QnVmZmVyXG4gICAgICAgICAgICAjIHBhcnNlU2VsZihhcnJheUJ1ZmZlcilcbiAgICAgICAgICAgICMgdmFyIGRhdGEgPSBuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcilcbiAgICAgICAgICAgICMgd2luZG93LmNsLndyaXRlKGRhdGEpXG4gICAgICAgICAgICAjIGRhdGEgPSBudWxsXG4gICAgICAgICAgICAjIGFycmF5QnVmZmVyID0gbnVsbFxuICAgICAgICAgIHJldHVyblxuICAgICAgICApXG4gICAgICAgIHJlc3BvbnNlID0gbnVsbFxuICAgICAgICByZXR1cm5cblxuICAgICAgIyBmdW5jdGlvbiB1c2VTdHJpbmcoYmxvYikge1xuICAgICAgIyAgICAgdmFyIHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYilcbiAgICAgICMgICAgIGZldGNoKHVybCkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICMgICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHVybClcbiAgICAgICMgICAgICAgICByZXR1cm4gcmVzcG9uc2UuYXJyYXlCdWZmZXIoKVxuICAgICAgIyAgICAgfSkudGhlbihmdW5jdGlvbiAoYXJyYXlCdWZmZXIpIHtcbiAgICAgICMgICAgICAgICAvLyB2YXIgYmFzZTY0U3RyaW5nID0gYnRvYShcbiAgICAgICMgICAgICAgICAvLyAgICAgbmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpXG4gICAgICAjICAgICAgICAgLy8gICAgICAgICAucmVkdWNlKChvbkRhdGEsIGJ5dGUpID0+IG9uRGF0YSArIFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZSksICcnKVxuICAgICAgIyAgICAgICAgIC8vIClcbiAgICAgICMgICAgICAgICAvLyBMT0coYnVmMmhleChhcnJheUJ1ZmZlcikpXG4gICAgICAjICAgICAgICAgLy8gTE9HKFV0ZjhBcnJheVRvU3RyKG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKSkpXG4gICAgICAjICAgICAgICAgaWYgKExPQ0FMKSB7XG4gICAgICAjICAgICAgICAgICAgIC8vIG9uU3RyaW5nKGJhc2U2NFN0cmluZylcbiAgICAgICMgICAgICAgICB9IGVsc2Uge1xuICAgICAgIyAgICAgICAgICAgICB3aW5kb3cuY2wud3JpdGUobmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpKVxuICAgICAgIyAgICAgICAgICAgICAvLyB3cml0ZVRvR3VuKGJhc2U2NFN0cmluZylcbiAgICAgICMgICAgICAgICB9XG4gICAgICAjICAgICAgICAgYmFzZTY0U3RyaW5nID0gbnVsbFxuICAgICAgIyAgICAgfSlcbiAgICAgICMgfVxuXG4gICAgICBVdGY4QXJyYXlUb1N0ciA9IChhcnJheSkgLT5cbiAgICAgICAgb3V0ID0gdW5kZWZpbmVkXG4gICAgICAgIGkgPSB1bmRlZmluZWRcbiAgICAgICAgbGVuID0gdW5kZWZpbmVkXG4gICAgICAgIGMgPSB1bmRlZmluZWRcbiAgICAgICAgY2hhcjIgPSB1bmRlZmluZWRcbiAgICAgICAgY2hhcjMgPSB1bmRlZmluZWRcbiAgICAgICAgb3V0ID0gJydcbiAgICAgICAgbGVuID0gYXJyYXkubGVuZ3RoXG4gICAgICAgIGkgPSAwXG4gICAgICAgIHdoaWxlIGkgPCBsZW5cbiAgICAgICAgICBjID0gYXJyYXlbaSsrXVxuICAgICAgICAgIHN3aXRjaCBjID4+IDRcbiAgICAgICAgICAgIHdoZW4gMCwgMSwgMiwgMywgNCwgNSwgNiwgN1xuICAgICAgICAgICAgICAjIDB4eHh4eHh4XG4gICAgICAgICAgICAgIG91dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGMpXG4gICAgICAgICAgICB3aGVuIDEyLCAxM1xuICAgICAgICAgICAgICAjIDExMHggeHh4eCAgIDEweHggeHh4eFxuICAgICAgICAgICAgICBjaGFyMiA9IGFycmF5W2krK11cbiAgICAgICAgICAgICAgb3V0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGMgJiAweDFGKSA8PCA2IHwgY2hhcjIgJiAweDNGKVxuICAgICAgICAgICAgd2hlbiAxNFxuICAgICAgICAgICAgICAjIDExMTAgeHh4eCAgMTB4eCB4eHh4ICAxMHh4IHh4eHhcbiAgICAgICAgICAgICAgY2hhcjIgPSBhcnJheVtpKytdXG4gICAgICAgICAgICAgIGNoYXIzID0gYXJyYXlbaSsrXVxuICAgICAgICAgICAgICBvdXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoYyAmIDB4MEYpIDw8IDEyIHwgKGNoYXIyICYgMHgzRikgPDwgNiB8IChjaGFyMyAmIDB4M0YpIDw8IDApXG4gICAgICAgIG91dFxuXG4gICAgICBidWYyaGV4ID0gKGJ1ZmZlcikgLT5cbiAgICAgICAgIyBidWZmZXIgaXMgYW4gQXJyYXlCdWZmZXJcbiAgICAgICAgQXJyYXk6Om1hcC5jYWxsKG5ldyBVaW50OEFycmF5KGJ1ZmZlciksICh4KSAtPlxuICAgICAgICAgICgnMDAnICsgeC50b1N0cmluZygxNikpLnNsaWNlIC0yXG4gICAgICAgICkuam9pbiAnJ1xuXG4gICAgICB3cml0ZVRvR3VuID0gKGJhc2U2NGRhdGEpIC0+XG4gICAgICAgIG4gPSBuIHx8IHVuZGVmaW5lZFxuICAgICAgICBMT0cgJ1dyaXRlIHRvIEdVTjo6JyArIGJhc2U2NGRhdGEuc3Vic3RyaW5nKDAsIDEwMClcbiAgICAgICAgbGFzdFVwZGF0ZSA9IChuZXcgRGF0ZSkuZ2V0VGltZSgpXG4gICAgICAgIHVzZXIgPSB1bmRlZmluZWRcbiAgICAgICAgaWYgaW5pdGlhbERhdGEgPT0gdW5kZWZpbmVkIGFuZCBiYXNlNjRkYXRhLnN0YXJ0c1dpdGgoUkVDT1JEX1BSRUZJWClcbiAgICAgICAgICBMT0cgJ0lOSVRJQUwnXG4gICAgICAgICAgbiA9IGJhc2U2NGRhdGEuaW5kZXhPZignd0lFQicpXG4gICAgICAgICAgTE9HICdSQVc6OicgKyBuICsgJzo6JyArIGJhc2U2NGRhdGEuc3Vic3RyaW5nKDAsIDI1MilcbiAgICAgICAgICBpbml0aWFsRGF0YSA9IGJhc2U2NGRhdGEuc3Vic3RyaW5nKDAsIDI1MilcbiAgICAgICAgZWxzZVxuICAgICAgICAgIG4gPSBiYXNlNjRkYXRhLmluZGV4T2YoJ0gwTzJkUUgnKVxuICAgICAgICAgIExPRyAnUkFXOjonICsgbiArICc6OicgKyBiYXNlNjRkYXRhXG4gICAgICAgIExPRygnc3RyZWFtSWQnLCBzdHJlYW1JZClcbiAgICAgICAgdXNlciA9IGd1bkRCLmdldChzdHJlYW1JZCkucHV0KHtcbiAgICAgICAgICBpbml0aWFsOiBpbml0aWFsRGF0YVxuICAgICAgICAgIG5hbWU6IGJhc2U2NGRhdGFcbiAgICAgICAgICBpZDogc3RyZWFtSWRcbiAgICAgICAgICB0aW1lc3RhbXA6IGxhc3RVcGRhdGVcbiAgICAgICAgICBpc1NwZWFraW5nOiBzcGVlY2hEZXRlY3RlZFxuICAgICAgICB9LCBBQ0spXG4gICAgICAgIGd1bkRCLmdldChEQl9SRUNPUkQpLnNldCB1c2VyXG4gICAgICAgIHJldHVyblxuXG4gICAgICBhZGRUb0FsbFJlY29yZGVkQ2h1bmtzID0gKGNodW5rKSAtPlxuICAgICAgICByZWNvcmRlZENodW5rcy5wdXNoIGNodW5rXG4gICAgICAgIHN1cGVyQnVmZmVyID0gbmV3IEJsb2IocmVjb3JkZWRDaHVua3MpXG4gICAgICAgIExPRyAnVG90YWwgZGF0YSBzaXplICcgKyBmb3JtYXRCeXRlcyhzdXBlckJ1ZmZlci5zaXplKVxuICAgICAgICByZXR1cm5cblxuICAgICAgZm9ybWF0Qnl0ZXMgPSAoYnl0ZXMpIC0+XG4gICAgICAgIGlmIGJ5dGVzIDwgMTAyNFxuICAgICAgICAgIGJ5dGVzICsgJyBCeXRlcydcbiAgICAgICAgZWxzZSBpZiBieXRlcyA8IDEwNDg1NzZcbiAgICAgICAgICAoYnl0ZXMgLyAxMDI0KS50b0ZpeGVkKDMpICsgJyBLQidcbiAgICAgICAgZWxzZSBpZiBieXRlcyA8IDEwNzM3NDE4MjRcbiAgICAgICAgICAoYnl0ZXMgLyAxMDQ4NTc2KS50b0ZpeGVkKDMpICsgJyBNQidcbiAgICAgICAgZWxzZVxuICAgICAgICAgIChieXRlcyAvIDEwNzM3NDE4MjQpLnRvRml4ZWQoMykgKyAnIEdCJ1xuXG4gICAgICBhdHRhY2hTcGVlY2hEZXRlY3Rpb24gPSAoc3RyZWFtKSAtPlxuICAgICAgICBvcHRpb25zID0ge31cbiAgICAgICAgc3BlZWNoRXZlbnRzID0gaGFyayhzdHJlYW0sIG9wdGlvbnMpXG4gICAgICAgIHNwZWVjaEV2ZW50cy5vbiAnc3BlYWtpbmcnLCAtPlxuICAgICAgICAgIGlmIFNQRUVDSF9ERVRFQ1RJT05fRU5BQkxFRFxuICAgICAgICAgICAgc3BlZWNoRGV0ZWN0ZWQgPSB0cnVlXG4gICAgICAgICAgICBMT0cgJ3NwZWFraW5nJ1xuICAgICAgICAgIHJldHVyblxuICAgICAgICBzcGVlY2hFdmVudHMub24gJ3N0b3BwZWRfc3BlYWtpbmcnLCAtPlxuICAgICAgICAgIGlmIFNQRUVDSF9ERVRFQ1RJT05fRU5BQkxFRFxuICAgICAgICAgICAgTE9HICdzdG9wcGVkX3NwZWFraW5nJ1xuICAgICAgICAgICAgc3BlZWNoRGV0ZWN0ZWQgPSBmYWxzZVxuICAgICAgICAgIHJldHVyblxuICAgICAgICByZXR1cm5cblxuXG5cbiAgICAgICMgRG9tIGVsZW1lbnRzIG5hbWUgY29uc3RhbnRzXG4gICAgICBSRU1PVEVfVklERU8gPSAndmlkZW8nXG4gICAgICAjSURcbiAgICAgIHN0cmVhbUlkID0gRGF0ZS5ub3coKVxuICAgICAgIyBHVU4gQUNLXG4gICAgICByZW1vdGVWaWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ2aWRlb1wiKVxuICAgICAgcmVtb3RlVmlkZW8uYXV0b3BsYXkgPSB0cnVlXG4gICAgICByZW1vdGVWaWRlby5jb250cm9scyA9IHRydWVcbiAgICAgIHJlbW90ZVZpZGVvLm11dGVkID0gdHJ1ZVxuICAgICAgcmVtb3RlVmlkZW8ucGxheXNpbmxpbmUgPSB0cnVlXG4gICAgICByZW1vdGVWaWRlby5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIlxuICAgICAgcmVtb3RlVmlkZW8uc3R5bGVbXCJtYXgtd2lkdGhcIl0gPSBcIjUwJVwiXG4gICAgICByZW1vdGVWaWRlby5wcmVsb2FkID0gXCJub25lXCJcbiAgICAgIG15VmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpXG4gICAgICBteVZpZGVvLnNldEF0dHJpYnV0ZSgnYXV0b3BsYXknLCB0cnVlKVxuICAgICAgbXlWaWRlby5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21heC13aWR0aDogNTAlOycpXG4gICAgICBteVZpZGVvLnNldEF0dHJpYnV0ZSgncGxheXNpbmxpbmUnLCB0cnVlKVxuICAgICAgbXlWaWRlby5zZXRBdHRyaWJ1dGUoJ211dGVkJywgdHJ1ZSlcbiAgICAgIG15VmlkZW8uc2V0QXR0cmlidXRlKCdjb250cm9scycsIHRydWUpXG4gICAgICBlbGVtZW50LmFwcGVuZChteVZpZGVvKVxuICAgICAgZWxlbWVudC5hcHBlbmQocmVtb3RlVmlkZW8pXG4gICAgICBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAncCdcbiAgICAgIGdvTGl2ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICBnb0xpdmVCdXR0b24uaW5uZXJIVE1MID0gJ0dvIGxpdmUnXG4gICAgICBnb0xpdmVCdXR0b24uc2V0QXR0cmlidXRlICdjbGFzcycsICdidG4gYnRuLWRlZmF1bHQnXG4gICAgICBwLmFwcGVuZChnb0xpdmVCdXR0b24pXG4gICAgICAjdG9nZ2xlRnVsbFNjcmVlbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAjdG9nZ2xlRnVsbFNjcmVlbkJ1dHRvbi5pbm5lckhUTUwgPSAndG9nZ2xlIGZ1bGxzY3JlZW4nXG4gICAgICAjdG9nZ2xlRnVsbFNjcmVlbkJ1dHRvbi5zZXRBdHRyaWJ1dGUgJ2NsYXNzJywgJ2J0biBidG4tZGVmYXVsdCdcbiAgICAgICNwLmFwcGVuZCh0b2dnbGVGdWxsU2NyZWVuQnV0dG9uKVxuICAgICAgc3dpdGNoQ2FtZXJhQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgIHN3aXRjaENhbWVyYUJ1dHRvbi5pbm5lckhUTUwgPSAnc3dpdGNoIGNhbWVyYSdcbiAgICAgIHN3aXRjaENhbWVyYUJ1dHRvbi5zdHlsZSA9ICdkaXNwbGF5Om5vbmU7J1xuICAgICAgc3dpdGNoQ2FtZXJhQnV0dG9uLnNldEF0dHJpYnV0ZSAnY2xhc3MnLCAnYnRuIGJ0bi1kZWZhdWx0J1xuICAgICAgcC5hcHBlbmQoc3dpdGNoQ2FtZXJhQnV0dG9uKVxuICAgICAgbXV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICBtdXRlQnV0dG9uLmlubmVySFRNTCA9ICdNdXRlJ1xuICAgICAgbXV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUgJ2NsYXNzJywgJ2J0biBidG4tZGVmYXVsdCdcbiAgICAgIHAuYXBwZW5kKG11dGVCdXR0b24pXG4gICAgICBlbGVtZW50LmFwcGVuZCBwXG4gICAgICBhbW91bnRPZkNhbWVyYXMgPSAwXG4gICAgICBjdXJyZW50RmFjaW5nTW9kZSA9ICdlbnZpcm9ubWVudCdcbiAgICAgIG11dGVkID0gdHJ1ZVxuICAgICAgZ3VuREIgPSB1bmRlZmluZWRcblxuICAgICAgQUNLID0gKGFjaykgLT5cbiAgICAgICAgaWYgYWNrLm9rICE9IDEgYW5kIGFjay5lcnIgIT0gJ0Vycm9yOiBObyBBQ0sgcmVjZWl2ZWQgeWV0LidcbiAgICAgICAgICBMT0cgJ2FjaycsIGFja1xuICAgICAgICAgICMgbG9jYWxTdG9yYWdlLmNsZWFyKClcbiAgICAgICAgZWxzZVxuICAgICAgICAgIExPRyAnYWNrJywgYWNrXG4gICAgICAgICAgIyBsb2NhbFN0b3JhZ2UuY2xlYXIoKVxuICAgICAgICByZXR1cm5cblxuICAgICAgcmVtb3ZlRnJvbUd1biA9IChpZCkgLT5cbiAgICAgICAgIyBsb2NhbFN0b3JhZ2UuY2xlYXIoKVxuICAgICAgICB1c2VyID0gZ3VuREIuZ2V0KHN0cmVhbUlkKVxuICAgICAgICBndW5EQi5nZXQoREJfUkVDT1JEKS51bnNldCB1c2VyXG4gICAgICAgICMgdXNlci5wdXQgbnVsbCAjIGNhbid0IHB1dCBudWxsIHRvIHJvb3QgbGV2ZWwgbm9kZVxuICAgICAgICByZXR1cm5cblxuICAgICAgZGVidWcgPSAodGV4dCkgLT5cbiAgICAgICAgaWYgREVCVUdcbiAgICAgICAgICBMT0cgdGV4dFxuICAgICAgICByZXR1cm5cblxuICAgICAgaW5pdENhbWVyYVVJID0gLT5cbiAgICAgICAgIyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9ubC9kb2NzL1dlYi9IVE1ML0VsZW1lbnQvYnV0dG9uXG4gICAgICAgICMgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQWNjZXNzaWJpbGl0eS9BUklBL0FSSUFfVGVjaG5pcXVlcy9Vc2luZ190aGVfYnV0dG9uX3JvbGVcbiAgICAgICAgZ29MaXZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIgJ2NsaWNrJywgLT5cbiAgICAgICAgICB0YWtlU25hcHNob3QoKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICBtdXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIgJ2NsaWNrJywgLT5cbiAgICAgICAgICBtdXRlVW5tdXRlKClcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgIyAtLSBzd2l0Y2ggY2FtZXJhIHBhcnRcbiAgICAgICAgaWYgYW1vdW50T2ZDYW1lcmFzID4gMVxuICAgICAgICAgIHN3aXRjaENhbWVyYUJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jaydcbiAgICAgICAgICBzd2l0Y2hDYW1lcmFCdXR0b24uYWRkRXZlbnRMaXN0ZW5lciAnY2xpY2snLCAtPlxuICAgICAgICAgICAgaWYgY3VycmVudEZhY2luZ01vZGUgPT0gJ2Vudmlyb25tZW50J1xuICAgICAgICAgICAgICBjdXJyZW50RmFjaW5nTW9kZSA9ICd1c2VyJ1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICBjdXJyZW50RmFjaW5nTW9kZSA9ICdlbnZpcm9ubWVudCdcbiAgICAgICAgICAgIGluaXRDYW1lcmFTdHJlYW0oKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIHJldHVyblxuXG4gICAgICAjIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJydGMvc2FtcGxlcy9ibG9iL2doLXBhZ2VzL3NyYy9jb250ZW50L2RldmljZXMvaW5wdXQtb3V0cHV0L2pzL21haW4uanNcblxuICAgICAgY2xvc2VDYW1lcmFTdHJlYW0gPSAtPlxuICAgICAgICBpZiB3aW5kb3cuc3RyZWFtXG4gICAgICAgICAgd2luZG93LnN0cmVhbS5nZXRUcmFja3MoKS5mb3JFYWNoICh0cmFjaykgLT5cbiAgICAgICAgICAgIHRyYWNrLnN0b3AoKVxuXG4gICAgICBlbGVtZW50Lm9uICckZGVzdHJveScsIC0+XG4gICAgICAgIGNsb3NlQ2FtZXJhU3RyZWFtKClcblxuICAgICAgaW5pdENhbWVyYVN0cmVhbSA9IC0+XG4gICAgICAgICMgc3RvcCBhbnkgYWN0aXZlIHN0cmVhbXMgaW4gdGhlIHdpbmRvd1xuXG4gICAgICAgIGhhbmRsZVN1Y2Nlc3MgPSAoc3RyZWFtKSAtPlxuICAgICAgICAgIHdpbmRvdy5zdHJlYW0gPSBzdHJlYW1cbiAgICAgICAgICAjIG1ha2Ugc3RyZWFtIGF2YWlsYWJsZSB0byBicm93c2VyIGNvbnNvbGVcbiAgICAgICAgICBteVZpZGVvLnNyY09iamVjdCA9IHN0cmVhbVxuICAgICAgICAgIGlmIGNvbnN0cmFpbnRzLnZpZGVvLmZhY2luZ01vZGVcbiAgICAgICAgICAgIGlmIGNvbnN0cmFpbnRzLnZpZGVvLmZhY2luZ01vZGUgPT0gJ2Vudmlyb25tZW50J1xuICAgICAgICAgICAgICBzd2l0Y2hDYW1lcmFCdXR0b24uc2V0QXR0cmlidXRlICdhcmlhLXByZXNzZWQnLCB0cnVlXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgIHN3aXRjaENhbWVyYUJ1dHRvbi5zZXRBdHRyaWJ1dGUgJ2FyaWEtcHJlc3NlZCcsIGZhbHNlXG4gICAgICAgICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5lbnVtZXJhdGVEZXZpY2VzKClcblxuICAgICAgICBoYW5kbGVFcnJvciA9IChlcnJvcikgLT5cbiAgICAgICAgICBMT0cgZXJyb3JcbiAgICAgICAgICAjaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL01lZGlhRGV2aWNlcy9nZXRVc2VyTWVkaWFcbiAgICAgICAgICBpZiBlcnJvciA9PSAnUGVybWlzc2lvbkRlbmllZEVycm9yJ1xuICAgICAgICAgICAgYWxlcnQgJ1Blcm1pc3Npb24gZGVuaWVkLiBQbGVhc2UgcmVmcmVzaCBhbmQgZ2l2ZSBwZXJtaXNzaW9uLidcbiAgICAgICAgICByZXR1cm5cblxuICAgICAgICBjbG9zZUNhbWVyYVN0cmVhbSgpXG5cbiAgICAgICAgY29uc3RyYWludHMgPVxuICAgICAgICAgIGF1ZGlvOiB0cnVlXG4gICAgICAgICAgdmlkZW86XG4gICAgICAgICAgICB3aWR0aDpcbiAgICAgICAgICAgICAgbWluOiAyMDBcbiAgICAgICAgICAgICAgaWRlYWw6IDIwMFxuICAgICAgICAgICAgICBtYXg6IDY0MFxuICAgICAgICAgICAgaGVpZ2h0OlxuICAgICAgICAgICAgICBtaW46IDIwMFxuICAgICAgICAgICAgICBpZGVhbDogMjAwXG4gICAgICAgICAgICAgIG1heDogNjQwXG4gICAgICAgICAgICBmYWNpbmdNb2RlOiBjdXJyZW50RmFjaW5nTW9kZVxuICAgICAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYShjb25zdHJhaW50cykudGhlbihoYW5kbGVTdWNjZXNzKS5jYXRjaCBoYW5kbGVFcnJvclxuICAgICAgICByZXR1cm5cblxuICAgICAgdGFrZVNuYXBzaG90ID0gLT5cbiAgICAgICAgaWYgIWlzUmVjb3JkaW5nKClcbiAgICAgICAgICBjYXB0dXJlU2NyZWVuIHdpbmRvdy5zdHJlYW1cbiAgICAgICAgICBnb0xpdmVCdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCdcbiAgICAgICAgICBzd2l0Y2hDYW1lcmFCdXR0b24uZGlzYWJsZWQgPSB0cnVlXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBwYXVzZVJlY29yZGluZygpXG4gICAgICAgICAgZ29MaXZlQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcnXG4gICAgICAgICAgc3dpdGNoQ2FtZXJhQnV0dG9uLmRpc2FibGVkID0gZmFsc2VcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIG11dGVVbm11dGUgPSAtPlxuICAgICAgICBpZiBtdXRlZFxuICAgICAgICAgIG11dGVCdXR0b24uc2V0QXR0cmlidXRlICdhcmlhLXByZXNzZWQnLCBmYWxzZVxuICAgICAgICAgIG11dGVkID0gZmFsc2VcbiAgICAgICAgZWxzZVxuICAgICAgICAgIG11dGVCdXR0b24uc2V0QXR0cmlidXRlICdhcmlhLXByZXNzZWQnLCB0cnVlXG4gICAgICAgICAgbXV0ZWQgPSB0cnVlXG4gICAgICAgIHZpZGVvcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCd2aWRlbycpXG4gICAgICAgIGtleXMgPSBPYmplY3Qua2V5cyh2aWRlb3MpXG4gICAgICAgIGkgPSAwXG4gICAgICAgIHdoaWxlIGkgPCBrZXlzLmxlbmd0aFxuICAgICAgICAgIGlmIHZpZGVvc1tpXS5pZCAhPSAndmlkZW8nXG4gICAgICAgICAgICB2aWRlb3NbaV0ubXV0ZWQgPSBtdXRlZFxuICAgICAgICAgIGkrK1xuICAgICAgICByZXR1cm5cblxuICAgICAgb3BlblJlbW90ZVZpZGVvID0gLT5cbiAgICAgICAgaWQgPSBzY29wZS5wdWJrZXkgKyAnL3N0cmVhbSdcbiAgICAgICAgc3RyZWFtZXIgPSBuZXcgU3RyZWFtZXIoaWQsIHJlbW90ZVZpZGVvKVxuICAgICAgICBzdHJlYW1lci5pbml0KClcblxuICAgICAgZ28gPSAtPlxuICAgICAgICByZXR1cm4gdW5sZXNzIHNjb3BlLmd1biBhbmQgc2NvcGUucHVia2V5XG4gICAgICAgIG15UHViS2V5ID0gc2NvcGUuZ3VuLnVzZXIoKS5fLnNlYS5wdWJcbiAgICAgICAgb3BlblJlbW90ZVZpZGVvKCkgdW5sZXNzIG15UHViS2V5ID09IHNjb3BlLnB1YmtleVxuICAgICAgICBzdHJlYW1JZCA9IG15UHViS2V5ICsgJy9zdHJlYW0nXG4gICAgICAgICMgZ3VuREIgPSBzY29wZS5ndW4uYmFjaygtMSlcbiAgICAgICAgIyBHVU5cbiAgICAgICAgcGVlcnMgPSBbICdodHRwczovL2d1bm1lZXRpbmdzZXJ2ZXIuaGVyb2t1YXBwLmNvbS9ndW4nIF1cbiAgICAgICAgb3B0ID1cbiAgICAgICAgICBwZWVyczogcGVlcnNcbiAgICAgICAgICBsb2NhbFN0b3JhZ2U6IGZhbHNlXG4gICAgICAgICAgcmFkaXNrOiBmYWxzZVxuICAgICAgICBndW5EQiA9IEd1bihvcHQpXG4gICAgICAgIHJlbW92ZUZyb21HdW4gc3RyZWFtSWRcblxuICAgICAgICAjIGRvIHNvbWUgV2ViUlRDIGNoZWNrcyBiZWZvcmUgY3JlYXRpbmcgdGhlIGludGVyZmFjZVxuICAgICAgICBEZXRlY3RSVEMubG9hZCAtPlxuICAgICAgICAgICMgZG8gc29tZSBjaGVja3NcbiAgICAgICAgICBpZiBEZXRlY3RSVEMuaXNXZWJSVENTdXBwb3J0ZWQgPT0gZmFsc2VcbiAgICAgICAgICAgIGFsZXJ0ICdQbGVhc2UgdXNlIENocm9tZSwgRmlyZWZveCwgaU9TIDExLCBBbmRyb2lkIDUgb3IgaGlnaGVyLCBTYWZhcmkgMTEgb3IgaGlnaGVyJ1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIGlmIERldGVjdFJUQy5oYXNXZWJjYW0gPT0gZmFsc2VcbiAgICAgICAgICAgICAgYWxlcnQgJ1BsZWFzZSBpbnN0YWxsIGFuIGV4dGVybmFsIHdlYmNhbSBkZXZpY2UuJ1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICBhbW91bnRPZkNhbWVyYXMgPSBEZXRlY3RSVEMudmlkZW9JbnB1dERldmljZXMubGVuZ3RoXG4gICAgICAgICAgICAgIGluaXRDYW1lcmFVSSgpXG4gICAgICAgICAgICAgIGluaXRDYW1lcmFTdHJlYW0oKVxuICAgICAgICAgIExPRyAnUlRDIERlYnVnIGluZm86ICcgKyAnXFxuIE9TOiAgICAgICAgICAgICAgICAgICAnICsgRGV0ZWN0UlRDLm9zTmFtZSArICcgJyArIERldGVjdFJUQy5vc1ZlcnNpb24gKyAnXFxuIGJyb3dzZXI6ICAgICAgICAgICAgICAnICsgRGV0ZWN0UlRDLmJyb3dzZXIuZnVsbFZlcnNpb24gKyAnICcgKyBEZXRlY3RSVEMuYnJvd3Nlci5uYW1lICsgJ1xcbiBpcyBNb2JpbGUgRGV2aWNlOiAgICAgJyArIERldGVjdFJUQy5pc01vYmlsZURldmljZSArICdcXG4gaGFzIHdlYmNhbTogICAgICAgICAgICcgKyBEZXRlY3RSVEMuaGFzV2ViY2FtICsgJ1xcbiBoYXMgcGVybWlzc2lvbjogICAgICAgJyArIERldGVjdFJUQy5pc1dlYnNpdGVIYXNXZWJjYW1QZXJtaXNzaW9uICsgJ1xcbiBnZXRVc2VyTWVkaWEgU3VwcG9ydDogJyArIERldGVjdFJUQy5pc0dldFVzZXJNZWRpYVN1cHBvcnRlZCArICdcXG4gaXNXZWJSVEMgU3VwcG9ydGVkOiAgICcgKyBEZXRlY3RSVEMuaXNXZWJSVENTdXBwb3J0ZWQgKyAnXFxuIFdlYkF1ZGlvIFN1cHBvcnRlZDogICAnICsgRGV0ZWN0UlRDLmlzQXVkaW9Db250ZXh0U3VwcG9ydGVkICsgJ1xcbiBpcyBNb2JpbGUgRGV2aWNlOiAgICAgJyArIERldGVjdFJUQy5pc01vYmlsZURldmljZVxuICAgICAgICAgIHJldHVyblxuICAgICAgICByZXR1cm5cblxuICAgICAgc2NvcGUuJHdhdGNoICdndW4nLCBnb1xuIl19

(function() {
  angular.module('irisAngular').directive('message', function() {
    return {
      scope: true,
      restrict: 'E',
      templateUrl: 'app/components/message/message.template.html',
      link: function(scope, element, attrs) {
        var a, addAttachment, alpha, attachment, i, index, j, l, len, len1, len2, maxRatingDiff, minRatingDiff, msg, n, neutralRating, rating, ref, ref1, ref2, ref3, ref4, ref5, ref6, smallestIndex, updateReactions, updateReplies, updateShares;
        msg = scope.msg;
        msg.likes = 0;
        updateReactions = function(reactions) {
          var k, liked, likes, v;
          likes = 0;
          liked = false;
          for (k in reactions) {
            v = reactions[k];
            if (v === 'like') {
              likes++;
              if (k === scope.viewpoint.value && v === 'like') {
                liked = true;
              }
            }
          }
          msg.likes = likes;
          return msg.liked = liked;
        };
        if (msg.signedData.sharedMsg && !options.noRecursion) {
          scope.irisIndex.getMessageByHash(msg.signedData.sharedMsg).then(function(m) {
            return msg.sharedMsg = m;
          });
        }
        if (msg.reactions) {
          updateReactions(msg.reactions);
        }
        msg.repliesArr = msg.repliesArr || [];
        msg.replies = msg.replies || {};
        msg.sharesArr = msg.sharesArr || [];
        msg.shares = msg.shares || {};
        updateReplies = function(replies) {
          var hash, replyRaw, results;
          results = [];
          for (hash in replies) {
            replyRaw = replies[hash];
            results.push(window.irisLib.Message.fromSig(replyRaw).then(function(r) {
              var j, len, o, ref;
              if (!(msg.replies[r.getHash()] && msg.replies[r.getHash()].author)) {
                if (msg.signedData.pollOptions && r.signedData.type === 'vote') {
                  if (!(msg.voteMsgs && msg.voteMsgs.hasOwnProperty(r.getSignerKeyID()))) {
                    msg.voteCount = msg.voteCount ? msg.voteCount + 1 : 1;
                    if (!msg.myVote && r.getSignerKeyID() === scope.authentication.user.idValue) {
                      msg.myVote = r.signedData.vote;
                    }
                    msg.voteMsgs = msg.voteMsgs || {};
                    msg.voteMsgs[r.getSignerKeyID()] = r.getHash();
                    if (!msg.voteResults) {
                      msg.voteResults = {};
                      ref = msg.signedData.pollOptions;
                      for (j = 0, len = ref.length; j < len; j++) {
                        o = ref[j];
                        msg.voteResults[o.text] = 0;
                      }
                    }
                    if (msg.voteResults.hasOwnProperty(r.signedData.vote)) {
                      msg.voteResults[r.signedData.vote] = msg.voteResults[r.signedData.vote] + 1;
                    } else {
                      msg.voteResults[r.signedData.vote] = 1;
                    }
                  }
                }
                msg.replies[r.getHash()] = r;
                msg.repliesArr = Object.values(msg.replies);
                if (r.signedData.type === 'vote') {
                  return console.log(1111, r, msg);
                }
              }
            }));
          }
          return results;
        };
        updateShares = function(shares) {
          var hash, results, shareRaw;
          results = [];
          for (hash in shares) {
            shareRaw = shares[hash];
            results.push(window.irisLib.Message.fromSig(shareRaw).then(function(r) {
              if (!(msg.shares[r.getHash()] && msg.shares[r.getHash()].author)) {
                msg.shares[r.getHash()] = r;
                return msg.sharesArr = Object.values(msg.shares);
              }
            }));
          }
          return results;
        };
        if (msg.gun) {
          msg.gun.get('replies').open(updateReplies);
          msg.gun.get('reactions').on(updateReactions);
          msg.gun.get('shares').open(updateShares);
        }
        if (!msg.author) {
          msg.author = msg.getAuthor(scope.irisIndex);
          msg.author.gun.get('trustDistance').on(function(d) {
            return msg.authorTrustDistance = d;
          });
        }
        msg.author.gun.get('attrs').open(function(d) {
          var mva;
          mva = window.irisLib.Identity.getMostVerifiedAttributes(d);
          if (mva.name) {
            return scope.$apply(function() {
              return msg.author_name = mva.name.attribute.value;
            });
          } else if (mva.nickname) {
            return scope.$apply(function() {
              return msg.author_name = mva.nickname.attribute.value;
            });
          }
        });
        msg.recipient = msg.getRecipient(scope.irisIndex);
        msg.recipient.gun.get('attrs').open(function(d) {
          var mva;
          mva = window.irisLib.Identity.getMostVerifiedAttributes(d);
          if (mva.name) {
            return scope.$apply(function() {
              return msg.recipient_name = mva.name.attribute.value;
            });
          } else if (mva.nickname) {
            return scope.$apply(function() {
              return msg.recipient_name = mva.nickname.attribute.value;
            });
          }
        });
        if (msg.signedData.attachments) {
          msg.attachments = [];
          addAttachment = function(attachment) {
            var type, typeSubstr;
            if (attachment.uri) {
              type = attachment.type || 'image';
              typeSubstr = attachment.type.substr(0, 5);
              if (typeSubstr === 'audio' || typeSubstr === 'video') {
                msg.attachments.push(Object.assign({type, typeSubstr}, attachment));
                return console.log(msg.attachments);
              } else {
                return scope.ipfsGet(attachment.uri, {
                  base64type: type
                }).then(function(src) {
                  return scope.$apply(function() {
                    return msg.attachments.push(Object.assign({src, type, typeSubstr}, attachment));
                  });
                });
              }
            }
          };
          ref = msg.signedData.attachments;
          for (j = 0, len = ref.length; j < len; j++) {
            attachment = ref[j];
            addAttachment(attachment);
          }
        }
        // TODO: make sure message signature is checked
        i = void 0;
        i = 0;
        smallestIndex = 1000;
        msg.authorArray = msg.getAuthorArray();
        ref1 = msg.authorArray;
        for (l = 0, len1 = ref1.length; l < len1; l++) {
          a = ref1[l];
          if (!msg.linkToAuthor) {
            msg.linkToAuthor = a;
          }
          index = Object.keys(window.irisLib.Attribute.getUniqueIdValidators()).indexOf(a.type);
          if (index > -1 && index < smallestIndex) {
            smallestIndex = index;
            msg.linkToAuthor = a;
          } else if (!msg.author_name && ((ref2 = a.type) === 'name' || ref2 === 'nickname')) {
            msg.author_name = a.value;
          }
          i++;
        }
        i = 0;
        smallestIndex = 1000;
        msg.recipientArray = msg.getRecipientArray();
        ref3 = msg.recipientArray;
        for (n = 0, len2 = ref3.length; n < len2; n++) {
          a = ref3[n];
          if (!msg.linkToAuthor) {
            msg.linkToRecipient = a;
          }
          index = Object.keys(window.irisLib.Attribute.getUniqueIdValidators()).indexOf(a.type);
          if (index > -1 && index < smallestIndex) {
            smallestIndex = index;
            msg.linkToRecipient = a;
          } else if (!msg.recipient_name && ((ref4 = a.type) === 'name' || ref4 === 'nickname')) {
            msg.recipient_name = a.value;
          }
          i++;
        }
        if (msg.linkToAuthor.equals(msg.linkToRecipient)) {
          msg.sameAuthorAndRecipient = true;
        }
        if (!msg.author_name) {
          msg.author_name = msg.linkToAuthor.value;
          if ((ref5 = msg.linkToAuthor.type) === 'keyID' || ref5 === 'uuid') {
            msg.author_name = msg.author_name.slice(0, 6) + '...';
          }
        }
        if (!msg.recipient_name) {
          msg.recipient_name = msg.linkToRecipient.value;
          if ((ref6 = msg.linkToAuthor.type) === 'keyID' || ref6 === 'uuid') {
            msg.recipient_name = msg.recipient_name.slice(0, 6) + '...';
          }
        }
        alpha = void 0;
        msg.bgColor = '';
        msg.iconCount = new Array(1);
        switch (msg.signedData.type) {
          case 'verify_identity':
          case 'verification':
            msg.iconStyle = 'glyphicon glyphicon-ok-sign';
            return msg.isVerification = true;
          case 'unverify_identity':
          case 'unverification':
            msg.iconStyle = 'glyphicon glyphicon-remove negative';
            msg.bgColor = 'background-color: #FFF0DE;border-color:#FFE2C6;';
            return msg.isUnverification = true;
          case 'post':
            msg.iconStyle = ''; // fa fa-pencil
            return msg.isPost = true;
          case 'rating':
            rating = msg.signedData.rating;
            neutralRating = (msg.signedData.minRating + msg.signedData.maxRating) / 2;
            maxRatingDiff = msg.signedData.maxRating - neutralRating;
            minRatingDiff = msg.signedData.minRating - neutralRating;
            if (rating > neutralRating) {
              if (msg.signedData.context === 'verifier') {
                msg.iconStyle = 'fa fa-shield positive';
              } else {
                msg.iconStyle = 'glyphicon glyphicon-thumbs-up positive';
                msg.iconCount = maxRatingDiff < 2 ? msg.iconCount : new Array(Math.ceil(3 * rating / maxRatingDiff));
              }
              alpha = (rating - neutralRating - 0.5) / maxRatingDiff / 1.25 + 0.2;
              return msg.bgColor = 'background-color: rgba(223,240,216,' + alpha + ');';
            } else if (rating < neutralRating) {
              msg.iconStyle = 'glyphicon glyphicon-thumbs-down negative';
              msg.iconCount = minRatingDiff > -2 ? msg.iconCount : new Array(Math.ceil(3 * rating / minRatingDiff));
              alpha = (rating - neutralRating + 0.5) / minRatingDiff / 1.25 + 0.2;
              return msg.bgColor = 'background-color:rgba(242,222,222,' + alpha + ');';
            } else {
              msg.bgColor = 'background-color: #fcf8e3;';
              return msg.iconStyle = 'glyphicon glyphicon-question-sign neutral';
            }
        }
      }
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9tZXNzYWdlL21lc3NhZ2UuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJjb21wb25lbnRzL21lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxhQUFmLENBQ0UsQ0FBQyxTQURILENBQ2EsU0FEYixFQUN3QixRQUFBLENBQUEsQ0FBQTtXQUNwQjtNQUFBLEtBQUEsRUFBTyxJQUFQO01BQ0EsUUFBQSxFQUFVLEdBRFY7TUFFQSxXQUFBLEVBQWEsOENBRmI7TUFHQSxJQUFBLEVBQU0sUUFBQSxDQUFDLEtBQUQsRUFBUSxPQUFSLEVBQWlCLEtBQWpCLENBQUE7QUFDSixZQUFBLENBQUEsRUFBQSxhQUFBLEVBQUEsS0FBQSxFQUFBLFVBQUEsRUFBQSxDQUFBLEVBQUEsS0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsYUFBQSxFQUFBLGFBQUEsRUFBQSxHQUFBLEVBQUEsQ0FBQSxFQUFBLGFBQUEsRUFBQSxNQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLGFBQUEsRUFBQSxlQUFBLEVBQUEsYUFBQSxFQUFBO1FBQUEsR0FBQSxHQUFNLEtBQUssQ0FBQztRQUNaLEdBQUcsQ0FBQyxLQUFKLEdBQVk7UUFDWixlQUFBLEdBQWtCLFFBQUEsQ0FBQyxTQUFELENBQUE7QUFDaEIsY0FBQSxDQUFBLEVBQUEsS0FBQSxFQUFBLEtBQUEsRUFBQTtVQUFBLEtBQUEsR0FBUTtVQUNSLEtBQUEsR0FBUTtVQUNSLEtBQUEsY0FBQTs7WUFDRSxJQUFHLENBQUEsS0FBSyxNQUFSO2NBQ0UsS0FBQTtjQUNBLElBQWdCLENBQUEsS0FBSyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQXJCLElBQStCLENBQUEsS0FBSyxN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MUQ7YUFBQSxNQUFBO2NBTUgsR0FBRyxDQUFDLE9BQUosR0FBYztxQkFDZCxHQUFHLENBQUMsU0FBSixHQUFnQiw0Q0FQYjs7QUF4QlQ7TUF4SEk7SUFITjtFQURvQixDQUR4QjtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUgJ2lyaXNBbmd1bGFyJ1xuICAuZGlyZWN0aXZlICdtZXNzYWdlJywgLT5cbiAgICBzY29wZTogdHJ1ZVxuICAgIHJlc3RyaWN0OiAnRSdcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL21lc3NhZ2UvbWVzc2FnZS50ZW1wbGF0ZS5odG1sJ1xuICAgIGxpbms6IChzY29wZSwgZWxlbWVudCwgYXR0cnMpIC0+XG4gICAgICBtc2cgPSBzY29wZS5tc2dcbiAgICAgIG1zZy5saWtlcyA9IDBcbiAgICAgIHVwZGF0ZVJlYWN0aW9ucyA9IChyZWFjdGlvbnMpIC0+XG4gICAgICAgIGxpa2VzID0gMFxuICAgICAgICBsaWtlZCA9IGZhbHNlXG4gICAgICAgIGZvciBrLCB2IG9mIHJlYWN0aW9uc1xuICAgICAgICAgIGlmIHYgPT0gJ2xpa2UnXG4gICAgICAgICAgICBsaWtlcysrXG4gICAgICAgICAgICBsaWtlZCA9IHRydWUgaWYgayA9PSBzY29wZS52aWV3cG9pbnQudmFsdWUgYW5kIHYgPT0gJ2xpa2UnXG4gICAgICAgIG1zZy5saWtlcyA9IGxpa2VzXG4gICAgICAgIG1zZy5saWtlZCA9IGxpa2VkXG4gICAgICBpZiBtc2cuc2lnbmVkRGF0YS5zaGFyZWRNc2cgYW5kIG5vdCBvcHRpb25zLm5vUmVjdXJzaW9uXG4gICAgICAgIHNjb3BlLmlyaXNJbmRleC5nZXRNZXNzYWdlQnlIYXNoKG1zZy5zaWduZWREYXRhLnNoYXJlZE1zZykudGhlbiAobSkgLT5cbiAgICAgICAgICBtc2cuc2hhcmVkTXNnID0gbVxuICAgICAgdXBkYXRlUmVhY3Rpb25zKG1zZy5yZWFjdGlvbnMpIGlmIG1zZy5yZWFjdGlvbnNcbiAgICAgIG1zZy5yZXBsaWVzQXJyID0gbXNnLnJlcGxpZXNBcnIgb3IgW11cbiAgICAgIG1zZy5yZXBsaWVzID0gbXNnLnJlcGxpZXMgb3Ige31cbiAgICAgIG1zZy5zaGFyZXNBcnIgPSBtc2cuc2hhcmVzQXJyIG9yIFtdXG4gICAgICBtc2cuc2hhcmVzID0gbXNnLnNoYXJlcyBvciB7fVxuICAgICAgdXBkYXRlUmVwbGllcyA9IChyZXBsaWVzKSAtPlxuICAgICAgICBmb3IgaGFzaCwgcmVwbHlSYXcgb2YgcmVwbGllc1xuICAgICAgICAgIHdpbmRvdy5pcmlzTGliLk1lc3NhZ2UuZnJvbVNpZyhyZXBseVJhdykudGhlbiAocikgLT5cbiAgICAgICAgICAgIHVubGVzcyBtc2cucmVwbGllc1tyLmdldEhhc2goKV0gYW5kIG1zZy5yZXBsaWVzW3IuZ2V0SGFzaCgpXS5hdXRob3JcbiAgICAgICAgICAgICAgaWYgbXNnLnNpZ25lZERhdGEucG9sbE9wdGlvbnMgYW5kIHIuc2lnbmVkRGF0YS50eXBlID09ICd2b3RlJ1xuICAgICAgICAgICAgICAgIHVubGVzcyBtc2cudm90ZU1zZ3MgYW5kIG1zZy52b3RlTXNncy5oYXNPd25Qcm9wZXJ0eShyLmdldFNpZ25lcktleUlEKCkpXG4gICAgICAgICAgICAgICAgICBtc2cudm90ZUNvdW50ID0gaWYgbXNnLnZvdGVDb3VudCB0aGVuIG1zZy52b3RlQ291bnQgKyAxIGVsc2UgMVxuICAgICAgICAgICAgICAgICAgaWYgIW1zZy5teVZvdGUgYW5kIHIuZ2V0U2lnbmVyS2V5SUQoKSA9PSBzY29wZS5hdXRoZW50aWNhdGlvbi51c2VyLmlkVmFsdWVcbiAgICAgICAgICAgICAgICAgICAgbXNnLm15Vm90ZSA9IHIuc2lnbmVkRGF0YS52b3RlXG4gICAgICAgICAgICAgICAgICBtc2cudm90ZU1zZ3MgPSBtc2cudm90ZU1zZ3Mgb3Ige31cbiAgICAgICAgICAgICAgICAgIG1zZy52b3RlTXNnc1tyLmdldFNpZ25lcktleUlEKCldID0gci5nZXRIYXNoKClcbiAgICAgICAgICAgICAgICAgIHVubGVzcyBtc2cudm90ZVJlc3VsdHNcbiAgICAgICAgICAgICAgICAgICAgbXNnLnZvdGVSZXN1bHRzID0ge31cbiAgICAgICAgICAgICAgICAgICAgbXNnLnZvdGVSZXN1bHRzW28udGV4dF0gPSAwIGZvciBvIGluIG1zZy5zaWduZWREYXRhLnBvbGxPcHRpb25zXG4gICAgICAgICAgICAgICAgICBpZiBtc2cudm90ZVJlc3VsdHMuaGFzT3duUHJvcGVydHkoci5zaWduZWREYXRhLnZvdGUpXG4gICAgICAgICAgICAgICAgICAgIG1zZy52b3RlUmVzdWx0c1tyLnNpZ25lZERhdGEudm90ZV0gPSBtc2cudm90ZVJlc3VsdHNbci5zaWduZWREYXRhLnZvdGVdICsgMVxuICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBtc2cudm90ZVJlc3VsdHNbci5zaWduZWREYXRhLnZvdGVdID0gMVxuICAgICAgICAgICAgICBtc2cucmVwbGllc1tyLmdldEhhc2goKV0gPSByXG4gICAgICAgICAgICAgIG1zZy5yZXBsaWVzQXJyID0gT2JqZWN0LnZhbHVlcyhtc2cucmVwbGllcylcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cgMTExMSwgciwgbXNnIGlmIHIuc2lnbmVkRGF0YS50eXBlID09ICd2b3RlJ1xuICAgICAgdXBkYXRlU2hhcmVzID0gKHNoYXJlcykgLT5cbiAgICAgICAgZm9yIGhhc2gsIHNoYXJlUmF3IG9mIHNoYXJlc1xuICAgICAgICAgIHdpbmRvdy5pcmlzTGliLk1lc3NhZ2UuZnJvbVNpZyhzaGFyZVJhdykudGhlbiAocikgLT5cbiAgICAgICAgICAgIHVubGVzcyBtc2cuc2hhcmVzW3IuZ2V0SGFzaCgpXSBhbmQgbXNnLnNoYXJlc1tyLmdldEhhc2goKV0uYXV0aG9yXG4gICAgICAgICAgICAgIG1zZy5zaGFyZXNbci5nZXRIYXNoKCldID0gclxuICAgICAgICAgICAgICBtc2cuc2hhcmVzQXJyID0gT2JqZWN0LnZhbHVlcyhtc2cuc2hhcmVzKVxuICAgICAgaWYgbXNnLmd1blxuICAgICAgICBtc2cuZ3VuLmdldCgncmVwbGllcycpLm9wZW4gdXBkYXRlUmVwbGllc1xuICAgICAgICBtc2cuZ3VuLmdldCgncmVhY3Rpb25zJykub24gdXBkYXRlUmVhY3Rpb25zXG4gICAgICAgIG1zZy5ndW4uZ2V0KCdzaGFyZXMnKS5vcGVuIHVwZGF0ZVNoYXJlc1xuICAgICAgdW5sZXNzIG1zZy5hdXRob3JcbiAgICAgICAgbXNnLmF1dGhvciA9IG1zZy5nZXRBdXRob3Ioc2NvcGUuaXJpc0luZGV4KVxuICAgICAgICBtc2cuYXV0aG9yLmd1bi5nZXQoJ3RydXN0RGlzdGFuY2UnKS5vbiAoZCkgLT4gbXNnLmF1dGhvclRydXN0RGlzdGFuY2UgPSBkXG4gICAgICBtc2cuYXV0aG9yLmd1bi5nZXQoJ2F0dHJzJykub3BlbiAoZCkgLT5cbiAgICAgICAgbXZhID0gd2luZG93LmlyaXNMaWIuSWRlbnRpdHkuZ2V0TW9zdFZlcmlmaWVkQXR0cmlidXRlcyhkKVxuICAgICAgICBpZiBtdmEubmFtZVxuICAgICAgICAgIHNjb3BlLiRhcHBseSAtPiBtc2cuYXV0aG9yX25hbWUgPSBtdmEubmFtZS5hdHRyaWJ1dGUudmFsdWVcbiAgICAgICAgZWxzZSBpZiBtdmEubmlja25hbWVcbiAgICAgICAgICBzY29wZS4kYXBwbHkgLT4gbXNnLmF1dGhvcl9uYW1lID0gbXZhLm5pY2tuYW1lLmF0dHJpYnV0ZS52YWx1ZVxuICAgICAgbXNnLnJlY2lwaWVudCA9IG1zZy5nZXRSZWNpcGllbnQoc2NvcGUuaXJpc0luZGV4KVxuICAgICAgbXNnLnJlY2lwaWVudC5ndW4uZ2V0KCdhdHRycycpLm9wZW4gKGQpIC0+XG4gICAgICAgIG12YSA9IHdpbmRvdy5pcmlzTGliLklkZW50aXR5LmdldE1vc3RWZXJpZmllZEF0dHJpYnV0ZXMoZClcbiAgICAgICAgaWYgbXZhLm5hbWVcbiAgICAgICAgICBzY29wZS4kYXBwbHkgLT4gbXNnLnJlY2lwaWVudF9uYW1lID0gbXZhLm5hbWUuYXR0cmlidXRlLnZhbHVlXG4gICAgICAgIGVsc2UgaWYgbXZhLm5pY2tuYW1lXG4gICAgICAgICAgc2NvcGUuJGFwcGx5IC0+IG1zZy5yZWNpcGllbnRfbmFtZSA9IG12YS5uaWNrbmFtZS5hdHRyaWJ1dGUudmFsdWVcbiAgICAgIGlmIG1zZy5zaWduZWREYXRhLmF0dGFjaG1lbnRzXG4gICAgICAgIG1zZy5hdHRhY2htZW50cyA9IFtdXG4gICAgICAgIGFkZEF0dGFjaG1lbnQgPSAoYXR0YWNobWVudCkgLT5cbiAgICAgICAgICBpZiBhdHRhY2htZW50LnVyaVxuICAgICAgICAgICAgdHlwZSA9IGF0dGFjaG1lbnQudHlwZSBvciAnaW1hZ2UnXG4gICAgICAgICAgICB0eXBlU3Vic3RyID0gYXR0YWNobWVudC50eXBlLnN1YnN0cigwLDUpXG4gICAgICAgICAgICBpZiB0eXBlU3Vic3RyIGluIFsnYXVkaW8nLCAndmlkZW8nXVxuICAgICAgICAgICAgICBtc2cuYXR0YWNobWVudHMucHVzaCBPYmplY3QuYXNzaWduIHt0eXBlLCB0eXBlU3Vic3RyfSwgYXR0YWNobWVudFxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyBtc2cuYXR0YWNobWVudHNcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgc2NvcGUuaXBmc0dldChhdHRhY2htZW50LnVyaSwge2Jhc2U2NHR5cGU6IHR5cGV9KS50aGVuIChzcmMpIC0+XG4gICAgICAgICAgICAgICAgc2NvcGUuJGFwcGx5IC0+XG4gICAgICAgICAgICAgICAgICBtc2cuYXR0YWNobWVudHMucHVzaCBPYmplY3QuYXNzaWduIHtzcmMsIHR5cGUsIHR5cGVTdWJzdHJ9LCBhdHRhY2htZW50XG4gICAgICAgIGFkZEF0dGFjaG1lbnQoYXR0YWNobWVudCkgZm9yIGF0dGFjaG1lbnQgaW4gbXNnLnNpZ25lZERhdGEuYXR0YWNobWVudHNcbiAgICAgICMgVE9ETzogbWFrZSBzdXJlIG1lc3NhZ2Ugc2lnbmF0dXJlIGlzIGNoZWNrZWRcbiAgICAgIGkgPSB1bmRlZmluZWRcbiAgICAgIGkgPSAwXG4gICAgICBzbWFsbGVzdEluZGV4ID0gMTAwMFxuICAgICAgbXNnLmF1dGhvckFycmF5ID0gbXNnLmdldEF1dGhvckFycmF5KClcbiAgICAgIGZvciBhIGluIG1zZy5hdXRob3JBcnJheVxuICAgICAgICBtc2cubGlua1RvQXV0aG9yID0gYSB1bmxlc3MgbXNnLmxpbmtUb0F1dGhvclxuICAgICAgICBpbmRleCA9IE9iamVjdC5rZXlzKHdpbmRvdy5pcmlzTGliLkF0dHJpYnV0ZS5nZXRVbmlxdWVJZFZhbGlkYXRvcnMoKSkuaW5kZXhPZihhLnR5cGUpXG4gICAgICAgIGlmIGluZGV4ID4gLTEgYW5kIGluZGV4IDwgc21hbGxlc3RJbmRleFxuICAgICAgICAgIHNtYWxsZXN0SW5kZXggPSBpbmRleFxuICAgICAgICAgIG1zZy5saW5rVG9BdXRob3IgPSBhXG4gICAgICAgIGVsc2UgaWYgIW1zZy5hdXRob3JfbmFtZSBhbmQgYS50eXBlIGluIFsnbmFtZScsICduaWNrbmFtZSddXG4gICAgICAgICAgbXNnLmF1dGhvcl9uYW1lID0gYS52YWx1ZVxuICAgICAgICBpKytcbiAgICAgIGkgPSAwXG4gICAgICBzbWFsbGVzdEluZGV4ID0gMTAwMFxuICAgICAgbXNnLnJlY2lwaWVudEFycmF5ID0gbXNnLmdldFJlY2lwaWVudEFycmF5KClcbiAgICAgIGZvciBhIGluIG1zZy5yZWNpcGllbnRBcnJheVxuICAgICAgICBtc2cubGlua1RvUmVjaXBpZW50ID0gYSB1bmxlc3MgbXNnLmxpbmtUb0F1dGhvclxuICAgICAgICBpbmRleCA9IE9iamVjdC5rZXlzKHdpbmRvdy5pcmlzTGliLkF0dHJpYnV0ZS5nZXRVbmlxdWVJZFZhbGlkYXRvcnMoKSkuaW5kZXhPZihhLnR5cGUpXG4gICAgICAgIGlmIGluZGV4ID4gLTEgYW5kIGluZGV4IDwgc21hbGxlc3RJbmRleFxuICAgICAgICAgIHNtYWxsZXN0SW5kZXggPSBpbmRleFxuICAgICAgICAgIG1zZy5saW5rVG9SZWNpcGllbnQgPSBhXG4gICAgICAgIGVsc2UgaWYgIW1zZy5yZWNpcGllbnRfbmFtZSBhbmQgYS50eXBlIGluIFsnbmFtZScsICduaWNrbmFtZSddXG4gICAgICAgICAgbXNnLnJlY2lwaWVudF9uYW1lID0gYS52YWx1ZVxuICAgICAgICBpKytcbiAgICAgIGlmIG1zZy5saW5rVG9BdXRob3IuZXF1YWxzKG1zZy5saW5rVG9SZWNpcGllbnQpXG4gICAgICAgIG1zZy5zYW1lQXV0aG9yQW5kUmVjaXBpZW50ID0gdHJ1ZVxuICAgICAgaWYgIW1zZy5hdXRob3JfbmFtZVxuICAgICAgICBtc2cuYXV0aG9yX25hbWUgPSBtc2cubGlua1RvQXV0aG9yLnZhbHVlXG4gICAgICAgIGlmIG1zZy5saW5rVG9BdXRob3IudHlwZSBpbiBbJ2tleUlEJywgJ3V1aWQnXVxuICAgICAgICAgIG1zZy5hdXRob3JfbmFtZSA9IG1zZy5hdXRob3JfbmFtZS5zbGljZSgwLCA2KSArICcuLi4nXG4gICAgICBpZiAhbXNnLnJlY2lwaWVudF9uYW1lXG4gICAgICAgIG1zZy5yZWNpcGllbnRfbmFtZSA9IG1zZy5saW5rVG9SZWNpcGllbnQudmFsdWVcbiAgICAgICAgaWYgbXNnLmxpbmtUb0F1dGhvci50eXBlIGluIFsna2V5SUQnLCAndXVpZCddXG4gICAgICAgICAgbXNnLnJlY2lwaWVudF9uYW1lID0gbXNnLnJlY2lwaWVudF9uYW1lLnNsaWNlKDAsIDYpICsgJy4uLidcbiAgICAgIGFscGhhID0gdW5kZWZpbmVkXG4gICAgICBtc2cuYmdDb2xvciA9ICcnXG4gICAgICBtc2cuaWNvbkNvdW50ID0gbmV3IEFycmF5KDEpXG4gICAgICBzd2l0Y2ggbXNnLnNpZ25lZERhdGEudHlwZVxuICAgICAgICB3aGVuICd2ZXJpZnlfaWRlbnRpdHknLCAndmVyaWZpY2F0aW9uJ1xuICAgICAgICAgIG1zZy5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1vay1zaWduJ1xuICAgICAgICAgIG1zZy5pc1ZlcmlmaWNhdGlvbiA9IHRydWVcbiAgICAgICAgd2hlbiAndW52ZXJpZnlfaWRlbnRpdHknLCAndW52ZXJpZmljYXRpb24nXG4gICAgICAgICAgbXNnLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBuZWdhdGl2ZSdcbiAgICAgICAgICBtc2cuYmdDb2xvciA9ICdiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGMERFO2JvcmRlci1jb2xvcjojRkZFMkM2OydcbiAgICAgICAgICBtc2cuaXNVbnZlcmlmaWNhdGlvbiA9IHRydWVcbiAgICAgICAgd2hlbiAncG9zdCdcbiAgICAgICAgICBtc2cuaWNvblN0eWxlID0gJycgIyBmYSBmYS1wZW5jaWxcbiAgICAgICAgICBtc2cuaXNQb3N0ID0gdHJ1ZVxuICAgICAgICB3aGVuICdyYXRpbmcnXG4gICAgICAgICAgcmF0aW5nID0gbXNnLnNpZ25lZERhdGEucmF0aW5nXG4gICAgICAgICAgbmV1dHJhbFJhdGluZyA9IChtc2cuc2lnbmVkRGF0YS5taW5SYXRpbmcgKyBtc2cuc2lnbmVkRGF0YS5tYXhSYXRpbmcpIC8gMlxuICAgICAgICAgIG1heFJhdGluZ0RpZmYgPSBtc2cuc2lnbmVkRGF0YS5tYXhSYXRpbmcgLSBuZXV0cmFsUmF0aW5nXG4gICAgICAgICAgbWluUmF0aW5nRGlmZiA9IG1zZy5zaWduZWREYXRhLm1pblJhdGluZyAtIG5ldXRyYWxSYXRpbmdcbiAgICAgICAgICBpZiByYXRpbmcgPiBuZXV0cmFsUmF0aW5nXG4gICAgICAgICAgICBpZiBtc2cuc2lnbmVkRGF0YS5jb250ZXh0ID09ICd2ZXJpZmllcidcbiAgICAgICAgICAgICAgbXNnLmljb25TdHlsZSA9ICdmYSBmYS1zaGllbGQgcG9zaXRpdmUnXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgIG1zZy5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi10aHVtYnMtdXAgcG9zaXRpdmUnXG4gICAgICAgICAgICAgIG1zZy5pY29uQ291bnQgPSBpZiBtYXhSYXRpbmdEaWZmIDwgMiB0aGVuIG1zZy5pY29uQ291bnQgZWxzZSBuZXcgQXJyYXkoTWF0aC5jZWlsKDMgKiByYXRpbmcgLyBtYXhSYXRpbmdEaWZmKSlcbiAgICAgICAgICAgIGFscGhhID0gKHJhdGluZyAtIG5ldXRyYWxSYXRpbmcgLSAwLjUpIC8gbWF4UmF0aW5nRGlmZiAvIDEuMjUgKyAwLjJcbiAgICAgICAgICAgIG1zZy5iZ0NvbG9yID0gJ2JhY2tncm91bmQtY29sb3I6IHJnYmEoMjIzLDI0MCwyMTYsJyArIGFscGhhICsgJyk7J1xuICAgICAgICAgIGVsc2UgaWYgcmF0aW5nIDwgbmV1dHJhbFJhdGluZ1xuICAgICAgICAgICAgbXNnLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLXRodW1icy1kb3duIG5lZ2F0aXZlJ1xuICAgICAgICAgICAgbXNnLmljb25Db3VudCA9IGlmIG1pblJhdGluZ0RpZmYgPiAtMiB0aGVuIG1zZy5pY29uQ291bnQgZWxzZSBuZXcgQXJyYXkoTWF0aC5jZWlsKDMgKiByYXRpbmcgLyBtaW5SYXRpbmdEaWZmKSlcbiAgICAgICAgICAgIGFscGhhID0gKHJhdGluZyAtIG5ldXRyYWxSYXRpbmcgKyAwLjUpIC8gbWluUmF0aW5nRGlmZiAvIDEuMjUgKyAwLjJcbiAgICAgICAgICAgIG1zZy5iZ0NvbG9yID0gJ2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDIsMjIyLDIyMiwnICsgYWxwaGEgKyAnKTsnXG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgbXNnLmJnQ29sb3IgPSAnYmFja2dyb3VuZC1jb2xvcjogI2ZjZjhlMzsnXG4gICAgICAgICAgICBtc2cuaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tcXVlc3Rpb24tc2lnbiBuZXV0cmFsJ1xuIl19

(function() {
  // coffeelint: disable=max_line_length
  angular.module('irisAngular').directive('identicon', function() {
    return {
      scope: {
        identity: '=',
        ipfs: '='
      },
      link: function(scope, element, attrs) {
        var update;
        attrs.showDistance = typeof attrs.showDistance === 'undefined' ? true : !!parseInt(attrs.showDistance);
        attrs.border = isNaN(attrs.border) ? 3 : attrs.border;
        update = function() {
          var identicon;
          if (scope.identity && scope.identity.identicon) {
            identicon = scope.identity.identicon(attrs.width, attrs.border, attrs.showDistance, scope.ipfs);
            element.empty();
            return element.append(identicon);
          }
        };
        return scope.$watchGroup(['identity'], update);
      }
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9pZGVudGljb24vaWRlbnRpY29uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9pZGVudGljb24vaWRlbnRpY29uLmRpcmVjdGl2ZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQTtFQUNBLE9BQU8sQ0FBQyxNQUFSLENBQWUsYUFBZixDQUNFLENBQUMsU0FESCxDQUNhLFdBRGIsRUFDMEIsUUFBQSxDQUFBLENBQUE7V0FDdEI7TUFBQSxLQUFBLEVBQ0U7UUFBQSxRQUFBLEVBQVUsR0FBVjtRQUNBLElBQUEsRUFBTTtNQUROLENBREY7TUFHQSxJQUFBLEVBQU0sUUFBQSxDQUFDLEtBQUQsRUFBUSxPQUFSLEVBQWlCLEtBQWpCLENBQUE7QUFDSixZQUFBO1FBQUEsS0FBSyxDQUFDLFlBQU4sR0FBd0IsT0FBTyxLQUFLLENBQUMsWUFBYixLQUE2QixXQUFoQyxHQUFpRCxJQUFqRCxHQUEyRCxDQUFDLENBQUMsUUFBQSxDQUFTLEtBQUssQ0FBQyxZQUFmO1FBQ2xGLEtBQUssQ0FBQyxNQUFOLEdBQWtCLEtBQUEsQ0FBTSxLQUFLLENBQUMsTUFBWixDQUFILEdBQTRCLENBQTVCLEdBQW1DLEtBQUssQ0FBQztRQUN4RCxNQUFBLEdBQVMsUUFBQSxDQUFBLENBQUE7QUFDUCxjQUFBO1VBQUEsSUFBRyxLQUFLLENBQUMsUUFBTixJQUFrQixLQUFLLENBQUMsUUFBUSxDQUFDLFNBQXBDO1lBQ0UsU0FBQSxHQUFZLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBZixDQUF5QixLQUFLLENBQUMsS0FBL0IsRUFBc0MsS0FBSyxDQUFDLE1BQTVDLEVBQW9ELEtBQUssQ0FBQyxZQUExRCxFQUF3RSxLQUFLLENBQUMsSUFBOUU7WUFDWixPQUFPLENBQUMsS0FBUixDQUFBO21CQUNBLE9BQU8sQ0FBQyxNQUFSLENBQWUsU0FBZixFQUhGOztRQURPO2VBS1QsS0FBSyxDQUFDLFdBQU4sQ0FBa0IsQ0FBQyxVQUFELENBQWxCLEVBQWdDLE1BQWhDO01BUkk7SUFITjtFQURzQixDQUQxQjtBQURBIiwic291cmNlc0NvbnRlbnQiOlsiIyBjb2ZmZWVsaW50OiBkaXNhYmxlPW1heF9saW5lX2xlbmd0aFxuYW5ndWxhci5tb2R1bGUgJ2lyaXNBbmd1bGFyJ1xuICAuZGlyZWN0aXZlICdpZGVudGljb24nLCAtPlxuICAgIHNjb3BlOlxuICAgICAgaWRlbnRpdHk6ICc9J1xuICAgICAgaXBmczogJz0nXG4gICAgbGluazogKHNjb3BlLCBlbGVtZW50LCBhdHRycykgLT5cbiAgICAgIGF0dHJzLnNob3dEaXN0YW5jZSA9IGlmIHR5cGVvZiBhdHRycy5zaG93RGlzdGFuY2UgPT0gJ3VuZGVmaW5lZCcgdGhlbiB0cnVlIGVsc2UgISFwYXJzZUludChhdHRycy5zaG93RGlzdGFuY2UpXG4gICAgICBhdHRycy5ib3JkZXIgPSBpZiBpc05hTihhdHRycy5ib3JkZXIpIHRoZW4gMyBlbHNlIGF0dHJzLmJvcmRlclxuICAgICAgdXBkYXRlID0gLT5cbiAgICAgICAgaWYgc2NvcGUuaWRlbnRpdHkgJiYgc2NvcGUuaWRlbnRpdHkuaWRlbnRpY29uXG4gICAgICAgICAgaWRlbnRpY29uID0gc2NvcGUuaWRlbnRpdHkuaWRlbnRpY29uKGF0dHJzLndpZHRoLCBhdHRycy5ib3JkZXIsIGF0dHJzLnNob3dEaXN0YW5jZSwgc2NvcGUuaXBmcylcbiAgICAgICAgICBlbGVtZW50LmVtcHR5KClcbiAgICAgICAgICBlbGVtZW50LmFwcGVuZChpZGVudGljb24pXG4gICAgICBzY29wZS4kd2F0Y2hHcm91cCBbJ2lkZW50aXR5J10sIHVwZGF0ZVxuIl19

(function() {
  angular.module('irisAngular').directive('focusOn', function() {
    return function(scope, elem, attr) {
      scope.$on('focusOn', function(e, name) {
        if (name === attr.focusOn) {
          elem[0].focus();
        }
      });
    };
  });

  angular.module('irisAngular').factory('focus', function($rootScope, $timeout) {
    return function(name) {
      $timeout(function() {
        $rootScope.$broadcast('focusOn', name);
      });
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9mb2N1cy9mb2N1cy5qcyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9mb2N1cy9mb2N1cy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxPQUFPLENBQUMsTUFBUixDQUFlLGFBQWYsQ0FDQSxDQUFDLFNBREQsQ0FDVyxTQURYLEVBQ3NCLFFBQUEsQ0FBQSxDQUFBO1dBQ3BCLFFBQUEsQ0FBQyxLQUFELEVBQVEsSUFBUixFQUFjLElBQWQsQ0FBQTtNQUNFLEtBQUssQ0FBQyxHQUFOLENBQVUsU0FBVixFQUFxQixRQUFBLENBQUMsQ0FBRCxFQUFJLElBQUosQ0FBQTtRQUNuQixJQUFHLElBQUEsS0FBUSxJQUFJLENBQUMsT0FBaEI7VUFDRSxJQUFLLENBQUEsQ0FBQSxDQUFFLENBQUMsS0FBUixDQUFBLEVBREY7O01BRG1CLENBQXJCO0lBREY7RUFEb0IsQ0FEdEI7O0VBU0EsT0FBTyxDQUFDLE1BQVIsQ0FBZSxhQUFmLENBQ0EsQ0FBQyxPQURELENBQ1MsT0FEVCxFQUNrQixRQUFBLENBQUMsVUFBRCxFQUFhLFFBQWIsQ0FBQTtXQUNoQixRQUFBLENBQUMsSUFBRCxDQUFBO01BQ0UsUUFBQSxDQUFTLFFBQUEsQ0FBQSxDQUFBO1FBQ1AsVUFBVSxDQUFDLFVBQVgsQ0FBc0IsU0FBdEIsRUFBaUMsSUFBakM7TUFETyxDQUFUO0lBREY7RUFEZ0IsQ0FEbEI7QUFUQSIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlICdpcmlzQW5ndWxhcidcbi5kaXJlY3RpdmUgJ2ZvY3VzT24nLCAtPlxuICAoc2NvcGUsIGVsZW0sIGF0dHIpIC0+XG4gICAgc2NvcGUuJG9uICdmb2N1c09uJywgKGUsIG5hbWUpIC0+XG4gICAgICBpZiBuYW1lID09IGF0dHIuZm9jdXNPblxuICAgICAgICBlbGVtWzBdLmZvY3VzKClcbiAgICAgIHJldHVyblxuICAgIHJldHVyblxuXG5hbmd1bGFyLm1vZHVsZSAnaXJpc0FuZ3VsYXInXG4uZmFjdG9yeSAnZm9jdXMnLCAoJHJvb3RTY29wZSwgJHRpbWVvdXQpIC0+XG4gIChuYW1lKSAtPlxuICAgICR0aW1lb3V0IC0+XG4gICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QgJ2ZvY3VzT24nLCBuYW1lXG4gICAgICByZXR1cm5cbiAgICByZXR1cm5cbiJdfQ==

(function() {
  'use strict';
  angular.module('irisAngular').service('NotificationService', [
    'Notification',
    function(uiNotification) {
      return {
        notifications: [],
        unseenCount: 0,
        create: function(options) {
          var defaultOptions;
          defaultOptions = {
            seen: false,
            message: '',
            type: 'primary',
            positionX: 'right',
            positionY: 'bottom',
            delay: 10000,
            replaceMessage: true,
            templateUrl: 'app/services/notification.template.html'
          };
          options = Object.assign(defaultOptions,
    options);
          this.notifications.push(options);
          this.notifications.splice(10); // maximum notifications length
          if (!options.seen) {
            this.unseenCount++;
          }
          return uiNotification(options);
        },
        markAllSeen: function(options) {
          var i,
    len,
    n,
    ref;
          ref = this.notifications;
          for (i = 0, len = ref.length; i < len; i++) {
            n = ref[i];
            n.seen = true;
          }
          return this.unseenCount = 0;
        }
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMvbm90aWZpY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VzIjpbInNlcnZpY2VzL25vdGlmaWNhdGlvbi5zZXJ2aWNlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBO0VBQ0EsT0FBTyxDQUFDLE1BQVIsQ0FBZSxhQUFmLENBQTZCLENBQUMsT0FBOUIsQ0FBc0MscUJBQXRDLEVBQTZEO0lBQzNELGNBRDJEO0lBRTNELFFBQUEsQ0FBQyxjQUFELENBQUE7YUFDRTtRQUNFLGFBQUEsRUFBZSxFQURqQjtRQUVFLFdBQUEsRUFBYSxDQUZmO1FBR0UsTUFBQSxFQUFRLFFBQUEsQ0FBQyxPQUFELENBQUE7QUFDTixjQUFBO1VBQUEsY0FBQSxHQUNFO1lBQUEsSUFBQSxFQUFNLEtBQU47WUFDQSxPQUFBLEVBQVMsRUFEVDtZQUVBLElBQUEsRUFBTSxTQUZOO1lBR0EsU0FBQSxFQUFXLE9BSFg7WUFJQSxTQUFBLEVBQVcsUUFKWDtZQUtBLEtBQUEsRUFBTyxLQUxQO1lBTUEsY0FBQSxFQUFnQixJQU5oQjtZQU9BLFdBQUEsRUFBYTtVQVBiO1VBUUYsT0FBQSxHQUFVLE1BQU0sQ0FBQyxNQUFQLENBQWMsY0FBZDtJQUE4QixPQUE5QjtVQUNWLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBbkIsQ0FBd0IsT0FBeEI7VUFDQSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQW5CLENBQTBCLEVBQTFCLEVBWEE7VUFZQSxJQUFBLENBQTBCLE9BQU8sQ0FBQyxJQUFsQztZQUFBLElBQUksQ0FBQyxXQUFMLEdBQUE7O2lCQUNBLGNBQUEsQ0FBZSxPQUFmO1FBZE0sQ0FIVjtRQWtCRSxXQUFBLEVBQWEsUUFBQSxDQUFDLE9BQUQsQ0FBQTtBQUNYLGNBQUEsQ0FBQTtJQUFBLEdBQUE7SUFBQSxDQUFBO0lBQUE7QUFBYztVQUFBLEtBQUEscUNBQUE7O1lBQWQsQ0FBQyxDQUFDLElBQUYsR0FBUztVQUFLO2lCQUNkLElBQUksQ0FBQyxXQUFMLEdBQW1CO1FBRlI7TUFsQmY7SUFERixDQUYyRDtHQUE3RDtBQURBIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5hbmd1bGFyLm1vZHVsZSgnaXJpc0FuZ3VsYXInKS5zZXJ2aWNlICdOb3RpZmljYXRpb25TZXJ2aWNlJywgW1xuICAnTm90aWZpY2F0aW9uJyxcbiAgKHVpTm90aWZpY2F0aW9uKSAtPlxuICAgIHtcbiAgICAgIG5vdGlmaWNhdGlvbnM6IFtdXG4gICAgICB1bnNlZW5Db3VudDogMFxuICAgICAgY3JlYXRlOiAob3B0aW9ucykgLT5cbiAgICAgICAgZGVmYXVsdE9wdGlvbnMgPVxuICAgICAgICAgIHNlZW46IGZhbHNlXG4gICAgICAgICAgbWVzc2FnZTogJydcbiAgICAgICAgICB0eXBlOiAncHJpbWFyeSdcbiAgICAgICAgICBwb3NpdGlvblg6ICdyaWdodCdcbiAgICAgICAgICBwb3NpdGlvblk6ICdib3R0b20nXG4gICAgICAgICAgZGVsYXk6IDEwMDAwXG4gICAgICAgICAgcmVwbGFjZU1lc3NhZ2U6IHRydWVcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9zZXJ2aWNlcy9ub3RpZmljYXRpb24udGVtcGxhdGUuaHRtbCdcbiAgICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9ucy5wdXNoIG9wdGlvbnNcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zLnNwbGljZSAxMCAjIG1heGltdW0gbm90aWZpY2F0aW9ucyBsZW5ndGhcbiAgICAgICAgdGhpcy51bnNlZW5Db3VudCsrIHVubGVzcyBvcHRpb25zLnNlZW5cbiAgICAgICAgdWlOb3RpZmljYXRpb24gb3B0aW9uc1xuICAgICAgbWFya0FsbFNlZW46IChvcHRpb25zKSAtPlxuICAgICAgICBuLnNlZW4gPSB0cnVlIGZvciBuIGluIHRoaXMubm90aWZpY2F0aW9uc1xuICAgICAgICB0aGlzLnVuc2VlbkNvdW50ID0gMFxuICAgIH1cbl1cbiJdfQ==

(function() {
  'use strict';
  // Messages controller
  angular.module('irisAngular').controller('MessagesController', [
    '$scope',
    '$rootScope',
    '$window',
    '$stateParams',
    '$location',
    '$http',
    '$state',
    // 'Authentication'
    'config',
    '$timeout',
    'localStorageService',
    function($scope,
    $rootScope,
    $window,
    $stateParams,
    $location,
    $http,
    $state,
    config,
    $timeout,
    localStorageService) { //, Authentication
      var load;
      $scope.idType = $stateParams.type;
      $scope.idValue = $stateParams.value;
      $scope.iconCount = function(rating) {
        return new Array(Math.max(1,
    Math.abs(rating)));
      };
      $scope.iconStyle = function(rating) {
        var iconStyle;
        iconStyle = 'neutral';
        if (rating > 0) {
          iconStyle = 'positive';
        } else if (rating < 0) {
          iconStyle = 'negative';
        }
        return iconStyle;
      };
      $scope.iconClass = function(rating) {
        var iconStyle;
        iconStyle = 'glyphicon-question-sign';
        if (rating > 0) {
          iconStyle = 'glyphicon-thumbs-up';
        } else if (rating < 0) {
          iconStyle = 'glyphicon-thumbs-down';
        }
        return iconStyle;
      };
      $scope.collapseFilters = $window.innerWidth < 992;
      $scope.setFilters = function(filters) {
        return angular.extend($scope.filters,
    {
          limit: 10
        },
    filters);
      };
      if ($state.is('messages.list')) {
        $scope.filters.type = config.defaultFilters.type;
      }
      // Find existing Message
      $scope.findOne = function() {
        var hash,
    isIpfsHash,
    processResponse;
        if ($stateParams.id) {
          hash = $stateParams.id;
          isIpfsHash = hash.match(/^Qm[1-9A-Za-z]{40,50}$/);
          processResponse = function() {
            $scope.processMessages([$scope.message],
    {});
            $scope.setPageTitle('Message ' + hash);
            $scope.setMsgRawData($scope.message);
            $scope.message.signerKeyID = $scope.message.getSignerKeyID();
            $scope.message.verifiedBy = $scope.irisIndex.get('keyID',
    $scope.message.signerKeyID);
            $scope.setIdentityNames($scope.message.verifiedBy,
    true);
            $scope.message.verifiedByAttr = new $window.irisLib.Attribute('keyID',
    $scope.message.signerKeyID);
            if (isIpfsHash) {
              return $scope.message.ipfsUri = hash;
            }
          };
          return $scope.irisIndex.getMessageByHash(hash).then(function(m) {
            $scope.message = m;
            return processResponse();
          });
        }
      };
      load = function() {
        if (!$scope.irisIndex) {
          return;
        }
        if ($state.is('messages.show')) {
          return $scope.findOne();
        }
      };
      return $scope.$watch('irisIndex',
    load);
    }
  ]);

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMvbWVzc2FnZXMuY29udHJvbGxlci5qcyIsInNvdXJjZXMiOlsibWVzc2FnZXMvbWVzc2FnZXMuY29udHJvbGxlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxhQUFBOztFQUVBLE9BQU8sQ0FBQyxNQUFSLENBQWUsYUFBZixDQUE2QixDQUFDLFVBQTlCLENBQXlDLG9CQUF6QyxFQUErRDtJQUM3RCxRQUQ2RDtJQUU3RCxZQUY2RDtJQUc3RCxTQUg2RDtJQUk3RCxjQUo2RDtJQUs3RCxXQUw2RDtJQU03RCxPQU42RDtJQU83RCxRQVA2RDs7SUFTN0QsUUFUNkQ7SUFVN0QsVUFWNkQ7SUFXN0QscUJBWDZEO0lBWTdELFFBQUEsQ0FBQyxNQUFEO0lBQVMsVUFBVDtJQUFxQixPQUFyQjtJQUE4QixZQUE5QjtJQUE0QyxTQUE1QztJQUF1RCxLQUF2RDtJQUE4RCxNQUE5RDtJQUFzRSxNQUF0RTtJQUE4RSxRQUE5RTtJQUF3RixtQkFBeEYsQ0FBQSxFQUFBO0FBQ0UsVUFBQTtNQUFBLE1BQU0sQ0FBQyxNQUFQLEdBQWdCLFlBQVksQ0FBQztNQUM3QixNQUFNLENBQUMsT0FBUCxHQUFpQixZQUFZLENBQUM7TUFFOUIsTUFBTSxDQUFDLFNBQVAsR0FBbUIsUUFBQSxDQUFDLE1BQUQsQ0FBQTtlQUNqQixJQUFJLEtBQUosQ0FBVSxJQUFJLENBQUMsR0FBTCxDQUFTLENBQVQ7SUFBWSxJQUFJLENBQUMsR0FBTCxDQUFTLE1BQVQsQ0FBWixDQUFWO01BRGlCO01BR25CLE1BQU0sQ0FBQyxTQUFQLEdBQW1CLFFBQUEsQ0FBQyxNQUFELENBQUE7QUFDakIsWUFBQTtRQUFBLFNBQUEsR0FBWTtRQUNaLElBQUcsTUFBQSxHQUFTLENBQVo7VUFDRSxTQUFBLEdBQVksV0FEZDtTQUFBLE1BRUssSUFBRyxNQUFBLEdBQVMsQ0FBWjtVQUNILFNBQUEsR0FBWSxXQURUOztlQUVMO01BTmlCO01BUW5CLE1BQU0sQ0FBQyxTQUFQLEdBQW1CLFFBQUEsQ0FBQyxNQUFELENBQUE7QUFDakIsWUFBQTtRQUFBLFNBQUEsR0FBWTtRQUNaLElBQUcsTUFBQSxHQUFTLENBQVo7VUFDRSxTQUFBLEdBQVksc0JBRGQ7U0FBQSxNQUVLLElBQUcsTUFBQSxHQUFTLENBQVo7VUFDSCxTQUFBLEdBQVksd0JBRFQ7O2VBRUw7TUFOaUI7TUFRbkIsTUFBTSxDQUFDLGVBQVAsR0FBeUIsT0FBTyxDQUFDLFVBQVIsR0FBcUI7TUFFOUMsTUFBTSxDQUFDLFVBQVAsR0FBb0IsUUFBQSxDQUFDLE9BQUQsQ0FBQTtlQUNsQixPQUFPLENBQUMsTUFBUixDQUFlLE1BQU0sQ0FBQyxPQUF0QjtJQUErQjtVQUFDLEtBQUEsRUFBTztRQUFSLENBQS9CO0lBQTRDLE9BQTVDO01BRGtCO01BR3BCLElBQUcsTUFBTSxDQUFDLEVBQVAsQ0FBVSxlQUFWLENBQUg7UUFDRSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQWYsR0FBc0IsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUQ5QztPQTNCQTs7TUErQkEsTUFBTSxDQUFDLE9BQVAsR0FBaUIsUUFBQSxDQUFBLENBQUE7QUFDZixZQUFBLElBQUE7SUFBQSxVQUFBO0lBQUE7UUFBQSxJQUFHLFlBQVksQ0FBQyxFQUFoQjtVQUNFLElBQUEsR0FBTyxZQUFZLENBQUM7VUFDcEIsVUFBQSxHQUFhLElBQUksQ0FBQyxLQUFMLENBQVcsd0JBQVg7VUFFYixlQUFBLEdBQWtCLFFBQUEsQ0FBQSxDQUFBO1lBQ2hCLE1BQU0sQ0FBQyxlQUFQLENBQXVCLENBQUMsTUFBTSxDQUFDLE9BQVIsQ0FBdkI7SUFBeUMsQ0FBQSxDQUF6QztZQUNBLE1BQU0sQ0FBQyxZQUFQLENBQW9CLFVBQUEsR0FBYSxJQUFqQztZQUNBLE1BQU0sQ0FBQyxhQUFQLENBQXFCLE1BQU0sQ0FBQyxPQUE1QjtZQUNBLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBZixHQUE2QixNQUFNLENBQUMsT0FBTyxDQUFDLGNBQWYsQ0FBQTtZQUM3QixNQUFNLENBQUMsT0FBTyxDQUFDLFVBQWYsR0FBNEIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFqQixDQUFxQixPQUFyQjtJQUE4QixNQUFNLENBQUMsT0FBTyxDQUFDLFdBQTdDO1lBQzVCLE1BQU0sQ0FBQyxnQkFBUCxDQUF3QixNQUFNLENBQUMsT0FBTyxDQUFDLFVBQXZDO0lBQW1ELElBQW5EO1lBQ0EsTUFBTSxDQUFDLE9BQU8sQ0FBQyxjQUFmLEdBQWdDLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFwQixDQUE4QixPQUE5QjtJQUF1QyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQXREO1lBQ2hDLElBQWlDLFVBQWpDO3FCQUFBLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBZixHQUF5QixLQUF6Qjs7VUFSZ0I7aUJBVWxCLE1BQU0sQ0FBQyxTQUFTLENBQUMsZ0JBQWpCLENBQWtDLElBQWxDLENBQXVDLENBQUMsSUFBeEMsQ0FBNkMsUUFBQSxDQUFDLENBQUQsQ0FBQTtZQUMzQyxNQUFNLENBQUMsT0FBUCxHQUFpQjttQkFDakIsZUFBQSxDQUFBO1VBRjJDLENBQTdDLEVBZEY7O01BRGU7TUFtQmpCLElBQUEsR0FBTyxRQUFBLENBQUEsQ0FBQTtRQUNMLElBQUEsQ0FBYyxNQUFNLENBQUMsU0FBckI7QUFBQSxpQkFBQTs7UUFDQSxJQUFHLE1BQU0sQ0FBQyxFQUFQLENBQVUsZUFBVixDQUFIO2lCQUNFLE1BQU0sQ0FBQyxPQUFQLENBQUEsRUFERjs7TUFGSzthQUlQLE1BQU0sQ0FBQyxNQUFQLENBQWMsV0FBZDtJQUEyQixJQUEzQjtJQXZERixDQVo2RDtHQUEvRDtBQUZBIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG4jIE1lc3NhZ2VzIGNvbnRyb2xsZXJcbmFuZ3VsYXIubW9kdWxlKCdpcmlzQW5ndWxhcicpLmNvbnRyb2xsZXIgJ01lc3NhZ2VzQ29udHJvbGxlcicsIFtcbiAgJyRzY29wZSdcbiAgJyRyb290U2NvcGUnXG4gICckd2luZG93J1xuICAnJHN0YXRlUGFyYW1zJ1xuICAnJGxvY2F0aW9uJ1xuICAnJGh0dHAnXG4gICckc3RhdGUnXG4gICMgJ0F1dGhlbnRpY2F0aW9uJ1xuICAnY29uZmlnJ1xuICAnJHRpbWVvdXQnXG4gICdsb2NhbFN0b3JhZ2VTZXJ2aWNlJ1xuICAoJHNjb3BlLCAkcm9vdFNjb3BlLCAkd2luZG93LCAkc3RhdGVQYXJhbXMsICRsb2NhdGlvbiwgJGh0dHAsICRzdGF0ZSwgY29uZmlnLCAkdGltZW91dCwgbG9jYWxTdG9yYWdlU2VydmljZSkgLT4gIywgQXV0aGVudGljYXRpb25cbiAgICAkc2NvcGUuaWRUeXBlID0gJHN0YXRlUGFyYW1zLnR5cGVcbiAgICAkc2NvcGUuaWRWYWx1ZSA9ICRzdGF0ZVBhcmFtcy52YWx1ZVxuXG4gICAgJHNjb3BlLmljb25Db3VudCA9IChyYXRpbmcpIC0+XG4gICAgICBuZXcgQXJyYXkoTWF0aC5tYXgoMSwgTWF0aC5hYnMocmF0aW5nKSkpXG5cbiAgICAkc2NvcGUuaWNvblN0eWxlID0gKHJhdGluZykgLT5cbiAgICAgIGljb25TdHlsZSA9ICduZXV0cmFsJ1xuICAgICAgaWYgcmF0aW5nID4gMFxuICAgICAgICBpY29uU3R5bGUgPSAncG9zaXRpdmUnXG4gICAgICBlbHNlIGlmIHJhdGluZyA8IDBcbiAgICAgICAgaWNvblN0eWxlID0gJ25lZ2F0aXZlJ1xuICAgICAgaWNvblN0eWxlXG5cbiAgICAkc2NvcGUuaWNvbkNsYXNzID0gKHJhdGluZykgLT5cbiAgICAgIGljb25TdHlsZSA9ICdnbHlwaGljb24tcXVlc3Rpb24tc2lnbidcbiAgICAgIGlmIHJhdGluZyA+IDBcbiAgICAgICAgaWNvblN0eWxlID0gJ2dseXBoaWNvbi10aHVtYnMtdXAnXG4gICAgICBlbHNlIGlmIHJhdGluZyA8IDBcbiAgICAgICAgaWNvblN0eWxlID0gJ2dseXBoaWNvbi10aHVtYnMtZG93bidcbiAgICAgIGljb25TdHlsZVxuXG4gICAgJHNjb3BlLmNvbGxhcHNlRmlsdGVycyA9ICR3aW5kb3cuaW5uZXJXaWR0aCA8IDk5MlxuXG4gICAgJHNjb3BlLnNldEZpbHRlcnMgPSAoZmlsdGVycykgLT5cbiAgICAgIGFuZ3VsYXIuZXh0ZW5kICRzY29wZS5maWx0ZXJzLCB7bGltaXQ6IDEwfSwgZmlsdGVyc1xuXG4gICAgaWYgJHN0YXRlLmlzICdtZXNzYWdlcy5saXN0J1xuICAgICAgJHNjb3BlLmZpbHRlcnMudHlwZSA9IGNvbmZpZy5kZWZhdWx0RmlsdGVycy50eXBlXG5cbiAgICAjIEZpbmQgZXhpc3RpbmcgTWVzc2FnZVxuICAgICRzY29wZS5maW5kT25lID0gLT5cbiAgICAgIGlmICRzdGF0ZVBhcmFtcy5pZFxuICAgICAgICBoYXNoID0gJHN0YXRlUGFyYW1zLmlkXG4gICAgICAgIGlzSXBmc0hhc2ggPSBoYXNoLm1hdGNoIC9eUW1bMS05QS1aYS16XXs0MCw1MH0kL1xuXG4gICAgICAgIHByb2Nlc3NSZXNwb25zZSA9IC0+XG4gICAgICAgICAgJHNjb3BlLnByb2Nlc3NNZXNzYWdlcyhbJHNjb3BlLm1lc3NhZ2VdLCB7fSlcbiAgICAgICAgICAkc2NvcGUuc2V0UGFnZVRpdGxlICdNZXNzYWdlICcgKyBoYXNoXG4gICAgICAgICAgJHNjb3BlLnNldE1zZ1Jhd0RhdGEoJHNjb3BlLm1lc3NhZ2UpXG4gICAgICAgICAgJHNjb3BlLm1lc3NhZ2Uuc2lnbmVyS2V5SUQgPSAkc2NvcGUubWVzc2FnZS5nZXRTaWduZXJLZXlJRCgpXG4gICAgICAgICAgJHNjb3BlLm1lc3NhZ2UudmVyaWZpZWRCeSA9ICRzY29wZS5pcmlzSW5kZXguZ2V0KCdrZXlJRCcsICRzY29wZS5tZXNzYWdlLnNpZ25lcktleUlEKVxuICAgICAgICAgICRzY29wZS5zZXRJZGVudGl0eU5hbWVzKCRzY29wZS5tZXNzYWdlLnZlcmlmaWVkQnksIHRydWUpXG4gICAgICAgICAgJHNjb3BlLm1lc3NhZ2UudmVyaWZpZWRCeUF0dHIgPSBuZXcgJHdpbmRvdy5pcmlzTGliLkF0dHJpYnV0ZSgna2V5SUQnLCAkc2NvcGUubWVzc2FnZS5zaWduZXJLZXlJRClcbiAgICAgICAgICAkc2NvcGUubWVzc2FnZS5pcGZzVXJpID0gaGFzaCBpZiBpc0lwZnNIYXNoXG5cbiAgICAgICAgJHNjb3BlLmlyaXNJbmRleC5nZXRNZXNzYWdlQnlIYXNoKGhhc2gpLnRoZW4gKG0pIC0+XG4gICAgICAgICAgJHNjb3BlLm1lc3NhZ2UgPSBtXG4gICAgICAgICAgcHJvY2Vzc1Jlc3BvbnNlKClcblxuICAgIGxvYWQgPSAtPlxuICAgICAgcmV0dXJuIHVubGVzcyAkc2NvcGUuaXJpc0luZGV4XG4gICAgICBpZiAkc3RhdGUuaXMoJ21lc3NhZ2VzLnNob3cnKVxuICAgICAgICAkc2NvcGUuZmluZE9uZSgpXG4gICAgJHNjb3BlLiR3YXRjaCAnaXJpc0luZGV4JywgbG9hZFxuXVxuIl19

(function() {
  'use strict';
  angular.module('irisAngular').controller('MainController', [
    '$scope',
    '$rootScope',
    '$location',
    '$http',
    '$state',
    'config',
    'localStorageService',
    'clipboard',
    '$uibModal',
    '$window',
    '$stateParams',
    '$transitions',
    '$q',
    'focus',
    'NotificationService',
    function($scope,
    $rootScope,
    $location,
    $http,
    $state,
    config,
    localStorageService,
    clipboard,
    $uibModal,
    $window,
    $stateParams,
    $transitions,
    $q,
    focus,
    NotificationService) {
      var opt,
    privateKey,
    scrollTo,
    setIndex;
      opt = {
        peers: [],
        localStorage: false
      };
      if (!($window.location.hostname === 'localhost' && $window.location.port === '3000')) {
        opt.peers = [
          'https://gun-us.herokuapp.com/gun',
          'https://gun-eu.herokuapp.com/gun' // 'https://gunmeetingserver.herokuapp.com/gun'
        ];
      }
      if ($window.location.protocol !== "https:") {
        opt.peers.push('http://localhost:8765/gun');
      }
      opt.store = RindexedDB(opt);
      $scope.gun = new Gun(opt);
      // TODO: move everything to main controller?
      // set authentication
      $scope.authentication = {}; // Authentication
      $scope.notificationService = NotificationService;
      $scope.trustDistanceComparator = function(a,
    b) {
        if (a.type !== 'number') {
          return 1;
        }
        if (b.type !== 'number') {
          return -1;
        }
        return a.value - b.value;
      };
      $scope.getIdUrl = function(type,
    value) {
        if ($window.location.hostname.indexOf('.') > -1) { // differentiate between localhost / chrome plugin uri and DNS name
          return $state.href('identities.show',
    {type,
    value},
    {
            absolute: true
          }) + '?share';
        } else {
          return 'https://iris.to/' + $state.href('identities.show',
    {type,
    value}) + '?share';
        }
      };
      $scope.getIdKey = function(id) {
        return encodeURIComponent(id.type) + ':' + encodeURIComponent(id.value);
      };
      $scope.defaultIndexKeyID = 'b8ByaYNBDCMLNdZqMdas5oUFLCxBf2VH3-NjUulDaTo.DVzINErRVs6m5tyjAux6fcNfndadcgZVN5hLSwYTCLc';
      $scope.query = {};
      $scope.query.term = '';
      $scope.previousSearchKey = '';
      $scope.ids = {
        list: []
      };
      $scope.msgs = {
        list: [],
        seen: {}
      };
      $scope.ipfs = new Ipfs({
        init: true,
        start: true,
        repo: 'ipfs7-iris'
      });
      $scope.capitalizeWords = function(s) {
        if (s && s.length) {
          return (s.trim().split(' ').map(function(word) {
            return word[0].toUpperCase() + word.slice(1).toLowerCase();
          })).join(' ');
        } else {
          return s;
        }
      };
      $scope.copyToClipboard = function(text) {
        return clipboard.copyText(text);
      };
      $scope.search = function(query,
    limit) {
        var cursor,
    resultFound,
    searchKey,
    seen;
        if (!$scope.irisIndex) {
          return;
        }
        $scope.ids.activeKey = -1;
        $scope.ids.list = [];
        searchKey = (query || $scope.query.term || '').toLowerCase().trim();
        $scope.searchKey = searchKey;
        $scope.previousSearchKey = searchKey;
        limit = limit || 10;
        cursor = '';
        if ($scope.ids.list.length) {
          cursor = $scope.ids.list[$scope.ids.list.length - 1].cursor;
        }
        seen = {};
        resultFound = function(i) {
          if (searchKey !== $scope.searchKey) {
            return;
          }
          i.gun.on(function(data) {
            i.data = data;
            return i.gun.get('linkTo').on(function(linkTo) {
              var s;
              if (i.linkTo || !linkTo) {
                return;
              }
              s = linkTo.type + linkTo.value;
              if (seen[s]) {
                return;
              }
              seen[s] = true;
              $scope.ids.list.push(i);
              return i.linkTo = linkTo;
            });
          });
          return $scope.setIdentityNames(i,
    true);
        };
        $scope.irisIndex.search(searchKey,
    void 0,
    resultFound,
    limit,
    cursor);
        return new Promise(function(resolve) { // TODO: uib-typeahead is limited, but something better pls
          return setTimeout(function() {
            return resolve($scope.ids.list);
          },
    1000);
        });
      };
      setIndex = function(i) {
        if (i.writable) {
          i.setOnline(true);
        }
        return i.ready.then(function() {
          $scope.ids.list = [];
          $scope.msgs.list = [];
          $scope.msgs.seen = {};
          $scope.irisIndex = i;
          setTimeout(function() { // for some reason, dist version fails to show messages and identities without this
            $scope.search();
            return $scope.showMoreMsgs();
          },
    1000);
          $scope.trustedIndexes = [];
          $scope.irisIndex.gun.get('trustedIndexes').open(function(r) {
            var k,
    results,
    v;
            results = [];
            for (k in r) {
              v = r[k];
              results.push($scope.trustedIndexes.push({
                index: k,
                attribute: new $window.irisLib.Attribute('keyID',
    k),
                identity: $scope.irisIndex.get('keyID',
    k)
              }));
            }
            return results;
          });
          setTimeout(function() {
            return $scope.$broadcast('rzSliderForceRender');
          },
    1000);
          setTimeout(function() {
            return $scope.$broadcast('rzSliderForceRender');
          },
    3000); // :---D
          setTimeout(function() {
            return $scope.$broadcast('rzSliderForceRender');
          },
    5000); // :---D
          console.log('Got index',
    $scope.irisIndex);
          $scope.viewpoint.identity = $scope.irisIndex.get($scope.viewpoint.type,
    $scope.viewpoint.value);
          $scope.setIdentityNames($scope.viewpoint.identity);
          return $scope.viewpoint.identity.gun.get('attrs').open(function(attrs) {
            $scope.viewpoint.attrs = attrs;
            return $scope.viewpoint.mostVerifiedAttributes = $window.irisLib.Identity.getMostVerifiedAttributes(attrs);
          });
        });
      };
      $scope.loadDefaultIndex = function() {
        var i;
        $scope.irisIndex = null;
        $scope.viewpoint = {
          type: 'keyID',
          value: $scope.defaultIndexKeyID
        };
        i = new $window.irisLib.Index({
          gun: $scope.gun,
          pubKey: $scope.defaultIndexKeyID,
          ipfs: $scope.ipfs
        });
        return setIndex(i);
      };
      $scope.loginWithKey = function(privateKeySerialized,
    self) {
        var i,
    keyID;
        $scope.irisIndex = null;
        $scope.loggingIn = true;
        $scope.privateKey = $window.irisLib.Key.fromString(privateKeySerialized);
        localStorageService.set('irisKey',
    privateKeySerialized);
        $scope.authentication.user = {
          idType: 'keyID',
          idValue: $window.irisLib.Key.getId($scope.privateKey)
        };
        $scope.authentication.user.url = $scope.getIdUrl('keyID',
    $scope.authentication.user.idValue);
        if ($scope.loginModal) {
          $scope.loginModal.close();
        }
        keyID = $window.irisLib.Key.getId($scope.privateKey);
        $scope.viewpoint = {
          type: 'keyID',
          value: keyID
        };
        $scope.ids.list = [];
        $scope.msgs.list = [];
        $scope.msgs.seen = {};
        i = new $window.irisLib.Index({
          gun: $scope.gun,
          keypair: $scope.privateKey,
          self,
          ipfs: $scope.ipfs,
          debug: true
        });
        setIndex(i);
        return i.ready.then(function() {
          var startAt;
          $scope.loggingIn = false;
          $scope.authentication.identity = $scope.irisIndex.get('keyID',
    keyID);
          $scope.authentication.identity.gun.get('attrs').open(function(val,
    key,
    msg,
    eve) {
            var mva;
            mva = $window.irisLib.Identity.getMostVerifiedAttributes(val);
            $scope.authentication.identity.mva = mva;
            if (mva.profilePhoto) {
              return eve.off();
            }
          });
          startAt = new Date();
          $scope.authentication.identity.gun.get('received').map().once(function(m) {
            if (m.pubKey === $scope.viewpoint.value) {
              return;
            }
            console.log('you got a msg');
            return $window.irisLib.Message.fromSig(m).then(function(msg) {
              var author;
              if (new Date(msg.signedData.timestamp) > startAt) {
                author = msg.getAuthor($scope.irisIndex);
                return $scope.setIdentityNames(author).then(function(name) {
                  return NotificationService.create({
                    message: `${name} sent you a message!`,
                    onClick: function() {
                      return $state.go('identities.show',
    {
                        type: $scope.authentication.user.idType,
                        value: $scope.authentication.user.idValue
                      });
                    }
                  });
                });
              }
            });
          });
          return $scope.authentication.identity.gun.on(function(data) {
            if (data.receivedPositive && $scope.authentication.identity.data && !$scope.authentication.identity.data.receivedPositive) {
              console.log('great, you got your first upvote!');
            }
            // TODO: notification
            return $scope.authentication.identity.data = data;
          });
        });
      };
      privateKey = localStorageService.get('irisKey') || localStorageService.get('identifiKey');
      if (privateKey) {
        $scope.loginWithKey(privateKey);
      } else {
        $scope.loadDefaultIndex();
      }
      $scope.openChatModal = function() {
        return $scope.openModal('chatModal',
    {
          templateUrl: 'app/identities/chat.modal.html',
          size: 'md'
        });
      };
      $scope.openVideoChatModal = function() {
        return $scope.openModal('videoChatModal',
    {
          templateUrl: 'app/identities/video.modal.html',
          size: 'md'
        });
      };
      $scope.openReadQRModal = function() {
        return $scope.openModal('readQRModal',
    {
          templateUrl: 'app/identities/readqr.modal.html',
          size: 'md'
        });
      };
      $scope.updateIpfsPeers = function() {
        return $scope.ipfs.swarm.peers(function(err,
    peerInfos) {
          if (err) {
            return console.error('failed to fetch ipfs peers',
    err);
          } else {
            return $scope.$apply(function() {
              if (Array.isArray(peerInfos)) {
                return $scope.ipfsPeers = peerInfos;
              }
            });
          }
        });
      };
      $scope.ipfs.on('ready',
    function() {
        $scope.ipfsReady = true;
        $window.ipfs = $scope.ipfs;
        $scope.updateIpfsPeers();
        return setInterval($scope.updateIpfsPeers,
    5000);
      });
      $scope.localSettings = localStorageService.get('localSettings') || {};
      $scope.closeProfileUploadNotification = function() {
        $scope.localSettings.profileUploadNotificationClosed = true;
        return localStorageService.set('localSettings',
    $scope.localSettings);
      };
      $scope.openProfilePhotoUploadModal = function() {
        if (!$scope.authentication.identity) {
          return;
        }
        return $scope.openUploadModal($scope.uploadProfilePhoto,
    'Upload profile photo',
    true);
      };
      $scope.uploadProfilePhoto = function(blob) {
        return $scope.uploadFile(blob).then(function(files) {
          var recipient;
          recipient = {
            profilePhoto: '/ipfs/' + files[0].path
          };
          if ($state.is('identities.show')) {
            recipient[$stateParams.type] = $stateParams.value;
          } else {
            recipient.keyID = $scope.authentication.user.idValue;
            $scope.closeProfileUploadNotification();
          }
          return $window.irisLib.Message.createVerification({recipient},
    $scope.privateKey).then(function(m) {
            $scope.hideProfilePhoto = true; // There's a weird bug where the profile identicon doesn't update
            $scope.irisIndex.addMessage(m).then(function() {
              $scope.hideProfilePhoto = false;
              if (!$state.is('identities.show')) {
                return $state.go('identities.show',
    {
                  type: $scope.authentication.user.idType,
                  value: $scope.authentication.user.idValue
                });
              }
            });
            return $scope.uploadModal.close();
          });
        });
      };
      $scope.setPageTitle = function(title) {
        $rootScope.pageTitle = 'Iris';
        if (title) {
          return $rootScope.pageTitle += ' - ' + title;
        }
      };
      $scope.ipfsGet = function(uri,
    options = {}) {
        return new Promise(function(resolve) {
          var go;
          go = function() {
            return $scope.ipfs.cat(uri).then(function(file) {
              file = $scope.ipfs.types.Buffer(file);
              if (options.getJson) {
                file = JSON.parse(file.toString());
              }
              if (options.base64type) {
                file = 'data:' + options.base64type + ';base64,' + file.toString('base64');
              }
              return resolve(file);
            });
          };
          if ($scope.ipfsReady) {
            return go();
          } else {
            return $scope.ipfs.on('ready',
    function() {
              return go();
            });
          }
        });
      };
      $scope.$watch('newMessage.rating',
    function(rating) {
        var alpha;
        if (rating > 0) {
          alpha = (rating - 0.5) / 3 / 1.25 + 0.2;
          return $scope.newMessage.style = {
            'border-color': 'rgba(223,240,216,' + alpha + ')'
          };
        } else if (rating < 0) {
          alpha = (rating + 0.5) / -3 / 1.25 + 0.2;
          return $scope.newMessage.style = {
            'border-color': 'rgba(242,222,222,' + alpha + ')'
          };
        } else {
          return $scope.newMessage.style = {
            'border-color': '#fcf8e3'
          };
        }
      });
      $scope.resetMsg = function() {
        $scope.newMessage = {
          rating: 1,
          comment: '',
          files: []
        };
        return $scope.newVerification = {
          type: '',
          value: ''
        };
      };
      $scope.resetMsg();
      $scope.vote = function(msg,
    vote) {
        console.log('vote added');
        return $scope.createMessage(null,
    {
          type: 'vote',
          replyTo: msg.getHash(),
          vote
        });
      };
      // Create new Message
      $scope.createMessage = function(event,
    msg,
    options = {}) {
        var addFile,
    file,
    fileUploads,
    j,
    len,
    ref;
        $scope.addingMessage = true;
        if (event) {
          event.stopPropagation();
        }
        if (msg.pollOptions === false) {
          delete msg.pollOptions;
        }
        fileUploads = [];
        if (options.files) { // upload to ipfs
          msg.attachments = [];
          addFile = function(file) {
            return $scope.uploadFile(file).then(function(res) {
              if (res && res.length && res.length > 0 && res[0].path) {
                return msg.attachments.push({
                  uri: '/ipfs/' + res[0].path,
                  size: file.size,
                  type: file.type,
                  name: file.name
                });
              }
            });
          };
          ref = options.files;
          for (j = 0, len = ref.length; j < len; j++) {
            file = ref[j];
            fileUploads.push(addFile(file));
          }
        }
        return Promise.all(fileUploads).then(function() {
          var message;
          console.log('msg.attachments',
    msg.attachments);
          // Create new Message object
          message = null;
          if (msg.files) {
            delete msg.files;
          }
          msg.recipient = msg.recipient || {};
          if ($state.is('identities.show')) {
            if (options.verifiedAttr && $stateParams.type === options.verifiedAttr.type) {
              msg.recipient[$stateParams.type] = [$stateParams.value,
    options.verifiedAttr.value];
            } else {
              msg.recipient[$stateParams.type] = $stateParams.value;
              if (options.verifiedAttr) {
                msg.recipient[options.verifiedAttr.type] = options.verifiedAttr.value;
              }
            }
          } else if (!$state.is('identities.create')) {
            msg.recipient.keyID = $scope.authentication.user.idValue;
          }
          if (msg.type === 'rating') {
            msg.maxRating |= 3;
            msg.minRating |= -3;
            message = $window.irisLib.Message.createRating(msg,
    $scope.privateKey);
          } else if (msg.type === 'verification') {
            message = $window.irisLib.Message.createVerification(msg,
    $scope.privateKey);
          } else {
            message = $window.irisLib.Message.create(msg,
    $scope.privateKey);
          }
          return message.then(function(m) {
            $scope.irisIndex.addMessage(m);
            $scope.msgs.seen[m.getHash()] = true;
            return $scope.processMessages([m]);
          }).then(function(messages) {
            var ref1;
            $scope.msgs.list.push(messages[0]);
            if (options.addTo && !options.addTo.seen[messages[0].getHash()]) {
              options.addTo.list.push(messages[0]);
              options.addTo.seen[messages[0].getHash()] = true;
            }
            if ((ref1 = $scope.filters.type) !== msg.type && ref1 !== null) {
              $scope.filters.type = msg.type;
            }
            $scope.resetMsg(); // why not resetting uploaded files? D:
            if (options.files) {
              options.files = [];
            }
            $scope.addingMessage = false;
            return message;
          }).catch(function(e) {
            console.error(e);
            $scope.error = e;
            $scope.addingMessage = false;
            return message;
          });
        });
      };
      $scope.addAttribute = function() {
        return $location.path('#/identities/create/' + $scope.query.term);
      };
      $scope.login = function() {
        return $scope.filters.maxDistance = -1; // because the user doesn't have a trust index yet
      };
      $scope.openModal = function(modalName,
    options) {
        options = Object.assign({
          size: 'lg',
          animation: true,
          scope: $scope
        },
    options);
        $scope[modalName] = $uibModal.open(options);
        $scope[modalName].result.then((function() {}),
    (function() {})); // avoid backdrop rejection console error
        $scope[modalName].rendered.then(function() {
          document.activeElement.blur();
          if (options.focusTo) {
            return focus(options.focusTo);
          }
        });
        return $transitions.onStart({},
    function() {
          return $scope[modalName].close();
        });
      };
      $scope.openLoginModal = function() {
        return $scope.openModal('loginModal',
    {
          templateUrl: 'app/main/login.modal.html',
          focusTo: 'newUser'
        });
      };
      $scope.openUploadModal = function(callback,
    modalButtonText,
    squarify) {
        $scope.uploadModalCallback = callback;
        $scope.modalButtonText = modalButtonText || 'Upload';
        $scope.squarify = squarify;
        return $scope.openModal('uploadModal',
    {
          templateUrl: 'app/identities/upload.modal.html'
        });
      };
      $scope.msgs.list = [];
      $scope.msgs.seen = {};
      $scope.filteredMsgs = [];
      $scope.showMoreMsgs = function(cursor) {
        var filter,
    found,
    limit,
    /*
    if $scope.filters.type == null
      filter = (m) ->
        r = m.signedData.type not in ['verification', 'unverification']
        console.log 'filterin', r
        return r
    else
      t = $scope.filters.type.split(':')[0]
      filter = (m) ->
        r = m.signedData.type == t
        console.log 'filterin', r
        return r
    */
    resultFound;
        limit = 20; // 10
        if (cursor === void 0 && $scope.msgs.last) {
          cursor = $scope.msgs.last;
        }
        console.log('cursor',
    cursor);
        found = 0;
        $scope.loadingMsgs = true;
        filter = false;
        resultFound = function(msg) {
          console.log('got msg',
    msg);
          found += 1;
          if (found >= limit) {
            $scope.loadingMsgs = false;
          }
          if ($scope.msgs.seen[msg.getHash()]) {
            return;
          }
          if (!$scope.msgs.last || msg.signedData.timestamp < $scope.msgs.last) {
            $scope.msgs.last = msg.signedData.timestamp;
          }
          $scope.msgs.seen[msg.getHash()] = true;
          $scope.processMessages([msg]);
          return $scope.$apply(function() {
            return $scope.msgs.list.push(msg);
          });
        };
        $scope.filters.limit += limit;
        if ($scope.filters.limit > $scope.filteredMsgs.length) {
          return $scope.irisIndex.getMessagesByTimestamp(resultFound,
    void 0,
    cursor);
        }
      };
      $scope.uploadFile = function(blob) {
        return new Promise(function(resolve,
    reject) {
          var fileReader;
          fileReader = new FileReader();
          fileReader.onload = function(event) {
            var buffer;
            buffer = $scope.ipfs.types.Buffer.from(event.target.result);
            return $scope.ipfs.add(buffer,
    function(err,
    files) {
              if (err) {
                return reject('adding to ipfs failed',
    err);
              } else {
                resolve(files);
                return console.log('done:',
    err,
    files);
              }
            });
          };
          return fileReader.readAsArrayBuffer(blob);
        });
      };
      $scope.createUser = function(name) {
        var self;
        if (name.indexOf('{') !== -1 || name.indexOf('}') !== -1) { // prevent accidental private key paste
          return;
        }
        name = name.trim();
        $scope.creatingUser = true;
        self = {name};
        return $window.irisLib.Key.generate().then(function(key) {
          $scope.privateKey = key;
          $scope.privateKeySerialized = $window.irisLib.Key.toString($scope.privateKey);
          self.keyID = $window.irisLib.Key.getId($scope.privateKey);
          return $scope.loginWithKey($scope.privateKeySerialized,
    self);
        }).then(function(msg) {
          return $scope.creatingUser = false;
        }).catch(function(e) {
          console.error('failed to create user:',
    e);
          return $scope.creatingUser = false;
        });
      };
      $scope.generateKey = function() {
        return $window.irisLib.Key.generate().then(function(key) {
          return $scope.$apply(function() {
            $scope.privateKey = key;
            return $scope.privateKeySerialized = $window.irisLib.Key.toString($scope.privateKey);
          });
        });
      };
      $scope.download = function(filename,
    data,
    type,
    charset = 'utf-8',
    href) {
        var hiddenElement;
        hiddenElement = document.createElement('a');
        hiddenElement.href = href || `data:${type};charset=${charset},${encodeURI(data)}`;
        hiddenElement.target = '_blank';
        hiddenElement.download = filename;
        return hiddenElement.click();
      };
      $scope.downloadText = function(text) {
        return $scope.download('iris_private_key.txt',
    text,
    'text/csv',
    'utf-8');
      };
      $scope.openLogoutModal = function() {
        return $scope.openModal('logoutModal',
    {
          templateUrl: 'app/main/logout.modal.html'
        });
      };
      $scope.logout = function() {
        $scope.irisIndex.setOnline(false);
        $scope.filters.maxDistance = 0;
        $scope.privateKeySerialized = '';
        $scope.authentication = {};
        localStorageService.clearAll();
        $state.go('identities.list');
        $scope.privateKey = null;
        $scope.publicKey = null;
        $scope.logoutModal.close();
        $scope.loadDefaultIndex();
        return $scope.localSettings = {};
      };
      $scope.msgFilter = function(msg,
    index,
    array) {
        var data,
    neutralRating,
    ref;
        data = msg.signedData;
        if (msg.signedData.replyTo) {
          return false;
        }
        if ($scope.filters.type) {
          if ($scope.filters.type.match(/^rating/)) {
            if (data.type !== 'rating') {
              return false;
            }
            neutralRating = (data.maxRating + data.minRating) / 2;
            if ($scope.filters.type === 'rating:positive' && data.rating <= neutralRating) {
              return false;
            } else if ($scope.filters.type === 'rating:negative' && data.rating >= neutralRating) {
              return false;
            } else if ($scope.filters.type === 'rating:neutral' && data.rating !== neutralRating) {
              return false;
            }
          } else if ($scope.filters.type === 'verification') {
            return (ref = data.type) === 'verification' || ref === 'unverification';
          } else if (data.type !== $scope.filters.type) {
            return false;
          }
        }
        if ($scope.filters.maxDistance > -1) {
          if (typeof msg.authorTrustDistance !== 'number') {
            return false;
          }
          if ($scope.filters.maxDistance > 0 && msg.authorTrustDistance > $scope.filters.maxDistance) {
            return false;
          }
          if ($scope.filters.maxDistance === 0 && msg.authorTrustDistance === 99) {
            return false;
          }
        }
        return true;
      };
      $scope.removeFocus = function(event) {
        return event.currentTarget.blur();
      };
      $scope.setMsgRawData = function(msg) {
        var showRawData;
        showRawData = {
          hash: msg.hash,
          data: msg.signedData,
          priority: msg.priority,
          jws: msg.jws
        };
        return msg.strData = JSON.stringify(showRawData,
    void 0,
    2);
      };
      $scope.shareMessage = function(msg,
    comment) {
        $scope.createMessage(null,
    {
          type: 'post',
          sharedMsg: msg.getHash(),
          comment
        }).then(function(r) {
          msg.shares = msg.shares || {};
          msg.shares[r.getHash()] = r;
          msg.sharesArr = msg.sharesArr || [];
          return msg.sharesArr.push(r);
        });
        return $scope.shareModal.close();
      };
      $scope.msgUtils = {
        like: function(msg) {
          if (msg.liked) {
            msg.liked = false;
            msg.likes = msg.likes ? msg.likes - 1 : 0;
            return $scope.irisIndex.setReaction(msg,
    null);
          } else {
            msg.liked = true;
            msg.likes = msg.likes ? msg.likes + 1 : 1;
            return $scope.irisIndex.setReaction(msg,
    'like');
          }
        },
        share: function(msg) {
          $scope.message = msg;
          return $scope.openModal('shareModal',
    {
            templateUrl: 'app/messages/share.modal.html',
            size: 'md'
          });
        },
        replyTo: function(msg,
    reply) {
          return $scope.createMessage(null,
    {
            type: 'post',
            replyTo: msg.getHash(),
            comment: reply
          }).then(function(r) {
            msg.replies = msg.replies || {};
            msg.replies[r.getHash()] = r;
            msg.repliesArr = msg.repliesArr || [];
            return msg.repliesArr.push(r);
          });
        }
      };
      $scope.openMessage = function(event,
    message,
    size) {
        var t;
        if (event) {
          event.stopPropagation();
        }
        t = event.target;
        if (angular.element(t).closest('a').length) {
          return;
        }
        $scope.setMsgRawData(message);
        $scope.message = message;
        // TODO: check sig
        $scope.message.recipient = $scope.message.getRecipient($scope.irisIndex);
        $scope.message.recipient.gun.get('attrs').open(function(d) {
          var mva;
          mva = $window.irisLib.Identity.getMostVerifiedAttributes(d);
          if (mva.name) {
            return $scope.$apply(function() {
              return $scope.message.recipient_name = mva.name.attribute.value;
            });
          } else if (mva.nickname) {
            return $scope.$apply(function() {
              return $scope.message.recipient_name = mva.nickname.attribute.value;
            });
          }
        });
        $scope.message.signerKeyID = $scope.message.getSignerKeyID();
        $scope.message.verifiedBy = $scope.irisIndex.get('keyID',
    $scope.message.signerKeyID);
        $scope.message.verifiedByAttr = new $window.irisLib.Attribute('keyID',
    $scope.message.signerKeyID);
        return $scope.openModal('chatModal',
    {
          templateUrl: 'app/messages/show.modal.html'
        });
      };
      if (!$scope.filters) {
        $scope.filters = Object.assign({},
    config.defaultFilters);
      }
      $scope.isCollapsed = false;
      // $scope.menu = Menus.getMenu('topbar')
      $scope.toggleCollapsibleMenu = function() {
        return $scope.isCollapsed = !$scope.isCollapsed;
      };
      $scope.processMessages = function(messages,
    msgOptions = {},
    options = {}) {
        angular.forEach(messages,
    function(msg,
    key) {
          var k,
    v;
          for (k in msgOptions) {
            v = msgOptions[k];
            msg[k] = v;
          }
          msg.author = msg.getAuthor($scope.irisIndex);
          return msg.author.gun.get('trustDistance').on(function(d) {
            return msg.authorTrustDistance = d;
          });
        });
        return messages;
      };
      scrollTo = function(el) {
        var pos;
        if (!el) {
          return;
        }
        pos = el.getBoundingClientRect();
        if (pos.top) {
          if (pos.top - 60 < $window.pageYOffset) {
            $window.scrollTo(0,
    pos.top - 60);
          } else if (pos.bottom > $window.pageYOffset + ($window.innerHeight || document.documentElement.clientHeight)) {
            $window.scrollTo(0,
    pos.bottom - ($window.innerHeight || document.documentElement.clientHeight) + 15);
          }
        }
      };
      // should be moved to iris-lib?
      $scope.setIdentityNames = function(i,
    htmlSafe,
    setTitle) {
        i.wellVerified = false;
        return new Promise(function(resolve) {
          return i.gun.get('attrs').open(function(attrs) {
            return $scope.$apply(function() {
              var a,
    mva,
    ref;
              mva = $window.irisLib.Identity.getMostVerifiedAttributes(attrs);
              if (mva.name) {
                i.primaryName = mva.name.attribute.value;
                i.hasProperName = true;
                if (mva.name.wellVerified) {
                  i.wellVerified = true;
                }
              } else if (mva.nickname) {
                i.primaryName = mva.nickname.attribute.value;
                i.hasProperName = true;
              } else {
                a = Object.values(attrs)[0];
                i.primaryName = a.value;
                if ((ref = a.type) === 'keyID' || ref === 'uuid') {
                  i.primaryName = i.primaryName.slice(0,
    6) + '...';
                }
              }
              if (i.primaryName) {
                if (mva.nickname && mva.nickname.attribute.value !== i.primaryName) {
                  i.nickname = mva.nickname.attribute.value;
                  if (htmlSafe) {
                    i.nickname = i.nickname.replace('<',
    '&lt;');
                  }
                }
                if (htmlSafe) {
                  i.primaryName = i.primaryName.replace('<',
    '&lt;');
                }
              }
              if (setTitle) {
                $scope.setPageTitle(i.primaryName);
              }
              return resolve(i.primaryName);
            });
          });
        });
      };
      $scope.searchKeydown = function(event) {
        var el,
    id,
    wait;
        switch ((event ? event.which : -1)) {
          case 38:
            event.preventDefault();
            if ($scope.ids.activeKey > -1) {
              $scope.addEntryActive = false;
              $scope.ids.activeKey--;
              id = $scope.ids.activeKey > -1 ? 'result' + $scope.ids.activeKey : 'createIdRow';
              return document.getElementById(id).scrollIntoView();
            }
            break;
          case 40:
            event.preventDefault();
            if (($scope.ids.activeKey < $scope.ids.list.length - 1) && $scope.ids.activeKey < $scope.filters.limit) {
              $scope.ids.activeKey++;
            }
            return document.getElementById('result' + $scope.ids.activeKey).scrollIntoView();
          case 13:
            event.preventDefault();
            if ($scope.ids.activeKey === -1) {
              return $state.go('identities.create');
            } else {
              return document.getElementById('result' + $scope.ids.activeKey).click();
            }
            break;
          case -1:
            clearTimeout($scope.timer);
            $scope.query.term = '';
            return $scope.search();
          case 33:
          case 34:
          case 35:
          case 36:
          case 37:
          case 39:
            break;
          default:
            el = angular.element(event.currentTarget);
            clearTimeout($scope.timer);
            wait = setTimeout((function() {
              $scope.query.term = el.val();
              $scope.search();
            }),
    300);
            $scope.timer = wait;
            break;
        }
      };
      $scope.dropdownSearchSelect = function(item) {
        $state.go('identities.show',
    {
          type: item.linkTo.type,
          value: item.linkTo.value
        });
        return $scope.query.term = '';
      };
      $scope.addGunPeer = function(url) {
        return $scope.gun.opt({
          peers: [url]
        });
      };
      $scope.removeGunPeer = function(url) {
        var peer;
        peer = $scope.gun._.opt.peers[url];
        peer.url = peer.id = null; // this prevents reconnecting to URL
        peer.wire.close(); // if websocket interface
        return delete $scope.gun._.opt.peers[url];
      };
      $scope.addIpfsPeer = function(url) {
        $scope.ipfs.bootstrap.add(url);
        return $scope.ipfs.swarm.connect(url).then(function() {
          return $scope.updateIpfsPeers();
        });
      };
      $scope.addDefaultIpfsPeers = function() {
        return $scope.ipfs.bootstrap.add('',
    {
          default: true
        }).then(function() { // TODO: errors
          return $scope.updateIpfsPeers();
        });
      };
      return $scope.removeIpfsPeer = function(url) {
        $scope.ipfs.bootstrap.rm(url);
        return $scope.ipfs.swarm.disconnect(url).then(function() {
          return $scope.updateIpfsPeers();
        });
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi9tYWluLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzIjpbIm1haW4vbWFpbi5jb250cm9sbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBO0VBQ0EsT0FBTyxDQUFDLE1BQVIsQ0FBZSxhQUFmLENBQTZCLENBQUMsVUFBOUIsQ0FBeUMsZ0JBQXpDLEVBQTJEO0lBQ3pELFFBRHlEO0lBRXpELFlBRnlEO0lBR3pELFdBSHlEO0lBSXpELE9BSnlEO0lBS3pELFFBTHlEO0lBTXpELFFBTnlEO0lBT3pELHFCQVB5RDtJQVF6RCxXQVJ5RDtJQVN6RCxXQVR5RDtJQVV6RCxTQVZ5RDtJQVd6RCxjQVh5RDtJQVl6RCxjQVp5RDtJQWF6RCxJQWJ5RDtJQWN6RCxPQWR5RDtJQWV6RCxxQkFmeUQ7SUFnQnpELFFBQUEsQ0FBQyxNQUFEO0lBQVMsVUFBVDtJQUFxQixTQUFyQjtJQUFnQyxLQUFoQztJQUF1QyxNQUF2QztJQUErQyxNQUEvQztJQUNBLG1CQURBO0lBQ3FCLFNBRHJCO0lBQ2dDLFNBRGhDO0lBQzJDLE9BRDNDO0lBQ29ELFlBRHBEO0lBRUEsWUFGQTtJQUVjLEVBRmQ7SUFFa0IsS0FGbEI7SUFFeUIsbUJBRnpCLENBQUE7QUFHRSxVQUFBLEdBQUE7SUFBQSxVQUFBO0lBQUEsUUFBQTtJQUFBO01BQUEsR0FBQSxHQUNFO1FBQUEsS0FBQSxFQUFPLEVBQVA7UUFDQSxZQUFBLEVBQWM7TUFEZDtNQUVGLElBQUEsQ0FBQSxDQUFPLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBakIsS0FBNkIsV0FBN0IsSUFBNkMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFqQixLQUF5QixNQUE3RSxDQUFBO1FBQ0UsR0FBRyxDQUFDLEtBQUosR0FBWTtVQUFDLGtDQUFEO1VBQXFDLGtDQUFyQztVQURkOztNQUVBLElBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFqQixLQUE2QixRQUFoQztRQUNFLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBVixDQUFlLDJC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QXFCLFFBQUEsQ0FBQyxHQUFELENBQUE7UUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBdEIsQ0FBMEIsR0FBMUI7ZUFDQSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFsQixDQUEwQixHQUExQixDQUE4QixDQUFDLElBQS9CLENBQW9DLFFBQUEsQ0FBQSxDQUFBO2lCQUNsQyxNQUFNLENBQUMsZUFBUCxDQUFBO1FBRGtDLENBQXBDO01BRm1CO01BS3JCLE1BQU0sQ0FBQyxtQkFBUCxHQUE2QixRQUFBLENBQUEsQ0FBQTtlQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUF0QixDQUEwQixFQUExQjtJQUE4QjtVQUFDLE9BQUEsRUFBUztRQUFWLENBQTlCLENBQThDLENBQUMsSUFBL0MsQ0FBb0QsUUFBQSxDQUFBLENBQUEsRUFBQTtpQkFDbEQsTUFBTSxDQUFDLGVBQVAsQ0FBQTtRQURrRCxDQUFwRDtNQUQyQjthQUk3QixNQUFNLENBQUMsY0FBUCxHQUF3QixRQUFBLENBQUMsR0FBRCxDQUFBO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQXRCLENBQXlCLEdBQXpCO2VBQ0EsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBbEIsQ0FBNkIsR0FBN0IsQ0FBaUMsQ0FBQyxJQUFsQyxDQUF1QyxRQUFBLENBQUEsQ0FBQTtpQkFDckMsTUFBTSxDQUFDLGVBQVAsQ0FBQTtRQURxQyxDQUF2QztNQUZzQjtJQXJwQjFCLENBaEJ5RDtHQUEzRDtBQURBIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5hbmd1bGFyLm1vZHVsZSgnaXJpc0FuZ3VsYXInKS5jb250cm9sbGVyICdNYWluQ29udHJvbGxlcicsIFtcbiAgJyRzY29wZSdcbiAgJyRyb290U2NvcGUnXG4gICckbG9jYXRpb24nXG4gICckaHR0cCdcbiAgJyRzdGF0ZSdcbiAgJ2NvbmZpZycsXG4gICdsb2NhbFN0b3JhZ2VTZXJ2aWNlJ1xuICAnY2xpcGJvYXJkJ1xuICAnJHVpYk1vZGFsJ1xuICAnJHdpbmRvdydcbiAgJyRzdGF0ZVBhcmFtcydcbiAgJyR0cmFuc2l0aW9ucydcbiAgJyRxJ1xuICAnZm9jdXMnXG4gICdOb3RpZmljYXRpb25TZXJ2aWNlJ1xuICAoJHNjb3BlLCAkcm9vdFNjb3BlLCAkbG9jYXRpb24sICRodHRwLCAkc3RhdGUsIGNvbmZpZyxcbiAgbG9jYWxTdG9yYWdlU2VydmljZSwgY2xpcGJvYXJkLCAkdWliTW9kYWwsICR3aW5kb3csICRzdGF0ZVBhcmFtcyxcbiAgJHRyYW5zaXRpb25zLCAkcSwgZm9jdXMsIE5vdGlmaWNhdGlvblNlcnZpY2UpIC0+XG4gICAgb3B0ID1cbiAgICAgIHBlZXJzOiBbXVxuICAgICAgbG9jYWxTdG9yYWdlOiBmYWxzZVxuICAgIHVubGVzcyAkd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lID09ICdsb2NhbGhvc3QnIGFuZCAkd2luZG93LmxvY2F0aW9uLnBvcnQgPT0gJzMwMDAnXG4gICAgICBvcHQucGVlcnMgPSBbJ2h0dHBzOi8vZ3VuLXVzLmhlcm9rdWFwcC5jb20vZ3VuJywgJ2h0dHBzOi8vZ3VuLWV1Lmhlcm9rdWFwcC5jb20vZ3VuJ10gIyAnaHR0cHM6Ly9ndW5tZWV0aW5nc2VydmVyLmhlcm9rdWFwcC5jb20vZ3VuJ1xuICAgIGlmICR3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgIT0gXCJodHRwczpcIlxuICAgICAgb3B0LnBlZXJzLnB1c2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODc2NS9ndW4nKVxuICAgIG9wdC5zdG9yZSA9IFJpbmRleGVkREIob3B0KVxuICAgICRzY29wZS5ndW4gPSBuZXcgR3VuKG9wdClcblxuICAgICMgVE9ETzogbW92ZSBldmVyeXRoaW5nIHRvIG1haW4gY29udHJvbGxlcj9cbiAgICAjIHNldCBhdXRoZW50aWNhdGlvblxuICAgICRzY29wZS5hdXRoZW50aWNhdGlvbiA9IHt9ICMgQXV0aGVudGljYXRpb25cblxuICAgICRzY29wZS5ub3RpZmljYXRpb25TZXJ2aWNlID0gTm90aWZpY2F0aW9uU2VydmljZVxuXG4gICAgJHNjb3BlLnRydXN0RGlzdGFuY2VDb21wYXJhdG9yID0gKGEsIGIpIC0+XG4gICAgICByZXR1cm4gMSBpZiBhLnR5cGUgIT0gJ251bWJlcidcbiAgICAgIHJldHVybiAtMSBpZiBiLnR5cGUgIT0gJ251bWJlcidcbiAgICAgIHJldHVybiBhLnZhbHVlIC0gYi52YWx1ZVxuXG4gICAgJHNjb3BlLmdldElkVXJsID0gKHR5cGUsIHZhbHVlKSAtPlxuICAgICAgaWYgJHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZS5pbmRleE9mKCcuJykgPiAtMSAjIGRpZmZlcmVudGlhdGUgYmV0d2VlbiBsb2NhbGhvc3QgLyBjaHJvbWUgcGx1Z2luIHVyaSBhbmQgRE5TIG5hbWVcbiAgICAgICAgcmV0dXJuICRzdGF0ZS5ocmVmKCdpZGVudGl0aWVzLnNob3cnLCB7dHlwZSwgdmFsdWV9LCB7YWJzb2x1dGU6IHRydWV9KSArICc/c2hhcmUnXG4gICAgICBlbHNlXG4gICAgICAgIHJldHVybiAnaHR0cHM6Ly9pcmlzLnRvLycgKyAkc3RhdGUuaHJlZignaWRlbnRpdGllcy5zaG93Jywge3R5cGUsIHZhbHVlfSkgKyAnP3NoYXJlJ1xuXG4gICAgJHNjb3BlLmdldElkS2V5ID0gKGlkKSAtPlxuICAgICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChpZC50eXBlKSArICc6JyArIGVuY29kZVVSSUNvbXBvbmVudChpZC52YWx1ZSlcblxuICAgICRzY29wZS5kZWZhdWx0SW5kZXhLZXlJRCA9ICdiOEJ5YVlOQkRDTUxOZFpxTWRhczVvVUZMQ3hCZjJWSDMtTmpVdWxEYVRvLkRWeklORXJSVnM2bTV0eWpBdXg2ZmNOZm5kYWRjZ1pWTjVoTFN3WVRDTGMnXG4gICAgJHNjb3BlLnF1ZXJ5ID0ge31cbiAgICAkc2NvcGUucXVlcnkudGVybSA9ICcnXG4gICAgJHNjb3BlLnByZXZpb3VzU2VhcmNoS2V5ID0gJydcbiAgICAkc2NvcGUuaWRzID1cbiAgICAgIGxpc3Q6IFtdXG4gICAgJHNjb3BlLm1zZ3MgPVxuICAgICAgbGlzdDogW11cbiAgICAgIHNlZW46IHt9XG5cbiAgICAkc2NvcGUuaXBmcyA9IG5ldyBJcGZzKFxuICAgICAgaW5pdDogdHJ1ZVxuICAgICAgc3RhcnQ6IHRydWVcbiAgICAgIHJlcG86ICdpcGZzNy1pcmlzJ1xuICAgIClcblxuICAgICRzY29wZS5jYXBpdGFsaXplV29yZHMgPSAocykgLT5cbiAgICAgIGlmIHMgYW5kIHMubGVuZ3RoXG4gICAgICAgIHJldHVybiAocy50cmltKCkuc3BsaXQoJyAnKS5tYXAgKHdvcmQpIC0+IHdvcmRbMF0udG9VcHBlckNhc2UoKSArIHdvcmRbMS4uLTFdLnRvTG93ZXJDYXNlKCkpLmpvaW4gJyAnXG4gICAgICBlbHNlXG4gICAgICAgIHJldHVybiBzXG5cbiAgICAkc2NvcGUuY29weVRvQ2xpcGJvYXJkID0gKHRleHQpIC0+XG4gICAgICBjbGlwYm9hcmQuY29weVRleHQgdGV4dFxuXG4gICAgJHNjb3BlLnNlYXJjaCA9IChxdWVyeSwgbGltaXQpIC0+XG4gICAgICByZXR1cm4gdW5sZXNzICRzY29wZS5pcmlzSW5kZXhcbiAgICAgICRzY29wZS5pZHMuYWN0aXZlS2V5ID0gLTFcbiAgICAgICRzY29wZS5pZHMubGlzdCA9IFtdXG4gICAgICBzZWFyY2hLZXkgPSAocXVlcnkgb3IgJHNjb3BlLnF1ZXJ5LnRlcm0gb3IgJycpLnRvTG93ZXJDYXNlKCkudHJpbSgpXG4gICAgICAkc2NvcGUuc2VhcmNoS2V5ID0gc2VhcmNoS2V5XG4gICAgICAkc2NvcGUucHJldmlvdXNTZWFyY2hLZXkgPSBzZWFyY2hLZXlcbiAgICAgIGxpbWl0ID0gbGltaXQgb3IgMTBcbiAgICAgIGN1cnNvciA9ICcnXG4gICAgICBpZiAkc2NvcGUuaWRzLmxpc3QubGVuZ3RoXG4gICAgICAgIGN1cnNvciA9ICRzY29wZS5pZHMubGlzdFskc2NvcGUuaWRzLmxpc3QubGVuZ3RoIC0gMV0uY3Vyc29yXG4gICAgICBzZWVuID0ge31cblxuICAgICAgcmVzdWx0Rm91bmQgPSAoaSkgLT5cbiAgICAgICAgcmV0dXJuIGlmIHNlYXJjaEtleSAhPSAkc2NvcGUuc2VhcmNoS2V5XG4gICAgICAgIGkuZ3VuLm9uIChkYXRhKSAtPlxuICAgICAgICAgIGkuZGF0YSA9IGRhdGFcbiAgICAgICAgICBpLmd1bi5nZXQoJ2xpbmtUbycpLm9uIChsaW5rVG8pIC0+XG4gICAgICAgICAgICByZXR1cm4gaWYgaS5saW5rVG8gb3IgIWxpbmtUb1xuICAgICAgICAgICAgcyA9IGxpbmtUby50eXBlICsgbGlua1RvLnZhbHVlXG4gICAgICAgICAgICByZXR1cm4gaWYgc2VlbltzXVxuICAgICAgICAgICAgc2VlbltzXSA9IHRydWVcbiAgICAgICAgICAgICRzY29wZS5pZHMubGlzdC5wdXNoIGlcbiAgICAgICAgICAgIGkubGlua1RvID0gbGlua1RvXG4gICAgICAgICRzY29wZS5zZXRJZGVudGl0eU5hbWVzKGksIHRydWUpXG5cbiAgICAgICRzY29wZS5pcmlzSW5kZXguc2VhcmNoKHNlYXJjaEtleSwgdW5kZWZpbmVkLCByZXN1bHRGb3VuZCwgbGltaXQsIGN1cnNvcilcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSAocmVzb2x2ZSkgLT4gIyBUT0RPOiB1aWItdHlwZWFoZWFkIGlzIGxpbWl0ZWQsIGJ1dCBzb21ldGhpbmcgYmV0dGVyIHBsc1xuICAgICAgICBzZXRUaW1lb3V0IC0+XG4gICAgICAgICAgcmVzb2x2ZSgkc2NvcGUuaWRzLmxpc3QpXG4gICAgICAgICwgMTAwMFxuXG4gICAgc2V0SW5kZXggPSAoaSkgLT5cbiAgICAgIGkuc2V0T25saW5lKHRydWUpIGlmIGkud3JpdGFibGVcbiAgICAgIGkucmVhZHkudGhlbiAtPlxuICAgICAgICAkc2NvcGUuaWRzLmxpc3QgPSBbXVxuICAgICAgICAkc2NvcGUubXNncy5saXN0ID0gW11cbiAgICAgICAgJHNjb3BlLm1zZ3Muc2VlbiA9IHt9XG4gICAgICAgICRzY29wZS5pcmlzSW5kZXggPSBpXG4gICAgICAgIHNldFRpbWVvdXQgLT4gIyBmb3Igc29tZSByZWFzb24sIGRpc3QgdmVyc2lvbiBmYWlscyB0byBzaG93IG1lc3NhZ2VzIGFuZCBpZGVudGl0aWVzIHdpdGhvdXQgdGhpc1xuICAgICAgICAgICRzY29wZS5zZWFyY2goKVxuICAgICAgICAgICRzY29wZS5zaG93TW9yZU1zZ3MoKVxuICAgICAgICAsIDEwMDBcbiAgICAgICAgJHNjb3BlLnRydXN0ZWRJbmRleGVzID0gW11cbiAgICAgICAgJHNjb3BlLmlyaXNJbmRleC5ndW4uZ2V0KCd0cnVzdGVkSW5kZXhlcycpLm9wZW4gKHIpIC0+XG4gICAgICAgICAgZm9yIGssIHYgb2YgclxuICAgICAgICAgICAgJHNjb3BlLnRydXN0ZWRJbmRleGVzLnB1c2hcbiAgICAgICAgICAgICAgaW5kZXg6IGtcbiAgICAgICAgICAgICAgYXR0cmlidXRlOiBuZXcgJHdpbmRvdy5pcmlzTGliLkF0dHJpYnV0ZSgna2V5SUQnLCBrKVxuICAgICAgICAgICAgICBpZGVudGl0eTogJHNjb3BlLmlyaXNJbmRleC5nZXQoJ2tleUlEJywgaylcbiAgICAgICAgc2V0VGltZW91dCAoKSAtPlxuICAgICAgICAgICRzY29wZS4kYnJvYWRjYXN0KCdyelNsaWRlckZvcmNlUmVuZGVyJylcbiAgICAgICAgLCAxMDAwXG4gICAgICAgIHNldFRpbWVvdXQgKCkgLT5cbiAgICAgICAgICAkc2NvcGUuJGJyb2FkY2FzdCgncnpTbGlkZXJGb3JjZVJlbmRlcicpXG4gICAgICAgICwgMzAwMCAjIDotLS1EXG4gICAgICAgIHNldFRpbWVvdXQgKCkgLT5cbiAgICAgICAgICAkc2NvcGUuJGJyb2FkY2FzdCgncnpTbGlkZXJGb3JjZVJlbmRlcicpXG4gICAgICAgICwgNTAwMCAjIDotLS1EXG4gICAgICAgIGNvbnNvbGUubG9nICdHb3QgaW5kZXgnLCAkc2NvcGUuaXJpc0luZGV4XG4gICAgICAgICRzY29wZS52aWV3cG9pbnQuaWRlbnRpdHkgPSAkc2NvcGUuaXJpc0luZGV4LmdldCgkc2NvcGUudmlld3BvaW50LnR5cGUsICRzY29wZS52aWV3cG9pbnQudmFsdWUpXG4gICAgICAgICRzY29wZS5zZXRJZGVudGl0eU5hbWVzKCRzY29wZS52aWV3cG9pbnQuaWRlbnRpdHkpXG4gICAgICAgICRzY29wZS52aWV3cG9pbnQuaWRlbnRpdHkuZ3VuLmdldCgnYXR0cnMnKS5vcGVuIChhdHRycykgLT5cbiAgICAgICAgICAkc2NvcGUudmlld3BvaW50LmF0dHJzID0gYXR0cnNcbiAgICAgICAgICAkc2NvcGUudmlld3BvaW50Lm1vc3RWZXJpZmllZEF0dHJpYnV0ZXMgPSAkd2luZG93LmlyaXNMaWIuSWRlbnRpdHkuZ2V0TW9zdFZlcmlmaWVkQXR0cmlidXRlcyhhdHRycylcblxuICAgICRzY29wZS5sb2FkRGVmYXVsdEluZGV4ID0gLT5cbiAgICAgICRzY29wZS5pcmlzSW5kZXggPSBudWxsXG4gICAgICAkc2NvcGUudmlld3BvaW50ID0ge3R5cGU6ICdrZXlJRCcsIHZhbHVlOiAkc2NvcGUuZGVmYXVsdEluZGV4S2V5SUR9XG4gICAgICBpID0gbmV3ICR3aW5kb3cuaXJpc0xpYi5JbmRleCh7Z3VuOiAkc2NvcGUuZ3VuLCBwdWJLZXk6ICRzY29wZS5kZWZhdWx0SW5kZXhLZXlJRCwgaXBmczogJHNjb3BlLmlwZnN9KVxuICAgICAgc2V0SW5kZXgoaSlcblxuICAgICRzY29wZS5sb2dpbldpdGhLZXkgPSAocHJpdmF0ZUtleVNlcmlhbGl6ZWQsIHNlbGYpIC0+XG4gICAgICAkc2NvcGUuaXJpc0luZGV4ID0gbnVsbFxuICAgICAgJHNjb3BlLmxvZ2dpbmdJbiA9IHRydWVcbiAgICAgICRzY29wZS5wcml2YXRlS2V5ID0gJHdpbmRvdy5pcmlzTGliLktleS5mcm9tU3RyaW5nKHByaXZhdGVLZXlTZXJpYWxpemVkKVxuICAgICAgbG9jYWxTdG9yYWdlU2VydmljZS5zZXQoJ2lyaXNLZXknLCBwcml2YXRlS2V5U2VyaWFsaXplZClcbiAgICAgICRzY29wZS5hdXRoZW50aWNhdGlvbi51c2VyID1cbiAgICAgICAgaWRUeXBlOiAna2V5SUQnXG4gICAgICAgIGlkVmFsdWU6ICR3aW5kb3cuaXJpc0xpYi5LZXkuZ2V0SWQoJHNjb3BlLnByaXZhdGVLZXkpXG4gICAgICAkc2NvcGUuYXV0aGVudGljYXRpb24udXNlci51cmwgPSAkc2NvcGUuZ2V0SWRVcmwgJ2tleUlEJywgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnVzZXIuaWRWYWx1ZVxuICAgICAgJHNjb3BlLmxvZ2luTW9kYWwuY2xvc2UoKSBpZiAkc2NvcGUubG9naW5Nb2RhbFxuICAgICAga2V5SUQgPSAkd2luZG93LmlyaXNMaWIuS2V5LmdldElkKCRzY29wZS5wcml2YXRlS2V5KVxuICAgICAgJHNjb3BlLnZpZXdwb2ludCA9IHt0eXBlOiAna2V5SUQnLCB2YWx1ZToga2V5SUR9XG4gICAgICAkc2NvcGUuaWRzLmxpc3QgPSBbXVxuICAgICAgJHNjb3BlLm1zZ3MubGlzdCA9IFtdXG4gICAgICAkc2NvcGUubXNncy5zZWVuID0ge31cbiAgICAgIGkgPSBuZXcgJHdpbmRvdy5pcmlzTGliLkluZGV4KHtndW46ICRzY29wZS5ndW4sIGtleXBhaXI6ICRzY29wZS5wcml2YXRlS2V5LCBzZWxmLCBpcGZzOiAkc2NvcGUuaXBmcywgZGVidWc6IHRydWV9KVxuICAgICAgc2V0SW5kZXgoaSlcbiAgICAgIGkucmVhZHkudGhlbiAtPlxuICAgICAgICAkc2NvcGUubG9nZ2luZ0luID0gZmFsc2VcbiAgICAgICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLmlkZW50aXR5ID0gJHNjb3BlLmlyaXNJbmRleC5nZXQoJ2tleUlEJywga2V5SUQpXG4gICAgICAgICRzY29wZS5hdXRoZW50aWNhdGlvbi5pZGVudGl0eS5ndW4uZ2V0KCdhdHRycycpLm9wZW4gKHZhbCwga2V5LCBtc2csIGV2ZSkgLT5cbiAgICAgICAgICBtdmEgPSAkd2luZG93LmlyaXNMaWIuSWRlbnRpdHkuZ2V0TW9zdFZlcmlmaWVkQXR0cmlidXRlcyh2YWwpXG4gICAgICAgICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLmlkZW50aXR5Lm12YSA9IG12YVxuICAgICAgICAgIGV2ZS5vZmYoKSBpZiBtdmEucHJvZmlsZVBob3RvXG4gICAgICAgIHN0YXJ0QXQgPSBuZXcgRGF0ZSgpXG4gICAgICAgICRzY29wZS5hdXRoZW50aWNhdGlvbi5pZGVudGl0eS5ndW4uZ2V0KCdyZWNlaXZlZCcpLm1hcCgpLm9uY2UgKG0pIC0+XG4gICAgICAgICAgcmV0dXJuIGlmIG0ucHViS2V5ID09ICRzY29wZS52aWV3cG9pbnQudmFsdWVcbiAgICAgICAgICBjb25zb2xlLmxvZyAneW91IGdvdCBhIG1zZydcbiAgICAgICAgICAkd2luZG93LmlyaXNMaWIuTWVzc2FnZS5mcm9tU2lnKG0pLnRoZW4gKG1zZykgLT5cbiAgICAgICAgICAgIGlmIG5ldyBEYXRlKG1zZy5zaWduZWREYXRhLnRpbWVzdGFtcCkgPiBzdGFydEF0XG4gICAgICAgICAgICAgIGF1dGhvciA9IG1zZy5nZXRBdXRob3IoJHNjb3BlLmlyaXNJbmRleClcbiAgICAgICAgICAgICAgJHNjb3BlLnNldElkZW50aXR5TmFtZXMoYXV0aG9yKS50aGVuIChuYW1lKSAtPlxuICAgICAgICAgICAgICAgIE5vdGlmaWNhdGlvblNlcnZpY2UuY3JlYXRlXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIiN7bmFtZX0gc2VudCB5b3UgYSBtZXNzYWdlIVwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSAtPiAkc3RhdGUuZ28gJ2lkZW50aXRpZXMuc2hvdycsIHsgdHlwZTogJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnVzZXIuaWRUeXBlLCB2YWx1ZTogJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnVzZXIuaWRWYWx1ZSB9XG4gICAgICAgICRzY29wZS5hdXRoZW50aWNhdGlvbi5pZGVudGl0eS5ndW4ub24gKGRhdGEpIC0+XG4gICAgICAgICAgaWYgZGF0YS5yZWNlaXZlZFBvc2l0aXZlIGFuZCAkc2NvcGUuYXV0aGVudGljYXRpb24uaWRlbnRpdHkuZGF0YSBhbmQgbm90ICRzY29wZS5hdXRoZW50aWNhdGlvbi5pZGVudGl0eS5kYXRhLnJlY2VpdmVkUG9zaXRpdmVcbiAgICAgICAgICAgIGNvbnNvbGUubG9nICdncmVhdCwgeW91IGdvdCB5b3VyIGZpcnN0IHVwdm90ZSEnXG4gICAgICAgICAgICAjIFRPRE86IG5vdGlmaWNhdGlvblxuICAgICAgICAgICRzY29wZS5hdXRoZW50aWNhdGlvbi5pZGVudGl0eS5kYXRhID0gZGF0YVxuXG4gICAgcHJpdmF0ZUtleSA9IGxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KCdpcmlzS2V5Jykgb3IgbG9jYWxTdG9yYWdlU2VydmljZS5nZXQoJ2lkZW50aWZpS2V5JylcbiAgICBpZiBwcml2YXRlS2V5XG4gICAgICAkc2NvcGUubG9naW5XaXRoS2V5KHByaXZhdGVLZXkpXG4gICAgZWxzZVxuICAgICAgJHNjb3BlLmxvYWREZWZhdWx0SW5kZXgoKVxuXG4gICAgJHNjb3BlLm9wZW5DaGF0TW9kYWwgPSAoKSAtPlxuICAgICAgJHNjb3BlLm9wZW5Nb2RhbCAnY2hhdE1vZGFsJywgeyB0ZW1wbGF0ZVVybDogJ2FwcC9pZGVudGl0aWVzL2NoYXQubW9kYWwuaHRtbCcsIHNpemU6ICdtZCcgfVxuXG4gICAgJHNjb3BlLm9wZW5WaWRlb0NoYXRNb2RhbCA9ICgpIC0+XG4gICAgICAkc2NvcGUub3Blbk1vZGFsICd2aWRlb0NoYXRNb2RhbCcsIHsgdGVtcGxhdGVVcmw6ICdhcHAvaWRlbnRpdGllcy92aWRlby5tb2RhbC5odG1sJywgc2l6ZTogJ21kJyB9XG5cbiAgICAkc2NvcGUub3BlblJlYWRRUk1vZGFsID0gKCkgLT5cbiAgICAgICRzY29wZS5vcGVuTW9kYWwgJ3JlYWRRUk1vZGFsJywgeyB0ZW1wbGF0ZVVybDogJ2FwcC9pZGVudGl0aWVzL3JlYWRxci5tb2RhbC5odG1sJywgc2l6ZTogJ21kJyB9XG5cbiAgICAkc2NvcGUudXBkYXRlSXBmc1BlZXJzID0gKCkgLT5cbiAgICAgICRzY29wZS5pcGZzLnN3YXJtLnBlZXJzIChlcnIsIHBlZXJJbmZvcykgLT5cbiAgICAgICAgaWYgZXJyXG4gICAgICAgICAgY29uc29sZS5lcnJvciAnZmFpbGVkIHRvIGZldGNoIGlwZnMgcGVlcnMnLCBlcnJcbiAgICAgICAgZWxzZVxuICAgICAgICAgICRzY29wZS4kYXBwbHkgLT5cbiAgICAgICAgICAgICRzY29wZS5pcGZzUGVlcnMgPSBwZWVySW5mb3MgaWYgQXJyYXkuaXNBcnJheShwZWVySW5mb3MpXG5cbiAgICAkc2NvcGUuaXBmcy5vbiAncmVhZHknLCAtPlxuICAgICAgJHNjb3BlLmlwZnNSZWFkeSA9IHRydWVcbiAgICAgICR3aW5kb3cuaXBmcyA9ICRzY29wZS5pcGZzXG4gICAgICAkc2NvcGUudXBkYXRlSXBmc1BlZXJzKClcbiAgICAgIHNldEludGVydmFsICRzY29wZS51cGRhdGVJcGZzUGVlcnMsIDUwMDBcblxuICAgICRzY29wZS5sb2NhbFNldHRpbmdzID0gbG9jYWxTdG9yYWdlU2VydmljZS5nZXQoJ2xvY2FsU2V0dGluZ3MnKSB8fCB7fVxuICAgICRzY29wZS5jbG9zZVByb2ZpbGVVcGxvYWROb3RpZmljYXRpb24gPSAtPlxuICAgICAgJHNjb3BlLmxvY2FsU2V0dGluZ3MucHJvZmlsZVVwbG9hZE5vdGlmaWNhdGlvbkNsb3NlZCA9IHRydWVcbiAgICAgIGxvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0KCdsb2NhbFNldHRpbmdzJywgJHNjb3BlLmxvY2FsU2V0dGluZ3MpXG5cbiAgICAkc2NvcGUub3BlblByb2ZpbGVQaG90b1VwbG9hZE1vZGFsID0gLT5cbiAgICAgIHJldHVybiB1bmxlc3MgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLmlkZW50aXR5XG4gICAgICAkc2NvcGUub3BlblVwbG9hZE1vZGFsKCRzY29wZS51cGxvYWRQcm9maWxlUGhvdG8sICdVcGxvYWQgcHJvZmlsZSBwaG90bycsIHRydWUpXG5cbiAgICAkc2NvcGUudXBsb2FkUHJvZmlsZVBob3RvID0gKGJsb2IpIC0+XG4gICAgICAkc2NvcGUudXBsb2FkRmlsZShibG9iKS50aGVuIChmaWxlcykgLT5cbiAgICAgICAgcmVjaXBpZW50ID1cbiAgICAgICAgICBwcm9maWxlUGhvdG86ICcvaXBmcy8nICsgZmlsZXNbMF0ucGF0aFxuICAgICAgICBpZiAkc3RhdGUuaXMgJ2lkZW50aXRpZXMuc2hvdydcbiAgICAgICAgICByZWNpcGllbnRbJHN0YXRlUGFyYW1zLnR5cGVdID0gJHN0YXRlUGFyYW1zLnZhbHVlXG4gICAgICAgIGVsc2VcbiAgICAgICAgICByZWNpcGllbnQua2V5SUQgPSAkc2NvcGUuYXV0aGVudGljYXRpb24udXNlci5pZFZhbHVlXG4gICAgICAgICAgJHNjb3BlLmNsb3NlUHJvZmlsZVVwbG9hZE5vdGlmaWNhdGlvbigpXG4gICAgICAgICR3aW5kb3cuaXJpc0xpYi5NZXNzYWdlLmNyZWF0ZVZlcmlmaWNhdGlvbih7cmVjaXBpZW50fSwgJHNjb3BlLnByaXZhdGVLZXkpLnRoZW4gKG0pIC0+XG4gICAgICAgICAgJHNjb3BlLmhpZGVQcm9maWxlUGhvdG8gPSB0cnVlICMgVGhlcmUncyBhIHdlaXJkIGJ1ZyB3aGVyZSB0aGUgcHJvZmlsZSBpZGVudGljb24gZG9lc24ndCB1cGRhdGVcbiAgICAgICAgICAkc2NvcGUuaXJpc0luZGV4LmFkZE1lc3NhZ2UobSkudGhlbiAtPlxuICAgICAgICAgICAgJHNjb3BlLmhpZGVQcm9maWxlUGhvdG8gPSBmYWxzZVxuICAgICAgICAgICAgaWYgISRzdGF0ZS5pcyAnaWRlbnRpdGllcy5zaG93J1xuICAgICAgICAgICAgICAkc3RhdGUuZ28gJ2lkZW50aXRpZXMuc2hvdycsIHsgdHlwZTogJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnVzZXIuaWRUeXBlLCB2YWx1ZTogJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnVzZXIuaWRWYWx1ZSB9XG4gICAgICAgICAgJHNjb3BlLnVwbG9hZE1vZGFsLmNsb3NlKClcblxuICAgICRzY29wZS5zZXRQYWdlVGl0bGUgPSAodGl0bGUpIC0+XG4gICAgICAkcm9vdFNjb3BlLnBhZ2VUaXRsZSA9ICdJcmlzJ1xuICAgICAgaWYgKHRpdGxlKVxuICAgICAgICAkcm9vdFNjb3BlLnBhZ2VUaXRsZSArPSAnIC0gJyArIHRpdGxlXG5cbiAgICAkc2NvcGUuaXBmc0dldCA9ICh1cmksIG9wdGlvbnMgPSB7fSkgLT5cbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSAocmVzb2x2ZSkgLT5cbiAgICAgICAgZ28gPSAtPlxuICAgICAgICAgICRzY29wZS5pcGZzLmNhdCh1cmkpLnRoZW4gKGZpbGUpIC0+XG4gICAgICAgICAgICBmaWxlID0gJHNjb3BlLmlwZnMudHlwZXMuQnVmZmVyKGZpbGUpXG4gICAgICAgICAgICBpZiBvcHRpb25zLmdldEpzb25cbiAgICAgICAgICAgICAgZmlsZSA9IEpTT04ucGFyc2UoZmlsZS50b1N0cmluZygpKVxuICAgICAgICAgICAgaWYgb3B0aW9ucy5iYXNlNjR0eXBlXG4gICAgICAgICAgICAgIGZpbGUgPSAnZGF0YTonICsgb3B0aW9ucy5iYXNlNjR0eXBlICsgJztiYXNlNjQsJyArIGZpbGUudG9TdHJpbmcoJ2Jhc2U2NCcpXG4gICAgICAgICAgICByZXNvbHZlIGZpbGVcblxuICAgICAgICBpZiAkc2NvcGUuaXBmc1JlYWR5XG4gICAgICAgICAgZ28oKVxuICAgICAgICBlbHNlXG4gICAgICAgICAgJHNjb3BlLmlwZnMub24gJ3JlYWR5JywgLT5cbiAgICAgICAgICAgIGdvKClcblxuICAgICRzY29wZS4kd2F0Y2ggJ25ld01lc3NhZ2UucmF0aW5nJywgKHJhdGluZykgLT5cbiAgICAgIGlmIHJhdGluZyA+IDBcbiAgICAgICAgYWxwaGEgPSAocmF0aW5nIC0gMC41KSAvIDMgLyAxLjI1ICsgMC4yXG4gICAgICAgICRzY29wZS5uZXdNZXNzYWdlLnN0eWxlID0geydib3JkZXItY29sb3InOiAncmdiYSgyMjMsMjQwLDIxNiwnICsgYWxwaGEgKyAnKSd9XG4gICAgICBlbHNlIGlmIHJhdGluZyA8IDBcbiAgICAgICAgYWxwaGEgPSAocmF0aW5nICsgMC41KSAvIC0zIC8gMS4yNSArIDAuMlxuICAgICAgICAkc2NvcGUubmV3TWVzc2FnZS5zdHlsZSA9IHsnYm9yZGVyLWNvbG9yJzogJ3JnYmEoMjQyLDIyMiwyMjIsJyArIGFscGhhICsgJyknfVxuICAgICAgZWxzZVxuICAgICAgICAkc2NvcGUubmV3TWVzc2FnZS5zdHlsZSA9IHsnYm9yZGVyLWNvbG9yJzogJyNmY2Y4ZTMnfVxuXG4gICAgJHNjb3BlLnJlc2V0TXNnID0gLT5cbiAgICAgICRzY29wZS5uZXdNZXNzYWdlID1cbiAgICAgICAgcmF0aW5nOiAxXG4gICAgICAgIGNvbW1lbnQ6ICcnXG4gICAgICAgIGZpbGVzOiBbXVxuICAgICAgJHNjb3BlLm5ld1ZlcmlmaWNhdGlvbiA9XG4gICAgICAgIHR5cGU6ICcnXG4gICAgICAgIHZhbHVlOiAnJ1xuICAgICRzY29wZS5yZXNldE1zZygpXG5cbiAgICAkc2NvcGUudm90ZSA9IChtc2csIHZvdGUpIC0+XG4gICAgICBjb25zb2xlLmxvZyAndm90ZSBhZGRlZCdcbiAgICAgICRzY29wZS5jcmVhdGVNZXNzYWdlKG51bGwsIHt0eXBlOiAndm90ZScsIHJlcGx5VG86IG1zZy5nZXRIYXNoKCksIHZvdGV9KVxuXG4gICAgIyBDcmVhdGUgbmV3IE1lc3NhZ2VcbiAgICAkc2NvcGUuY3JlYXRlTWVzc2FnZSA9IChldmVudCwgbXNnLCBvcHRpb25zID0ge30pIC0+XG4gICAgICAkc2NvcGUuYWRkaW5nTWVzc2FnZSA9IHRydWVcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpIGlmIGV2ZW50XG4gICAgICBkZWxldGUgbXNnLnBvbGxPcHRpb25zIGlmIG1zZy5wb2xsT3B0aW9ucyA9PSBmYWxzZVxuXG4gICAgICBmaWxlVXBsb2FkcyA9IFtdXG4gICAgICBpZiBvcHRpb25zLmZpbGVzICMgdXBsb2FkIHRvIGlwZnNcbiAgICAgICAgbXNnLmF0dGFjaG1lbnRzID0gW11cbiAgICAgICAgYWRkRmlsZSA9IChmaWxlKSAtPlxuICAgICAgICAgICRzY29wZS51cGxvYWRGaWxlKGZpbGUpLnRoZW4gKHJlcykgLT5cbiAgICAgICAgICAgIGlmIHJlcyBhbmQgcmVzLmxlbmd0aCBhbmQgcmVzLmxlbmd0aCA+IDAgYW5kIHJlc1swXS5wYXRoXG4gICAgICAgICAgICAgIG1zZy5hdHRhY2htZW50cy5wdXNoXG4gICAgICAgICAgICAgICAgdXJpOiAnL2lwZnMvJyArIHJlc1swXS5wYXRoXG4gICAgICAgICAgICAgICAgc2l6ZTogZmlsZS5zaXplXG4gICAgICAgICAgICAgICAgdHlwZTogZmlsZS50eXBlXG4gICAgICAgICAgICAgICAgbmFtZTogZmlsZS5uYW1lXG4gICAgICAgIGZpbGVVcGxvYWRzLnB1c2ggYWRkRmlsZShmaWxlKSBmb3IgZmlsZSBpbiBvcHRpb25zLmZpbGVzXG5cbiAgICAgIFByb21pc2UuYWxsKGZpbGVVcGxvYWRzKS50aGVuIC0+XG4gICAgICAgIGNvbnNvbGUubG9nICdtc2cuYXR0YWNobWVudHMnLCBtc2cuYXR0YWNobWVudHNcbiAgICAgICAgIyBDcmVhdGUgbmV3IE1lc3NhZ2Ugb2JqZWN0XG4gICAgICAgIG1lc3NhZ2UgPSBudWxsXG4gICAgICAgIGRlbGV0ZSBtc2cuZmlsZXMgaWYgbXNnLmZpbGVzXG4gICAgICAgIG1zZy5yZWNpcGllbnQgPSBtc2cucmVjaXBpZW50IHx8IHt9XG4gICAgICAgIGlmICRzdGF0ZS5pcyAnaWRlbnRpdGllcy5zaG93J1xuICAgICAgICAgIGlmIG9wdGlvbnMudmVyaWZpZWRBdHRyIGFuZCAkc3RhdGVQYXJhbXMudHlwZSA9PSBvcHRpb25zLnZlcmlmaWVkQXR0ci50eXBlXG4gICAgICAgICAgICBtc2cucmVjaXBpZW50WyRzdGF0ZVBhcmFtcy50eXBlXSA9IFskc3RhdGVQYXJhbXMudmFsdWUsIG9wdGlvbnMudmVyaWZpZWRBdHRyLnZhbHVlXVxuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIG1zZy5yZWNpcGllbnRbJHN0YXRlUGFyYW1zLnR5cGVdID0gJHN0YXRlUGFyYW1zLnZhbHVlXG4gICAgICAgICAgICBtc2cucmVjaXBpZW50W29wdGlvbnMudmVyaWZpZWRBdHRyLnR5cGVdID0gb3B0aW9ucy52ZXJpZmllZEF0dHIudmFsdWUgaWYgb3B0aW9ucy52ZXJpZmllZEF0dHJcbiAgICAgICAgZWxzZSB1bmxlc3MgJHN0YXRlLmlzICdpZGVudGl0aWVzLmNyZWF0ZSdcbiAgICAgICAgICBtc2cucmVjaXBpZW50LmtleUlEID0gJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnVzZXIuaWRWYWx1ZVxuICAgICAgICBpZiBtc2cudHlwZSA9PSAncmF0aW5nJ1xuICAgICAgICAgIG1zZy5tYXhSYXRpbmcgfD0gM1xuICAgICAgICAgIG1zZy5taW5SYXRpbmcgfD0gLTNcbiAgICAgICAgICBtZXNzYWdlID0gJHdpbmRvdy5pcmlzTGliLk1lc3NhZ2UuY3JlYXRlUmF0aW5nKG1zZywgJHNjb3BlLnByaXZhdGVLZXkpXG4gICAgICAgIGVsc2UgaWYgbXNnLnR5cGUgPT0gJ3ZlcmlmaWNhdGlvbidcbiAgICAgICAgICBtZXNzYWdlID0gJHdpbmRvdy5pcmlzTGliLk1lc3NhZ2UuY3JlYXRlVmVyaWZpY2F0aW9uKG1zZywgJHNjb3BlLnByaXZhdGVLZXkpXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBtZXNzYWdlID0gJHdpbmRvdy5pcmlzTGliLk1lc3NhZ2UuY3JlYXRlKG1zZywgJHNjb3BlLnByaXZhdGVLZXkpXG5cbiAgICAgICAgbWVzc2FnZS50aGVuIChtKSAtPlxuICAgICAgICAgICRzY29wZS5pcmlzSW5kZXguYWRkTWVzc2FnZShtKVxuICAgICAgICAgICRzY29wZS5tc2dzLnNlZW5bbS5nZXRIYXNoKCldID0gdHJ1ZVxuICAgICAgICAgICRzY29wZS5wcm9jZXNzTWVzc2FnZXMoW21dKVxuICAgICAgICAudGhlbiAobWVzc2FnZXMpIC0+XG4gICAgICAgICAgJHNjb3BlLm1zZ3MubGlzdC5wdXNoKG1lc3NhZ2VzWzBdKVxuICAgICAgICAgIGlmIG9wdGlvbnMuYWRkVG8gYW5kIG5vdCBvcHRpb25zLmFkZFRvLnNlZW5bbWVzc2FnZXNbMF0uZ2V0SGFzaCgpXVxuICAgICAgICAgICAgb3B0aW9ucy5hZGRUby5saXN0LnB1c2ggbWVzc2FnZXNbMF1cbiAgICAgICAgICAgIG9wdGlvbnMuYWRkVG8uc2VlblttZXNzYWdlc1swXS5nZXRIYXNoKCldID0gdHJ1ZVxuICAgICAgICAgIGlmICRzY29wZS5maWx0ZXJzLnR5cGUgbm90IGluIFttc2cudHlwZSwgbnVsbF1cbiAgICAgICAgICAgICRzY29wZS5maWx0ZXJzLnR5cGUgPSBtc2cudHlwZVxuICAgICAgICAgICRzY29wZS5yZXNldE1zZygpICMgd2h5IG5vdCByZXNldHRpbmcgdXBsb2FkZWQgZmlsZXM/IEQ6XG4gICAgICAgICAgb3B0aW9ucy5maWxlcyA9IFtdIGlmIG9wdGlvbnMuZmlsZXNcbiAgICAgICAgICAkc2NvcGUuYWRkaW5nTWVzc2FnZSA9IGZhbHNlXG4gICAgICAgICAgcmV0dXJuIG1lc3NhZ2VcbiAgICAgICAgLmNhdGNoIChlKSAtPlxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgICAgICAgICAkc2NvcGUuZXJyb3IgPSBlXG4gICAgICAgICAgJHNjb3BlLmFkZGluZ01lc3NhZ2UgPSBmYWxzZVxuICAgICAgICAgIHJldHVybiBtZXNzYWdlXG5cbiAgICAkc2NvcGUuYWRkQXR0cmlidXRlID0gLT5cbiAgICAgICRsb2NhdGlvbi5wYXRoICcjL2lkZW50aXRpZXMvY3JlYXRlLycgKyAkc2NvcGUucXVlcnkudGVybVxuXG4gICAgJHNjb3BlLmxvZ2luID0gLT5cbiAgICAgICRzY29wZS5maWx0ZXJzLm1heERpc3RhbmNlID0gLTEgIyBiZWNhdXNlIHRoZSB1c2VyIGRvZXNuJ3QgaGF2ZSBhIHRydXN0IGluZGV4IHlldFxuXG4gICAgJHNjb3BlLm9wZW5Nb2RhbCA9IChtb2RhbE5hbWUsIG9wdGlvbnMpIC0+XG4gICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbiB7c2l6ZTogJ2xnJywgYW5pbWF0aW9uOiB0cnVlLCBzY29wZTogJHNjb3BlfSwgb3B0aW9uc1xuICAgICAgJHNjb3BlW21vZGFsTmFtZV0gPSAkdWliTW9kYWwub3BlbihvcHRpb25zKVxuICAgICAgJHNjb3BlW21vZGFsTmFtZV0ucmVzdWx0LnRoZW4gKC0+KSwgKC0+KSAjIGF2b2lkIGJhY2tkcm9wIHJlamVjdGlvbiBjb25zb2xlIGVycm9yXG4gICAgICAkc2NvcGVbbW9kYWxOYW1lXS5yZW5kZXJlZC50aGVuIC0+XG4gICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpXG4gICAgICAgIGZvY3VzKG9wdGlvbnMuZm9jdXNUbykgaWYgb3B0aW9ucy5mb2N1c1RvXG4gICAgICAkdHJhbnNpdGlvbnMub25TdGFydCB7fSwgLT5cbiAgICAgICAgJHNjb3BlW21vZGFsTmFtZV0uY2xvc2UoKVxuXG4gICAgJHNjb3BlLm9wZW5Mb2dpbk1vZGFsID0gLT5cbiAgICAgICRzY29wZS5vcGVuTW9kYWwoJ2xvZ2luTW9kYWwnLCB7dGVtcGxhdGVVcmw6ICdhcHAvbWFpbi9sb2dpbi5tb2RhbC5odG1sJywgZm9jdXNUbzogJ25ld1VzZXInfSlcblxuICAgICRzY29wZS5vcGVuVXBsb2FkTW9kYWwgPSAoY2FsbGJhY2ssIG1vZGFsQnV0dG9uVGV4dCwgc3F1YXJpZnkpIC0+XG4gICAgICAkc2NvcGUudXBsb2FkTW9kYWxDYWxsYmFjayA9IGNhbGxiYWNrXG4gICAgICAkc2NvcGUubW9kYWxCdXR0b25UZXh0ID0gbW9kYWxCdXR0b25UZXh0IG9yICdVcGxvYWQnXG4gICAgICAkc2NvcGUuc3F1YXJpZnkgPSBzcXVhcmlmeVxuICAgICAgJHNjb3BlLm9wZW5Nb2RhbCgndXBsb2FkTW9kYWwnLCB7dGVtcGxhdGVVcmw6ICdhcHAvaWRlbnRpdGllcy91cGxvYWQubW9kYWwuaHRtbCd9KVxuXG4gICAgJHNjb3BlLm1zZ3MubGlzdCA9IFtdXG4gICAgJHNjb3BlLm1zZ3Muc2VlbiA9IHt9XG4gICAgJHNjb3BlLmZpbHRlcmVkTXNncyA9IFtdXG4gICAgJHNjb3BlLnNob3dNb3JlTXNncyA9IChjdXJzb3IpIC0+XG4gICAgICBsaW1pdCA9IDIwICMgMTBcbiAgICAgIGlmIGN1cnNvciA9PSB1bmRlZmluZWQgYW5kICRzY29wZS5tc2dzLmxhc3RcbiAgICAgICAgY3Vyc29yID0gJHNjb3BlLm1zZ3MubGFzdFxuICAgICAgY29uc29sZS5sb2cgJ2N1cnNvcicsIGN1cnNvclxuICAgICAgZm91bmQgPSAwXG4gICAgICAkc2NvcGUubG9hZGluZ01zZ3MgPSB0cnVlXG4gICAgICBmaWx0ZXIgPSBmYWxzZVxuICAgICAgIyMjXG4gICAgICBpZiAkc2NvcGUuZmlsdGVycy50eXBlID09IG51bGxcbiAgICAgICAgZmlsdGVyID0gKG0pIC0+XG4gICAgICAgICAgciA9IG0uc2lnbmVkRGF0YS50eXBlIG5vdCBpbiBbJ3ZlcmlmaWNhdGlvbicsICd1bnZlcmlmaWNhdGlvbiddXG4gICAgICAgICAgY29uc29sZS5sb2cgJ2ZpbHRlcmluJywgclxuICAgICAgICAgIHJldHVybiByXG4gICAgICBlbHNlXG4gICAgICAgIHQgPSAkc2NvcGUuZmlsdGVycy50eXBlLnNwbGl0KCc6JylbMF1cbiAgICAgICAgZmlsdGVyID0gKG0pIC0+XG4gICAgICAgICAgciA9IG0uc2lnbmVkRGF0YS50eXBlID09IHRcbiAgICAgICAgICBjb25zb2xlLmxvZyAnZmlsdGVyaW4nLCByXG4gICAgICAgICAgcmV0dXJuIHJcbiAgICAgICMjI1xuICAgICAgcmVzdWx0Rm91bmQgPSAobXNnKSAtPlxuICAgICAgICBjb25zb2xlLmxvZyAnZ290IG1zZycsIG1zZ1xuICAgICAgICBmb3VuZCArPSAxXG4gICAgICAgICRzY29wZS5sb2FkaW5nTXNncyA9IGZhbHNlIGlmIGZvdW5kID49IGxpbWl0XG4gICAgICAgIHJldHVybiBpZiAkc2NvcGUubXNncy5zZWVuW21zZy5nZXRIYXNoKCldXG4gICAgICAgICRzY29wZS5tc2dzLmxhc3QgPSBtc2cuc2lnbmVkRGF0YS50aW1lc3RhbXAgaWYgISRzY29wZS5tc2dzLmxhc3Qgb3IgbXNnLnNpZ25lZERhdGEudGltZXN0YW1wIDwgJHNjb3BlLm1zZ3MubGFzdFxuICAgICAgICAkc2NvcGUubXNncy5zZWVuW21zZy5nZXRIYXNoKCldID0gdHJ1ZVxuICAgICAgICAkc2NvcGUucHJvY2Vzc01lc3NhZ2VzIFttc2ddXG4gICAgICAgICRzY29wZS4kYXBwbHkgLT5cbiAgICAgICAgICAkc2NvcGUubXNncy5saXN0LnB1c2ggbXNnXG5cbiAgICAgICRzY29wZS5maWx0ZXJzLmxpbWl0ICs9IGxpbWl0XG4gICAgICBpZiAkc2NvcGUuZmlsdGVycy5saW1pdCA+ICRzY29wZS5maWx0ZXJlZE1zZ3MubGVuZ3RoXG4gICAgICAgICRzY29wZS5pcmlzSW5kZXguZ2V0TWVzc2FnZXNCeVRpbWVzdGFtcChyZXN1bHRGb3VuZCwgdW5kZWZpbmVkLCBjdXJzb3IpXG5cbiAgICAkc2NvcGUudXBsb2FkRmlsZSA9IChibG9iKSAtPlxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIChyZXNvbHZlLCByZWplY3QpIC0+XG4gICAgICAgIGZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgICAgIGZpbGVSZWFkZXIub25sb2FkID0gKGV2ZW50KSAtPlxuICAgICAgICAgIGJ1ZmZlciA9ICRzY29wZS5pcGZzLnR5cGVzLkJ1ZmZlci5mcm9tKGV2ZW50LnRhcmdldC5yZXN1bHQpXG4gICAgICAgICAgJHNjb3BlLmlwZnMuYWRkIGJ1ZmZlciwgKGVyciwgZmlsZXMpIC0+XG4gICAgICAgICAgICBpZiBlcnJcbiAgICAgICAgICAgICAgcmVqZWN0KCdhZGRpbmcgdG8gaXBmcyBmYWlsZWQnLCBlcnIpXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgIHJlc29sdmUoZmlsZXMpXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nICdkb25lOicsIGVyciwgZmlsZXNcbiAgICAgICAgZmlsZVJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihibG9iKVxuXG4gICAgJHNjb3BlLmNyZWF0ZVVzZXIgPSAobmFtZSkgLT5cbiAgICAgIHJldHVybiBpZiBuYW1lLmluZGV4T2YoJ3snKSAhPSAtMSBvciBuYW1lLmluZGV4T2YoJ30nKSAhPSAtMSAjIHByZXZlbnQgYWNjaWRlbnRhbCBwcml2YXRlIGtleSBwYXN0ZVxuICAgICAgbmFtZSA9IG5hbWUudHJpbSgpXG4gICAgICAkc2NvcGUuY3JlYXRpbmdVc2VyID0gdHJ1ZVxuICAgICAgc2VsZiA9IHtuYW1lfVxuICAgICAgJHdpbmRvdy5pcmlzTGliLktleS5nZW5lcmF0ZSgpXG4gICAgICAudGhlbiAoa2V5KSAtPlxuICAgICAgICAkc2NvcGUucHJpdmF0ZUtleSA9IGtleVxuICAgICAgICAkc2NvcGUucHJpdmF0ZUtleVNlcmlhbGl6ZWQgPSAkd2luZG93LmlyaXNMaWIuS2V5LnRvU3RyaW5nKCRzY29wZS5wcml2YXRlS2V5KVxuICAgICAgICBzZWxmLmtleUlEID0gJHdpbmRvdy5pcmlzTGliLktleS5nZXRJZCgkc2NvcGUucHJpdmF0ZUtleSlcbiAgICAgICAgJHNjb3BlLmxvZ2luV2l0aEtleSgkc2NvcGUucHJpdmF0ZUtleVNlcmlhbGl6ZWQsIHNlbGYpXG4gICAgICAudGhlbiAobXNnKSAtPlxuICAgICAgICAkc2NvcGUuY3JlYXRpbmdVc2VyID0gZmFsc2VcbiAgICAgIC5jYXRjaCAoZSkgLT5cbiAgICAgICAgY29uc29sZS5lcnJvcignZmFpbGVkIHRvIGNyZWF0ZSB1c2VyOicsIGUpXG4gICAgICAgICRzY29wZS5jcmVhdGluZ1VzZXIgPSBmYWxzZVxuXG4gICAgJHNjb3BlLmdlbmVyYXRlS2V5ID0gLT5cbiAgICAgICR3aW5kb3cuaXJpc0xpYi5LZXkuZ2VuZXJhdGUoKS50aGVuIChrZXkpIC0+XG4gICAgICAgICRzY29wZS4kYXBwbHkgLT5cbiAgICAgICAgICAkc2NvcGUucHJpdmF0ZUtleSA9IGtleVxuICAgICAgICAgICRzY29wZS5wcml2YXRlS2V5U2VyaWFsaXplZCA9ICR3aW5kb3cuaXJpc0xpYi5LZXkudG9TdHJpbmcoJHNjb3BlLnByaXZhdGVLZXkpXG5cbiAgICAkc2NvcGUuZG93bmxvYWQgPSAoZmlsZW5hbWUsIGRhdGEsIHR5cGUsIGNoYXJzZXQgPSAndXRmLTgnLCBocmVmKSAtPlxuICAgICAgaGlkZGVuRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgICAgaGlkZGVuRWxlbWVudC5ocmVmID0gaHJlZiBvciBcImRhdGE6I3t0eXBlfTtjaGFyc2V0PSN7Y2hhcnNldH0sI3tlbmNvZGVVUkkoZGF0YSl9XCJcbiAgICAgIGhpZGRlbkVsZW1lbnQudGFyZ2V0ID0gJ19ibGFuaydcbiAgICAgIGhpZGRlbkVsZW1lbnQuZG93bmxvYWQgPSBmaWxlbmFtZVxuICAgICAgaGlkZGVuRWxlbWVudC5jbGljaygpXG5cbiAgICAkc2NvcGUuZG93bmxvYWRUZXh0ID0gKHRleHQpIC0+XG4gICAgICAkc2NvcGUuZG93bmxvYWQoJ2lyaXNfcHJpdmF0ZV9rZXkudHh0JywgdGV4dCwgJ3RleHQvY3N2JywgJ3V0Zi04JylcblxuICAgICRzY29wZS5vcGVuTG9nb3V0TW9kYWwgPSAtPlxuICAgICAgJHNjb3BlLm9wZW5Nb2RhbCgnbG9nb3V0TW9kYWwnLCB7dGVtcGxhdGVVcmw6ICdhcHAvbWFpbi9sb2dvdXQubW9kYWwuaHRtbCd9KVxuXG4gICAgJHNjb3BlLmxvZ291dCA9IC0+XG4gICAgICAkc2NvcGUuaXJpc0luZGV4LnNldE9ubGluZShmYWxzZSlcbiAgICAgICRzY29wZS5maWx0ZXJzLm1heERpc3RhbmNlID0gMFxuICAgICAgJHNjb3BlLnByaXZhdGVLZXlTZXJpYWxpemVkID0gJydcbiAgICAgICRzY29wZS5hdXRoZW50aWNhdGlvbiA9IHt9XG4gICAgICBsb2NhbFN0b3JhZ2VTZXJ2aWNlLmNsZWFyQWxsKClcbiAgICAgICRzdGF0ZS5nbygnaWRlbnRpdGllcy5saXN0JylcbiAgICAgICRzY29wZS5wcml2YXRlS2V5ID0gbnVsbFxuICAgICAgJHNjb3BlLnB1YmxpY0tleSA9IG51bGxcbiAgICAgICRzY29wZS5sb2dvdXRNb2RhbC5jbG9zZSgpXG4gICAgICAkc2NvcGUubG9hZERlZmF1bHRJbmRleCgpXG4gICAgICAkc2NvcGUubG9jYWxTZXR0aW5ncyA9IHt9XG5cbiAgICAkc2NvcGUubXNnRmlsdGVyID0gKG1zZywgaW5kZXgsIGFycmF5KSAtPlxuICAgICAgZGF0YSA9IG1zZy5zaWduZWREYXRhXG4gICAgICByZXR1cm4gZmFsc2UgaWYgbXNnLnNpZ25lZERhdGEucmVwbHlUb1xuICAgICAgaWYgJHNjb3BlLmZpbHRlcnMudHlwZVxuICAgICAgICBpZiAkc2NvcGUuZmlsdGVycy50eXBlLm1hdGNoIC9ecmF0aW5nL1xuICAgICAgICAgIGlmIGRhdGEudHlwZSAhPSAncmF0aW5nJ1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgbmV1dHJhbFJhdGluZyA9IChkYXRhLm1heFJhdGluZyArIGRhdGEubWluUmF0aW5nKSAvIDJcbiAgICAgICAgICBpZiAkc2NvcGUuZmlsdGVycy50eXBlID09ICdyYXRpbmc6cG9zaXRpdmUnIGFuZCBkYXRhLnJhdGluZyA8PSBuZXV0cmFsUmF0aW5nXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICBlbHNlIGlmICRzY29wZS5maWx0ZXJzLnR5cGUgPT0gJ3JhdGluZzpuZWdhdGl2ZScgYW5kIGRhdGEucmF0aW5nID49IG5ldXRyYWxSYXRpbmdcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgIGVsc2UgaWYgJHNjb3BlLmZpbHRlcnMudHlwZSA9PSAncmF0aW5nOm5ldXRyYWwnIGFuZCBkYXRhLnJhdGluZyAhPSBuZXV0cmFsUmF0aW5nXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgZWxzZSBpZiAkc2NvcGUuZmlsdGVycy50eXBlID09ICd2ZXJpZmljYXRpb24nXG4gICAgICAgICAgcmV0dXJuIGRhdGEudHlwZSBpbiBbJ3ZlcmlmaWNhdGlvbicsICd1bnZlcmlmaWNhdGlvbiddXG4gICAgICAgIGVsc2UgaWYgZGF0YS50eXBlICE9ICRzY29wZS5maWx0ZXJzLnR5cGVcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIGlmICRzY29wZS5maWx0ZXJzLm1heERpc3RhbmNlID4gLTFcbiAgICAgICAgaWYgdHlwZW9mIG1zZy5hdXRob3JUcnVzdERpc3RhbmNlICE9ICdudW1iZXInXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIGlmICRzY29wZS5maWx0ZXJzLm1heERpc3RhbmNlID4gMCBhbmQgbXNnLmF1dGhvclRydXN0RGlzdGFuY2UgPiAkc2NvcGUuZmlsdGVycy5tYXhEaXN0YW5jZVxuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICBpZiAkc2NvcGUuZmlsdGVycy5tYXhEaXN0YW5jZSA9PSAwIGFuZCBtc2cuYXV0aG9yVHJ1c3REaXN0YW5jZSA9PSA5OVxuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgcmV0dXJuIHRydWVcblxuICAgICRzY29wZS5yZW1vdmVGb2N1cyA9IChldmVudCkgLT5cbiAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuYmx1cigpXG5cbiAgICAkc2NvcGUuc2V0TXNnUmF3RGF0YSA9IChtc2cpIC0+XG4gICAgICBzaG93UmF3RGF0YSA9XG4gICAgICAgIGhhc2g6IG1zZy5oYXNoXG4gICAgICAgIGRhdGE6IG1zZy5zaWduZWREYXRhXG4gICAgICAgIHByaW9yaXR5OiBtc2cucHJpb3JpdHlcbiAgICAgICAgandzOiBtc2cuandzXG4gICAgICBtc2cuc3RyRGF0YSA9IEpTT04uc3RyaW5naWZ5KHNob3dSYXdEYXRhLCB1bmRlZmluZWQsIDIpXG5cbiAgICAkc2NvcGUuc2hhcmVNZXNzYWdlID0gKG1zZywgY29tbWVudCkgLT5cbiAgICAgICRzY29wZS5jcmVhdGVNZXNzYWdlKG51bGwsIHsgdHlwZTogJ3Bvc3QnLCBzaGFyZWRNc2c6IG1zZy5nZXRIYXNoKCksIGNvbW1lbnQgfSkudGhlbiAocikgLT5cbiAgICAgICAgbXNnLnNoYXJlcyA9IG1zZy5zaGFyZXMgb3Ige31cbiAgICAgICAgbXNnLnNoYXJlc1tyLmdldEhhc2goKV0gPSByXG4gICAgICAgIG1zZy5zaGFyZXNBcnIgPSBtc2cuc2hhcmVzQXJyIG9yIFtdXG4gICAgICAgIG1zZy5zaGFyZXNBcnIucHVzaChyKVxuICAgICAgJHNjb3BlLnNoYXJlTW9kYWwuY2xvc2UoKVxuXG4gICAgJHNjb3BlLm1zZ1V0aWxzID1cbiAgICAgIGxpa2U6IChtc2cpIC0+XG4gICAgICAgIGlmIG1zZy5saWtlZFxuICAgICAgICAgIG1zZy5saWtlZCA9IGZhbHNlXG4gICAgICAgICAgbXNnLmxpa2VzID0gaWYgbXNnLmxpa2VzIHRoZW4gbXNnLmxpa2VzIC0gMSBlbHNlIDBcbiAgICAgICAgICAkc2NvcGUuaXJpc0luZGV4LnNldFJlYWN0aW9uKG1zZywgbnVsbClcbiAgICAgICAgZWxzZVxuICAgICAgICAgIG1zZy5saWtlZCA9IHRydWVcbiAgICAgICAgICBtc2cubGlrZXMgPSBpZiBtc2cubGlrZXMgdGhlbiBtc2cubGlrZXMgKyAxIGVsc2UgMVxuICAgICAgICAgICRzY29wZS5pcmlzSW5kZXguc2V0UmVhY3Rpb24obXNnLCAnbGlrZScpXG4gICAgICBzaGFyZTogKG1zZykgLT5cbiAgICAgICAgJHNjb3BlLm1lc3NhZ2UgPSBtc2dcbiAgICAgICAgJHNjb3BlLm9wZW5Nb2RhbCAnc2hhcmVNb2RhbCcsIHsgdGVtcGxhdGVVcmw6ICdhcHAvbWVzc2FnZXMvc2hhcmUubW9kYWwuaHRtbCcsIHNpemU6ICdtZCcgfVxuICAgICAgcmVwbHlUbzogKG1zZywgcmVwbHkpIC0+XG4gICAgICAgICRzY29wZS5jcmVhdGVNZXNzYWdlKG51bGwsIHtcbiAgICAgICAgICB0eXBlOiAncG9zdCcsXG4gICAgICAgICAgcmVwbHlUbzogbXNnLmdldEhhc2goKVxuICAgICAgICAgIGNvbW1lbnQ6IHJlcGx5XG4gICAgICAgIH0pLnRoZW4gKHIpIC0+XG4gICAgICAgICAgbXNnLnJlcGxpZXMgPSBtc2cucmVwbGllcyBvciB7fVxuICAgICAgICAgIG1zZy5yZXBsaWVzW3IuZ2V0SGFzaCgpXSA9IHJcbiAgICAgICAgICBtc2cucmVwbGllc0FyciA9IG1zZy5yZXBsaWVzQXJyIG9yIFtdXG4gICAgICAgICAgbXNnLnJlcGxpZXNBcnIucHVzaChyKVxuXG4gICAgJHNjb3BlLm9wZW5NZXNzYWdlID0gKGV2ZW50LCBtZXNzYWdlLCBzaXplKSAtPlxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCkgaWYgZXZlbnRcbiAgICAgIHQgPSBldmVudC50YXJnZXRcbiAgICAgIHJldHVybiBpZiBhbmd1bGFyLmVsZW1lbnQodCkuY2xvc2VzdCgnYScpLmxlbmd0aFxuICAgICAgJHNjb3BlLnNldE1zZ1Jhd0RhdGEobWVzc2FnZSlcbiAgICAgICRzY29wZS5tZXNzYWdlID0gbWVzc2FnZVxuICAgICAgIyBUT0RPOiBjaGVjayBzaWdcbiAgICAgICRzY29wZS5tZXNzYWdlLnJlY2lwaWVudCA9ICRzY29wZS5tZXNzYWdlLmdldFJlY2lwaWVudCgkc2NvcGUuaXJpc0luZGV4KVxuICAgICAgJHNjb3BlLm1lc3NhZ2UucmVjaXBpZW50Lmd1bi5nZXQoJ2F0dHJzJykub3BlbiAoZCkgLT5cbiAgICAgICAgbXZhID0gJHdpbmRvdy5pcmlzTGliLklkZW50aXR5LmdldE1vc3RWZXJpZmllZEF0dHJpYnV0ZXMoZClcbiAgICAgICAgaWYgbXZhLm5hbWVcbiAgICAgICAgICAkc2NvcGUuJGFwcGx5IC0+ICRzY29wZS5tZXNzYWdlLnJlY2lwaWVudF9uYW1lID0gbXZhLm5hbWUuYXR0cmlidXRlLnZhbHVlXG4gICAgICAgIGVsc2UgaWYgbXZhLm5pY2tuYW1lXG4gICAgICAgICAgJHNjb3BlLiRhcHBseSAtPiAkc2NvcGUubWVzc2FnZS5yZWNpcGllbnRfbmFtZSA9IG12YS5uaWNrbmFtZS5hdHRyaWJ1dGUudmFsdWVcbiAgICAgICRzY29wZS5tZXNzYWdlLnNpZ25lcktleUlEID0gJHNjb3BlLm1lc3NhZ2UuZ2V0U2lnbmVyS2V5SUQoKVxuICAgICAgJHNjb3BlLm1lc3NhZ2UudmVyaWZpZWRCeSA9ICRzY29wZS5pcmlzSW5kZXguZ2V0KCdrZXlJRCcsICRzY29wZS5tZXNzYWdlLnNpZ25lcktleUlEKVxuICAgICAgJHNjb3BlLm1lc3NhZ2UudmVyaWZpZWRCeUF0dHIgPSBuZXcgJHdpbmRvdy5pcmlzTGliLkF0dHJpYnV0ZSgna2V5SUQnLCAkc2NvcGUubWVzc2FnZS5zaWduZXJLZXlJRClcbiAgICAgICRzY29wZS5vcGVuTW9kYWwoJ2NoYXRNb2RhbCcsIHt0ZW1wbGF0ZVVybDogJ2FwcC9tZXNzYWdlcy9zaG93Lm1vZGFsLmh0bWwnfSlcblxuICAgIHVubGVzcyAkc2NvcGUuZmlsdGVyc1xuICAgICAgJHNjb3BlLmZpbHRlcnMgPSBPYmplY3QuYXNzaWduIHt9LCBjb25maWcuZGVmYXVsdEZpbHRlcnNcblxuICAgICRzY29wZS5pc0NvbGxhcHNlZCA9IGZhbHNlXG4gICAgIyAkc2NvcGUubWVudSA9IE1lbnVzLmdldE1lbnUoJ3RvcGJhcicpXG5cbiAgICAkc2NvcGUudG9nZ2xlQ29sbGFwc2libGVNZW51ID0gLT5cbiAgICAgICRzY29wZS5pc0NvbGxhcHNlZCA9ICEkc2NvcGUuaXNDb2xsYXBzZWRcblxuICAgICRzY29wZS5wcm9jZXNzTWVzc2FnZXMgPSAobWVzc2FnZXMsIG1zZ09wdGlvbnMgPSB7fSwgb3B0aW9ucyA9IHt9KSAtPlxuICAgICAgYW5ndWxhci5mb3JFYWNoIG1lc3NhZ2VzLCAobXNnLCBrZXkpIC0+XG4gICAgICAgIG1zZ1trXSA9IHYgZm9yIGssIHYgb2YgbXNnT3B0aW9uc1xuICAgICAgICBtc2cuYXV0aG9yID0gbXNnLmdldEF1dGhvcigkc2NvcGUuaXJpc0luZGV4KVxuICAgICAgICBtc2cuYXV0aG9yLmd1bi5nZXQoJ3RydXN0RGlzdGFuY2UnKS5vbiAoZCkgLT4gbXNnLmF1dGhvclRydXN0RGlzdGFuY2UgPSBkXG4gICAgICByZXR1cm4gbWVzc2FnZXNcblxuICAgIHNjcm9sbFRvID0gKGVsKSAtPlxuICAgICAgaWYgIWVsXG4gICAgICAgIHJldHVyblxuICAgICAgcG9zID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgIGlmIHBvcy50b3BcbiAgICAgICAgaWYgcG9zLnRvcCAtIDYwIDwgJHdpbmRvdy5wYWdlWU9mZnNldFxuICAgICAgICAgICR3aW5kb3cuc2Nyb2xsVG8gMCwgcG9zLnRvcCAtIDYwXG4gICAgICAgIGVsc2UgaWYgcG9zLmJvdHRvbSA+ICR3aW5kb3cucGFnZVlPZmZzZXQgKyAoJHdpbmRvdy5pbm5lckhlaWdodCBvciBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KVxuICAgICAgICAgICR3aW5kb3cuc2Nyb2xsVG8gMCwgcG9zLmJvdHRvbSAtICgkd2luZG93LmlubmVySGVpZ2h0IG9yIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpICsgMTVcbiAgICAgIHJldHVyblxuXG4gICAgIyBzaG91bGQgYmUgbW92ZWQgdG8gaXJpcy1saWI/XG4gICAgJHNjb3BlLnNldElkZW50aXR5TmFtZXMgPSAoaSwgaHRtbFNhZmUsIHNldFRpdGxlKSAtPlxuICAgICAgaS53ZWxsVmVyaWZpZWQgPSBmYWxzZVxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIChyZXNvbHZlKSAtPlxuICAgICAgICBpLmd1bi5nZXQoJ2F0dHJzJykub3BlbiAoYXR0cnMpIC0+XG4gICAgICAgICAgJHNjb3BlLiRhcHBseSAtPlxuICAgICAgICAgICAgbXZhID0gJHdpbmRvdy5pcmlzTGliLklkZW50aXR5LmdldE1vc3RWZXJpZmllZEF0dHJpYnV0ZXMoYXR0cnMpXG4gICAgICAgICAgICBpZiBtdmEubmFtZVxuICAgICAgICAgICAgICBpLnByaW1hcnlOYW1lID0gbXZhLm5hbWUuYXR0cmlidXRlLnZhbHVlXG4gICAgICAgICAgICAgIGkuaGFzUHJvcGVyTmFtZSA9IHRydWVcbiAgICAgICAgICAgICAgaS53ZWxsVmVyaWZpZWQgPSB0cnVlIGlmIG12YS5uYW1lLndlbGxWZXJpZmllZFxuICAgICAgICAgICAgZWxzZSBpZiBtdmEubmlja25hbWVcbiAgICAgICAgICAgICAgaS5wcmltYXJ5TmFtZSA9IG12YS5uaWNrbmFtZS5hdHRyaWJ1dGUudmFsdWVcbiAgICAgICAgICAgICAgaS5oYXNQcm9wZXJOYW1lID0gdHJ1ZVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICBhID0gT2JqZWN0LnZhbHVlcyhhdHRycylbMF1cbiAgICAgICAgICAgICAgaS5wcmltYXJ5TmFtZSA9IGEudmFsdWVcbiAgICAgICAgICAgICAgaS5wcmltYXJ5TmFtZSA9IGkucHJpbWFyeU5hbWUuc2xpY2UoMCw2KSArICcuLi4nIGlmIGEudHlwZSBpbiBbJ2tleUlEJywgJ3V1aWQnXVxuICAgICAgICAgICAgaWYgaS5wcmltYXJ5TmFtZVxuICAgICAgICAgICAgICBpZiBtdmEubmlja25hbWUgYW5kIG12YS5uaWNrbmFtZS5hdHRyaWJ1dGUudmFsdWUgIT0gaS5wcmltYXJ5TmFtZVxuICAgICAgICAgICAgICAgIGkubmlja25hbWUgPSBtdmEubmlja25hbWUuYXR0cmlidXRlLnZhbHVlXG4gICAgICAgICAgICAgICAgaS5uaWNrbmFtZSA9IGkubmlja25hbWUucmVwbGFjZSgnPCcsICcmbHQ7JykgaWYgaHRtbFNhZmVcbiAgICAgICAgICAgICAgaS5wcmltYXJ5TmFtZSA9IGkucHJpbWFyeU5hbWUucmVwbGFjZSgnPCcsICcmbHQ7JykgaWYgaHRtbFNhZmVcbiAgICAgICAgICAgICRzY29wZS5zZXRQYWdlVGl0bGUgaS5wcmltYXJ5TmFtZSBpZiBzZXRUaXRsZVxuICAgICAgICAgICAgcmVzb2x2ZSBpLnByaW1hcnlOYW1lXG5cbiAgICAkc2NvcGUuc2VhcmNoS2V5ZG93biA9IChldmVudCkgLT5cbiAgICAgIHN3aXRjaCAoaWYgZXZlbnQgdGhlbiBldmVudC53aGljaCBlbHNlIC0xKVxuICAgICAgICB3aGVuIDM4XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGlmICRzY29wZS5pZHMuYWN0aXZlS2V5ID4gLTFcbiAgICAgICAgICAgICRzY29wZS5hZGRFbnRyeUFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgICAkc2NvcGUuaWRzLmFjdGl2ZUtleS0tXG4gICAgICAgICAgICBpZCA9IGlmICRzY29wZS5pZHMuYWN0aXZlS2V5ID4gLTEgdGhlbiAncmVzdWx0JyArICRzY29wZS5pZHMuYWN0aXZlS2V5IGVsc2UgJ2NyZWF0ZUlkUm93J1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnNjcm9sbEludG9WaWV3KClcbiAgICAgICAgd2hlbiA0MFxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICBpZiAoJHNjb3BlLmlkcy5hY3RpdmVLZXkgPCAoJHNjb3BlLmlkcy5saXN0Lmxlbmd0aCkgLSAxKSBhbmQgJHNjb3BlLmlkcy5hY3RpdmVLZXkgPCAkc2NvcGUuZmlsdGVycy5saW1pdFxuICAgICAgICAgICAgJHNjb3BlLmlkcy5hY3RpdmVLZXkrK1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQnICsgJHNjb3BlLmlkcy5hY3RpdmVLZXkpLnNjcm9sbEludG9WaWV3KClcbiAgICAgICAgd2hlbiAxM1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICBpZiAkc2NvcGUuaWRzLmFjdGl2ZUtleSA9PSAtMVxuICAgICAgICAgICAgJHN0YXRlLmdvICdpZGVudGl0aWVzLmNyZWF0ZSdcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0JyArICRzY29wZS5pZHMuYWN0aXZlS2V5KS5jbGljaygpXG4gICAgICAgIHdoZW4gLTFcbiAgICAgICAgICBjbGVhclRpbWVvdXQgJHNjb3BlLnRpbWVyXG4gICAgICAgICAgJHNjb3BlLnF1ZXJ5LnRlcm0gPSAnJ1xuICAgICAgICAgICRzY29wZS5zZWFyY2goKVxuICAgICAgICB3aGVuIDMzLCAzNCwgMzUsIDM2LCAzNywgMzlcbiAgICAgICAgZWxzZVxuICAgICAgICAgIGVsID0gYW5ndWxhci5lbGVtZW50KGV2ZW50LmN1cnJlbnRUYXJnZXQpXG4gICAgICAgICAgY2xlYXJUaW1lb3V0ICRzY29wZS50aW1lclxuICAgICAgICAgIHdhaXQgPSBzZXRUaW1lb3V0KCgtPlxuICAgICAgICAgICAgJHNjb3BlLnF1ZXJ5LnRlcm0gPSBlbC52YWwoKVxuICAgICAgICAgICAgJHNjb3BlLnNlYXJjaCgpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICApLCAzMDApXG4gICAgICAgICAgJHNjb3BlLnRpbWVyID0gd2FpdFxuICAgICAgICAgIGJyZWFrXG5cbiAgICAkc2NvcGUuZHJvcGRvd25TZWFyY2hTZWxlY3QgPSAoaXRlbSkgLT5cbiAgICAgICRzdGF0ZS5nbygnaWRlbnRpdGllcy5zaG93JywgeyB0eXBlOiBpdGVtLmxpbmtUby50eXBlLCB2YWx1ZTogaXRlbS5saW5rVG8udmFsdWUgfSlcbiAgICAgICRzY29wZS5xdWVyeS50ZXJtID0gJydcblxuICAgICRzY29wZS5hZGRHdW5QZWVyID0gKHVybCkgLT5cbiAgICAgICRzY29wZS5ndW4ub3B0KHtwZWVyczogW3VybF19KTsgIyBUT0RPOiB2YWxpZGF0ZSB1cmxcblxuICAgICRzY29wZS5yZW1vdmVHdW5QZWVyID0gKHVybCkgLT5cbiAgICAgIHBlZXIgPSAkc2NvcGUuZ3VuLl8ub3B0LnBlZXJzW3VybF0gIyBnZXQgdGhlIHBlZXIgeW91IHdhbnRcbiAgICAgIHBlZXIudXJsID0gcGVlci5pZCA9IG51bGwgIyB0aGlzIHByZXZlbnRzIHJlY29ubmVjdGluZyB0byBVUkxcbiAgICAgIHBlZXIud2lyZS5jbG9zZSgpICMgaWYgd2Vic29ja2V0IGludGVyZmFjZVxuICAgICAgZGVsZXRlICRzY29wZS5ndW4uXy5vcHQucGVlcnNbdXJsXSAjIHJlbW92ZSBmcm9tIHBlZXIgbGlzdFxuXG4gICAgJHNjb3BlLmFkZElwZnNQZWVyID0gKHVybCkgLT5cbiAgICAgICRzY29wZS5pcGZzLmJvb3RzdHJhcC5hZGQgdXJsXG4gICAgICAkc2NvcGUuaXBmcy5zd2FybS5jb25uZWN0KHVybCkudGhlbiAtPlxuICAgICAgICAkc2NvcGUudXBkYXRlSXBmc1BlZXJzKClcblxuICAgICRzY29wZS5hZGREZWZhdWx0SXBmc1BlZXJzID0gLT5cbiAgICAgICRzY29wZS5pcGZzLmJvb3RzdHJhcC5hZGQoJycsIHtkZWZhdWx0OiB0cnVlfSkudGhlbiAtPiAjIFRPRE86IGVycm9yc1xuICAgICAgICAkc2NvcGUudXBkYXRlSXBmc1BlZXJzKClcblxuICAgICRzY29wZS5yZW1vdmVJcGZzUGVlciA9ICh1cmwpIC0+XG4gICAgICAkc2NvcGUuaXBmcy5ib290c3RyYXAucm0gdXJsXG4gICAgICAkc2NvcGUuaXBmcy5zd2FybS5kaXNjb25uZWN0KHVybCkudGhlbiAtPlxuICAgICAgICAkc2NvcGUudXBkYXRlSXBmc1BlZXJzKClcbl1cbiJdfQ==

(function() {
  'use strict';
  // Identities controller
  angular.module('irisAngular').controller('IdentitiesController', [
    '$scope',
    '$state',
    '$rootScope',
    '$window',
    '$stateParams',
    '$transitions',
    '$location',
    '$http',
    '$q',
    '$timeout',
    '$uibModal',
    // 'Authentication'
    'config',
    'localStorageService',
    'focus',
    'NotificationService',
    function($scope,
    $state,
    $rootScope,
    $window,
    $stateParams,
    $transitions,
    $location,
    $http,
    $q,
    $timeout,
    $uibModal,
    config,
    localStorageService,
    focus,
    NotificationService) { //, Authentication
      var load,
    thumbsDownObj,
    thumbsUpObj;
      $scope.newEntry = {};
      $scope.activeTab = 1;
      $scope.activateTab = function(tabId) {
        return $scope.activeTab = tabId;
      };
      $scope.sent = [];
      $scope.received = {
        list: [],
        seen: {}
      };
      $scope.attributes = [];
      thumbsUpObj = {};
      thumbsDownObj = {};
      $scope.thumbsUp = [];
      $scope.thumbsDown = [];
      $scope.verifications = [];
      if ($stateParams.search) {
        $scope.query.term = $stateParams.search;
      }
      $scope.newVerification = {
        type: '',
        value: ''
      };
      $scope.collapseLevel = {};
      $scope.collapseFilters = $window.innerWidth < 992;
      $scope.slider = {
        options: {
          floor: -3,
          ceil: 3,
          hidePointerLabels: true,
          hideLimitLabels: true,
          disableAnimation: true
        }
      };
      if ($location.search().share) {
        $scope.share = true;
      }
      if ($scope.query.term.length && $state.is('identities.list')) {
        $scope.query.term = '';
        $scope.search();
      }
      if ($state.is('identities.show')) {
        $scope.filters.maxDistance = 0;
        $scope.filters.type = null;
      }
      $scope.addEntry = function(event,
    entry) {
        var linkTo,
    params;
        if (entry.email) {
          linkTo = {
            type: 'email',
            value: entry.email
          };
        } else if (entry.url) {
          linkTo = {
            type: 'url',
            value: entry.url
          };
        } else {
          linkTo = $window.irisLib.Attribute.getUuid();
          entry.uuid = linkTo.value;
        }
        params = {
          type: 'verification',
          recipient: entry
        };
        return $scope.createMessage(event,
    params).then(function(response) {
          return $state.go('identities.show',
    linkTo);
        },
    function(error) {
          return console.log("error",
    error);
        });
      };
      $scope.guessAttributeType = function() {
        if ($scope.newVerification.value.length) {
          $scope.newVerification.type = $window.irisLib.Attribute.guessTypeOf($scope.newVerification.value);
          if (!$scope.newVerification.type) {
            if (!$scope.newVerification.value.match(/\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\,|\.|\>|\?|\/|\""|\;|\:/)) {
              return $scope.newVerification.type = 'name';
            }
          }
        } else {
          return $scope.newVerification.type = '';
        }
      };
      $scope.addName = function(name) {
        var recipient;
        if (name) {
          recipient = {name};
          recipient[$scope.idType] = $scope.idValue;
          $window.irisLib.Message.createVerification({recipient},
    $scope.privateKey).then(function(m) {
            return $scope.irisIndex.addMessage(m);
          });
          return $scope.nameAdded = true;
        } else {
          $scope.addingName = true;
          return focus('addNameFocus');
        }
      };
      $scope.getAttributes = function() {
        return $scope.identity.gun.get('attrs').open(function(attrs) {
          var a,
    alpha,
    attributes,
    c,
    i,
    len,
    mostConfirmations,
    percentage,
    ref;
          attributes = attrs || [];
          if (attributes.length > 0) {
            c = attributes[0];
            mostConfirmations = c.verifications;
          } else {
            mostConfirmations = 1;
          }
          $scope.attributes = Object.values(attributes);
          ref = $scope.attributes;
          for (i = 0, len = ref.length; i < len; i++) {
            a = ref[i];
            if (!(a.type && a.value)) {
              return;
            }
            a.attr = new $window.irisLib.Attribute(a.type,
    a.value);
            a.isCurrent = new $window.irisLib.Attribute($scope.idType,
    $scope.idValue).equals(a.attr);
            a.order = a.isCurrent ? 2e308 : (a.verifications || a.conf) - 2 * (a.unverifications || a.ref);
            if (a.isCurrent) {
              a.rowClass = 'cursor-default';
            }
            switch (a.type) {
              case 'email':
                a.iconStyle = 'glyphicon glyphicon-envelope';
                a.btnStyle = 'btn-success';
                a.link = 'mailto:' + a.value;
                a.quickContact = true;
                break;
              case 'bitcoin_address':
              case 'bitcoin':
                a.iconStyle = 'fa fa-bitcoin';
                a.btnStyle = 'btn-primary';
                a.link = 'https://blockchain.info/address/' + a.value;
                a.quickContact = true;
                break;
              case 'gpg_fingerprint':
              case 'gpg_keyid':
                a.iconStyle = 'fa fa-key';
                a.btnStyle = 'btn-default';
                a.link = 'https://pgp.mit.edu/pks/lookup?op=get&search=0x' + a.value;
                break;
              case 'account':
                a.iconStyle = 'fa fa-at';
                break;
              case 'nickname':
                $scope.identity.hasProperName = true;
                a.iconStyle = 'glyphicon glyphicon-font';
                break;
              case 'name':
                $scope.identity.hasProperName = true;
                a.iconStyle = 'glyphicon glyphicon-font';
                break;
              case 'tel':
              case 'phone':
                a.iconStyle = 'glyphicon glyphicon-earphone';
                a.btnStyle = 'btn-success';
                a.link = 'tel:' + a.value;
                a.quickContact = true;
                break;
              case 'keyID':
                a.iconStyle = 'fa fa-key';
                break;
              case 'coverPhoto':
                if (a.value.match(/^\/ipfs\/[1-9A-Za-z]{40,60}$/)) {
                  $scope.ipfsGet(a.value).then(function(coverPhoto) {
                    return $scope.coverPhoto = $scope.coverPhoto || {
                      'background-image': 'url(data:image;base64,' + coverPhoto.toString('base64') + ')'
                    };
                  });
                }
                break;
              case 'url':
                a.link = a.value;
                if (a.value.indexOf('facebook.com/') > -1) {
                  a.iconStyle = 'fa fa-facebook';
                  a.btnStyle = 'btn-facebook';
                  a.link = a.value;
                  a.linkName = a.value.split('facebook.com/')[1];
                  a.quickContact = true;
                } else if (a.value.indexOf('twitter.com/') > -1) {
                  a.iconStyle = 'fa fa-twitter';
                  a.btnStyle = 'btn-twitter';
                  a.link = a.value;
                  a.linkName = a.value.split('twitter.com/')[1];
                  a.quickContact = true;
                } else if (a.value.indexOf('plus.google.com/') > -1) {
                  a.iconStyle = 'fa fa-google-plus';
                  a.btnStyle = 'btn-google-plus';
                  a.link = a.value;
                  a.linkName = a.value.split('plus.google.com/')[1];
                  a.quickContact = true;
                } else if (a.value.indexOf('linkedin.com/') > -1) {
                  a.iconStyle = 'fa fa-linkedin';
                  a.btnStyle = 'btn-linkedin';
                  a.link = a.value;
                  a.linkName = a.value.split('linkedin.com/')[1];
                  a.quickContact = true;
                } else if (a.value.indexOf('github.com/') > -1) {
                  a.iconStyle = 'fa fa-github';
                  a.btnStyle = 'btn-github';
                  a.link = a.value;
                  a.linkName = a.value.split('github.com/')[1];
                  a.quickContact = true;
                } else {
                  a.iconStyle = 'glyphicon glyphicon-link';
                  a.btnStyle = 'btn-default';
                }
                break;
              default:
                a.iconStyle = 'glyphicon glyphicon-star';
            }
            if (a.value && a.value.match(/^\/ipfs\/[1-9A-Za-z]{40,60}$/)) {
              a.link = 'https://ipfs.io' + a.value;
              a.linkName = a.value;
              a.iconStyle = 'glyphicon glyphicon-link';
              a.btnStyle = 'btn-default';
            }
            if (a.verifications + a.unverifications > 0) {
              percentage = a.verifications * 100 / (a.verifications + a.unverifications);
              if (percentage >= 80) {
                alpha = a.verifications / mostConfirmations * 0.7 + 0.3;
              // a.rowStyle = 'background-color: rgba(223,240,216,' + alpha + ')'
              } else if (percentage >= 60) {
                a.rowClass = 'warning';
              } else {
                a.rowClass = 'danger';
              }
            }
            $scope.hasQuickContacts = $scope.hasQuickContacts || a.quickContact;
          }
          return $scope.attributesLength = $scope.attributes.length;
        });
      };
      $scope.attributeClicked = function(event,
    attr) {
        var a,
    hasAttr1,
    hasAttr2,
    i,
    j,
    len,
    len1,
    msg,
    ref,
    ref1,
    ref2;
        if (attr.connectingMsgs) {
          return attr.collapse = !attr.collapse;
        } else {
          attr.connectingMsgs = [];
          ref = $scope.received.list;
          for (i = 0, len = ref.length; i < len; i++) {
            msg = ref[i];
            if ((ref1 = msg.signedData.type) !== 'verification' && ref1 !== 'unverification' && ref1 !== 'verify_identity' && ref1 !== 'unverify_identity') {
              continue;
            }
            hasAttr1 = hasAttr2 = false;
            ref2 = msg.getRecipientArray();
            for (j = 0, len1 = ref2.length; j < len1; j++) {
              a = ref2[j];
              hasAttr1 = hasAttr1 || a.type === attr.type && a.value === attr.value;
              hasAttr2 = hasAttr2 || a.type === $scope.idType && a.value === $scope.idValue;
              if (hasAttr1 && hasAttr2) {
                attr.connectingMsgs.push(msg);
                break;
              }
            }
          }
          return attr.collapse = !attr.collapse;
        }
      };
      $scope.getSentMsgs = function() {
        var callback,
    cursor;
        if (!($scope.identity && $scope.irisIndex)) {
          return;
        }
        $scope.sent = [];
        cursor = $scope.sent.length ? $scope.sent[$scope.sent.length - 1].cursor : '';
        callback = function(msg) {
          $scope.processMessages([msg],
    {
            authorIsSelf: true
          });
          return $scope.sent.push(msg);
        };
        return $scope.identity.sent({callback});
      };
      $scope.getReceivedMsgs = function() {
        var callback,
    cursor;
        if (!($scope.identity && $scope.irisIndex)) {
          return;
        }
        $scope.received = {
          list: [],
          seen: {}
        };
        cursor = $scope.received.list.length ? $scope.received.list[$scope.received.list.length - 1].cursor : '';
        callback = function(msg) {
          if ($scope.received.seen[msg.getHash()]) {
            return;
          }
          $scope.processMessages([msg],
    {
            recipientIsSelf: true
          });
          return $scope.$apply(function() {
            var a,
    i,
    len,
    ref;
            if (msg.isPositive()) {
              if (!msg.linkToAuthor) {
                msg.authorArray = msg.getAuthorArray();
                ref = msg.authorArray;
                for (i = 0, len = ref.length; i < len; i++) {
                  a = ref[i];
                  if (!msg.linkToAuthor) {
                    msg.linkToAuthor = a;
                  }
                }
              }
              if ($scope.thumbsUp.length < 12 && !thumbsUpObj[JSON.stringify(msg.signedData.author)]) {
                thumbsUpObj[JSON.stringify(msg.signedData.author)] = true;
                $scope.thumbsUp.push(msg);
                $scope.hasThumbsUp = true;
              }
            } else if (msg.isNegative() && $scope.thumbsDown.length < 12 && !thumbsDownObj[JSON.stringify(msg.signedData.author)]) {
              thumbsDownObj[JSON.stringify(msg.signedData.author)] = true;
              $scope.thumbsDown.push(msg);
              $scope.hasThumbsDown = true;
            }
            $scope.received.list.push(msg);
            return $scope.received.seen[msg.getHash()] = true;
          });
        };
        return $scope.identity.received({callback,
    cursor});
      };
      $scope.setFilters = function(filters) {
        return angular.extend($scope.filters,
    filters);
      };
      $scope.uploadCoverPhoto = function(blob,
    identity) {
        return $scope.uploadFile(blob).then(function(files) {
          var recipient;
          recipient = {
            coverPhoto: '/ipfs/' + files[0].path
          };
          recipient[$scope.idType] = $scope.idValue;
          return $window.irisLib.Message.createVerification({recipient},
    $scope.privateKey).then(function(m) {
            $scope.irisIndex.addMessage(m);
            return $scope.uploadModal.close();
          });
        });
      };
      $scope.openSharePageModal = function() {
        return $scope.openModal('sharePageModal',
    {
          templateUrl: 'app/identities/share.modal.html',
          size: 'md'
        });
      };
      $scope.openCoverPhotoUploadModal = function() {
        if (!$scope.authentication.identity) {
          return;
        }
        return $scope.openUploadModal($scope.uploadCoverPhoto,
    'Upload cover photo',
    false);
      };
      $scope.findOne = function() {
        var onMessage;
        if (!$scope.irisIndex) {
          return;
        }
        $scope.idType = $stateParams.type;
        $scope.idValue = $stateParams.value;
        $scope.idAttr = new $window.irisLib.Attribute($scope.idType,
    $scope.idValue);
        $scope.idUrl = $scope.getIdUrl($scope.idType,
    $scope.idValue);
        $scope.isCurrentUser = $scope.authentication && $scope.authentication.user && $scope.idType === $scope.authentication.user.idType && $scope.idValue === $scope.authentication.user.idValue;
        if ($scope.isCurrentUser) {
          NotificationService.markAllSeen();
        }
        $scope.isUniqueType = $window.irisLib.Attribute.isUniqueType($scope.idType);
        if (!$scope.isUniqueType) {
          $state.go('identities.list',
    {
            search: $scope.idValue
          });
          if ($scope.tabs) {
            $scope.tabs[2].active = true;
          }
        }
        if ($state.is('identities.show')) {
          $scope.setPageTitle($scope.idValue);
        }
        $scope.identity = $scope.irisIndex.get($scope.idType,
    $scope.idValue); // , true)
        $scope.setIdentityNames($scope.identity,
    false,
    true);
        $scope.identity.gun.on(function(data) {
          return $scope.identity.data = data;
        });
        $scope.getAttributes();
        $scope.getSentMsgs();
        $scope.getReceivedMsgs();
        $scope.identity.gun.get('scores').open(function(scores) {
          return $scope.scores = scores;
        });
        if ($scope.idType === 'keyID') {
          // TODO: only init when opening chat fönster
          $scope.chatMessages = [];
          onMessage = function(msg) {
            return $scope.$apply(function() {
              if (msg) {
                return $scope.chatMessages.push(msg);
              }
            });
          };
          $scope.chat = new $window.irisLib.Chat({
            onMessage: onMessage,
            key: $scope.privateKey,
            gun: $scope.gun,
            participants: $scope.idValue
          });
          $scope.sendChatMessage = function(msg) {
            var m,
    t;
            t = new Date().getTime();
            m = {
              author: $scope.viewpoint.identity.primaryName,
              text: msg,
              time: t
            };
            return $scope.chat.send(m);
          };
          return $scope.irisIndex.getOnline($scope.idValue,
    function(isOnline) {
            return $scope.isOnline = isOnline;
          });
        }
      };
      load = function() {
        if ($scope.irisIndex) {
          if ($state.is('identities.show')) {
            $scope.findOne();
          }
          if ($state.is('identities.create')) {
            focus('idNameFocus');
            return $scope.newEntry.name = $scope.capitalizeWords($scope.query.term);
          }
        }
      };
      $scope.$watch('irisIndex',
    load);
      $scope.qrScanSuccess = function(data) {
        var a,
    type,
    value;
        a = data.split('/');
        if (a.length > 4) {
          type = decodeURIComponent(a[a.length - 2]);
          value = decodeURIComponent(a[a.length - 1].split('?')[0]);
          console.log('value',
    value);
          console.log('data',
    data);
          return $state.go('identities.show',
    {type,
    value});
        } else {
          return console.log('Unrecognized identity url',
    data);
        }
      };
      return $scope.qrScanError = function(e) {};
    }
  ]);

  // this is called each time a QR code is not found on the camera
// console.error e

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdGllcy9pZGVudGl0aWVzLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzIjpbImlkZW50aXRpZXMvaWRlbnRpdGllcy5jb250cm9sbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLGFBQUE7O0VBRUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxhQUFmLENBQTZCLENBQUMsVUFBOUIsQ0FBeUMsc0JBQXpDLEVBQWlFO0lBQy9ELFFBRCtEO0lBRS9ELFFBRitEO0lBRy9ELFlBSCtEO0lBSS9ELFNBSitEO0lBSy9ELGNBTCtEO0lBTS9ELGNBTitEO0lBTy9ELFdBUCtEO0lBUS9ELE9BUitEO0lBUy9ELElBVCtEO0lBVS9ELFVBVitEO0lBVy9ELFdBWCtEOztJQWEvRCxRQWIrRDtJQWMvRCxxQkFkK0Q7SUFlL0QsT0FmK0Q7SUFnQi9ELHFCQWhCK0Q7SUFpQi9ELFFBQUEsQ0FBQyxNQUFEO0lBQVMsTUFBVDtJQUFpQixVQUFqQjtJQUE2QixPQUE3QjtJQUFzQyxZQUF0QztJQUFvRCxZQUFwRDtJQUFrRSxTQUFsRTtJQUE2RSxLQUE3RTtJQUFvRixFQUFwRjtJQUF3RixRQUF4RjtJQUFrRyxTQUFsRztJQUE2RyxNQUE3RztJQUNBLG1CQURBO0lBQ3FCLEtBRHJCO0lBQzRCLG1CQUQ1QixDQUFBLEVBQUE7QUFFRSxVQUFBLElBQUE7SUFBQSxhQUFBO0lBQUE7TUFBQSxNQUFNLENBQUMsUUFBUCxHQUFrQixDQUFBO01BQ2xCLE1BQU0sQ0FBQyxTQUFQLEdBQW1CO01BQ25CLE1BQU0sQ0FBQyxXQUFQLEdBQXFCLFFBQUEsQ0FBQyxLQUFELENBQUE7ZUFBVyxNQUFNLENBQUMsU0FBUCxHQUFtQjtNQUE5QjtNQUNyQixNQUFNLENBQUMsSUFBUCxHQUFjO01BQ2QsTUFBTSxDQUFDLFFBQVAsR0FDRTtRQUFBLElBQUEsRUFBTSxFQUFOO1FBQ0EsSUFBQSxFQUFNLENBQUE7TUFETjtNQUVGLE1BQU0sQ0FBQyxVQUFQLEdBQW9CO01BQ3BCLFdBQUEs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O1FBQ0osSUFBRyxDQUFDLENBQUMsTUFBRixHQUFXLENBQWQ7VUFDRSxJQUFBLEdBQU8sa0JBQUEsQ0FBbUIsQ0FBRSxDQUFBLENBQUMsQ0FBQyxNQUFGLEdBQVcsQ0FBWCxDQUFyQjtVQUNQLEtBQUEsR0FBUSxrQkFBQSxDQUFtQixDQUFFLENBQUEsQ0FBQyxDQUFDLE1BQUYsR0FBVyxDQUFYLENBQWEsQ0FBQyxLQUFoQixDQUFzQixHQUF0QixDQUEyQixDQUFBLENBQUEsQ0FBOUM7VUFDUixPQUFPLENBQUMsR0FBUixDQUFZLE9BQVo7SUFBcUIsS0FBckI7VUFDQSxPQUFPLENBQUMsR0FBUixDQUFZLE1BQVo7SUFBb0IsSUFBcEI7aUJBQ0EsTUFBTSxDQUFDLEVBQVAsQ0FBVSxpQkFBVjtJQUE2QixDQUFDLElBQUQ7SUFBTyxLQUFQLENBQTdCLEVBTEY7U0FBQSxNQUFBO2lCQU9FLE9BQU8sQ0FBQyxHQUFSLENBQVksMkJBQVo7SUFBeUMsSUFBekMsRUFQRjs7TUFGcUI7YUFVdkIsTUFBTSxDQUFDLFdBQVAsR0FBcUIsUUFBQSxDQUFDLENBQUQsQ0FBQSxFQUFBO0lBNVR2QixDQWpCK0Q7R0FBakU7O0VBRkE7O0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcbiMgSWRlbnRpdGllcyBjb250cm9sbGVyXG5hbmd1bGFyLm1vZHVsZSgnaXJpc0FuZ3VsYXInKS5jb250cm9sbGVyICdJZGVudGl0aWVzQ29udHJvbGxlcicsIFtcbiAgJyRzY29wZSdcbiAgJyRzdGF0ZSdcbiAgJyRyb290U2NvcGUnXG4gICckd2luZG93J1xuICAnJHN0YXRlUGFyYW1zJ1xuICAnJHRyYW5zaXRpb25zJ1xuICAnJGxvY2F0aW9uJ1xuICAnJGh0dHAnXG4gICckcSdcbiAgJyR0aW1lb3V0J1xuICAnJHVpYk1vZGFsJ1xuICAjICdBdXRoZW50aWNhdGlvbidcbiAgJ2NvbmZpZydcbiAgJ2xvY2FsU3RvcmFnZVNlcnZpY2UnXG4gICdmb2N1cydcbiAgJ05vdGlmaWNhdGlvblNlcnZpY2UnXG4gICgkc2NvcGUsICRzdGF0ZSwgJHJvb3RTY29wZSwgJHdpbmRvdywgJHN0YXRlUGFyYW1zLCAkdHJhbnNpdGlvbnMsICRsb2NhdGlvbiwgJGh0dHAsICRxLCAkdGltZW91dCwgJHVpYk1vZGFsLCBjb25maWcsXG4gIGxvY2FsU3RvcmFnZVNlcnZpY2UsIGZvY3VzLCBOb3RpZmljYXRpb25TZXJ2aWNlKSAtPiAjLCBBdXRoZW50aWNhdGlvblxuICAgICRzY29wZS5uZXdFbnRyeSA9IHt9XG4gICAgJHNjb3BlLmFjdGl2ZVRhYiA9IDFcbiAgICAkc2NvcGUuYWN0aXZhdGVUYWIgPSAodGFiSWQpIC0+ICRzY29wZS5hY3RpdmVUYWIgPSB0YWJJZFxuICAgICRzY29wZS5zZW50ID0gW11cbiAgICAkc2NvcGUucmVjZWl2ZWQgPVxuICAgICAgbGlzdDogW11cbiAgICAgIHNlZW46IHt9XG4gICAgJHNjb3BlLmF0dHJpYnV0ZXMgPSBbXVxuICAgIHRodW1ic1VwT2JqID0ge31cbiAgICB0aHVtYnNEb3duT2JqID0ge31cbiAgICAkc2NvcGUudGh1bWJzVXAgPSBbXVxuICAgICRzY29wZS50aHVtYnNEb3duID0gW11cbiAgICAkc2NvcGUudmVyaWZpY2F0aW9ucyA9IFtdXG4gICAgJHNjb3BlLnF1ZXJ5LnRlcm0gPSAkc3RhdGVQYXJhbXMuc2VhcmNoIGlmICRzdGF0ZVBhcmFtcy5zZWFyY2hcbiAgICAkc2NvcGUubmV3VmVyaWZpY2F0aW9uID1cbiAgICAgIHR5cGU6ICcnXG4gICAgICB2YWx1ZTogJydcbiAgICAkc2NvcGUuY29sbGFwc2VMZXZlbCA9IHt9XG4gICAgJHNjb3BlLmNvbGxhcHNlRmlsdGVycyA9ICR3aW5kb3cuaW5uZXJXaWR0aCA8IDk5MlxuICAgICRzY29wZS5zbGlkZXIgPVxuICAgICAgb3B0aW9uczpcbiAgICAgICAgZmxvb3I6IC0zXG4gICAgICAgIGNlaWw6IDNcbiAgICAgICAgaGlkZVBvaW50ZXJMYWJlbHM6IHRydWVcbiAgICAgICAgaGlkZUxpbWl0TGFiZWxzOiB0cnVlXG4gICAgICAgIGRpc2FibGVBbmltYXRpb246IHRydWVcblxuICAgICRzY29wZS5zaGFyZSA9IHRydWUgaWYgJGxvY2F0aW9uLnNlYXJjaCgpLnNoYXJlXG5cbiAgICBpZiAkc2NvcGUucXVlcnkudGVybS5sZW5ndGggYW5kICRzdGF0ZS5pcyAnaWRlbnRpdGllcy5saXN0J1xuICAgICAgJHNjb3BlLnF1ZXJ5LnRlcm0gPSAnJ1xuICAgICAgJHNjb3BlLnNlYXJjaCgpXG5cbiAgICBpZiAkc3RhdGUuaXMgJ2lkZW50aXRpZXMuc2hvdydcbiAgICAgICRzY29wZS5maWx0ZXJzLm1heERpc3RhbmNlID0gMFxuICAgICAgJHNjb3BlLmZpbHRlcnMudHlwZSA9IG51bGxcblxuICAgICRzY29wZS5hZGRFbnRyeSA9IChldmVudCwgZW50cnkpIC0+XG4gICAgICBpZiBlbnRyeS5lbWFpbFxuICAgICAgICBsaW5rVG8gPSB7dHlwZTonZW1haWwnLCB2YWx1ZTogZW50cnkuZW1haWx9XG4gICAgICBlbHNlIGlmIGVudHJ5LnVybFxuICAgICAgICBsaW5rVG8gPSB7dHlwZTondXJsJywgdmFsdWU6IGVudHJ5LnVybH1cbiAgICAgIGVsc2VcbiAgICAgICAgbGlua1RvID0gJHdpbmRvdy5pcmlzTGliLkF0dHJpYnV0ZS5nZXRVdWlkKClcbiAgICAgICAgZW50cnkudXVpZCA9IGxpbmtUby52YWx1ZVxuICAgICAgcGFyYW1zID1cbiAgICAgICAgdHlwZTogJ3ZlcmlmaWNhdGlvbidcbiAgICAgICAgcmVjaXBpZW50OiBlbnRyeVxuICAgICAgJHNjb3BlLmNyZWF0ZU1lc3NhZ2UoZXZlbnQsIHBhcmFtcykudGhlbiAocmVzcG9uc2UpIC0+XG4gICAgICAgICRzdGF0ZS5nbyAnaWRlbnRpdGllcy5zaG93JywgbGlua1RvXG4gICAgICAsIChlcnJvcikgLT5cbiAgICAgICAgY29uc29sZS5sb2cgXCJlcnJvclwiLCBlcnJvclxuXG4gICAgJHNjb3BlLmd1ZXNzQXR0cmlidXRlVHlwZSA9IC0+XG4gICAgICBpZiAkc2NvcGUubmV3VmVyaWZpY2F0aW9uLnZhbHVlLmxlbmd0aFxuICAgICAgICAkc2NvcGUubmV3VmVyaWZpY2F0aW9uLnR5cGUgPSAkd2luZG93LmlyaXNMaWIuQXR0cmlidXRlLmd1ZXNzVHlwZU9mKCRzY29wZS5uZXdWZXJpZmljYXRpb24udmFsdWUpXG4gICAgICAgIHVubGVzcyAkc2NvcGUubmV3VmVyaWZpY2F0aW9uLnR5cGVcbiAgICAgICAgICB1bmxlc3MgJHNjb3BlLm5ld1ZlcmlmaWNhdGlvbi52YWx1ZS5tYXRjaCAvXFxgfFxcfnxcXCF8XFxAfFxcI3xcXCR8XFwlfFxcXnxcXCZ8XFwqfFxcKHxcXCl8XFwrfFxcPXxcXFt8XFx7fFxcXXxcXH18XFx8fFxcXFx8XFwnfFxcPHxcXCx8XFwufFxcPnxcXD98XFwvfFxcXCJcInxcXDt8XFw6L1xuICAgICAgICAgICAgJHNjb3BlLm5ld1ZlcmlmaWNhdGlvbi50eXBlID0gJ25hbWUnXG4gICAgICBlbHNlXG4gICAgICAgICRzY29wZS5uZXdWZXJpZmljYXRpb24udHlwZSA9ICcnXG5cbiAgICAkc2NvcGUuYWRkTmFtZSA9IChuYW1lKSAtPlxuICAgICAgaWYgbmFtZVxuICAgICAgICByZWNpcGllbnQgPSB7bmFtZX1cbiAgICAgICAgcmVjaXBpZW50WyRzY29wZS5pZFR5cGVdID0gJHNjb3BlLmlkVmFsdWVcbiAgICAgICAgJHdpbmRvdy5pcmlzTGliLk1lc3NhZ2UuY3JlYXRlVmVyaWZpY2F0aW9uKHtyZWNpcGllbnR9LCAkc2NvcGUucHJpdmF0ZUtleSkudGhlbiAobSkgLT5cbiAgICAgICAgICAkc2NvcGUuaXJpc0luZGV4LmFkZE1lc3NhZ2UobSlcbiAgICAgICAgJHNjb3BlLm5hbWVBZGRlZCA9IHRydWVcbiAgICAgIGVsc2VcbiAgICAgICAgJHNjb3BlLmFkZGluZ05hbWUgPSB0cnVlXG4gICAgICAgIGZvY3VzKCdhZGROYW1lRm9jdXMnKVxuXG4gICAgJHNjb3BlLmdldEF0dHJpYnV0ZXMgPSAtPlxuICAgICAgJHNjb3BlLmlkZW50aXR5Lmd1bi5nZXQoJ2F0dHJzJykub3BlbiAoYXR0cnMpIC0+XG4gICAgICAgIGF0dHJpYnV0ZXMgPSBhdHRycyBvciBbXVxuICAgICAgICBpZiBhdHRyaWJ1dGVzLmxlbmd0aCA+IDBcbiAgICAgICAgICBjID0gYXR0cmlidXRlc1swXVxuICAgICAgICAgIG1vc3RDb25maXJtYXRpb25zID0gYy52ZXJpZmljYXRpb25zXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBtb3N0Q29uZmlybWF0aW9ucyA9IDFcbiAgICAgICAgJHNjb3BlLmF0dHJpYnV0ZXMgPSBPYmplY3QudmFsdWVzKGF0dHJpYnV0ZXMpXG4gICAgICAgIGZvciBhIGluICRzY29wZS5hdHRyaWJ1dGVzXG4gICAgICAgICAgcmV0dXJuIHVubGVzcyBhLnR5cGUgYW5kIGEudmFsdWVcbiAgICAgICAgICBhLmF0dHIgPSBuZXcgJHdpbmRvdy5pcmlzTGliLkF0dHJpYnV0ZShhLnR5cGUsIGEudmFsdWUpXG4gICAgICAgICAgYS5pc0N1cnJlbnQgPSBuZXcgJHdpbmRvdy5pcmlzTGliLkF0dHJpYnV0ZSgkc2NvcGUuaWRUeXBlLCAkc2NvcGUuaWRWYWx1ZSkuZXF1YWxzKGEuYXR0cilcbiAgICAgICAgICBhLm9yZGVyID0gaWYgYS5pc0N1cnJlbnQgdGhlbiBJbmZpbml0eSBlbHNlIChhLnZlcmlmaWNhdGlvbnMgb3IgYS5jb25mKSAtIDIgKiAoYS51bnZlcmlmaWNhdGlvbnMgb3IgYS5yZWYpXG4gICAgICAgICAgYS5yb3dDbGFzcyA9ICdjdXJzb3ItZGVmYXVsdCcgaWYgYS5pc0N1cnJlbnRcbiAgICAgICAgICBzd2l0Y2ggYS50eXBlXG4gICAgICAgICAgICB3aGVuICdlbWFpbCdcbiAgICAgICAgICAgICAgYS5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1lbnZlbG9wZSdcbiAgICAgICAgICAgICAgYS5idG5TdHlsZSA9ICdidG4tc3VjY2VzcydcbiAgICAgICAgICAgICAgYS5saW5rID0gJ21haWx0bzonICsgYS52YWx1ZVxuICAgICAgICAgICAgICBhLnF1aWNrQ29udGFjdCA9IHRydWVcbiAgICAgICAgICAgIHdoZW4gJ2JpdGNvaW5fYWRkcmVzcycsICdiaXRjb2luJ1xuICAgICAgICAgICAgICBhLmljb25TdHlsZSA9ICdmYSBmYS1iaXRjb2luJ1xuICAgICAgICAgICAgICBhLmJ0blN0eWxlID0gJ2J0bi1wcmltYXJ5J1xuICAgICAgICAgICAgICBhLmxpbmsgPSAnaHR0cHM6Ly9ibG9ja2NoYWluLmluZm8vYWRkcmVzcy8nICsgYS52YWx1ZVxuICAgICAgICAgICAgICBhLnF1aWNrQ29udGFjdCA9IHRydWVcbiAgICAgICAgICAgIHdoZW4gJ2dwZ19maW5nZXJwcmludCcsICdncGdfa2V5aWQnXG4gICAgICAgICAgICAgIGEuaWNvblN0eWxlID0gJ2ZhIGZhLWtleSdcbiAgICAgICAgICAgICAgYS5idG5TdHlsZSA9ICdidG4tZGVmYXVsdCdcbiAgICAgICAgICAgICAgYS5saW5rID0gJ2h0dHBzOi8vcGdwLm1pdC5lZHUvcGtzL2xvb2t1cD9vcD1nZXQmc2VhcmNoPTB4JyArIGEudmFsdWVcbiAgICAgICAgICAgIHdoZW4gJ2FjY291bnQnXG4gICAgICAgICAgICAgIGEuaWNvblN0eWxlID0gJ2ZhIGZhLWF0J1xuICAgICAgICAgICAgd2hlbiAnbmlja25hbWUnXG4gICAgICAgICAgICAgICRzY29wZS5pZGVudGl0eS5oYXNQcm9wZXJOYW1lID0gdHJ1ZVxuICAgICAgICAgICAgICBhLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLWZvbnQnXG4gICAgICAgICAgICB3aGVuICduYW1lJ1xuICAgICAgICAgICAgICAkc2NvcGUuaWRlbnRpdHkuaGFzUHJvcGVyTmFtZSA9IHRydWVcbiAgICAgICAgICAgICAgYS5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1mb250J1xuICAgICAgICAgICAgd2hlbiAndGVsJywgJ3Bob25lJ1xuICAgICAgICAgICAgICBhLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLWVhcnBob25lJ1xuICAgICAgICAgICAgICBhLmJ0blN0eWxlID0gJ2J0bi1zdWNjZXNzJ1xuICAgICAgICAgICAgICBhLmxpbmsgPSAndGVsOicgKyBhLnZhbHVlXG4gICAgICAgICAgICAgIGEucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgICAgd2hlbiAna2V5SUQnXG4gICAgICAgICAgICAgIGEuaWNvblN0eWxlID0gJ2ZhIGZhLWtleSdcbiAgICAgICAgICAgIHdoZW4gJ2NvdmVyUGhvdG8nXG4gICAgICAgICAgICAgIGlmIGEudmFsdWUubWF0Y2ggL15cXC9pcGZzXFwvWzEtOUEtWmEtel17NDAsNjB9JC9cbiAgICAgICAgICAgICAgICAkc2NvcGUuaXBmc0dldChhLnZhbHVlKS50aGVuIChjb3ZlclBob3RvKSAtPlxuICAgICAgICAgICAgICAgICAgJHNjb3BlLmNvdmVyUGhvdG8gPSAkc2NvcGUuY292ZXJQaG90byBvciB7ICdiYWNrZ3JvdW5kLWltYWdlJzogJ3VybChkYXRhOmltYWdlO2Jhc2U2NCwnICsgY292ZXJQaG90by50b1N0cmluZygnYmFzZTY0JykgKyAnKScgfVxuICAgICAgICAgICAgd2hlbiAndXJsJ1xuICAgICAgICAgICAgICBhLmxpbmsgPSBhLnZhbHVlXG4gICAgICAgICAgICAgIGlmIGEudmFsdWUuaW5kZXhPZignZmFjZWJvb2suY29tLycpID4gLTFcbiAgICAgICAgICAgICAgICBhLmljb25TdHlsZSA9ICdmYSBmYS1mYWNlYm9vaydcbiAgICAgICAgICAgICAgICBhLmJ0blN0eWxlID0gJ2J0bi1mYWNlYm9vaydcbiAgICAgICAgICAgICAgICBhLmxpbmsgPSBhLnZhbHVlXG4gICAgICAgICAgICAgICAgYS5saW5rTmFtZSA9IGEudmFsdWUuc3BsaXQoJ2ZhY2Vib29rLmNvbS8nKVsxXVxuICAgICAgICAgICAgICAgIGEucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgICAgICBlbHNlIGlmIGEudmFsdWUuaW5kZXhPZigndHdpdHRlci5jb20vJykgPiAtMVxuICAgICAgICAgICAgICAgIGEuaWNvblN0eWxlID0gJ2ZhIGZhLXR3aXR0ZXInXG4gICAgICAgICAgICAgICAgYS5idG5TdHlsZSA9ICdidG4tdHdpdHRlcidcbiAgICAgICAgICAgICAgICBhLmxpbmsgPSBhLnZhbHVlXG4gICAgICAgICAgICAgICAgYS5saW5rTmFtZSA9IGEudmFsdWUuc3BsaXQoJ3R3aXR0ZXIuY29tLycpWzFdXG4gICAgICAgICAgICAgICAgYS5xdWlja0NvbnRhY3QgPSB0cnVlXG4gICAgICAgICAgICAgIGVsc2UgaWYgYS52YWx1ZS5pbmRleE9mKCdwbHVzLmdvb2dsZS5jb20vJykgPiAtMVxuICAgICAgICAgICAgICAgIGEuaWNvblN0eWxlID0gJ2ZhIGZhLWdvb2dsZS1wbHVzJ1xuICAgICAgICAgICAgICAgIGEuYnRuU3R5bGUgPSAnYnRuLWdvb2dsZS1wbHVzJ1xuICAgICAgICAgICAgICAgIGEubGluayA9IGEudmFsdWVcbiAgICAgICAgICAgICAgICBhLmxpbmtOYW1lID0gYS52YWx1ZS5zcGxpdCgncGx1cy5nb29nbGUuY29tLycpWzFdXG4gICAgICAgICAgICAgICAgYS5xdWlja0NvbnRhY3QgPSB0cnVlXG4gICAgICAgICAgICAgIGVsc2UgaWYgYS52YWx1ZS5pbmRleE9mKCdsaW5rZWRpbi5jb20vJykgPiAtMVxuICAgICAgICAgICAgICAgIGEuaWNvblN0eWxlID0gJ2ZhIGZhLWxpbmtlZGluJ1xuICAgICAgICAgICAgICAgIGEuYnRuU3R5bGUgPSAnYnRuLWxpbmtlZGluJ1xuICAgICAgICAgICAgICAgIGEubGluayA9IGEudmFsdWVcbiAgICAgICAgICAgICAgICBhLmxpbmtOYW1lID0gYS52YWx1ZS5zcGxpdCgnbGlua2VkaW4uY29tLycpWzFdXG4gICAgICAgICAgICAgICAgYS5xdWlja0NvbnRhY3QgPSB0cnVlXG4gICAgICAgICAgICAgIGVsc2UgaWYgYS52YWx1ZS5pbmRleE9mKCdnaXRodWIuY29tLycpID4gLTFcbiAgICAgICAgICAgICAgICBhLmljb25TdHlsZSA9ICdmYSBmYS1naXRodWInXG4gICAgICAgICAgICAgICAgYS5idG5TdHlsZSA9ICdidG4tZ2l0aHViJ1xuICAgICAgICAgICAgICAgIGEubGluayA9IGEudmFsdWVcbiAgICAgICAgICAgICAgICBhLmxpbmtOYW1lID0gYS52YWx1ZS5zcGxpdCgnZ2l0aHViLmNvbS8nKVsxXVxuICAgICAgICAgICAgICAgIGEucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgYS5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1saW5rJ1xuICAgICAgICAgICAgICAgIGEuYnRuU3R5bGUgPSAnYnRuLWRlZmF1bHQnXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgIGEuaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tc3RhcidcbiAgICAgICAgICBpZiBhLnZhbHVlIGFuZCBhLnZhbHVlLm1hdGNoIC9eXFwvaXBmc1xcL1sxLTlBLVphLXpdezQwLDYwfSQvXG4gICAgICAgICAgICBhLmxpbmsgPSAnaHR0cHM6Ly9pcGZzLmlvJyArIGEudmFsdWVcbiAgICAgICAgICAgIGEubGlua05hbWUgPSBhLnZhbHVlXG4gICAgICAgICAgICBhLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLWxpbmsnXG4gICAgICAgICAgICBhLmJ0blN0eWxlID0gJ2J0bi1kZWZhdWx0J1xuICAgICAgICAgIGlmIGEudmVyaWZpY2F0aW9ucyArIGEudW52ZXJpZmljYXRpb25zID4gMFxuICAgICAgICAgICAgcGVyY2VudGFnZSA9IGEudmVyaWZpY2F0aW9ucyAqIDEwMCAvIChhLnZlcmlmaWNhdGlvbnMgKyBhLnVudmVyaWZpY2F0aW9ucylcbiAgICAgICAgICAgIGlmIHBlcmNlbnRhZ2UgPj0gODBcbiAgICAgICAgICAgICAgYWxwaGEgPSBhLnZlcmlmaWNhdGlvbnMgLyBtb3N0Q29uZmlybWF0aW9ucyAqIDAuNyArIDAuM1xuICAgICAgICAgICAgICAjIGEucm93U3R5bGUgPSAnYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjMsMjQwLDIxNiwnICsgYWxwaGEgKyAnKSdcbiAgICAgICAgICAgIGVsc2UgaWYgcGVyY2VudGFnZSA+PSA2MFxuICAgICAgICAgICAgICBhLnJvd0NsYXNzID0gJ3dhcm5pbmcnXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgIGEucm93Q2xhc3MgPSAnZGFuZ2VyJ1xuICAgICAgICAgICRzY29wZS5oYXNRdWlja0NvbnRhY3RzID0gJHNjb3BlLmhhc1F1aWNrQ29udGFjdHMgb3IgYS5xdWlja0NvbnRhY3RcbiAgICAgICAgJHNjb3BlLmF0dHJpYnV0ZXNMZW5ndGggPSAkc2NvcGUuYXR0cmlidXRlcy5sZW5ndGhcblxuICAgICRzY29wZS5hdHRyaWJ1dGVDbGlja2VkID0gKGV2ZW50LCBhdHRyKSAtPlxuICAgICAgaWYgYXR0ci5jb25uZWN0aW5nTXNnc1xuICAgICAgICBhdHRyLmNvbGxhcHNlID0gIWF0dHIuY29sbGFwc2VcbiAgICAgIGVsc2VcbiAgICAgICAgYXR0ci5jb25uZWN0aW5nTXNncyA9IFtdXG4gICAgICAgIGZvciBtc2cgaW4gJHNjb3BlLnJlY2VpdmVkLmxpc3RcbiAgICAgICAgICBjb250aW51ZSB1bmxlc3MgbXNnLnNpZ25lZERhdGEudHlwZSBpbiBbJ3ZlcmlmaWNhdGlvbicsICd1bnZlcmlmaWNhdGlvbicsICd2ZXJpZnlfaWRlbnRpdHknLCAndW52ZXJpZnlfaWRlbnRpdHknXVxuICAgICAgICAgIGhhc0F0dHIxID0gaGFzQXR0cjIgPSBmYWxzZVxuICAgICAgICAgIGZvciBhIGluIG1zZy5nZXRSZWNpcGllbnRBcnJheSgpXG4gICAgICAgICAgICBoYXNBdHRyMSA9IGhhc0F0dHIxIG9yIGEudHlwZSA9PSBhdHRyLnR5cGUgYW5kIGEudmFsdWUgPT0gYXR0ci52YWx1ZVxuICAgICAgICAgICAgaGFzQXR0cjIgPSBoYXNBdHRyMiBvciBhLnR5cGUgPT0gJHNjb3BlLmlkVHlwZSBhbmQgYS52YWx1ZSA9PSAkc2NvcGUuaWRWYWx1ZVxuICAgICAgICAgICAgaWYgaGFzQXR0cjEgYW5kIGhhc0F0dHIyXG4gICAgICAgICAgICAgIGF0dHIuY29ubmVjdGluZ01zZ3MucHVzaCBtc2dcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgYXR0ci5jb2xsYXBzZSA9ICFhdHRyLmNvbGxhcHNlXG5cbiAgICAkc2NvcGUuZ2V0U2VudE1zZ3MgPSAtPlxuICAgICAgcmV0dXJuIHVubGVzcyAkc2NvcGUuaWRlbnRpdHkgYW5kICRzY29wZS5pcmlzSW5kZXhcbiAgICAgICRzY29wZS5zZW50ID0gW11cbiAgICAgIGN1cnNvciA9IGlmICRzY29wZS5zZW50Lmxlbmd0aCB0aGVuICRzY29wZS5zZW50WyRzY29wZS5zZW50Lmxlbmd0aCAtIDFdLmN1cnNvciBlbHNlICcnXG4gICAgICBjYWxsYmFjayA9IChtc2cpIC0+XG4gICAgICAgICRzY29wZS5wcm9jZXNzTWVzc2FnZXMgW21zZ10sIHsgYXV0aG9ySXNTZWxmOiB0cnVlIH1cbiAgICAgICAgJHNjb3BlLnNlbnQucHVzaCBtc2dcblxuICAgICAgJHNjb3BlLmlkZW50aXR5LnNlbnQoe2NhbGxiYWNrfSlcblxuICAgICRzY29wZS5nZXRSZWNlaXZlZE1zZ3MgPSAtPlxuICAgICAgcmV0dXJuIHVubGVzcyAkc2NvcGUuaWRlbnRpdHkgYW5kICRzY29wZS5pcmlzSW5kZXhcbiAgICAgICRzY29wZS5yZWNlaXZlZCA9XG4gICAgICAgIGxpc3Q6IFtdXG4gICAgICAgIHNlZW46IHt9XG4gICAgICBjdXJzb3IgPSBpZiAkc2NvcGUucmVjZWl2ZWQubGlzdC5sZW5ndGggdGhlbiAkc2NvcGUucmVjZWl2ZWQubGlzdFskc2NvcGUucmVjZWl2ZWQubGlzdC5sZW5ndGggLSAxXS5jdXJzb3IgZWxzZSAnJ1xuICAgICAgY2FsbGJhY2sgPSAobXNnKSAtPlxuICAgICAgICByZXR1cm4gaWYgJHNjb3BlLnJlY2VpdmVkLnNlZW5bbXNnLmdldEhhc2goKV1cbiAgICAgICAgJHNjb3BlLnByb2Nlc3NNZXNzYWdlcyBbbXNnXSwgeyByZWNpcGllbnRJc1NlbGY6IHRydWUgfVxuICAgICAgICAkc2NvcGUuJGFwcGx5IC0+XG4gICAgICAgICAgaWYgbXNnLmlzUG9zaXRpdmUoKVxuICAgICAgICAgICAgdW5sZXNzIG1zZy5saW5rVG9BdXRob3JcbiAgICAgICAgICAgICAgbXNnLmF1dGhvckFycmF5ID0gbXNnLmdldEF1dGhvckFycmF5KClcbiAgICAgICAgICAgICAgZm9yIGEgaW4gbXNnLmF1dGhvckFycmF5XG4gICAgICAgICAgICAgICAgbXNnLmxpbmtUb0F1dGhvciA9IGEgdW5sZXNzIG1zZy5saW5rVG9BdXRob3JcbiAgICAgICAgICAgIGlmICRzY29wZS50aHVtYnNVcC5sZW5ndGggPCAxMiBhbmQgbm90IHRodW1ic1VwT2JqW0pTT04uc3RyaW5naWZ5KG1zZy5zaWduZWREYXRhLmF1dGhvcildXG4gICAgICAgICAgICAgIHRodW1ic1VwT2JqW0pTT04uc3RyaW5naWZ5KG1zZy5zaWduZWREYXRhLmF1dGhvcildID0gdHJ1ZVxuICAgICAgICAgICAgICAkc2NvcGUudGh1bWJzVXAucHVzaCBtc2dcbiAgICAgICAgICAgICAgJHNjb3BlLmhhc1RodW1ic1VwID0gdHJ1ZVxuICAgICAgICAgIGVsc2UgaWYgbXNnLmlzTmVnYXRpdmUoKSBhbmQgJHNjb3BlLnRodW1ic0Rvd24ubGVuZ3RoIDwgMTIgYW5kIG5vdCB0aHVtYnNEb3duT2JqW0pTT04uc3RyaW5naWZ5KG1zZy5zaWduZWREYXRhLmF1dGhvcildXG4gICAgICAgICAgICB0aHVtYnNEb3duT2JqW0pTT04uc3RyaW5naWZ5KG1zZy5zaWduZWREYXRhLmF1dGhvcildID0gdHJ1ZVxuICAgICAgICAgICAgJHNjb3BlLnRodW1ic0Rvd24ucHVzaCBtc2dcbiAgICAgICAgICAgICRzY29wZS5oYXNUaHVtYnNEb3duID0gdHJ1ZVxuICAgICAgICAgICRzY29wZS5yZWNlaXZlZC5saXN0LnB1c2ggbXNnXG4gICAgICAgICAgJHNjb3BlLnJlY2VpdmVkLnNlZW5bbXNnLmdldEhhc2goKV0gPSB0cnVlXG4gICAgICAkc2NvcGUuaWRlbnRpdHkucmVjZWl2ZWQoe2NhbGxiYWNrLCBjdXJzb3J9KVxuXG4gICAgJHNjb3BlLnNldEZpbHRlcnMgPSAoZmlsdGVycykgLT5cbiAgICAgIGFuZ3VsYXIuZXh0ZW5kICRzY29wZS5maWx0ZXJzLCBmaWx0ZXJzXG5cbiAgICAkc2NvcGUudXBsb2FkQ292ZXJQaG90byA9IChibG9iLCBpZGVudGl0eSkgLT5cbiAgICAgICRzY29wZS51cGxvYWRGaWxlKGJsb2IpLnRoZW4gKGZpbGVzKSAtPlxuICAgICAgICByZWNpcGllbnQgPSB7Y292ZXJQaG90bzogJy9pcGZzLycgKyBmaWxlc1swXS5wYXRofVxuICAgICAgICByZWNpcGllbnRbJHNjb3BlLmlkVHlwZV0gPSAkc2NvcGUuaWRWYWx1ZVxuICAgICAgICAkd2luZG93LmlyaXNMaWIuTWVzc2FnZS5jcmVhdGVWZXJpZmljYXRpb24oe3JlY2lwaWVudH0sICRzY29wZS5wcml2YXRlS2V5KS50aGVuIChtKSAtPlxuICAgICAgICAgICRzY29wZS5pcmlzSW5kZXguYWRkTWVzc2FnZShtKVxuICAgICAgICAgICRzY29wZS51cGxvYWRNb2RhbC5jbG9zZSgpXG5cbiAgICAkc2NvcGUub3BlblNoYXJlUGFnZU1vZGFsID0gKCkgLT5cbiAgICAgICRzY29wZS5vcGVuTW9kYWwgJ3NoYXJlUGFnZU1vZGFsJywgeyB0ZW1wbGF0ZVVybDogJ2FwcC9pZGVudGl0aWVzL3NoYXJlLm1vZGFsLmh0bWwnLCBzaXplOiAnbWQnIH1cblxuICAgICRzY29wZS5vcGVuQ292ZXJQaG90b1VwbG9hZE1vZGFsID0gLT5cbiAgICAgIHJldHVybiB1bmxlc3MgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLmlkZW50aXR5XG4gICAgICAkc2NvcGUub3BlblVwbG9hZE1vZGFsKCRzY29wZS51cGxvYWRDb3ZlclBob3RvLCAnVXBsb2FkIGNvdmVyIHBob3RvJywgZmFsc2UpXG5cbiAgICAkc2NvcGUuZmluZE9uZSA9IC0+XG4gICAgICByZXR1cm4gdW5sZXNzICRzY29wZS5pcmlzSW5kZXhcbiAgICAgICRzY29wZS5pZFR5cGUgPSAkc3RhdGVQYXJhbXMudHlwZVxuICAgICAgJHNjb3BlLmlkVmFsdWUgPSAkc3RhdGVQYXJhbXMudmFsdWVcbiAgICAgICRzY29wZS5pZEF0dHIgPSBuZXcgJHdpbmRvdy5pcmlzTGliLkF0dHJpYnV0ZSgkc2NvcGUuaWRUeXBlLCAkc2NvcGUuaWRWYWx1ZSlcbiAgICAgICRzY29wZS5pZFVybCA9ICRzY29wZS5nZXRJZFVybCgkc2NvcGUuaWRUeXBlLCAkc2NvcGUuaWRWYWx1ZSlcbiAgICAgICRzY29wZS5pc0N1cnJlbnRVc2VyID0gJHNjb3BlLmF1dGhlbnRpY2F0aW9uIGFuZFxuICAgICAgICAkc2NvcGUuYXV0aGVudGljYXRpb24udXNlciBhbmRcbiAgICAgICAgJHNjb3BlLmlkVHlwZSA9PSAkc2NvcGUuYXV0aGVudGljYXRpb24udXNlci5pZFR5cGUgYW5kXG4gICAgICAgICRzY29wZS5pZFZhbHVlID09ICRzY29wZS5hdXRoZW50aWNhdGlvbi51c2VyLmlkVmFsdWVcbiAgICAgIE5vdGlmaWNhdGlvblNlcnZpY2UubWFya0FsbFNlZW4oKSBpZiAkc2NvcGUuaXNDdXJyZW50VXNlclxuICAgICAgJHNjb3BlLmlzVW5pcXVlVHlwZSA9ICR3aW5kb3cuaXJpc0xpYi5BdHRyaWJ1dGUuaXNVbmlxdWVUeXBlKCRzY29wZS5pZFR5cGUpXG4gICAgICBpZiAhJHNjb3BlLmlzVW5pcXVlVHlwZVxuICAgICAgICAkc3RhdGUuZ28gJ2lkZW50aXRpZXMubGlzdCcsIHsgc2VhcmNoOiAkc2NvcGUuaWRWYWx1ZSB9XG4gICAgICAgICRzY29wZS50YWJzWzJdLmFjdGl2ZSA9IHRydWUgaWYgJHNjb3BlLnRhYnNcbiAgICAgIGlmICRzdGF0ZS5pcyAnaWRlbnRpdGllcy5zaG93J1xuICAgICAgICAkc2NvcGUuc2V0UGFnZVRpdGxlICRzY29wZS5pZFZhbHVlXG4gICAgICAkc2NvcGUuaWRlbnRpdHkgPSAkc2NvcGUuaXJpc0luZGV4LmdldCgkc2NvcGUuaWRUeXBlLCAkc2NvcGUuaWRWYWx1ZSkgIyAsIHRydWUpXG4gICAgICAkc2NvcGUuc2V0SWRlbnRpdHlOYW1lcygkc2NvcGUuaWRlbnRpdHksIGZhbHNlLCB0cnVlKVxuICAgICAgJHNjb3BlLmlkZW50aXR5Lmd1bi5vbiAoZGF0YSkgLT5cbiAgICAgICAgJHNjb3BlLmlkZW50aXR5LmRhdGEgPSBkYXRhXG4gICAgICAkc2NvcGUuZ2V0QXR0cmlidXRlcygpXG4gICAgICAkc2NvcGUuZ2V0U2VudE1zZ3MoKVxuICAgICAgJHNjb3BlLmdldFJlY2VpdmVkTXNncygpXG4gICAgICAkc2NvcGUuaWRlbnRpdHkuZ3VuLmdldCgnc2NvcmVzJykub3BlbiAoc2NvcmVzKSAtPlxuICAgICAgICAkc2NvcGUuc2NvcmVzID0gc2NvcmVzXG4gICAgICBpZiAkc2NvcGUuaWRUeXBlID09ICdrZXlJRCdcbiAgICAgICAgIyBUT0RPOiBvbmx5IGluaXQgd2hlbiBvcGVuaW5nIGNoYXQgZsO2bnN0ZXJcbiAgICAgICAgJHNjb3BlLmNoYXRNZXNzYWdlcyA9IFtdXG4gICAgICAgIG9uTWVzc2FnZSA9IChtc2cpIC0+XG4gICAgICAgICAgJHNjb3BlLiRhcHBseSAtPlxuICAgICAgICAgICAgJHNjb3BlLmNoYXRNZXNzYWdlcy5wdXNoKG1zZykgaWYgbXNnXG4gICAgICAgICRzY29wZS5jaGF0ID0gbmV3ICR3aW5kb3cuaXJpc0xpYi5DaGF0XG4gICAgICAgICAgb25NZXNzYWdlOiBvbk1lc3NhZ2VcbiAgICAgICAgICBrZXk6ICRzY29wZS5wcml2YXRlS2V5XG4gICAgICAgICAgZ3VuOiAkc2NvcGUuZ3VuXG4gICAgICAgICAgcGFydGljaXBhbnRzOiAkc2NvcGUuaWRWYWx1ZVxuICAgICAgICAkc2NvcGUuc2VuZENoYXRNZXNzYWdlID0gKG1zZykgLT5cbiAgICAgICAgICB0ID0gbmV3IERhdGUoKS5nZXRUaW1lKClcbiAgICAgICAgICBtID1cbiAgICAgICAgICAgIGF1dGhvcjogJHNjb3BlLnZpZXdwb2ludC5pZGVudGl0eS5wcmltYXJ5TmFtZVxuICAgICAgICAgICAgdGV4dDogbXNnXG4gICAgICAgICAgICB0aW1lOiB0XG4gICAgICAgICAgJHNjb3BlLmNoYXQuc2VuZChtKVxuICAgICAgICAkc2NvcGUuaXJpc0luZGV4LmdldE9ubGluZSAkc2NvcGUuaWRWYWx1ZSwgKGlzT25saW5lKSAtPlxuICAgICAgICAgICRzY29wZS5pc09ubGluZSA9IGlzT25saW5lXG5cbiAgICBsb2FkID0gLT5cbiAgICAgIGlmICRzY29wZS5pcmlzSW5kZXhcbiAgICAgICAgaWYgJHN0YXRlLmlzICdpZGVudGl0aWVzLnNob3cnXG4gICAgICAgICAgJHNjb3BlLmZpbmRPbmUoKVxuXG4gICAgICAgIGlmICRzdGF0ZS5pcyAnaWRlbnRpdGllcy5jcmVhdGUnXG4gICAgICAgICAgZm9jdXMoJ2lkTmFtZUZvY3VzJylcbiAgICAgICAgICAkc2NvcGUubmV3RW50cnkubmFtZSA9ICRzY29wZS5jYXBpdGFsaXplV29yZHMoJHNjb3BlLnF1ZXJ5LnRlcm0pXG4gICAgJHNjb3BlLiR3YXRjaCAnaXJpc0luZGV4JywgbG9hZFxuXG4gICAgJHNjb3BlLnFyU2NhblN1Y2Nlc3MgPSAoZGF0YSkgLT5cbiAgICAgIGEgPSBkYXRhLnNwbGl0KCcvJylcbiAgICAgIGlmIGEubGVuZ3RoID4gNFxuICAgICAgICB0eXBlID0gZGVjb2RlVVJJQ29tcG9uZW50KGFbYS5sZW5ndGggLSAyXSlcbiAgICAgICAgdmFsdWUgPSBkZWNvZGVVUklDb21wb25lbnQoYVthLmxlbmd0aCAtIDFdLnNwbGl0KCc/JylbMF0pXG4gICAgICAgIGNvbnNvbGUubG9nICd2YWx1ZScsIHZhbHVlXG4gICAgICAgIGNvbnNvbGUubG9nICdkYXRhJywgZGF0YVxuICAgICAgICAkc3RhdGUuZ28gJ2lkZW50aXRpZXMuc2hvdycsIHt0eXBlLCB2YWx1ZX1cbiAgICAgIGVsc2VcbiAgICAgICAgY29uc29sZS5sb2cgJ1VucmVjb2duaXplZCBpZGVudGl0eSB1cmwnLCBkYXRhXG4gICAgJHNjb3BlLnFyU2NhbkVycm9yID0gKGUpIC0+XG4gICAgICAjIHRoaXMgaXMgY2FsbGVkIGVhY2ggdGltZSBhIFFSIGNvZGUgaXMgbm90IGZvdW5kIG9uIHRoZSBjYW1lcmFcbiAgICAgICMgY29uc29sZS5lcnJvciBlXG5dXG4iXX0=

(function() {
  angular.module('irisAngular').run(function($log, $transitions, $rootScope, $state, $stateParams, $window, localStorageService) {
    'ngInject';
    $log.debug('runBlock end');
    return $transitions.onSuccess({}, function(params) {
      $rootScope.pageTitle = $state.current.title || 'Iris';
      return $window.scrollTo(0, 0);
    });
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgucnVuLmpzIiwic291cmNlcyI6WyJpbmRleC5ydW4uY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxhQUFmLENBQ0UsQ0FBQyxHQURILENBQ08sUUFBQSxDQUFDLElBQUQsRUFBTyxZQUFQLEVBQXFCLFVBQXJCLEVBQWlDLE1BQWpDLEVBQXlDLFlBQXpDLEVBQXVELE9BQXZELEVBQWdFLG1CQUFoRSxDQUFBO0lBQ0g7SUFDQSxJQUFJLENBQUMsS0FBTCxDQUFXLGNBQVg7V0FDQSxZQUFZLENBQUMsU0FBYixDQUF1QixDQUFBLENBQXZCLEVBQTJCLFFBQUEsQ0FBQyxNQUFELENBQUE7TUFDekIsVUFBVSxDQUFDLFNBQVgsR0FBdUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFmLElBQXdCO2FBQy9DLE9BQU8sQ0FBQyxRQUFSLENBQWlCLENBQWpCLEVBQW1CLENBQW5CO0lBRnlCLENBQTNCO0VBSEcsQ0FEUDtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUgJ2lyaXNBbmd1bGFyJ1xuICAucnVuICgkbG9nLCAkdHJhbnNpdGlvbnMsICRyb290U2NvcGUsICRzdGF0ZSwgJHN0YXRlUGFyYW1zLCAkd2luZG93LCBsb2NhbFN0b3JhZ2VTZXJ2aWNlKSAtPlxuICAgICduZ0luamVjdCdcbiAgICAkbG9nLmRlYnVnICdydW5CbG9jayBlbmQnXG4gICAgJHRyYW5zaXRpb25zLm9uU3VjY2VzcyB7fSwgKHBhcmFtcykgLT5cbiAgICAgICRyb290U2NvcGUucGFnZVRpdGxlID0gJHN0YXRlLmN1cnJlbnQudGl0bGUgfHwgJ0lyaXMnXG4gICAgICAkd2luZG93LnNjcm9sbFRvKDAsMClcbiJdfQ==

(function() {
  angular.module('irisAngular').config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    'ngInject';
    $locationProvider.hashPrefix('');
    $stateProvider.state('identities', {
      url: '/contacts',
      template: "<ui-view/>",
      abstract: true
    }).state('identities.list', {
      url: '',
      templateUrl: 'app/identities/list.html',
      controller: 'IdentitiesController',
      controllerAs: 'identities',
      params: {
        search: ''
      },
      title: 'Iris - Contacts'
    }).state('identities.create', {
      url: '/create',
      templateUrl: 'app/identities/create.html',
      controller: 'IdentitiesController',
      controllerAs: 'identities'
    }).state('identities.show', {
      url: '/:type/:value',
      templateUrl: 'app/identities/show.html',
      controller: 'IdentitiesController',
      controllerAs: 'identities'
    }).state('messages', {
      url: '',
      template: "<ui-view/>",
      abstract: true
    }).state('messages.list', {
      url: '',
      templateUrl: 'app/messages/list.html',
      controller: 'MessagesController',
      controllerAs: 'messages',
      title: 'Iris'
    }).state('messages.show', {
      url: '/messages/:id',
      templateUrl: 'app/messages/show.html',
      controller: 'MessagesController',
      controllerAs: 'messages'
    }).state('about', {
      url: '/about',
      templateUrl: 'app/main/about.html',
      title: 'Iris - About'
    }).state('settings', {
      url: '/settings',
      templateUrl: 'app/main/settings.html',
      title: 'Iris - Settings'
    }).state('privacy', {
      url: '/privacy',
      templateUrl: 'app/main/privacy-policy.html',
      title: 'Iris - Privacy policy'
    });
    return $urlRouterProvider.otherwise('');
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgucm91dGUuanMiLCJzb3VyY2VzIjpbImluZGV4LnJvdXRlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsYUFBZixDQUNFLENBQUMsTUFESCxDQUNVLFFBQUEsQ0FBQyxjQUFELEVBQWlCLGtCQUFqQixFQUFxQyxpQkFBckMsQ0FBQTtJQUNOO0lBQ0EsaUJBQWlCLENBQUMsVUFBbEIsQ0FBNkIsRUFBN0I7SUFDQSxjQUNFLENBQUMsS0FESCxDQUNTLFlBRFQsRUFFSTtNQUFBLEdBQUEsRUFBSyxXQUFMO01BQ0EsUUFBQSxFQUFVLFlBRFY7TUFFQSxRQUFBLEVBQVU7SUFGVixDQUZKLENBS0UsQ0FBQyxLQUxILENBS1MsaUJBTFQsRUFNSTtNQUFBLEdBQUEsRUFBSyxFQUFMO01BQ0EsV0FBQSxFQUFhLDBCQURiO01BRUEsVUFBQSxFQUFZLHNCQUZaO01BR0EsWUFBQSxFQUFjLFlBSGQ7TUFJQSxNQUFBLEVBQ0U7UUFBQSxNQUFBLEVBQVE7TUFBUixDQUxGO01BTUEsS0FBQSxFQUFPO0lBTlAsQ0FOSixDQWFFLENBQUMsS0FiSCxDQWFTLG1CQWJULEVBY0k7TUFBQSxHQUFBLEVBQUssU0FBTDtNQUNBLFdBQUEsRUFBYSw0QkFEYjtNQUVBLFVBQUEsRUFBWSxzQkFGWjtNQUdBLFlBQUEsRUFBYztJQUhkLENBZEosQ0FrQkUsQ0FBQyxLQWxCSCxDQWtCUyxpQkFsQlQsRUFtQkk7TUFBQSxHQUFBLEVBQUssZUFBTDtNQUNBLFdBQUEsRUFBYSwwQkFEYjtNQUVBLFVBQUEsRUFBWSxzQkFGWjtNQUdBLFlBQUEsRUFBYztJQUhkLENBbkJKLENBdUJFLENBQUMsS0F2QkgsQ0F1QlMsVUF2QlQsRUF3Qkk7TUFBQSxHQUFBLEVBQUssRUFBTDtNQUNBLFFBQUEsRUFBVSxZQURWO01BRUEsUUFBQSxFQUFVO0lBRlYsQ0F4QkosQ0EyQkUsQ0FBQyxLQTNCSCxDQTJCUyxlQTNCVCxFQTRCSTtNQUFBLEdBQUEsRUFBSyxFQUFMO01BQ0EsV0FBQSxFQUFhLHdCQURiO01BRUEsVUFBQSxFQUFZLG9CQUZaO01BR0EsWUFBQSxFQUFjLFVBSGQ7TUFJQSxLQUFBLEVBQU87SUFKUCxDQTVCSixDQWlDRSxDQUFDLEtBakNILENBaUNTLGVBakNULEVBa0NJO01BQUEsR0FBQSxFQUFLLGVBQUw7TUFDQSxXQUFBLEVBQWEsd0JBRGI7TUFFQSxVQUFBLEVBQVksb0JBRlo7TUFHQSxZQUFBLEVBQWM7SUFIZCxDQWxDSixDQXNDRSxDQUFDLEtBdENILENBc0NTLE9BdENULEVBdUNJO01BQUEsR0FBQSxFQUFLLFFBQUw7TUFDQSxXQUFBLEVBQWEscUJBRGI7TUFFQSxLQUFBLEVBQU87SUFGUCxDQXZDSixDQTBDRSxDQUFDLEtBMUNILENBMENTLFVBMUNULEVBMkNJO01BQUEsR0FBQSxFQUFLLFdBQUw7TUFDQSxXQUFBLEVBQWEsd0JBRGI7TUFFQSxLQUFBLEVBQU87SUFGUCxDQTNDSixDQThDRSxDQUFDLEtBOUNILENBOENTLFNBOUNULEVBK0NJO01BQUEsR0FBQSxFQUFLLFVBQUw7TUFDQSxXQUFBLEVBQWEsOEJBRGI7TUFFQSxLQUFBLEVBQU87SUFGUCxDQS9DSjtXQW1EQSxrQkFBa0IsQ0FBQyxTQUFuQixDQUE2QixFQUE3QjtFQXRETSxDQURWO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSAnaXJpc0FuZ3VsYXInXG4gIC5jb25maWcgKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyKSAtPlxuICAgICduZ0luamVjdCdcbiAgICAkbG9jYXRpb25Qcm92aWRlci5oYXNoUHJlZml4KCcnKVxuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUgJ2lkZW50aXRpZXMnLFxuICAgICAgICB1cmw6ICcvY29udGFjdHMnXG4gICAgICAgIHRlbXBsYXRlOiBcIjx1aS12aWV3Lz5cIlxuICAgICAgICBhYnN0cmFjdDogdHJ1ZVxuICAgICAgLnN0YXRlICdpZGVudGl0aWVzLmxpc3QnLFxuICAgICAgICB1cmw6ICcnXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2lkZW50aXRpZXMvbGlzdC5odG1sJ1xuICAgICAgICBjb250cm9sbGVyOiAnSWRlbnRpdGllc0NvbnRyb2xsZXInXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ2lkZW50aXRpZXMnXG4gICAgICAgIHBhcmFtczpcbiAgICAgICAgICBzZWFyY2g6ICcnXG4gICAgICAgIHRpdGxlOiAnSXJpcyAtIENvbnRhY3RzJ1xuICAgICAgLnN0YXRlICdpZGVudGl0aWVzLmNyZWF0ZScsXG4gICAgICAgIHVybDogJy9jcmVhdGUnXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2lkZW50aXRpZXMvY3JlYXRlLmh0bWwnXG4gICAgICAgIGNvbnRyb2xsZXI6ICdJZGVudGl0aWVzQ29udHJvbGxlcidcbiAgICAgICAgY29udHJvbGxlckFzOiAnaWRlbnRpdGllcydcbiAgICAgIC5zdGF0ZSAnaWRlbnRpdGllcy5zaG93JyxcbiAgICAgICAgdXJsOiAnLzp0eXBlLzp2YWx1ZSdcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvaWRlbnRpdGllcy9zaG93Lmh0bWwnXG4gICAgICAgIGNvbnRyb2xsZXI6ICdJZGVudGl0aWVzQ29udHJvbGxlcidcbiAgICAgICAgY29udHJvbGxlckFzOiAnaWRlbnRpdGllcydcbiAgICAgIC5zdGF0ZSAnbWVzc2FnZXMnLFxuICAgICAgICB1cmw6ICcnXG4gICAgICAgIHRlbXBsYXRlOiBcIjx1aS12aWV3Lz5cIlxuICAgICAgICBhYnN0cmFjdDogdHJ1ZVxuICAgICAgLnN0YXRlICdtZXNzYWdlcy5saXN0JyxcbiAgICAgICAgdXJsOiAnJ1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9tZXNzYWdlcy9saXN0Lmh0bWwnXG4gICAgICAgIGNvbnRyb2xsZXI6ICdNZXNzYWdlc0NvbnRyb2xsZXInXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ21lc3NhZ2VzJ1xuICAgICAgICB0aXRsZTogJ0lyaXMnXG4gICAgICAuc3RhdGUgJ21lc3NhZ2VzLnNob3cnLFxuICAgICAgICB1cmw6ICcvbWVzc2FnZXMvOmlkJ1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9tZXNzYWdlcy9zaG93Lmh0bWwnXG4gICAgICAgIGNvbnRyb2xsZXI6ICdNZXNzYWdlc0NvbnRyb2xsZXInXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ21lc3NhZ2VzJ1xuICAgICAgLnN0YXRlICdhYm91dCcsXG4gICAgICAgIHVybDogJy9hYm91dCdcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbWFpbi9hYm91dC5odG1sJ1xuICAgICAgICB0aXRsZTogJ0lyaXMgLSBBYm91dCdcbiAgICAgIC5zdGF0ZSAnc2V0dGluZ3MnLFxuICAgICAgICB1cmw6ICcvc2V0dGluZ3MnXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL21haW4vc2V0dGluZ3MuaHRtbCdcbiAgICAgICAgdGl0bGU6ICdJcmlzIC0gU2V0dGluZ3MnXG4gICAgICAuc3RhdGUgJ3ByaXZhY3knLFxuICAgICAgICB1cmw6ICcvcHJpdmFjeSdcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbWFpbi9wcml2YWN5LXBvbGljeS5odG1sJ1xuICAgICAgICB0aXRsZTogJ0lyaXMgLSBQcml2YWN5IHBvbGljeSdcblxuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UgJydcbiJdfQ==

(function() {
  angular.module('irisAngular').constant('config', {
    defaultFilters: {
      type: 'post',
      limit: 10,
      maxDistance: 0
    }
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29uc3RhbnRzLmpzIiwic291cmNlcyI6WyJpbmRleC5jb25zdGFudHMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxhQUFmLENBQ0UsQ0FBQyxRQURILENBQ1ksUUFEWixFQUVJO0lBQUEsY0FBQSxFQUNFO01BQUEsSUFBQSxFQUFNLE1BQU47TUFDQSxLQUFBLEVBQU8sRUFEUDtNQUVBLFdBQUEsRUFBYTtJQUZiO0VBREYsQ0FGSjtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ2lyaXNBbmd1bGFyJylcbiAgLmNvbnN0YW50ICdjb25maWcnLFxuICAgIGRlZmF1bHRGaWx0ZXJzOlxuICAgICAgdHlwZTogJ3Bvc3QnXG4gICAgICBsaW1pdDogMTBcbiAgICAgIG1heERpc3RhbmNlOiAwXG4iXX0=

(function() {
  angular.module('irisAngular').config(function($logProvider) {
    'ngInject';
    // Enable log
    return $logProvider.debugEnabled(true);
  });

  // Set options third-party lib

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29uZmlnLmpzIiwic291cmNlcyI6WyJpbmRleC5jb25maWcuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxhQUFmLENBQ0UsQ0FBQyxNQURILENBQ1UsUUFBQSxDQUFDLFlBQUQsQ0FBQTtJQUNOLFdBQUE7O1dBRUEsWUFBWSxDQUFDLFlBQWIsQ0FBMEIsSUFBMUI7RUFITSxDQURWOztFQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSAnaXJpc0FuZ3VsYXInXG4gIC5jb25maWcgKCRsb2dQcm92aWRlcikgLT5cbiAgICAnbmdJbmplY3QnXG4gICAgIyBFbmFibGUgbG9nXG4gICAgJGxvZ1Byb3ZpZGVyLmRlYnVnRW5hYmxlZCB0cnVlXG4gICAgIyBTZXQgb3B0aW9ucyB0aGlyZC1wYXJ0eSBsaWJcbiJdfQ==

angular.module('irisAngular').run(['$templateCache', function($templateCache) {$templateCache.put('app/identities/chat.modal.html','<div class="col-md-10 col-md-offset-1" ng-controller=IdentitiesController><div class="panel panel-default mar-top15"><div class=panel-heading><div class=mar-bot15><div style=color:red;font-weight:bold>currently messages are encrypted, but anyone can see who are communicating with each other</div><identicon identity=identity ipfs=ipfs width=35></identicon><span class=mar-right15><span ng-show="idType === \'keyID\' || idType === \'uuid\'"><identicon identity=idAttr width=35></identicon></span><span ng-hide="idType === \'keyID\' || idType === \'uuid\'"><span ng-if=!(identity.data.mostVerifiedAttributes.name||identity.data.mostVerifiedAttributes.nickname)><span ng-bind=idValue class=idValue></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType class=idType></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType class=idType></a> </small></span></span></span><span ng-bind=identity.primaryName></span> <small class="positive mar-left15" ng-show=isOnline>online</small></div><form class="form-inline mar-bot5" ng-submit="sendChatMessage(m);m = \'\'"><input class=form-control type=text ng-model=m style="display:inline-block; width:80%"> <button class="btn btn-default" type=submit style=display:inline-block><i class="glyphicon glyphicon-send"></i></button></form><div style=background:white;padding:5px class=mar-bot5 ng-repeat="msg in chatMessages | orderBy:\'-time\'"><b ng-bind=msg.author></b> <small ng-bind="msg.time | date : \'yyyy-M-d HH:mm\'"></small><br><span ng-bind=msg.text></span></div></div></div></div>');
$templateCache.put('app/identities/create.html','<div class="container mar-bot30" ng-controller=IdentitiesController><div class=row><div class="col-xs-8 col-sm-6 col-sm-offset-2"><h3>Add contact</h3></div><div class="col-xs-4 col-sm-2"><button ng-click=openReadQRModal() class="btn btn-default pull-right"><span class="glyphicon glyphicon-qrcode"></span> Scan QR</button></div></div><div class=row><div class="col-xs-12 col-sm-8 col-sm-offset-2"><div class="panel panel-danger" ng-if=error><div class=panel-heading ng-bind=error></div></div><div class="panel panel-info" ng-hide=authentication.user><div class=panel-heading>Please log in to add contacts.</div></div><form class=form name=addEntryForm ng-submit="addEntry($event, newEntry)"><div class=form-group><label for=idName>Name *</label> <input type=text required autofocus id=idName focus-on=idNameFocus name=idName ng-model=newEntry.name class=form-control></div><div class=form-group ng-class="{ \'has-error\': addEntryForm.idEmail.$invalid }"><label for=idEmail>Email</label> <input type=email id=idEmail name=idEmail ng-model=newEntry.email class=form-control></div><div class=form-group ng-class="{ \'has-error\': addEntryForm.idUrl.$invalid }"><label for=idUrl>Url</label> <input type=url id=idUrl name=idUrl ng-model=newEntry.url class=form-control><p class=help-block>Social media profile or other personal url</p></div><button class="btn btn-primary" ng-disabled="loggingIn || !(authentication.user && !(addEntryForm.idName.$invalid || addEntryForm.idEmail.$invalid || addEntryForm.idPhone.$invalid || addEntryForm.idUrl.$invalid))">Add public contact</button><p class=help-block>More details can be added afterwards.</p><p><a ui-sref=privacy>Privacy policy</a></p></form></div></div></div>');
$templateCache.put('app/identities/list.html','<div class="container no-padding-xs"><section><div class=mar-top45-xs></div><div ng-if=!query.term ng-include="\'app/main/getstarted.partial.html\'"></div><table ng-init="filters.limit = 10" id=search-results class="table table-hover" infinite-scroll="filters.limit = filters.limit + 1" infinite-scroll-distance=1 infinite-scroll-disabled="!irisIndex || !ids || !ids.list || ids.list.length < filters.limit || filteredIds.length < filters.limit"><tbody><tr id=createIdRow ng-class="{active: ids.activeKey == -1}" ui-sref=identities.create class=search-result-row><td class="gravatar-col align-center"><span style=line-height:46px class="glyphicon glyphicon-plus"></span></td><td><a ui-sref=identities.create>Add contact<span ng-if=query.term>: <span ng-bind=capitalizeWords(query.term)></span></span></a></td></tr><tr ng-repeat="result in ids.list | orderBy:\'data.trustDistance\':false:trustDistanceComparator | limitTo:filters.limit as filteredIds track by (result.linkTo.value + result.linkTo.type)" id=result{{$index}} ui-sref="identities.show({ type: result.linkTo.type, value: result.linkTo.value })" class=search-result-row ng-class="{active: ids.activeKey == $index}"><td class=gravatar-col><identicon identity=result border=3 width=50 ipfs=ipfs></identicon></td><td><span ng-if="result.data.trustDistance === 0" class="label label-default pull-right">viewpoint</span> <span ng-if="result.data.trustDistance > 0" ng-bind="result.data.trustDistance | ordinal" class="label label-default pull-right"></span> <span ng-if="result.data.trustDistance === false" class="label label-default pull-right">unconnected</span> <a ng-bind-html=result.primaryName|highlight:query.term ui-sref="identities.show({ type: result.linkTo.type, value: result.linkTo.value })"></a> <span class="glyphicon glyphicon-ok-sign" style=color:#337ab7 ng-if=result.wellVerified></span> <small ng-if=!(result.mostVerifiedAttributes.type||result.mostVerifiedAttributes.nickname) class=list-group-item-text><span ng-bind-html=result.data.attrs.type.type|highlight:query.term></span></small><br><small><span ng-if=result.nickname ng-bind-html=result.nickname|highlight:query.term class=mar-right10></span> <span ng-if=result.profile.email class=mar-right10><span class="glyphicon glyphicon-envelope"></span> <span ng-bind-html=result.profile.email|highlight:query.term></span> </span><span ng-if=result.profile.facebook class=mar-right10><span class="fa fa-facebook"></span> <span ng-bind-html=result.profile.facebook|highlight:query.term></span> </span><span ng-if=result.profile.twitter class=mar-right10><span class="fa fa-twitter"></span> <span ng-bind-html=result.profile.twitter|highlight:query.term></span> </span><span ng-if=result.profile.googlePlus class=mar-right10><span class="fa fa-google-plus"></span> <span ng-bind-html=result.profile.googlePlus|highlight:query.term></span> </span><span ng-if=result.mostVerifiedAttributes.bitcoin class=mar-right10><span class="fa fa-bitcoin"></span> <span ng-bind-html=result.mostVerifiedAttributes.bitcoin.attribute.val|highlight:query.term></span></span></small></td></tr></tbody></table><div class="alert alert-info text-center" ng-if=!ids.list.length>No results</div></section></div>');
$templateCache.put('app/identities/readqr.modal.html','<div class="col-md-10 col-md-offset-1" ng-controller=IdentitiesController><div class="panel panel-default mar-top15"><div class="panel-heading text-center"><p><b>Scan QR from profile page</b></p><div><qr-scanner width=400 height=300 ng-success=qrScanSuccess(data) ng-error=qrScanError(error)></qr-scanner></div><!-- <div class="mar-top15 mar-bot10"><button ng-click="shareModal.close()" class="btn btn-default">Close</button></div> --></div></div></div>');
$templateCache.put('app/identities/share.modal.html','<div class="col-md-10 col-md-offset-1" ng-controller=IdentitiesController><div class="panel panel-default mar-top15"><div class="panel-heading text-center"><p><button ng-click=copyToClipboard(idUrl) class="btn btn-primary mar-top10">Copy link to this page</button></p><div class="mar-top20 mar-bot10"><qrcode data={{idUrl}} size=240></qrcode></div><!-- <div class="mar-top15 mar-bot10"><button ng-click="shareModal.close()" class="btn btn-default">Close</button></div> --></div></div></div>');
$templateCache.put('app/identities/show.attributes.html','<!-- <input id="authenticity_token" name="authenticity_token" type="hidden" value="z1JM7ffnFK7gOv6S3yzG9UFyakukYHikAU94/3TcT2o="> --><table class="table truncated-table table-hover"><tbody><tr ng-repeat-start="a in attributes | orderBy:\'order\':true" style="{{!a.isCurrent && a.rowStyle}}" ng-class="!a.isCurrent && a.rowClass" ng-click="!a.isCurrent && attributeClicked($event, a)" class=id-row><td><div><div class="pull-left mar-right15"><a ng-hide="a.type === \'keyID\' || a.type === \'uuid\'" style=min-width:45px class="btn btn-lg btn-social-icon" ng-class=a.btnStyle ng-href={{a.link}}><span ng-class=a.iconStyle></span> <span ng-if=a.iconStyle&&!a.link class="pull-left btn btn-lg btn-social-icon" ng-class=a.btnStyle ng-href={{a.link}}><span ng-class=a.iconStyle></span></span></a><identicon identity=a.attr ng-show="a.attr && (a.type === \'keyID\' || a.type === \'uuid\')" width=45></identicon></div><div class=pull-left><a ui-sref="identities.show({ type: a.type, value: a.value })" ng-bind="a.linkName || a.value" class=id-link></a><br><small ng-bind=a.type></small></div><!--\n            <input class="form-control linkedComment" type="text" placeholder="comment" disabled>\n          --><div class=pull-right ng-if=!a.isCurrent><button autocomplete=off name=confirm class="btn btn-default btn-confirm" ng-click="createMessage($event, { type: \'verification\' }, {verifiedAttr: a})" ng-disabled=!authentication.user uib-tooltip=Verify data-style=zoom-out><span class="positive glyphicon glyphicon-ok"></span> {{a.verifications||a.conf}}</button> <button autocomplete=off name=unverify class="btn btn-default btn-unverify" ng-click="createMessage($event, { type: \'unverification\' }, {verifiedAttr: a})" ng-disabled=!authentication.user uib-tooltip=Unverify data-style=zoom-out><span class="negative glyphicon glyphicon-remove"></span> {{a.unverifications||a.ref}}</button></div><div class=clear></div></div></td></tr><tr ng-repeat-end ng-if=!a.isCurrent class="active connectingmsgs"><td class=connectingmsgs data-style=zoom-in data-spinner-color=#000><div uib-collapse=!a.collapse><div ng-repeat="msg in a.connectingMsgs" ng-click="openMessage($event, msg, \'lg\')" class=confirmation-panel><span ng-if="msg.signedData.type === \'verification\'"><span class="positive glyphicon glyphicon-ok hidden-xs mar-left5 pull-right"></span> <span class="positive glyphicon glyphicon-ok visible-xs-inline-block mar-right10"></span> </span><span ng-if="msg.signedData.type === \'unverification\'"><span class="negative glyphicon glyphicon-remove hidden-xs mar-left5 pull-right"></span> <span class="negative glyphicon glyphicon-remove visible-xs-inline-block mar-right10"></span> </span><strong><a ui-sref="identities.show({ type: msg.linkToAuthor.type, value: msg.linkToAuthor.value })" class=id-link><identicon ipfs=ipfs identity=msg.author class=mar-right5 border=3 width=30></identicon><span ng-bind=msg.author_name||msg.signedData.author.type.value></span> </a></strong>- <span ng-bind="msg.signedData.timestamp|date:\'mediumDate\'" class="text-muted small" style=display:inline-block;></span> <span ng-if=msg.signedData.comment>- {{msg.signedData.comment|limitTo:250}}</span></div></div></td></tr><tr class="active add-row"><td><input id=addValue ng-change=guessAttributeType() ng-model=newVerification.value class=form-control name=linkedValue type=text placeholder="value (e.g. alice@example.com)" ng-disabled=!authentication.user> <input id=addType ng-model=newVerification.type class=form-control name=linkedType type=text placeholder="type (e.g. email)" ng-disabled=!authentication.user><!--<td><input id="addComment" class="form-control" name="linkedComment" type="text" placeholder="comment" disabled></td> --> <button autocomplete=off id=addButton ng-click="createMessage($event, { type: \'verification\' }, {verifiedAttr: newVerification})" class="btn btn-default" data-style=zoom-out ng-disabled="!authentication.user || !(newVerification.type && newVerification.value)"><span class="glyphicon glyphicon-plus"></span> Add</button></td></tr></tbody></table>');
$templateCache.put('app/identities/show.html','<section class=cover-container><div ng-click=openCoverPhotoUploadModal() class=cover parallax-background parallax-ratio=-0.2 ng-style=coverPhoto></div><div class="container hidden-xs hidden-sm"><div class="heading-row row"><div class="col-md-8 col-md-offset-3"><h4 ng-show="idType === \'keyID\' || idType === \'uuid\'"><identicon identity=idAttr width=35></identicon><button class="btn btn-default mar-left15" ng-click=openSharePageModal()><span class="glyphicon glyphicon-qrcode mar-right5"></span> Share</button> <button ng-if="authentication.user && !isCurrentUser && idType === \'keyID\'" class="mar-left15 btn btn-default" ng-click=openChatModal()><span class="fa fa-comment mar-right5"></span> Chat</button> <button ng-if="authentication.user && idType === \'keyID\'" class="mar-left15 btn btn-default" ng-click=openVideoChatModal()><span class="glyphicon glyphicon-facetime-video mar-right5"></span> {{isCurrentUser ? \'Go live\' : \'Video\'}}</button> <small class="positive mar-left15" ng-show=isOnline>online</small></h4><h4 ng-hide="idType === \'keyID\' || idType === \'uuid\'"><span ng-bind=idValue class=idValue></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType class=idType></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType class=idType></a> </small><button class="btn btn-default mar-left15" ng-click=openSharePageModal()><span class="glyphicon glyphicon-qrcode mar-right5"></span> Share</button></h4></div></div><div class=row><div class="col-md-9 col-md-offset-3"><ul class="list-inline tab-list"><li ng-if=isUniqueType><a href="" ng-class="{ active: activeTab == 1 }" ng-click=activateTab(1)><span class=hidden-xs>Received </span>({{0+identity.data.receivedPositive+identity.data.receivedNeutral+identity.data.receivedNegative || received.list.length}})</a></li><li ng-if=isUniqueType><a href="" ng-class="{ active: activeTab == 2 }" ng-click=activateTab(2)><span class=hidden-xs>Sent </span>({{0+identity.data.sentPositive+identity.data.sentNeutral+identity.data.sentNegative || sent.length}})</a></li><li><a href="" ng-class="{ active: activeTab == 3 }" ng-click=activateTab(3)><span class=hidden-xs>Identity </span>(<span ng-bind="attributesLength || 0"></span>)</a></li></ul></div></div></div></section><div class=container><div><section><div class=row><div class="col-md-3 id-left-column"><div ng-if=isUniqueType ng-include="\'app/identities/show.stats.html\'"></div><div class=hidden-xs ng-include="\'app/messages/distance-selector.partial.html\'"></div></div><div class="col-md-8 id-right-column"><!-- Nav tabs --><div ng-include="\'app/main/createuser.partial.html\'"></div><uib-tabset active=activeTab><uib-tab index=1 ng-if=isUniqueType><uib-tab-heading><span class=hidden-xs>Received ({{0+identity.data.receivedPositive+identity.data.receivedNeutral+identity.data.receivedNegative}})</span> <span class=visible-xs>Recv ({{0+identity.data.receivedPositive+identity.data.receivedNeutral+identity.data.receivedNegative}})</span></uib-tab-heading><div ng-if=isCurrentUser ng-include="\'app/main/getstarted.partial.html\'"></div><div class="panel panel-info" ng-if="!isCurrentUser && authentication.user && authentication.identity.data && !authentication.identity.data.sentPositive"><div class=panel-heading>Trust this user? Upvote them to see their posts!</div></div><div ng-include="\'app/messages/create.rating.partial.html\'" ng-show="!loggingIn && authentication.user && !isCurrentUser"></div><div ng-include="\'app/identities/show.received.html\'"></div><div ng-if="!isCurrentUser && receivedFiltered.length == 0" class="alert alert-info text-center">No messages yet</div></uib-tab><uib-tab index=2 ng-if=isUniqueType><uib-tab-heading>Sent ({{0+identity.data.sentPositive+identity.data.sentNeutral+identity.data.sentNegative}})</uib-tab-heading><div ng-include="\'app/identities/show.sent.html\'"></div></uib-tab><uib-tab index=3><uib-tab-heading>Id<span class=hidden-xs>entity</span> (<span ng-bind="attributesLength || 0"></span>)</uib-tab-heading><div ng-include="\'app/identities/show.attributes.html\'" id=attributes></div></uib-tab></uib-tabset></div></div></section></div></div>');
$templateCache.put('app/identities/show.received.html','<div infinite-scroll=getReceivedMsgs() infinite-scroll-distance=2 infinite-scroll-disabled="true || !identity || activeTab != 1"><div class=panel ng-class="{\'mar-bot5\': (filters.type.indexOf(\'rating\') === 0)}"><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === null) }" ng-click="setFilters({ type: null })"><a>All</a></li><li ng-class="{active: (filters.type === \'rating\') }" ng-click="setFilters({type: \'rating\'})"><a>Rating</a></li><li ng-class="{active: (filters.type === \'verification\') }" ng-click="setFilters({type:\'verification\'})"><a>Verification</a></li></ul></div></div><div class=panel ng-show="filters.type.indexOf(\'rating\') === 0"><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === \'rating:positive\') }" ng-click="setFilters({type: \'rating:positive\'})"><a><span class=positive><span class="visible-xs-inline glyphicon glyphicon-thumbs-up"></span><span class=hidden-xs>Pos<span class=hidden-md>itive</span></span> ({{0+identity.data.receivedPositive}})</span></a></li><li ng-class="{active: (filters.type === \'rating:neutral\') }" ng-click="setFilters({type: \'rating:neutral\'})"><a><span class=neutral><span class="visible-xs-inline glyphicon glyphicon-question-sign"></span><span class=hidden-xs>Neut<span class=hidden-md>ral</span></span> ({{0+identity.data.receivedNeutral}})</span></a></li><li ng-class="{active: (filters.type === \'rating:negative\') }" ng-click="setFilters({type: \'rating:negative\'})"><a><span class=negative><span class="visible-xs-inline glyphicon glyphicon-thumbs-down"></span><span class=hidden-xs>Neg<span class=hidden-md>ative</span></span> ({{0+identity.data.receivedNegative}})</span></a></li></ul></div></div><message auth=authentication ipfs=ipfs msg-utils=msgUtils msg=msg page-info=identity ng-repeat="msg in received.list | filter:msgFilter | orderBy:\'signedData.timestamp\' : true as receivedFiltered" ng-click="openMessage($event, msg, \'lg\')"></message></div>');
$templateCache.put('app/identities/show.sent.html','<div infinite-scroll=getSentMsgs() infinite-scroll-distance=2 infinite-scroll-disabled="true || !identity ||\xA0activeTab != 2"><div class=panel ng-class="{\'mar-bot5\': (filters.type.indexOf(\'rating\') === 0)}"><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === null) }" ng-click="setFilters({ type: null })"><a>All</a></li><li ng-class="{active: (filters.type === \'rating\') }" ng-click="setFilters({type: \'rating\'})"><a>Rating</a></li><li ng-class="{active: (filters.type === \'verification\') }" ng-click="setFilters({type:\'verification\'})"><a>Verification</a></li><!-- <li ><a href="#" data-val="other"><span class="glyphicon glyphicon-question-sign"></span> Other</a></li> --></ul></div></div><div ng-show="filters.type.indexOf(\'rating\') === 0" class=panel><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === \'rating:positive\') }" ng-click="setFilters({type: \'rating:positive\'})"><a><span class=positive><span class="visible-xs-inline glyphicon glyphicon-thumbs-up"></span><span class=hidden-xs>Pos<span class=hidden-md>itive</span></span> ({{0+identity.data.sentPositive}})</span></a></li><li ng-class="{active: (filters.type === \'rating:neutral\') }" ng-click="setFilters({type: \'rating:neutral\'})"><a><span class=neutral><span class="visible-xs-inline glyphicon glyphicon-question-sign"></span><span class=hidden-xs>Neut<span class=hidden-md>ral</span></span> ({{0+identity.data.sentNeutral}})</span></a></li><li ng-class="{active: (filters.type === \'rating:negative\') }" ng-click="setFilters({type: \'rating:negative\'})"><a><span class=negative><span class="visible-xs-inline glyphicon glyphicon-thumbs-down"></span><span class=hidden-xs>Neg<span class=hidden-md>ative</span></span> ({{0+identity.data.sentNegative}})</span></a></li></ul></div></div><message auth=authentication ipfs=ipfs msg-utils=msgUtils msg=msg page-info=identity ng-repeat="msg in sent | filter:msgFilter | orderBy:\'signedData.timestamp\' : true as sentFiltered" ng-click="openMessage($event, msg, \'lg\')"></message></div><div ng-if="sentFiltered.length == 0" class="alert alert-info text-center">No messages yet</div>');
$templateCache.put('app/identities/show.stats.html','<div><p class="hidden-md hidden-lg" ng-hide=!stats.name><span ng-bind=idValue class=idValue></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType class=idType></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType class=idType></a></small></p><div class=stats-box><div class=row><div class=col-xs-12><p class=align-center><identicon ng-click=openProfilePhotoUploadModal() identity=identity ipfs=ipfs border=4 show-distance=0 width=230 ng-if=hideProfilePhoto></identicon><identicon ng-click=openProfilePhotoUploadModal() identity=identity ipfs=ipfs border=4 show-distance=0 width=230 ng-if=!hideProfilePhoto></identicon></p></div></div><div class=row><div class=col-xs-12><h4><span class="visible-xs-inline-block visible-sm-inline-block mar-right15"><span ng-show="idType === \'keyID\' || idType === \'uuid\'"><identicon identity=idAttr width=35></identicon></span><span ng-hide="idType === \'keyID\' || idType === \'uuid\'"><span ng-if=!(identity.data.mostVerifiedAttributes.name||identity.data.mostVerifiedAttributes.nickname)><span ng-bind=idValue class=idValue></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType class=idType></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType class=idType></a> </small></span></span></span><span ng-bind=identity.primaryName></span> <span class="glyphicon glyphicon-ok-sign" style=color:#337ab7 uib-tooltip="Verified by a trusted verifier" ng-if=identity.wellVerified></span> <span ng-hide="!identity.data.mostVerifiedAttributes.nickname || identity.data.mostVerifiedAttributes.nickname == identity.data.mostVerifiedAttributes.primaryName">(<span class=text-muted ng-bind=identity.nickname></span>) </span><button class="mar-left15 visible-xs-inline-block visible-sm-inline-block btn btn-default" ng-click=openSharePageModal()><span class="glyphicon glyphicon-share"></span></button> <button ng-if="authentication.user && !isCurrentUser && idType === \'keyID\'" class="mar-left15 visible-xs-inline-block visible-sm-inline-block btn btn-default" ng-click=openChatModal()><span class="fa fa-comment"></span></button> <button ng-if="authentication.user && !isCurrentUser && idType === \'keyID\'" class="visible-xs-inline-block visible-sm-inline-block mar-left15 btn btn-default" ng-click=openVideoChatModal()><span class="glyphicon glyphicon-facetime-video"></span></button> <small class="positive mar-left15 visible-xs-inline-block visible-sm-inline-block" ng-show=isOnline>online</small> <span ng-if="identity.data.trustDistance === 0" class="label label-default pull-right">viewpoint</span> <span ng-if="identity.data.trustDistance > 0" ng-bind="identity.data.trustDistance | ordinal" class="label label-default pull-right"></span> <span ng-if="identity.data.trustDistance === false" class="label label-default pull-right">unconnected</span></h4></div></div><div class=row><div class="col-xs-12 col-sm-6 col-md-12 mar-bot10 mar-top10"><div class=mar-bot10 ng-if="authentication.user && !identity.hasProperName && !nameAdded"><a href="" ng-click=addName() ng-hide=addingName>Add name</a><form class=form-inline ng-show=addingName ng-submit=addName(name)><div class=form-group><input focus-on=addNameFocus type=text class=form-control ng-model=name placeholder="Add name"></div><button type=submit class="btn btn-default"><span class="glyphicon glyphicon-plus"></span></button></form></div><p><b>Received: <span ng-if="identity.data.receivedPositive || identity.data.receivedNegative"><span ng-bind="identity.data.receivedPositive / (identity.data.receivedPositive+identity.data.receivedNeutral+identity.data.receivedNegative) * 100 | number:0"></span>% positive </span><span ng-if="!(identity.data.receivedPositive || identity.data.receivedNegative)">&mdash;</span></b><br>Sent: <span ng-if="identity.data.sentPositive || identity.data.sentNegative"><span ng-bind="identity.data.sentPositive / (identity.data.sentPositive+identity.data.sentNeutral+identity.data.sentNegative) * 100 | number:0"></span>% positive </span><span ng-if="!(identity.data.sentPositive || identity.data.sentNegative)">&mdash;</span></p><!--\n          <p class="received-stats">\n          <div><strong>Received</strong></div>\n          <div>\n          <strong>\n          <span class="positive"><span class="glyphicon glyphicon-thumbs-up"></span> <span ng-bind="identity.data.receivedPositive">-</span></span>\n          <span class="neutral"><span class="glyphicon glyphicon-question-sign"></span> <span ng-bind="identity.data.receivedNeutral">-</span></span>\n          <span class="negative"><span class="glyphicon glyphicon-thumbs-down"></span> <span ng-bind="identity.data.receivedNegative">-</span></span>\n          </strong>\n          </div>\n          </p>\n          <p>\n          <div>Sent</div>\n          <div>\n          <span class="positive"><span class="glyphicon glyphicon-thumbs-up"></span> <span ng-bind="identity.data.sentPositive">-</span></span>\n          <span class="neutral"><span class="glyphicon glyphicon-question-sign"></span> <span ng-bind="identity.data.sentNeutral">-</span></span>\n          <span class="negative"><span class="glyphicon glyphicon-thumbs-down"></span> <span ng-bind="identity.data.sentNegative">-</span></span>\n          </div>\n          </p> --><div ng-if="scores.verifier && scores.verifier.score > 0" class="text-center alert alert-info"><span class="fa fa-shield" style=font-size:2em></span><p>This identity is a <b>trusted verifier</b> in this web of trust. It can grant verification checkmarks.</p></div><div ng-if=isUniqueType class="mar-top10 quick-contact"><ul class=list-unstyled><li ng-repeat="a in attributes" ng-if=a.quickContact><a ng-href={{a.link}}><span ng-class=a.iconStyle></span><span ng-bind="a.linkName || a.value"></span></a></li><li ng-if=stats.first_seen><span class="fa fa-calendar"></span>First seen: <span ng-if=stats.first_seen ng-bind="stats.first_seen|date:\'mediumDate\'"></span> <span ng-if=!stats.first_seen>&mdash;</span></li></ul></div></div><div class="col-xs-12 col-sm-6 col-md-12 mar-top10"><div ng-if="isUniqueType && hasThumbsUp" class="stats-box mar-bot10"><h5>Thumbs up</h5><a ng-repeat="msg in thumbsUp | orderBy:\'authorTrustDistance\'" ng-class="{ \'hidden-xs\': $index > 3, \'hidden-sm\': $index > 4 }" class="mar-right5 mar-bot5" ui-sref="identities.show({ type: msg.linkToAuthor.type, value: msg.linkToAuthor.value })" uib-tooltip="{{ msg.author_name || msg.linkToAuthor.value }}"><identicon ipfs=ipfs identity=msg.author class=no-glow border=3 width=60></identicon></a></div><div ng-if="isUniqueType && hasThumbsDown" class="stats-box mar-bot10"><h5>Thumbs down</h5><a ng-repeat="msg in thumbsDown | orderBy:\'authorTrustDistance\'" ng-class="{ \'hidden-xs\': $index > 3, \'hidden-sm\': $index > 4 }" class="mar-right5 mar-bot5" ui-sref="identities.show({ type: msg.linkToAuthor.type, value: msg.linkToAuthor.value })" uib-tooltip="{{ msg.author_name || msg.linkToAuthor.value }}"><identicon ipfs=ipfs identity=msg.author class=no-glow border=3 width=60></identicon></a></div></div></div></div></div>');
$templateCache.put('app/identities/upload.modal.html','<div class="col-md-10 col-md-offset-1" ng-controller=IdentitiesController><div class="panel panel-default mar-top15"><div class=panel-heading><form name=form><div class="drop-box mar-bot10" ngf-resize="squarify ? {ratio:\'1:1\',centerCrop:true} : {}" ngf-select ngf-drop ng-model=file name=file ngf-pattern="\'image/*\'" ngf-accept="\'image/*\'" ngf-max-size=5MB ngf-min-height=100 style=width:100%;min-height:300px;text-align:center><div ng-if=!file style="padding:120px 0">Drop file or click</div><img ng-if=file ngf-src=file width=70%></div><button class="btn btn-primary" ng-disabled=!file type=submit ng-click=uploadModalCallback(file)>{{ modalButtonText }}</button></form></div></div></div>');
$templateCache.put('app/identities/video.modal.html','<div class="col-md-10 col-md-offset-1" ng-controller=IdentitiesController><div class="panel panel-default mar-top15"><div class=panel-heading><div class=mar-bot15><div style=color:red;font-weight:bold><!-- communications are encrypted, but anyone can see who are communicating with each other --> currently this is unencrypted livestreaming :D</div><identicon identity=identity ipfs=ipfs width=35></identicon><span class=mar-right15><span ng-show="idType === \'keyID\' || idType === \'uuid\'"><identicon identity=idAttr width=35></identicon></span><span ng-hide="idType === \'keyID\' || idType === \'uuid\'"><span ng-if=!(identity.data.mostVerifiedAttributes.name||identity.data.mostVerifiedAttributes.nickname)><span ng-bind=idValue class=idValue></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType class=idType></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType class=idType></a> </small></span></span></span><span ng-bind=identity.primaryName></span> <small class="positive mar-left15" ng-show=isOnline>online</small><div class=mar-top5><videochat ng-if="idType === \'keyID\'" gun=gun pubkey=idValue></videochat></div><p ng-if=isCurrentUser><button ng-click=copyToClipboard(idUrl) class="btn btn-default mar-top10">Copy link to stream</button></p></div></div></div></div>');
$templateCache.put('app/main/about.html','<div class="container mar-bot30 mar-top20-xs no-padding-xs"><div class=col-md-8><div class="panel panel-default"><div class=panel-body><h3>About Iris</h3><p class=lead>Iris is a social networking application that stores everything on its users\' devices which communicate directly with each other &mdash; no corporate gatekeepers needed.</p><p>Longer description on <a href=https://github.com/irislib/iris/blob/master/README.md>GitHub</a>.</p><h4>Available at</h4><ul><li><a href=https://iris.to>iris.to</a></li><li><a href=https://iris.cx>iris.cx</a></li><li><a href=https://irislib.github.io>irislib.github.io</a></li><li>Browser extension: use Iris even if you are offline. In the future, can be used to sign in to websites.<ul><li><a href=https://chrome.google.com/webstore/detail/iris/oelmiikkaikgnmmjaonjlopkmpcahpgh>Chrome</a></li><li><a href=https://addons.mozilla.org/en-US/firefox/addon/irisapp/ >Firefox</a></li></ul></li><!-- TODO: add dynamically updated /ipfs url --><li>Upcoming: Electrum desktop app with bluetooth and LAN peerfinding!</li></ul><h4>Privacy</h4><p>It\'s important to remember that as for now, <b>everything you post on Iris is public</b>.</p><p>Private chat between users will probably be implemented at some point, and other user permissions and groups maybe later.</p><p>See <a ui-sref=privacy>privacy policy</a> for more information.</p></div></div></div></div>');
$templateCache.put('app/main/createuser.partial.html','<div class="panel panel-default" ng-if=!authentication.user><div class=panel-body><form class="form-inline createuser-form" ng-submit=createUser(newUserName)><div class=form-group><input focus-on=newUser style=min-width:200px type=text class=form-control ng-disabled=creatingUser ng-model=newUserName placeholder="What\'s your name?"></div><i class="hidden-xs mar-right5"></i> <button type=submit id=createUserBtn class="btn btn-primary" ng-disabled="!newUserName || creatingUser">Go!</button> <i class="mar-left15 hidden-xs"></i><div class=form-group>or <a ng-click=openLoginModal() href="">Log in</a></div></form></div></div>');
$templateCache.put('app/main/custom-search-row.html','<a class=search-result-row><identicon ipfs=$parent.$parent.$parent.$parent.ipfs identity=match.label border=3 width=46 class=mar-right10></identicon><span ng-bind-html="match.label.primaryName | uibTypeaheadHighlight:query"></span></a>');
$templateCache.put('app/main/getstarted.partial.html','<div ng-if="authentication.user && authentication.identity.data && !authentication.identity.data.sentPositive" class="alert alert-info text-center"><p class=h3 style=margin-bottom:15px>Welcome to social networking freedom!</p><p>Start by upvoting your friends: ask for their profile links or scan their QR codes (<b><a ui-sref=identities.create>Add contact</a></b>). That makes their posts visible to you.</p><p>Alternatively, you can upvote this Iris distribution\'s <b><a ui-sref="identities.show({type:\'keyID\', value:defaultIndexKeyID})">default address book</a></b> as a starting point.</p><br></div><div ng-if="authentication.user && authentication.identity.data && authentication.identity.data.sentPositive && !authentication.identity.data.receivedPositive" class="alert alert-info text-center"><p class=h3 style=margin-bottom:15px>Great, you have trusted contacts!</p><p>Next you should <b>ask your friends to upvote your account</b>, so they and their network will see your messages.</p><p><button ng-click=copyToClipboard(authentication.user.url) class="btn btn-primary mar-top10">Copy link to your profile</button></p><p>Or show them your QR code:</p><div class=mar-top20><qrcode data={{authentication.user.url}} size=240></qrcode></div><br></div><div ng-if="authentication.user && authentication.identity.data && authentication.identity.data.sentPositive && authentication.identity.data.receivedPositive && localSettings && !localSettings.profileUploadNotificationClosed && authentication.identity.mva && !authentication.identity.mva.profilePhoto" class="alert alert-info text-center"><p class=h3 style=margin-bottom:15px>You\'re good to go!</p><p style="margin-bottom: 15px">Set a profile picture?</p><p><button class="btn btn-primary mar-right15" ng-click=openProfilePhotoUploadModal()>Yes</button> <button class="btn btn-default" ng-click=closeProfileUploadNotification()>Not now</button></p><br></div>');
$templateCache.put('app/main/login.modal.html','<div class="col-md-10 col-md-offset-1"><div class="panel panel-default mar-top15"><div class=panel-heading><!--<div class="checkbox">\n        <label>\n          <input type="checkbox" value="" checked="checked">\n          Remember me\n        </label>\n      </div>--><h3>New user</h3><form ng-submit=createUser(newUserName)><input focus-on=newUser type=text class=form-control ng-model=newUserName placeholder="Your name"><br><input type=submit value=Go! class="btn btn-primary" ng-disabled=!newUserName></form><hr style=border-color:#ddd><h3>Existing user</h3><form><textarea rows=6 class=form-control placeholder="Paste private key or drop file" ng-model=privateKeySerialized></textarea><br><button class="btn btn-primary" ng-disabled=!privateKeySerialized ng-click="loginWithKey(privateKeySerialized, publicKeyPEM)">Log in</button> <a class=pull-right href="" ng-click="lostKey = !lostKey">Lost your key?</a></form><div ng-if=lostKey class="mar-top30 panel panel-info"><div class=panel-heading>Don\'t worry: just go with "New user" and ask your trusted contacts to verify that your new key belongs to the already existing identity.</div></div></div></div></div>');
$templateCache.put('app/main/logout.modal.html','<div class="col-md-10 col-md-offset-1"><div class="panel panel-default mar-top15"><div class=panel-heading>Log out?</div><div class=panel-body><p>You cannot log in back to this account unless you have saved a backup of your private key.</p><a class="btn btn-default" ng-click=$dismiss()>Cancel</a> <a href=# class="btn btn-danger" id=logout ng-click=logout()>Log out</a></div></div></div>');
$templateCache.put('app/main/privacy-policy.html','<div class="container mar-bot30 mar-top20-xs no-padding-xs"><div class=col-md-8><div class="panel panel-default"><div class=panel-body><h3>Privacy policy</h3><p>Iris is a peer-to-peer application like Bitcoin, not a corporate or other legal entity. All data is stored and indexed by the users who run the application. The application only makes connections to other decentralized network peers.</p><p>Please keep in mind that everything you post or add on Iris is <b>public</b> unless otherwise stated.</p><p>Iris\'s contact list feature can be compared to your mobile phone\'s address book, but with synchronization with others. Users can add contact details and attributes of arbitrary type.</p><p>Developers of the application have no control over content added by users and are not responsible for it. It is the user\'s responsibility to comply with applicable laws regarding public messaging and listing of personal information.</p><p>An Iris "account" is a cryptographic keypair generated and stored locally on the user\'s device (in browser or other application). It does not constitute a relationship with any corporate or other entity.</p></div></div></div></div>');
$templateCache.put('app/main/settings.html','<div class="container mar-top20-xs"><div class=col-md-8><h3>Settings</h3><div ng-if=authentication.user><p><b>For normal people</b></p><div class="panel panel-default"><div class=panel-heading>Log out</div><div class=panel-body><p>You cannot log in back to this account unless you have saved a backup of your private key.</p><p><button class="btn btn-danger" ng-click=openLogoutModal()>Log out</button></p></div></div><div class="panel panel-danger"><div class=panel-heading>Private key</div><div class=panel-body><p>Private key is used to log in to your account. Keep your private key safe!</p><p><button class="btn btn-danger" ng-click=copyToClipboard(privateKey|json)>Copy to clipboard</button> <button class="btn btn-danger" ng-click=downloadText(privateKey|json)>Download</button></p></div></div></div><p><b>Geeky stuff</b></p><div class="panel panel-default"><div class=panel-heading>GUN peers</div><div class=panel-body><p><a href=https://gun.eco/ >GUN</a> stores dynamic content: indexes of messages and identities.</p></div><div class=table-responsive><table class="table table-striped"><tbody><tr ng-repeat="(key, value) in gun[\'_\'].opt.peers"><td><span ng-show="value.wire && value.wire.hied" class="positive fa fa-check-circle"></span> <span ng-hide="value.wire && value.wire.hied" class="negative fa fa-times-circle"></span> <small ng-bind=key></small></td><td><button ng-click=removeGunPeer(key) class="pull-right btn btn-danger"><i class="glyphicon glyphicon-trash"></i></button></td></tr><tr><td colspan=2><form class=form-inline ng-submit=addGunPeer(gunUrl)><input class=form-control type=text placeholder="Peer url" ng-model=gunUrl> <input class="btn btn-primary" type=submit value="Add GUN peer"></form></td></tr></tbody></table></div></div><div class="panel panel-default"><div class=panel-heading>IPFS peers</div><div class=panel-body><p><a href=https://ipfs.io>IPFS</a> stores static content: messages and image files.</p><p ng-hide="ipfsPeers && ipfsPeers.length"><small>No IPFS peers</small></p></div><div ng-if="ipfsPeers && ipfsPeers.length" class=table-responsive><table class="table table-striped"><tbody><tr ng-repeat="peer in ipfsPeers"><td><span class="positive fa fa-check-circle"></span> <small ng-bind=peer.addr.toString()></small></td><td><button ng-click=removeIpfsPeer(peer.addr.toString()) class="pull-right btn btn-danger"><i class="glyphicon glyphicon-trash"></i></button></td></tr><tr><td colspan=2><form class=form-inline ng-submit=addIpfsPeer(ipfsUrl)><input class=form-control type=text placeholder="Peer url" ng-model=ipfsUrl> <input class="btn btn-primary" type=submit value="Add IPFS peer"><!--<button ng-click="$event.preventDefault;addDefaultIpfsPeers()" class="btn btn-default pull-right">Add default peers</button>--></form></td></tr></tbody></table></div></div><div class="panel panel-default"><div class=panel-heading>Search indexes</div><div class=panel-body><p><small><b>query</b> = when you search for content on Iris, include results from the index</small></p><p><small><b>subscribe</b> = listen for new messages that are added to the index, potentially adding them to your own index</small></p><table class="table table-striped"><thead><tr><td>index</td><td>query</td><td>subscribe</td></tr></thead><tbody><tr ng-repeat="i in trustedIndexes"><td><identicon uib-tooltip={{i.attribute.value}} identity=i.attribute class=mar-right5 border=3 width=30></identicon><a ui-sref="identities.show({ type: i.attribute.type, value: i.attribute.value })"><identicon ipfs=ipfs identity=i.identity border=3 width=30></identicon></a></td><td><input type=checkbox checked></td><td><input type=checkbox checked></td></tr><tr><td colspan=4><form class=form-inline ng-submit=addTrustedIndex(trustedIndexKey)><input class=form-control type=text placeholder="public key" ng-model=trustedIndexKey> <input class="btn btn-primary" type=submit value="Add trusted index"></form></td></tr></tbody></table></div></div><!--\n    <div class="panel panel-default">\n      <div class="panel-heading">\n        Iris indexing settings\n      </div>\n      <div class="panel-body">\n        <p>\n          <pre ng-bind="irisIndex.options|json"></pre>\n        </p>\n      </div>\n    </div>--><p><b>Other stuff</b></p><div class="panel panel-default"><div class=panel-body><p><a ui-sref=about>About Iris</a></p><p><a ui-sref=privacy>Privacy policy</a></p></div></div></div></div>');
$templateCache.put('app/messages/create.partial.html','<div class="panel panel-default panel-default" ngf-drop ngf-keep="\'distinct\'" ngf-drop-disabled="addingMessage || loggingIn || !authentication.user" ng-model=newMessage.files ngf-drag-over-class="\'dragover\'" ngf-multiple=true><div class=panel-body><form ng-submit="createMessage($event, { type: \'post\', comment: newMessage.comment, pollOptions: createPoll && newMessage.pollOptions }, { files: newMessage.files });createPoll = false"><div class=row ng-if="newMessage.files && newMessage.files.length"><div class=col-xs-12><p ng-class="{\'align-center\': newMessage.files.length == 1}"><span ng-repeat="file in newMessage.files" class=attachment><button type=button class=close aria-label=Close ng-click=newMessage.files.splice($index,1)><span aria-hidden=true>&times;</span></button> <a ng-show="[\'video\',\'image\',\'audio\'].indexOf(file.type.substr(0,5)) == -1" ng-bind=file.name></a> <img ngf-thumbnail="file || \'/thumb.jpg\'" ng-style="{\'max-width\': newMessage.files.length > 1 ? \'150px\' : \'100%\', \'max-height\': newMessage.files.length > 1 ? \'150px\' : \'450px\'}"><audio controls ngf-src=file></audio><video controls ngf-src=file></video></span></p></div></div><div class=form-group><textarea style="resize: vertical" ng-disabled="addingMessage || loggingIn || !authentication.user" name=comment class=form-control id=comment ng-model=newMessage.comment placeholder="What\'s on your mind?"></textarea></div><div ng-if=createPoll ng-include="\'app/messages/poll.create.html\'"></div><div class=row><div class=col-xs-12><button ng-disabled="addingMessage || loggingIn || !authentication.user || !(newMessage.comment || newMessage.files.length)" type=submit class="btn btn-primary" data-style=zoom-out>Publish</button> <button ngf-select ng-model=newMessage.files ngf-multiple=true href="" ng-disabled="addingMessage || loggingIn || !authentication.user" class="btn btn-default pull-right" data-style=zoom-out><span class="fa fa-paperclip"></span> Add files</button> <button class="btn btn-default pull-right" ng-click="$event.preventDefault();newMessage.pollOptions=[{text: \'\'}, {text: \'\'}];createPoll = !createPoll"><span class="glyphicon glyphicon-stats"></span> Create poll</button></div></div></form></div></div>');
$templateCache.put('app/messages/create.rating.partial.html','<div ng-style=newMessage.style class="panel panel-default panel-success" id=newRatingPanel><div class=panel-body id=write-feedback><form ng-controller=MessagesController ng-submit="createMessage($event, { type: \'rating\', rating: newMessage.rating, comment: newMessage.comment }, {addTo: received})"><div class=form-group><textarea name=comment class=form-control id=comment ng-model=newMessage.comment ng-disabled=addingMessage placeholder="Comment (optional)"></textarea></div><div class=row><div class="col-sm-10 col-xs-12 rating-slider" id=write-msg-slider><rzslider rz-slider-model=newMessage.rating rz-slider-options=slider.options min=-3 max=3 step=1></rzslider><span class="hidden-xs write-msg-icons mar-left5"><span ng-repeat="i in iconCount(newMessage.rating) track by $index" class="write-msg-icon glyphicon glyphicon-thumbs-up mar-left5" ng-class="[iconStyle(newMessage.rating), iconClass(newMessage.rating)]"></span></span></div><div class="col-sm-2 col-xs-12" style=text-align:right><span class="visible-xs pull-left write-msg-icons"><span ng-repeat="i in iconCount(newMessage.rating) track by $index" class="write-msg-icon glyphicon glyphicon-thumbs-up mar-left5" ng-class="[iconStyle(newMessage.rating), iconClass(newMessage.rating)]"></span> </span><button ng-disabled=addingMessage type=submit class="pull-right btn btn-primary" data-style=zoom-out><span ng-show="newMessage.rating == 0">Neutral</span> <span ng-show="newMessage.rating > 0">Upvote</span> <span ng-show="newMessage.rating < 0">Downvote</span></button></div></div></form></div></div>');
$templateCache.put('app/messages/distance-selector.partial.html','<div class="text-center alert alert-info">Viewing as:<br class=hidden-sm><span ng-if=viewpoint><a ui-sref="identities.show({ type: viewpoint.type, value: viewpoint.value })" class=id-link><span class="distance-container mar-right5 mar-left5"><identicon ipfs=ipfs identity=viewpoint.identity border=3 width=35></identicon></span><strong ng-bind=viewpoint.mostVerifiedAttributes.name.attribute.value></strong></a></span><br class=hidden-sm>Max distance from viewpoint: <span class="btn-group trust-distance-selector"><button type=button class="btn btn-default" ng-click="setFilters({maxDistance: -1})" ng-class="{active: filters.maxDistance === -1}" uib-tooltip="Distance filter off">\u2715</button> <button type=button class="btn btn-default" ng-click="setFilters({maxDistance: 1})" ng-class="{active: filters.maxDistance === 1}">1</button> <button type=button class="btn btn-default" ng-click="setFilters({maxDistance: 2})" ng-class="{active: filters.maxDistance === 2}">2</button> <button type=button class="btn btn-default" ng-click="setFilters({maxDistance: 3})" ng-class="{active: filters.maxDistance === 3}">3</button> <button type=button class="btn btn-default" ng-click="setFilters({maxDistance: 0})" ng-class="{active: filters.maxDistance === 0}" uib-tooltip=Unlimited>\u221E</button></span></div>');
$templateCache.put('app/messages/filters.partial.html','<div class="panel panel-default"><div class="panel-heading visible-xs visible-sm" ng-click="collapseFilters = !collapseFilters"><h4 class=panel-title><a><span class="fa fa-filter"></span> Filters</a></h4></div><div class="panel-body filters" uib-collapse=collapseFilters><ul class="nav nav-pills nav-stacked msg-type-filter"><li ng-class="{active: (filters.type === null) }" ng-click="setFilters({ type: null })"><a><span class="glyphicon glyphicon-home"></span> All</a></li><li ng-class="{active: (filters.type === \'post\') }" ng-click="setFilters({ type: \'post\' })"><a><span class="fa fa-pencil"></span> Post</a></li><li ng-class="{active: (filters.type === \'rating\') }" ng-click="setFilters({type: \'rating\'})"><a><span class="glyphicon glyphicon-thumbs-up"></span> Rating</a></li><ul class="nav nav-pills nav-stacked" style="padding-left: 1em;"><li ng-class="{active: (filters.type === \'rating:positive\') }" ng-click="setFilters({type: \'rating:positive\'})"><a><span class=positive><span class="glyphicon glyphicon-thumbs-up"></span> Positive</span></a></li><li ng-class="{active: (filters.type === \'rating:neutral\') }" ng-click="setFilters({type: \'rating:neutral\'})"><a><span class=neutral><span class="glyphicon glyphicon-question-sign"></span> Neutral</span></a></li><li ng-class="{active: (filters.type === \'rating:negative\') }" ng-click="setFilters({type: \'rating:negative\'})"><a><span class=negative><span class="glyphicon glyphicon-thumbs-down"></span> Negative</span></a></li></ul><li ng-class="{active: (filters.type === \'verification\') }" ng-click="setFilters({type:\'verification\'})"><a><span class="glyphicon glyphicon-ok"></span> Verification</a></li><!-- <li ><a href="#" data-val="other"><span class="glyphicon glyphicon-question-sign"></span> Other</a></li> --></ul><div ng-include="\'app/messages/distance-selector.partial.html\'"></div></div></div>');
$templateCache.put('app/messages/list.html','<div class="container no-padding-xs"><section><div ng-if=!authentication.user class=jumbotron><div class=align-center><h1>Social networking freedom</h1></div><div class=row><div class=col-sm-4><div class=align-center><i class="hidden-xs fa fa-download fa-5x mar-bot20"></i><p><i class="hidden-sm hidden-md hidden-lg fa fa-download"></i> Everything is stored on users\' devices &mdash; no corporate gatekeepers.</p></div></div><div class=col-sm-4><div class=align-center><i class="hidden-xs fa fa-thumbs-up fa-5x mar-bot20"></i><p><i class="hidden-sm hidden-md hidden-lg fa fa-thumbs-up"></i> Filter all content using your web of trust.</p></div></div><div class=col-sm-4><div class=align-center><i class="hidden-xs fa fa-check fa-5x mar-bot20"></i><p><i class="hidden-sm hidden-md hidden-lg fa fa-check"></i> Keep your contacts and trusted online identity up-to-date.</p></div></div></div><p class="align-center mar-top15" style=margin-bottom:0><a ui-sref=about>Read more</a></p></div><div id=messages class=row><div class=col-md-4><div class="hidden-xs hidden-sm" ng-include="\'app/messages/filters.partial.html\'"></div></div><div class=col-md-8><div ng-include="\'app/main/createuser.partial.html\'"></div><div ng-include="\'app/main/getstarted.partial.html\'"></div><div ng-if=authentication.user ng-include="\'app/messages/create.partial.html\'"></div><div class="visible-xs visible-sm" ng-include="\'app/messages/filters.partial.html\'"></div><div infinite-scroll=showMoreMsgs(); infinite-scroll-distance=1 infinite-scroll-disabled="!msgs || !msgs.list || !irisIndex || loadingMsgs"><message auth=authentication ng-repeat="msg in msgs.list | filter:msgFilter | orderBy:\'signedData.timestamp\' : true | limitTo:filters.limit as filteredMsgs track by msg.hash" msg=msg ng-click="openMessage($event, msg, \'lg\');$event.preventDefault()"></message></div><div class="alert alert-info text-center" ng-if=!filteredMsgs.length>No messages yet</div></div></div></section></div>');
$templateCache.put('app/messages/poll.create.html','<div class=row><div class=col-xs-12><ul><li ng-repeat="o in newMessage.pollOptions" class=mar-bot5><div class=form-inline><input class=form-control style="width: 200px;display: inline-block;" placeholder="option {{$index + 1}}" ng-model=o.text> <button class="btn btn-default" ng-if="$index > 1" ng-click="newMessage.pollOptions.splice($index, 1)"><i class="fa fa-times"></i></button></div></li><li><a ng-click="newMessage.pollOptions.push({text: \'\'})">Add option</a></li></ul></div></div>');
$templateCache.put('app/messages/share.modal.html','<div class="panel panel-default"><div class=panel-body><h3>Share message?</h3><form ng-submit="shareMessage(message, comment)"><p><input type=text class=form-control placeholder="Add comment" ng-model=comment></p><p><message auth=authentication ipfs=ipfs show-recipient=true msg=msg page-info=info ng-repeat="msg in [message]"></message></p><button class="btn btn-primary">Share</button></form></div></div>');
$templateCache.put('app/messages/show.html','<section><div class="col-md-8 col-md-offset-2 msg-col"><message auth=authentication msg-utils=msgUtils ipfs=ipfs show-recipient=true msg=msg page-info=info ng-repeat="msg in [message]"></message><div class="panel panel-info"><div class=panel-heading>Message origin verified by <span ng-show=message.verifiedByAttr><identicon identity=message.verifiedByAttr class=mar-right5 border=3 width=35></identicon></span>which is associated with <a ng-if=false ng-bind=message.signerName||message.signerKeyID ui-sref="identities.show({type: \'keyID\', value: message.signerKeyID })"></a> <strong><a ui-sref="identities.show({ type: \'keyID\', value: message.signerKeyID })" class=id-link><identicon ipfs=ipfs identity=message.verifiedBy class=mar-right5 border=3 width=35></identicon><span ng-bind=message.verifiedBy.primaryName></span></a></strong></div></div><p ng-if=message.data.context><small>Context: {{message.data.context}}</small></p><p><button class="btn btn-default" ng-click="collapseRawData = !collapseRawData">Show raw data</button></p><pre uib-collapse=!collapseRawData ng-bind=message.strData></pre><message ng-repeat="msg in message.repliesArr" auth=authentication msg-utils=msgUtils ipfs=ipfs show-recipient=true msg=msg page-info=info></message><!-- <div class="mar-top15 mar-bot10"><button ng-click="chatModal.close()" class="btn btn-default">Close</button></div> --></div></section>');
$templateCache.put('app/messages/show.modal.html','<div ng-include="\'app/messages/show.html\'"></div>');
$templateCache.put('app/services/notification.template.html','<div class="ui-notification panel panel-info"><div class=panel-heading><h3 ng-show=title ng-bind-html=title></h3><div class=message ng-bind-html=message></div></div></div>');
$templateCache.put('app/components/message/message.template.html','<div class="panel msg" ng-class="{\'panel-info\':msg.isVerification, \'panel-default\':msg.isPost}" style={{msg.bgColor}} ng-if=msg.signedData><div class=message-panel ng-class="{ \'panel-body\': !msg.isVerification, \'panel-heading\': msg.isVerification || msg.isUnverification }"><p><span class="mar-left5 pull-right" ng-class=msg.iconStyle ng-repeat="n in msg.iconCount track by $index"></span> <span class="mar-left5 pull-right fa fa-refresh" uib-tooltip=Pending ng-if=msg.local></span> <strong><a ui-sref="identities.show({ type: msg.linkToAuthor.type, value: msg.linkToAuthor.value })" class=id-link><identicon ipfs=ipfs identity=msg.author class=mar-right5 border=3 width=35></identicon><span ng-bind=msg.author_name></span> </a></strong><span ng-show=!msg.sameAuthorAndRecipient><small><i class="glyphicon glyphicon-play"></i></small> <a ui-sref="identities.show({ type: msg.linkToRecipient.type, value: msg.linkToRecipient.value })" class=id-link><identicon ng-if=showRecipient ipfs=ipfs identity=msg.recipient class=mar-right5 border=3 width=35></identicon><span ng-bind="(msg.recipientIsSelf && pageInfo.primaryName)||msg.recipient_name"></span> </a></span>- <a ui-sref="messages.show({ id: (msg.ipfsUri || msg.hash) })" ng-bind="msg.signedData.timestamp|date:\'medium\'" class="text-muted small" style=display:inline-block;></a></p><div ng-if="msg.isVerification || msg.isUnverification"><div ng-repeat="a in msg.recipientArray"><small><b ng-bind=a.type></b>: <span ng-if="a.type == \'email\' || a.type == \'url\'" ng-bind-html="a.value | linky"></span> <span ng-if="!(a.type == \'email\' || a.type == \'url\')" ng-bind=a.value></span></small></div></div><div ng-class="{\'align-center\': msg.attachments.length == 1}"><span ng-repeat="attachment in msg.attachments" class=attachment><a ng-if="[\'video\',\'image\',\'audio\'].indexOf(attachment.typeSubstr) == -1" download={{attachment.name}} ng-click="download(attachment.name, null, null, null, attachment.src)"><i class="fa fa-download mar-right5"></i> {{attachment.name}} </a><a ng-if="attachment.type && attachment.typeSubstr == \'image\'" ng-href={{attachment.src}} target=_blank><img alt={{attachment.uri}} ng-src={{attachment.src}} ng-style="{\'max-width\': msg.attachments.length > 1 ? \'150px\' : \'100%\', \'max-height\': msg.attachments.length > 1 ? \'150px\' : \'450px\'}"></a><videostream ng-if="attachment.typeSubstr == \'video\' || attachment.typeSubstr == \'audio\'" ipfs=ipfs uri=attachment.uri></videostream><span ng-bind-html=attachment.element ng-if=attachment.element></span></span></div><p style="white-space: pre-line;" ng-if=msg.signedData.comment hm-read-more hm-limit=280 hm-text="{{ msg.signedData.comment|linky }}" hm-more-text="Show more" hm-less-text="Show less"></p><form ng-if="msg.signedData.pollOptions && !msg.myVote" ng-submit="vote(msg, msg.choice)" ng-init="choice = \'asdf\'"><div class=radio ng-repeat="o in msg.signedData.pollOptions"><label><input ng-hide=msg.myVote ng-disabled=!authentication.user type=radio ng-model=msg.choice ng-value=o.text> <span ng-show=msg.myVote ng-bind=o.voteCount></span> {{o.text}}</label></div><button ng-disabled="!authentication.user || !msg.choice" class="btn btn-primary mar-right5">Vote</button> <small>{{msg.voteCount || 0}} votes</small></form><div ng-if=msg.voteResults><div ng-repeat="(k, v) in msg.voteResults"><b ng-bind=v style="width: 50px; display:inline-block"></b> <span ng-bind=k></span></div><small>{{msg.voteCount || 0}} votes</small></div><message ng-if="msg.sharedMsg && msgUtils" msg=msg.sharedMsg></message><span ng-class="{disabled: !authentication.user}" class=pull-right ng-if="msgUtils && msg.signedData.type == \'post\'"><a class=msg-reaction href="" ng-class="{active: msg.showCommentField}" ng-click="authentication.user && (msg.showCommentField = !msg.showCommentField)"><b ng-if=msg.repliesArr.length>{{msg.repliesArr.length}} </b><i class="glyphicon glyphicon-comment"></i> </a><a class=msg-reaction href="" ng-click="authentication.user && msgUtils.share(msg)"><b ng-if=msg.sharesArr.length>{{msg.sharesArr.length}} </b><i class="glyphicon glyphicon-retweet"></i> </a><a class=msg-reaction ng-class="{active: msg.liked}" href="" ng-click="authentication.user && msgUtils.like(msg)"><b ng-if="msg.likes || msg.liked">{{msg.likes || 1}} </b><i class=glyphicon ng-class="{\'glyphicon-heart-empty\': !msg.liked, \'glyphicon-heart\': msg.liked,}"></i></a></span><form class=form-inline ng-submit="msgUtils.replyTo(msg, reply)" ng-show="authentication.user && msg.showCommentField"><div class=form-group><input focus-on=addNameFocus type=text class=form-control ng-model=reply placeholder="Write a reply"></div><button type=submit class="btn btn-primary">Post</button></form></div></div>');}]);
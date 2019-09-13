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
        gun: '=',
        watchOnly: '='
      },
      link: function(scope, element, attrs) {
        var ACK, DB_RECORD, DEBUG, LOCAL, LOG, MIMETYPE, PREFIX_RECORDER, RECORD_PREFIX, RECORD_TIME, REMOTE_VIDEO, SPEECH_DETECTION_ENABLED, Streamer, Utf8ArrayToStr, addToAllRecordedChunks, addToBuffer, amountOfCameras, attachSpeechDetection, buf2hex, buttonRow, captureScreen, check, closeCameraStream, code, constraints, currentFacingMode, debug, formatBytes, go, goLiveButton, gunDB, initCameraStream, initCameraUI, initViewer, initialData, isRecording, mediaRecorder, myTimer, myVideo, onDataAvailable, onString, openRemoteVideo, pauseRecording, recordStream, recordedChunks, remoteVideo, removeFromGun, speechDetected, startWorker, stopWorker, str2ab, streamId, switchCameraButton, takeSnapshot, useBlob, useString, w, writeToGun;
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
        remoteVideo.playsinline = true;
        remoteVideo.style.display = "none";
        remoteVideo.style.width = "50%";
        remoteVideo.preload = "none";
        myVideo = document.createElement('video');
        myVideo.setAttribute('autoplay', true);
        myVideo.setAttribute('style', 'width: 100%;');
        myVideo.setAttribute('playsinline', true);
        myVideo.setAttribute('controls', true);
        element.append(myVideo);
        element.append(remoteVideo);
        buttonRow = document.createElement('p');
        goLiveButton = document.createElement('button');
        goLiveButton.innerHTML = '<span class="glyphicon glyphicon-facetime-video mar-right5"></span> Go live';
        goLiveButton.setAttribute('class', 'btn btn-default');
        buttonRow.append(goLiveButton);
        //toggleFullScreenButton = document.createElement('button')
        //toggleFullScreenButton.innerHTML = 'toggle fullscreen'
        //toggleFullScreenButton.setAttribute 'class', 'btn btn-default'
        //p.append(toggleFullScreenButton)
        switchCameraButton = document.createElement('button');
        switchCameraButton.innerHTML = 'Switch camera';
        switchCameraButton.style = 'display:none;';
        switchCameraButton.setAttribute('class', 'btn btn-default');
        buttonRow.append(switchCameraButton);
        element.append(buttonRow);
        amountOfCameras = 0;
        currentFacingMode = 'environment';
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
            myVideo.muted = true;
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
        openRemoteVideo = function() {
          var id, streamer;
          id = scope.pubkey + '/stream';
          streamer = new Streamer(id, remoteVideo);
          return streamer.init();
        };
        go = function() {
          var myPubKey, opt, peers, u;
          if (!(scope.gun && scope.pubkey)) {
            return;
          }
          u = scope.gun.user();
          myPubKey = u._.sea ? u._.sea.pub : void 0;
          if (myPubKey !== scope.pubkey) {
            if (scope.watchOnly) {
              buttonRow.style.display = 'none';
              remoteVideo.style.width = '100%';
              myVideo.style.display = 'none';
            }
            myVideo.style.width = '50%';
            remoteVideo.style.display = 'inline-block';
            openRemoteVideo();
          } else {
            myVideo.style.width = '100%';
            remoteVideo.style.display = 'none';
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
          if (!scope.watchOnly) {
            // do some WebRTC checks before creating the interface
            return DetectRTC.load(function() {
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
              return LOG('RTC Debug info: ' + '\n OS:                   ' + DetectRTC.osName + ' ' + DetectRTC.osVersion + '\n browser:              ' + DetectRTC.browser.fullVersion + ' ' + DetectRTC.browser.name + '\n is Mobile Device:     ' + DetectRTC.isMobileDevice + '\n has webcam:           ' + DetectRTC.hasWebcam + '\n has permission:       ' + DetectRTC.isWebsiteHasWebcamPermission + '\n getUserMedia Support: ' + DetectRTC.isGetUserMediaSupported + '\n isWebRTC Supported:   ' + DetectRTC.isWebRTCSupported + '\n WebAudio Supported:   ' + DetectRTC.isAudioContextSupported + '\n is Mobile Device:     ' + DetectRTC.isMobileDevice);
            });
          }
        };
        return scope.$watch('gun', go);
      }
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy92aWRlb2NoYXQvdmlkZW9jaGF0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy92aWRlb2NoYXQvdmlkZW9jaGF0LmRpcmVjdGl2ZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQTtFQUNBLE9BQU8sQ0FBQyxNQUFSLENBQWUsYUFBZixDQUNFLENBQUMsU0FESCxDQUNhLFdBRGIsRUFDMEIsUUFBQSxDQUFBLENBQUE7V0FDdEI7TUFBQSxLQUFBLEVBQ0U7UUFBQSxNQUFBLEVBQVEsR0FBUjtRQUNBLEdBQUEsRUFBSyxHQURMO1FBRUEsU0FBQSxFQUFXO01BRlgsQ0FERjtNQUlBLElBQUEsRUFBTSxRQUFBLENBQUMsS0FBRCxFQUFRLE9BQVIsRUFBaUIsS0FBakIsQ0FBQTtBQUNKLFlBQUEsR0FBQSxFQUFBLFNBQUEsRUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBLEdBQUEsRUFBQSxRQUFBLEVBQUEsZUFBQSxFQUFBLGFBQUEsRUFBQSxXQUFBLEVBQUEsWUFBQSxFQUFBLHdCQUFBLEVBQUEsUUFBQSxFQUFBLGNBQUEsRUFBQSxzQkFBQSxFQUFBLFdBQUEsRUFBQSxlQUFBLEVBQUEscUJBQUEsRUFBQSxPQUFBLEVBQUEsU0FBQSxFQUFBLGFBQUEsRUFBQSxLQUFBLEVBQUEsaUJBQUEsRUFBQSxJQUFBLEVBQUEsV0FBQSxFQUFBLGlCQUFBLEVBQUEsS0FBQSxFQUFBLFdBQUEsRUFBQSxFQUFBLEVBQUEsWUFBQSxFQUFBLEtBQUEsRUFBQSxnQkFBQSxFQUFBLFlBQUEsRUFBQSxVQUFBLEVBQUEsV0FBQSxFQUFBLFdBQUEsRUFBQSxhQUFBLEVBQUEsT0FBQSxFQUFBLE9BQUEsRUFBQSxlQUFBLEVBQUEsUUFBQSxFQUFBLGVBQUEsRUFBQSxjQUFBLEVBQUEsWUFBQSxFQUFBLGNBQUEsRUFBQSxXQUFBLEVBQUEsYUFBQSxFQUFBLGNBQUEsRUFBQSxXQUFBLEVBQUEsVUFBQSxFQUFBLE1BQUEsRUFBQSxRQUFB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LENBQUMsU0FBdEYsR0FBa0csMkJBQWxHLEdBQWdJLFNBQVMsQ0FBQyxPQUFPLENBQUMsV0FBbEosR0FBZ0ssR0FBaEssR0FBc0ssU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUF4TCxHQUErTCwyQkFBL0wsR0FBNk4sU0FBUyxDQUFDLGNBQXZPLEdBQXdQLDJCQUF4UCxHQUFzUixTQUFTLENBQUMsU0FBaFMsR0FBNFMsMkJBQTVTLEdBQTBVLFNBQVMsQ0FBQyw0QkFBcFYsR0FBbVgsMkJBQW5YLEdBQWlaLFNBQVMsQ0FBQyx1QkFBM1osR0FBcWIsMkJBQXJiLEdBQW1kLFNBQVMsQ0FBQyxpQkFBN2QsR0FBaWYsMkJBQWpmLEdBQStnQixTQUFTLENBQUMsdUJBQXpoQixHQUFtakIsMkJBQW5qQixHQUFpbEIsU0FBUyxDQUFDLGNBQS9sQjtZQVhhLENBQWYsRUFGRjs7UUExQkc7ZUF5Q0wsS0FBSyxDQUFDLE1BQU4sQ0FBYSxLQUFiLEVBQW9CLEVBQXBCO01BcGdCSTtJQUpOO0VBRHNCLENBRDFCO0FBREEiLCJzb3VyY2VzQ29udGVudCI6WyIjIGNvZmZlZWxpbnQ6IGRpc2FibGU9bWF4X2xpbmVfbGVuZ3RoXG5hbmd1bGFyLm1vZHVsZSAnaXJpc0FuZ3VsYXInXG4gIC5kaXJlY3RpdmUgJ3ZpZGVvY2hhdCcsIC0+XG4gICAgc2NvcGU6XG4gICAgICBwdWJrZXk6ICc9J1xuICAgICAgZ3VuOiAnPSdcbiAgICAgIHdhdGNoT25seTogJz0nXG4gICAgbGluazogKHNjb3BlLCBlbGVtZW50LCBhdHRycykgLT5cbiAgICAgIE1JTUVUWVBFID0gJ3ZpZGVvL3dlYm07IGNvZGVjcz1cIm9wdXMsdnA4XCInXG4gICAgICBSRUNPUkRfVElNRSA9IDUwMFxuICAgICAgREVCVUcgPSBmYWxzZVxuICAgICAgUFJFRklYX1JFQ09SREVSID0gJ2RhdGE6dmlkZW8vd2VibTsgY29kZWNzPVwib3B1cyx2cDhcIjtiYXNlNjQsJ1xuICAgICAgREJfUkVDT1JEID0gJ2d1bm1lZXRpbmcnXG4gICAgICBMT0NBTCA9IGZhbHNlXG4gICAgICBSRUNPUkRfUFJFRklYID0gJ0drWGYnXG4gICAgICBTUEVFQ0hfREVURUNUSU9OX0VOQUJMRUQgPSBmYWxzZVxuICAgICAgY29uc3RyYWludHMgPSB2aWRlbzogdHJ1ZVxuICAgICAgcmVjb3JkZWRDaHVua3MgPSBbXVxuICAgICAgbWVkaWFSZWNvcmRlciA9IHVuZGVmaW5lZFxuICAgICAgZ3VuREIgPSB1bmRlZmluZWRcbiAgICAgIHNwZWVjaERldGVjdGVkID0gdHJ1ZVxuICAgICAgaW5pdGlhbERhdGEgPSB1bmRlZmluZWRcbiAgICAgIHcgPSB1bmRlZmluZWRcbiAgICAgIGNvZGUgPSAtMVxuXG4gICAgICBMT0cgPSAoYXJncy4uLikgLT5cbiAgICAgICAgY29uc29sZS5sb2cgYXJncy4uLiBpZiBERUJVR1xuXG4gICAgICBTdHJlYW1lciA9ICh2aWRlb0lkLCBzdHJlYW1WaWRlbykgLT5cbiAgICAgICAgQGlkID0gdmlkZW9JZFxuICAgICAgICBAc3RyZWFtVmlkZW8gPSBzdHJlYW1WaWRlb1xuXG4gICAgICAgIEBpbml0ID0gLT5cbiAgICAgICAgICBAc291cmNlQnVmZmVyID0gbnVsbFxuICAgICAgICAgIEBtZWRpYVNvdXJjZSA9IG5ldyBNZWRpYVNvdXJjZVxuICAgICAgICAgIGluaXRWaWV3ZXIgdGhpc1xuICAgICAgICAgIHJldHVyblxuXG4gICAgICAgIHJldHVyblxuXG4gICAgICBpbml0Vmlld2VyID0gKHN0cmVhbWVyKSAtPlxuICAgICAgICBzdHJlYW1lci5zdHJlYW1WaWRlby5zcmMgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChzdHJlYW1lci5tZWRpYVNvdXJjZSlcbiAgICAgICAgc3RyZWFtZXIubWVkaWFTb3VyY2UuYWRkRXZlbnRMaXN0ZW5lciAnc291cmNlb3BlbicsIC0+XG4gICAgICAgICAgc3RyZWFtZXIuc291cmNlQnVmZmVyID0gc3RyZWFtZXIubWVkaWFTb3VyY2UuYWRkU291cmNlQnVmZmVyKE1JTUVUWVBFKVxuICAgICAgICAgIHN0cmVhbWVyLnNvdXJjZUJ1ZmZlci5tb2RlID0gJ3NlcXVlbmNlJ1xuICAgICAgICAgICMgR2V0IHZpZGVvIHNlZ21lbnRzIGFuZCBhcHBlbmQgdGhlbSB0byBzb3VyY2VCdWZmZXIuXG4gICAgICAgICAgTE9HICdTb3VyY2UgaXMgb3BlbiBhbmQgcmVhZHkgdG8gYXBwZW5kIHRvIHNvdXJjZWJ1ZmZlcidcbiAgICAgICAgICBpZiAhTE9DQUxcbiAgICAgICAgICAgIGd1bkRCLmdldChzdHJlYW1lci5pZCkub24gKGRhdGEpIC0+XG4gICAgICAgICAgICAgIGlmICFjaGVjayhzdHJlYW1lciwgZGF0YSlcbiAgICAgICAgICAgICAgICBzdHJlYW1lci5zdHJlYW1WaWRlby5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgICMgc3RyZWFtZXIuc3RyZWFtVmlkZW8ucGFyZW50RWxlbWVudC5yZW1vdmUoKVxuICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgc3RyZWFtZXIuc3RyZWFtVmlkZW8uc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJ1xuICAgICAgICAgICAgICAgIGlmIFNQRUVDSF9ERVRFQ1RJT05fRU5BQkxFRFxuICAgICAgICAgICAgICAgICAgaWYgZGF0YS5pc1NwZWFraW5nXG4gICAgICAgICAgICAgICAgICAgIHN0cmVhbWVyLnN0cmVhbVZpZGVvLm11dGVkID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgc3RyZWFtZXIuc3RyZWFtVmlkZW8ubXV0ZWQgPSB0cnVlXG4gICAgICAgICAgICAgIExPRyAnVHJhY2tzIFZpZGVvIDo6JyArIHN0cmVhbWVyLnN0cmVhbVZpZGVvLkhBVkVfTUVUQURBVEFcbiAgICAgICAgICAgICAgIyBMT0coXCJUcmFja3MgQnVmZmVyOjpcIiArIHN0cmVhbWVyLnNvdXJjZUJ1ZmZlci52aWRlb1RyYWNrcy5sZW5ndGgpXG4gICAgICAgICAgICAgICMgaWYgKHN0cmVhbWVyLnN0cmVhbVZpZGVvLnZpZGVvVHJhY2tzLmxlbmd0aCA+IDAgJiYgc3RyZWFtZXIuc3RyZWFtVmlkZW8udmlkZW9UcmFja3Muc2VsZWN0ZWRJbmRleCAhPSAtMSkge1xuICAgICAgICAgICAgICBpZiBzdHJlYW1lci5zdHJlYW1WaWRlby5yZWFkeVN0YXRlICE9IDBcbiAgICAgICAgICAgICAgICBvblN0cmluZyBzdHJlYW1lciwgZGF0YS5uYW1lXG4gICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBvblN0cmluZyBzdHJlYW1lciwgZGF0YS5pbml0aWFsXG4gICAgICAgICAgICAgIGlmIHN0cmVhbWVyLnN0cmVhbVZpZGVvLnJlYWR5U3RhdGUgPj0gMiBhbmQgc3RyZWFtZXIuc3RyZWFtVmlkZW8ucGF1c2VkXG4gICAgICAgICAgICAgICAgc3RyZWFtZXIuc3RyZWFtVmlkZW8ucGxheSgpXG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIHJldHVyblxuICAgICAgICByZXR1cm5cblxuICAgICAgY2hlY2sgPSAoc3RyZWFtZXIsIGRhdGEpIC0+XG4gICAgICAgIExPRyBKU09OLnN0cmluZ2lmeShzdHJlYW1lcilcbiAgICAgICAgTE9HIEpTT04uc3RyaW5naWZ5KGRhdGEudGltZXN0YW1wKVxuICAgICAgICBjdXJyZW50VGltZSA9IChuZXcgRGF0ZSkuZ2V0VGltZSgpXG4gICAgICAgIGRpZmZlcmVuY2UgPSAoY3VycmVudFRpbWUgLSAoZGF0YS50aW1lc3RhbXApKSAvIDEwMDBcbiAgICAgICAgTE9HICdUSU1FOjonICsgZGlmZmVyZW5jZVxuICAgICAgICBpZiBkaWZmZXJlbmNlID4gMTIwXG4gICAgICAgICAgTE9HICdyZW1vdmU6OicgKyBzdHJlYW1lci5pZFxuICAgICAgICAgIHJlbW92ZUZyb21HdW4gc3RyZWFtZXIuaWRcbiAgICAgICAgICBmYWxzZVxuICAgICAgICBlbHNlXG4gICAgICAgICAgTE9HICdrZWVwOjonICsgc3RyZWFtZXIuaWRcbiAgICAgICAgICB0cnVlXG5cbiAgICAgIG9uU3RyaW5nID0gKHN0cmVhbWVyLCByYXdEYXRhKSAtPlxuICAgICAgICBieXRlQ2hhcmFjdGVycyA9IGF0b2IocmF3RGF0YSlcbiAgICAgICAgYnl0ZUFycmF5ID0gc3RyMmFiKGJ5dGVDaGFyYWN0ZXJzKVxuICAgICAgICBhZGRUb0J1ZmZlciBzdHJlYW1lciwgYnl0ZUFycmF5XG4gICAgICAgIGJ5dGVDaGFyYWN0ZXJzID0gbnVsbFxuICAgICAgICBieXRlQXJyYXkgPSBudWxsXG4gICAgICAgIHJldHVyblxuXG4gICAgICBhZGRUb0J1ZmZlciA9IChzdHJlYW1lciwgYnl0ZUFycmF5KSAtPlxuICAgICAgICAjIGlmIChkb2N1bWVudC5oaWRkZW4pIHtcbiAgICAgICAgIyAgICAgTE9HKFwiTm90IEZvY3VzZWQgdGFiIG5vdCBhZGRpbmcgdG8gYnVmZmVyXCIpXG4gICAgICAgICMgfVxuICAgICAgICBpZiAhc3RyZWFtZXIuc291cmNlQnVmZmVyLnVwZGF0aW5nXG4gICAgICAgICAgIyBpZiAoc3RyZWFtZXIuc291cmNlQnVmZmVyLmJ1ZmZlcmVkLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAjICAgICBzdHJlYW1lci5zb3VyY2VCdWZmZXIucmVtb3ZlKDAsIHN0cmVhbWVyLnNvdXJjZUJ1ZmZlci5idWZmZXJlZC5lbmQoc3RyZWFtZXIuc291cmNlQnVmZmVyLmJ1ZmZlcmVkLmxlbmd0aCAtIDEpKVxuICAgICAgICAgICMgfVxuICAgICAgICAgIExPRyAnUkVBRFkgU1RBVEU6OicgKyBzdHJlYW1lci5zdHJlYW1WaWRlby5yZWFkeVN0YXRlXG4gICAgICAgICAgIyB2YXIgaGFzRW5vdWdoID0gc3RyZWFtZXIuc3RyZWFtVmlkZW8ucmVhZHlTdGF0ZSA9PSAzICYmIHRyZWFtZXIuc3RyZWFtVmlkZW8ucmVhZHlTdGF0ZSA9PSA0XG4gICAgICAgICAgIyBpZiAoc3RyZWFtZXIuc291cmNlQnVmZmVyLnRpbWVzdGFtcE9mZnNldCAhPSAwICYmIGhhc0Vub3VnaCkge1xuICAgICAgICAgICMgICAgIHRyeSB7XG4gICAgICAgICAgIyAgICAgICAgIExPRyhcIlJlc2V0IG9mZnNldDo6XCIgKyBzdHJlYW1lci5zb3VyY2VCdWZmZXIudGltZXN0YW1wT2Zmc2V0KVxuICAgICAgICAgICMgICAgICAgICBzdHJlYW1lci5zb3VyY2VCdWZmZXIudGltZXN0YW1wT2Zmc2V0ID0gMFxuICAgICAgICAgICMgICAgICAgICBMT0coXCJEaWQgcmVzZXQ6OlwiICsgc3RyZWFtZXIuc291cmNlQnVmZmVyLnRpbWVzdGFtcE9mZnNldClcbiAgICAgICAgICAjICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAjICAgICAgICAgY29kZSA9IDExXG4gICAgICAgICAgIyAgICAgICAgIExPRyhlcnIpXG4gICAgICAgICAgIyAgICAgfVxuICAgICAgICAgICMgfSBlbHNlIHtcbiAgICAgICAgICAjICAgICBjb2RlID0gLTFcbiAgICAgICAgICBMT0cgJ0FkZGluZzo6JyArIEpTT04uc3RyaW5naWZ5KHN0cmVhbWVyKVxuICAgICAgICAgIHN0cmVhbWVyLnNvdXJjZUJ1ZmZlci5hcHBlbmRCdWZmZXIgYnl0ZUFycmF5XG4gICAgICAgICAgIyB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICBMT0cgJ0JVRkZFUiBTVElMTCBCVVNZJ1xuICAgICAgICByZXR1cm5cblxuICAgICAgc3RyMmFiID0gKHN0cikgLT5cbiAgICAgICAgYnVmID0gbmV3IEFycmF5QnVmZmVyKHN0ci5sZW5ndGgpXG4gICAgICAgIGJ1ZlZpZXcgPSBuZXcgVWludDhBcnJheShidWYpXG4gICAgICAgIGkgPSAwXG4gICAgICAgIHN0ckxlbiA9IHN0ci5sZW5ndGhcbiAgICAgICAgd2hpbGUgaSA8IHN0ckxlblxuICAgICAgICAgIGJ1ZlZpZXdbaV0gPSBzdHIuY2hhckNvZGVBdChpKVxuICAgICAgICAgIGkrK1xuICAgICAgICBidWZWaWV3ID0gbnVsbFxuICAgICAgICBidWZcblxuICAgICAgIyAtLS1cbiAgICAgICMgZ2VuZXJhdGVkIGJ5IGpzMmNvZmZlZSAyLjIuMFxuXG4gICAgICBpc1JlY29yZGluZyA9IC0+XG4gICAgICAgIGlmIG1lZGlhUmVjb3JkZXIgYW5kIG1lZGlhUmVjb3JkZXIuc3RhdGUgPT0gJ3JlY29yZGluZydcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICBlbHNlXG4gICAgICAgICAgZmFsc2VcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIHBhdXNlUmVjb3JkaW5nID0gLT5cbiAgICAgICAgc3RvcFdvcmtlcigpXG4gICAgICAgIG1lZGlhUmVjb3JkZXIuc3RvcCgpXG4gICAgICAgIHJldHVyblxuXG4gICAgICBjYXB0dXJlU2NyZWVuID0gKHN0cmVhbSkgLT5cbiAgICAgICAgTE9HICdDYXB0dXJlJ1xuICAgICAgICBpZiAhbWVkaWFSZWNvcmRlciBvciBtZWRpYVJlY29yZGVyLnN0YXRlID09ICdpbmFjdGl2ZSdcbiAgICAgICAgICByZWNvcmRTdHJlYW0gc3RyZWFtXG4gICAgICAgICAgaWYgU1BFRUNIX0RFVEVDVElPTl9FTkFCTEVEXG4gICAgICAgICAgICBhdHRhY2hTcGVlY2hEZXRlY3Rpb24gc3RyZWFtXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBzdG9wV29ya2VyKClcbiAgICAgICAgICBtZWRpYVJlY29yZGVyLnN0b3AoKVxuICAgICAgICByZXR1cm5cblxuICAgICAgcmVjb3JkU3RyZWFtID0gKHN0cmVhbSkgLT5cbiAgICAgICAgb3B0aW9ucyA9XG4gICAgICAgICAgbWltZVR5cGU6IE1JTUVUWVBFXG4gICAgICAgICAgYXVkaW9CaXRzUGVyU2Vjb25kOiA2MDAwXG4gICAgICAgICAgdmlkZW9CaXRzUGVyU2Vjb25kOiAxMDAwMDBcbiAgICAgICAgbWVkaWFSZWNvcmRlciA9IG5ldyBNZWRpYVJlY29yZGVyKHN0cmVhbSwgb3B0aW9ucylcbiAgICAgICAgbWVkaWFSZWNvcmRlci5vbmRhdGFhdmFpbGFibGUgPSBvbkRhdGFBdmFpbGFibGVcbiAgICAgICAgbWVkaWFSZWNvcmRlci5zdGFydCBSRUNPUkRfVElNRVxuICAgICAgICBzdGFydFdvcmtlcigpXG4gICAgICAgIExPRyAnTWVkaWEgcmVjb3JkZXIgaW5pdGlhdGVkJ1xuICAgICAgICAjIHNldEludGVydmFsKG15VGltZXIsIFJFQ09SRF9USU1FKVxuICAgICAgICByZXR1cm5cblxuICAgICAgbXlUaW1lciA9IC0+XG4gICAgICAgIGlmIG1lZGlhUmVjb3JkZXJcbiAgICAgICAgICBtZWRpYVJlY29yZGVyLnJlcXVlc3REYXRhKClcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIHN0YXJ0V29ya2VyID0gLT5cbiAgICAgICAgaWYgdHlwZW9mIFdvcmtlciAhPSAndW5kZWZpbmVkJ1xuICAgICAgICAgIGlmIHR5cGVvZiB3ID09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICB3ID0gbmV3IFdvcmtlcignYXNzZXRzL2pzL3BhcnNlcl93b3JrZXIuanMnKVxuXG4gICAgICAgICAgdy5vbm1lc3NhZ2UgPSAoZSkgLT5cbiAgICAgICAgICAgIG1lc3NhZ2UgPSBlLmRhdGFcbiAgICAgICAgICAgIHdyaXRlVG9HdW4gbWVzc2FnZVxuICAgICAgICAgICAgcmV0dXJuXG5cbiAgICAgICAgZWxzZVxuICAgICAgICAgIExPRyAnU29ycnkhIE5vIFdlYiBXb3JrZXIgc3VwcG9ydC4nXG4gICAgICAgIHJldHVyblxuXG4gICAgICBzdG9wV29ya2VyID0gLT5cbiAgICAgICAgdy50ZXJtaW5hdGUoKVxuICAgICAgICB3ID0gdW5kZWZpbmVkXG4gICAgICAgIHJldHVyblxuXG4gICAgICBvbkRhdGFBdmFpbGFibGUgPSAoYmxvYkV2ZW50KSAtPlxuICAgICAgICAjIExPRyhcIlJlY2VpdmVkIGRhdGEgXCIgKyBmb3JtYXRCeXRlcyhibG9iRXZlbnQuZGF0YS5zaXplKSlcbiAgICAgICAgIyBhZGRUb0FsbFJlY29yZGVkQ2h1bmtzKGJsb2JFdmVudC5kYXRhKVxuICAgICAgICBpZiBibG9iRXZlbnQuZGF0YSBhbmQgYmxvYkV2ZW50LmRhdGEuc2l6ZVxuICAgICAgICAgICMgdXNlQmxvYihibG9iRXZlbnQuZGF0YSlcbiAgICAgICAgICB1c2VTdHJpbmcgYmxvYkV2ZW50LmRhdGFcbiAgICAgICAgZWxzZVxuICAgICAgICAgIExPRyAnU0tJUCBOTyBEQVRBPydcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIHVzZUJsb2IgPSAoYmxvYikgLT5cbiAgICAgICAgb25CbG9iIGJsb2JcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIHVzZVN0cmluZyA9IChibG9iKSAtPlxuICAgICAgICByZXNwb25zZSA9IG5ldyBSZXNwb25zZShibG9iKS5hcnJheUJ1ZmZlcigpLnRoZW4oKGFycmF5QnVmZmVyKSAtPlxuICAgICAgICAgIGJsb2IgPSBudWxsXG4gICAgICAgICAgaWYgTE9DQUxcbiAgICAgICAgICAgICMgb25TdHJpbmcoYmFzZTY0U3RyaW5nKVxuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIGlmIHcgIT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgIHcucG9zdE1lc3NhZ2UgYXJyYXlCdWZmZXJcbiAgICAgICAgICAgICMgcGFyc2VTZWxmKGFycmF5QnVmZmVyKVxuICAgICAgICAgICAgIyB2YXIgZGF0YSA9IG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKVxuICAgICAgICAgICAgIyB3aW5kb3cuY2wud3JpdGUoZGF0YSlcbiAgICAgICAgICAgICMgZGF0YSA9IG51bGxcbiAgICAgICAgICAgICMgYXJyYXlCdWZmZXIgPSBudWxsXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIClcbiAgICAgICAgcmVzcG9uc2UgPSBudWxsXG4gICAgICAgIHJldHVyblxuXG4gICAgICAjIGZ1bmN0aW9uIHVzZVN0cmluZyhibG9iKSB7XG4gICAgICAjICAgICB2YXIgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKVxuICAgICAgIyAgICAgZmV0Y2godXJsKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgIyAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwodXJsKVxuICAgICAgIyAgICAgICAgIHJldHVybiByZXNwb25zZS5hcnJheUJ1ZmZlcigpXG4gICAgICAjICAgICB9KS50aGVuKGZ1bmN0aW9uIChhcnJheUJ1ZmZlcikge1xuICAgICAgIyAgICAgICAgIC8vIHZhciBiYXNlNjRTdHJpbmcgPSBidG9hKFxuICAgICAgIyAgICAgICAgIC8vICAgICBuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcilcbiAgICAgICMgICAgICAgICAvLyAgICAgICAgIC5yZWR1Y2UoKG9uRGF0YSwgYnl0ZSkgPT4gb25EYXRhICsgU3RyaW5nLmZyb21DaGFyQ29kZShieXRlKSwgJycpXG4gICAgICAjICAgICAgICAgLy8gKVxuICAgICAgIyAgICAgICAgIC8vIExPRyhidWYyaGV4KGFycmF5QnVmZmVyKSlcbiAgICAgICMgICAgICAgICAvLyBMT0coVXRmOEFycmF5VG9TdHIobmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpKSlcbiAgICAgICMgICAgICAgICBpZiAoTE9DQUwpIHtcbiAgICAgICMgICAgICAgICAgICAgLy8gb25TdHJpbmcoYmFzZTY0U3RyaW5nKVxuICAgICAgIyAgICAgICAgIH0gZWxzZSB7XG4gICAgICAjICAgICAgICAgICAgIHdpbmRvdy5jbC53cml0ZShuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcikpXG4gICAgICAjICAgICAgICAgICAgIC8vIHdyaXRlVG9HdW4oYmFzZTY0U3RyaW5nKVxuICAgICAgIyAgICAgICAgIH1cbiAgICAgICMgICAgICAgICBiYXNlNjRTdHJpbmcgPSBudWxsXG4gICAgICAjICAgICB9KVxuICAgICAgIyB9XG5cbiAgICAgIFV0ZjhBcnJheVRvU3RyID0gKGFycmF5KSAtPlxuICAgICAgICBvdXQgPSB1bmRlZmluZWRcbiAgICAgICAgaSA9IHVuZGVmaW5lZFxuICAgICAgICBsZW4gPSB1bmRlZmluZWRcbiAgICAgICAgYyA9IHVuZGVmaW5lZFxuICAgICAgICBjaGFyMiA9IHVuZGVmaW5lZFxuICAgICAgICBjaGFyMyA9IHVuZGVmaW5lZFxuICAgICAgICBvdXQgPSAnJ1xuICAgICAgICBsZW4gPSBhcnJheS5sZW5ndGhcbiAgICAgICAgaSA9IDBcbiAgICAgICAgd2hpbGUgaSA8IGxlblxuICAgICAgICAgIGMgPSBhcnJheVtpKytdXG4gICAgICAgICAgc3dpdGNoIGMgPj4gNFxuICAgICAgICAgICAgd2hlbiAwLCAxLCAyLCAzLCA0LCA1LCA2LCA3XG4gICAgICAgICAgICAgICMgMHh4eHh4eHhcbiAgICAgICAgICAgICAgb3V0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYylcbiAgICAgICAgICAgIHdoZW4gMTIsIDEzXG4gICAgICAgICAgICAgICMgMTEweCB4eHh4ICAgMTB4eCB4eHh4XG4gICAgICAgICAgICAgIGNoYXIyID0gYXJyYXlbaSsrXVxuICAgICAgICAgICAgICBvdXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoYyAmIDB4MUYpIDw8IDYgfCBjaGFyMiAmIDB4M0YpXG4gICAgICAgICAgICB3aGVuIDE0XG4gICAgICAgICAgICAgICMgMTExMCB4eHh4ICAxMHh4IHh4eHggIDEweHggeHh4eFxuICAgICAgICAgICAgICBjaGFyMiA9IGFycmF5W2krK11cbiAgICAgICAgICAgICAgY2hhcjMgPSBhcnJheVtpKytdXG4gICAgICAgICAgICAgIG91dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChjICYgMHgwRikgPDwgMTIgfCAoY2hhcjIgJiAweDNGKSA8PCA2IHwgKGNoYXIzICYgMHgzRikgPDwgMClcbiAgICAgICAgb3V0XG5cbiAgICAgIGJ1ZjJoZXggPSAoYnVmZmVyKSAtPlxuICAgICAgICAjIGJ1ZmZlciBpcyBhbiBBcnJheUJ1ZmZlclxuICAgICAgICBBcnJheTo6bWFwLmNhbGwobmV3IFVpbnQ4QXJyYXkoYnVmZmVyKSwgKHgpIC0+XG4gICAgICAgICAgKCcwMCcgKyB4LnRvU3RyaW5nKDE2KSkuc2xpY2UgLTJcbiAgICAgICAgKS5qb2luICcnXG5cbiAgICAgIHdyaXRlVG9HdW4gPSAoYmFzZTY0ZGF0YSkgLT5cbiAgICAgICAgbiA9IG4gfHwgdW5kZWZpbmVkXG4gICAgICAgIExPRyAnV3JpdGUgdG8gR1VOOjonICsgYmFzZTY0ZGF0YS5zdWJzdHJpbmcoMCwgMTAwKVxuICAgICAgICBsYXN0VXBkYXRlID0gKG5ldyBEYXRlKS5nZXRUaW1lKClcbiAgICAgICAgdXNlciA9IHVuZGVmaW5lZFxuICAgICAgICBpZiBpbml0aWFsRGF0YSA9PSB1bmRlZmluZWQgYW5kIGJhc2U2NGRhdGEuc3RhcnRzV2l0aChSRUNPUkRfUFJFRklYKVxuICAgICAgICAgIExPRyAnSU5JVElBTCdcbiAgICAgICAgICBuID0gYmFzZTY0ZGF0YS5pbmRleE9mKCd3SUVCJylcbiAgICAgICAgICBMT0cgJ1JBVzo6JyArIG4gKyAnOjonICsgYmFzZTY0ZGF0YS5zdWJzdHJpbmcoMCwgMjUyKVxuICAgICAgICAgIGluaXRpYWxEYXRhID0gYmFzZTY0ZGF0YS5zdWJzdHJpbmcoMCwgMjUyKVxuICAgICAgICBlbHNlXG4gICAgICAgICAgbiA9IGJhc2U2NGRhdGEuaW5kZXhPZignSDBPMmRRSCcpXG4gICAgICAgICAgTE9HICdSQVc6OicgKyBuICsgJzo6JyArIGJhc2U2NGRhdGFcbiAgICAgICAgTE9HKCdzdHJlYW1JZCcsIHN0cmVhbUlkKVxuICAgICAgICB1c2VyID0gZ3VuREIuZ2V0KHN0cmVhbUlkKS5wdXQoe1xuICAgICAgICAgIGluaXRpYWw6IGluaXRpYWxEYXRhXG4gICAgICAgICAgbmFtZTogYmFzZTY0ZGF0YVxuICAgICAgICAgIGlkOiBzdHJlYW1JZFxuICAgICAgICAgIHRpbWVzdGFtcDogbGFzdFVwZGF0ZVxuICAgICAgICAgIGlzU3BlYWtpbmc6IHNwZWVjaERldGVjdGVkXG4gICAgICAgIH0sIEFDSylcbiAgICAgICAgZ3VuREIuZ2V0KERCX1JFQ09SRCkuc2V0IHVzZXJcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIGFkZFRvQWxsUmVjb3JkZWRDaHVua3MgPSAoY2h1bmspIC0+XG4gICAgICAgIHJlY29yZGVkQ2h1bmtzLnB1c2ggY2h1bmtcbiAgICAgICAgc3VwZXJCdWZmZXIgPSBuZXcgQmxvYihyZWNvcmRlZENodW5rcylcbiAgICAgICAgTE9HICdUb3RhbCBkYXRhIHNpemUgJyArIGZvcm1hdEJ5dGVzKHN1cGVyQnVmZmVyLnNpemUpXG4gICAgICAgIHJldHVyblxuXG4gICAgICBmb3JtYXRCeXRlcyA9IChieXRlcykgLT5cbiAgICAgICAgaWYgYnl0ZXMgPCAxMDI0XG4gICAgICAgICAgYnl0ZXMgKyAnIEJ5dGVzJ1xuICAgICAgICBlbHNlIGlmIGJ5dGVzIDwgMTA0ODU3NlxuICAgICAgICAgIChieXRlcyAvIDEwMjQpLnRvRml4ZWQoMykgKyAnIEtCJ1xuICAgICAgICBlbHNlIGlmIGJ5dGVzIDwgMTA3Mzc0MTgyNFxuICAgICAgICAgIChieXRlcyAvIDEwNDg1NzYpLnRvRml4ZWQoMykgKyAnIE1CJ1xuICAgICAgICBlbHNlXG4gICAgICAgICAgKGJ5dGVzIC8gMTA3Mzc0MTgyNCkudG9GaXhlZCgzKSArICcgR0InXG5cbiAgICAgIGF0dGFjaFNwZWVjaERldGVjdGlvbiA9IChzdHJlYW0pIC0+XG4gICAgICAgIG9wdGlvbnMgPSB7fVxuICAgICAgICBzcGVlY2hFdmVudHMgPSBoYXJrKHN0cmVhbSwgb3B0aW9ucylcbiAgICAgICAgc3BlZWNoRXZlbnRzLm9uICdzcGVha2luZycsIC0+XG4gICAgICAgICAgaWYgU1BFRUNIX0RFVEVDVElPTl9FTkFCTEVEXG4gICAgICAgICAgICBzcGVlY2hEZXRlY3RlZCA9IHRydWVcbiAgICAgICAgICAgIExPRyAnc3BlYWtpbmcnXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIHNwZWVjaEV2ZW50cy5vbiAnc3RvcHBlZF9zcGVha2luZycsIC0+XG4gICAgICAgICAgaWYgU1BFRUNIX0RFVEVDVElPTl9FTkFCTEVEXG4gICAgICAgICAgICBMT0cgJ3N0b3BwZWRfc3BlYWtpbmcnXG4gICAgICAgICAgICBzcGVlY2hEZXRlY3RlZCA9IGZhbHNlXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIHJldHVyblxuXG5cblxuICAgICAgIyBEb20gZWxlbWVudHMgbmFtZSBjb25zdGFudHNcbiAgICAgIFJFTU9URV9WSURFTyA9ICd2aWRlbydcbiAgICAgICNJRFxuICAgICAgc3RyZWFtSWQgPSBEYXRlLm5vdygpXG4gICAgICAjIEdVTiBBQ0tcbiAgICAgIHJlbW90ZVZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInZpZGVvXCIpXG4gICAgICByZW1vdGVWaWRlby5hdXRvcGxheSA9IHRydWVcbiAgICAgIHJlbW90ZVZpZGVvLmNvbnRyb2xzID0gdHJ1ZVxuICAgICAgcmVtb3RlVmlkZW8ucGxheXNpbmxpbmUgPSB0cnVlXG4gICAgICByZW1vdGVWaWRlby5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgIHJlbW90ZVZpZGVvLnN0eWxlLndpZHRoID0gXCI1MCVcIlxuICAgICAgcmVtb3RlVmlkZW8ucHJlbG9hZCA9IFwibm9uZVwiXG4gICAgICBteVZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKVxuICAgICAgbXlWaWRlby5zZXRBdHRyaWJ1dGUoJ2F1dG9wbGF5JywgdHJ1ZSlcbiAgICAgIG15VmlkZW8uc2V0QXR0cmlidXRlKCdzdHlsZScsICd3aWR0aDogMTAwJTsnKVxuICAgICAgbXlWaWRlby5zZXRBdHRyaWJ1dGUoJ3BsYXlzaW5saW5lJywgdHJ1ZSlcbiAgICAgIG15VmlkZW8uc2V0QXR0cmlidXRlKCdjb250cm9scycsIHRydWUpXG4gICAgICBlbGVtZW50LmFwcGVuZChteVZpZGVvKVxuICAgICAgZWxlbWVudC5hcHBlbmQocmVtb3RlVmlkZW8pXG4gICAgICBidXR0b25Sb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50ICdwJ1xuICAgICAgZ29MaXZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgIGdvTGl2ZUJ1dHRvbi5pbm5lckhUTUwgPSAnPHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWZhY2V0aW1lLXZpZGVvIG1hci1yaWdodDVcIj48L3NwYW4+IEdvIGxpdmUnXG4gICAgICBnb0xpdmVCdXR0b24uc2V0QXR0cmlidXRlICdjbGFzcycsICdidG4gYnRuLWRlZmF1bHQnXG4gICAgICBidXR0b25Sb3cuYXBwZW5kKGdvTGl2ZUJ1dHRvbilcbiAgICAgICN0b2dnbGVGdWxsU2NyZWVuQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICN0b2dnbGVGdWxsU2NyZWVuQnV0dG9uLmlubmVySFRNTCA9ICd0b2dnbGUgZnVsbHNjcmVlbidcbiAgICAgICN0b2dnbGVGdWxsU2NyZWVuQnV0dG9uLnNldEF0dHJpYnV0ZSAnY2xhc3MnLCAnYnRuIGJ0bi1kZWZhdWx0J1xuICAgICAgI3AuYXBwZW5kKHRvZ2dsZUZ1bGxTY3JlZW5CdXR0b24pXG4gICAgICBzd2l0Y2hDYW1lcmFCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgc3dpdGNoQ2FtZXJhQnV0dG9uLmlubmVySFRNTCA9ICdTd2l0Y2ggY2FtZXJhJ1xuICAgICAgc3dpdGNoQ2FtZXJhQnV0dG9uLnN0eWxlID0gJ2Rpc3BsYXk6bm9uZTsnXG4gICAgICBzd2l0Y2hDYW1lcmFCdXR0b24uc2V0QXR0cmlidXRlICdjbGFzcycsICdidG4gYnRuLWRlZmF1bHQnXG4gICAgICBidXR0b25Sb3cuYXBwZW5kKHN3aXRjaENhbWVyYUJ1dHRvbilcbiAgICAgIGVsZW1lbnQuYXBwZW5kIGJ1dHRvblJvd1xuICAgICAgYW1vdW50T2ZDYW1lcmFzID0gMFxuICAgICAgY3VycmVudEZhY2luZ01vZGUgPSAnZW52aXJvbm1lbnQnXG4gICAgICBndW5EQiA9IHVuZGVmaW5lZFxuXG4gICAgICBBQ0sgPSAoYWNrKSAtPlxuICAgICAgICBpZiBhY2sub2sgIT0gMSBhbmQgYWNrLmVyciAhPSAnRXJyb3I6IE5vIEFDSyByZWNlaXZlZCB5ZXQuJ1xuICAgICAgICAgIExPRyAnYWNrJywgYWNrXG4gICAgICAgICAgIyBsb2NhbFN0b3JhZ2UuY2xlYXIoKVxuICAgICAgICBlbHNlXG4gICAgICAgICAgTE9HICdhY2snLCBhY2tcbiAgICAgICAgICAjIGxvY2FsU3RvcmFnZS5jbGVhcigpXG4gICAgICAgIHJldHVyblxuXG4gICAgICByZW1vdmVGcm9tR3VuID0gKGlkKSAtPlxuICAgICAgICAjIGxvY2FsU3RvcmFnZS5jbGVhcigpXG4gICAgICAgIHVzZXIgPSBndW5EQi5nZXQoc3RyZWFtSWQpXG4gICAgICAgIGd1bkRCLmdldChEQl9SRUNPUkQpLnVuc2V0IHVzZXJcbiAgICAgICAgIyB1c2VyLnB1dCBudWxsICMgY2FuJ3QgcHV0IG51bGwgdG8gcm9vdCBsZXZlbCBub2RlXG4gICAgICAgIHJldHVyblxuXG4gICAgICBkZWJ1ZyA9ICh0ZXh0KSAtPlxuICAgICAgICBpZiBERUJVR1xuICAgICAgICAgIExPRyB0ZXh0XG4gICAgICAgIHJldHVyblxuXG4gICAgICBpbml0Q2FtZXJhVUkgPSAtPlxuICAgICAgICAjIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL25sL2RvY3MvV2ViL0hUTUwvRWxlbWVudC9idXR0b25cbiAgICAgICAgIyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BY2Nlc3NpYmlsaXR5L0FSSUEvQVJJQV9UZWNobmlxdWVzL1VzaW5nX3RoZV9idXR0b25fcm9sZVxuICAgICAgICBnb0xpdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lciAnY2xpY2snLCAtPlxuICAgICAgICAgIHRha2VTbmFwc2hvdCgpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgICMgLS0gc3dpdGNoIGNhbWVyYSBwYXJ0XG4gICAgICAgIGlmIGFtb3VudE9mQ2FtZXJhcyA+IDFcbiAgICAgICAgICBzd2l0Y2hDYW1lcmFCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snXG4gICAgICAgICAgc3dpdGNoQ2FtZXJhQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIgJ2NsaWNrJywgLT5cbiAgICAgICAgICAgIGlmIGN1cnJlbnRGYWNpbmdNb2RlID09ICdlbnZpcm9ubWVudCdcbiAgICAgICAgICAgICAgY3VycmVudEZhY2luZ01vZGUgPSAndXNlcidcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgY3VycmVudEZhY2luZ01vZGUgPSAnZW52aXJvbm1lbnQnXG4gICAgICAgICAgICBpbml0Q2FtZXJhU3RyZWFtKClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICByZXR1cm5cblxuICAgICAgIyBodHRwczovL2dpdGh1Yi5jb20vd2VicnRjL3NhbXBsZXMvYmxvYi9naC1wYWdlcy9zcmMvY29udGVudC9kZXZpY2VzL2lucHV0LW91dHB1dC9qcy9tYWluLmpzXG5cbiAgICAgIGNsb3NlQ2FtZXJhU3RyZWFtID0gLT5cbiAgICAgICAgaWYgd2luZG93LnN0cmVhbVxuICAgICAgICAgIHdpbmRvdy5zdHJlYW0uZ2V0VHJhY2tzKCkuZm9yRWFjaCAodHJhY2spIC0+XG4gICAgICAgICAgICB0cmFjay5zdG9wKClcblxuICAgICAgZWxlbWVudC5vbiAnJGRlc3Ryb3knLCAtPlxuICAgICAgICBjbG9zZUNhbWVyYVN0cmVhbSgpXG5cbiAgICAgIGluaXRDYW1lcmFTdHJlYW0gPSAtPlxuICAgICAgICAjIHN0b3AgYW55IGFjdGl2ZSBzdHJlYW1zIGluIHRoZSB3aW5kb3dcblxuICAgICAgICBoYW5kbGVTdWNjZXNzID0gKHN0cmVhbSkgLT5cbiAgICAgICAgICB3aW5kb3cuc3RyZWFtID0gc3RyZWFtXG4gICAgICAgICAgIyBtYWtlIHN0cmVhbSBhdmFpbGFibGUgdG8gYnJvd3NlciBjb25zb2xlXG4gICAgICAgICAgbXlWaWRlby5zcmNPYmplY3QgPSBzdHJlYW1cbiAgICAgICAgICBteVZpZGVvLm11dGVkID0gdHJ1ZVxuICAgICAgICAgIGlmIGNvbnN0cmFpbnRzLnZpZGVvLmZhY2luZ01vZGVcbiAgICAgICAgICAgIGlmIGNvbnN0cmFpbnRzLnZpZGVvLmZhY2luZ01vZGUgPT0gJ2Vudmlyb25tZW50J1xuICAgICAgICAgICAgICBzd2l0Y2hDYW1lcmFCdXR0b24uc2V0QXR0cmlidXRlICdhcmlhLXByZXNzZWQnLCB0cnVlXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgIHN3aXRjaENhbWVyYUJ1dHRvbi5zZXRBdHRyaWJ1dGUgJ2FyaWEtcHJlc3NlZCcsIGZhbHNlXG4gICAgICAgICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5lbnVtZXJhdGVEZXZpY2VzKClcblxuICAgICAgICBoYW5kbGVFcnJvciA9IChlcnJvcikgLT5cbiAgICAgICAgICBMT0cgZXJyb3JcbiAgICAgICAgICAjaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL01lZGlhRGV2aWNlcy9nZXRVc2VyTWVkaWFcbiAgICAgICAgICBpZiBlcnJvciA9PSAnUGVybWlzc2lvbkRlbmllZEVycm9yJ1xuICAgICAgICAgICAgYWxlcnQgJ1Blcm1pc3Npb24gZGVuaWVkLiBQbGVhc2UgcmVmcmVzaCBhbmQgZ2l2ZSBwZXJtaXNzaW9uLidcbiAgICAgICAgICByZXR1cm5cblxuICAgICAgICBjbG9zZUNhbWVyYVN0cmVhbSgpXG5cbiAgICAgICAgY29uc3RyYWludHMgPVxuICAgICAgICAgIGF1ZGlvOiB0cnVlXG4gICAgICAgICAgdmlkZW86XG4gICAgICAgICAgICB3aWR0aDpcbiAgICAgICAgICAgICAgbWluOiAyMDBcbiAgICAgICAgICAgICAgaWRlYWw6IDIwMFxuICAgICAgICAgICAgICBtYXg6IDY0MFxuICAgICAgICAgICAgaGVpZ2h0OlxuICAgICAgICAgICAgICBtaW46IDIwMFxuICAgICAgICAgICAgICBpZGVhbDogMjAwXG4gICAgICAgICAgICAgIG1heDogNjQwXG4gICAgICAgICAgICBmYWNpbmdNb2RlOiBjdXJyZW50RmFjaW5nTW9kZVxuICAgICAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYShjb25zdHJhaW50cykudGhlbihoYW5kbGVTdWNjZXNzKS5jYXRjaCBoYW5kbGVFcnJvclxuICAgICAgICByZXR1cm5cblxuICAgICAgdGFrZVNuYXBzaG90ID0gLT5cbiAgICAgICAgaWYgIWlzUmVjb3JkaW5nKClcbiAgICAgICAgICBjYXB0dXJlU2NyZWVuIHdpbmRvdy5zdHJlYW1cbiAgICAgICAgICBnb0xpdmVCdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCdcbiAgICAgICAgICBzd2l0Y2hDYW1lcmFCdXR0b24uZGlzYWJsZWQgPSB0cnVlXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBwYXVzZVJlY29yZGluZygpXG4gICAgICAgICAgZ29MaXZlQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcnXG4gICAgICAgICAgc3dpdGNoQ2FtZXJhQnV0dG9uLmRpc2FibGVkID0gZmFsc2VcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIG9wZW5SZW1vdGVWaWRlbyA9IC0+XG4gICAgICAgIGlkID0gc2NvcGUucHVia2V5ICsgJy9zdHJlYW0nXG4gICAgICAgIHN0cmVhbWVyID0gbmV3IFN0cmVhbWVyKGlkLCByZW1vdGVWaWRlbylcbiAgICAgICAgc3RyZWFtZXIuaW5pdCgpXG5cbiAgICAgIGdvID0gLT5cbiAgICAgICAgcmV0dXJuIHVubGVzcyBzY29wZS5ndW4gYW5kIHNjb3BlLnB1YmtleVxuICAgICAgICB1ID0gc2NvcGUuZ3VuLnVzZXIoKVxuICAgICAgICBteVB1YktleSA9IGlmIHUuXy5zZWEgdGhlbiB1Ll8uc2VhLnB1YiBlbHNlIHVuZGVmaW5lZFxuICAgICAgICBpZiBteVB1YktleSAhPSBzY29wZS5wdWJrZXlcbiAgICAgICAgICBpZiBzY29wZS53YXRjaE9ubHlcbiAgICAgICAgICAgIGJ1dHRvblJvdy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICAgICByZW1vdGVWaWRlby5zdHlsZS53aWR0aCA9ICcxMDAlJ1xuICAgICAgICAgICAgbXlWaWRlby5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICAgbXlWaWRlby5zdHlsZS53aWR0aCA9ICc1MCUnXG4gICAgICAgICAgcmVtb3RlVmlkZW8uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snXG4gICAgICAgICAgb3BlblJlbW90ZVZpZGVvKClcbiAgICAgICAgZWxzZVxuICAgICAgICAgIG15VmlkZW8uc3R5bGUud2lkdGggPSAnMTAwJSdcbiAgICAgICAgICByZW1vdGVWaWRlby5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgIHN0cmVhbUlkID0gbXlQdWJLZXkgKyAnL3N0cmVhbSdcbiAgICAgICAgIyBndW5EQiA9IHNjb3BlLmd1bi5iYWNrKC0xKVxuICAgICAgICAjIEdVTlxuICAgICAgICBwZWVycyA9IFsgJ2h0dHBzOi8vZ3VubWVldGluZ3NlcnZlci5oZXJva3VhcHAuY29tL2d1bicgXVxuICAgICAgICBvcHQgPVxuICAgICAgICAgIHBlZXJzOiBwZWVyc1xuICAgICAgICAgIGxvY2FsU3RvcmFnZTogZmFsc2VcbiAgICAgICAgICByYWRpc2s6IGZhbHNlXG4gICAgICAgIGd1bkRCID0gR3VuKG9wdClcbiAgICAgICAgcmVtb3ZlRnJvbUd1biBzdHJlYW1JZFxuXG4gICAgICAgIHVubGVzcyBzY29wZS53YXRjaE9ubHlcbiAgICAgICAgICAjIGRvIHNvbWUgV2ViUlRDIGNoZWNrcyBiZWZvcmUgY3JlYXRpbmcgdGhlIGludGVyZmFjZVxuICAgICAgICAgIERldGVjdFJUQy5sb2FkIC0+XG4gICAgICAgICAgICAjIGRvIHNvbWUgY2hlY2tzXG4gICAgICAgICAgICBpZiBEZXRlY3RSVEMuaXNXZWJSVENTdXBwb3J0ZWQgPT0gZmFsc2VcbiAgICAgICAgICAgICAgYWxlcnQgJ1BsZWFzZSB1c2UgQ2hyb21lLCBGaXJlZm94LCBpT1MgMTEsIEFuZHJvaWQgNSBvciBoaWdoZXIsIFNhZmFyaSAxMSBvciBoaWdoZXInXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgIGlmIERldGVjdFJUQy5oYXNXZWJjYW0gPT0gZmFsc2VcbiAgICAgICAgICAgICAgICBhbGVydCAnUGxlYXNlIGluc3RhbGwgYW4gZXh0ZXJuYWwgd2ViY2FtIGRldmljZS4nXG4gICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBhbW91bnRPZkNhbWVyYXMgPSBEZXRlY3RSVEMudmlkZW9JbnB1dERldmljZXMubGVuZ3RoXG4gICAgICAgICAgICAgICAgaW5pdENhbWVyYVVJKClcbiAgICAgICAgICAgICAgICBpbml0Q2FtZXJhU3RyZWFtKClcbiAgICAgICAgICAgIExPRyAnUlRDIERlYnVnIGluZm86ICcgKyAnXFxuIE9TOiAgICAgICAgICAgICAgICAgICAnICsgRGV0ZWN0UlRDLm9zTmFtZSArICcgJyArIERldGVjdFJUQy5vc1ZlcnNpb24gKyAnXFxuIGJyb3dzZXI6ICAgICAgICAgICAgICAnICsgRGV0ZWN0UlRDLmJyb3dzZXIuZnVsbFZlcnNpb24gKyAnICcgKyBEZXRlY3RSVEMuYnJvd3Nlci5uYW1lICsgJ1xcbiBpcyBNb2JpbGUgRGV2aWNlOiAgICAgJyArIERldGVjdFJUQy5pc01vYmlsZURldmljZSArICdcXG4gaGFzIHdlYmNhbTogICAgICAgICAgICcgKyBEZXRlY3RSVEMuaGFzV2ViY2FtICsgJ1xcbiBoYXMgcGVybWlzc2lvbjogICAgICAgJyArIERldGVjdFJUQy5pc1dlYnNpdGVIYXNXZWJjYW1QZXJtaXNzaW9uICsgJ1xcbiBnZXRVc2VyTWVkaWEgU3VwcG9ydDogJyArIERldGVjdFJUQy5pc0dldFVzZXJNZWRpYVN1cHBvcnRlZCArICdcXG4gaXNXZWJSVEMgU3VwcG9ydGVkOiAgICcgKyBEZXRlY3RSVEMuaXNXZWJSVENTdXBwb3J0ZWQgKyAnXFxuIFdlYkF1ZGlvIFN1cHBvcnRlZDogICAnICsgRGV0ZWN0UlRDLmlzQXVkaW9Db250ZXh0U3VwcG9ydGVkICsgJ1xcbiBpcyBNb2JpbGUgRGV2aWNlOiAgICAgJyArIERldGVjdFJUQy5pc01vYmlsZURldmljZVxuXG4gICAgICBzY29wZS4kd2F0Y2ggJ2d1bicsIGdvXG4iXX0=

(function() {
  angular.module('irisAngular').directive('message', function() {
    return {
      scope: true,
      restrict: 'E',
      templateUrl: 'app/components/message/message.template.html',
      link: function(scope, element, attrs) {
        var a, addAttachment, alpha, attachment, emojis, i, index, j, l, len, len1, len2, maxRatingDiff, minRatingDiff, msg, n, neutralRating, rating, ref, ref1, ref2, ref3, ref4, ref5, ref6, smallestIndex, updateReactions, updateReplies, updateShares;
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
        if (msg.signedData.recipient) {
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
        }
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
        if (msg.signedData.recipient) {
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
        }
        if (msg.signedData.text && msg.signedData.text.length <= 2) {
          emojis = '\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]';
          if (msg.signedData.text.match(new RegExp(emojis, 'g')).length) {
            msg.emojisOnly = true;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9tZXNzYWdlL21lc3NhZ2UuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJjb21wb25lbnRzL21lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxhQUFmLENBQ0UsQ0FBQyxTQURILENBQ2EsU0FEYixFQUN3QixRQUFBLENBQUEsQ0FBQTtXQUNwQjtNQUFBLEtBQUEsRUFBTyxJQUFQO01BQ0EsUUFBQSxFQUFVLEdBRFY7TUFFQSxXQUFBLEVBQWEsOENBRmI7TUFHQSxJQUFBLEVBQU0sUUFBQSxDQUFDLEtBQUQsRUFBUSxPQUFSLEVBQWlCLEtBQWpCLENBQUE7QUFDSixZQUFBLENBQUEsRUFBQSxhQUFBLEVBQUEsS0FBQSxFQUFBLFVBQUEsRUFBQSxNQUFBLEVBQUEsQ0FBQSxFQUFBLEtBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLGFBQUEsRUFBQSxhQUFBLEVBQUEsR0FBQSxFQUFBLENBQUEsRUFBQSxhQUFBLEVBQUEsTUFBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxhQUFBLEVBQUEsZUFBQSxFQUFBLGFBQUEsRUFBQTtRQUFBLEdBQUEsR0FBTSxLQUFLLENBQUM7UUFDWixHQUFHLENBQUMsS0FBSixHQUFZO1FBQ1osZUFBQSxHQUFrQixRQUFBLENBQUMsU0FBRCxDQUFBO0FBQ2hCLGNBQUEsQ0FBQSxFQUFBLEtBQUEsRUFBQSxLQUFBLEVBQUE7VUFBQSxLQUFBLEdBQVE7VUFDUixLQUFBLEdBQVE7VUFDUixLQUFBLGNBQUE7O1lBQ0UsSUFBRyxDQUFBLEtBQUssTUFBUjtjQUNFLEtBQUE7Y0FDQSxJQUFnQixDQUFBLEtBQUssS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFyQixJQUErQixD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Z0QsS0FQaEU7YUFBQSxNQVFLLElBQUcsTUFBQSxHQUFTLGFBQVo7Y0FDSCxHQUFHLENBQUMsU0FBSixHQUFnQjtjQUNoQixHQUFHLENBQUMsU0FBSixHQUFtQixhQUFBLEdBQWdCLENBQUMsQ0FBcEIsR0FBMkIsR0FBRyxDQUFDLFNBQS9CLEdBQThDLElBQUksS0FBSixDQUFVLElBQUksQ0FBQyxJQUFMLENBQVUsQ0FBQSxHQUFJLE1BQUosR0FBYSxhQUF2QixDQUFWO2NBQzlELEtBQUEsR0FBUSxDQUFDLE1BQUEsR0FBUyxhQUFULEdBQXlCLEdBQTFCLENBQUEsR0FBaUMsYUFBakMsR0FBaUQsSUFBakQsR0FBd0Q7cUJBQ2hFLEdBQUcsQ0FBQyxPQUFKLEdBQWMsb0NBQUEsR0FBdUMsS0FBdkMsR0FBK0MsS0FKMUQ7YUFBQSxNQUFBO2NBTUgsR0FBRyxDQUFDLE9BQUosR0FBYztxQkFDZCxHQUFHLENBQUMsU0FBSixHQUFnQiw0Q0FQYjs7QUF4QlQ7TUE5SEk7SUFITjtFQURvQixDQUR4QjtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUgJ2lyaXNBbmd1bGFyJ1xuICAuZGlyZWN0aXZlICdtZXNzYWdlJywgLT5cbiAgICBzY29wZTogdHJ1ZVxuICAgIHJlc3RyaWN0OiAnRSdcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL21lc3NhZ2UvbWVzc2FnZS50ZW1wbGF0ZS5odG1sJ1xuICAgIGxpbms6IChzY29wZSwgZWxlbWVudCwgYXR0cnMpIC0+XG4gICAgICBtc2cgPSBzY29wZS5tc2dcbiAgICAgIG1zZy5saWtlcyA9IDBcbiAgICAgIHVwZGF0ZVJlYWN0aW9ucyA9IChyZWFjdGlvbnMpIC0+XG4gICAgICAgIGxpa2VzID0gMFxuICAgICAgICBsaWtlZCA9IGZhbHNlXG4gICAgICAgIGZvciBrLCB2IG9mIHJlYWN0aW9uc1xuICAgICAgICAgIGlmIHYgPT0gJ2xpa2UnXG4gICAgICAgICAgICBsaWtlcysrXG4gICAgICAgICAgICBsaWtlZCA9IHRydWUgaWYgayA9PSBzY29wZS52aWV3cG9pbnQudmFsdWUgYW5kIHYgPT0gJ2xpa2UnXG4gICAgICAgIG1zZy5saWtlcyA9IGxpa2VzXG4gICAgICAgIG1zZy5saWtlZCA9IGxpa2VkXG4gICAgICBpZiBtc2cuc2lnbmVkRGF0YS5zaGFyZWRNc2cgYW5kIG5vdCBvcHRpb25zLm5vUmVjdXJzaW9uXG4gICAgICAgIHNjb3BlLmlyaXNJbmRleC5nZXRNZXNzYWdlQnlIYXNoKG1zZy5zaWduZWREYXRhLnNoYXJlZE1zZykudGhlbiAobSkgLT5cbiAgICAgICAgICBtc2cuc2hhcmVkTXNnID0gbVxuICAgICAgdXBkYXRlUmVhY3Rpb25zKG1zZy5yZWFjdGlvbnMpIGlmIG1zZy5yZWFjdGlvbnNcbiAgICAgIG1zZy5yZXBsaWVzQXJyID0gbXNnLnJlcGxpZXNBcnIgb3IgW11cbiAgICAgIG1zZy5yZXBsaWVzID0gbXNnLnJlcGxpZXMgb3Ige31cbiAgICAgIG1zZy5zaGFyZXNBcnIgPSBtc2cuc2hhcmVzQXJyIG9yIFtdXG4gICAgICBtc2cuc2hhcmVzID0gbXNnLnNoYXJlcyBvciB7fVxuICAgICAgdXBkYXRlUmVwbGllcyA9IChyZXBsaWVzKSAtPlxuICAgICAgICBmb3IgaGFzaCwgcmVwbHlSYXcgb2YgcmVwbGllc1xuICAgICAgICAgIHdpbmRvdy5pcmlzTGliLk1lc3NhZ2UuZnJvbVNpZyhyZXBseVJhdykudGhlbiAocikgLT5cbiAgICAgICAgICAgIHVubGVzcyBtc2cucmVwbGllc1tyLmdldEhhc2goKV0gYW5kIG1zZy5yZXBsaWVzW3IuZ2V0SGFzaCgpXS5hdXRob3JcbiAgICAgICAgICAgICAgaWYgbXNnLnNpZ25lZERhdGEucG9sbE9wdGlvbnMgYW5kIHIuc2lnbmVkRGF0YS50eXBlID09ICd2b3RlJ1xuICAgICAgICAgICAgICAgIHVubGVzcyBtc2cudm90ZU1zZ3MgYW5kIG1zZy52b3RlTXNncy5oYXNPd25Qcm9wZXJ0eShyLmdldFNpZ25lcktleUlEKCkpXG4gICAgICAgICAgICAgICAgICBtc2cudm90ZUNvdW50ID0gaWYgbXNnLnZvdGVDb3VudCB0aGVuIG1zZy52b3RlQ291bnQgKyAxIGVsc2UgMVxuICAgICAgICAgICAgICAgICAgaWYgIW1zZy5teVZvdGUgYW5kIHIuZ2V0U2lnbmVyS2V5SUQoKSA9PSBzY29wZS5hdXRoZW50aWNhdGlvbi51c2VyLmlkVmFsdWVcbiAgICAgICAgICAgICAgICAgICAgbXNnLm15Vm90ZSA9IHIuc2lnbmVkRGF0YS52b3RlXG4gICAgICAgICAgICAgICAgICBtc2cudm90ZU1zZ3MgPSBtc2cudm90ZU1zZ3Mgb3Ige31cbiAgICAgICAgICAgICAgICAgIG1zZy52b3RlTXNnc1tyLmdldFNpZ25lcktleUlEKCldID0gci5nZXRIYXNoKClcbiAgICAgICAgICAgICAgICAgIHVubGVzcyBtc2cudm90ZVJlc3VsdHNcbiAgICAgICAgICAgICAgICAgICAgbXNnLnZvdGVSZXN1bHRzID0ge31cbiAgICAgICAgICAgICAgICAgICAgbXNnLnZvdGVSZXN1bHRzW28udGV4dF0gPSAwIGZvciBvIGluIG1zZy5zaWduZWREYXRhLnBvbGxPcHRpb25zXG4gICAgICAgICAgICAgICAgICBpZiBtc2cudm90ZVJlc3VsdHMuaGFzT3duUHJvcGVydHkoci5zaWduZWREYXRhLnZvdGUpXG4gICAgICAgICAgICAgICAgICAgIG1zZy52b3RlUmVzdWx0c1tyLnNpZ25lZERhdGEudm90ZV0gPSBtc2cudm90ZVJlc3VsdHNbci5zaWduZWREYXRhLnZvdGVdICsgMVxuICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBtc2cudm90ZVJlc3VsdHNbci5zaWduZWREYXRhLnZvdGVdID0gMVxuICAgICAgICAgICAgICBtc2cucmVwbGllc1tyLmdldEhhc2goKV0gPSByXG4gICAgICAgICAgICAgIG1zZy5yZXBsaWVzQXJyID0gT2JqZWN0LnZhbHVlcyhtc2cucmVwbGllcylcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cgMTExMSwgciwgbXNnIGlmIHIuc2lnbmVkRGF0YS50eXBlID09ICd2b3RlJ1xuICAgICAgdXBkYXRlU2hhcmVzID0gKHNoYXJlcykgLT5cbiAgICAgICAgZm9yIGhhc2gsIHNoYXJlUmF3IG9mIHNoYXJlc1xuICAgICAgICAgIHdpbmRvdy5pcmlzTGliLk1lc3NhZ2UuZnJvbVNpZyhzaGFyZVJhdykudGhlbiAocikgLT5cbiAgICAgICAgICAgIHVubGVzcyBtc2cuc2hhcmVzW3IuZ2V0SGFzaCgpXSBhbmQgbXNnLnNoYXJlc1tyLmdldEhhc2goKV0uYXV0aG9yXG4gICAgICAgICAgICAgIG1zZy5zaGFyZXNbci5nZXRIYXNoKCldID0gclxuICAgICAgICAgICAgICBtc2cuc2hhcmVzQXJyID0gT2JqZWN0LnZhbHVlcyhtc2cuc2hhcmVzKVxuICAgICAgaWYgbXNnLmd1blxuICAgICAgICBtc2cuZ3VuLmdldCgncmVwbGllcycpLm9wZW4gdXBkYXRlUmVwbGllc1xuICAgICAgICBtc2cuZ3VuLmdldCgncmVhY3Rpb25zJykub24gdXBkYXRlUmVhY3Rpb25zXG4gICAgICAgIG1zZy5ndW4uZ2V0KCdzaGFyZXMnKS5vcGVuIHVwZGF0ZVNoYXJlc1xuICAgICAgdW5sZXNzIG1zZy5hdXRob3JcbiAgICAgICAgbXNnLmF1dGhvciA9IG1zZy5nZXRBdXRob3Ioc2NvcGUuaXJpc0luZGV4KVxuICAgICAgICBtc2cuYXV0aG9yLmd1bi5nZXQoJ3RydXN0RGlzdGFuY2UnKS5vbiAoZCkgLT4gbXNnLmF1dGhvclRydXN0RGlzdGFuY2UgPSBkXG4gICAgICBtc2cuYXV0aG9yLmd1bi5nZXQoJ2F0dHJzJykub3BlbiAoZCkgLT5cbiAgICAgICAgbXZhID0gd2luZG93LmlyaXNMaWIuSWRlbnRpdHkuZ2V0TW9zdFZlcmlmaWVkQXR0cmlidXRlcyhkKVxuICAgICAgICBpZiBtdmEubmFtZVxuICAgICAgICAgIHNjb3BlLiRhcHBseSAtPiBtc2cuYXV0aG9yX25hbWUgPSBtdmEubmFtZS5hdHRyaWJ1dGUudmFsdWVcbiAgICAgICAgZWxzZSBpZiBtdmEubmlja25hbWVcbiAgICAgICAgICBzY29wZS4kYXBwbHkgLT4gbXNnLmF1dGhvcl9uYW1lID0gbXZhLm5pY2tuYW1lLmF0dHJpYnV0ZS52YWx1ZVxuICAgICAgaWYgbXNnLnNpZ25lZERhdGEucmVjaXBpZW50XG4gICAgICAgIG1zZy5yZWNpcGllbnQgPSBtc2cuZ2V0UmVjaXBpZW50KHNjb3BlLmlyaXNJbmRleClcbiAgICAgICAgbXNnLnJlY2lwaWVudC5ndW4uZ2V0KCdhdHRycycpLm9wZW4gKGQpIC0+XG4gICAgICAgICAgbXZhID0gd2luZG93LmlyaXNMaWIuSWRlbnRpdHkuZ2V0TW9zdFZlcmlmaWVkQXR0cmlidXRlcyhkKVxuICAgICAgICAgIGlmIG12YS5uYW1lXG4gICAgICAgICAgICBzY29wZS4kYXBwbHkgLT4gbXNnLnJlY2lwaWVudF9uYW1lID0gbXZhLm5hbWUuYXR0cmlidXRlLnZhbHVlXG4gICAgICAgICAgZWxzZSBpZiBtdmEubmlja25hbWVcbiAgICAgICAgICAgIHNjb3BlLiRhcHBseSAtPiBtc2cucmVjaXBpZW50X25hbWUgPSBtdmEubmlja25hbWUuYXR0cmlidXRlLnZhbHVlXG4gICAgICBpZiBtc2cuc2lnbmVkRGF0YS5hdHRhY2htZW50c1xuICAgICAgICBtc2cuYXR0YWNobWVudHMgPSBbXVxuICAgICAgICBhZGRBdHRhY2htZW50ID0gKGF0dGFjaG1lbnQpIC0+XG4gICAgICAgICAgaWYgYXR0YWNobWVudC51cmlcbiAgICAgICAgICAgIHR5cGUgPSBhdHRhY2htZW50LnR5cGUgb3IgJ2ltYWdlJ1xuICAgICAgICAgICAgdHlwZVN1YnN0ciA9IGF0dGFjaG1lbnQudHlwZS5zdWJzdHIoMCw1KVxuICAgICAgICAgICAgaWYgdHlwZVN1YnN0ciBpbiBbJ2F1ZGlvJywgJ3ZpZGVvJ11cbiAgICAgICAgICAgICAgbXNnLmF0dGFjaG1lbnRzLnB1c2ggT2JqZWN0LmFzc2lnbiB7dHlwZSwgdHlwZVN1YnN0cn0sIGF0dGFjaG1lbnRcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cgbXNnLmF0dGFjaG1lbnRzXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgIHNjb3BlLmlwZnNHZXQoYXR0YWNobWVudC51cmksIHtiYXNlNjR0eXBlOiB0eXBlfSkudGhlbiAoc3JjKSAtPlxuICAgICAgICAgICAgICAgIHNjb3BlLiRhcHBseSAtPlxuICAgICAgICAgICAgICAgICAgbXNnLmF0dGFjaG1lbnRzLnB1c2ggT2JqZWN0LmFzc2lnbiB7c3JjLCB0eXBlLCB0eXBlU3Vic3RyfSwgYXR0YWNobWVudFxuICAgICAgICBhZGRBdHRhY2htZW50KGF0dGFjaG1lbnQpIGZvciBhdHRhY2htZW50IGluIG1zZy5zaWduZWREYXRhLmF0dGFjaG1lbnRzXG4gICAgICAjIFRPRE86IG1ha2Ugc3VyZSBtZXNzYWdlIHNpZ25hdHVyZSBpcyBjaGVja2VkXG4gICAgICBpID0gdW5kZWZpbmVkXG4gICAgICBpID0gMFxuICAgICAgc21hbGxlc3RJbmRleCA9IDEwMDBcbiAgICAgIG1zZy5hdXRob3JBcnJheSA9IG1zZy5nZXRBdXRob3JBcnJheSgpXG4gICAgICBmb3IgYSBpbiBtc2cuYXV0aG9yQXJyYXlcbiAgICAgICAgbXNnLmxpbmtUb0F1dGhvciA9IGEgdW5sZXNzIG1zZy5saW5rVG9BdXRob3JcbiAgICAgICAgaW5kZXggPSBPYmplY3Qua2V5cyh3aW5kb3cuaXJpc0xpYi5BdHRyaWJ1dGUuZ2V0VW5pcXVlSWRWYWxpZGF0b3JzKCkpLmluZGV4T2YoYS50eXBlKVxuICAgICAgICBpZiBpbmRleCA+IC0xIGFuZCBpbmRleCA8IHNtYWxsZXN0SW5kZXhcbiAgICAgICAgICBzbWFsbGVzdEluZGV4ID0gaW5kZXhcbiAgICAgICAgICBtc2cubGlua1RvQXV0aG9yID0gYVxuICAgICAgICBlbHNlIGlmICFtc2cuYXV0aG9yX25hbWUgYW5kIGEudHlwZSBpbiBbJ25hbWUnLCAnbmlja25hbWUnXVxuICAgICAgICAgIG1zZy5hdXRob3JfbmFtZSA9IGEudmFsdWVcbiAgICAgICAgaSsrXG4gICAgICBpID0gMFxuICAgICAgc21hbGxlc3RJbmRleCA9IDEwMDBcbiAgICAgIGlmIG1zZy5zaWduZWREYXRhLnJlY2lwaWVudFxuICAgICAgICBtc2cucmVjaXBpZW50QXJyYXkgPSBtc2cuZ2V0UmVjaXBpZW50QXJyYXkoKVxuICAgICAgICBmb3IgYSBpbiBtc2cucmVjaXBpZW50QXJyYXlcbiAgICAgICAgICBtc2cubGlua1RvUmVjaXBpZW50ID0gYSB1bmxlc3MgbXNnLmxpbmtUb0F1dGhvclxuICAgICAgICAgIGluZGV4ID0gT2JqZWN0LmtleXMod2luZG93LmlyaXNMaWIuQXR0cmlidXRlLmdldFVuaXF1ZUlkVmFsaWRhdG9ycygpKS5pbmRleE9mKGEudHlwZSlcbiAgICAgICAgICBpZiBpbmRleCA+IC0xIGFuZCBpbmRleCA8IHNtYWxsZXN0SW5kZXhcbiAgICAgICAgICAgIHNtYWxsZXN0SW5kZXggPSBpbmRleFxuICAgICAgICAgICAgbXNnLmxpbmtUb1JlY2lwaWVudCA9IGFcbiAgICAgICAgICBlbHNlIGlmICFtc2cucmVjaXBpZW50X25hbWUgYW5kIGEudHlwZSBpbiBbJ25hbWUnLCAnbmlja25hbWUnXVxuICAgICAgICAgICAgbXNnLnJlY2lwaWVudF9uYW1lID0gYS52YWx1ZVxuICAgICAgICAgIGkrK1xuICAgICAgICBpZiBtc2cubGlua1RvQXV0aG9yLmVxdWFscyhtc2cubGlua1RvUmVjaXBpZW50KVxuICAgICAgICAgIG1zZy5zYW1lQXV0aG9yQW5kUmVjaXBpZW50ID0gdHJ1ZVxuICAgICAgICBpZiAhbXNnLmF1dGhvcl9uYW1lXG4gICAgICAgICAgbXNnLmF1dGhvcl9uYW1lID0gbXNnLmxpbmtUb0F1dGhvci52YWx1ZVxuICAgICAgICAgIGlmIG1zZy5saW5rVG9BdXRob3IudHlwZSBpbiBbJ2tleUlEJywgJ3V1aWQnXVxuICAgICAgICAgICAgbXNnLmF1dGhvcl9uYW1lID0gbXNnLmF1dGhvcl9uYW1lLnNsaWNlKDAsIDYpICsgJy4uLidcbiAgICAgICAgaWYgIW1zZy5yZWNpcGllbnRfbmFtZVxuICAgICAgICAgIG1zZy5yZWNpcGllbnRfbmFtZSA9IG1zZy5saW5rVG9SZWNpcGllbnQudmFsdWVcbiAgICAgICAgICBpZiBtc2cubGlua1RvQXV0aG9yLnR5cGUgaW4gWydrZXlJRCcsICd1dWlkJ11cbiAgICAgICAgICAgIG1zZy5yZWNpcGllbnRfbmFtZSA9IG1zZy5yZWNpcGllbnRfbmFtZS5zbGljZSgwLCA2KSArICcuLi4nXG4gICAgICBpZiBtc2cuc2lnbmVkRGF0YS50ZXh0IGFuZCBtc2cuc2lnbmVkRGF0YS50ZXh0Lmxlbmd0aCA8PSAyXG4gICAgICAgIGVtb2ppcyA9ICdcXHUwMGE5fFxcdTAwYWV8W1xcdTIwMDAtXFx1MzMwMF18XFx1ZDgzY1tcXHVkMDAwLVxcdWRmZmZdfFxcdWQ4M2RbXFx1ZDAwMC1cXHVkZmZmXXxcXHVkODNlW1xcdWQwMDAtXFx1ZGZmZl0nXG4gICAgICAgIGlmIG1zZy5zaWduZWREYXRhLnRleHQubWF0Y2gobmV3IFJlZ0V4cChlbW9qaXMsICdnJykpLmxlbmd0aFxuICAgICAgICAgIG1zZy5lbW9qaXNPbmx5ID0gdHJ1ZVxuICAgICAgYWxwaGEgPSB1bmRlZmluZWRcbiAgICAgIG1zZy5iZ0NvbG9yID0gJydcbiAgICAgIG1zZy5pY29uQ291bnQgPSBuZXcgQXJyYXkoMSlcbiAgICAgIHN3aXRjaCBtc2cuc2lnbmVkRGF0YS50eXBlXG4gICAgICAgIHdoZW4gJ3ZlcmlmeV9pZGVudGl0eScsICd2ZXJpZmljYXRpb24nXG4gICAgICAgICAgbXNnLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLW9rLXNpZ24nXG4gICAgICAgICAgbXNnLmlzVmVyaWZpY2F0aW9uID0gdHJ1ZVxuICAgICAgICB3aGVuICd1bnZlcmlmeV9pZGVudGl0eScsICd1bnZlcmlmaWNhdGlvbidcbiAgICAgICAgICBtc2cuaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIG5lZ2F0aXZlJ1xuICAgICAgICAgIG1zZy5iZ0NvbG9yID0gJ2JhY2tncm91bmQtY29sb3I6ICNGRkYwREU7Ym9yZGVyLWNvbG9yOiNGRkUyQzY7J1xuICAgICAgICAgIG1zZy5pc1VudmVyaWZpY2F0aW9uID0gdHJ1ZVxuICAgICAgICB3aGVuICdwb3N0J1xuICAgICAgICAgIG1zZy5pY29uU3R5bGUgPSAnJyAjIGZhIGZhLXBlbmNpbFxuICAgICAgICAgIG1zZy5pc1Bvc3QgPSB0cnVlXG4gICAgICAgIHdoZW4gJ3JhdGluZydcbiAgICAgICAgICByYXRpbmcgPSBtc2cuc2lnbmVkRGF0YS5yYXRpbmdcbiAgICAgICAgICBuZXV0cmFsUmF0aW5nID0gKG1zZy5zaWduZWREYXRhLm1pblJhdGluZyArIG1zZy5zaWduZWREYXRhLm1heFJhdGluZykgLyAyXG4gICAgICAgICAgbWF4UmF0aW5nRGlmZiA9IG1zZy5zaWduZWREYXRhLm1heFJhdGluZyAtIG5ldXRyYWxSYXRpbmdcbiAgICAgICAgICBtaW5SYXRpbmdEaWZmID0gbXNnLnNpZ25lZERhdGEubWluUmF0aW5nIC0gbmV1dHJhbFJhdGluZ1xuICAgICAgICAgIGlmIHJhdGluZyA+IG5ldXRyYWxSYXRpbmdcbiAgICAgICAgICAgIGlmIG1zZy5zaWduZWREYXRhLmNvbnRleHQgPT0gJ3ZlcmlmaWVyJ1xuICAgICAgICAgICAgICBtc2cuaWNvblN0eWxlID0gJ2ZhIGZhLXNoaWVsZCBwb3NpdGl2ZSdcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgbXNnLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLXRodW1icy11cCBwb3NpdGl2ZSdcbiAgICAgICAgICAgICAgbXNnLmljb25Db3VudCA9IGlmIG1heFJhdGluZ0RpZmYgPCAyIHRoZW4gbXNnLmljb25Db3VudCBlbHNlIG5ldyBBcnJheShNYXRoLmNlaWwoMyAqIHJhdGluZyAvIG1heFJhdGluZ0RpZmYpKVxuICAgICAgICAgICAgYWxwaGEgPSAocmF0aW5nIC0gbmV1dHJhbFJhdGluZyAtIDAuNSkgLyBtYXhSYXRpbmdEaWZmIC8gMS4yNSArIDAuMlxuICAgICAgICAgICAgbXNnLmJnQ29sb3IgPSAnYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjMsMjQwLDIxNiwnICsgYWxwaGEgKyAnKTsnXG4gICAgICAgICAgZWxzZSBpZiByYXRpbmcgPCBuZXV0cmFsUmF0aW5nXG4gICAgICAgICAgICBtc2cuaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tdGh1bWJzLWRvd24gbmVnYXRpdmUnXG4gICAgICAgICAgICBtc2cuaWNvbkNvdW50ID0gaWYgbWluUmF0aW5nRGlmZiA+IC0yIHRoZW4gbXNnLmljb25Db3VudCBlbHNlIG5ldyBBcnJheShNYXRoLmNlaWwoMyAqIHJhdGluZyAvIG1pblJhdGluZ0RpZmYpKVxuICAgICAgICAgICAgYWxwaGEgPSAocmF0aW5nIC0gbmV1dHJhbFJhdGluZyArIDAuNSkgLyBtaW5SYXRpbmdEaWZmIC8gMS4yNSArIDAuMlxuICAgICAgICAgICAgbXNnLmJnQ29sb3IgPSAnYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI0MiwyMjIsMjIyLCcgKyBhbHBoYSArICcpOydcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBtc2cuYmdDb2xvciA9ICdiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmOGUzOydcbiAgICAgICAgICAgIG1zZy5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1xdWVzdGlvbi1zaWduIG5ldXRyYWwnXG4iXX0=

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
        unseenChats: 0,
        unseenPosts: 0,
        create: function(notification) {
          var defaultOptions;
          defaultOptions = {
            seen: false,
            from: '',
            text: '',
            type: 'primary',
            positionX: 'right',
            positionY: 'bottom',
            delay: 10000,
            replaceMessage: true,
            templateUrl: 'app/services/notification.template.html'
          };
          notification = Object.assign(defaultOptions,
    notification);
          notification.message = `${notification.from}: ${notification.text}`;
          this.notifications.push(notification);
          this.notifications.splice(10); // maximum notifications length
          if (!notification.seen) {
            if (notification.type === 'post') {
              this.unseenPosts++;
            }
            if (notification.type === 'chat') {
              this.unseenChats++;
            }
          }
          uiNotification(notification);
          if (document.hidden) {
            if (window.Notification && Notification.permission === 'granted') {
              return navigator.serviceWorker.getRegistration().then(function(reg) {
                return reg.showNotification(notification.from,
    {
                  body: notification.text
                });
              });
            }
          }
        },
        markChatsSeen: function(options) {
          var i,
    len,
    n,
    ref;
          ref = this.notifications;
          for (i = 0, len = ref.length; i < len; i++) {
            n = ref[i];
            if (n.type === 'chat') {
              n.seen = true;
            }
          }
          return this.unseenChats = 0;
        },
        markPostsSeen: function(options) {
          var i,
    len,
    n,
    ref;
          ref = this.notifications;
          for (i = 0, len = ref.length; i < len; i++) {
            n = ref[i];
            if (n.type === 'post') {
              n.seen = true;
            }
          }
          return this.unseenPosts = 0;
        }
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMvbm90aWZpY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VzIjpbInNlcnZpY2VzL25vdGlmaWNhdGlvbi5zZXJ2aWNlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBO0VBQ0EsT0FBTyxDQUFDLE1BQVIsQ0FBZSxhQUFmLENBQTZCLENBQUMsT0FBOUIsQ0FBc0MscUJBQXRDLEVBQTZEO0lBQzNELGNBRDJEO0lBRTNELFFBQUEsQ0FBQyxjQUFELENBQUE7YUFDRTtRQUNFLGFBQUEsRUFBZSxFQURqQjtRQUVFLFdBQUEsRUFBYSxDQUZmO1FBR0UsV0FBQSxFQUFhLENBSGY7UUFJRSxNQUFBLEVBQVEsUUFBQSxDQUFDLFlBQUQsQ0FBQTtBQUNOLGNBQUE7VUFBQSxjQUFBLEdBQ0U7WUFBQSxJQUFBLEVBQU0sS0FBTjtZQUNBLElBQUEsRUFBTSxFQUROO1lBRUEsSUFBQSxFQUFNLEVBRk47WUFHQSxJQUFBLEVBQU0sU0FITjtZQUlBLFNBQUEsRUFBVyxPQUpYO1lBS0EsU0FBQSxFQUFXLFFBTFg7WUFNQSxLQUFBLEVBQU8sS0FOUDtZQU9BLGNBQUEsRUFBZ0IsSUFQaEI7WUFRQSxXQUFBLEVBQWE7VUFSYjtVQVNGLFlBQUEsR0FBZSxNQUFNLENBQUMsTUFBUCxDQUFjLGNBQWQ7SUFBOEIsWUFBOUI7VUFDZixZQUFZLENBQUMsT0FBYixHQUF1QixDQUFBLENBQUEsQ0FBRyxZQUFZLENBQUMsSUFBaEIsQ0FBcUIsRUFBckIsQ0FBQSxDQUF5QixZQUFZLENBQUMsSUFBdEMsQ0FBQTtVQUN2QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQW5CLENBQXdCLFlBQXhCO1VBQ0EsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFuQixDQUEwQixFQUExQixFQWJBO1VBY0EsSUFBQSxDQUFPLFlBQVksQ0FBQyxJQUFwQjtZQUNFLElBQXNCLFlBQVksQ0FBQyxJQUFiLEtBQXFCLE1BQTNDO2NBQUEsSUFBSSxDQUFDLFdBQUwsR0FBQTs7WUFDQSxJQUFzQixZQUFZLENBQUMsSUFBYixLQUFxQixNQUEzQztjQUFBLElBQUksQ0FBQyxXQUFMLEdBQUE7YUFGRjs7VUFHQSxjQUFBLENBQWUsWUFBZjtVQUNBLElBQUcsUUFBUSxDQUFDLE1BQVo7WUFDRSxJQUFHLE1BQU0sQ0FBQyxZQUFQLElBQXdCLFlBQVksQ0FBQyxVQUFiLEtBQTJCLFNBQXREO3FCQUNFLFNBQVMsQ0FBQyxhQUFhLENBQUMsZUFBeEIsQ0FBQSxDQUF5QyxDQUFDLElBQTFDLENBQStDLFFBQUEsQ0FBQyxHQUFELENBQUE7dUJBQzdDLEdBQUcsQ0FBQyxnQkFBSixDQUFxQixZQUFZLENBQUMsSUFBbEM7SUFDRTtrQkFBQSxJQUFBLEVBQU0sWUFBWSxDQUFDO2dCQUFuQixDQURGO2NBRDZDLENBQS9DLEVBREY7YUFERjs7UUFuQk0sQ0FKVjtRQTRCRSxhQUFBLEVBQWUsUUFBQSxDQUFDLE9BQUQsQ0FBQTtBQUNiLGNBQUEsQ0FBQTtJQUFBLEdBQUE7SUFBQSxDQUFBO0lBQUE7QUFBQTtVQUFBLEtBQUEscUNBQUE7O1lBQ0UsSUFBaUIsQ0FBQyxDQUFDLElBQUYsS0FBVSxNQUEzQjtjQUFBLENBQUMsQ0FBQyxJQUFGLEdBQVMsS0FBVDs7VUFERjtpQkFFQSxJQUFJLENBQUMsV0FBTCxHQUFtQjtRQUhOLENBNUJqQjtRQWdDRSxhQUFBLEVBQWUsUUFBQSxDQUFDLE9BQUQsQ0FBQTtBQUNiLGNBQUEsQ0FBQTtJQUFBLEdBQUE7SUFBQSxDQUFBO0lBQUE7QUFBQTtVQUFBLEtBQUEscUNBQUE7O1lBQ0UsSUFBaUIsQ0FBQyxDQUFDLElBQUYsS0FBVSxNQUEzQjtjQUFBLENBQUMsQ0FBQyxJQUFGLEdBQVMsS0FBVDs7VUFERjtpQkFFQSxJQUFJLENBQUMsV0FBTCxHQUFtQjtRQUhOO01BaENqQjtJQURGLENBRjJEO0dBQTdEO0FBREEiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcbmFuZ3VsYXIubW9kdWxlKCdpcmlzQW5ndWxhcicpLnNlcnZpY2UgJ05vdGlmaWNhdGlvblNlcnZpY2UnLCBbXG4gICdOb3RpZmljYXRpb24nLFxuICAodWlOb3RpZmljYXRpb24pIC0+XG4gICAge1xuICAgICAgbm90aWZpY2F0aW9uczogW11cbiAgICAgIHVuc2VlbkNoYXRzOiAwXG4gICAgICB1bnNlZW5Qb3N0czogMFxuICAgICAgY3JlYXRlOiAobm90aWZpY2F0aW9uKSAtPlxuICAgICAgICBkZWZhdWx0T3B0aW9ucyA9XG4gICAgICAgICAgc2VlbjogZmFsc2VcbiAgICAgICAgICBmcm9tOiAnJ1xuICAgICAgICAgIHRleHQ6ICcnXG4gICAgICAgICAgdHlwZTogJ3ByaW1hcnknXG4gICAgICAgICAgcG9zaXRpb25YOiAncmlnaHQnXG4gICAgICAgICAgcG9zaXRpb25ZOiAnYm90dG9tJ1xuICAgICAgICAgIGRlbGF5OiAxMDAwMFxuICAgICAgICAgIHJlcGxhY2VNZXNzYWdlOiB0cnVlXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvc2VydmljZXMvbm90aWZpY2F0aW9uLnRlbXBsYXRlLmh0bWwnXG4gICAgICAgIG5vdGlmaWNhdGlvbiA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdE9wdGlvbnMsIG5vdGlmaWNhdGlvbilcbiAgICAgICAgbm90aWZpY2F0aW9uLm1lc3NhZ2UgPSBcIiN7bm90aWZpY2F0aW9uLmZyb219OiAje25vdGlmaWNhdGlvbi50ZXh0fVwiXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9ucy5wdXNoIG5vdGlmaWNhdGlvblxuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnMuc3BsaWNlIDEwICMgbWF4aW11bSBub3RpZmljYXRpb25zIGxlbmd0aFxuICAgICAgICB1bmxlc3Mgbm90aWZpY2F0aW9uLnNlZW5cbiAgICAgICAgICB0aGlzLnVuc2VlblBvc3RzKysgaWYgbm90aWZpY2F0aW9uLnR5cGUgPT0gJ3Bvc3QnXG4gICAgICAgICAgdGhpcy51bnNlZW5DaGF0cysrIGlmIG5vdGlmaWNhdGlvbi50eXBlID09ICdjaGF0J1xuICAgICAgICB1aU5vdGlmaWNhdGlvbiBub3RpZmljYXRpb25cbiAgICAgICAgaWYgZG9jdW1lbnQuaGlkZGVuXG4gICAgICAgICAgaWYgd2luZG93Lk5vdGlmaWNhdGlvbiBhbmQgTm90aWZpY2F0aW9uLnBlcm1pc3Npb24gPT0gJ2dyYW50ZWQnXG4gICAgICAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5nZXRSZWdpc3RyYXRpb24oKS50aGVuIChyZWcpIC0+XG4gICAgICAgICAgICAgIHJlZy5zaG93Tm90aWZpY2F0aW9uIG5vdGlmaWNhdGlvbi5mcm9tLFxuICAgICAgICAgICAgICAgIGJvZHk6IG5vdGlmaWNhdGlvbi50ZXh0XG4gICAgICBtYXJrQ2hhdHNTZWVuOiAob3B0aW9ucykgLT5cbiAgICAgICAgZm9yIG4gaW4gdGhpcy5ub3RpZmljYXRpb25zXG4gICAgICAgICAgbi5zZWVuID0gdHJ1ZSBpZiBuLnR5cGUgPT0gJ2NoYXQnXG4gICAgICAgIHRoaXMudW5zZWVuQ2hhdHMgPSAwXG4gICAgICBtYXJrUG9zdHNTZWVuOiAob3B0aW9ucykgLT5cbiAgICAgICAgZm9yIG4gaW4gdGhpcy5ub3RpZmljYXRpb25zXG4gICAgICAgICAgbi5zZWVuID0gdHJ1ZSBpZiBuLnR5cGUgPT0gJ3Bvc3QnXG4gICAgICAgIHRoaXMudW5zZWVuUG9zdHMgPSAwXG4gICAgfVxuXVxuIl19

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
      $scope.gun = $window.irisGun = new Gun(opt);
      // TODO: move everything to main controller?
      // set authentication
      $scope.authentication = {}; // Authentication
      $scope.openTime = new Date().getTime();
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
          });
        } else {
          return 'https://iris.to/' + $state.href('identities.show',
    {type,
    value});
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
          $scope.chats = [];
          if (i.writable) {
            $scope.irisIndex.gun.user().get('iris').get('chatMessagesByUuid').map().once(function(node,
    key) {
              var identity;
              identity = $scope.irisIndex.get('uuid',
    key);
              $scope.setIdentityNames(identity);
              return $scope.chats.push({
                idValue: key,
                idType: 'uuid',
                identity: identity,
                latest: null,
                unreadMsgs: 0
              });
            });
            $scope.irisIndex.gun.user().get('chat').map().once(function(node,
    key) {
              var chat,
    identity;
              identity = $scope.irisIndex.get('keyID',
    key);
              $scope.setIdentityNames(identity);
              chat = {
                idValue: key,
                idType: 'keyID',
                identity: identity,
                latest: null,
                unreadMsgs: 0,
                chat: new $window.irisLib.Chat({
                  onMessage: function(msg,
    info) {
                    var notify;
                    if (!msg) {
                      return;
                    }
                    if (chat.latest === null || msg.time > chat.latest.time) {
                      chat.latest = msg;
                    }
                    if ((msg.time > $scope.openTime) && !$state.is('chats.show',
    {
                      value: key
                    }) && !info.selfAuthored) {
                      chat.unreadMsgs++;
                    }
                    notify = (!$state.is('chats.show',
    {
                      value: key
                    }) || document.hidden) && !info.selfAuthored && msg.time > $scope.openTime;
                    if (notify) {
                      return NotificationService.create({
                        type: 'chat',
                        from: msg.author,
                        text: msg.text,
                        onClick: function() {
                          return $state.go('chats.show',
    {
                            type: 'keyID',
                            value: key
                          });
                        }
                      });
                    }
                  },
                  key: $scope.privateKey,
                  gun: $scope.gun,
                  participants: key
                })
              };
              return $scope.chats.push(chat);
            });
          }
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
                    type: 'post',
                    from: name,
                    text: `${name} public messaged you!`,
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
          if ($state.is('identities.show')) {
            msg.recipient = msg.recipient || {};
            if (options.verifiedAttr && $stateParams.type === options.verifiedAttr.type) {
              msg.recipient[$stateParams.type] = [$stateParams.value,
    options.verifiedAttr.value];
            } else {
              msg.recipient[$stateParams.type] = $stateParams.value;
              if (options.verifiedAttr) {
                msg.recipient[options.verifiedAttr.type] = options.verifiedAttr.value;
              }
            }
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
          $scope.creatingUser = false;
          return $scope.createMessage(void 0,
    {
            type: 'rating',
            rating: 1,
            text: 'Trusted by default as a web of trust entry point.',
            recipient: {
              keyID: $scope.defaultIndexKeyID,
              name: 'Iris'
            }
          });
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
      $scope.removeIpfsPeer = function(url) {
        $scope.ipfs.bootstrap.rm(url);
        return $scope.ipfs.swarm.disconnect(url).then(function() {
          return $scope.updateIpfsPeers();
        });
      };
      $scope.notificationsAllowed = window.Notification && Notification.permission === 'granted';
      return $scope.subscribeToNotifications = function() {
        if (window.Notification) {
          return Notification.requestPermission(function(status) {
            return $scope.$apply(function() {
              return $scope.notificationsAllowed = status === 'granted';
            });
          });
        }
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi9tYWluLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzIjpbIm1haW4vbWFpbi5jb250cm9sbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBO0VBQ0EsT0FBTyxDQUFDLE1BQVIsQ0FBZSxhQUFmLENBQTZCLENBQUMsVUFBOUIsQ0FBeUMsZ0JBQXpDLEVBQTJEO0lBQ3pELFFBRHlEO0lBRXpELFlBRnlEO0lBR3pELFdBSHlEO0lBSXpELE9BSnlEO0lBS3pELFFBTHlEO0lBTXpELFFBTnlEO0lBT3pELHFCQVB5RDtJQVF6RCxXQVJ5RDtJQVN6RCxXQVR5RDtJQVV6RCxTQVZ5RDtJQVd6RCxjQVh5RDtJQVl6RCxjQVp5RDtJQWF6RCxJQWJ5RDtJQWN6RCxPQWR5RDtJQWV6RCxxQkFmeUQ7SUFnQnpELFFBQUEsQ0FBQyxNQUFEO0lBQVMsVUFBVDtJQUFxQixTQUFyQjtJQUFnQyxLQUFoQztJQUF1QyxNQUF2QztJQUErQyxNQUEvQztJQUNBLG1CQURBO0lBQ3FCLFNBRHJCO0lBQ2dDLFNBRGhDO0lBQzJDLE9BRDNDO0lBQ29ELFlBRHBEO0lBRUEsWUFGQTtJQUVjLEVBRmQ7SUFFa0IsS0FGbEI7SUFFeUIsbUJBRnpCLENBQUE7QUFHRSxVQUFBLEdBQUE7SUFBQSxVQUFBO0lBQUEsUUFBQTtJQUFBO01BQUEsR0FBQSxHQUNFO1FBQUEsS0FBQSxFQUFPLEVBQVA7UUFDQSxZQUFBLEVBQWM7TUFEZDtNQUVGLElBQUEsQ0FBQSxDQUFPLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBakIsS0FBNkIsV0FBN0IsSUFBNkMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFqQixLQUF5QixNQUE3RSxDQUFBO1FBQ0UsR0FBRyxDQUFDLEtBQUosR0FBWTtVQUFDLGtDQUFEO1VBQXFDLGtDQUFyQztVQURkOztNQUVBLElBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFqQixLQUE2QixRQUFoQztRQUNFLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBVixDQUFlLDJCQUFmLEVBREY7O01BRUEsR0FBRyxDQUFDLEtBQUosR0FBWSxVQUFBLENBQVcsR0FBWDtNQUNaLE1BQU0sQ0FBQyxHQUFQLEdBQWEsT0FBTyxDQUFDLE9BQVIsR0FBa0IsSUFBSSxHQUFKLENBQVEsR0FBUixFQVIvQjs7O01BWUEsTUFBTSxDQUFDLGNBQVAsR0FBd0IsQ0FBQSxFQVp4QjtNQWNBLE1BQU0sQ0FBQyxRQUFQLEdBQWtCLElBQUksSUFBSixDQUFBLENBQVUsQ0FBQyxPQUFYLENBQUE7TUFDbEIsTUFBTSxDQUFDLG1CQUFQLEdBQTZCO01BRTdCLE1BQU0sQ0FBQyx1QkFBUCxHQUFpQyxRQUFBLENBQUMsQ0FBRDtJQUFJLENBQUosQ0FBQTtRQUMvQixJQUFZLENBQUMsQ0FBQyxJQUFGLEtBQVUsUUFBdEI7QUFBQSxpQkFBTyxFQUFQOztRQUNBLElBQWEsQ0FBQyxDQUFDLElBQUYsS0FBVSxRQUF2QjtBQUFBLGlCQUFPLENBQUMsRUFBUjs7QUFDQSxlQUFPLENBQUMsQ0FBQyxLQUFGLEdBQVUsQ0FBQyxDQUFDO01BSFk7TUFLakMsTUFBTSxDQUFDLFFBQVAsR0FBa0IsUUFBQSxDQUFDLElBQUQ7SUFBTyxLQUFQLENBQUE7UUFDaEIsSUFBRyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUExQixDQUFrQyxHQUFsQyxDQUFBLEdBQXlDLENBQUMsQ0FBN0M7QUFDRSxpQkFBTyxNQUFNLENBQUMsSUFBUCxDQUFZLGlCQUFaO0lBQStCLENBQUMsSUFBRDtJQUFPLEtBQVAsQ0FBL0I7SUFBOEM7WUFBQyxRQUFBLEVBQVU7VUFBWCxDQUE5QyxFQURUO1NBQUEsTUFBQTtBQUdFLGlCQUFPLGtCQUFBLEdBQXFCLE1BQU0sQ0FBQyxJQUFQLENBQVksaUJBQVo7SUFBK0IsQ0FBQyxJQUFEO0lBQU8sS0FBUCxDQUEvQixFQUg5Qjs7TUFEZ0I7TUFNbEIsTUFBTSxDQUFDLFFBQVAsR0FBa0IsUUFBQSxDQUFDLEVBQUQsQ0FBQTtBQUNoQixlQUFPLGtCQUFBLENBQW1CLEVBQUUsQ0FBQyxJQUF0QixDQUFBLEdBQThCLEdBQTlCLEdBQW9DLGtCQUFBLENBQW1CLEVBQUUsQ0FBQyxLQUF0QjtNQUQzQjtNQUdsQixNQUFNLENBQUMsaUJBQVAsR0FBMkI7TUFDM0IsTUFBTSxDQUFDLEtBQVAsR0FBZSxDQUFBO01BQ2YsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFiLEdBQW9CO01BQ3BCLE1BQU0sQ0FBQyxpQkFBUCxHQUEyQjtNQUMzQixNQUFNLENBQUMsR0FBUCxHQUNFO1FBQUEsSUFBQSxFQUFNO01BQU47TUFDRixNQUFNLENBQUMsSUFBUCxHQUNFO1FBQUEsSUFBQSxFQUFNLEVBQU47UUFDQSxJQUFBLEVBQU0sQ0FBQTtNQUROO01BR0YsTUFBTSxDQUFDLElBQVAsR0FBYyxJQUFJLElBQUosQ0FDWjtRQUFBLElBQUEsRUFBTSxJQUFOO1FBQ0EsS0FBQSxFQUFPLElBRFA7UUFFQSxJQUFBLEVBQU07TUFGTixDQURZO01BTWQsTUFBTSxDQUFDLGVBQVAsR0FBeUIsUUFBQSxDQUFDLENBQUQsQ0FBQTtRQUN2QixJQUFHLENBQUEsSUFBTSxDQUFDLENBQUMsTUFBWDtBQUNFLGlCQUFPLENBQUMsQ0FBQyxDQUFDLElBQUYsQ0FBQSxDQUFRLENBQUMsS0FBVCxDQUFlLEdBQWYsQ0FBbUIsQ0FBQyxHQUFwQixDQUF3QixRQUFBLENBQUMsSUFBRCxDQUFBO21CQUFVLElBQUssQ0FBQSxDQUFBLENBQUUsQ0FBQyxXQUFSLENBQUEsQ0FBQSxHQUF3QixJQUFLLFNBQU0sQ0FBQyxXQUFaLENBQUE7VUFBbEMsQ0FBeEIsQ0FBRCxDQUFxRixDQUFDLElBQXRGLENBQTJGLEdBQTNGLEVBRFQ7U0FBQSxNQUFBO0FBR0UsaUJBQU8sRUFIVDs7TUFEdUI7TUFNekIsTUFBTSxDQUFDLGVBQVAsR0FBeUIsUUFBQSxDQUFDLElBQUQsQ0FBQTtlQUN2QixTQUFTLENBQUMsUUFBVixDQUFtQixJQUFuQjtNQUR1QjtNQUd6QixNQUFNLENBQUMsTUFBUCxHQUFnQixRQUFBLENBQUMsS0FBRDtJQUFRLEtBQVIsQ0FBQTtBQUNkLFlBQUEsTUFBQTtJQUFBLFdBQUE7SUFBQSxTQUFBO0lBQUE7UUFBQSxJQUFBLENBQWMsTUFBTSxDQUFDLFNBQXJCO0FBQUEsaUJBQUE7O1FBQ0EsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFYLEdBQXVCLENBQUM7UUFDeEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFYLEdBQWtCO1FBQ2xCLFNBQUEsR0FBWSxDQUFDLEtBQUEsSUFBUyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQXRCLElBQThCLEVBQS9CLENBQWtDLENBQUMsV0FBbkMsQ0FBQSxDQUFnRCxDQUFDLElBQWpELENBQUE7UUFDWixNQUFNLENBQUMsU0FBUCxHQUFtQjtRQUNuQixNQUFNLENBQUMsaUJBQVAsR0FBMkI7UUFDM0IsS0FBQSxHQUFRLEtBQUEsSUFBUztRQUNqQixNQUFBLEdBQVM7UUFDVCxJQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQW5CO1VBQ0UsTUFBQSxHQUFTLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSyxDQUFBLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQWhCLEdBQXlCLENBQXpCLENBQTJCLENBQUMsT0FEdkQ7O1FBRUEsSUFBQSxHQUFPLENBQUE7UUFFUCxXQUFBLEdBQWMsUUFBQSxDQUFDLENBQUQsQ0FBQTtVQUNaLElBQVUsU0FBQSxLQUFhLE1BQU0sQ0FBQyxTQUE5QjtBQUFBLG1CQUFBOztVQUNBLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBTixDQUFTLFFBQUEsQ0FBQyxJQUFELENBQUE7WUFDUCxDQUFDLENBQUMsSUFBRixHQUFTO21CQUNULENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBTixDQUFVLFFBQVYsQ0FBbUIsQ0FBQyxFQUFwQixDQUF1QixRQUFBLENBQUMsTUFBRCxDQUFBO0FBQ3JCLGtCQUFBO2NBQUEsSUFBVSxDQUFDLENBQUMsTUFBRixJQUFZLENBQUMsTUFBdkI7QUFBQSx1QkFBQTs7Y0FDQSxDQUFBLEdBQUksTUFBTSxDQUFDLElBQVAsR0FBYyxNQUFNLENBQUM7Y0FDekIsSUFBVSxJQUFLLENBQUEsQ0FBQSxDQUFmO0FBQUEsdUJBQUE7O2NBQ0EsSUFBSyxDQUFBLENBQUEsQ0FBTCxHQUFVO2NBQ1YsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBaEIsQ0FBcUIsQ0FBckI7cUJBQ0EsQ0FBQyxDQUFDLE1BQUYsR0FBVztZQU5VLENBQXZCO1VBRk8sQ0FBVDtpQkFTQSxNQUFNLENBQUMsZ0JBQVAsQ0FBd0IsQ0FBeEI7SUFBMkIsSUFBM0I7UUFYWTtRQWFkLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBakIsQ0FBd0IsU0FBeEI7SUFBbUMsTUFBbkM7SUFBOEMsV0FBOUM7SUFBMkQsS0FBM0Q7SUFBa0UsTUFBbEU7QUFDQSxlQUFPLElBQUksT0FBSixDQUFZLFFBQUEsQ0FBQyxPQUFELENBQUEsRUFBQTtpQkFDakIsVUFBQSxDQUFXLFFBQUEsQ0FBQSxDQUFBO21CQUNULE9BQUEsQ0FBUSxNQUFNLENBQUMsR0FBRyxDQUFDLElBQW5CO1VBRFMsQ0FBWDtJQUVFLElBRkY7UUFEaUIsQ0FBWjtNQTNCTztNQWdDaEIsUUFBQSxHQUFXLFFBQUEsQ0FBQyxDQUFELENBQUE7UUFDVCxJQUFxQixDQUFDLENBQUMsUUFBdkI7VUFBQSxDQUFDLENBQUMsU0FBRixDQUFZLElBQVosRUFBQTs7ZUFDQSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQVIsQ0FBYSxRQUFBLENBQUEsQ0FBQTtVQUNYLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBWCxHQUFrQjtVQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQVosR0FBbUI7VUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFaLEdBQW1CLENBQUE7VUFDbkIsTUFBTSxDQUFDLFNBQVAsR0FBbUI7VUFDbkIsVUFBQSxDQUFXLFFBQUEsQ0FBQSxDQUFBLEVBQUE7WUFDVCxNQUFNLENBQUMsTUFBUCxDQUFBO21CQUNBLE1BQU0sQ0FBQyxZQUFQLENBQUE7VUFGUyxDQUFYO0lBR0UsSUFIRjtVQUlBLE1BQU0sQ0FBQyxjQUFQLEdBQXdCO1VBQ3hCLE1BQU0sQ0FBQyxLQUFQLEdBQWU7VUFDZixJQUFHLENBQUMsQ0FBQyxRQUFMO1lBQ0UsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBckIsQ0FBQSxDQUEyQixDQUFDLEdBQTVCLENBQWdDLE1BQWhDLENBQXVDLENBQUMsR0FBeEMsQ0FBNEMsb0JBQTVDLENBQWlFLENBQUMsR0FBbEUsQ0FBQSxDQUF1RSxDQUFDLElBQXhFLENBQTZFLFFBQUEsQ0FBQyxJQUFEO0lBQU8sR0FBUCxDQUFBO0FBQzNFLGtCQUFBO2NBQUEsUUFBQSxHQUFXLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBakIsQ0FBcUIsTUFBckI7SUFBNkIsR0FBN0I7Y0FDWCxNQUFNLENBQUMsZ0JBQVAsQ0FBd0IsUUFBeEI7cUJBQ0EsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFiLENBQ0U7Z0JBQUEsT0FBQSxFQUFTLEdBQVQ7Z0JBQ0EsTUFBQSxFQUFRLE1BRFI7Z0JBRUEsUUFBQSxFQUFVLFFBRlY7Z0JBR0EsTUFBQSxFQUFRLElBSFI7Z0JBSUEsVUFBQSxFQUFZO2NBSlosQ0FERjtZQUgyRSxDQUE3RTtZQVNBLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQXJCLENBQUEsQ0FBMkIsQ0FBQyxHQUE1QixDQUFnQyxNQUFoQyxDQUF1QyxDQUFDLEdBQXhDLENBQUEsQ0FBNkMsQ0FBQyxJQUE5QyxDQUFtRCxRQUFBLENBQUMsSUFBRDtJQUFPLEdBQVAsQ0FBQTtBQUNqRCxrQkFBQSxJQUFBO0lBQUE7Y0FBQSxRQUFBLEdBQVcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFqQixDQUFxQixPQUFyQjtJQUE4QixHQUE5QjtjQUNYLE1BQU0sQ0FBQyxnQkFBUCxDQUF3QixRQUF4QjtjQUNBLElBQUEsR0FDRTtnQkFBQSxPQUFBLEVBQVMsR0FBVDtnQkFDQSxNQUFBLEVBQVEsT0FEUjtnQkFFQSxRQUFBLEVBQVUsUUFGVjtnQkFHQSxNQUFBLEVBQVEsSUFIUjtnQkFJQSxVQUFBLEVBQVksQ0FKWjtnQkFLQSxJQUFBLEVBQU0sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQXBCLENBQ0o7a0JBQUEsU0FBQSxFQUFXLFFBQUEsQ0FBQyxHQUFEO0lBQU0sSUFBTixDQUFBO0FBQ1Qsd0JBQUE7b0JBQUEsSUFBQSxDQUFjLEdBQWQ7QUFBQSw2QkFBQTs7b0JBQ0EsSUFBc0IsSUFBSSxDQUFDLE1BQUwsS0FBZSxJQUFmLElBQXVCLEdBQUcsQ0FBQyxJQUFKLEdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFwRTtzQkFBQSxJQUFJLENBQUMsTUFBTCxHQUFjLElBQWQ7O29CQUNBLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSixHQUFXLE1BQU0sQ0FBQyxRQUFuQixDQUFBLElBQWlDLENBQUMsTUFBTSxDQUFDLEVBQVAsQ0FBVSxZQUFWO0lBQXdCO3NCQUFDLEtBQUEsRUFBTTtvQkFBUCxDQUF4QixDQUFsQyxJQUEyRSxDQUFDLElBQUksQ0FBQyxZQUFyRjtzQkFDRSxJQUFJLENBQUMsVUFBTCxHQURGOztvQkFFQSxNQUFBLEdBQVUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFQLENBQVUsWUFBVjtJQUF3QjtzQkFBQyxLQUFBLEVBQU07b0JBQVAsQ0FBeEIsQ0FBRCxJQUF5QyxRQUFRLENBQUMsTUFBbkQsQ0FBQSxJQUErRCxDQUFDLElBQUksQ0FBQyxZQUFyRSxJQUFzRixHQUFHLENBQUMsSUFBSixHQUFXLE1BQU0sQ0FBQztvQkFDbEgsSUFBRyxNQUFIOzZCQUNFLG1CQUFtQixDQUFDLE1BQXBCLENBQ0U7d0JBQUEsSUFBQSxFQUFNLE1BQU47d0JBQ0EsSUFBQSxFQUFNLEdBQUcsQ0FBQyxNQURWO3dCQUVBLElBQUEsRUFBTSxHQUFHLENBQUMsSUFGVjt3QkFHQSxPQUFBLEVBQVMsUUFBQSxDQUFBLENBQUE7aUNBQ1AsTUFBTSxDQUFDLEVBQVAsQ0FBVSxZQUFWO0lBQXdCOzRCQUFFLElBQUEsRUFBTSxPQUFSOzRCQUFpQixLQUFBLEVBQU87MEJBQXhCLENBQXhCO3dCQURPO3NCQUhULENBREYsRUFERjs7a0JBTlMsQ0FBWDtrQkFhQSxHQUFBLEVBQUssTUFBTSxDQUFDLFVBYlo7a0JBY0EsR0FBQSxFQUFLLE1BQU0sQ0FBQyxHQWRaO2tCQWVBLFlBQUEsRUFBYztnQkFmZCxDQURJO2NBTE47cUJBc0JGLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBYixDQUFrQixJQUFsQjtZQTFCaUQsQ0FBbkQsRUFWRjs7VUFxQ0EsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBckIsQ0FBeUIsZ0JBQXpCLENBQTBDLENBQUMsSUFBM0MsQ0FBZ0QsUUFBQSxDQUFDLENBQUQsQ0FBQTtBQUM5QyxnQkFBQSxDQUFBO0lBQUEsT0FBQTtJQUFBO0FBQUE7WUFBQSxLQUFBLE1BQUE7OzJCQUNFLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBdEIsQ0FDRTtnQkFBQSxLQUFBLEVBQU8sQ0FBUDtnQkFDQSxTQUFBLEVBQVcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQXBCLENBQThCLE9BQTlCO0lBQXVDLENBQXZDLENBRFg7Z0JBRUEsUUFBQSxFQUFVLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBakIsQ0FBcUIsT0FBckI7SUFBOEIsQ0FBOUI7Y0FGVixDQURGO1lBREYsQ0FBQTs7VUFEOEMsQ0FBaEQ7VUFNQSxVQUFBLENBQVcsUUFBQSxDQUFBLENBQUE7bUJBQ1QsTUFBTSxDQUFDLFVBQVAsQ0FBa0IscUJBQWxCO1VBRFMsQ0FBWDtJQUVFLElBRkY7VUFHQSxVQUFBLENBQVcsUUFBQSxDQUFBLENBQUE7bUJBQ1QsTUFBTSxDQUFDLFVBQVAsQ0FBa0IscUJBQWxCO1VBRFMsQ0FBWDtJQUVFLElBRkYsRUF4REE7VUEyREEsVUFBQSxDQUFXLFFBQUEsQ0FBQSxDQUFBO21CQUNULE1BQU0sQ0FBQyxVQUFQLENBQWtCLHFCQUFsQjtVQURTLENBQVg7SUFFRSxJQUZGLEVBM0RBO1VBOERBLE9BQU8sQ0FBQyxHQUFSLENBQVksV0FBWjtJQUF5QixNQUFNLENBQUMsU0FBaEM7VUFDQSxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQWpCLEdBQTRCLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBakIsQ0FBcUIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUF0QztJQUE0QyxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQTdEO1VBQzVCLE1BQU0sQ0FBQyxnQkFBUCxDQUF3QixNQUFNLENBQUMsU0FBUyxDQUFDLFFBQXpDO2lCQUNBLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUE5QixDQUFrQyxPQUFsQyxDQUEwQyxDQUFDLElBQTNDLENBQWdELFFBQUEsQ0FBQyxLQUFELENBQUE7WUFDOUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFqQixHQUF5QjttQkFDekIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxzQkFBakIsR0FBMEMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMseUJBQXpCLENBQW1ELEtBQW5EO1VBRkksQ0FBaEQ7UUFsRVcsQ0FBYjtNQUZTO01Bd0VYLE1BQU0sQ0FBQyxnQkFBUCxHQUEwQixRQUFBLENBQUEsQ0FBQTtBQUN4QixZQUFBO1FBQUEsTUFBTSxDQUFDLFNBQVAsR0FBbUI7UUFDbkIsTUFBTSxDQUFDLFNBQVAsR0FBbUI7VUFBQyxJQUFBLEVBQU0sT0FBUDtVQUFnQixLQUFBLEVBQU8sTUFBTSxDQUFDO1FBQTlCO1FBQ25CLENBQUEsR0FBSSxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBcEIsQ0FBMEI7VUFBQyxHQUFBLEVBQUssTUFBTSxDQUFDLEdBQWI7VUFBa0IsTUFBQSxFQUFRLE1BQU0sQ0FBQyxpQkFBakM7VUFBb0QsSUFBQSxFQUFNLE1BQU0sQ0FBQztRQUFqRSxDQUExQjtlQUNKLFFBQUEsQ0FBUyxDQUFUO01BSndCO01BTTFCLE1BQU0sQ0FBQyxZQUFQLEdBQXNCLFFBQUEsQ0FBQyxvQkFBRDtJQUF1QixJQUF2QixDQUFBO0FBQ3BCLFlBQUEsQ0FBQTtJQUFBO1FBQUEsTUFBTSxDQUFDLFNBQVAsR0FBbUI7UUFDbkIsTUFBTSxDQUFDLFNBQVAsR0FBbUI7UUFDbkIsTUFBTSxDQUFDLFVBQVAsR0FBb0IsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBcEIsQ0FBK0Isb0JBQS9CO1FBQ3BCLG1CQUFtQixDQUFDLEdBQXBCLENBQXdCLFNBQXhCO0lBQW1DLG9CQUFuQztRQUNBLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBdEIsR0FDRTtVQUFBLE1BQUEsRUFBUSxPQUFSO1VBQ0EsT0FBQSxFQUFTLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQXBCLENBQTBCLE1BQU0sQ0FBQyxVQUFqQztRQURUO1FBRUYsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBM0IsR0FBaUMsTUFBTSxDQUFDLFFBQVAsQ0FBZ0IsT0FBaEI7SUFBeUIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBcEQ7UUFDakMsSUFBNkIsTUFBTSxDQUFDLFVBQXBDO1VBQUEsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFsQixDQUFBLEVBQUE7O1FBQ0EsS0FBQSxHQUFRLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQXBCLENBQTBCLE1BQU0sQ0FBQyxVQUFqQztRQUNSLE1BQU0sQ0FBQyxTQUFQLEdBQW1CO1VBQUMsSUFBQSxFQUFNLE9BQVA7VUFBZ0IsS0FBQSxFQUFPO1FBQXZCO1FBQ25CLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBWCxHQUFrQjtRQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQVosR0FBbUI7UUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFaLEdBQW1CLENBQUE7UUFDbkIsQ0FBQSxHQUFJLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFwQixDQUEwQjtVQUFDLEdBQUEsRUFBSyxNQUFNLENBQUMsR0FBYjtVQUFrQixPQUFBLEVBQVMsTUFBTSxDQUFDLFVBQWxDO1VBQThDLElBQTlDO1VBQW9ELElBQUEsRUFBTSxNQUFNLENBQUMsSUFBakU7VUFBdUUsS0FBQSxFQUFPO1FBQTlFLENBQTFCO1FBQ0osUUFBQSxDQUFTLENBQVQ7ZUFDQSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQVIsQ0FBYSxRQUFBLENBQUEsQ0FBQTtBQUNYLGNBQUE7VUFBQSxNQUFNLENBQUMsU0FBUCxHQUFtQjtVQUNuQixNQUFNLENBQUMsY0FBYyxDQUFDLFFBQXRCLEdBQWlDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBakIsQ0FBcUIsT0FBckI7SUFBOEIsS0FBOUI7VUFDakMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQW5DLENBQXVDLE9BQXZDLENBQStDLENBQUMsSUFBaEQsQ0FBcUQsUUFBQSxDQUFDLEdBQUQ7SUFBTSxHQUFOO0lBQVcsR0FBWDtJQUFnQixHQUFoQixDQUFBO0FBQ25ELGdCQUFBO1lBQUEsR0FBQSxHQUFNLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLHlCQUF6QixDQUFtRCxHQUFuRDtZQUNOLE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEdBQS9CLEdBQXFDO1lBQ3JDLElBQWEsR0FBRyxDQUFDLFlBQWpCO3FCQUFBLEdBQUcsQ0FBQyxHQUFKLENBQUEsRUFBQTs7VUFIbUQsQ0FBckQ7VUFJQSxPQUFBLEdBQVUsSUFBSSxJQUFKLENBQUE7VUFDVixNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBbkMsQ0FBdUMsVUFBdkMsQ0FBa0QsQ0FBQyxHQUFuRCxDQUFBLENBQXdELENBQUMsSUFBekQsQ0FBOEQsUUFBQSxDQUFDLENBQUQsQ0FBQTtZQUM1RCxJQUFVLENBQUMsQ0FBQyxNQUFGLEtBQVksTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUF2QztBQUFBLHFCQUFBOztZQUNBLE9BQU8sQ0FBQyxHQUFSLENBQVksZUFBWjttQkFDQSxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUF4QixDQUFnQyxDQUFoQyxDQUFrQyxDQUFDLElBQW5DLENBQXdDLFFBQUEsQ0FBQyxHQUFELENBQUE7QUFDdEMsa0JBQUE7Y0FBQSxJQUFHLElBQUksSUFBSixDQUFTLEdBQUcsQ0FBQyxVQUFVLENBQUMsU0FBeEIsQ0FBQSxHQUFxQyxPQUF4QztnQkFDRSxNQUFBLEdBQVMsR0FBRyxDQUFDLFNBQUosQ0FBYyxNQUFNLENBQUMsU0FBckI7dUJBQ1QsTUFBTSxDQUFDLGdCQUFQLENBQXdCLE1BQXhCLENBQStCLENBQUMsSUFBaEMsQ0FBcUMsUUFBQSxDQUFDLElBQUQsQ0FBQTt5QkFDbkMsbUJBQW1CLENBQUMsTUFBcEIsQ0FDRTtvQkFBQSxJQUFBLEVBQU0sTUFBTjtvQkFDQSxJQUFBLEVBQU0sSUFETjtvQkFFQSxJQUFBLEVBQU0sQ0FBQSxDQUFBLENBQUcsSUFBSCxDQUFRLHFCQUFSLENBRk47b0JBR0EsT0FBQSxFQUFTLFFBQUEsQ0FBQSxDQUFBOzZCQUNQLE1BQU0sQ0FBQyxFQUFQLENBQVUsaUJBQVY7SUFBNkI7d0JBQUUsSUFBQSxFQUFNLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQW5DO3dCQUEyQyxLQUFBLEVBQU8sTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7c0JBQTdFLENBQTdCO29CQURPO2tCQUhULENBREY7Z0JBRG1DLENBQXJDLEVBRkY7O1lBRHNDLENBQXhDO1VBSDRELENBQTlEO2lCQWFBLE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFuQyxDQUFzQyxRQUFBLENBQUMsSUFBRCxDQUFBO1lBQ3BDLElBQUcsSUFBSSxDQUFDLGdCQUFMLElBQTBCLE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLElBQXpELElBQWtFLENBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUE3RztjQUNFLE9BQU8sQ0FBQyxHQUFSLENBQVksbUNBQVosRUFERjthQUFBOzttQkFHQSxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUEvQixHQUFzQztVQUpGLENBQXRDO1FBckJXLENBQWI7TUFqQm9CO01BNEN0QixVQUFBLEdBQWEsbUJBQW1CLENBQUMsR0FBcEIsQ0FBd0IsU0FBeEIsQ0FBQSxJQUFzQyxtQkFBbUIsQ0FBQyxHQUFwQixDQUF3QixhQUF4QjtNQUNuRCxJQUFHLFVBQUg7UUFDRSxNQUFNLENBQUMsWUFBUCxDQUFvQixVQUFwQixFQURGO09BQUEsTUFBQTtRQUdFLE1BQU0sQ0FBQyxnQkFBUCxDQUFBLEVBSEY7O01BS0EsTUFBTSxDQUFDLGFBQVAsR0FBdUIsUUFBQSxDQUFBLENBQUE7ZUFDckIsTUFBTSxDQUFDLFNBQVAsQ0FBaUIsV0FBakI7SUFBOEI7VUFBRSxXQUFBLEVBQWEsZ0NBQWY7VUFBaUQsSUFBQSxFQUFNO1FBQXZELENBQTlCO01BRHFCO01BR3ZCLE1BQU0sQ0FBQyxrQkFBUCxHQUE0QixRQUFBLENBQUEsQ0FBQTtlQUMxQixNQUFNLENBQUMsU0FBUCxDQUFpQixnQkFBakI7SUFBbUM7VUFBRSxXQUFBLEVBQWEsaUNBQWY7VUFBa0QsSUFBQSxFQUFNO1FBQXhELENBQW5DO01BRDBCO01BRzVCLE1BQU0sQ0FBQyxlQUFQLEdBQXlCLFFBQUEsQ0FBQSxDQUFBO2VBQ3ZCLE1BQU0sQ0FBQyxTQUFQLENBQWlCLGFBQWpCO0lBQWdDO1VBQUUsV0FBQSxFQUFhLGtDQUFmO1VBQW1ELElBQUEsRUFBTTtRQUF6RCxDQUFoQztNQUR1QjtNQUd6QixNQUFNLENBQUMsZUFBUCxHQUF5QixRQUFBLENBQUEsQ0FBQTtlQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFsQixDQUF3QixRQUFBLENBQUMsR0FBRDtJQUFNLFNBQU4sQ0FBQTtVQUN0QixJQUFHLEdBQUg7bUJBQ0UsT0FBTyxDQUFDLEtBQVIsQ0FBYyw0QkFBZDtJQUE0QyxHQUE1QyxFQURGO1dBQUEsTUFBQTttQkFHRSxNQUFNLENBQUMsTUFBUCxDQUFjLFFBQUEsQ0FBQSxDQUFBO2NBQ1osSUFBZ0MsS0FBSyxDQUFDLE9BQU4sQ0FBYyxTQUFkLENBQWhDO3VCQUFBLE1BQU0sQ0FBQyxTQUFQLEdBQW1CLFVBQW5COztZQURZLENBQWQsRUFIRjs7UUFEc0IsQ0FBeEI7TUFEdUI7TUFRekIsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFaLENBQWUsT0FBZjtJQUF3QixRQUFBLENBQUEsQ0FBQTtRQUN0QixNQUFNLENBQUMsU0FBUCxHQUFtQjtRQUNuQixPQUFPLENBQUMsSUFBUixHQUFlLE1BQU0sQ0FBQztRQUN0QixNQUFNLENBQUMsZUFBUCxDQUFBO2VBQ0EsV0FBQSxDQUFZLE1BQU0sQ0FBQyxlQUFuQjtJQUFvQyxJQUFwQztNQUpzQixDQUF4QjtNQU1BLE1BQU0sQ0FBQyxhQUFQLEdBQXVCLG1CQUFtQixDQUFDLEdBQXBCLENBQXdCLGVBQXhCLENBQUEsSUFBNEMsQ0FBQTtNQUNuRSxNQUFNLENBQUMsOEJBQVAsR0FBd0MsUUFBQSxDQUFBLENBQUE7UUFDdEMsTUFBTSxDQUFDLGFBQWEsQ0FBQywrQkFBckIsR0FBdUQ7ZUFDdkQsbUJBQW1CLENBQUMsR0FBcEIsQ0FBd0IsZUFBeEI7SUFBeUMsTUFBTSxDQUFDLGFBQWhEO01BRnNDO01BSXhDLE1BQU0sQ0FBQywyQkFBUCxHQUFxQyxRQUFBLENBQUEsQ0FBQTtRQUNuQyxJQUFBLENBQWMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUFwQztBQUFBLGlCQUFBOztlQUNBLE1BQU0sQ0FBQyxlQUFQLENBQXVCLE1BQU0sQ0FBQyxrQkFBOUI7SUFBa0Qsc0JBQWxEO0lBQTBFLElBQTFFO01BRm1DO01BSXJDLE1BQU0sQ0FBQyxrQkFBUCxHQUE0QixRQUFBLENBQUMsSUFBRCxDQUFBO2VBQzFCLE1BQU0sQ0FBQyxVQUFQLENBQWtCLElBQWxCLENBQXVCLENBQUMsSUFBeEIsQ0FBNkIsUUFBQSxDQUFDLEtBQUQsQ0FBQTtBQUMzQixjQUFBO1VBQUEsU0FBQSxHQUNFO1lBQUEsWUFBQSxFQUFjLFFBQUEsR0FBVyxLQUFNLENBQUEsQ0FBQSxDQUFFLENBQUM7VUFBbEM7VUFDRixJQUFHLE1BQU0sQ0FBQyxFQUFQLENBQVUsaUJBQVYsQ0FBSDtZQUNFLFNBQVUsQ0FBQSxZQUFZLENBQUMsSUFBYixDQUFWLEdBQStCLFlBQVksQ0FBQyxNQUQ5QztXQUFBLE1BQUE7WUFHRSxTQUFTLENBQUMsS0FBVixHQUFrQixNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztZQUM3QyxNQUFNLENBQUMsOEJBQVAsQ0FBQSxFQUpGOztpQkFLQSxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxrQkFBeEIsQ0FBMkMsQ0FBQyxTQUFELENBQTNDO0lBQXdELE1BQU0sQ0FBQyxVQUEvRCxDQUEwRSxDQUFDLElBQTNFLENBQWdGLFFBQUEsQ0FBQyxDQUFELENBQUE7WUFDOUUsTUFBTSxDQUFDLGdCQUFQLEdBQTBCLEtBQTFCO1lBQ0EsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFqQixDQUE0QixDQUE1QixDQUE4QixDQUFDLElBQS9CLENBQW9DLFFBQUEsQ0FBQSxDQUFBO2NBQ2xDLE1BQU0sQ0FBQyxnQkFBUCxHQUEwQjtjQUMxQixJQUFHLENBQUMsTUFBTSxDQUFDLEVBQVAsQ0FBVSxpQkFBVixDQUFKO3VCQUNFLE1BQU0sQ0FBQyxFQUFQLENBQVUsaUJBQVY7SUFBNkI7a0JBQUUsSUFBQSxFQUFNLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQW5DO2tCQUEyQyxLQUFBLEVBQU8sTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7Z0JBQTdFLENBQTdCLEVBREY7O1lBRmtDLENBQXBDO21CQUlBLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBbkIsQ0FBQTtVQU44RSxDQUFoRjtRQVIyQixDQUE3QjtNQUQwQjtNQWlCNUIsTUFBTSxDQUFDLFlBQVAsR0FBc0IsUUFBQSxDQUFDLEtBQUQsQ0FBQTtRQUNwQixVQUFVLENBQUMsU0FBWCxHQUF1QjtRQUN2QixJQUFJLEtBQUo7aUJBQ0UsVUFBVSxDQUFDLFNBQVgsSUFBd0IsS0FBQSxHQUFRLE1BRGxDOztNQUZvQjtNQUt0QixNQUFNLENBQUMsT0FBUCxHQUFpQixRQUFBLENBQUMsR0FBRDtJQUFNLFVBQVUsQ0FBQSxDQUFoQixDQUFBO0FBQ2YsZUFBTyxJQUFJLE9BQUosQ0FBWSxRQUFBLENBQUMsT0FBRCxDQUFBO0FBQ2pCLGNBQUE7VUFBQSxFQUFBLEdBQUssUUFBQSxDQUFBLENBQUE7bUJBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFaLENBQWdCLEdBQWhCLENBQW9CLENBQUMsSUFBckIsQ0FBMEIsUUFBQSxDQUFDLElBQUQsQ0FBQTtjQUN4QixJQUFBLEdBQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBbEIsQ0FBeUIsSUFBekI7Y0FDUCxJQUFHLE9BQU8sQ0FBQyxPQUFYO2dCQUNFLElBQUEsR0FBTyxJQUFJLENBQUMsS0FBTCxDQUFXLElBQUksQ0FBQyxRQUFMLENBQUEsQ0FBWCxFQURUOztjQUVBLElBQUcsT0FBTyxDQUFDLFVBQVg7Z0JBQ0UsSUFBQSxHQUFPLE9BQUEsR0FBVSxPQUFPLENBQUMsVUFBbEIsR0FBK0IsVUFBL0IsR0FBNEMsSUFBSSxDQUFDLFFBQUwsQ0FBYyxRQUFkLEVBRHJEOztxQkFFQSxPQUFBLENBQVEsSUFBUjtZQU53QixDQUExQjtVQURHO1VBU0wsSUFBRyxNQUFNLENBQUMsU0FBVjttQkFDRSxFQUFBLENBQUEsRUFERjtXQUFBLE1BQUE7bUJBR0UsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFaLENBQWUsT0FBZjtJQUF3QixRQUFBLENBQUEsQ0FBQTtxQkFDdEIsRUFBQSxDQUFBO1lBRHNCLENBQXhCLEVBSEY7O1FBVmlCLENBQVo7TUFEUTtNQWlCakIsTUFBTSxDQUFDLE1BQVAsQ0FBYyxtQkFBZDtJQUFtQyxRQUFBLENBQUMsTUFBRCxDQUFBO0FBQ2pDLFlBQUE7UUFBQSxJQUFHLE1BQUEsR0FBUyxDQUFaO1VBQ0UsS0FBQSxHQUFRLENBQUMsTUFBQSxHQUFTLEdBQVYsQ0FBQSxHQUFpQixDQUFqQixHQUFxQixJQUFyQixHQUE0QjtpQkFDcEMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFsQixHQUEwQjtZQUFDLGNBQUEsRUFBZ0IsbUJBQUEsR0FBc0IsS0FBdEIsR0FBOEI7VUFBL0MsRUFGNUI7U0FBQSxNQUdLLElBQUcsTUFBQSxHQUFTLENBQVo7VUFDSCxLQUFBLEdBQVEsQ0FBQyxNQUFBLEdBQVMsR0FBVixDQUFBLEdBQWlCLENBQUMsQ0FBbEIsR0FBc0IsSUFBdEIsR0FBNkI7aUJBQ3JDLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBbEIsR0FBMEI7WUFBQyxjQUFBLEVBQWdCLG1CQUFBLEdBQXNCLEtBQXRCLEdBQThCO1VBQS9DLEVBRnZCO1NBQUEsTUFBQTtpQkFJSCxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQWxCLEdBQTBCO1lBQUMsY0FBQSxFQUFnQjtVQUFqQixFQUp2Qjs7TUFKNEIsQ0FBbkM7TUFVQSxNQUFNLENBQUMsUUFBUCxHQUFrQixRQUFBLENBQUEsQ0FBQTtRQUNoQixNQUFNLENBQUMsVUFBUCxHQUNFO1VBQUEsTUFBQSxFQUFRLENBQVI7VUFDQSxPQUFBLEVBQVMsRUFEVDtVQUVBLEtBQUEsRUFBTztRQUZQO2VBR0YsTUFBTSxDQUFDLGVBQVAsR0FDRTtVQUFBLElBQUEsRUFBTSxFQUFOO1VBQ0EsS0FBQSxFQUFPO1FBRFA7TUFOYztNQVFsQixNQUFNLENBQUMsUUFBUCxDQUFBO01BRUEsTUFBTSxDQUFDLElBQVAsR0FBYyxRQUFBLENBQUMsR0FBRDtJQUFNLElBQU4sQ0FBQTtRQUNaLE9BQU8sQ0FBQyxHQUFSLENBQVksWUFBWjtlQUNBLE1BQU0sQ0FBQyxhQUFQLENBQXFCLElBQXJCO0lBQTJCO1VBQUMsSUFBQSxFQUFNLE1BQVA7VUFBZSxPQUFBLEVBQVMsR0FBRyxDQUFDLE9BQUosQ0FBQSxDQUF4QjtVQUF1QztRQUF2QyxDQUEzQjtNQUZZLEVBblRkOztNQXdUQSxNQUFNLENBQUMsYUFBUCxHQUF1QixRQUFBLENBQUMsS0FBRDtJQUFRLEdBQVI7SUFBYSxVQUFVLENBQUEsQ0FBdkIsQ0FBQTtBQUNyQixZQUFBLE9BQUE7SUFBQSxJQUFBO0lBQUEsV0FBQTtJQUFBLENBQUE7SUFBQSxHQUFBO0lBQUE7UUFBQSxNQUFNLENBQUMsYUFBUCxHQUF1QjtRQUN2QixJQUEyQixLQUEzQjtVQUFBLEtBQUssQ0FBQyxlQUFOLENBQUEsRUFBQTs7UUFDQSxJQUEwQixHQUFHLENBQUMsV0FBSixLQUFtQixLQUE3QztVQUFBLE9BQU8sR0FBRyxDQUFDLFlBQVg7O1FBRUEsV0FBQSxHQUFjO1FBQ2QsSUFBRyxPQUFPLENBQUMsS0FBWDtVQUNFLEdBQUcsQ0FBQyxXQUFKLEdBQWtCO1VBQ2xCLE9BQUEsR0FBVSxRQUFBLENBQUMsSUFBRCxDQUFBO21CQUNSLE1BQU0sQ0FBQyxVQUFQLENBQWtCLElBQWxCLENBQXVCLENBQUMsSUFBeEIsQ0FBNkIsUUFBQSxDQUFDLEdBQUQsQ0FBQTtjQUMzQixJQUFHLEdBQUEsSUFBUSxHQUFHLENBQUMsTUFBWixJQUF1QixHQUFHLENBQUMsTUFBSixHQUFhLENBQXBDLElBQTBDLEdBQUksQ0FBQSxDQUFBLENBQUUsQ0FBQyxJQUFwRDt1QkFDRSxHQUFHLENBQUMsV0FBVyxDQUFDLElBQWhCLENBQ0U7a0JBQUEsR0FBQSxFQUFLLFFBQUEsR0FBVyxHQUFJLENBQUEsQ0FBQSxDQUFFLENBQUMsSUFBdkI7a0JBQ0EsSUFBQSxFQUFNLElBQUksQ0FBQyxJQURYO2tCQUVBLElBQUEsRUFBTSxJQUFJLENBQUMsSUFGWDtrQkFHQSxJQUFBLEVBQU0sSUFBSSxDQUFDO2dCQUhYLENBREYsRUFERjs7WUFEMkIsQ0FBN0I7VUFEUTtBQVFxQjtVQUFBLEtBQUEscUNBQUE7O1lBQS9CLFdBQVcsQ0FBQyxJQUFaLENBQWlCLE9BQUEsQ0FBUSxJQUFSLENBQWpCO1VBQStCLENBVmpDOztlQVlBLE9BQU8sQ0FBQyxHQUFSLENBQVksV0FBWixDQUF3QixDQUFDLElBQXpCLENBQThCLFFBQUEsQ0FBQSxDQUFBO0FBQzVCLGNBQUE7VUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLGlCQUFaO0lBQStCLEdBQUcsQ0FBQyxXQUFuQyxFQUFBOztVQUVBLE9BQUEsR0FBVTtVQUNWLElBQW9CLEdBQUcsQ0FBQyxLQUF4QjtZQUFBLE9BQU8sR0FBRyxDQUFDLE1BQVg7O1VBQ0EsSUFBRyxNQUFNLENBQUMsRUFBUCxDQUFVLGlCQUFWLENBQUg7WUFDRSxHQUFHLENBQUMsU0FBSixHQUFnQixHQUFHLENBQUMsU0FBSixJQUFpQixDQUFBO1lBQ2pDLElBQUcsT0FBTyxDQUFDLFlBQVIsSUFBeUIsWUFBWSxDQUFDLElBQWIsS0FBcUIsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUF0RTtjQUNFLEdBQUcsQ0FBQyxTQUFVLENBQUEsWUFBWSxDQUFDLElBQWIsQ0FBZCxHQUFtQyxDQUFDLFlBQVksQ0FBQyxLQUFkO0lBQXFCLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBMUMsRUFEckM7YUFBQSxNQUFBO2NBR0UsR0FBRyxDQUFDLFNBQVUsQ0FBQSxZQUFZLENBQUMsSUFBYixDQUFkLEdBQW1DLFlBQVksQ0FBQztjQUNoRCxJQUF5RSxPQUFPLENBQUMsWUFBakY7Z0JBQUEsR0FBRyxDQUFDLFNBQVUsQ0FBQSxPQUFPLENBQUMsWUFBWSxDQUFDLElBQXJCLENBQWQsR0FBMkMsT0FBTyxDQUFDLFlBQVksQ0FBQyxNQUFoRTtlQUpGO2FBRkY7O1VBT0EsSUFBRyxHQUFHLENBQUMsSUFBSixLQUFZLFFBQWY7WUFDRSxHQUFHLENBQUMsU0FBSixJQUFpQjtZQUNqQixHQUFHLENBQUMsU0FBSixJQUFpQixDQUFDO1lBQ2xCLE9BQUEsR0FBVSxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUF4QixDQUFxQyxHQUFyQztJQUEwQyxNQUFNLENBQUMsVUFBakQsRUFIWjtXQUFBLE1BSUssSUFBRyxHQUFHLENBQUMsSUFBSixLQUFZLGNBQWY7WUFDSCxPQUFBLEdBQVUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsa0JBQXhCLENBQTJDLEdBQTNDO0lBQWdELE1BQU0sQ0FBQyxVQUF2RCxFQURQO1dBQUEsTUFBQTtZQUdILE9BQUEsR0FBVSxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUF4QixDQUErQixHQUEvQjtJQUFvQyxNQUFNLENBQUMsVUFBM0MsRUFIUDs7aUJBS0wsT0FBTyxDQUFDLElBQVIsQ0FBYSxRQUFBLENBQUMsQ0FBRCxDQUFBO1lBQ1gsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFqQixDQUE0QixDQUE1QjtZQUNBLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSyxDQUFBLENBQUMsQ0FBQyxPQUFGLENBQUEsQ0FBQSxDQUFqQixHQUFnQzttQkFDaEMsTUFBTSxDQUFDLGVBQVAsQ0FBdUIsQ0FBQyxDQUFELENBQXZCO1VBSFcsQ0FBYixDQUlBLENBQUMsSUFKRCxDQUlNLFFBQUEsQ0FBQyxRQUFELENBQUE7QUFDSixnQkFBQTtZQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQWpCLENBQXNCLFFBQVMsQ0FBQSxDQUFBLENBQS9CO1lBQ0EsSUFBRyxPQUFPLENBQUMsS0FBUixJQUFrQixDQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSyxDQUFBLFFBQVMsQ0FBQSxDQUFBLENBQUUsQ0FBQyxPQUFaLENBQUEsQ0FBQSxDQUE1QztjQUNFLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQW5CLENBQXdCLFFBQVMsQ0FBQSxDQUFBLENBQWpDO2NBQ0EsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFLLENBQUEsUUFBUyxDQUFBLENBQUEsQ0FBRSxDQUFDLE9BQVosQ0FBQSxDQUFBLENBQW5CLEdBQTRDLEtBRjlDOztZQUdBLFlBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFmLEtBQTRCLEdBQUcsQ0FBQyxJQUFoQyxJQUFBLElBQUEsS0FBc0MsSUFBekM7Y0FDRSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQWYsR0FBc0IsR0FBRyxDQUFDLEtBRDVCOztZQUVBLE1BQU0sQ0FBQyxRQUFQLENBQUEsRUFOQTtZQU9BLElBQXNCLE9BQU8sQ0FBQyxLQUE5QjtjQUFBLE9BQU8sQ0FBQyxLQUFSLEdBQWdCLEdBQWhCOztZQUNBLE1BQU0sQ0FBQyxhQUFQLEdBQXVCO0FBQ3ZCLG1CQUFPO1VBVkgsQ0FKTixDQWVBLENBQUMsS0FmRCxDQWVPLFFBQUEsQ0FBQyxDQUFELENBQUE7WUFDTCxPQUFPLENBQUMsS0FBUixDQUFjLENBQWQ7WUFDQSxNQUFNLENBQUMsS0FBUCxHQUFlO1lBQ2YsTUFBTSxDQUFDLGFBQVAsR0FBdUI7QUFDdkIsbUJBQU87VUFKRixDQWZQO1FBckI0QixDQUE5QjtNQWxCcUI7TUE0RHZCLE1BQU0sQ0FBQyxZQUFQLEdBQXNCLFFBQUEsQ0FBQSxDQUFBO2VBQ3BCLFNBQVMsQ0FBQyxJQUFWLENBQWUsc0JBQUEsR0FBeUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFyRDtNQURvQjtNQUd0QixNQUFNLENBQUMsS0FBUCxHQUFlLFFBQUEsQ0FBQSxDQUFBO2VBQ2IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFmLEdBQTZCLENBQUMsRUFEakI7TUFBQTtNQUdmLE1BQU0sQ0FBQyxTQUFQLEdBQW1CLFFBQUEsQ0FBQyxTQUFEO0lBQVksT0FBWixDQUFBO1FBQ2pCLE9BQUEsR0FBVSxNQUFNLENBQUMsTUFBUCxDQUFjO1VBQUMsSUFBQSxFQUFNLElBQVA7VUFBYSxTQUFBLEVBQVcsSUFBeEI7VUFBOEIsS0FBQSxFQUFPO1FBQXJDLENBQWQ7SUFBNEQsT0FBNUQ7UUFDVixNQUFPLENBQUEsU0FBQSxDQUFQLEdBQW9CLFNBQVMsQ0FBQyxJQUFWLENBQWUsT0FBZjtRQUNwQixNQUFPLENBQUEsU0FBQSxDQUFVLENBQUMsTUFBTSxDQUFDLElBQXpCLENBQThCLENBQUMsUUFBQSxDQUFBLENBQUEsRUFBQSxDQUFELENBQTlCO0lBQW9DLENBQUMsUUFBQSxDQUFBLENBQUEsRUFBQSxDQUFELENBQXBDLEVBRkE7UUFHQSxNQUFPLENBQUEsU0FBQSxDQUFVLENBQUMsUUFBUSxDQUFDLElBQTNCLENBQWdDLFFBQUEsQ0FBQSxDQUFBO1VBQzlCLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBdkIsQ0FBQTtVQUNBLElBQTBCLE9BQU8sQ0FBQyxPQUFsQzttQkFBQSxLQUFBLENBQU0sT0FBTyxDQUFDLE9BQWQsRUFBQTs7UUFGOEIsQ0FBaEM7ZUFHQSxZQUFZLENBQUMsT0FBYixDQUFxQixDQUFBLENBQXJCO0lBQXlCLFFBQUEsQ0FBQSxDQUFBO2lCQUN2QixNQUFPLENBQUEsU0FBQSxDQUFVLENBQUMsS0FBbEIsQ0FBQTtRQUR1QixDQUF6QjtNQVBpQjtNQVVuQixNQUFNLENBQUMsY0FBUCxHQUF3QixRQUFBLENBQUEsQ0FBQTtlQUN0QixNQUFNLENBQUMsU0FBUCxDQUFpQixZQUFqQjtJQUErQjtVQUFDLFdBQUEsRUFBYSwyQkFBZDtVQUEyQyxPQUFBLEVBQVM7UUFBcEQsQ0FBL0I7TUFEc0I7TUFHeEIsTUFBTSxDQUFDLGVBQVAsR0FBeUIsUUFBQSxDQUFDLFFBQUQ7SUFBVyxlQUFYO0lBQTRCLFFBQTVCLENBQUE7UUFDdkIsTUFBTSxDQUFDLG1CQUFQLEdBQTZCO1FBQzdCLE1BQU0sQ0FBQyxlQUFQLEdBQXlCLGVBQUEsSUFBbUI7UUFDNUMsTUFBTSxDQUFDLFFBQVAsR0FBa0I7ZUFDbEIsTUFBTSxDQUFDLFNBQVAsQ0FBaUIsYUFBakI7SUFBZ0M7VUFBQyxXQUFBLEVBQWE7UUFBZCxDQUFoQztNQUp1QjtNQU16QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQVosR0FBbUI7TUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFaLEdBQW1CLENBQUE7TUFDbkIsTUFBTSxDQUFDLFlBQVAsR0FBc0I7TUFDdEIsTUFBTSxDQUFDLFlBQVAsR0FBc0IsUUFBQSxDQUFDLE1BQUQsQ0FBQTtBQUNwQixZQUFBLE1BQUE7SUFBQSxLQUFBO0lBQUEsS0FBQTs7Ozs7Ozs7Ozs7Ozs7SUFBQTtRQUFBLEtBQUEsR0FBUSxHQUFSO1FBQ0EsSUFBRyxNQUFBLEtBQVUsTUFBVixJQUF3QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQXZDO1VBQ0UsTUFBQSxHQUFTLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FEdkI7O1FBRUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxRQUFaO0lBQXNCLE1BQXRCO1FBQ0EsS0FBQSxHQUFRO1FBQ1IsTUFBTSxDQUFDLFdBQVAsR0FBcUI7UUFDckIsTUFBQSxHQUFTO1FBY1QsV0FBQSxHQUFjLFFBQUEsQ0FBQyxHQUFELENBQUE7VUFDWixLQUFBLElBQVM7VUFDVCxJQUE4QixLQUFBLElBQVMsS0FBdkM7WUFBQSxNQUFNLENBQUMsV0FBUCxHQUFxQixNQUFyQjs7VUFDQSxJQUFVLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSyxDQUFBLEdBQUcsQ0FBQyxPQUFKLENBQUEsQ0FBQSxDQUEzQjtBQUFBLG1CQUFBOztVQUNBLElBQStDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFiLElBQXFCLEdBQUcsQ0FBQyxVQUFVLENBQUMsU0FBZixHQUEyQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQTNHO1lBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFaLEdBQW1CLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBbEM7O1VBQ0EsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFLLENBQUEsR0FBRyxDQUFDLE9BQUosQ0FBQSxDQUFBLENBQWpCLEdBQWtDO1VBQ2xDLE1BQU0sQ0FBQyxlQUFQLENBQXVCLENBQUMsR0FBRCxDQUF2QjtpQkFDQSxNQUFNLENBQUMsTUFBUCxDQUFjLFFBQUEsQ0FBQSxDQUFBO21CQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQWpCLENBQXNCLEdBQXRCO1VBRFksQ0FBZDtRQVBZO1FBVWQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFmLElBQXdCO1FBQ3hCLElBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFmLEdBQXVCLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBOUM7aUJBQ0UsTUFBTSxDQUFDLFNBQVMsQ0FBQyxzQkFBakIsQ0FBd0MsV0FBeEM7SUFBcUQsTUFBckQ7SUFBZ0UsTUFBaEUsRUFERjs7TUFoQ29CO01BbUN0QixNQUFNLENBQUMsVUFBUCxHQUFvQixRQUFBLENBQUMsSUFBRCxDQUFBO0FBQ2xCLGVBQU8sSUFBSSxPQUFKLENBQVksUUFBQSxDQUFDLE9BQUQ7SUFBVSxNQUFWLENBQUE7QUFDakIsY0FBQTtVQUFBLFVBQUEsR0FBYSxJQUFJLFVBQUosQ0FBQTtVQUNiLFVBQVUsQ0FBQyxNQUFYLEdBQW9CLFFBQUEsQ0FBQyxLQUFELENBQUE7QUFDbEIsZ0JBQUE7WUFBQSxNQUFBLEdBQVMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQXpCLENBQThCLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBM0M7bUJBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFaLENBQWdCLE1BQWhCO0lBQXdCLFFBQUEsQ0FBQyxHQUFEO0lBQU0sS0FBTixDQUFBO2NBQ3RCLElBQUcsR0FBSDt1QkFDRSxNQUFBLENBQU8sdUJBQVA7SUFBZ0MsR0FBaEMsRUFERjtlQUFBLE1BQUE7Z0JBR0UsT0FBQSxDQUFRLEtBQVI7dUJBQ0EsT0FBTyxDQUFDLEdBQVIsQ0FBWSxPQUFaO0lBQXFCLEdBQXJCO0lBQTBCLEtBQTFCLEVBSkY7O1lBRHNCLENBQXhCO1VBRmtCO2lCQVFwQixVQUFVLENBQUMsaUJBQVgsQ0FBNkIsSUFBN0I7UUFWaUIsQ0FBWjtNQURXO01BYXBCLE1BQU0sQ0FBQyxVQUFQLEdBQW9CLFFBQUEsQ0FBQyxJQUFELENBQUE7QUFDbEIsWUFBQTtRQUFBLElBQVUsSUFBSSxDQUFDLE9BQUwsQ0FBYSxHQUFiLENBQUEsS0FBcUIsQ0FBQyxDQUF0QixJQUEyQixJQUFJLENBQUMsT0FBTCxDQUFhLEdBQWIsQ0FBQSxLQUFxQixDQUFDLENBQTNEO0FBQUEsaUJBQUE7O1FBQ0EsSUFBQSxHQUFPLElBQUksQ0FBQyxJQUFMLENBQUE7UUFDUCxNQUFNLENBQUMsWUFBUCxHQUFzQjtRQUN0QixJQUFBLEdBQU8sQ0FBQyxJQUFEO2VBQ1AsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBcEIsQ0FBQSxDQUNBLENBQUMsSUFERCxDQUNNLFFBQUEsQ0FBQyxHQUFELENBQUE7VUFDSixNQUFNLENBQUMsVUFBUCxHQUFvQjtVQUNwQixNQUFNLENBQUMsb0JBQVAsR0FBOEIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBcEIsQ0FBNkIsTUFBTSxDQUFDLFVBQXBDO1VBQzlCLElBQUksQ0FBQyxLQUFMLEdBQWEsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBcEIsQ0FBMEIsTUFBTSxDQUFDLFVBQWpDO2lCQUNiLE1BQU0sQ0FBQyxZQUFQLENBQW9CLE1BQU0sQ0FBQyxvQkFBM0I7SUFBaUQsSUFBakQ7UUFKSSxDQUROLENBTUEsQ0FBQyxJQU5ELENBTU0sUUFBQSxDQUFDLEdBQUQsQ0FBQTtVQUNKLE1BQU0sQ0FBQyxZQUFQLEdBQXNCO2lCQUN0QixNQUFNLENBQUMsYUFBUCxDQUFxQixNQUFyQjtJQUNFO1lBQUEsSUFBQSxFQUFNLFFBQU47WUFDQSxNQUFBLEVBQVEsQ0FEUjtZQUVBLElBQUEsRUFBTSxtREFGTjtZQUdBLFNBQUEsRUFDRTtjQUFBLEtBQUEsRUFBTyxNQUFNLENBQUMsaUJBQWQ7Y0FDQSxJQUFBLEVBQU07WUFETjtVQUpGLENBREY7UUFGSSxDQU5OLENBZUEsQ0FBQyxLQWZELENBZU8sUUFBQSxDQUFDLENBQUQsQ0FBQTtVQUNMLE9BQU8sQ0FBQyxLQUFSLENBQWMsd0JBQWQ7SUFBd0MsQ0FBeEM7aUJBQ0EsTUFBTSxDQUFDLFlBQVAsR0FBc0I7UUFGakIsQ0FmUDtNQUxrQjtNQXdCcEIsTUFBTSxDQUFDLFdBQVAsR0FBcUIsUUFBQSxDQUFBLENBQUE7ZUFDbkIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBcEIsQ0FBQSxDQUE4QixDQUFDLElBQS9CLENBQW9DLFFBQUEsQ0FBQyxHQUFELENBQUE7aUJBQ2xDLE1BQU0sQ0FBQyxNQUFQLENBQWMsUUFBQSxDQUFBLENBQUE7WUFDWixNQUFNLENBQUMsVUFBUCxHQUFvQjttQkFDcEIsTUFBTSxDQUFDLG9CQUFQLEdBQThCLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQXBCLENBQTZCLE1BQU0sQ0FBQyxVQUFwQztVQUZsQixDQUFkO1FBRGtDLENBQXBDO01BRG1CO01BTXJCLE1BQU0sQ0FBQyxRQUFQLEdBQWtCLFFBQUEsQ0FBQyxRQUFEO0lBQVcsSUFBWDtJQUFpQixJQUFqQjtJQUF1QixVQUFVLE9BQWpDO0lBQTBDLElBQTFDLENBQUE7QUFDaEIsWUFBQTtRQUFBLGFBQUEsR0FBZ0IsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsR0FBdkI7UUFDaEIsYUFBYSxDQUFDLElBQWQsR0FBcUIsSUFBQSxJQUFRLENBQUEsS0FBQSxDQUFBLENBQVEsSUFBUixDQUFhLFNBQWIsQ0FBQSxDQUF3QixPQUF4QixDQUFnQyxDQUFoQyxDQUFBLENBQW1DLFNBQUEsQ0FBVSxJQUFWLENBQW5DLENBQUE7UUFDN0IsYUFBYSxDQUFDLE1BQWQsR0FBdUI7UUFDdkIsYUFBYSxDQUFDLFFBQWQsR0FBeUI7ZUFDekIsYUFBYSxDQUFDLEtBQWQsQ0FBQTtNQUxnQjtNQU9sQixNQUFNLENBQUMsWUFBUCxHQUFzQixRQUFBLENBQUMsSUFBRCxDQUFBO2VBQ3BCLE1BQU0sQ0FBQyxRQUFQLENBQWdCLHNCQUFoQjtJQUF3QyxJQUF4QztJQUE4QyxVQUE5QztJQUEwRCxPQUExRDtNQURvQjtNQUd0QixNQUFNLENBQUMsZUFBUCxHQUF5QixRQUFBLENBQUEsQ0FBQTtlQUN2QixNQUFNLENBQUMsU0FBUCxDQUFpQixhQUFqQjtJQUFnQztVQUFDLFdBQUEsRUFBYTtRQUFkLENBQWhDO01BRHVCO01BR3pCLE1BQU0sQ0FBQyxNQUFQLEdBQWdCLFFBQUEsQ0FBQSxDQUFBO1FBQ2QsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFqQixDQUEyQixLQUEzQjtRQUNBLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBZixHQUE2QjtRQUM3QixNQUFNLENBQUMsb0JBQVAsR0FBOEI7UUFDOUIsTUFBTSxDQUFDLGNBQVAsR0FBd0IsQ0FBQTtRQUN4QixtQkFBbUIsQ0FBQyxRQUFwQixDQUFBO1FBQ0EsTUFBTSxDQUFDLEVBQVAsQ0FBVSxpQkFBVjtRQUNBLE1BQU0sQ0FBQyxVQUFQLEdBQW9CO1FBQ3BCLE1BQU0sQ0FBQyxTQUFQLEdBQW1CO1FBQ25CLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBbkIsQ0FBQTtRQUNBLE1BQU0sQ0FBQyxnQkFBUCxDQUFBO2VBQ0EsTUFBTSxDQUFDLGFBQVAsR0FBdUIsQ0FBQTtNQVhUO01BYWhCLE1BQU0sQ0FBQyxTQUFQLEdBQW1CLFFBQUEsQ0FBQyxHQUFEO0lBQU0sS0FBTjtJQUFhLEtBQWIsQ0FBQTtBQUNqQixZQUFBLElBQUE7SUFBQSxhQUFBO0lBQUE7UUFBQSxJQUFBLEdBQU8sR0FBRyxDQUFDO1FBQ1gsSUFBZ0IsR0FBRyxDQUFDLFVBQVUsQ0FBQyxPQUEvQjtBQUFBLGlCQUFPLE1BQVA7O1FBQ0EsSUFBRyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQWxCO1VBQ0UsSUFBRyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFwQixDQUEwQixTQUExQixDQUFIO1lBQ0UsSUFBRyxJQUFJLENBQUMsSUFBTCxLQUFhLFFBQWhCO0FBQ0UscUJBQU8sTUFEVDs7WUFFQSxhQUFBLEdBQWdCLENBQUMsSUFBSSxDQUFDLFNBQUwsR0FBaUIsSUFBSSxDQUFDLFNBQXZCLENBQUEsR0FBb0M7WUFDcEQsSUFBRyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQWYsS0FBdUIsaUJBQXZCLElBQTZDLElBQUksQ0FBQyxNQUFMLElBQWUsYUFBL0Q7QUFDRSxxQkFBTyxNQURUO2FBQUEsTUFFSyxJQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBZixLQUF1QixpQkFBdkIsSUFBNkMsSUFBSSxDQUFDLE1BQUwsSUFBZSxhQUEvRDtBQUNILHFCQUFPLE1BREo7YUFBQSxNQUVBLElBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFmLEtBQXVCLGdCQUF2QixJQUE0QyxJQUFJLENBQUMsTUFBTCxLQUFlLGFBQTlEO0FBQ0gscUJBQU8sTUFESjthQVJQO1dBQUEsTUFVSyxJQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBZixLQUF1QixjQUExQjtBQUNILDBCQUFPLElBQUksQ0FBQyxLQUFMLEtBQWMsY0FBZCxJQUFBLEdBQUEsS0FBOEIsaUJBRGxDO1dBQUEsTUFFQSxJQUFHLElBQUksQ0FBQyxJQUFMLEtBQWEsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUEvQjtBQUNILG1CQUFPLE1BREo7V0FiUDs7UUFlQSxJQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBZixHQUE2QixDQUFDLENBQWpDO1VBQ0UsSUFBRyxPQUFPLEdBQUcsQ0FBQyxtQkFBWCxLQUFrQyxRQUFyQztBQUNFLG1CQUFPLE1BRFQ7O1VBRUEsSUFBRyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQWYsR0FBNkIsQ0FBN0IsSUFBbUMsR0FBRyxDQUFDLG1CQUFKLEdBQTBCLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBL0U7QUFDRSxtQkFBTyxNQURUOztVQUVBLElBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFmLEtBQThCLENBQTlCLElBQW9DLEdBQUcsQ0FBQyxtQkFBSixLQUEyQixFQUFsRTtBQUNFLG1CQUFPLE1BRFQ7V0FMRjs7QUFPQSxlQUFPO01BekJVO01BMkJuQixNQUFNLENBQUMsV0FBUCxHQUFxQixRQUFBLENBQUMsS0FBRCxDQUFBO2VBQ25CLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBcEIsQ0FBQTtNQURtQjtNQUdyQixNQUFNLENBQUMsYUFBUCxHQUF1QixRQUFBLENBQUMsR0FBRCxDQUFBO0FBQ3JCLFlBQUE7UUFBQSxXQUFBLEdBQ0U7VUFBQSxJQUFBLEVBQU0sR0FBRyxDQUFDLElBQVY7VUFDQSxJQUFBLEVBQU0sR0FBRyxDQUFDLFVBRFY7VUFFQSxRQUFBLEVBQVUsR0FBRyxDQUFDLFFBRmQ7VUFHQSxHQUFBLEVBQUssR0FBRyxDQUFDO1FBSFQ7ZUFJRixHQUFHLENBQUMsT0FBSixHQUFjLElBQUksQ0FBQyxTQUFMLENBQWUsV0FBZjtJQUE0QixNQUE1QjtJQUF1QyxDQUF2QztNQU5PO01BUXZCLE1BQU0sQ0FBQyxZQUFQLEdBQXNCLFFBQUEsQ0FBQyxHQUFEO0lBQU0sT0FBTixDQUFBO1FBQ3BCLE1BQU0sQ0FBQyxhQUFQLENBQXFCLElBQXJCO0lBQTJCO1VBQUUsSUFBQSxFQUFNLE1BQVI7VUFBZ0IsU0FBQSxFQUFXLEdBQUcsQ0FBQyxPQUFKLENBQUEsQ0FBM0I7VUFBMEM7UUFBMUMsQ0FBM0IsQ0FBK0UsQ0FBQyxJQUFoRixDQUFxRixRQUFBLENBQUMsQ0FBRCxDQUFBO1VBQ25GLEdBQUcsQ0FBQyxNQUFKLEdBQWEsR0FBRyxDQUFDLE1BQUosSUFBYyxDQUFBO1VBQzNCLEdBQUcsQ0FBQyxNQUFPLENBQUEsQ0FBQyxDQUFDLE9BQUYsQ0FBQSxDQUFBLENBQVgsR0FBMEI7VUFDMUIsR0FBRyxDQUFDLFNBQUosR0FBZ0IsR0FBRyxDQUFDLFNBQUosSUFBaUI7aUJBQ2pDLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBZCxDQUFtQixDQUFuQjtRQUptRixDQUFyRjtlQUtBLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBbEIsQ0FBQTtNQU5vQjtNQVF0QixNQUFNLENBQUMsUUFBUCxHQUNFO1FBQUEsSUFBQSxFQUFNLFFBQUEsQ0FBQyxHQUFELENBQUE7VUFDSixJQUFHLEdBQUcsQ0FBQyxLQUFQO1lBQ0UsR0FBRyxDQUFDLEtBQUosR0FBWTtZQUNaLEdBQUcsQ0FBQyxLQUFKLEdBQWUsR0FBRyxDQUFDLEtBQVAsR0FBa0IsR0FBRyxDQUFDLEtBQUosR0FBWSxDQUE5QixHQUFxQzttQkFDakQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxXQUFqQixDQUE2QixHQUE3QjtJQUFrQyxJQUFsQyxFQUhGO1dBQUEsTUFBQTtZQUtFLEdBQUcsQ0FBQyxLQUFKLEdBQVk7WUFDWixHQUFHLENBQUMsS0FBSixHQUFlLEdBQUcsQ0FBQyxLQUFQLEdBQWtCLEdBQUcsQ0FBQyxLQUFKLEdBQVksQ0FBOUIsR0FBcUM7bUJBQ2pELE1BQU0sQ0FBQyxTQUFTLENBQUMsV0FBakIsQ0FBNkIsR0FBN0I7SUFBa0MsTUFBbEMsRUFQRjs7UUFESSxDQUFOO1FBU0EsS0FBQSxFQUFPLFFBQUEsQ0FBQyxHQUFELENBQUE7VUFDTCxNQUFNLENBQUMsT0FBUCxHQUFpQjtpQkFDakIsTUFBTSxDQUFDLFNBQVAsQ0FBaUIsWUFBakI7SUFBK0I7WUFBRSxXQUFBLEVBQWEsK0JBQWY7WUFBZ0QsSUFBQSxFQUFNO1VBQXRELENBQS9CO1FBRkssQ0FUUDtRQVlBLE9BQUEsRUFBUyxRQUFBLENBQUMsR0FBRDtJQUFNLEtBQU4sQ0FBQTtpQkFDUCxNQUFNLENBQUMsYUFBUCxDQUFxQixJQUFyQjtJQUEyQjtZQUN6QixJQUFBLEVBQU0sTUFEbUI7WUFFekIsT0FBQSxFQUFTLEdBQUcsQ0FBQyxPQUFKLENBQUEsQ0FGZ0I7WUFHekIsT0FBQSxFQUFTO1VBSGdCLENBQTNCLENBSUUsQ0FBQyxJQUpILENBSVEsUUFBQSxDQUFDLENBQUQsQ0FBQTtZQUNOLEdBQUcsQ0FBQyxPQUFKLEdBQWMsR0FBRyxDQUFDLE9BQUosSUFBZSxDQUFBO1lBQzdCLEdBQUcsQ0FBQyxPQUFRLENBQUEsQ0FBQyxDQUFDLE9BQUYsQ0FBQSxDQUFBLENBQVosR0FBMkI7WUFDM0IsR0FBRyxDQUFDLFVBQUosR0FBaUIsR0FBRyxDQUFDLFVBQUosSUFBa0I7bUJBQ25DLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBZixDQUFvQixDQUFwQjtVQUpNLENBSlI7UUFETztNQVpUO01BdUJGLE1BQU0sQ0FBQyxXQUFQLEdBQXFCLFFBQUEsQ0FBQyxLQUFEO0lBQVEsT0FBUjtJQUFpQixJQUFqQixDQUFBO0FBQ25CLFlBQUE7UUFBQSxJQUEyQixLQUEzQjtVQUFBLEtBQUssQ0FBQyxlQUFOLENBQUEsRUFBQTs7UUFDQSxDQUFBLEdBQUksS0FBSyxDQUFDO1FBQ1YsSUFBVSxPQUFPLENBQUMsT0FBUixDQUFnQixDQUFoQixDQUFrQixDQUFDLE9BQW5CLENBQTJCLEdBQTNCLENBQStCLENBQUMsTUFBMUM7QUFBQSxpQkFBQTs7UUFDQSxNQUFNLENBQUMsYUFBUCxDQUFxQixPQUFyQjtRQUNBLE1BQU0sQ0FBQyxPQUFQLEdBQWlCLFFBSmpCOztRQU1BLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBZixHQUEyQixNQUFNLENBQUMsT0FBTyxDQUFDLFlBQWYsQ0FBNEIsTUFBTSxDQUFDLFNBQW5DO1FBQzNCLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUE3QixDQUFpQyxPQUFqQyxDQUF5QyxDQUFDLElBQTFDLENBQStDLFFBQUEsQ0FBQyxDQUFELENBQUE7QUFDN0MsY0FBQTtVQUFBLEdBQUEsR0FBTSxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyx5QkFBekIsQ0FBbUQsQ0FBbkQ7VUFDTixJQUFHLEdBQUcsQ0FBQyxJQUFQO21CQUNFLE1BQU0sQ0FBQyxNQUFQLENBQWMsUUFBQSxDQUFBLENBQUE7cUJBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxjQUFmLEdBQWdDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQXRELENBQWQsRUFERjtXQUFBLE1BRUssSUFBRyxHQUFHLENBQUMsUUFBUDttQkFDSCxNQUFNLENBQUMsTUFBUCxDQUFjLFFBQUEsQ0FBQSxDQUFBO3FCQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsY0FBZixHQUFnQyxHQUFHLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztZQUExRCxDQUFkLEVBREc7O1FBSndDLENBQS9DO1FBTUEsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFmLEdBQTZCLE1BQU0sQ0FBQyxPQUFPLENBQUMsY0FBZixDQUFBO1FBQzdCLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBZixHQUE0QixNQUFNLENBQUMsU0FBUyxDQUFDLEdBQWpCLENBQXFCLE9BQXJCO0lBQThCLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBN0M7UUFDNUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxjQUFmLEdBQWdDLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFwQixDQUE4QixPQUE5QjtJQUF1QyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQXREO2VBQ2hDLE1BQU0sQ0FBQyxTQUFQLENBQWlCLFdBQWpCO0lBQThCO1VBQUMsV0FBQSxFQUFhO1FBQWQsQ0FBOUI7TUFqQm1CO01BbUJyQixJQUFBLENBQU8sTUFBTSxDQUFDLE9BQWQ7UUFDRSxNQUFNLENBQUMsT0FBUCxHQUFpQixNQUFNLENBQUMsTUFBUCxDQUFjLENBQUEsQ0FBZDtJQUFrQixNQUFNLENBQUMsY0FBekIsRUFEbkI7O01BR0EsTUFBTSxDQUFDLFdBQVAsR0FBcUIsTUFwbEJyQjs7TUF1bEJBLE1BQU0sQ0FBQyxxQkFBUCxHQUErQixRQUFBLENBQUEsQ0FBQTtlQUM3QixNQUFNLENBQUMsV0FBUCxHQUFxQixDQUFDLE1BQU0sQ0FBQztNQURBO01BRy9CLE1BQU0sQ0FBQyxlQUFQLEdBQXlCLFFBQUEsQ0FBQyxRQUFEO0lBQVcsYUFBYSxDQUFBLENBQXhCO0lBQTRCLFVBQVUsQ0FBQSxDQUF0QyxDQUFBO1FBQ3ZCLE9BQU8sQ0FBQyxPQUFSLENBQWdCLFFBQWhCO0lBQTBCLFFBQUEsQ0FBQyxHQUFEO0lBQU0sR0FBTixDQUFBO0FBQ3hCLGNBQUEsQ0FBQTtJQUFBO1VBQVcsS0FBQSxlQUFBOztZQUFYLEdBQUksQ0FBQSxDQUFBLENBQUosR0FBUztVQUFFO1VBQ1gsR0FBRyxDQUFDLE1BQUosR0FBYSxHQUFHLENBQUMsU0FBSixDQUFjLE1BQU0sQ0FBQyxTQUFyQjtpQkFDYixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFmLENBQW1CLGVBQW5CLENBQW1DLENBQUMsRUFBcEMsQ0FBdUMsUUFBQSxDQUFDLENBQUQsQ0FBQTttQkFBTyxHQUFHLENBQUMsbUJBQUosR0FBMEI7VUFBakMsQ0FBdkM7UUFId0IsQ0FBMUI7QUFJQSxlQUFPO01BTGdCO01BT3pCLFFBQUEsR0FBVyxRQUFBLENBQUMsRUFBRCxDQUFBO0FBQ1QsWUFBQTtRQUFBLElBQUcsQ0FBQyxFQUFKO0FBQ0UsaUJBREY7O1FBRUEsR0FBQSxHQUFNLEVBQUUsQ0FBQyxxQkFBSCxDQUFBO1FBQ04sSUFBRyxHQUFHLENBQUMsR0FBUDtVQUNFLElBQUcsR0FBRyxDQUFDLEdBQUosR0FBVSxFQUFWLEdBQWUsT0FBTyxDQUFDLFdBQTFCO1lBQ0UsT0FBTyxDQUFDLFFBQVIsQ0FBaUIsQ0FBakI7SUFBb0IsR0FBRyxDQUFDLEdBQUosR0FBVSxFQUE5QixFQURGO1dBQUEsTUFFSyxJQUFHLEdBQUcsQ0FBQyxNQUFKLEdBQWEsT0FBTyxDQUFDLFdBQVIsR0FBc0IsQ0FBQyxPQUFPLENBQUMsV0FBUixJQUF1QixRQUFRLENBQUMsZUFBZSxDQUFDLFlBQWpELENBQXRDO1lBQ0gsT0FBTyxDQUFDLFFBQVIsQ0FBaUIsQ0FBakI7SUFBb0IsR0FBRyxDQUFDLE1BQUosR0FBYSxDQUFDLE9BQU8sQ0FBQyxXQUFSLElBQXVCLFFBQVEsQ0FBQyxlQUFlLENBQUMsWUFBakQsQ0FBYixHQUE4RSxFQUFsRyxFQURHO1dBSFA7O01BSlMsRUFqbUJYOztNQTZtQkEsTUFBTSxDQUFDLGdCQUFQLEdBQTBCLFFBQUEsQ0FBQyxDQUFEO0lBQUksUUFBSjtJQUFjLFFBQWQsQ0FBQTtRQUN4QixDQUFDLENBQUMsWUFBRixHQUFpQjtBQUNqQixlQUFPLElBQUksT0FBSixDQUFZLFFBQUEsQ0FBQyxPQUFELENBQUE7aUJBQ2pCLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBTixDQUFVLE9BQVYsQ0FBa0IsQ0FBQyxJQUFuQixDQUF3QixRQUFBLENBQUMsS0FBRCxDQUFBO21CQUN0QixNQUFNLENBQUMsTUFBUCxDQUFjLFFBQUEsQ0FBQSxDQUFBO0FBQ1osa0JBQUEsQ0FBQTtJQUFBLEdBQUE7SUFBQTtjQUFBLEdBQUEsR0FBTSxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyx5QkFBekIsQ0FBbUQsS0FBbkQ7Y0FDTixJQUFHLEdBQUcsQ0FBQyxJQUFQO2dCQUNFLENBQUMsQ0FBQyxXQUFGLEdBQWdCLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUNuQyxDQUFDLENBQUMsYUFBRixHQUFrQjtnQkFDbEIsSUFBeUIsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFsQztrQkFBQSxDQUFDLENBQUMsWUFBRixHQUFpQixLQUFqQjtpQkFIRjtlQUFBLE1BSUssSUFBRyxHQUFHLENBQUMsUUFBUDtnQkFDSCxDQUFDLENBQUMsV0FBRixHQUFnQixHQUFHLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztnQkFDdkMsQ0FBQyxDQUFDLGFBQUYsR0FBa0IsS0FGZjtlQUFBLE1BQUE7Z0JBSUgsQ0FBQSxHQUFJLE1BQU0sQ0FBQyxNQUFQLENBQWMsS0FBZCxDQUFxQixDQUFBLENBQUE7Z0JBQ3pCLENBQUMsQ0FBQyxXQUFGLEdBQWdCLENBQUMsQ0FBQztnQkFDbEIsV0FBb0QsQ0FBQyxDQUFDLEtBQUYsS0FBVyxPQUFYLElBQUEsR0FBQSxLQUFvQixNQUF4RTtrQkFBQSxDQUFDLENBQUMsV0FBRixHQUFnQixDQUFDLENBQUMsV0FBVyxDQUFDLEtBQWQsQ0FBb0IsQ0FBcEI7SUFBc0IsQ0FBdEIsQ0FBQSxHQUEyQixNQUEzQztpQkFORzs7Y0FPTCxJQUFHLENBQUMsQ0FBQyxXQUFMO2dCQUNFLElBQUcsR0FBRyxDQUFDLFFBQUosSUFBaUIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBdkIsS0FBZ0MsQ0FBQyxDQUFDLFdBQXREO2tCQUNFLENBQUMsQ0FBQyxRQUFGLEdBQWEsR0FBRyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7a0JBQ3BDLElBQWdELFFBQWhEO29CQUFBLENBQUMsQ0FBQyxRQUFGLEdBQWEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFYLENBQW1CLEdBQW5CO0lBQXdCLE1BQXhCLEVBQWI7bUJBRkY7O2dCQUdBLElBQXNELFFBQXREO2tCQUFBLENBQUMsQ0FBQyxXQUFGLEdBQWdCLENBQUMsQ0FBQyxXQUFXLENBQUMsT0FBZCxDQUFzQixHQUF0QjtJQUEyQixNQUEzQixFQUFoQjtpQkFKRjs7Y0FLQSxJQUFxQyxRQUFyQztnQkFBQSxNQUFNLENBQUMsWUFBUCxDQUFvQixDQUFDLENBQUMsV0FBdEIsRUFBQTs7cUJBQ0EsT0FBQSxDQUFRLENBQUMsQ0FBQyxXQUFWO1lBbkJZLENBQWQ7VUFEc0IsQ0FBeEI7UUFEaUIsQ0FBWjtNQUZpQjtNQXlCMUIsTUFBTSxDQUFDLGFBQVAsR0FBdUIsUUFBQSxDQUFDLEtBQUQsQ0FBQTtBQUNyQixZQUFBLEVBQUE7SUFBQSxFQUFBO0lBQUE7QUFBQSxnQkFBTyxDQUFJLEtBQUgsR0FBYyxLQUFLLENBQUMsS0FBcEIsR0FBK0IsQ0FBQyxDQUFqQyxDQUFQO0FBQUEsZUFDTyxFQURQO1lBRUksS0FBSyxDQUFDLGNBQU4sQ0FBQTtZQUNBLElBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFYLEdBQXVCLENBQUMsQ0FBM0I7Y0FDRSxNQUFNLENBQUMsY0FBUCxHQUF3QjtjQUN4QixNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVg7Y0FDQSxFQUFBLEdBQVEsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFYLEdBQXVCLENBQUMsQ0FBM0IsR0FBa0MsUUFBQSxHQUFXLE1BQU0sQ0FBQyxHQUFHLENBQUMsU0FBeEQsR0FBdUU7cUJBQzVFLFFBQVEsQ0FBQyxjQUFULENBQXdCLEVBQXhCLENBQTJCLENBQUMsY0FBNUIsQ0FBQSxFQUpGOztBQUZHO0FBRFAsZUFRTyxFQVJQO1lBU0ksS0FBSyxDQUFDLGNBQU4sQ0FBQTtZQUNBLElBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVgsR0FBd0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBakIsR0FBMkIsQ0FBbkQsQ0FBQSxJQUEwRCxNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVgsR0FBdUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFuRztjQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsU0FBWCxHQURGOzttQkFFQSxRQUFRLENBQUMsY0FBVCxDQUF3QixRQUFBLEdBQVcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUE5QyxDQUF3RCxDQUFDLGNBQXpELENBQUE7QUFaSixlQWFPLEVBYlA7WUFjSSxLQUFLLENBQUMsY0FBTixDQUFBO1lBQ0EsSUFBRyxNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVgsS0FBd0IsQ0FBQyxDQUE1QjtxQkFDRSxNQUFNLENBQUMsRUFBUCxDQUFVLG1CQUFWLEVBREY7YUFBQSxNQUFBO3FCQUdFLFFBQVEsQ0FBQyxjQUFULENBQXdCLFFBQUEsR0FBVyxNQUFNLENBQUMsR0FBRyxDQUFDLFNBQTlDLENBQXdELENBQUMsS0FBekQsQ0FBQSxFQUhGOztBQUZHO0FBYlAsZUFtQk8sQ0FBQyxDQW5CUjtZQW9CSSxZQUFBLENBQWEsTUFBTSxDQUFDLEtBQXBCO1lBQ0EsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFiLEdBQW9CO21CQUNwQixNQUFNLENBQUMsTUFBUCxDQUFBO0FBdEJKLGVBdUJPLEVBdkJQO0FBQUEsZUF1QlcsRUF2Qlg7QUFBQSxlQXVCZSxFQXZCZjtBQUFBLGVBdUJtQixFQXZCbkI7QUFBQSxlQXVCdUIsRUF2QnZCO0FBQUEsZUF1QjJCLEVBdkIzQjtBQXVCMkI7QUF2QjNCO1lBeUJJLEVBQUEsR0FBSyxPQUFPLENBQUMsT0FBUixDQUFnQixLQUFLLENBQUMsYUFBdEI7WUFDTCxZQUFBLENBQWEsTUFBTSxDQUFDLEtBQXBCO1lBQ0EsSUFBQSxHQUFPLFVBQUEsQ0FBVyxDQUFDLFFBQUEsQ0FBQSxDQUFBO2NBQ2pCLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBYixHQUFvQixFQUFFLENBQUMsR0FBSCxDQUFBO2NBQ3BCLE1BQU0sQ0FBQyxNQUFQLENBQUE7WUFGaUIsQ0FBRCxDQUFYO0lBSUosR0FKSTtZQUtQLE1BQU0sQ0FBQyxLQUFQLEdBQWU7QUFDZjtBQWpDSjtNQURxQjtNQW9DdkIsTUFBTSxDQUFDLG9CQUFQLEdBQThCLFFBQUEsQ0FBQyxJQUFELENBQUE7UUFDNUIsTUFBTSxDQUFDLEVBQVAsQ0FBVSxpQkFBVjtJQUE2QjtVQUFFLElBQUEsRUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQXBCO1VBQTBCLEtBQUEsRUFBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQTdDLENBQTdCO2VBQ0EsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFiLEdBQW9CO01BRlE7TUFJOUIsTUFBTSxDQUFDLFVBQVAsR0FBb0IsUUFBQSxDQUFDLEdBQUQsQ0FBQTtlQUNsQixNQUFNLENBQUMsR0FBRyxDQUFDLEdBQVgsQ0FBZTtVQUFDLEtBQUEsRUFBTyxDQUFDLEdBQUQ7UUFBUixDQUFmO01BRGtCO01BR3BCLE1BQU0sQ0FBQyxhQUFQLEdBQXVCLFFBQUEsQ0FBQyxHQUFELENBQUE7QUFDckIsWUFBQTtRQUFBLElBQUEsR0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBTSxDQUFBLEdBQUE7UUFDOUIsSUFBSSxDQUFDLEdBQUwsR0FBVyxJQUFJLENBQUMsRUFBTCxHQUFVLEtBRHJCO1FBRUEsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFWLENBQUEsRUFGQTtlQUdBLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQU0sQ0FBQSxHQUFBO01BSlQ7TUFNdkIsTUFBTSxDQUFDLFdBQVAsR0FBcUIsUUFBQSxDQUFDLEdBQUQsQ0FBQTtRQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUF0QixDQUEwQixHQUExQjtlQUNBLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQWxCLENBQTBCLEdBQTFCLENBQThCLENBQUMsSUFBL0IsQ0FBb0MsUUFBQSxDQUFBLENBQUE7aUJBQ2xDLE1BQU0sQ0FBQyxlQUFQLENBQUE7UUFEa0MsQ0FBcEM7TUFGbUI7TUFLckIsTUFBTSxDQUFDLG1CQUFQLEdBQTZCLFFBQUEsQ0FBQSxDQUFBO2VBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQXRCLENBQTBCLEVBQTFCO0lBQThCO1VBQUMsT0FBQSxFQUFTO1FBQVYsQ0FBOUIsQ0FBOEMsQ0FBQyxJQUEvQyxDQUFvRCxRQUFBLENBQUEsQ0FBQSxFQUFBO2lCQUNsRCxNQUFNLENBQUMsZUFBUCxDQUFBO1FBRGtELENBQXBEO01BRDJCO01BSTdCLE1BQU0sQ0FBQyxjQUFQLEdBQXdCLFFBQUEsQ0FBQyxHQUFELENBQUE7UUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBdEIsQ0FBeUIsR0FBekI7ZUFDQSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFsQixDQUE2QixHQUE3QixDQUFpQyxDQUFDLElBQWxDLENBQXVDLFFBQUEsQ0FBQSxDQUFBO2lCQUNyQyxNQUFNLENBQUMsZUFBUCxDQUFBO1FBRHFDLENBQXZDO01BRnNCO01BS3hCLE1BQU0sQ0FBQyxvQkFBUCxHQUE4QixNQUFNLENBQUMsWUFBUCxJQUF3QixZQUFZLENBQUMsVUFBYixLQUEyQjthQUVqRixNQUFNLENBQUMsd0JBQVAsR0FBa0MsUUFBQSxDQUFBLENBQUE7UUFDaEMsSUFBRyxNQUFNLENBQUMsWUFBVjtpQkFDRSxZQUFZLENBQUMsaUJBQWIsQ0FBK0IsUUFBQSxDQUFDLE1BQUQsQ0FBQTttQkFDN0IsTUFBTSxDQUFDLE1BQVAsQ0FBYyxRQUFBLENBQUEsQ0FBQTtxQkFDWixNQUFNLENBQUMsb0JBQVAsR0FBOEIsTUFBQSxLQUFVO1lBRDVCLENBQWQ7VUFENkIsQ0FBL0IsRUFERjs7TUFEZ0M7SUExc0JwQyxDQWhCeUQ7R0FBM0Q7QUFEQSIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuYW5ndWxhci5tb2R1bGUoJ2lyaXNBbmd1bGFyJykuY29udHJvbGxlciAnTWFpbkNvbnRyb2xsZXInLCBbXG4gICckc2NvcGUnXG4gICckcm9vdFNjb3BlJ1xuICAnJGxvY2F0aW9uJ1xuICAnJGh0dHAnXG4gICckc3RhdGUnXG4gICdjb25maWcnLFxuICAnbG9jYWxTdG9yYWdlU2VydmljZSdcbiAgJ2NsaXBib2FyZCdcbiAgJyR1aWJNb2RhbCdcbiAgJyR3aW5kb3cnXG4gICckc3RhdGVQYXJhbXMnXG4gICckdHJhbnNpdGlvbnMnXG4gICckcSdcbiAgJ2ZvY3VzJ1xuICAnTm90aWZpY2F0aW9uU2VydmljZSdcbiAgKCRzY29wZSwgJHJvb3RTY29wZSwgJGxvY2F0aW9uLCAkaHR0cCwgJHN0YXRlLCBjb25maWcsXG4gIGxvY2FsU3RvcmFnZVNlcnZpY2UsIGNsaXBib2FyZCwgJHVpYk1vZGFsLCAkd2luZG93LCAkc3RhdGVQYXJhbXMsXG4gICR0cmFuc2l0aW9ucywgJHEsIGZvY3VzLCBOb3RpZmljYXRpb25TZXJ2aWNlKSAtPlxuICAgIG9wdCA9XG4gICAgICBwZWVyczogW11cbiAgICAgIGxvY2FsU3RvcmFnZTogZmFsc2VcbiAgICB1bmxlc3MgJHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSA9PSAnbG9jYWxob3N0JyBhbmQgJHdpbmRvdy5sb2NhdGlvbi5wb3J0ID09ICczMDAwJ1xuICAgICAgb3B0LnBlZXJzID0gWydodHRwczovL2d1bi11cy5oZXJva3VhcHAuY29tL2d1bicsICdodHRwczovL2d1bi1ldS5oZXJva3VhcHAuY29tL2d1biddICMgJ2h0dHBzOi8vZ3VubWVldGluZ3NlcnZlci5oZXJva3VhcHAuY29tL2d1bidcbiAgICBpZiAkd2luZG93LmxvY2F0aW9uLnByb3RvY29sICE9IFwiaHR0cHM6XCJcbiAgICAgIG9wdC5wZWVycy5wdXNoKCdodHRwOi8vbG9jYWxob3N0Ojg3NjUvZ3VuJylcbiAgICBvcHQuc3RvcmUgPSBSaW5kZXhlZERCKG9wdClcbiAgICAkc2NvcGUuZ3VuID0gJHdpbmRvdy5pcmlzR3VuID0gbmV3IEd1bihvcHQpXG5cbiAgICAjIFRPRE86IG1vdmUgZXZlcnl0aGluZyB0byBtYWluIGNvbnRyb2xsZXI/XG4gICAgIyBzZXQgYXV0aGVudGljYXRpb25cbiAgICAkc2NvcGUuYXV0aGVudGljYXRpb24gPSB7fSAjIEF1dGhlbnRpY2F0aW9uXG5cbiAgICAkc2NvcGUub3BlblRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuICAgICRzY29wZS5ub3RpZmljYXRpb25TZXJ2aWNlID0gTm90aWZpY2F0aW9uU2VydmljZVxuXG4gICAgJHNjb3BlLnRydXN0RGlzdGFuY2VDb21wYXJhdG9yID0gKGEsIGIpIC0+XG4gICAgICByZXR1cm4gMSBpZiBhLnR5cGUgIT0gJ251bWJlcidcbiAgICAgIHJldHVybiAtMSBpZiBiLnR5cGUgIT0gJ251bWJlcidcbiAgICAgIHJldHVybiBhLnZhbHVlIC0gYi52YWx1ZVxuXG4gICAgJHNjb3BlLmdldElkVXJsID0gKHR5cGUsIHZhbHVlKSAtPlxuICAgICAgaWYgJHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZS5pbmRleE9mKCcuJykgPiAtMSAjIGRpZmZlcmVudGlhdGUgYmV0d2VlbiBsb2NhbGhvc3QgLyBjaHJvbWUgcGx1Z2luIHVyaSBhbmQgRE5TIG5hbWVcbiAgICAgICAgcmV0dXJuICRzdGF0ZS5ocmVmKCdpZGVudGl0aWVzLnNob3cnLCB7dHlwZSwgdmFsdWV9LCB7YWJzb2x1dGU6IHRydWV9KVxuICAgICAgZWxzZVxuICAgICAgICByZXR1cm4gJ2h0dHBzOi8vaXJpcy50by8nICsgJHN0YXRlLmhyZWYoJ2lkZW50aXRpZXMuc2hvdycsIHt0eXBlLCB2YWx1ZX0pXG5cbiAgICAkc2NvcGUuZ2V0SWRLZXkgPSAoaWQpIC0+XG4gICAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGlkLnR5cGUpICsgJzonICsgZW5jb2RlVVJJQ29tcG9uZW50KGlkLnZhbHVlKVxuXG4gICAgJHNjb3BlLmRlZmF1bHRJbmRleEtleUlEID0gJ2I4QnlhWU5CRENNTE5kWnFNZGFzNW9VRkxDeEJmMlZIMy1OalV1bERhVG8uRFZ6SU5FclJWczZtNXR5akF1eDZmY05mbmRhZGNnWlZONWhMU3dZVENMYydcbiAgICAkc2NvcGUucXVlcnkgPSB7fVxuICAgICRzY29wZS5xdWVyeS50ZXJtID0gJydcbiAgICAkc2NvcGUucHJldmlvdXNTZWFyY2hLZXkgPSAnJ1xuICAgICRzY29wZS5pZHMgPVxuICAgICAgbGlzdDogW11cbiAgICAkc2NvcGUubXNncyA9XG4gICAgICBsaXN0OiBbXVxuICAgICAgc2Vlbjoge31cblxuICAgICRzY29wZS5pcGZzID0gbmV3IElwZnMoXG4gICAgICBpbml0OiB0cnVlXG4gICAgICBzdGFydDogdHJ1ZVxuICAgICAgcmVwbzogJ2lwZnM3LWlyaXMnXG4gICAgKVxuXG4gICAgJHNjb3BlLmNhcGl0YWxpemVXb3JkcyA9IChzKSAtPlxuICAgICAgaWYgcyBhbmQgcy5sZW5ndGhcbiAgICAgICAgcmV0dXJuIChzLnRyaW0oKS5zcGxpdCgnICcpLm1hcCAod29yZCkgLT4gd29yZFswXS50b1VwcGVyQ2FzZSgpICsgd29yZFsxLi4tMV0udG9Mb3dlckNhc2UoKSkuam9pbiAnICdcbiAgICAgIGVsc2VcbiAgICAgICAgcmV0dXJuIHNcblxuICAgICRzY29wZS5jb3B5VG9DbGlwYm9hcmQgPSAodGV4dCkgLT5cbiAgICAgIGNsaXBib2FyZC5jb3B5VGV4dCB0ZXh0XG5cbiAgICAkc2NvcGUuc2VhcmNoID0gKHF1ZXJ5LCBsaW1pdCkgLT5cbiAgICAgIHJldHVybiB1bmxlc3MgJHNjb3BlLmlyaXNJbmRleFxuICAgICAgJHNjb3BlLmlkcy5hY3RpdmVLZXkgPSAtMVxuICAgICAgJHNjb3BlLmlkcy5saXN0ID0gW11cbiAgICAgIHNlYXJjaEtleSA9IChxdWVyeSBvciAkc2NvcGUucXVlcnkudGVybSBvciAnJykudG9Mb3dlckNhc2UoKS50cmltKClcbiAgICAgICRzY29wZS5zZWFyY2hLZXkgPSBzZWFyY2hLZXlcbiAgICAgICRzY29wZS5wcmV2aW91c1NlYXJjaEtleSA9IHNlYXJjaEtleVxuICAgICAgbGltaXQgPSBsaW1pdCBvciAxMFxuICAgICAgY3Vyc29yID0gJydcbiAgICAgIGlmICRzY29wZS5pZHMubGlzdC5sZW5ndGhcbiAgICAgICAgY3Vyc29yID0gJHNjb3BlLmlkcy5saXN0WyRzY29wZS5pZHMubGlzdC5sZW5ndGggLSAxXS5jdXJzb3JcbiAgICAgIHNlZW4gPSB7fVxuXG4gICAgICByZXN1bHRGb3VuZCA9IChpKSAtPlxuICAgICAgICByZXR1cm4gaWYgc2VhcmNoS2V5ICE9ICRzY29wZS5zZWFyY2hLZXlcbiAgICAgICAgaS5ndW4ub24gKGRhdGEpIC0+XG4gICAgICAgICAgaS5kYXRhID0gZGF0YVxuICAgICAgICAgIGkuZ3VuLmdldCgnbGlua1RvJykub24gKGxpbmtUbykgLT5cbiAgICAgICAgICAgIHJldHVybiBpZiBpLmxpbmtUbyBvciAhbGlua1RvXG4gICAgICAgICAgICBzID0gbGlua1RvLnR5cGUgKyBsaW5rVG8udmFsdWVcbiAgICAgICAgICAgIHJldHVybiBpZiBzZWVuW3NdXG4gICAgICAgICAgICBzZWVuW3NdID0gdHJ1ZVxuICAgICAgICAgICAgJHNjb3BlLmlkcy5saXN0LnB1c2ggaVxuICAgICAgICAgICAgaS5saW5rVG8gPSBsaW5rVG9cbiAgICAgICAgJHNjb3BlLnNldElkZW50aXR5TmFtZXMoaSwgdHJ1ZSlcblxuICAgICAgJHNjb3BlLmlyaXNJbmRleC5zZWFyY2goc2VhcmNoS2V5LCB1bmRlZmluZWQsIHJlc3VsdEZvdW5kLCBsaW1pdCwgY3Vyc29yKVxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIChyZXNvbHZlKSAtPiAjIFRPRE86IHVpYi10eXBlYWhlYWQgaXMgbGltaXRlZCwgYnV0IHNvbWV0aGluZyBiZXR0ZXIgcGxzXG4gICAgICAgIHNldFRpbWVvdXQgLT5cbiAgICAgICAgICByZXNvbHZlKCRzY29wZS5pZHMubGlzdClcbiAgICAgICAgLCAxMDAwXG5cbiAgICBzZXRJbmRleCA9IChpKSAtPlxuICAgICAgaS5zZXRPbmxpbmUodHJ1ZSkgaWYgaS53cml0YWJsZVxuICAgICAgaS5yZWFkeS50aGVuIC0+XG4gICAgICAgICRzY29wZS5pZHMubGlzdCA9IFtdXG4gICAgICAgICRzY29wZS5tc2dzLmxpc3QgPSBbXVxuICAgICAgICAkc2NvcGUubXNncy5zZWVuID0ge31cbiAgICAgICAgJHNjb3BlLmlyaXNJbmRleCA9IGlcbiAgICAgICAgc2V0VGltZW91dCAtPiAjIGZvciBzb21lIHJlYXNvbiwgZGlzdCB2ZXJzaW9uIGZhaWxzIHRvIHNob3cgbWVzc2FnZXMgYW5kIGlkZW50aXRpZXMgd2l0aG91dCB0aGlzXG4gICAgICAgICAgJHNjb3BlLnNlYXJjaCgpXG4gICAgICAgICAgJHNjb3BlLnNob3dNb3JlTXNncygpXG4gICAgICAgICwgMTAwMFxuICAgICAgICAkc2NvcGUudHJ1c3RlZEluZGV4ZXMgPSBbXVxuICAgICAgICAkc2NvcGUuY2hhdHMgPSBbXVxuICAgICAgICBpZiBpLndyaXRhYmxlXG4gICAgICAgICAgJHNjb3BlLmlyaXNJbmRleC5ndW4udXNlcigpLmdldCgnaXJpcycpLmdldCgnY2hhdE1lc3NhZ2VzQnlVdWlkJykubWFwKCkub25jZSAobm9kZSwga2V5KSAtPlxuICAgICAgICAgICAgaWRlbnRpdHkgPSAkc2NvcGUuaXJpc0luZGV4LmdldCgndXVpZCcsIGtleSlcbiAgICAgICAgICAgICRzY29wZS5zZXRJZGVudGl0eU5hbWVzIGlkZW50aXR5XG4gICAgICAgICAgICAkc2NvcGUuY2hhdHMucHVzaFxuICAgICAgICAgICAgICBpZFZhbHVlOiBrZXlcbiAgICAgICAgICAgICAgaWRUeXBlOiAndXVpZCdcbiAgICAgICAgICAgICAgaWRlbnRpdHk6IGlkZW50aXR5XG4gICAgICAgICAgICAgIGxhdGVzdDogbnVsbFxuICAgICAgICAgICAgICB1bnJlYWRNc2dzOiAwXG4gICAgICAgICAgJHNjb3BlLmlyaXNJbmRleC5ndW4udXNlcigpLmdldCgnY2hhdCcpLm1hcCgpLm9uY2UgKG5vZGUsIGtleSkgLT5cbiAgICAgICAgICAgIGlkZW50aXR5ID0gJHNjb3BlLmlyaXNJbmRleC5nZXQoJ2tleUlEJywga2V5KVxuICAgICAgICAgICAgJHNjb3BlLnNldElkZW50aXR5TmFtZXMgaWRlbnRpdHlcbiAgICAgICAgICAgIGNoYXQgPVxuICAgICAgICAgICAgICBpZFZhbHVlOiBrZXlcbiAgICAgICAgICAgICAgaWRUeXBlOiAna2V5SUQnXG4gICAgICAgICAgICAgIGlkZW50aXR5OiBpZGVudGl0eVxuICAgICAgICAgICAgICBsYXRlc3Q6IG51bGxcbiAgICAgICAgICAgICAgdW5yZWFkTXNnczogMFxuICAgICAgICAgICAgICBjaGF0OiBuZXcgJHdpbmRvdy5pcmlzTGliLkNoYXRcbiAgICAgICAgICAgICAgICBvbk1lc3NhZ2U6IChtc2csIGluZm8pIC0+XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdW5sZXNzIG1zZ1xuICAgICAgICAgICAgICAgICAgY2hhdC5sYXRlc3QgPSBtc2cgaWYgKGNoYXQubGF0ZXN0ID09IG51bGwgb3IgbXNnLnRpbWUgPiBjaGF0LmxhdGVzdC50aW1lKVxuICAgICAgICAgICAgICAgICAgaWYgKChtc2cudGltZSA+ICRzY29wZS5vcGVuVGltZSkgYW5kICEkc3RhdGUuaXMoJ2NoYXRzLnNob3cnLCB7dmFsdWU6a2V5fSkgYW5kICFpbmZvLnNlbGZBdXRob3JlZClcbiAgICAgICAgICAgICAgICAgICAgY2hhdC51bnJlYWRNc2dzKytcbiAgICAgICAgICAgICAgICAgIG5vdGlmeSA9ICgoISRzdGF0ZS5pcygnY2hhdHMuc2hvdycsIHt2YWx1ZTprZXl9KSBvciBkb2N1bWVudC5oaWRkZW4pIGFuZCAhaW5mby5zZWxmQXV0aG9yZWQgYW5kIG1zZy50aW1lID4gJHNjb3BlLm9wZW5UaW1lKVxuICAgICAgICAgICAgICAgICAgaWYgbm90aWZ5XG4gICAgICAgICAgICAgICAgICAgIE5vdGlmaWNhdGlvblNlcnZpY2UuY3JlYXRlXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2NoYXQnXG4gICAgICAgICAgICAgICAgICAgICAgZnJvbTogbXNnLmF1dGhvclxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IG1zZy50ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljazogKCkgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICRzdGF0ZS5nbyAnY2hhdHMuc2hvdycsIHsgdHlwZTogJ2tleUlEJywgdmFsdWU6IGtleSB9XG4gICAgICAgICAgICAgICAga2V5OiAkc2NvcGUucHJpdmF0ZUtleVxuICAgICAgICAgICAgICAgIGd1bjogJHNjb3BlLmd1blxuICAgICAgICAgICAgICAgIHBhcnRpY2lwYW50czoga2V5XG4gICAgICAgICAgICAkc2NvcGUuY2hhdHMucHVzaChjaGF0KVxuICAgICAgICAkc2NvcGUuaXJpc0luZGV4Lmd1bi5nZXQoJ3RydXN0ZWRJbmRleGVzJykub3BlbiAocikgLT5cbiAgICAgICAgICBmb3IgaywgdiBvZiByXG4gICAgICAgICAgICAkc2NvcGUudHJ1c3RlZEluZGV4ZXMucHVzaFxuICAgICAgICAgICAgICBpbmRleDoga1xuICAgICAgICAgICAgICBhdHRyaWJ1dGU6IG5ldyAkd2luZG93LmlyaXNMaWIuQXR0cmlidXRlKCdrZXlJRCcsIGspXG4gICAgICAgICAgICAgIGlkZW50aXR5OiAkc2NvcGUuaXJpc0luZGV4LmdldCgna2V5SUQnLCBrKVxuICAgICAgICBzZXRUaW1lb3V0ICgpIC0+XG4gICAgICAgICAgJHNjb3BlLiRicm9hZGNhc3QoJ3J6U2xpZGVyRm9yY2VSZW5kZXInKVxuICAgICAgICAsIDEwMDBcbiAgICAgICAgc2V0VGltZW91dCAoKSAtPlxuICAgICAgICAgICRzY29wZS4kYnJvYWRjYXN0KCdyelNsaWRlckZvcmNlUmVuZGVyJylcbiAgICAgICAgLCAzMDAwICMgOi0tLURcbiAgICAgICAgc2V0VGltZW91dCAoKSAtPlxuICAgICAgICAgICRzY29wZS4kYnJvYWRjYXN0KCdyelNsaWRlckZvcmNlUmVuZGVyJylcbiAgICAgICAgLCA1MDAwICMgOi0tLURcbiAgICAgICAgY29uc29sZS5sb2cgJ0dvdCBpbmRleCcsICRzY29wZS5pcmlzSW5kZXhcbiAgICAgICAgJHNjb3BlLnZpZXdwb2ludC5pZGVudGl0eSA9ICRzY29wZS5pcmlzSW5kZXguZ2V0KCRzY29wZS52aWV3cG9pbnQudHlwZSwgJHNjb3BlLnZpZXdwb2ludC52YWx1ZSlcbiAgICAgICAgJHNjb3BlLnNldElkZW50aXR5TmFtZXMoJHNjb3BlLnZpZXdwb2ludC5pZGVudGl0eSlcbiAgICAgICAgJHNjb3BlLnZpZXdwb2ludC5pZGVudGl0eS5ndW4uZ2V0KCdhdHRycycpLm9wZW4gKGF0dHJzKSAtPlxuICAgICAgICAgICRzY29wZS52aWV3cG9pbnQuYXR0cnMgPSBhdHRyc1xuICAgICAgICAgICRzY29wZS52aWV3cG9pbnQubW9zdFZlcmlmaWVkQXR0cmlidXRlcyA9ICR3aW5kb3cuaXJpc0xpYi5JZGVudGl0eS5nZXRNb3N0VmVyaWZpZWRBdHRyaWJ1dGVzKGF0dHJzKVxuXG4gICAgJHNjb3BlLmxvYWREZWZhdWx0SW5kZXggPSAtPlxuICAgICAgJHNjb3BlLmlyaXNJbmRleCA9IG51bGxcbiAgICAgICRzY29wZS52aWV3cG9pbnQgPSB7dHlwZTogJ2tleUlEJywgdmFsdWU6ICRzY29wZS5kZWZhdWx0SW5kZXhLZXlJRH1cbiAgICAgIGkgPSBuZXcgJHdpbmRvdy5pcmlzTGliLkluZGV4KHtndW46ICRzY29wZS5ndW4sIHB1YktleTogJHNjb3BlLmRlZmF1bHRJbmRleEtleUlELCBpcGZzOiAkc2NvcGUuaXBmc30pXG4gICAgICBzZXRJbmRleChpKVxuXG4gICAgJHNjb3BlLmxvZ2luV2l0aEtleSA9IChwcml2YXRlS2V5U2VyaWFsaXplZCwgc2VsZikgLT5cbiAgICAgICRzY29wZS5pcmlzSW5kZXggPSBudWxsXG4gICAgICAkc2NvcGUubG9nZ2luZ0luID0gdHJ1ZVxuICAgICAgJHNjb3BlLnByaXZhdGVLZXkgPSAkd2luZG93LmlyaXNMaWIuS2V5LmZyb21TdHJpbmcocHJpdmF0ZUtleVNlcmlhbGl6ZWQpXG4gICAgICBsb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldCgnaXJpc0tleScsIHByaXZhdGVLZXlTZXJpYWxpemVkKVxuICAgICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnVzZXIgPVxuICAgICAgICBpZFR5cGU6ICdrZXlJRCdcbiAgICAgICAgaWRWYWx1ZTogJHdpbmRvdy5pcmlzTGliLktleS5nZXRJZCgkc2NvcGUucHJpdmF0ZUtleSlcbiAgICAgICRzY29wZS5hdXRoZW50aWNhdGlvbi51c2VyLnVybCA9ICRzY29wZS5nZXRJZFVybCAna2V5SUQnLCAkc2NvcGUuYXV0aGVudGljYXRpb24udXNlci5pZFZhbHVlXG4gICAgICAkc2NvcGUubG9naW5Nb2RhbC5jbG9zZSgpIGlmICRzY29wZS5sb2dpbk1vZGFsXG4gICAgICBrZXlJRCA9ICR3aW5kb3cuaXJpc0xpYi5LZXkuZ2V0SWQoJHNjb3BlLnByaXZhdGVLZXkpXG4gICAgICAkc2NvcGUudmlld3BvaW50ID0ge3R5cGU6ICdrZXlJRCcsIHZhbHVlOiBrZXlJRH1cbiAgICAgICRzY29wZS5pZHMubGlzdCA9IFtdXG4gICAgICAkc2NvcGUubXNncy5saXN0ID0gW11cbiAgICAgICRzY29wZS5tc2dzLnNlZW4gPSB7fVxuICAgICAgaSA9IG5ldyAkd2luZG93LmlyaXNMaWIuSW5kZXgoe2d1bjogJHNjb3BlLmd1biwga2V5cGFpcjogJHNjb3BlLnByaXZhdGVLZXksIHNlbGYsIGlwZnM6ICRzY29wZS5pcGZzLCBkZWJ1ZzogdHJ1ZX0pXG4gICAgICBzZXRJbmRleChpKVxuICAgICAgaS5yZWFkeS50aGVuIC0+XG4gICAgICAgICRzY29wZS5sb2dnaW5nSW4gPSBmYWxzZVxuICAgICAgICAkc2NvcGUuYXV0aGVudGljYXRpb24uaWRlbnRpdHkgPSAkc2NvcGUuaXJpc0luZGV4LmdldCgna2V5SUQnLCBrZXlJRClcbiAgICAgICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLmlkZW50aXR5Lmd1bi5nZXQoJ2F0dHJzJykub3BlbiAodmFsLCBrZXksIG1zZywgZXZlKSAtPlxuICAgICAgICAgIG12YSA9ICR3aW5kb3cuaXJpc0xpYi5JZGVudGl0eS5nZXRNb3N0VmVyaWZpZWRBdHRyaWJ1dGVzKHZhbClcbiAgICAgICAgICAkc2NvcGUuYXV0aGVudGljYXRpb24uaWRlbnRpdHkubXZhID0gbXZhXG4gICAgICAgICAgZXZlLm9mZigpIGlmIG12YS5wcm9maWxlUGhvdG9cbiAgICAgICAgc3RhcnRBdCA9IG5ldyBEYXRlKClcbiAgICAgICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLmlkZW50aXR5Lmd1bi5nZXQoJ3JlY2VpdmVkJykubWFwKCkub25jZSAobSkgLT5cbiAgICAgICAgICByZXR1cm4gaWYgbS5wdWJLZXkgPT0gJHNjb3BlLnZpZXdwb2ludC52YWx1ZVxuICAgICAgICAgIGNvbnNvbGUubG9nICd5b3UgZ290IGEgbXNnJ1xuICAgICAgICAgICR3aW5kb3cuaXJpc0xpYi5NZXNzYWdlLmZyb21TaWcobSkudGhlbiAobXNnKSAtPlxuICAgICAgICAgICAgaWYgbmV3IERhdGUobXNnLnNpZ25lZERhdGEudGltZXN0YW1wKSA+IHN0YXJ0QXRcbiAgICAgICAgICAgICAgYXV0aG9yID0gbXNnLmdldEF1dGhvcigkc2NvcGUuaXJpc0luZGV4KVxuICAgICAgICAgICAgICAkc2NvcGUuc2V0SWRlbnRpdHlOYW1lcyhhdXRob3IpLnRoZW4gKG5hbWUpIC0+XG4gICAgICAgICAgICAgICAgTm90aWZpY2F0aW9uU2VydmljZS5jcmVhdGVcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdwb3N0J1xuICAgICAgICAgICAgICAgICAgZnJvbTogbmFtZVxuICAgICAgICAgICAgICAgICAgdGV4dDogXCIje25hbWV9IHB1YmxpYyBtZXNzYWdlZCB5b3UhXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgpIC0+XG4gICAgICAgICAgICAgICAgICAgICRzdGF0ZS5nbyAnaWRlbnRpdGllcy5zaG93JywgeyB0eXBlOiAkc2NvcGUuYXV0aGVudGljYXRpb24udXNlci5pZFR5cGUsIHZhbHVlOiAkc2NvcGUuYXV0aGVudGljYXRpb24udXNlci5pZFZhbHVlIH1cbiAgICAgICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLmlkZW50aXR5Lmd1bi5vbiAoZGF0YSkgLT5cbiAgICAgICAgICBpZiBkYXRhLnJlY2VpdmVkUG9zaXRpdmUgYW5kICRzY29wZS5hdXRoZW50aWNhdGlvbi5pZGVudGl0eS5kYXRhIGFuZCBub3QgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLmlkZW50aXR5LmRhdGEucmVjZWl2ZWRQb3NpdGl2ZVxuICAgICAgICAgICAgY29uc29sZS5sb2cgJ2dyZWF0LCB5b3UgZ290IHlvdXIgZmlyc3QgdXB2b3RlISdcbiAgICAgICAgICAgICMgVE9ETzogbm90aWZpY2F0aW9uXG4gICAgICAgICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLmlkZW50aXR5LmRhdGEgPSBkYXRhXG5cbiAgICBwcml2YXRlS2V5ID0gbG9jYWxTdG9yYWdlU2VydmljZS5nZXQoJ2lyaXNLZXknKSBvciBsb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldCgnaWRlbnRpZmlLZXknKVxuICAgIGlmIHByaXZhdGVLZXlcbiAgICAgICRzY29wZS5sb2dpbldpdGhLZXkocHJpdmF0ZUtleSlcbiAgICBlbHNlXG4gICAgICAkc2NvcGUubG9hZERlZmF1bHRJbmRleCgpXG5cbiAgICAkc2NvcGUub3BlbkNoYXRNb2RhbCA9ICgpIC0+XG4gICAgICAkc2NvcGUub3Blbk1vZGFsICdjaGF0TW9kYWwnLCB7IHRlbXBsYXRlVXJsOiAnYXBwL2lkZW50aXRpZXMvY2hhdC5tb2RhbC5odG1sJywgc2l6ZTogJ21kJyB9XG5cbiAgICAkc2NvcGUub3BlblZpZGVvQ2hhdE1vZGFsID0gKCkgLT5cbiAgICAgICRzY29wZS5vcGVuTW9kYWwgJ3ZpZGVvQ2hhdE1vZGFsJywgeyB0ZW1wbGF0ZVVybDogJ2FwcC9pZGVudGl0aWVzL3ZpZGVvLm1vZGFsLmh0bWwnLCBzaXplOiAnbWQnIH1cblxuICAgICRzY29wZS5vcGVuUmVhZFFSTW9kYWwgPSAoKSAtPlxuICAgICAgJHNjb3BlLm9wZW5Nb2RhbCAncmVhZFFSTW9kYWwnLCB7IHRlbXBsYXRlVXJsOiAnYXBwL2lkZW50aXRpZXMvcmVhZHFyLm1vZGFsLmh0bWwnLCBzaXplOiAnbWQnIH1cblxuICAgICRzY29wZS51cGRhdGVJcGZzUGVlcnMgPSAoKSAtPlxuICAgICAgJHNjb3BlLmlwZnMuc3dhcm0ucGVlcnMgKGVyciwgcGVlckluZm9zKSAtPlxuICAgICAgICBpZiBlcnJcbiAgICAgICAgICBjb25zb2xlLmVycm9yICdmYWlsZWQgdG8gZmV0Y2ggaXBmcyBwZWVycycsIGVyclxuICAgICAgICBlbHNlXG4gICAgICAgICAgJHNjb3BlLiRhcHBseSAtPlxuICAgICAgICAgICAgJHNjb3BlLmlwZnNQZWVycyA9IHBlZXJJbmZvcyBpZiBBcnJheS5pc0FycmF5KHBlZXJJbmZvcylcblxuICAgICRzY29wZS5pcGZzLm9uICdyZWFkeScsIC0+XG4gICAgICAkc2NvcGUuaXBmc1JlYWR5ID0gdHJ1ZVxuICAgICAgJHdpbmRvdy5pcGZzID0gJHNjb3BlLmlwZnNcbiAgICAgICRzY29wZS51cGRhdGVJcGZzUGVlcnMoKVxuICAgICAgc2V0SW50ZXJ2YWwgJHNjb3BlLnVwZGF0ZUlwZnNQZWVycywgNTAwMFxuXG4gICAgJHNjb3BlLmxvY2FsU2V0dGluZ3MgPSBsb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldCgnbG9jYWxTZXR0aW5ncycpIHx8IHt9XG4gICAgJHNjb3BlLmNsb3NlUHJvZmlsZVVwbG9hZE5vdGlmaWNhdGlvbiA9IC0+XG4gICAgICAkc2NvcGUubG9jYWxTZXR0aW5ncy5wcm9maWxlVXBsb2FkTm90aWZpY2F0aW9uQ2xvc2VkID0gdHJ1ZVxuICAgICAgbG9jYWxTdG9yYWdlU2VydmljZS5zZXQoJ2xvY2FsU2V0dGluZ3MnLCAkc2NvcGUubG9jYWxTZXR0aW5ncylcblxuICAgICRzY29wZS5vcGVuUHJvZmlsZVBob3RvVXBsb2FkTW9kYWwgPSAtPlxuICAgICAgcmV0dXJuIHVubGVzcyAkc2NvcGUuYXV0aGVudGljYXRpb24uaWRlbnRpdHlcbiAgICAgICRzY29wZS5vcGVuVXBsb2FkTW9kYWwoJHNjb3BlLnVwbG9hZFByb2ZpbGVQaG90bywgJ1VwbG9hZCBwcm9maWxlIHBob3RvJywgdHJ1ZSlcblxuICAgICRzY29wZS51cGxvYWRQcm9maWxlUGhvdG8gPSAoYmxvYikgLT5cbiAgICAgICRzY29wZS51cGxvYWRGaWxlKGJsb2IpLnRoZW4gKGZpbGVzKSAtPlxuICAgICAgICByZWNpcGllbnQgPVxuICAgICAgICAgIHByb2ZpbGVQaG90bzogJy9pcGZzLycgKyBmaWxlc1swXS5wYXRoXG4gICAgICAgIGlmICRzdGF0ZS5pcyAnaWRlbnRpdGllcy5zaG93J1xuICAgICAgICAgIHJlY2lwaWVudFskc3RhdGVQYXJhbXMudHlwZV0gPSAkc3RhdGVQYXJhbXMudmFsdWVcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHJlY2lwaWVudC5rZXlJRCA9ICRzY29wZS5hdXRoZW50aWNhdGlvbi51c2VyLmlkVmFsdWVcbiAgICAgICAgICAkc2NvcGUuY2xvc2VQcm9maWxlVXBsb2FkTm90aWZpY2F0aW9uKClcbiAgICAgICAgJHdpbmRvdy5pcmlzTGliLk1lc3NhZ2UuY3JlYXRlVmVyaWZpY2F0aW9uKHtyZWNpcGllbnR9LCAkc2NvcGUucHJpdmF0ZUtleSkudGhlbiAobSkgLT5cbiAgICAgICAgICAkc2NvcGUuaGlkZVByb2ZpbGVQaG90byA9IHRydWUgIyBUaGVyZSdzIGEgd2VpcmQgYnVnIHdoZXJlIHRoZSBwcm9maWxlIGlkZW50aWNvbiBkb2Vzbid0IHVwZGF0ZVxuICAgICAgICAgICRzY29wZS5pcmlzSW5kZXguYWRkTWVzc2FnZShtKS50aGVuIC0+XG4gICAgICAgICAgICAkc2NvcGUuaGlkZVByb2ZpbGVQaG90byA9IGZhbHNlXG4gICAgICAgICAgICBpZiAhJHN0YXRlLmlzICdpZGVudGl0aWVzLnNob3cnXG4gICAgICAgICAgICAgICRzdGF0ZS5nbyAnaWRlbnRpdGllcy5zaG93JywgeyB0eXBlOiAkc2NvcGUuYXV0aGVudGljYXRpb24udXNlci5pZFR5cGUsIHZhbHVlOiAkc2NvcGUuYXV0aGVudGljYXRpb24udXNlci5pZFZhbHVlIH1cbiAgICAgICAgICAkc2NvcGUudXBsb2FkTW9kYWwuY2xvc2UoKVxuXG4gICAgJHNjb3BlLnNldFBhZ2VUaXRsZSA9ICh0aXRsZSkgLT5cbiAgICAgICRyb290U2NvcGUucGFnZVRpdGxlID0gJ0lyaXMnXG4gICAgICBpZiAodGl0bGUpXG4gICAgICAgICRyb290U2NvcGUucGFnZVRpdGxlICs9ICcgLSAnICsgdGl0bGVcblxuICAgICRzY29wZS5pcGZzR2V0ID0gKHVyaSwgb3B0aW9ucyA9IHt9KSAtPlxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIChyZXNvbHZlKSAtPlxuICAgICAgICBnbyA9IC0+XG4gICAgICAgICAgJHNjb3BlLmlwZnMuY2F0KHVyaSkudGhlbiAoZmlsZSkgLT5cbiAgICAgICAgICAgIGZpbGUgPSAkc2NvcGUuaXBmcy50eXBlcy5CdWZmZXIoZmlsZSlcbiAgICAgICAgICAgIGlmIG9wdGlvbnMuZ2V0SnNvblxuICAgICAgICAgICAgICBmaWxlID0gSlNPTi5wYXJzZShmaWxlLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICBpZiBvcHRpb25zLmJhc2U2NHR5cGVcbiAgICAgICAgICAgICAgZmlsZSA9ICdkYXRhOicgKyBvcHRpb25zLmJhc2U2NHR5cGUgKyAnO2Jhc2U2NCwnICsgZmlsZS50b1N0cmluZygnYmFzZTY0JylcbiAgICAgICAgICAgIHJlc29sdmUgZmlsZVxuXG4gICAgICAgIGlmICRzY29wZS5pcGZzUmVhZHlcbiAgICAgICAgICBnbygpXG4gICAgICAgIGVsc2VcbiAgICAgICAgICAkc2NvcGUuaXBmcy5vbiAncmVhZHknLCAtPlxuICAgICAgICAgICAgZ28oKVxuXG4gICAgJHNjb3BlLiR3YXRjaCAnbmV3TWVzc2FnZS5yYXRpbmcnLCAocmF0aW5nKSAtPlxuICAgICAgaWYgcmF0aW5nID4gMFxuICAgICAgICBhbHBoYSA9IChyYXRpbmcgLSAwLjUpIC8gMyAvIDEuMjUgKyAwLjJcbiAgICAgICAgJHNjb3BlLm5ld01lc3NhZ2Uuc3R5bGUgPSB7J2JvcmRlci1jb2xvcic6ICdyZ2JhKDIyMywyNDAsMjE2LCcgKyBhbHBoYSArICcpJ31cbiAgICAgIGVsc2UgaWYgcmF0aW5nIDwgMFxuICAgICAgICBhbHBoYSA9IChyYXRpbmcgKyAwLjUpIC8gLTMgLyAxLjI1ICsgMC4yXG4gICAgICAgICRzY29wZS5uZXdNZXNzYWdlLnN0eWxlID0geydib3JkZXItY29sb3InOiAncmdiYSgyNDIsMjIyLDIyMiwnICsgYWxwaGEgKyAnKSd9XG4gICAgICBlbHNlXG4gICAgICAgICRzY29wZS5uZXdNZXNzYWdlLnN0eWxlID0geydib3JkZXItY29sb3InOiAnI2ZjZjhlMyd9XG5cbiAgICAkc2NvcGUucmVzZXRNc2cgPSAtPlxuICAgICAgJHNjb3BlLm5ld01lc3NhZ2UgPVxuICAgICAgICByYXRpbmc6IDFcbiAgICAgICAgY29tbWVudDogJydcbiAgICAgICAgZmlsZXM6IFtdXG4gICAgICAkc2NvcGUubmV3VmVyaWZpY2F0aW9uID1cbiAgICAgICAgdHlwZTogJydcbiAgICAgICAgdmFsdWU6ICcnXG4gICAgJHNjb3BlLnJlc2V0TXNnKClcblxuICAgICRzY29wZS52b3RlID0gKG1zZywgdm90ZSkgLT5cbiAgICAgIGNvbnNvbGUubG9nICd2b3RlIGFkZGVkJ1xuICAgICAgJHNjb3BlLmNyZWF0ZU1lc3NhZ2UobnVsbCwge3R5cGU6ICd2b3RlJywgcmVwbHlUbzogbXNnLmdldEhhc2goKSwgdm90ZX0pXG5cbiAgICAjIENyZWF0ZSBuZXcgTWVzc2FnZVxuICAgICRzY29wZS5jcmVhdGVNZXNzYWdlID0gKGV2ZW50LCBtc2csIG9wdGlvbnMgPSB7fSkgLT5cbiAgICAgICRzY29wZS5hZGRpbmdNZXNzYWdlID0gdHJ1ZVxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCkgaWYgZXZlbnRcbiAgICAgIGRlbGV0ZSBtc2cucG9sbE9wdGlvbnMgaWYgbXNnLnBvbGxPcHRpb25zID09IGZhbHNlXG5cbiAgICAgIGZpbGVVcGxvYWRzID0gW11cbiAgICAgIGlmIG9wdGlvbnMuZmlsZXMgIyB1cGxvYWQgdG8gaXBmc1xuICAgICAgICBtc2cuYXR0YWNobWVudHMgPSBbXVxuICAgICAgICBhZGRGaWxlID0gKGZpbGUpIC0+XG4gICAgICAgICAgJHNjb3BlLnVwbG9hZEZpbGUoZmlsZSkudGhlbiAocmVzKSAtPlxuICAgICAgICAgICAgaWYgcmVzIGFuZCByZXMubGVuZ3RoIGFuZCByZXMubGVuZ3RoID4gMCBhbmQgcmVzWzBdLnBhdGhcbiAgICAgICAgICAgICAgbXNnLmF0dGFjaG1lbnRzLnB1c2hcbiAgICAgICAgICAgICAgICB1cmk6ICcvaXBmcy8nICsgcmVzWzBdLnBhdGhcbiAgICAgICAgICAgICAgICBzaXplOiBmaWxlLnNpemVcbiAgICAgICAgICAgICAgICB0eXBlOiBmaWxlLnR5cGVcbiAgICAgICAgICAgICAgICBuYW1lOiBmaWxlLm5hbWVcbiAgICAgICAgZmlsZVVwbG9hZHMucHVzaCBhZGRGaWxlKGZpbGUpIGZvciBmaWxlIGluIG9wdGlvbnMuZmlsZXNcblxuICAgICAgUHJvbWlzZS5hbGwoZmlsZVVwbG9hZHMpLnRoZW4gLT5cbiAgICAgICAgY29uc29sZS5sb2cgJ21zZy5hdHRhY2htZW50cycsIG1zZy5hdHRhY2htZW50c1xuICAgICAgICAjIENyZWF0ZSBuZXcgTWVzc2FnZSBvYmplY3RcbiAgICAgICAgbWVzc2FnZSA9IG51bGxcbiAgICAgICAgZGVsZXRlIG1zZy5maWxlcyBpZiBtc2cuZmlsZXNcbiAgICAgICAgaWYgJHN0YXRlLmlzICdpZGVudGl0aWVzLnNob3cnXG4gICAgICAgICAgbXNnLnJlY2lwaWVudCA9IG1zZy5yZWNpcGllbnQgfHwge31cbiAgICAgICAgICBpZiBvcHRpb25zLnZlcmlmaWVkQXR0ciBhbmQgJHN0YXRlUGFyYW1zLnR5cGUgPT0gb3B0aW9ucy52ZXJpZmllZEF0dHIudHlwZVxuICAgICAgICAgICAgbXNnLnJlY2lwaWVudFskc3RhdGVQYXJhbXMudHlwZV0gPSBbJHN0YXRlUGFyYW1zLnZhbHVlLCBvcHRpb25zLnZlcmlmaWVkQXR0ci52YWx1ZV1cbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBtc2cucmVjaXBpZW50WyRzdGF0ZVBhcmFtcy50eXBlXSA9ICRzdGF0ZVBhcmFtcy52YWx1ZVxuICAgICAgICAgICAgbXNnLnJlY2lwaWVudFtvcHRpb25zLnZlcmlmaWVkQXR0ci50eXBlXSA9IG9wdGlvbnMudmVyaWZpZWRBdHRyLnZhbHVlIGlmIG9wdGlvbnMudmVyaWZpZWRBdHRyXG4gICAgICAgIGlmIG1zZy50eXBlID09ICdyYXRpbmcnXG4gICAgICAgICAgbXNnLm1heFJhdGluZyB8PSAzXG4gICAgICAgICAgbXNnLm1pblJhdGluZyB8PSAtM1xuICAgICAgICAgIG1lc3NhZ2UgPSAkd2luZG93LmlyaXNMaWIuTWVzc2FnZS5jcmVhdGVSYXRpbmcobXNnLCAkc2NvcGUucHJpdmF0ZUtleSlcbiAgICAgICAgZWxzZSBpZiBtc2cudHlwZSA9PSAndmVyaWZpY2F0aW9uJ1xuICAgICAgICAgIG1lc3NhZ2UgPSAkd2luZG93LmlyaXNMaWIuTWVzc2FnZS5jcmVhdGVWZXJpZmljYXRpb24obXNnLCAkc2NvcGUucHJpdmF0ZUtleSlcbiAgICAgICAgZWxzZVxuICAgICAgICAgIG1lc3NhZ2UgPSAkd2luZG93LmlyaXNMaWIuTWVzc2FnZS5jcmVhdGUobXNnLCAkc2NvcGUucHJpdmF0ZUtleSlcblxuICAgICAgICBtZXNzYWdlLnRoZW4gKG0pIC0+XG4gICAgICAgICAgJHNjb3BlLmlyaXNJbmRleC5hZGRNZXNzYWdlKG0pXG4gICAgICAgICAgJHNjb3BlLm1zZ3Muc2VlblttLmdldEhhc2goKV0gPSB0cnVlXG4gICAgICAgICAgJHNjb3BlLnByb2Nlc3NNZXNzYWdlcyhbbV0pXG4gICAgICAgIC50aGVuIChtZXNzYWdlcykgLT5cbiAgICAgICAgICAkc2NvcGUubXNncy5saXN0LnB1c2gobWVzc2FnZXNbMF0pXG4gICAgICAgICAgaWYgb3B0aW9ucy5hZGRUbyBhbmQgbm90IG9wdGlvbnMuYWRkVG8uc2VlblttZXNzYWdlc1swXS5nZXRIYXNoKCldXG4gICAgICAgICAgICBvcHRpb25zLmFkZFRvLmxpc3QucHVzaCBtZXNzYWdlc1swXVxuICAgICAgICAgICAgb3B0aW9ucy5hZGRUby5zZWVuW21lc3NhZ2VzWzBdLmdldEhhc2goKV0gPSB0cnVlXG4gICAgICAgICAgaWYgJHNjb3BlLmZpbHRlcnMudHlwZSBub3QgaW4gW21zZy50eXBlLCBudWxsXVxuICAgICAgICAgICAgJHNjb3BlLmZpbHRlcnMudHlwZSA9IG1zZy50eXBlXG4gICAgICAgICAgJHNjb3BlLnJlc2V0TXNnKCkgIyB3aHkgbm90IHJlc2V0dGluZyB1cGxvYWRlZCBmaWxlcz8gRDpcbiAgICAgICAgICBvcHRpb25zLmZpbGVzID0gW10gaWYgb3B0aW9ucy5maWxlc1xuICAgICAgICAgICRzY29wZS5hZGRpbmdNZXNzYWdlID0gZmFsc2VcbiAgICAgICAgICByZXR1cm4gbWVzc2FnZVxuICAgICAgICAuY2F0Y2ggKGUpIC0+XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlKVxuICAgICAgICAgICRzY29wZS5lcnJvciA9IGVcbiAgICAgICAgICAkc2NvcGUuYWRkaW5nTWVzc2FnZSA9IGZhbHNlXG4gICAgICAgICAgcmV0dXJuIG1lc3NhZ2VcblxuICAgICRzY29wZS5hZGRBdHRyaWJ1dGUgPSAtPlxuICAgICAgJGxvY2F0aW9uLnBhdGggJyMvaWRlbnRpdGllcy9jcmVhdGUvJyArICRzY29wZS5xdWVyeS50ZXJtXG5cbiAgICAkc2NvcGUubG9naW4gPSAtPlxuICAgICAgJHNjb3BlLmZpbHRlcnMubWF4RGlzdGFuY2UgPSAtMSAjIGJlY2F1c2UgdGhlIHVzZXIgZG9lc24ndCBoYXZlIGEgdHJ1c3QgaW5kZXggeWV0XG5cbiAgICAkc2NvcGUub3Blbk1vZGFsID0gKG1vZGFsTmFtZSwgb3B0aW9ucykgLT5cbiAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduIHtzaXplOiAnbGcnLCBhbmltYXRpb246IHRydWUsIHNjb3BlOiAkc2NvcGV9LCBvcHRpb25zXG4gICAgICAkc2NvcGVbbW9kYWxOYW1lXSA9ICR1aWJNb2RhbC5vcGVuKG9wdGlvbnMpXG4gICAgICAkc2NvcGVbbW9kYWxOYW1lXS5yZXN1bHQudGhlbiAoLT4pLCAoLT4pICMgYXZvaWQgYmFja2Ryb3AgcmVqZWN0aW9uIGNvbnNvbGUgZXJyb3JcbiAgICAgICRzY29wZVttb2RhbE5hbWVdLnJlbmRlcmVkLnRoZW4gLT5cbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKClcbiAgICAgICAgZm9jdXMob3B0aW9ucy5mb2N1c1RvKSBpZiBvcHRpb25zLmZvY3VzVG9cbiAgICAgICR0cmFuc2l0aW9ucy5vblN0YXJ0IHt9LCAtPlxuICAgICAgICAkc2NvcGVbbW9kYWxOYW1lXS5jbG9zZSgpXG5cbiAgICAkc2NvcGUub3BlbkxvZ2luTW9kYWwgPSAtPlxuICAgICAgJHNjb3BlLm9wZW5Nb2RhbCgnbG9naW5Nb2RhbCcsIHt0ZW1wbGF0ZVVybDogJ2FwcC9tYWluL2xvZ2luLm1vZGFsLmh0bWwnLCBmb2N1c1RvOiAnbmV3VXNlcid9KVxuXG4gICAgJHNjb3BlLm9wZW5VcGxvYWRNb2RhbCA9IChjYWxsYmFjaywgbW9kYWxCdXR0b25UZXh0LCBzcXVhcmlmeSkgLT5cbiAgICAgICRzY29wZS51cGxvYWRNb2RhbENhbGxiYWNrID0gY2FsbGJhY2tcbiAgICAgICRzY29wZS5tb2RhbEJ1dHRvblRleHQgPSBtb2RhbEJ1dHRvblRleHQgb3IgJ1VwbG9hZCdcbiAgICAgICRzY29wZS5zcXVhcmlmeSA9IHNxdWFyaWZ5XG4gICAgICAkc2NvcGUub3Blbk1vZGFsKCd1cGxvYWRNb2RhbCcsIHt0ZW1wbGF0ZVVybDogJ2FwcC9pZGVudGl0aWVzL3VwbG9hZC5tb2RhbC5odG1sJ30pXG5cbiAgICAkc2NvcGUubXNncy5saXN0ID0gW11cbiAgICAkc2NvcGUubXNncy5zZWVuID0ge31cbiAgICAkc2NvcGUuZmlsdGVyZWRNc2dzID0gW11cbiAgICAkc2NvcGUuc2hvd01vcmVNc2dzID0gKGN1cnNvcikgLT5cbiAgICAgIGxpbWl0ID0gMjAgIyAxMFxuICAgICAgaWYgY3Vyc29yID09IHVuZGVmaW5lZCBhbmQgJHNjb3BlLm1zZ3MubGFzdFxuICAgICAgICBjdXJzb3IgPSAkc2NvcGUubXNncy5sYXN0XG4gICAgICBjb25zb2xlLmxvZyAnY3Vyc29yJywgY3Vyc29yXG4gICAgICBmb3VuZCA9IDBcbiAgICAgICRzY29wZS5sb2FkaW5nTXNncyA9IHRydWVcbiAgICAgIGZpbHRlciA9IGZhbHNlXG4gICAgICAjIyNcbiAgICAgIGlmICRzY29wZS5maWx0ZXJzLnR5cGUgPT0gbnVsbFxuICAgICAgICBmaWx0ZXIgPSAobSkgLT5cbiAgICAgICAgICByID0gbS5zaWduZWREYXRhLnR5cGUgbm90IGluIFsndmVyaWZpY2F0aW9uJywgJ3VudmVyaWZpY2F0aW9uJ11cbiAgICAgICAgICBjb25zb2xlLmxvZyAnZmlsdGVyaW4nLCByXG4gICAgICAgICAgcmV0dXJuIHJcbiAgICAgIGVsc2VcbiAgICAgICAgdCA9ICRzY29wZS5maWx0ZXJzLnR5cGUuc3BsaXQoJzonKVswXVxuICAgICAgICBmaWx0ZXIgPSAobSkgLT5cbiAgICAgICAgICByID0gbS5zaWduZWREYXRhLnR5cGUgPT0gdFxuICAgICAgICAgIGNvbnNvbGUubG9nICdmaWx0ZXJpbicsIHJcbiAgICAgICAgICByZXR1cm4gclxuICAgICAgIyMjXG4gICAgICByZXN1bHRGb3VuZCA9IChtc2cpIC0+XG4gICAgICAgIGZvdW5kICs9IDFcbiAgICAgICAgJHNjb3BlLmxvYWRpbmdNc2dzID0gZmFsc2UgaWYgZm91bmQgPj0gbGltaXRcbiAgICAgICAgcmV0dXJuIGlmICRzY29wZS5tc2dzLnNlZW5bbXNnLmdldEhhc2goKV1cbiAgICAgICAgJHNjb3BlLm1zZ3MubGFzdCA9IG1zZy5zaWduZWREYXRhLnRpbWVzdGFtcCBpZiAhJHNjb3BlLm1zZ3MubGFzdCBvciBtc2cuc2lnbmVkRGF0YS50aW1lc3RhbXAgPCAkc2NvcGUubXNncy5sYXN0XG4gICAgICAgICRzY29wZS5tc2dzLnNlZW5bbXNnLmdldEhhc2goKV0gPSB0cnVlXG4gICAgICAgICRzY29wZS5wcm9jZXNzTWVzc2FnZXMgW21zZ11cbiAgICAgICAgJHNjb3BlLiRhcHBseSAtPlxuICAgICAgICAgICRzY29wZS5tc2dzLmxpc3QucHVzaCBtc2dcblxuICAgICAgJHNjb3BlLmZpbHRlcnMubGltaXQgKz0gbGltaXRcbiAgICAgIGlmICRzY29wZS5maWx0ZXJzLmxpbWl0ID4gJHNjb3BlLmZpbHRlcmVkTXNncy5sZW5ndGhcbiAgICAgICAgJHNjb3BlLmlyaXNJbmRleC5nZXRNZXNzYWdlc0J5VGltZXN0YW1wKHJlc3VsdEZvdW5kLCB1bmRlZmluZWQsIGN1cnNvcilcblxuICAgICRzY29wZS51cGxvYWRGaWxlID0gKGJsb2IpIC0+XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UgKHJlc29sdmUsIHJlamVjdCkgLT5cbiAgICAgICAgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICAgICAgZmlsZVJlYWRlci5vbmxvYWQgPSAoZXZlbnQpIC0+XG4gICAgICAgICAgYnVmZmVyID0gJHNjb3BlLmlwZnMudHlwZXMuQnVmZmVyLmZyb20oZXZlbnQudGFyZ2V0LnJlc3VsdClcbiAgICAgICAgICAkc2NvcGUuaXBmcy5hZGQgYnVmZmVyLCAoZXJyLCBmaWxlcykgLT5cbiAgICAgICAgICAgIGlmIGVyclxuICAgICAgICAgICAgICByZWplY3QoJ2FkZGluZyB0byBpcGZzIGZhaWxlZCcsIGVycilcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgcmVzb2x2ZShmaWxlcylcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cgJ2RvbmU6JywgZXJyLCBmaWxlc1xuICAgICAgICBmaWxlUmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGJsb2IpXG5cbiAgICAkc2NvcGUuY3JlYXRlVXNlciA9IChuYW1lKSAtPlxuICAgICAgcmV0dXJuIGlmIG5hbWUuaW5kZXhPZigneycpICE9IC0xIG9yIG5hbWUuaW5kZXhPZignfScpICE9IC0xICMgcHJldmVudCBhY2NpZGVudGFsIHByaXZhdGUga2V5IHBhc3RlXG4gICAgICBuYW1lID0gbmFtZS50cmltKClcbiAgICAgICRzY29wZS5jcmVhdGluZ1VzZXIgPSB0cnVlXG4gICAgICBzZWxmID0ge25hbWV9XG4gICAgICAkd2luZG93LmlyaXNMaWIuS2V5LmdlbmVyYXRlKClcbiAgICAgIC50aGVuIChrZXkpIC0+XG4gICAgICAgICRzY29wZS5wcml2YXRlS2V5ID0ga2V5XG4gICAgICAgICRzY29wZS5wcml2YXRlS2V5U2VyaWFsaXplZCA9ICR3aW5kb3cuaXJpc0xpYi5LZXkudG9TdHJpbmcoJHNjb3BlLnByaXZhdGVLZXkpXG4gICAgICAgIHNlbGYua2V5SUQgPSAkd2luZG93LmlyaXNMaWIuS2V5LmdldElkKCRzY29wZS5wcml2YXRlS2V5KVxuICAgICAgICAkc2NvcGUubG9naW5XaXRoS2V5KCRzY29wZS5wcml2YXRlS2V5U2VyaWFsaXplZCwgc2VsZilcbiAgICAgIC50aGVuIChtc2cpIC0+XG4gICAgICAgICRzY29wZS5jcmVhdGluZ1VzZXIgPSBmYWxzZVxuICAgICAgICAkc2NvcGUuY3JlYXRlTWVzc2FnZSB1bmRlZmluZWQsXG4gICAgICAgICAgdHlwZTogJ3JhdGluZydcbiAgICAgICAgICByYXRpbmc6IDFcbiAgICAgICAgICB0ZXh0OiAnVHJ1c3RlZCBieSBkZWZhdWx0IGFzIGEgd2ViIG9mIHRydXN0IGVudHJ5IHBvaW50LidcbiAgICAgICAgICByZWNpcGllbnQ6XG4gICAgICAgICAgICBrZXlJRDogJHNjb3BlLmRlZmF1bHRJbmRleEtleUlEXG4gICAgICAgICAgICBuYW1lOiAnSXJpcydcbiAgICAgIC5jYXRjaCAoZSkgLT5cbiAgICAgICAgY29uc29sZS5lcnJvcignZmFpbGVkIHRvIGNyZWF0ZSB1c2VyOicsIGUpXG4gICAgICAgICRzY29wZS5jcmVhdGluZ1VzZXIgPSBmYWxzZVxuXG4gICAgJHNjb3BlLmdlbmVyYXRlS2V5ID0gLT5cbiAgICAgICR3aW5kb3cuaXJpc0xpYi5LZXkuZ2VuZXJhdGUoKS50aGVuIChrZXkpIC0+XG4gICAgICAgICRzY29wZS4kYXBwbHkgLT5cbiAgICAgICAgICAkc2NvcGUucHJpdmF0ZUtleSA9IGtleVxuICAgICAgICAgICRzY29wZS5wcml2YXRlS2V5U2VyaWFsaXplZCA9ICR3aW5kb3cuaXJpc0xpYi5LZXkudG9TdHJpbmcoJHNjb3BlLnByaXZhdGVLZXkpXG5cbiAgICAkc2NvcGUuZG93bmxvYWQgPSAoZmlsZW5hbWUsIGRhdGEsIHR5cGUsIGNoYXJzZXQgPSAndXRmLTgnLCBocmVmKSAtPlxuICAgICAgaGlkZGVuRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgICAgaGlkZGVuRWxlbWVudC5ocmVmID0gaHJlZiBvciBcImRhdGE6I3t0eXBlfTtjaGFyc2V0PSN7Y2hhcnNldH0sI3tlbmNvZGVVUkkoZGF0YSl9XCJcbiAgICAgIGhpZGRlbkVsZW1lbnQudGFyZ2V0ID0gJ19ibGFuaydcbiAgICAgIGhpZGRlbkVsZW1lbnQuZG93bmxvYWQgPSBmaWxlbmFtZVxuICAgICAgaGlkZGVuRWxlbWVudC5jbGljaygpXG5cbiAgICAkc2NvcGUuZG93bmxvYWRUZXh0ID0gKHRleHQpIC0+XG4gICAgICAkc2NvcGUuZG93bmxvYWQoJ2lyaXNfcHJpdmF0ZV9rZXkudHh0JywgdGV4dCwgJ3RleHQvY3N2JywgJ3V0Zi04JylcblxuICAgICRzY29wZS5vcGVuTG9nb3V0TW9kYWwgPSAtPlxuICAgICAgJHNjb3BlLm9wZW5Nb2RhbCgnbG9nb3V0TW9kYWwnLCB7dGVtcGxhdGVVcmw6ICdhcHAvbWFpbi9sb2dvdXQubW9kYWwuaHRtbCd9KVxuXG4gICAgJHNjb3BlLmxvZ291dCA9IC0+XG4gICAgICAkc2NvcGUuaXJpc0luZGV4LnNldE9ubGluZShmYWxzZSlcbiAgICAgICRzY29wZS5maWx0ZXJzLm1heERpc3RhbmNlID0gMFxuICAgICAgJHNjb3BlLnByaXZhdGVLZXlTZXJpYWxpemVkID0gJydcbiAgICAgICRzY29wZS5hdXRoZW50aWNhdGlvbiA9IHt9XG4gICAgICBsb2NhbFN0b3JhZ2VTZXJ2aWNlLmNsZWFyQWxsKClcbiAgICAgICRzdGF0ZS5nbygnaWRlbnRpdGllcy5saXN0JylcbiAgICAgICRzY29wZS5wcml2YXRlS2V5ID0gbnVsbFxuICAgICAgJHNjb3BlLnB1YmxpY0tleSA9IG51bGxcbiAgICAgICRzY29wZS5sb2dvdXRNb2RhbC5jbG9zZSgpXG4gICAgICAkc2NvcGUubG9hZERlZmF1bHRJbmRleCgpXG4gICAgICAkc2NvcGUubG9jYWxTZXR0aW5ncyA9IHt9XG5cbiAgICAkc2NvcGUubXNnRmlsdGVyID0gKG1zZywgaW5kZXgsIGFycmF5KSAtPlxuICAgICAgZGF0YSA9IG1zZy5zaWduZWREYXRhXG4gICAgICByZXR1cm4gZmFsc2UgaWYgbXNnLnNpZ25lZERhdGEucmVwbHlUb1xuICAgICAgaWYgJHNjb3BlLmZpbHRlcnMudHlwZVxuICAgICAgICBpZiAkc2NvcGUuZmlsdGVycy50eXBlLm1hdGNoIC9ecmF0aW5nL1xuICAgICAgICAgIGlmIGRhdGEudHlwZSAhPSAncmF0aW5nJ1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgbmV1dHJhbFJhdGluZyA9IChkYXRhLm1heFJhdGluZyArIGRhdGEubWluUmF0aW5nKSAvIDJcbiAgICAgICAgICBpZiAkc2NvcGUuZmlsdGVycy50eXBlID09ICdyYXRpbmc6cG9zaXRpdmUnIGFuZCBkYXRhLnJhdGluZyA8PSBuZXV0cmFsUmF0aW5nXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICBlbHNlIGlmICRzY29wZS5maWx0ZXJzLnR5cGUgPT0gJ3JhdGluZzpuZWdhdGl2ZScgYW5kIGRhdGEucmF0aW5nID49IG5ldXRyYWxSYXRpbmdcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgIGVsc2UgaWYgJHNjb3BlLmZpbHRlcnMudHlwZSA9PSAncmF0aW5nOm5ldXRyYWwnIGFuZCBkYXRhLnJhdGluZyAhPSBuZXV0cmFsUmF0aW5nXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgZWxzZSBpZiAkc2NvcGUuZmlsdGVycy50eXBlID09ICd2ZXJpZmljYXRpb24nXG4gICAgICAgICAgcmV0dXJuIGRhdGEudHlwZSBpbiBbJ3ZlcmlmaWNhdGlvbicsICd1bnZlcmlmaWNhdGlvbiddXG4gICAgICAgIGVsc2UgaWYgZGF0YS50eXBlICE9ICRzY29wZS5maWx0ZXJzLnR5cGVcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIGlmICRzY29wZS5maWx0ZXJzLm1heERpc3RhbmNlID4gLTFcbiAgICAgICAgaWYgdHlwZW9mIG1zZy5hdXRob3JUcnVzdERpc3RhbmNlICE9ICdudW1iZXInXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIGlmICRzY29wZS5maWx0ZXJzLm1heERpc3RhbmNlID4gMCBhbmQgbXNnLmF1dGhvclRydXN0RGlzdGFuY2UgPiAkc2NvcGUuZmlsdGVycy5tYXhEaXN0YW5jZVxuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICBpZiAkc2NvcGUuZmlsdGVycy5tYXhEaXN0YW5jZSA9PSAwIGFuZCBtc2cuYXV0aG9yVHJ1c3REaXN0YW5jZSA9PSA5OVxuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgcmV0dXJuIHRydWVcblxuICAgICRzY29wZS5yZW1vdmVGb2N1cyA9IChldmVudCkgLT5cbiAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuYmx1cigpXG5cbiAgICAkc2NvcGUuc2V0TXNnUmF3RGF0YSA9IChtc2cpIC0+XG4gICAgICBzaG93UmF3RGF0YSA9XG4gICAgICAgIGhhc2g6IG1zZy5oYXNoXG4gICAgICAgIGRhdGE6IG1zZy5zaWduZWREYXRhXG4gICAgICAgIHByaW9yaXR5OiBtc2cucHJpb3JpdHlcbiAgICAgICAgandzOiBtc2cuandzXG4gICAgICBtc2cuc3RyRGF0YSA9IEpTT04uc3RyaW5naWZ5KHNob3dSYXdEYXRhLCB1bmRlZmluZWQsIDIpXG5cbiAgICAkc2NvcGUuc2hhcmVNZXNzYWdlID0gKG1zZywgY29tbWVudCkgLT5cbiAgICAgICRzY29wZS5jcmVhdGVNZXNzYWdlKG51bGwsIHsgdHlwZTogJ3Bvc3QnLCBzaGFyZWRNc2c6IG1zZy5nZXRIYXNoKCksIGNvbW1lbnQgfSkudGhlbiAocikgLT5cbiAgICAgICAgbXNnLnNoYXJlcyA9IG1zZy5zaGFyZXMgb3Ige31cbiAgICAgICAgbXNnLnNoYXJlc1tyLmdldEhhc2goKV0gPSByXG4gICAgICAgIG1zZy5zaGFyZXNBcnIgPSBtc2cuc2hhcmVzQXJyIG9yIFtdXG4gICAgICAgIG1zZy5zaGFyZXNBcnIucHVzaChyKVxuICAgICAgJHNjb3BlLnNoYXJlTW9kYWwuY2xvc2UoKVxuXG4gICAgJHNjb3BlLm1zZ1V0aWxzID1cbiAgICAgIGxpa2U6IChtc2cpIC0+XG4gICAgICAgIGlmIG1zZy5saWtlZFxuICAgICAgICAgIG1zZy5saWtlZCA9IGZhbHNlXG4gICAgICAgICAgbXNnLmxpa2VzID0gaWYgbXNnLmxpa2VzIHRoZW4gbXNnLmxpa2VzIC0gMSBlbHNlIDBcbiAgICAgICAgICAkc2NvcGUuaXJpc0luZGV4LnNldFJlYWN0aW9uKG1zZywgbnVsbClcbiAgICAgICAgZWxzZVxuICAgICAgICAgIG1zZy5saWtlZCA9IHRydWVcbiAgICAgICAgICBtc2cubGlrZXMgPSBpZiBtc2cubGlrZXMgdGhlbiBtc2cubGlrZXMgKyAxIGVsc2UgMVxuICAgICAgICAgICRzY29wZS5pcmlzSW5kZXguc2V0UmVhY3Rpb24obXNnLCAnbGlrZScpXG4gICAgICBzaGFyZTogKG1zZykgLT5cbiAgICAgICAgJHNjb3BlLm1lc3NhZ2UgPSBtc2dcbiAgICAgICAgJHNjb3BlLm9wZW5Nb2RhbCAnc2hhcmVNb2RhbCcsIHsgdGVtcGxhdGVVcmw6ICdhcHAvbWVzc2FnZXMvc2hhcmUubW9kYWwuaHRtbCcsIHNpemU6ICdtZCcgfVxuICAgICAgcmVwbHlUbzogKG1zZywgcmVwbHkpIC0+XG4gICAgICAgICRzY29wZS5jcmVhdGVNZXNzYWdlKG51bGwsIHtcbiAgICAgICAgICB0eXBlOiAncG9zdCcsXG4gICAgICAgICAgcmVwbHlUbzogbXNnLmdldEhhc2goKVxuICAgICAgICAgIGNvbW1lbnQ6IHJlcGx5XG4gICAgICAgIH0pLnRoZW4gKHIpIC0+XG4gICAgICAgICAgbXNnLnJlcGxpZXMgPSBtc2cucmVwbGllcyBvciB7fVxuICAgICAgICAgIG1zZy5yZXBsaWVzW3IuZ2V0SGFzaCgpXSA9IHJcbiAgICAgICAgICBtc2cucmVwbGllc0FyciA9IG1zZy5yZXBsaWVzQXJyIG9yIFtdXG4gICAgICAgICAgbXNnLnJlcGxpZXNBcnIucHVzaChyKVxuXG4gICAgJHNjb3BlLm9wZW5NZXNzYWdlID0gKGV2ZW50LCBtZXNzYWdlLCBzaXplKSAtPlxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCkgaWYgZXZlbnRcbiAgICAgIHQgPSBldmVudC50YXJnZXRcbiAgICAgIHJldHVybiBpZiBhbmd1bGFyLmVsZW1lbnQodCkuY2xvc2VzdCgnYScpLmxlbmd0aFxuICAgICAgJHNjb3BlLnNldE1zZ1Jhd0RhdGEobWVzc2FnZSlcbiAgICAgICRzY29wZS5tZXNzYWdlID0gbWVzc2FnZVxuICAgICAgIyBUT0RPOiBjaGVjayBzaWdcbiAgICAgICRzY29wZS5tZXNzYWdlLnJlY2lwaWVudCA9ICRzY29wZS5tZXNzYWdlLmdldFJlY2lwaWVudCgkc2NvcGUuaXJpc0luZGV4KVxuICAgICAgJHNjb3BlLm1lc3NhZ2UucmVjaXBpZW50Lmd1bi5nZXQoJ2F0dHJzJykub3BlbiAoZCkgLT5cbiAgICAgICAgbXZhID0gJHdpbmRvdy5pcmlzTGliLklkZW50aXR5LmdldE1vc3RWZXJpZmllZEF0dHJpYnV0ZXMoZClcbiAgICAgICAgaWYgbXZhLm5hbWVcbiAgICAgICAgICAkc2NvcGUuJGFwcGx5IC0+ICRzY29wZS5tZXNzYWdlLnJlY2lwaWVudF9uYW1lID0gbXZhLm5hbWUuYXR0cmlidXRlLnZhbHVlXG4gICAgICAgIGVsc2UgaWYgbXZhLm5pY2tuYW1lXG4gICAgICAgICAgJHNjb3BlLiRhcHBseSAtPiAkc2NvcGUubWVzc2FnZS5yZWNpcGllbnRfbmFtZSA9IG12YS5uaWNrbmFtZS5hdHRyaWJ1dGUudmFsdWVcbiAgICAgICRzY29wZS5tZXNzYWdlLnNpZ25lcktleUlEID0gJHNjb3BlLm1lc3NhZ2UuZ2V0U2lnbmVyS2V5SUQoKVxuICAgICAgJHNjb3BlLm1lc3NhZ2UudmVyaWZpZWRCeSA9ICRzY29wZS5pcmlzSW5kZXguZ2V0KCdrZXlJRCcsICRzY29wZS5tZXNzYWdlLnNpZ25lcktleUlEKVxuICAgICAgJHNjb3BlLm1lc3NhZ2UudmVyaWZpZWRCeUF0dHIgPSBuZXcgJHdpbmRvdy5pcmlzTGliLkF0dHJpYnV0ZSgna2V5SUQnLCAkc2NvcGUubWVzc2FnZS5zaWduZXJLZXlJRClcbiAgICAgICRzY29wZS5vcGVuTW9kYWwoJ2NoYXRNb2RhbCcsIHt0ZW1wbGF0ZVVybDogJ2FwcC9tZXNzYWdlcy9zaG93Lm1vZGFsLmh0bWwnfSlcblxuICAgIHVubGVzcyAkc2NvcGUuZmlsdGVyc1xuICAgICAgJHNjb3BlLmZpbHRlcnMgPSBPYmplY3QuYXNzaWduIHt9LCBjb25maWcuZGVmYXVsdEZpbHRlcnNcblxuICAgICRzY29wZS5pc0NvbGxhcHNlZCA9IGZhbHNlXG4gICAgIyAkc2NvcGUubWVudSA9IE1lbnVzLmdldE1lbnUoJ3RvcGJhcicpXG5cbiAgICAkc2NvcGUudG9nZ2xlQ29sbGFwc2libGVNZW51ID0gLT5cbiAgICAgICRzY29wZS5pc0NvbGxhcHNlZCA9ICEkc2NvcGUuaXNDb2xsYXBzZWRcblxuICAgICRzY29wZS5wcm9jZXNzTWVzc2FnZXMgPSAobWVzc2FnZXMsIG1zZ09wdGlvbnMgPSB7fSwgb3B0aW9ucyA9IHt9KSAtPlxuICAgICAgYW5ndWxhci5mb3JFYWNoIG1lc3NhZ2VzLCAobXNnLCBrZXkpIC0+XG4gICAgICAgIG1zZ1trXSA9IHYgZm9yIGssIHYgb2YgbXNnT3B0aW9uc1xuICAgICAgICBtc2cuYXV0aG9yID0gbXNnLmdldEF1dGhvcigkc2NvcGUuaXJpc0luZGV4KVxuICAgICAgICBtc2cuYXV0aG9yLmd1bi5nZXQoJ3RydXN0RGlzdGFuY2UnKS5vbiAoZCkgLT4gbXNnLmF1dGhvclRydXN0RGlzdGFuY2UgPSBkXG4gICAgICByZXR1cm4gbWVzc2FnZXNcblxuICAgIHNjcm9sbFRvID0gKGVsKSAtPlxuICAgICAgaWYgIWVsXG4gICAgICAgIHJldHVyblxuICAgICAgcG9zID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgIGlmIHBvcy50b3BcbiAgICAgICAgaWYgcG9zLnRvcCAtIDYwIDwgJHdpbmRvdy5wYWdlWU9mZnNldFxuICAgICAgICAgICR3aW5kb3cuc2Nyb2xsVG8gMCwgcG9zLnRvcCAtIDYwXG4gICAgICAgIGVsc2UgaWYgcG9zLmJvdHRvbSA+ICR3aW5kb3cucGFnZVlPZmZzZXQgKyAoJHdpbmRvdy5pbm5lckhlaWdodCBvciBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KVxuICAgICAgICAgICR3aW5kb3cuc2Nyb2xsVG8gMCwgcG9zLmJvdHRvbSAtICgkd2luZG93LmlubmVySGVpZ2h0IG9yIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpICsgMTVcbiAgICAgIHJldHVyblxuXG4gICAgIyBzaG91bGQgYmUgbW92ZWQgdG8gaXJpcy1saWI/XG4gICAgJHNjb3BlLnNldElkZW50aXR5TmFtZXMgPSAoaSwgaHRtbFNhZmUsIHNldFRpdGxlKSAtPlxuICAgICAgaS53ZWxsVmVyaWZpZWQgPSBmYWxzZVxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIChyZXNvbHZlKSAtPlxuICAgICAgICBpLmd1bi5nZXQoJ2F0dHJzJykub3BlbiAoYXR0cnMpIC0+XG4gICAgICAgICAgJHNjb3BlLiRhcHBseSAtPlxuICAgICAgICAgICAgbXZhID0gJHdpbmRvdy5pcmlzTGliLklkZW50aXR5LmdldE1vc3RWZXJpZmllZEF0dHJpYnV0ZXMoYXR0cnMpXG4gICAgICAgICAgICBpZiBtdmEubmFtZVxuICAgICAgICAgICAgICBpLnByaW1hcnlOYW1lID0gbXZhLm5hbWUuYXR0cmlidXRlLnZhbHVlXG4gICAgICAgICAgICAgIGkuaGFzUHJvcGVyTmFtZSA9IHRydWVcbiAgICAgICAgICAgICAgaS53ZWxsVmVyaWZpZWQgPSB0cnVlIGlmIG12YS5uYW1lLndlbGxWZXJpZmllZFxuICAgICAgICAgICAgZWxzZSBpZiBtdmEubmlja25hbWVcbiAgICAgICAgICAgICAgaS5wcmltYXJ5TmFtZSA9IG12YS5uaWNrbmFtZS5hdHRyaWJ1dGUudmFsdWVcbiAgICAgICAgICAgICAgaS5oYXNQcm9wZXJOYW1lID0gdHJ1ZVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICBhID0gT2JqZWN0LnZhbHVlcyhhdHRycylbMF1cbiAgICAgICAgICAgICAgaS5wcmltYXJ5TmFtZSA9IGEudmFsdWVcbiAgICAgICAgICAgICAgaS5wcmltYXJ5TmFtZSA9IGkucHJpbWFyeU5hbWUuc2xpY2UoMCw2KSArICcuLi4nIGlmIGEudHlwZSBpbiBbJ2tleUlEJywgJ3V1aWQnXVxuICAgICAgICAgICAgaWYgaS5wcmltYXJ5TmFtZVxuICAgICAgICAgICAgICBpZiBtdmEubmlja25hbWUgYW5kIG12YS5uaWNrbmFtZS5hdHRyaWJ1dGUudmFsdWUgIT0gaS5wcmltYXJ5TmFtZVxuICAgICAgICAgICAgICAgIGkubmlja25hbWUgPSBtdmEubmlja25hbWUuYXR0cmlidXRlLnZhbHVlXG4gICAgICAgICAgICAgICAgaS5uaWNrbmFtZSA9IGkubmlja25hbWUucmVwbGFjZSgnPCcsICcmbHQ7JykgaWYgaHRtbFNhZmVcbiAgICAgICAgICAgICAgaS5wcmltYXJ5TmFtZSA9IGkucHJpbWFyeU5hbWUucmVwbGFjZSgnPCcsICcmbHQ7JykgaWYgaHRtbFNhZmVcbiAgICAgICAgICAgICRzY29wZS5zZXRQYWdlVGl0bGUgaS5wcmltYXJ5TmFtZSBpZiBzZXRUaXRsZVxuICAgICAgICAgICAgcmVzb2x2ZSBpLnByaW1hcnlOYW1lXG5cbiAgICAkc2NvcGUuc2VhcmNoS2V5ZG93biA9IChldmVudCkgLT5cbiAgICAgIHN3aXRjaCAoaWYgZXZlbnQgdGhlbiBldmVudC53aGljaCBlbHNlIC0xKVxuICAgICAgICB3aGVuIDM4XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGlmICRzY29wZS5pZHMuYWN0aXZlS2V5ID4gLTFcbiAgICAgICAgICAgICRzY29wZS5hZGRFbnRyeUFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgICAkc2NvcGUuaWRzLmFjdGl2ZUtleS0tXG4gICAgICAgICAgICBpZCA9IGlmICRzY29wZS5pZHMuYWN0aXZlS2V5ID4gLTEgdGhlbiAncmVzdWx0JyArICRzY29wZS5pZHMuYWN0aXZlS2V5IGVsc2UgJ2NyZWF0ZUlkUm93J1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnNjcm9sbEludG9WaWV3KClcbiAgICAgICAgd2hlbiA0MFxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICBpZiAoJHNjb3BlLmlkcy5hY3RpdmVLZXkgPCAoJHNjb3BlLmlkcy5saXN0Lmxlbmd0aCkgLSAxKSBhbmQgJHNjb3BlLmlkcy5hY3RpdmVLZXkgPCAkc2NvcGUuZmlsdGVycy5saW1pdFxuICAgICAgICAgICAgJHNjb3BlLmlkcy5hY3RpdmVLZXkrK1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQnICsgJHNjb3BlLmlkcy5hY3RpdmVLZXkpLnNjcm9sbEludG9WaWV3KClcbiAgICAgICAgd2hlbiAxM1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICBpZiAkc2NvcGUuaWRzLmFjdGl2ZUtleSA9PSAtMVxuICAgICAgICAgICAgJHN0YXRlLmdvICdpZGVudGl0aWVzLmNyZWF0ZSdcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0JyArICRzY29wZS5pZHMuYWN0aXZlS2V5KS5jbGljaygpXG4gICAgICAgIHdoZW4gLTFcbiAgICAgICAgICBjbGVhclRpbWVvdXQgJHNjb3BlLnRpbWVyXG4gICAgICAgICAgJHNjb3BlLnF1ZXJ5LnRlcm0gPSAnJ1xuICAgICAgICAgICRzY29wZS5zZWFyY2goKVxuICAgICAgICB3aGVuIDMzLCAzNCwgMzUsIDM2LCAzNywgMzlcbiAgICAgICAgZWxzZVxuICAgICAgICAgIGVsID0gYW5ndWxhci5lbGVtZW50KGV2ZW50LmN1cnJlbnRUYXJnZXQpXG4gICAgICAgICAgY2xlYXJUaW1lb3V0ICRzY29wZS50aW1lclxuICAgICAgICAgIHdhaXQgPSBzZXRUaW1lb3V0KCgtPlxuICAgICAgICAgICAgJHNjb3BlLnF1ZXJ5LnRlcm0gPSBlbC52YWwoKVxuICAgICAgICAgICAgJHNjb3BlLnNlYXJjaCgpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICApLCAzMDApXG4gICAgICAgICAgJHNjb3BlLnRpbWVyID0gd2FpdFxuICAgICAgICAgIGJyZWFrXG5cbiAgICAkc2NvcGUuZHJvcGRvd25TZWFyY2hTZWxlY3QgPSAoaXRlbSkgLT5cbiAgICAgICRzdGF0ZS5nbygnaWRlbnRpdGllcy5zaG93JywgeyB0eXBlOiBpdGVtLmxpbmtUby50eXBlLCB2YWx1ZTogaXRlbS5saW5rVG8udmFsdWUgfSlcbiAgICAgICRzY29wZS5xdWVyeS50ZXJtID0gJydcblxuICAgICRzY29wZS5hZGRHdW5QZWVyID0gKHVybCkgLT5cbiAgICAgICRzY29wZS5ndW4ub3B0KHtwZWVyczogW3VybF19KTsgIyBUT0RPOiB2YWxpZGF0ZSB1cmxcblxuICAgICRzY29wZS5yZW1vdmVHdW5QZWVyID0gKHVybCkgLT5cbiAgICAgIHBlZXIgPSAkc2NvcGUuZ3VuLl8ub3B0LnBlZXJzW3VybF0gIyBnZXQgdGhlIHBlZXIgeW91IHdhbnRcbiAgICAgIHBlZXIudXJsID0gcGVlci5pZCA9IG51bGwgIyB0aGlzIHByZXZlbnRzIHJlY29ubmVjdGluZyB0byBVUkxcbiAgICAgIHBlZXIud2lyZS5jbG9zZSgpICMgaWYgd2Vic29ja2V0IGludGVyZmFjZVxuICAgICAgZGVsZXRlICRzY29wZS5ndW4uXy5vcHQucGVlcnNbdXJsXSAjIHJlbW92ZSBmcm9tIHBlZXIgbGlzdFxuXG4gICAgJHNjb3BlLmFkZElwZnNQZWVyID0gKHVybCkgLT5cbiAgICAgICRzY29wZS5pcGZzLmJvb3RzdHJhcC5hZGQgdXJsXG4gICAgICAkc2NvcGUuaXBmcy5zd2FybS5jb25uZWN0KHVybCkudGhlbiAtPlxuICAgICAgICAkc2NvcGUudXBkYXRlSXBmc1BlZXJzKClcblxuICAgICRzY29wZS5hZGREZWZhdWx0SXBmc1BlZXJzID0gLT5cbiAgICAgICRzY29wZS5pcGZzLmJvb3RzdHJhcC5hZGQoJycsIHtkZWZhdWx0OiB0cnVlfSkudGhlbiAtPiAjIFRPRE86IGVycm9yc1xuICAgICAgICAkc2NvcGUudXBkYXRlSXBmc1BlZXJzKClcblxuICAgICRzY29wZS5yZW1vdmVJcGZzUGVlciA9ICh1cmwpIC0+XG4gICAgICAkc2NvcGUuaXBmcy5ib290c3RyYXAucm0gdXJsXG4gICAgICAkc2NvcGUuaXBmcy5zd2FybS5kaXNjb25uZWN0KHVybCkudGhlbiAtPlxuICAgICAgICAkc2NvcGUudXBkYXRlSXBmc1BlZXJzKClcblxuICAgICRzY29wZS5ub3RpZmljYXRpb25zQWxsb3dlZCA9IHdpbmRvdy5Ob3RpZmljYXRpb24gYW5kIE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uID09ICdncmFudGVkJ1xuXG4gICAgJHNjb3BlLnN1YnNjcmliZVRvTm90aWZpY2F0aW9ucyA9IC0+XG4gICAgICBpZiB3aW5kb3cuTm90aWZpY2F0aW9uXG4gICAgICAgIE5vdGlmaWNhdGlvbi5yZXF1ZXN0UGVybWlzc2lvbiAoc3RhdHVzKSAtPlxuICAgICAgICAgICRzY29wZS4kYXBwbHkgLT5cbiAgICAgICAgICAgICRzY29wZS5ub3RpZmljYXRpb25zQWxsb3dlZCA9IHN0YXR1cyA9PSAnZ3JhbnRlZCdcbl1cbiJdfQ==

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
    loadChatMessages,
    s,
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
      s = $location.search();
      if (s.share) {
        $scope.share = true;
      }
      if (s.stream) {
        $scope.stream = true;
      }
      if ($scope.query.term.length && $state.is('identities.list')) {
        $scope.query.term = '';
        $scope.search();
      }
      if ($state.is('identities.show')) {
        $scope.filters.maxDistance = 0;
        $scope.filters.type = null;
        if ($scope.stream && !$scope.videoChatModal) {
          $scope.openVideoChatModal();
        }
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
      $scope.createChat = function(chatName) {
        var msg,
    uuid;
        if (!(chatName && chatName.length > 0)) {
          return;
        }
        uuid = $window.irisLib.Attribute.getUuid().value;
        $scope.irisIndex.gun.user().get('iris').get('chatMessagesByUuid').get(uuid).put({});
        msg = {
          type: 'verification',
          recipient: {
            uuid: uuid,
            name: chatName,
            type: 'group'
          }
        };
        $scope.createMessage(void 0,
    msg);
        return $state.go('chats.show',
    {
          type: 'uuid',
          value: uuid
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
      $scope.idType = $stateParams.type;
      $scope.idValue = $stateParams.value;
      $scope.showChatButton = !$scope.isCurrentUser && ($scope.idType === 'keyID' || $scope.idType === 'uuid');
      $scope.findOne = function() {
        if (!$scope.irisIndex) {
          return;
        }
        $scope.idAttr = new $window.irisLib.Attribute($scope.idType,
    $scope.idValue);
        $scope.idUrl = $scope.getIdUrl($scope.idType,
    $scope.idValue);
        $scope.isCurrentUser = $scope.authentication && $scope.authentication.user && $scope.idType === $scope.authentication.user.idType && $scope.idValue === $scope.authentication.user.idValue;
        if ($scope.isCurrentUser && $state.is('identities.show')) {
          NotificationService.markPostsSeen();
        }
        if ($state.includes('chats')) {
          NotificationService.markChatsSeen();
        }
        $scope.isUniqueType = function() {
          return $window.irisLib.Attribute.isUniqueType($scope.idType) || $scope.idType === 'channel';
        };
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
        return $scope.identity.gun.get('scores').open(function(scores) {
          return $scope.scores = scores;
        });
      };
      loadChatMessages = function() {
        var onMessage;
        $scope.chatMessages = [];
        onMessage = function(msg) {
          return $scope.$apply(function() {
            if (msg) {
              return $scope.chatMessages.push(msg);
            }
          });
        };
        if ($scope.idType === 'keyID') {
          if ($scope.authentication.user) {
            $scope.chat = new $window.irisLib.Chat({
              onMessage: onMessage,
              key: $scope.privateKey,
              gun: $scope.gun,
              participants: $scope.idValue
            });
            $scope.sendChatMessage = function(text) {
              var m,
    t;
              t = new Date().getTime();
              m = {
                author: $scope.viewpoint.identity.primaryName,
                text: text,
                time: t
              };
              return $scope.chat.send(m);
            };
          }
          $scope.irisIndex.getOnline($scope.idValue,
    function(res) {
            $scope.isOnline = res.isOnline;
            if (!res.isOnline) {
              return $scope.lastActive = res.lastActive;
            }
          });
        }
        if ($scope.idType === 'uuid') {
          $scope.irisIndex.getChatMsgs($scope.idValue,
    {
            callback: onMessage
          });
          return $scope.sendChatMessage = function(text) {
            var msg;
            msg = {};
            msg.type = 'chat';
            msg.text = text;
            msg.recipient = {
              uuid: $scope.idValue
            };
            $scope.createMessage(void 0,
    msg);
            return console.log('send public chat msg',
    msg);
          };
        }
      };
      load = function() {
        if ($scope.irisIndex) {
          if ($state.is('identities.show')) {
            $scope.findOne();
          }
          if ($state.is('identities.create')) {
            focus('idNameFocus');
            $scope.newEntry.name = $scope.capitalizeWords($scope.query.term);
          }
          if ($state.is('chats.show')) {
            $scope.findOne();
            return loadChatMessages();
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdGllcy9pZGVudGl0aWVzLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzIjpbImlkZW50aXRpZXMvaWRlbnRpdGllcy5jb250cm9sbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLGFBQUE7O0VBRUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxhQUFmLENBQTZCLENBQUMsVUFBOUIsQ0FBeUMsc0JBQXpDLEVBQWlFO0lBQy9ELFFBRCtEO0lBRS9ELFFBRitEO0lBRy9ELFlBSCtEO0lBSS9ELFNBSitEO0lBSy9ELGNBTCtEO0lBTS9ELGNBTitEO0lBTy9ELFdBUCtEO0lBUS9ELE9BUitEO0lBUy9ELElBVCtEO0lBVS9ELFVBVitEO0lBVy9ELFdBWCtEOztJQWEvRCxRQWIrRDtJQWMvRCxxQkFkK0Q7SUFlL0QsT0FmK0Q7SUFnQi9ELHFCQWhCK0Q7SUFpQi9ELFFBQUEsQ0FBQyxNQUFEO0lBQVMsTUFBVDtJQUFpQixVQUFqQjtJQUE2QixPQUE3QjtJQUFzQyxZQUF0QztJQUFvRCxZQUFwRDtJQUFrRSxTQUFsRTtJQUE2RSxLQUE3RTtJQUFvRixFQUFwRjtJQUF3RixRQUF4RjtJQUFrRyxTQUFsRztJQUE2RyxNQUE3RztJQUNBLG1CQURBO0lBQ3FCLEtBRHJCO0lBQzRCLG1CQUQ1QixDQUFBLEVBQUE7QUFFRSxVQUFBLElBQUE7SUFBQSxnQkFBQTtJQUFBLENBQUE7SUFBQSxhQUFBO0lBQUE7TUFBQSxNQUFNLENBQUMsUUFBUCxHQUFrQixDQUFBO01BQ2xCLE1BQU0sQ0FBQyxTQUFQLEdBQW1CO01BQ25CLE1BQU0sQ0FBQyxXQUFQLEdBQXFCLFFBQUEsQ0FBQyxLQUFELENBQUE7ZUFBVyxNQUFNLENBQUMsU0FBUCxHQUFtQjtNQUE5QjtNQUNyQixNQUFNLENBQUMsSUFBUCxHQUFjO01BQ2QsTUFBTSxDQUFDLFFBQVAsR0FDRTtRQUFBLElBQUEsRUFBTSxFQUFOO1FBQ0EsSUFBQSxFQUFNLENBQUE7TUFETjtNQUVGLE1BQU0sQ0FBQyxV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ZDtVQUNFLElBQUEsR0FBTyxrQkFBQSxDQUFtQixDQUFFLENBQUEsQ0FBQyxDQUFDLE1BQUYsR0FBVyxDQUFYLENBQXJCO1VBQ1AsS0FBQSxHQUFRLGtCQUFBLENBQW1CLENBQUUsQ0FBQSxDQUFDLENBQUMsTUFBRixHQUFXLENBQVgsQ0FBYSxDQUFDLEtBQWhCLENBQXNCLEdBQXRCLENBQTJCLENBQUEsQ0FBQSxDQUE5QztVQUNSLE9BQU8sQ0FBQyxHQUFSLENBQVksT0FBWjtJQUFxQixLQUFyQjtVQUNBLE9BQU8sQ0FBQyxHQUFSLENBQVksTUFBWjtJQUFvQixJQUFwQjtpQkFDQSxNQUFNLENBQUMsRUFBUCxDQUFVLGlCQUFWO0lBQTZCLENBQUMsSUFBRDtJQUFPLEtBQVAsQ0FBN0IsRUFMRjtTQUFBLE1BQUE7aUJBT0UsT0FBTyxDQUFDLEdBQVIsQ0FBWSwyQkFBWjtJQUF5QyxJQUF6QyxFQVBGOztNQUZxQjthQVV2QixNQUFNLENBQUMsV0FBUCxHQUFxQixRQUFBLENBQUMsQ0FBRCxDQUFBLEVBQUE7SUFoV3ZCLENBakIrRDtHQUFqRTs7RUFGQTs7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuIyBJZGVudGl0aWVzIGNvbnRyb2xsZXJcbmFuZ3VsYXIubW9kdWxlKCdpcmlzQW5ndWxhcicpLmNvbnRyb2xsZXIgJ0lkZW50aXRpZXNDb250cm9sbGVyJywgW1xuICAnJHNjb3BlJ1xuICAnJHN0YXRlJ1xuICAnJHJvb3RTY29wZSdcbiAgJyR3aW5kb3cnXG4gICckc3RhdGVQYXJhbXMnXG4gICckdHJhbnNpdGlvbnMnXG4gICckbG9jYXRpb24nXG4gICckaHR0cCdcbiAgJyRxJ1xuICAnJHRpbWVvdXQnXG4gICckdWliTW9kYWwnXG4gICMgJ0F1dGhlbnRpY2F0aW9uJ1xuICAnY29uZmlnJ1xuICAnbG9jYWxTdG9yYWdlU2VydmljZSdcbiAgJ2ZvY3VzJ1xuICAnTm90aWZpY2F0aW9uU2VydmljZSdcbiAgKCRzY29wZSwgJHN0YXRlLCAkcm9vdFNjb3BlLCAkd2luZG93LCAkc3RhdGVQYXJhbXMsICR0cmFuc2l0aW9ucywgJGxvY2F0aW9uLCAkaHR0cCwgJHEsICR0aW1lb3V0LCAkdWliTW9kYWwsIGNvbmZpZyxcbiAgbG9jYWxTdG9yYWdlU2VydmljZSwgZm9jdXMsIE5vdGlmaWNhdGlvblNlcnZpY2UpIC0+ICMsIEF1dGhlbnRpY2F0aW9uXG4gICAgJHNjb3BlLm5ld0VudHJ5ID0ge31cbiAgICAkc2NvcGUuYWN0aXZlVGFiID0gMVxuICAgICRzY29wZS5hY3RpdmF0ZVRhYiA9ICh0YWJJZCkgLT4gJHNjb3BlLmFjdGl2ZVRhYiA9IHRhYklkXG4gICAgJHNjb3BlLnNlbnQgPSBbXVxuICAgICRzY29wZS5yZWNlaXZlZCA9XG4gICAgICBsaXN0OiBbXVxuICAgICAgc2Vlbjoge31cbiAgICAkc2NvcGUuYXR0cmlidXRlcyA9IFtdXG4gICAgdGh1bWJzVXBPYmogPSB7fVxuICAgIHRodW1ic0Rvd25PYmogPSB7fVxuICAgICRzY29wZS50aHVtYnNVcCA9IFtdXG4gICAgJHNjb3BlLnRodW1ic0Rvd24gPSBbXVxuICAgICRzY29wZS52ZXJpZmljYXRpb25zID0gW11cbiAgICAkc2NvcGUucXVlcnkudGVybSA9ICRzdGF0ZVBhcmFtcy5zZWFyY2ggaWYgJHN0YXRlUGFyYW1zLnNlYXJjaFxuICAgICRzY29wZS5uZXdWZXJpZmljYXRpb24gPVxuICAgICAgdHlwZTogJydcbiAgICAgIHZhbHVlOiAnJ1xuICAgICRzY29wZS5jb2xsYXBzZUxldmVsID0ge31cbiAgICAkc2NvcGUuY29sbGFwc2VGaWx0ZXJzID0gJHdpbmRvdy5pbm5lcldpZHRoIDwgOTkyXG4gICAgJHNjb3BlLnNsaWRlciA9XG4gICAgICBvcHRpb25zOlxuICAgICAgICBmbG9vcjogLTNcbiAgICAgICAgY2VpbDogM1xuICAgICAgICBoaWRlUG9pbnRlckxhYmVsczogdHJ1ZVxuICAgICAgICBoaWRlTGltaXRMYWJlbHM6IHRydWVcbiAgICAgICAgZGlzYWJsZUFuaW1hdGlvbjogdHJ1ZVxuXG4gICAgcyA9ICRsb2NhdGlvbi5zZWFyY2goKVxuICAgICRzY29wZS5zaGFyZSA9IHRydWUgaWYgcy5zaGFyZVxuICAgICRzY29wZS5zdHJlYW0gPSB0cnVlIGlmIHMuc3RyZWFtXG5cbiAgICBpZiAkc2NvcGUucXVlcnkudGVybS5sZW5ndGggYW5kICRzdGF0ZS5pcyAnaWRlbnRpdGllcy5saXN0J1xuICAgICAgJHNjb3BlLnF1ZXJ5LnRlcm0gPSAnJ1xuICAgICAgJHNjb3BlLnNlYXJjaCgpXG5cbiAgICBpZiAkc3RhdGUuaXMgJ2lkZW50aXRpZXMuc2hvdydcbiAgICAgICRzY29wZS5maWx0ZXJzLm1heERpc3RhbmNlID0gMFxuICAgICAgJHNjb3BlLmZpbHRlcnMudHlwZSA9IG51bGxcbiAgICAgICRzY29wZS5vcGVuVmlkZW9DaGF0TW9kYWwoKSBpZiAkc2NvcGUuc3RyZWFtIGFuZCBub3QgJHNjb3BlLnZpZGVvQ2hhdE1vZGFsXG5cbiAgICAkc2NvcGUuYWRkRW50cnkgPSAoZXZlbnQsIGVudHJ5KSAtPlxuICAgICAgaWYgZW50cnkuZW1haWxcbiAgICAgICAgbGlua1RvID0ge3R5cGU6J2VtYWlsJywgdmFsdWU6IGVudHJ5LmVtYWlsfVxuICAgICAgZWxzZSBpZiBlbnRyeS51cmxcbiAgICAgICAgbGlua1RvID0ge3R5cGU6J3VybCcsIHZhbHVlOiBlbnRyeS51cmx9XG4gICAgICBlbHNlXG4gICAgICAgIGxpbmtUbyA9ICR3aW5kb3cuaXJpc0xpYi5BdHRyaWJ1dGUuZ2V0VXVpZCgpXG4gICAgICAgIGVudHJ5LnV1aWQgPSBsaW5rVG8udmFsdWVcbiAgICAgIHBhcmFtcyA9XG4gICAgICAgIHR5cGU6ICd2ZXJpZmljYXRpb24nXG4gICAgICAgIHJlY2lwaWVudDogZW50cnlcbiAgICAgICRzY29wZS5jcmVhdGVNZXNzYWdlKGV2ZW50LCBwYXJhbXMpLnRoZW4gKHJlc3BvbnNlKSAtPlxuICAgICAgICAkc3RhdGUuZ28gJ2lkZW50aXRpZXMuc2hvdycsIGxpbmtUb1xuICAgICAgLCAoZXJyb3IpIC0+XG4gICAgICAgIGNvbnNvbGUubG9nIFwiZXJyb3JcIiwgZXJyb3JcblxuICAgICRzY29wZS5jcmVhdGVDaGF0ID0gKGNoYXROYW1lKSAtPlxuICAgICAgcmV0dXJuIHVubGVzcyBjaGF0TmFtZSBhbmQgY2hhdE5hbWUubGVuZ3RoID4gMFxuICAgICAgdXVpZCA9ICR3aW5kb3cuaXJpc0xpYi5BdHRyaWJ1dGUuZ2V0VXVpZCgpLnZhbHVlXG4gICAgICAkc2NvcGUuaXJpc0luZGV4Lmd1bi51c2VyKCkuZ2V0KCdpcmlzJykuZ2V0KCdjaGF0TWVzc2FnZXNCeVV1aWQnKS5nZXQodXVpZCkucHV0KHt9KVxuICAgICAgbXNnID1cbiAgICAgICAgdHlwZTogJ3ZlcmlmaWNhdGlvbidcbiAgICAgICAgcmVjaXBpZW50OlxuICAgICAgICAgIHV1aWQ6IHV1aWRcbiAgICAgICAgICBuYW1lOiBjaGF0TmFtZVxuICAgICAgICAgIHR5cGU6ICdncm91cCdcbiAgICAgICRzY29wZS5jcmVhdGVNZXNzYWdlKHVuZGVmaW5lZCwgbXNnKVxuICAgICAgJHN0YXRlLmdvICdjaGF0cy5zaG93JywgeyB0eXBlOiAndXVpZCcsIHZhbHVlOiB1dWlkIH1cblxuICAgICRzY29wZS5ndWVzc0F0dHJpYnV0ZVR5cGUgPSAtPlxuICAgICAgaWYgJHNjb3BlLm5ld1ZlcmlmaWNhdGlvbi52YWx1ZS5sZW5ndGhcbiAgICAgICAgJHNjb3BlLm5ld1ZlcmlmaWNhdGlvbi50eXBlID0gJHdpbmRvdy5pcmlzTGliLkF0dHJpYnV0ZS5ndWVzc1R5cGVPZigkc2NvcGUubmV3VmVyaWZpY2F0aW9uLnZhbHVlKVxuICAgICAgICB1bmxlc3MgJHNjb3BlLm5ld1ZlcmlmaWNhdGlvbi50eXBlXG4gICAgICAgICAgdW5sZXNzICRzY29wZS5uZXdWZXJpZmljYXRpb24udmFsdWUubWF0Y2ggL1xcYHxcXH58XFwhfFxcQHxcXCN8XFwkfFxcJXxcXF58XFwmfFxcKnxcXCh8XFwpfFxcK3xcXD18XFxbfFxce3xcXF18XFx9fFxcfHxcXFxcfFxcJ3xcXDx8XFwsfFxcLnxcXD58XFw/fFxcL3xcXFwiXCJ8XFw7fFxcOi9cbiAgICAgICAgICAgICRzY29wZS5uZXdWZXJpZmljYXRpb24udHlwZSA9ICduYW1lJ1xuICAgICAgZWxzZVxuICAgICAgICAkc2NvcGUubmV3VmVyaWZpY2F0aW9uLnR5cGUgPSAnJ1xuXG4gICAgJHNjb3BlLmFkZE5hbWUgPSAobmFtZSkgLT5cbiAgICAgIGlmIG5hbWVcbiAgICAgICAgcmVjaXBpZW50ID0ge25hbWV9XG4gICAgICAgIHJlY2lwaWVudFskc2NvcGUuaWRUeXBlXSA9ICRzY29wZS5pZFZhbHVlXG4gICAgICAgICR3aW5kb3cuaXJpc0xpYi5NZXNzYWdlLmNyZWF0ZVZlcmlmaWNhdGlvbih7cmVjaXBpZW50fSwgJHNjb3BlLnByaXZhdGVLZXkpLnRoZW4gKG0pIC0+XG4gICAgICAgICAgJHNjb3BlLmlyaXNJbmRleC5hZGRNZXNzYWdlKG0pXG4gICAgICAgICRzY29wZS5uYW1lQWRkZWQgPSB0cnVlXG4gICAgICBlbHNlXG4gICAgICAgICRzY29wZS5hZGRpbmdOYW1lID0gdHJ1ZVxuICAgICAgICBmb2N1cygnYWRkTmFtZUZvY3VzJylcblxuICAgICRzY29wZS5nZXRBdHRyaWJ1dGVzID0gLT5cbiAgICAgICRzY29wZS5pZGVudGl0eS5ndW4uZ2V0KCdhdHRycycpLm9wZW4gKGF0dHJzKSAtPlxuICAgICAgICBhdHRyaWJ1dGVzID0gYXR0cnMgb3IgW11cbiAgICAgICAgaWYgYXR0cmlidXRlcy5sZW5ndGggPiAwXG4gICAgICAgICAgYyA9IGF0dHJpYnV0ZXNbMF1cbiAgICAgICAgICBtb3N0Q29uZmlybWF0aW9ucyA9IGMudmVyaWZpY2F0aW9uc1xuICAgICAgICBlbHNlXG4gICAgICAgICAgbW9zdENvbmZpcm1hdGlvbnMgPSAxXG4gICAgICAgICRzY29wZS5hdHRyaWJ1dGVzID0gT2JqZWN0LnZhbHVlcyhhdHRyaWJ1dGVzKVxuICAgICAgICBmb3IgYSBpbiAkc2NvcGUuYXR0cmlidXRlc1xuICAgICAgICAgIHJldHVybiB1bmxlc3MgYS50eXBlIGFuZCBhLnZhbHVlXG4gICAgICAgICAgYS5hdHRyID0gbmV3ICR3aW5kb3cuaXJpc0xpYi5BdHRyaWJ1dGUoYS50eXBlLCBhLnZhbHVlKVxuICAgICAgICAgIGEuaXNDdXJyZW50ID0gbmV3ICR3aW5kb3cuaXJpc0xpYi5BdHRyaWJ1dGUoJHNjb3BlLmlkVHlwZSwgJHNjb3BlLmlkVmFsdWUpLmVxdWFscyhhLmF0dHIpXG4gICAgICAgICAgYS5vcmRlciA9IGlmIGEuaXNDdXJyZW50IHRoZW4gSW5maW5pdHkgZWxzZSAoYS52ZXJpZmljYXRpb25zIG9yIGEuY29uZikgLSAyICogKGEudW52ZXJpZmljYXRpb25zIG9yIGEucmVmKVxuICAgICAgICAgIGEucm93Q2xhc3MgPSAnY3Vyc29yLWRlZmF1bHQnIGlmIGEuaXNDdXJyZW50XG4gICAgICAgICAgc3dpdGNoIGEudHlwZVxuICAgICAgICAgICAgd2hlbiAnZW1haWwnXG4gICAgICAgICAgICAgIGEuaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tZW52ZWxvcGUnXG4gICAgICAgICAgICAgIGEuYnRuU3R5bGUgPSAnYnRuLXN1Y2Nlc3MnXG4gICAgICAgICAgICAgIGEubGluayA9ICdtYWlsdG86JyArIGEudmFsdWVcbiAgICAgICAgICAgICAgYS5xdWlja0NvbnRhY3QgPSB0cnVlXG4gICAgICAgICAgICB3aGVuICdiaXRjb2luX2FkZHJlc3MnLCAnYml0Y29pbidcbiAgICAgICAgICAgICAgYS5pY29uU3R5bGUgPSAnZmEgZmEtYml0Y29pbidcbiAgICAgICAgICAgICAgYS5idG5TdHlsZSA9ICdidG4tcHJpbWFyeSdcbiAgICAgICAgICAgICAgYS5saW5rID0gJ2h0dHBzOi8vYmxvY2tjaGFpbi5pbmZvL2FkZHJlc3MvJyArIGEudmFsdWVcbiAgICAgICAgICAgICAgYS5xdWlja0NvbnRhY3QgPSB0cnVlXG4gICAgICAgICAgICB3aGVuICdncGdfZmluZ2VycHJpbnQnLCAnZ3BnX2tleWlkJ1xuICAgICAgICAgICAgICBhLmljb25TdHlsZSA9ICdmYSBmYS1rZXknXG4gICAgICAgICAgICAgIGEuYnRuU3R5bGUgPSAnYnRuLWRlZmF1bHQnXG4gICAgICAgICAgICAgIGEubGluayA9ICdodHRwczovL3BncC5taXQuZWR1L3Brcy9sb29rdXA/b3A9Z2V0JnNlYXJjaD0weCcgKyBhLnZhbHVlXG4gICAgICAgICAgICB3aGVuICdhY2NvdW50J1xuICAgICAgICAgICAgICBhLmljb25TdHlsZSA9ICdmYSBmYS1hdCdcbiAgICAgICAgICAgIHdoZW4gJ25pY2tuYW1lJ1xuICAgICAgICAgICAgICAkc2NvcGUuaWRlbnRpdHkuaGFzUHJvcGVyTmFtZSA9IHRydWVcbiAgICAgICAgICAgICAgYS5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1mb250J1xuICAgICAgICAgICAgd2hlbiAnbmFtZSdcbiAgICAgICAgICAgICAgJHNjb3BlLmlkZW50aXR5Lmhhc1Byb3Blck5hbWUgPSB0cnVlXG4gICAgICAgICAgICAgIGEuaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tZm9udCdcbiAgICAgICAgICAgIHdoZW4gJ3RlbCcsICdwaG9uZSdcbiAgICAgICAgICAgICAgYS5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1lYXJwaG9uZSdcbiAgICAgICAgICAgICAgYS5idG5TdHlsZSA9ICdidG4tc3VjY2VzcydcbiAgICAgICAgICAgICAgYS5saW5rID0gJ3RlbDonICsgYS52YWx1ZVxuICAgICAgICAgICAgICBhLnF1aWNrQ29udGFjdCA9IHRydWVcbiAgICAgICAgICAgIHdoZW4gJ2tleUlEJ1xuICAgICAgICAgICAgICBhLmljb25TdHlsZSA9ICdmYSBmYS1rZXknXG4gICAgICAgICAgICB3aGVuICdjb3ZlclBob3RvJ1xuICAgICAgICAgICAgICBpZiBhLnZhbHVlLm1hdGNoIC9eXFwvaXBmc1xcL1sxLTlBLVphLXpdezQwLDYwfSQvXG4gICAgICAgICAgICAgICAgJHNjb3BlLmlwZnNHZXQoYS52YWx1ZSkudGhlbiAoY292ZXJQaG90bykgLT5cbiAgICAgICAgICAgICAgICAgICRzY29wZS5jb3ZlclBob3RvID0gJHNjb3BlLmNvdmVyUGhvdG8gb3IgeyAnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoZGF0YTppbWFnZTtiYXNlNjQsJyArIGNvdmVyUGhvdG8udG9TdHJpbmcoJ2Jhc2U2NCcpICsgJyknIH1cbiAgICAgICAgICAgIHdoZW4gJ3VybCdcbiAgICAgICAgICAgICAgYS5saW5rID0gYS52YWx1ZVxuICAgICAgICAgICAgICBpZiBhLnZhbHVlLmluZGV4T2YoJ2ZhY2Vib29rLmNvbS8nKSA+IC0xXG4gICAgICAgICAgICAgICAgYS5pY29uU3R5bGUgPSAnZmEgZmEtZmFjZWJvb2snXG4gICAgICAgICAgICAgICAgYS5idG5TdHlsZSA9ICdidG4tZmFjZWJvb2snXG4gICAgICAgICAgICAgICAgYS5saW5rID0gYS52YWx1ZVxuICAgICAgICAgICAgICAgIGEubGlua05hbWUgPSBhLnZhbHVlLnNwbGl0KCdmYWNlYm9vay5jb20vJylbMV1cbiAgICAgICAgICAgICAgICBhLnF1aWNrQ29udGFjdCA9IHRydWVcbiAgICAgICAgICAgICAgZWxzZSBpZiBhLnZhbHVlLmluZGV4T2YoJ3R3aXR0ZXIuY29tLycpID4gLTFcbiAgICAgICAgICAgICAgICBhLmljb25TdHlsZSA9ICdmYSBmYS10d2l0dGVyJ1xuICAgICAgICAgICAgICAgIGEuYnRuU3R5bGUgPSAnYnRuLXR3aXR0ZXInXG4gICAgICAgICAgICAgICAgYS5saW5rID0gYS52YWx1ZVxuICAgICAgICAgICAgICAgIGEubGlua05hbWUgPSBhLnZhbHVlLnNwbGl0KCd0d2l0dGVyLmNvbS8nKVsxXVxuICAgICAgICAgICAgICAgIGEucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgICAgICBlbHNlIGlmIGEudmFsdWUuaW5kZXhPZigncGx1cy5nb29nbGUuY29tLycpID4gLTFcbiAgICAgICAgICAgICAgICBhLmljb25TdHlsZSA9ICdmYSBmYS1nb29nbGUtcGx1cydcbiAgICAgICAgICAgICAgICBhLmJ0blN0eWxlID0gJ2J0bi1nb29nbGUtcGx1cydcbiAgICAgICAgICAgICAgICBhLmxpbmsgPSBhLnZhbHVlXG4gICAgICAgICAgICAgICAgYS5saW5rTmFtZSA9IGEudmFsdWUuc3BsaXQoJ3BsdXMuZ29vZ2xlLmNvbS8nKVsxXVxuICAgICAgICAgICAgICAgIGEucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgICAgICBlbHNlIGlmIGEudmFsdWUuaW5kZXhPZignbGlua2VkaW4uY29tLycpID4gLTFcbiAgICAgICAgICAgICAgICBhLmljb25TdHlsZSA9ICdmYSBmYS1saW5rZWRpbidcbiAgICAgICAgICAgICAgICBhLmJ0blN0eWxlID0gJ2J0bi1saW5rZWRpbidcbiAgICAgICAgICAgICAgICBhLmxpbmsgPSBhLnZhbHVlXG4gICAgICAgICAgICAgICAgYS5saW5rTmFtZSA9IGEudmFsdWUuc3BsaXQoJ2xpbmtlZGluLmNvbS8nKVsxXVxuICAgICAgICAgICAgICAgIGEucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgICAgICBlbHNlIGlmIGEudmFsdWUuaW5kZXhPZignZ2l0aHViLmNvbS8nKSA+IC0xXG4gICAgICAgICAgICAgICAgYS5pY29uU3R5bGUgPSAnZmEgZmEtZ2l0aHViJ1xuICAgICAgICAgICAgICAgIGEuYnRuU3R5bGUgPSAnYnRuLWdpdGh1YidcbiAgICAgICAgICAgICAgICBhLmxpbmsgPSBhLnZhbHVlXG4gICAgICAgICAgICAgICAgYS5saW5rTmFtZSA9IGEudmFsdWUuc3BsaXQoJ2dpdGh1Yi5jb20vJylbMV1cbiAgICAgICAgICAgICAgICBhLnF1aWNrQ29udGFjdCA9IHRydWVcbiAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGEuaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tbGluaydcbiAgICAgICAgICAgICAgICBhLmJ0blN0eWxlID0gJ2J0bi1kZWZhdWx0J1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICBhLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLXN0YXInXG4gICAgICAgICAgaWYgYS52YWx1ZSBhbmQgYS52YWx1ZS5tYXRjaCAvXlxcL2lwZnNcXC9bMS05QS1aYS16XXs0MCw2MH0kL1xuICAgICAgICAgICAgYS5saW5rID0gJ2h0dHBzOi8vaXBmcy5pbycgKyBhLnZhbHVlXG4gICAgICAgICAgICBhLmxpbmtOYW1lID0gYS52YWx1ZVxuICAgICAgICAgICAgYS5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1saW5rJ1xuICAgICAgICAgICAgYS5idG5TdHlsZSA9ICdidG4tZGVmYXVsdCdcbiAgICAgICAgICBpZiBhLnZlcmlmaWNhdGlvbnMgKyBhLnVudmVyaWZpY2F0aW9ucyA+IDBcbiAgICAgICAgICAgIHBlcmNlbnRhZ2UgPSBhLnZlcmlmaWNhdGlvbnMgKiAxMDAgLyAoYS52ZXJpZmljYXRpb25zICsgYS51bnZlcmlmaWNhdGlvbnMpXG4gICAgICAgICAgICBpZiBwZXJjZW50YWdlID49IDgwXG4gICAgICAgICAgICAgIGFscGhhID0gYS52ZXJpZmljYXRpb25zIC8gbW9zdENvbmZpcm1hdGlvbnMgKiAwLjcgKyAwLjNcbiAgICAgICAgICAgICAgIyBhLnJvd1N0eWxlID0gJ2JhY2tncm91bmQtY29sb3I6IHJnYmEoMjIzLDI0MCwyMTYsJyArIGFscGhhICsgJyknXG4gICAgICAgICAgICBlbHNlIGlmIHBlcmNlbnRhZ2UgPj0gNjBcbiAgICAgICAgICAgICAgYS5yb3dDbGFzcyA9ICd3YXJuaW5nJ1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICBhLnJvd0NsYXNzID0gJ2RhbmdlcidcbiAgICAgICAgICAkc2NvcGUuaGFzUXVpY2tDb250YWN0cyA9ICRzY29wZS5oYXNRdWlja0NvbnRhY3RzIG9yIGEucXVpY2tDb250YWN0XG4gICAgICAgICRzY29wZS5hdHRyaWJ1dGVzTGVuZ3RoID0gJHNjb3BlLmF0dHJpYnV0ZXMubGVuZ3RoXG5cbiAgICAkc2NvcGUuYXR0cmlidXRlQ2xpY2tlZCA9IChldmVudCwgYXR0cikgLT5cbiAgICAgIGlmIGF0dHIuY29ubmVjdGluZ01zZ3NcbiAgICAgICAgYXR0ci5jb2xsYXBzZSA9ICFhdHRyLmNvbGxhcHNlXG4gICAgICBlbHNlXG4gICAgICAgIGF0dHIuY29ubmVjdGluZ01zZ3MgPSBbXVxuICAgICAgICBmb3IgbXNnIGluICRzY29wZS5yZWNlaXZlZC5saXN0XG4gICAgICAgICAgY29udGludWUgdW5sZXNzIG1zZy5zaWduZWREYXRhLnR5cGUgaW4gWyd2ZXJpZmljYXRpb24nLCAndW52ZXJpZmljYXRpb24nLCAndmVyaWZ5X2lkZW50aXR5JywgJ3VudmVyaWZ5X2lkZW50aXR5J11cbiAgICAgICAgICBoYXNBdHRyMSA9IGhhc0F0dHIyID0gZmFsc2VcbiAgICAgICAgICBmb3IgYSBpbiBtc2cuZ2V0UmVjaXBpZW50QXJyYXkoKVxuICAgICAgICAgICAgaGFzQXR0cjEgPSBoYXNBdHRyMSBvciBhLnR5cGUgPT0gYXR0ci50eXBlIGFuZCBhLnZhbHVlID09IGF0dHIudmFsdWVcbiAgICAgICAgICAgIGhhc0F0dHIyID0gaGFzQXR0cjIgb3IgYS50eXBlID09ICRzY29wZS5pZFR5cGUgYW5kIGEudmFsdWUgPT0gJHNjb3BlLmlkVmFsdWVcbiAgICAgICAgICAgIGlmIGhhc0F0dHIxIGFuZCBoYXNBdHRyMlxuICAgICAgICAgICAgICBhdHRyLmNvbm5lY3RpbmdNc2dzLnB1c2ggbXNnXG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIGF0dHIuY29sbGFwc2UgPSAhYXR0ci5jb2xsYXBzZVxuXG4gICAgJHNjb3BlLmdldFNlbnRNc2dzID0gLT5cbiAgICAgIHJldHVybiB1bmxlc3MgJHNjb3BlLmlkZW50aXR5IGFuZCAkc2NvcGUuaXJpc0luZGV4XG4gICAgICAkc2NvcGUuc2VudCA9IFtdXG4gICAgICBjdXJzb3IgPSBpZiAkc2NvcGUuc2VudC5sZW5ndGggdGhlbiAkc2NvcGUuc2VudFskc2NvcGUuc2VudC5sZW5ndGggLSAxXS5jdXJzb3IgZWxzZSAnJ1xuICAgICAgY2FsbGJhY2sgPSAobXNnKSAtPlxuICAgICAgICAkc2NvcGUucHJvY2Vzc01lc3NhZ2VzIFttc2ddLCB7IGF1dGhvcklzU2VsZjogdHJ1ZSB9XG4gICAgICAgICRzY29wZS5zZW50LnB1c2ggbXNnXG5cbiAgICAgICRzY29wZS5pZGVudGl0eS5zZW50KHtjYWxsYmFja30pXG5cbiAgICAkc2NvcGUuZ2V0UmVjZWl2ZWRNc2dzID0gLT5cbiAgICAgIHJldHVybiB1bmxlc3MgJHNjb3BlLmlkZW50aXR5IGFuZCAkc2NvcGUuaXJpc0luZGV4XG4gICAgICAkc2NvcGUucmVjZWl2ZWQgPVxuICAgICAgICBsaXN0OiBbXVxuICAgICAgICBzZWVuOiB7fVxuICAgICAgY3Vyc29yID0gaWYgJHNjb3BlLnJlY2VpdmVkLmxpc3QubGVuZ3RoIHRoZW4gJHNjb3BlLnJlY2VpdmVkLmxpc3RbJHNjb3BlLnJlY2VpdmVkLmxpc3QubGVuZ3RoIC0gMV0uY3Vyc29yIGVsc2UgJydcbiAgICAgIGNhbGxiYWNrID0gKG1zZykgLT5cbiAgICAgICAgcmV0dXJuIGlmICRzY29wZS5yZWNlaXZlZC5zZWVuW21zZy5nZXRIYXNoKCldXG4gICAgICAgICRzY29wZS5wcm9jZXNzTWVzc2FnZXMgW21zZ10sIHsgcmVjaXBpZW50SXNTZWxmOiB0cnVlIH1cbiAgICAgICAgJHNjb3BlLiRhcHBseSAtPlxuICAgICAgICAgIGlmIG1zZy5pc1Bvc2l0aXZlKClcbiAgICAgICAgICAgIHVubGVzcyBtc2cubGlua1RvQXV0aG9yXG4gICAgICAgICAgICAgIG1zZy5hdXRob3JBcnJheSA9IG1zZy5nZXRBdXRob3JBcnJheSgpXG4gICAgICAgICAgICAgIGZvciBhIGluIG1zZy5hdXRob3JBcnJheVxuICAgICAgICAgICAgICAgIG1zZy5saW5rVG9BdXRob3IgPSBhIHVubGVzcyBtc2cubGlua1RvQXV0aG9yXG4gICAgICAgICAgICBpZiAkc2NvcGUudGh1bWJzVXAubGVuZ3RoIDwgMTIgYW5kIG5vdCB0aHVtYnNVcE9ialtKU09OLnN0cmluZ2lmeShtc2cuc2lnbmVkRGF0YS5hdXRob3IpXVxuICAgICAgICAgICAgICB0aHVtYnNVcE9ialtKU09OLnN0cmluZ2lmeShtc2cuc2lnbmVkRGF0YS5hdXRob3IpXSA9IHRydWVcbiAgICAgICAgICAgICAgJHNjb3BlLnRodW1ic1VwLnB1c2ggbXNnXG4gICAgICAgICAgICAgICRzY29wZS5oYXNUaHVtYnNVcCA9IHRydWVcbiAgICAgICAgICBlbHNlIGlmIG1zZy5pc05lZ2F0aXZlKCkgYW5kICRzY29wZS50aHVtYnNEb3duLmxlbmd0aCA8IDEyIGFuZCBub3QgdGh1bWJzRG93bk9ialtKU09OLnN0cmluZ2lmeShtc2cuc2lnbmVkRGF0YS5hdXRob3IpXVxuICAgICAgICAgICAgdGh1bWJzRG93bk9ialtKU09OLnN0cmluZ2lmeShtc2cuc2lnbmVkRGF0YS5hdXRob3IpXSA9IHRydWVcbiAgICAgICAgICAgICRzY29wZS50aHVtYnNEb3duLnB1c2ggbXNnXG4gICAgICAgICAgICAkc2NvcGUuaGFzVGh1bWJzRG93biA9IHRydWVcbiAgICAgICAgICAkc2NvcGUucmVjZWl2ZWQubGlzdC5wdXNoIG1zZ1xuICAgICAgICAgICRzY29wZS5yZWNlaXZlZC5zZWVuW21zZy5nZXRIYXNoKCldID0gdHJ1ZVxuICAgICAgJHNjb3BlLmlkZW50aXR5LnJlY2VpdmVkKHtjYWxsYmFjaywgY3Vyc29yfSlcblxuICAgICRzY29wZS5zZXRGaWx0ZXJzID0gKGZpbHRlcnMpIC0+XG4gICAgICBhbmd1bGFyLmV4dGVuZCAkc2NvcGUuZmlsdGVycywgZmlsdGVyc1xuXG4gICAgJHNjb3BlLnVwbG9hZENvdmVyUGhvdG8gPSAoYmxvYiwgaWRlbnRpdHkpIC0+XG4gICAgICAkc2NvcGUudXBsb2FkRmlsZShibG9iKS50aGVuIChmaWxlcykgLT5cbiAgICAgICAgcmVjaXBpZW50ID0ge2NvdmVyUGhvdG86ICcvaXBmcy8nICsgZmlsZXNbMF0ucGF0aH1cbiAgICAgICAgcmVjaXBpZW50WyRzY29wZS5pZFR5cGVdID0gJHNjb3BlLmlkVmFsdWVcbiAgICAgICAgJHdpbmRvdy5pcmlzTGliLk1lc3NhZ2UuY3JlYXRlVmVyaWZpY2F0aW9uKHtyZWNpcGllbnR9LCAkc2NvcGUucHJpdmF0ZUtleSkudGhlbiAobSkgLT5cbiAgICAgICAgICAkc2NvcGUuaXJpc0luZGV4LmFkZE1lc3NhZ2UobSlcbiAgICAgICAgICAkc2NvcGUudXBsb2FkTW9kYWwuY2xvc2UoKVxuXG4gICAgJHNjb3BlLm9wZW5TaGFyZVBhZ2VNb2RhbCA9ICgpIC0+XG4gICAgICAkc2NvcGUub3Blbk1vZGFsICdzaGFyZVBhZ2VNb2RhbCcsIHsgdGVtcGxhdGVVcmw6ICdhcHAvaWRlbnRpdGllcy9zaGFyZS5tb2RhbC5odG1sJywgc2l6ZTogJ21kJyB9XG5cbiAgICAkc2NvcGUub3BlbkNvdmVyUGhvdG9VcGxvYWRNb2RhbCA9IC0+XG4gICAgICByZXR1cm4gdW5sZXNzICRzY29wZS5hdXRoZW50aWNhdGlvbi5pZGVudGl0eVxuICAgICAgJHNjb3BlLm9wZW5VcGxvYWRNb2RhbCgkc2NvcGUudXBsb2FkQ292ZXJQaG90bywgJ1VwbG9hZCBjb3ZlciBwaG90bycsIGZhbHNlKVxuXG4gICAgJHNjb3BlLmlkVHlwZSA9ICRzdGF0ZVBhcmFtcy50eXBlXG4gICAgJHNjb3BlLmlkVmFsdWUgPSAkc3RhdGVQYXJhbXMudmFsdWVcbiAgICAkc2NvcGUuc2hvd0NoYXRCdXR0b24gPSAhJHNjb3BlLmlzQ3VycmVudFVzZXIgJiYgKCRzY29wZS5pZFR5cGUgPT0gJ2tleUlEJyB8fCAkc2NvcGUuaWRUeXBlID09ICd1dWlkJylcblxuICAgICRzY29wZS5maW5kT25lID0gLT5cbiAgICAgIHJldHVybiB1bmxlc3MgJHNjb3BlLmlyaXNJbmRleFxuICAgICAgJHNjb3BlLmlkQXR0ciA9IG5ldyAkd2luZG93LmlyaXNMaWIuQXR0cmlidXRlKCRzY29wZS5pZFR5cGUsICRzY29wZS5pZFZhbHVlKVxuICAgICAgJHNjb3BlLmlkVXJsID0gJHNjb3BlLmdldElkVXJsKCRzY29wZS5pZFR5cGUsICRzY29wZS5pZFZhbHVlKVxuICAgICAgJHNjb3BlLmlzQ3VycmVudFVzZXIgPSAkc2NvcGUuYXV0aGVudGljYXRpb24gYW5kXG4gICAgICAgICRzY29wZS5hdXRoZW50aWNhdGlvbi51c2VyIGFuZFxuICAgICAgICAkc2NvcGUuaWRUeXBlID09ICRzY29wZS5hdXRoZW50aWNhdGlvbi51c2VyLmlkVHlwZSBhbmRcbiAgICAgICAgJHNjb3BlLmlkVmFsdWUgPT0gJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnVzZXIuaWRWYWx1ZVxuICAgICAgTm90aWZpY2F0aW9uU2VydmljZS5tYXJrUG9zdHNTZWVuKCkgaWYgJHNjb3BlLmlzQ3VycmVudFVzZXIgYW5kICRzdGF0ZS5pcyAnaWRlbnRpdGllcy5zaG93J1xuICAgICAgTm90aWZpY2F0aW9uU2VydmljZS5tYXJrQ2hhdHNTZWVuKCkgaWYgJHN0YXRlLmluY2x1ZGVzICdjaGF0cydcbiAgICAgICRzY29wZS5pc1VuaXF1ZVR5cGUgPSAoKSAtPlxuICAgICAgICAkd2luZG93LmlyaXNMaWIuQXR0cmlidXRlLmlzVW5pcXVlVHlwZSgkc2NvcGUuaWRUeXBlKSBvciAkc2NvcGUuaWRUeXBlID09ICdjaGFubmVsJ1xuICAgICAgaWYgISRzY29wZS5pc1VuaXF1ZVR5cGVcbiAgICAgICAgJHN0YXRlLmdvICdpZGVudGl0aWVzLmxpc3QnLCB7IHNlYXJjaDogJHNjb3BlLmlkVmFsdWUgfVxuICAgICAgICAkc2NvcGUudGFic1syXS5hY3RpdmUgPSB0cnVlIGlmICRzY29wZS50YWJzXG4gICAgICBpZiAkc3RhdGUuaXMgJ2lkZW50aXRpZXMuc2hvdydcbiAgICAgICAgJHNjb3BlLnNldFBhZ2VUaXRsZSAkc2NvcGUuaWRWYWx1ZVxuICAgICAgJHNjb3BlLmlkZW50aXR5ID0gJHNjb3BlLmlyaXNJbmRleC5nZXQoJHNjb3BlLmlkVHlwZSwgJHNjb3BlLmlkVmFsdWUpICMgLCB0cnVlKVxuICAgICAgJHNjb3BlLnNldElkZW50aXR5TmFtZXMoJHNjb3BlLmlkZW50aXR5LCBmYWxzZSwgdHJ1ZSlcbiAgICAgICRzY29wZS5pZGVudGl0eS5ndW4ub24gKGRhdGEpIC0+XG4gICAgICAgICRzY29wZS5pZGVudGl0eS5kYXRhID0gZGF0YVxuICAgICAgJHNjb3BlLmdldEF0dHJpYnV0ZXMoKVxuICAgICAgJHNjb3BlLmdldFNlbnRNc2dzKClcbiAgICAgICRzY29wZS5nZXRSZWNlaXZlZE1zZ3MoKVxuICAgICAgJHNjb3BlLmlkZW50aXR5Lmd1bi5nZXQoJ3Njb3JlcycpLm9wZW4gKHNjb3JlcykgLT5cbiAgICAgICAgJHNjb3BlLnNjb3JlcyA9IHNjb3Jlc1xuXG4gICAgbG9hZENoYXRNZXNzYWdlcyA9IC0+XG4gICAgICAkc2NvcGUuY2hhdE1lc3NhZ2VzID0gW11cbiAgICAgIG9uTWVzc2FnZSA9IChtc2cpIC0+XG4gICAgICAgICRzY29wZS4kYXBwbHkgLT5cbiAgICAgICAgICAkc2NvcGUuY2hhdE1lc3NhZ2VzLnB1c2gobXNnKSBpZiBtc2dcbiAgICAgIGlmICRzY29wZS5pZFR5cGUgPT0gJ2tleUlEJ1xuICAgICAgICBpZiAkc2NvcGUuYXV0aGVudGljYXRpb24udXNlclxuICAgICAgICAgICRzY29wZS5jaGF0ID0gbmV3ICR3aW5kb3cuaXJpc0xpYi5DaGF0XG4gICAgICAgICAgICBvbk1lc3NhZ2U6IG9uTWVzc2FnZVxuICAgICAgICAgICAga2V5OiAkc2NvcGUucHJpdmF0ZUtleVxuICAgICAgICAgICAgZ3VuOiAkc2NvcGUuZ3VuXG4gICAgICAgICAgICBwYXJ0aWNpcGFudHM6ICRzY29wZS5pZFZhbHVlXG4gICAgICAgICAgJHNjb3BlLnNlbmRDaGF0TWVzc2FnZSA9ICh0ZXh0KSAtPlxuICAgICAgICAgICAgdCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG4gICAgICAgICAgICBtID1cbiAgICAgICAgICAgICAgYXV0aG9yOiAkc2NvcGUudmlld3BvaW50LmlkZW50aXR5LnByaW1hcnlOYW1lXG4gICAgICAgICAgICAgIHRleHQ6IHRleHRcbiAgICAgICAgICAgICAgdGltZTogdFxuICAgICAgICAgICAgJHNjb3BlLmNoYXQuc2VuZChtKVxuICAgICAgICAkc2NvcGUuaXJpc0luZGV4LmdldE9ubGluZSAkc2NvcGUuaWRWYWx1ZSwgKHJlcykgLT5cbiAgICAgICAgICAkc2NvcGUuaXNPbmxpbmUgPSByZXMuaXNPbmxpbmVcbiAgICAgICAgICAkc2NvcGUubGFzdEFjdGl2ZSA9IHJlcy5sYXN0QWN0aXZlIHVubGVzcyByZXMuaXNPbmxpbmVcbiAgICAgIGlmICRzY29wZS5pZFR5cGUgPT0gJ3V1aWQnXG4gICAgICAgICRzY29wZS5pcmlzSW5kZXguZ2V0Q2hhdE1zZ3MoJHNjb3BlLmlkVmFsdWUsIHtjYWxsYmFjazogb25NZXNzYWdlfSlcbiAgICAgICAgJHNjb3BlLnNlbmRDaGF0TWVzc2FnZSA9ICh0ZXh0KSAtPlxuICAgICAgICAgIG1zZyA9IHt9XG4gICAgICAgICAgbXNnLnR5cGUgPSAnY2hhdCdcbiAgICAgICAgICBtc2cudGV4dCA9IHRleHRcbiAgICAgICAgICBtc2cucmVjaXBpZW50ID0ge3V1aWQ6ICRzY29wZS5pZFZhbHVlfVxuICAgICAgICAgICRzY29wZS5jcmVhdGVNZXNzYWdlKHVuZGVmaW5lZCwgbXNnKVxuICAgICAgICAgIGNvbnNvbGUubG9nICdzZW5kIHB1YmxpYyBjaGF0IG1zZycsIG1zZ1xuXG4gICAgbG9hZCA9IC0+XG4gICAgICBpZiAkc2NvcGUuaXJpc0luZGV4XG4gICAgICAgIGlmICRzdGF0ZS5pcygnaWRlbnRpdGllcy5zaG93JylcbiAgICAgICAgICAkc2NvcGUuZmluZE9uZSgpXG5cbiAgICAgICAgaWYgJHN0YXRlLmlzICdpZGVudGl0aWVzLmNyZWF0ZSdcbiAgICAgICAgICBmb2N1cygnaWROYW1lRm9jdXMnKVxuICAgICAgICAgICRzY29wZS5uZXdFbnRyeS5uYW1lID0gJHNjb3BlLmNhcGl0YWxpemVXb3Jkcygkc2NvcGUucXVlcnkudGVybSlcblxuICAgICAgICBpZiAkc3RhdGUuaXMoJ2NoYXRzLnNob3cnKVxuICAgICAgICAgICRzY29wZS5maW5kT25lKClcbiAgICAgICAgICBsb2FkQ2hhdE1lc3NhZ2VzKClcbiAgICAkc2NvcGUuJHdhdGNoICdpcmlzSW5kZXgnLCBsb2FkXG5cbiAgICAkc2NvcGUucXJTY2FuU3VjY2VzcyA9IChkYXRhKSAtPlxuICAgICAgYSA9IGRhdGEuc3BsaXQoJy8nKVxuICAgICAgaWYgYS5sZW5ndGggPiA0XG4gICAgICAgIHR5cGUgPSBkZWNvZGVVUklDb21wb25lbnQoYVthLmxlbmd0aCAtIDJdKVxuICAgICAgICB2YWx1ZSA9IGRlY29kZVVSSUNvbXBvbmVudChhW2EubGVuZ3RoIC0gMV0uc3BsaXQoJz8nKVswXSlcbiAgICAgICAgY29uc29sZS5sb2cgJ3ZhbHVlJywgdmFsdWVcbiAgICAgICAgY29uc29sZS5sb2cgJ2RhdGEnLCBkYXRhXG4gICAgICAgICRzdGF0ZS5nbyAnaWRlbnRpdGllcy5zaG93Jywge3R5cGUsIHZhbHVlfVxuICAgICAgZWxzZVxuICAgICAgICBjb25zb2xlLmxvZyAnVW5yZWNvZ25pemVkIGlkZW50aXR5IHVybCcsIGRhdGFcbiAgICAkc2NvcGUucXJTY2FuRXJyb3IgPSAoZSkgLT5cbiAgICAgICMgdGhpcyBpcyBjYWxsZWQgZWFjaCB0aW1lIGEgUVIgY29kZSBpcyBub3QgZm91bmQgb24gdGhlIGNhbWVyYVxuICAgICAgIyBjb25zb2xlLmVycm9yIGVcbl1cbiJdfQ==

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
    }).state('chats', {
      url: '/chats',
      templateUrl: 'app/chats/index.html',
      abstract: true
    }).state('chats.create', {
      url: '/create',
      templateUrl: 'app/chats/create.html',
      controller: 'IdentitiesController',
      controllerAs: 'messages',
      title: 'Iris - Create chat'
    }).state('chats.list', {
      url: '',
      templateUrl: 'app/chats/default.html',
      controller: 'IdentitiesController',
      controllerAs: 'messages',
      title: 'Iris - Chats'
    }).state('chats.show', {
      url: '/:type/:value',
      templateUrl: 'app/chats/show.html',
      controller: 'IdentitiesController',
      controllerAs: 'messages',
      title: 'Iris - Chats'
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgucm91dGUuanMiLCJzb3VyY2VzIjpbImluZGV4LnJvdXRlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsYUFBZixDQUNFLENBQUMsTUFESCxDQUNVLFFBQUEsQ0FBQyxjQUFELEVBQWlCLGtCQUFqQixFQUFxQyxpQkFBckMsQ0FBQTtJQUNOO0lBQ0EsaUJBQWlCLENBQUMsVUFBbEIsQ0FBNkIsRUFBN0I7SUFDQSxjQUNFLENBQUMsS0FESCxDQUNTLFlBRFQsRUFFSTtNQUFBLEdBQUEsRUFBSyxXQUFMO01BQ0EsUUFBQSxFQUFVLFlBRFY7TUFFQSxRQUFBLEVBQVU7SUFGVixDQUZKLENBS0UsQ0FBQyxLQUxILENBS1MsaUJBTFQsRUFNSTtNQUFBLEdBQUEsRUFBSyxFQUFMO01BQ0EsV0FBQSxFQUFhLDBCQURiO01BRUEsVUFBQSxFQUFZLHNCQUZaO01BR0EsWUFBQSxFQUFjLFlBSGQ7TUFJQSxNQUFBLEVBQ0U7UUFBQSxNQUFBLEVBQVE7TUFBUixDQUxGO01BTUEsS0FBQSxFQUFPO0lBTlAsQ0FOSixDQWFFLENBQUMsS0FiSCxDQWFTLG1CQWJULEVBY0k7TUFBQSxHQUFBLEVBQUssU0FBTDtNQUNBLFdBQUEsRUFBYSw0QkFEYjtNQUVBLFVBQUEsRUFBWSxzQkFGWjtNQUdBLFlBQUEsRUFBYztJQUhkLENBZEosQ0FrQkUsQ0FBQyxLQWxCSCxDQWtCUyxpQkFsQlQsRUFtQkk7TUFBQSxHQUFBLEVBQUssZUFBTDtNQUNBLFdBQUEsRUFBYSwwQkFEYjtNQUVBLFVBQUEsRUFBWSxzQkFGWjtNQUdBLFlBQUEsRUFBYztJQUhkLENBbkJKLENBdUJFLENBQUMsS0F2QkgsQ0F1QlMsT0F2QlQsRUF3Qkk7TUFBQSxHQUFBLEVBQUssUUFBTDtNQUNBLFdBQUEsRUFBYSxzQkFEYjtNQUVBLFFBQUEsRUFBVTtJQUZWLENBeEJKLENBMkJFLENBQUMsS0EzQkgsQ0EyQlMsY0EzQlQsRUE0Qkk7TUFBQSxHQUFBLEVBQUssU0FBTDtNQUNBLFdBQUEsRUFBYSx1QkFEYjtNQUVBLFVBQUEsRUFBWSxzQkFGWjtNQUdBLFlBQUEsRUFBYyxVQUhkO01BSUEsS0FBQSxFQUFPO0lBSlAsQ0E1QkosQ0FpQ0UsQ0FBQyxLQWpDSCxDQWlDUyxZQWpDVCxFQWtDSTtNQUFBLEdBQUEsRUFBSyxFQUFMO01BQ0EsV0FBQSxFQUFhLHdCQURiO01BRUEsVUFBQSxFQUFZLHNCQUZaO01BR0EsWUFBQSxFQUFjLFVBSGQ7TUFJQSxLQUFBLEVBQU87SUFKUCxDQWxDSixDQXVDRSxDQUFDLEtBdkNILENBdUNTLFlBdkNULEVBd0NJO01BQUEsR0FBQSxFQUFLLGVBQUw7TUFDQSxXQUFBLEVBQWEscUJBRGI7TUFFQSxVQUFBLEVBQVksc0JBRlo7TUFHQSxZQUFBLEVBQWMsVUFIZDtNQUlBLEtBQUEsRUFBTztJQUpQLENBeENKLENBNkNFLENBQUMsS0E3Q0gsQ0E2Q1MsVUE3Q1QsRUE4Q0k7TUFBQSxHQUFBLEVBQUssRUFBTDtNQUNBLFFBQUEsRUFBVSxZQURWO01BRUEsUUFBQSxFQUFVO0lBRlYsQ0E5Q0osQ0FpREUsQ0FBQyxLQWpESCxDQWlEUyxlQWpEVCxFQWtESTtNQUFBLEdBQUEsRUFBSyxFQUFMO01BQ0EsV0FBQSxFQUFhLHdCQURiO01BRUEsVUFBQSxFQUFZLG9CQUZaO01BR0EsWUFBQSxFQUFjLFVBSGQ7TUFJQSxLQUFBLEVBQU87SUFKUCxDQWxESixDQXVERSxDQUFDLEtBdkRILENBdURTLGVBdkRULEVBd0RJO01BQUEsR0FBQSxFQUFLLGVBQUw7TUFDQSxXQUFBLEVBQWEsd0JBRGI7TUFFQSxVQUFBLEVBQVksb0JBRlo7TUFHQSxZQUFBLEVBQWM7SUFIZCxDQXhESixDQTRERSxDQUFDLEtBNURILENBNERTLE9BNURULEVBNkRJO01BQUEsR0FBQSxFQUFLLFFBQUw7TUFDQSxXQUFBLEVBQWEscUJBRGI7TUFFQSxLQUFBLEVBQU87SUFGUCxDQTdESixDQWdFRSxDQUFDLEtBaEVILENBZ0VTLFVBaEVULEVBaUVJO01BQUEsR0FBQSxFQUFLLFdBQUw7TUFDQSxXQUFBLEVBQWEsd0JBRGI7TUFFQSxLQUFBLEVBQU87SUFGUCxDQWpFSixDQW9FRSxDQUFDLEtBcEVILENBb0VTLFNBcEVULEVBcUVJO01BQUEsR0FBQSxFQUFLLFVBQUw7TUFDQSxXQUFBLEVBQWEsOEJBRGI7TUFFQSxLQUFBLEVBQU87SUFGUCxDQXJFSjtXQXlFQSxrQkFBa0IsQ0FBQyxTQUFuQixDQUE2QixFQUE3QjtFQTVFTSxDQURWO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSAnaXJpc0FuZ3VsYXInXG4gIC5jb25maWcgKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyKSAtPlxuICAgICduZ0luamVjdCdcbiAgICAkbG9jYXRpb25Qcm92aWRlci5oYXNoUHJlZml4KCcnKVxuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUgJ2lkZW50aXRpZXMnLFxuICAgICAgICB1cmw6ICcvY29udGFjdHMnXG4gICAgICAgIHRlbXBsYXRlOiBcIjx1aS12aWV3Lz5cIlxuICAgICAgICBhYnN0cmFjdDogdHJ1ZVxuICAgICAgLnN0YXRlICdpZGVudGl0aWVzLmxpc3QnLFxuICAgICAgICB1cmw6ICcnXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2lkZW50aXRpZXMvbGlzdC5odG1sJ1xuICAgICAgICBjb250cm9sbGVyOiAnSWRlbnRpdGllc0NvbnRyb2xsZXInXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ2lkZW50aXRpZXMnXG4gICAgICAgIHBhcmFtczpcbiAgICAgICAgICBzZWFyY2g6ICcnXG4gICAgICAgIHRpdGxlOiAnSXJpcyAtIENvbnRhY3RzJ1xuICAgICAgLnN0YXRlICdpZGVudGl0aWVzLmNyZWF0ZScsXG4gICAgICAgIHVybDogJy9jcmVhdGUnXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2lkZW50aXRpZXMvY3JlYXRlLmh0bWwnXG4gICAgICAgIGNvbnRyb2xsZXI6ICdJZGVudGl0aWVzQ29udHJvbGxlcidcbiAgICAgICAgY29udHJvbGxlckFzOiAnaWRlbnRpdGllcydcbiAgICAgIC5zdGF0ZSAnaWRlbnRpdGllcy5zaG93JyxcbiAgICAgICAgdXJsOiAnLzp0eXBlLzp2YWx1ZSdcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvaWRlbnRpdGllcy9zaG93Lmh0bWwnXG4gICAgICAgIGNvbnRyb2xsZXI6ICdJZGVudGl0aWVzQ29udHJvbGxlcidcbiAgICAgICAgY29udHJvbGxlckFzOiAnaWRlbnRpdGllcydcbiAgICAgIC5zdGF0ZSAnY2hhdHMnLFxuICAgICAgICB1cmw6ICcvY2hhdHMnXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2NoYXRzL2luZGV4Lmh0bWwnXG4gICAgICAgIGFic3RyYWN0OiB0cnVlXG4gICAgICAuc3RhdGUgJ2NoYXRzLmNyZWF0ZScsXG4gICAgICAgIHVybDogJy9jcmVhdGUnXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2NoYXRzL2NyZWF0ZS5odG1sJ1xuICAgICAgICBjb250cm9sbGVyOiAnSWRlbnRpdGllc0NvbnRyb2xsZXInXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ21lc3NhZ2VzJ1xuICAgICAgICB0aXRsZTogJ0lyaXMgLSBDcmVhdGUgY2hhdCdcbiAgICAgIC5zdGF0ZSAnY2hhdHMubGlzdCcsXG4gICAgICAgIHVybDogJydcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvY2hhdHMvZGVmYXVsdC5odG1sJ1xuICAgICAgICBjb250cm9sbGVyOiAnSWRlbnRpdGllc0NvbnRyb2xsZXInXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ21lc3NhZ2VzJ1xuICAgICAgICB0aXRsZTogJ0lyaXMgLSBDaGF0cydcbiAgICAgIC5zdGF0ZSAnY2hhdHMuc2hvdycsXG4gICAgICAgIHVybDogJy86dHlwZS86dmFsdWUnXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2NoYXRzL3Nob3cuaHRtbCdcbiAgICAgICAgY29udHJvbGxlcjogJ0lkZW50aXRpZXNDb250cm9sbGVyJ1xuICAgICAgICBjb250cm9sbGVyQXM6ICdtZXNzYWdlcydcbiAgICAgICAgdGl0bGU6ICdJcmlzIC0gQ2hhdHMnXG4gICAgICAuc3RhdGUgJ21lc3NhZ2VzJyxcbiAgICAgICAgdXJsOiAnJ1xuICAgICAgICB0ZW1wbGF0ZTogXCI8dWktdmlldy8+XCJcbiAgICAgICAgYWJzdHJhY3Q6IHRydWVcbiAgICAgIC5zdGF0ZSAnbWVzc2FnZXMubGlzdCcsXG4gICAgICAgIHVybDogJydcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbWVzc2FnZXMvbGlzdC5odG1sJ1xuICAgICAgICBjb250cm9sbGVyOiAnTWVzc2FnZXNDb250cm9sbGVyJ1xuICAgICAgICBjb250cm9sbGVyQXM6ICdtZXNzYWdlcydcbiAgICAgICAgdGl0bGU6ICdJcmlzJ1xuICAgICAgLnN0YXRlICdtZXNzYWdlcy5zaG93JyxcbiAgICAgICAgdXJsOiAnL21lc3NhZ2VzLzppZCdcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbWVzc2FnZXMvc2hvdy5odG1sJ1xuICAgICAgICBjb250cm9sbGVyOiAnTWVzc2FnZXNDb250cm9sbGVyJ1xuICAgICAgICBjb250cm9sbGVyQXM6ICdtZXNzYWdlcydcbiAgICAgIC5zdGF0ZSAnYWJvdXQnLFxuICAgICAgICB1cmw6ICcvYWJvdXQnXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL21haW4vYWJvdXQuaHRtbCdcbiAgICAgICAgdGl0bGU6ICdJcmlzIC0gQWJvdXQnXG4gICAgICAuc3RhdGUgJ3NldHRpbmdzJyxcbiAgICAgICAgdXJsOiAnL3NldHRpbmdzJ1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9tYWluL3NldHRpbmdzLmh0bWwnXG4gICAgICAgIHRpdGxlOiAnSXJpcyAtIFNldHRpbmdzJ1xuICAgICAgLnN0YXRlICdwcml2YWN5JyxcbiAgICAgICAgdXJsOiAnL3ByaXZhY3knXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL21haW4vcHJpdmFjeS1wb2xpY3kuaHRtbCdcbiAgICAgICAgdGl0bGU6ICdJcmlzIC0gUHJpdmFjeSBwb2xpY3knXG5cbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlICcnXG4iXX0=

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

angular.module('irisAngular').run(['$templateCache', function($templateCache) {$templateCache.put('app/chats/create.html','<form ng-submit=createChat(chatName)><input type=text autofocus class=form-control placeholder="Group name" ng-model=chatName><br><input ng-disabled=!chatName type=submit class="btn btn-primary" value="Create public group"></form>');
$templateCache.put('app/chats/default.html','<p>Select a chat to start messaging</p><p ng-if=!notificationsAllowed><button class="btn btn-primary" ng-click=subscribeToNotifications()>Get desktop notifications</button></p>');
$templateCache.put('app/chats/index.html','<div class="container no-padding-xs"><section><div id=messages class=row><div class=col-sm-4 ng-class="{\'hidden-xs\': (\'chats.show\'|isState)}"><div style=cursor:pointer ui-sref=chats.create class="panel chat-row" ui-sref-active=active><div class=panel-body><span class="fa fa-edit mar-right15"></span>New</div></div><div class="panel chat-row" ng-repeat="chat in chats | orderBy:\'-latest.time\'" ui-sref="chats.show({value:chat.idValue, type:chat.idType})" ui-sref-active=active ng-click="chat.unreadMsgs = 0" style=cursor:pointer><div class=panel-body><notification-icon count=chat.unreadMsgs><identicon identity=chat.identity width=35 ipfs=ipfs show-distance=false></identicon></notification-icon><span ng-bind=chat.identity.primaryName class=mar-left15></span> <small class=pull-right ng-bind="chat.latest.time | date: \'yyyy-MM-dd HH:mm\'"></small><br><small class=pull-right>{{chat.latest.text|limitTo:35}}{{chat.latest.text.length > 35 ? \'...\':\'\'}}</small></div></div></div><div class=col-sm-8 ng-class="{\'hidden-xs\': (\'chats.list\'|isState)}"><ui-view></div></div></section></div>');
$templateCache.put('app/chats/show.html','<div ng-include="\'app/main/createuser.partial.html\'"></div><div ng-if="idType ==\'uuid\'" ng-include="\'app/messages/create.chat.partial.html\'"></div><div ng-if="idType != \'uuid\'" class="panel panel-default"><div class=panel-heading><div class=mar-bot15><p style=color:red; ng-if="idType==\'keyID\'"><small><b>private messages are encrypted, but anyone can see who are communicating with each other</b></small></p><p style=color:red; class=pull-right ng-if="idType!=\'keyID\'"><small><b>public chat</b></small></p><div ui-sref="identities.show({type:idType, value:idValue})" style=cursor:pointer><identicon identity=identity ipfs=ipfs width=35></identicon><span class=mar-right15><span ng-show="idType === \'keyID\' || idType === \'uuid\'"><identicon identity=idAttr width=35></identicon></span><span ng-hide="idType === \'keyID\' || idType === \'uuid\'"><span ng-if=!(identity.data.mostVerifiedAttributes.name||identity.data.mostVerifiedAttributes.nickname)><span ng-bind=idValue class=idValue></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType class=idType></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType class=idType></a> </small></span></span></span><span ng-bind=identity.primaryName></span> <small class="positive mar-left15" ng-show=isOnline>online</small> <small class=mar-left15 ng-show="!isOnline && lastActive">last active {{ lastActive * 1000 | date : \'yyyy-M-d HH:mm\' }}</small></div></div><form class="form-inline mar-bot5" ng-submit="sendChatMessage(m);m = \'\'"><input ng-disabled=!authentication.user class=form-control type=text ng-model=m style="display:inline-block; width:80%"> <button ng-disabled=!authentication.user class="btn btn-default" type=submit style=display:inline-block><i class="glyphicon glyphicon-send"></i></button></form></div></div><div ng-if="idType == \'keyID\'" class=message ng-repeat="msg in chatMessages | orderBy:\'-time\'"><div class="panel msg"><div class="message-panel panel-body"><b ng-bind=msg.author></b> <small class=pull-right ng-bind="msg.time | date : \'yyyy-M-d HH:mm\'"></small><br><span ng-bind=msg.text ng-class="{big: msg.text.length<=2}"></span></div></div></div><div ng-if="idType == \'uuid\'"><message auth=authentication ipfs=ipfs ng-repeat="msg in chatMessages | orderBy:\'-signedData.time\'" show-recipient=false msg=msg></message></div><div ng-include="\'app/main/getstarted.partial.html\'"></div>');
$templateCache.put('app/identities/chat.modal.html','<div class="col-md-10 col-md-offset-1" ng-controller=IdentitiesController><div ng-include="\'app/chats/show.html\'" class=mar-top15></div></div>');
$templateCache.put('app/identities/create.html','<div class="container mar-bot30" ng-controller=IdentitiesController><div class=row><div class="col-xs-8 col-sm-6 col-sm-offset-2"><h3>Add contact</h3></div><div class="col-xs-4 col-sm-2"><button ng-click=openReadQRModal() class="btn btn-default pull-right"><span class="glyphicon glyphicon-qrcode"></span> Scan QR</button></div></div><div class=row><div class="col-xs-12 col-sm-8 col-sm-offset-2"><div class="panel panel-danger" ng-if=error><div class=panel-heading ng-bind=error></div></div><div class="panel panel-info" ng-hide=authentication.user><div class=panel-heading>Please log in to add contacts.</div></div><form class=form name=addEntryForm ng-submit="addEntry($event, newEntry)"><div class=form-group><label for=idName>Name *</label> <input type=text required autofocus id=idName focus-on=idNameFocus name=idName ng-model=newEntry.name class=form-control></div><div class=form-group ng-class="{ \'has-error\': addEntryForm.idEmail.$invalid }"><label for=idEmail>Email</label> <input type=email id=idEmail name=idEmail ng-model=newEntry.email class=form-control></div><div class=form-group ng-class="{ \'has-error\': addEntryForm.idUrl.$invalid }"><label for=idUrl>Url</label> <input type=url id=idUrl name=idUrl ng-model=newEntry.url class=form-control><p class=help-block>Social media profile or other personal url</p></div><button class="btn btn-primary" ng-disabled="loggingIn || !(authentication.user && !(addEntryForm.idName.$invalid || addEntryForm.idEmail.$invalid || addEntryForm.idPhone.$invalid || addEntryForm.idUrl.$invalid))">Add public contact</button><p class=help-block>More details can be added afterwards.</p><p><a ui-sref=privacy>Privacy policy</a></p></form></div></div></div>');
$templateCache.put('app/identities/list.html','<div class="container no-padding-xs"><section><div class=mar-top45-xs></div><div ng-if=!query.term ng-include="\'app/main/getstarted.partial.html\'"></div><table ng-init="filters.limit = 10" id=search-results class="table table-hover" infinite-scroll="filters.limit = filters.limit + 1" infinite-scroll-distance=1 infinite-scroll-disabled="!irisIndex || !ids || !ids.list || ids.list.length < filters.limit || filteredIds.length < filters.limit"><tbody><tr id=createIdRow ng-class="{active: ids.activeKey == -1}" ui-sref=identities.create class=search-result-row><td class="gravatar-col align-center"><span style=line-height:46px class="glyphicon glyphicon-plus"></span></td><td><a ui-sref=identities.create>Add contact<span ng-if=query.term>: <span ng-bind=capitalizeWords(query.term)></span></span></a></td></tr><tr ng-repeat="result in ids.list | orderBy:\'data.trustDistance\':false:trustDistanceComparator | limitTo:filters.limit as filteredIds track by (result.linkTo.value + result.linkTo.type)" id=result{{$index}} ui-sref="identities.show({ type: result.linkTo.type, value: result.linkTo.value })" class=search-result-row ng-class="{active: ids.activeKey == $index}"><td class=gravatar-col><identicon identity=result border=3 width=50 ipfs=ipfs></identicon></td><td><span ng-if="result.data.trustDistance === 0" class="label label-default pull-right">viewpoint</span> <span ng-if="result.data.trustDistance > 0" ng-bind="result.data.trustDistance | ordinal" class="label label-default pull-right"></span> <span ng-if="result.data.trustDistance === false" class="label label-default pull-right">unconnected</span> <a ng-bind-html=result.primaryName|highlight:query.term ui-sref="identities.show({ type: result.linkTo.type, value: result.linkTo.value })"></a> <span class="glyphicon glyphicon-ok-sign" style=color:#337ab7 ng-if=result.wellVerified></span> <small ng-if=!(result.mostVerifiedAttributes.type||result.mostVerifiedAttributes.nickname) class=list-group-item-text><span ng-bind-html=result.data.attrs.type.type|highlight:query.term></span></small><br><small><span ng-if=result.nickname ng-bind-html=result.nickname|highlight:query.term class=mar-right10></span> <span ng-if=result.profile.email class=mar-right10><span class="glyphicon glyphicon-envelope"></span> <span ng-bind-html=result.profile.email|highlight:query.term></span> </span><span ng-if=result.profile.facebook class=mar-right10><span class="fa fa-facebook"></span> <span ng-bind-html=result.profile.facebook|highlight:query.term></span> </span><span ng-if=result.profile.twitter class=mar-right10><span class="fa fa-twitter"></span> <span ng-bind-html=result.profile.twitter|highlight:query.term></span> </span><span ng-if=result.profile.googlePlus class=mar-right10><span class="fa fa-google-plus"></span> <span ng-bind-html=result.profile.googlePlus|highlight:query.term></span> </span><span ng-if=result.mostVerifiedAttributes.bitcoin class=mar-right10><span class="fa fa-bitcoin"></span> <span ng-bind-html=result.mostVerifiedAttributes.bitcoin.attribute.val|highlight:query.term></span></span></small></td></tr></tbody></table><div class="alert alert-info text-center" ng-if=!ids.list.length>No results</div></section></div>');
$templateCache.put('app/identities/readqr.modal.html','<div class="col-md-10 col-md-offset-1" ng-controller=IdentitiesController><div class="panel panel-default mar-top15"><div class="panel-heading text-center"><p><b>Scan QR from profile page</b></p><div><qr-scanner width=400 height=300 ng-success=qrScanSuccess(data) ng-error=qrScanError(error)></qr-scanner></div><!-- <div class="mar-top15 mar-bot10"><button ng-click="shareModal.close()" class="btn btn-default">Close</button></div> --></div></div></div>');
$templateCache.put('app/identities/share.modal.html','<div class="col-md-10 col-md-offset-1" ng-controller=IdentitiesController><div class="panel panel-default mar-top15"><div class="panel-heading text-center"><p><button ng-click=copyToClipboard(idUrl) class="btn btn-primary mar-top10">Copy link to clipboard</button></p><div class="mar-top20 mar-bot10"><qrcode data={{idUrl}} size=240></qrcode></div><!-- <div class="mar-top15 mar-bot10"><button ng-click="shareModal.close()" class="btn btn-default">Close</button></div> --></div></div></div>');
$templateCache.put('app/identities/show.attributes.html','<!-- <input id="authenticity_token" name="authenticity_token" type="hidden" value="z1JM7ffnFK7gOv6S3yzG9UFyakukYHikAU94/3TcT2o="> --><table class="table truncated-table table-hover"><tbody><tr ng-repeat-start="a in attributes | orderBy:\'order\':true" style="{{!a.isCurrent && a.rowStyle}}" ng-class="!a.isCurrent && a.rowClass" ng-click="!a.isCurrent && attributeClicked($event, a)" class=id-row><td><div><div class="pull-left mar-right15"><a ng-hide="a.type === \'keyID\' || a.type === \'uuid\'" style=min-width:45px class="btn btn-lg btn-social-icon" ng-class=a.btnStyle ng-href={{a.link}}><span ng-class=a.iconStyle></span> <span ng-if=a.iconStyle&&!a.link class="pull-left btn btn-lg btn-social-icon" ng-class=a.btnStyle ng-href={{a.link}}><span ng-class=a.iconStyle></span></span></a><identicon identity=a.attr ng-show="a.attr && (a.type === \'keyID\' || a.type === \'uuid\')" width=45></identicon></div><div class=pull-left><a ui-sref="identities.show({ type: a.type, value: a.value })" ng-bind="a.linkName || a.value" class=id-link></a><br><small ng-bind=a.type></small></div><!--\n            <input class="form-control linkedComment" type="text" placeholder="comment" disabled>\n          --><div class=pull-right ng-if=!a.isCurrent><button autocomplete=off name=confirm class="btn btn-default btn-confirm" ng-click="createMessage($event, { type: \'verification\' }, {verifiedAttr: a})" ng-disabled=!authentication.user uib-tooltip=Verify data-style=zoom-out><span class="positive glyphicon glyphicon-ok"></span> {{a.verifications||a.conf}}</button> <button autocomplete=off name=unverify class="btn btn-default btn-unverify" ng-click="createMessage($event, { type: \'unverification\' }, {verifiedAttr: a})" ng-disabled=!authentication.user uib-tooltip=Unverify data-style=zoom-out><span class="negative glyphicon glyphicon-remove"></span> {{a.unverifications||a.ref}}</button></div><div class=clear></div></div></td></tr><tr ng-repeat-end ng-if=!a.isCurrent class="active connectingmsgs"><td class=connectingmsgs data-style=zoom-in data-spinner-color=#000><div uib-collapse=!a.collapse><div ng-repeat="msg in a.connectingMsgs" ng-click="openMessage($event, msg, \'lg\')" class=confirmation-panel><span ng-if="msg.signedData.type === \'verification\'"><span class="positive glyphicon glyphicon-ok hidden-xs mar-left5 pull-right"></span> <span class="positive glyphicon glyphicon-ok visible-xs-inline-block mar-right10"></span> </span><span ng-if="msg.signedData.type === \'unverification\'"><span class="negative glyphicon glyphicon-remove hidden-xs mar-left5 pull-right"></span> <span class="negative glyphicon glyphicon-remove visible-xs-inline-block mar-right10"></span> </span><strong><a ui-sref="identities.show({ type: msg.linkToAuthor.type, value: msg.linkToAuthor.value })" class=id-link><identicon ipfs=ipfs identity=msg.author class=mar-right5 border=3 width=30></identicon><span ng-bind=msg.author_name||msg.signedData.author.type.value></span> </a></strong>- <span ng-bind="msg.signedData.timestamp|date:\'mediumDate\'" class="text-muted small" style=display:inline-block;></span> <span ng-if=msg.signedData.comment>- {{msg.signedData.comment|limitTo:250}}</span></div></div></td></tr><tr class="active add-row"><td><input id=addValue ng-change=guessAttributeType() ng-model=newVerification.value class=form-control name=linkedValue type=text placeholder="value (e.g. alice@example.com)" ng-disabled=!authentication.user> <input id=addType ng-model=newVerification.type class=form-control name=linkedType type=text placeholder="type (e.g. email)" ng-disabled=!authentication.user><!--<td><input id="addComment" class="form-control" name="linkedComment" type="text" placeholder="comment" disabled></td> --> <button autocomplete=off id=addButton ng-click="createMessage($event, { type: \'verification\' }, {verifiedAttr: newVerification})" class="btn btn-default" data-style=zoom-out ng-disabled="!authentication.user || !(newVerification.type && newVerification.value)"><span class="glyphicon glyphicon-plus"></span> Add</button></td></tr></tbody></table>');
$templateCache.put('app/identities/show.html','<section class=cover-container><div ng-click=openCoverPhotoUploadModal() class=cover parallax-background parallax-ratio=-0.2 ng-style=coverPhoto></div><div class="container hidden-xs hidden-sm"><div class="heading-row row"><div class="col-md-8 col-md-offset-3"><h4 ng-show="idType === \'keyID\' || idType === \'uuid\'"><identicon identity=idAttr width=35></identicon><button class="btn btn-default mar-left15" ng-click=openSharePageModal()><span class="glyphicon glyphicon-qrcode mar-right5"></span> Share</button> <button ng-if=showChatButton class="mar-left15 btn btn-default" ui-sref="chats.show({value:idValue, type:idType})"><span class="fa fa-comment mar-right5"></span> Chat</button> <button ng-if="authentication.user && idType === \'keyID\'" class="mar-left15 btn btn-default" ng-click=openVideoChatModal()><span class="glyphicon glyphicon-facetime-video mar-right5"></span> {{isCurrentUser ? \'Go live\' : \'Video\'}}</button> <small class="positive mar-left15" ng-show=isOnline>online</small></h4><h4 ng-hide="idType === \'keyID\' || idType === \'uuid\'"><span ng-bind=idValue class=idValue></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType class=idType></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType class=idType></a> </small><button class="btn btn-default mar-left15" ng-click=openSharePageModal()><span class="glyphicon glyphicon-qrcode mar-right5"></span> Share</button></h4></div></div><div class=row><div class="col-md-9 col-md-offset-3"><ul class="list-inline tab-list"><li ng-if=isUniqueType><a href="" ng-class="{ active: activeTab == 1 }" ng-click=activateTab(1)><span class=hidden-xs>Received </span>({{0+identity.data.receivedPositive+identity.data.receivedNeutral+identity.data.receivedNegative || received.list.length}})</a></li><li ng-if=isUniqueType><a href="" ng-class="{ active: activeTab == 2 }" ng-click=activateTab(2)><span class=hidden-xs>Sent </span>({{0+identity.data.sentPositive+identity.data.sentNeutral+identity.data.sentNegative || sent.length}})</a></li><li><a href="" ng-class="{ active: activeTab == 3 }" ng-click=activateTab(3)><span class=hidden-xs>Identity </span>(<span ng-bind="attributesLength || 0"></span>)</a></li></ul></div></div></div></section><div class=container><div><section><div class=row><div class="col-md-3 id-left-column"><div ng-if=isUniqueType ng-include="\'app/identities/show.stats.html\'"></div><div class=hidden-xs ng-include="\'app/messages/distance-selector.partial.html\'"></div></div><div class="col-md-8 id-right-column"><!-- Nav tabs --><div ng-include="\'app/main/createuser.partial.html\'"></div><uib-tabset active=activeTab><uib-tab index=1 ng-if=isUniqueType><uib-tab-heading><span class=hidden-xs>Received ({{0+identity.data.receivedPositive+identity.data.receivedNeutral+identity.data.receivedNegative}})</span> <span class=visible-xs>Recv ({{0+identity.data.receivedPositive+identity.data.receivedNeutral+identity.data.receivedNegative}})</span></uib-tab-heading><div ng-if=isCurrentUser ng-include="\'app/main/getstarted.partial.html\'"></div><div class="panel panel-info" ng-if="!isCurrentUser && authentication.user && authentication.identity.data && !authentication.identity.data.sentPositive"><div class=panel-heading>Trust this user? Upvote them to see their posts!</div></div><div ng-include="\'app/messages/create.rating.partial.html\'" ng-show="!loggingIn && authentication.user && !isCurrentUser"></div><div ng-include="\'app/identities/show.received.html\'"></div><div ng-if="!isCurrentUser && receivedFiltered.length == 0" class="alert alert-info text-center">No messages yet</div></uib-tab><uib-tab index=2 ng-if=isUniqueType><uib-tab-heading>Sent ({{0+identity.data.sentPositive+identity.data.sentNeutral+identity.data.sentNegative}})</uib-tab-heading><div ng-include="\'app/identities/show.sent.html\'"></div></uib-tab><uib-tab index=3><uib-tab-heading>Id<span class=hidden-xs>entity</span> (<span ng-bind="attributesLength || 0"></span>)</uib-tab-heading><div ng-include="\'app/identities/show.attributes.html\'" id=attributes></div></uib-tab></uib-tabset></div></div></section></div></div>');
$templateCache.put('app/identities/show.received.html','<div infinite-scroll=getReceivedMsgs() infinite-scroll-distance=2 infinite-scroll-disabled="true || !identity || activeTab != 1"><div class=panel ng-class="{\'mar-bot5\': (filters.type.indexOf(\'rating\') === 0)}"><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === null) }" ng-click="setFilters({ type: null })"><a>All</a></li><li ng-class="{active: (filters.type === \'rating\') }" ng-click="setFilters({type: \'rating\'})"><a>Rating</a></li><li ng-class="{active: (filters.type === \'verification\') }" ng-click="setFilters({type:\'verification\'})"><a>Verification</a></li></ul></div></div><div class=panel ng-show="filters.type.indexOf(\'rating\') === 0"><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === \'rating:positive\') }" ng-click="setFilters({type: \'rating:positive\'})"><a><span class=positive><span class="visible-xs-inline glyphicon glyphicon-thumbs-up"></span><span class=hidden-xs>Pos<span class=hidden-md>itive</span></span> ({{0+identity.data.receivedPositive}})</span></a></li><li ng-class="{active: (filters.type === \'rating:neutral\') }" ng-click="setFilters({type: \'rating:neutral\'})"><a><span class=neutral><span class="visible-xs-inline glyphicon glyphicon-question-sign"></span><span class=hidden-xs>Neut<span class=hidden-md>ral</span></span> ({{0+identity.data.receivedNeutral}})</span></a></li><li ng-class="{active: (filters.type === \'rating:negative\') }" ng-click="setFilters({type: \'rating:negative\'})"><a><span class=negative><span class="visible-xs-inline glyphicon glyphicon-thumbs-down"></span><span class=hidden-xs>Neg<span class=hidden-md>ative</span></span> ({{0+identity.data.receivedNegative}})</span></a></li></ul></div></div><message auth=authentication ipfs=ipfs msg-utils=msgUtils msg=msg page-info=identity ng-repeat="msg in received.list | filter:msgFilter | orderBy:\'signedData.timestamp\' : true as receivedFiltered" ng-click="openMessage($event, msg, \'lg\')"></message></div>');
$templateCache.put('app/identities/show.sent.html','<div infinite-scroll=getSentMsgs() infinite-scroll-distance=2 infinite-scroll-disabled="true || !identity ||\xA0activeTab != 2"><div class=panel ng-class="{\'mar-bot5\': (filters.type.indexOf(\'rating\') === 0)}"><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === null) }" ng-click="setFilters({ type: null })"><a>All</a></li><li ng-class="{active: (filters.type === \'rating\') }" ng-click="setFilters({type: \'rating\'})"><a>Rating</a></li><li ng-class="{active: (filters.type === \'verification\') }" ng-click="setFilters({type:\'verification\'})"><a>Verification</a></li><!-- <li ><a href="#" data-val="other"><span class="glyphicon glyphicon-question-sign"></span> Other</a></li> --></ul></div></div><div ng-show="filters.type.indexOf(\'rating\') === 0" class=panel><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === \'rating:positive\') }" ng-click="setFilters({type: \'rating:positive\'})"><a><span class=positive><span class="visible-xs-inline glyphicon glyphicon-thumbs-up"></span><span class=hidden-xs>Pos<span class=hidden-md>itive</span></span> ({{0+identity.data.sentPositive}})</span></a></li><li ng-class="{active: (filters.type === \'rating:neutral\') }" ng-click="setFilters({type: \'rating:neutral\'})"><a><span class=neutral><span class="visible-xs-inline glyphicon glyphicon-question-sign"></span><span class=hidden-xs>Neut<span class=hidden-md>ral</span></span> ({{0+identity.data.sentNeutral}})</span></a></li><li ng-class="{active: (filters.type === \'rating:negative\') }" ng-click="setFilters({type: \'rating:negative\'})"><a><span class=negative><span class="visible-xs-inline glyphicon glyphicon-thumbs-down"></span><span class=hidden-xs>Neg<span class=hidden-md>ative</span></span> ({{0+identity.data.sentNegative}})</span></a></li></ul></div></div><message auth=authentication ipfs=ipfs msg-utils=msgUtils msg=msg page-info=identity ng-repeat="msg in sent | filter:msgFilter | orderBy:\'signedData.timestamp\' : true as sentFiltered" ng-click="openMessage($event, msg, \'lg\')"></message></div><div ng-if="sentFiltered.length == 0" class="alert alert-info text-center">No messages yet</div>');
$templateCache.put('app/identities/show.stats.html','<div><p class="hidden-md hidden-lg" ng-hide=!stats.name><span ng-bind=idValue class=idValue></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType class=idType></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType class=idType></a></small></p><div class=stats-box><div class=row><div class=col-xs-12><p class=align-center><identicon ng-click=openProfilePhotoUploadModal() identity=identity ipfs=ipfs border=4 show-distance=0 width=230 ng-if=hideProfilePhoto></identicon><identicon ng-click=openProfilePhotoUploadModal() identity=identity ipfs=ipfs border=4 show-distance=0 width=230 ng-if=!hideProfilePhoto></identicon></p></div></div><div class=row><div class=col-xs-12><h4><span class="visible-xs-inline-block visible-sm-inline-block mar-right15"><span ng-show="idType === \'keyID\' || idType === \'uuid\'"><identicon identity=idAttr width=35></identicon></span><span ng-hide="idType === \'keyID\' || idType === \'uuid\'"><span ng-if=!(identity.data.mostVerifiedAttributes.name||identity.data.mostVerifiedAttributes.nickname)><span ng-bind=idValue class=idValue></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType class=idType></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType class=idType></a> </small></span></span></span><span ng-bind=identity.primaryName></span> <span class="glyphicon glyphicon-ok-sign" style=color:#337ab7 uib-tooltip="Verified by a trusted verifier" ng-if=identity.wellVerified></span> <span ng-hide="!identity.data.mostVerifiedAttributes.nickname || identity.data.mostVerifiedAttributes.nickname == identity.data.mostVerifiedAttributes.primaryName">(<span class=text-muted ng-bind=identity.nickname></span>) </span><button class="mar-left15 visible-xs-inline-block visible-sm-inline-block btn btn-default" ng-click=openSharePageModal()><span class="glyphicon glyphicon-share"></span></button> <button ng-if=showChatButton class="mar-left15 visible-xs-inline-block visible-sm-inline-block btn btn-default" ui-sref="chats.show({value:idValue, type:idType})"><span class="fa fa-comment"></span></button> <button ng-if="authentication.user && idType === \'keyID\'" class="visible-xs-inline-block visible-sm-inline-block mar-left15 btn btn-default" ng-click=openVideoChatModal()><span class="glyphicon glyphicon-facetime-video"></span></button> <small class="positive mar-left15 visible-xs-inline-block visible-sm-inline-block" ng-show=isOnline>online</small> <span ng-if="identity.data.trustDistance === 0" class="label label-default pull-right">viewpoint</span> <span ng-if="identity.data.trustDistance > 0" ng-bind="identity.data.trustDistance | ordinal" class="label label-default pull-right"></span> <span ng-if="identity.data.trustDistance === false" class="label label-default pull-right">unconnected</span></h4></div></div><div class=row><div class="col-xs-12 col-sm-6 col-md-12 mar-bot10 mar-top10"><div class=mar-bot10 ng-if="authentication.user && !identity.hasProperName && !nameAdded"><a href="" ng-click=addName() ng-hide=addingName>Add name</a><form class=form-inline ng-show=addingName ng-submit=addName(name)><div class=form-group><input focus-on=addNameFocus type=text class=form-control ng-model=name placeholder="Add name"></div><button type=submit class="btn btn-default"><span class="glyphicon glyphicon-plus"></span></button></form></div><p><b>Received: <span ng-if="identity.data.receivedPositive || identity.data.receivedNegative"><span ng-bind="identity.data.receivedPositive / (identity.data.receivedPositive+identity.data.receivedNeutral+identity.data.receivedNegative) * 100 | number:0"></span>% positive </span><span ng-if="!(identity.data.receivedPositive || identity.data.receivedNegative)">&mdash;</span></b><br>Sent: <span ng-if="identity.data.sentPositive || identity.data.sentNegative"><span ng-bind="identity.data.sentPositive / (identity.data.sentPositive+identity.data.sentNeutral+identity.data.sentNegative) * 100 | number:0"></span>% positive </span><span ng-if="!(identity.data.sentPositive || identity.data.sentNegative)">&mdash;</span></p><!--\n          <p class="received-stats">\n          <div><strong>Received</strong></div>\n          <div>\n          <strong>\n          <span class="positive"><span class="glyphicon glyphicon-thumbs-up"></span> <span ng-bind="identity.data.receivedPositive">-</span></span>\n          <span class="neutral"><span class="glyphicon glyphicon-question-sign"></span> <span ng-bind="identity.data.receivedNeutral">-</span></span>\n          <span class="negative"><span class="glyphicon glyphicon-thumbs-down"></span> <span ng-bind="identity.data.receivedNegative">-</span></span>\n          </strong>\n          </div>\n          </p>\n          <p>\n          <div>Sent</div>\n          <div>\n          <span class="positive"><span class="glyphicon glyphicon-thumbs-up"></span> <span ng-bind="identity.data.sentPositive">-</span></span>\n          <span class="neutral"><span class="glyphicon glyphicon-question-sign"></span> <span ng-bind="identity.data.sentNeutral">-</span></span>\n          <span class="negative"><span class="glyphicon glyphicon-thumbs-down"></span> <span ng-bind="identity.data.sentNegative">-</span></span>\n          </div>\n          </p> --><div ng-if="scores.verifier && scores.verifier.score > 0" class="text-center alert alert-info"><span class="fa fa-shield" style=font-size:2em></span><p>This identity is a <b>trusted verifier</b> in this web of trust. It can grant verification checkmarks.</p></div><div ng-if=isUniqueType class="mar-top10 quick-contact"><ul class=list-unstyled><li ng-repeat="a in attributes" ng-if=a.quickContact><a ng-href={{a.link}}><span ng-class=a.iconStyle></span><span ng-bind="a.linkName || a.value"></span></a></li><li ng-if=stats.first_seen><span class="fa fa-calendar"></span>First seen: <span ng-if=stats.first_seen ng-bind="stats.first_seen|date:\'mediumDate\'"></span> <span ng-if=!stats.first_seen>&mdash;</span></li></ul></div></div><div class="col-xs-12 col-sm-6 col-md-12 mar-top10"><div ng-if="isUniqueType && hasThumbsUp" class="stats-box mar-bot10"><h5>Thumbs up</h5><a ng-repeat="msg in thumbsUp | orderBy:\'authorTrustDistance\'" ng-class="{ \'hidden-xs\': $index > 3, \'hidden-sm\': $index > 4 }" class="mar-right5 mar-bot5" ui-sref="identities.show({ type: msg.linkToAuthor.type, value: msg.linkToAuthor.value })" uib-tooltip="{{ msg.author_name || msg.linkToAuthor.value }}"><identicon ipfs=ipfs identity=msg.author class=no-glow border=3 width=60></identicon></a></div><div ng-if="isUniqueType && hasThumbsDown" class="stats-box mar-bot10"><h5>Thumbs down</h5><a ng-repeat="msg in thumbsDown | orderBy:\'authorTrustDistance\'" ng-class="{ \'hidden-xs\': $index > 3, \'hidden-sm\': $index > 4 }" class="mar-right5 mar-bot5" ui-sref="identities.show({ type: msg.linkToAuthor.type, value: msg.linkToAuthor.value })" uib-tooltip="{{ msg.author_name || msg.linkToAuthor.value }}"><identicon ipfs=ipfs identity=msg.author class=no-glow border=3 width=60></identicon></a></div></div></div></div></div>');
$templateCache.put('app/identities/upload.modal.html','<div class="col-md-10 col-md-offset-1" ng-controller=IdentitiesController><div class="panel panel-default mar-top15"><div class=panel-heading><form name=form><div class="drop-box mar-bot10" ngf-resize="squarify ? {ratio:\'1:1\',centerCrop:true} : {}" ngf-select ngf-drop ng-model=file name=file ngf-pattern="\'image/*\'" ngf-accept="\'image/*\'" ngf-max-size=5MB ngf-min-height=100 style=width:100%;min-height:300px;text-align:center><div ng-if=!file style="padding:120px 0">Drop file or click</div><img ng-if=file ngf-src=file width=70%></div><button class="btn btn-primary" ng-disabled=!file type=submit ng-click=uploadModalCallback(file)>{{ modalButtonText }}</button></form></div></div></div>');
$templateCache.put('app/identities/video.modal.html','<div class="col-md-10 col-md-offset-1" ng-controller=IdentitiesController><div class="panel panel-default mar-top15"><div class=panel-heading><div class=mar-bot15><div style=color:red;font-weight:bold ng-if="!isCurrentUser && !stream">currently this is unencrypted livestreaming :D</div><identicon identity=identity ipfs=ipfs width=35></identicon><span class=mar-right15><span ng-show="idType === \'keyID\' || idType === \'uuid\'"><identicon identity=idAttr width=35></identicon></span><span ng-hide="idType === \'keyID\' || idType === \'uuid\'"><span ng-if=!(identity.data.mostVerifiedAttributes.name||identity.data.mostVerifiedAttributes.nickname)><span ng-bind=idValue class=idValue></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType class=idType></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType class=idType></a> </small></span></span></span><span ng-bind=identity.primaryName></span> <small class="positive mar-left15" ng-show=isOnline>online</small><div class=mar-top5><videochat ng-if="idType === \'keyID\'" watch-only=stream gun=gun pubkey=idValue></videochat></div><p ng-if="isCurrentUser || stream"><button ng-click="copyToClipboard(idUrl + \'?stream\')" class="btn btn-default mar-top10">Copy link to clipboard</button></p></div></div></div></div>');
$templateCache.put('app/main/about.html','<div class="container mar-bot30 mar-top20-xs no-padding-xs"><div class=col-md-8><div class="panel panel-default"><div class=panel-body><h3>About Iris</h3><p class=lead>Iris is a social networking application that stores everything on its users\' devices which communicate directly with each other &mdash; no corporate gatekeepers needed.</p><p>Longer description on <a href=https://github.com/irislib/iris/blob/master/README.md>GitHub</a>.</p><h4>Available at</h4><ul><li><a href=https://iris.to>iris.to</a></li><li><a href=https://iris.cx>iris.cx</a></li><li><a href=https://irislib.github.io>irislib.github.io</a></li><li>Browser extension: use Iris even if you are offline. In the future, can be used to sign in to websites.<ul><li><a href=https://chrome.google.com/webstore/detail/iris/oelmiikkaikgnmmjaonjlopkmpcahpgh>Chrome</a></li><li><a href=https://addons.mozilla.org/en-US/firefox/addon/irisapp/ >Firefox</a></li></ul></li><!-- TODO: add dynamically updated /ipfs url --><li>Upcoming: Electrum desktop app with bluetooth and LAN peerfinding!</li></ul><h4>Privacy</h4><p>It\'s important to remember that as for now, <b>all posts, ratings and verifications are public</b>.</p><p>Private chats can\'t be read by others, but anyone can see who are communicating with each other. "Last online" status is publicly available.</p><p>See <a ui-sref=privacy>privacy policy</a> for more information.</p></div></div></div></div>');
$templateCache.put('app/main/createuser.partial.html','<div class="panel panel-default" ng-if=!authentication.user><div class=panel-body><form class="form-inline createuser-form" ng-submit=createUser(newUserName)><div class=form-group><input focus-on=newUser style=min-width:200px type=text class=form-control ng-disabled=creatingUser ng-model=newUserName placeholder="What\'s your name?"></div><i class="hidden-xs mar-right5"></i> <button type=submit id=createUserBtn class="btn btn-primary" ng-disabled="!newUserName || creatingUser">Go!</button> <i class="mar-left15 hidden-xs"></i><div class=form-group>or <a ng-click=openLoginModal() href="">Log in</a></div></form></div></div>');
$templateCache.put('app/main/custom-search-row.html','<a class=search-result-row><identicon ipfs=$parent.$parent.$parent.$parent.ipfs identity=match.label border=3 width=46 class=mar-right10></identicon><span ng-bind-html="match.label.primaryName | uibTypeaheadHighlight:query"></span></a>');
$templateCache.put('app/main/getstarted.partial.html','<div ng-if="authentication.user && authentication.identity.data && !authentication.identity.data.sentPositive" class="alert alert-info text-center"><p class=h3 style=margin-bottom:15px>Welcome to social networking freedom!</p><p>Start by upvoting your friends: ask for their profile links or scan their QR codes (<b><a ui-sref=identities.create>Add contact</a></b>). That makes their posts visible to you.</p><p>Alternatively, you can upvote this Iris distribution\'s <b><a ui-sref="identities.show({type:\'keyID\', value:defaultIndexKeyID})">default address book</a></b> as a starting point.</p><br></div><div ng-if="authentication.user && authentication.identity.data && authentication.identity.data.sentPositive && !authentication.identity.data.receivedPositive" class="alert alert-info text-center"><p class=h3 style=margin-bottom:15px>Great, you have trusted contacts!</p><p>Next you should <b>ask your friends to upvote your account</b>, so they and their network will see your messages.</p><p><button ng-click=copyToClipboard(authentication.user.url) class="btn btn-primary mar-top10">Copy link to your profile</button></p><p>Or show them your QR code:</p><div class=mar-top20><qrcode data={{authentication.user.url}} size=240></qrcode></div><br></div><div ng-if="authentication.user && authentication.identity.data && authentication.identity.data.sentPositive && authentication.identity.data.receivedPositive && localSettings && !localSettings.profileUploadNotificationClosed && authentication.identity.mva && !authentication.identity.mva.profilePhoto" class="alert alert-info text-center"><p class=h3 style=margin-bottom:15px>You\'re good to go!</p><p style="margin-bottom: 15px">Set a profile picture?</p><p><button class="btn btn-primary mar-right15" ng-click=openProfilePhotoUploadModal()>Yes</button> <button class="btn btn-default" ng-click=closeProfileUploadNotification()>Not now</button></p><br></div>');
$templateCache.put('app/main/login.modal.html','<div class="col-md-10 col-md-offset-1"><div class="panel panel-default mar-top15"><div class=panel-heading><!--<div class="checkbox">\n        <label>\n          <input type="checkbox" value="" checked="checked">\n          Remember me\n        </label>\n      </div>--><h3>New user</h3><form ng-submit=createUser(newUserName)><input focus-on=newUser type=text class=form-control ng-model=newUserName placeholder="Your name"><br><input type=submit value=Go! class="btn btn-primary" ng-disabled=!newUserName></form><hr style=border-color:#ddd><h3>Existing user</h3><form><textarea rows=6 class=form-control placeholder="Paste private key or drop file" ng-model=privateKeySerialized></textarea><br><button class="btn btn-primary" ng-disabled=!privateKeySerialized ng-click="loginWithKey(privateKeySerialized, publicKeyPEM)">Log in</button> <a class=pull-right href="" ng-click="lostKey = !lostKey">Lost your key?</a></form><div ng-if=lostKey class="mar-top30 panel panel-info"><div class=panel-heading>Don\'t worry: just go with "New user" and ask your trusted contacts to verify that your new key belongs to the already existing identity.</div></div></div></div></div>');
$templateCache.put('app/main/logout.modal.html','<div class="col-md-10 col-md-offset-1"><div class="panel panel-default mar-top15"><div class=panel-heading>Log out?</div><div class=panel-body><p>You cannot log in back to this account unless you have saved a backup of your private key.</p><a class="btn btn-default" ng-click=$dismiss()>Cancel</a> <a href=# class="btn btn-danger" id=logout ng-click=logout()>Log out</a></div></div></div>');
$templateCache.put('app/main/privacy-policy.html','<div class="container mar-bot30 mar-top20-xs no-padding-xs"><div class=col-md-8><div class="panel panel-default"><div class=panel-body><h3>Privacy policy</h3><p>Iris is a peer-to-peer application like Bitcoin, not a corporate or other legal entity. All data is stored and indexed by the users who run the application. The application only makes connections to other decentralized network peers.</p><p>Please keep in mind that everything you post or add on Iris is <b>public</b> unless otherwise stated.</p><p>Iris\'s contact list feature can be compared to your mobile phone\'s address book, but with synchronization with others. Users can add contact details and attributes of arbitrary type.</p><p>Developers of the application have no control over content added by users and are not responsible for it. It is the user\'s responsibility to comply with applicable laws regarding public messaging and listing of personal information.</p><p>An Iris "account" is a cryptographic keypair generated and stored locally on the user\'s device (in browser or other application). It does not constitute a relationship with any corporate or other entity.</p></div></div></div></div>');
$templateCache.put('app/main/settings.html','<div class="container mar-top20-xs"><div class=col-md-8><h3>Settings</h3><div ng-if=authentication.user><p><b>For normal people</b></p><div class="panel panel-default"><div class=panel-heading>Log out</div><div class=panel-body><p>You cannot log in back to this account unless you have saved a backup of your private key.</p><p><button class="btn btn-danger" ng-click=openLogoutModal()>Log out</button></p></div></div><div class="panel panel-danger"><div class=panel-heading>Private key</div><div class=panel-body><p>Private key is used to log in to your account. Keep your private key safe!</p><p><button class="btn btn-danger" ng-click=copyToClipboard(privateKey|json)>Copy to clipboard</button> <button class="btn btn-danger" ng-click=downloadText(privateKey|json)>Download</button></p></div></div><div class="panel panel-default" ng-if=!notificationsAllowed><div class=panel-heading>Notifications</div><div class=panel-body><button class="btn btn-primary" ng-click=subscribeToNotifications()>Get desktop notifications</button></div></div></div><p><b>Geeky stuff</b></p><div class="panel panel-default"><div class=panel-heading>GUN peers</div><div class=panel-body><p><a href=https://gun.eco/ >GUN</a> stores dynamic content: indexes of messages and identities.</p></div><div class=table-responsive><table class="table table-striped"><tbody><tr ng-repeat="(key, value) in gun[\'_\'].opt.peers"><td><span ng-show="value.wire && value.wire.hied" class="positive fa fa-check-circle"></span> <span ng-hide="value.wire && value.wire.hied" class="negative fa fa-times-circle"></span> <small ng-bind=key></small></td><td><button ng-click=removeGunPeer(key) class="pull-right btn btn-danger"><i class="glyphicon glyphicon-trash"></i></button></td></tr><tr><td colspan=2><form class=form-inline ng-submit=addGunPeer(gunUrl)><input class=form-control type=text placeholder="Peer url" ng-model=gunUrl> <input class="btn btn-primary" type=submit value="Add GUN peer"></form></td></tr></tbody></table></div></div><div class="panel panel-default"><div class=panel-heading>IPFS peers</div><div class=panel-body><p><a href=https://ipfs.io>IPFS</a> stores static content: messages and image files.</p><p ng-hide="ipfsPeers && ipfsPeers.length"><small>No IPFS peers</small></p></div><div ng-if="ipfsPeers && ipfsPeers.length" class=table-responsive><table class="table table-striped"><tbody><tr ng-repeat="peer in ipfsPeers"><td><span class="positive fa fa-check-circle"></span> <small ng-bind=peer.addr.toString()></small></td><td><button ng-click=removeIpfsPeer(peer.addr.toString()) class="pull-right btn btn-danger"><i class="glyphicon glyphicon-trash"></i></button></td></tr><tr><td colspan=2><form class=form-inline ng-submit=addIpfsPeer(ipfsUrl)><input class=form-control type=text placeholder="Peer url" ng-model=ipfsUrl> <input class="btn btn-primary" type=submit value="Add IPFS peer"><!--<button ng-click="$event.preventDefault;addDefaultIpfsPeers()" class="btn btn-default pull-right">Add default peers</button>--></form></td></tr></tbody></table></div></div><div class="panel panel-default"><div class=panel-heading>Search indexes</div><div class=panel-body><p><small><b>query</b> = when you search for content on Iris, include results from the index</small></p><p><small><b>subscribe</b> = listen for new messages that are added to the index, potentially adding them to your own index</small></p><table class="table table-striped"><thead><tr><td>index</td><td>query</td><td>subscribe</td></tr></thead><tbody><tr ng-repeat="i in trustedIndexes"><td><identicon uib-tooltip={{i.attribute.value}} identity=i.attribute class=mar-right5 border=3 width=30></identicon><a ui-sref="identities.show({ type: i.attribute.type, value: i.attribute.value })"><identicon ipfs=ipfs identity=i.identity border=3 width=30></identicon></a></td><td><input type=checkbox checked></td><td><input type=checkbox checked></td></tr><tr><td colspan=4><form class=form-inline ng-submit=addTrustedIndex(trustedIndexKey)><input class=form-control type=text placeholder="public key" ng-model=trustedIndexKey> <input class="btn btn-primary" type=submit value="Add trusted index"></form></td></tr></tbody></table></div></div><!--\n    <div class="panel panel-default">\n      <div class="panel-heading">\n        Iris indexing settings\n      </div>\n      <div class="panel-body">\n        <p>\n          <pre ng-bind="irisIndex.options|json"></pre>\n        </p>\n      </div>\n    </div>--><p><b>Other stuff</b></p><div class="panel panel-default"><div class=panel-body><p><a ui-sref=about>About Iris</a></p><p><a ui-sref=privacy>Privacy policy</a></p></div></div></div></div>');
$templateCache.put('app/messages/create.chat.partial.html','<div class="panel panel-default" ngf-drop ngf-keep="\'distinct\'" ngf-drop-disabled="addingMessage || loggingIn || !authentication.user" ng-model=newMessage.files ngf-drag-over-class="\'dragover\'" ngf-multiple=true><div class=panel-body><div class=mar-bot15><p style=color:red; class=pull-right><small><b>public chat</b></small></p><div ui-sref="identities.show({type:idType, value:idValue})" style=cursor:pointer><identicon identity=identity ipfs=ipfs width=35></identicon><span class=mar-right15><span ng-show="idType === \'keyID\' || idType === \'uuid\'"><identicon identity=idAttr width=35></identicon></span><span ng-hide="idType === \'keyID\' || idType === \'uuid\'"><span ng-if=!(identity.data.mostVerifiedAttributes.name||identity.data.mostVerifiedAttributes.nickname)><span ng-bind=idValue class=idValue></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType class=idType></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType class=idType></a> </small></span></span></span><span ng-bind=identity.primaryName></span> <small class="positive mar-left15" ng-show=isOnline>online</small> <small class=mar-left15 ng-show="!isOnline && lastActive">last active {{ lastActive * 1000 | date : \'yyyy-M-d HH:mm\' }}</small></div></div><form autocomplete=off ng-submit="createMessage($event, { type: \'chat\', recipient: { uuid: idValue }, text: newMessage.text, pollOptions: createPoll && newMessage.pollOptions }, { files: newMessage.files });createPoll = false"><div class=row ng-if="newMessage.files && newMessage.files.length"><div class=col-xs-12><p ng-class="{\'align-center\': newMessage.files.length == 1}"><span ng-repeat="file in newMessage.files" class=attachment><button type=button class=close aria-label=Close ng-click=newMessage.files.splice($index,1)><span aria-hidden=true>&times;</span></button> <a ng-show="[\'video\',\'image\',\'audio\'].indexOf(file.type.substr(0,5)) == -1" ng-bind=file.name></a> <img ngf-thumbnail="file || \'/thumb.jpg\'" ng-style="{\'max-width\': newMessage.files.length > 1 ? \'150px\' : \'100%\', \'max-height\': newMessage.files.length > 1 ? \'150px\' : \'450px\'}"><audio controls ngf-src=file></audio><video controls ngf-src=file></video></span></p></div></div><div class=form-group><input type=text style="resize: vertical" ng-disabled="addingMessage || loggingIn || !authentication.user" name=text class=form-control id=text ng-model=newMessage.text placeholder="Type a message"></div><div class=row><div class=col-xs-12><button ng-disabled="addingMessage || loggingIn || !authentication.user || !(newMessage.text || newMessage.files.length)" type=submit class="btn btn-primary" data-style=zoom-out><span class="glyphicon glyphicon-send"></span></button> <button ngf-select ng-model=newMessage.files ngf-multiple=true href="" ng-disabled="addingMessage || loggingIn || !authentication.user" class="btn btn-default pull-right" data-style=zoom-out><span class="fa fa-paperclip"></span> Add files</button></div></div></form></div></div>');
$templateCache.put('app/messages/create.partial.html','<div class="panel panel-default" ngf-drop ngf-keep="\'distinct\'" ngf-drop-disabled="addingMessage || loggingIn || !authentication.user" ng-model=newMessage.files ngf-drag-over-class="\'dragover\'" ngf-multiple=true><div class=panel-body><form ng-submit="createMessage($event, { type: \'post\', text: newMessage.text, pollOptions: createPoll && newMessage.pollOptions }, { files: newMessage.files });createPoll = false"><div class=row ng-if="newMessage.files && newMessage.files.length"><div class=col-xs-12><p ng-class="{\'align-center\': newMessage.files.length == 1}"><span ng-repeat="file in newMessage.files" class=attachment><button type=button class=close aria-label=Close ng-click=newMessage.files.splice($index,1)><span aria-hidden=true>&times;</span></button> <a ng-show="[\'video\',\'image\',\'audio\'].indexOf(file.type.substr(0,5)) == -1" ng-bind=file.name></a> <img ngf-thumbnail="file || \'/thumb.jpg\'" ng-style="{\'max-width\': newMessage.files.length > 1 ? \'150px\' : \'100%\', \'max-height\': newMessage.files.length > 1 ? \'150px\' : \'450px\'}"><audio controls ngf-src=file></audio><video controls ngf-src=file></video></span></p></div></div><div class=form-group><textarea style="resize: vertical" ng-disabled="addingMessage || loggingIn || !authentication.user" name=text class=form-control id=text ng-model=newMessage.text placeholder="What\'s on your mind?"></textarea></div><div ng-if=createPoll ng-include="\'app/messages/poll.create.html\'"></div><div class=row><div class=col-xs-12><button ng-disabled="addingMessage || loggingIn || !authentication.user || !(newMessage.text || newMessage.files.length)" type=submit class="btn btn-primary" data-style=zoom-out>Publish</button> <button ngf-select ng-model=newMessage.files ngf-multiple=true href="" ng-disabled="addingMessage || loggingIn || !authentication.user" class="btn btn-default pull-right" data-style=zoom-out><span class="fa fa-paperclip"></span> Add files</button> <button class="btn btn-default pull-right" ng-click="$event.preventDefault();newMessage.pollOptions=[{text: \'\'}, {text: \'\'}];createPoll = !createPoll"><span class="glyphicon glyphicon-stats"></span> Create poll</button></div></div></form></div></div>');
$templateCache.put('app/messages/create.rating.partial.html','<div ng-style=newMessage.style class="panel panel-default panel-success" id=newRatingPanel><div class=panel-body id=write-feedback><form ng-controller=MessagesController ng-submit="createMessage($event, { type: \'rating\', rating: newMessage.rating, comment: newMessage.comment }, {addTo: received})"><div class=form-group><textarea name=comment class=form-control id=comment ng-model=newMessage.comment ng-disabled=addingMessage placeholder="Comment (optional)"></textarea></div><div class=row><div class="col-sm-10 col-xs-12 rating-slider" id=write-msg-slider><rzslider rz-slider-model=newMessage.rating rz-slider-options=slider.options min=-3 max=3 step=1></rzslider><span class="hidden-xs write-msg-icons mar-left5"><span ng-repeat="i in iconCount(newMessage.rating) track by $index" class="write-msg-icon glyphicon glyphicon-thumbs-up mar-left5" ng-class="[iconStyle(newMessage.rating), iconClass(newMessage.rating)]"></span></span></div><div class="col-sm-2 col-xs-12" style=text-align:right><span class="visible-xs pull-left write-msg-icons"><span ng-repeat="i in iconCount(newMessage.rating) track by $index" class="write-msg-icon glyphicon glyphicon-thumbs-up mar-left5" ng-class="[iconStyle(newMessage.rating), iconClass(newMessage.rating)]"></span> </span><button ng-disabled=addingMessage type=submit class="pull-right btn btn-primary" data-style=zoom-out><span ng-show="newMessage.rating == 0">Neutral</span> <span ng-show="newMessage.rating > 0">Upvote</span> <span ng-show="newMessage.rating < 0">Downvote</span></button></div></div></form></div></div>');
$templateCache.put('app/messages/distance-selector.partial.html','<div class="text-center alert alert-info">Viewing as:<br class=hidden-sm><span ng-if=viewpoint><a ui-sref="identities.show({ type: viewpoint.type, value: viewpoint.value })" class=id-link><span class="distance-container mar-right5 mar-left5"><identicon ipfs=ipfs identity=viewpoint.identity border=3 width=35></identicon></span><strong ng-bind=viewpoint.mostVerifiedAttributes.name.attribute.value></strong></a></span><br class=hidden-sm>Max distance from viewpoint: <span class="btn-group trust-distance-selector"><button type=button class="btn btn-default" ng-click="setFilters({maxDistance: -1})" ng-class="{active: filters.maxDistance === -1}" uib-tooltip="Distance filter off">\u2715</button> <button type=button class="btn btn-default" ng-click="setFilters({maxDistance: 1})" ng-class="{active: filters.maxDistance === 1}">1</button> <button type=button class="btn btn-default" ng-click="setFilters({maxDistance: 2})" ng-class="{active: filters.maxDistance === 2}">2</button> <button type=button class="btn btn-default" ng-click="setFilters({maxDistance: 3})" ng-class="{active: filters.maxDistance === 3}">3</button> <button type=button class="btn btn-default" ng-click="setFilters({maxDistance: 0})" ng-class="{active: filters.maxDistance === 0}" uib-tooltip=Unlimited>\u221E</button></span></div>');
$templateCache.put('app/messages/filters.partial.html','<div class="panel panel-default"><div class="panel-heading visible-xs visible-sm" ng-click="collapseFilters = !collapseFilters"><h4 class=panel-title><a><span class="fa fa-filter"></span> Filters</a></h4></div><div class="panel-body filters" uib-collapse=collapseFilters><ul class="nav nav-pills nav-stacked msg-type-filter"><li ng-class="{active: (filters.type === null) }" ng-click="setFilters({ type: null })"><a><span class="glyphicon glyphicon-home"></span> All</a></li><li ng-class="{active: (filters.type === \'post\') }" ng-click="setFilters({ type: \'post\' })"><a><span class="fa fa-pencil"></span> Post</a></li><li ng-class="{active: (filters.type === \'rating\') }" ng-click="setFilters({type: \'rating\'})"><a><span class="glyphicon glyphicon-thumbs-up"></span> Rating</a></li><ul class="nav nav-pills nav-stacked" style="padding-left: 1em;"><li ng-class="{active: (filters.type === \'rating:positive\') }" ng-click="setFilters({type: \'rating:positive\'})"><a><span class=positive><span class="glyphicon glyphicon-thumbs-up"></span> Positive</span></a></li><li ng-class="{active: (filters.type === \'rating:neutral\') }" ng-click="setFilters({type: \'rating:neutral\'})"><a><span class=neutral><span class="glyphicon glyphicon-question-sign"></span> Neutral</span></a></li><li ng-class="{active: (filters.type === \'rating:negative\') }" ng-click="setFilters({type: \'rating:negative\'})"><a><span class=negative><span class="glyphicon glyphicon-thumbs-down"></span> Negative</span></a></li></ul><li ng-class="{active: (filters.type === \'verification\') }" ng-click="setFilters({type:\'verification\'})"><a><span class="glyphicon glyphicon-ok"></span> Verification</a></li><!-- <li ><a href="#" data-val="other"><span class="glyphicon glyphicon-question-sign"></span> Other</a></li> --></ul><div ng-include="\'app/messages/distance-selector.partial.html\'"></div></div></div>');
$templateCache.put('app/messages/list.html','<div class="container no-padding-xs"><section><div ng-if=!authentication.user class=jumbotron><div class=align-center><h1>Social networking freedom</h1></div><div class=row><div class=col-sm-4><div class=align-center><i class="hidden-xs fa fa-download fa-5x mar-bot20"></i><p><i class="hidden-sm hidden-md hidden-lg fa fa-download"></i> Everything is stored on users\' devices &mdash; no corporate gatekeepers.</p></div></div><div class=col-sm-4><div class=align-center><i class="hidden-xs fa fa-thumbs-up fa-5x mar-bot20"></i><p><i class="hidden-sm hidden-md hidden-lg fa fa-thumbs-up"></i> Filter all content using your web of trust.</p></div></div><div class=col-sm-4><div class=align-center><i class="hidden-xs fa fa-check fa-5x mar-bot20"></i><p><i class="hidden-sm hidden-md hidden-lg fa fa-check"></i> Keep your contacts and trusted online identity up-to-date.</p></div></div></div><p class="align-center mar-top15" style=margin-bottom:0><a ui-sref=about>Read more</a></p></div><div id=messages class=row><div class=col-md-4><div class="hidden-xs hidden-sm" ng-include="\'app/messages/filters.partial.html\'"></div></div><div class=col-md-8><div ng-include="\'app/main/createuser.partial.html\'"></div><div ng-include="\'app/main/getstarted.partial.html\'"></div><div ng-if=authentication.user ng-include="\'app/messages/create.partial.html\'"></div><div class="visible-xs visible-sm" ng-include="\'app/messages/filters.partial.html\'"></div><div infinite-scroll=showMoreMsgs(); infinite-scroll-distance=1 infinite-scroll-disabled="!msgs || !msgs.list || !irisIndex || loadingMsgs"><message auth=authentication ng-repeat="msg in msgs.list | filter:msgFilter | orderBy:\'signedData.timestamp\' : true | limitTo:filters.limit as filteredMsgs track by msg.hash" msg=msg ng-click="openMessage($event, msg, \'lg\');$event.preventDefault()"></message></div><div class="alert alert-info text-center" ng-if=!filteredMsgs.length>No messages yet</div></div></div></section></div>');
$templateCache.put('app/messages/poll.create.html','<div class=row><div class=col-xs-12><ul><li ng-repeat="o in newMessage.pollOptions" class=mar-bot5><div class=form-inline><input class=form-control style="width: 200px;display: inline-block;" placeholder="option {{$index + 1}}" ng-model=o.text> <button class="btn btn-default" ng-if="$index > 1" ng-click="newMessage.pollOptions.splice($index, 1)"><i class="fa fa-times"></i></button></div></li><li><a ng-click="newMessage.pollOptions.push({text: \'\'})">Add option</a></li></ul></div></div>');
$templateCache.put('app/messages/share.modal.html','<div class="panel panel-default"><div class=panel-body><h3>Share message?</h3><form ng-submit="shareMessage(message, comment)"><p><input type=text class=form-control placeholder="Add comment" ng-model=comment></p><p><message auth=authentication ipfs=ipfs show-recipient=true msg=msg page-info=info ng-repeat="msg in [message]"></message></p><button class="btn btn-primary">Share</button></form></div></div>');
$templateCache.put('app/messages/show.html','<section><div class="col-md-8 col-md-offset-2 msg-col"><message auth=authentication msg-utils=msgUtils ipfs=ipfs show-recipient=true msg=msg page-info=info ng-repeat="msg in [message]"></message><div class="panel panel-info"><div class=panel-heading>Message origin verified by <span ng-show=message.verifiedByAttr><identicon identity=message.verifiedByAttr class=mar-right5 border=3 width=35></identicon></span>which is associated with <a ng-if=false ng-bind=message.signerName||message.signerKeyID ui-sref="identities.show({type: \'keyID\', value: message.signerKeyID })"></a> <strong><a ui-sref="identities.show({ type: \'keyID\', value: message.signerKeyID })" class=id-link><identicon ipfs=ipfs identity=message.verifiedBy class=mar-right5 border=3 width=35></identicon><span ng-bind=message.verifiedBy.primaryName></span></a></strong></div></div><p ng-if=message.data.context><small>Context: {{message.data.context}}</small></p><p><button class="btn btn-default" ng-click="collapseRawData = !collapseRawData">Show raw data</button></p><pre uib-collapse=!collapseRawData ng-bind=message.strData></pre><message ng-repeat="msg in message.repliesArr" auth=authentication msg-utils=msgUtils ipfs=ipfs show-recipient=true msg=msg page-info=info></message><!-- <div class="mar-top15 mar-bot10"><button ng-click="chatModal.close()" class="btn btn-default">Close</button></div> --></div></section>');
$templateCache.put('app/messages/show.modal.html','<div ng-include="\'app/messages/show.html\'"></div>');
$templateCache.put('app/services/notification.template.html','<div class="ui-notification panel panel-info"><div class=panel-heading><h3 ng-show=title ng-bind-html=title></h3><div class=message ng-bind-html=message></div></div></div>');
$templateCache.put('app/components/message/message.template.html','<div class="panel msg" ng-class="{\'panel-info\':msg.isVerification, \'panel-default\':msg.isPost}" style={{msg.bgColor}} ng-if=msg.signedData><div class=message-panel ng-class="{ \'panel-body\': !msg.isVerification, \'panel-heading\': msg.isVerification || msg.isUnverification }"><p><span class="mar-left5 pull-right" ng-class=msg.iconStyle ng-repeat="n in msg.iconCount track by $index"></span> <span class="mar-left5 pull-right fa fa-refresh" uib-tooltip=Pending ng-if=msg.local></span> <strong><a ui-sref="identities.show({ type: msg.linkToAuthor.type, value: msg.linkToAuthor.value })" class=id-link><identicon ipfs=ipfs identity=msg.author class=mar-right5 border=3 width=35></identicon><span ng-bind=msg.author_name></span> </a></strong><span ng-show="msg.signedData.type != \'chat\' && !msg.sameAuthorAndRecipient"><small><i class="glyphicon glyphicon-play"></i></small> <a ui-sref="identities.show({ type: msg.linkToRecipient.type, value: msg.linkToRecipient.value })" class=id-link><identicon ng-if=showRecipient ipfs=ipfs identity=msg.recipient class=mar-right5 border=3 width=35></identicon><span ng-bind="(msg.recipientIsSelf && pageInfo.primaryName)||msg.recipient_name"></span> </a></span>- <a ui-sref="messages.show({ id: (msg.ipfsUri || msg.hash) })" ng-bind="(msg.signedData.time||msg.signedData.timestamp)|date:\'medium\'" class="text-muted small" style=display:inline-block;></a></p><div ng-if="msg.isVerification || msg.isUnverification"><div ng-repeat="a in msg.recipientArray"><small><b ng-bind=a.type></b>: <span ng-if="a.type == \'email\' || a.type == \'url\'" ng-bind-html="a.value | linky"></span> <span ng-if="!(a.type == \'email\' || a.type == \'url\')" ng-bind=a.value></span></small></div></div><div ng-class="{\'align-center\': msg.attachments.length == 1}"><span ng-repeat="attachment in msg.attachments" class=attachment><a ng-if="[\'video\',\'image\',\'audio\'].indexOf(attachment.typeSubstr) == -1" download={{attachment.name}} ng-click="download(attachment.name, null, null, null, attachment.src)"><i class="fa fa-download mar-right5"></i> {{attachment.name}} </a><a ng-if="attachment.type && attachment.typeSubstr == \'image\'" ng-href={{attachment.src}} target=_blank><img alt={{attachment.uri}} ng-src={{attachment.src}} ng-style="{\'max-width\': msg.attachments.length > 1 ? \'150px\' : \'100%\', \'max-height\': msg.attachments.length > 1 ? \'150px\' : \'450px\'}"></a><videostream ng-if="attachment.typeSubstr == \'video\' || attachment.typeSubstr == \'audio\'" ipfs=ipfs uri=attachment.uri></videostream><span ng-bind-html=attachment.element ng-if=attachment.element></span></span></div><p style="white-space: pre-line;" ng-if="(msg.signedData.text || msg.signedData.comment)" ng-class="{big: msg.emojisOnly}" hm-read-more hm-limit=280 hm-text="{{ (msg.signedData.text || msg.signedData.comment)|linky }}" hm-more-text="Show more" hm-less-text="Show less"></p><form ng-if="msg.signedData.pollOptions && !msg.myVote" ng-submit="vote(msg, msg.choice)" ng-init="choice = \'asdf\'"><div class=radio ng-repeat="o in msg.signedData.pollOptions"><label><input ng-hide=msg.myVote ng-disabled=!authentication.user type=radio ng-model=msg.choice ng-value=o.text> <span ng-show=msg.myVote ng-bind=o.voteCount></span> {{o.text}}</label></div><button ng-disabled="!authentication.user || !msg.choice" class="btn btn-primary mar-right5">Vote</button> <small>{{msg.voteCount || 0}} votes</small></form><div ng-if=msg.voteResults><div ng-repeat="(k, v) in msg.voteResults"><b ng-bind=v style="width: 50px; display:inline-block"></b> <span ng-bind=k></span></div><small>{{msg.voteCount || 0}} votes</small></div><message ng-if="msg.sharedMsg && msgUtils" msg=msg.sharedMsg></message><span ng-class="{disabled: !authentication.user}" class=pull-right ng-if="msgUtils && msg.signedData.type == \'post\'"><a class=msg-reaction href="" ng-class="{active: msg.showCommentField}" ng-click="authentication.user && (msg.showCommentField = !msg.showCommentField)"><b ng-if=msg.repliesArr.length>{{msg.repliesArr.length}} </b><i class="glyphicon glyphicon-comment"></i> </a><a class=msg-reaction href="" ng-click="authentication.user && msgUtils.share(msg)"><b ng-if=msg.sharesArr.length>{{msg.sharesArr.length}} </b><i class="glyphicon glyphicon-retweet"></i> </a><a class=msg-reaction ng-class="{active: msg.liked}" href="" ng-click="authentication.user && msgUtils.like(msg)"><b ng-if="msg.likes || msg.liked">{{msg.likes || 1}} </b><i class=glyphicon ng-class="{\'glyphicon-heart-empty\': !msg.liked, \'glyphicon-heart\': msg.liked,}"></i></a></span><form class=form-inline ng-submit="msgUtils.replyTo(msg, reply)" ng-show="authentication.user && msg.showCommentField"><div class=form-group><input focus-on=addNameFocus type=text class=form-control ng-model=reply placeholder="Write a reply"></div><button type=submit class="btn btn-primary">Post</button></form></div></div>');}]);
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
        var CAMERA_OPTIONS, MIMETYPE_AUDIO_ONLY, MIMETYPE_VIDEO_AUDIO, MIMETYPE_VIDEO_ONLY, MIME_TYPE_USE, REMOTE_STREAM_ID, buttonRow, go, gunDB, gunRecorder, gunStreamer, gunViewer, myPubKey, myVideo, onRecordStateChange, opt, peers, recordButton, recorder_config, remoteVideo, startCameraButton, startScreenCaptureButton, streamer_config, u, viewer_config;
        MIMETYPE_VIDEO_AUDIO = 'video/webm; codecs="opus,vp8"';
        MIMETYPE_VIDEO_ONLY = 'video/webm; codecs="vp8"';
        MIMETYPE_AUDIO_ONLY = 'video/webm; codecs="opus"';
        MIME_TYPE_USE = MIMETYPE_VIDEO_AUDIO;
        REMOTE_STREAM_ID = scope.pubkey + '/stream';
        remoteVideo = document.createElement("video");
        remoteVideo.autoplay = true;
        remoteVideo.controls = true;
        remoteVideo.playsinline = true;
        remoteVideo.style.display = "none";
        remoteVideo.style.width = "50%";
        remoteVideo.preload = "none";
        remoteVideo.id = REMOTE_STREAM_ID;
        element.append(remoteVideo);
        myVideo = document.createElement('video');
        myVideo.setAttribute('autoplay', true);
        myVideo.setAttribute('style', 'width: 100%;');
        myVideo.setAttribute('playsinline', true);
        myVideo.setAttribute('controls', true);
        myVideo.id = 'record_video';
        element.append(myVideo);
        buttonRow = document.createElement('div');
        element.append(buttonRow);
        startCameraButton = document.createElement('button');
        startCameraButton.innerText = 'start camera';
        startCameraButton.setAttribute('class', 'btn btn-default');
        startCameraButton.addEventListener('click', function() {
          return gunRecorder.startCamera();
        });
        buttonRow.append(startCameraButton);
        startScreenCaptureButton = document.createElement('button');
        startScreenCaptureButton.innerText = 'start screen capture';
        startScreenCaptureButton.setAttribute('class', 'btn btn-default');
        startScreenCaptureButton.addEventListener('click', function() {
          return gunRecorder.startScreenCapture();
        });
        buttonRow.append(startScreenCaptureButton);
        recordButton = document.createElement('button');
        //recordButton.innerHtml = '<span class="glyphicon glyphicon-facetime-video mar-right5"></span> Go live'
        recordButton.innerText = 'go live';
        recordButton.setAttribute('class', 'btn btn-default');
        recordButton.addEventListener('click', function() {
          return gunRecorder.record();
        });
        buttonRow.append(recordButton);
        //Config for camera recorder
        CAMERA_OPTIONS = {
          video: {
            width: 320,
            height: 280,
            facingMode: 'environment',
            frameRate: 24
          },
          audio: true
        };
        //Configure GunViewer
        viewer_config = {
          mimeType: MIME_TYPE_USE,
          streamerId: REMOTE_STREAM_ID,
          catchup: false,
          debug: false
        };
        gunViewer = new GunViewer(viewer_config);
        //Configure GUN to pass to streamer
        peers = ['https://gunmeetingserver.herokuapp.com/gun'];
        opt = {
          peers: peers,
          localStorage: false,
          radisk: false
        };
        gunDB = Gun(opt);
        // Get data from gun and pass along to viewer
        gunDB.get(REMOTE_STREAM_ID).on(function(data) {
          gunViewer.onStreamerData(data);
        });
        u = scope.gun.user();
        myPubKey = u._.sea ? u._.sea.pub : void 0;
        //Config for the GUN GunStreamer
        streamer_config = {
          dbRecord: 'gunmeeting',
          streamId: myPubKey + '/stream',
          gun: gunDB,
          debug: false,
          onStreamerData: gunViewer.onStreamerData,
          url: '/assets/js/parser_worker.js'
        };
        //GUN Streamer is the data side. It will convert data and write to GUN db
        gunStreamer = new GunStreamer(streamer_config);
        //This is a callback function about the recording state, following states possible
        // STOPPED: 1¸
        // RECORDING:2
        // NOT_AVAILABLE:3
        // UNKNOWN:4
        onRecordStateChange = function(state) {
          switch (state) {
            case recordState.RECORDING:
              recordButton.innerHtml = '<span class="glyphicon glyphicon-facetime-video mar-right5"></span> Go offline';
              break;
            default:
              recordButton.innerHtml = '<span class="glyphicon glyphicon-facetime-video mar-right5"></span> Go live';
              break;
          }
        };
        recorder_config = {
          mimeType: MIME_TYPE_USE,
          video_id: 'record_video',
          onDataAvailable: gunStreamer.onDataAvailable,
          onRecordStateChange: onRecordStateChange,
          recordInterval: 800,
          cameraOptions: CAMERA_OPTIONS,
          debug: false
        };
        //Init the recorder
        gunRecorder = new GunRecorder(recorder_config);
        element.on('$destroy', function() {
          return gunRecorder.setRecordingState(recordState.STOPPED);
        });
        go = function() {
          var streamId;
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
          } else {
            // openRemoteVideo()
            myVideo.style.width = '100%';
            remoteVideo.style.display = 'none';
          }
          return streamId = myPubKey + '/stream';
        };
        return scope.$watch('gun', go);
      }
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy92aWRlb2NoYXQvdmlkZW9jaGF0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy92aWRlb2NoYXQvdmlkZW9jaGF0LmRpcmVjdGl2ZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQTtFQUNBLE9BQU8sQ0FBQyxNQUFSLENBQWUsYUFBZixDQUNFLENBQUMsU0FESCxDQUNhLFdBRGIsRUFDMEIsUUFBQSxDQUFBLENBQUE7V0FDdEI7TUFBQSxLQUFBLEVBQ0U7UUFBQSxNQUFBLEVBQVEsR0FBUjtRQUNBLEdBQUEsRUFBSyxHQURMO1FBRUEsU0FBQSxFQUFXO01BRlgsQ0FERjtNQUlBLElBQUEsRUFBTSxRQUFBLENBQUMsS0FBRCxFQUFRLE9BQVIsRUFBaUIsS0FBakIsQ0FBQTtBQUNKLFlBQUEsY0FBQSxFQUFBLG1CQUFBLEVBQUEsb0JBQUEsRUFBQSxtQkFBQSxFQUFBLGFBQUEsRUFBQSxnQkFBQSxFQUFBLFNBQUEsRUFBQSxFQUFBLEVBQUEsS0FBQSxFQUFBLFdBQUEsRUFBQSxXQUFBLEVBQUEsU0FBQSxFQUFBLFFBQUEsRUFBQSxPQUFBLEVBQUEsbUJBQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLFlBQUEsRUFBQSxlQUFBLEVBQUEsV0FBQSxFQUFBLGlCQUFBLEVBQUEsd0JBQUEsRUFBQSxlQUFBLEVBQUEsQ0FBQSxFQUFBO1FBQUEsb0JBQUEsR0FBdUI7UUFDdkIsbUJBQUEsR0FBc0I7UUFDdEIsbUJBQUEsR0FBc0I7UUFDdEIsYUFBQSxHQUFnQjtRQUNoQixnQkFBQSxHQUFtQixLQUFLLENBQUMsTUFBTixHQUFlO1FBRWxDLFdBQUEsR0FBYyxRQUFRLENBQUMsYUFBVCxDQUF1QixPQUF2QjtRQUNkLFdBQVcsQ0FBQyxRQUFaLEdBQXVCO1FBQ3ZCLFdBQVcsQ0FBQyxRQUFaLEdBQXVCO1FBQ3ZCLFdBQVcsQ0FBQyxXQUFaLEdBQTBCO1FBQzFCLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBbEIs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QUMsTUFBbEMsQ0FBQTtBQUFBLG1CQUFBOztVQUNBLENBQUEsR0FBSSxLQUFLLENBQUMsR0FBRyxDQUFDLElBQVYsQ0FBQTtVQUNKLFFBQUEsR0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQVAsR0FBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBeEIsR0FBaUM7VUFDNUMsSUFBRyxRQUFBLEtBQVksS0FBSyxDQUFDLE1BQXJCO1lBQ0UsSUFBRyxLQUFLLENBQUMsU0FBVDtjQUNFLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBaEIsR0FBMEI7Y0FDMUIsV0FBVyxDQUFDLEtBQUssQ0FBQyxLQUFsQixHQUEwQjtjQUMxQixPQUFPLENBQUMsS0FBSyxDQUFDLE9BQWQsR0FBd0IsT0FIMUI7O1lBSUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFkLEdBQXNCO1lBQ3RCLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBbEIsR0FBNEIsZUFOOUI7V0FBQSxNQUFBOztZQVNFLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBZCxHQUFzQjtZQUN0QixXQUFXLENBQUMsS0FBSyxDQUFDLE9BQWxCLEdBQTRCLE9BVjlCOztpQkFXQSxRQUFBLEdBQVcsUUFBQSxHQUFXO1FBZm5CO2VBZ0JMLEtBQUssQ0FBQyxNQUFOLENBQWEsS0FBYixFQUFvQixFQUFwQjtNQW5JSTtJQUpOO0VBRHNCLENBRDFCO0FBREEiLCJzb3VyY2VzQ29udGVudCI6WyIjIGNvZmZlZWxpbnQ6IGRpc2FibGU9bWF4X2xpbmVfbGVuZ3RoXG5hbmd1bGFyLm1vZHVsZSAnaXJpc0FuZ3VsYXInXG4gIC5kaXJlY3RpdmUgJ3ZpZGVvY2hhdCcsIC0+XG4gICAgc2NvcGU6XG4gICAgICBwdWJrZXk6ICc9J1xuICAgICAgZ3VuOiAnPSdcbiAgICAgIHdhdGNoT25seTogJz0nXG4gICAgbGluazogKHNjb3BlLCBlbGVtZW50LCBhdHRycykgLT5cbiAgICAgIE1JTUVUWVBFX1ZJREVPX0FVRElPID0gJ3ZpZGVvL3dlYm07IGNvZGVjcz1cIm9wdXMsdnA4XCInXG4gICAgICBNSU1FVFlQRV9WSURFT19PTkxZID0gJ3ZpZGVvL3dlYm07IGNvZGVjcz1cInZwOFwiJ1xuICAgICAgTUlNRVRZUEVfQVVESU9fT05MWSA9ICd2aWRlby93ZWJtOyBjb2RlY3M9XCJvcHVzXCInXG4gICAgICBNSU1FX1RZUEVfVVNFID0gTUlNRVRZUEVfVklERU9fQVVESU9cbiAgICAgIFJFTU9URV9TVFJFQU1fSUQgPSBzY29wZS5wdWJrZXkgKyAnL3N0cmVhbSdcblxuICAgICAgcmVtb3RlVmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidmlkZW9cIilcbiAgICAgIHJlbW90ZVZpZGVvLmF1dG9wbGF5ID0gdHJ1ZVxuICAgICAgcmVtb3RlVmlkZW8uY29udHJvbHMgPSB0cnVlXG4gICAgICByZW1vdGVWaWRlby5wbGF5c2lubGluZSA9IHRydWVcbiAgICAgIHJlbW90ZVZpZGVvLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgcmVtb3RlVmlkZW8uc3R5bGUud2lkdGggPSBcIjUwJVwiXG4gICAgICByZW1vdGVWaWRlby5wcmVsb2FkID0gXCJub25lXCJcbiAgICAgIHJlbW90ZVZpZGVvLmlkID0gUkVNT1RFX1NUUkVBTV9JRFxuICAgICAgZWxlbWVudC5hcHBlbmQgcmVtb3RlVmlkZW9cblxuICAgICAgbXlWaWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJylcbiAgICAgIG15VmlkZW8uc2V0QXR0cmlidXRlKCdhdXRvcGxheScsIHRydWUpXG4gICAgICBteVZpZGVvLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnd2lkdGg6IDEwMCU7JylcbiAgICAgIG15VmlkZW8uc2V0QXR0cmlidXRlKCdwbGF5c2lubGluZScsIHRydWUpXG4gICAgICBteVZpZGVvLnNldEF0dHJpYnV0ZSgnY29udHJvbHMnLCB0cnVlKVxuICAgICAgbXlWaWRlby5pZCA9ICdyZWNvcmRfdmlkZW8nXG4gICAgICBlbGVtZW50LmFwcGVuZCBteVZpZGVvXG5cbiAgICAgIGJ1dHRvblJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBlbGVtZW50LmFwcGVuZCBidXR0b25Sb3dcblxuICAgICAgc3RhcnRDYW1lcmFCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgc3RhcnRDYW1lcmFCdXR0b24uaW5uZXJUZXh0ID0gJ3N0YXJ0IGNhbWVyYSdcbiAgICAgIHN0YXJ0Q2FtZXJhQnV0dG9uLnNldEF0dHJpYnV0ZSAnY2xhc3MnLCAnYnRuIGJ0bi1kZWZhdWx0J1xuICAgICAgc3RhcnRDYW1lcmFCdXR0b24uYWRkRXZlbnRMaXN0ZW5lciAnY2xpY2snLCAoKSAtPiBndW5SZWNvcmRlci5zdGFydENhbWVyYSgpXG4gICAgICBidXR0b25Sb3cuYXBwZW5kIHN0YXJ0Q2FtZXJhQnV0dG9uXG5cbiAgICAgIHN0YXJ0U2NyZWVuQ2FwdHVyZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICBzdGFydFNjcmVlbkNhcHR1cmVCdXR0b24uaW5uZXJUZXh0ID0gJ3N0YXJ0IHNjcmVlbiBjYXB0dXJlJ1xuICAgICAgc3RhcnRTY3JlZW5DYXB0dXJlQnV0dG9uLnNldEF0dHJpYnV0ZSAnY2xhc3MnLCAnYnRuIGJ0bi1kZWZhdWx0J1xuICAgICAgc3RhcnRTY3JlZW5DYXB0dXJlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIgJ2NsaWNrJywgKCkgLT4gZ3VuUmVjb3JkZXIuc3RhcnRTY3JlZW5DYXB0dXJlKClcbiAgICAgIGJ1dHRvblJvdy5hcHBlbmQgc3RhcnRTY3JlZW5DYXB0dXJlQnV0dG9uXG5cbiAgICAgIHJlY29yZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAjcmVjb3JkQnV0dG9uLmlubmVySHRtbCA9ICc8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tZmFjZXRpbWUtdmlkZW8gbWFyLXJpZ2h0NVwiPjwvc3Bhbj4gR28gbGl2ZSdcbiAgICAgIHJlY29yZEJ1dHRvbi5pbm5lclRleHQgPSAnZ28gbGl2ZSdcbiAgICAgIHJlY29yZEJ1dHRvbi5zZXRBdHRyaWJ1dGUgJ2NsYXNzJywgJ2J0biBidG4tZGVmYXVsdCdcbiAgICAgIHJlY29yZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyICdjbGljaycsICgpIC0+IGd1blJlY29yZGVyLnJlY29yZCgpXG4gICAgICBidXR0b25Sb3cuYXBwZW5kIHJlY29yZEJ1dHRvblxuXG4gICAgICAjQ29uZmlnIGZvciBjYW1lcmEgcmVjb3JkZXJcbiAgICAgIENBTUVSQV9PUFRJT05TID1cbiAgICAgICAgdmlkZW86XG4gICAgICAgICAgd2lkdGg6IDMyMFxuICAgICAgICAgIGhlaWdodDogMjgwXG4gICAgICAgICAgZmFjaW5nTW9kZTogJ2Vudmlyb25tZW50J1xuICAgICAgICAgIGZyYW1lUmF0ZTogMjRcbiAgICAgICAgYXVkaW86IHRydWVcbiAgICAgICNDb25maWd1cmUgR3VuVmlld2VyXG4gICAgICB2aWV3ZXJfY29uZmlnID1cbiAgICAgICAgbWltZVR5cGU6IE1JTUVfVFlQRV9VU0VcbiAgICAgICAgc3RyZWFtZXJJZDogUkVNT1RFX1NUUkVBTV9JRFxuICAgICAgICBjYXRjaHVwOiBmYWxzZVxuICAgICAgICBkZWJ1ZzogZmFsc2VcbiAgICAgIGd1blZpZXdlciA9IG5ldyBHdW5WaWV3ZXIodmlld2VyX2NvbmZpZylcbiAgICAgICNDb25maWd1cmUgR1VOIHRvIHBhc3MgdG8gc3RyZWFtZXJcbiAgICAgIHBlZXJzID0gWyAnaHR0cHM6Ly9ndW5tZWV0aW5nc2VydmVyLmhlcm9rdWFwcC5jb20vZ3VuJyBdXG4gICAgICBvcHQgPVxuICAgICAgICBwZWVyczogcGVlcnNcbiAgICAgICAgbG9jYWxTdG9yYWdlOiBmYWxzZVxuICAgICAgICByYWRpc2s6IGZhbHNlXG4gICAgICBndW5EQiA9IEd1bihvcHQpXG4gICAgICAjIEdldCBkYXRhIGZyb20gZ3VuIGFuZCBwYXNzIGFsb25nIHRvIHZpZXdlclxuICAgICAgZ3VuREIuZ2V0KFJFTU9URV9TVFJFQU1fSUQpLm9uIChkYXRhKSAtPlxuICAgICAgICBndW5WaWV3ZXIub25TdHJlYW1lckRhdGEgZGF0YVxuICAgICAgICByZXR1cm5cblxuICAgICAgdSA9IHNjb3BlLmd1bi51c2VyKClcbiAgICAgIG15UHViS2V5ID0gaWYgdS5fLnNlYSB0aGVuIHUuXy5zZWEucHViIGVsc2UgdW5kZWZpbmVkXG4gICAgICAjQ29uZmlnIGZvciB0aGUgR1VOIEd1blN0cmVhbWVyXG4gICAgICBzdHJlYW1lcl9jb25maWcgPVxuICAgICAgICBkYlJlY29yZDogJ2d1bm1lZXRpbmcnXG4gICAgICAgIHN0cmVhbUlkOiBteVB1YktleSArICcvc3RyZWFtJ1xuICAgICAgICBndW46IGd1bkRCXG4gICAgICAgIGRlYnVnOiBmYWxzZVxuICAgICAgICBvblN0cmVhbWVyRGF0YTogZ3VuVmlld2VyLm9uU3RyZWFtZXJEYXRhXG4gICAgICAgIHVybDogJy9hc3NldHMvanMvcGFyc2VyX3dvcmtlci5qcydcbiAgICAgICNHVU4gU3RyZWFtZXIgaXMgdGhlIGRhdGEgc2lkZS4gSXQgd2lsbCBjb252ZXJ0IGRhdGEgYW5kIHdyaXRlIHRvIEdVTiBkYlxuICAgICAgZ3VuU3RyZWFtZXIgPSBuZXcgR3VuU3RyZWFtZXIoc3RyZWFtZXJfY29uZmlnKVxuXG4gICAgICAjVGhpcyBpcyBhIGNhbGxiYWNrIGZ1bmN0aW9uIGFib3V0IHRoZSByZWNvcmRpbmcgc3RhdGUsIGZvbGxvd2luZyBzdGF0ZXMgcG9zc2libGVcbiAgICAgICMgU1RPUFBFRDogMcK4XG4gICAgICAjIFJFQ09SRElORzoyXG4gICAgICAjIE5PVF9BVkFJTEFCTEU6M1xuICAgICAgIyBVTktOT1dOOjRcbiAgICAgIG9uUmVjb3JkU3RhdGVDaGFuZ2UgPSAoc3RhdGUpIC0+XG4gICAgICAgIHN3aXRjaCBzdGF0ZVxuICAgICAgICAgIHdoZW4gcmVjb3JkU3RhdGUuUkVDT1JESU5HXG4gICAgICAgICAgICByZWNvcmRCdXR0b24uaW5uZXJIdG1sID0gJzxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1mYWNldGltZS12aWRlbyBtYXItcmlnaHQ1XCI+PC9zcGFuPiBHbyBvZmZsaW5lJ1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJlY29yZEJ1dHRvbi5pbm5lckh0bWwgPSAnPHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWZhY2V0aW1lLXZpZGVvIG1hci1yaWdodDVcIj48L3NwYW4+IEdvIGxpdmUnXG4gICAgICAgICAgICBicmVha1xuICAgICAgICByZXR1cm5cblxuICAgICAgcmVjb3JkZXJfY29uZmlnID1cbiAgICAgICAgbWltZVR5cGU6IE1JTUVfVFlQRV9VU0VcbiAgICAgICAgdmlkZW9faWQ6ICdyZWNvcmRfdmlkZW8nXG4gICAgICAgIG9uRGF0YUF2YWlsYWJsZTogZ3VuU3RyZWFtZXIub25EYXRhQXZhaWxhYmxlXG4gICAgICAgIG9uUmVjb3JkU3RhdGVDaGFuZ2U6IG9uUmVjb3JkU3RhdGVDaGFuZ2VcbiAgICAgICAgcmVjb3JkSW50ZXJ2YWw6IDgwMFxuICAgICAgICBjYW1lcmFPcHRpb25zOiBDQU1FUkFfT1BUSU9OU1xuICAgICAgICBkZWJ1ZzogZmFsc2VcbiAgICAgICNJbml0IHRoZSByZWNvcmRlclxuICAgICAgZ3VuUmVjb3JkZXIgPSBuZXcgR3VuUmVjb3JkZXIocmVjb3JkZXJfY29uZmlnKVxuXG4gICAgICBlbGVtZW50Lm9uICckZGVzdHJveScsIC0+XG4gICAgICAgIGd1blJlY29yZGVyLnNldFJlY29yZGluZ1N0YXRlKHJlY29yZFN0YXRlLlNUT1BQRUQpXG5cbiAgICAgIGdvID0gLT5cbiAgICAgICAgcmV0dXJuIHVubGVzcyBzY29wZS5ndW4gYW5kIHNjb3BlLnB1YmtleVxuICAgICAgICB1ID0gc2NvcGUuZ3VuLnVzZXIoKVxuICAgICAgICBteVB1YktleSA9IGlmIHUuXy5zZWEgdGhlbiB1Ll8uc2VhLnB1YiBlbHNlIHVuZGVmaW5lZFxuICAgICAgICBpZiBteVB1YktleSAhPSBzY29wZS5wdWJrZXlcbiAgICAgICAgICBpZiBzY29wZS53YXRjaE9ubHlcbiAgICAgICAgICAgIGJ1dHRvblJvdy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICAgICByZW1vdGVWaWRlby5zdHlsZS53aWR0aCA9ICcxMDAlJ1xuICAgICAgICAgICAgbXlWaWRlby5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICAgbXlWaWRlby5zdHlsZS53aWR0aCA9ICc1MCUnXG4gICAgICAgICAgcmVtb3RlVmlkZW8uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snXG4gICAgICAgICAgIyBvcGVuUmVtb3RlVmlkZW8oKVxuICAgICAgICBlbHNlXG4gICAgICAgICAgbXlWaWRlby5zdHlsZS53aWR0aCA9ICcxMDAlJ1xuICAgICAgICAgIHJlbW90ZVZpZGVvLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgc3RyZWFtSWQgPSBteVB1YktleSArICcvc3RyZWFtJ1xuICAgICAgc2NvcGUuJHdhdGNoICdndW4nLCBnb1xuIl19

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
        if (!msg.signedData.recipient) {
          msg.sameAuthorAndRecipient = true;
        } else {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9tZXNzYWdlL21lc3NhZ2UuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJjb21wb25lbnRzL21lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxhQUFmLENBQ0UsQ0FBQyxTQURILENBQ2EsU0FEYixFQUN3QixRQUFBLENBQUEsQ0FBQTtXQUNwQjtNQUFBLEtBQUEsRUFBTyxJQUFQO01BQ0EsUUFBQSxFQUFVLEdBRFY7TUFFQSxXQUFBLEVBQWEsOENBRmI7TUFHQSxJQUFBLEVBQU0sUUFBQSxDQUFDLEtBQUQsRUFBUSxPQUFSLEVBQWlCLEtBQWpCLENBQUE7QUFDSixZQUFBLENBQUEsRUFBQSxhQUFBLEVBQUEsS0FBQSxFQUFBLFVBQUEsRUFBQSxNQUFBLEVBQUEsQ0FBQSxFQUFBLEtBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLGFBQUEsRUFBQSxhQUFBLEVBQUEsR0FBQSxFQUFBLENBQUEsRUFBQSxhQUFBLEVBQUEsTUFBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxhQUFBLEVBQUEsZUFBQSxFQUFBLGFBQUEsRUFBQTtRQUFBLEdBQUEsR0FBTSxLQUFLLENBQUM7UUFDWixHQUFHLENBQUMsS0FBSixHQUFZO1FBQ1osZUFBQSxHQUFrQixRQUFBLENBQUMsU0FBRCxDQUFBO0FBQ2hCLGNBQUEsQ0FBQSxFQUFBLEtBQUEsRUFBQSxLQUFBLEVBQUE7VUFBQSxLQUFBLEdBQVE7VUFDUixLQUFBLEdBQVE7VUFDUixLQUFBLGNBQUE7O1lBQ0UsSUFBRyxDQUFBLEtBQUssTUFBUjtjQUNFLEtBQUE7Y0FDQSxJQUFnQixDQUFBLEtBQUssS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFyQixJQUErQixD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cUJBQ2hFLEdBQUcsQ0FBQyxPQUFKLEdBQWMscUNBQUEsR0FBd0MsS0FBeEMsR0FBZ0QsS0FQaEU7YUFBQSxNQVFLLElBQUcsTUFBQSxHQUFTLGFBQVo7Y0FDSCxHQUFHLENBQUMsU0FBSixHQUFnQjtjQUNoQixHQUFHLENBQUMsU0FBSixHQUFtQixhQUFBLEdBQWdCLENBQUMsQ0FBcEIsR0FBMkIsR0FBRyxDQUFDLFNBQS9CLEdBQThDLElBQUksS0FBSixDQUFVLElBQUksQ0FBQyxJQUFMLENBQVUsQ0FBQSxHQUFJLE1BQUosR0FBYSxhQUF2QixDQUFWO2NBQzlELEtBQUEsR0FBUSxDQUFDLE1BQUEsR0FBUyxhQUFULEdBQXlCLEdBQTFCLENBQUEsR0FBaUMsYUFBakMsR0FBaUQsSUFBakQsR0FBd0Q7cUJBQ2hFLEdBQUcsQ0FBQyxPQUFKLEdBQWMsb0NBQUEsR0FBdUMsS0FBdkMsR0FBK0MsS0FKMUQ7YUFBQSxNQUFBO2NBTUgsR0FBRyxDQUFDLE9BQUosR0FBYztxQkFDZCxHQUFHLENBQUMsU0FBSixHQUFnQiw0Q0FQYjs7QUF4QlQ7TUFoSUk7SUFITjtFQURvQixDQUR4QjtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUgJ2lyaXNBbmd1bGFyJ1xuICAuZGlyZWN0aXZlICdtZXNzYWdlJywgLT5cbiAgICBzY29wZTogdHJ1ZVxuICAgIHJlc3RyaWN0OiAnRSdcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL21lc3NhZ2UvbWVzc2FnZS50ZW1wbGF0ZS5odG1sJ1xuICAgIGxpbms6IChzY29wZSwgZWxlbWVudCwgYXR0cnMpIC0+XG4gICAgICBtc2cgPSBzY29wZS5tc2dcbiAgICAgIG1zZy5saWtlcyA9IDBcbiAgICAgIHVwZGF0ZVJlYWN0aW9ucyA9IChyZWFjdGlvbnMpIC0+XG4gICAgICAgIGxpa2VzID0gMFxuICAgICAgICBsaWtlZCA9IGZhbHNlXG4gICAgICAgIGZvciBrLCB2IG9mIHJlYWN0aW9uc1xuICAgICAgICAgIGlmIHYgPT0gJ2xpa2UnXG4gICAgICAgICAgICBsaWtlcysrXG4gICAgICAgICAgICBsaWtlZCA9IHRydWUgaWYgayA9PSBzY29wZS52aWV3cG9pbnQudmFsdWUgYW5kIHYgPT0gJ2xpa2UnXG4gICAgICAgIG1zZy5saWtlcyA9IGxpa2VzXG4gICAgICAgIG1zZy5saWtlZCA9IGxpa2VkXG4gICAgICBpZiBtc2cuc2lnbmVkRGF0YS5zaGFyZWRNc2cgYW5kIG5vdCBvcHRpb25zLm5vUmVjdXJzaW9uXG4gICAgICAgIHNjb3BlLmlyaXNJbmRleC5nZXRNZXNzYWdlQnlIYXNoKG1zZy5zaWduZWREYXRhLnNoYXJlZE1zZykudGhlbiAobSkgLT5cbiAgICAgICAgICBtc2cuc2hhcmVkTXNnID0gbVxuICAgICAgdXBkYXRlUmVhY3Rpb25zKG1zZy5yZWFjdGlvbnMpIGlmIG1zZy5yZWFjdGlvbnNcbiAgICAgIG1zZy5yZXBsaWVzQXJyID0gbXNnLnJlcGxpZXNBcnIgb3IgW11cbiAgICAgIG1zZy5yZXBsaWVzID0gbXNnLnJlcGxpZXMgb3Ige31cbiAgICAgIG1zZy5zaGFyZXNBcnIgPSBtc2cuc2hhcmVzQXJyIG9yIFtdXG4gICAgICBtc2cuc2hhcmVzID0gbXNnLnNoYXJlcyBvciB7fVxuICAgICAgdXBkYXRlUmVwbGllcyA9IChyZXBsaWVzKSAtPlxuICAgICAgICBmb3IgaGFzaCwgcmVwbHlSYXcgb2YgcmVwbGllc1xuICAgICAgICAgIHdpbmRvdy5pcmlzTGliLk1lc3NhZ2UuZnJvbVNpZyhyZXBseVJhdykudGhlbiAocikgLT5cbiAgICAgICAgICAgIHVubGVzcyBtc2cucmVwbGllc1tyLmdldEhhc2goKV0gYW5kIG1zZy5yZXBsaWVzW3IuZ2V0SGFzaCgpXS5hdXRob3JcbiAgICAgICAgICAgICAgaWYgbXNnLnNpZ25lZERhdGEucG9sbE9wdGlvbnMgYW5kIHIuc2lnbmVkRGF0YS50eXBlID09ICd2b3RlJ1xuICAgICAgICAgICAgICAgIHVubGVzcyBtc2cudm90ZU1zZ3MgYW5kIG1zZy52b3RlTXNncy5oYXNPd25Qcm9wZXJ0eShyLmdldFNpZ25lcktleUlEKCkpXG4gICAgICAgICAgICAgICAgICBtc2cudm90ZUNvdW50ID0gaWYgbXNnLnZvdGVDb3VudCB0aGVuIG1zZy52b3RlQ291bnQgKyAxIGVsc2UgMVxuICAgICAgICAgICAgICAgICAgaWYgIW1zZy5teVZvdGUgYW5kIHIuZ2V0U2lnbmVyS2V5SUQoKSA9PSBzY29wZS5hdXRoZW50aWNhdGlvbi51c2VyLmlkVmFsdWVcbiAgICAgICAgICAgICAgICAgICAgbXNnLm15Vm90ZSA9IHIuc2lnbmVkRGF0YS52b3RlXG4gICAgICAgICAgICAgICAgICBtc2cudm90ZU1zZ3MgPSBtc2cudm90ZU1zZ3Mgb3Ige31cbiAgICAgICAgICAgICAgICAgIG1zZy52b3RlTXNnc1tyLmdldFNpZ25lcktleUlEKCldID0gci5nZXRIYXNoKClcbiAgICAgICAgICAgICAgICAgIHVubGVzcyBtc2cudm90ZVJlc3VsdHNcbiAgICAgICAgICAgICAgICAgICAgbXNnLnZvdGVSZXN1bHRzID0ge31cbiAgICAgICAgICAgICAgICAgICAgbXNnLnZvdGVSZXN1bHRzW28udGV4dF0gPSAwIGZvciBvIGluIG1zZy5zaWduZWREYXRhLnBvbGxPcHRpb25zXG4gICAgICAgICAgICAgICAgICBpZiBtc2cudm90ZVJlc3VsdHMuaGFzT3duUHJvcGVydHkoci5zaWduZWREYXRhLnZvdGUpXG4gICAgICAgICAgICAgICAgICAgIG1zZy52b3RlUmVzdWx0c1tyLnNpZ25lZERhdGEudm90ZV0gPSBtc2cudm90ZVJlc3VsdHNbci5zaWduZWREYXRhLnZvdGVdICsgMVxuICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBtc2cudm90ZVJlc3VsdHNbci5zaWduZWREYXRhLnZvdGVdID0gMVxuICAgICAgICAgICAgICBtc2cucmVwbGllc1tyLmdldEhhc2goKV0gPSByXG4gICAgICAgICAgICAgIG1zZy5yZXBsaWVzQXJyID0gT2JqZWN0LnZhbHVlcyhtc2cucmVwbGllcylcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cgMTExMSwgciwgbXNnIGlmIHIuc2lnbmVkRGF0YS50eXBlID09ICd2b3RlJ1xuICAgICAgdXBkYXRlU2hhcmVzID0gKHNoYXJlcykgLT5cbiAgICAgICAgZm9yIGhhc2gsIHNoYXJlUmF3IG9mIHNoYXJlc1xuICAgICAgICAgIHdpbmRvdy5pcmlzTGliLk1lc3NhZ2UuZnJvbVNpZyhzaGFyZVJhdykudGhlbiAocikgLT5cbiAgICAgICAgICAgIHVubGVzcyBtc2cuc2hhcmVzW3IuZ2V0SGFzaCgpXSBhbmQgbXNnLnNoYXJlc1tyLmdldEhhc2goKV0uYXV0aG9yXG4gICAgICAgICAgICAgIG1zZy5zaGFyZXNbci5nZXRIYXNoKCldID0gclxuICAgICAgICAgICAgICBtc2cuc2hhcmVzQXJyID0gT2JqZWN0LnZhbHVlcyhtc2cuc2hhcmVzKVxuICAgICAgaWYgbXNnLmd1blxuICAgICAgICBtc2cuZ3VuLmdldCgncmVwbGllcycpLm9wZW4gdXBkYXRlUmVwbGllc1xuICAgICAgICBtc2cuZ3VuLmdldCgncmVhY3Rpb25zJykub24gdXBkYXRlUmVhY3Rpb25zXG4gICAgICAgIG1zZy5ndW4uZ2V0KCdzaGFyZXMnKS5vcGVuIHVwZGF0ZVNoYXJlc1xuICAgICAgdW5sZXNzIG1zZy5hdXRob3JcbiAgICAgICAgbXNnLmF1dGhvciA9IG1zZy5nZXRBdXRob3Ioc2NvcGUuaXJpc0luZGV4KVxuICAgICAgICBtc2cuYXV0aG9yLmd1bi5nZXQoJ3RydXN0RGlzdGFuY2UnKS5vbiAoZCkgLT4gbXNnLmF1dGhvclRydXN0RGlzdGFuY2UgPSBkXG4gICAgICBtc2cuYXV0aG9yLmd1bi5nZXQoJ2F0dHJzJykub3BlbiAoZCkgLT5cbiAgICAgICAgbXZhID0gd2luZG93LmlyaXNMaWIuSWRlbnRpdHkuZ2V0TW9zdFZlcmlmaWVkQXR0cmlidXRlcyhkKVxuICAgICAgICBpZiBtdmEubmFtZVxuICAgICAgICAgIHNjb3BlLiRhcHBseSAtPiBtc2cuYXV0aG9yX25hbWUgPSBtdmEubmFtZS5hdHRyaWJ1dGUudmFsdWVcbiAgICAgICAgZWxzZSBpZiBtdmEubmlja25hbWVcbiAgICAgICAgICBzY29wZS4kYXBwbHkgLT4gbXNnLmF1dGhvcl9uYW1lID0gbXZhLm5pY2tuYW1lLmF0dHJpYnV0ZS52YWx1ZVxuICAgICAgaWYgbXNnLnNpZ25lZERhdGEucmVjaXBpZW50XG4gICAgICAgIG1zZy5yZWNpcGllbnQgPSBtc2cuZ2V0UmVjaXBpZW50KHNjb3BlLmlyaXNJbmRleClcbiAgICAgICAgbXNnLnJlY2lwaWVudC5ndW4uZ2V0KCdhdHRycycpLm9wZW4gKGQpIC0+XG4gICAgICAgICAgbXZhID0gd2luZG93LmlyaXNMaWIuSWRlbnRpdHkuZ2V0TW9zdFZlcmlmaWVkQXR0cmlidXRlcyhkKVxuICAgICAgICAgIGlmIG12YS5uYW1lXG4gICAgICAgICAgICBzY29wZS4kYXBwbHkgLT4gbXNnLnJlY2lwaWVudF9uYW1lID0gbXZhLm5hbWUuYXR0cmlidXRlLnZhbHVlXG4gICAgICAgICAgZWxzZSBpZiBtdmEubmlja25hbWVcbiAgICAgICAgICAgIHNjb3BlLiRhcHBseSAtPiBtc2cucmVjaXBpZW50X25hbWUgPSBtdmEubmlja25hbWUuYXR0cmlidXRlLnZhbHVlXG4gICAgICBpZiBtc2cuc2lnbmVkRGF0YS5hdHRhY2htZW50c1xuICAgICAgICBtc2cuYXR0YWNobWVudHMgPSBbXVxuICAgICAgICBhZGRBdHRhY2htZW50ID0gKGF0dGFjaG1lbnQpIC0+XG4gICAgICAgICAgaWYgYXR0YWNobWVudC51cmlcbiAgICAgICAgICAgIHR5cGUgPSBhdHRhY2htZW50LnR5cGUgb3IgJ2ltYWdlJ1xuICAgICAgICAgICAgdHlwZVN1YnN0ciA9IGF0dGFjaG1lbnQudHlwZS5zdWJzdHIoMCw1KVxuICAgICAgICAgICAgaWYgdHlwZVN1YnN0ciBpbiBbJ2F1ZGlvJywgJ3ZpZGVvJ11cbiAgICAgICAgICAgICAgbXNnLmF0dGFjaG1lbnRzLnB1c2ggT2JqZWN0LmFzc2lnbiB7dHlwZSwgdHlwZVN1YnN0cn0sIGF0dGFjaG1lbnRcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cgbXNnLmF0dGFjaG1lbnRzXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgIHNjb3BlLmlwZnNHZXQoYXR0YWNobWVudC51cmksIHtiYXNlNjR0eXBlOiB0eXBlfSkudGhlbiAoc3JjKSAtPlxuICAgICAgICAgICAgICAgIHNjb3BlLiRhcHBseSAtPlxuICAgICAgICAgICAgICAgICAgbXNnLmF0dGFjaG1lbnRzLnB1c2ggT2JqZWN0LmFzc2lnbiB7c3JjLCB0eXBlLCB0eXBlU3Vic3RyfSwgYXR0YWNobWVudFxuICAgICAgICBhZGRBdHRhY2htZW50KGF0dGFjaG1lbnQpIGZvciBhdHRhY2htZW50IGluIG1zZy5zaWduZWREYXRhLmF0dGFjaG1lbnRzXG4gICAgICAjIFRPRE86IG1ha2Ugc3VyZSBtZXNzYWdlIHNpZ25hdHVyZSBpcyBjaGVja2VkXG4gICAgICBpID0gdW5kZWZpbmVkXG4gICAgICBpID0gMFxuICAgICAgc21hbGxlc3RJbmRleCA9IDEwMDBcbiAgICAgIG1zZy5hdXRob3JBcnJheSA9IG1zZy5nZXRBdXRob3JBcnJheSgpXG4gICAgICBmb3IgYSBpbiBtc2cuYXV0aG9yQXJyYXlcbiAgICAgICAgbXNnLmxpbmtUb0F1dGhvciA9IGEgdW5sZXNzIG1zZy5saW5rVG9BdXRob3JcbiAgICAgICAgaW5kZXggPSBPYmplY3Qua2V5cyh3aW5kb3cuaXJpc0xpYi5BdHRyaWJ1dGUuZ2V0VW5pcXVlSWRWYWxpZGF0b3JzKCkpLmluZGV4T2YoYS50eXBlKVxuICAgICAgICBpZiBpbmRleCA+IC0xIGFuZCBpbmRleCA8IHNtYWxsZXN0SW5kZXhcbiAgICAgICAgICBzbWFsbGVzdEluZGV4ID0gaW5kZXhcbiAgICAgICAgICBtc2cubGlua1RvQXV0aG9yID0gYVxuICAgICAgICBlbHNlIGlmICFtc2cuYXV0aG9yX25hbWUgYW5kIGEudHlwZSBpbiBbJ25hbWUnLCAnbmlja25hbWUnXVxuICAgICAgICAgIG1zZy5hdXRob3JfbmFtZSA9IGEudmFsdWVcbiAgICAgICAgaSsrXG4gICAgICBpID0gMFxuICAgICAgc21hbGxlc3RJbmRleCA9IDEwMDBcbiAgICAgIGlmIG5vdCBtc2cuc2lnbmVkRGF0YS5yZWNpcGllbnRcbiAgICAgICAgbXNnLnNhbWVBdXRob3JBbmRSZWNpcGllbnQgPSB0cnVlXG4gICAgICBlbHNlXG4gICAgICAgIG1zZy5yZWNpcGllbnRBcnJheSA9IG1zZy5nZXRSZWNpcGllbnRBcnJheSgpXG4gICAgICAgIGZvciBhIGluIG1zZy5yZWNpcGllbnRBcnJheVxuICAgICAgICAgIG1zZy5saW5rVG9SZWNpcGllbnQgPSBhIHVubGVzcyBtc2cubGlua1RvQXV0aG9yXG4gICAgICAgICAgaW5kZXggPSBPYmplY3Qua2V5cyh3aW5kb3cuaXJpc0xpYi5BdHRyaWJ1dGUuZ2V0VW5pcXVlSWRWYWxpZGF0b3JzKCkpLmluZGV4T2YoYS50eXBlKVxuICAgICAgICAgIGlmIGluZGV4ID4gLTEgYW5kIGluZGV4IDwgc21hbGxlc3RJbmRleFxuICAgICAgICAgICAgc21hbGxlc3RJbmRleCA9IGluZGV4XG4gICAgICAgICAgICBtc2cubGlua1RvUmVjaXBpZW50ID0gYVxuICAgICAgICAgIGVsc2UgaWYgIW1zZy5yZWNpcGllbnRfbmFtZSBhbmQgYS50eXBlIGluIFsnbmFtZScsICduaWNrbmFtZSddXG4gICAgICAgICAgICBtc2cucmVjaXBpZW50X25hbWUgPSBhLnZhbHVlXG4gICAgICAgICAgaSsrXG4gICAgICAgIGlmIG1zZy5saW5rVG9BdXRob3IuZXF1YWxzKG1zZy5saW5rVG9SZWNpcGllbnQpXG4gICAgICAgICAgbXNnLnNhbWVBdXRob3JBbmRSZWNpcGllbnQgPSB0cnVlXG4gICAgICAgIGlmICFtc2cuYXV0aG9yX25hbWVcbiAgICAgICAgICBtc2cuYXV0aG9yX25hbWUgPSBtc2cubGlua1RvQXV0aG9yLnZhbHVlXG4gICAgICAgICAgaWYgbXNnLmxpbmtUb0F1dGhvci50eXBlIGluIFsna2V5SUQnLCAndXVpZCddXG4gICAgICAgICAgICBtc2cuYXV0aG9yX25hbWUgPSBtc2cuYXV0aG9yX25hbWUuc2xpY2UoMCwgNikgKyAnLi4uJ1xuICAgICAgICBpZiAhbXNnLnJlY2lwaWVudF9uYW1lXG4gICAgICAgICAgbXNnLnJlY2lwaWVudF9uYW1lID0gbXNnLmxpbmtUb1JlY2lwaWVudC52YWx1ZVxuICAgICAgICAgIGlmIG1zZy5saW5rVG9BdXRob3IudHlwZSBpbiBbJ2tleUlEJywgJ3V1aWQnXVxuICAgICAgICAgICAgbXNnLnJlY2lwaWVudF9uYW1lID0gbXNnLnJlY2lwaWVudF9uYW1lLnNsaWNlKDAsIDYpICsgJy4uLidcbiAgICAgIGlmIG1zZy5zaWduZWREYXRhLnRleHQgYW5kIG1zZy5zaWduZWREYXRhLnRleHQubGVuZ3RoIDw9IDJcbiAgICAgICAgZW1vamlzID0gJ1xcdTAwYTl8XFx1MDBhZXxbXFx1MjAwMC1cXHUzMzAwXXxcXHVkODNjW1xcdWQwMDAtXFx1ZGZmZl18XFx1ZDgzZFtcXHVkMDAwLVxcdWRmZmZdfFxcdWQ4M2VbXFx1ZDAwMC1cXHVkZmZmXSdcbiAgICAgICAgaWYgbXNnLnNpZ25lZERhdGEudGV4dC5tYXRjaChuZXcgUmVnRXhwKGVtb2ppcywgJ2cnKSkubGVuZ3RoXG4gICAgICAgICAgbXNnLmVtb2ppc09ubHkgPSB0cnVlXG4gICAgICBhbHBoYSA9IHVuZGVmaW5lZFxuICAgICAgbXNnLmJnQ29sb3IgPSAnJ1xuICAgICAgbXNnLmljb25Db3VudCA9IG5ldyBBcnJheSgxKVxuICAgICAgc3dpdGNoIG1zZy5zaWduZWREYXRhLnR5cGVcbiAgICAgICAgd2hlbiAndmVyaWZ5X2lkZW50aXR5JywgJ3ZlcmlmaWNhdGlvbidcbiAgICAgICAgICBtc2cuaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tb2stc2lnbidcbiAgICAgICAgICBtc2cuaXNWZXJpZmljYXRpb24gPSB0cnVlXG4gICAgICAgIHdoZW4gJ3VudmVyaWZ5X2lkZW50aXR5JywgJ3VudmVyaWZpY2F0aW9uJ1xuICAgICAgICAgIG1zZy5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgbmVnYXRpdmUnXG4gICAgICAgICAgbXNnLmJnQ29sb3IgPSAnYmFja2dyb3VuZC1jb2xvcjogI0ZGRjBERTtib3JkZXItY29sb3I6I0ZGRTJDNjsnXG4gICAgICAgICAgbXNnLmlzVW52ZXJpZmljYXRpb24gPSB0cnVlXG4gICAgICAgIHdoZW4gJ3Bvc3QnXG4gICAgICAgICAgbXNnLmljb25TdHlsZSA9ICcnICMgZmEgZmEtcGVuY2lsXG4gICAgICAgICAgbXNnLmlzUG9zdCA9IHRydWVcbiAgICAgICAgd2hlbiAncmF0aW5nJ1xuICAgICAgICAgIHJhdGluZyA9IG1zZy5zaWduZWREYXRhLnJhdGluZ1xuICAgICAgICAgIG5ldXRyYWxSYXRpbmcgPSAobXNnLnNpZ25lZERhdGEubWluUmF0aW5nICsgbXNnLnNpZ25lZERhdGEubWF4UmF0aW5nKSAvIDJcbiAgICAgICAgICBtYXhSYXRpbmdEaWZmID0gbXNnLnNpZ25lZERhdGEubWF4UmF0aW5nIC0gbmV1dHJhbFJhdGluZ1xuICAgICAgICAgIG1pblJhdGluZ0RpZmYgPSBtc2cuc2lnbmVkRGF0YS5taW5SYXRpbmcgLSBuZXV0cmFsUmF0aW5nXG4gICAgICAgICAgaWYgcmF0aW5nID4gbmV1dHJhbFJhdGluZ1xuICAgICAgICAgICAgaWYgbXNnLnNpZ25lZERhdGEuY29udGV4dCA9PSAndmVyaWZpZXInXG4gICAgICAgICAgICAgIG1zZy5pY29uU3R5bGUgPSAnZmEgZmEtc2hpZWxkIHBvc2l0aXZlJ1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICBtc2cuaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tdGh1bWJzLXVwIHBvc2l0aXZlJ1xuICAgICAgICAgICAgICBtc2cuaWNvbkNvdW50ID0gaWYgbWF4UmF0aW5nRGlmZiA8IDIgdGhlbiBtc2cuaWNvbkNvdW50IGVsc2UgbmV3IEFycmF5KE1hdGguY2VpbCgzICogcmF0aW5nIC8gbWF4UmF0aW5nRGlmZikpXG4gICAgICAgICAgICBhbHBoYSA9IChyYXRpbmcgLSBuZXV0cmFsUmF0aW5nIC0gMC41KSAvIG1heFJhdGluZ0RpZmYgLyAxLjI1ICsgMC4yXG4gICAgICAgICAgICBtc2cuYmdDb2xvciA9ICdiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMywyNDAsMjE2LCcgKyBhbHBoYSArICcpOydcbiAgICAgICAgICBlbHNlIGlmIHJhdGluZyA8IG5ldXRyYWxSYXRpbmdcbiAgICAgICAgICAgIG1zZy5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi10aHVtYnMtZG93biBuZWdhdGl2ZSdcbiAgICAgICAgICAgIG1zZy5pY29uQ291bnQgPSBpZiBtaW5SYXRpbmdEaWZmID4gLTIgdGhlbiBtc2cuaWNvbkNvdW50IGVsc2UgbmV3IEFycmF5KE1hdGguY2VpbCgzICogcmF0aW5nIC8gbWluUmF0aW5nRGlmZikpXG4gICAgICAgICAgICBhbHBoYSA9IChyYXRpbmcgLSBuZXV0cmFsUmF0aW5nICsgMC41KSAvIG1pblJhdGluZ0RpZmYgLyAxLjI1ICsgMC4yXG4gICAgICAgICAgICBtc2cuYmdDb2xvciA9ICdiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjQyLDIyMiwyMjIsJyArIGFscGhhICsgJyk7J1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIG1zZy5iZ0NvbG9yID0gJ2JhY2tncm91bmQtY29sb3I6ICNmY2Y4ZTM7J1xuICAgICAgICAgICAgbXNnLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLXF1ZXN0aW9uLXNpZ24gbmV1dHJhbCdcbiJdfQ==

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
        audio: new Audio('/assets/audio/notification.mp3'),
        create: function(notification) {
          var defaultOptions,
    desktopNotification;
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
          if (!this.audioNotificationsDisabled) {
            this.audio.play();
          }
          if (!notification.seen) {
            if (notification.type === 'post') {
              this.unseenPosts++;
            }
            if (notification.type === 'chat') {
              this.unseenChats++;
            }
          }
          uiNotification(notification);
          if (document.hidden && !this.desktopNotificationsDisabled) {
            if (window.Notification && Notification.permission === 'granted') {
              console.log('notifying');
              desktopNotification = new Notification(notification.from,
    {
                icon: '/assets/images/icon128.png',
                body: notification.text
              });
              return desktopNotification.onclick = function() {
                uiNotification.clearAll();
                if (notification.onClick) {
                  notification.onClick();
                }
                return window.focus();
              };
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMvbm90aWZpY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VzIjpbInNlcnZpY2VzL25vdGlmaWNhdGlvbi5zZXJ2aWNlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBO0VBQ0EsT0FBTyxDQUFDLE1BQVIsQ0FBZSxhQUFmLENBQTZCLENBQUMsT0FBOUIsQ0FBc0MscUJBQXRDLEVBQTZEO0lBQzNELGNBRDJEO0lBRTNELFFBQUEsQ0FBQyxjQUFELENBQUE7YUFDRTtRQUNFLGFBQUEsRUFBZSxFQURqQjtRQUVFLFdBQUEsRUFBYSxDQUZmO1FBR0UsV0FBQSxFQUFhLENBSGY7UUFJRSxLQUFBLEVBQU8sSUFBSSxLQUFKLENBQVUsZ0NBQVYsQ0FKVDtRQUtFLE1BQUEsRUFBUSxRQUFBLENBQUMsWUFBRCxDQUFBO0FBQ04sY0FBQSxjQUFBO0lBQUE7VUFBQSxjQUFBLEdBQ0U7WUFBQSxJQUFBLEVBQU0sS0FBTjtZQUNBLElBQUEsRUFBTSxFQUROO1lBRUEsSUFBQSxFQUFNLEVBRk47WUFHQSxJQUFBLEVBQU0sU0FITjtZQUlBLFNBQUEsRUFBVyxPQUpYO1lBS0EsU0FBQSxFQUFXLFFBTFg7WUFNQSxLQUFBLEVBQU8sS0FOUDtZQU9BLGNBQUEsRUFBZ0IsSUFQaEI7WUFRQSxXQUFBLEVBQWE7VUFSYjtVQVNGLFlBQUEsR0FBZSxNQUFNLENBQUMsTUFBUCxDQUFjLGNBQWQ7SUFBOEIsWUFBOUI7VUFDZixZQUFZLENBQUMsT0FBYixHQUF1QixDQUFBLENBQUEsQ0FBRyxZQUFZLENBQUMsSUFBaEIsQ0FBcUIsRUFBckIsQ0FBQSxDQUF5QixZQUFZLENBQUMsSUFBdEMsQ0FBQTtVQUN2QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQW5CLENBQXdCLFlBQXhCO1VBQ0EsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFuQixDQUEwQixFQUExQixFQWJBO1VBY0EsSUFBQSxDQUF5QixJQUFJLENBQUMsMEJBQTlCO1lBQUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFYLENBQUEsRUFBQTs7VUFDQSxJQUFBLENBQU8sWUFBWSxDQUFDLElBQXBCO1lBQ0UsSUFBc0IsWUFBWSxDQUFDLElBQWIsS0FBcUIsTUFBM0M7Y0FBQSxJQUFJLENBQUMsV0FBTCxHQUFBOztZQUNBLElBQXNCLFlBQVksQ0FBQyxJQUFiLEtBQXFCLE1BQTNDO2NBQUEsSUFBSSxDQUFDLFdBQUwsR0FBQTthQUZGOztVQUdBLGNBQUEsQ0FBZSxZQUFmO1VBQ0EsSUFBRyxRQUFRLENBQUMsTUFBVCxJQUFvQixDQUFJLElBQUksQ0FBQyw0QkFBaEM7WUFDRSxJQUFHLE1BQU0sQ0FBQyxZQUFQLElBQXdCLFlBQVksQ0FBQyxVQUFiLEtBQTJCLFNBQXREO2NBQ0UsT0FBTyxDQUFDLEdBQVIsQ0FBWSxXQUFaO2NBQ0EsbUJBQUEsR0FBc0IsSUFBSSxZQUFKLENBQWlCLFlBQVksQ0FBQyxJQUE5QjtJQUNwQjtnQkFBQSxJQUFBLEVBQU0sNEJBQU47Z0JBQ0EsSUFBQSxFQUFNLFlBQVksQ0FBQztjQURuQixDQURvQjtxQkFHdEIsbUJBQW1CLENBQUMsT0FBcEIsR0FBOEIsUUFBQSxDQUFBLENBQUE7Z0JBQzVCLGNBQWMsQ0FBQyxRQUFmLENBQUE7Z0JBQ0EsSUFBMEIsWUFBWSxDQUFDLE9BQXZDO2tCQUFBLFlBQVksQ0FBQyxPQUFiLENBQUEsRUFBQTs7dUJBQ0EsTUFBTSxDQUFDLEtBQVAsQ0FBQTtjQUg0QixFQUxoQzthQURGOztRQXBCTSxDQUxWO1FBbUNFLGFBQUEsRUFBZSxRQUFBLENBQUMsT0FBRCxDQUFBO0FBQ2IsY0FBQSxDQUFBO0lBQUEsR0FBQTtJQUFBLENBQUE7SUFBQTtBQUFBO1VBQUEsS0FBQSxxQ0FBQTs7WUFDRSxJQUFpQixDQUFDLENBQUMsSUFBRixLQUFVLE1BQTNCO2NBQUEsQ0FBQyxDQUFDLElBQUYsR0FBUyxLQUFUOztVQURGO2lCQUVBLElBQUksQ0FBQyxXQUFMLEdBQW1CO1FBSE4sQ0FuQ2pCO1FBdUNFLGFBQUEsRUFBZSxRQUFBLENBQUMsT0FBRCxDQUFBO0FBQ2IsY0FBQSxDQUFBO0lBQUEsR0FBQTtJQUFBLENBQUE7SUFBQTtBQUFBO1VBQUEsS0FBQSxxQ0FBQTs7WUFDRSxJQUFpQixDQUFDLENBQUMsSUFBRixLQUFVLE1BQTNCO2NBQUEsQ0FBQyxDQUFDLElBQUYsR0FBUyxLQUFUOztVQURGO2lCQUVBLElBQUksQ0FBQyxXQUFMLEdBQW1CO1FBSE47TUF2Q2pCO0lBREYsQ0FGMkQ7R0FBN0Q7QUFEQSIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuYW5ndWxhci5tb2R1bGUoJ2lyaXNBbmd1bGFyJykuc2VydmljZSAnTm90aWZpY2F0aW9uU2VydmljZScsIFtcbiAgJ05vdGlmaWNhdGlvbicsXG4gICh1aU5vdGlmaWNhdGlvbikgLT5cbiAgICB7XG4gICAgICBub3RpZmljYXRpb25zOiBbXVxuICAgICAgdW5zZWVuQ2hhdHM6IDBcbiAgICAgIHVuc2VlblBvc3RzOiAwXG4gICAgICBhdWRpbzogbmV3IEF1ZGlvKCcvYXNzZXRzL2F1ZGlvL25vdGlmaWNhdGlvbi5tcDMnKVxuICAgICAgY3JlYXRlOiAobm90aWZpY2F0aW9uKSAtPlxuICAgICAgICBkZWZhdWx0T3B0aW9ucyA9XG4gICAgICAgICAgc2VlbjogZmFsc2VcbiAgICAgICAgICBmcm9tOiAnJ1xuICAgICAgICAgIHRleHQ6ICcnXG4gICAgICAgICAgdHlwZTogJ3ByaW1hcnknXG4gICAgICAgICAgcG9zaXRpb25YOiAncmlnaHQnXG4gICAgICAgICAgcG9zaXRpb25ZOiAnYm90dG9tJ1xuICAgICAgICAgIGRlbGF5OiAxMDAwMFxuICAgICAgICAgIHJlcGxhY2VNZXNzYWdlOiB0cnVlXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvc2VydmljZXMvbm90aWZpY2F0aW9uLnRlbXBsYXRlLmh0bWwnXG4gICAgICAgIG5vdGlmaWNhdGlvbiA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdE9wdGlvbnMsIG5vdGlmaWNhdGlvbilcbiAgICAgICAgbm90aWZpY2F0aW9uLm1lc3NhZ2UgPSBcIiN7bm90aWZpY2F0aW9uLmZyb219OiAje25vdGlmaWNhdGlvbi50ZXh0fVwiXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9ucy5wdXNoIG5vdGlmaWNhdGlvblxuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnMuc3BsaWNlIDEwICMgbWF4aW11bSBub3RpZmljYXRpb25zIGxlbmd0aFxuICAgICAgICB0aGlzLmF1ZGlvLnBsYXkoKSB1bmxlc3MgdGhpcy5hdWRpb05vdGlmaWNhdGlvbnNEaXNhYmxlZFxuICAgICAgICB1bmxlc3Mgbm90aWZpY2F0aW9uLnNlZW5cbiAgICAgICAgICB0aGlzLnVuc2VlblBvc3RzKysgaWYgbm90aWZpY2F0aW9uLnR5cGUgPT0gJ3Bvc3QnXG4gICAgICAgICAgdGhpcy51bnNlZW5DaGF0cysrIGlmIG5vdGlmaWNhdGlvbi50eXBlID09ICdjaGF0J1xuICAgICAgICB1aU5vdGlmaWNhdGlvbiBub3RpZmljYXRpb25cbiAgICAgICAgaWYgZG9jdW1lbnQuaGlkZGVuIGFuZCBub3QgdGhpcy5kZXNrdG9wTm90aWZpY2F0aW9uc0Rpc2FibGVkXG4gICAgICAgICAgaWYgd2luZG93Lk5vdGlmaWNhdGlvbiBhbmQgTm90aWZpY2F0aW9uLnBlcm1pc3Npb24gPT0gJ2dyYW50ZWQnXG4gICAgICAgICAgICBjb25zb2xlLmxvZyAnbm90aWZ5aW5nJ1xuICAgICAgICAgICAgZGVza3RvcE5vdGlmaWNhdGlvbiA9IG5ldyBOb3RpZmljYXRpb24obm90aWZpY2F0aW9uLmZyb20sXG4gICAgICAgICAgICAgIGljb246ICcvYXNzZXRzL2ltYWdlcy9pY29uMTI4LnBuZydcbiAgICAgICAgICAgICAgYm9keTogbm90aWZpY2F0aW9uLnRleHQpXG4gICAgICAgICAgICBkZXNrdG9wTm90aWZpY2F0aW9uLm9uY2xpY2sgPSAtPlxuICAgICAgICAgICAgICB1aU5vdGlmaWNhdGlvbi5jbGVhckFsbCgpXG4gICAgICAgICAgICAgIG5vdGlmaWNhdGlvbi5vbkNsaWNrKCkgaWYgbm90aWZpY2F0aW9uLm9uQ2xpY2tcbiAgICAgICAgICAgICAgd2luZG93LmZvY3VzKClcbiAgICAgIG1hcmtDaGF0c1NlZW46IChvcHRpb25zKSAtPlxuICAgICAgICBmb3IgbiBpbiB0aGlzLm5vdGlmaWNhdGlvbnNcbiAgICAgICAgICBuLnNlZW4gPSB0cnVlIGlmIG4udHlwZSA9PSAnY2hhdCdcbiAgICAgICAgdGhpcy51bnNlZW5DaGF0cyA9IDBcbiAgICAgIG1hcmtQb3N0c1NlZW46IChvcHRpb25zKSAtPlxuICAgICAgICBmb3IgbiBpbiB0aGlzLm5vdGlmaWNhdGlvbnNcbiAgICAgICAgICBuLnNlZW4gPSB0cnVlIGlmIG4udHlwZSA9PSAncG9zdCdcbiAgICAgICAgdGhpcy51bnNlZW5Qb3N0cyA9IDBcbiAgICB9XG5dXG4iXX0=

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
      $scope.copyToClipboard = function(text,
    event) {
        var originalStyleWidth,
    originalText,
    originalWidth;
        originalText = event.target.innerHTML;
        originalWidth = event.target.offsetWidth;
        originalStyleWidth = event.target.style.width;
        clipboard.copyText(text);
        if (event) {
          event.target.innerHTML = 'Copied';
          event.target.style.width = originalWidth + 'px';
          return setTimeout(function() {
            event.target.innerHTML = originalText;
            return event.target.style.width = originalStyleWidth;
          },
    2000);
        }
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
                latest: 0,
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
                latest: 0,
                unreadMsgs: 0,
                chat: new $window.irisLib.Chat({
                  onMessage: function(msg,
    info) {
                    var shouldNotify;
                    if (!msg) {
                      return;
                    }
                    if (chat.latest === 0 || msg.time > chat.latest.time) {
                      chat.latest = msg;
                    }
                    if ((msg.time > $scope.openTime) && !$state.is('chats.show',
    {
                      value: key
                    }) && !info.selfAuthored) {
                      chat.unreadMsgs++;
                    }
                    shouldNotify = function() {
                      if (info.selfAuthored) {
                        return false;
                      }
                      if ($state.is('chats.show',
    {
                        value: key
                      }) && !document.hidden) {
                        return false;
                      }
                      if (chat.chat.myMsgsLastSeenTime) {
                        if (chat.chat.myMsgsLastSeenTime >= msg.time) {
                          return false;
                        }
                      } else if ($scope.openTime >= msg.time) {
                        return false;
                      }
                      return true;
                    };
                    if (shouldNotify()) {
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
              chat.chat.getMyMsgsLastSeenTime();
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
      $scope.saveLocalSetting = function(key,
    value) {
        $scope.localSettings[key] = value;
        return localStorageService.set('localSettings',
    $scope.localSettings);
      };
      $scope.closeProfileUploadNotification = function() {
        return $scope.saveLocalSetting('profileUploadNotificationClosed',
    true);
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
        if (message.signedData.recipient) {
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
        }
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
      $scope.desktopNotificationsAvailable = !!window.Notification;
      $scope.notificationsPermitted = window.Notification && Notification.permission === 'granted';
      NotificationService.desktopNotificationsDisabled = $scope.localSettings.desktopNotificationsDisabled;
      NotificationService.audioNotificationsDisabled = $scope.localSettings.audioNotificationsDisabled;
      $scope.setAudioNotificationsDisabled = function(disabled) {
        $scope.saveLocalSetting('audioNotificationsDisabled',
    disabled);
        return NotificationService.audioNotificationsDisabled = disabled;
      };
      return $scope.setDesktopNotificationsDisabled = function(disabled) {
        $scope.saveLocalSetting('desktopNotificationsDisabled',
    disabled);
        if (disabled) {
          $scope.saveLocalSetting('desktopNotificationsNotNow',
    false);
        }
        NotificationService.desktopNotificationsDisabled = disabled;
        if (!disabled) {
          if (window.Notification) {
            return Notification.requestPermission(function(status) {
              return $scope.$apply(function() {
                $scope.notificationsPermitted = status === 'granted';
                return $scope.enableNotificationsFailed = !$scope.notificationsPermitted;
              });
            });
          } else {
            return $scope.enableNotificationsFailed = true;
          }
        }
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi9tYWluLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzIjpbIm1haW4vbWFpbi5jb250cm9sbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBO0VBQ0EsT0FBTyxDQUFDLE1BQVIsQ0FBZSxhQUFmLENBQTZCLENBQUMsVUFBOUIsQ0FBeUMsZ0JBQXpDLEVBQTJEO0lBQ3pELFFBRHlEO0lBRXpELFlBRnlEO0lBR3pELFdBSHlEO0lBSXpELE9BSnlEO0lBS3pELFFBTHlEO0lBTXpELFFBTnlEO0lBT3pELHFCQVB5RDtJQVF6RCxXQVJ5RDtJQVN6RCxXQVR5RDtJQVV6RCxTQVZ5RDtJQVd6RCxjQVh5RDtJQVl6RCxjQVp5RDtJQWF6RCxJQWJ5RDtJQWN6RCxPQWR5RDtJQWV6RCxxQkFmeUQ7SUFnQnpELFFBQUEsQ0FBQyxNQUFEO0lBQVMsVUFBVDtJQUFxQixTQUFyQjtJQUFnQyxLQUFoQztJQUF1QyxNQUF2QztJQUErQyxNQUEvQztJQUNBLG1CQURBO0lBQ3FCLFNBRHJCO0lBQ2dDLFNBRGhDO0lBQzJDLE9BRDNDO0lBQ29ELFlBRHBEO0lBRUEsWUFGQTtJQUVjLEVBRmQ7SUFFa0IsS0FGbEI7SUFFeUIsbUJBRnpCLENBQUE7QUFHRSxVQUFBLEdBQUE7SUFBQSxVQUFBO0lBQUEsUUFBQTtJQUFBO01BQUEsR0FBQSxHQUNFO1FBQUEsS0FBQSxFQUFPLEVBQVA7UUFDQSxZQUFBLEVBQWM7TUFEZDtNQUVGLElBQUEsQ0FBQSxDQUFPLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBakIsS0FBNkIsV0FBN0IsSUFBNkMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFqQixLQUF5QixNQUE3RSxDQUFBO1FBQ0UsR0FBRyxDQUFDLEtBQUosR0FBWTtVQUFDLGtDQUFEO1VBQXFDLGtDQUFyQztVQURkOztNQUVBLElBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFqQixLQUE2QixRQUFoQztRQUNFLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBVixDQUFlLDJC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ZSgnaXJpc0FuZ3VsYXInKS5jb250cm9sbGVyICdNYWluQ29udHJvbGxlcicsIFtcbiAgJyRzY29wZSdcbiAgJyRyb290U2NvcGUnXG4gICckbG9jYXRpb24nXG4gICckaHR0cCdcbiAgJyRzdGF0ZSdcbiAgJ2NvbmZpZycsXG4gICdsb2NhbFN0b3JhZ2VTZXJ2aWNlJ1xuICAnY2xpcGJvYXJkJ1xuICAnJHVpYk1vZGFsJ1xuICAnJHdpbmRvdydcbiAgJyRzdGF0ZVBhcmFtcydcbiAgJyR0cmFuc2l0aW9ucydcbiAgJyRxJ1xuICAnZm9jdXMnXG4gICdOb3RpZmljYXRpb25TZXJ2aWNlJ1xuICAoJHNjb3BlLCAkcm9vdFNjb3BlLCAkbG9jYXRpb24sICRodHRwLCAkc3RhdGUsIGNvbmZpZyxcbiAgbG9jYWxTdG9yYWdlU2VydmljZSwgY2xpcGJvYXJkLCAkdWliTW9kYWwsICR3aW5kb3csICRzdGF0ZVBhcmFtcyxcbiAgJHRyYW5zaXRpb25zLCAkcSwgZm9jdXMsIE5vdGlmaWNhdGlvblNlcnZpY2UpIC0+XG4gICAgb3B0ID1cbiAgICAgIHBlZXJzOiBbXVxuICAgICAgbG9jYWxTdG9yYWdlOiBmYWxzZVxuICAgIHVubGVzcyAkd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lID09ICdsb2NhbGhvc3QnIGFuZCAkd2luZG93LmxvY2F0aW9uLnBvcnQgPT0gJzMwMDAnXG4gICAgICBvcHQucGVlcnMgPSBbJ2h0dHBzOi8vZ3VuLXVzLmhlcm9rdWFwcC5jb20vZ3VuJywgJ2h0dHBzOi8vZ3VuLWV1Lmhlcm9rdWFwcC5jb20vZ3VuJ10gIyAnaHR0cHM6Ly9ndW5tZWV0aW5nc2VydmVyLmhlcm9rdWFwcC5jb20vZ3VuJ1xuICAgIGlmICR3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgIT0gXCJodHRwczpcIlxuICAgICAgb3B0LnBlZXJzLnB1c2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODc2NS9ndW4nKVxuICAgIG9wdC5zdG9yZSA9IFJpbmRleGVkREIob3B0KVxuICAgICRzY29wZS5ndW4gPSAkd2luZG93LmlyaXNHdW4gPSBuZXcgR3VuKG9wdClcblxuICAgICMgVE9ETzogbW92ZSBldmVyeXRoaW5nIHRvIG1haW4gY29udHJvbGxlcj9cbiAgICAjIHNldCBhdXRoZW50aWNhdGlvblxuICAgICRzY29wZS5hdXRoZW50aWNhdGlvbiA9IHt9ICMgQXV0aGVudGljYXRpb25cblxuICAgICRzY29wZS5vcGVuVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG4gICAgJHNjb3BlLm5vdGlmaWNhdGlvblNlcnZpY2UgPSBOb3RpZmljYXRpb25TZXJ2aWNlXG5cbiAgICAkc2NvcGUudHJ1c3REaXN0YW5jZUNvbXBhcmF0b3IgPSAoYSwgYikgLT5cbiAgICAgIHJldHVybiAxIGlmIGEudHlwZSAhPSAnbnVtYmVyJ1xuICAgICAgcmV0dXJuIC0xIGlmIGIudHlwZSAhPSAnbnVtYmVyJ1xuICAgICAgcmV0dXJuIGEudmFsdWUgLSBiLnZhbHVlXG5cbiAgICAkc2NvcGUuZ2V0SWRVcmwgPSAodHlwZSwgdmFsdWUpIC0+XG4gICAgICBpZiAkd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLmluZGV4T2YoJy4nKSA+IC0xICMgZGlmZmVyZW50aWF0ZSBiZXR3ZWVuIGxvY2FsaG9zdCAvIGNocm9tZSBwbHVnaW4gdXJpIGFuZCBETlMgbmFtZVxuICAgICAgICByZXR1cm4gJHN0YXRlLmhyZWYoJ2lkZW50aXRpZXMuc2hvdycsIHt0eXBlLCB2YWx1ZX0sIHthYnNvbHV0ZTogdHJ1ZX0pXG4gICAgICBlbHNlXG4gICAgICAgIHJldHVybiAnaHR0cHM6Ly9pcmlzLnRvLycgKyAkc3RhdGUuaHJlZignaWRlbnRpdGllcy5zaG93Jywge3R5cGUsIHZhbHVlfSlcblxuICAgICRzY29wZS5nZXRJZEtleSA9IChpZCkgLT5cbiAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoaWQudHlwZSkgKyAnOicgKyBlbmNvZGVVUklDb21wb25lbnQoaWQudmFsdWUpXG5cbiAgICAkc2NvcGUuZGVmYXVsdEluZGV4S2V5SUQgPSAnYjhCeWFZTkJEQ01MTmRacU1kYXM1b1VGTEN4QmYyVkgzLU5qVXVsRGFUby5EVnpJTkVyUlZzNm01dHlqQXV4NmZjTmZuZGFkY2daVk41aExTd1lUQ0xjJ1xuICAgICRzY29wZS5xdWVyeSA9IHt9XG4gICAgJHNjb3BlLnF1ZXJ5LnRlcm0gPSAnJ1xuICAgICRzY29wZS5wcmV2aW91c1NlYXJjaEtleSA9ICcnXG4gICAgJHNjb3BlLmlkcyA9XG4gICAgICBsaXN0OiBbXVxuICAgICRzY29wZS5tc2dzID1cbiAgICAgIGxpc3Q6IFtdXG4gICAgICBzZWVuOiB7fVxuXG4gICAgJHNjb3BlLmlwZnMgPSBuZXcgSXBmcyhcbiAgICAgIGluaXQ6IHRydWVcbiAgICAgIHN0YXJ0OiB0cnVlXG4gICAgICByZXBvOiAnaXBmczctaXJpcydcbiAgICApXG5cbiAgICAkc2NvcGUuY2FwaXRhbGl6ZVdvcmRzID0gKHMpIC0+XG4gICAgICBpZiBzIGFuZCBzLmxlbmd0aFxuICAgICAgICByZXR1cm4gKHMudHJpbSgpLnNwbGl0KCcgJykubWFwICh3b3JkKSAtPiB3b3JkWzBdLnRvVXBwZXJDYXNlKCkgKyB3b3JkWzEuLi0xXS50b0xvd2VyQ2FzZSgpKS5qb2luICcgJ1xuICAgICAgZWxzZVxuICAgICAgICByZXR1cm4gc1xuXG4gICAgJHNjb3BlLmNvcHlUb0NsaXBib2FyZCA9ICh0ZXh0LCBldmVudCkgLT5cbiAgICAgIG9yaWdpbmFsVGV4dCA9IGV2ZW50LnRhcmdldC5pbm5lckhUTUxcbiAgICAgIG9yaWdpbmFsV2lkdGggPSBldmVudC50YXJnZXQub2Zmc2V0V2lkdGhcbiAgICAgIG9yaWdpbmFsU3R5bGVXaWR0aCA9IGV2ZW50LnRhcmdldC5zdHlsZS53aWR0aFxuICAgICAgY2xpcGJvYXJkLmNvcHlUZXh0IHRleHRcbiAgICAgIGlmIGV2ZW50XG4gICAgICAgIGV2ZW50LnRhcmdldC5pbm5lckhUTUwgPSAnQ29waWVkJ1xuICAgICAgICBldmVudC50YXJnZXQuc3R5bGUud2lkdGggPSBvcmlnaW5hbFdpZHRoICsgJ3B4J1xuICAgICAgICBzZXRUaW1lb3V0IC0+XG4gICAgICAgICAgZXZlbnQudGFyZ2V0LmlubmVySFRNTCA9IG9yaWdpbmFsVGV4dFxuICAgICAgICAgIGV2ZW50LnRhcmdldC5zdHlsZS53aWR0aCA9IG9yaWdpbmFsU3R5bGVXaWR0aFxuICAgICAgICAsIDIwMDBcblxuICAgICRzY29wZS5zZWFyY2ggPSAocXVlcnksIGxpbWl0KSAtPlxuICAgICAgcmV0dXJuIHVubGVzcyAkc2NvcGUuaXJpc0luZGV4XG4gICAgICAkc2NvcGUuaWRzLmFjdGl2ZUtleSA9IC0xXG4gICAgICAkc2NvcGUuaWRzLmxpc3QgPSBbXVxuICAgICAgc2VhcmNoS2V5ID0gKHF1ZXJ5IG9yICRzY29wZS5xdWVyeS50ZXJtIG9yICcnKS50b0xvd2VyQ2FzZSgpLnRyaW0oKVxuICAgICAgJHNjb3BlLnNlYXJjaEtleSA9IHNlYXJjaEtleVxuICAgICAgJHNjb3BlLnByZXZpb3VzU2VhcmNoS2V5ID0gc2VhcmNoS2V5XG4gICAgICBsaW1pdCA9IGxpbWl0IG9yIDEwXG4gICAgICBjdXJzb3IgPSAnJ1xuICAgICAgaWYgJHNjb3BlLmlkcy5saXN0Lmxlbmd0aFxuICAgICAgICBjdXJzb3IgPSAkc2NvcGUuaWRzLmxpc3RbJHNjb3BlLmlkcy5saXN0Lmxlbmd0aCAtIDFdLmN1cnNvclxuICAgICAgc2VlbiA9IHt9XG5cbiAgICAgIHJlc3VsdEZvdW5kID0gKGkpIC0+XG4gICAgICAgIHJldHVybiBpZiBzZWFyY2hLZXkgIT0gJHNjb3BlLnNlYXJjaEtleVxuICAgICAgICBpLmd1bi5vbiAoZGF0YSkgLT5cbiAgICAgICAgICBpLmRhdGEgPSBkYXRhXG4gICAgICAgICAgaS5ndW4uZ2V0KCdsaW5rVG8nKS5vbiAobGlua1RvKSAtPlxuICAgICAgICAgICAgcmV0dXJuIGlmIGkubGlua1RvIG9yICFsaW5rVG9cbiAgICAgICAgICAgIHMgPSBsaW5rVG8udHlwZSArIGxpbmtUby52YWx1ZVxuICAgICAgICAgICAgcmV0dXJuIGlmIHNlZW5bc11cbiAgICAgICAgICAgIHNlZW5bc10gPSB0cnVlXG4gICAgICAgICAgICAkc2NvcGUuaWRzLmxpc3QucHVzaCBpXG4gICAgICAgICAgICBpLmxpbmtUbyA9IGxpbmtUb1xuICAgICAgICAkc2NvcGUuc2V0SWRlbnRpdHlOYW1lcyhpLCB0cnVlKVxuXG4gICAgICAkc2NvcGUuaXJpc0luZGV4LnNlYXJjaChzZWFyY2hLZXksIHVuZGVmaW5lZCwgcmVzdWx0Rm91bmQsIGxpbWl0LCBjdXJzb3IpXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UgKHJlc29sdmUpIC0+ICMgVE9ETzogdWliLXR5cGVhaGVhZCBpcyBsaW1pdGVkLCBidXQgc29tZXRoaW5nIGJldHRlciBwbHNcbiAgICAgICAgc2V0VGltZW91dCAtPlxuICAgICAgICAgIHJlc29sdmUoJHNjb3BlLmlkcy5saXN0KVxuICAgICAgICAsIDEwMDBcblxuICAgIHNldEluZGV4ID0gKGkpIC0+XG4gICAgICBpLnNldE9ubGluZSh0cnVlKSBpZiBpLndyaXRhYmxlXG4gICAgICBpLnJlYWR5LnRoZW4gLT5cbiAgICAgICAgJHNjb3BlLmlkcy5saXN0ID0gW11cbiAgICAgICAgJHNjb3BlLm1zZ3MubGlzdCA9IFtdXG4gICAgICAgICRzY29wZS5tc2dzLnNlZW4gPSB7fVxuICAgICAgICAkc2NvcGUuaXJpc0luZGV4ID0gaVxuICAgICAgICBzZXRUaW1lb3V0IC0+ICMgZm9yIHNvbWUgcmVhc29uLCBkaXN0IHZlcnNpb24gZmFpbHMgdG8gc2hvdyBtZXNzYWdlcyBhbmQgaWRlbnRpdGllcyB3aXRob3V0IHRoaXNcbiAgICAgICAgICAkc2NvcGUuc2VhcmNoKClcbiAgICAgICAgICAkc2NvcGUuc2hvd01vcmVNc2dzKClcbiAgICAgICAgLCAxMDAwXG4gICAgICAgICRzY29wZS50cnVzdGVkSW5kZXhlcyA9IFtdXG4gICAgICAgICRzY29wZS5jaGF0cyA9IFtdXG4gICAgICAgIGlmIGkud3JpdGFibGVcbiAgICAgICAgICAkc2NvcGUuaXJpc0luZGV4Lmd1bi51c2VyKCkuZ2V0KCdpcmlzJykuZ2V0KCdjaGF0TWVzc2FnZXNCeVV1aWQnKS5tYXAoKS5vbmNlIChub2RlLCBrZXkpIC0+XG4gICAgICAgICAgICBpZGVudGl0eSA9ICRzY29wZS5pcmlzSW5kZXguZ2V0KCd1dWlkJywga2V5KVxuICAgICAgICAgICAgJHNjb3BlLnNldElkZW50aXR5TmFtZXMgaWRlbnRpdHlcbiAgICAgICAgICAgICRzY29wZS5jaGF0cy5wdXNoXG4gICAgICAgICAgICAgIGlkVmFsdWU6IGtleVxuICAgICAgICAgICAgICBpZFR5cGU6ICd1dWlkJ1xuICAgICAgICAgICAgICBpZGVudGl0eTogaWRlbnRpdHlcbiAgICAgICAgICAgICAgbGF0ZXN0OiAwXG4gICAgICAgICAgICAgIHVucmVhZE1zZ3M6IDBcbiAgICAgICAgICAkc2NvcGUuaXJpc0luZGV4Lmd1bi51c2VyKCkuZ2V0KCdjaGF0JykubWFwKCkub25jZSAobm9kZSwga2V5KSAtPlxuICAgICAgICAgICAgaWRlbnRpdHkgPSAkc2NvcGUuaXJpc0luZGV4LmdldCgna2V5SUQnLCBrZXkpXG4gICAgICAgICAgICAkc2NvcGUuc2V0SWRlbnRpdHlOYW1lcyBpZGVudGl0eVxuICAgICAgICAgICAgY2hhdCA9XG4gICAgICAgICAgICAgIGlkVmFsdWU6IGtleVxuICAgICAgICAgICAgICBpZFR5cGU6ICdrZXlJRCdcbiAgICAgICAgICAgICAgaWRlbnRpdHk6IGlkZW50aXR5XG4gICAgICAgICAgICAgIGxhdGVzdDogMFxuICAgICAgICAgICAgICB1bnJlYWRNc2dzOiAwXG4gICAgICAgICAgICAgIGNoYXQ6IG5ldyAkd2luZG93LmlyaXNMaWIuQ2hhdFxuICAgICAgICAgICAgICAgIG9uTWVzc2FnZTogKG1zZywgaW5mbykgLT5cbiAgICAgICAgICAgICAgICAgIHJldHVybiB1bmxlc3MgbXNnXG4gICAgICAgICAgICAgICAgICBjaGF0LmxhdGVzdCA9IG1zZyBpZiAoY2hhdC5sYXRlc3QgPT0gMCBvciBtc2cudGltZSA+IGNoYXQubGF0ZXN0LnRpbWUpXG4gICAgICAgICAgICAgICAgICBpZiAoKG1zZy50aW1lID4gJHNjb3BlLm9wZW5UaW1lKSBhbmQgISRzdGF0ZS5pcygnY2hhdHMuc2hvdycsIHt2YWx1ZTprZXl9KSBhbmQgIWluZm8uc2VsZkF1dGhvcmVkKVxuICAgICAgICAgICAgICAgICAgICBjaGF0LnVucmVhZE1zZ3MrK1xuICAgICAgICAgICAgICAgICAgc2hvdWxkTm90aWZ5ID0gKCkgLT5cbiAgICAgICAgICAgICAgICAgICAgaWYgaW5mby5zZWxmQXV0aG9yZWRcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgaWYgJHN0YXRlLmlzKCdjaGF0cy5zaG93Jywge3ZhbHVlOmtleX0pIGFuZCBub3QgZG9jdW1lbnQuaGlkZGVuXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIGlmIGNoYXQuY2hhdC5teU1zZ3NMYXN0U2VlblRpbWVcbiAgICAgICAgICAgICAgICAgICAgICBpZiBjaGF0LmNoYXQubXlNc2dzTGFzdFNlZW5UaW1lID49IG1zZy50aW1lXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAkc2NvcGUub3BlblRpbWUgPj0gbXNnLnRpbWVcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgICAgICAgIGlmIHNob3VsZE5vdGlmeSgpXG4gICAgICAgICAgICAgICAgICAgIE5vdGlmaWNhdGlvblNlcnZpY2UuY3JlYXRlXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2NoYXQnXG4gICAgICAgICAgICAgICAgICAgICAgZnJvbTogbXNnLmF1dGhvclxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IG1zZy50ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljazogKCkgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICRzdGF0ZS5nbyAnY2hhdHMuc2hvdycsIHsgdHlwZTogJ2tleUlEJywgdmFsdWU6IGtleSB9XG4gICAgICAgICAgICAgICAga2V5OiAkc2NvcGUucHJpdmF0ZUtleVxuICAgICAgICAgICAgICAgIGd1bjogJHNjb3BlLmd1blxuICAgICAgICAgICAgICAgIHBhcnRpY2lwYW50czoga2V5XG4gICAgICAgICAgICBjaGF0LmNoYXQuZ2V0TXlNc2dzTGFzdFNlZW5UaW1lKClcbiAgICAgICAgICAgICRzY29wZS5jaGF0cy5wdXNoKGNoYXQpXG4gICAgICAgICRzY29wZS5pcmlzSW5kZXguZ3VuLmdldCgndHJ1c3RlZEluZGV4ZXMnKS5vcGVuIChyKSAtPlxuICAgICAgICAgIGZvciBrLCB2IG9mIHJcbiAgICAgICAgICAgICRzY29wZS50cnVzdGVkSW5kZXhlcy5wdXNoXG4gICAgICAgICAgICAgIGluZGV4OiBrXG4gICAgICAgICAgICAgIGF0dHJpYnV0ZTogbmV3ICR3aW5kb3cuaXJpc0xpYi5BdHRyaWJ1dGUoJ2tleUlEJywgaylcbiAgICAgICAgICAgICAgaWRlbnRpdHk6ICRzY29wZS5pcmlzSW5kZXguZ2V0KCdrZXlJRCcsIGspXG4gICAgICAgIHNldFRpbWVvdXQgKCkgLT5cbiAgICAgICAgICAkc2NvcGUuJGJyb2FkY2FzdCgncnpTbGlkZXJGb3JjZVJlbmRlcicpXG4gICAgICAgICwgMTAwMFxuICAgICAgICBzZXRUaW1lb3V0ICgpIC0+XG4gICAgICAgICAgJHNjb3BlLiRicm9hZGNhc3QoJ3J6U2xpZGVyRm9yY2VSZW5kZXInKVxuICAgICAgICAsIDMwMDAgIyA6LS0tRFxuICAgICAgICBzZXRUaW1lb3V0ICgpIC0+XG4gICAgICAgICAgJHNjb3BlLiRicm9hZGNhc3QoJ3J6U2xpZGVyRm9yY2VSZW5kZXInKVxuICAgICAgICAsIDUwMDAgIyA6LS0tRFxuICAgICAgICBjb25zb2xlLmxvZyAnR290IGluZGV4JywgJHNjb3BlLmlyaXNJbmRleFxuICAgICAgICAkc2NvcGUudmlld3BvaW50LmlkZW50aXR5ID0gJHNjb3BlLmlyaXNJbmRleC5nZXQoJHNjb3BlLnZpZXdwb2ludC50eXBlLCAkc2NvcGUudmlld3BvaW50LnZhbHVlKVxuICAgICAgICAkc2NvcGUuc2V0SWRlbnRpdHlOYW1lcygkc2NvcGUudmlld3BvaW50LmlkZW50aXR5KVxuICAgICAgICAkc2NvcGUudmlld3BvaW50LmlkZW50aXR5Lmd1bi5nZXQoJ2F0dHJzJykub3BlbiAoYXR0cnMpIC0+XG4gICAgICAgICAgJHNjb3BlLnZpZXdwb2ludC5hdHRycyA9IGF0dHJzXG4gICAgICAgICAgJHNjb3BlLnZpZXdwb2ludC5tb3N0VmVyaWZpZWRBdHRyaWJ1dGVzID0gJHdpbmRvdy5pcmlzTGliLklkZW50aXR5LmdldE1vc3RWZXJpZmllZEF0dHJpYnV0ZXMoYXR0cnMpXG5cbiAgICAkc2NvcGUubG9hZERlZmF1bHRJbmRleCA9IC0+XG4gICAgICAkc2NvcGUuaXJpc0luZGV4ID0gbnVsbFxuICAgICAgJHNjb3BlLnZpZXdwb2ludCA9IHt0eXBlOiAna2V5SUQnLCB2YWx1ZTogJHNjb3BlLmRlZmF1bHRJbmRleEtleUlEfVxuICAgICAgaSA9IG5ldyAkd2luZG93LmlyaXNMaWIuSW5kZXgoe2d1bjogJHNjb3BlLmd1biwgcHViS2V5OiAkc2NvcGUuZGVmYXVsdEluZGV4S2V5SUQsIGlwZnM6ICRzY29wZS5pcGZzfSlcbiAgICAgIHNldEluZGV4KGkpXG5cbiAgICAkc2NvcGUubG9naW5XaXRoS2V5ID0gKHByaXZhdGVLZXlTZXJpYWxpemVkLCBzZWxmKSAtPlxuICAgICAgJHNjb3BlLmlyaXNJbmRleCA9IG51bGxcbiAgICAgICRzY29wZS5sb2dnaW5nSW4gPSB0cnVlXG4gICAgICAkc2NvcGUucHJpdmF0ZUtleSA9ICR3aW5kb3cuaXJpc0xpYi5LZXkuZnJvbVN0cmluZyhwcml2YXRlS2V5U2VyaWFsaXplZClcbiAgICAgIGxvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0KCdpcmlzS2V5JywgcHJpdmF0ZUtleVNlcmlhbGl6ZWQpXG4gICAgICAkc2NvcGUuYXV0aGVudGljYXRpb24udXNlciA9XG4gICAgICAgIGlkVHlwZTogJ2tleUlEJ1xuICAgICAgICBpZFZhbHVlOiAkd2luZG93LmlyaXNMaWIuS2V5LmdldElkKCRzY29wZS5wcml2YXRlS2V5KVxuICAgICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnVzZXIudXJsID0gJHNjb3BlLmdldElkVXJsICdrZXlJRCcsICRzY29wZS5hdXRoZW50aWNhdGlvbi51c2VyLmlkVmFsdWVcbiAgICAgICRzY29wZS5sb2dpbk1vZGFsLmNsb3NlKCkgaWYgJHNjb3BlLmxvZ2luTW9kYWxcbiAgICAgIGtleUlEID0gJHdpbmRvdy5pcmlzTGliLktleS5nZXRJZCgkc2NvcGUucHJpdmF0ZUtleSlcbiAgICAgICRzY29wZS52aWV3cG9pbnQgPSB7dHlwZTogJ2tleUlEJywgdmFsdWU6IGtleUlEfVxuICAgICAgJHNjb3BlLmlkcy5saXN0ID0gW11cbiAgICAgICRzY29wZS5tc2dzLmxpc3QgPSBbXVxuICAgICAgJHNjb3BlLm1zZ3Muc2VlbiA9IHt9XG4gICAgICBpID0gbmV3ICR3aW5kb3cuaXJpc0xpYi5JbmRleCh7Z3VuOiAkc2NvcGUuZ3VuLCBrZXlwYWlyOiAkc2NvcGUucHJpdmF0ZUtleSwgc2VsZiwgaXBmczogJHNjb3BlLmlwZnMsIGRlYnVnOiB0cnVlfSlcbiAgICAgIHNldEluZGV4KGkpXG4gICAgICBpLnJlYWR5LnRoZW4gLT5cbiAgICAgICAgJHNjb3BlLmxvZ2dpbmdJbiA9IGZhbHNlXG4gICAgICAgICRzY29wZS5hdXRoZW50aWNhdGlvbi5pZGVudGl0eSA9ICRzY29wZS5pcmlzSW5kZXguZ2V0KCdrZXlJRCcsIGtleUlEKVxuICAgICAgICAkc2NvcGUuYXV0aGVudGljYXRpb24uaWRlbnRpdHkuZ3VuLmdldCgnYXR0cnMnKS5vcGVuICh2YWwsIGtleSwgbXNnLCBldmUpIC0+XG4gICAgICAgICAgbXZhID0gJHdpbmRvdy5pcmlzTGliLklkZW50aXR5LmdldE1vc3RWZXJpZmllZEF0dHJpYnV0ZXModmFsKVxuICAgICAgICAgICRzY29wZS5hdXRoZW50aWNhdGlvbi5pZGVudGl0eS5tdmEgPSBtdmFcbiAgICAgICAgICBldmUub2ZmKCkgaWYgbXZhLnByb2ZpbGVQaG90b1xuICAgICAgICBzdGFydEF0ID0gbmV3IERhdGUoKVxuICAgICAgICAkc2NvcGUuYXV0aGVudGljYXRpb24uaWRlbnRpdHkuZ3VuLmdldCgncmVjZWl2ZWQnKS5tYXAoKS5vbmNlIChtKSAtPlxuICAgICAgICAgIHJldHVybiBpZiBtLnB1YktleSA9PSAkc2NvcGUudmlld3BvaW50LnZhbHVlXG4gICAgICAgICAgY29uc29sZS5sb2cgJ3lvdSBnb3QgYSBtc2cnXG4gICAgICAgICAgJHdpbmRvdy5pcmlzTGliLk1lc3NhZ2UuZnJvbVNpZyhtKS50aGVuIChtc2cpIC0+XG4gICAgICAgICAgICBpZiBuZXcgRGF0ZShtc2cuc2lnbmVkRGF0YS50aW1lc3RhbXApID4gc3RhcnRBdFxuICAgICAgICAgICAgICBhdXRob3IgPSBtc2cuZ2V0QXV0aG9yKCRzY29wZS5pcmlzSW5kZXgpXG4gICAgICAgICAgICAgICRzY29wZS5zZXRJZGVudGl0eU5hbWVzKGF1dGhvcikudGhlbiAobmFtZSkgLT5cbiAgICAgICAgICAgICAgICBOb3RpZmljYXRpb25TZXJ2aWNlLmNyZWF0ZVxuICAgICAgICAgICAgICAgICAgdHlwZTogJ3Bvc3QnXG4gICAgICAgICAgICAgICAgICBmcm9tOiBuYW1lXG4gICAgICAgICAgICAgICAgICB0ZXh0OiBcIiN7bmFtZX0gcHVibGljIG1lc3NhZ2VkIHlvdSFcIlxuICAgICAgICAgICAgICAgICAgb25DbGljazogKCkgLT5cbiAgICAgICAgICAgICAgICAgICAgJHN0YXRlLmdvICdpZGVudGl0aWVzLnNob3cnLCB7IHR5cGU6ICRzY29wZS5hdXRoZW50aWNhdGlvbi51c2VyLmlkVHlwZSwgdmFsdWU6ICRzY29wZS5hdXRoZW50aWNhdGlvbi51c2VyLmlkVmFsdWUgfVxuICAgICAgICAkc2NvcGUuYXV0aGVudGljYXRpb24uaWRlbnRpdHkuZ3VuLm9uIChkYXRhKSAtPlxuICAgICAgICAgIGlmIGRhdGEucmVjZWl2ZWRQb3NpdGl2ZSBhbmQgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLmlkZW50aXR5LmRhdGEgYW5kIG5vdCAkc2NvcGUuYXV0aGVudGljYXRpb24uaWRlbnRpdHkuZGF0YS5yZWNlaXZlZFBvc2l0aXZlXG4gICAgICAgICAgICBjb25zb2xlLmxvZyAnZ3JlYXQsIHlvdSBnb3QgeW91ciBmaXJzdCB1cHZvdGUhJ1xuICAgICAgICAgICAgIyBUT0RPOiBub3RpZmljYXRpb25cbiAgICAgICAgICAkc2NvcGUuYXV0aGVudGljYXRpb24uaWRlbnRpdHkuZGF0YSA9IGRhdGFcblxuICAgIHByaXZhdGVLZXkgPSBsb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldCgnaXJpc0tleScpIG9yIGxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KCdpZGVudGlmaUtleScpXG4gICAgaWYgcHJpdmF0ZUtleVxuICAgICAgJHNjb3BlLmxvZ2luV2l0aEtleShwcml2YXRlS2V5KVxuICAgIGVsc2VcbiAgICAgICRzY29wZS5sb2FkRGVmYXVsdEluZGV4KClcblxuICAgICRzY29wZS5vcGVuQ2hhdE1vZGFsID0gKCkgLT5cbiAgICAgICRzY29wZS5vcGVuTW9kYWwgJ2NoYXRNb2RhbCcsIHsgdGVtcGxhdGVVcmw6ICdhcHAvaWRlbnRpdGllcy9jaGF0Lm1vZGFsLmh0bWwnLCBzaXplOiAnbWQnIH1cblxuICAgICRzY29wZS5vcGVuVmlkZW9DaGF0TW9kYWwgPSAoKSAtPlxuICAgICAgJHNjb3BlLm9wZW5Nb2RhbCAndmlkZW9DaGF0TW9kYWwnLCB7IHRlbXBsYXRlVXJsOiAnYXBwL2lkZW50aXRpZXMvdmlkZW8ubW9kYWwuaHRtbCcsIHNpemU6ICdtZCcgfVxuXG4gICAgJHNjb3BlLm9wZW5SZWFkUVJNb2RhbCA9ICgpIC0+XG4gICAgICAkc2NvcGUub3Blbk1vZGFsICdyZWFkUVJNb2RhbCcsIHsgdGVtcGxhdGVVcmw6ICdhcHAvaWRlbnRpdGllcy9yZWFkcXIubW9kYWwuaHRtbCcsIHNpemU6ICdtZCcgfVxuXG4gICAgJHNjb3BlLnVwZGF0ZUlwZnNQZWVycyA9ICgpIC0+XG4gICAgICAkc2NvcGUuaXBmcy5zd2FybS5wZWVycyAoZXJyLCBwZWVySW5mb3MpIC0+XG4gICAgICAgIGlmIGVyclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IgJ2ZhaWxlZCB0byBmZXRjaCBpcGZzIHBlZXJzJywgZXJyXG4gICAgICAgIGVsc2VcbiAgICAgICAgICAkc2NvcGUuJGFwcGx5IC0+XG4gICAgICAgICAgICAkc2NvcGUuaXBmc1BlZXJzID0gcGVlckluZm9zIGlmIEFycmF5LmlzQXJyYXkocGVlckluZm9zKVxuXG4gICAgJHNjb3BlLmlwZnMub24gJ3JlYWR5JywgLT5cbiAgICAgICRzY29wZS5pcGZzUmVhZHkgPSB0cnVlXG4gICAgICAkd2luZG93LmlwZnMgPSAkc2NvcGUuaXBmc1xuICAgICAgJHNjb3BlLnVwZGF0ZUlwZnNQZWVycygpXG4gICAgICBzZXRJbnRlcnZhbCAkc2NvcGUudXBkYXRlSXBmc1BlZXJzLCA1MDAwXG5cbiAgICAkc2NvcGUubG9jYWxTZXR0aW5ncyA9IGxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KCdsb2NhbFNldHRpbmdzJykgfHwge31cblxuICAgICRzY29wZS5zYXZlTG9jYWxTZXR0aW5nID0gKGtleSwgdmFsdWUpIC0+XG4gICAgICAkc2NvcGUubG9jYWxTZXR0aW5nc1trZXldID0gdmFsdWVcbiAgICAgIGxvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0KCdsb2NhbFNldHRpbmdzJywgJHNjb3BlLmxvY2FsU2V0dGluZ3MpXG5cbiAgICAkc2NvcGUuY2xvc2VQcm9maWxlVXBsb2FkTm90aWZpY2F0aW9uID0gLT5cbiAgICAgICRzY29wZS5zYXZlTG9jYWxTZXR0aW5nICdwcm9maWxlVXBsb2FkTm90aWZpY2F0aW9uQ2xvc2VkJywgdHJ1ZVxuXG4gICAgJHNjb3BlLm9wZW5Qcm9maWxlUGhvdG9VcGxvYWRNb2RhbCA9IC0+XG4gICAgICByZXR1cm4gdW5sZXNzICRzY29wZS5hdXRoZW50aWNhdGlvbi5pZGVudGl0eVxuICAgICAgJHNjb3BlLm9wZW5VcGxvYWRNb2RhbCgkc2NvcGUudXBsb2FkUHJvZmlsZVBob3RvLCAnVXBsb2FkIHByb2ZpbGUgcGhvdG8nLCB0cnVlKVxuXG4gICAgJHNjb3BlLnVwbG9hZFByb2ZpbGVQaG90byA9IChibG9iKSAtPlxuICAgICAgJHNjb3BlLnVwbG9hZEZpbGUoYmxvYikudGhlbiAoZmlsZXMpIC0+XG4gICAgICAgIHJlY2lwaWVudCA9XG4gICAgICAgICAgcHJvZmlsZVBob3RvOiAnL2lwZnMvJyArIGZpbGVzWzBdLnBhdGhcbiAgICAgICAgaWYgJHN0YXRlLmlzICdpZGVudGl0aWVzLnNob3cnXG4gICAgICAgICAgcmVjaXBpZW50WyRzdGF0ZVBhcmFtcy50eXBlXSA9ICRzdGF0ZVBhcmFtcy52YWx1ZVxuICAgICAgICBlbHNlXG4gICAgICAgICAgcmVjaXBpZW50LmtleUlEID0gJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnVzZXIuaWRWYWx1ZVxuICAgICAgICAgICRzY29wZS5jbG9zZVByb2ZpbGVVcGxvYWROb3RpZmljYXRpb24oKVxuICAgICAgICAkd2luZG93LmlyaXNMaWIuTWVzc2FnZS5jcmVhdGVWZXJpZmljYXRpb24oe3JlY2lwaWVudH0sICRzY29wZS5wcml2YXRlS2V5KS50aGVuIChtKSAtPlxuICAgICAgICAgICRzY29wZS5oaWRlUHJvZmlsZVBob3RvID0gdHJ1ZSAjIFRoZXJlJ3MgYSB3ZWlyZCBidWcgd2hlcmUgdGhlIHByb2ZpbGUgaWRlbnRpY29uIGRvZXNuJ3QgdXBkYXRlXG4gICAgICAgICAgJHNjb3BlLmlyaXNJbmRleC5hZGRNZXNzYWdlKG0pLnRoZW4gLT5cbiAgICAgICAgICAgICRzY29wZS5oaWRlUHJvZmlsZVBob3RvID0gZmFsc2VcbiAgICAgICAgICAgIGlmICEkc3RhdGUuaXMgJ2lkZW50aXRpZXMuc2hvdydcbiAgICAgICAgICAgICAgJHN0YXRlLmdvICdpZGVudGl0aWVzLnNob3cnLCB7IHR5cGU6ICRzY29wZS5hdXRoZW50aWNhdGlvbi51c2VyLmlkVHlwZSwgdmFsdWU6ICRzY29wZS5hdXRoZW50aWNhdGlvbi51c2VyLmlkVmFsdWUgfVxuICAgICAgICAgICRzY29wZS51cGxvYWRNb2RhbC5jbG9zZSgpXG5cbiAgICAkc2NvcGUuc2V0UGFnZVRpdGxlID0gKHRpdGxlKSAtPlxuICAgICAgJHJvb3RTY29wZS5wYWdlVGl0bGUgPSAnSXJpcydcbiAgICAgIGlmICh0aXRsZSlcbiAgICAgICAgJHJvb3RTY29wZS5wYWdlVGl0bGUgKz0gJyAtICcgKyB0aXRsZVxuXG4gICAgJHNjb3BlLmlwZnNHZXQgPSAodXJpLCBvcHRpb25zID0ge30pIC0+XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UgKHJlc29sdmUpIC0+XG4gICAgICAgIGdvID0gLT5cbiAgICAgICAgICAkc2NvcGUuaXBmcy5jYXQodXJpKS50aGVuIChmaWxlKSAtPlxuICAgICAgICAgICAgZmlsZSA9ICRzY29wZS5pcGZzLnR5cGVzLkJ1ZmZlcihmaWxlKVxuICAgICAgICAgICAgaWYgb3B0aW9ucy5nZXRKc29uXG4gICAgICAgICAgICAgIGZpbGUgPSBKU09OLnBhcnNlKGZpbGUudG9TdHJpbmcoKSlcbiAgICAgICAgICAgIGlmIG9wdGlvbnMuYmFzZTY0dHlwZVxuICAgICAgICAgICAgICBmaWxlID0gJ2RhdGE6JyArIG9wdGlvbnMuYmFzZTY0dHlwZSArICc7YmFzZTY0LCcgKyBmaWxlLnRvU3RyaW5nKCdiYXNlNjQnKVxuICAgICAgICAgICAgcmVzb2x2ZSBmaWxlXG5cbiAgICAgICAgaWYgJHNjb3BlLmlwZnNSZWFkeVxuICAgICAgICAgIGdvKClcbiAgICAgICAgZWxzZVxuICAgICAgICAgICRzY29wZS5pcGZzLm9uICdyZWFkeScsIC0+XG4gICAgICAgICAgICBnbygpXG5cbiAgICAkc2NvcGUuJHdhdGNoICduZXdNZXNzYWdlLnJhdGluZycsIChyYXRpbmcpIC0+XG4gICAgICBpZiByYXRpbmcgPiAwXG4gICAgICAgIGFscGhhID0gKHJhdGluZyAtIDAuNSkgLyAzIC8gMS4yNSArIDAuMlxuICAgICAgICAkc2NvcGUubmV3TWVzc2FnZS5zdHlsZSA9IHsnYm9yZGVyLWNvbG9yJzogJ3JnYmEoMjIzLDI0MCwyMTYsJyArIGFscGhhICsgJyknfVxuICAgICAgZWxzZSBpZiByYXRpbmcgPCAwXG4gICAgICAgIGFscGhhID0gKHJhdGluZyArIDAuNSkgLyAtMyAvIDEuMjUgKyAwLjJcbiAgICAgICAgJHNjb3BlLm5ld01lc3NhZ2Uuc3R5bGUgPSB7J2JvcmRlci1jb2xvcic6ICdyZ2JhKDI0MiwyMjIsMjIyLCcgKyBhbHBoYSArICcpJ31cbiAgICAgIGVsc2VcbiAgICAgICAgJHNjb3BlLm5ld01lc3NhZ2Uuc3R5bGUgPSB7J2JvcmRlci1jb2xvcic6ICcjZmNmOGUzJ31cblxuICAgICRzY29wZS5yZXNldE1zZyA9IC0+XG4gICAgICAkc2NvcGUubmV3TWVzc2FnZSA9XG4gICAgICAgIHJhdGluZzogMVxuICAgICAgICBjb21tZW50OiAnJ1xuICAgICAgICBmaWxlczogW11cbiAgICAgICRzY29wZS5uZXdWZXJpZmljYXRpb24gPVxuICAgICAgICB0eXBlOiAnJ1xuICAgICAgICB2YWx1ZTogJydcbiAgICAkc2NvcGUucmVzZXRNc2coKVxuXG4gICAgJHNjb3BlLnZvdGUgPSAobXNnLCB2b3RlKSAtPlxuICAgICAgY29uc29sZS5sb2cgJ3ZvdGUgYWRkZWQnXG4gICAgICAkc2NvcGUuY3JlYXRlTWVzc2FnZShudWxsLCB7dHlwZTogJ3ZvdGUnLCByZXBseVRvOiBtc2cuZ2V0SGFzaCgpLCB2b3RlfSlcblxuICAgICMgQ3JlYXRlIG5ldyBNZXNzYWdlXG4gICAgJHNjb3BlLmNyZWF0ZU1lc3NhZ2UgPSAoZXZlbnQsIG1zZywgb3B0aW9ucyA9IHt9KSAtPlxuICAgICAgJHNjb3BlLmFkZGluZ01lc3NhZ2UgPSB0cnVlXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKSBpZiBldmVudFxuICAgICAgZGVsZXRlIG1zZy5wb2xsT3B0aW9ucyBpZiBtc2cucG9sbE9wdGlvbnMgPT0gZmFsc2VcblxuICAgICAgZmlsZVVwbG9hZHMgPSBbXVxuICAgICAgaWYgb3B0aW9ucy5maWxlcyAjIHVwbG9hZCB0byBpcGZzXG4gICAgICAgIG1zZy5hdHRhY2htZW50cyA9IFtdXG4gICAgICAgIGFkZEZpbGUgPSAoZmlsZSkgLT5cbiAgICAgICAgICAkc2NvcGUudXBsb2FkRmlsZShmaWxlKS50aGVuIChyZXMpIC0+XG4gICAgICAgICAgICBpZiByZXMgYW5kIHJlcy5sZW5ndGggYW5kIHJlcy5sZW5ndGggPiAwIGFuZCByZXNbMF0ucGF0aFxuICAgICAgICAgICAgICBtc2cuYXR0YWNobWVudHMucHVzaFxuICAgICAgICAgICAgICAgIHVyaTogJy9pcGZzLycgKyByZXNbMF0ucGF0aFxuICAgICAgICAgICAgICAgIHNpemU6IGZpbGUuc2l6ZVxuICAgICAgICAgICAgICAgIHR5cGU6IGZpbGUudHlwZVxuICAgICAgICAgICAgICAgIG5hbWU6IGZpbGUubmFtZVxuICAgICAgICBmaWxlVXBsb2Fkcy5wdXNoIGFkZEZpbGUoZmlsZSkgZm9yIGZpbGUgaW4gb3B0aW9ucy5maWxlc1xuXG4gICAgICBQcm9taXNlLmFsbChmaWxlVXBsb2FkcykudGhlbiAtPlxuICAgICAgICBjb25zb2xlLmxvZyAnbXNnLmF0dGFjaG1lbnRzJywgbXNnLmF0dGFjaG1lbnRzXG4gICAgICAgICMgQ3JlYXRlIG5ldyBNZXNzYWdlIG9iamVjdFxuICAgICAgICBtZXNzYWdlID0gbnVsbFxuICAgICAgICBkZWxldGUgbXNnLmZpbGVzIGlmIG1zZy5maWxlc1xuICAgICAgICBpZiAkc3RhdGUuaXMgJ2lkZW50aXRpZXMuc2hvdydcbiAgICAgICAgICBtc2cucmVjaXBpZW50ID0gbXNnLnJlY2lwaWVudCB8fCB7fVxuICAgICAgICAgIGlmIG9wdGlvbnMudmVyaWZpZWRBdHRyIGFuZCAkc3RhdGVQYXJhbXMudHlwZSA9PSBvcHRpb25zLnZlcmlmaWVkQXR0ci50eXBlXG4gICAgICAgICAgICBtc2cucmVjaXBpZW50WyRzdGF0ZVBhcmFtcy50eXBlXSA9IFskc3RhdGVQYXJhbXMudmFsdWUsIG9wdGlvbnMudmVyaWZpZWRBdHRyLnZhbHVlXVxuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIG1zZy5yZWNpcGllbnRbJHN0YXRlUGFyYW1zLnR5cGVdID0gJHN0YXRlUGFyYW1zLnZhbHVlXG4gICAgICAgICAgICBtc2cucmVjaXBpZW50W29wdGlvbnMudmVyaWZpZWRBdHRyLnR5cGVdID0gb3B0aW9ucy52ZXJpZmllZEF0dHIudmFsdWUgaWYgb3B0aW9ucy52ZXJpZmllZEF0dHJcbiAgICAgICAgaWYgbXNnLnR5cGUgPT0gJ3JhdGluZydcbiAgICAgICAgICBtc2cubWF4UmF0aW5nIHw9IDNcbiAgICAgICAgICBtc2cubWluUmF0aW5nIHw9IC0zXG4gICAgICAgICAgbWVzc2FnZSA9ICR3aW5kb3cuaXJpc0xpYi5NZXNzYWdlLmNyZWF0ZVJhdGluZyhtc2csICRzY29wZS5wcml2YXRlS2V5KVxuICAgICAgICBlbHNlIGlmIG1zZy50eXBlID09ICd2ZXJpZmljYXRpb24nXG4gICAgICAgICAgbWVzc2FnZSA9ICR3aW5kb3cuaXJpc0xpYi5NZXNzYWdlLmNyZWF0ZVZlcmlmaWNhdGlvbihtc2csICRzY29wZS5wcml2YXRlS2V5KVxuICAgICAgICBlbHNlXG4gICAgICAgICAgbWVzc2FnZSA9ICR3aW5kb3cuaXJpc0xpYi5NZXNzYWdlLmNyZWF0ZShtc2csICRzY29wZS5wcml2YXRlS2V5KVxuXG4gICAgICAgIG1lc3NhZ2UudGhlbiAobSkgLT5cbiAgICAgICAgICAkc2NvcGUuaXJpc0luZGV4LmFkZE1lc3NhZ2UobSlcbiAgICAgICAgICAkc2NvcGUubXNncy5zZWVuW20uZ2V0SGFzaCgpXSA9IHRydWVcbiAgICAgICAgICAkc2NvcGUucHJvY2Vzc01lc3NhZ2VzKFttXSlcbiAgICAgICAgLnRoZW4gKG1lc3NhZ2VzKSAtPlxuICAgICAgICAgICRzY29wZS5tc2dzLmxpc3QucHVzaChtZXNzYWdlc1swXSlcbiAgICAgICAgICBpZiBvcHRpb25zLmFkZFRvIGFuZCBub3Qgb3B0aW9ucy5hZGRUby5zZWVuW21lc3NhZ2VzWzBdLmdldEhhc2goKV1cbiAgICAgICAgICAgIG9wdGlvbnMuYWRkVG8ubGlzdC5wdXNoIG1lc3NhZ2VzWzBdXG4gICAgICAgICAgICBvcHRpb25zLmFkZFRvLnNlZW5bbWVzc2FnZXNbMF0uZ2V0SGFzaCgpXSA9IHRydWVcbiAgICAgICAgICBpZiAkc2NvcGUuZmlsdGVycy50eXBlIG5vdCBpbiBbbXNnLnR5cGUsIG51bGxdXG4gICAgICAgICAgICAkc2NvcGUuZmlsdGVycy50eXBlID0gbXNnLnR5cGVcbiAgICAgICAgICAkc2NvcGUucmVzZXRNc2coKSAjIHdoeSBub3QgcmVzZXR0aW5nIHVwbG9hZGVkIGZpbGVzPyBEOlxuICAgICAgICAgIG9wdGlvbnMuZmlsZXMgPSBbXSBpZiBvcHRpb25zLmZpbGVzXG4gICAgICAgICAgJHNjb3BlLmFkZGluZ01lc3NhZ2UgPSBmYWxzZVxuICAgICAgICAgIHJldHVybiBtZXNzYWdlXG4gICAgICAgIC5jYXRjaCAoZSkgLT5cbiAgICAgICAgICBjb25zb2xlLmVycm9yKGUpXG4gICAgICAgICAgJHNjb3BlLmVycm9yID0gZVxuICAgICAgICAgICRzY29wZS5hZGRpbmdNZXNzYWdlID0gZmFsc2VcbiAgICAgICAgICByZXR1cm4gbWVzc2FnZVxuXG4gICAgJHNjb3BlLmFkZEF0dHJpYnV0ZSA9IC0+XG4gICAgICAkbG9jYXRpb24ucGF0aCAnIy9pZGVudGl0aWVzL2NyZWF0ZS8nICsgJHNjb3BlLnF1ZXJ5LnRlcm1cblxuICAgICRzY29wZS5sb2dpbiA9IC0+XG4gICAgICAkc2NvcGUuZmlsdGVycy5tYXhEaXN0YW5jZSA9IC0xICMgYmVjYXVzZSB0aGUgdXNlciBkb2Vzbid0IGhhdmUgYSB0cnVzdCBpbmRleCB5ZXRcblxuICAgICRzY29wZS5vcGVuTW9kYWwgPSAobW9kYWxOYW1lLCBvcHRpb25zKSAtPlxuICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24ge3NpemU6ICdsZycsIGFuaW1hdGlvbjogdHJ1ZSwgc2NvcGU6ICRzY29wZX0sIG9wdGlvbnNcbiAgICAgICRzY29wZVttb2RhbE5hbWVdID0gJHVpYk1vZGFsLm9wZW4ob3B0aW9ucylcbiAgICAgICRzY29wZVttb2RhbE5hbWVdLnJlc3VsdC50aGVuICgtPiksICgtPikgIyBhdm9pZCBiYWNrZHJvcCByZWplY3Rpb24gY29uc29sZSBlcnJvclxuICAgICAgJHNjb3BlW21vZGFsTmFtZV0ucmVuZGVyZWQudGhlbiAtPlxuICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKVxuICAgICAgICBmb2N1cyhvcHRpb25zLmZvY3VzVG8pIGlmIG9wdGlvbnMuZm9jdXNUb1xuICAgICAgJHRyYW5zaXRpb25zLm9uU3RhcnQge30sIC0+XG4gICAgICAgICRzY29wZVttb2RhbE5hbWVdLmNsb3NlKClcblxuICAgICRzY29wZS5vcGVuTG9naW5Nb2RhbCA9IC0+XG4gICAgICAkc2NvcGUub3Blbk1vZGFsKCdsb2dpbk1vZGFsJywge3RlbXBsYXRlVXJsOiAnYXBwL21haW4vbG9naW4ubW9kYWwuaHRtbCcsIGZvY3VzVG86ICduZXdVc2VyJ30pXG5cbiAgICAkc2NvcGUub3BlblVwbG9hZE1vZGFsID0gKGNhbGxiYWNrLCBtb2RhbEJ1dHRvblRleHQsIHNxdWFyaWZ5KSAtPlxuICAgICAgJHNjb3BlLnVwbG9hZE1vZGFsQ2FsbGJhY2sgPSBjYWxsYmFja1xuICAgICAgJHNjb3BlLm1vZGFsQnV0dG9uVGV4dCA9IG1vZGFsQnV0dG9uVGV4dCBvciAnVXBsb2FkJ1xuICAgICAgJHNjb3BlLnNxdWFyaWZ5ID0gc3F1YXJpZnlcbiAgICAgICRzY29wZS5vcGVuTW9kYWwoJ3VwbG9hZE1vZGFsJywge3RlbXBsYXRlVXJsOiAnYXBwL2lkZW50aXRpZXMvdXBsb2FkLm1vZGFsLmh0bWwnfSlcblxuICAgICRzY29wZS5tc2dzLmxpc3QgPSBbXVxuICAgICRzY29wZS5tc2dzLnNlZW4gPSB7fVxuICAgICRzY29wZS5maWx0ZXJlZE1zZ3MgPSBbXVxuICAgICRzY29wZS5zaG93TW9yZU1zZ3MgPSAoY3Vyc29yKSAtPlxuICAgICAgbGltaXQgPSAyMCAjIDEwXG4gICAgICBpZiBjdXJzb3IgPT0gdW5kZWZpbmVkIGFuZCAkc2NvcGUubXNncy5sYXN0XG4gICAgICAgIGN1cnNvciA9ICRzY29wZS5tc2dzLmxhc3RcbiAgICAgIGNvbnNvbGUubG9nICdjdXJzb3InLCBjdXJzb3JcbiAgICAgIGZvdW5kID0gMFxuICAgICAgJHNjb3BlLmxvYWRpbmdNc2dzID0gdHJ1ZVxuICAgICAgZmlsdGVyID0gZmFsc2VcbiAgICAgICMjI1xuICAgICAgaWYgJHNjb3BlLmZpbHRlcnMudHlwZSA9PSBudWxsXG4gICAgICAgIGZpbHRlciA9IChtKSAtPlxuICAgICAgICAgIHIgPSBtLnNpZ25lZERhdGEudHlwZSBub3QgaW4gWyd2ZXJpZmljYXRpb24nLCAndW52ZXJpZmljYXRpb24nXVxuICAgICAgICAgIGNvbnNvbGUubG9nICdmaWx0ZXJpbicsIHJcbiAgICAgICAgICByZXR1cm4gclxuICAgICAgZWxzZVxuICAgICAgICB0ID0gJHNjb3BlLmZpbHRlcnMudHlwZS5zcGxpdCgnOicpWzBdXG4gICAgICAgIGZpbHRlciA9IChtKSAtPlxuICAgICAgICAgIHIgPSBtLnNpZ25lZERhdGEudHlwZSA9PSB0XG4gICAgICAgICAgY29uc29sZS5sb2cgJ2ZpbHRlcmluJywgclxuICAgICAgICAgIHJldHVybiByXG4gICAgICAjIyNcbiAgICAgIHJlc3VsdEZvdW5kID0gKG1zZykgLT5cbiAgICAgICAgZm91bmQgKz0gMVxuICAgICAgICAkc2NvcGUubG9hZGluZ01zZ3MgPSBmYWxzZSBpZiBmb3VuZCA+PSBsaW1pdFxuICAgICAgICByZXR1cm4gaWYgJHNjb3BlLm1zZ3Muc2Vlblttc2cuZ2V0SGFzaCgpXVxuICAgICAgICAkc2NvcGUubXNncy5sYXN0ID0gbXNnLnNpZ25lZERhdGEudGltZXN0YW1wIGlmICEkc2NvcGUubXNncy5sYXN0IG9yIG1zZy5zaWduZWREYXRhLnRpbWVzdGFtcCA8ICRzY29wZS5tc2dzLmxhc3RcbiAgICAgICAgJHNjb3BlLm1zZ3Muc2Vlblttc2cuZ2V0SGFzaCgpXSA9IHRydWVcbiAgICAgICAgJHNjb3BlLnByb2Nlc3NNZXNzYWdlcyBbbXNnXVxuICAgICAgICAkc2NvcGUuJGFwcGx5IC0+XG4gICAgICAgICAgJHNjb3BlLm1zZ3MubGlzdC5wdXNoIG1zZ1xuXG4gICAgICAkc2NvcGUuZmlsdGVycy5saW1pdCArPSBsaW1pdFxuICAgICAgaWYgJHNjb3BlLmZpbHRlcnMubGltaXQgPiAkc2NvcGUuZmlsdGVyZWRNc2dzLmxlbmd0aFxuICAgICAgICAkc2NvcGUuaXJpc0luZGV4LmdldE1lc3NhZ2VzQnlUaW1lc3RhbXAocmVzdWx0Rm91bmQsIHVuZGVmaW5lZCwgY3Vyc29yKVxuXG4gICAgJHNjb3BlLnVwbG9hZEZpbGUgPSAoYmxvYikgLT5cbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSAocmVzb2x2ZSwgcmVqZWN0KSAtPlxuICAgICAgICBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgICAgICBmaWxlUmVhZGVyLm9ubG9hZCA9IChldmVudCkgLT5cbiAgICAgICAgICBidWZmZXIgPSAkc2NvcGUuaXBmcy50eXBlcy5CdWZmZXIuZnJvbShldmVudC50YXJnZXQucmVzdWx0KVxuICAgICAgICAgICRzY29wZS5pcGZzLmFkZCBidWZmZXIsIChlcnIsIGZpbGVzKSAtPlxuICAgICAgICAgICAgaWYgZXJyXG4gICAgICAgICAgICAgIHJlamVjdCgnYWRkaW5nIHRvIGlwZnMgZmFpbGVkJywgZXJyKVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICByZXNvbHZlKGZpbGVzKVxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyAnZG9uZTonLCBlcnIsIGZpbGVzXG4gICAgICAgIGZpbGVSZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoYmxvYilcblxuICAgICRzY29wZS5jcmVhdGVVc2VyID0gKG5hbWUpIC0+XG4gICAgICByZXR1cm4gaWYgbmFtZS5pbmRleE9mKCd7JykgIT0gLTEgb3IgbmFtZS5pbmRleE9mKCd9JykgIT0gLTEgIyBwcmV2ZW50IGFjY2lkZW50YWwgcHJpdmF0ZSBrZXkgcGFzdGVcbiAgICAgIG5hbWUgPSBuYW1lLnRyaW0oKVxuICAgICAgJHNjb3BlLmNyZWF0aW5nVXNlciA9IHRydWVcbiAgICAgIHNlbGYgPSB7bmFtZX1cbiAgICAgICR3aW5kb3cuaXJpc0xpYi5LZXkuZ2VuZXJhdGUoKVxuICAgICAgLnRoZW4gKGtleSkgLT5cbiAgICAgICAgJHNjb3BlLnByaXZhdGVLZXkgPSBrZXlcbiAgICAgICAgJHNjb3BlLnByaXZhdGVLZXlTZXJpYWxpemVkID0gJHdpbmRvdy5pcmlzTGliLktleS50b1N0cmluZygkc2NvcGUucHJpdmF0ZUtleSlcbiAgICAgICAgc2VsZi5rZXlJRCA9ICR3aW5kb3cuaXJpc0xpYi5LZXkuZ2V0SWQoJHNjb3BlLnByaXZhdGVLZXkpXG4gICAgICAgICRzY29wZS5sb2dpbldpdGhLZXkoJHNjb3BlLnByaXZhdGVLZXlTZXJpYWxpemVkLCBzZWxmKVxuICAgICAgLnRoZW4gKG1zZykgLT5cbiAgICAgICAgJHNjb3BlLmNyZWF0aW5nVXNlciA9IGZhbHNlXG4gICAgICAgICRzY29wZS5jcmVhdGVNZXNzYWdlIHVuZGVmaW5lZCxcbiAgICAgICAgICB0eXBlOiAncmF0aW5nJ1xuICAgICAgICAgIHJhdGluZzogMVxuICAgICAgICAgIHRleHQ6ICdUcnVzdGVkIGJ5IGRlZmF1bHQgYXMgYSB3ZWIgb2YgdHJ1c3QgZW50cnkgcG9pbnQuJ1xuICAgICAgICAgIHJlY2lwaWVudDpcbiAgICAgICAgICAgIGtleUlEOiAkc2NvcGUuZGVmYXVsdEluZGV4S2V5SURcbiAgICAgICAgICAgIG5hbWU6ICdJcmlzJ1xuICAgICAgLmNhdGNoIChlKSAtPlxuICAgICAgICBjb25zb2xlLmVycm9yKCdmYWlsZWQgdG8gY3JlYXRlIHVzZXI6JywgZSlcbiAgICAgICAgJHNjb3BlLmNyZWF0aW5nVXNlciA9IGZhbHNlXG5cbiAgICAkc2NvcGUuZ2VuZXJhdGVLZXkgPSAtPlxuICAgICAgJHdpbmRvdy5pcmlzTGliLktleS5nZW5lcmF0ZSgpLnRoZW4gKGtleSkgLT5cbiAgICAgICAgJHNjb3BlLiRhcHBseSAtPlxuICAgICAgICAgICRzY29wZS5wcml2YXRlS2V5ID0ga2V5XG4gICAgICAgICAgJHNjb3BlLnByaXZhdGVLZXlTZXJpYWxpemVkID0gJHdpbmRvdy5pcmlzTGliLktleS50b1N0cmluZygkc2NvcGUucHJpdmF0ZUtleSlcblxuICAgICRzY29wZS5kb3dubG9hZCA9IChmaWxlbmFtZSwgZGF0YSwgdHlwZSwgY2hhcnNldCA9ICd1dGYtOCcsIGhyZWYpIC0+XG4gICAgICBoaWRkZW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgICBoaWRkZW5FbGVtZW50LmhyZWYgPSBocmVmIG9yIFwiZGF0YToje3R5cGV9O2NoYXJzZXQ9I3tjaGFyc2V0fSwje2VuY29kZVVSSShkYXRhKX1cIlxuICAgICAgaGlkZGVuRWxlbWVudC50YXJnZXQgPSAnX2JsYW5rJ1xuICAgICAgaGlkZGVuRWxlbWVudC5kb3dubG9hZCA9IGZpbGVuYW1lXG4gICAgICBoaWRkZW5FbGVtZW50LmNsaWNrKClcblxuICAgICRzY29wZS5kb3dubG9hZFRleHQgPSAodGV4dCkgLT5cbiAgICAgICRzY29wZS5kb3dubG9hZCgnaXJpc19wcml2YXRlX2tleS50eHQnLCB0ZXh0LCAndGV4dC9jc3YnLCAndXRmLTgnKVxuXG4gICAgJHNjb3BlLm9wZW5Mb2dvdXRNb2RhbCA9IC0+XG4gICAgICAkc2NvcGUub3Blbk1vZGFsKCdsb2dvdXRNb2RhbCcsIHt0ZW1wbGF0ZVVybDogJ2FwcC9tYWluL2xvZ291dC5tb2RhbC5odG1sJ30pXG5cbiAgICAkc2NvcGUubG9nb3V0ID0gLT5cbiAgICAgICRzY29wZS5pcmlzSW5kZXguc2V0T25saW5lKGZhbHNlKVxuICAgICAgJHNjb3BlLmZpbHRlcnMubWF4RGlzdGFuY2UgPSAwXG4gICAgICAkc2NvcGUucHJpdmF0ZUtleVNlcmlhbGl6ZWQgPSAnJ1xuICAgICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uID0ge31cbiAgICAgIGxvY2FsU3RvcmFnZVNlcnZpY2UuY2xlYXJBbGwoKVxuICAgICAgJHN0YXRlLmdvKCdpZGVudGl0aWVzLmxpc3QnKVxuICAgICAgJHNjb3BlLnByaXZhdGVLZXkgPSBudWxsXG4gICAgICAkc2NvcGUucHVibGljS2V5ID0gbnVsbFxuICAgICAgJHNjb3BlLmxvZ291dE1vZGFsLmNsb3NlKClcbiAgICAgICRzY29wZS5sb2FkRGVmYXVsdEluZGV4KClcbiAgICAgICRzY29wZS5sb2NhbFNldHRpbmdzID0ge31cblxuICAgICRzY29wZS5tc2dGaWx0ZXIgPSAobXNnLCBpbmRleCwgYXJyYXkpIC0+XG4gICAgICBkYXRhID0gbXNnLnNpZ25lZERhdGFcbiAgICAgIHJldHVybiBmYWxzZSBpZiBtc2cuc2lnbmVkRGF0YS5yZXBseVRvXG4gICAgICBpZiAkc2NvcGUuZmlsdGVycy50eXBlXG4gICAgICAgIGlmICRzY29wZS5maWx0ZXJzLnR5cGUubWF0Y2ggL15yYXRpbmcvXG4gICAgICAgICAgaWYgZGF0YS50eXBlICE9ICdyYXRpbmcnXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICBuZXV0cmFsUmF0aW5nID0gKGRhdGEubWF4UmF0aW5nICsgZGF0YS5taW5SYXRpbmcpIC8gMlxuICAgICAgICAgIGlmICRzY29wZS5maWx0ZXJzLnR5cGUgPT0gJ3JhdGluZzpwb3NpdGl2ZScgYW5kIGRhdGEucmF0aW5nIDw9IG5ldXRyYWxSYXRpbmdcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgIGVsc2UgaWYgJHNjb3BlLmZpbHRlcnMudHlwZSA9PSAncmF0aW5nOm5lZ2F0aXZlJyBhbmQgZGF0YS5yYXRpbmcgPj0gbmV1dHJhbFJhdGluZ1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgZWxzZSBpZiAkc2NvcGUuZmlsdGVycy50eXBlID09ICdyYXRpbmc6bmV1dHJhbCcgYW5kIGRhdGEucmF0aW5nICE9IG5ldXRyYWxSYXRpbmdcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICBlbHNlIGlmICRzY29wZS5maWx0ZXJzLnR5cGUgPT0gJ3ZlcmlmaWNhdGlvbidcbiAgICAgICAgICByZXR1cm4gZGF0YS50eXBlIGluIFsndmVyaWZpY2F0aW9uJywgJ3VudmVyaWZpY2F0aW9uJ11cbiAgICAgICAgZWxzZSBpZiBkYXRhLnR5cGUgIT0gJHNjb3BlLmZpbHRlcnMudHlwZVxuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgaWYgJHNjb3BlLmZpbHRlcnMubWF4RGlzdGFuY2UgPiAtMVxuICAgICAgICBpZiB0eXBlb2YgbXNnLmF1dGhvclRydXN0RGlzdGFuY2UgIT0gJ251bWJlcidcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgaWYgJHNjb3BlLmZpbHRlcnMubWF4RGlzdGFuY2UgPiAwIGFuZCBtc2cuYXV0aG9yVHJ1c3REaXN0YW5jZSA+ICRzY29wZS5maWx0ZXJzLm1heERpc3RhbmNlXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIGlmICRzY29wZS5maWx0ZXJzLm1heERpc3RhbmNlID09IDAgYW5kIG1zZy5hdXRob3JUcnVzdERpc3RhbmNlID09IDk5XG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICByZXR1cm4gdHJ1ZVxuXG4gICAgJHNjb3BlLnJlbW92ZUZvY3VzID0gKGV2ZW50KSAtPlxuICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5ibHVyKClcblxuICAgICRzY29wZS5zZXRNc2dSYXdEYXRhID0gKG1zZykgLT5cbiAgICAgIHNob3dSYXdEYXRhID1cbiAgICAgICAgaGFzaDogbXNnLmhhc2hcbiAgICAgICAgZGF0YTogbXNnLnNpZ25lZERhdGFcbiAgICAgICAgcHJpb3JpdHk6IG1zZy5wcmlvcml0eVxuICAgICAgICBqd3M6IG1zZy5qd3NcbiAgICAgIG1zZy5zdHJEYXRhID0gSlNPTi5zdHJpbmdpZnkoc2hvd1Jhd0RhdGEsIHVuZGVmaW5lZCwgMilcblxuICAgICRzY29wZS5zaGFyZU1lc3NhZ2UgPSAobXNnLCBjb21tZW50KSAtPlxuICAgICAgJHNjb3BlLmNyZWF0ZU1lc3NhZ2UobnVsbCwgeyB0eXBlOiAncG9zdCcsIHNoYXJlZE1zZzogbXNnLmdldEhhc2goKSwgY29tbWVudCB9KS50aGVuIChyKSAtPlxuICAgICAgICBtc2cuc2hhcmVzID0gbXNnLnNoYXJlcyBvciB7fVxuICAgICAgICBtc2cuc2hhcmVzW3IuZ2V0SGFzaCgpXSA9IHJcbiAgICAgICAgbXNnLnNoYXJlc0FyciA9IG1zZy5zaGFyZXNBcnIgb3IgW11cbiAgICAgICAgbXNnLnNoYXJlc0Fyci5wdXNoKHIpXG4gICAgICAkc2NvcGUuc2hhcmVNb2RhbC5jbG9zZSgpXG5cbiAgICAkc2NvcGUubXNnVXRpbHMgPVxuICAgICAgbGlrZTogKG1zZykgLT5cbiAgICAgICAgaWYgbXNnLmxpa2VkXG4gICAgICAgICAgbXNnLmxpa2VkID0gZmFsc2VcbiAgICAgICAgICBtc2cubGlrZXMgPSBpZiBtc2cubGlrZXMgdGhlbiBtc2cubGlrZXMgLSAxIGVsc2UgMFxuICAgICAgICAgICRzY29wZS5pcmlzSW5kZXguc2V0UmVhY3Rpb24obXNnLCBudWxsKVxuICAgICAgICBlbHNlXG4gICAgICAgICAgbXNnLmxpa2VkID0gdHJ1ZVxuICAgICAgICAgIG1zZy5saWtlcyA9IGlmIG1zZy5saWtlcyB0aGVuIG1zZy5saWtlcyArIDEgZWxzZSAxXG4gICAgICAgICAgJHNjb3BlLmlyaXNJbmRleC5zZXRSZWFjdGlvbihtc2csICdsaWtlJylcbiAgICAgIHNoYXJlOiAobXNnKSAtPlxuICAgICAgICAkc2NvcGUubWVzc2FnZSA9IG1zZ1xuICAgICAgICAkc2NvcGUub3Blbk1vZGFsICdzaGFyZU1vZGFsJywgeyB0ZW1wbGF0ZVVybDogJ2FwcC9tZXNzYWdlcy9zaGFyZS5tb2RhbC5odG1sJywgc2l6ZTogJ21kJyB9XG4gICAgICByZXBseVRvOiAobXNnLCByZXBseSkgLT5cbiAgICAgICAgJHNjb3BlLmNyZWF0ZU1lc3NhZ2UobnVsbCwge1xuICAgICAgICAgIHR5cGU6ICdwb3N0JyxcbiAgICAgICAgICByZXBseVRvOiBtc2cuZ2V0SGFzaCgpXG4gICAgICAgICAgY29tbWVudDogcmVwbHlcbiAgICAgICAgfSkudGhlbiAocikgLT5cbiAgICAgICAgICBtc2cucmVwbGllcyA9IG1zZy5yZXBsaWVzIG9yIHt9XG4gICAgICAgICAgbXNnLnJlcGxpZXNbci5nZXRIYXNoKCldID0gclxuICAgICAgICAgIG1zZy5yZXBsaWVzQXJyID0gbXNnLnJlcGxpZXNBcnIgb3IgW11cbiAgICAgICAgICBtc2cucmVwbGllc0Fyci5wdXNoKHIpXG5cbiAgICAkc2NvcGUub3Blbk1lc3NhZ2UgPSAoZXZlbnQsIG1lc3NhZ2UsIHNpemUpIC0+XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKSBpZiBldmVudFxuICAgICAgdCA9IGV2ZW50LnRhcmdldFxuICAgICAgcmV0dXJuIGlmIGFuZ3VsYXIuZWxlbWVudCh0KS5jbG9zZXN0KCdhJykubGVuZ3RoXG4gICAgICAkc2NvcGUuc2V0TXNnUmF3RGF0YShtZXNzYWdlKVxuICAgICAgJHNjb3BlLm1lc3NhZ2UgPSBtZXNzYWdlXG4gICAgICAjIFRPRE86IGNoZWNrIHNpZ1xuICAgICAgaWYgbWVzc2FnZS5zaWduZWREYXRhLnJlY2lwaWVudFxuICAgICAgICAkc2NvcGUubWVzc2FnZS5yZWNpcGllbnQgPSAkc2NvcGUubWVzc2FnZS5nZXRSZWNpcGllbnQoJHNjb3BlLmlyaXNJbmRleClcbiAgICAgICAgJHNjb3BlLm1lc3NhZ2UucmVjaXBpZW50Lmd1bi5nZXQoJ2F0dHJzJykub3BlbiAoZCkgLT5cbiAgICAgICAgICBtdmEgPSAkd2luZG93LmlyaXNMaWIuSWRlbnRpdHkuZ2V0TW9zdFZlcmlmaWVkQXR0cmlidXRlcyhkKVxuICAgICAgICAgIGlmIG12YS5uYW1lXG4gICAgICAgICAgICAkc2NvcGUuJGFwcGx5IC0+ICRzY29wZS5tZXNzYWdlLnJlY2lwaWVudF9uYW1lID0gbXZhLm5hbWUuYXR0cmlidXRlLnZhbHVlXG4gICAgICAgICAgZWxzZSBpZiBtdmEubmlja25hbWVcbiAgICAgICAgICAgICRzY29wZS4kYXBwbHkgLT4gJHNjb3BlLm1lc3NhZ2UucmVjaXBpZW50X25hbWUgPSBtdmEubmlja25hbWUuYXR0cmlidXRlLnZhbHVlXG4gICAgICAkc2NvcGUubWVzc2FnZS5zaWduZXJLZXlJRCA9ICRzY29wZS5tZXNzYWdlLmdldFNpZ25lcktleUlEKClcbiAgICAgICRzY29wZS5tZXNzYWdlLnZlcmlmaWVkQnkgPSAkc2NvcGUuaXJpc0luZGV4LmdldCgna2V5SUQnLCAkc2NvcGUubWVzc2FnZS5zaWduZXJLZXlJRClcbiAgICAgICRzY29wZS5tZXNzYWdlLnZlcmlmaWVkQnlBdHRyID0gbmV3ICR3aW5kb3cuaXJpc0xpYi5BdHRyaWJ1dGUoJ2tleUlEJywgJHNjb3BlLm1lc3NhZ2Uuc2lnbmVyS2V5SUQpXG4gICAgICAkc2NvcGUub3Blbk1vZGFsKCdjaGF0TW9kYWwnLCB7dGVtcGxhdGVVcmw6ICdhcHAvbWVzc2FnZXMvc2hvdy5tb2RhbC5odG1sJ30pXG5cbiAgICB1bmxlc3MgJHNjb3BlLmZpbHRlcnNcbiAgICAgICRzY29wZS5maWx0ZXJzID0gT2JqZWN0LmFzc2lnbiB7fSwgY29uZmlnLmRlZmF1bHRGaWx0ZXJzXG5cbiAgICAkc2NvcGUuaXNDb2xsYXBzZWQgPSBmYWxzZVxuICAgICMgJHNjb3BlLm1lbnUgPSBNZW51cy5nZXRNZW51KCd0b3BiYXInKVxuXG4gICAgJHNjb3BlLnRvZ2dsZUNvbGxhcHNpYmxlTWVudSA9IC0+XG4gICAgICAkc2NvcGUuaXNDb2xsYXBzZWQgPSAhJHNjb3BlLmlzQ29sbGFwc2VkXG5cbiAgICAkc2NvcGUucHJvY2Vzc01lc3NhZ2VzID0gKG1lc3NhZ2VzLCBtc2dPcHRpb25zID0ge30sIG9wdGlvbnMgPSB7fSkgLT5cbiAgICAgIGFuZ3VsYXIuZm9yRWFjaCBtZXNzYWdlcywgKG1zZywga2V5KSAtPlxuICAgICAgICBtc2dba10gPSB2IGZvciBrLCB2IG9mIG1zZ09wdGlvbnNcbiAgICAgICAgbXNnLmF1dGhvciA9IG1zZy5nZXRBdXRob3IoJHNjb3BlLmlyaXNJbmRleClcbiAgICAgICAgbXNnLmF1dGhvci5ndW4uZ2V0KCd0cnVzdERpc3RhbmNlJykub24gKGQpIC0+IG1zZy5hdXRob3JUcnVzdERpc3RhbmNlID0gZFxuICAgICAgcmV0dXJuIG1lc3NhZ2VzXG5cbiAgICBzY3JvbGxUbyA9IChlbCkgLT5cbiAgICAgIGlmICFlbFxuICAgICAgICByZXR1cm5cbiAgICAgIHBvcyA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICBpZiBwb3MudG9wXG4gICAgICAgIGlmIHBvcy50b3AgLSA2MCA8ICR3aW5kb3cucGFnZVlPZmZzZXRcbiAgICAgICAgICAkd2luZG93LnNjcm9sbFRvIDAsIHBvcy50b3AgLSA2MFxuICAgICAgICBlbHNlIGlmIHBvcy5ib3R0b20gPiAkd2luZG93LnBhZ2VZT2Zmc2V0ICsgKCR3aW5kb3cuaW5uZXJIZWlnaHQgb3IgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodClcbiAgICAgICAgICAkd2luZG93LnNjcm9sbFRvIDAsIHBvcy5ib3R0b20gLSAoJHdpbmRvdy5pbm5lckhlaWdodCBvciBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSArIDE1XG4gICAgICByZXR1cm5cblxuICAgICMgc2hvdWxkIGJlIG1vdmVkIHRvIGlyaXMtbGliP1xuICAgICRzY29wZS5zZXRJZGVudGl0eU5hbWVzID0gKGksIGh0bWxTYWZlLCBzZXRUaXRsZSkgLT5cbiAgICAgIGkud2VsbFZlcmlmaWVkID0gZmFsc2VcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSAocmVzb2x2ZSkgLT5cbiAgICAgICAgaS5ndW4uZ2V0KCdhdHRycycpLm9wZW4gKGF0dHJzKSAtPlxuICAgICAgICAgICRzY29wZS4kYXBwbHkgLT5cbiAgICAgICAgICAgIG12YSA9ICR3aW5kb3cuaXJpc0xpYi5JZGVudGl0eS5nZXRNb3N0VmVyaWZpZWRBdHRyaWJ1dGVzKGF0dHJzKVxuICAgICAgICAgICAgaWYgbXZhLm5hbWVcbiAgICAgICAgICAgICAgaS5wcmltYXJ5TmFtZSA9IG12YS5uYW1lLmF0dHJpYnV0ZS52YWx1ZVxuICAgICAgICAgICAgICBpLmhhc1Byb3Blck5hbWUgPSB0cnVlXG4gICAgICAgICAgICAgIGkud2VsbFZlcmlmaWVkID0gdHJ1ZSBpZiBtdmEubmFtZS53ZWxsVmVyaWZpZWRcbiAgICAgICAgICAgIGVsc2UgaWYgbXZhLm5pY2tuYW1lXG4gICAgICAgICAgICAgIGkucHJpbWFyeU5hbWUgPSBtdmEubmlja25hbWUuYXR0cmlidXRlLnZhbHVlXG4gICAgICAgICAgICAgIGkuaGFzUHJvcGVyTmFtZSA9IHRydWVcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgYSA9IE9iamVjdC52YWx1ZXMoYXR0cnMpWzBdXG4gICAgICAgICAgICAgIGkucHJpbWFyeU5hbWUgPSBhLnZhbHVlXG4gICAgICAgICAgICAgIGkucHJpbWFyeU5hbWUgPSBpLnByaW1hcnlOYW1lLnNsaWNlKDAsNikgKyAnLi4uJyBpZiBhLnR5cGUgaW4gWydrZXlJRCcsICd1dWlkJ11cbiAgICAgICAgICAgIGlmIGkucHJpbWFyeU5hbWVcbiAgICAgICAgICAgICAgaWYgbXZhLm5pY2tuYW1lIGFuZCBtdmEubmlja25hbWUuYXR0cmlidXRlLnZhbHVlICE9IGkucHJpbWFyeU5hbWVcbiAgICAgICAgICAgICAgICBpLm5pY2tuYW1lID0gbXZhLm5pY2tuYW1lLmF0dHJpYnV0ZS52YWx1ZVxuICAgICAgICAgICAgICAgIGkubmlja25hbWUgPSBpLm5pY2tuYW1lLnJlcGxhY2UoJzwnLCAnJmx0OycpIGlmIGh0bWxTYWZlXG4gICAgICAgICAgICAgIGkucHJpbWFyeU5hbWUgPSBpLnByaW1hcnlOYW1lLnJlcGxhY2UoJzwnLCAnJmx0OycpIGlmIGh0bWxTYWZlXG4gICAgICAgICAgICAkc2NvcGUuc2V0UGFnZVRpdGxlIGkucHJpbWFyeU5hbWUgaWYgc2V0VGl0bGVcbiAgICAgICAgICAgIHJlc29sdmUgaS5wcmltYXJ5TmFtZVxuXG4gICAgJHNjb3BlLnNlYXJjaEtleWRvd24gPSAoZXZlbnQpIC0+XG4gICAgICBzd2l0Y2ggKGlmIGV2ZW50IHRoZW4gZXZlbnQud2hpY2ggZWxzZSAtMSlcbiAgICAgICAgd2hlbiAzOFxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICBpZiAkc2NvcGUuaWRzLmFjdGl2ZUtleSA+IC0xXG4gICAgICAgICAgICAkc2NvcGUuYWRkRW50cnlBY3RpdmUgPSBmYWxzZVxuICAgICAgICAgICAgJHNjb3BlLmlkcy5hY3RpdmVLZXktLVxuICAgICAgICAgICAgaWQgPSBpZiAkc2NvcGUuaWRzLmFjdGl2ZUtleSA+IC0xIHRoZW4gJ3Jlc3VsdCcgKyAkc2NvcGUuaWRzLmFjdGl2ZUtleSBlbHNlICdjcmVhdGVJZFJvdydcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zY3JvbGxJbnRvVmlldygpXG4gICAgICAgIHdoZW4gNDBcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgaWYgKCRzY29wZS5pZHMuYWN0aXZlS2V5IDwgKCRzY29wZS5pZHMubGlzdC5sZW5ndGgpIC0gMSkgYW5kICRzY29wZS5pZHMuYWN0aXZlS2V5IDwgJHNjb3BlLmZpbHRlcnMubGltaXRcbiAgICAgICAgICAgICRzY29wZS5pZHMuYWN0aXZlS2V5KytcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0JyArICRzY29wZS5pZHMuYWN0aXZlS2V5KS5zY3JvbGxJbnRvVmlldygpXG4gICAgICAgIHdoZW4gMTNcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgaWYgJHNjb3BlLmlkcy5hY3RpdmVLZXkgPT0gLTFcbiAgICAgICAgICAgICRzdGF0ZS5nbyAnaWRlbnRpdGllcy5jcmVhdGUnXG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdCcgKyAkc2NvcGUuaWRzLmFjdGl2ZUtleSkuY2xpY2soKVxuICAgICAgICB3aGVuIC0xXG4gICAgICAgICAgY2xlYXJUaW1lb3V0ICRzY29wZS50aW1lclxuICAgICAgICAgICRzY29wZS5xdWVyeS50ZXJtID0gJydcbiAgICAgICAgICAkc2NvcGUuc2VhcmNoKClcbiAgICAgICAgd2hlbiAzMywgMzQsIDM1LCAzNiwgMzcsIDM5XG4gICAgICAgIGVsc2VcbiAgICAgICAgICBlbCA9IGFuZ3VsYXIuZWxlbWVudChldmVudC5jdXJyZW50VGFyZ2V0KVxuICAgICAgICAgIGNsZWFyVGltZW91dCAkc2NvcGUudGltZXJcbiAgICAgICAgICB3YWl0ID0gc2V0VGltZW91dCgoLT5cbiAgICAgICAgICAgICRzY29wZS5xdWVyeS50ZXJtID0gZWwudmFsKClcbiAgICAgICAgICAgICRzY29wZS5zZWFyY2goKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgKSwgMzAwKVxuICAgICAgICAgICRzY29wZS50aW1lciA9IHdhaXRcbiAgICAgICAgICBicmVha1xuXG4gICAgJHNjb3BlLmRyb3Bkb3duU2VhcmNoU2VsZWN0ID0gKGl0ZW0pIC0+XG4gICAgICAkc3RhdGUuZ28oJ2lkZW50aXRpZXMuc2hvdycsIHsgdHlwZTogaXRlbS5saW5rVG8udHlwZSwgdmFsdWU6IGl0ZW0ubGlua1RvLnZhbHVlIH0pXG4gICAgICAkc2NvcGUucXVlcnkudGVybSA9ICcnXG5cbiAgICAkc2NvcGUuYWRkR3VuUGVlciA9ICh1cmwpIC0+XG4gICAgICAkc2NvcGUuZ3VuLm9wdCh7cGVlcnM6IFt1cmxdfSk7ICMgVE9ETzogdmFsaWRhdGUgdXJsXG5cbiAgICAkc2NvcGUucmVtb3ZlR3VuUGVlciA9ICh1cmwpIC0+XG4gICAgICBwZWVyID0gJHNjb3BlLmd1bi5fLm9wdC5wZWVyc1t1cmxdICMgZ2V0IHRoZSBwZWVyIHlvdSB3YW50XG4gICAgICBwZWVyLnVybCA9IHBlZXIuaWQgPSBudWxsICMgdGhpcyBwcmV2ZW50cyByZWNvbm5lY3RpbmcgdG8gVVJMXG4gICAgICBwZWVyLndpcmUuY2xvc2UoKSAjIGlmIHdlYnNvY2tldCBpbnRlcmZhY2VcbiAgICAgIGRlbGV0ZSAkc2NvcGUuZ3VuLl8ub3B0LnBlZXJzW3VybF0gIyByZW1vdmUgZnJvbSBwZWVyIGxpc3RcblxuICAgICRzY29wZS5hZGRJcGZzUGVlciA9ICh1cmwpIC0+XG4gICAgICAkc2NvcGUuaXBmcy5ib290c3RyYXAuYWRkIHVybFxuICAgICAgJHNjb3BlLmlwZnMuc3dhcm0uY29ubmVjdCh1cmwpLnRoZW4gLT5cbiAgICAgICAgJHNjb3BlLnVwZGF0ZUlwZnNQZWVycygpXG5cbiAgICAkc2NvcGUuYWRkRGVmYXVsdElwZnNQZWVycyA9IC0+XG4gICAgICAkc2NvcGUuaXBmcy5ib290c3RyYXAuYWRkKCcnLCB7ZGVmYXVsdDogdHJ1ZX0pLnRoZW4gLT4gIyBUT0RPOiBlcnJvcnNcbiAgICAgICAgJHNjb3BlLnVwZGF0ZUlwZnNQZWVycygpXG5cbiAgICAkc2NvcGUucmVtb3ZlSXBmc1BlZXIgPSAodXJsKSAtPlxuICAgICAgJHNjb3BlLmlwZnMuYm9vdHN0cmFwLnJtIHVybFxuICAgICAgJHNjb3BlLmlwZnMuc3dhcm0uZGlzY29ubmVjdCh1cmwpLnRoZW4gLT5cbiAgICAgICAgJHNjb3BlLnVwZGF0ZUlwZnNQZWVycygpXG5cbiAgICAkc2NvcGUuZGVza3RvcE5vdGlmaWNhdGlvbnNBdmFpbGFibGUgPSAhIXdpbmRvdy5Ob3RpZmljYXRpb25cbiAgICAkc2NvcGUubm90aWZpY2F0aW9uc1Blcm1pdHRlZCA9IHdpbmRvdy5Ob3RpZmljYXRpb24gYW5kIE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uID09ICdncmFudGVkJ1xuICAgIE5vdGlmaWNhdGlvblNlcnZpY2UuZGVza3RvcE5vdGlmaWNhdGlvbnNEaXNhYmxlZCA9ICRzY29wZS5sb2NhbFNldHRpbmdzLmRlc2t0b3BOb3RpZmljYXRpb25zRGlzYWJsZWRcbiAgICBOb3RpZmljYXRpb25TZXJ2aWNlLmF1ZGlvTm90aWZpY2F0aW9uc0Rpc2FibGVkID0gJHNjb3BlLmxvY2FsU2V0dGluZ3MuYXVkaW9Ob3RpZmljYXRpb25zRGlzYWJsZWRcblxuICAgICRzY29wZS5zZXRBdWRpb05vdGlmaWNhdGlvbnNEaXNhYmxlZCA9IChkaXNhYmxlZCkgLT5cbiAgICAgICRzY29wZS5zYXZlTG9jYWxTZXR0aW5nKCdhdWRpb05vdGlmaWNhdGlvbnNEaXNhYmxlZCcsIGRpc2FibGVkKVxuICAgICAgTm90aWZpY2F0aW9uU2VydmljZS5hdWRpb05vdGlmaWNhdGlvbnNEaXNhYmxlZCA9IGRpc2FibGVkXG5cbiAgICAkc2NvcGUuc2V0RGVza3RvcE5vdGlmaWNhdGlvbnNEaXNhYmxlZCA9IChkaXNhYmxlZCkgLT5cbiAgICAgICRzY29wZS5zYXZlTG9jYWxTZXR0aW5nICdkZXNrdG9wTm90aWZpY2F0aW9uc0Rpc2FibGVkJywgZGlzYWJsZWRcbiAgICAgICRzY29wZS5zYXZlTG9jYWxTZXR0aW5nKCdkZXNrdG9wTm90aWZpY2F0aW9uc05vdE5vdycsIGZhbHNlKSBpZiBkaXNhYmxlZFxuICAgICAgTm90aWZpY2F0aW9uU2VydmljZS5kZXNrdG9wTm90aWZpY2F0aW9uc0Rpc2FibGVkID0gZGlzYWJsZWRcbiAgICAgIGlmICFkaXNhYmxlZFxuICAgICAgICBpZiB3aW5kb3cuTm90aWZpY2F0aW9uXG4gICAgICAgICAgTm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uIChzdGF0dXMpIC0+XG4gICAgICAgICAgICAkc2NvcGUuJGFwcGx5IC0+XG4gICAgICAgICAgICAgICRzY29wZS5ub3RpZmljYXRpb25zUGVybWl0dGVkID0gc3RhdHVzID09ICdncmFudGVkJ1xuICAgICAgICAgICAgICAkc2NvcGUuZW5hYmxlTm90aWZpY2F0aW9uc0ZhaWxlZCA9ICEkc2NvcGUubm90aWZpY2F0aW9uc1Blcm1pdHRlZFxuICAgICAgICBlbHNlXG4gICAgICAgICAgJHNjb3BlLmVuYWJsZU5vdGlmaWNhdGlvbnNGYWlsZWQgPSB0cnVlXG5dXG4iXX0=

(function() {
  'use strict';
  // Identities controller
  angular.module('irisAngular').controller('IdentitiesController', [
    '$scope',
    '$state',
    '$rootScope',
    '$window',
    '$document',
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
    $document,
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
                  a.iconStyle = 'fab fa-facebook';
                  a.btnStyle = 'btn-facebook';
                  a.link = a.value;
                  a.linkName = a.value.split('facebook.com/')[1];
                  a.quickContact = true;
                } else if (a.value.indexOf('twitter.com/') > -1) {
                  a.iconStyle = 'fab fa-twitter';
                  a.btnStyle = 'btn-twitter';
                  a.link = a.value;
                  a.linkName = a.value.split('twitter.com/')[1];
                  a.quickContact = true;
                } else if (a.value.indexOf('plus.google.com/') > -1) {
                  a.iconStyle = 'fab fa-google-plus';
                  a.btnStyle = 'btn-google-plus';
                  a.link = a.value;
                  a.linkName = a.value.split('plus.google.com/')[1];
                  a.quickContact = true;
                } else if (a.value.indexOf('linkedin.com/') > -1) {
                  a.iconStyle = 'fab fa-linkedin';
                  a.btnStyle = 'btn-linkedin';
                  a.link = a.value;
                  a.linkName = a.value.split('linkedin.com/')[1];
                  a.quickContact = true;
                } else if (a.value.indexOf('github.com/') > -1) {
                  a.iconStyle = 'fab fa-github';
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
        var onMessage,
    visibilityChanged;
        $scope.chatMessages = [];
        onMessage = function(msg) {
          return $scope.$apply(function() {
            if (msg) {
              $scope.chatMessages.push(msg);
            }
            if ($scope.chat && (msg.time > $scope.chat.myMsgsLastSeenTime) && !$document.hidden) {
              return $scope.chat.setMyMsgsLastSeenTime();
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
            visibilityChanged = function() {
              if ($document.visibilityState === 'visible') {
                return $scope.chat.setMyMsgsLastSeenTime();
              }
            };
            $document.on('visibilitychange',
    visibilityChanged);
            $scope.$on('$destroy',
    function() {
              return $document.off('visibilitychange',
    visibilityChanged);
            });
            $scope.chat.setMyMsgsLastSeenTime();
            $scope.chat.getMyMsgsLastSeenTime(function(time) {
              return $scope.$apply(function() {
                return $scope.chat.myMsgsLastSeenTime = time;
              });
            });
            $scope.chat.getTheirMsgsLastSeenTime(function(time) {
              return $scope.$apply(function() {
                return $scope.chat.theirMsgsLastSeenTime = time;
              });
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdGllcy9pZGVudGl0aWVzLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzIjpbImlkZW50aXRpZXMvaWRlbnRpdGllcy5jb250cm9sbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLGFBQUE7O0VBRUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxhQUFmLENBQTZCLENBQUMsVUFBOUIsQ0FBeUMsc0JBQXpDLEVBQWlFO0lBQy9ELFFBRCtEO0lBRS9ELFFBRitEO0lBRy9ELFlBSCtEO0lBSS9ELFNBSitEO0lBSy9ELFdBTCtEO0lBTS9ELGNBTitEO0lBTy9ELGNBUCtEO0lBUS9ELFdBUitEO0lBUy9ELE9BVCtEO0lBVS9ELElBVitEO0lBVy9ELFVBWCtEO0lBWS9ELFdBWitEOztJQWMvRCxRQWQrRDtJQWUvRCxxQkFmK0Q7SUFnQi9ELE9BaEIrRDtJQWlCL0QscUJBakIrRDtJQWtCL0QsUUFBQSxDQUFDLE1BQUQ7SUFBUyxNQUFUO0lBQWlCLFVBQWpCO0lBQTZCLE9BQTdCO0lBQXNDLFNBQXRDO0lBQWlELFlBQWpEO0lBQStELFlBQS9EO0lBQTZFLFNBQTdFO0lBQXdGLEtBQXhGO0lBQStGLEVBQS9GO0lBQW1HLFFBQW5HO0lBQTZHLFNBQTdHO0lBQXdILE1BQXhIO0lBQ0EsbUJBREE7SUFDcUIsS0FEckI7SUFDNEIsbUJBRDVCLENBQUEsRUFBQTtBQUVFLFVBQUEsSUFBQTtJQUFBLGdCQUFBO0lBQUEsQ0FBQTtJQUFBLGFBQUE7SUFBQTtNQUFBLE1BQU0sQ0FBQyxRQUFQLEdBQWtCLENBQUE7TUFDbEIsTUFBTSxDQUFDLFNBQVAsR0FBbUI7TUFDbkIsTUFBTSxDQUFDLFdBQVAsR0FBcUIsUUFBQSxDQUFDLEtBQUQsQ0FBQTtlQUFXLE1BQU0sQ0FBQyxTQUFQLEdBQW1CO01BQTlCO01BQ3JCLE1BQU0sQ0FBQyxJQUFQLEdBQWM7TUFDZCxNQUFNLENBQUMsUUFBUCxHQUNFO1FBQUEsSUFBQSxFQUFNLEVBQU47UUFDQSxJQUFBLEVBQU0sQ0FBQTtNQUROO01BRUYsTUFBTSxDQUFDLFVBQVAsR0FBb0I7TUFDcEIsV0FBQSxHQUFjLENBQUE7TUFDZCxhQUFBLEdBQWdCLENBQUE7TUFDaEIsTUFBTSxDQUFDLFFBQVAsR0FBa0I7TUFDbEIsTUFBTSxDQUFDLFVBQVAsR0FBb0I7TUFDcEIsTUFBTSxDQUFDLGFBQVAsR0FBdUI7TUFDdkIsSUFBMkMsWUFBWSxDQUFDLE1BQXhEO1FBQUEsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFiLEdBQW9CLFlBQVksQ0FBQyxPQUFqQzs7TUFDQSxNQUFNLENBQUMsZUFBUCxHQUNFO1FBQUEsSUFBQSxFQUFNLEVBQU47UUFDQSxLQUFBLEVBQU87TUFEUDtNQUVGLE1BQU0sQ0FBQyxhQUFQLEdBQXVCLENBQUE7TUFDdkIsTUFBTSxDQUFDLGVBQVAsR0FBeUIsT0FBTyxDQUFDLFVBQVIsR0FBcUI7TUFDOUMsTUFBTSxDQUFDLE1BQVAsR0FDRTtRQUFBLE9BQUEsRUFDRTtVQUFBLEtBQUEsRUFBTyxDQUFDLENBQVI7VUFDQSxJQUFBLEVBQU0sQ0FETjtVQUVBLGlCQUFBLEVBQW1CLElBRm5CO1VBR0EsZUFBQSxFQUFpQixJQUhqQjtVQUlBLGdCQUFBLEVBQWtCO1FBSmxCO01BREY7TUFPRixDQUFBLEdBQUksU0FBUyxDQUFDLE1BQVYsQ0FBQTtNQUNKLElBQXVCLENBQUMsQ0FBQyxLQUF6QjtRQUFBLE1BQU0sQ0FBQyxLQUFQLEdBQWUsS0FBZjs7TUFDQSxJQUF3QixDQUFDLENBQUMsTUFBMUI7UUFBQSxNQUFNLENBQUMsTUFBUCxHQUFnQixLQUFoQjs7TUFFQSxJQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQWxCLElBQTZCLE1BQU0sQ0FBQyxFQUFQLENBQVUsaUJBQVYsQ0FBaEM7UUFDRSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQWIsR0FBb0I7UUFDcEIsTUFBTSxDQUFDLE1BQVAsQ0FBQSxFQUZGOztNQUlBLElBQUcsTUFBTSxDQUFDLEVBQVAsQ0FBVSxpQkFBVixDQUFIO1FBQ0UsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFmLEdBQTZCO1FBQzdCLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBZixHQUFzQjtRQUN0QixJQUErQixNQUFNLENBQUMsTUFBUCxJQUFrQixDQUFJLE1BQU0sQ0FBQyxjQUE1RDtVQUFBLE1BQU0sQ0FBQyxrQkFBUCxDQUFBLEVBQUE7U0FIRjs7TUFLQSxNQUFNLENBQUMsUUFBUCxHQUFrQixRQUFBLENBQUMsS0FBRDtJQUFRLEtBQVIsQ0FBQTtBQUNoQixZQUFBLE1BQUE7SUFBQTtRQUFBLElBQUcsS0FBSyxDQUFDLEtBQVQ7VUFDRSxNQUFBLEdBQVM7WUFBQyxJQUFBLEVBQUssT0FBTjtZQUFlLEtBQUEsRUFBTyxLQUFLLENBQUM7VUFBNUIsRUFEWDtTQUFBLE1BRUssSUFBRyxLQUFLLENBQUMsR0FBVDtVQUNILE1BQUEsR0FBUztZQUFDLElBQUEsRUFBSyxLQUFOO1lBQWEsS0FBQSxFQUFPLEtBQUssQ0FBQztVQUExQixFQUROO1NBQUEsTUFBQTtVQUdILE1BQUEsR0FBUyxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxPQUExQixDQUFBO1VBQ1QsS0FBSyxDQUFDLElBQU4sR0FBYSxNQUFNLENBQUMsTUFKakI7O1FBS0wsTUFBQSxHQUNFO1VBQUEsSUFBQSxFQUFNLGNBQU47VUFDQSxTQUFBLEVBQVc7UUFEWDtlQUVGLE1BQU0sQ0FBQyxhQUFQLENBQXFCLEtBQXJCO0lBQTRCLE1BQTVCLENBQW1DLENBQUMsSUFBcEMsQ0FBeUMsUUFBQSxDQUFDLFFBQUQsQ0FBQTtpQkFDdkMsTUFBTSxDQUFDLEVBQVAsQ0FBVSxpQkFBVjtJQUE2QixNQUE3QjtRQUR1QyxDQUF6QztJQUVFLFFBQUEsQ0FBQyxLQUFELENBQUE7aUJBQ0EsT0FBTyxDQUFDLEdBQVIsQ0FBWSxPQUFaO0lBQXFCLEtBQXJCO1FBREEsQ0FGRjtNQVhnQjtNQWdCbEIsTUFBTSxDQUFDLFVBQVAsR0FBb0IsUUFBQSxDQUFDLFFBQUQsQ0FBQTtBQUNsQixZQUFBLEdBQUE7SUFBQTtRQUFBLElBQUEsQ0FBQSxDQUFjLFFBQUEsSUFBYSxRQUFRLENBQUMsTUFBVCxHQUFrQixDQUE3QyxDQUFBO0FBQUEsaUJBQUE7O1FBQ0EsSUFBQSxHQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE9BQTFCLENBQUEsQ0FBbUMsQ0FBQztRQUMzQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFyQixDQUFBLENBQTJCLENBQUMsR0FBNUIsQ0FBZ0MsTUFBaEMsQ0FBdUMsQ0FBQyxHQUF4QyxDQUE0QyxvQkFBNUMsQ0FBaUUsQ0FBQyxHQUFsRSxDQUFzRSxJQUF0RSxDQUEyRSxDQUFDLEdBQTVFLENBQWdGLENBQUEsQ0FBaEY7UUFDQSxHQUFBLEdBQ0U7VUFBQSxJQUFBLEVBQU0sY0FBTjtVQUNBLFNBQUEsRUFDRTtZQUFBLElBQUEsRUFBTSxJQUFOO1lBQ0EsSUFBQSxFQUFNLFFBRE47WUFFQSxJQUFBLEVBQU07VUFGTjtRQUZGO1FBS0YsTUFBTSxDQUFDLGFBQVAsQ0FBcUIsTUFBckI7SUFBZ0MsR0FBaEM7ZUFDQSxNQUFNLENBQUMsRUFBUCxDQUFVLFlBQVY7SUFBd0I7VUFBRSxJQUFBLEVBQU0sTUFBUjtVQUFnQixLQUFBLEVBQU87UUFBdkIsQ0FBeEI7TUFYa0I7TUFhcEIsTUFBTSxDQUFDLGtCQUFQLEdBQTRCLFFBQUEsQ0FBQSxDQUFBO1FBQzFCLElBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsTUFBaEM7VUFDRSxNQUFNLENBQUMsZUFBZSxDQUFDLElBQXZCLEdBQThCLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFdBQTFCLENBQXNDLE1BQU0sQ0FBQyxlQUFlLENBQUMsS0FBN0Q7VUFDOUIsSUFBQSxDQUFPLE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBOUI7WUFDRSxJQUFBLENBQU8sTUFBTSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsS0FBN0IsQ0FBbUMsNEZBQW5DLENBQVA7cUJBQ0UsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUF2QixHQUE4QixPQURoQzthQURGO1dBRkY7U0FBQSxNQUFBO2lCQU1FLE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBdkIsR0FBOEIsR0FOaEM7O01BRDBCO01BUzVCLE1BQU0sQ0FBQyxPQUFQLEdBQWlCLFFBQUEsQ0FBQyxJQUFELENBQUE7QUFDZixZQUFBO1FBQUEsSUFBRyxJQUFIO1VBQ0UsU0FBQSxHQUFZLENBQUMsSUFBRDtVQUNaLFNBQVUsQ0FBQSxNQUFNLENBQUMsTUFBUCxDQUFWLEdBQTJCLE1BQU0sQ0FBQztVQUNsQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxrQkFBeEIsQ0FBMkMsQ0FBQyxTQUFELENBQTNDO0lBQXdELE1BQU0sQ0FBQyxVQUEvRCxDQUEwRSxDQUFDLElBQTNFLENBQWdGLFFBQUEsQ0FBQyxDQUFELENBQUE7bUJBQzlFLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBakIsQ0FBNEIsQ0FBNUI7VUFEOEUsQ0FBaEY7aUJBRUEsTUFBTSxDQUFDLFNBQVAsR0FBbUIsS0FMckI7U0FBQSxNQUFBO1VBT0UsTUFBTSxDQUFDLFVBQVAsR0FBb0I7aUJBQ3BCLEtBQUEsQ0FBTSxjQUFOLEVBUkY7O01BRGU7TUFXakIsTUFBTSxDQUFDLGFBQVAsR0FBdUIsUUFBQSxDQUFBLENBQUE7ZUFDckIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBcEIsQ0FBd0IsT0FBeEIsQ0FBZ0MsQ0FBQyxJQUFqQyxDQUFzQyxRQUFBLENBQUMsS0FBRCxDQUFBO0FBQ3BDLGNBQUEsQ0FBQTtJQUFBLEtBQUE7SUFBQSxVQUFBO0lBQUEsQ0FBQTtJQUFBLENBQUE7SUFBQSxHQUFBO0lBQUEsaUJBQUE7SUFBQSxVQUFBO0lBQUE7VUFBQSxVQUFBLEdBQWEsS0FBQSxJQUFTO1VBQ3RCLElBQUcsVUFBVSxDQUFDLE1BQVgsR0FBb0IsQ0FBdkI7WUFDRSxDQUFBLEdBQUksVUFBVyxDQUFBLENBQUE7WUFDZixpQkFBQSxHQUFvQixDQUFDLENBQUMsY0FGeEI7V0FBQSxNQUFBO1lBSUUsaUJBQUEsR0FBb0IsRUFKdEI7O1VBS0EsTUFBTSxDQUFDLFVBQVAsR0FBb0IsTUFBTSxDQUFDLE1BQVAsQ0FBYyxVQUFkO0FBQ3BCO1VBQUEsS0FBQSxxQ0FBQTs7WUFDRSxJQUFBLENBQUEsQ0FBYyxDQUFDLENBQUMsSUFBRixJQUFXLENBQUMsQ0FBQyxLQUEzQixDQUFBO0FBQUEscUJBQUE7O1lBQ0EsQ0FBQyxDQUFDLElBQUYsR0FBUyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBcEIsQ0FBOEIsQ0FBQyxDQUFDLElBQWhDO0lBQXNDLENBQUMsQ0FBQyxLQUF4QztZQUNULENBQUMsQ0FBQyxTQUFGLEdBQWMsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQXBCLENBQThCLE1BQU0sQ0FBQyxNQUFyQztJQUE2QyxNQUFNLENBQUMsT0FBcEQsQ0FBNEQsQ0FBQyxNQUE3RCxDQUFvRSxDQUFDLENBQUMsSUFBdEU7WUFDZCxDQUFDLENBQUMsS0FBRixHQUFhLENBQUMsQ0FBQyxTQUFMLEdBQW9CLEtBQXBCLEdBQWtDLENBQUMsQ0FBQyxDQUFDLGFBQUYsSUFBbUIsQ0FBQyxDQUFDLElBQXRCLENBQUEsR0FBOEIsQ0FBQSxHQUFJLENBQUMsQ0FBQyxDQUFDLGVBQUYsSUFBcUIsQ0FBQyxDQUFDLEdBQXhCO1lBQzlFLElBQWlDLENBQUMsQ0FBQyxTQUFuQztjQUFBLENBQUMsQ0FBQyxRQUFGLEdBQWEsaUJBQWI7O0FBQ0Esb0JBQU8sQ0FBQyxDQUFDLElBQVQ7QUFBQSxtQkFDTyxPQURQO2dCQUVJLENBQUMsQ0FBQyxTQUFGLEdBQWM7Z0JBQ2QsQ0FBQyxDQUFDLFFBQUYsR0FBYTtnQkFDYixDQUFDLENBQUMsSUFBRixHQUFTLFNBQUEsR0FBWSxDQUFDLENBQUM7Z0JBQ3ZCLENBQUMsQ0FBQyxZQUFGLEdBQWlCO0FBSmQ7QUFEUCxtQkFNTyxpQkFOUDtBQUFBLG1CQU0wQixTQU4xQjtnQkFPSSxDQUFDLENBQUMsU0FBRixHQUFjO2dCQUNkLENBQUMsQ0FBQyxRQUFGLEdBQWE7Z0JBQ2IsQ0FBQyxDQUFDLElBQUYsR0FBUyxrQ0FBQSxHQUFxQyxDQUFDLENBQUM7Z0JBQ2hELENBQUMsQ0FBQyxZQUFGLEdBQWlCO0FBSks7QUFOMUIsbUJBV08saUJBWFA7QUFBQSxtQkFXMEIsV0FYMUI7Z0JBWUksQ0FBQyxDQUFDLFNBQUYsR0FBYztnQkFDZCxDQUFDLENBQUMsUUFBRixHQUFhO2dCQUNiLENBQUMsQ0FBQyxJQUFGLEdBQVMsaURBQUEsR0FBb0QsQ0FBQyxDQUFDO0FBSHpDO0FBWDFCLG1CQWVPLFNBZlA7Z0JBZ0JJLENBQUMsQ0FBQyxTQUFGLEdBQWM7QUFEWDtBQWZQLG1CQWlCTyxVQWpCUDtnQkFrQkksTUFBTSxDQUFDLFFBQVEsQ0FBQyxhQUFoQixHQUFnQztnQkFDaEMsQ0FBQyxDQUFDLFNBQUYsR0FBYztBQUZYO0FBakJQLG1CQW9CTyxNQXBCUDtnQkFxQkksTUFBTSxDQUFDLFFBQVEsQ0FBQyxhQUFoQixHQUFnQztnQkFDaEMsQ0FBQyxDQUFDLFNBQUYsR0FBYztBQUZYO0FBcEJQLG1CQXVCTyxLQXZCUDtBQUFBLG1CQXVCYyxPQXZCZDtnQkF3QkksQ0FBQyxDQUFDLFNBQUYsR0FBYztnQkFDZCxDQUFDLENBQUMsUUFBRixHQUFhO2dCQUNiLENBQUMsQ0FBQyxJQUFGLEdBQVMsTUFBQSxHQUFTLENBQUMsQ0FBQztnQkFDcEIsQ0FBQyxDQUFDLFlBQUYsR0FBaUI7QUFKUDtBQXZCZCxtQkE0Qk8sT0E1QlA7Z0JBNkJJLENBQUMsQ0FBQyxTQUFGLEdBQWM7QUFEWDtBQTVCUCxtQkE4Qk8sWUE5QlA7Z0JBK0JJLElBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFSLENBQWMsOEJBQWQsQ0FBSDtrQkFDRSxNQUFNLENBQUMsT0FBUCxDQUFlLENBQUMsQ0FBQyxLQUFqQixDQUF1QixDQUFDLElBQXhCLENBQTZCLFFBQUEsQ0FBQyxVQUFELENBQUE7MkJBQzNCLE1BQU0sQ0FBQyxVQUFQLEdBQW9CLE1BQU0sQ0FBQyxVQUFQLElBQXFCO3NCQUFFLGtCQUFBLEVBQW9CLHdCQUFBLEdBQTJCLFVBQVUsQ0FBQyxRQUFYLENBQW9CLFFBQXBCLENBQTNCLEdBQTJEO29CQUFqRjtrQkFEZCxDQUE3QixFQURGOztBQURHO0FBOUJQLG1CQWtDTyxLQWxDUDtnQkFtQ0ksQ0FBQyxDQUFDLElBQUYsR0FBUyxDQUFDLENBQUM7Z0JBQ1gsSUFBRyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQVIsQ0FBZ0IsZUFBaEIsQ0FBQSxHQUFtQyxDQUFDLENBQXZDO2tCQUNFLENBQUMsQ0FBQyxTQUFGLEdBQWM7a0JBQ2QsQ0FBQyxDQUFDLFFBQUYsR0FBYTtrQkFDYixDQUFDLENBQUMsSUFBRixHQUFTLENBQUMsQ0FBQztrQkFDWCxDQUFDLENBQUMsUUFBRixHQUFhLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBUixDQUFjLGVBQWQsQ0FBK0IsQ0FBQSxDQUFBO2tCQUM1QyxDQUFDLENBQUMsWUFBRixHQUFpQixLQUxuQjtpQkFBQSxNQU1LLElBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFSLENBQWdCLGNBQWhCLENBQUEsR0FBa0MsQ0FBQyxDQUF0QztrQkFDSCxDQUFDLENBQUMsU0FBRixHQUFjO2tCQUNkLENBQUMsQ0FBQyxRQUFGLEdBQWE7a0JBQ2IsQ0FBQyxDQUFDLElBQUYsR0FBUyxDQUFDLENBQUM7a0JBQ1gsQ0FBQyxDQUFDLFFBQUYsR0FBYSxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQVIsQ0FBYyxjQUFkLENBQThCLENBQUEsQ0FBQTtrQkFDM0MsQ0FBQyxDQUFDLFlBQUYsR0FBaUIsS0FMZDtpQkFBQSxNQU1BLElBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFSLENBQWdCLGtCQUFoQixDQUFBLEdBQXNDLENBQUMsQ0FBMUM7a0JBQ0gsQ0FBQyxDQUFDLFNBQUYsR0FBYztrQkFDZCxDQUFDLENBQUMsUUFBRixHQUFhO2tCQUNiLENBQUMsQ0FBQyxJQUFGLEdBQVMsQ0FBQyxDQUFDO2tCQUNYLENBQUMsQ0FBQyxRQUFGLEdBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFSLENBQWMsa0JBQWQsQ0FBa0MsQ0FBQSxDQUFBO2tCQUMvQyxDQUFDLENBQUMsWUFBRixHQUFpQixLQUxkO2lCQUFBLE1BTUEsSUFBRyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQVIsQ0FBZ0IsZUFBaEIsQ0FBQSxHQUFtQyxDQUFDLENBQXZDO2tCQUNILENBQUMsQ0FBQyxTQUFGLEdBQWM7a0JBQ2QsQ0FBQyxDQUFDLFFBQUYsR0FBYTtrQkFDYixDQUFDLENBQUMsSUFBRixHQUFTLENBQUMsQ0FBQztrQkFDWCxDQUFDLENBQUMsUUFBRixHQUFhLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBUixDQUFjLGVBQWQsQ0FBK0IsQ0FBQSxDQUFBO2tCQUM1QyxDQUFDLENBQUMsWUFBRixHQUFpQixLQUxkO2lCQUFBLE1BTUEsSUFBRyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQVIsQ0FBZ0IsYUFBaEIsQ0FBQSxHQUFpQyxDQUFDLENBQXJDO2tCQUNILENBQUMsQ0FBQyxTQUFGLEdBQWM7a0JBQ2QsQ0FBQyxDQUFDLFFBQUYsR0FBYTtrQkFDYixDQUFDLENBQUMsSUFBRixHQUFTLENBQUMsQ0FBQztrQkFDWCxDQUFDLENBQUMsUUFBRixHQUFhLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBUixDQUFjLGFBQWQsQ0FBNkIsQ0FBQSxDQUFBO2tCQUMxQyxDQUFDLENBQUMsWUFBRixHQUFpQixLQUxkO2lCQUFBLE1BQUE7a0JBT0gsQ0FBQyxDQUFDLFNBQUYsR0FBYztrQkFDZCxDQUFDLENBQUMsUUFBRixHQUFhLGNBUlY7O0FBMUJGO0FBbENQO2dCQXNFSSxDQUFDLENBQUMsU0FBRixHQUFjO0FBdEVsQjtZQXVFQSxJQUFHLENBQUMsQ0FBQyxLQUFGLElBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFSLENBQWMsOEJBQWQsQ0FBZjtjQUNFLENBQUMsQ0FBQyxJQUFGLEdBQVMsaUJBQUEsR0FBb0IsQ0FBQyxDQUFDO2NBQy9CLENBQUMsQ0FBQyxRQUFGLEdBQWEsQ0FBQyxDQUFDO2NBQ2YsQ0FBQyxDQUFDLFNBQUYsR0FBYztjQUNkLENBQUMsQ0FBQyxRQUFGLEdBQWEsY0FKZjs7WUFLQSxJQUFHLENBQUMsQ0FBQyxhQUFGLEdBQWtCLENBQUMsQ0FBQyxlQUFwQixHQUFzQyxDQUF6QztjQUNFLFVBQUEsR0FBYSxDQUFDLENBQUMsYUFBRixHQUFrQixHQUFsQixHQUF3QixDQUFDLENBQUMsQ0FBQyxhQUFGLEdBQWtCLENBQUMsQ0FBQyxlQUFyQjtjQUNyQyxJQUFHLFVBQUEsSUFBYyxFQUFqQjtnQkFDRSxLQUFBLEdBQVEsQ0FBQyxDQUFDLGFBQUYsR0FBa0IsaUJBQWxCLEdBQXNDLEdBQXRDLEdBQTRDLElBRHREOztlQUFBLE1BR0ssSUFBRyxVQUFBLElBQWMsRUFBakI7Z0JBQ0gsQ0FBQyxDQUFDLFFBQUYsR0FBYSxVQURWO2VBQUEsTUFBQTtnQkFHSCxDQUFDLENBQUMsUUFBRixHQUFhLFNBSFY7ZUFMUDs7WUFTQSxNQUFNLENBQUMsZ0JBQVAsR0FBMEIsTUFBTSxDQUFDLGdCQUFQLElBQTJCLENBQUMsQ0FBQztVQTNGekQ7aUJBNEZBLE1BQU0sQ0FBQyxnQkFBUCxHQUEwQixNQUFNLENBQUMsVUFBVSxDQUFDO1FBcEdSLENBQXRDO01BRHFCO01BdUd2QixNQUFNLENBQUMsZ0JBQVAsR0FBMEIsUUFBQSxDQUFDLEtBQUQ7SUFBUSxJQUFSLENBQUE7QUFDeEIsWUFBQSxDQUFBO0lBQUEsUUFBQTtJQUFBLFFBQUE7SUFBQSxDQUFBO0lBQUEsQ0FBQTtJQUFBLEdBQUE7SUFBQSxJQUFBO0lBQUEsR0FBQTtJQUFBLEdBQUE7SUFBQSxJQUFBO0lBQUE7UUFBQSxJQUFHLElBQUksQ0FBQyxjQUFSO2lCQUNFLElBQUksQ0FBQyxRQUFMLEdBQWdCLENBQUMsSUFBSSxDQUFDLFNBRHhCO1NBQUEsTUFBQTtVQUdFLElBQUksQ0FBQyxjQUFMLEdBQXNCO0FBQ3RCO1VBQUEsS0FBQSxxQ0FBQTs7WUFDRSxZQUFnQixHQUFHLENBQUMsVUFBVSxDQUFDLEtBQWYsS0FBd0IsY0FBeEIsSUFBQSxJQUFBLEtBQXdDLGdCQUF4QyxJQUFBLElBQUEsS0FBMEQsaUJBQTFELElBQUEsSUFBQSxLQUE2RSxtQkFBN0Y7QUFBQSx1QkFBQTs7WUFDQSxRQUFBLEdBQVcsUUFBQSxHQUFXO0FBQ3RCO1lBQUEsS0FBQSx3Q0FBQTs7Y0FDRSxRQUFBLEdBQVcsUUFBQSxJQUFZLENBQUMsQ0FBQyxJQUFGLEtBQVUsSUFBSSxDQUFDLElBQWYsSUFBd0IsQ0FBQyxDQUFDLEtBQUYsS0FBVyxJQUFJLENBQUM7Y0FDL0QsUUFBQSxHQUFXLFFBQUEsSUFBWSxDQUFDLENBQUMsSUFBRixLQUFVLE1BQU0sQ0FBQyxNQUFqQixJQUE0QixDQUFDLENBQUMsS0FBRixLQUFXLE1BQU0sQ0FBQztjQUNyRSxJQUFHLFFBQUEsSUFBYSxRQUFoQjtnQkFDRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQXBCLENBQXlCLEdBQXpCO0FBQ0Esc0JBRkY7O1lBSEY7VUFIRjtpQkFTQSxJQUFJLENBQUMsUUFBTCxHQUFnQixDQUFDLElBQUksQ0FBQyxTQWJ4Qjs7TUFEd0I7TUFnQjFCLE1BQU0sQ0FBQyxXQUFQLEdBQXFCLFFBQUEsQ0FBQSxDQUFBO0FBQ25CLFlBQUEsUUFBQTtJQUFBO1FBQUEsSUFBQSxDQUFBLENBQWMsTUFBTSxDQUFDLFFBQVAsSUFBb0IsTUFBTSxDQUFDLFNBQXpDLENBQUE7QUFBQSxpQkFBQTs7UUFDQSxNQUFNLENBQUMsSUFBUCxHQUFjO1FBQ2QsTUFBQSxHQUFZLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBZixHQUEyQixNQUFNLENBQUMsSUFBSyxDQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBWixHQUFxQixDQUFyQixDQUF1QixDQUFDLE1BQS9ELEdBQTJFO1FBQ3BGLFFBQUEsR0FBVyxRQUFBLENBQUMsR0FBRCxDQUFBO1VBQ1QsTUFBTSxDQUFDLGVBQVAsQ0FBdUIsQ0FBQyxHQUFELENBQXZCO0lBQThCO1lBQUUsWUFBQSxFQUFjO1VBQWhCLENBQTlCO2lCQUNBLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBWixDQUFpQixHQUFqQjtRQUZTO2VBSVgsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFoQixDQUFxQixDQUFDLFFBQUQsQ0FBckI7TUFSbUI7TUFVckIsTUFBTSxDQUFDLGVBQVAsR0FBeUIsUUFBQSxDQUFBLENBQUE7QUFDdkIsWUFBQSxRQUFBO0lBQUE7UUFBQSxJQUFBLENBQUEsQ0FBYyxNQUFNLENBQUMsUUFBUCxJQUFvQixNQUFNLENBQUMsU0FBekMsQ0FBQTtBQUFBLGlCQUFBOztRQUNBLE1BQU0sQ0FBQyxRQUFQLEdBQ0U7VUFBQSxJQUFBLEVBQU0sRUFBTjtVQUNBLElBQUEsRUFBTSxDQUFBO1FBRE47UUFFRixNQUFBLEdBQVksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBeEIsR0FBb0MsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFLLENBQUEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBckIsR0FBOEIsQ0FBOUIsQ0FBZ0MsQ0FBQyxNQUExRixHQUFzRztRQUMvRyxRQUFBLEdBQVcsUUFBQSxDQUFDLEdBQUQsQ0FBQTtVQUNULElBQVUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFLLENBQUEsR0FBRyxDQUFDLE9BQUosQ0FBQSxDQUFBLENBQS9CO0FBQUEsbUJBQUE7O1VBQ0EsTUFBTSxDQUFDLGVBQVAsQ0FBdUIsQ0FBQyxHQUFELENBQXZCO0lBQThCO1lBQUUsZUFBQSxFQUFpQjtVQUFuQixDQUE5QjtpQkFDQSxNQUFNLENBQUMsTUFBUCxDQUFjLFFBQUEsQ0FBQSxDQUFBO0FBQ1osZ0JBQUEsQ0FBQTtJQUFBLENBQUE7SUFBQSxHQUFBO0lBQUE7WUFBQSxJQUFHLEdBQUcsQ0FBQyxVQUFKLENBQUEsQ0FBSDtjQUNFLElBQUEsQ0FBTyxHQUFHLENBQUMsWUFBWDtnQkFDRSxHQUFHLENBQUMsV0FBSixHQUFrQixHQUFHLENBQUMsY0FBSixDQUFBO0FBQ2xCO2dCQUFBLEtBQUEscUNBQUE7O2tCQUNFLElBQUEsQ0FBNEIsR0FBRyxDQUFDLFlBQWhDO29CQUFBLEdBQUcsQ0FBQyxZQUFKLEdBQW1CLEVBQW5COztnQkFERixDQUZGOztjQUlBLElBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFoQixHQUF5QixFQUF6QixJQUFnQyxDQUFJLFdBQVksQ0FBQSxJQUFJLENBQUMsU0FBTCxDQUFlLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBOUIsQ0FBQSxDQUFuRDtnQkFDRSxXQUFZLENBQUEsSUFBSSxDQUFDLFNBQUwsQ0FBZSxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQTlCLENBQUEsQ0FBWixHQUFxRDtnQkFDckQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFoQixDQUFxQixHQUFyQjtnQkFDQSxNQUFNLENBQUMsV0FBUCxHQUFxQixLQUh2QjtlQUxGO2FBQUEsTUFTSyxJQUFHLEdBQUcsQ0FBQyxVQUFKLENBQUEsQ0FBQSxJQUFxQixNQUFNLENBQUMsVUFBVSxDQUFDLE1BQWxCLEdBQTJCLEVBQWhELElBQXVELENBQUksYUFBYyxDQUFBLElBQUksQ0FBQyxTQUFMLENBQWUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUE5QixDQUFBLENBQTVFO2NBQ0gsYUFBYyxDQUFBLElBQUksQ0FBQyxTQUFMLENBQWUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUE5QixDQUFBLENBQWQsR0FBdUQ7Y0FDdkQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFsQixDQUF1QixHQUF2QjtjQUNBLE1BQU0sQ0FBQyxhQUFQLEdBQXVCLEtBSHBCOztZQUlMLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQXJCLENBQTBCLEdBQTFCO21CQUNBLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSyxDQUFBLEdBQUcsQ0FBQyxPQUFKLENBQUEsQ0FBQSxDQUFyQixHQUFzQztVQWYxQixDQUFkO1FBSFM7ZUFtQlgsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFoQixDQUF5QixDQUFDLFFBQUQ7SUFBVyxNQUFYLENBQXpCO01BekJ1QjtNQTJCekIsTUFBTSxDQUFDLFVBQVAsR0FBb0IsUUFBQSxDQUFDLE9BQUQsQ0FBQTtlQUNsQixPQUFPLENBQUMsTUFBUixDQUFlLE1BQU0sQ0FBQyxPQUF0QjtJQUErQixPQUEvQjtNQURrQjtNQUdwQixNQUFNLENBQUMsZ0JBQVAsR0FBMEIsUUFBQSxDQUFDLElBQUQ7SUFBTyxRQUFQLENBQUE7ZUFDeEIsTUFBTSxDQUFDLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBdUIsQ0FBQyxJQUF4QixDQUE2QixRQUFBLENBQUMsS0FBRCxDQUFBO0FBQzNCLGNBQUE7VUFBQSxTQUFBLEdBQVk7WUFBQyxVQUFBLEVBQVksUUFBQSxHQUFXLEtBQU0sQ0FBQSxDQUFBLENBQUUsQ0FBQztVQUFqQztVQUNaLFNBQVUsQ0FBQSxNQUFNLENBQUMsTUFBUCxDQUFWLEdBQTJCLE1BQU0sQ0FBQztpQkFDbEMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsa0JBQXhCLENBQTJDLENBQUMsU0FBRCxDQUEzQztJQUF3RCxNQUFNLENBQUMsVUFBL0QsQ0FBMEUsQ0FBQyxJQUEzRSxDQUFnRixRQUFBLENBQUMsQ0FBRCxDQUFBO1lBQzlFLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBakIsQ0FBNEIsQ0FBNUI7bUJBQ0EsTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFuQixDQUFBO1VBRjhFLENBQWhGO1FBSDJCLENBQTdCO01BRHdCO01BUTFCLE1BQU0sQ0FBQyxrQkFBUCxHQUE0QixRQUFBLENBQUEsQ0FBQTtlQUMxQixNQUFNLENBQUMsU0FBUCxDQUFpQixnQkFBakI7SUFBbUM7VUFBRSxXQUFBLEVBQWEsaUNBQWY7VUFBa0QsSUFBQSxFQUFNO1FBQXhELENBQW5DO01BRDBCO01BRzVCLE1BQU0sQ0FBQyx5QkFBUCxHQUFtQyxRQUFBLENBQUEsQ0FBQTtRQUNqQyxJQUFBLENBQWMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUFwQztBQUFBLGlCQUFBOztlQUNBLE1BQU0sQ0FBQyxlQUFQLENBQXVCLE1BQU0sQ0FBQyxnQkFBOUI7SUFBZ0Qsb0JBQWhEO0lBQXNFLEtBQXRFO01BRmlDO01BSW5DLE1BQU0sQ0FBQyxNQUFQLEdBQWdCLFlBQVksQ0FBQztNQUM3QixNQUFNLENBQUMsT0FBUCxHQUFpQixZQUFZLENBQUM7TUFDOUIsTUFBTSxDQUFDLGNBQVAsR0FBd0IsQ0FBQyxNQUFNLENBQUMsYUFBUixJQUF5QixDQUFDLE1BQU0sQ0FBQyxNQUFQLEtBQWlCLE9BQWpCLElBQTRCLE1BQU0sQ0FBQyxNQUFQLEtBQWlCLE1BQTlDO01BRWpELE1BQU0sQ0FBQyxPQUFQLEdBQWlCLFFBQUEsQ0FBQSxDQUFBO1FBQ2YsSUFBQSxDQUFjLE1BQU0sQ0FBQyxTQUFyQjtBQUFBLGlCQUFBOztRQUNBLE1BQU0sQ0FBQyxNQUFQLEdBQWdCLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFwQixDQUE4QixNQUFNLENBQUMsTUFBckM7SUFBNkMsTUFBTSxDQUFDLE9BQXBEO1FBQ2hCLE1BQU0sQ0FBQyxLQUFQLEdBQWUsTUFBTSxDQUFDLFFBQVAsQ0FBZ0IsTUFBTSxDQUFDLE1BQXZCO0lBQStCLE1BQU0sQ0FBQyxPQUF0QztRQUNmLE1BQU0sQ0FBQyxhQUFQLEdBQXVCLE1BQU0sQ0FBQyxjQUFQLElBQ3JCLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFERCxJQUVyQixNQUFNLENBQUMsTUFBUCxLQUFpQixNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUZ2QixJQUdyQixNQUFNLENBQUMsT0FBUCxLQUFrQixNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztRQUMvQyxJQUF1QyxNQUFNLENBQUMsYUFBUCxJQUF5QixNQUFNLENBQUMsRUFBUCxDQUFVLGlCQUFWLENBQWhFO1VBQUEsbUJBQW1CLENBQUMsYUFBcEIsQ0FBQSxFQUFBOztRQUNBLElBQXVDLE1BQU0sQ0FBQyxRQUFQLENBQWdCLE9BQWhCLENBQXZDO1VBQUEsbUJBQW1CLENBQUMsYUFBcEIsQ0FBQSxFQUFBOztRQUNBLE1BQU0sQ0FBQyxZQUFQLEdBQXNCLFFBQUEsQ0FBQSxDQUFBO2lCQUNwQixPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxZQUExQixDQUF1QyxNQUFNLENBQUMsTUFBOUMsQ0FBQSxJQUF5RCxNQUFNLENBQUMsTUFBUCxLQUFpQjtRQUR0RDtRQUV0QixJQUFHLENBQUMsTUFBTSxDQUFDLFlBQVg7VUFDRSxNQUFNLENBQUMsRUFBUCxDQUFVLGlCQUFWO0lBQTZCO1lBQUUsTUFBQSxFQUFRLE1BQU0sQ0FBQztVQUFqQixDQUE3QjtVQUNBLElBQWdDLE1BQU0sQ0FBQyxJQUF2QztZQUFBLE1BQU0sQ0FBQyxJQUFLLENBQUEsQ0FBQSxDQUFFLENBQUMsTUFBZixHQUF3QixLQUF4QjtXQUZGOztRQUdBLElBQUcsTUFBTSxDQUFDLEVBQVAsQ0FBVSxpQkFBVixDQUFIO1VBQ0UsTUFBTSxDQUFDLFlBQVAsQ0FBb0IsTUFBTSxDQUFDLE9BQTNCLEVBREY7O1FBRUEsTUFBTSxDQUFDLFFBQVAsR0FBa0IsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFqQixDQUFxQixNQUFNLENBQUMsTUFBNUI7SUFBb0MsTUFBTSxDQUFDLE9BQTNDLEVBaEJsQjtRQWlCQSxNQUFNLENBQUMsZ0JBQVAsQ0FBd0IsTUFBTSxDQUFDLFFBQS9CO0lBQXlDLEtBQXpDO0lBQWdELElBQWhEO1FBQ0EsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBcEIsQ0FBdUIsUUFBQSxDQUFDLElBQUQsQ0FBQTtpQkFDckIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFoQixHQUF1QjtRQURGLENBQXZCO1FBRUEsTUFBTSxDQUFDLGFBQVAsQ0FBQTtRQUNBLE1BQU0sQ0FBQyxXQUFQLENBQUE7UUFDQSxNQUFNLENBQUMsZUFBUCxDQUFBO2VBQ0EsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBcEIsQ0FBd0IsUUFBeEIsQ0FBaUMsQ0FBQyxJQUFsQyxDQUF1QyxRQUFBLENBQUMsTUFBRCxDQUFBO2lCQUNyQyxNQUFNLENBQUMsTUFBUCxHQUFnQjtRQURxQixDQUF2QztNQXhCZTtNQTJCakIsZ0JBQUEsR0FBbUIsUUFBQSxDQUFBLENBQUE7QUFDakIsWUFBQSxTQUFBO0lBQUE7UUFBQSxNQUFNLENBQUMsWUFBUCxHQUFzQjtRQUN0QixTQUFBLEdBQVksUUFBQSxDQUFDLEdBQUQsQ0FBQTtpQkFDVixNQUFNLENBQUMsTUFBUCxDQUFjLFFBQUEsQ0FBQSxDQUFBO1lBQ1osSUFBaUMsR0FBakM7Y0FBQSxNQUFNLENBQUMsWUFBWSxDQUFDLElBQXBCLENBQXlCLEdBQXpCLEVBQUE7O1lBQ0EsSUFBRyxNQUFNLENBQUMsSUFBUCxJQUFnQixDQUFDLEdBQUcsQ0FBQyxJQUFKLEdBQVcsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBeEIsQ0FBaEIsSUFBZ0UsQ0FBSSxTQUFTLENBQUMsTUFBakY7cUJBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBWixDQUFBLEVBREY7O1VBRlksQ0FBZDtRQURVO1FBS1osSUFBRyxNQUFNLENBQUMsTUFBUCxLQUFpQixPQUFwQjtVQUNFLElBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUF6QjtZQUNFLE1BQU0sQ0FBQyxJQUFQLEdBQWMsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQXBCLENBQ1o7Y0FBQSxTQUFBLEVBQVcsU0FBWDtjQUNBLEdBQUEsRUFBSyxNQUFNLENBQUMsVUFEWjtjQUVBLEdBQUEsRUFBSyxNQUFNLENBQUMsR0FGWjtjQUdBLFlBQUEsRUFBYyxNQUFNLENBQUM7WUFIckIsQ0FEWTtZQUtkLGlCQUFBLEdBQW9CLFFBQUEsQ0FBQSxDQUFBO2NBQ2xCLElBQUcsU0FBUyxDQUFDLGVBQVYsS0FBNkIsU0FBaEM7dUJBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBWixDQUFBLEVBREY7O1lBRGtCO1lBR3BCLFNBQVMsQ0FBQyxFQUFWLENBQWEsa0JBQWI7SUFBaUMsaUJBQWpDO1lBQ0EsTUFBTSxDQUFDLEdBQVAsQ0FBVyxVQUFYO0lBQXVCLFFBQUEsQ0FBQSxDQUFBO3FCQUFNLFNBQVMsQ0FBQyxHQUFWLENBQWMsa0JBQWQ7SUFBa0MsaUJBQWxDO1lBQU4sQ0FBdkI7WUFDQSxNQUFNLENBQUMsSUFBSSxDQUFDLHFCQUFaLENBQUE7WUFDQSxNQUFNLENBQUMsSUFBSSxDQUFDLHFCQUFaLENBQWtDLFFBQUEsQ0FBQyxJQUFELENBQUE7cUJBQ2hDLE1BQU0sQ0FBQyxNQUFQLENBQWMsUUFBQSxDQUFBLENBQUE7dUJBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBWixHQUFpQztjQUFwQyxDQUFkO1lBRGdDLENBQWxDO1lBRUEsTUFBTSxDQUFDLElBQUksQ0FBQyx3QkFBWixDQUFxQyxRQUFBLENBQUMsSUFBRCxDQUFBO3FCQUNuQyxNQUFNLENBQUMsTUFBUCxDQUFjLFFBQUEsQ0FBQSxDQUFBO3VCQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMscUJBQVosR0FBb0M7Y0FBdkMsQ0FBZDtZQURtQyxDQUFyQztZQUVBLE1BQU0sQ0FBQyxlQUFQLEdBQXlCLFFBQUEsQ0FBQyxJQUFELENBQUE7QUFDdkIsa0JBQUEsQ0FBQTtJQUFBO2NBQUEsQ0FBQSxHQUFJLElBQUksSUFBSixDQUFBLENBQVUsQ0FBQyxPQUFYLENBQUE7Y0FDSixDQUFBLEdBQ0U7Z0JBQUEsTUFBQSxFQUFRLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFdBQWxDO2dCQUNBLElBQUEsRUFBTSxJQUROO2dCQUVBLElBQUEsRUFBTTtjQUZOO3FCQUdGLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBWixDQUFpQixDQUFqQjtZQU51QixFQWhCM0I7O1VBdUJBLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBakIsQ0FBMkIsTUFBTSxDQUFDLE9BQWxDO0lBQTJDLFFBQUEsQ0FBQyxHQUFELENBQUE7WUFDekMsTUFBTSxDQUFDLFFBQVAsR0FBa0IsR0FBRyxDQUFDO1lBQ3RCLElBQUEsQ0FBMEMsR0FBRyxDQUFDLFFBQTlDO3FCQUFBLE1BQU0sQ0FBQyxVQUFQLEdBQW9CLEdBQUcsQ0FBQyxXQUF4Qjs7VUFGeUMsQ0FBM0MsRUF4QkY7O1FBMkJBLElBQUcsTUFBTSxDQUFDLE1BQVAsS0FBaUIsTUFBcEI7VUFDRSxNQUFNLENBQUMsU0FBUyxDQUFDLFdBQWpCLENBQTZCLE1BQU0sQ0FBQyxPQUFwQztJQUE2QztZQUFDLFFBQUEsRUFBVTtVQUFYLENBQTdDO2lCQUNBLE1BQU0sQ0FBQyxlQUFQLEdBQXlCLFFBQUEsQ0FBQyxJQUFELENBQUE7QUFDdkIsZ0JBQUE7WUFBQSxHQUFBLEdBQU0sQ0FBQTtZQUNOLEdBQUcsQ0FBQyxJQUFKLEdBQVc7WUFDWCxHQUFHLENBQUMsSUFBSixHQUFXO1lBQ1gsR0FBRyxDQUFDLFNBQUosR0FBZ0I7Y0FBQyxJQUFBLEVBQU0sTUFBTSxDQUFDO1lBQWQ7WUFDaEIsTUFBTSxDQUFDLGFBQVAsQ0FBcUIsTUFBckI7SUFBZ0MsR0FBaEM7bUJBQ0EsT0FBTyxDQUFDLEdBQVIsQ0FBWSxzQkFBWjtJQUFvQyxHQUFwQztVQU51QixFQUYzQjs7TUFsQ2lCO01BNENuQixJQUFBLEdBQU8sUUFBQSxDQUFBLENBQUE7UUFDTCxJQUFHLE1BQU0sQ0FBQyxTQUFWO1VBQ0UsSUFBRyxNQUFNLENBQUMsRUFBUCxDQUFVLGlCQUFWLENBQUg7WUFDRSxNQUFNLENBQUMsT0FBUCxDQUFBLEVBREY7O1VBR0EsSUFBRyxNQUFNLENBQUMsRUFBUCxDQUFVLG1CQUFWLENBQUg7WUFDRSxLQUFBLENBQU0sYUFBTjtZQUNBLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBaEIsR0FBdUIsTUFBTSxDQUFDLGVBQVAsQ0FBdUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFwQyxFQUZ6Qjs7VUFJQSxJQUFHLE1BQU0sQ0FBQyxFQUFQLENBQVUsWUFBVixDQUFIO1lBQ0UsTUFBTSxDQUFDLE9BQVAsQ0FBQTttQkFDQSxnQkFBQSxDQUFBLEVBRkY7V0FSRjs7TUFESztNQVlQLE1BQU0sQ0FBQyxNQUFQLENBQWMsV0FBZDtJQUEyQixJQUEzQjtNQUVBLE1BQU0sQ0FBQyxhQUFQLEdBQXVCLFFBQUEsQ0FBQyxJQUFELENBQUE7QUFDckIsWUFBQSxDQUFBO0lBQUEsSUFBQTtJQUFBO1FBQUEsQ0FBQSxHQUFJLElBQUksQ0FBQyxLQUFMLENBQVcsR0FBWDtRQUNKLElBQUcsQ0FBQyxDQUFDLE1BQUYsR0FBVyxDQUFkO1VBQ0UsSUFBQSxHQUFPLGtCQUFBLENBQW1CLENBQUUsQ0FBQSxDQUFDLENBQUMsTUFBRixHQUFXLENBQVgsQ0FBckI7VUFDUCxLQUFBLEdBQVEsa0JBQUEsQ0FBbUIsQ0FBRSxDQUFBLENBQUMsQ0FBQyxNQUFGLEdBQVcsQ0FBWCxDQUFhLENBQUMsS0FBaEIsQ0FBc0IsR0FBdEIsQ0FBMkIsQ0FBQSxDQUFBLENBQTlDO1VBQ1IsT0FBTyxDQUFDLEdBQVIsQ0FBWSxPQUFaO0lBQXFCLEtBQXJCO1VBQ0EsT0FBTyxDQUFDLEdBQVIsQ0FBWSxNQUFaO0lBQW9CLElBQXBCO2lCQUNBLE1BQU0sQ0FBQyxFQUFQLENBQVUsaUJBQVY7SUFBNkIsQ0FBQyxJQUFEO0lBQU8sS0FBUCxDQUE3QixFQUxGO1NBQUEsTUFBQTtpQkFPRSxPQUFPLENBQUMsR0FBUixDQUFZLDJCQUFaO0lBQXlDLElBQXpDLEVBUEY7O01BRnFCO2FBVXZCLE1BQU0sQ0FBQyxXQUFQLEdBQXFCLFFBQUEsQ0FBQyxDQUFELENBQUEsRUFBQTtJQTVXdkIsQ0FsQitEO0dBQWpFOztFQUZBOztBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG4jIElkZW50aXRpZXMgY29udHJvbGxlclxuYW5ndWxhci5tb2R1bGUoJ2lyaXNBbmd1bGFyJykuY29udHJvbGxlciAnSWRlbnRpdGllc0NvbnRyb2xsZXInLCBbXG4gICckc2NvcGUnXG4gICckc3RhdGUnXG4gICckcm9vdFNjb3BlJ1xuICAnJHdpbmRvdydcbiAgJyRkb2N1bWVudCdcbiAgJyRzdGF0ZVBhcmFtcydcbiAgJyR0cmFuc2l0aW9ucydcbiAgJyRsb2NhdGlvbidcbiAgJyRodHRwJ1xuICAnJHEnXG4gICckdGltZW91dCdcbiAgJyR1aWJNb2RhbCdcbiAgIyAnQXV0aGVudGljYXRpb24nXG4gICdjb25maWcnXG4gICdsb2NhbFN0b3JhZ2VTZXJ2aWNlJ1xuICAnZm9jdXMnXG4gICdOb3RpZmljYXRpb25TZXJ2aWNlJ1xuICAoJHNjb3BlLCAkc3RhdGUsICRyb290U2NvcGUsICR3aW5kb3csICRkb2N1bWVudCwgJHN0YXRlUGFyYW1zLCAkdHJhbnNpdGlvbnMsICRsb2NhdGlvbiwgJGh0dHAsICRxLCAkdGltZW91dCwgJHVpYk1vZGFsLCBjb25maWcsXG4gIGxvY2FsU3RvcmFnZVNlcnZpY2UsIGZvY3VzLCBOb3RpZmljYXRpb25TZXJ2aWNlKSAtPiAjLCBBdXRoZW50aWNhdGlvblxuICAgICRzY29wZS5uZXdFbnRyeSA9IHt9XG4gICAgJHNjb3BlLmFjdGl2ZVRhYiA9IDFcbiAgICAkc2NvcGUuYWN0aXZhdGVUYWIgPSAodGFiSWQpIC0+ICRzY29wZS5hY3RpdmVUYWIgPSB0YWJJZFxuICAgICRzY29wZS5zZW50ID0gW11cbiAgICAkc2NvcGUucmVjZWl2ZWQgPVxuICAgICAgbGlzdDogW11cbiAgICAgIHNlZW46IHt9XG4gICAgJHNjb3BlLmF0dHJpYnV0ZXMgPSBbXVxuICAgIHRodW1ic1VwT2JqID0ge31cbiAgICB0aHVtYnNEb3duT2JqID0ge31cbiAgICAkc2NvcGUudGh1bWJzVXAgPSBbXVxuICAgICRzY29wZS50aHVtYnNEb3duID0gW11cbiAgICAkc2NvcGUudmVyaWZpY2F0aW9ucyA9IFtdXG4gICAgJHNjb3BlLnF1ZXJ5LnRlcm0gPSAkc3RhdGVQYXJhbXMuc2VhcmNoIGlmICRzdGF0ZVBhcmFtcy5zZWFyY2hcbiAgICAkc2NvcGUubmV3VmVyaWZpY2F0aW9uID1cbiAgICAgIHR5cGU6ICcnXG4gICAgICB2YWx1ZTogJydcbiAgICAkc2NvcGUuY29sbGFwc2VMZXZlbCA9IHt9XG4gICAgJHNjb3BlLmNvbGxhcHNlRmlsdGVycyA9ICR3aW5kb3cuaW5uZXJXaWR0aCA8IDk5MlxuICAgICRzY29wZS5zbGlkZXIgPVxuICAgICAgb3B0aW9uczpcbiAgICAgICAgZmxvb3I6IC0zXG4gICAgICAgIGNlaWw6IDNcbiAgICAgICAgaGlkZVBvaW50ZXJMYWJlbHM6IHRydWVcbiAgICAgICAgaGlkZUxpbWl0TGFiZWxzOiB0cnVlXG4gICAgICAgIGRpc2FibGVBbmltYXRpb246IHRydWVcblxuICAgIHMgPSAkbG9jYXRpb24uc2VhcmNoKClcbiAgICAkc2NvcGUuc2hhcmUgPSB0cnVlIGlmIHMuc2hhcmVcbiAgICAkc2NvcGUuc3RyZWFtID0gdHJ1ZSBpZiBzLnN0cmVhbVxuXG4gICAgaWYgJHNjb3BlLnF1ZXJ5LnRlcm0ubGVuZ3RoIGFuZCAkc3RhdGUuaXMgJ2lkZW50aXRpZXMubGlzdCdcbiAgICAgICRzY29wZS5xdWVyeS50ZXJtID0gJydcbiAgICAgICRzY29wZS5zZWFyY2goKVxuXG4gICAgaWYgJHN0YXRlLmlzICdpZGVudGl0aWVzLnNob3cnXG4gICAgICAkc2NvcGUuZmlsdGVycy5tYXhEaXN0YW5jZSA9IDBcbiAgICAgICRzY29wZS5maWx0ZXJzLnR5cGUgPSBudWxsXG4gICAgICAkc2NvcGUub3BlblZpZGVvQ2hhdE1vZGFsKCkgaWYgJHNjb3BlLnN0cmVhbSBhbmQgbm90ICRzY29wZS52aWRlb0NoYXRNb2RhbFxuXG4gICAgJHNjb3BlLmFkZEVudHJ5ID0gKGV2ZW50LCBlbnRyeSkgLT5cbiAgICAgIGlmIGVudHJ5LmVtYWlsXG4gICAgICAgIGxpbmtUbyA9IHt0eXBlOidlbWFpbCcsIHZhbHVlOiBlbnRyeS5lbWFpbH1cbiAgICAgIGVsc2UgaWYgZW50cnkudXJsXG4gICAgICAgIGxpbmtUbyA9IHt0eXBlOid1cmwnLCB2YWx1ZTogZW50cnkudXJsfVxuICAgICAgZWxzZVxuICAgICAgICBsaW5rVG8gPSAkd2luZG93LmlyaXNMaWIuQXR0cmlidXRlLmdldFV1aWQoKVxuICAgICAgICBlbnRyeS51dWlkID0gbGlua1RvLnZhbHVlXG4gICAgICBwYXJhbXMgPVxuICAgICAgICB0eXBlOiAndmVyaWZpY2F0aW9uJ1xuICAgICAgICByZWNpcGllbnQ6IGVudHJ5XG4gICAgICAkc2NvcGUuY3JlYXRlTWVzc2FnZShldmVudCwgcGFyYW1zKS50aGVuIChyZXNwb25zZSkgLT5cbiAgICAgICAgJHN0YXRlLmdvICdpZGVudGl0aWVzLnNob3cnLCBsaW5rVG9cbiAgICAgICwgKGVycm9yKSAtPlxuICAgICAgICBjb25zb2xlLmxvZyBcImVycm9yXCIsIGVycm9yXG5cbiAgICAkc2NvcGUuY3JlYXRlQ2hhdCA9IChjaGF0TmFtZSkgLT5cbiAgICAgIHJldHVybiB1bmxlc3MgY2hhdE5hbWUgYW5kIGNoYXROYW1lLmxlbmd0aCA+IDBcbiAgICAgIHV1aWQgPSAkd2luZG93LmlyaXNMaWIuQXR0cmlidXRlLmdldFV1aWQoKS52YWx1ZVxuICAgICAgJHNjb3BlLmlyaXNJbmRleC5ndW4udXNlcigpLmdldCgnaXJpcycpLmdldCgnY2hhdE1lc3NhZ2VzQnlVdWlkJykuZ2V0KHV1aWQpLnB1dCh7fSlcbiAgICAgIG1zZyA9XG4gICAgICAgIHR5cGU6ICd2ZXJpZmljYXRpb24nXG4gICAgICAgIHJlY2lwaWVudDpcbiAgICAgICAgICB1dWlkOiB1dWlkXG4gICAgICAgICAgbmFtZTogY2hhdE5hbWVcbiAgICAgICAgICB0eXBlOiAnZ3JvdXAnXG4gICAgICAkc2NvcGUuY3JlYXRlTWVzc2FnZSh1bmRlZmluZWQsIG1zZylcbiAgICAgICRzdGF0ZS5nbyAnY2hhdHMuc2hvdycsIHsgdHlwZTogJ3V1aWQnLCB2YWx1ZTogdXVpZCB9XG5cbiAgICAkc2NvcGUuZ3Vlc3NBdHRyaWJ1dGVUeXBlID0gLT5cbiAgICAgIGlmICRzY29wZS5uZXdWZXJpZmljYXRpb24udmFsdWUubGVuZ3RoXG4gICAgICAgICRzY29wZS5uZXdWZXJpZmljYXRpb24udHlwZSA9ICR3aW5kb3cuaXJpc0xpYi5BdHRyaWJ1dGUuZ3Vlc3NUeXBlT2YoJHNjb3BlLm5ld1ZlcmlmaWNhdGlvbi52YWx1ZSlcbiAgICAgICAgdW5sZXNzICRzY29wZS5uZXdWZXJpZmljYXRpb24udHlwZVxuICAgICAgICAgIHVubGVzcyAkc2NvcGUubmV3VmVyaWZpY2F0aW9uLnZhbHVlLm1hdGNoIC9cXGB8XFx+fFxcIXxcXEB8XFwjfFxcJHxcXCV8XFxefFxcJnxcXCp8XFwofFxcKXxcXCt8XFw9fFxcW3xcXHt8XFxdfFxcfXxcXHx8XFxcXHxcXCd8XFw8fFxcLHxcXC58XFw+fFxcP3xcXC98XFxcIlwifFxcO3xcXDovXG4gICAgICAgICAgICAkc2NvcGUubmV3VmVyaWZpY2F0aW9uLnR5cGUgPSAnbmFtZSdcbiAgICAgIGVsc2VcbiAgICAgICAgJHNjb3BlLm5ld1ZlcmlmaWNhdGlvbi50eXBlID0gJydcblxuICAgICRzY29wZS5hZGROYW1lID0gKG5hbWUpIC0+XG4gICAgICBpZiBuYW1lXG4gICAgICAgIHJlY2lwaWVudCA9IHtuYW1lfVxuICAgICAgICByZWNpcGllbnRbJHNjb3BlLmlkVHlwZV0gPSAkc2NvcGUuaWRWYWx1ZVxuICAgICAgICAkd2luZG93LmlyaXNMaWIuTWVzc2FnZS5jcmVhdGVWZXJpZmljYXRpb24oe3JlY2lwaWVudH0sICRzY29wZS5wcml2YXRlS2V5KS50aGVuIChtKSAtPlxuICAgICAgICAgICRzY29wZS5pcmlzSW5kZXguYWRkTWVzc2FnZShtKVxuICAgICAgICAkc2NvcGUubmFtZUFkZGVkID0gdHJ1ZVxuICAgICAgZWxzZVxuICAgICAgICAkc2NvcGUuYWRkaW5nTmFtZSA9IHRydWVcbiAgICAgICAgZm9jdXMoJ2FkZE5hbWVGb2N1cycpXG5cbiAgICAkc2NvcGUuZ2V0QXR0cmlidXRlcyA9IC0+XG4gICAgICAkc2NvcGUuaWRlbnRpdHkuZ3VuLmdldCgnYXR0cnMnKS5vcGVuIChhdHRycykgLT5cbiAgICAgICAgYXR0cmlidXRlcyA9IGF0dHJzIG9yIFtdXG4gICAgICAgIGlmIGF0dHJpYnV0ZXMubGVuZ3RoID4gMFxuICAgICAgICAgIGMgPSBhdHRyaWJ1dGVzWzBdXG4gICAgICAgICAgbW9zdENvbmZpcm1hdGlvbnMgPSBjLnZlcmlmaWNhdGlvbnNcbiAgICAgICAgZWxzZVxuICAgICAgICAgIG1vc3RDb25maXJtYXRpb25zID0gMVxuICAgICAgICAkc2NvcGUuYXR0cmlidXRlcyA9IE9iamVjdC52YWx1ZXMoYXR0cmlidXRlcylcbiAgICAgICAgZm9yIGEgaW4gJHNjb3BlLmF0dHJpYnV0ZXNcbiAgICAgICAgICByZXR1cm4gdW5sZXNzIGEudHlwZSBhbmQgYS52YWx1ZVxuICAgICAgICAgIGEuYXR0ciA9IG5ldyAkd2luZG93LmlyaXNMaWIuQXR0cmlidXRlKGEudHlwZSwgYS52YWx1ZSlcbiAgICAgICAgICBhLmlzQ3VycmVudCA9IG5ldyAkd2luZG93LmlyaXNMaWIuQXR0cmlidXRlKCRzY29wZS5pZFR5cGUsICRzY29wZS5pZFZhbHVlKS5lcXVhbHMoYS5hdHRyKVxuICAgICAgICAgIGEub3JkZXIgPSBpZiBhLmlzQ3VycmVudCB0aGVuIEluZmluaXR5IGVsc2UgKGEudmVyaWZpY2F0aW9ucyBvciBhLmNvbmYpIC0gMiAqIChhLnVudmVyaWZpY2F0aW9ucyBvciBhLnJlZilcbiAgICAgICAgICBhLnJvd0NsYXNzID0gJ2N1cnNvci1kZWZhdWx0JyBpZiBhLmlzQ3VycmVudFxuICAgICAgICAgIHN3aXRjaCBhLnR5cGVcbiAgICAgICAgICAgIHdoZW4gJ2VtYWlsJ1xuICAgICAgICAgICAgICBhLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLWVudmVsb3BlJ1xuICAgICAgICAgICAgICBhLmJ0blN0eWxlID0gJ2J0bi1zdWNjZXNzJ1xuICAgICAgICAgICAgICBhLmxpbmsgPSAnbWFpbHRvOicgKyBhLnZhbHVlXG4gICAgICAgICAgICAgIGEucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgICAgd2hlbiAnYml0Y29pbl9hZGRyZXNzJywgJ2JpdGNvaW4nXG4gICAgICAgICAgICAgIGEuaWNvblN0eWxlID0gJ2ZhIGZhLWJpdGNvaW4nXG4gICAgICAgICAgICAgIGEuYnRuU3R5bGUgPSAnYnRuLXByaW1hcnknXG4gICAgICAgICAgICAgIGEubGluayA9ICdodHRwczovL2Jsb2NrY2hhaW4uaW5mby9hZGRyZXNzLycgKyBhLnZhbHVlXG4gICAgICAgICAgICAgIGEucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgICAgd2hlbiAnZ3BnX2ZpbmdlcnByaW50JywgJ2dwZ19rZXlpZCdcbiAgICAgICAgICAgICAgYS5pY29uU3R5bGUgPSAnZmEgZmEta2V5J1xuICAgICAgICAgICAgICBhLmJ0blN0eWxlID0gJ2J0bi1kZWZhdWx0J1xuICAgICAgICAgICAgICBhLmxpbmsgPSAnaHR0cHM6Ly9wZ3AubWl0LmVkdS9wa3MvbG9va3VwP29wPWdldCZzZWFyY2g9MHgnICsgYS52YWx1ZVxuICAgICAgICAgICAgd2hlbiAnYWNjb3VudCdcbiAgICAgICAgICAgICAgYS5pY29uU3R5bGUgPSAnZmEgZmEtYXQnXG4gICAgICAgICAgICB3aGVuICduaWNrbmFtZSdcbiAgICAgICAgICAgICAgJHNjb3BlLmlkZW50aXR5Lmhhc1Byb3Blck5hbWUgPSB0cnVlXG4gICAgICAgICAgICAgIGEuaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tZm9udCdcbiAgICAgICAgICAgIHdoZW4gJ25hbWUnXG4gICAgICAgICAgICAgICRzY29wZS5pZGVudGl0eS5oYXNQcm9wZXJOYW1lID0gdHJ1ZVxuICAgICAgICAgICAgICBhLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLWZvbnQnXG4gICAgICAgICAgICB3aGVuICd0ZWwnLCAncGhvbmUnXG4gICAgICAgICAgICAgIGEuaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tZWFycGhvbmUnXG4gICAgICAgICAgICAgIGEuYnRuU3R5bGUgPSAnYnRuLXN1Y2Nlc3MnXG4gICAgICAgICAgICAgIGEubGluayA9ICd0ZWw6JyArIGEudmFsdWVcbiAgICAgICAgICAgICAgYS5xdWlja0NvbnRhY3QgPSB0cnVlXG4gICAgICAgICAgICB3aGVuICdrZXlJRCdcbiAgICAgICAgICAgICAgYS5pY29uU3R5bGUgPSAnZmEgZmEta2V5J1xuICAgICAgICAgICAgd2hlbiAnY292ZXJQaG90bydcbiAgICAgICAgICAgICAgaWYgYS52YWx1ZS5tYXRjaCAvXlxcL2lwZnNcXC9bMS05QS1aYS16XXs0MCw2MH0kL1xuICAgICAgICAgICAgICAgICRzY29wZS5pcGZzR2V0KGEudmFsdWUpLnRoZW4gKGNvdmVyUGhvdG8pIC0+XG4gICAgICAgICAgICAgICAgICAkc2NvcGUuY292ZXJQaG90byA9ICRzY29wZS5jb3ZlclBob3RvIG9yIHsgJ2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKGRhdGE6aW1hZ2U7YmFzZTY0LCcgKyBjb3ZlclBob3RvLnRvU3RyaW5nKCdiYXNlNjQnKSArICcpJyB9XG4gICAgICAgICAgICB3aGVuICd1cmwnXG4gICAgICAgICAgICAgIGEubGluayA9IGEudmFsdWVcbiAgICAgICAgICAgICAgaWYgYS52YWx1ZS5pbmRleE9mKCdmYWNlYm9vay5jb20vJykgPiAtMVxuICAgICAgICAgICAgICAgIGEuaWNvblN0eWxlID0gJ2ZhYiBmYS1mYWNlYm9vaydcbiAgICAgICAgICAgICAgICBhLmJ0blN0eWxlID0gJ2J0bi1mYWNlYm9vaydcbiAgICAgICAgICAgICAgICBhLmxpbmsgPSBhLnZhbHVlXG4gICAgICAgICAgICAgICAgYS5saW5rTmFtZSA9IGEudmFsdWUuc3BsaXQoJ2ZhY2Vib29rLmNvbS8nKVsxXVxuICAgICAgICAgICAgICAgIGEucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgICAgICBlbHNlIGlmIGEudmFsdWUuaW5kZXhPZigndHdpdHRlci5jb20vJykgPiAtMVxuICAgICAgICAgICAgICAgIGEuaWNvblN0eWxlID0gJ2ZhYiBmYS10d2l0dGVyJ1xuICAgICAgICAgICAgICAgIGEuYnRuU3R5bGUgPSAnYnRuLXR3aXR0ZXInXG4gICAgICAgICAgICAgICAgYS5saW5rID0gYS52YWx1ZVxuICAgICAgICAgICAgICAgIGEubGlua05hbWUgPSBhLnZhbHVlLnNwbGl0KCd0d2l0dGVyLmNvbS8nKVsxXVxuICAgICAgICAgICAgICAgIGEucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgICAgICBlbHNlIGlmIGEudmFsdWUuaW5kZXhPZigncGx1cy5nb29nbGUuY29tLycpID4gLTFcbiAgICAgICAgICAgICAgICBhLmljb25TdHlsZSA9ICdmYWIgZmEtZ29vZ2xlLXBsdXMnXG4gICAgICAgICAgICAgICAgYS5idG5TdHlsZSA9ICdidG4tZ29vZ2xlLXBsdXMnXG4gICAgICAgICAgICAgICAgYS5saW5rID0gYS52YWx1ZVxuICAgICAgICAgICAgICAgIGEubGlua05hbWUgPSBhLnZhbHVlLnNwbGl0KCdwbHVzLmdvb2dsZS5jb20vJylbMV1cbiAgICAgICAgICAgICAgICBhLnF1aWNrQ29udGFjdCA9IHRydWVcbiAgICAgICAgICAgICAgZWxzZSBpZiBhLnZhbHVlLmluZGV4T2YoJ2xpbmtlZGluLmNvbS8nKSA+IC0xXG4gICAgICAgICAgICAgICAgYS5pY29uU3R5bGUgPSAnZmFiIGZhLWxpbmtlZGluJ1xuICAgICAgICAgICAgICAgIGEuYnRuU3R5bGUgPSAnYnRuLWxpbmtlZGluJ1xuICAgICAgICAgICAgICAgIGEubGluayA9IGEudmFsdWVcbiAgICAgICAgICAgICAgICBhLmxpbmtOYW1lID0gYS52YWx1ZS5zcGxpdCgnbGlua2VkaW4uY29tLycpWzFdXG4gICAgICAgICAgICAgICAgYS5xdWlja0NvbnRhY3QgPSB0cnVlXG4gICAgICAgICAgICAgIGVsc2UgaWYgYS52YWx1ZS5pbmRleE9mKCdnaXRodWIuY29tLycpID4gLTFcbiAgICAgICAgICAgICAgICBhLmljb25TdHlsZSA9ICdmYWIgZmEtZ2l0aHViJ1xuICAgICAgICAgICAgICAgIGEuYnRuU3R5bGUgPSAnYnRuLWdpdGh1YidcbiAgICAgICAgICAgICAgICBhLmxpbmsgPSBhLnZhbHVlXG4gICAgICAgICAgICAgICAgYS5saW5rTmFtZSA9IGEudmFsdWUuc3BsaXQoJ2dpdGh1Yi5jb20vJylbMV1cbiAgICAgICAgICAgICAgICBhLnF1aWNrQ29udGFjdCA9IHRydWVcbiAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGEuaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tbGluaydcbiAgICAgICAgICAgICAgICBhLmJ0blN0eWxlID0gJ2J0bi1kZWZhdWx0J1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICBhLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLXN0YXInXG4gICAgICAgICAgaWYgYS52YWx1ZSBhbmQgYS52YWx1ZS5tYXRjaCAvXlxcL2lwZnNcXC9bMS05QS1aYS16XXs0MCw2MH0kL1xuICAgICAgICAgICAgYS5saW5rID0gJ2h0dHBzOi8vaXBmcy5pbycgKyBhLnZhbHVlXG4gICAgICAgICAgICBhLmxpbmtOYW1lID0gYS52YWx1ZVxuICAgICAgICAgICAgYS5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1saW5rJ1xuICAgICAgICAgICAgYS5idG5TdHlsZSA9ICdidG4tZGVmYXVsdCdcbiAgICAgICAgICBpZiBhLnZlcmlmaWNhdGlvbnMgKyBhLnVudmVyaWZpY2F0aW9ucyA+IDBcbiAgICAgICAgICAgIHBlcmNlbnRhZ2UgPSBhLnZlcmlmaWNhdGlvbnMgKiAxMDAgLyAoYS52ZXJpZmljYXRpb25zICsgYS51bnZlcmlmaWNhdGlvbnMpXG4gICAgICAgICAgICBpZiBwZXJjZW50YWdlID49IDgwXG4gICAgICAgICAgICAgIGFscGhhID0gYS52ZXJpZmljYXRpb25zIC8gbW9zdENvbmZpcm1hdGlvbnMgKiAwLjcgKyAwLjNcbiAgICAgICAgICAgICAgIyBhLnJvd1N0eWxlID0gJ2JhY2tncm91bmQtY29sb3I6IHJnYmEoMjIzLDI0MCwyMTYsJyArIGFscGhhICsgJyknXG4gICAgICAgICAgICBlbHNlIGlmIHBlcmNlbnRhZ2UgPj0gNjBcbiAgICAgICAgICAgICAgYS5yb3dDbGFzcyA9ICd3YXJuaW5nJ1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICBhLnJvd0NsYXNzID0gJ2RhbmdlcidcbiAgICAgICAgICAkc2NvcGUuaGFzUXVpY2tDb250YWN0cyA9ICRzY29wZS5oYXNRdWlja0NvbnRhY3RzIG9yIGEucXVpY2tDb250YWN0XG4gICAgICAgICRzY29wZS5hdHRyaWJ1dGVzTGVuZ3RoID0gJHNjb3BlLmF0dHJpYnV0ZXMubGVuZ3RoXG5cbiAgICAkc2NvcGUuYXR0cmlidXRlQ2xpY2tlZCA9IChldmVudCwgYXR0cikgLT5cbiAgICAgIGlmIGF0dHIuY29ubmVjdGluZ01zZ3NcbiAgICAgICAgYXR0ci5jb2xsYXBzZSA9ICFhdHRyLmNvbGxhcHNlXG4gICAgICBlbHNlXG4gICAgICAgIGF0dHIuY29ubmVjdGluZ01zZ3MgPSBbXVxuICAgICAgICBmb3IgbXNnIGluICRzY29wZS5yZWNlaXZlZC5saXN0XG4gICAgICAgICAgY29udGludWUgdW5sZXNzIG1zZy5zaWduZWREYXRhLnR5cGUgaW4gWyd2ZXJpZmljYXRpb24nLCAndW52ZXJpZmljYXRpb24nLCAndmVyaWZ5X2lkZW50aXR5JywgJ3VudmVyaWZ5X2lkZW50aXR5J11cbiAgICAgICAgICBoYXNBdHRyMSA9IGhhc0F0dHIyID0gZmFsc2VcbiAgICAgICAgICBmb3IgYSBpbiBtc2cuZ2V0UmVjaXBpZW50QXJyYXkoKVxuICAgICAgICAgICAgaGFzQXR0cjEgPSBoYXNBdHRyMSBvciBhLnR5cGUgPT0gYXR0ci50eXBlIGFuZCBhLnZhbHVlID09IGF0dHIudmFsdWVcbiAgICAgICAgICAgIGhhc0F0dHIyID0gaGFzQXR0cjIgb3IgYS50eXBlID09ICRzY29wZS5pZFR5cGUgYW5kIGEudmFsdWUgPT0gJHNjb3BlLmlkVmFsdWVcbiAgICAgICAgICAgIGlmIGhhc0F0dHIxIGFuZCBoYXNBdHRyMlxuICAgICAgICAgICAgICBhdHRyLmNvbm5lY3RpbmdNc2dzLnB1c2ggbXNnXG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIGF0dHIuY29sbGFwc2UgPSAhYXR0ci5jb2xsYXBzZVxuXG4gICAgJHNjb3BlLmdldFNlbnRNc2dzID0gLT5cbiAgICAgIHJldHVybiB1bmxlc3MgJHNjb3BlLmlkZW50aXR5IGFuZCAkc2NvcGUuaXJpc0luZGV4XG4gICAgICAkc2NvcGUuc2VudCA9IFtdXG4gICAgICBjdXJzb3IgPSBpZiAkc2NvcGUuc2VudC5sZW5ndGggdGhlbiAkc2NvcGUuc2VudFskc2NvcGUuc2VudC5sZW5ndGggLSAxXS5jdXJzb3IgZWxzZSAnJ1xuICAgICAgY2FsbGJhY2sgPSAobXNnKSAtPlxuICAgICAgICAkc2NvcGUucHJvY2Vzc01lc3NhZ2VzIFttc2ddLCB7IGF1dGhvcklzU2VsZjogdHJ1ZSB9XG4gICAgICAgICRzY29wZS5zZW50LnB1c2ggbXNnXG5cbiAgICAgICRzY29wZS5pZGVudGl0eS5zZW50KHtjYWxsYmFja30pXG5cbiAgICAkc2NvcGUuZ2V0UmVjZWl2ZWRNc2dzID0gLT5cbiAgICAgIHJldHVybiB1bmxlc3MgJHNjb3BlLmlkZW50aXR5IGFuZCAkc2NvcGUuaXJpc0luZGV4XG4gICAgICAkc2NvcGUucmVjZWl2ZWQgPVxuICAgICAgICBsaXN0OiBbXVxuICAgICAgICBzZWVuOiB7fVxuICAgICAgY3Vyc29yID0gaWYgJHNjb3BlLnJlY2VpdmVkLmxpc3QubGVuZ3RoIHRoZW4gJHNjb3BlLnJlY2VpdmVkLmxpc3RbJHNjb3BlLnJlY2VpdmVkLmxpc3QubGVuZ3RoIC0gMV0uY3Vyc29yIGVsc2UgJydcbiAgICAgIGNhbGxiYWNrID0gKG1zZykgLT5cbiAgICAgICAgcmV0dXJuIGlmICRzY29wZS5yZWNlaXZlZC5zZWVuW21zZy5nZXRIYXNoKCldXG4gICAgICAgICRzY29wZS5wcm9jZXNzTWVzc2FnZXMgW21zZ10sIHsgcmVjaXBpZW50SXNTZWxmOiB0cnVlIH1cbiAgICAgICAgJHNjb3BlLiRhcHBseSAtPlxuICAgICAgICAgIGlmIG1zZy5pc1Bvc2l0aXZlKClcbiAgICAgICAgICAgIHVubGVzcyBtc2cubGlua1RvQXV0aG9yXG4gICAgICAgICAgICAgIG1zZy5hdXRob3JBcnJheSA9IG1zZy5nZXRBdXRob3JBcnJheSgpXG4gICAgICAgICAgICAgIGZvciBhIGluIG1zZy5hdXRob3JBcnJheVxuICAgICAgICAgICAgICAgIG1zZy5saW5rVG9BdXRob3IgPSBhIHVubGVzcyBtc2cubGlua1RvQXV0aG9yXG4gICAgICAgICAgICBpZiAkc2NvcGUudGh1bWJzVXAubGVuZ3RoIDwgMTIgYW5kIG5vdCB0aHVtYnNVcE9ialtKU09OLnN0cmluZ2lmeShtc2cuc2lnbmVkRGF0YS5hdXRob3IpXVxuICAgICAgICAgICAgICB0aHVtYnNVcE9ialtKU09OLnN0cmluZ2lmeShtc2cuc2lnbmVkRGF0YS5hdXRob3IpXSA9IHRydWVcbiAgICAgICAgICAgICAgJHNjb3BlLnRodW1ic1VwLnB1c2ggbXNnXG4gICAgICAgICAgICAgICRzY29wZS5oYXNUaHVtYnNVcCA9IHRydWVcbiAgICAgICAgICBlbHNlIGlmIG1zZy5pc05lZ2F0aXZlKCkgYW5kICRzY29wZS50aHVtYnNEb3duLmxlbmd0aCA8IDEyIGFuZCBub3QgdGh1bWJzRG93bk9ialtKU09OLnN0cmluZ2lmeShtc2cuc2lnbmVkRGF0YS5hdXRob3IpXVxuICAgICAgICAgICAgdGh1bWJzRG93bk9ialtKU09OLnN0cmluZ2lmeShtc2cuc2lnbmVkRGF0YS5hdXRob3IpXSA9IHRydWVcbiAgICAgICAgICAgICRzY29wZS50aHVtYnNEb3duLnB1c2ggbXNnXG4gICAgICAgICAgICAkc2NvcGUuaGFzVGh1bWJzRG93biA9IHRydWVcbiAgICAgICAgICAkc2NvcGUucmVjZWl2ZWQubGlzdC5wdXNoIG1zZ1xuICAgICAgICAgICRzY29wZS5yZWNlaXZlZC5zZWVuW21zZy5nZXRIYXNoKCldID0gdHJ1ZVxuICAgICAgJHNjb3BlLmlkZW50aXR5LnJlY2VpdmVkKHtjYWxsYmFjaywgY3Vyc29yfSlcblxuICAgICRzY29wZS5zZXRGaWx0ZXJzID0gKGZpbHRlcnMpIC0+XG4gICAgICBhbmd1bGFyLmV4dGVuZCAkc2NvcGUuZmlsdGVycywgZmlsdGVyc1xuXG4gICAgJHNjb3BlLnVwbG9hZENvdmVyUGhvdG8gPSAoYmxvYiwgaWRlbnRpdHkpIC0+XG4gICAgICAkc2NvcGUudXBsb2FkRmlsZShibG9iKS50aGVuIChmaWxlcykgLT5cbiAgICAgICAgcmVjaXBpZW50ID0ge2NvdmVyUGhvdG86ICcvaXBmcy8nICsgZmlsZXNbMF0ucGF0aH1cbiAgICAgICAgcmVjaXBpZW50WyRzY29wZS5pZFR5cGVdID0gJHNjb3BlLmlkVmFsdWVcbiAgICAgICAgJHdpbmRvdy5pcmlzTGliLk1lc3NhZ2UuY3JlYXRlVmVyaWZpY2F0aW9uKHtyZWNpcGllbnR9LCAkc2NvcGUucHJpdmF0ZUtleSkudGhlbiAobSkgLT5cbiAgICAgICAgICAkc2NvcGUuaXJpc0luZGV4LmFkZE1lc3NhZ2UobSlcbiAgICAgICAgICAkc2NvcGUudXBsb2FkTW9kYWwuY2xvc2UoKVxuXG4gICAgJHNjb3BlLm9wZW5TaGFyZVBhZ2VNb2RhbCA9ICgpIC0+XG4gICAgICAkc2NvcGUub3Blbk1vZGFsICdzaGFyZVBhZ2VNb2RhbCcsIHsgdGVtcGxhdGVVcmw6ICdhcHAvaWRlbnRpdGllcy9zaGFyZS5tb2RhbC5odG1sJywgc2l6ZTogJ21kJyB9XG5cbiAgICAkc2NvcGUub3BlbkNvdmVyUGhvdG9VcGxvYWRNb2RhbCA9IC0+XG4gICAgICByZXR1cm4gdW5sZXNzICRzY29wZS5hdXRoZW50aWNhdGlvbi5pZGVudGl0eVxuICAgICAgJHNjb3BlLm9wZW5VcGxvYWRNb2RhbCgkc2NvcGUudXBsb2FkQ292ZXJQaG90bywgJ1VwbG9hZCBjb3ZlciBwaG90bycsIGZhbHNlKVxuXG4gICAgJHNjb3BlLmlkVHlwZSA9ICRzdGF0ZVBhcmFtcy50eXBlXG4gICAgJHNjb3BlLmlkVmFsdWUgPSAkc3RhdGVQYXJhbXMudmFsdWVcbiAgICAkc2NvcGUuc2hvd0NoYXRCdXR0b24gPSAhJHNjb3BlLmlzQ3VycmVudFVzZXIgJiYgKCRzY29wZS5pZFR5cGUgPT0gJ2tleUlEJyB8fCAkc2NvcGUuaWRUeXBlID09ICd1dWlkJylcblxuICAgICRzY29wZS5maW5kT25lID0gLT5cbiAgICAgIHJldHVybiB1bmxlc3MgJHNjb3BlLmlyaXNJbmRleFxuICAgICAgJHNjb3BlLmlkQXR0ciA9IG5ldyAkd2luZG93LmlyaXNMaWIuQXR0cmlidXRlKCRzY29wZS5pZFR5cGUsICRzY29wZS5pZFZhbHVlKVxuICAgICAgJHNjb3BlLmlkVXJsID0gJHNjb3BlLmdldElkVXJsKCRzY29wZS5pZFR5cGUsICRzY29wZS5pZFZhbHVlKVxuICAgICAgJHNjb3BlLmlzQ3VycmVudFVzZXIgPSAkc2NvcGUuYXV0aGVudGljYXRpb24gYW5kXG4gICAgICAgICRzY29wZS5hdXRoZW50aWNhdGlvbi51c2VyIGFuZFxuICAgICAgICAkc2NvcGUuaWRUeXBlID09ICRzY29wZS5hdXRoZW50aWNhdGlvbi51c2VyLmlkVHlwZSBhbmRcbiAgICAgICAgJHNjb3BlLmlkVmFsdWUgPT0gJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnVzZXIuaWRWYWx1ZVxuICAgICAgTm90aWZpY2F0aW9uU2VydmljZS5tYXJrUG9zdHNTZWVuKCkgaWYgJHNjb3BlLmlzQ3VycmVudFVzZXIgYW5kICRzdGF0ZS5pcyAnaWRlbnRpdGllcy5zaG93J1xuICAgICAgTm90aWZpY2F0aW9uU2VydmljZS5tYXJrQ2hhdHNTZWVuKCkgaWYgJHN0YXRlLmluY2x1ZGVzICdjaGF0cydcbiAgICAgICRzY29wZS5pc1VuaXF1ZVR5cGUgPSAoKSAtPlxuICAgICAgICAkd2luZG93LmlyaXNMaWIuQXR0cmlidXRlLmlzVW5pcXVlVHlwZSgkc2NvcGUuaWRUeXBlKSBvciAkc2NvcGUuaWRUeXBlID09ICdjaGFubmVsJ1xuICAgICAgaWYgISRzY29wZS5pc1VuaXF1ZVR5cGVcbiAgICAgICAgJHN0YXRlLmdvICdpZGVudGl0aWVzLmxpc3QnLCB7IHNlYXJjaDogJHNjb3BlLmlkVmFsdWUgfVxuICAgICAgICAkc2NvcGUudGFic1syXS5hY3RpdmUgPSB0cnVlIGlmICRzY29wZS50YWJzXG4gICAgICBpZiAkc3RhdGUuaXMgJ2lkZW50aXRpZXMuc2hvdydcbiAgICAgICAgJHNjb3BlLnNldFBhZ2VUaXRsZSAkc2NvcGUuaWRWYWx1ZVxuICAgICAgJHNjb3BlLmlkZW50aXR5ID0gJHNjb3BlLmlyaXNJbmRleC5nZXQoJHNjb3BlLmlkVHlwZSwgJHNjb3BlLmlkVmFsdWUpICMgLCB0cnVlKVxuICAgICAgJHNjb3BlLnNldElkZW50aXR5TmFtZXMoJHNjb3BlLmlkZW50aXR5LCBmYWxzZSwgdHJ1ZSlcbiAgICAgICRzY29wZS5pZGVudGl0eS5ndW4ub24gKGRhdGEpIC0+XG4gICAgICAgICRzY29wZS5pZGVudGl0eS5kYXRhID0gZGF0YVxuICAgICAgJHNjb3BlLmdldEF0dHJpYnV0ZXMoKVxuICAgICAgJHNjb3BlLmdldFNlbnRNc2dzKClcbiAgICAgICRzY29wZS5nZXRSZWNlaXZlZE1zZ3MoKVxuICAgICAgJHNjb3BlLmlkZW50aXR5Lmd1bi5nZXQoJ3Njb3JlcycpLm9wZW4gKHNjb3JlcykgLT5cbiAgICAgICAgJHNjb3BlLnNjb3JlcyA9IHNjb3Jlc1xuXG4gICAgbG9hZENoYXRNZXNzYWdlcyA9IC0+XG4gICAgICAkc2NvcGUuY2hhdE1lc3NhZ2VzID0gW11cbiAgICAgIG9uTWVzc2FnZSA9IChtc2cpIC0+XG4gICAgICAgICRzY29wZS4kYXBwbHkgLT5cbiAgICAgICAgICAkc2NvcGUuY2hhdE1lc3NhZ2VzLnB1c2gobXNnKSBpZiBtc2dcbiAgICAgICAgICBpZiAkc2NvcGUuY2hhdCBhbmQgKG1zZy50aW1lID4gJHNjb3BlLmNoYXQubXlNc2dzTGFzdFNlZW5UaW1lKSBhbmQgbm90ICRkb2N1bWVudC5oaWRkZW5cbiAgICAgICAgICAgICRzY29wZS5jaGF0LnNldE15TXNnc0xhc3RTZWVuVGltZSgpXG4gICAgICBpZiAkc2NvcGUuaWRUeXBlID09ICdrZXlJRCdcbiAgICAgICAgaWYgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnVzZXJcbiAgICAgICAgICAkc2NvcGUuY2hhdCA9IG5ldyAkd2luZG93LmlyaXNMaWIuQ2hhdFxuICAgICAgICAgICAgb25NZXNzYWdlOiBvbk1lc3NhZ2VcbiAgICAgICAgICAgIGtleTogJHNjb3BlLnByaXZhdGVLZXlcbiAgICAgICAgICAgIGd1bjogJHNjb3BlLmd1blxuICAgICAgICAgICAgcGFydGljaXBhbnRzOiAkc2NvcGUuaWRWYWx1ZVxuICAgICAgICAgIHZpc2liaWxpdHlDaGFuZ2VkID0gKCkgLT5cbiAgICAgICAgICAgIGlmICRkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgPT0gJ3Zpc2libGUnXG4gICAgICAgICAgICAgICRzY29wZS5jaGF0LnNldE15TXNnc0xhc3RTZWVuVGltZSgpXG4gICAgICAgICAgJGRvY3VtZW50Lm9uKCd2aXNpYmlsaXR5Y2hhbmdlJywgdmlzaWJpbGl0eUNoYW5nZWQpXG4gICAgICAgICAgJHNjb3BlLiRvbignJGRlc3Ryb3knLCAoKSAtPiAkZG9jdW1lbnQub2ZmKCd2aXNpYmlsaXR5Y2hhbmdlJywgdmlzaWJpbGl0eUNoYW5nZWQpKVxuICAgICAgICAgICRzY29wZS5jaGF0LnNldE15TXNnc0xhc3RTZWVuVGltZSgpXG4gICAgICAgICAgJHNjb3BlLmNoYXQuZ2V0TXlNc2dzTGFzdFNlZW5UaW1lICh0aW1lKSAtPlxuICAgICAgICAgICAgJHNjb3BlLiRhcHBseSAtPiAkc2NvcGUuY2hhdC5teU1zZ3NMYXN0U2VlblRpbWUgPSB0aW1lXG4gICAgICAgICAgJHNjb3BlLmNoYXQuZ2V0VGhlaXJNc2dzTGFzdFNlZW5UaW1lICh0aW1lKSAtPlxuICAgICAgICAgICAgJHNjb3BlLiRhcHBseSAtPiAkc2NvcGUuY2hhdC50aGVpck1zZ3NMYXN0U2VlblRpbWUgPSB0aW1lXG4gICAgICAgICAgJHNjb3BlLnNlbmRDaGF0TWVzc2FnZSA9ICh0ZXh0KSAtPlxuICAgICAgICAgICAgdCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG4gICAgICAgICAgICBtID1cbiAgICAgICAgICAgICAgYXV0aG9yOiAkc2NvcGUudmlld3BvaW50LmlkZW50aXR5LnByaW1hcnlOYW1lXG4gICAgICAgICAgICAgIHRleHQ6IHRleHRcbiAgICAgICAgICAgICAgdGltZTogdFxuICAgICAgICAgICAgJHNjb3BlLmNoYXQuc2VuZChtKVxuICAgICAgICAkc2NvcGUuaXJpc0luZGV4LmdldE9ubGluZSAkc2NvcGUuaWRWYWx1ZSwgKHJlcykgLT5cbiAgICAgICAgICAkc2NvcGUuaXNPbmxpbmUgPSByZXMuaXNPbmxpbmVcbiAgICAgICAgICAkc2NvcGUubGFzdEFjdGl2ZSA9IHJlcy5sYXN0QWN0aXZlIHVubGVzcyByZXMuaXNPbmxpbmVcbiAgICAgIGlmICRzY29wZS5pZFR5cGUgPT0gJ3V1aWQnXG4gICAgICAgICRzY29wZS5pcmlzSW5kZXguZ2V0Q2hhdE1zZ3MoJHNjb3BlLmlkVmFsdWUsIHtjYWxsYmFjazogb25NZXNzYWdlfSlcbiAgICAgICAgJHNjb3BlLnNlbmRDaGF0TWVzc2FnZSA9ICh0ZXh0KSAtPlxuICAgICAgICAgIG1zZyA9IHt9XG4gICAgICAgICAgbXNnLnR5cGUgPSAnY2hhdCdcbiAgICAgICAgICBtc2cudGV4dCA9IHRleHRcbiAgICAgICAgICBtc2cucmVjaXBpZW50ID0ge3V1aWQ6ICRzY29wZS5pZFZhbHVlfVxuICAgICAgICAgICRzY29wZS5jcmVhdGVNZXNzYWdlKHVuZGVmaW5lZCwgbXNnKVxuICAgICAgICAgIGNvbnNvbGUubG9nICdzZW5kIHB1YmxpYyBjaGF0IG1zZycsIG1zZ1xuXG4gICAgbG9hZCA9IC0+XG4gICAgICBpZiAkc2NvcGUuaXJpc0luZGV4XG4gICAgICAgIGlmICRzdGF0ZS5pcygnaWRlbnRpdGllcy5zaG93JylcbiAgICAgICAgICAkc2NvcGUuZmluZE9uZSgpXG5cbiAgICAgICAgaWYgJHN0YXRlLmlzICdpZGVudGl0aWVzLmNyZWF0ZSdcbiAgICAgICAgICBmb2N1cygnaWROYW1lRm9jdXMnKVxuICAgICAgICAgICRzY29wZS5uZXdFbnRyeS5uYW1lID0gJHNjb3BlLmNhcGl0YWxpemVXb3Jkcygkc2NvcGUucXVlcnkudGVybSlcblxuICAgICAgICBpZiAkc3RhdGUuaXMoJ2NoYXRzLnNob3cnKVxuICAgICAgICAgICRzY29wZS5maW5kT25lKClcbiAgICAgICAgICBsb2FkQ2hhdE1lc3NhZ2VzKClcbiAgICAkc2NvcGUuJHdhdGNoICdpcmlzSW5kZXgnLCBsb2FkXG5cbiAgICAkc2NvcGUucXJTY2FuU3VjY2VzcyA9IChkYXRhKSAtPlxuICAgICAgYSA9IGRhdGEuc3BsaXQoJy8nKVxuICAgICAgaWYgYS5sZW5ndGggPiA0XG4gICAgICAgIHR5cGUgPSBkZWNvZGVVUklDb21wb25lbnQoYVthLmxlbmd0aCAtIDJdKVxuICAgICAgICB2YWx1ZSA9IGRlY29kZVVSSUNvbXBvbmVudChhW2EubGVuZ3RoIC0gMV0uc3BsaXQoJz8nKVswXSlcbiAgICAgICAgY29uc29sZS5sb2cgJ3ZhbHVlJywgdmFsdWVcbiAgICAgICAgY29uc29sZS5sb2cgJ2RhdGEnLCBkYXRhXG4gICAgICAgICRzdGF0ZS5nbyAnaWRlbnRpdGllcy5zaG93Jywge3R5cGUsIHZhbHVlfVxuICAgICAgZWxzZVxuICAgICAgICBjb25zb2xlLmxvZyAnVW5yZWNvZ25pemVkIGlkZW50aXR5IHVybCcsIGRhdGFcbiAgICAkc2NvcGUucXJTY2FuRXJyb3IgPSAoZSkgLT5cbiAgICAgICMgdGhpcyBpcyBjYWxsZWQgZWFjaCB0aW1lIGEgUVIgY29kZSBpcyBub3QgZm91bmQgb24gdGhlIGNhbWVyYVxuICAgICAgIyBjb25zb2xlLmVycm9yIGVcbl1cbiJdfQ==

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
$templateCache.put('app/chats/default.html','<p>Select a chat to start messaging</p><div ng-include="\'app/main/notificationsprompt.partial.html\'"></div>');
$templateCache.put('app/chats/index.html','<div class="container no-padding-xs"><section><div id=messages class=row><div class=col-sm-4 ng-class="{\'hidden-xs\': (\'chats.show\'|isState)}"><div style=cursor:pointer ui-sref=chats.create class="panel chat-row" ui-sref-active=active><div class=panel-body><span class="fa fa-edit mar-right15"></span>New</div></div><div class="panel chat-row" ng-repeat="chat in chats | orderBy:\'-latest.time\'" ui-sref="chats.show({value:chat.idValue, type:chat.idType})" ui-sref-active=active ng-click="chat.unreadMsgs = 0" style=cursor:pointer><div class=panel-body><notification-icon count=chat.unreadMsgs><identicon identity=chat.identity width=35 ipfs=ipfs show-distance=false></identicon></notification-icon><span ng-bind=chat.identity.primaryName class=mar-left15></span> <small class=pull-right ng-bind="chat.latest.time | date: \'yyyy-MM-dd HH:mm\'"></small><br><small class=pull-right>{{chat.latest.text|limitTo:35}}{{chat.latest.text.length > 35 ? \'...\':\'\'}}</small></div></div></div><div class=col-sm-8 ng-class="{\'hidden-xs\': (\'chats.list\'|isState)}"><ui-view></div></div></section></div>');
$templateCache.put('app/chats/show.html','<div ng-include="\'app/main/createuser.partial.html\'"></div><div ng-include="\'app/main/notificationsprompt.partial.html\'"></div><div ng-if="idType ==\'uuid\'" ng-include="\'app/messages/create.chat.partial.html\'"></div><div ng-if="idType != \'uuid\'" class="panel panel-default"><div class=panel-heading><div class=mar-bot15><p style=color:red; ng-if="idType==\'keyID\'"><small><b>private messages are encrypted, but anyone can see who are communicating with each other</b></small></p><p style=color:red; class=pull-right ng-if="idType!=\'keyID\'"><small><b>public chat</b></small></p><div ui-sref="identities.show({type:idType, value:idValue})" style=cursor:pointer><identicon identity=identity ipfs=ipfs width=35></identicon><span class=mar-right15><span ng-show="idType === \'keyID\' || idType === \'uuid\'"><identicon identity=idAttr width=35></identicon></span><span ng-hide="idType === \'keyID\' || idType === \'uuid\'"><span ng-if=!(identity.data.mostVerifiedAttributes.name||identity.data.mostVerifiedAttributes.nickname)><span ng-bind=idValue class=idValue></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType class=idType></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType class=idType></a> </small></span></span></span><span ng-bind=identity.primaryName></span> <small class="positive mar-left15" ng-show=isOnline>online</small> <small class=mar-left15 ng-show="!isOnline && lastActive">last active {{ lastActive * 1000 | date : \'yyyy-M-d HH:mm\' }}</small></div></div><form class="form-inline mar-bot5" ng-submit="sendChatMessage(m);m = \'\'"><input ng-disabled=!authentication.user class=form-control type=text ng-model=m style="display:inline-block; width:80%"> <button ng-disabled=!authentication.user class="btn btn-default" type=submit style=display:inline-block><i class="glyphicon glyphicon-send"></i></button></form></div></div><div ng-if="idType == \'keyID\'" class=message ng-repeat="msg in chatMessages | orderBy:\'-time\'"><div class="panel msg"><div class="message-panel panel-body"><b ng-bind=msg.author></b> <small class=pull-right ng-bind="msg.time | date : \'yyyy-M-d HH:mm\'"></small><br><span ng-bind=msg.text ng-class="{big: msg.text.length<=2}"></span> <small uib-tooltip=Seen class="pull-right fa fa-check positive" ng-if="msg.time <= chat.theirMsgsLastSeenTime"></small></div></div></div><div ng-if="idType == \'uuid\'"><message auth=authentication ipfs=ipfs ng-repeat="msg in chatMessages | orderBy:\'-signedData.time\'" show-recipient=false msg=msg></message></div><div ng-include="\'app/main/getstarted.partial.html\'"></div>');
$templateCache.put('app/identities/chat.modal.html','<div class="col-md-10 col-md-offset-1" ng-controller=IdentitiesController><div ng-include="\'app/chats/show.html\'" class=mar-top15></div></div>');
$templateCache.put('app/identities/create.html','<div class="container mar-bot30" ng-controller=IdentitiesController><div class=row><div class="col-xs-8 col-sm-6 col-sm-offset-2"><h3>Add contact</h3></div><div class="col-xs-4 col-sm-2"><button ng-click=openReadQRModal() class="btn btn-default pull-right"><span class="glyphicon glyphicon-qrcode"></span> Scan QR</button></div></div><div class=row><div class="col-xs-12 col-sm-8 col-sm-offset-2"><div class="panel panel-danger" ng-if=error><div class=panel-heading ng-bind=error></div></div><div class="panel panel-info" ng-hide=authentication.user><div class=panel-heading>Please log in to add contacts.</div></div><form class=form name=addEntryForm ng-submit="addEntry($event, newEntry)"><div class=form-group><label for=idName>Name *</label> <input type=text required autofocus id=idName focus-on=idNameFocus name=idName ng-model=newEntry.name class=form-control></div><div class=form-group ng-class="{ \'has-error\': addEntryForm.idEmail.$invalid }"><label for=idEmail>Email</label> <input type=email id=idEmail name=idEmail ng-model=newEntry.email class=form-control></div><div class=form-group ng-class="{ \'has-error\': addEntryForm.idUrl.$invalid }"><label for=idUrl>Url</label> <input type=url id=idUrl name=idUrl ng-model=newEntry.url class=form-control><p class=help-block>Social media profile or other personal url</p></div><button class="btn btn-primary" ng-disabled="loggingIn || !(authentication.user && !(addEntryForm.idName.$invalid || addEntryForm.idEmail.$invalid || addEntryForm.idPhone.$invalid || addEntryForm.idUrl.$invalid))">Add public contact</button><p class=help-block>More details can be added afterwards.</p><p><a ui-sref=privacy>Privacy policy</a></p></form></div></div></div>');
$templateCache.put('app/identities/list.html','<div class="container no-padding-xs"><section><div class=mar-top45-xs></div><div ng-if=!query.term ng-include="\'app/main/getstarted.partial.html\'"></div><table ng-init="filters.limit = 10" id=search-results class="table table-hover" infinite-scroll="filters.limit = filters.limit + 1" infinite-scroll-distance=1 infinite-scroll-disabled="!irisIndex || !ids || !ids.list || ids.list.length < filters.limit || filteredIds.length < filters.limit"><tbody><tr id=createIdRow ng-class="{active: ids.activeKey == -1}" ui-sref=identities.create class=search-result-row><td class="gravatar-col align-center"><span style=line-height:46px class="glyphicon glyphicon-plus"></span></td><td><a ui-sref=identities.create>Add contact<span ng-if=query.term>: <span ng-bind=capitalizeWords(query.term)></span></span></a></td></tr><tr ng-repeat="result in ids.list | orderBy:\'data.trustDistance\':false:trustDistanceComparator | limitTo:filters.limit as filteredIds track by (result.linkTo.value + result.linkTo.type)" id=result{{$index}} ui-sref="identities.show({ type: result.linkTo.type, value: result.linkTo.value })" class=search-result-row ng-class="{active: ids.activeKey == $index}"><td class=gravatar-col><identicon identity=result border=3 width=50 ipfs=ipfs></identicon></td><td><span ng-if="result.data.trustDistance === 0" class="label label-default pull-right">viewpoint</span> <span ng-if="result.data.trustDistance > 0" ng-bind="result.data.trustDistance | ordinal" class="label label-default pull-right"></span> <span ng-if="result.data.trustDistance === false" class="label label-default pull-right">unconnected</span> <a ng-bind-html=result.primaryName|highlight:query.term ui-sref="identities.show({ type: result.linkTo.type, value: result.linkTo.value })"></a> <span class="glyphicon glyphicon-ok-sign" style=color:#337ab7 ng-if=result.wellVerified></span> <small ng-if=!(result.mostVerifiedAttributes.type||result.mostVerifiedAttributes.nickname) class=list-group-item-text><span ng-bind-html=result.data.attrs.type.type|highlight:query.term></span></small><br><small><span ng-if=result.nickname ng-bind-html=result.nickname|highlight:query.term class=mar-right10></span> <span ng-if=result.profile.email class=mar-right10><span class="glyphicon glyphicon-envelope"></span> <span ng-bind-html=result.profile.email|highlight:query.term></span> </span><span ng-if=result.profile.facebook class=mar-right10><span class="fa fa-facebook"></span> <span ng-bind-html=result.profile.facebook|highlight:query.term></span> </span><span ng-if=result.profile.twitter class=mar-right10><span class="fa fa-twitter"></span> <span ng-bind-html=result.profile.twitter|highlight:query.term></span> </span><span ng-if=result.profile.googlePlus class=mar-right10><span class="fa fa-google-plus"></span> <span ng-bind-html=result.profile.googlePlus|highlight:query.term></span> </span><span ng-if=result.mostVerifiedAttributes.bitcoin class=mar-right10><span class="fa fa-bitcoin"></span> <span ng-bind-html=result.mostVerifiedAttributes.bitcoin.attribute.val|highlight:query.term></span></span></small></td></tr></tbody></table><div class="alert alert-info text-center" ng-if=!ids.list.length>No results</div></section></div>');
$templateCache.put('app/identities/readqr.modal.html','<div class="col-md-10 col-md-offset-1" ng-controller=IdentitiesController><div class="panel panel-default mar-top15"><div class="panel-heading text-center"><p><b>Scan QR from profile page</b></p><div><qr-scanner width=400 height=300 ng-success=qrScanSuccess(data) ng-error=qrScanError(error)></qr-scanner></div><!-- <div class="mar-top15 mar-bot10"><button ng-click="shareModal.close()" class="btn btn-default">Close</button></div> --></div></div></div>');
$templateCache.put('app/identities/share.modal.html','<div class="col-md-10 col-md-offset-1" ng-controller=IdentitiesController><div class="panel panel-default mar-top15"><div class="panel-heading text-center"><p><button ng-click="copyToClipboard(idUrl, $event)" class="btn btn-primary mar-top10">Copy link to clipboard</button></p><div class="mar-top20 mar-bot10"><qrcode data={{idUrl}} size=240></qrcode></div><!-- <div class="mar-top15 mar-bot10"><button ng-click="shareModal.close()" class="btn btn-default">Close</button></div> --></div></div></div>');
$templateCache.put('app/identities/show.attributes.html','<!-- <input id="authenticity_token" name="authenticity_token" type="hidden" value="z1JM7ffnFK7gOv6S3yzG9UFyakukYHikAU94/3TcT2o="> --><table class="table truncated-table table-hover"><tbody><tr ng-repeat-start="a in attributes | orderBy:\'order\':true" style="{{!a.isCurrent && a.rowStyle}}" ng-class="!a.isCurrent && a.rowClass" ng-click="!a.isCurrent && attributeClicked($event, a)" class=id-row><td><div><div class="pull-left mar-right15"><a ng-hide="a.type === \'keyID\' || a.type === \'uuid\'" style=min-width:45px class="btn btn-lg btn-social-icon" ng-class=a.btnStyle ng-href={{a.link}}><span ng-class=a.iconStyle></span> <span ng-if=a.iconStyle&&!a.link class="pull-left btn btn-lg btn-social-icon" ng-class=a.btnStyle ng-href={{a.link}}><span ng-class=a.iconStyle></span></span></a><identicon identity=a.attr ng-show="a.attr && (a.type === \'keyID\' || a.type === \'uuid\')" width=45></identicon></div><div class=pull-left><a ui-sref="identities.show({ type: a.type, value: a.value })" ng-bind="a.linkName || a.value" class=id-link></a><br><small ng-bind=a.type></small></div><!--\n            <input class="form-control linkedComment" type="text" placeholder="comment" disabled>\n          --><div class=pull-right ng-if=!a.isCurrent><button autocomplete=off name=confirm class="btn btn-default btn-confirm" ng-click="createMessage($event, { type: \'verification\' }, {verifiedAttr: a})" ng-disabled=!authentication.user uib-tooltip=Verify data-style=zoom-out><span class="positive glyphicon glyphicon-ok"></span> {{a.verifications||a.conf}}</button> <button autocomplete=off name=unverify class="btn btn-default btn-unverify" ng-click="createMessage($event, { type: \'unverification\' }, {verifiedAttr: a})" ng-disabled=!authentication.user uib-tooltip=Unverify data-style=zoom-out><span class="negative glyphicon glyphicon-remove"></span> {{a.unverifications||a.ref}}</button></div><div class=clear></div></div></td></tr><tr ng-repeat-end ng-if=!a.isCurrent class="active connectingmsgs"><td class=connectingmsgs data-style=zoom-in data-spinner-color=#000><div uib-collapse=!a.collapse><div ng-repeat="msg in a.connectingMsgs" ng-click="openMessage($event, msg, \'lg\')" class=confirmation-panel><span ng-if="msg.signedData.type === \'verification\'"><span class="positive glyphicon glyphicon-ok hidden-xs mar-left5 pull-right"></span> <span class="positive glyphicon glyphicon-ok visible-xs-inline-block mar-right10"></span> </span><span ng-if="msg.signedData.type === \'unverification\'"><span class="negative glyphicon glyphicon-remove hidden-xs mar-left5 pull-right"></span> <span class="negative glyphicon glyphicon-remove visible-xs-inline-block mar-right10"></span> </span><strong><a ui-sref="identities.show({ type: msg.linkToAuthor.type, value: msg.linkToAuthor.value })" class=id-link><identicon ipfs=ipfs identity=msg.author class=mar-right5 border=3 width=30></identicon><span ng-bind=msg.author_name||msg.signedData.author.type.value></span> </a></strong>- <span ng-bind="msg.signedData.timestamp|date:\'mediumDate\'" class="text-muted small" style=display:inline-block;></span> <span ng-if=msg.signedData.comment>- {{msg.signedData.comment|limitTo:250}}</span></div></div></td></tr><tr class="active add-row"><td><input id=addValue ng-change=guessAttributeType() ng-model=newVerification.value class=form-control name=linkedValue type=text placeholder="value (e.g. alice@example.com)" ng-disabled=!authentication.user> <input id=addType ng-model=newVerification.type class=form-control name=linkedType type=text placeholder="type (e.g. email)" ng-disabled=!authentication.user><!--<td><input id="addComment" class="form-control" name="linkedComment" type="text" placeholder="comment" disabled></td> --> <button autocomplete=off id=addButton ng-click="createMessage($event, { type: \'verification\' }, {verifiedAttr: newVerification})" class="btn btn-default" data-style=zoom-out ng-disabled="!authentication.user || !(newVerification.type && newVerification.value)"><span class="glyphicon glyphicon-plus"></span> Add</button></td></tr></tbody></table>');
$templateCache.put('app/identities/show.html','<section class=cover-container><div ng-click=openCoverPhotoUploadModal() class=cover parallax-background parallax-ratio=-0.2 ng-style=coverPhoto></div><div class="container hidden-xs hidden-sm"><div class="heading-row row"><div class="col-md-8 col-md-offset-3"><h4 ng-show="idType === \'keyID\' || idType === \'uuid\'"><identicon identity=idAttr width=35></identicon><button class="btn btn-default mar-left15" ng-click=openSharePageModal()><span class="glyphicon glyphicon-qrcode mar-right5"></span> Share</button> <button ng-if=showChatButton class="mar-left15 btn btn-default" ui-sref="chats.show({value:idValue, type:idType})"><span class="fa fa-comment mar-right5"></span> Chat</button> <button ng-if="authentication.user && idType === \'keyID\'" class="mar-left15 btn btn-default" ng-click=openVideoChatModal()><span class="glyphicon glyphicon-facetime-video mar-right5"></span> {{isCurrentUser ? \'Go live\' : \'Video\'}}</button> <small class="positive mar-left15" ng-show=isOnline>online</small></h4><h4 ng-hide="idType === \'keyID\' || idType === \'uuid\'"><span ng-bind=idValue class=idValue></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType class=idType></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType class=idType></a> </small><button class="btn btn-default mar-left15" ng-click=openSharePageModal()><span class="glyphicon glyphicon-qrcode mar-right5"></span> Share</button></h4></div></div><div class=row><div class="col-md-9 col-md-offset-3"><ul class="list-inline tab-list"><li ng-if=isUniqueType><a href="" ng-class="{ active: activeTab == 1 }" ng-click=activateTab(1)><span class=hidden-xs>Received </span>({{0+identity.data.receivedPositive+identity.data.receivedNeutral+identity.data.receivedNegative || received.list.length}})</a></li><li ng-if=isUniqueType><a href="" ng-class="{ active: activeTab == 2 }" ng-click=activateTab(2)><span class=hidden-xs>Sent </span>({{0+identity.data.sentPositive+identity.data.sentNeutral+identity.data.sentNegative || sent.length}})</a></li><li><a href="" ng-class="{ active: activeTab == 3 }" ng-click=activateTab(3)><span class=hidden-xs>Identity </span>(<span ng-bind="attributesLength || 0"></span>)</a></li></ul></div></div></div></section><div class=container><div><section><div class=row><div class="col-md-3 id-left-column"><div ng-if=isUniqueType ng-include="\'app/identities/show.stats.html\'"></div><div class=hidden-xs ng-include="\'app/messages/distance-selector.partial.html\'"></div></div><div class="col-md-8 id-right-column"><!-- Nav tabs --><div ng-include="\'app/main/createuser.partial.html\'"></div><uib-tabset active=activeTab><uib-tab index=1 ng-if=isUniqueType><uib-tab-heading><span class=hidden-xs>Received ({{0+identity.data.receivedPositive+identity.data.receivedNeutral+identity.data.receivedNegative}})</span> <span class=visible-xs>Recv ({{0+identity.data.receivedPositive+identity.data.receivedNeutral+identity.data.receivedNegative}})</span></uib-tab-heading><div ng-if=isCurrentUser ng-include="\'app/main/getstarted.partial.html\'"></div><div class="panel panel-info" ng-if="!isCurrentUser && authentication.user && authentication.identity.data && !authentication.identity.data.sentPositive"><div class=panel-heading>Trust this user? Upvote them to see their posts!</div></div><div ng-include="\'app/messages/create.rating.partial.html\'" ng-show="!loggingIn && authentication.user && !isCurrentUser"></div><div ng-include="\'app/identities/show.received.html\'"></div><div ng-if="!isCurrentUser && receivedFiltered.length == 0" class="alert alert-info text-center">No messages yet</div></uib-tab><uib-tab index=2 ng-if=isUniqueType><uib-tab-heading>Sent ({{0+identity.data.sentPositive+identity.data.sentNeutral+identity.data.sentNegative}})</uib-tab-heading><div ng-include="\'app/identities/show.sent.html\'"></div></uib-tab><uib-tab index=3><uib-tab-heading>Id<span class=hidden-xs>entity</span> (<span ng-bind="attributesLength || 0"></span>)</uib-tab-heading><div ng-include="\'app/identities/show.attributes.html\'" id=attributes></div></uib-tab></uib-tabset></div></div></section></div></div>');
$templateCache.put('app/identities/show.received.html','<div infinite-scroll=getReceivedMsgs() infinite-scroll-distance=2 infinite-scroll-disabled="true || !identity || activeTab != 1"><div class=panel ng-class="{\'mar-bot5\': (filters.type.indexOf(\'rating\') === 0)}"><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === null) }" ng-click="setFilters({ type: null })"><a>All</a></li><li ng-class="{active: (filters.type === \'rating\') }" ng-click="setFilters({type: \'rating\'})"><a>Rating</a></li><li ng-class="{active: (filters.type === \'verification\') }" ng-click="setFilters({type:\'verification\'})"><a>Verification</a></li></ul></div></div><div class=panel ng-show="filters.type.indexOf(\'rating\') === 0"><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === \'rating:positive\') }" ng-click="setFilters({type: \'rating:positive\'})"><a><span class=positive><span class="visible-xs-inline glyphicon glyphicon-thumbs-up"></span><span class=hidden-xs>Pos<span class=hidden-md>itive</span></span> ({{0+identity.data.receivedPositive}})</span></a></li><li ng-class="{active: (filters.type === \'rating:neutral\') }" ng-click="setFilters({type: \'rating:neutral\'})"><a><span class=neutral><span class="visible-xs-inline glyphicon glyphicon-question-sign"></span><span class=hidden-xs>Neut<span class=hidden-md>ral</span></span> ({{0+identity.data.receivedNeutral}})</span></a></li><li ng-class="{active: (filters.type === \'rating:negative\') }" ng-click="setFilters({type: \'rating:negative\'})"><a><span class=negative><span class="visible-xs-inline glyphicon glyphicon-thumbs-down"></span><span class=hidden-xs>Neg<span class=hidden-md>ative</span></span> ({{0+identity.data.receivedNegative}})</span></a></li></ul></div></div><message auth=authentication ipfs=ipfs msg-utils=msgUtils msg=msg page-info=identity ng-repeat="msg in received.list | filter:msgFilter | orderBy:\'signedData.timestamp\' : true as receivedFiltered" ng-click="openMessage($event, msg, \'lg\')"></message></div>');
$templateCache.put('app/identities/show.sent.html','<div infinite-scroll=getSentMsgs() infinite-scroll-distance=2 infinite-scroll-disabled="true || !identity ||\xA0activeTab != 2"><div class=panel ng-class="{\'mar-bot5\': (filters.type.indexOf(\'rating\') === 0)}"><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === null) }" ng-click="setFilters({ type: null })"><a>All</a></li><li ng-class="{active: (filters.type === \'rating\') }" ng-click="setFilters({type: \'rating\'})"><a>Rating</a></li><li ng-class="{active: (filters.type === \'verification\') }" ng-click="setFilters({type:\'verification\'})"><a>Verification</a></li><!-- <li ><a href="#" data-val="other"><span class="glyphicon glyphicon-question-sign"></span> Other</a></li> --></ul></div></div><div ng-show="filters.type.indexOf(\'rating\') === 0" class=panel><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === \'rating:positive\') }" ng-click="setFilters({type: \'rating:positive\'})"><a><span class=positive><span class="visible-xs-inline glyphicon glyphicon-thumbs-up"></span><span class=hidden-xs>Pos<span class=hidden-md>itive</span></span> ({{0+identity.data.sentPositive}})</span></a></li><li ng-class="{active: (filters.type === \'rating:neutral\') }" ng-click="setFilters({type: \'rating:neutral\'})"><a><span class=neutral><span class="visible-xs-inline glyphicon glyphicon-question-sign"></span><span class=hidden-xs>Neut<span class=hidden-md>ral</span></span> ({{0+identity.data.sentNeutral}})</span></a></li><li ng-class="{active: (filters.type === \'rating:negative\') }" ng-click="setFilters({type: \'rating:negative\'})"><a><span class=negative><span class="visible-xs-inline glyphicon glyphicon-thumbs-down"></span><span class=hidden-xs>Neg<span class=hidden-md>ative</span></span> ({{0+identity.data.sentNegative}})</span></a></li></ul></div></div><message auth=authentication ipfs=ipfs msg-utils=msgUtils msg=msg page-info=identity ng-repeat="msg in sent | filter:msgFilter | orderBy:\'signedData.timestamp\' : true as sentFiltered" ng-click="openMessage($event, msg, \'lg\')"></message></div><div ng-if="sentFiltered.length == 0" class="alert alert-info text-center">No messages yet</div>');
$templateCache.put('app/identities/show.stats.html','<div><p class="hidden-md hidden-lg" ng-hide=!stats.name><span ng-bind=idValue class=idValue></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType class=idType></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType class=idType></a></small></p><div class=stats-box><div class=row><div class=col-xs-12><p class=align-center><identicon ng-click=openProfilePhotoUploadModal() identity=identity ipfs=ipfs border=4 show-distance=0 width=230 ng-if=hideProfilePhoto></identicon><identicon ng-click=openProfilePhotoUploadModal() identity=identity ipfs=ipfs border=4 show-distance=0 width=230 ng-if=!hideProfilePhoto></identicon></p></div></div><div class=row><div class=col-xs-12><h4><span class="visible-xs-inline-block visible-sm-inline-block mar-right15"><span ng-show="idType === \'keyID\' || idType === \'uuid\'"><identicon identity=idAttr width=35></identicon></span><span ng-hide="idType === \'keyID\' || idType === \'uuid\'"><span ng-if=!(identity.data.mostVerifiedAttributes.name||identity.data.mostVerifiedAttributes.nickname)><span ng-bind=idValue class=idValue></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType class=idType></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType class=idType></a> </small></span></span></span><span ng-bind=identity.primaryName></span> <span class="glyphicon glyphicon-ok-sign" style=color:#337ab7 uib-tooltip="Verified by a trusted verifier" ng-if=identity.wellVerified></span> <span ng-hide="!identity.data.mostVerifiedAttributes.nickname || identity.data.mostVerifiedAttributes.nickname == identity.data.mostVerifiedAttributes.primaryName">(<span class=text-muted ng-bind=identity.nickname></span>) </span><button class="mar-left15 visible-xs-inline-block visible-sm-inline-block btn btn-default" ng-click=openSharePageModal()><span class="glyphicon glyphicon-share"></span></button> <button ng-if=showChatButton class="mar-left15 visible-xs-inline-block visible-sm-inline-block btn btn-default" ui-sref="chats.show({value:idValue, type:idType})"><span class="fa fa-comment"></span></button> <button ng-if="authentication.user && idType === \'keyID\'" class="visible-xs-inline-block visible-sm-inline-block mar-left15 btn btn-default" ng-click=openVideoChatModal()><span class="glyphicon glyphicon-facetime-video"></span></button> <small class="positive mar-left15 visible-xs-inline-block visible-sm-inline-block" ng-show=isOnline>online</small> <span ng-if="identity.data.trustDistance === 0" class="label label-default pull-right">viewpoint</span> <span ng-if="identity.data.trustDistance > 0" ng-bind="identity.data.trustDistance | ordinal" class="label label-default pull-right"></span> <span ng-if="identity.data.trustDistance === false" class="label label-default pull-right">unconnected</span></h4></div></div><div class=row><div class="col-xs-12 col-sm-6 col-md-12 mar-bot10 mar-top10"><div class=mar-bot10 ng-if="authentication.user && !identity.hasProperName && !nameAdded"><a href="" ng-click=addName() ng-hide=addingName>Add name</a><form class=form-inline ng-show=addingName ng-submit=addName(name)><div class=form-group><input focus-on=addNameFocus type=text class=form-control ng-model=name placeholder="Add name"></div><button type=submit class="btn btn-default"><span class="glyphicon glyphicon-plus"></span></button></form></div><p><b>Received: <span ng-if="identity.data.receivedPositive || identity.data.receivedNegative"><span ng-bind="identity.data.receivedPositive / (identity.data.receivedPositive+identity.data.receivedNeutral+identity.data.receivedNegative) * 100 | number:0"></span>% positive </span><span ng-if="!(identity.data.receivedPositive || identity.data.receivedNegative)">&mdash;</span></b><br>Sent: <span ng-if="identity.data.sentPositive || identity.data.sentNegative"><span ng-bind="identity.data.sentPositive / (identity.data.sentPositive+identity.data.sentNeutral+identity.data.sentNegative) * 100 | number:0"></span>% positive </span><span ng-if="!(identity.data.sentPositive || identity.data.sentNegative)">&mdash;</span></p><!--\n          <p class="received-stats">\n          <div><strong>Received</strong></div>\n          <div>\n          <strong>\n          <span class="positive"><span class="glyphicon glyphicon-thumbs-up"></span> <span ng-bind="identity.data.receivedPositive">-</span></span>\n          <span class="neutral"><span class="glyphicon glyphicon-question-sign"></span> <span ng-bind="identity.data.receivedNeutral">-</span></span>\n          <span class="negative"><span class="glyphicon glyphicon-thumbs-down"></span> <span ng-bind="identity.data.receivedNegative">-</span></span>\n          </strong>\n          </div>\n          </p>\n          <p>\n          <div>Sent</div>\n          <div>\n          <span class="positive"><span class="glyphicon glyphicon-thumbs-up"></span> <span ng-bind="identity.data.sentPositive">-</span></span>\n          <span class="neutral"><span class="glyphicon glyphicon-question-sign"></span> <span ng-bind="identity.data.sentNeutral">-</span></span>\n          <span class="negative"><span class="glyphicon glyphicon-thumbs-down"></span> <span ng-bind="identity.data.sentNegative">-</span></span>\n          </div>\n          </p> --><div ng-if="scores.verifier && scores.verifier.score > 0" class="text-center alert alert-info"><span class="fa fa-shield" style=font-size:2em></span><p>This identity is a <b>trusted verifier</b> in this web of trust. It can grant verification checkmarks.</p></div><div ng-if=isUniqueType class="mar-top10 quick-contact"><ul class=list-unstyled><li ng-repeat="a in attributes" ng-if=a.quickContact><a ng-href={{a.link}}><span ng-class=a.iconStyle></span><span ng-bind="a.linkName || a.value"></span></a></li><li ng-if=stats.first_seen><span class="fa fa-calendar"></span>First seen: <span ng-if=stats.first_seen ng-bind="stats.first_seen|date:\'mediumDate\'"></span> <span ng-if=!stats.first_seen>&mdash;</span></li></ul></div></div><div class="col-xs-12 col-sm-6 col-md-12 mar-top10"><div ng-if="isUniqueType && hasThumbsUp" class="stats-box mar-bot10"><h5>Thumbs up</h5><a ng-repeat="msg in thumbsUp | orderBy:\'authorTrustDistance\'" ng-class="{ \'hidden-xs\': $index > 3, \'hidden-sm\': $index > 4 }" class="mar-right5 mar-bot5" ui-sref="identities.show({ type: msg.linkToAuthor.type, value: msg.linkToAuthor.value })" uib-tooltip="{{ msg.author_name || msg.linkToAuthor.value }}"><identicon ipfs=ipfs identity=msg.author class=no-glow border=3 width=60></identicon></a></div><div ng-if="isUniqueType && hasThumbsDown" class="stats-box mar-bot10"><h5>Thumbs down</h5><a ng-repeat="msg in thumbsDown | orderBy:\'authorTrustDistance\'" ng-class="{ \'hidden-xs\': $index > 3, \'hidden-sm\': $index > 4 }" class="mar-right5 mar-bot5" ui-sref="identities.show({ type: msg.linkToAuthor.type, value: msg.linkToAuthor.value })" uib-tooltip="{{ msg.author_name || msg.linkToAuthor.value }}"><identicon ipfs=ipfs identity=msg.author class=no-glow border=3 width=60></identicon></a></div></div></div></div></div>');
$templateCache.put('app/identities/upload.modal.html','<div class="col-md-10 col-md-offset-1" ng-controller=IdentitiesController><div class="panel panel-default mar-top15"><div class=panel-heading><form name=form><div class="drop-box mar-bot10" ngf-resize="squarify ? {ratio:\'1:1\',centerCrop:true} : {}" ngf-select ngf-drop ng-model=file name=file ngf-pattern="\'image/*\'" ngf-accept="\'image/*\'" ngf-max-size=5MB ngf-min-height=100 style=width:100%;min-height:300px;text-align:center><div ng-if=!file style="padding:120px 0">Drop file or click</div><img ng-if=file ngf-src=file width=70%></div><button class="btn btn-primary" ng-disabled=!file type=submit ng-click=uploadModalCallback(file)>{{ modalButtonText }}</button></form></div></div></div>');
$templateCache.put('app/identities/video.modal.html','<div class="col-md-10 col-md-offset-1" ng-controller=IdentitiesController><div class="panel panel-default mar-top15"><div class=panel-heading><div class=mar-bot15><div style=color:red;font-weight:bold ng-if="!isCurrentUser && !stream">currently this is unencrypted livestreaming :D</div><identicon identity=identity ipfs=ipfs width=35></identicon><span class=mar-right15><span ng-show="idType === \'keyID\' || idType === \'uuid\'"><identicon identity=idAttr width=35></identicon></span><span ng-hide="idType === \'keyID\' || idType === \'uuid\'"><span ng-if=!(identity.data.mostVerifiedAttributes.name||identity.data.mostVerifiedAttributes.nickname)><span ng-bind=idValue class=idValue></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType class=idType></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType class=idType></a> </small></span></span></span><span ng-bind=identity.primaryName></span> <small class="positive mar-left15" ng-show=isOnline>online</small><div class=mar-top5><videochat ng-if="idType === \'keyID\'" watch-only=stream gun=gun pubkey=idValue></videochat></div><p ng-if="isCurrentUser || stream"><button ng-click="copyToClipboard(idUrl + \'?stream\', $event)" class="btn btn-default mar-top10">Copy link to clipboard</button></p></div></div></div></div>');
$templateCache.put('app/main/about.html','<div class="container mar-bot30 mar-top20-xs no-padding-xs"><div class=col-md-8><div class="panel panel-default"><div class=panel-body><h3>About Iris</h3><p class=lead>Iris is a social networking application that stores everything on its users\' devices which communicate directly with each other &mdash; no corporate gatekeepers needed.</p><p>Longer description on <a href=https://github.com/irislib/iris/blob/master/README.md>GitHub</a>.</p><h4>Available at</h4><ul><li><a href=https://iris.to>iris.to</a></li><li><a href=https://iris.cx>iris.cx</a></li><li><a href=https://irislib.github.io>irislib.github.io</a></li><li>Browser extension: use Iris even if you are offline. In the future, can be used to sign in to websites.<ul><li><a href=https://chrome.google.com/webstore/detail/iris/oelmiikkaikgnmmjaonjlopkmpcahpgh>Chrome</a></li><li><a href=https://addons.mozilla.org/en-US/firefox/addon/irisapp/ >Firefox</a></li></ul></li><!-- TODO: add dynamically updated /ipfs url --><li>Upcoming: Electrum desktop app with bluetooth and LAN peerfinding!</li></ul><h4>Privacy</h4><p>It\'s important to remember that as for now, <b>all posts, ratings and verifications are public</b>.</p><p>Private chats can\'t be read by others, but anyone can see who are communicating with each other. "Last online" status is publicly available.</p><p>See <a ui-sref=privacy>privacy policy</a> for more information.</p></div></div></div></div>');
$templateCache.put('app/main/createuser.partial.html','<div class="panel panel-default" ng-if=!authentication.user><div class=panel-body><form class="form-inline createuser-form" ng-submit=createUser(newUserName)><div class=form-group><input focus-on=newUser style=min-width:200px type=text class=form-control ng-disabled=creatingUser ng-model=newUserName placeholder="What\'s your name?"></div><i class="hidden-xs mar-right5"></i> <button type=submit id=createUserBtn class="btn btn-primary" ng-disabled="!newUserName || creatingUser">Go!</button> <i class="mar-left15 hidden-xs"></i><div class=form-group>or <a ng-click=openLoginModal() href="">Log in</a></div></form></div></div>');
$templateCache.put('app/main/custom-search-row.html','<a class=search-result-row><identicon ipfs=$parent.$parent.$parent.$parent.ipfs identity=match.label border=3 width=46 class=mar-right10></identicon><span ng-bind-html="match.label.primaryName | uibTypeaheadHighlight:query"></span></a>');
$templateCache.put('app/main/getstarted.partial.html','<div ng-if="authentication.user && authentication.identity.data && !authentication.identity.data.sentPositive" class="alert alert-info text-center"><p class=h3 style=margin-bottom:15px>Welcome to social networking freedom!</p><p>Start by upvoting your friends: ask for their profile links or scan their QR codes (<b><a ui-sref=identities.create>Add contact</a></b>). That makes their posts visible to you.</p><p>Alternatively, you can upvote the maintainer of this Iris distribution as a starting point: <b><a ui-sref="identities.show({type:\'keyID\', value:defaultIndexKeyID})">Iris</a></b>.</p><br></div><div ng-if="authentication.user && authentication.identity.data && authentication.identity.data.sentPositive && !authentication.identity.data.receivedPositive" class="alert alert-info text-center"><p class=h3 style=margin-bottom:15px>Great, you have trusted contacts!</p><p>Next you should <b>ask your friends to upvote your account</b>, so they and their network will see your messages.</p><p><button ng-click="copyToClipboard(authentication.user.url, $event)" class="btn btn-primary mar-top10">Copy link to your profile</button></p><p>Or show them your QR code:</p><div class=mar-top20><qrcode data={{authentication.user.url}} size=240></qrcode></div><br></div><div ng-if="authentication.user && authentication.identity.data && authentication.identity.data.sentPositive && authentication.identity.data.receivedPositive && localSettings && !localSettings.profileUploadNotificationClosed && authentication.identity.mva && !authentication.identity.mva.profilePhoto" class="alert alert-info text-center"><p class=h3 style=margin-bottom:15px>You\'re good to go!</p><p style="margin-bottom: 15px">Set a profile picture?</p><p><button class="btn btn-primary mar-right15" ng-click=openProfilePhotoUploadModal()>Yes</button> <button class="btn btn-default" ng-click=closeProfileUploadNotification()>Not now</button></p><br></div>');
$templateCache.put('app/main/login.modal.html','<div class="col-md-10 col-md-offset-1"><div class="panel panel-default mar-top15"><div class=panel-heading><!--<div class="checkbox">\n        <label>\n          <input type="checkbox" value="" checked="checked">\n          Remember me\n        </label>\n      </div>--><h3>New user</h3><form ng-submit=createUser(newUserName)><input focus-on=newUser type=text class=form-control ng-model=newUserName placeholder="Your name"><br><input type=submit value=Go! class="btn btn-primary" ng-disabled=!newUserName></form><hr style=border-color:#ddd><h3>Existing user</h3><form><textarea rows=6 class=form-control placeholder="Paste private key or drop file" ng-model=privateKeySerialized></textarea><br><button class="btn btn-primary" ng-disabled=!privateKeySerialized ng-click="loginWithKey(privateKeySerialized, publicKeyPEM)">Log in</button> <a class=pull-right href="" ng-click="lostKey = !lostKey">Lost your key?</a></form><div ng-if=lostKey class="mar-top30 panel panel-info"><div class=panel-heading>Don\'t worry: just go with "New user" and ask your trusted contacts to verify that your new key belongs to the already existing identity.</div></div></div></div></div>');
$templateCache.put('app/main/logout.modal.html','<div class="col-md-10 col-md-offset-1"><div class="panel panel-default mar-top15"><div class=panel-heading>Log out?</div><div class=panel-body><p>You cannot log in back to this account unless you have saved a backup of your private key.</p><a class="btn btn-default" ng-click=$dismiss()>Cancel</a> <a href=# class="btn btn-danger" id=logout ng-click=logout()>Log out</a></div></div></div>');
$templateCache.put('app/main/notificationsprompt.partial.html','<div ng-if="desktopNotificationsAvailable && !(notificationsPermitted && !localSettings.desktopNotificationsDisabled) && !localSettings.desktopNotificationsNotNow" class=mar-bot15><div ng-if=enableNotificationsFailed class="alert alert-warning" style="margin-bottom: 15px;">Failed to enable notifications - please check your browser settings</div><button class="btn btn-primary" ng-click=setDesktopNotificationsDisabled(false)>Get desktop notifications</button> <button class="btn btn-default" ng-click="saveLocalSetting(\'desktopNotificationsNotNow\', true)">Not now</button></div>');
$templateCache.put('app/main/privacy-policy.html','<div class="container mar-bot30 mar-top20-xs no-padding-xs"><div class=col-md-8><div class="panel panel-default"><div class=panel-body><h3>Privacy policy</h3><p>Iris is a peer-to-peer application like Bitcoin, not a corporate or other legal entity. All data is stored and indexed by the users who run the application. The application only makes connections to other decentralized network peers.</p><p>Please keep in mind that everything you post or add on Iris is <b>public</b> unless otherwise stated.</p><p>Iris\'s contact list feature can be compared to your mobile phone\'s address book, but with synchronization with others. Users can add contact details and attributes of arbitrary type.</p><p>Developers of the application have no control over content added by users and are not responsible for it. It is the user\'s responsibility to comply with applicable laws regarding public messaging and listing of personal information.</p><p>An Iris "account" is a cryptographic keypair generated and stored locally on the user\'s device (in browser or other application). It does not constitute a relationship with any corporate or other entity.</p></div></div></div></div>');
$templateCache.put('app/main/settings.html','<div class="container mar-top20-xs"><div class=col-md-8><h3>Settings</h3><div ng-if=authentication.user><p><b>For normal people</b></p><div class="panel panel-default"><div class=panel-heading>Log out</div><div class=panel-body><p>You cannot log in back to this account unless you have saved a backup of your private key.</p><p><button class="btn btn-danger" ng-click=openLogoutModal()>Log out</button></p></div></div><div class="panel panel-danger"><div class=panel-heading>Private key</div><div class=panel-body><p>Private key is used to log in to your account. Keep your private key safe!</p><p><button class="btn btn-danger" ng-click="copyToClipboard(privateKey|json, $event)">Copy to clipboard</button> <button class="btn btn-danger" ng-click=downloadText(privateKey|json)>Download</button> <button class="btn btn-danger" ng-click="showPrivateKeyQr = !showPrivateKeyQr">Show QR code</button></p><p ng-if=showPrivateKeyQr><qrcode data={{privateKey|json}} size=230></qrcode></p></div></div><div class="panel panel-default"><div class=panel-heading>Notifications</div><div class=panel-body><div ng-if=enableNotificationsFailed class="alert alert-warning" style="margin-bottom: 15px;">Failed to enable notifications - please check your browser settings</div><p ng-if=desktopNotificationsAvailable><button ng-if="!(notificationsPermitted && !localSettings.desktopNotificationsDisabled)" class="btn btn-primary" ng-click=setDesktopNotificationsDisabled(false)>Get desktop notifications</button> <button ng-if="notificationsPermitted && !localSettings.desktopNotificationsDisabled" class="btn btn-default" ng-click=setDesktopNotificationsDisabled(true)>Disable desktop notifications</button></p><p><button ng-if=localSettings.audioNotificationsDisabled ng-click=setAudioNotificationsDisabled(false) class="btn btn-primary">Enable notification sounds</button> <button ng-if=!localSettings.audioNotificationsDisabled ng-click=setAudioNotificationsDisabled(true) class="btn btn-default">Disable notification sounds</button></p></div></div></div><p><b>Geeky stuff</b></p><div class="panel panel-default"><div class=panel-heading>GUN peers</div><div class=panel-body><p><a href=https://gun.eco/ >GUN</a> stores dynamic content: indexes of messages and identities.</p></div><div class=table-responsive><table class="table table-striped"><tbody><tr ng-repeat="(key, value) in gun[\'_\'].opt.peers"><td><span ng-show="value.wire && value.wire.hied" class="positive fa fa-check-circle"></span> <span ng-hide="value.wire && value.wire.hied" class="negative fa fa-times-circle"></span> <small ng-bind=key></small></td><td><button ng-click=removeGunPeer(key) class="pull-right btn btn-danger"><i class="glyphicon glyphicon-trash"></i></button></td></tr><tr><td colspan=2><form class=form-inline ng-submit=addGunPeer(gunUrl)><input class=form-control type=text placeholder="Peer url" ng-model=gunUrl> <input class="btn btn-primary" type=submit value="Add GUN peer"></form></td></tr></tbody></table></div></div><div class="panel panel-default"><div class=panel-heading>IPFS peers</div><div class=panel-body><p><a href=https://ipfs.io>IPFS</a> stores static content: messages and image files.</p><p ng-hide="ipfsPeers && ipfsPeers.length"><small>No IPFS peers</small></p></div><div ng-if="ipfsPeers && ipfsPeers.length" class=table-responsive><table class="table table-striped"><tbody><tr ng-repeat="peer in ipfsPeers"><td><span class="positive fa fa-check-circle"></span> <small ng-bind=peer.addr.toString()></small></td><td><button ng-click=removeIpfsPeer(peer.addr.toString()) class="pull-right btn btn-danger"><i class="glyphicon glyphicon-trash"></i></button></td></tr><tr><td colspan=2><form class=form-inline ng-submit=addIpfsPeer(ipfsUrl)><input class=form-control type=text placeholder="Peer url" ng-model=ipfsUrl> <input class="btn btn-primary" type=submit value="Add IPFS peer"><!--<button ng-click="$event.preventDefault;addDefaultIpfsPeers()" class="btn btn-default pull-right">Add default peers</button>--></form></td></tr></tbody></table></div></div><div class="panel panel-default"><div class=panel-heading>Search indexes</div><div class=panel-body><p><small><b>query</b> = when you search for content on Iris, include results from the index</small></p><p><small><b>subscribe</b> = listen for new messages that are added to the index, potentially adding them to your own index</small></p><table class="table table-striped"><thead><tr><td>index</td><td>query</td><td>subscribe</td></tr></thead><tbody><tr ng-repeat="i in trustedIndexes"><td><identicon uib-tooltip={{i.attribute.value}} identity=i.attribute class=mar-right5 border=3 width=30></identicon><a ui-sref="identities.show({ type: i.attribute.type, value: i.attribute.value })"><identicon ipfs=ipfs identity=i.identity border=3 width=30></identicon></a></td><td><input type=checkbox checked></td><td><input type=checkbox checked></td></tr><tr><td colspan=4><form class=form-inline ng-submit=addTrustedIndex(trustedIndexKey)><input class=form-control type=text placeholder="public key" ng-model=trustedIndexKey> <input class="btn btn-primary" type=submit value="Add trusted index"></form></td></tr></tbody></table></div></div><!--\n    <div class="panel panel-default">\n      <div class="panel-heading">\n        Iris indexing settings\n      </div>\n      <div class="panel-body">\n        <p>\n          <pre ng-bind="irisIndex.options|json"></pre>\n        </p>\n      </div>\n    </div>--><p><b>Other stuff</b></p><div class="panel panel-default"><div class=panel-body><p><a ui-sref=about>About Iris</a></p><p><a ui-sref=privacy>Privacy policy</a></p></div></div></div></div>');
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
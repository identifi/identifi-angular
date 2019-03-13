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
  angular.module('irisAngular').component('message', {
    bindings: {
      ipfs: '=?',
      msg: '=',
      pageInfo: '=?',
      showRecipient: '=?',
      msgUtils: '=?',
      auth: '='
    },
    templateUrl: 'app/components/message/message.template.html'
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9tZXNzYWdlL21lc3NhZ2UuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJjb21wb25lbnRzL21lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxhQUFmLENBQ0UsQ0FBQyxTQURILENBQ2EsU0FEYixFQUVJO0lBQUEsUUFBQSxFQUNFO01BQUEsSUFBQSxFQUFNLElBQU47TUFDQSxHQUFBLEVBQUssR0FETDtNQUVBLFFBQUEsRUFBVSxJQUZWO01BR0EsYUFBQSxFQUFlLElBSGY7TUFJQSxRQUFBLEVBQVUsSUFKVjtNQUtBLElBQUEsRUFBTTtJQUxOLENBREY7SUFPQSxXQUFBLEVBQWE7RUFQYixDQUZKO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSAnaXJpc0FuZ3VsYXInXG4gIC5jb21wb25lbnQgJ21lc3NhZ2UnLFxuICAgIGJpbmRpbmdzOlxuICAgICAgaXBmczogJz0/J1xuICAgICAgbXNnOiAnPSdcbiAgICAgIHBhZ2VJbmZvOiAnPT8nXG4gICAgICBzaG93UmVjaXBpZW50OiAnPT8nXG4gICAgICBtc2dVdGlsczogJz0/J1xuICAgICAgYXV0aDogJz0nXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9tZXNzYWdlL21lc3NhZ2UudGVtcGxhdGUuaHRtbCdcbiJdfQ==

(function() {
  angular.module('irisAngular').directive('acmeMalarkey', function() {
    var MalarkeyController, directive, linkFunc;
    MalarkeyController = function($log, githubContributor) {
      'ngInject';
      var activate, getContributors, vm;
      vm = this;
      activate = function() {
        return getContributors().then(function() {
          $log.info('Activated Contributors View');
        });
      };
      getContributors = function() {
        return githubContributor.getContributors(10).then(function(data) {
          vm.contributors = data;
          return vm.contributors;
        });
      };
      vm.contributors = [];
      activate();
    };
    linkFunc = function(scope, el, attr, vm) {
      var typist, watcher;
      watcher = void 0;
      typist = malarkey(el[0], {
        typeSpeed: 40,
        deleteSpeed: 40,
        pauseDelay: 800,
        loop: true,
        postfix: ' '
      });
      el.addClass('acme-malarkey');
      angular.forEach(scope.extraValues, function(value) {
        typist.type(value).pause()["delete"]();
      });
      watcher = scope.$watch('vm.contributors', function() {
        angular.forEach(vm.contributors, function(contributor) {
          typist.type(contributor.login).pause()["delete"]();
        });
      });
      scope.$on('$destroy', function() {
        watcher();
      });
    };
    return directive = {
      restrict: 'E',
      scope: {
        extraValues: '='
      },
      template: '&nbsp;',
      link: linkFunc,
      controller: MalarkeyController,
      controllerAs: 'vm'
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9tYWxhcmtleS9tYWxhcmtleS5kaXJlY3RpdmUuanMiLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsaUJBQWYsQ0FDRSxDQUFDLFNBREgsQ0FDYSxjQURiLEVBQzZCLFNBQUE7QUFFekIsUUFBQTtJQUFBLGtCQUFBLEdBQXFCLFNBQUMsSUFBRCxFQUFPLGlCQUFQO01BQ25CO0FBQUEsVUFBQTtNQUNBLEVBQUEsR0FBSztNQUVMLFFBQUEsR0FBVyxTQUFBO2VBQ1QsZUFBQSxDQUFBLENBQWlCLENBQUMsSUFBbEIsQ0FBdUIsU0FBQTtVQUNyQixJQUFJLENBQUMsSUFBTCxDQUFVLDZCQUFWO1FBRHFCLENBQXZCO01BRFM7TUFLWCxlQUFBLEdBQWtCLFNBQUE7ZUFDaEIsaUJBQWlCLENBQUMsZUFBbEIsQ0FBa0MsRUFBbEMsQ0FBcUMsQ0FBQyxJQUF0QyxDQUEyQyxTQUFDLElBQUQ7VUFDekMsRUFBRSxDQUFDLFlBQUgsR0FBa0I7aUJBQ2xCLEVBQUUsQ0FBQztRQUZzQyxDQUEzQztNQURnQjtNQUtsQixFQUFFLENBQUMsWUFBSCxHQUFrQjtNQUNsQixRQUFBLENBQUE7SUFmbUI7SUFrQnJCLFFBQUEsR0FBVyxTQUFDLEtBQUQsRUFBUSxFQUFSLEVBQVksSUFBWixFQUFrQixFQUFsQjtBQUNULFVBQUE7TUFBQSxPQUFBLEdBQVU7TUFDVixNQUFBLEdBQVMsUUFBQSxDQUFTLEVBQUcsQ0FBQSxDQUFBLENBQVosRUFDUDtRQUFBLFNBQUEsRUFBVyxFQUFYO1FBQ0EsV0FBQSxFQUFhLEVBRGI7UUFFQSxVQUFBLEVBQVksR0FGWjtRQUdBLElBQUEsRUFBTSxJQUhOO1FBSUEsT0FBQSxFQUFTLEdBSlQ7T0FETztNQU1ULEVBQUUsQ0FBQyxRQUFILENBQVksZUFBWjtNQUNBLE9BQU8sQ0FBQyxPQUFSLENBQWdCLEtBQUssQ0FBQyxXQUF0QixFQUFtQyxTQUFDLEtBQUQ7UUFDakMsTUFBTSxDQUFDLElBQVAsQ0FBWSxLQUFaLENBQWtCLENBQUMsS0FBbkIsQ0FBQSxDQUEwQixFQUFDLE1BQUQsRUFBMUIsQ0FBQTtNQURpQyxDQUFuQztNQUdBLE9BQUEsR0FBVSxLQUFLLENBQUMsTUFBTixDQUFhLGlCQUFiLEVBQWdDLFNBQUE7UUFDeEMsT0FBTyxDQUFDLE9BQVIsQ0FBZ0IsRUFBRSxDQUFDLFlBQW5CLEVBQWlDLFNBQUMsV0FBRDtVQUMvQixNQUFNLENBQUMsSUFBUCxDQUFZLFdBQVcsQ0FBQyxLQUF4QixDQUE4QixDQUFDLEtBQS9CLENBQUEsQ0FBc0MsRUFBQyxNQUFELEVBQXRDLENBQUE7UUFEK0IsQ0FBakM7TUFEd0MsQ0FBaEM7TUFNVixLQUFLLENBQUMsR0FBTixDQUFVLFVBQVYsRUFBc0IsU0FBQTtRQUNwQixPQUFBLENBQUE7TUFEb0IsQ0FBdEI7SUFsQlM7V0F1QlgsU0FBQSxHQUNFO01BQUEsUUFBQSxFQUFVLEdBQVY7TUFDQSxLQUFBLEVBQU87UUFBQSxXQUFBLEVBQWEsR0FBYjtPQURQO01BRUEsUUFBQSxFQUFVLFFBRlY7TUFHQSxJQUFBLEVBQU0sUUFITjtNQUlBLFVBQUEsRUFBWSxrQkFKWjtNQUtBLFlBQUEsRUFBYyxJQUxkOztFQTVDdUIsQ0FEN0I7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlICdpZGVudGlmaUFuZ3VsYXInXG4gIC5kaXJlY3RpdmUgJ2FjbWVNYWxhcmtleScsIC0+XG5cbiAgICBNYWxhcmtleUNvbnRyb2xsZXIgPSAoJGxvZywgZ2l0aHViQ29udHJpYnV0b3IpIC0+XG4gICAgICAnbmdJbmplY3QnXG4gICAgICB2bSA9IHRoaXNcblxuICAgICAgYWN0aXZhdGUgPSAtPlxuICAgICAgICBnZXRDb250cmlidXRvcnMoKS50aGVuIC0+XG4gICAgICAgICAgJGxvZy5pbmZvICdBY3RpdmF0ZWQgQ29udHJpYnV0b3JzIFZpZXcnXG4gICAgICAgICAgcmV0dXJuXG5cbiAgICAgIGdldENvbnRyaWJ1dG9ycyA9IC0+XG4gICAgICAgIGdpdGh1YkNvbnRyaWJ1dG9yLmdldENvbnRyaWJ1dG9ycygxMCkudGhlbiAoZGF0YSkgLT5cbiAgICAgICAgICB2bS5jb250cmlidXRvcnMgPSBkYXRhXG4gICAgICAgICAgdm0uY29udHJpYnV0b3JzXG5cbiAgICAgIHZtLmNvbnRyaWJ1dG9ycyA9IFtdXG4gICAgICBhY3RpdmF0ZSgpXG4gICAgICByZXR1cm5cblxuICAgIGxpbmtGdW5jID0gKHNjb3BlLCBlbCwgYXR0ciwgdm0pIC0+XG4gICAgICB3YXRjaGVyID0gdW5kZWZpbmVkXG4gICAgICB0eXBpc3QgPSBtYWxhcmtleShlbFswXSxcbiAgICAgICAgdHlwZVNwZWVkOiA0MFxuICAgICAgICBkZWxldGVTcGVlZDogNDBcbiAgICAgICAgcGF1c2VEZWxheTogODAwXG4gICAgICAgIGxvb3A6IHRydWVcbiAgICAgICAgcG9zdGZpeDogJyAnKVxuICAgICAgZWwuYWRkQ2xhc3MgJ2FjbWUtbWFsYXJrZXknXG4gICAgICBhbmd1bGFyLmZvckVhY2ggc2NvcGUuZXh0cmFWYWx1ZXMsICh2YWx1ZSkgLT5cbiAgICAgICAgdHlwaXN0LnR5cGUodmFsdWUpLnBhdXNlKCkuZGVsZXRlKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB3YXRjaGVyID0gc2NvcGUuJHdhdGNoKCd2bS5jb250cmlidXRvcnMnLCAtPlxuICAgICAgICBhbmd1bGFyLmZvckVhY2ggdm0uY29udHJpYnV0b3JzLCAoY29udHJpYnV0b3IpIC0+XG4gICAgICAgICAgdHlwaXN0LnR5cGUoY29udHJpYnV0b3IubG9naW4pLnBhdXNlKCkuZGVsZXRlKClcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgcmV0dXJuXG4gICAgICApXG4gICAgICBzY29wZS4kb24gJyRkZXN0cm95JywgLT5cbiAgICAgICAgd2F0Y2hlcigpXG4gICAgICAgIHJldHVyblxuICAgICAgcmV0dXJuXG5cbiAgICBkaXJlY3RpdmUgPVxuICAgICAgcmVzdHJpY3Q6ICdFJ1xuICAgICAgc2NvcGU6IGV4dHJhVmFsdWVzOiAnPSdcbiAgICAgIHRlbXBsYXRlOiAnJm5ic3A7J1xuICAgICAgbGluazogbGlua0Z1bmNcbiAgICAgIGNvbnRyb2xsZXI6IE1hbGFya2V5Q29udHJvbGxlclxuICAgICAgY29udHJvbGxlckFzOiAndm0nXG4iXX0=

(function() {
  // coffeelint: disable=max_line_length
  angular.module('irisAngular').directive('ipfsimg', function() {
    return {
      scope: {
        request: '&'
      },
      link: function(scope, element, attrs) {
        var update;
        attrs.showDistance = typeof attrs.showDistance === 'undefined' ? true : !!parseInt(attrs.showDistance);
        console.log(11111111111111111111111111111111111111111111111111111111);
        update = function() {
          var img;
          console.log(222222, scope.request);
          if (scope.request) {
            element.empty();
            img = angular.element('<img>');
            return scope.request.then(function(src) {
              console.log(333333333);
              img.src = src;
              return element.append(img);
            });
          }
        };
        return scope.$watchGroup(['identity'], update);
      }
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9pcGZzSW1nL2lwZnNJbWcuanMiLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXBmc0ltZy9pcGZzSW1nLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBO0VBQ0EsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUNFLENBQUMsU0FESCxDQUNhLFNBRGIsRUFDd0IsUUFBQSxDQUFBLENBQUE7V0FDcEI7TUFBQSxLQUFBLEVBQ0U7UUFBQSxPQUFBLEVBQVM7TUFBVCxDQURGO01BRUEsSUFBQSxFQUFNLFFBQUEsQ0FBQyxLQUFELEVBQVEsT0FBUixFQUFpQixLQUFqQixDQUFBO0FBQ0osWUFBQTtRQUFBLEtBQUssQ0FBQyxZQUFOLEdBQXdCLE9BQU8sS0FBSyxDQUFDLFlBQWIsS0FBNkIsV0FBaEMsR0FBaUQsSUFBakQsR0FBMkQsQ0FBQyxDQUFDLFFBQUEsQ0FBUyxLQUFLLENBQUMsWUFBZjtRQUNsRixPQUFPLENBQUMsR0FBUixDQUFZLHdEQUFaO1FBQ0EsTUFBQSxHQUFTLFFBQUEsQ0FBQSxDQUFBO0FBQ1AsY0FBQTtVQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksTUFBWixFQUFvQixLQUFLLENBQUMsT0FBMUI7VUFDQSxJQUFHLEtBQUssQ0FBQyxPQUFUO1lBQ0UsT0FBTyxDQUFDLEtBQVIsQ0FBQTtZQUNBLEdBQUEsR0FBTSxPQUFPLENBQUMsT0FBUixDQUFnQixPQUFoQjttQkFDTixLQUFLLENBQUMsT0FBTyxDQUFDLElBQWQsQ0FBbUIsUUFBQSxDQUFDLEdBQUQsQ0FBQTtjQUNqQixPQUFPLENBQUMsR0FBUixDQUFZLFNBQVo7Y0FDQSxHQUFHLENBQUMsR0FBSixHQUFVO3FCQUNWLE9BQU8sQ0FBQyxNQUFSLENBQWUsR0FBZjtZQUhpQixDQUFuQixFQUhGOztRQUZPO2VBU1QsS0FBSyxDQUFDLFdBQU4sQ0FBa0IsQ0FBQyxVQUFELENBQWxCLEVBQWdDLE1BQWhDO01BWkk7SUFGTjtFQURvQixDQUR4QjtBQURBIiwic291cmNlc0NvbnRlbnQiOlsiIyBjb2ZmZWVsaW50OiBkaXNhYmxlPW1heF9saW5lX2xlbmd0aFxuYW5ndWxhci5tb2R1bGUgJ2lkZW50aWZpQW5ndWxhcidcbiAgLmRpcmVjdGl2ZSAnaXBmc2ltZycsIC0+XG4gICAgc2NvcGU6XG4gICAgICByZXF1ZXN0OiAnJidcbiAgICBsaW5rOiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSAtPlxuICAgICAgYXR0cnMuc2hvd0Rpc3RhbmNlID0gaWYgdHlwZW9mIGF0dHJzLnNob3dEaXN0YW5jZSA9PSAndW5kZWZpbmVkJyB0aGVuIHRydWUgZWxzZSAhIXBhcnNlSW50KGF0dHJzLnNob3dEaXN0YW5jZSlcbiAgICAgIGNvbnNvbGUubG9nIDExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExXG4gICAgICB1cGRhdGUgPSAtPlxuICAgICAgICBjb25zb2xlLmxvZyAyMjIyMjIsIHNjb3BlLnJlcXVlc3RcbiAgICAgICAgaWYgc2NvcGUucmVxdWVzdFxuICAgICAgICAgIGVsZW1lbnQuZW1wdHkoKVxuICAgICAgICAgIGltZyA9IGFuZ3VsYXIuZWxlbWVudCgnPGltZz4nKVxuICAgICAgICAgIHNjb3BlLnJlcXVlc3QudGhlbiAoc3JjKSAtPlxuICAgICAgICAgICAgY29uc29sZS5sb2cgMzMzMzMzMzMzXG4gICAgICAgICAgICBpbWcuc3JjID0gc3JjXG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZChpbWcpXG4gICAgICBzY29wZS4kd2F0Y2hHcm91cCBbJ2lkZW50aXR5J10sIHVwZGF0ZVxuIl19

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
  // Messages service used to communicate with Messages REST endpoints
  angular.module('irisAngular').factory('Messages', [
    '$resource',
    '$location',
    function($resource,
    $location) {
      var host,
    path;
      path = $location.absUrl();
      host = path.match(/\/ip[nf]s\//) ? 'https://identi.fi/' : '';
      return $resource(host + 'api/messages/:id');
    }
  ]);

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMvbWVzc2FnZXMuc2VydmljZS5qcyIsInNvdXJjZXMiOlsibWVzc2FnZXMvbWVzc2FnZXMuc2VydmljZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQTtFQUNBLE9BQU8sQ0FBQyxNQUFSLENBQWUsaUJBQWYsQ0FBaUMsQ0FBQyxPQUFsQyxDQUEwQyxVQUExQyxFQUFzRDtJQUNwRCxXQURvRDtJQUVwRCxXQUZvRDtJQUdwRCxRQUFBLENBQUMsU0FBRDtJQUFZLFNBQVosQ0FBQTtBQUNFLFVBQUEsSUFBQTtJQUFBO01BQUEsSUFBQSxHQUFPLFNBQVMsQ0FBQyxNQUFWLENBQUE7TUFDUCxJQUFBLEdBQVUsSUFBSSxDQUFDLEtBQUwsQ0FBVyxhQUFYLENBQUgsR0FBaUMsb0JBQWpDLEdBQTJEO2FBQ2xFLFNBQUEsQ0FBVSxJQUFBLEdBQU8sa0JBQWpCO0lBSEYsQ0FIb0Q7R0FBdEQ7QUFEQSIsInNvdXJjZXNDb250ZW50IjpbIiMgTWVzc2FnZXMgc2VydmljZSB1c2VkIHRvIGNvbW11bmljYXRlIHdpdGggTWVzc2FnZXMgUkVTVCBlbmRwb2ludHNcbmFuZ3VsYXIubW9kdWxlKCdpZGVudGlmaUFuZ3VsYXInKS5mYWN0b3J5ICdNZXNzYWdlcycsIFtcbiAgJyRyZXNvdXJjZSdcbiAgJyRsb2NhdGlvbidcbiAgKCRyZXNvdXJjZSwgJGxvY2F0aW9uKSAtPlxuICAgIHBhdGggPSAkbG9jYXRpb24uYWJzVXJsKClcbiAgICBob3N0ID0gaWYgcGF0aC5tYXRjaCAvXFwvaXBbbmZdc1xcLy8gdGhlbiAnaHR0cHM6Ly9pZGVudGkuZmkvJyBlbHNlICcnXG4gICAgJHJlc291cmNlIGhvc3QgKyAnYXBpL21lc3NhZ2VzLzppZCdcbl1cbiJdfQ==

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
    Messages,
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
      // Find existing Message
      $scope.findOne = function() {
        var hash,
    isIpfsHash,
    processResponse,
    requests;
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
          requests = [];
          requests.push(new Promise(function(resolve) {
            return $scope.irisIndex.gun.get('messagesByHash').get(hash).on(function(res) {
              if (res.sig) {
                return $window.irisLib.Message.fromSig(res).then(function(m) {
                  var buffer;
                  resolve(m);
                  if (!isIpfsHash) {
                    buffer = $scope.ipfs.types.Buffer.from(JSON.stringify(res));
                    return $scope.ipfs.add(buffer).then(function(files) {
                      console.log('added to ipfs',
    files[0].path);
                      $scope.irisIndex.gun.get('messagesByHash').get(hash).get('ipfsUri').put('/ipfs/' + files[0].path);
                      return $scope.message.ipfsUri = files[0].path;
                    });
                  }
                });
              }
            });
          }));
          if (isIpfsHash) {
            requests.push(new Promise(function(resolve,
    reject) {
              return $scope.ipfsGet(hash).then(function(res) {
                var s;
                s = JSON.parse(res.toString());
                console.log('msg from ipfs',
    res,
    s);
                return $window.irisLib.Message.fromSig(s).then(function(m) {
                  return resolve(m);
                });
              }).catch(function(e) {
                console.log(e);
                return reject();
              });
            }));
          }
          return Promise.race(requests).then(function(m) {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMvbWVzc2FnZXMuY29udHJvbGxlci5qcyIsInNvdXJjZXMiOlsibWVzc2FnZXMvbWVzc2FnZXMuY29udHJvbGxlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxhQUFBOztFQUVBLE9BQU8sQ0FBQyxNQUFSLENBQWUsYUFBZixDQUE2QixDQUFDLFVBQTlCLENBQXlDLG9CQUF6QyxFQUErRDtJQUM3RCxRQUQ2RDtJQUU3RCxZQUY2RDtJQUc3RCxTQUg2RDtJQUk3RCxjQUo2RDtJQUs3RCxXQUw2RDtJQU03RCxPQU42RDtJQU83RCxRQVA2RDs7SUFTN0QsUUFUNkQ7SUFVN0QsVUFWNkQ7SUFXN0QscUJBWDZEO0lBWTdELFFBQUEsQ0FBQyxNQUFEO0lBQVMsVUFBVDtJQUFxQixPQUFyQjtJQUE4QixZQUE5QjtJQUE0QyxTQUE1QztJQUF1RCxLQUF2RDtJQUE4RCxNQUE5RDtJQUFzRSxRQUF0RTtJQUFnRixNQUFoRjtJQUF3RixRQUF4RjtJQUFrRyxtQkFBbEcsQ0FBQSxFQUFBO0FBQ0UsVUFBQTtNQUFBLE1BQU0sQ0FBQyxNQUFQLEdBQWdCLFlBQVksQ0FBQztNQUM3QixNQUFNLENBQUMsT0FBUCxHQUFpQixZQUFZLENBQUM7TUFFOUIsTUFBTSxDQUFDLFNBQVAsR0FBbUIsUUFBQSxDQUFDLE1BQUQsQ0FBQTtlQUNqQixJQUFJLEtBQUosQ0FBVSxJQUFJLENBQUMsR0FBTCxDQUFTLENBQVQ7SUFBWSxJQUFJLENBQUMsR0FBTCxDQUFTLE1BQVQsQ0FBWixDQUFWO01BRGlCO01BR25CLE1BQU0sQ0FBQyxTQUFQLEdBQW1CLFFBQUEsQ0FBQyxNQUFELENBQUE7QUFDakIsWUFBQTtRQUFBLFNBQUEsR0FBWTtRQUNaLElBQUcsTUFBQSxHQUFTLENBQVo7VUFDRSxTQUFBLEdBQVksV0FEZDtTQUFBLE1BRUssSUFBRyxNQUFBLEdBQVMsQ0FBWjtVQUNILFNBQUEsR0FBWSxXQURUOztlQUVMO01BTmlCO01BUW5CLE1BQU0sQ0FBQyxT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WUFDMUIsTUFBTSxDQUFDLE9BQVAsR0FBaUI7bUJBQ2pCLGVBQUEsQ0FBQTtVQUYwQixDQUE1QixFQW5DRjs7TUFEZTtNQXdDakIsSUFBQSxHQUFPLFFBQUEsQ0FBQSxDQUFBO1FBQ0wsSUFBQSxDQUFjLE1BQU0sQ0FBQyxTQUFyQjtBQUFBLGlCQUFBOztRQUNBLElBQUcsTUFBTSxDQUFDLEVBQVAsQ0FBVSxlQUFWLENBQUg7aUJBQ0UsTUFBTSxDQUFDLE9BQVAsQ0FBQSxFQURGOztNQUZLO2FBSVAsTUFBTSxDQUFDLE1BQVAsQ0FBYyxXQUFkO0lBQTJCLElBQTNCO0lBekVGLENBWjZEO0dBQS9EO0FBRkEiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcbiMgTWVzc2FnZXMgY29udHJvbGxlclxuYW5ndWxhci5tb2R1bGUoJ2lyaXNBbmd1bGFyJykuY29udHJvbGxlciAnTWVzc2FnZXNDb250cm9sbGVyJywgW1xuICAnJHNjb3BlJ1xuICAnJHJvb3RTY29wZSdcbiAgJyR3aW5kb3cnXG4gICckc3RhdGVQYXJhbXMnXG4gICckbG9jYXRpb24nXG4gICckaHR0cCdcbiAgJyRzdGF0ZSdcbiAgIyAnQXV0aGVudGljYXRpb24nXG4gICdjb25maWcnXG4gICckdGltZW91dCdcbiAgJ2xvY2FsU3RvcmFnZVNlcnZpY2UnXG4gICgkc2NvcGUsICRyb290U2NvcGUsICR3aW5kb3csICRzdGF0ZVBhcmFtcywgJGxvY2F0aW9uLCAkaHR0cCwgJHN0YXRlLCBNZXNzYWdlcywgY29uZmlnLCAkdGltZW91dCwgbG9jYWxTdG9yYWdlU2VydmljZSkgLT4gIywgQXV0aGVudGljYXRpb25cbiAgICAkc2NvcGUuaWRUeXBlID0gJHN0YXRlUGFyYW1zLnR5cGVcbiAgICAkc2NvcGUuaWRWYWx1ZSA9ICRzdGF0ZVBhcmFtcy52YWx1ZVxuXG4gICAgJHNjb3BlLmljb25Db3VudCA9IChyYXRpbmcpIC0+XG4gICAgICBuZXcgQXJyYXkoTWF0aC5tYXgoMSwgTWF0aC5hYnMocmF0aW5nKSkpXG5cbiAgICAkc2NvcGUuaWNvblN0eWxlID0gKHJhdGluZykgLT5cbiAgICAgIGljb25TdHlsZSA9ICduZXV0cmFsJ1xuICAgICAgaWYgcmF0aW5nID4gMFxuICAgICAgICBpY29uU3R5bGUgPSAncG9zaXRpdmUnXG4gICAgICBlbHNlIGlmIHJhdGluZyA8IDBcbiAgICAgICAgaWNvblN0eWxlID0gJ25lZ2F0aXZlJ1xuICAgICAgaWNvblN0eWxlXG5cbiAgICAkc2NvcGUuaWNvbkNsYXNzID0gKHJhdGluZykgLT5cbiAgICAgIGljb25TdHlsZSA9ICdnbHlwaGljb24tcXVlc3Rpb24tc2lnbidcbiAgICAgIGlmIHJhdGluZyA+IDBcbiAgICAgICAgaWNvblN0eWxlID0gJ2dseXBoaWNvbi10aHVtYnMtdXAnXG4gICAgICBlbHNlIGlmIHJhdGluZyA8IDBcbiAgICAgICAgaWNvblN0eWxlID0gJ2dseXBoaWNvbi10aHVtYnMtZG93bidcbiAgICAgIGljb25TdHlsZVxuXG4gICAgJHNjb3BlLmNvbGxhcHNlRmlsdGVycyA9ICR3aW5kb3cuaW5uZXJXaWR0aCA8IDk5MlxuXG4gICAgJHNjb3BlLnNldEZpbHRlcnMgPSAoZmlsdGVycykgLT5cbiAgICAgIGFuZ3VsYXIuZXh0ZW5kICRzY29wZS5maWx0ZXJzLCB7bGltaXQ6IDEwfSwgZmlsdGVyc1xuXG4gICAgIyBGaW5kIGV4aXN0aW5nIE1lc3NhZ2VcbiAgICAkc2NvcGUuZmluZE9uZSA9IC0+XG4gICAgICBpZiAkc3RhdGVQYXJhbXMuaWRcbiAgICAgICAgaGFzaCA9ICRzdGF0ZVBhcmFtcy5pZFxuICAgICAgICBpc0lwZnNIYXNoID0gaGFzaC5tYXRjaCAvXlFtWzEtOUEtWmEtel17NDAsNTB9JC9cblxuICAgICAgICBwcm9jZXNzUmVzcG9uc2UgPSAtPlxuICAgICAgICAgICRzY29wZS5wcm9jZXNzTWVzc2FnZXMoWyRzY29wZS5tZXNzYWdlXSwge30pXG4gICAgICAgICAgJHNjb3BlLnNldFBhZ2VUaXRsZSAnTWVzc2FnZSAnICsgaGFzaFxuICAgICAgICAgICRzY29wZS5zZXRNc2dSYXdEYXRhKCRzY29wZS5tZXNzYWdlKVxuICAgICAgICAgICRzY29wZS5tZXNzYWdlLnNpZ25lcktleUlEID0gJHNjb3BlLm1lc3NhZ2UuZ2V0U2lnbmVyS2V5SUQoKVxuICAgICAgICAgICRzY29wZS5tZXNzYWdlLnZlcmlmaWVkQnkgPSAkc2NvcGUuaXJpc0luZGV4LmdldCgna2V5SUQnLCAkc2NvcGUubWVzc2FnZS5zaWduZXJLZXlJRClcbiAgICAgICAgICAkc2NvcGUuc2V0SWRlbnRpdHlOYW1lcygkc2NvcGUubWVzc2FnZS52ZXJpZmllZEJ5LCB0cnVlKVxuICAgICAgICAgICRzY29wZS5tZXNzYWdlLnZlcmlmaWVkQnlBdHRyID0gbmV3ICR3aW5kb3cuaXJpc0xpYi5BdHRyaWJ1dGUoJ2tleUlEJywgJHNjb3BlLm1lc3NhZ2Uuc2lnbmVyS2V5SUQpXG4gICAgICAgICAgJHNjb3BlLm1lc3NhZ2UuaXBmc1VyaSA9IGhhc2ggaWYgaXNJcGZzSGFzaFxuXG4gICAgICAgIHJlcXVlc3RzID0gW11cbiAgICAgICAgcmVxdWVzdHMucHVzaCBuZXcgUHJvbWlzZSAocmVzb2x2ZSkgLT5cbiAgICAgICAgICAkc2NvcGUuaXJpc0luZGV4Lmd1bi5nZXQoJ21lc3NhZ2VzQnlIYXNoJykuZ2V0KGhhc2gpLm9uIChyZXMpIC0+XG4gICAgICAgICAgICBpZiByZXMuc2lnXG4gICAgICAgICAgICAgICR3aW5kb3cuaXJpc0xpYi5NZXNzYWdlLmZyb21TaWcocmVzKS50aGVuIChtKSAtPlxuICAgICAgICAgICAgICAgIHJlc29sdmUobSlcbiAgICAgICAgICAgICAgICB1bmxlc3MgaXNJcGZzSGFzaFxuICAgICAgICAgICAgICAgICAgYnVmZmVyID0gJHNjb3BlLmlwZnMudHlwZXMuQnVmZmVyLmZyb20oSlNPTi5zdHJpbmdpZnkocmVzKSlcbiAgICAgICAgICAgICAgICAgICRzY29wZS5pcGZzLmFkZChidWZmZXIpLnRoZW4gKGZpbGVzKSAtPlxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyAnYWRkZWQgdG8gaXBmcycsIGZpbGVzWzBdLnBhdGhcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmlyaXNJbmRleC5ndW4uZ2V0KCdtZXNzYWdlc0J5SGFzaCcpLmdldChoYXNoKS5nZXQoJ2lwZnNVcmknKS5wdXQgJy9pcGZzLycgKyBmaWxlc1swXS5wYXRoXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5tZXNzYWdlLmlwZnNVcmkgPSBmaWxlc1swXS5wYXRoXG4gICAgICAgIGlmIGlzSXBmc0hhc2hcbiAgICAgICAgICByZXF1ZXN0cy5wdXNoIG5ldyBQcm9taXNlIChyZXNvbHZlLCByZWplY3QpIC0+XG4gICAgICAgICAgICAkc2NvcGUuaXBmc0dldChoYXNoKS50aGVuIChyZXMpIC0+XG4gICAgICAgICAgICAgIHMgPSBKU09OLnBhcnNlKHJlcy50b1N0cmluZygpKVxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyAnbXNnIGZyb20gaXBmcycsIHJlcywgc1xuICAgICAgICAgICAgICAkd2luZG93LmlyaXNMaWIuTWVzc2FnZS5mcm9tU2lnKHMpLnRoZW4gKG0pIC0+IHJlc29sdmUobSlcbiAgICAgICAgICAgIC5jYXRjaCAoZSkgLT5cbiAgICAgICAgICAgICAgY29uc29sZS5sb2cgZVxuICAgICAgICAgICAgICByZWplY3QoKVxuICAgICAgICBQcm9taXNlLnJhY2UocmVxdWVzdHMpLnRoZW4gKG0pIC0+XG4gICAgICAgICAgJHNjb3BlLm1lc3NhZ2UgPSBtXG4gICAgICAgICAgcHJvY2Vzc1Jlc3BvbnNlKClcblxuICAgIGxvYWQgPSAtPlxuICAgICAgcmV0dXJuIHVubGVzcyAkc2NvcGUuaXJpc0luZGV4XG4gICAgICBpZiAkc3RhdGUuaXMoJ21lc3NhZ2VzLnNob3cnKVxuICAgICAgICAkc2NvcGUuZmluZE9uZSgpXG4gICAgJHNjb3BlLiR3YXRjaCAnaXJpc0luZGV4JywgbG9hZFxuXVxuIl19

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
      var hosts,
    privateKey,
    scrollTo,
    setIndex;
      hosts = ['https://gun-us.herokuapp.com/gun',
    'https://gun-eu.herokuapp.com/gun'];
      if ($window.location.protocol !== "https:") {
        hosts.push('http://localhost:8765/gun');
      }
      $scope.gun = new Gun(hosts);
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
        limit = limit || 1000;
        cursor = false;
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
              return $scope.$apply(function() {
                return i.linkTo = linkTo;
              });
            });
          });
          return $scope.setIdentityNames(i,
    true);
        };
        $scope.irisIndex.search(searchKey,
    void 0,
    resultFound,
    limit);
        return new Promise(function(resolve) { // TODO: uib-typeahead is limited, but something better pls
          return setTimeout(function() {
            return resolve($scope.ids.list);
          },
    1000);
        });
      };
      setIndex = function(results) {
        $scope.ids.list = [];
        $scope.msgs.list = [];
        $scope.msgs.seen = {};
        $scope.irisIndex = results;
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
        return $scope.viewpoint.identity.gun.get('attrs').open(function(attrs) {
          $scope.viewpoint.attrs = attrs;
          return $scope.viewpoint.mostVerifiedAttributes = $window.irisLib.Identity.getMostVerifiedAttributes(attrs);
        });
      };
      $scope.loadDefaultIndex = function() {
        $scope.irisIndex = null;
        $scope.viewpoint = {
          type: 'keyID',
          value: $scope.defaultIndexKeyID
        };
        return setIndex(new $window.irisLib.Index($scope.gun.user($scope.defaultIndexKeyID).get('identifi'),
    {
          ipfs: $scope.ipfs
        }));
      };
      $scope.loginWithKey = function(privateKeySerialized,
    self) {
        var keyID;
        $scope.irisIndex = null;
        $scope.loggingIn = true;
        $scope.privateKey = $window.irisLib.Key.fromJwk(privateKeySerialized);
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
        return $window.irisLib.Index.create($scope.gun,
    $scope.privateKey,
    {
          self,
          ipfs: $scope.ipfs
        }).then(function(i) {
          var startAt;
          setIndex(i);
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
            return $window.irisLib.Message.fromSig(m).then(function(msg) {
              var author;
              if (new Date(msg.signedData.timestamp) > startAt) {
                author = msg.getAuthor($scope.irisIndex);
                return $scope.setIdentityNames(author).then(function(name) {
                  $scope.notifications.count += 1;
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
        }).catch(function(e) {
          console.error(e);
          return $scope.loggingIn = false;
        });
      };
      privateKey = localStorageService.get('irisKey') || localStorageService.get('identifiKey');
      if (privateKey) {
        $scope.loginWithKey(privateKey);
      } else {
        $scope.loadDefaultIndex();
      }
      $scope.updateIpfsPeers = function() {
        return $scope.ipfs.swarm.peers(function(err,
    peerInfos) {
          if (err) {
            return console.error('failed to fetch ipfs peers',
    err);
          } else {
            return $scope.$apply(function() {
              return $scope.ipfsPeers = peerInfos;
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
                console.log(options.base64type);
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
      $transitions.onStart({},
    function() {
        return $scope.filters.type = null;
      });
      $scope.msgs.list = [];
      $scope.msgs.seen = {};
      $scope.filteredMsgs = [];
      $scope.loadMsgs = function(cursor) {
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
        limit = 1000;
        if (cursor === void 0 && $scope.msgs.list.length) {
          cursor = $scope.msgs.list[$scope.msgs.list.length - 1].cursor;
        }
        found = 0;
        $scope.loadingMsgs = true;
        filter = false;
        resultFound = function(msg) {
          console.log('got msg',
    msg);
          found += 1;
          // $scope.loadingMsgs = false if found >= limit
          if ($scope.msgs.seen[msg.getHash()]) {
            return;
          }
          $scope.msgs.seen[msg.getHash()] = true;
          $scope.processMessages([msg]);
          return $scope.$apply(function() {
            return $scope.msgs.list.push(msg);
          });
        };
        return $scope.irisIndex.getMessagesByTimestamp(resultFound,
    limit);
      };
      $scope.$watch('irisIndex',
    function() {
        if (!$scope.irisIndex) {
          return;
        }
        $scope.loadMsgs();
        return $scope.search();
      });
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
          $scope.privateKeySerialized = $window.irisLib.Key.toJwk($scope.privateKey);
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
            return $scope.privateKeySerialized = $window.irisLib.Key.toJwk($scope.privateKey);
          });
        });
      };
      $scope.download = function(filename,
    data,
    type,
    charset = 'utf-8') {
        var hiddenElement;
        hiddenElement = document.createElement('a');
        hiddenElement.href = `data:${type};charset=${charset},${encodeURI(data)}`;
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
          } else if (data.type !== $scope.filters.type) {
            return false;
          }
        } else {
          if ((ref = data.type) === 'verification' || ref === 'unverification') {
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
        return $scope.openModal('messageModal',
    {
          templateUrl: 'app/messages/show.modal.html'
        });
      };
      $scope.filters = $scope.filters || config.defaultFilters;
      $scope.isCollapsed = false;
      // $scope.menu = Menus.getMenu('topbar')
      $scope.toggleCollapsibleMenu = function() {
        return $scope.isCollapsed = !$scope.isCollapsed;
      };
      $scope.processMessages = function(messages,
    msgOptions = {},
    options = {}) {
        var processMessage;
        processMessage = function(msg) {
          var addAttachment,
    attachment,
    j,
    len,
    ref,
    updateReactions,
    updateReplies,
    updateShares;
          msg.likes = 0;
          updateReactions = function(reactions) {
            var k,
    liked,
    likes,
    v;
            likes = 0;
            liked = false;
            for (k in reactions) {
              v = reactions[k];
              if (v === 'like') {
                likes++;
                if (k === $scope.viewpoint.value && v === 'like') {
                  liked = true;
                }
              }
            }
            return $scope.$apply(function() {
              msg.likes = likes;
              return msg.liked = liked;
            });
          };
          if (msg.signedData.sharedMsg && !options.noRecursion) {
            $scope.irisIndex.gun.back(-1).get('messagesByHash').get(msg.signedData.sharedMsg).then(function(rawSharedMsg) {
              return $window.irisLib.Message.fromSig(rawSharedMsg).then(function(sharedMsg) {
                processMessage(sharedMsg,
    null,
    {
                  noRecursion: true
                });
                return $scope.$apply(function() {
                  return msg.sharedMsg = sharedMsg;
                });
              });
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
            var hash,
    replyRaw,
    results1;
            results1 = [];
            for (hash in replies) {
              replyRaw = replies[hash];
              results1.push($window.irisLib.Message.fromSig(replyRaw).then(function(r) {
                if (!(msg.replies[r.getHash()] && msg.replies[r.getHash()].author)) {
                  msg.replies[r.getHash()] = r;
                  processMessage(r);
                  return $scope.$apply(function() {
                    return msg.repliesArr.push(r);
                  });
                }
              }));
            }
            return results1;
          };
          updateShares = function(shares) {
            var hash,
    results1,
    shareRaw;
            results1 = [];
            for (hash in shares) {
              shareRaw = shares[hash];
              results1.push($window.irisLib.Message.fromSig(shareRaw).then(function(r) {
                if (!(msg.shares[r.getHash()] && msg.shares[r.getHash()].author)) {
                  msg.shares[r.getHash()] = r;
                  processMessage(r);
                  return $scope.$apply(function() {
                    return msg.sharesArr.push(r);
                  });
                }
              }));
            }
            return results1;
          };
          if (msg.gun) {
            msg.gun.get('replies').open(updateReplies);
            msg.gun.get('reactions').on(updateReactions);
            msg.gun.get('shares').open(updateShares);
          }
          msg.author = msg.getAuthor($scope.irisIndex);
          msg.author.gun.get('trustDistance').on(function(d) {
            return msg.authorTrustDistance = d;
          });
          msg.author.gun.get('attrs').open(function(d) {
            var mva;
            mva = $window.irisLib.Identity.getMostVerifiedAttributes(d);
            if (mva.name) {
              return $scope.$apply(function() {
                return msg.author_name = mva.name.attribute.value;
              });
            } else if (mva.nickname) {
              return $scope.$apply(function() {
                return msg.author_name = mva.nickname.attribute.value;
              });
            }
          });
          msg.recipient = msg.getRecipient($scope.irisIndex);
          msg.recipient.gun.get('attrs').open(function(d) {
            var mva;
            mva = $window.irisLib.Identity.getMostVerifiedAttributes(d);
            if (mva.name) {
              return $scope.$apply(function() {
                return msg.recipient_name = mva.name.attribute.value;
              });
            } else if (mva.nickname) {
              return $scope.$apply(function() {
                return msg.recipient_name = mva.nickname.attribute.value;
              });
            }
          });
          if (msg.signedData.attachments) {
            msg.attachments = [];
            addAttachment = function(attachment) {
              var type,
    typeSubstr;
              if (attachment.uri) {
                type = attachment.type || 'image';
                typeSubstr = attachment.type.substr(0,
    5);
                return $scope.ipfsGet(attachment.uri,
    {
                  base64type: type
                }).then(function(src) {
                  return $scope.$apply(function() {
                    return msg.attachments.push(Object.assign({src,
    type,
    typeSubstr},
    attachment));
                  });
                });
              }
            };
            ref = msg.signedData.attachments;
            for (j = 0, len = ref.length; j < len; j++) {
              attachment = ref[j];
              addAttachment(attachment);
            }
          }
          return $scope.$apply(function() {
            var a,
    alpha,
    i,
    index,
    l,
    len1,
    len2,
    maxRatingDiff,
    minRatingDiff,
    n,
    neutralRating,
    rating,
    ref1,
    ref2,
    ref3,
    ref4,
    ref5,
    ref6,
    smallestIndex;
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
              index = Object.keys($window.irisLib.Attribute.getUniqueIdValidators()).indexOf(a.type);
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
              index = Object.keys($window.irisLib.Attribute.getUniqueIdValidators()).indexOf(a.type);
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
                msg.author_name = msg.author_name.slice(0,
    6) + '...';
              }
            }
            if (!msg.recipient_name) {
              msg.recipient_name = msg.linkToRecipient.value;
              if ((ref6 = msg.linkToAuthor.type) === 'keyID' || ref6 === 'uuid') {
                msg.recipient_name = msg.recipient_name.slice(0,
    6) + '...';
              }
            }
            alpha = void 0;
            msg.iconStyle = '';
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
                msg.iconStyle = 'fa fa-pencil';
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
          });
        };
        angular.forEach(messages,
    function(msg,
    key) {
          var k,
    v;
          for (k in msgOptions) {
            v = msgOptions[k];
            msg[k] = v;
          }
          return processMessage(msg);
        });
        return messages;
      };
      // Collapsing the menu after navigation
      $scope.$on('$stateChangeSuccess',
    function() {
        return $scope.isCollapsed = false;
      });
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
        i.verified = false;
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
                if (mva.name.verified) {
                  i.verified = true;
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
        return console.log('removeGunPeer'); // TODO: how to do this?
      };
      $scope.addIpfsPeer = function(url) {
        return $scope.ipfs.swarm.connect(url).then(function() {
          return $scope.updateIpfsPeers();
        });
      };
      return $scope.removeIpfsPeer = function(url) {
        return $scope.ipfs.swarm.disconnect(url).then(function() {
          return $scope.updateIpfsPeers();
        });
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi9tYWluLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzIjpbIm1haW4vbWFpbi5jb250cm9sbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBO0VBQ0EsT0FBTyxDQUFDLE1BQVIsQ0FBZSxhQUFmLENBQTZCLENBQUMsVUFBOUIsQ0FBeUMsZ0JBQXpDLEVBQTJEO0lBQ3pELFFBRHlEO0lBRXpELFlBRnlEO0lBR3pELFdBSHlEO0lBSXpELE9BSnlEO0lBS3pELFFBTHlEO0lBTXpELFFBTnlEO0lBT3pELHFCQVB5RDtJQVF6RCxXQVJ5RDtJQVN6RCxXQVR5RDtJQVV6RCxTQVZ5RDtJQVd6RCxjQVh5RDtJQVl6RCxjQVp5RDtJQWF6RCxJQWJ5RDtJQWN6RCxPQWR5RDtJQWV6RCxxQkFmeUQ7SUFnQnpELFFBQUEsQ0FBQyxNQUFEO0lBQVMsVUFBVDtJQUFxQixTQUFyQjtJQUFnQyxLQUFoQztJQUF1QyxNQUF2QztJQUErQyxNQUEvQztJQUNBLG1CQURBO0lBQ3FCLFNBRHJCO0lBQ2dDLFNBRGhDO0lBQzJDLE9BRDNDO0lBQ29ELFlBRHBEO0lBRUEsWUFGQTtJQUVjLEVBRmQ7SUFFa0IsS0FGbEI7SUFFeUIsbUJBRnpCLENBQUE7QUFHRSxVQUFBLEtBQUE7SUFBQSxVQUFBO0lBQUEsUUFBQTtJQUFBO01BQUEsS0FBQSxHQUFRLENBQUMsa0NBQUQ7SUFBcUMsa0NBQXJDO01BQ1IsSUFBRyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQWpCLEtBQTZCLFFBQWhDO1FBQ0UsS0FBSyxDQUFDLElBQU4sQ0FBVywyQkFBWCxFQURGOztNQUdBLE1BQU0sQ0FBQyxHQUFQLEdBQWEsSUFBSSxHQUFKLENBQVEsS0FBUixFQUpiOzs7TUFRQSxNQUFNLENBQUMsY0FBUCxHQUF3QixDQUFBLEVBUnhCO01BVUEsTUFBTSxDQUFDLG1CQUFQLEdBQTZCO01BRTdCLE1BQU0sQ0FBQyx1QkFBUCxHQUFpQyxRQUFBLENBQUMsQ0FBRDtJQUFJLENBQUosQ0FBQTtRQUMv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ZSgnaXJpc0FuZ3VsYXInKS5jb250cm9sbGVyICdNYWluQ29udHJvbGxlcicsIFtcbiAgJyRzY29wZSdcbiAgJyRyb290U2NvcGUnXG4gICckbG9jYXRpb24nXG4gICckaHR0cCdcbiAgJyRzdGF0ZSdcbiAgJ2NvbmZpZycsXG4gICdsb2NhbFN0b3JhZ2VTZXJ2aWNlJ1xuICAnY2xpcGJvYXJkJ1xuICAnJHVpYk1vZGFsJ1xuICAnJHdpbmRvdydcbiAgJyRzdGF0ZVBhcmFtcydcbiAgJyR0cmFuc2l0aW9ucydcbiAgJyRxJ1xuICAnZm9jdXMnXG4gICdOb3RpZmljYXRpb25TZXJ2aWNlJ1xuICAoJHNjb3BlLCAkcm9vdFNjb3BlLCAkbG9jYXRpb24sICRodHRwLCAkc3RhdGUsIGNvbmZpZyxcbiAgbG9jYWxTdG9yYWdlU2VydmljZSwgY2xpcGJvYXJkLCAkdWliTW9kYWwsICR3aW5kb3csICRzdGF0ZVBhcmFtcyxcbiAgJHRyYW5zaXRpb25zLCAkcSwgZm9jdXMsIE5vdGlmaWNhdGlvblNlcnZpY2UpIC0+XG4gICAgaG9zdHMgPSBbJ2h0dHBzOi8vZ3VuLXVzLmhlcm9rdWFwcC5jb20vZ3VuJywgJ2h0dHBzOi8vZ3VuLWV1Lmhlcm9rdWFwcC5jb20vZ3VuJ11cbiAgICBpZiAkd2luZG93LmxvY2F0aW9uLnByb3RvY29sICE9IFwiaHR0cHM6XCJcbiAgICAgIGhvc3RzLnB1c2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODc2NS9ndW4nKVxuXG4gICAgJHNjb3BlLmd1biA9IG5ldyBHdW4oaG9zdHMpXG5cbiAgICAjIFRPRE86IG1vdmUgZXZlcnl0aGluZyB0byBtYWluIGNvbnRyb2xsZXI/XG4gICAgIyBzZXQgYXV0aGVudGljYXRpb25cbiAgICAkc2NvcGUuYXV0aGVudGljYXRpb24gPSB7fSAjIEF1dGhlbnRpY2F0aW9uXG5cbiAgICAkc2NvcGUubm90aWZpY2F0aW9uU2VydmljZSA9IE5vdGlmaWNhdGlvblNlcnZpY2VcblxuICAgICRzY29wZS50cnVzdERpc3RhbmNlQ29tcGFyYXRvciA9IChhLCBiKSAtPlxuICAgICAgcmV0dXJuIDEgaWYgYS50eXBlICE9ICdudW1iZXInXG4gICAgICByZXR1cm4gLTEgaWYgYi50eXBlICE9ICdudW1iZXInXG4gICAgICByZXR1cm4gYS52YWx1ZSAtIGIudmFsdWVcblxuICAgICRzY29wZS5nZXRJZFVybCA9ICh0eXBlLCB2YWx1ZSkgLT5cbiAgICAgIGlmICR3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUuaW5kZXhPZignLicpID4gLTEgIyBkaWZmZXJlbnRpYXRlIGJldHdlZW4gbG9jYWxob3N0IC8gY2hyb21lIHBsdWdpbiB1cmkgYW5kIEROUyBuYW1lXG4gICAgICAgIHJldHVybiAkc3RhdGUuaHJlZignaWRlbnRpdGllcy5zaG93Jywge3R5cGUsIHZhbHVlfSwge2Fic29sdXRlOiB0cnVlfSkgKyAnP3NoYXJlJ1xuICAgICAgZWxzZVxuICAgICAgICByZXR1cm4gJ2h0dHBzOi8vaXJpcy50by8nICsgJHN0YXRlLmhyZWYoJ2lkZW50aXRpZXMuc2hvdycsIHt0eXBlLCB2YWx1ZX0pICsgJz9zaGFyZSdcblxuICAgICRzY29wZS5nZXRJZEtleSA9IChpZCkgLT5cbiAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoaWQudHlwZSkgKyAnOicgKyBlbmNvZGVVUklDb21wb25lbnQoaWQudmFsdWUpXG5cbiAgICAkc2NvcGUuZGVmYXVsdEluZGV4S2V5SUQgPSAnYjhCeWFZTkJEQ01MTmRacU1kYXM1b1VGTEN4QmYyVkgzLU5qVXVsRGFUby5EVnpJTkVyUlZzNm01dHlqQXV4NmZjTmZuZGFkY2daVk41aExTd1lUQ0xjJ1xuICAgICRzY29wZS5xdWVyeSA9IHt9XG4gICAgJHNjb3BlLnF1ZXJ5LnRlcm0gPSAnJ1xuICAgICRzY29wZS5wcmV2aW91c1NlYXJjaEtleSA9ICcnXG4gICAgJHNjb3BlLmlkcyA9XG4gICAgICBsaXN0OiBbXVxuICAgICRzY29wZS5tc2dzID1cbiAgICAgIGxpc3Q6IFtdXG4gICAgICBzZWVuOiB7fVxuXG4gICAgJHNjb3BlLmlwZnMgPSBuZXcgSXBmcyhcbiAgICAgIGluaXQ6IHRydWVcbiAgICAgIHN0YXJ0OiB0cnVlXG4gICAgICByZXBvOiAnaXBmczctaXJpcydcbiAgICApXG5cbiAgICAkc2NvcGUuY2FwaXRhbGl6ZVdvcmRzID0gKHMpIC0+XG4gICAgICBpZiBzIGFuZCBzLmxlbmd0aFxuICAgICAgICByZXR1cm4gKHMudHJpbSgpLnNwbGl0KCcgJykubWFwICh3b3JkKSAtPiB3b3JkWzBdLnRvVXBwZXJDYXNlKCkgKyB3b3JkWzEuLi0xXS50b0xvd2VyQ2FzZSgpKS5qb2luICcgJ1xuICAgICAgZWxzZVxuICAgICAgICByZXR1cm4gc1xuXG4gICAgJHNjb3BlLmNvcHlUb0NsaXBib2FyZCA9ICh0ZXh0KSAtPlxuICAgICAgY2xpcGJvYXJkLmNvcHlUZXh0IHRleHRcblxuICAgICRzY29wZS5zZWFyY2ggPSAocXVlcnksIGxpbWl0KSAtPlxuICAgICAgcmV0dXJuIHVubGVzcyAkc2NvcGUuaXJpc0luZGV4XG4gICAgICAkc2NvcGUuaWRzLmFjdGl2ZUtleSA9IC0xXG4gICAgICAkc2NvcGUuaWRzLmxpc3QgPSBbXVxuICAgICAgc2VhcmNoS2V5ID0gKHF1ZXJ5IG9yICRzY29wZS5xdWVyeS50ZXJtIG9yICcnKS50b0xvd2VyQ2FzZSgpLnRyaW0oKVxuICAgICAgJHNjb3BlLnNlYXJjaEtleSA9IHNlYXJjaEtleVxuICAgICAgJHNjb3BlLnByZXZpb3VzU2VhcmNoS2V5ID0gc2VhcmNoS2V5XG4gICAgICBsaW1pdCA9IGxpbWl0IG9yIDEwMDBcbiAgICAgIGN1cnNvciA9IGZhbHNlXG4gICAgICBpZiAkc2NvcGUuaWRzLmxpc3QubGVuZ3RoXG4gICAgICAgIGN1cnNvciA9ICRzY29wZS5pZHMubGlzdFskc2NvcGUuaWRzLmxpc3QubGVuZ3RoIC0gMV0uY3Vyc29yXG4gICAgICBzZWVuID0ge31cblxuICAgICAgcmVzdWx0Rm91bmQgPSAoaSkgLT5cbiAgICAgICAgcmV0dXJuIGlmIHNlYXJjaEtleSAhPSAkc2NvcGUuc2VhcmNoS2V5XG4gICAgICAgIGkuZ3VuLm9uIChkYXRhKSAtPlxuICAgICAgICAgIGkuZGF0YSA9IGRhdGFcbiAgICAgICAgICBpLmd1bi5nZXQoJ2xpbmtUbycpLm9uIChsaW5rVG8pIC0+XG4gICAgICAgICAgICByZXR1cm4gaWYgaS5saW5rVG8gb3IgIWxpbmtUb1xuICAgICAgICAgICAgcyA9IGxpbmtUby50eXBlICsgbGlua1RvLnZhbHVlXG4gICAgICAgICAgICByZXR1cm4gaWYgc2VlbltzXVxuICAgICAgICAgICAgc2VlbltzXSA9IHRydWVcbiAgICAgICAgICAgICRzY29wZS5pZHMubGlzdC5wdXNoIGlcbiAgICAgICAgICAgICRzY29wZS4kYXBwbHkgLT5cbiAgICAgICAgICAgICAgaS5saW5rVG8gPSBsaW5rVG9cbiAgICAgICAgJHNjb3BlLnNldElkZW50aXR5TmFtZXMoaSwgdHJ1ZSlcblxuICAgICAgJHNjb3BlLmlyaXNJbmRleC5zZWFyY2goc2VhcmNoS2V5LCB1bmRlZmluZWQsIHJlc3VsdEZvdW5kLCBsaW1pdClcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSAocmVzb2x2ZSkgLT4gIyBUT0RPOiB1aWItdHlwZWFoZWFkIGlzIGxpbWl0ZWQsIGJ1dCBzb21ldGhpbmcgYmV0dGVyIHBsc1xuICAgICAgICBzZXRUaW1lb3V0IC0+XG4gICAgICAgICAgcmVzb2x2ZSgkc2NvcGUuaWRzLmxpc3QpXG4gICAgICAgICwgMTAwMFxuXG4gICAgc2V0SW5kZXggPSAocmVzdWx0cykgLT5cbiAgICAgICRzY29wZS5pZHMubGlzdCA9IFtdXG4gICAgICAkc2NvcGUubXNncy5saXN0ID0gW11cbiAgICAgICRzY29wZS5tc2dzLnNlZW4gPSB7fVxuICAgICAgJHNjb3BlLmlyaXNJbmRleCA9IHJlc3VsdHNcbiAgICAgIHNldFRpbWVvdXQgKCkgLT5cbiAgICAgICAgJHNjb3BlLiRicm9hZGNhc3QoJ3J6U2xpZGVyRm9yY2VSZW5kZXInKVxuICAgICAgLCAxMDAwXG4gICAgICBzZXRUaW1lb3V0ICgpIC0+XG4gICAgICAgICRzY29wZS4kYnJvYWRjYXN0KCdyelNsaWRlckZvcmNlUmVuZGVyJylcbiAgICAgICwgMzAwMCAjIDotLS1EXG4gICAgICBzZXRUaW1lb3V0ICgpIC0+XG4gICAgICAgICRzY29wZS4kYnJvYWRjYXN0KCdyelNsaWRlckZvcmNlUmVuZGVyJylcbiAgICAgICwgNTAwMCAjIDotLS1EXG4gICAgICBjb25zb2xlLmxvZyAnR290IGluZGV4JywgJHNjb3BlLmlyaXNJbmRleFxuICAgICAgJHNjb3BlLnZpZXdwb2ludC5pZGVudGl0eSA9ICRzY29wZS5pcmlzSW5kZXguZ2V0KCRzY29wZS52aWV3cG9pbnQudHlwZSwgJHNjb3BlLnZpZXdwb2ludC52YWx1ZSlcbiAgICAgICRzY29wZS52aWV3cG9pbnQuaWRlbnRpdHkuZ3VuLmdldCgnYXR0cnMnKS5vcGVuIChhdHRycykgLT5cbiAgICAgICAgJHNjb3BlLnZpZXdwb2ludC5hdHRycyA9IGF0dHJzXG4gICAgICAgICRzY29wZS52aWV3cG9pbnQubW9zdFZlcmlmaWVkQXR0cmlidXRlcyA9ICR3aW5kb3cuaXJpc0xpYi5JZGVudGl0eS5nZXRNb3N0VmVyaWZpZWRBdHRyaWJ1dGVzKGF0dHJzKVxuXG4gICAgJHNjb3BlLmxvYWREZWZhdWx0SW5kZXggPSAtPlxuICAgICAgJHNjb3BlLmlyaXNJbmRleCA9IG51bGxcbiAgICAgICRzY29wZS52aWV3cG9pbnQgPSB7dHlwZTogJ2tleUlEJywgdmFsdWU6ICRzY29wZS5kZWZhdWx0SW5kZXhLZXlJRH1cbiAgICAgIHNldEluZGV4IG5ldyAkd2luZG93LmlyaXNMaWIuSW5kZXgoJHNjb3BlLmd1bi51c2VyKCRzY29wZS5kZWZhdWx0SW5kZXhLZXlJRCkuZ2V0KCdpZGVudGlmaScpLCB7aXBmczogJHNjb3BlLmlwZnN9KVxuXG4gICAgJHNjb3BlLmxvZ2luV2l0aEtleSA9IChwcml2YXRlS2V5U2VyaWFsaXplZCwgc2VsZikgLT5cbiAgICAgICRzY29wZS5pcmlzSW5kZXggPSBudWxsXG4gICAgICAkc2NvcGUubG9nZ2luZ0luID0gdHJ1ZVxuICAgICAgJHNjb3BlLnByaXZhdGVLZXkgPSAkd2luZG93LmlyaXNMaWIuS2V5LmZyb21Kd2socHJpdmF0ZUtleVNlcmlhbGl6ZWQpXG4gICAgICBsb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldCgnaXJpc0tleScsIHByaXZhdGVLZXlTZXJpYWxpemVkKVxuICAgICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnVzZXIgPVxuICAgICAgICBpZFR5cGU6ICdrZXlJRCdcbiAgICAgICAgaWRWYWx1ZTogJHdpbmRvdy5pcmlzTGliLktleS5nZXRJZCgkc2NvcGUucHJpdmF0ZUtleSlcbiAgICAgICRzY29wZS5hdXRoZW50aWNhdGlvbi51c2VyLnVybCA9ICRzY29wZS5nZXRJZFVybCAna2V5SUQnLCAkc2NvcGUuYXV0aGVudGljYXRpb24udXNlci5pZFZhbHVlXG4gICAgICAkc2NvcGUubG9naW5Nb2RhbC5jbG9zZSgpIGlmICRzY29wZS5sb2dpbk1vZGFsXG4gICAgICBrZXlJRCA9ICR3aW5kb3cuaXJpc0xpYi5LZXkuZ2V0SWQoJHNjb3BlLnByaXZhdGVLZXkpXG4gICAgICAkc2NvcGUudmlld3BvaW50ID0ge3R5cGU6ICdrZXlJRCcsIHZhbHVlOiBrZXlJRH1cbiAgICAgICRzY29wZS5pZHMubGlzdCA9IFtdXG4gICAgICAkc2NvcGUubXNncy5saXN0ID0gW11cbiAgICAgICRzY29wZS5tc2dzLnNlZW4gPSB7fVxuICAgICAgJHdpbmRvdy5pcmlzTGliLkluZGV4LmNyZWF0ZSgkc2NvcGUuZ3VuLCAkc2NvcGUucHJpdmF0ZUtleSwge3NlbGYsIGlwZnM6ICRzY29wZS5pcGZzfSkudGhlbiAoaSkgLT5cbiAgICAgICAgc2V0SW5kZXgoaSlcbiAgICAgICAgJHNjb3BlLmxvZ2dpbmdJbiA9IGZhbHNlXG4gICAgICAgICRzY29wZS5hdXRoZW50aWNhdGlvbi5pZGVudGl0eSA9ICRzY29wZS5pcmlzSW5kZXguZ2V0KCdrZXlJRCcsIGtleUlEKVxuICAgICAgICAkc2NvcGUuYXV0aGVudGljYXRpb24uaWRlbnRpdHkuZ3VuLmdldCgnYXR0cnMnKS5vcGVuICh2YWwsIGtleSwgbXNnLCBldmUpIC0+XG4gICAgICAgICAgbXZhID0gJHdpbmRvdy5pcmlzTGliLklkZW50aXR5LmdldE1vc3RWZXJpZmllZEF0dHJpYnV0ZXModmFsKVxuICAgICAgICAgICRzY29wZS5hdXRoZW50aWNhdGlvbi5pZGVudGl0eS5tdmEgPSBtdmFcbiAgICAgICAgICBldmUub2ZmKCkgaWYgbXZhLnByb2ZpbGVQaG90b1xuICAgICAgICBzdGFydEF0ID0gbmV3IERhdGUoKVxuICAgICAgICAkc2NvcGUuYXV0aGVudGljYXRpb24uaWRlbnRpdHkuZ3VuLmdldCgncmVjZWl2ZWQnKS5tYXAoKS5vbmNlIChtKSAtPlxuICAgICAgICAgIHJldHVybiBpZiBtLnB1YktleSA9PSAkc2NvcGUudmlld3BvaW50LnZhbHVlXG4gICAgICAgICAgJHdpbmRvdy5pcmlzTGliLk1lc3NhZ2UuZnJvbVNpZyhtKS50aGVuIChtc2cpIC0+XG4gICAgICAgICAgICBpZiBuZXcgRGF0ZShtc2cuc2lnbmVkRGF0YS50aW1lc3RhbXApID4gc3RhcnRBdFxuICAgICAgICAgICAgICBhdXRob3IgPSBtc2cuZ2V0QXV0aG9yKCRzY29wZS5pcmlzSW5kZXgpXG4gICAgICAgICAgICAgICRzY29wZS5zZXRJZGVudGl0eU5hbWVzKGF1dGhvcikudGhlbiAobmFtZSkgLT5cbiAgICAgICAgICAgICAgICAkc2NvcGUubm90aWZpY2F0aW9ucy5jb3VudCArPSAxXG4gICAgICAgICAgICAgICAgTm90aWZpY2F0aW9uU2VydmljZS5jcmVhdGVcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiI3tuYW1lfSBzZW50IHlvdSBhIG1lc3NhZ2UhXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgpIC0+ICRzdGF0ZS5nbyAnaWRlbnRpdGllcy5zaG93JywgeyB0eXBlOiAkc2NvcGUuYXV0aGVudGljYXRpb24udXNlci5pZFR5cGUsIHZhbHVlOiAkc2NvcGUuYXV0aGVudGljYXRpb24udXNlci5pZFZhbHVlIH1cbiAgICAgICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLmlkZW50aXR5Lmd1bi5vbiAoZGF0YSkgLT5cbiAgICAgICAgICBpZiBkYXRhLnJlY2VpdmVkUG9zaXRpdmUgYW5kICRzY29wZS5hdXRoZW50aWNhdGlvbi5pZGVudGl0eS5kYXRhIGFuZCBub3QgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLmlkZW50aXR5LmRhdGEucmVjZWl2ZWRQb3NpdGl2ZVxuICAgICAgICAgICAgY29uc29sZS5sb2cgJ2dyZWF0LCB5b3UgZ290IHlvdXIgZmlyc3QgdXB2b3RlISdcbiAgICAgICAgICAgICMgVE9ETzogbm90aWZpY2F0aW9uXG4gICAgICAgICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLmlkZW50aXR5LmRhdGEgPSBkYXRhXG4gICAgICAuY2F0Y2ggKGUpIC0+XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgICAgICAgJHNjb3BlLmxvZ2dpbmdJbiA9IGZhbHNlXG5cbiAgICBwcml2YXRlS2V5ID0gbG9jYWxTdG9yYWdlU2VydmljZS5nZXQoJ2lyaXNLZXknKSBvciBsb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldCgnaWRlbnRpZmlLZXknKVxuICAgIGlmIHByaXZhdGVLZXlcbiAgICAgICRzY29wZS5sb2dpbldpdGhLZXkocHJpdmF0ZUtleSlcbiAgICBlbHNlXG4gICAgICAkc2NvcGUubG9hZERlZmF1bHRJbmRleCgpXG5cbiAgICAkc2NvcGUudXBkYXRlSXBmc1BlZXJzID0gKCkgLT5cbiAgICAgICRzY29wZS5pcGZzLnN3YXJtLnBlZXJzIChlcnIsIHBlZXJJbmZvcykgLT5cbiAgICAgICAgaWYgZXJyXG4gICAgICAgICAgY29uc29sZS5lcnJvciAnZmFpbGVkIHRvIGZldGNoIGlwZnMgcGVlcnMnLCBlcnJcbiAgICAgICAgZWxzZVxuICAgICAgICAgICRzY29wZS4kYXBwbHkgLT5cbiAgICAgICAgICAgICRzY29wZS5pcGZzUGVlcnMgPSBwZWVySW5mb3NcblxuICAgICRzY29wZS5pcGZzLm9uICdyZWFkeScsIC0+XG4gICAgICAkc2NvcGUuaXBmc1JlYWR5ID0gdHJ1ZVxuICAgICAgJHdpbmRvdy5pcGZzID0gJHNjb3BlLmlwZnNcbiAgICAgICRzY29wZS51cGRhdGVJcGZzUGVlcnMoKVxuICAgICAgc2V0SW50ZXJ2YWwgJHNjb3BlLnVwZGF0ZUlwZnNQZWVycywgNTAwMFxuXG4gICAgJHNjb3BlLmxvY2FsU2V0dGluZ3MgPSBsb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldCgnbG9jYWxTZXR0aW5ncycpIHx8IHt9XG4gICAgJHNjb3BlLmNsb3NlUHJvZmlsZVVwbG9hZE5vdGlmaWNhdGlvbiA9IC0+XG4gICAgICAkc2NvcGUubG9jYWxTZXR0aW5ncy5wcm9maWxlVXBsb2FkTm90aWZpY2F0aW9uQ2xvc2VkID0gdHJ1ZVxuICAgICAgbG9jYWxTdG9yYWdlU2VydmljZS5zZXQoJ2xvY2FsU2V0dGluZ3MnLCAkc2NvcGUubG9jYWxTZXR0aW5ncylcblxuICAgICRzY29wZS5vcGVuUHJvZmlsZVBob3RvVXBsb2FkTW9kYWwgPSAtPlxuICAgICAgcmV0dXJuIHVubGVzcyAkc2NvcGUuYXV0aGVudGljYXRpb24uaWRlbnRpdHlcbiAgICAgICRzY29wZS5vcGVuVXBsb2FkTW9kYWwoJHNjb3BlLnVwbG9hZFByb2ZpbGVQaG90bywgJ1VwbG9hZCBwcm9maWxlIHBob3RvJywgdHJ1ZSlcblxuICAgICRzY29wZS51cGxvYWRQcm9maWxlUGhvdG8gPSAoYmxvYikgLT5cbiAgICAgICRzY29wZS51cGxvYWRGaWxlKGJsb2IpLnRoZW4gKGZpbGVzKSAtPlxuICAgICAgICByZWNpcGllbnQgPVxuICAgICAgICAgIHByb2ZpbGVQaG90bzogJy9pcGZzLycgKyBmaWxlc1swXS5wYXRoXG4gICAgICAgIGlmICRzdGF0ZS5pcyAnaWRlbnRpdGllcy5zaG93J1xuICAgICAgICAgIHJlY2lwaWVudFskc3RhdGVQYXJhbXMudHlwZV0gPSAkc3RhdGVQYXJhbXMudmFsdWVcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHJlY2lwaWVudC5rZXlJRCA9ICRzY29wZS5hdXRoZW50aWNhdGlvbi51c2VyLmlkVmFsdWVcbiAgICAgICAgICAkc2NvcGUuY2xvc2VQcm9maWxlVXBsb2FkTm90aWZpY2F0aW9uKClcbiAgICAgICAgJHdpbmRvdy5pcmlzTGliLk1lc3NhZ2UuY3JlYXRlVmVyaWZpY2F0aW9uKHtyZWNpcGllbnR9LCAkc2NvcGUucHJpdmF0ZUtleSkudGhlbiAobSkgLT5cbiAgICAgICAgICAkc2NvcGUuaGlkZVByb2ZpbGVQaG90byA9IHRydWUgIyBUaGVyZSdzIGEgd2VpcmQgYnVnIHdoZXJlIHRoZSBwcm9maWxlIGlkZW50aWNvbiBkb2Vzbid0IHVwZGF0ZVxuICAgICAgICAgICRzY29wZS5pcmlzSW5kZXguYWRkTWVzc2FnZShtKS50aGVuIC0+XG4gICAgICAgICAgICAkc2NvcGUuaGlkZVByb2ZpbGVQaG90byA9IGZhbHNlXG4gICAgICAgICAgICBpZiAhJHN0YXRlLmlzICdpZGVudGl0aWVzLnNob3cnXG4gICAgICAgICAgICAgICRzdGF0ZS5nbyAnaWRlbnRpdGllcy5zaG93JywgeyB0eXBlOiAkc2NvcGUuYXV0aGVudGljYXRpb24udXNlci5pZFR5cGUsIHZhbHVlOiAkc2NvcGUuYXV0aGVudGljYXRpb24udXNlci5pZFZhbHVlIH1cbiAgICAgICAgICAkc2NvcGUudXBsb2FkTW9kYWwuY2xvc2UoKVxuXG4gICAgJHNjb3BlLnNldFBhZ2VUaXRsZSA9ICh0aXRsZSkgLT5cbiAgICAgICRyb290U2NvcGUucGFnZVRpdGxlID0gJ0lyaXMnXG4gICAgICBpZiAodGl0bGUpXG4gICAgICAgICRyb290U2NvcGUucGFnZVRpdGxlICs9ICcgLSAnICsgdGl0bGVcblxuICAgICRzY29wZS5pcGZzR2V0ID0gKHVyaSwgb3B0aW9ucyA9IHt9KSAtPlxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIChyZXNvbHZlKSAtPlxuICAgICAgICBnbyA9IC0+XG4gICAgICAgICAgJHNjb3BlLmlwZnMuY2F0KHVyaSkudGhlbiAoZmlsZSkgLT5cbiAgICAgICAgICAgIGZpbGUgPSAkc2NvcGUuaXBmcy50eXBlcy5CdWZmZXIoZmlsZSlcbiAgICAgICAgICAgIGlmIG9wdGlvbnMuZ2V0SnNvblxuICAgICAgICAgICAgICBmaWxlID0gSlNPTi5wYXJzZShmaWxlLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICBpZiBvcHRpb25zLmJhc2U2NHR5cGVcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cgb3B0aW9ucy5iYXNlNjR0eXBlXG4gICAgICAgICAgICAgIGZpbGUgPSAnZGF0YTonICsgb3B0aW9ucy5iYXNlNjR0eXBlICsgJztiYXNlNjQsJyArIGZpbGUudG9TdHJpbmcoJ2Jhc2U2NCcpXG4gICAgICAgICAgICByZXNvbHZlIGZpbGVcblxuICAgICAgICBpZiAkc2NvcGUuaXBmc1JlYWR5XG4gICAgICAgICAgZ28oKVxuICAgICAgICBlbHNlXG4gICAgICAgICAgJHNjb3BlLmlwZnMub24gJ3JlYWR5JywgLT5cbiAgICAgICAgICAgIGdvKClcblxuICAgICRzY29wZS4kd2F0Y2ggJ25ld01lc3NhZ2UucmF0aW5nJywgKHJhdGluZykgLT5cbiAgICAgIGlmIHJhdGluZyA+IDBcbiAgICAgICAgYWxwaGEgPSAocmF0aW5nIC0gMC41KSAvIDMgLyAxLjI1ICsgMC4yXG4gICAgICAgICRzY29wZS5uZXdNZXNzYWdlLnN0eWxlID0geydib3JkZXItY29sb3InOiAncmdiYSgyMjMsMjQwLDIxNiwnICsgYWxwaGEgKyAnKSd9XG4gICAgICBlbHNlIGlmIHJhdGluZyA8IDBcbiAgICAgICAgYWxwaGEgPSAocmF0aW5nICsgMC41KSAvIC0zIC8gMS4yNSArIDAuMlxuICAgICAgICAkc2NvcGUubmV3TWVzc2FnZS5zdHlsZSA9IHsnYm9yZGVyLWNvbG9yJzogJ3JnYmEoMjQyLDIyMiwyMjIsJyArIGFscGhhICsgJyknfVxuICAgICAgZWxzZVxuICAgICAgICAkc2NvcGUubmV3TWVzc2FnZS5zdHlsZSA9IHsnYm9yZGVyLWNvbG9yJzogJyNmY2Y4ZTMnfVxuXG4gICAgJHNjb3BlLnJlc2V0TXNnID0gLT5cbiAgICAgICRzY29wZS5uZXdNZXNzYWdlID1cbiAgICAgICAgcmF0aW5nOiAxXG4gICAgICAgIGNvbW1lbnQ6ICcnXG4gICAgICAgIGZpbGVzOiBbXVxuICAgICAgJHNjb3BlLm5ld1ZlcmlmaWNhdGlvbiA9XG4gICAgICAgIHR5cGU6ICcnXG4gICAgICAgIHZhbHVlOiAnJ1xuICAgICRzY29wZS5yZXNldE1zZygpXG5cbiAgICAjIENyZWF0ZSBuZXcgTWVzc2FnZVxuICAgICRzY29wZS5jcmVhdGVNZXNzYWdlID0gKGV2ZW50LCBtc2csIG9wdGlvbnMgPSB7fSkgLT5cbiAgICAgICRzY29wZS5hZGRpbmdNZXNzYWdlID0gdHJ1ZVxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCkgaWYgZXZlbnRcblxuICAgICAgZmlsZVVwbG9hZHMgPSBbXVxuICAgICAgaWYgb3B0aW9ucy5maWxlcyAjIHVwbG9hZCB0byBpcGZzXG4gICAgICAgIG1zZy5hdHRhY2htZW50cyA9IFtdXG4gICAgICAgIGFkZEZpbGUgPSAoZmlsZSkgLT5cbiAgICAgICAgICAkc2NvcGUudXBsb2FkRmlsZShmaWxlKS50aGVuIChyZXMpIC0+XG4gICAgICAgICAgICBpZiByZXMgYW5kIHJlcy5sZW5ndGggYW5kIHJlcy5sZW5ndGggPiAwIGFuZCByZXNbMF0ucGF0aFxuICAgICAgICAgICAgICBtc2cuYXR0YWNobWVudHMucHVzaFxuICAgICAgICAgICAgICAgIHVyaTogJy9pcGZzLycgKyByZXNbMF0ucGF0aFxuICAgICAgICAgICAgICAgIHNpemU6IGZpbGUuc2l6ZVxuICAgICAgICAgICAgICAgIHR5cGU6IGZpbGUudHlwZVxuICAgICAgICAgICAgICAgIG5hbWU6IGZpbGUubmFtZVxuICAgICAgICBmaWxlVXBsb2Fkcy5wdXNoIGFkZEZpbGUoZmlsZSkgZm9yIGZpbGUgaW4gb3B0aW9ucy5maWxlc1xuXG4gICAgICBQcm9taXNlLmFsbChmaWxlVXBsb2FkcykudGhlbiAtPlxuICAgICAgICBjb25zb2xlLmxvZyAnbXNnLmF0dGFjaG1lbnRzJywgbXNnLmF0dGFjaG1lbnRzXG4gICAgICAgICMgQ3JlYXRlIG5ldyBNZXNzYWdlIG9iamVjdFxuICAgICAgICBtZXNzYWdlID0gbnVsbFxuICAgICAgICBkZWxldGUgbXNnLmZpbGVzIGlmIG1zZy5maWxlc1xuICAgICAgICBtc2cucmVjaXBpZW50ID0gbXNnLnJlY2lwaWVudCB8fCB7fVxuICAgICAgICBpZiAkc3RhdGUuaXMgJ2lkZW50aXRpZXMuc2hvdydcbiAgICAgICAgICBpZiBvcHRpb25zLnZlcmlmaWVkQXR0ciBhbmQgJHN0YXRlUGFyYW1zLnR5cGUgPT0gb3B0aW9ucy52ZXJpZmllZEF0dHIudHlwZVxuICAgICAgICAgICAgbXNnLnJlY2lwaWVudFskc3RhdGVQYXJhbXMudHlwZV0gPSBbJHN0YXRlUGFyYW1zLnZhbHVlLCBvcHRpb25zLnZlcmlmaWVkQXR0ci52YWx1ZV1cbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBtc2cucmVjaXBpZW50WyRzdGF0ZVBhcmFtcy50eXBlXSA9ICRzdGF0ZVBhcmFtcy52YWx1ZVxuICAgICAgICAgICAgbXNnLnJlY2lwaWVudFtvcHRpb25zLnZlcmlmaWVkQXR0ci50eXBlXSA9IG9wdGlvbnMudmVyaWZpZWRBdHRyLnZhbHVlIGlmIG9wdGlvbnMudmVyaWZpZWRBdHRyXG4gICAgICAgIGVsc2UgdW5sZXNzICRzdGF0ZS5pcyAnaWRlbnRpdGllcy5jcmVhdGUnXG4gICAgICAgICAgbXNnLnJlY2lwaWVudC5rZXlJRCA9ICRzY29wZS5hdXRoZW50aWNhdGlvbi51c2VyLmlkVmFsdWVcbiAgICAgICAgaWYgbXNnLnR5cGUgPT0gJ3JhdGluZydcbiAgICAgICAgICBtc2cubWF4UmF0aW5nIHw9IDNcbiAgICAgICAgICBtc2cubWluUmF0aW5nIHw9IC0zXG4gICAgICAgICAgbWVzc2FnZSA9ICR3aW5kb3cuaXJpc0xpYi5NZXNzYWdlLmNyZWF0ZVJhdGluZyhtc2csICRzY29wZS5wcml2YXRlS2V5KVxuICAgICAgICBlbHNlIGlmIG1zZy50eXBlID09ICd2ZXJpZmljYXRpb24nXG4gICAgICAgICAgbWVzc2FnZSA9ICR3aW5kb3cuaXJpc0xpYi5NZXNzYWdlLmNyZWF0ZVZlcmlmaWNhdGlvbihtc2csICRzY29wZS5wcml2YXRlS2V5KVxuICAgICAgICBlbHNlXG4gICAgICAgICAgbWVzc2FnZSA9ICR3aW5kb3cuaXJpc0xpYi5NZXNzYWdlLmNyZWF0ZShtc2csICRzY29wZS5wcml2YXRlS2V5KVxuXG4gICAgICAgIG1lc3NhZ2UudGhlbiAobSkgLT5cbiAgICAgICAgICAkc2NvcGUuaXJpc0luZGV4LmFkZE1lc3NhZ2UobSlcbiAgICAgICAgICAkc2NvcGUubXNncy5zZWVuW20uZ2V0SGFzaCgpXSA9IHRydWVcbiAgICAgICAgICAkc2NvcGUucHJvY2Vzc01lc3NhZ2VzKFttXSlcbiAgICAgICAgLnRoZW4gKG1lc3NhZ2VzKSAtPlxuICAgICAgICAgICRzY29wZS5tc2dzLmxpc3QucHVzaChtZXNzYWdlc1swXSlcbiAgICAgICAgICBpZiBvcHRpb25zLmFkZFRvIGFuZCBub3Qgb3B0aW9ucy5hZGRUby5zZWVuW21lc3NhZ2VzWzBdLmdldEhhc2goKV1cbiAgICAgICAgICAgIG9wdGlvbnMuYWRkVG8ubGlzdC5wdXNoIG1lc3NhZ2VzWzBdXG4gICAgICAgICAgICBvcHRpb25zLmFkZFRvLnNlZW5bbWVzc2FnZXNbMF0uZ2V0SGFzaCgpXSA9IHRydWVcbiAgICAgICAgICBpZiAkc2NvcGUuZmlsdGVycy50eXBlIG5vdCBpbiBbbXNnLnR5cGUsIG51bGxdXG4gICAgICAgICAgICAkc2NvcGUuZmlsdGVycy50eXBlID0gbXNnLnR5cGVcbiAgICAgICAgICAkc2NvcGUucmVzZXRNc2coKSAjIHdoeSBub3QgcmVzZXR0aW5nIHVwbG9hZGVkIGZpbGVzPyBEOlxuICAgICAgICAgIG9wdGlvbnMuZmlsZXMgPSBbXSBpZiBvcHRpb25zLmZpbGVzXG4gICAgICAgICAgJHNjb3BlLmFkZGluZ01lc3NhZ2UgPSBmYWxzZVxuICAgICAgICAgIHJldHVybiBtZXNzYWdlXG4gICAgICAgIC5jYXRjaCAoZSkgLT5cbiAgICAgICAgICBjb25zb2xlLmVycm9yKGUpXG4gICAgICAgICAgJHNjb3BlLmVycm9yID0gZVxuICAgICAgICAgICRzY29wZS5hZGRpbmdNZXNzYWdlID0gZmFsc2VcbiAgICAgICAgICByZXR1cm4gbWVzc2FnZVxuXG4gICAgJHNjb3BlLmFkZEF0dHJpYnV0ZSA9IC0+XG4gICAgICAkbG9jYXRpb24ucGF0aCAnIy9pZGVudGl0aWVzL2NyZWF0ZS8nICsgJHNjb3BlLnF1ZXJ5LnRlcm1cblxuICAgICRzY29wZS5sb2dpbiA9IC0+XG4gICAgICAkc2NvcGUuZmlsdGVycy5tYXhEaXN0YW5jZSA9IC0xICMgYmVjYXVzZSB0aGUgdXNlciBkb2Vzbid0IGhhdmUgYSB0cnVzdCBpbmRleCB5ZXRcblxuICAgICRzY29wZS5vcGVuTW9kYWwgPSAobW9kYWxOYW1lLCBvcHRpb25zKSAtPlxuICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24ge3NpemU6ICdsZycsIGFuaW1hdGlvbjogdHJ1ZSwgc2NvcGU6ICRzY29wZX0sIG9wdGlvbnNcbiAgICAgICRzY29wZVttb2RhbE5hbWVdID0gJHVpYk1vZGFsLm9wZW4ob3B0aW9ucylcbiAgICAgICRzY29wZVttb2RhbE5hbWVdLnJlc3VsdC50aGVuICgtPiksICgtPikgIyBhdm9pZCBiYWNrZHJvcCByZWplY3Rpb24gY29uc29sZSBlcnJvclxuICAgICAgJHNjb3BlW21vZGFsTmFtZV0ucmVuZGVyZWQudGhlbiAtPlxuICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKVxuICAgICAgICBmb2N1cyhvcHRpb25zLmZvY3VzVG8pIGlmIG9wdGlvbnMuZm9jdXNUb1xuICAgICAgJHRyYW5zaXRpb25zLm9uU3RhcnQge30sIC0+XG4gICAgICAgICRzY29wZVttb2RhbE5hbWVdLmNsb3NlKClcblxuICAgICRzY29wZS5vcGVuTG9naW5Nb2RhbCA9IC0+XG4gICAgICAkc2NvcGUub3Blbk1vZGFsKCdsb2dpbk1vZGFsJywge3RlbXBsYXRlVXJsOiAnYXBwL21haW4vbG9naW4ubW9kYWwuaHRtbCcsIGZvY3VzVG86ICduZXdVc2VyJ30pXG5cbiAgICAkc2NvcGUub3BlblVwbG9hZE1vZGFsID0gKGNhbGxiYWNrLCBtb2RhbEJ1dHRvblRleHQsIHNxdWFyaWZ5KSAtPlxuICAgICAgJHNjb3BlLnVwbG9hZE1vZGFsQ2FsbGJhY2sgPSBjYWxsYmFja1xuICAgICAgJHNjb3BlLm1vZGFsQnV0dG9uVGV4dCA9IG1vZGFsQnV0dG9uVGV4dCBvciAnVXBsb2FkJ1xuICAgICAgJHNjb3BlLnNxdWFyaWZ5ID0gc3F1YXJpZnlcbiAgICAgICRzY29wZS5vcGVuTW9kYWwoJ3VwbG9hZE1vZGFsJywge3RlbXBsYXRlVXJsOiAnYXBwL2lkZW50aXRpZXMvdXBsb2FkLm1vZGFsLmh0bWwnfSlcblxuICAgICR0cmFuc2l0aW9ucy5vblN0YXJ0IHt9LCAtPlxuICAgICAgJHNjb3BlLmZpbHRlcnMudHlwZSA9IG51bGxcblxuICAgICRzY29wZS5tc2dzLmxpc3QgPSBbXVxuICAgICRzY29wZS5tc2dzLnNlZW4gPSB7fVxuICAgICRzY29wZS5maWx0ZXJlZE1zZ3MgPSBbXVxuICAgICRzY29wZS5sb2FkTXNncyA9IChjdXJzb3IpIC0+XG4gICAgICBsaW1pdCA9IDEwMDBcbiAgICAgIGlmIGN1cnNvciA9PSB1bmRlZmluZWQgYW5kICRzY29wZS5tc2dzLmxpc3QubGVuZ3RoXG4gICAgICAgIGN1cnNvciA9ICRzY29wZS5tc2dzLmxpc3RbJHNjb3BlLm1zZ3MubGlzdC5sZW5ndGggLSAxXS5jdXJzb3JcbiAgICAgIGZvdW5kID0gMFxuICAgICAgJHNjb3BlLmxvYWRpbmdNc2dzID0gdHJ1ZVxuICAgICAgZmlsdGVyID0gZmFsc2VcbiAgICAgICMjI1xuICAgICAgaWYgJHNjb3BlLmZpbHRlcnMudHlwZSA9PSBudWxsXG4gICAgICAgIGZpbHRlciA9IChtKSAtPlxuICAgICAgICAgIHIgPSBtLnNpZ25lZERhdGEudHlwZSBub3QgaW4gWyd2ZXJpZmljYXRpb24nLCAndW52ZXJpZmljYXRpb24nXVxuICAgICAgICAgIGNvbnNvbGUubG9nICdmaWx0ZXJpbicsIHJcbiAgICAgICAgICByZXR1cm4gclxuICAgICAgZWxzZVxuICAgICAgICB0ID0gJHNjb3BlLmZpbHRlcnMudHlwZS5zcGxpdCgnOicpWzBdXG4gICAgICAgIGZpbHRlciA9IChtKSAtPlxuICAgICAgICAgIHIgPSBtLnNpZ25lZERhdGEudHlwZSA9PSB0XG4gICAgICAgICAgY29uc29sZS5sb2cgJ2ZpbHRlcmluJywgclxuICAgICAgICAgIHJldHVybiByXG4gICAgICAjIyNcbiAgICAgIHJlc3VsdEZvdW5kID0gKG1zZykgLT5cbiAgICAgICAgY29uc29sZS5sb2cgJ2dvdCBtc2cnLCBtc2dcbiAgICAgICAgZm91bmQgKz0gMVxuICAgICAgICAjICRzY29wZS5sb2FkaW5nTXNncyA9IGZhbHNlIGlmIGZvdW5kID49IGxpbWl0XG4gICAgICAgIHJldHVybiBpZiAkc2NvcGUubXNncy5zZWVuW21zZy5nZXRIYXNoKCldXG4gICAgICAgICRzY29wZS5tc2dzLnNlZW5bbXNnLmdldEhhc2goKV0gPSB0cnVlXG4gICAgICAgICRzY29wZS5wcm9jZXNzTWVzc2FnZXMgW21zZ11cbiAgICAgICAgJHNjb3BlLiRhcHBseSAtPlxuICAgICAgICAgICRzY29wZS5tc2dzLmxpc3QucHVzaCBtc2dcbiAgICAgICRzY29wZS5pcmlzSW5kZXguZ2V0TWVzc2FnZXNCeVRpbWVzdGFtcChyZXN1bHRGb3VuZCwgbGltaXQpXG5cbiAgICAkc2NvcGUuJHdhdGNoICdpcmlzSW5kZXgnLCAtPlxuICAgICAgcmV0dXJuIHVubGVzcyAkc2NvcGUuaXJpc0luZGV4XG4gICAgICAkc2NvcGUubG9hZE1zZ3MoKVxuICAgICAgJHNjb3BlLnNlYXJjaCgpXG5cbiAgICAkc2NvcGUudXBsb2FkRmlsZSA9IChibG9iKSAtPlxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIChyZXNvbHZlLCByZWplY3QpIC0+XG4gICAgICAgIGZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgICAgIGZpbGVSZWFkZXIub25sb2FkID0gKGV2ZW50KSAtPlxuICAgICAgICAgIGJ1ZmZlciA9ICRzY29wZS5pcGZzLnR5cGVzLkJ1ZmZlci5mcm9tKGV2ZW50LnRhcmdldC5yZXN1bHQpXG4gICAgICAgICAgJHNjb3BlLmlwZnMuYWRkIGJ1ZmZlciwgKGVyciwgZmlsZXMpIC0+XG4gICAgICAgICAgICBpZiBlcnJcbiAgICAgICAgICAgICAgcmVqZWN0KCdhZGRpbmcgdG8gaXBmcyBmYWlsZWQnLCBlcnIpXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgIHJlc29sdmUoZmlsZXMpXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nICdkb25lOicsIGVyciwgZmlsZXNcbiAgICAgICAgZmlsZVJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihibG9iKVxuXG4gICAgJHNjb3BlLmNyZWF0ZVVzZXIgPSAobmFtZSkgLT5cbiAgICAgIHJldHVybiBpZiBuYW1lLmluZGV4T2YoJ3snKSAhPSAtMSBvciBuYW1lLmluZGV4T2YoJ30nKSAhPSAtMSAjIHByZXZlbnQgYWNjaWRlbnRhbCBwcml2YXRlIGtleSBwYXN0ZVxuICAgICAgbmFtZSA9IG5hbWUudHJpbSgpXG4gICAgICAkc2NvcGUuY3JlYXRpbmdVc2VyID0gdHJ1ZVxuICAgICAgc2VsZiA9IHtuYW1lfVxuICAgICAgJHdpbmRvdy5pcmlzTGliLktleS5nZW5lcmF0ZSgpXG4gICAgICAudGhlbiAoa2V5KSAtPlxuICAgICAgICAkc2NvcGUucHJpdmF0ZUtleSA9IGtleVxuICAgICAgICAkc2NvcGUucHJpdmF0ZUtleVNlcmlhbGl6ZWQgPSAkd2luZG93LmlyaXNMaWIuS2V5LnRvSndrKCRzY29wZS5wcml2YXRlS2V5KVxuICAgICAgICBzZWxmLmtleUlEID0gJHdpbmRvdy5pcmlzTGliLktleS5nZXRJZCgkc2NvcGUucHJpdmF0ZUtleSlcbiAgICAgICAgJHNjb3BlLmxvZ2luV2l0aEtleSgkc2NvcGUucHJpdmF0ZUtleVNlcmlhbGl6ZWQsIHNlbGYpXG4gICAgICAudGhlbiAobXNnKSAtPlxuICAgICAgICAkc2NvcGUuY3JlYXRpbmdVc2VyID0gZmFsc2VcbiAgICAgIC5jYXRjaCAoZSkgLT5cbiAgICAgICAgY29uc29sZS5lcnJvcignZmFpbGVkIHRvIGNyZWF0ZSB1c2VyOicsIGUpXG4gICAgICAgICRzY29wZS5jcmVhdGluZ1VzZXIgPSBmYWxzZVxuXG4gICAgJHNjb3BlLmdlbmVyYXRlS2V5ID0gLT5cbiAgICAgICR3aW5kb3cuaXJpc0xpYi5LZXkuZ2VuZXJhdGUoKS50aGVuIChrZXkpIC0+XG4gICAgICAgICRzY29wZS4kYXBwbHkgLT5cbiAgICAgICAgICAkc2NvcGUucHJpdmF0ZUtleSA9IGtleVxuICAgICAgICAgICRzY29wZS5wcml2YXRlS2V5U2VyaWFsaXplZCA9ICR3aW5kb3cuaXJpc0xpYi5LZXkudG9Kd2soJHNjb3BlLnByaXZhdGVLZXkpXG5cbiAgICAkc2NvcGUuZG93bmxvYWQgPSAoZmlsZW5hbWUsIGRhdGEsIHR5cGUsIGNoYXJzZXQgPSAndXRmLTgnKSAtPlxuICAgICAgaGlkZGVuRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgICAgaGlkZGVuRWxlbWVudC5ocmVmID0gXCJkYXRhOiN7dHlwZX07Y2hhcnNldD0je2NoYXJzZXR9LCN7ZW5jb2RlVVJJKGRhdGEpfVwiXG4gICAgICBoaWRkZW5FbGVtZW50LnRhcmdldCA9ICdfYmxhbmsnXG4gICAgICBoaWRkZW5FbGVtZW50LmRvd25sb2FkID0gZmlsZW5hbWVcbiAgICAgIGhpZGRlbkVsZW1lbnQuY2xpY2soKVxuXG4gICAgJHNjb3BlLmRvd25sb2FkVGV4dCA9ICh0ZXh0KSAtPlxuICAgICAgJHNjb3BlLmRvd25sb2FkKCdpcmlzX3ByaXZhdGVfa2V5LnR4dCcsIHRleHQsICd0ZXh0L2NzdicsICd1dGYtOCcpXG5cbiAgICAkc2NvcGUub3BlbkxvZ291dE1vZGFsID0gLT5cbiAgICAgICRzY29wZS5vcGVuTW9kYWwoJ2xvZ291dE1vZGFsJywge3RlbXBsYXRlVXJsOiAnYXBwL21haW4vbG9nb3V0Lm1vZGFsLmh0bWwnfSlcblxuICAgICRzY29wZS5sb2dvdXQgPSAtPlxuICAgICAgJHNjb3BlLmZpbHRlcnMubWF4RGlzdGFuY2UgPSAwXG4gICAgICAkc2NvcGUucHJpdmF0ZUtleVNlcmlhbGl6ZWQgPSAnJ1xuICAgICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uID0ge31cbiAgICAgIGxvY2FsU3RvcmFnZVNlcnZpY2UuY2xlYXJBbGwoKVxuICAgICAgJHN0YXRlLmdvKCdpZGVudGl0aWVzLmxpc3QnKVxuICAgICAgJHNjb3BlLnByaXZhdGVLZXkgPSBudWxsXG4gICAgICAkc2NvcGUucHVibGljS2V5ID0gbnVsbFxuICAgICAgJHNjb3BlLmxvZ291dE1vZGFsLmNsb3NlKClcbiAgICAgICRzY29wZS5sb2FkRGVmYXVsdEluZGV4KClcbiAgICAgICRzY29wZS5sb2NhbFNldHRpbmdzID0ge31cblxuICAgICRzY29wZS5tc2dGaWx0ZXIgPSAobXNnLCBpbmRleCwgYXJyYXkpIC0+XG4gICAgICBkYXRhID0gbXNnLnNpZ25lZERhdGFcbiAgICAgIHJldHVybiBmYWxzZSBpZiBtc2cuc2lnbmVkRGF0YS5yZXBseVRvXG4gICAgICBpZiAkc2NvcGUuZmlsdGVycy50eXBlXG4gICAgICAgIGlmICRzY29wZS5maWx0ZXJzLnR5cGUubWF0Y2ggL15yYXRpbmcvXG4gICAgICAgICAgaWYgZGF0YS50eXBlICE9ICdyYXRpbmcnXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICBuZXV0cmFsUmF0aW5nID0gKGRhdGEubWF4UmF0aW5nICsgZGF0YS5taW5SYXRpbmcpIC8gMlxuICAgICAgICAgIGlmICRzY29wZS5maWx0ZXJzLnR5cGUgPT0gJ3JhdGluZzpwb3NpdGl2ZScgYW5kIGRhdGEucmF0aW5nIDw9IG5ldXRyYWxSYXRpbmdcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgIGVsc2UgaWYgJHNjb3BlLmZpbHRlcnMudHlwZSA9PSAncmF0aW5nOm5lZ2F0aXZlJyBhbmQgZGF0YS5yYXRpbmcgPj0gbmV1dHJhbFJhdGluZ1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgZWxzZSBpZiAkc2NvcGUuZmlsdGVycy50eXBlID09ICdyYXRpbmc6bmV1dHJhbCcgYW5kIGRhdGEucmF0aW5nICE9IG5ldXRyYWxSYXRpbmdcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICBlbHNlIGlmIGRhdGEudHlwZSAhPSAkc2NvcGUuZmlsdGVycy50eXBlXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICBlbHNlXG4gICAgICAgIGlmIGRhdGEudHlwZSBpbiBbJ3ZlcmlmaWNhdGlvbicsICd1bnZlcmlmaWNhdGlvbiddXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICBpZiAkc2NvcGUuZmlsdGVycy5tYXhEaXN0YW5jZSA+IC0xXG4gICAgICAgIGlmIHR5cGVvZiBtc2cuYXV0aG9yVHJ1c3REaXN0YW5jZSAhPSAnbnVtYmVyJ1xuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICBpZiAkc2NvcGUuZmlsdGVycy5tYXhEaXN0YW5jZSA+IDAgYW5kIG1zZy5hdXRob3JUcnVzdERpc3RhbmNlID4gJHNjb3BlLmZpbHRlcnMubWF4RGlzdGFuY2VcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgaWYgJHNjb3BlLmZpbHRlcnMubWF4RGlzdGFuY2UgPT0gMCBhbmQgbXNnLmF1dGhvclRydXN0RGlzdGFuY2UgPT0gOTlcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIHJldHVybiB0cnVlXG5cbiAgICAkc2NvcGUucmVtb3ZlRm9jdXMgPSAoZXZlbnQpIC0+XG4gICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmJsdXIoKVxuXG4gICAgJHNjb3BlLnNldE1zZ1Jhd0RhdGEgPSAobXNnKSAtPlxuICAgICAgc2hvd1Jhd0RhdGEgPVxuICAgICAgICBoYXNoOiBtc2cuaGFzaFxuICAgICAgICBkYXRhOiBtc2cuc2lnbmVkRGF0YVxuICAgICAgICBwcmlvcml0eTogbXNnLnByaW9yaXR5XG4gICAgICAgIGp3czogbXNnLmp3c1xuICAgICAgbXNnLnN0ckRhdGEgPSBKU09OLnN0cmluZ2lmeShzaG93UmF3RGF0YSwgdW5kZWZpbmVkLCAyKVxuXG4gICAgJHNjb3BlLnNoYXJlTWVzc2FnZSA9IChtc2csIGNvbW1lbnQpIC0+XG4gICAgICAkc2NvcGUuY3JlYXRlTWVzc2FnZShudWxsLCB7IHR5cGU6ICdwb3N0Jywgc2hhcmVkTXNnOiBtc2cuZ2V0SGFzaCgpLCBjb21tZW50IH0pLnRoZW4gKHIpIC0+XG4gICAgICAgIG1zZy5zaGFyZXMgPSBtc2cuc2hhcmVzIG9yIHt9XG4gICAgICAgIG1zZy5zaGFyZXNbci5nZXRIYXNoKCldID0gclxuICAgICAgICBtc2cuc2hhcmVzQXJyID0gbXNnLnNoYXJlc0FyciBvciBbXVxuICAgICAgICBtc2cuc2hhcmVzQXJyLnB1c2gocilcbiAgICAgICRzY29wZS5zaGFyZU1vZGFsLmNsb3NlKClcblxuICAgICRzY29wZS5tc2dVdGlscyA9XG4gICAgICBsaWtlOiAobXNnKSAtPlxuICAgICAgICBpZiBtc2cubGlrZWRcbiAgICAgICAgICBtc2cubGlrZWQgPSBmYWxzZVxuICAgICAgICAgIG1zZy5saWtlcyA9IGlmIG1zZy5saWtlcyB0aGVuIG1zZy5saWtlcyAtIDEgZWxzZSAwXG4gICAgICAgICAgJHNjb3BlLmlyaXNJbmRleC5zZXRSZWFjdGlvbihtc2csIG51bGwpXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBtc2cubGlrZWQgPSB0cnVlXG4gICAgICAgICAgbXNnLmxpa2VzID0gaWYgbXNnLmxpa2VzIHRoZW4gbXNnLmxpa2VzICsgMSBlbHNlIDFcbiAgICAgICAgICAkc2NvcGUuaXJpc0luZGV4LnNldFJlYWN0aW9uKG1zZywgJ2xpa2UnKVxuICAgICAgc2hhcmU6IChtc2cpIC0+XG4gICAgICAgICRzY29wZS5tZXNzYWdlID0gbXNnXG4gICAgICAgICRzY29wZS5vcGVuTW9kYWwgJ3NoYXJlTW9kYWwnLCB7IHRlbXBsYXRlVXJsOiAnYXBwL21lc3NhZ2VzL3NoYXJlLm1vZGFsLmh0bWwnLCBzaXplOiAnbWQnIH1cbiAgICAgIHJlcGx5VG86IChtc2csIHJlcGx5KSAtPlxuICAgICAgICAkc2NvcGUuY3JlYXRlTWVzc2FnZShudWxsLCB7XG4gICAgICAgICAgdHlwZTogJ3Bvc3QnLFxuICAgICAgICAgIHJlcGx5VG86IG1zZy5nZXRIYXNoKClcbiAgICAgICAgICBjb21tZW50OiByZXBseVxuICAgICAgICB9KS50aGVuIChyKSAtPlxuICAgICAgICAgIG1zZy5yZXBsaWVzID0gbXNnLnJlcGxpZXMgb3Ige31cbiAgICAgICAgICBtc2cucmVwbGllc1tyLmdldEhhc2goKV0gPSByXG4gICAgICAgICAgbXNnLnJlcGxpZXNBcnIgPSBtc2cucmVwbGllc0FyciBvciBbXVxuICAgICAgICAgIG1zZy5yZXBsaWVzQXJyLnB1c2gocilcblxuICAgICRzY29wZS5vcGVuTWVzc2FnZSA9IChldmVudCwgbWVzc2FnZSwgc2l6ZSkgLT5cbiAgICAgIHQgPSBldmVudC50YXJnZXRcbiAgICAgIHJldHVybiBpZiBhbmd1bGFyLmVsZW1lbnQodCkuY2xvc2VzdCgnYScpLmxlbmd0aFxuICAgICAgJHNjb3BlLnNldE1zZ1Jhd0RhdGEobWVzc2FnZSlcbiAgICAgICRzY29wZS5tZXNzYWdlID0gbWVzc2FnZVxuICAgICAgIyBUT0RPOiBjaGVjayBzaWdcbiAgICAgICRzY29wZS5tZXNzYWdlLnJlY2lwaWVudCA9ICRzY29wZS5tZXNzYWdlLmdldFJlY2lwaWVudCgkc2NvcGUuaXJpc0luZGV4KVxuICAgICAgJHNjb3BlLm1lc3NhZ2UucmVjaXBpZW50Lmd1bi5nZXQoJ2F0dHJzJykub3BlbiAoZCkgLT5cbiAgICAgICAgbXZhID0gJHdpbmRvdy5pcmlzTGliLklkZW50aXR5LmdldE1vc3RWZXJpZmllZEF0dHJpYnV0ZXMoZClcbiAgICAgICAgaWYgbXZhLm5hbWVcbiAgICAgICAgICAkc2NvcGUuJGFwcGx5IC0+ICRzY29wZS5tZXNzYWdlLnJlY2lwaWVudF9uYW1lID0gbXZhLm5hbWUuYXR0cmlidXRlLnZhbHVlXG4gICAgICAgIGVsc2UgaWYgbXZhLm5pY2tuYW1lXG4gICAgICAgICAgJHNjb3BlLiRhcHBseSAtPiAkc2NvcGUubWVzc2FnZS5yZWNpcGllbnRfbmFtZSA9IG12YS5uaWNrbmFtZS5hdHRyaWJ1dGUudmFsdWVcbiAgICAgICRzY29wZS5tZXNzYWdlLnNpZ25lcktleUlEID0gJHNjb3BlLm1lc3NhZ2UuZ2V0U2lnbmVyS2V5SUQoKVxuICAgICAgJHNjb3BlLm1lc3NhZ2UudmVyaWZpZWRCeSA9ICRzY29wZS5pcmlzSW5kZXguZ2V0KCdrZXlJRCcsICRzY29wZS5tZXNzYWdlLnNpZ25lcktleUlEKVxuICAgICAgJHNjb3BlLm1lc3NhZ2UudmVyaWZpZWRCeUF0dHIgPSBuZXcgJHdpbmRvdy5pcmlzTGliLkF0dHJpYnV0ZSgna2V5SUQnLCAkc2NvcGUubWVzc2FnZS5zaWduZXJLZXlJRClcbiAgICAgICRzY29wZS5vcGVuTW9kYWwoJ21lc3NhZ2VNb2RhbCcsIHt0ZW1wbGF0ZVVybDogJ2FwcC9tZXNzYWdlcy9zaG93Lm1vZGFsLmh0bWwnfSlcblxuICAgICRzY29wZS5maWx0ZXJzID0gJHNjb3BlLmZpbHRlcnMgb3IgY29uZmlnLmRlZmF1bHRGaWx0ZXJzXG5cbiAgICAkc2NvcGUuaXNDb2xsYXBzZWQgPSBmYWxzZVxuICAgICMgJHNjb3BlLm1lbnUgPSBNZW51cy5nZXRNZW51KCd0b3BiYXInKVxuXG4gICAgJHNjb3BlLnRvZ2dsZUNvbGxhcHNpYmxlTWVudSA9IC0+XG4gICAgICAkc2NvcGUuaXNDb2xsYXBzZWQgPSAhJHNjb3BlLmlzQ29sbGFwc2VkXG5cbiAgICAkc2NvcGUucHJvY2Vzc01lc3NhZ2VzID0gKG1lc3NhZ2VzLCBtc2dPcHRpb25zID0ge30sIG9wdGlvbnMgPSB7fSkgLT5cbiAgICAgIHByb2Nlc3NNZXNzYWdlID0gKG1zZykgLT5cbiAgICAgICAgbXNnLmxpa2VzID0gMFxuICAgICAgICB1cGRhdGVSZWFjdGlvbnMgPSAocmVhY3Rpb25zKSAtPlxuICAgICAgICAgIGxpa2VzID0gMFxuICAgICAgICAgIGxpa2VkID0gZmFsc2VcbiAgICAgICAgICBmb3IgaywgdiBvZiByZWFjdGlvbnNcbiAgICAgICAgICAgIGlmIHYgPT0gJ2xpa2UnXG4gICAgICAgICAgICAgIGxpa2VzKytcbiAgICAgICAgICAgICAgbGlrZWQgPSB0cnVlIGlmIGsgPT0gJHNjb3BlLnZpZXdwb2ludC52YWx1ZSBhbmQgdiA9PSAnbGlrZSdcbiAgICAgICAgICAkc2NvcGUuJGFwcGx5IC0+XG4gICAgICAgICAgICBtc2cubGlrZXMgPSBsaWtlc1xuICAgICAgICAgICAgbXNnLmxpa2VkID0gbGlrZWRcbiAgICAgICAgaWYgbXNnLnNpZ25lZERhdGEuc2hhcmVkTXNnIGFuZCBub3Qgb3B0aW9ucy5ub1JlY3Vyc2lvblxuICAgICAgICAgICRzY29wZS5pcmlzSW5kZXguZ3VuLmJhY2soLTEpLmdldCgnbWVzc2FnZXNCeUhhc2gnKS5nZXQobXNnLnNpZ25lZERhdGEuc2hhcmVkTXNnKS50aGVuIChyYXdTaGFyZWRNc2cpIC0+XG4gICAgICAgICAgICAkd2luZG93LmlyaXNMaWIuTWVzc2FnZS5mcm9tU2lnKHJhd1NoYXJlZE1zZykudGhlbiAoc2hhcmVkTXNnKSAtPlxuICAgICAgICAgICAgICBwcm9jZXNzTWVzc2FnZSBzaGFyZWRNc2csIG51bGwsIHsgbm9SZWN1cnNpb246IHRydWUgfVxuICAgICAgICAgICAgICAkc2NvcGUuJGFwcGx5IC0+IG1zZy5zaGFyZWRNc2cgPSBzaGFyZWRNc2dcbiAgICAgICAgdXBkYXRlUmVhY3Rpb25zKG1zZy5yZWFjdGlvbnMpIGlmIG1zZy5yZWFjdGlvbnNcbiAgICAgICAgbXNnLnJlcGxpZXNBcnIgPSBtc2cucmVwbGllc0FyciBvciBbXVxuICAgICAgICBtc2cucmVwbGllcyA9IG1zZy5yZXBsaWVzIG9yIHt9XG4gICAgICAgIG1zZy5zaGFyZXNBcnIgPSBtc2cuc2hhcmVzQXJyIG9yIFtdXG4gICAgICAgIG1zZy5zaGFyZXMgPSBtc2cuc2hhcmVzIG9yIHt9XG4gICAgICAgIHVwZGF0ZVJlcGxpZXMgPSAocmVwbGllcykgLT5cbiAgICAgICAgICBmb3IgaGFzaCwgcmVwbHlSYXcgb2YgcmVwbGllc1xuICAgICAgICAgICAgJHdpbmRvdy5pcmlzTGliLk1lc3NhZ2UuZnJvbVNpZyhyZXBseVJhdykudGhlbiAocikgLT5cbiAgICAgICAgICAgICAgdW5sZXNzIG1zZy5yZXBsaWVzW3IuZ2V0SGFzaCgpXSBhbmQgbXNnLnJlcGxpZXNbci5nZXRIYXNoKCldLmF1dGhvclxuICAgICAgICAgICAgICAgIG1zZy5yZXBsaWVzW3IuZ2V0SGFzaCgpXSA9IHJcbiAgICAgICAgICAgICAgICBwcm9jZXNzTWVzc2FnZSByXG4gICAgICAgICAgICAgICAgJHNjb3BlLiRhcHBseSAtPiBtc2cucmVwbGllc0Fyci5wdXNoKHIpXG4gICAgICAgIHVwZGF0ZVNoYXJlcyA9IChzaGFyZXMpIC0+XG4gICAgICAgICAgZm9yIGhhc2gsIHNoYXJlUmF3IG9mIHNoYXJlc1xuICAgICAgICAgICAgJHdpbmRvdy5pcmlzTGliLk1lc3NhZ2UuZnJvbVNpZyhzaGFyZVJhdykudGhlbiAocikgLT5cbiAgICAgICAgICAgICAgdW5sZXNzIG1zZy5zaGFyZXNbci5nZXRIYXNoKCldIGFuZCBtc2cuc2hhcmVzW3IuZ2V0SGFzaCgpXS5hdXRob3JcbiAgICAgICAgICAgICAgICBtc2cuc2hhcmVzW3IuZ2V0SGFzaCgpXSA9IHJcbiAgICAgICAgICAgICAgICBwcm9jZXNzTWVzc2FnZSByXG4gICAgICAgICAgICAgICAgJHNjb3BlLiRhcHBseSAtPiBtc2cuc2hhcmVzQXJyLnB1c2gocilcbiAgICAgICAgaWYgbXNnLmd1blxuICAgICAgICAgIG1zZy5ndW4uZ2V0KCdyZXBsaWVzJykub3BlbiB1cGRhdGVSZXBsaWVzXG4gICAgICAgICAgbXNnLmd1bi5nZXQoJ3JlYWN0aW9ucycpLm9uIHVwZGF0ZVJlYWN0aW9uc1xuICAgICAgICAgIG1zZy5ndW4uZ2V0KCdzaGFyZXMnKS5vcGVuIHVwZGF0ZVNoYXJlc1xuICAgICAgICBtc2cuYXV0aG9yID0gbXNnLmdldEF1dGhvcigkc2NvcGUuaXJpc0luZGV4KVxuICAgICAgICBtc2cuYXV0aG9yLmd1bi5nZXQoJ3RydXN0RGlzdGFuY2UnKS5vbiAoZCkgLT4gbXNnLmF1dGhvclRydXN0RGlzdGFuY2UgPSBkXG4gICAgICAgIG1zZy5hdXRob3IuZ3VuLmdldCgnYXR0cnMnKS5vcGVuIChkKSAtPlxuICAgICAgICAgIG12YSA9ICR3aW5kb3cuaXJpc0xpYi5JZGVudGl0eS5nZXRNb3N0VmVyaWZpZWRBdHRyaWJ1dGVzKGQpXG4gICAgICAgICAgaWYgbXZhLm5hbWVcbiAgICAgICAgICAgICRzY29wZS4kYXBwbHkgLT4gbXNnLmF1dGhvcl9uYW1lID0gbXZhLm5hbWUuYXR0cmlidXRlLnZhbHVlXG4gICAgICAgICAgZWxzZSBpZiBtdmEubmlja25hbWVcbiAgICAgICAgICAgICRzY29wZS4kYXBwbHkgLT4gbXNnLmF1dGhvcl9uYW1lID0gbXZhLm5pY2tuYW1lLmF0dHJpYnV0ZS52YWx1ZVxuICAgICAgICBtc2cucmVjaXBpZW50ID0gbXNnLmdldFJlY2lwaWVudCgkc2NvcGUuaXJpc0luZGV4KVxuICAgICAgICBtc2cucmVjaXBpZW50Lmd1bi5nZXQoJ2F0dHJzJykub3BlbiAoZCkgLT5cbiAgICAgICAgICBtdmEgPSAkd2luZG93LmlyaXNMaWIuSWRlbnRpdHkuZ2V0TW9zdFZlcmlmaWVkQXR0cmlidXRlcyhkKVxuICAgICAgICAgIGlmIG12YS5uYW1lXG4gICAgICAgICAgICAkc2NvcGUuJGFwcGx5IC0+IG1zZy5yZWNpcGllbnRfbmFtZSA9IG12YS5uYW1lLmF0dHJpYnV0ZS52YWx1ZVxuICAgICAgICAgIGVsc2UgaWYgbXZhLm5pY2tuYW1lXG4gICAgICAgICAgICAkc2NvcGUuJGFwcGx5IC0+IG1zZy5yZWNpcGllbnRfbmFtZSA9IG12YS5uaWNrbmFtZS5hdHRyaWJ1dGUudmFsdWVcbiAgICAgICAgaWYgbXNnLnNpZ25lZERhdGEuYXR0YWNobWVudHNcbiAgICAgICAgICBtc2cuYXR0YWNobWVudHMgPSBbXVxuICAgICAgICAgIGFkZEF0dGFjaG1lbnQgPSAoYXR0YWNobWVudCkgLT5cbiAgICAgICAgICAgIGlmIGF0dGFjaG1lbnQudXJpXG4gICAgICAgICAgICAgIHR5cGUgPSBhdHRhY2htZW50LnR5cGUgb3IgJ2ltYWdlJ1xuICAgICAgICAgICAgICB0eXBlU3Vic3RyID0gYXR0YWNobWVudC50eXBlLnN1YnN0cigwLDUpXG4gICAgICAgICAgICAgICRzY29wZS5pcGZzR2V0KGF0dGFjaG1lbnQudXJpLCB7YmFzZTY0dHlwZTogdHlwZX0pLnRoZW4gKHNyYykgLT5cbiAgICAgICAgICAgICAgICAkc2NvcGUuJGFwcGx5IC0+XG4gICAgICAgICAgICAgICAgICBtc2cuYXR0YWNobWVudHMucHVzaCBPYmplY3QuYXNzaWduIHtzcmMsIHR5cGUsIHR5cGVTdWJzdHJ9LCBhdHRhY2htZW50XG4gICAgICAgICAgYWRkQXR0YWNobWVudChhdHRhY2htZW50KSBmb3IgYXR0YWNobWVudCBpbiBtc2cuc2lnbmVkRGF0YS5hdHRhY2htZW50c1xuICAgICAgICAkc2NvcGUuJGFwcGx5IC0+XG4gICAgICAgICAgIyBUT0RPOiBtYWtlIHN1cmUgbWVzc2FnZSBzaWduYXR1cmUgaXMgY2hlY2tlZFxuICAgICAgICAgIGkgPSB1bmRlZmluZWRcbiAgICAgICAgICBpID0gMFxuICAgICAgICAgIHNtYWxsZXN0SW5kZXggPSAxMDAwXG4gICAgICAgICAgbXNnLmF1dGhvckFycmF5ID0gbXNnLmdldEF1dGhvckFycmF5KClcbiAgICAgICAgICBmb3IgYSBpbiBtc2cuYXV0aG9yQXJyYXlcbiAgICAgICAgICAgIG1zZy5saW5rVG9BdXRob3IgPSBhIHVubGVzcyBtc2cubGlua1RvQXV0aG9yXG4gICAgICAgICAgICBpbmRleCA9IE9iamVjdC5rZXlzKCR3aW5kb3cuaXJpc0xpYi5BdHRyaWJ1dGUuZ2V0VW5pcXVlSWRWYWxpZGF0b3JzKCkpLmluZGV4T2YoYS50eXBlKVxuICAgICAgICAgICAgaWYgaW5kZXggPiAtMSBhbmQgaW5kZXggPCBzbWFsbGVzdEluZGV4XG4gICAgICAgICAgICAgIHNtYWxsZXN0SW5kZXggPSBpbmRleFxuICAgICAgICAgICAgICBtc2cubGlua1RvQXV0aG9yID0gYVxuICAgICAgICAgICAgZWxzZSBpZiAhbXNnLmF1dGhvcl9uYW1lIGFuZCBhLnR5cGUgaW4gWyduYW1lJywgJ25pY2tuYW1lJ11cbiAgICAgICAgICAgICAgbXNnLmF1dGhvcl9uYW1lID0gYS52YWx1ZVxuICAgICAgICAgICAgaSsrXG4gICAgICAgICAgaSA9IDBcbiAgICAgICAgICBzbWFsbGVzdEluZGV4ID0gMTAwMFxuICAgICAgICAgIG1zZy5yZWNpcGllbnRBcnJheSA9IG1zZy5nZXRSZWNpcGllbnRBcnJheSgpXG4gICAgICAgICAgZm9yIGEgaW4gbXNnLnJlY2lwaWVudEFycmF5XG4gICAgICAgICAgICBtc2cubGlua1RvUmVjaXBpZW50ID0gYSB1bmxlc3MgbXNnLmxpbmtUb0F1dGhvclxuICAgICAgICAgICAgaW5kZXggPSBPYmplY3Qua2V5cygkd2luZG93LmlyaXNMaWIuQXR0cmlidXRlLmdldFVuaXF1ZUlkVmFsaWRhdG9ycygpKS5pbmRleE9mKGEudHlwZSlcbiAgICAgICAgICAgIGlmIGluZGV4ID4gLTEgYW5kIGluZGV4IDwgc21hbGxlc3RJbmRleFxuICAgICAgICAgICAgICBzbWFsbGVzdEluZGV4ID0gaW5kZXhcbiAgICAgICAgICAgICAgbXNnLmxpbmtUb1JlY2lwaWVudCA9IGFcbiAgICAgICAgICAgIGVsc2UgaWYgIW1zZy5yZWNpcGllbnRfbmFtZSBhbmQgYS50eXBlIGluIFsnbmFtZScsICduaWNrbmFtZSddXG4gICAgICAgICAgICAgIG1zZy5yZWNpcGllbnRfbmFtZSA9IGEudmFsdWVcbiAgICAgICAgICAgIGkrK1xuICAgICAgICAgIGlmIG1zZy5saW5rVG9BdXRob3IuZXF1YWxzKG1zZy5saW5rVG9SZWNpcGllbnQpXG4gICAgICAgICAgICBtc2cuc2FtZUF1dGhvckFuZFJlY2lwaWVudCA9IHRydWVcbiAgICAgICAgICBpZiAhbXNnLmF1dGhvcl9uYW1lXG4gICAgICAgICAgICBtc2cuYXV0aG9yX25hbWUgPSBtc2cubGlua1RvQXV0aG9yLnZhbHVlXG4gICAgICAgICAgICBpZiBtc2cubGlua1RvQXV0aG9yLnR5cGUgaW4gWydrZXlJRCcsICd1dWlkJ11cbiAgICAgICAgICAgICAgbXNnLmF1dGhvcl9uYW1lID0gbXNnLmF1dGhvcl9uYW1lLnNsaWNlKDAsIDYpICsgJy4uLidcbiAgICAgICAgICBpZiAhbXNnLnJlY2lwaWVudF9uYW1lXG4gICAgICAgICAgICBtc2cucmVjaXBpZW50X25hbWUgPSBtc2cubGlua1RvUmVjaXBpZW50LnZhbHVlXG4gICAgICAgICAgICBpZiBtc2cubGlua1RvQXV0aG9yLnR5cGUgaW4gWydrZXlJRCcsICd1dWlkJ11cbiAgICAgICAgICAgICAgbXNnLnJlY2lwaWVudF9uYW1lID0gbXNnLnJlY2lwaWVudF9uYW1lLnNsaWNlKDAsIDYpICsgJy4uLidcbiAgICAgICAgICBhbHBoYSA9IHVuZGVmaW5lZFxuICAgICAgICAgIG1zZy5pY29uU3R5bGUgPSAnJ1xuICAgICAgICAgIG1zZy5iZ0NvbG9yID0gJydcbiAgICAgICAgICBtc2cuaWNvbkNvdW50ID0gbmV3IEFycmF5KDEpXG4gICAgICAgICAgc3dpdGNoIG1zZy5zaWduZWREYXRhLnR5cGVcbiAgICAgICAgICAgIHdoZW4gJ3ZlcmlmeV9pZGVudGl0eScsICd2ZXJpZmljYXRpb24nXG4gICAgICAgICAgICAgIG1zZy5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1vay1zaWduJ1xuICAgICAgICAgICAgICBtc2cuaXNWZXJpZmljYXRpb24gPSB0cnVlXG4gICAgICAgICAgICB3aGVuICd1bnZlcmlmeV9pZGVudGl0eScsICd1bnZlcmlmaWNhdGlvbidcbiAgICAgICAgICAgICAgbXNnLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBuZWdhdGl2ZSdcbiAgICAgICAgICAgICAgbXNnLmJnQ29sb3IgPSAnYmFja2dyb3VuZC1jb2xvcjogI0ZGRjBERTtib3JkZXItY29sb3I6I0ZGRTJDNjsnXG4gICAgICAgICAgICAgIG1zZy5pc1VudmVyaWZpY2F0aW9uID0gdHJ1ZVxuICAgICAgICAgICAgd2hlbiAncG9zdCdcbiAgICAgICAgICAgICAgbXNnLmljb25TdHlsZSA9ICdmYSBmYS1wZW5jaWwnXG4gICAgICAgICAgICAgIG1zZy5pc1Bvc3QgPSB0cnVlXG4gICAgICAgICAgICB3aGVuICdyYXRpbmcnXG4gICAgICAgICAgICAgIHJhdGluZyA9IG1zZy5zaWduZWREYXRhLnJhdGluZ1xuICAgICAgICAgICAgICBuZXV0cmFsUmF0aW5nID0gKG1zZy5zaWduZWREYXRhLm1pblJhdGluZyArIG1zZy5zaWduZWREYXRhLm1heFJhdGluZykgLyAyXG4gICAgICAgICAgICAgIG1heFJhdGluZ0RpZmYgPSBtc2cuc2lnbmVkRGF0YS5tYXhSYXRpbmcgLSBuZXV0cmFsUmF0aW5nXG4gICAgICAgICAgICAgIG1pblJhdGluZ0RpZmYgPSBtc2cuc2lnbmVkRGF0YS5taW5SYXRpbmcgLSBuZXV0cmFsUmF0aW5nXG4gICAgICAgICAgICAgIGlmIHJhdGluZyA+IG5ldXRyYWxSYXRpbmdcbiAgICAgICAgICAgICAgICBpZiBtc2cuc2lnbmVkRGF0YS5jb250ZXh0ID09ICd2ZXJpZmllcidcbiAgICAgICAgICAgICAgICAgIG1zZy5pY29uU3R5bGUgPSAnZmEgZmEtc2hpZWxkIHBvc2l0aXZlJ1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgIG1zZy5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi10aHVtYnMtdXAgcG9zaXRpdmUnXG4gICAgICAgICAgICAgICAgICBtc2cuaWNvbkNvdW50ID0gaWYgbWF4UmF0aW5nRGlmZiA8IDIgdGhlbiBtc2cuaWNvbkNvdW50IGVsc2UgbmV3IEFycmF5KE1hdGguY2VpbCgzICogcmF0aW5nIC8gbWF4UmF0aW5nRGlmZikpXG4gICAgICAgICAgICAgICAgYWxwaGEgPSAocmF0aW5nIC0gbmV1dHJhbFJhdGluZyAtIDAuNSkgLyBtYXhSYXRpbmdEaWZmIC8gMS4yNSArIDAuMlxuICAgICAgICAgICAgICAgIG1zZy5iZ0NvbG9yID0gJ2JhY2tncm91bmQtY29sb3I6IHJnYmEoMjIzLDI0MCwyMTYsJyArIGFscGhhICsgJyk7J1xuICAgICAgICAgICAgICBlbHNlIGlmIHJhdGluZyA8IG5ldXRyYWxSYXRpbmdcbiAgICAgICAgICAgICAgICBtc2cuaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tdGh1bWJzLWRvd24gbmVnYXRpdmUnXG4gICAgICAgICAgICAgICAgbXNnLmljb25Db3VudCA9IGlmIG1pblJhdGluZ0RpZmYgPiAtMiB0aGVuIG1zZy5pY29uQ291bnQgZWxzZSBuZXcgQXJyYXkoTWF0aC5jZWlsKDMgKiByYXRpbmcgLyBtaW5SYXRpbmdEaWZmKSlcbiAgICAgICAgICAgICAgICBhbHBoYSA9IChyYXRpbmcgLSBuZXV0cmFsUmF0aW5nICsgMC41KSAvIG1pblJhdGluZ0RpZmYgLyAxLjI1ICsgMC4yXG4gICAgICAgICAgICAgICAgbXNnLmJnQ29sb3IgPSAnYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI0MiwyMjIsMjIyLCcgKyBhbHBoYSArICcpOydcbiAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIG1zZy5iZ0NvbG9yID0gJ2JhY2tncm91bmQtY29sb3I6ICNmY2Y4ZTM7J1xuICAgICAgICAgICAgICAgIG1zZy5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1xdWVzdGlvbi1zaWduIG5ldXRyYWwnXG5cbiAgICAgIGFuZ3VsYXIuZm9yRWFjaCBtZXNzYWdlcywgKG1zZywga2V5KSAtPlxuICAgICAgICBtc2dba10gPSB2IGZvciBrLCB2IG9mIG1zZ09wdGlvbnNcbiAgICAgICAgcHJvY2Vzc01lc3NhZ2UobXNnKVxuXG4gICAgICByZXR1cm4gbWVzc2FnZXNcblxuICAgICMgQ29sbGFwc2luZyB0aGUgbWVudSBhZnRlciBuYXZpZ2F0aW9uXG4gICAgJHNjb3BlLiRvbiAnJHN0YXRlQ2hhbmdlU3VjY2VzcycsIC0+XG4gICAgICAkc2NvcGUuaXNDb2xsYXBzZWQgPSBmYWxzZVxuXG4gICAgc2Nyb2xsVG8gPSAoZWwpIC0+XG4gICAgICBpZiAhZWxcbiAgICAgICAgcmV0dXJuXG4gICAgICBwb3MgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgaWYgcG9zLnRvcFxuICAgICAgICBpZiBwb3MudG9wIC0gNjAgPCAkd2luZG93LnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgJHdpbmRvdy5zY3JvbGxUbyAwLCBwb3MudG9wIC0gNjBcbiAgICAgICAgZWxzZSBpZiBwb3MuYm90dG9tID4gJHdpbmRvdy5wYWdlWU9mZnNldCArICgkd2luZG93LmlubmVySGVpZ2h0IG9yIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpXG4gICAgICAgICAgJHdpbmRvdy5zY3JvbGxUbyAwLCBwb3MuYm90dG9tIC0gKCR3aW5kb3cuaW5uZXJIZWlnaHQgb3IgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkgKyAxNVxuICAgICAgcmV0dXJuXG5cbiAgICAjIHNob3VsZCBiZSBtb3ZlZCB0byBpcmlzLWxpYj9cbiAgICAkc2NvcGUuc2V0SWRlbnRpdHlOYW1lcyA9IChpLCBodG1sU2FmZSwgc2V0VGl0bGUpIC0+XG4gICAgICBpLnZlcmlmaWVkID0gZmFsc2VcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSAocmVzb2x2ZSkgLT5cbiAgICAgICAgaS5ndW4uZ2V0KCdhdHRycycpLm9wZW4gKGF0dHJzKSAtPlxuICAgICAgICAgICRzY29wZS4kYXBwbHkgLT5cbiAgICAgICAgICAgIG12YSA9ICR3aW5kb3cuaXJpc0xpYi5JZGVudGl0eS5nZXRNb3N0VmVyaWZpZWRBdHRyaWJ1dGVzKGF0dHJzKVxuICAgICAgICAgICAgaWYgbXZhLm5hbWVcbiAgICAgICAgICAgICAgaS5wcmltYXJ5TmFtZSA9IG12YS5uYW1lLmF0dHJpYnV0ZS52YWx1ZVxuICAgICAgICAgICAgICBpLmhhc1Byb3Blck5hbWUgPSB0cnVlXG4gICAgICAgICAgICAgIGkudmVyaWZpZWQgPSB0cnVlIGlmIG12YS5uYW1lLnZlcmlmaWVkXG4gICAgICAgICAgICBlbHNlIGlmIG12YS5uaWNrbmFtZVxuICAgICAgICAgICAgICBpLnByaW1hcnlOYW1lID0gbXZhLm5pY2tuYW1lLmF0dHJpYnV0ZS52YWx1ZVxuICAgICAgICAgICAgICBpLmhhc1Byb3Blck5hbWUgPSB0cnVlXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgIGEgPSBPYmplY3QudmFsdWVzKGF0dHJzKVswXVxuICAgICAgICAgICAgICBpLnByaW1hcnlOYW1lID0gYS52YWx1ZVxuICAgICAgICAgICAgICBpLnByaW1hcnlOYW1lID0gaS5wcmltYXJ5TmFtZS5zbGljZSgwLDYpICsgJy4uLicgaWYgYS50eXBlIGluIFsna2V5SUQnLCAndXVpZCddXG4gICAgICAgICAgICBpZiBpLnByaW1hcnlOYW1lXG4gICAgICAgICAgICAgIGlmIG12YS5uaWNrbmFtZSBhbmQgbXZhLm5pY2tuYW1lLmF0dHJpYnV0ZS52YWx1ZSAhPSBpLnByaW1hcnlOYW1lXG4gICAgICAgICAgICAgICAgaS5uaWNrbmFtZSA9IG12YS5uaWNrbmFtZS5hdHRyaWJ1dGUudmFsdWVcbiAgICAgICAgICAgICAgICBpLm5pY2tuYW1lID0gaS5uaWNrbmFtZS5yZXBsYWNlKCc8JywgJyZsdDsnKSBpZiBodG1sU2FmZVxuICAgICAgICAgICAgICBpLnByaW1hcnlOYW1lID0gaS5wcmltYXJ5TmFtZS5yZXBsYWNlKCc8JywgJyZsdDsnKSBpZiBodG1sU2FmZVxuICAgICAgICAgICAgJHNjb3BlLnNldFBhZ2VUaXRsZSBpLnByaW1hcnlOYW1lIGlmIHNldFRpdGxlXG4gICAgICAgICAgICByZXNvbHZlIGkucHJpbWFyeU5hbWVcblxuICAgICRzY29wZS5zZWFyY2hLZXlkb3duID0gKGV2ZW50KSAtPlxuICAgICAgc3dpdGNoIChpZiBldmVudCB0aGVuIGV2ZW50LndoaWNoIGVsc2UgLTEpXG4gICAgICAgIHdoZW4gMzhcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgaWYgJHNjb3BlLmlkcy5hY3RpdmVLZXkgPiAtMVxuICAgICAgICAgICAgJHNjb3BlLmFkZEVudHJ5QWN0aXZlID0gZmFsc2VcbiAgICAgICAgICAgICRzY29wZS5pZHMuYWN0aXZlS2V5LS1cbiAgICAgICAgICAgIGlkID0gaWYgJHNjb3BlLmlkcy5hY3RpdmVLZXkgPiAtMSB0aGVuICdyZXN1bHQnICsgJHNjb3BlLmlkcy5hY3RpdmVLZXkgZWxzZSAnY3JlYXRlSWRSb3cnXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgICB3aGVuIDQwXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGlmICgkc2NvcGUuaWRzLmFjdGl2ZUtleSA8ICgkc2NvcGUuaWRzLmxpc3QubGVuZ3RoKSAtIDEpIGFuZCAkc2NvcGUuaWRzLmFjdGl2ZUtleSA8ICRzY29wZS5maWx0ZXJzLmxpbWl0XG4gICAgICAgICAgICAkc2NvcGUuaWRzLmFjdGl2ZUtleSsrXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdCcgKyAkc2NvcGUuaWRzLmFjdGl2ZUtleSkuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgICB3aGVuIDEzXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGlmICRzY29wZS5pZHMuYWN0aXZlS2V5ID09IC0xXG4gICAgICAgICAgICAkc3RhdGUuZ28gJ2lkZW50aXRpZXMuY3JlYXRlJ1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQnICsgJHNjb3BlLmlkcy5hY3RpdmVLZXkpLmNsaWNrKClcbiAgICAgICAgd2hlbiAtMVxuICAgICAgICAgIGNsZWFyVGltZW91dCAkc2NvcGUudGltZXJcbiAgICAgICAgICAkc2NvcGUucXVlcnkudGVybSA9ICcnXG4gICAgICAgICAgJHNjb3BlLnNlYXJjaCgpXG4gICAgICAgIHdoZW4gMzMsIDM0LCAzNSwgMzYsIDM3LCAzOVxuICAgICAgICBlbHNlXG4gICAgICAgICAgZWwgPSBhbmd1bGFyLmVsZW1lbnQoZXZlbnQuY3VycmVudFRhcmdldClcbiAgICAgICAgICBjbGVhclRpbWVvdXQgJHNjb3BlLnRpbWVyXG4gICAgICAgICAgd2FpdCA9IHNldFRpbWVvdXQoKC0+XG4gICAgICAgICAgICAkc2NvcGUucXVlcnkudGVybSA9IGVsLnZhbCgpXG4gICAgICAgICAgICAkc2NvcGUuc2VhcmNoKClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICksIDMwMClcbiAgICAgICAgICAkc2NvcGUudGltZXIgPSB3YWl0XG4gICAgICAgICAgYnJlYWtcblxuICAgICRzY29wZS5kcm9wZG93blNlYXJjaFNlbGVjdCA9IChpdGVtKSAtPlxuICAgICAgJHN0YXRlLmdvKCdpZGVudGl0aWVzLnNob3cnLCB7IHR5cGU6IGl0ZW0ubGlua1RvLnR5cGUsIHZhbHVlOiBpdGVtLmxpbmtUby52YWx1ZSB9KVxuICAgICAgJHNjb3BlLnF1ZXJ5LnRlcm0gPSAnJ1xuXG4gICAgJHNjb3BlLmFkZEd1blBlZXIgPSAodXJsKSAtPlxuICAgICAgJHNjb3BlLmd1bi5vcHQoe3BlZXJzOiBbdXJsXX0pOyAjIFRPRE86IHZhbGlkYXRlIHVybFxuXG4gICAgJHNjb3BlLnJlbW92ZUd1blBlZXIgPSAodXJsKSAtPlxuICAgICAgY29uc29sZS5sb2cgJ3JlbW92ZUd1blBlZXInICMgVE9ETzogaG93IHRvIGRvIHRoaXM/XG5cbiAgICAkc2NvcGUuYWRkSXBmc1BlZXIgPSAodXJsKSAtPlxuICAgICAgJHNjb3BlLmlwZnMuc3dhcm0uY29ubmVjdCh1cmwpLnRoZW4gLT5cbiAgICAgICAgJHNjb3BlLnVwZGF0ZUlwZnNQZWVycygpXG5cbiAgICAkc2NvcGUucmVtb3ZlSXBmc1BlZXIgPSAodXJsKSAtPlxuICAgICAgJHNjb3BlLmlwZnMuc3dhcm0uZGlzY29ubmVjdCh1cmwpLnRoZW4gLT5cbiAgICAgICAgJHNjb3BlLnVwZGF0ZUlwZnNQZWVycygpXG5dXG4iXX0=

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
      $scope.attributes = {};
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
            mostConfirmations = c.conf;
          } else {
            mostConfirmations = 1;
          }
          $scope.attributes = Object.values(attributes).sort(function(a,
    b) {
            return (b.conf - 2 * b.ref) - (a.conf - 2 * a.ref);
          });
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
            }
            if (a.value && a.value.match(/^\/ipfs\/[1-9A-Za-z]{40,60}$/)) {
              a.link = 'https://ipfs.io' + a.value;
              a.linkName = a.value;
              a.iconStyle = 'glyphicon glyphicon-link';
              a.btnStyle = 'btn-default';
            }
            if (a.conf + a.ref > 0) {
              percentage = a.conf * 100 / (a.conf + a.ref);
              if (percentage >= 80) {
                alpha = a.conf / mostConfirmations * 0.7 + 0.3;
              // a.rowStyle = 'background-color: rgba(223,240,216,' + alpha + ')'
              } else if (percentage >= 60) {
                a.rowClass = 'warning';
              } else {
                a.rowClass = 'danger';
              }
            }
            $scope.hasQuickContacts = $scope.hasQuickContacts || a.quickContact;
          }
          return $scope.attributesLength = Object.keys($scope.attributes).length;
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
        var cursor,
    resultFound;
        if (!($scope.identity && $scope.irisIndex)) {
          return;
        }
        $scope.sent = [];
        cursor = $scope.sent.length ? $scope.sent[$scope.sent.length - 1].cursor : '';
        resultFound = function(msg) {
          $scope.processMessages([msg],
    {
            authorIsSelf: true
          });
          return $scope.sent.push(msg);
        };
        return $scope.irisIndex.getSentMsgs($scope.identity,
    resultFound);
      };
      $scope.getReceivedMsgs = function() {
        var cursor,
    resultFound;
        if (!($scope.identity && $scope.irisIndex)) {
          return;
        }
        $scope.received = {
          list: [],
          seen: {}
        };
        cursor = $scope.received.list.length ? $scope.received.list[$scope.received.list.length - 1].cursor : '';
        resultFound = function(msg) {
          if ($scope.received.seen[msg.getHash()]) {
            return;
          }
          $scope.processMessages([msg],
    {
            recipientIsSelf: true
          });
          return $scope.$apply(function() {
            if (msg.isPositive()) {
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
        return $scope.irisIndex.getReceivedMsgs($scope.identity,
    resultFound,
    void 0,
    cursor);
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
      $scope.openReadQRModal = function() {
        return $scope.openModal('readQRModal',
    {
          templateUrl: 'app/identities/readqr.modal.html',
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
    $scope.idValue);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdGllcy9pZGVudGl0aWVzLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzIjpbImlkZW50aXRpZXMvaWRlbnRpdGllcy5jb250cm9sbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLGFBQUE7O0VBRUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxhQUFmLENBQTZCLENBQUMsVUFBOUIsQ0FBeUMsc0JBQXpDLEVBQWlFO0lBQy9ELFFBRCtEO0lBRS9ELFFBRitEO0lBRy9ELFlBSCtEO0lBSS9ELFNBSitEO0lBSy9ELGNBTCtEO0lBTS9ELGNBTitEO0lBTy9ELFdBUCtEO0lBUS9ELE9BUitEO0lBUy9ELElBVCtEO0lBVS9ELFVBVitEO0lBVy9ELFdBWCtEOztJQWEvRCxRQWIrRDtJQWMvRCxxQkFkK0Q7SUFlL0QsT0FmK0Q7SUFnQi9ELHFCQWhCK0Q7SUFpQi9ELFFBQUEsQ0FBQyxNQUFEO0lBQVMsTUFBVDtJQUFpQixVQUFqQjtJQUE2QixPQUE3QjtJQUFzQyxZQUF0QztJQUFvRCxZQUFwRDtJQUFrRSxTQUFsRTtJQUE2RSxLQUE3RTtJQUFvRixFQUFwRjtJQUF3RixRQUF4RjtJQUFrRyxTQUFsRztJQUE2RyxNQUE3RztJQUNBLG1CQURBO0lBQ3FCLEtBRHJCO0lBQzRCLG1CQUQ1QixDQUFBLEVBQUE7QUFFRSxVQUFBLElBQUE7SUFBQSxhQUFBO0lBQUE7TUFBQSxNQUFNLENBQUMsUUFBUCxHQUFrQixDQUFBO01BQ2xCLE1BQU0sQ0FBQyxTQUFQLEdBQW1CO01BQ25CLE1BQU0sQ0FBQyxXQUFQLEdBQXFCLFFBQUEsQ0FBQyxLQUFELENBQUE7ZUFBVyxNQUFNLENBQUMsU0FBUCxHQUFtQjtNQUE5QjtNQUNyQixNQUFNLENBQUMsSUFBUCxHQUFjO01BQ2QsTUFBTSxDQUFDLFFBQVAsR0FDRTtRQUFBLElBQUEsRUFBTSxFQUFOO1FBQ0EsSUFBQSxFQUFNLENBQUE7TUFETjtNQUVGLE1BQU0sQ0FBQyxVQUFQLEdBQW9CLENBQUE7TUFDcEIs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QVg7UUFDSixJQUFHLENBQUMsQ0FBQyxNQUFGLEdBQVcsQ0FBZDtVQUNFLElBQUEsR0FBTyxrQkFBQSxDQUFtQixDQUFFLENBQUEsQ0FBQyxDQUFDLE1BQUYsR0FBVyxDQUFYLENBQXJCO1VBQ1AsS0FBQSxHQUFRLGtCQUFBLENBQW1CLENBQUUsQ0FBQSxDQUFDLENBQUMsTUFBRixHQUFXLENBQVgsQ0FBYSxDQUFDLEtBQWhCLENBQXNCLEdBQXRCLENBQTJCLENBQUEsQ0FBQSxDQUE5QztVQUNSLE9BQU8sQ0FBQyxHQUFSLENBQVksT0FBWjtJQUFxQixLQUFyQjtVQUNBLE9BQU8sQ0FBQyxHQUFSLENBQVksTUFBWjtJQUFvQixJQUFwQjtpQkFDQSxNQUFNLENBQUMsRUFBUCxDQUFVLGlCQUFWO0lBQTZCLENBQUMsSUFBRDtJQUFPLEtBQVAsQ0FBN0IsRUFMRjtTQUFBLE1BQUE7aUJBT0UsT0FBTyxDQUFDLEdBQVIsQ0FBWSwyQkFBWjtJQUF5QyxJQUF6QyxFQVBGOztNQUZxQjthQVV2QixNQUFNLENBQUMsV0FBUCxHQUFxQixRQUFBLENBQUMsQ0FBRCxDQUFBLEVBQUE7SUFwU3ZCLENBakIrRDtHQUFqRTs7RUFGQTs7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuIyBJZGVudGl0aWVzIGNvbnRyb2xsZXJcbmFuZ3VsYXIubW9kdWxlKCdpcmlzQW5ndWxhcicpLmNvbnRyb2xsZXIgJ0lkZW50aXRpZXNDb250cm9sbGVyJywgW1xuICAnJHNjb3BlJ1xuICAnJHN0YXRlJ1xuICAnJHJvb3RTY29wZSdcbiAgJyR3aW5kb3cnXG4gICckc3RhdGVQYXJhbXMnXG4gICckdHJhbnNpdGlvbnMnXG4gICckbG9jYXRpb24nXG4gICckaHR0cCdcbiAgJyRxJ1xuICAnJHRpbWVvdXQnXG4gICckdWliTW9kYWwnXG4gICMgJ0F1dGhlbnRpY2F0aW9uJ1xuICAnY29uZmlnJ1xuICAnbG9jYWxTdG9yYWdlU2VydmljZSdcbiAgJ2ZvY3VzJ1xuICAnTm90aWZpY2F0aW9uU2VydmljZSdcbiAgKCRzY29wZSwgJHN0YXRlLCAkcm9vdFNjb3BlLCAkd2luZG93LCAkc3RhdGVQYXJhbXMsICR0cmFuc2l0aW9ucywgJGxvY2F0aW9uLCAkaHR0cCwgJHEsICR0aW1lb3V0LCAkdWliTW9kYWwsIGNvbmZpZyxcbiAgbG9jYWxTdG9yYWdlU2VydmljZSwgZm9jdXMsIE5vdGlmaWNhdGlvblNlcnZpY2UpIC0+ICMsIEF1dGhlbnRpY2F0aW9uXG4gICAgJHNjb3BlLm5ld0VudHJ5ID0ge31cbiAgICAkc2NvcGUuYWN0aXZlVGFiID0gMVxuICAgICRzY29wZS5hY3RpdmF0ZVRhYiA9ICh0YWJJZCkgLT4gJHNjb3BlLmFjdGl2ZVRhYiA9IHRhYklkXG4gICAgJHNjb3BlLnNlbnQgPSBbXVxuICAgICRzY29wZS5yZWNlaXZlZCA9XG4gICAgICBsaXN0OiBbXVxuICAgICAgc2Vlbjoge31cbiAgICAkc2NvcGUuYXR0cmlidXRlcyA9IHt9XG4gICAgdGh1bWJzVXBPYmogPSB7fVxuICAgIHRodW1ic0Rvd25PYmogPSB7fVxuICAgICRzY29wZS50aHVtYnNVcCA9IFtdXG4gICAgJHNjb3BlLnRodW1ic0Rvd24gPSBbXVxuICAgICRzY29wZS52ZXJpZmljYXRpb25zID0gW11cbiAgICAkc2NvcGUucXVlcnkudGVybSA9ICRzdGF0ZVBhcmFtcy5zZWFyY2ggaWYgJHN0YXRlUGFyYW1zLnNlYXJjaFxuICAgICRzY29wZS5uZXdWZXJpZmljYXRpb24gPVxuICAgICAgdHlwZTogJydcbiAgICAgIHZhbHVlOiAnJ1xuICAgICRzY29wZS5jb2xsYXBzZUxldmVsID0ge31cbiAgICAkc2NvcGUuY29sbGFwc2VGaWx0ZXJzID0gJHdpbmRvdy5pbm5lcldpZHRoIDwgOTkyXG4gICAgJHNjb3BlLnNsaWRlciA9XG4gICAgICBvcHRpb25zOlxuICAgICAgICBmbG9vcjogLTNcbiAgICAgICAgY2VpbDogM1xuICAgICAgICBoaWRlUG9pbnRlckxhYmVsczogdHJ1ZVxuICAgICAgICBoaWRlTGltaXRMYWJlbHM6IHRydWVcbiAgICAgICAgZGlzYWJsZUFuaW1hdGlvbjogdHJ1ZVxuXG4gICAgJHNjb3BlLnNoYXJlID0gdHJ1ZSBpZiAkbG9jYXRpb24uc2VhcmNoKCkuc2hhcmVcblxuICAgIGlmICRzY29wZS5xdWVyeS50ZXJtLmxlbmd0aCBhbmQgJHN0YXRlLmlzICdpZGVudGl0aWVzLmxpc3QnXG4gICAgICAkc2NvcGUucXVlcnkudGVybSA9ICcnXG4gICAgICAkc2NvcGUuc2VhcmNoKClcblxuICAgIGlmICRzdGF0ZS5pcyAnaWRlbnRpdGllcy5zaG93J1xuICAgICAgJHNjb3BlLmZpbHRlcnMubWF4RGlzdGFuY2UgPSAwXG5cbiAgICAkc2NvcGUuYWRkRW50cnkgPSAoZXZlbnQsIGVudHJ5KSAtPlxuICAgICAgaWYgZW50cnkuZW1haWxcbiAgICAgICAgbGlua1RvID0ge3R5cGU6J2VtYWlsJywgdmFsdWU6IGVudHJ5LmVtYWlsfVxuICAgICAgZWxzZSBpZiBlbnRyeS51cmxcbiAgICAgICAgbGlua1RvID0ge3R5cGU6J3VybCcsIHZhbHVlOiBlbnRyeS51cmx9XG4gICAgICBlbHNlXG4gICAgICAgIGxpbmtUbyA9ICR3aW5kb3cuaXJpc0xpYi5BdHRyaWJ1dGUuZ2V0VXVpZCgpXG4gICAgICAgIGVudHJ5LnV1aWQgPSBsaW5rVG8udmFsdWVcbiAgICAgIHBhcmFtcyA9XG4gICAgICAgIHR5cGU6ICd2ZXJpZmljYXRpb24nXG4gICAgICAgIHJlY2lwaWVudDogZW50cnlcbiAgICAgICRzY29wZS5jcmVhdGVNZXNzYWdlKGV2ZW50LCBwYXJhbXMpLnRoZW4gKHJlc3BvbnNlKSAtPlxuICAgICAgICAkc3RhdGUuZ28gJ2lkZW50aXRpZXMuc2hvdycsIGxpbmtUb1xuICAgICAgLCAoZXJyb3IpIC0+XG4gICAgICAgIGNvbnNvbGUubG9nIFwiZXJyb3JcIiwgZXJyb3JcblxuICAgICRzY29wZS5ndWVzc0F0dHJpYnV0ZVR5cGUgPSAtPlxuICAgICAgaWYgJHNjb3BlLm5ld1ZlcmlmaWNhdGlvbi52YWx1ZS5sZW5ndGhcbiAgICAgICAgJHNjb3BlLm5ld1ZlcmlmaWNhdGlvbi50eXBlID0gJHdpbmRvdy5pcmlzTGliLkF0dHJpYnV0ZS5ndWVzc1R5cGVPZigkc2NvcGUubmV3VmVyaWZpY2F0aW9uLnZhbHVlKVxuICAgICAgICB1bmxlc3MgJHNjb3BlLm5ld1ZlcmlmaWNhdGlvbi50eXBlXG4gICAgICAgICAgdW5sZXNzICRzY29wZS5uZXdWZXJpZmljYXRpb24udmFsdWUubWF0Y2ggL1xcYHxcXH58XFwhfFxcQHxcXCN8XFwkfFxcJXxcXF58XFwmfFxcKnxcXCh8XFwpfFxcK3xcXD18XFxbfFxce3xcXF18XFx9fFxcfHxcXFxcfFxcJ3xcXDx8XFwsfFxcLnxcXD58XFw/fFxcL3xcXFwiXCJ8XFw7fFxcOi9cbiAgICAgICAgICAgICRzY29wZS5uZXdWZXJpZmljYXRpb24udHlwZSA9ICduYW1lJ1xuICAgICAgZWxzZVxuICAgICAgICAkc2NvcGUubmV3VmVyaWZpY2F0aW9uLnR5cGUgPSAnJ1xuXG4gICAgJHNjb3BlLmFkZE5hbWUgPSAobmFtZSkgLT5cbiAgICAgIGlmIG5hbWVcbiAgICAgICAgcmVjaXBpZW50ID0ge25hbWV9XG4gICAgICAgIHJlY2lwaWVudFskc2NvcGUuaWRUeXBlXSA9ICRzY29wZS5pZFZhbHVlXG4gICAgICAgICR3aW5kb3cuaXJpc0xpYi5NZXNzYWdlLmNyZWF0ZVZlcmlmaWNhdGlvbih7cmVjaXBpZW50fSwgJHNjb3BlLnByaXZhdGVLZXkpLnRoZW4gKG0pIC0+XG4gICAgICAgICAgJHNjb3BlLmlyaXNJbmRleC5hZGRNZXNzYWdlKG0pXG4gICAgICAgICRzY29wZS5uYW1lQWRkZWQgPSB0cnVlXG4gICAgICBlbHNlXG4gICAgICAgICRzY29wZS5hZGRpbmdOYW1lID0gdHJ1ZVxuICAgICAgICBmb2N1cygnYWRkTmFtZUZvY3VzJylcblxuICAgICRzY29wZS5nZXRBdHRyaWJ1dGVzID0gLT5cbiAgICAgICRzY29wZS5pZGVudGl0eS5ndW4uZ2V0KCdhdHRycycpLm9wZW4gKGF0dHJzKSAtPlxuICAgICAgICBhdHRyaWJ1dGVzID0gYXR0cnMgb3IgW11cbiAgICAgICAgaWYgYXR0cmlidXRlcy5sZW5ndGggPiAwXG4gICAgICAgICAgYyA9IGF0dHJpYnV0ZXNbMF1cbiAgICAgICAgICBtb3N0Q29uZmlybWF0aW9ucyA9IGMuY29uZlxuICAgICAgICBlbHNlXG4gICAgICAgICAgbW9zdENvbmZpcm1hdGlvbnMgPSAxXG4gICAgICAgICRzY29wZS5hdHRyaWJ1dGVzID0gT2JqZWN0LnZhbHVlcyhhdHRyaWJ1dGVzKS5zb3J0IChhLCBiKSAtPlxuICAgICAgICAgIChiLmNvbmYgLSAyICogYi5yZWYpIC0gKGEuY29uZiAtIDIgKiBhLnJlZilcbiAgICAgICAgZm9yIGEgaW4gJHNjb3BlLmF0dHJpYnV0ZXNcbiAgICAgICAgICByZXR1cm4gdW5sZXNzIGEudHlwZSBhbmQgYS52YWx1ZVxuICAgICAgICAgIGEuYXR0ciA9IG5ldyAkd2luZG93LmlyaXNMaWIuQXR0cmlidXRlKGEudHlwZSwgYS52YWx1ZSlcbiAgICAgICAgICBhLmlzQ3VycmVudCA9IG5ldyAkd2luZG93LmlyaXNMaWIuQXR0cmlidXRlKCRzY29wZS5pZFR5cGUsICRzY29wZS5pZFZhbHVlKS5lcXVhbHMoYS5hdHRyKVxuICAgICAgICAgIGEucm93Q2xhc3MgPSAnY3Vyc29yLWRlZmF1bHQnIGlmIGEuaXNDdXJyZW50XG4gICAgICAgICAgc3dpdGNoIGEudHlwZVxuICAgICAgICAgICAgd2hlbiAnZW1haWwnXG4gICAgICAgICAgICAgIGEuaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tZW52ZWxvcGUnXG4gICAgICAgICAgICAgIGEuYnRuU3R5bGUgPSAnYnRuLXN1Y2Nlc3MnXG4gICAgICAgICAgICAgIGEubGluayA9ICdtYWlsdG86JyArIGEudmFsdWVcbiAgICAgICAgICAgICAgYS5xdWlja0NvbnRhY3QgPSB0cnVlXG4gICAgICAgICAgICB3aGVuICdiaXRjb2luX2FkZHJlc3MnLCAnYml0Y29pbidcbiAgICAgICAgICAgICAgYS5pY29uU3R5bGUgPSAnZmEgZmEtYml0Y29pbidcbiAgICAgICAgICAgICAgYS5idG5TdHlsZSA9ICdidG4tcHJpbWFyeSdcbiAgICAgICAgICAgICAgYS5saW5rID0gJ2h0dHBzOi8vYmxvY2tjaGFpbi5pbmZvL2FkZHJlc3MvJyArIGEudmFsdWVcbiAgICAgICAgICAgICAgYS5xdWlja0NvbnRhY3QgPSB0cnVlXG4gICAgICAgICAgICB3aGVuICdncGdfZmluZ2VycHJpbnQnLCAnZ3BnX2tleWlkJ1xuICAgICAgICAgICAgICBhLmljb25TdHlsZSA9ICdmYSBmYS1rZXknXG4gICAgICAgICAgICAgIGEuYnRuU3R5bGUgPSAnYnRuLWRlZmF1bHQnXG4gICAgICAgICAgICAgIGEubGluayA9ICdodHRwczovL3BncC5taXQuZWR1L3Brcy9sb29rdXA/b3A9Z2V0JnNlYXJjaD0weCcgKyBhLnZhbHVlXG4gICAgICAgICAgICB3aGVuICdhY2NvdW50J1xuICAgICAgICAgICAgICBhLmljb25TdHlsZSA9ICdmYSBmYS1hdCdcbiAgICAgICAgICAgIHdoZW4gJ25pY2tuYW1lJ1xuICAgICAgICAgICAgICAkc2NvcGUuaWRlbnRpdHkuaGFzUHJvcGVyTmFtZSA9IHRydWVcbiAgICAgICAgICAgICAgYS5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1mb250J1xuICAgICAgICAgICAgd2hlbiAnbmFtZSdcbiAgICAgICAgICAgICAgJHNjb3BlLmlkZW50aXR5Lmhhc1Byb3Blck5hbWUgPSB0cnVlXG4gICAgICAgICAgICAgIGEuaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tZm9udCdcbiAgICAgICAgICAgIHdoZW4gJ3RlbCcsICdwaG9uZSdcbiAgICAgICAgICAgICAgYS5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1lYXJwaG9uZSdcbiAgICAgICAgICAgICAgYS5idG5TdHlsZSA9ICdidG4tc3VjY2VzcydcbiAgICAgICAgICAgICAgYS5saW5rID0gJ3RlbDonICsgYS52YWx1ZVxuICAgICAgICAgICAgICBhLnF1aWNrQ29udGFjdCA9IHRydWVcbiAgICAgICAgICAgIHdoZW4gJ2tleUlEJ1xuICAgICAgICAgICAgICBhLmljb25TdHlsZSA9ICdmYSBmYS1rZXknXG4gICAgICAgICAgICB3aGVuICdjb3ZlclBob3RvJ1xuICAgICAgICAgICAgICBpZiBhLnZhbHVlLm1hdGNoIC9eXFwvaXBmc1xcL1sxLTlBLVphLXpdezQwLDYwfSQvXG4gICAgICAgICAgICAgICAgJHNjb3BlLmlwZnNHZXQoYS52YWx1ZSkudGhlbiAoY292ZXJQaG90bykgLT5cbiAgICAgICAgICAgICAgICAgICRzY29wZS5jb3ZlclBob3RvID0gJHNjb3BlLmNvdmVyUGhvdG8gb3IgeyAnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoZGF0YTppbWFnZTtiYXNlNjQsJyArIGNvdmVyUGhvdG8udG9TdHJpbmcoJ2Jhc2U2NCcpICsgJyknIH1cbiAgICAgICAgICAgIHdoZW4gJ3VybCdcbiAgICAgICAgICAgICAgYS5saW5rID0gYS52YWx1ZVxuICAgICAgICAgICAgICBpZiBhLnZhbHVlLmluZGV4T2YoJ2ZhY2Vib29rLmNvbS8nKSA+IC0xXG4gICAgICAgICAgICAgICAgYS5pY29uU3R5bGUgPSAnZmEgZmEtZmFjZWJvb2snXG4gICAgICAgICAgICAgICAgYS5idG5TdHlsZSA9ICdidG4tZmFjZWJvb2snXG4gICAgICAgICAgICAgICAgYS5saW5rID0gYS52YWx1ZVxuICAgICAgICAgICAgICAgIGEubGlua05hbWUgPSBhLnZhbHVlLnNwbGl0KCdmYWNlYm9vay5jb20vJylbMV1cbiAgICAgICAgICAgICAgICBhLnF1aWNrQ29udGFjdCA9IHRydWVcbiAgICAgICAgICAgICAgZWxzZSBpZiBhLnZhbHVlLmluZGV4T2YoJ3R3aXR0ZXIuY29tLycpID4gLTFcbiAgICAgICAgICAgICAgICBhLmljb25TdHlsZSA9ICdmYSBmYS10d2l0dGVyJ1xuICAgICAgICAgICAgICAgIGEuYnRuU3R5bGUgPSAnYnRuLXR3aXR0ZXInXG4gICAgICAgICAgICAgICAgYS5saW5rID0gYS52YWx1ZVxuICAgICAgICAgICAgICAgIGEubGlua05hbWUgPSBhLnZhbHVlLnNwbGl0KCd0d2l0dGVyLmNvbS8nKVsxXVxuICAgICAgICAgICAgICAgIGEucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgICAgICBlbHNlIGlmIGEudmFsdWUuaW5kZXhPZigncGx1cy5nb29nbGUuY29tLycpID4gLTFcbiAgICAgICAgICAgICAgICBhLmljb25TdHlsZSA9ICdmYSBmYS1nb29nbGUtcGx1cydcbiAgICAgICAgICAgICAgICBhLmJ0blN0eWxlID0gJ2J0bi1nb29nbGUtcGx1cydcbiAgICAgICAgICAgICAgICBhLmxpbmsgPSBhLnZhbHVlXG4gICAgICAgICAgICAgICAgYS5saW5rTmFtZSA9IGEudmFsdWUuc3BsaXQoJ3BsdXMuZ29vZ2xlLmNvbS8nKVsxXVxuICAgICAgICAgICAgICAgIGEucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgICAgICBlbHNlIGlmIGEudmFsdWUuaW5kZXhPZignbGlua2VkaW4uY29tLycpID4gLTFcbiAgICAgICAgICAgICAgICBhLmljb25TdHlsZSA9ICdmYSBmYS1saW5rZWRpbidcbiAgICAgICAgICAgICAgICBhLmJ0blN0eWxlID0gJ2J0bi1saW5rZWRpbidcbiAgICAgICAgICAgICAgICBhLmxpbmsgPSBhLnZhbHVlXG4gICAgICAgICAgICAgICAgYS5saW5rTmFtZSA9IGEudmFsdWUuc3BsaXQoJ2xpbmtlZGluLmNvbS8nKVsxXVxuICAgICAgICAgICAgICAgIGEucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgICAgICBlbHNlIGlmIGEudmFsdWUuaW5kZXhPZignZ2l0aHViLmNvbS8nKSA+IC0xXG4gICAgICAgICAgICAgICAgYS5pY29uU3R5bGUgPSAnZmEgZmEtZ2l0aHViJ1xuICAgICAgICAgICAgICAgIGEuYnRuU3R5bGUgPSAnYnRuLWdpdGh1YidcbiAgICAgICAgICAgICAgICBhLmxpbmsgPSBhLnZhbHVlXG4gICAgICAgICAgICAgICAgYS5saW5rTmFtZSA9IGEudmFsdWUuc3BsaXQoJ2dpdGh1Yi5jb20vJylbMV1cbiAgICAgICAgICAgICAgICBhLnF1aWNrQ29udGFjdCA9IHRydWVcbiAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGEuaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tbGluaydcbiAgICAgICAgICAgICAgICBhLmJ0blN0eWxlID0gJ2J0bi1kZWZhdWx0J1xuICAgICAgICAgIGlmIGEudmFsdWUgYW5kIGEudmFsdWUubWF0Y2ggL15cXC9pcGZzXFwvWzEtOUEtWmEtel17NDAsNjB9JC9cbiAgICAgICAgICAgIGEubGluayA9ICdodHRwczovL2lwZnMuaW8nICsgYS52YWx1ZVxuICAgICAgICAgICAgYS5saW5rTmFtZSA9IGEudmFsdWVcbiAgICAgICAgICAgIGEuaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tbGluaydcbiAgICAgICAgICAgIGEuYnRuU3R5bGUgPSAnYnRuLWRlZmF1bHQnXG4gICAgICAgICAgaWYgYS5jb25mICsgYS5yZWYgPiAwXG4gICAgICAgICAgICBwZXJjZW50YWdlID0gYS5jb25mICogMTAwIC8gKGEuY29uZiArIGEucmVmKVxuICAgICAgICAgICAgaWYgcGVyY2VudGFnZSA+PSA4MFxuICAgICAgICAgICAgICBhbHBoYSA9IGEuY29uZiAvIG1vc3RDb25maXJtYXRpb25zICogMC43ICsgMC4zXG4gICAgICAgICAgICAgICMgYS5yb3dTdHlsZSA9ICdiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMywyNDAsMjE2LCcgKyBhbHBoYSArICcpJ1xuICAgICAgICAgICAgZWxzZSBpZiBwZXJjZW50YWdlID49IDYwXG4gICAgICAgICAgICAgIGEucm93Q2xhc3MgPSAnd2FybmluZydcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgYS5yb3dDbGFzcyA9ICdkYW5nZXInXG4gICAgICAgICAgJHNjb3BlLmhhc1F1aWNrQ29udGFjdHMgPSAkc2NvcGUuaGFzUXVpY2tDb250YWN0cyBvciBhLnF1aWNrQ29udGFjdFxuICAgICAgICAkc2NvcGUuYXR0cmlidXRlc0xlbmd0aCA9IE9iamVjdC5rZXlzKCRzY29wZS5hdHRyaWJ1dGVzKS5sZW5ndGhcblxuICAgICRzY29wZS5hdHRyaWJ1dGVDbGlja2VkID0gKGV2ZW50LCBhdHRyKSAtPlxuICAgICAgaWYgYXR0ci5jb25uZWN0aW5nTXNnc1xuICAgICAgICBhdHRyLmNvbGxhcHNlID0gIWF0dHIuY29sbGFwc2VcbiAgICAgIGVsc2VcbiAgICAgICAgYXR0ci5jb25uZWN0aW5nTXNncyA9IFtdXG4gICAgICAgIGZvciBtc2cgaW4gJHNjb3BlLnJlY2VpdmVkLmxpc3RcbiAgICAgICAgICBjb250aW51ZSB1bmxlc3MgbXNnLnNpZ25lZERhdGEudHlwZSBpbiBbJ3ZlcmlmaWNhdGlvbicsICd1bnZlcmlmaWNhdGlvbicsICd2ZXJpZnlfaWRlbnRpdHknLCAndW52ZXJpZnlfaWRlbnRpdHknXVxuICAgICAgICAgIGhhc0F0dHIxID0gaGFzQXR0cjIgPSBmYWxzZVxuICAgICAgICAgIGZvciBhIGluIG1zZy5nZXRSZWNpcGllbnRBcnJheSgpXG4gICAgICAgICAgICBoYXNBdHRyMSA9IGhhc0F0dHIxIG9yIGEudHlwZSA9PSBhdHRyLnR5cGUgYW5kIGEudmFsdWUgPT0gYXR0ci52YWx1ZVxuICAgICAgICAgICAgaGFzQXR0cjIgPSBoYXNBdHRyMiBvciBhLnR5cGUgPT0gJHNjb3BlLmlkVHlwZSBhbmQgYS52YWx1ZSA9PSAkc2NvcGUuaWRWYWx1ZVxuICAgICAgICAgICAgaWYgaGFzQXR0cjEgYW5kIGhhc0F0dHIyXG4gICAgICAgICAgICAgIGF0dHIuY29ubmVjdGluZ01zZ3MucHVzaCBtc2dcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgYXR0ci5jb2xsYXBzZSA9ICFhdHRyLmNvbGxhcHNlXG5cbiAgICAkc2NvcGUuZ2V0U2VudE1zZ3MgPSAtPlxuICAgICAgcmV0dXJuIHVubGVzcyAkc2NvcGUuaWRlbnRpdHkgYW5kICRzY29wZS5pcmlzSW5kZXhcbiAgICAgICRzY29wZS5zZW50ID0gW11cbiAgICAgIGN1cnNvciA9IGlmICRzY29wZS5zZW50Lmxlbmd0aCB0aGVuICRzY29wZS5zZW50WyRzY29wZS5zZW50Lmxlbmd0aCAtIDFdLmN1cnNvciBlbHNlICcnXG4gICAgICByZXN1bHRGb3VuZCA9IChtc2cpIC0+XG4gICAgICAgICRzY29wZS5wcm9jZXNzTWVzc2FnZXMgW21zZ10sIHsgYXV0aG9ySXNTZWxmOiB0cnVlIH1cbiAgICAgICAgJHNjb3BlLnNlbnQucHVzaCBtc2dcblxuICAgICAgJHNjb3BlLmlyaXNJbmRleC5nZXRTZW50TXNncygkc2NvcGUuaWRlbnRpdHksIHJlc3VsdEZvdW5kKVxuXG4gICAgJHNjb3BlLmdldFJlY2VpdmVkTXNncyA9IC0+XG4gICAgICByZXR1cm4gdW5sZXNzICRzY29wZS5pZGVudGl0eSBhbmQgJHNjb3BlLmlyaXNJbmRleFxuICAgICAgJHNjb3BlLnJlY2VpdmVkID1cbiAgICAgICAgbGlzdDogW11cbiAgICAgICAgc2Vlbjoge31cbiAgICAgIGN1cnNvciA9IGlmICRzY29wZS5yZWNlaXZlZC5saXN0Lmxlbmd0aCB0aGVuICRzY29wZS5yZWNlaXZlZC5saXN0WyRzY29wZS5yZWNlaXZlZC5saXN0Lmxlbmd0aCAtIDFdLmN1cnNvciBlbHNlICcnXG4gICAgICByZXN1bHRGb3VuZCA9IChtc2cpIC0+XG4gICAgICAgIHJldHVybiBpZiAkc2NvcGUucmVjZWl2ZWQuc2Vlblttc2cuZ2V0SGFzaCgpXVxuICAgICAgICAkc2NvcGUucHJvY2Vzc01lc3NhZ2VzIFttc2ddLCB7IHJlY2lwaWVudElzU2VsZjogdHJ1ZSB9XG4gICAgICAgICRzY29wZS4kYXBwbHkgLT5cbiAgICAgICAgICBpZiBtc2cuaXNQb3NpdGl2ZSgpXG4gICAgICAgICAgICBpZiAkc2NvcGUudGh1bWJzVXAubGVuZ3RoIDwgMTIgYW5kIG5vdCB0aHVtYnNVcE9ialtKU09OLnN0cmluZ2lmeShtc2cuc2lnbmVkRGF0YS5hdXRob3IpXVxuICAgICAgICAgICAgICB0aHVtYnNVcE9ialtKU09OLnN0cmluZ2lmeShtc2cuc2lnbmVkRGF0YS5hdXRob3IpXSA9IHRydWVcbiAgICAgICAgICAgICAgJHNjb3BlLnRodW1ic1VwLnB1c2ggbXNnXG4gICAgICAgICAgICAgICRzY29wZS5oYXNUaHVtYnNVcCA9IHRydWVcbiAgICAgICAgICBlbHNlIGlmIG1zZy5pc05lZ2F0aXZlKCkgYW5kICRzY29wZS50aHVtYnNEb3duLmxlbmd0aCA8IDEyIGFuZCBub3QgdGh1bWJzRG93bk9ialtKU09OLnN0cmluZ2lmeShtc2cuc2lnbmVkRGF0YS5hdXRob3IpXVxuICAgICAgICAgICAgdGh1bWJzRG93bk9ialtKU09OLnN0cmluZ2lmeShtc2cuc2lnbmVkRGF0YS5hdXRob3IpXSA9IHRydWVcbiAgICAgICAgICAgICRzY29wZS50aHVtYnNEb3duLnB1c2ggbXNnXG4gICAgICAgICAgICAkc2NvcGUuaGFzVGh1bWJzRG93biA9IHRydWVcbiAgICAgICAgICAkc2NvcGUucmVjZWl2ZWQubGlzdC5wdXNoIG1zZ1xuICAgICAgICAgICRzY29wZS5yZWNlaXZlZC5zZWVuW21zZy5nZXRIYXNoKCldID0gdHJ1ZVxuICAgICAgJHNjb3BlLmlyaXNJbmRleC5nZXRSZWNlaXZlZE1zZ3MoJHNjb3BlLmlkZW50aXR5LCByZXN1bHRGb3VuZCwgdW5kZWZpbmVkLCBjdXJzb3IpXG5cbiAgICAkc2NvcGUuc2V0RmlsdGVycyA9IChmaWx0ZXJzKSAtPlxuICAgICAgYW5ndWxhci5leHRlbmQgJHNjb3BlLmZpbHRlcnMsIGZpbHRlcnNcblxuICAgICRzY29wZS51cGxvYWRDb3ZlclBob3RvID0gKGJsb2IsIGlkZW50aXR5KSAtPlxuICAgICAgJHNjb3BlLnVwbG9hZEZpbGUoYmxvYikudGhlbiAoZmlsZXMpIC0+XG4gICAgICAgIHJlY2lwaWVudCA9IHtjb3ZlclBob3RvOiAnL2lwZnMvJyArIGZpbGVzWzBdLnBhdGh9XG4gICAgICAgIHJlY2lwaWVudFskc2NvcGUuaWRUeXBlXSA9ICRzY29wZS5pZFZhbHVlXG4gICAgICAgICR3aW5kb3cuaXJpc0xpYi5NZXNzYWdlLmNyZWF0ZVZlcmlmaWNhdGlvbih7cmVjaXBpZW50fSwgJHNjb3BlLnByaXZhdGVLZXkpLnRoZW4gKG0pIC0+XG4gICAgICAgICAgJHNjb3BlLmlyaXNJbmRleC5hZGRNZXNzYWdlKG0pXG4gICAgICAgICAgJHNjb3BlLnVwbG9hZE1vZGFsLmNsb3NlKClcblxuICAgICRzY29wZS5vcGVuU2hhcmVQYWdlTW9kYWwgPSAoKSAtPlxuICAgICAgJHNjb3BlLm9wZW5Nb2RhbCAnc2hhcmVQYWdlTW9kYWwnLCB7IHRlbXBsYXRlVXJsOiAnYXBwL2lkZW50aXRpZXMvc2hhcmUubW9kYWwuaHRtbCcsIHNpemU6ICdtZCcgfVxuXG4gICAgJHNjb3BlLm9wZW5SZWFkUVJNb2RhbCA9ICgpIC0+XG4gICAgICAkc2NvcGUub3Blbk1vZGFsICdyZWFkUVJNb2RhbCcsIHsgdGVtcGxhdGVVcmw6ICdhcHAvaWRlbnRpdGllcy9yZWFkcXIubW9kYWwuaHRtbCcsIHNpemU6ICdtZCcgfVxuXG4gICAgJHNjb3BlLm9wZW5Db3ZlclBob3RvVXBsb2FkTW9kYWwgPSAtPlxuICAgICAgcmV0dXJuIHVubGVzcyAkc2NvcGUuYXV0aGVudGljYXRpb24uaWRlbnRpdHlcbiAgICAgICRzY29wZS5vcGVuVXBsb2FkTW9kYWwoJHNjb3BlLnVwbG9hZENvdmVyUGhvdG8sICdVcGxvYWQgY292ZXIgcGhvdG8nLCBmYWxzZSlcblxuICAgICRzY29wZS5maW5kT25lID0gLT5cbiAgICAgIHJldHVybiB1bmxlc3MgJHNjb3BlLmlyaXNJbmRleFxuICAgICAgJHNjb3BlLmlkVHlwZSA9ICRzdGF0ZVBhcmFtcy50eXBlXG4gICAgICAkc2NvcGUuaWRWYWx1ZSA9ICRzdGF0ZVBhcmFtcy52YWx1ZVxuICAgICAgJHNjb3BlLmlkQXR0ciA9IG5ldyAkd2luZG93LmlyaXNMaWIuQXR0cmlidXRlKCRzY29wZS5pZFR5cGUsICRzY29wZS5pZFZhbHVlKVxuICAgICAgJHNjb3BlLmlkVXJsID0gJHNjb3BlLmdldElkVXJsKCRzY29wZS5pZFR5cGUsICRzY29wZS5pZFZhbHVlKVxuICAgICAgJHNjb3BlLmlzQ3VycmVudFVzZXIgPSAkc2NvcGUuYXV0aGVudGljYXRpb24gYW5kXG4gICAgICAgICRzY29wZS5hdXRoZW50aWNhdGlvbi51c2VyIGFuZFxuICAgICAgICAkc2NvcGUuaWRUeXBlID09ICRzY29wZS5hdXRoZW50aWNhdGlvbi51c2VyLmlkVHlwZSBhbmRcbiAgICAgICAgJHNjb3BlLmlkVmFsdWUgPT0gJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnVzZXIuaWRWYWx1ZVxuICAgICAgTm90aWZpY2F0aW9uU2VydmljZS5tYXJrQWxsU2VlbigpIGlmICRzY29wZS5pc0N1cnJlbnRVc2VyXG4gICAgICAkc2NvcGUuaXNVbmlxdWVUeXBlID0gJHdpbmRvdy5pcmlzTGliLkF0dHJpYnV0ZS5pc1VuaXF1ZVR5cGUoJHNjb3BlLmlkVHlwZSlcbiAgICAgIGlmICEkc2NvcGUuaXNVbmlxdWVUeXBlXG4gICAgICAgICRzdGF0ZS5nbyAnaWRlbnRpdGllcy5saXN0JywgeyBzZWFyY2g6ICRzY29wZS5pZFZhbHVlIH1cbiAgICAgICAgJHNjb3BlLnRhYnNbMl0uYWN0aXZlID0gdHJ1ZSBpZiAkc2NvcGUudGFic1xuICAgICAgaWYgJHN0YXRlLmlzICdpZGVudGl0aWVzLnNob3cnXG4gICAgICAgICRzY29wZS5zZXRQYWdlVGl0bGUgJHNjb3BlLmlkVmFsdWVcbiAgICAgICRzY29wZS5pZGVudGl0eSA9ICRzY29wZS5pcmlzSW5kZXguZ2V0KCRzY29wZS5pZFR5cGUsICRzY29wZS5pZFZhbHVlKVxuICAgICAgJHNjb3BlLnNldElkZW50aXR5TmFtZXMoJHNjb3BlLmlkZW50aXR5LCBmYWxzZSwgdHJ1ZSlcbiAgICAgICRzY29wZS5pZGVudGl0eS5ndW4ub24gKGRhdGEpIC0+XG4gICAgICAgICRzY29wZS5pZGVudGl0eS5kYXRhID0gZGF0YVxuICAgICAgJHNjb3BlLmdldEF0dHJpYnV0ZXMoKVxuICAgICAgJHNjb3BlLmdldFNlbnRNc2dzKClcbiAgICAgICRzY29wZS5nZXRSZWNlaXZlZE1zZ3MoKVxuICAgICAgJHNjb3BlLmlkZW50aXR5Lmd1bi5nZXQoJ3Njb3JlcycpLm9wZW4gKHNjb3JlcykgLT5cbiAgICAgICAgJHNjb3BlLnNjb3JlcyA9IHNjb3Jlc1xuXG4gICAgbG9hZCA9IC0+XG4gICAgICBpZiAkc2NvcGUuaXJpc0luZGV4XG4gICAgICAgIGlmICRzdGF0ZS5pcyAnaWRlbnRpdGllcy5zaG93J1xuICAgICAgICAgICRzY29wZS5maW5kT25lKClcblxuICAgICAgICBpZiAkc3RhdGUuaXMgJ2lkZW50aXRpZXMuY3JlYXRlJ1xuICAgICAgICAgIGZvY3VzKCdpZE5hbWVGb2N1cycpXG4gICAgICAgICAgJHNjb3BlLm5ld0VudHJ5Lm5hbWUgPSAkc2NvcGUuY2FwaXRhbGl6ZVdvcmRzKCRzY29wZS5xdWVyeS50ZXJtKVxuICAgICRzY29wZS4kd2F0Y2ggJ2lyaXNJbmRleCcsIGxvYWRcblxuICAgICRzY29wZS5xclNjYW5TdWNjZXNzID0gKGRhdGEpIC0+XG4gICAgICBhID0gZGF0YS5zcGxpdCgnLycpXG4gICAgICBpZiBhLmxlbmd0aCA+IDRcbiAgICAgICAgdHlwZSA9IGRlY29kZVVSSUNvbXBvbmVudChhW2EubGVuZ3RoIC0gMl0pXG4gICAgICAgIHZhbHVlID0gZGVjb2RlVVJJQ29tcG9uZW50KGFbYS5sZW5ndGggLSAxXS5zcGxpdCgnPycpWzBdKVxuICAgICAgICBjb25zb2xlLmxvZyAndmFsdWUnLCB2YWx1ZVxuICAgICAgICBjb25zb2xlLmxvZyAnZGF0YScsIGRhdGFcbiAgICAgICAgJHN0YXRlLmdvICdpZGVudGl0aWVzLnNob3cnLCB7dHlwZSwgdmFsdWV9XG4gICAgICBlbHNlXG4gICAgICAgIGNvbnNvbGUubG9nICdVbnJlY29nbml6ZWQgaWRlbnRpdHkgdXJsJywgZGF0YVxuICAgICRzY29wZS5xclNjYW5FcnJvciA9IChlKSAtPlxuICAgICAgIyB0aGlzIGlzIGNhbGxlZCBlYWNoIHRpbWUgYSBRUiBjb2RlIGlzIG5vdCBmb3VuZCBvbiB0aGUgY2FtZXJhXG4gICAgICAjIGNvbnNvbGUuZXJyb3IgZVxuXVxuIl19

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
      type: null,
      limit: 10,
      maxDistance: 0
    }
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29uc3RhbnRzLmpzIiwic291cmNlcyI6WyJpbmRleC5jb25zdGFudHMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxhQUFmLENBQ0UsQ0FBQyxRQURILENBQ1ksUUFEWixFQUVJO0lBQUEsY0FBQSxFQUNFO01BQUEsSUFBQSxFQUFNLElBQU47TUFDQSxLQUFBLEVBQU8sRUFEUDtNQUVBLFdBQUEsRUFBYTtJQUZiO0VBREYsQ0FGSjtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ2lyaXNBbmd1bGFyJylcbiAgLmNvbnN0YW50ICdjb25maWcnLFxuICAgIGRlZmF1bHRGaWx0ZXJzOlxuICAgICAgdHlwZTogbnVsbFxuICAgICAgbGltaXQ6IDEwXG4gICAgICBtYXhEaXN0YW5jZTogMFxuIl19

(function() {
  angular.module('irisAngular').config(function($logProvider) {
    'ngInject';
    // Enable log
    return $logProvider.debugEnabled(true);
  });

  // Set options third-party lib

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29uZmlnLmpzIiwic291cmNlcyI6WyJpbmRleC5jb25maWcuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxhQUFmLENBQ0UsQ0FBQyxNQURILENBQ1UsUUFBQSxDQUFDLFlBQUQsQ0FBQTtJQUNOLFdBQUE7O1dBRUEsWUFBWSxDQUFDLFlBQWIsQ0FBMEIsSUFBMUI7RUFITSxDQURWOztFQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSAnaXJpc0FuZ3VsYXInXG4gIC5jb25maWcgKCRsb2dQcm92aWRlcikgLT5cbiAgICAnbmdJbmplY3QnXG4gICAgIyBFbmFibGUgbG9nXG4gICAgJGxvZ1Byb3ZpZGVyLmRlYnVnRW5hYmxlZCB0cnVlXG4gICAgIyBTZXQgb3B0aW9ucyB0aGlyZC1wYXJ0eSBsaWJcbiJdfQ==

angular.module('irisAngular').run(['$templateCache', function($templateCache) {$templateCache.put('app/identities/create.html','<div class="container mar-bot30" ng-controller=IdentitiesController><div class=row><div class="col-xs-8 col-sm-6 col-sm-offset-2"><h3>Add contact</h3></div><div class="col-xs-4 col-sm-2"><button ng-click=openReadQRModal() class="btn btn-default pull-right"><span class="glyphicon glyphicon-qrcode"></span> Scan QR</button></div></div><div class=row><div class="col-xs-12 col-sm-8 col-sm-offset-2"><div class="panel panel-danger" ng-if=error><div class=panel-heading ng-bind=error></div></div><div class="panel panel-info" ng-hide=authentication.user><div class=panel-heading>Please log in to add contacts.</div></div><form class=form name=addEntryForm ng-submit="addEntry($event, newEntry)"><div class=form-group><label for=idName>Name *</label> <input type=text required autofocus id=idName focus-on=idNameFocus name=idName ng-model=newEntry.name class=form-control></div><div class=form-group ng-class="{ \'has-error\': addEntryForm.idEmail.$invalid }"><label for=idEmail>Email</label> <input type=email id=idEmail name=idEmail ng-model=newEntry.email class=form-control></div><div class=form-group ng-class="{ \'has-error\': addEntryForm.idUrl.$invalid }"><label for=idUrl>Url</label> <input type=url id=idUrl name=idUrl ng-model=newEntry.url class=form-control><p class=help-block>Social media profile or other personal url</p></div><button class="btn btn-primary" ng-disabled="loggingIn || !(authentication.user && !(addEntryForm.idName.$invalid || addEntryForm.idEmail.$invalid || addEntryForm.idPhone.$invalid || addEntryForm.idUrl.$invalid))">Add public contact</button><p class=help-block>More details can be added afterwards.</p><p><a ui-sref=privacy>Privacy policy</a></p></form></div></div></div>');
$templateCache.put('app/identities/list.html','<div class="container no-padding-xs"><section><div class=mar-top25-xs></div><div ng-if=!query.term ng-include="\'app/main/getstarted.partial.html\'"></div><table ng-init="filters.limit = 10" id=search-results class="table table-hover" infinite-scroll="filters.limit = filters.limit + 1" infinite-scroll-distance=1 infinite-scroll-disabled="!irisIndex || !ids || !ids.list || ids.list.length < filters.limit || filteredIds.length < filters.limit"><tbody><tr id=createIdRow ng-class="{active: ids.activeKey == -1}" ui-sref=identities.create class=search-result-row><td class="gravatar-col align-center"><span style=line-height:46px class="glyphicon glyphicon-plus"></span></td><td><a ui-sref=identities.create>Add contact<span ng-if=query.term>: <span ng-bind=capitalizeWords(query.term)></span></span></a></td></tr><tr ng-repeat="result in ids.list | orderBy:\'data.trustDistance\':false:trustDistanceComparator | limitTo:filters.limit as filteredIds track by (result.linkTo.value + result.linkTo.type)" id=result{{$index}} ui-sref="identities.show({ type: result.linkTo.type, value: result.linkTo.value })" class=search-result-row ng-class="{active: ids.activeKey == $index}"><td class=gravatar-col><identicon identity=result border=3 width=50 ipfs=ipfs></identicon></td><td><span ng-if="result.data.trustDistance === 0" class="label label-default pull-right">viewpoint</span> <span ng-if="result.data.trustDistance > 0" ng-bind="result.data.trustDistance | ordinal" class="label label-default pull-right"></span> <span ng-if="result.data.trustDistance === false" class="label label-default pull-right">unconnected</span> <a ng-bind-html=result.primaryName|highlight:query.term ui-sref="identities.show({ type: result.linkTo.type, value: result.linkTo.value })"></a> <span class="glyphicon glyphicon-ok-sign" style=color:#337ab7 ng-if=result.verified></span> <small ng-if=!(result.mostVerifiedAttributes.type||result.mostVerifiedAttributes.nickname) class=list-group-item-text><span ng-bind-html=result.data.attrs.type.type|highlight:query.term></span></small><br><small><span ng-if=result.nickname ng-bind-html=result.nickname|highlight:query.term class=mar-right10></span> <span ng-if=result.profile.email class=mar-right10><span class="glyphicon glyphicon-envelope"></span> <span ng-bind-html=result.profile.email|highlight:query.term></span> </span><span ng-if=result.profile.facebook class=mar-right10><span class="fa fa-facebook"></span> <span ng-bind-html=result.profile.facebook|highlight:query.term></span> </span><span ng-if=result.profile.twitter class=mar-right10><span class="fa fa-twitter"></span> <span ng-bind-html=result.profile.twitter|highlight:query.term></span> </span><span ng-if=result.profile.googlePlus class=mar-right10><span class="fa fa-google-plus"></span> <span ng-bind-html=result.profile.googlePlus|highlight:query.term></span> </span><span ng-if=result.mostVerifiedAttributes.bitcoin class=mar-right10><span class="fa fa-bitcoin"></span> <span ng-bind-html=result.mostVerifiedAttributes.bitcoin.attribute.val|highlight:query.term></span></span></small></td></tr></tbody></table><div class="alert alert-info text-center" ng-if=!ids.list.length>No results</div></section></div>');
$templateCache.put('app/identities/readqr.modal.html','<div class="col-md-10 col-md-offset-1" ng-controller=IdentitiesController><div class="panel panel-default mar-top15"><div class="panel-heading text-center"><div><qr-scanner width=400 height=300 ng-success=qrScanSuccess(data) ng-error=qrScanError(error)></qr-scanner></div><!-- <div class="mar-top15 mar-bot10"><button ng-click="shareModal.close()" class="btn btn-default">Close</button></div> --></div></div></div>');
$templateCache.put('app/identities/share.modal.html','<div class="col-md-10 col-md-offset-1" ng-controller=IdentitiesController><div class="panel panel-default mar-top15"><div class="panel-heading text-center"><p><button ng-click=copyToClipboard(idUrl) class="btn btn-primary mar-top10">Copy link to this page</button></p><div class="mar-top20 mar-bot10"><qrcode data={{idUrl}} size=240></qrcode></div><!-- <div class="mar-top15 mar-bot10"><button ng-click="shareModal.close()" class="btn btn-default">Close</button></div> --></div></div></div>');
$templateCache.put('app/identities/show.attributes.html','<!-- <input id="authenticity_token" name="authenticity_token" type="hidden" value="z1JM7ffnFK7gOv6S3yzG9UFyakukYHikAU94/3TcT2o="> --><table class="table truncated-table table-hover"><tbody><tr ng-repeat-start="a in attributes" style={{a.rowStyle}} ng-class=a.rowClass ng-click="!a.isCurrent && attributeClicked($event, a)" class=id-row><td><div><div class="pull-left mar-right15"><a ng-hide="a.type === \'keyID\' || a.type === \'uuid\'" style=min-width:45px class="btn btn-lg btn-social-icon" ng-class=a.btnStyle ng-href={{a.link}}><span ng-class=a.iconStyle></span> <span ng-if=a.iconStyle&&!a.link class="pull-left btn btn-lg btn-social-icon" ng-class=a.btnStyle ng-href={{a.link}}><span ng-class=a.iconStyle></span></span></a><identicon identity=a.attr ng-show="a.attr && (a.type === \'keyID\' || a.type === \'uuid\')" width=45></identicon></div><div class=pull-left><a ui-sref="identities.show({ type: a.type, value: a.value })" ng-bind="a.linkName || a.value" class=id-link></a><br><small ng-bind=a.type></small></div><!--\n            <input class="form-control linkedComment" type="text" placeholder="comment" disabled>\n          --><div class=pull-right ng-if=!a.isCurrent><button autocomplete=off name=confirm class="btn btn-default btn-confirm" ng-click="createMessage($event, { type: \'verification\' }, {verifiedAttr: a})" ng-disabled=!authentication.user uib-tooltip=Verify data-style=zoom-out><span class="positive glyphicon glyphicon-ok"></span> {{a.conf}}</button> <button autocomplete=off name=unverify class="btn btn-default btn-unverify" ng-click="createMessage($event, { type: \'unverification\' }, {verifiedAttr: a})" ng-disabled=!authentication.user uib-tooltip=Unverify data-style=zoom-out><span class="negative glyphicon glyphicon-remove"></span> {{a.ref}}</button></div><div class=clear></div></div></td></tr><tr ng-repeat-end ng-if=!a.isCurrent class="active connectingmsgs"><td class=connectingmsgs data-style=zoom-in data-spinner-color=#000><div uib-collapse=!a.collapse><div ng-repeat="msg in a.connectingMsgs" ng-click="openMessage($event, msg, \'lg\')" class=confirmation-panel><span ng-if="msg.signedData.type === \'verification\'"><span class="positive glyphicon glyphicon-ok hidden-xs mar-left5 pull-right"></span> <span class="positive glyphicon glyphicon-ok visible-xs-inline-block mar-right10"></span> </span><span ng-if="msg.signedData.type === \'unverification\'"><span class="negative glyphicon glyphicon-remove hidden-xs mar-left5 pull-right"></span> <span class="negative glyphicon glyphicon-remove visible-xs-inline-block mar-right10"></span> </span><strong><a ui-sref="identities.show({ type: msg.linkToAuthor.type, value: msg.linkToAuthor.value })" class=id-link><identicon ipfs=ipfs identity=msg.author class=mar-right5 border=3 width=30></identicon><span ng-bind=msg.author_name||msg.signedData.author.type.value></span> </a></strong>- <span ng-bind="msg.signedData.timestamp|date:\'mediumDate\'" class="text-muted small" style=display:inline-block;></span> <span ng-if=msg.signedData.comment>- {{msg.signedData.comment|limitTo:250}}</span></div></div></td></tr><tr class="active add-row"><td><input id=addValue ng-change=guessAttributeType() ng-model=newVerification.value class=form-control name=linkedValue type=text placeholder="value (e.g. alice@example.com)" ng-disabled=!authentication.user> <input id=addType ng-model=newVerification.type class=form-control name=linkedType type=text placeholder="type (e.g. email)" ng-disabled=!authentication.user><!--<td><input id="addComment" class="form-control" name="linkedComment" type="text" placeholder="comment" disabled></td> --> <button autocomplete=off id=addButton ng-click="createMessage($event, { type: \'verification\' }, {verifiedAttr: newVerification})" class="btn btn-default" data-style=zoom-out ng-disabled="!authentication.user || !(newVerification.type && newVerification.value)"><span class="glyphicon glyphicon-plus"></span> Add</button></td></tr></tbody></table>');
$templateCache.put('app/identities/show.html','<section class=cover-container><div ng-click=openCoverPhotoUploadModal() class=cover parallax-background parallax-ratio=-0.2 ng-style=coverPhoto></div><div class="container hidden-xs hidden-sm"><div class="heading-row row"><div class="col-md-8 col-md-offset-3"><h4 ng-show="idType === \'keyID\' || idType === \'uuid\'"><identicon identity=idAttr width=35></identicon><button class="btn btn-default mar-left15" ng-click=openSharePageModal()><span class="glyphicon glyphicon-qrcode mar-right5"></span> Share</button></h4><h4 ng-hide="idType === \'keyID\' || idType === \'uuid\'"><span ng-bind=idValue class=idValue></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType class=idType></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType class=idType></a> </small><button class="btn btn-default mar-left15" ng-click=openSharePageModal()><span class="glyphicon glyphicon-qrcode mar-right5"></span> Share</button></h4></div></div><div class=row><div class="col-md-9 col-md-offset-3"><ul class="list-inline tab-list"><li ng-if=isUniqueType><a href="" ng-class="{ active: activeTab == 1 }" ng-click=activateTab(1)><span class=hidden-xs>Received </span>({{0+identity.data.receivedPositive+identity.data.receivedNeutral+identity.data.receivedNegative || received.list.length}})</a></li><li ng-if=isUniqueType><a href="" ng-class="{ active: activeTab == 2 }" ng-click=activateTab(2)><span class=hidden-xs>Sent </span>({{0+identity.data.sentPositive+identity.data.sentNeutral+identity.data.sentNegative || sent.length}})</a></li><li><a href="" ng-class="{ active: activeTab == 3 }" ng-click=activateTab(3)><span class=hidden-xs>Identity </span>(<span ng-bind="attributesLength || 0"></span>)</a></li></ul></div></div></div></section><div class=container><div><section><div class=row><div class="col-md-3 id-left-column"><div ng-if=isUniqueType ng-include="\'app/identities/show.stats.html\'"></div><div class=hidden-xs ng-include="\'app/messages/distance-selector.partial.html\'"></div></div><div class="col-md-8 id-right-column"><!-- Nav tabs --><div ng-include="\'app/main/createuser.partial.html\'"></div><uib-tabset active=activeTab><uib-tab index=1 ng-if=isUniqueType><uib-tab-heading><span class=hidden-xs>Received ({{0+identity.data.receivedPositive+identity.data.receivedNeutral+identity.data.receivedNegative}})</span> <span class=visible-xs>Recv ({{0+identity.data.receivedPositive+identity.data.receivedNeutral+identity.data.receivedNegative}})</span></uib-tab-heading><div ng-if=isCurrentUser ng-include="\'app/main/getstarted.partial.html\'"></div><div class="panel panel-info" ng-if="!isCurrentUser && authentication.user && authentication.identity.data && !authentication.identity.data.sentPositive"><div class=panel-heading>Trust this user? Upvote them to see their posts!</div></div><div ng-include="\'app/messages/create.rating.partial.html\'" ng-show="!loggingIn && authentication.user && !isCurrentUser"></div><div ng-include="\'app/identities/show.received.html\'"></div><div ng-if="!isCurrentUser && receivedFiltered.length == 0" class="alert alert-info text-center">No messages yet</div></uib-tab><uib-tab index=2 ng-if=isUniqueType><uib-tab-heading>Sent ({{0+identity.data.sentPositive+identity.data.sentNeutral+identity.data.sentNegative}})</uib-tab-heading><div ng-include="\'app/identities/show.sent.html\'"></div></uib-tab><uib-tab index=3><uib-tab-heading>Id<span class=hidden-xs>entity</span> (<span ng-bind="attributesLength || 0"></span>)</uib-tab-heading><div ng-include="\'app/identities/show.attributes.html\'" id=attributes></div></uib-tab></uib-tabset></div></div></section></div></div>');
$templateCache.put('app/identities/show.received.html','<div infinite-scroll=getReceivedMsgs() infinite-scroll-distance=2 infinite-scroll-disabled="true || !identity || activeTab != 1"><div class=panel ng-class="{\'mar-bot5\': (filters.type.indexOf(\'rating\') === 0)}"><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === null) }" ng-click="setFilters({ type: null })"><a>All</a></li><li ng-class="{active: (filters.type === \'rating\') }" ng-click="setFilters({type: \'rating\'})"><a>Rating</a></li><li ng-class="{active: (filters.type === \'verification\') }" ng-click="setFilters({type:\'verification\'})"><a>Verification</a></li></ul></div></div><div class=panel ng-show="filters.type.indexOf(\'rating\') === 0"><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === \'rating:positive\') }" ng-click="setFilters({type: \'rating:positive\'})"><a><span class=positive><span class="visible-xs-inline glyphicon glyphicon-thumbs-up"></span><span class=hidden-xs>Pos<span class=hidden-md>itive</span></span> ({{0+identity.data.receivedPositive}})</span></a></li><li ng-class="{active: (filters.type === \'rating:neutral\') }" ng-click="setFilters({type: \'rating:neutral\'})"><a><span class=neutral><span class="visible-xs-inline glyphicon glyphicon-question-sign"></span><span class=hidden-xs>Neut<span class=hidden-md>ral</span></span> ({{0+identity.data.receivedNeutral}})</span></a></li><li ng-class="{active: (filters.type === \'rating:negative\') }" ng-click="setFilters({type: \'rating:negative\'})"><a><span class=negative><span class="visible-xs-inline glyphicon glyphicon-thumbs-down"></span><span class=hidden-xs>Neg<span class=hidden-md>ative</span></span> ({{0+identity.data.receivedNegative}})</span></a></li></ul></div></div><message auth=authentication ipfs=ipfs msg-utils=msgUtils msg=msg page-info=identity ng-repeat="msg in received.list | filter:msgFilter | orderBy:\'signedData.timestamp\' : true as receivedFiltered" ng-click="openMessage($event, msg, \'lg\')"></message></div>');
$templateCache.put('app/identities/show.sent.html','<div infinite-scroll=getSentMsgs() infinite-scroll-distance=2 infinite-scroll-disabled="true || !identity ||\xA0activeTab != 2"><div class=panel ng-class="{\'mar-bot5\': (filters.type.indexOf(\'rating\') === 0)}"><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === null) }" ng-click="setFilters({ type: null })"><a>All</a></li><li ng-class="{active: (filters.type === \'rating\') }" ng-click="setFilters({type: \'rating\'})"><a>Rating</a></li><li ng-class="{active: (filters.type === \'verification\') }" ng-click="setFilters({type:\'verification\'})"><a>Verification</a></li><!-- <li ><a href="#" data-val="other"><span class="glyphicon glyphicon-question-sign"></span> Other</a></li> --></ul></div></div><div ng-show="filters.type.indexOf(\'rating\') === 0" class=panel><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === \'rating:positive\') }" ng-click="setFilters({type: \'rating:positive\'})"><a><span class=positive><span class="visible-xs-inline glyphicon glyphicon-thumbs-up"></span><span class=hidden-xs>Pos<span class=hidden-md>itive</span></span> ({{0+identity.data.sentPositive}})</span></a></li><li ng-class="{active: (filters.type === \'rating:neutral\') }" ng-click="setFilters({type: \'rating:neutral\'})"><a><span class=neutral><span class="visible-xs-inline glyphicon glyphicon-question-sign"></span><span class=hidden-xs>Neut<span class=hidden-md>ral</span></span> ({{0+identity.data.sentNeutral}})</span></a></li><li ng-class="{active: (filters.type === \'rating:negative\') }" ng-click="setFilters({type: \'rating:negative\'})"><a><span class=negative><span class="visible-xs-inline glyphicon glyphicon-thumbs-down"></span><span class=hidden-xs>Neg<span class=hidden-md>ative</span></span> ({{0+identity.data.sentNegative}})</span></a></li></ul></div></div><message auth=authentication ipfs=ipfs msg-utils=msgUtils msg=msg page-info=identity ng-repeat="msg in sent | filter:msgFilter | orderBy:\'signedData.timestamp\' : true as sentFiltered" ng-click="openMessage($event, msg, \'lg\')"></message></div><div ng-if="sentFiltered.length == 0" class="alert alert-info text-center">No messages yet</div>');
$templateCache.put('app/identities/show.stats.html','<div><p class="hidden-md hidden-lg" ng-hide=!stats.name><span ng-bind=idValue class=idValue></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType class=idType></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType class=idType></a></small></p><div class=stats-box><div class=row><div class=col-xs-12><p class=align-center><identicon ng-click=openProfilePhotoUploadModal() identity=identity ipfs=ipfs border=4 show-distance=0 width=230 ng-if=hideProfilePhoto></identicon><identicon ng-click=openProfilePhotoUploadModal() identity=identity ipfs=ipfs border=4 show-distance=0 width=230 ng-if=!hideProfilePhoto></identicon></p></div></div><div class=row><div class=col-xs-12><h4><span class="visible-xs-inline-block visible-sm-inline-block mar-right15"><span ng-show="idType === \'keyID\' || idType === \'uuid\'"><identicon identity=idAttr width=35></identicon></span><span ng-hide="idType === \'keyID\' || idType === \'uuid\'"><span ng-if=!(identity.data.mostVerifiedAttributes.name||identity.data.mostVerifiedAttributes.nickname)><span ng-bind=idValue class=idValue></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType class=idType></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType class=idType></a> </small></span></span></span><span ng-bind=identity.primaryName></span> <span class="glyphicon glyphicon-ok-sign" style=color:#337ab7 uib-tooltip="Verified by a trusted verifier" ng-if=identity.verified></span> <span ng-hide="!identity.data.mostVerifiedAttributes.nickname || identity.data.mostVerifiedAttributes.nickname == identity.data.mostVerifiedAttributes.primaryName">(<span class=text-muted ng-bind=identity.nickname></span>) </span><button class="mar-left15 visible-xs-inline-block visible-sm-inline-block btn btn-default" ng-click=openSharePageModal()><span class="glyphicon glyphicon-share mar-right5"></span> Share</button> <span ng-if="identity.data.trustDistance === 0" class="label label-default pull-right">viewpoint</span> <span ng-if="identity.data.trustDistance > 0" ng-bind="identity.data.trustDistance | ordinal" class="label label-default pull-right"></span> <span ng-if="identity.data.trustDistance === false" class="label label-default pull-right">unconnected</span></h4></div></div><div class=row><div class="col-xs-12 col-sm-6 col-md-12 mar-bot10 mar-top10"><div class=mar-bot10 ng-if="authentication.user && !identity.hasProperName && !nameAdded"><a href="" ng-click=addName() ng-hide=addingName>Add name</a><form class=form-inline ng-show=addingName ng-submit=addName(name)><div class=form-group><input focus-on=addNameFocus type=text class=form-control ng-model=name placeholder="Add name"></div><button type=submit class="btn btn-default"><span class="glyphicon glyphicon-plus"></span></button></form></div><p><b>Received: <span ng-if="identity.data.receivedPositive || identity.data.receivedNegative"><span ng-bind="identity.data.receivedPositive / (identity.data.receivedPositive+identity.data.receivedNeutral+identity.data.receivedNegative) * 100 | number:0"></span>% positive </span><span ng-if="!(identity.data.receivedPositive || identity.data.receivedNegative)">&mdash;</span></b><br>Sent: <span ng-if="identity.data.sentPositive || identity.data.sentNegative"><span ng-bind="identity.data.sentPositive / (identity.data.sentPositive+identity.data.sentNeutral+identity.data.sentNegative) * 100 | number:0"></span>% positive </span><span ng-if="!(identity.data.sentPositive || identity.data.sentNegative)">&mdash;</span></p><!--\n          <p class="received-stats">\n          <div><strong>Received</strong></div>\n          <div>\n          <strong>\n          <span class="positive"><span class="glyphicon glyphicon-thumbs-up"></span> <span ng-bind="identity.data.receivedPositive">-</span></span>\n          <span class="neutral"><span class="glyphicon glyphicon-question-sign"></span> <span ng-bind="identity.data.receivedNeutral">-</span></span>\n          <span class="negative"><span class="glyphicon glyphicon-thumbs-down"></span> <span ng-bind="identity.data.receivedNegative">-</span></span>\n          </strong>\n          </div>\n          </p>\n          <p>\n          <div>Sent</div>\n          <div>\n          <span class="positive"><span class="glyphicon glyphicon-thumbs-up"></span> <span ng-bind="identity.data.sentPositive">-</span></span>\n          <span class="neutral"><span class="glyphicon glyphicon-question-sign"></span> <span ng-bind="identity.data.sentNeutral">-</span></span>\n          <span class="negative"><span class="glyphicon glyphicon-thumbs-down"></span> <span ng-bind="identity.data.sentNegative">-</span></span>\n          </div>\n          </p> --><div ng-if="scores.verifier && scores.verifier.score > 0" class="text-center alert alert-info"><span class="fa fa-shield" style=font-size:2em></span><p>This identity is a <b>trusted verifier</b> in this web of trust. It can grant verification checkmarks.</p></div><div ng-if=isUniqueType class="mar-top10 quick-contact"><ul class=list-unstyled><li ng-repeat="a in attributes" ng-if=a.quickContact><a ng-href={{a.link}}><span ng-class=a.iconStyle></span><span ng-bind="a.linkName || a.value"></span></a></li><li ng-if=stats.first_seen><span class="fa fa-calendar"></span>First seen: <span ng-if=stats.first_seen ng-bind="stats.first_seen|date:\'mediumDate\'"></span> <span ng-if=!stats.first_seen>&mdash;</span></li></ul></div></div><div class="col-xs-12 col-sm-6 col-md-12 mar-top10"><div ng-if="isUniqueType && hasThumbsUp" class="stats-box mar-bot10"><h5>Thumbs up</h5><a ng-repeat="msg in thumbsUp | orderBy:\'authorTrustDistance\'" ng-class="{ \'hidden-xs\': $index > 3, \'hidden-sm\': $index > 4 }" class="mar-right5 mar-bot5" ui-sref="identities.show({ type: msg.linkToAuthor.type, value: msg.linkToAuthor.value })" uib-tooltip="{{ msg.author_name || msg.linkToAuthor.value }}"><identicon ipfs=ipfs identity=msg.author class=no-glow border=3 width=60></identicon></a></div><div ng-if="isUniqueType && hasThumbsDown" class="stats-box mar-bot10"><h5>Thumbs down</h5><a ng-repeat="msg in thumbsDown | orderBy:\'authorTrustDistance\'" ng-class="{ \'hidden-xs\': $index > 3, \'hidden-sm\': $index > 4 }" class="mar-right5 mar-bot5" ui-sref="identities.show({ type: msg.linkToAuthor.type, value: msg.linkToAuthor.value })" uib-tooltip="{{ msg.author_name || msg.linkToAuthor.value }}"><identicon ipfs=ipfs identity=msg.author class=no-glow border=3 width=60></identicon></a></div></div></div></div></div>');
$templateCache.put('app/identities/upload.modal.html','<div class="col-md-10 col-md-offset-1" ng-controller=IdentitiesController><div class="panel panel-default mar-top15"><div class=panel-heading><form name=form><div class="drop-box mar-bot10" ngf-resize="squarify ? {ratio:\'1:1\',centerCrop:true} : {}" ngf-select ngf-drop ng-model=file name=file ngf-pattern="\'image/*\'" ngf-accept="\'image/*\'" ngf-max-size=5MB ngf-min-height=100 style=width:100%;min-height:300px;text-align:center><div ng-if=!file style="padding:120px 0">Drop file or click</div><img ng-if=file ngf-src=file width=70%></div><button class="btn btn-primary" ng-disabled=!file type=submit ng-click=uploadModalCallback(file)>{{ modalButtonText }}</button></form></div></div></div>');
$templateCache.put('app/main/about.html','<div class="container mar-bot30"><div class=col-md-8><div class="panel panel-default"><div class=panel-body><h3>About Iris</h3><p class=lead>Iris is a social networking application that stores everything on its users\' devices which communicate directly with each other &mdash; no corporate gatekeepers needed.</p><p>Longer description on <a href=https://github.com/irislib/iris/blob/master/README.md>GitHub</a>.</p><h4>Available at</h4><ul><li><a href=https://iris.to>iris.to</a></li><li><a href=https://iris.cx>iris.cx</a></li><li><a href=https://irislib.github.io>irislib.github.io</a></li><li>Browser extension: use Iris even if you are offline. In the future, can be used to sign in to websites.<ul><li><a href=https://chrome.google.com/webstore/detail/iris/oelmiikkaikgnmmjaonjlopkmpcahpgh>Chrome</a></li><li><a href=https://addons.mozilla.org/en-US/firefox/addon/irisapp/ >Firefox</a></li></ul></li><!-- TODO: add dynamically updated /ipfs url --><li>Upcoming: Electrum desktop app with bluetooth and LAN peerfinding!</li></ul><h4>Privacy</h4><p>It\'s important to remember that as for now, <b>everything you post on Iris is public</b>.</p><p>Private chat between users will probably be implemented at some point, and other user permissions and groups maybe later.</p><p>See <a ui-sref=privacy>privacy policy</a> for more information.</p></div></div></div></div>');
$templateCache.put('app/main/createuser.partial.html','<div class="panel panel-default" ng-if=!authentication.user><div class=panel-body><form class=form-inline ng-submit=createUser(newUserName)><div class=form-group><input focus-on=newUser style=min-width:200px type=text id=newUserName class=form-control ng-disabled=creatingUser ng-model=newUserName placeholder="What\'s your name?"></div><i class="hidden-xs mar-right5"></i> <button type=submit id=createUserBtn class="btn btn-primary" ng-disabled="!newUserName || creatingUser">Go!</button> <i class="mar-left15 hidden-xs"></i> <i class="mar-top5 visible-xs"></i><div class=form-group>or <a ng-click=openLoginModal() href="">Log in</a></div></form></div></div>');
$templateCache.put('app/main/custom-search-row.html','<a class=search-result-row><identicon ipfs=$parent.$parent.$parent.$parent.ipfs identity=match.label border=3 width=46 class=mar-right10></identicon><span ng-bind-html="match.label.primaryName | uibTypeaheadHighlight:query"></span></a>');
$templateCache.put('app/main/getstarted.partial.html','<div ng-if="authentication.user && authentication.identity.data && !authentication.identity.data.sentPositive" class="alert alert-info text-center"><p class=h3 style=margin-bottom:15px>Welcome to social networking freedom!</p><p>Start by upvoting your friends: ask for their profile links or scan their QR codes (<b><a ui-sref=identities.create>Add contact</a></b>). That makes their posts visible to you.</p><p>Alternatively, you can upvote this Iris distribution\'s <b><a ui-sref="identities.show({type:\'keyID\', value:defaultIndexKeyID})">default address book</a></b> as a starting point.</p><br></div><div ng-if="authentication.user && authentication.identity.data && authentication.identity.data.sentPositive && !authentication.identity.data.receivedPositive" class="alert alert-info text-center"><p class=h3 style=margin-bottom:15px>Great, you have trusted contacts!</p><p>Next you should <b>ask your friends to upvote your account</b>, so they and their network will see your messages.</p><p><button ng-click=copyToClipboard(authentication.user.url) class="btn btn-primary mar-top10">Copy link to your profile</button></p><p>Or show them your QR code:</p><div class=mar-top20><qrcode data={{authentication.user.url}} size=240></qrcode></div><br></div><div ng-if="authentication.user && authentication.identity.data && authentication.identity.data.sentPositive && authentication.identity.data.receivedPositive && localSettings && !localSettings.profileUploadNotificationClosed && authentication.identity.mva && !authentication.identity.mva.profilePhoto" class="alert alert-info text-center"><p class=h3 style=margin-bottom:15px>You\'re good to go!</p><p style="margin-bottom: 15px">Set a profile picture?</p><p><button class="btn btn-primary mar-right15" ng-click=openProfilePhotoUploadModal()>Yes</button> <button class="btn btn-default" ng-click=closeProfileUploadNotification()>Not now</button></p><br></div>');
$templateCache.put('app/main/login.modal.html','<div class="col-md-10 col-md-offset-1"><div class="panel panel-default mar-top15"><div class=panel-heading><!--<div class="checkbox">\n        <label>\n          <input type="checkbox" value="" checked="checked">\n          Remember me\n        </label>\n      </div>--><h3>New user</h3><form ng-submit=createUser(newUserName)><input focus-on=newUser type=text class=form-control ng-model=newUserName placeholder="Your name"><br><input type=submit value=Go! class="btn btn-primary" ng-disabled=!newUserName></form><br><h3>Existing user</h3><form><textarea rows=6 class=form-control placeholder="Paste private key or drop file" ng-model=privateKeySerialized></textarea><br><button class="btn btn-primary" ng-disabled=!privateKeySerialized ng-click="loginWithKey(privateKeySerialized, publicKeyPEM)">Log in</button> <a class=pull-right href="" ng-click="lostKey = !lostKey">Lost your key?</a></form><div ng-if=lostKey class="mar-top30 panel panel-info"><div class=panel-heading>Don\'t worry: just go with "New user" and ask your trusted contacts to verify that your new key belongs to the already existing identity.</div></div></div></div></div>');
$templateCache.put('app/main/logout.modal.html','<div class="col-md-10 col-md-offset-1"><div class="panel panel-default mar-top15"><div class=panel-heading>Log out?</div><div class=panel-body><p>You cannot log in back to this account unless you have saved a backup of your private key.</p><a class="btn btn-default" ng-click=$dismiss()>Cancel</a> <a href=# class="btn btn-danger" ng-click=logout()>Log out</a></div></div></div>');
$templateCache.put('app/main/privacy-policy.html','<div class="container mar-bot30"><div class=col-md-8><div class="panel panel-default"><div class=panel-body><h3>Privacy policy</h3><p>Iris is a peer-to-peer application like Bitcoin, not a corporate or other legal entity. All data is stored and indexed by the users who run the application. The application only makes connections to other decentralized network peers.</p><p>Please keep in mind that everything you post or add on Iris is <b>public</b> unless otherwise stated.</p><p>Iris\'s contact list feature can be compared to your mobile phone\'s address book, but with synchronization with others. Users can add contact details and attributes of arbitrary type.</p><p>Developers of the application have no control over content added by users and are not responsible for it. It is the user\'s responsibility to comply with applicable laws regarding public messaging and listing of personal information.</p><p>An Iris "account" is a cryptographic keypair generated and stored locally on the user\'s device (in browser or other application). It does not constitute a relationship with any corporate or other entity.</p></div></div></div></div>');
$templateCache.put('app/main/settings.html','<div class=container><div class=col-md-8><h3>Settings</h3><div ng-if=authentication.user><p><b>For normal people</b></p><div class="panel panel-default"><div class=panel-heading>Log out</div><div class=panel-body><p>You cannot log in back to this account unless you have saved a backup of your private key.</p><p><button class="btn btn-danger" ng-click=openLogoutModal()>Log out</button></p></div></div><div class="panel panel-danger"><div class=panel-heading>Private key</div><div class=panel-body><p>Private key is used to log in to your account. Keep your private key safe!</p><p><button class="btn btn-danger" ng-click=copyToClipboard(privateKey|json)>Copy to clipboard</button> <button class="btn btn-danger" ng-click=downloadText(privateKey|json)>Download</button></p></div></div></div><p><b>Geeky stuff</b></p><div class="panel panel-default"><div class=panel-heading>GUN peers</div><div class=panel-body><p><a href=https://gun.eco/ >GUN</a> stores dynamic content: indexes of messages and identities.</p></div><div class=table-responsive><table class="table table-striped"><tbody><tr ng-repeat="(key, value) in gun[\'_\'].opt.peers"><td><span ng-show="value.wire && value.wire.hied" class="positive fa fa-check-circle"></span> <span ng-hide="value.wire && value.wire.hied" class="negative fa fa-times-circle"></span> <small ng-bind=key></small></td><td><button ng-click=removeGunPeer(key) class="pull-right btn btn-danger"><i class="glyphicon glyphicon-trash"></i></button></td></tr><tr><td colspan=2><form class=form-inline ng-submit=addGunPeer(gunUrl)><input class=form-control type=text placeholder="Peer url" ng-model=gunUrl> <input class="btn btn-primary" type=submit value="Add GUN peer"></form></td></tr></tbody></table></div></div><div class="panel panel-default"><div class=panel-heading>IPFS peers</div><div class=panel-body><p><a href=https://ipfs.io>IPFS</a> stores static content: messages and image files.</p><p ng-hide="ipfsPeers && ipfsPeers.length"><small>No IPFS peers</small></p></div><div class=table-responsive><table class="table table-striped"><tbody><tr ng-repeat="peer in ipfsPeers"><td><span class="positive fa fa-check-circle"></span> <small ng-bind=peer.addr.toString()></small></td><td><button ng-click=removeIpfsPeer(peer.addr.toString()) class="pull-right btn btn-danger"><i class="glyphicon glyphicon-trash"></i></button></td></tr><tr><td colspan=2><form class=form-inline ng-submit=addIpfsPeer(ipfsUrl)><input class=form-control type=text placeholder="Peer url" ng-model=ipfsUrl> <input class="btn btn-primary" type=submit value="Add IPFS peer"></form></td></tr></tbody></table></div></div><!--\n    <div class="panel panel-default">\n      <div class="panel-heading">\n        Iris indexing settings\n      </div>\n      <div class="panel-body">\n        <p>\n          <pre ng-bind="irisIndex.options|json"></pre>\n        </p>\n      </div>\n    </div>--><p><b>Other stuff</b></p><div class="panel panel-default"><div class=panel-body><p><a ui-sref=about>About Iris</a></p><p><a ui-sref=privacy>Privacy policy</a></p></div></div></div></div>');
$templateCache.put('app/messages/create.partial.html','<div class="panel panel-default panel-default" ngf-drop ngf-keep="\'distinct\'" ngf-drop-disabled="addingMessage || loggingIn || !authentication.user" ng-model=newMessage.files ngf-drag-over-class="\'dragover\'" ngf-multiple=true><div class=panel-body><form ng-submit="createMessage($event, { type: \'post\', comment: newMessage.comment }, { files: newMessage.files })"><div class=row ng-if="newMessage.files && newMessage.files.length"><div class=col-xs-12><p><span ng-repeat="file in newMessage.files"><a ng-show="[\'video\',\'image\',\'audio\'].indexOf(file.type.substr(0,5)) == -1" ng-bind=file.name></a> <img ngf-thumbnail="file || \'/thumb.jpg\'" ng-style="{\'max-width\': newMessage.files.length > 1 ? \'150px\' : \'100%\', \'max-height\': newMessage.files.length > 1 ? \'150px\' : \'450px\'}" style="margin-right: 15px; margin-bottom: 15px;"><audio controls ngf-src=file></audio><video controls ngf-src=file style="max-width: 100%; max-height: 400px;"></video></span></p></div></div><div class=form-group><textarea style="resize: vertical" ng-disabled="addingMessage || loggingIn || !authentication.user" name=comment class=form-control id=comment ng-model=newMessage.comment placeholder="What\'s on your mind?"></textarea></div><div class=row><div class=col-xs-12><button ng-disabled="addingMessage || loggingIn || !authentication.user || !(newMessage.comment || newMessage.files.length)" type=submit class="btn btn-primary" data-style=zoom-out>Publish</button> <button ngf-select ng-model=newMessage.files ngf-multiple=true href="" ng-disabled="addingMessage || loggingIn || !authentication.user" class="btn btn-default pull-right" data-style=zoom-out><span class="fa fa-paperclip"></span> Add files</button></div></div></form></div></div>');
$templateCache.put('app/messages/create.rating.partial.html','<div ng-style=newMessage.style class="panel panel-default panel-success" id=newRatingPanel><div class=panel-body id=write-feedback><form ng-controller=MessagesController ng-submit="createMessage($event, { type: \'rating\', rating: newMessage.rating, comment: newMessage.comment }, {addTo: received})"><div class=form-group><textarea name=comment class=form-control id=comment ng-model=newMessage.comment ng-disabled=addingMessage placeholder="Comment (optional)"></textarea></div><div class=row><div class="col-sm-10 col-xs-12 rating-slider" id=write-msg-slider><rzslider rz-slider-model=newMessage.rating rz-slider-options=slider.options min=-3 max=3 step=1></rzslider><span class="hidden-xs write-msg-icons mar-left5"><span ng-repeat="i in iconCount(newMessage.rating) track by $index" class="write-msg-icon glyphicon glyphicon-thumbs-up mar-left5" ng-class="[iconStyle(newMessage.rating), iconClass(newMessage.rating)]"></span></span></div><div class="col-sm-2 col-xs-12" style=text-align:right><span class="visible-xs pull-left write-msg-icons"><span ng-repeat="i in iconCount(newMessage.rating) track by $index" class="write-msg-icon glyphicon glyphicon-thumbs-up mar-left5" ng-class="[iconStyle(newMessage.rating), iconClass(newMessage.rating)]"></span> </span><button ng-disabled=addingMessage type=submit class="pull-right btn btn-primary" data-style=zoom-out><span ng-show="newMessage.rating == 0">Neutral</span> <span ng-show="newMessage.rating > 0">Upvote</span> <span ng-show="newMessage.rating < 0">Downvote</span></button></div></div></form></div></div>');
$templateCache.put('app/messages/distance-selector.partial.html','<div class="text-center alert alert-info">Viewing as:<br class=hidden-sm><span ng-if=viewpoint><a ui-sref="identities.show({ type: viewpoint.type, value: viewpoint.value })" class=id-link><span class="distance-container mar-right5 mar-left5"><identicon ipfs=ipfs identity=viewpoint.identity border=3 width=35></identicon></span><strong ng-bind=viewpoint.mostVerifiedAttributes.name.attribute.value></strong></a></span><br class=hidden-sm>Max distance from viewpoint: <span class="btn-group trust-distance-selector"><button type=button class="btn btn-default" ng-click="setFilters({maxDistance: -1})" ng-class="{active: filters.maxDistance === -1}" uib-tooltip="Distance filter off">\u2715</button> <button type=button class="btn btn-default" ng-click="setFilters({maxDistance: 1})" ng-class="{active: filters.maxDistance === 1}">1</button> <button type=button class="btn btn-default" ng-click="setFilters({maxDistance: 2})" ng-class="{active: filters.maxDistance === 2}">2</button> <button type=button class="btn btn-default" ng-click="setFilters({maxDistance: 3})" ng-class="{active: filters.maxDistance === 3}">3</button> <button type=button class="btn btn-default" ng-click="setFilters({maxDistance: 0})" ng-class="{active: filters.maxDistance === 0}" uib-tooltip=Unlimited>\u221E</button></span></div>');
$templateCache.put('app/messages/filters.partial.html','<div class="panel panel-default"><div class="panel-heading visible-xs visible-sm" ng-click="collapseFilters = !collapseFilters"><h4 class=panel-title><a><span class="fa fa-filter"></span> Filters</a></h4></div><div class="panel-body filters" uib-collapse=collapseFilters><ul class="nav nav-pills nav-stacked msg-type-filter"><li ng-class="{active: (filters.type === null) }" ng-click="setFilters({ type: null })"><a><span class="glyphicon glyphicon-home"></span> All</a></li><li ng-class="{active: (filters.type === \'post\') }" ng-click="setFilters({ type: \'post\' })"><a><span class="fa fa-pencil"></span> Post</a></li><li ng-class="{active: (filters.type === \'rating\') }" ng-click="setFilters({type: \'rating\'})"><a><span class="glyphicon glyphicon-thumbs-up"></span> Rating</a></li><ul class="nav nav-pills nav-stacked" style="padding-left: 1em;"><li ng-class="{active: (filters.type === \'rating:positive\') }" ng-click="setFilters({type: \'rating:positive\'})"><a><span class=positive><span class="glyphicon glyphicon-thumbs-up"></span> Positive</span></a></li><li ng-class="{active: (filters.type === \'rating:neutral\') }" ng-click="setFilters({type: \'rating:neutral\'})"><a><span class=neutral><span class="glyphicon glyphicon-question-sign"></span> Neutral</span></a></li><li ng-class="{active: (filters.type === \'rating:negative\') }" ng-click="setFilters({type: \'rating:negative\'})"><a><span class=negative><span class="glyphicon glyphicon-thumbs-down"></span> Negative</span></a></li></ul><li ng-class="{active: (filters.type === \'verification\') }" ng-click="setFilters({type:\'verification\'})"><a><span class="glyphicon glyphicon-ok"></span> Verification</a></li><!-- <li ><a href="#" data-val="other"><span class="glyphicon glyphicon-question-sign"></span> Other</a></li> --></ul><div ng-include="\'app/messages/distance-selector.partial.html\'"></div></div></div>');
$templateCache.put('app/messages/list.html','<div class=container><section><div ng-if=!authentication.user class=jumbotron><div class=align-center><h1>Social networking freedom</h1></div><div class=row><div class=col-sm-4><div class=align-center><i class="hidden-xs fa fa-download fa-5x mar-bot20"></i><p><i class="hidden-sm hidden-md hidden-lg fa fa-download"></i> Everything is stored on users\' devices &mdash; no corporate gatekeepers.</p></div></div><div class=col-sm-4><div class=align-center><i class="hidden-xs fa fa-thumbs-up fa-5x mar-bot20"></i><p><i class="hidden-sm hidden-md hidden-lg fa fa-thumbs-up"></i> Filter all content using your web of trust.</p></div></div><div class=col-sm-4><div class=align-center><i class="hidden-xs fa fa-check fa-5x mar-bot20"></i><p><i class="hidden-sm hidden-md hidden-lg fa fa-check"></i> Keep your contacts and trusted online identity up-to-date.</p></div></div></div><p class="align-center mar-top15" style=margin-bottom:0><a ui-sref=about>Read more</a></p></div><div ng-if=!authentication.user class=mar-top25-xs></div><div id=messages class=row><div class=col-md-4><div class="hidden-xs hidden-sm" ng-include="\'app/messages/filters.partial.html\'"></div></div><div class=col-md-8><div ng-include="\'app/main/createuser.partial.html\'"></div><div ng-include="\'app/main/getstarted.partial.html\'"></div><div ng-include="\'app/messages/create.partial.html\'"></div><div class="visible-xs visible-sm" ng-include="\'app/messages/filters.partial.html\'"></div><div ng-init="filters.maxDistance = 0;filters.limit = 10" infinite-scroll="filters.limit = filters.limit + 1" infinite-scroll-distance=1 infinite-scroll-disabled="!msgs || !msgs.list || msgs.list.length < filters.limit || !irisIndex"><message auth=authentication ng-repeat="msg in msgs.list | filter:msgFilter | orderBy:\'signedData.timestamp\' : true | limitTo:filters.limit as filteredMsgs track by msg.hash" msg-utils=msgUtils ipfs=ipfs msg=msg ng-click="openMessage($event, msg, \'lg\');$event.preventDefault()"></message></div><div class="alert alert-info text-center" ng-if=!filteredMsgs.length>No messages yet</div></div></div></section></div>');
$templateCache.put('app/messages/share.modal.html','<div class="panel panel-default"><div class=panel-body><h3>Share message?</h3><form ng-submit="shareMessage(message, comment)"><p><input type=text class=form-control placeholder="Add comment" ng-model=comment></p><p><message auth=authentication ipfs=ipfs show-recipient=true msg=msg page-info=info ng-repeat="msg in [message]"></message></p><button class="btn btn-primary">Share</button></form></div></div>');
$templateCache.put('app/messages/show.html','<section><div class="col-md-8 col-md-offset-2 msg-col"><message auth=authentication msg-utils=msgUtils ipfs=ipfs show-recipient=true msg=msg page-info=info ng-repeat="msg in [message]"></message><div class="panel panel-info"><div class=panel-heading>Message origin verified by <span ng-show=message.verifiedByAttr><identicon identity=message.verifiedByAttr class=mar-right5 border=3 width=35></identicon></span>which is associated with <a ng-if=false ng-bind=message.signerName||message.signerKeyID ui-sref="identities.show({type: \'keyID\', value: message.signerKeyID })"></a> <strong><a ui-sref="identities.show({ type: \'keyID\', value: message.signerKeyID })" class=id-link><identicon ipfs=ipfs identity=message.verifiedBy class=mar-right5 border=3 width=35></identicon><span ng-bind=message.verifiedBy.primaryName></span></a></strong></div></div><p ng-if=message.data.context><small>Context: {{message.data.context}}</small></p><p><button class="btn btn-default" ng-click="collapseRawData = !collapseRawData">Show raw data</button></p><pre uib-collapse=!collapseRawData ng-bind=message.strData></pre><!-- <div class="mar-top15 mar-bot10"><button ng-click="messageModal.close()" class="btn btn-default">Close</button></div> --></div></section>');
$templateCache.put('app/messages/show.modal.html','<div ng-include="\'app/messages/show.html\'"></div>');
$templateCache.put('app/services/notification.template.html','<div class="ui-notification panel panel-info"><div class=panel-heading><h3 ng-show=title ng-bind-html=title></h3><div class=message ng-bind-html=message></div></div></div>');
$templateCache.put('app/components/message/message.template.html','<div class="panel msg" ng-class="{\'panel-info\':$ctrl.msg.isVerification, \'panel-default\':$ctrl.msg.isPost}" style={{$ctrl.msg.bgColor}} ng-if=$ctrl.msg.signedData><div class=message-panel ng-class="{ \'panel-body\': !$ctrl.msg.isVerification, \'panel-heading\': $ctrl.msg.isVerification || $ctrl.msg.isUnverification }"><p><span class="mar-left5 pull-right" ng-class=$ctrl.msg.iconStyle ng-repeat="n in $ctrl.msg.iconCount track by $index"></span> <span class="mar-left5 pull-right fa fa-refresh" uib-tooltip=Pending ng-if=$ctrl.msg.local></span> <strong><a ui-sref="identities.show({ type: $ctrl.msg.linkToAuthor.type, value: $ctrl.msg.linkToAuthor.value })" class=id-link><identicon ipfs=$ctrl.ipfs identity=$ctrl.msg.author class=mar-right5 border=3 width=35></identicon><span ng-bind=$ctrl.msg.author_name></span> </a></strong><span ng-show=!$ctrl.msg.sameAuthorAndRecipient><small><i class="glyphicon glyphicon-play"></i></small> <a ui-sref="identities.show({ type: $ctrl.msg.linkToRecipient.type, value: $ctrl.msg.linkToRecipient.value })" class=id-link><identicon ng-if=$ctrl.showRecipient ipfs=$ctrl.ipfs identity=$ctrl.msg.recipient class=mar-right5 border=3 width=35></identicon><span ng-bind="($ctrl.msg.recipientIsSelf && $ctrl.pageInfo.primaryName)||$ctrl.msg.recipient_name"></span> </a></span>- <a ui-sref="messages.show({ id: ($ctrl.msg.ipfsUri || $ctrl.msg.hash) })" ng-bind="$ctrl.msg.signedData.timestamp|date:\'medium\'" class="text-muted small" style=display:inline-block;></a></p><div ng-if="$ctrl.msg.isVerification || $ctrl.msg.isUnverification"><div ng-repeat="a in $ctrl.msg.recipientArray"><small><b ng-bind=a.type></b>: <span ng-if="a.type == \'email\' || a.type == \'url\'" ng-bind-html="a.value | linky"></span> <span ng-if="!(a.type == \'email\' || a.type == \'url\')" ng-bind=a.value></span></small></div></div><p><span ng-repeat="attachment in $ctrl.msg.attachments"><a ng-show="[\'video\',\'image\',\'audio\'].indexOf(attachment.typeSubstr) == -1" ng-bind=attachment.name></a> <img ng-show="attachment.type && attachment.typeSubstr == \'image\'" alt={{attachment.uri}} ng-src={{attachment.src}} ng-style="{\'max-width\': $ctrl.msg.attachments.length > 1 ? \'150px\' : \'100%\', \'max-height\': $ctrl.msg.attachments.length > 1 ? \'150px\' : \'450px\'}" style="margin-right: 15px; margin-bottom: 15px"><video ng-show="attachment.type && [\'video\',\'audio\'].indexOf(attachment.typeSubstr) != -1" controls ng-src={{attachment.src}} style="max-width: 100%; margin-right: 15px; margin-bottom: 15px"></video></span></p><p ng-if=$ctrl.msg.attachments></p><p style="white-space: pre-line;" ng-if=$ctrl.msg.signedData.comment hm-read-more hm-limit=280 hm-text="{{ $ctrl.msg.signedData.comment|linky }}" hm-more-text="Show more" hm-less-text="Show less"></p><message ng-if="$ctrl.msg.sharedMsg && $ctrl.msgUtils" msg=$ctrl.msg.sharedMsg ipfs=$ctrl.ipfs auth=$ctrl.auth></message><span ng-class="{disabled: !$ctrl.auth.user}" class=pull-right ng-if="$ctrl.msgUtils && $ctrl.msg.signedData.type == \'post\'"><a class=msg-reaction href="" ng-class="{active: $ctrl.msg.showCommentField}" ng-click="$ctrl.auth.user && ($ctrl.msg.showCommentField = !$ctrl.msg.showCommentField)"><i class="glyphicon glyphicon-comment"></i></a> <a class=msg-reaction href="" ng-click="$ctrl.auth.user && $ctrl.msgUtils.share($ctrl.msg)"><b ng-if=$ctrl.msg.sharesArr.length>{{$ctrl.msg.sharesArr.length}} </b><i class="glyphicon glyphicon-retweet"></i></a> <a class=msg-reaction ng-class="{active: $ctrl.msg.liked}" href="" ng-click="$ctrl.auth.user && $ctrl.msgUtils.like($ctrl.msg)"><b ng-if="$ctrl.msg.likes || $ctrl.msg.liked">{{$ctrl.msg.likes || 1}} </b><i class=glyphicon ng-class="{\'glyphicon-heart-empty\': !$ctrl.msg.liked, \'glyphicon-heart\': $ctrl.msg.liked,}"></i></a></span><form class=form-inline ng-submit="$ctrl.msgUtils.replyTo($ctrl.msg, reply)" ng-show="$ctrl.auth.user && $ctrl.msg.showCommentField"><div class=form-group><input focus-on=addNameFocus type=text class=form-control ng-model=reply placeholder="Write a reply"></div><button type=submit class="btn btn-primary">Post</button></form><div ng-repeat="m in $ctrl.msg.repliesArr | orderBy:\'signedData.timestamp\' : true" class="mar-top15 clear"><a ui-sref="identities.show({ type: m.linkToAuthor.type, value: m.linkToAuthor.value })" class=id-link><identicon ipfs=$ctrl.ipfs identity=m.author class=mar-right5 border=3 width=35></identicon><span ng-bind=m.author_name></span> </a>- <a ui-sref="messages.show({ id: (m.ipfsUri || m.hash) })" ng-bind="m.signedData.timestamp|date:\'medium\'" class="text-muted small mar-right15" style=display:inline-block;></a> <span ng-bind=m.signedData.comment></span></div></div></div>');}]);
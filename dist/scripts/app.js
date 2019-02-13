(function() {
  angular.module('identifiAngular', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'ui.bootstrap', 'angular-parallax', 'infinite-scroll', 'LocalStorageModule', 'rzModule', 'angular-clipboard', 'monospaced.qrcode', 'ngFileUpload', 'qrScanner']);

  angular.module('identifiAngular').filter('escape', [
    function() {
      return function(input) {
        return encodeURIComponent(encodeURIComponent(input));
      };
    }
  ]);

  angular.module('identifiAngular').filter('encodeURIComponent', [
    function() {
      return function(input) {
        return encodeURIComponent(input);
      };
    }
  ]);

  angular.module('identifiAngular').filter('highlight', function($sce) {
    return function(text, phrase) {
      if (typeof text === 'string' && phrase) {
        text = text.replace(new RegExp('(' + phrase + ')', 'gi'), '<b>$1</b>');
        return $sce.trustAsHtml(text.toString());
      }
      return text;
    };
  });

  angular.module('identifiAngular').filter('ordinal', function() {
    return function(input) {
      var s, v;
      s = ['th', 'st', 'nd', 'rd'];
      v = input % 100;
      return input + (s[(v - 20) % 10] || s[v] || s[0]);
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgubW9kdWxlLmpzIiwic291cmNlcyI6WyJpbmRleC5tb2R1bGUuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixFQUNFLENBQUMsV0FBRCxFQUFjLFdBQWQsRUFBMkIsU0FBM0IsRUFBc0MsWUFBdEMsRUFBb0QsWUFBcEQsRUFDQSxRQURBLEVBQ1UsWUFEVixFQUN3QixXQUR4QixFQUNxQyxjQURyQyxFQUNxRCxrQkFEckQsRUFFQSxpQkFGQSxFQUVtQixvQkFGbkIsRUFFeUMsVUFGekMsRUFFcUQsbUJBRnJELEVBR0EsbUJBSEEsRUFHcUIsY0FIckIsRUFHcUMsV0FIckMsQ0FERjs7RUFNQSxPQUFPLENBQUMsTUFBUixDQUFlLGlCQUFmLENBQWlDLENBQUMsTUFBbEMsQ0FBeUMsUUFBekMsRUFBbUQ7SUFBRSxRQUFBLENBQUEsQ0FBQTthQUNuRCxRQUFBLENBQUMsS0FBRCxDQUFBO2VBQ0Usa0JBQUEsQ0FBbUIsa0JBQUEsQ0FBbUIsS0FBbkIsQ0FBbkI7TUFERjtJQURtRCxDQUFGO0dBQW5EOztFQUlBLE9BQU8sQ0FBQyxNQUFSLENBQWUsaUJBQWYsQ0FBaUMsQ0FBQyxNQUFsQyxDQUF5QyxvQkFBekMsRUFBK0Q7SUFBRSxRQUFBLENBQUEsQ0FBQTthQUMvRCxRQUFBLENBQUMsS0FBRCxDQUFBO2VBQ0Usa0JBQUEsQ0FBbUIsS0FBbkI7TUFERjtJQUQrRCxDQUFGO0dBQS9EOztFQUtBLE9BQU8sQ0FBQyxNQUFSLENBQWUsaUJBQWYsQ0FBaUMsQ0FBQyxNQUFsQyxDQUF5QyxXQUF6QyxFQUFzRCxRQUFBLENBQUMsSUFBRCxDQUFBO1dBQ3BELFFBQUEsQ0FBQyxJQUFELEVBQU8sTUFBUCxDQUFBO01BQ0UsSUFBRyxPQUFPLElBQVAsS0FBZSxRQUFmLElBQTRCLE1BQS9CO1FBQ0UsSUFBQSxHQUFPLElBQUksQ0FBQyxPQUFMLENBQWEsSUFBSSxNQUFKLENBQVcsR0FBQSxHQUFNLE1BQU4sR0FBZSxHQUExQixFQUErQixJQUEvQixDQUFiLEVBQW1ELFdBQW5EO0FBQ1AsZUFBTyxJQUFJLENBQUMsV0FBTCxDQUFpQixJQUFJLENBQUMsUUFBTCxDQUFBLENBQWpCLEVBRlQ7O0FBR0EsYUFBTztJQUpUO0VBRG9ELENBQXREOztFQU9BLE9BQU8sQ0FBQyxNQUFSLENBQWUsaUJBQWYsQ0FBaUMsQ0FBQyxNQUFsQyxDQUF5QyxTQUF6QyxFQUFvRCxRQUFBLENBQUEsQ0FBQTtXQUNsRCxRQUFBLENBQUMsS0FBRCxDQUFBO0FBQ0UsVUFBQSxDQUFBLEVBQUE7TUFBQSxDQUFBLEdBQUksQ0FDRixJQURFLEVBRUYsSUFGRSxFQUdGLElBSEUsRUFJRixJQUpFO01BTUosQ0FBQSxHQUFJLEtBQUEsR0FBUTthQUNaLEtBQUEsR0FBUSxDQUFDLENBQUUsQ0FBQSxDQUFDLENBQUEsR0FBSSxFQUFMLENBQUEsR0FBVyxFQUFYLENBQUYsSUFBb0IsQ0FBRSxDQUFBLENBQUEsQ0FBdEIsSUFBNEIsQ0FBRSxDQUFBLENBQUEsQ0FBL0I7SUFSVjtFQURrRCxDQUFwRDtBQXRCQSIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlICdpZGVudGlmaUFuZ3VsYXInLFxuICBbJ25nQW5pbWF0ZScsICduZ0Nvb2tpZXMnLCAnbmdUb3VjaCcsICduZ1Nhbml0aXplJywgJ25nTWVzc2FnZXMnLFxuICAnbmdBcmlhJywgJ25nUmVzb3VyY2UnLCAndWkucm91dGVyJywgJ3VpLmJvb3RzdHJhcCcsICdhbmd1bGFyLXBhcmFsbGF4JyxcbiAgJ2luZmluaXRlLXNjcm9sbCcsICdMb2NhbFN0b3JhZ2VNb2R1bGUnLCAncnpNb2R1bGUnLCAnYW5ndWxhci1jbGlwYm9hcmQnLFxuICAnbW9ub3NwYWNlZC5xcmNvZGUnLCAnbmdGaWxlVXBsb2FkJywgJ3FyU2Nhbm5lciddXG5cbmFuZ3VsYXIubW9kdWxlKCdpZGVudGlmaUFuZ3VsYXInKS5maWx0ZXIgJ2VzY2FwZScsIFsgLT5cbiAgKGlucHV0KSAtPlxuICAgIGVuY29kZVVSSUNvbXBvbmVudCBlbmNvZGVVUklDb21wb25lbnQoaW5wdXQpXG4gXVxuYW5ndWxhci5tb2R1bGUoJ2lkZW50aWZpQW5ndWxhcicpLmZpbHRlciAnZW5jb2RlVVJJQ29tcG9uZW50JywgWyAtPlxuICAoaW5wdXQpIC0+XG4gICAgZW5jb2RlVVJJQ29tcG9uZW50IGlucHV0XG4gXVxuXG5hbmd1bGFyLm1vZHVsZSgnaWRlbnRpZmlBbmd1bGFyJykuZmlsdGVyICdoaWdobGlnaHQnLCAoJHNjZSkgLT5cbiAgKHRleHQsIHBocmFzZSkgLT5cbiAgICBpZiB0eXBlb2YgdGV4dCA9PSAnc3RyaW5nJyBhbmQgcGhyYXNlXG4gICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKG5ldyBSZWdFeHAoJygnICsgcGhyYXNlICsgJyknLCAnZ2knKSwgJzxiPiQxPC9iPicpXG4gICAgICByZXR1cm4gJHNjZS50cnVzdEFzSHRtbCB0ZXh0LnRvU3RyaW5nKClcbiAgICByZXR1cm4gdGV4dFxuXG5hbmd1bGFyLm1vZHVsZSgnaWRlbnRpZmlBbmd1bGFyJykuZmlsdGVyICdvcmRpbmFsJywgLT5cbiAgKGlucHV0KSAtPlxuICAgIHMgPSBbXG4gICAgICAndGgnXG4gICAgICAnc3QnXG4gICAgICAnbmQnXG4gICAgICAncmQnXG4gICAgXVxuICAgIHYgPSBpbnB1dCAlIDEwMFxuICAgIGlucHV0ICsgKHNbKHYgLSAyMCkgJSAxMF0gb3Igc1t2XSBvciBzWzBdKVxuIl19

(function() {
  angular.module('identifiAngular').component('message', {
    bindings: {
      ipfs: '=?',
      msgData: '=',
      pageInfo: '=?',
      showRecipient: '=?'
    },
    templateUrl: 'app/components/message/message.template.html'
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9tZXNzYWdlL21lc3NhZ2UuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJjb21wb25lbnRzL21lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUNFLENBQUMsU0FESCxDQUNhLFNBRGIsRUFFSTtJQUFBLFFBQUEsRUFDRTtNQUFBLElBQUEsRUFBTSxJQUFOO01BQ0EsT0FBQSxFQUFTLEdBRFQ7TUFFQSxRQUFBLEVBQVUsSUFGVjtNQUdBLGFBQUEsRUFBZTtJQUhmLENBREY7SUFLQSxXQUFBLEVBQWE7RUFMYixDQUZKO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSAnaWRlbnRpZmlBbmd1bGFyJ1xuICAuY29tcG9uZW50ICdtZXNzYWdlJyxcbiAgICBiaW5kaW5nczpcbiAgICAgIGlwZnM6ICc9PydcbiAgICAgIG1zZ0RhdGE6ICc9J1xuICAgICAgcGFnZUluZm86ICc9PydcbiAgICAgIHNob3dSZWNpcGllbnQ6ICc9PydcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL21lc3NhZ2UvbWVzc2FnZS50ZW1wbGF0ZS5odG1sJ1xuIl19

(function() {
  angular.module('identifiAngular').directive('acmeMalarkey', function() {
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
  angular.module('identifiAngular').directive('identicon', function() {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9pZGVudGljb24vaWRlbnRpY29uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9pZGVudGljb24vaWRlbnRpY29uLmRpcmVjdGl2ZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQTtFQUNBLE9BQU8sQ0FBQyxNQUFSLENBQWUsaUJBQWYsQ0FDRSxDQUFDLFNBREgsQ0FDYSxXQURiLEVBQzBCLFFBQUEsQ0FBQSxDQUFBO1dBQ3RCO01BQUEsS0FBQSxFQUNFO1FBQUEsUUFBQSxFQUFVLEdBQVY7UUFDQSxJQUFBLEVBQU07TUFETixDQURGO01BR0EsSUFBQSxFQUFNLFFBQUEsQ0FBQyxLQUFELEVBQVEsT0FBUixFQUFpQixLQUFqQixDQUFBO0FBQ0osWUFBQTtRQUFBLEtBQUssQ0FBQyxZQUFOLEdBQXdCLE9BQU8sS0FBSyxDQUFDLFlBQWIsS0FBNkIsV0FBaEMsR0FBaUQsSUFBakQsR0FBMkQsQ0FBQyxDQUFDLFFBQUEsQ0FBUyxLQUFLLENBQUMsWUFBZjtRQUNsRixLQUFLLENBQUMsTUFBTixHQUFrQixLQUFBLENBQU0sS0FBSyxDQUFDLE1BQVosQ0FBSCxHQUE0QixDQUE1QixHQUFtQyxLQUFLLENBQUM7UUFDeEQsTUFBQSxHQUFTLFFBQUEsQ0FBQSxDQUFBO0FBQ1AsY0FBQTtVQUFBLElBQUcsS0FBSyxDQUFDLFFBQU4sSUFBa0IsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFwQztZQUNFLFNBQUEsR0FBWSxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQWYsQ0FBeUIsS0FBSyxDQUFDLEtBQS9CLEVBQXNDLEtBQUssQ0FBQyxNQUE1QyxFQUFvRCxLQUFLLENBQUMsWUFBMUQsRUFBd0UsS0FBSyxDQUFDLElBQTlFO1lBQ1osT0FBTyxDQUFDLEtBQVIsQ0FBQTttQkFDQSxPQUFPLENBQUMsTUFBUixDQUFlLFNBQWYsRUFIRjs7UUFETztlQUtULEtBQUssQ0FBQyxXQUFOLENBQWtCLENBQUMsVUFBRCxDQUFsQixFQUFnQyxNQUFoQztNQVJJO0lBSE47RUFEc0IsQ0FEMUI7QUFEQSIsInNvdXJjZXNDb250ZW50IjpbIiMgY29mZmVlbGludDogZGlzYWJsZT1tYXhfbGluZV9sZW5ndGhcbmFuZ3VsYXIubW9kdWxlICdpZGVudGlmaUFuZ3VsYXInXG4gIC5kaXJlY3RpdmUgJ2lkZW50aWNvbicsIC0+XG4gICAgc2NvcGU6XG4gICAgICBpZGVudGl0eTogJz0nXG4gICAgICBpcGZzOiAnPSdcbiAgICBsaW5rOiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSAtPlxuICAgICAgYXR0cnMuc2hvd0Rpc3RhbmNlID0gaWYgdHlwZW9mIGF0dHJzLnNob3dEaXN0YW5jZSA9PSAndW5kZWZpbmVkJyB0aGVuIHRydWUgZWxzZSAhIXBhcnNlSW50KGF0dHJzLnNob3dEaXN0YW5jZSlcbiAgICAgIGF0dHJzLmJvcmRlciA9IGlmIGlzTmFOKGF0dHJzLmJvcmRlcikgdGhlbiAzIGVsc2UgYXR0cnMuYm9yZGVyXG4gICAgICB1cGRhdGUgPSAtPlxuICAgICAgICBpZiBzY29wZS5pZGVudGl0eSAmJiBzY29wZS5pZGVudGl0eS5pZGVudGljb25cbiAgICAgICAgICBpZGVudGljb24gPSBzY29wZS5pZGVudGl0eS5pZGVudGljb24oYXR0cnMud2lkdGgsIGF0dHJzLmJvcmRlciwgYXR0cnMuc2hvd0Rpc3RhbmNlLCBzY29wZS5pcGZzKVxuICAgICAgICAgIGVsZW1lbnQuZW1wdHkoKVxuICAgICAgICAgIGVsZW1lbnQuYXBwZW5kKGlkZW50aWNvbilcbiAgICAgIHNjb3BlLiR3YXRjaEdyb3VwIFsnaWRlbnRpdHknXSwgdXBkYXRlXG4iXX0=

(function() {
  angular.module('identifiAngular').directive('focusOn', function() {
    return function(scope, elem, attr) {
      scope.$on('focusOn', function(e, name) {
        if (name === attr.focusOn) {
          elem[0].focus();
        }
      });
    };
  });

  angular.module('identifiAngular').factory('focus', function($rootScope, $timeout) {
    return function(name) {
      $timeout(function() {
        $rootScope.$broadcast('focusOn', name);
      });
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9mb2N1cy9mb2N1cy5qcyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9mb2N1cy9mb2N1cy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxPQUFPLENBQUMsTUFBUixDQUFlLGlCQUFmLENBQ0EsQ0FBQyxTQURELENBQ1csU0FEWCxFQUNzQixRQUFBLENBQUEsQ0FBQTtXQUNwQixRQUFBLENBQUMsS0FBRCxFQUFRLElBQVIsRUFBYyxJQUFkLENBQUE7TUFDRSxLQUFLLENBQUMsR0FBTixDQUFVLFNBQVYsRUFBcUIsUUFBQSxDQUFDLENBQUQsRUFBSSxJQUFKLENBQUE7UUFDbkIsSUFBRyxJQUFBLEtBQVEsSUFBSSxDQUFDLE9BQWhCO1VBQ0UsSUFBSyxDQUFBLENBQUEsQ0FBRSxDQUFDLEtBQVIsQ0FBQSxFQURGOztNQURtQixDQUFyQjtJQURGO0VBRG9CLENBRHRCOztFQVNBLE9BQU8sQ0FBQyxNQUFSLENBQWUsaUJBQWYsQ0FDQSxDQUFDLE9BREQsQ0FDUyxPQURULEVBQ2tCLFFBQUEsQ0FBQyxVQUFELEVBQWEsUUFBYixDQUFBO1dBQ2hCLFFBQUEsQ0FBQyxJQUFELENBQUE7TUFDRSxRQUFBLENBQVMsUUFBQSxDQUFBLENBQUE7UUFDUCxVQUFVLENBQUMsVUFBWCxDQUFzQixTQUF0QixFQUFpQyxJQUFqQztNQURPLENBQVQ7SUFERjtFQURnQixDQURsQjtBQVRBIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUgJ2lkZW50aWZpQW5ndWxhcidcbi5kaXJlY3RpdmUgJ2ZvY3VzT24nLCAtPlxuICAoc2NvcGUsIGVsZW0sIGF0dHIpIC0+XG4gICAgc2NvcGUuJG9uICdmb2N1c09uJywgKGUsIG5hbWUpIC0+XG4gICAgICBpZiBuYW1lID09IGF0dHIuZm9jdXNPblxuICAgICAgICBlbGVtWzBdLmZvY3VzKClcbiAgICAgIHJldHVyblxuICAgIHJldHVyblxuXG5hbmd1bGFyLm1vZHVsZSAnaWRlbnRpZmlBbmd1bGFyJ1xuLmZhY3RvcnkgJ2ZvY3VzJywgKCRyb290U2NvcGUsICR0aW1lb3V0KSAtPlxuICAobmFtZSkgLT5cbiAgICAkdGltZW91dCAtPlxuICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0ICdmb2N1c09uJywgbmFtZVxuICAgICAgcmV0dXJuXG4gICAgcmV0dXJuXG4iXX0=

(function() {
  // Messages service used to communicate with Messages REST endpoints
  angular.module('identifiAngular').factory('Messages', [
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
  angular.module('identifiAngular').controller('MessagesController', [
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
    filters);
      };
      // Find existing Message
      $scope.findOne = function() {
        var hash,
    processResponse;
        if ($stateParams.id) {
          hash = $stateParams.id;
          processResponse = function() {
            $scope.processMessages([$scope.message],
    {});
            $scope.setPageTitle('Message ' + hash);
            $scope.setMsgRawData($scope.message);
            $scope.message.signerKeyID = $scope.message.getSignerKeyID();
            $scope.message.verifiedBy = $scope.identifiIndex.get('keyID',
    $scope.message.signerKeyID);
            $scope.setIdentityNames($scope.message.verifiedBy,
    true);
            return $scope.message.verifiedByAttr = new $window.identifiLib.Attribute('keyID',
    $scope.message.signerKeyID);
          };
          if (hash.match(/^Qm[1-9A-Za-z]{40,50}$/)) { // looks like an ipfs address
            return $scope.ipfsGet(hash).then(function(res) {
              var s;
              s = JSON.parse(res.toString());
              console.log('msg from ipfs',
    res,
    s);
              return $window.identifiLib.Message.fromSig(s).then(function(r) {
                $scope.message = r;
                $scope.message.ipfsUri = hash;
                return processResponse();
              });
            }).catch(function(e) {
              return console.log(e);
            });
          }
        }
      };
      load = function() {
        if (!$scope.identifiIndex) {
          return;
        }
        if ($state.is('messages.show')) {
          return $scope.findOne();
        }
      };
      return $scope.$watch('identifiIndex',
    load);
    }
  ]);

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMvbWVzc2FnZXMuY29udHJvbGxlci5qcyIsInNvdXJjZXMiOlsibWVzc2FnZXMvbWVzc2FnZXMuY29udHJvbGxlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxhQUFBOztFQUVBLE9BQU8sQ0FBQyxNQUFSLENBQWUsaUJBQWYsQ0FBaUMsQ0FBQyxVQUFsQyxDQUE2QyxvQkFBN0MsRUFBbUU7SUFDakUsUUFEaUU7SUFFakUsWUFGaUU7SUFHakUsU0FIaUU7SUFJakUsY0FKaUU7SUFLakUsV0FMaUU7SUFNakUsT0FOaUU7SUFPakUsUUFQaUU7O0lBU2pFLFFBVGlFO0lBVWpFLFVBVmlFO0lBV2pFLHFCQVhpRTtJQVlqRSxRQUFBLENBQUMsTUFBRDtJQUFTLFVBQVQ7SUFBcUIsT0FBckI7SUFBOEIsWUFBOUI7SUFBNEMsU0FBNUM7SUFBdUQsS0FBdkQ7SUFBOEQsTUFBOUQ7SUFBc0UsUUFBdEU7SUFBZ0YsTUFBaEY7SUFBd0YsUUFBeEY7SUFBa0csbUJBQWxHLENBQUEsRUFBQTtBQUNFLFVBQUE7TUFBQSxNQUFNLENBQUMsTUFBUCxHQUFnQixZQUFZLENBQUM7TUFDN0IsTUFBTSxDQUFDLE9BQVAsR0FBaUIsWUFBWSxDQUFDO01BRTlCLE1BQU0sQ0FBQyxTQUFQLEdBQW1CLFFBQUEsQ0FBQyxNQUFELENBQUE7ZUFDakIsSUFBSSxLQUFKLENBQVUsSUFBSSxDQUFDLEdBQUwsQ0FBUyxDQUFUO0lBQVksSUFBSSxDQUFDLEdBQUwsQ0FBUyxNQUFULENBQVosQ0FBVjtNQURpQjtNQUduQixNQUFNLENBQUMsU0FBUCxHQUFtQixRQUFBLENBQUMsTUFBRCxDQUFBO0FBQ2pCLFlBQUE7UUFBQSxTQUFBLEdBQVk7UUFDWixJQUFHLE1BQUEsR0FBUyxDQUFaO1VBQ0UsU0FBQSxHQUFZLFdBRGQ7U0FBQSxNQUVLLElBQUcsTUFBQSxHQUFTLENBQVo7VUFDSCxTQUFBLEdBQVksV0FEVDs7ZUFFTDtNQU5pQjtNQVFuQixNQUFNLENBQUMs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XG5hbmd1bGFyLm1vZHVsZSgnaWRlbnRpZmlBbmd1bGFyJykuY29udHJvbGxlciAnTWVzc2FnZXNDb250cm9sbGVyJywgW1xuICAnJHNjb3BlJ1xuICAnJHJvb3RTY29wZSdcbiAgJyR3aW5kb3cnXG4gICckc3RhdGVQYXJhbXMnXG4gICckbG9jYXRpb24nXG4gICckaHR0cCdcbiAgJyRzdGF0ZSdcbiAgIyAnQXV0aGVudGljYXRpb24nXG4gICdjb25maWcnXG4gICckdGltZW91dCdcbiAgJ2xvY2FsU3RvcmFnZVNlcnZpY2UnXG4gICgkc2NvcGUsICRyb290U2NvcGUsICR3aW5kb3csICRzdGF0ZVBhcmFtcywgJGxvY2F0aW9uLCAkaHR0cCwgJHN0YXRlLCBNZXNzYWdlcywgY29uZmlnLCAkdGltZW91dCwgbG9jYWxTdG9yYWdlU2VydmljZSkgLT4gIywgQXV0aGVudGljYXRpb25cbiAgICAkc2NvcGUuaWRUeXBlID0gJHN0YXRlUGFyYW1zLnR5cGVcbiAgICAkc2NvcGUuaWRWYWx1ZSA9ICRzdGF0ZVBhcmFtcy52YWx1ZVxuXG4gICAgJHNjb3BlLmljb25Db3VudCA9IChyYXRpbmcpIC0+XG4gICAgICBuZXcgQXJyYXkoTWF0aC5tYXgoMSwgTWF0aC5hYnMocmF0aW5nKSkpXG5cbiAgICAkc2NvcGUuaWNvblN0eWxlID0gKHJhdGluZykgLT5cbiAgICAgIGljb25TdHlsZSA9ICduZXV0cmFsJ1xuICAgICAgaWYgcmF0aW5nID4gMFxuICAgICAgICBpY29uU3R5bGUgPSAncG9zaXRpdmUnXG4gICAgICBlbHNlIGlmIHJhdGluZyA8IDBcbiAgICAgICAgaWNvblN0eWxlID0gJ25lZ2F0aXZlJ1xuICAgICAgaWNvblN0eWxlXG5cbiAgICAkc2NvcGUuaWNvbkNsYXNzID0gKHJhdGluZykgLT5cbiAgICAgIGljb25TdHlsZSA9ICdnbHlwaGljb24tcXVlc3Rpb24tc2lnbidcbiAgICAgIGlmIHJhdGluZyA+IDBcbiAgICAgICAgaWNvblN0eWxlID0gJ2dseXBoaWNvbi10aHVtYnMtdXAnXG4gICAgICBlbHNlIGlmIHJhdGluZyA8IDBcbiAgICAgICAgaWNvblN0eWxlID0gJ2dseXBoaWNvbi10aHVtYnMtZG93bidcbiAgICAgIGljb25TdHlsZVxuXG4gICAgJHNjb3BlLmNvbGxhcHNlRmlsdGVycyA9ICR3aW5kb3cuaW5uZXJXaWR0aCA8IDk5MlxuXG4gICAgJHNjb3BlLnNldEZpbHRlcnMgPSAoZmlsdGVycykgLT5cbiAgICAgIGFuZ3VsYXIuZXh0ZW5kICRzY29wZS5maWx0ZXJzLCBmaWx0ZXJzXG5cbiAgICAjIEZpbmQgZXhpc3RpbmcgTWVzc2FnZVxuICAgICRzY29wZS5maW5kT25lID0gLT5cbiAgICAgIGlmICRzdGF0ZVBhcmFtcy5pZFxuICAgICAgICBoYXNoID0gJHN0YXRlUGFyYW1zLmlkXG4gICAgICAgIHByb2Nlc3NSZXNwb25zZSA9IC0+XG4gICAgICAgICAgJHNjb3BlLnByb2Nlc3NNZXNzYWdlcyhbJHNjb3BlLm1lc3NhZ2VdLCB7fSlcbiAgICAgICAgICAkc2NvcGUuc2V0UGFnZVRpdGxlICdNZXNzYWdlICcgKyBoYXNoXG4gICAgICAgICAgJHNjb3BlLnNldE1zZ1Jhd0RhdGEoJHNjb3BlLm1lc3NhZ2UpXG4gICAgICAgICAgJHNjb3BlLm1lc3NhZ2Uuc2lnbmVyS2V5SUQgPSAkc2NvcGUubWVzc2FnZS5nZXRTaWduZXJLZXlJRCgpXG4gICAgICAgICAgJHNjb3BlLm1lc3NhZ2UudmVyaWZpZWRCeSA9ICRzY29wZS5pZGVudGlmaUluZGV4LmdldCgna2V5SUQnLCAkc2NvcGUubWVzc2FnZS5zaWduZXJLZXlJRClcbiAgICAgICAgICAkc2NvcGUuc2V0SWRlbnRpdHlOYW1lcygkc2NvcGUubWVzc2FnZS52ZXJpZmllZEJ5LCB0cnVlKVxuICAgICAgICAgICRzY29wZS5tZXNzYWdlLnZlcmlmaWVkQnlBdHRyID0gbmV3ICR3aW5kb3cuaWRlbnRpZmlMaWIuQXR0cmlidXRlKCdrZXlJRCcsICRzY29wZS5tZXNzYWdlLnNpZ25lcktleUlEKVxuICAgICAgICBpZiBoYXNoLm1hdGNoIC9eUW1bMS05QS1aYS16XXs0MCw1MH0kLyAjIGxvb2tzIGxpa2UgYW4gaXBmcyBhZGRyZXNzXG4gICAgICAgICAgJHNjb3BlLmlwZnNHZXQoaGFzaCkudGhlbiAocmVzKSAtPlxuICAgICAgICAgICAgcyA9IEpTT04ucGFyc2UocmVzLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyAnbXNnIGZyb20gaXBmcycsIHJlcywgc1xuICAgICAgICAgICAgJHdpbmRvdy5pZGVudGlmaUxpYi5NZXNzYWdlLmZyb21TaWcocykudGhlbiAocikgLT5cbiAgICAgICAgICAgICAgJHNjb3BlLm1lc3NhZ2UgPSByXG4gICAgICAgICAgICAgICRzY29wZS5tZXNzYWdlLmlwZnNVcmkgPSBoYXNoXG4gICAgICAgICAgICAgIHByb2Nlc3NSZXNwb25zZSgpXG4gICAgICAgICAgLmNhdGNoIChlKSAtPlxuICAgICAgICAgICAgY29uc29sZS5sb2cgZVxuXG4gICAgbG9hZCA9IC0+XG4gICAgICByZXR1cm4gdW5sZXNzICRzY29wZS5pZGVudGlmaUluZGV4XG4gICAgICBpZiAkc3RhdGUuaXMoJ21lc3NhZ2VzLnNob3cnKVxuICAgICAgICAkc2NvcGUuZmluZE9uZSgpXG4gICAgJHNjb3BlLiR3YXRjaCAnaWRlbnRpZmlJbmRleCcsIGxvYWRcbl1cbiJdfQ==

(function() {
  'use strict';
  angular.module('identifiAngular').controller('MainController', [
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
    '$q',
    'focus',
    //'Authentication'
    //'Menus'
    //'Persona'
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
    $q,
    focus) { // Authentication, Menus, Persona
      var hosts,
    loadMsgs,
    privateKey,
    scrollTo,
    setIndex;
      hosts = ['https://identifi.herokuapp.com/gun',
    'https://identifi2.herokuapp.com/gun'];
      if ($window.location.protocol !== "https:") {
        hosts.push('http://localhost:8765/gun');
      }
      $scope.gun = new Gun(hosts);
      // TODO: move everything to main controller?
      // set authentication
      $scope.authentication = {}; // Authentication
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
          return 'https://identi.fi/' + $state.href('identities.show',
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
        list: []
      };
      $scope.phoneRegex = /^\+?\d+$/;
      $scope.ipfs = new Ipfs({
        init: true,
        start: true,
        repo: 'ipfs7-identifi'
      });
      $scope.capitalizeWords = function(s) {
        if (s && s.length) {
          return (s.split(' ').map(function(word) {
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
        if (!$scope.identifiIndex) {
          return;
        }
        $scope.ids.activeKey = -1;
        $scope.ids.list = [];
        console.log('search');
        searchKey = encodeURIComponent((query || $scope.query.term || '').toLowerCase());
        $scope.searchKey = searchKey;
        $scope.previousSearchKey = searchKey;
        limit = limit || 10;
        cursor = false;
        if ($scope.ids.list.length) {
          cursor = $scope.ids.list[$scope.ids.list.length - 1].cursor;
        }
        seen = {};
        resultFound = function(i) {
          if (searchKey !== $scope.searchKey) {
            return;
          }
          console.log('i',
    i);
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
        $scope.identifiIndex.search(searchKey,
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
      setIndex = function(results) {
        if ($scope.query.term !== '') {
          $scope.query.term = '';
        }
        $scope.ids.list = [];
        $scope.msgs.list = [];
        $scope.identifiIndex = results;
        setTimeout(function() {
          return $scope.$broadcast('rzSliderForceRender');
        },
    1000);
        console.log('Got index',
    $scope.identifiIndex);
        $scope.viewpoint.identity = $scope.identifiIndex.get($scope.viewpoint.type,
    $scope.viewpoint.value);
        return $scope.viewpoint.identity.gun.get('attrs').open(function(attrs) {
          $scope.viewpoint.attrs = attrs;
          return $scope.viewpoint.mostVerifiedAttributes = $window.identifiLib.Identity.getMostVerifiedAttributes(attrs);
        });
      };
      $scope.loadDefaultIndex = function() {
        $scope.viewpoint = {
          type: 'keyID',
          value: $scope.defaultIndexKeyID
        };
        return setIndex(new $window.identifiLib.Index($scope.gun.user($scope.defaultIndexKeyID).get('identifi'),
    {
          ipfs: $scope.ipfs
        }));
      };
      $scope.loginWithKey = function(privateKeySerialized,
    self) {
        var keyID;
        $scope.loggingIn = true;
        $scope.privateKey = $window.identifiLib.Key.fromJwk(privateKeySerialized);
        localStorageService.set('identifiKey',
    privateKeySerialized);
        $scope.authentication.user = {
          idType: 'keyID',
          idValue: $window.identifiLib.Key.getId($scope.privateKey)
        };
        $scope.authentication.user.url = $scope.getIdUrl('keyID',
    $scope.authentication.user.idValue);
        if ($scope.loginModal) {
          $scope.loginModal.close();
        }
        keyID = $window.identifiLib.Key.getId($scope.privateKey);
        $scope.viewpoint = {
          type: 'keyID',
          value: keyID
        };
        $scope.ids.list = [];
        $scope.msgs.list = [];
        return $window.identifiLib.Index.create($scope.gun,
    $scope.privateKey,
    {
          self,
          ipfs: $scope.ipfs
        }).then(function(i) {
          setIndex(i);
          $scope.loggingIn = false;
          $scope.authentication.identity = $scope.identifiIndex.get('keyID',
    keyID);
          $scope.authentication.identity.gun.get('attrs').open(function(val,
    key,
    msg,
    eve) {
            var mva;
            mva = $window.identifiLib.Identity.getMostVerifiedAttributes(val);
            $scope.authentication.identity.mva = mva;
            if (mva.profilePhoto) {
              return eve.off();
            }
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
      privateKey = localStorageService.get('identifiKey');
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
          return $window.identifiLib.Message.createVerification({recipient},
    $scope.privateKey).then(function(m) {
            $scope.hideProfilePhoto = true; // There's a weird bug where the profile identicon doesn't update
            $scope.identifiIndex.addMessage(m).then(function() {
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
        $rootScope.pageTitle = 'Identifi';
        if (title) {
          return $rootScope.pageTitle += ' - ' + title;
        }
      };
      $scope.ipfsGet = function(uri,
    getJson) {
        return new Promise(function(resolve) {
          var go;
          go = function() {
            return $scope.ipfs.cat(uri).then(function(file) {
              file = $scope.ipfs.types.Buffer(file);
              if (getJson) {
                file = JSON.parse(file.toString());
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
      $scope.resetMsg = function() {
        $scope.newMessage = {
          rating: 1,
          comment: ''
        };
        return $scope.newVerification = {
          type: '',
          value: ''
        };
      };
      $scope.resetMsg();
      // Create new Message
      $scope.createMessage = function(event,
    params,
    verifiedAttr) {
        var message,
    options;
        if (event) {
          event.stopPropagation();
        }
        // Create new Message object
        message = null;
        params.recipient = params.recipient || {};
        if ($state.is('identities.show')) {
          if (verifiedAttr && $stateParams.type === verifiedAttr.type) {
            params.recipient[$stateParams.type] = [$stateParams.value,
    verifiedAttr.value];
          } else {
            params.recipient[$stateParams.type] = $stateParams.value;
            if (verifiedAttr) {
              params.recipient[verifiedAttr.type] = verifiedAttr.value;
            }
          }
        } else if (!$state.is('identities.create')) {
          params.recipient.keyID = $scope.authentication.user.idValue;
        }
        if (params.type === 'rating') {
          params.maxRating |= 3;
          params.minRating |= -3;
          message = $window.identifiLib.Message.createRating(params,
    $scope.privateKey);
        } else if (params.type === 'verification') {
          message = $window.identifiLib.Message.createVerification(params,
    $scope.privateKey);
        } else {
          message = $window.identifiLib.Message.create(params,
    $scope.privateKey);
        }
        options = {};
        return message.then(function(m) {
          var ref;
          console.log(m);
          $scope.identifiIndex.addMessage(m);
          if ((ref = $scope.filters.type) !== params.type && ref !== null) {
            $scope.filters.type = params.type;
          }
          return $scope.resetMsg();
        }).catch(function(e) {
          console.error(e);
          return $scope.error = e;
        });
      };
      $scope.addAttribute = function() {
        return $location.path('#/identities/create/' + $scope.query.term);
      };
      $scope.login = function() {
        return $scope.filters.max_distance = -1; // because the user doesn't have a trust index yet
      };
      $scope.openLoginModal = function() {
        $scope.loginModal = $uibModal.open({
          animation: $scope.animationsEnabled,
          templateUrl: 'app/main/login.modal.html',
          size: 'lg',
          scope: $scope
        });
        $scope.loginModal.rendered.then(function() {
          document.activeElement.blur();
          return focus('newUser');
        });
        return $scope.$on('$stateChangeStart',
    function() {
          return $scope.loginModal.close();
        });
      };
      $scope.openUploadModal = function(callback,
    modalButtonText,
    squarify) {
        $scope.uploadModalCallback = callback;
        $scope.modalButtonText = modalButtonText || 'Upload';
        $scope.squarify = squarify;
        $scope.uploadModal = $uibModal.open({
          animation: $scope.animationsEnabled,
          templateUrl: 'app/identities/upload.modal.html',
          size: 'lg',
          scope: $scope
        });
        $scope.uploadModal.rendered.then(function() {
          return document.activeElement.blur();
        });
        return $scope.$on('$stateChangeStart',
    function() {
          return $scope.uploadModal.close();
        });
      };
      $scope.$on('$stateChangeStart',
    function() {
        return $scope.filters.type = null;
      });
      loadMsgs = function() {
        var cursor,
    limit,
    resultFound;
        limit = 40;
        cursor = null;
        $scope.msgs.list = [];
        resultFound = function(msg) {
          console.log('got msg',
    msg);
          $scope.processMessages([msg]);
          return $scope.$apply(function() {
            return $scope.msgs.list.push(msg);
          });
        };
        return $scope.identifiIndex.getMessagesByTimestamp(resultFound,
    limit,
    cursor);
      };
      $scope.$watch('identifiIndex',
    function() {
        if (!$scope.identifiIndex) {
          return;
        }
        loadMsgs();
        return $scope.search();
      });
      $scope.uploadFile = function(blob) {
        return new Promise(function(resolve,
    reject) {
          var fileReader;
          console.log('uploading',
    blob);
          fileReader = new FileReader();
          fileReader.onload = function(event) {
            var buffer;
            buffer = $scope.ipfs.types.Buffer.from(event.target.result);
            console.log('buffer',
    buffer);
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
        return $window.identifiLib.Key.generate().then(function(key) {
          $scope.privateKey = key;
          $scope.privateKeySerialized = $window.identifiLib.Key.toJwk($scope.privateKey);
          self.keyID = $window.identifiLib.Key.getId($scope.privateKey);
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
        return $window.identifiLib.Key.generate().then(function(key) {
          return $scope.$apply(function() {
            $scope.privateKey = key;
            console.log($scope.privateKey);
            return $scope.privateKeySerialized = $window.identifiLib.Key.toJwk($scope.privateKey);
          });
        });
      };
      $scope.downloadText = function(text) {
        var hiddenElement;
        hiddenElement = document.createElement('a');
        hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(text);
        hiddenElement.target = '_blank';
        hiddenElement.download = 'identifi_private_key.txt';
        return hiddenElement.click();
      };
      $scope.openLogoutModal = function() {
        $scope.logoutModal = $uibModal.open({
          animation: $scope.animationsEnabled,
          templateUrl: 'app/main/logout.modal.html',
          size: 'lg',
          scope: $scope
        });
        $scope.logoutModal.rendered.then(function() {
          return document.activeElement.blur();
        });
        return $scope.$on('$stateChangeStart',
    function() {
          return $scope.logoutModal.close();
        });
      };
      $scope.closeLogoutModal = function() {
        return $scope.logoutModal.close();
      };
      $scope.logout = function() {
        $scope.filters.max_distance = 0;
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
        if ($scope.filters.max_distance) {
          if ($scope.filters.max_distance === 0 && typeof value.authorTrustDistance !== 'number') {
            return false;
          } else if ($scope.filters.max_distance > 0 && value.authorTrustDistance > $scope.filters.max_distance) {
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
        $scope.message.recipient = $scope.message.getRecipient($scope.identifiIndex);
        $scope.message.recipient.gun.get('attrs').open(function(d) {
          var mva;
          mva = $window.identifiLib.Identity.getMostVerifiedAttributes(d);
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
        $scope.message.verifiedBy = $scope.identifiIndex.get('keyID',
    $scope.message.signerKeyID);
        $scope.message.verifiedByAttr = new $window.identifiLib.Attribute('keyID',
    $scope.message.signerKeyID);
        $scope.messageModal = $uibModal.open({
          animation: $scope.animationsEnabled,
          templateUrl: 'app/messages/show.modal.html',
          size: size,
          scope: $scope
        });
        $scope.messageModal.rendered.then(function() {
          return document.activeElement.blur();
        });
        return $scope.$on('$stateChangeStart',
    function() {
          return $scope.messageModal.close();
        });
      };
      $scope.filters = $scope.filters || config.defaultFilters;
      $scope.isCollapsed = false;
      // $scope.menu = Menus.getMenu('topbar')
      $scope.toggleCollapsibleMenu = function() {
        return $scope.isCollapsed = !$scope.isCollapsed;
      };
      $scope.processMessages = function(messages,
    msgOptions) {
        var processMessage;
        processMessage = function(msg) {
          msg.author = msg.getAuthor($scope.identifiIndex);
          msg.author.gun.get('trustDistance').on(function(d) {
            return msg.authorTrustDistance = d;
          });
          msg.author.gun.get('attrs').open(function(d) {
            var mva;
            mva = $window.identifiLib.Identity.getMostVerifiedAttributes(d);
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
          msg.recipient = msg.getRecipient($scope.identifiIndex);
          msg.recipient.gun.get('attrs').open(function(d) {
            var mva;
            mva = $window.identifiLib.Identity.getMostVerifiedAttributes(d);
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
          return $scope.$apply(function() {
            var a,
    alpha,
    i,
    index,
    j,
    l,
    len,
    len1,
    maxRatingDiff,
    minRatingDiff,
    neutralRating,
    rating,
    ref,
    ref1,
    ref2,
    ref3,
    ref4,
    ref5,
    smallestIndex;
            // TODO: make sure message signature is checked
            i = void 0;
            i = 0;
            smallestIndex = 1000;
            msg.authorArray = msg.getAuthorArray();
            ref = msg.authorArray;
            for (j = 0, len = ref.length; j < len; j++) {
              a = ref[j];
              if (!msg.linkToAuthor) {
                msg.linkToAuthor = a;
              }
              index = Object.keys($window.identifiLib.Attribute.getUniqueIdValidators()).indexOf(a.type);
              if (index > -1 && index < smallestIndex) {
                smallestIndex = index;
                msg.linkToAuthor = a;
              } else if (!msg.author_name && ((ref1 = a.type) === 'name' || ref1 === 'nickname')) {
                msg.author_name = a.value;
              }
              i++;
            }
            i = 0;
            smallestIndex = 1000;
            msg.recipientArray = msg.getRecipientArray();
            ref2 = msg.recipientArray;
            for (l = 0, len1 = ref2.length; l < len1; l++) {
              a = ref2[l];
              if (!msg.linkToAuthor) {
                msg.linkToRecipient = a;
              }
              index = Object.keys($window.identifiLib.Attribute.getUniqueIdValidators()).indexOf(a.type);
              if (index > -1 && index < smallestIndex) {
                smallestIndex = index;
                msg.linkToRecipient = a;
              } else if (!msg.recipient_name && ((ref3 = a.type) === 'name' || ref3 === 'nickname')) {
                msg.recipient_name = a.value;
              }
              i++;
            }
            if (msg.linkToAuthor.equals(msg.linkToRecipient)) {
              msg.sameAuthorAndRecipient = true;
            }
            if (!msg.author_name) {
              msg.author_name = msg.linkToAuthor.value;
              if ((ref4 = msg.linkToAuthor.type) === 'keyID' || ref4 === 'uuid') {
                msg.author_name = msg.author_name.slice(0,
    6) + '...';
              }
            }
            if (!msg.recipient_name) {
              msg.recipient_name = msg.linkToRecipient.value;
              if ((ref5 = msg.linkToAuthor.type) === 'keyID' || ref5 === 'uuid') {
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
        return angular.forEach(messages,
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
      $scope.setIdentityNames = function(i,
    htmlSafe,
    setTitle) {
        i.verified = false;
        return i.gun.get('attrs').open(function(attrs) {
          return $scope.$apply(function() {
            var a,
    mva,
    ref;
            mva = $window.identifiLib.Identity.getMostVerifiedAttributes(attrs);
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
              return $scope.setPageTitle(i.primaryName);
            }
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
              $scope.ids.list[$scope.ids.activeKey].active = false;
              $scope.ids.activeKey--;
              if ($scope.ids.activeKey >= 0) {
                $scope.ids.list[$scope.ids.activeKey].active = true;
              }
            }
            return scrollTo(document.getElementById('result' + $scope.ids.activeKey));
          case 40:
            event.preventDefault();
            if ($scope.ids.activeKey < ($scope.ids.list.length || 0) - 1) {
              if ($scope.ids.activeKey >= 0) {
                $scope.ids.list[$scope.ids.activeKey].active = false;
              }
              $scope.ids.list[$scope.ids.activeKey + 1].active = true;
              $scope.ids.activeKey++;
            }
            return scrollTo(document.getElementById('result' + $scope.ids.activeKey));
          case 13:
            event.preventDefault();
            if ($scope.ids.activeKey === -1) {
              return $state.go('identities.create');
            } else {
              id = $scope.ids.list[$scope.ids.activeKey];
              return $state.go('identities.show',
    {
                type: id.linkTo.type,
                value: id.linkTo.value
              });
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
          value: item.linkTo.val
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi9tYWluLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzIjpbIm1haW4vbWFpbi5jb250cm9sbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBO0VBQ0EsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUFpQyxDQUFDLFVBQWxDLENBQTZDLGdCQUE3QyxFQUErRDtJQUM3RCxRQUQ2RDtJQUU3RCxZQUY2RDtJQUc3RCxXQUg2RDtJQUk3RCxPQUo2RDtJQUs3RCxRQUw2RDtJQU03RCxRQU42RDtJQU83RCxxQkFQNkQ7SUFRN0QsV0FSNkQ7SUFTN0QsV0FUNkQ7SUFVN0QsU0FWNkQ7SUFXN0QsY0FYNkQ7SUFZN0QsSUFaNkQ7SUFhN0QsT0FiNkQ7Ozs7SUFrQjdELFFBQUEsQ0FBQyxNQUFEO0lBQVMsVUFBVDtJQUFxQixTQUFyQjtJQUFnQyxLQUFoQztJQUF1QyxNQUF2QztJQUErQyxNQUEvQztJQUNBLG1CQURBO0lBQ3FCLFNBRHJCO0lBQ2dDLFNBRGhDO0lBQzJDLE9BRDNDO0lBQ29ELFlBRHBEO0lBQ2tFLEVBRGxFO0lBQ3NFLEtBRHRFLENBQUEsRUFBQTtBQUVFLFVBQUEsS0FBQTtJQUFBLFFBQUE7SUFBQSxVQUFBO0lBQUEsUUFBQTtJQUFBO01BQUEsS0FBQSxHQUFRLENBQUMsb0NBQUQ7SUFBdUMscUNBQXZDO01BQ1IsSUFBRyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQWpCLEtBQTZCLFFBQWhDO1FBQ0UsS0FBSyxDQUFDLElBQU4sQ0FBVywyQkFBWCxFQURGOztNQUdBLE1BQU0sQ0FBQyxHQUFQLEdBQWEsSUFBSSxHQUFKLENBQVEsS0FBUixFQUpiOzs7TUFRQSxNQUFNLENBQUMsY0FBUCxHQUF3QixDQUFBLEVBUnhCO01BVUEsTUFBTSxDQUFDLFFBQVAsR0FBa0IsUUFBQSxDQUFDLElBQUQ7SUFBTyxLQUFQLENBQUE7UUFDaEIsSUFBRyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUExQixDQUFrQyxHQUFsQyxD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QUFFLElBQUEsRUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQXBCO1VBQTBCLEtBQUEsRUFBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQTdDLENBQTdCO2VBQ0EsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFiLEdBQW9CO01BRlE7TUFJOUIsTUFBTSxDQUFDLFVBQVAsR0FBb0IsUUFBQSxDQUFDLEdBQUQsQ0FBQTtlQUNsQixNQUFNLENBQUMsR0FBRyxDQUFDLEdBQVgsQ0FBZTtVQUFDLEtBQUEsRUFBTyxDQUFDLEdBQUQ7UUFBUixDQUFmO01BRGtCO01BR3BCLE1BQU0sQ0FBQyxhQUFQLEdBQXVCLFFBQUEsQ0FBQyxHQUFELENBQUE7ZUFDckIsT0FBTyxDQUFDLEdBQVIsQ0FBWSxlQUFaLEVBRHFCO01BQUE7TUFHdkIsTUFBTSxDQUFDLFdBQVAsR0FBcUIsUUFBQSxDQUFDLEdBQUQsQ0FBQTtlQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFsQixDQUEwQixHQUExQixDQUE4QixDQUFDLElBQS9CLENBQW9DLFFBQUEsQ0FBQSxDQUFBO2lCQUNsQyxNQUFNLENBQUMsZUFBUCxDQUFBO1FBRGtDLENBQXBDO01BRG1CO2FBSXJCLE1BQU0sQ0FBQyxjQUFQLEdBQXdCLFFBQUEsQ0FBQyxHQUFELENBQUE7ZUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBbEIsQ0FBNkIsR0FBN0IsQ0FBaUMsQ0FBQyxJQUFsQyxDQUF1QyxRQUFBLENBQUEsQ0FBQTtpQkFDckMsTUFBTSxDQUFDLGVBQVAsQ0FBQTtRQURxQyxDQUF2QztNQURzQjtJQWhuQjFCLENBbEI2RDtHQUEvRDtBQURBIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5hbmd1bGFyLm1vZHVsZSgnaWRlbnRpZmlBbmd1bGFyJykuY29udHJvbGxlciAnTWFpbkNvbnRyb2xsZXInLCBbXG4gICckc2NvcGUnXG4gICckcm9vdFNjb3BlJ1xuICAnJGxvY2F0aW9uJ1xuICAnJGh0dHAnXG4gICckc3RhdGUnXG4gICdjb25maWcnLFxuICAnbG9jYWxTdG9yYWdlU2VydmljZSdcbiAgJ2NsaXBib2FyZCdcbiAgJyR1aWJNb2RhbCdcbiAgJyR3aW5kb3cnXG4gICckc3RhdGVQYXJhbXMnXG4gICckcSdcbiAgJ2ZvY3VzJ1xuXG4gICMnQXV0aGVudGljYXRpb24nXG4gICMnTWVudXMnXG4gICMnUGVyc29uYSdcbiAgKCRzY29wZSwgJHJvb3RTY29wZSwgJGxvY2F0aW9uLCAkaHR0cCwgJHN0YXRlLCBjb25maWcsXG4gIGxvY2FsU3RvcmFnZVNlcnZpY2UsIGNsaXBib2FyZCwgJHVpYk1vZGFsLCAkd2luZG93LCAkc3RhdGVQYXJhbXMsICRxLCBmb2N1cykgLT4gIyBBdXRoZW50aWNhdGlvbiwgTWVudXMsIFBlcnNvbmFcbiAgICBob3N0cyA9IFsnaHR0cHM6Ly9pZGVudGlmaS5oZXJva3VhcHAuY29tL2d1bicsICdodHRwczovL2lkZW50aWZpMi5oZXJva3VhcHAuY29tL2d1biddXG4gICAgaWYgJHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCAhPSBcImh0dHBzOlwiXG4gICAgICBob3N0cy5wdXNoKCdodHRwOi8vbG9jYWxob3N0Ojg3NjUvZ3VuJylcblxuICAgICRzY29wZS5ndW4gPSBuZXcgR3VuKGhvc3RzKVxuXG4gICAgIyBUT0RPOiBtb3ZlIGV2ZXJ5dGhpbmcgdG8gbWFpbiBjb250cm9sbGVyP1xuICAgICMgc2V0IGF1dGhlbnRpY2F0aW9uXG4gICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uID0ge30gIyBBdXRoZW50aWNhdGlvblxuXG4gICAgJHNjb3BlLmdldElkVXJsID0gKHR5cGUsIHZhbHVlKSAtPlxuICAgICAgaWYgJHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZS5pbmRleE9mKCcuJykgPiAtMSAjIGRpZmZlcmVudGlhdGUgYmV0d2VlbiBsb2NhbGhvc3QgLyBjaHJvbWUgcGx1Z2luIHVyaSBhbmQgRE5TIG5hbWVcbiAgICAgICAgcmV0dXJuICRzdGF0ZS5ocmVmKCdpZGVudGl0aWVzLnNob3cnLCB7dHlwZSwgdmFsdWV9LCB7YWJzb2x1dGU6IHRydWV9KSArICc/c2hhcmUnXG4gICAgICBlbHNlXG4gICAgICAgIHJldHVybiAnaHR0cHM6Ly9pZGVudGkuZmkvJyArICRzdGF0ZS5ocmVmKCdpZGVudGl0aWVzLnNob3cnLCB7dHlwZSwgdmFsdWV9KSArICc/c2hhcmUnXG5cbiAgICAkc2NvcGUuZ2V0SWRLZXkgPSAoaWQpIC0+XG4gICAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGlkLnR5cGUpICsgJzonICsgZW5jb2RlVVJJQ29tcG9uZW50KGlkLnZhbHVlKVxuXG4gICAgJHNjb3BlLmRlZmF1bHRJbmRleEtleUlEID0gJ2I4QnlhWU5CRENNTE5kWnFNZGFzNW9VRkxDeEJmMlZIMy1OalV1bERhVG8uRFZ6SU5FclJWczZtNXR5akF1eDZmY05mbmRhZGNnWlZONWhMU3dZVENMYydcbiAgICAkc2NvcGUucXVlcnkgPSB7fVxuICAgICRzY29wZS5xdWVyeS50ZXJtID0gJydcbiAgICAkc2NvcGUucHJldmlvdXNTZWFyY2hLZXkgPSAnJ1xuICAgICRzY29wZS5pZHMgPVxuICAgICAgbGlzdDogW11cbiAgICAkc2NvcGUubXNncyA9XG4gICAgICBsaXN0OiBbXVxuICAgICRzY29wZS5waG9uZVJlZ2V4ID0gL15cXCs/XFxkKyQvXG5cbiAgICAkc2NvcGUuaXBmcyA9IG5ldyBJcGZzKFxuICAgICAgaW5pdDogdHJ1ZVxuICAgICAgc3RhcnQ6IHRydWVcbiAgICAgIHJlcG86ICdpcGZzNy1pZGVudGlmaSdcbiAgICApXG5cbiAgICAkc2NvcGUuY2FwaXRhbGl6ZVdvcmRzID0gKHMpIC0+XG4gICAgICBpZiBzIGFuZCBzLmxlbmd0aFxuICAgICAgICByZXR1cm4gKHMuc3BsaXQoJyAnKS5tYXAgKHdvcmQpIC0+IHdvcmRbMF0udG9VcHBlckNhc2UoKSArIHdvcmRbMS4uLTFdLnRvTG93ZXJDYXNlKCkpLmpvaW4gJyAnXG4gICAgICBlbHNlXG4gICAgICAgIHJldHVybiBzXG5cbiAgICAkc2NvcGUuY29weVRvQ2xpcGJvYXJkID0gKHRleHQpIC0+XG4gICAgICBjbGlwYm9hcmQuY29weVRleHQgdGV4dFxuXG4gICAgJHNjb3BlLnNlYXJjaCA9IChxdWVyeSwgbGltaXQpIC0+XG4gICAgICByZXR1cm4gdW5sZXNzICRzY29wZS5pZGVudGlmaUluZGV4XG4gICAgICAkc2NvcGUuaWRzLmFjdGl2ZUtleSA9IC0xXG4gICAgICAkc2NvcGUuaWRzLmxpc3QgPSBbXVxuICAgICAgY29uc29sZS5sb2cgJ3NlYXJjaCdcbiAgICAgIHNlYXJjaEtleSA9IGVuY29kZVVSSUNvbXBvbmVudCgocXVlcnkgb3IgJHNjb3BlLnF1ZXJ5LnRlcm0gb3IgJycpLnRvTG93ZXJDYXNlKCkpXG4gICAgICAkc2NvcGUuc2VhcmNoS2V5ID0gc2VhcmNoS2V5XG4gICAgICAkc2NvcGUucHJldmlvdXNTZWFyY2hLZXkgPSBzZWFyY2hLZXlcbiAgICAgIGxpbWl0ID0gbGltaXQgb3IgMTBcbiAgICAgIGN1cnNvciA9IGZhbHNlXG4gICAgICBpZiAkc2NvcGUuaWRzLmxpc3QubGVuZ3RoXG4gICAgICAgIGN1cnNvciA9ICRzY29wZS5pZHMubGlzdFskc2NvcGUuaWRzLmxpc3QubGVuZ3RoIC0gMV0uY3Vyc29yXG4gICAgICBzZWVuID0ge31cblxuICAgICAgcmVzdWx0Rm91bmQgPSAoaSkgLT5cbiAgICAgICAgcmV0dXJuIGlmIHNlYXJjaEtleSAhPSAkc2NvcGUuc2VhcmNoS2V5XG4gICAgICAgIGNvbnNvbGUubG9nICdpJywgaVxuICAgICAgICBpLmd1bi5vbiAoZGF0YSkgLT5cbiAgICAgICAgICBpLmRhdGEgPSBkYXRhXG4gICAgICAgICAgaS5ndW4uZ2V0KCdsaW5rVG8nKS5vbiAobGlua1RvKSAtPlxuICAgICAgICAgICAgcmV0dXJuIGlmIGkubGlua1RvIG9yICFsaW5rVG9cbiAgICAgICAgICAgIHMgPSBsaW5rVG8udHlwZSArIGxpbmtUby52YWx1ZVxuICAgICAgICAgICAgcmV0dXJuIGlmIHNlZW5bc11cbiAgICAgICAgICAgIHNlZW5bc10gPSB0cnVlXG4gICAgICAgICAgICAkc2NvcGUuaWRzLmxpc3QucHVzaCBpXG4gICAgICAgICAgICAkc2NvcGUuJGFwcGx5IC0+XG4gICAgICAgICAgICAgIGkubGlua1RvID0gbGlua1RvXG4gICAgICAgICRzY29wZS5zZXRJZGVudGl0eU5hbWVzKGksIHRydWUpXG5cbiAgICAgICRzY29wZS5pZGVudGlmaUluZGV4LnNlYXJjaChzZWFyY2hLZXksIHVuZGVmaW5lZCwgcmVzdWx0Rm91bmQsIGxpbWl0LCBjdXJzb3IpXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UgKHJlc29sdmUpIC0+ICMgVE9ETzogdWliLXR5cGVhaGVhZCBpcyBsaW1pdGVkLCBidXQgc29tZXRoaW5nIGJldHRlciBwbHNcbiAgICAgICAgc2V0VGltZW91dCAtPlxuICAgICAgICAgIHJlc29sdmUoJHNjb3BlLmlkcy5saXN0KVxuICAgICAgICAsIDEwMDBcblxuICAgIHNldEluZGV4ID0gKHJlc3VsdHMpIC0+XG4gICAgICAkc2NvcGUucXVlcnkudGVybSA9ICcnIGlmICRzY29wZS5xdWVyeS50ZXJtICE9ICcnXG4gICAgICAkc2NvcGUuaWRzLmxpc3QgPSBbXVxuICAgICAgJHNjb3BlLm1zZ3MubGlzdCA9IFtdXG4gICAgICAkc2NvcGUuaWRlbnRpZmlJbmRleCA9IHJlc3VsdHNcbiAgICAgIHNldFRpbWVvdXQgKCkgLT5cbiAgICAgICAgJHNjb3BlLiRicm9hZGNhc3QoJ3J6U2xpZGVyRm9yY2VSZW5kZXInKVxuICAgICAgLCAxMDAwXG4gICAgICBjb25zb2xlLmxvZyAnR290IGluZGV4JywgJHNjb3BlLmlkZW50aWZpSW5kZXhcbiAgICAgICRzY29wZS52aWV3cG9pbnQuaWRlbnRpdHkgPSAkc2NvcGUuaWRlbnRpZmlJbmRleC5nZXQoJHNjb3BlLnZpZXdwb2ludC50eXBlLCAkc2NvcGUudmlld3BvaW50LnZhbHVlKVxuICAgICAgJHNjb3BlLnZpZXdwb2ludC5pZGVudGl0eS5ndW4uZ2V0KCdhdHRycycpLm9wZW4gKGF0dHJzKSAtPlxuICAgICAgICAkc2NvcGUudmlld3BvaW50LmF0dHJzID0gYXR0cnNcbiAgICAgICAgJHNjb3BlLnZpZXdwb2ludC5tb3N0VmVyaWZpZWRBdHRyaWJ1dGVzID0gJHdpbmRvdy5pZGVudGlmaUxpYi5JZGVudGl0eS5nZXRNb3N0VmVyaWZpZWRBdHRyaWJ1dGVzKGF0dHJzKVxuXG4gICAgJHNjb3BlLmxvYWREZWZhdWx0SW5kZXggPSAtPlxuICAgICAgJHNjb3BlLnZpZXdwb2ludCA9IHt0eXBlOiAna2V5SUQnLCB2YWx1ZTogJHNjb3BlLmRlZmF1bHRJbmRleEtleUlEfVxuICAgICAgc2V0SW5kZXggbmV3ICR3aW5kb3cuaWRlbnRpZmlMaWIuSW5kZXgoJHNjb3BlLmd1bi51c2VyKCRzY29wZS5kZWZhdWx0SW5kZXhLZXlJRCkuZ2V0KCdpZGVudGlmaScpLCB7aXBmczogJHNjb3BlLmlwZnN9KVxuXG4gICAgJHNjb3BlLmxvZ2luV2l0aEtleSA9IChwcml2YXRlS2V5U2VyaWFsaXplZCwgc2VsZikgLT5cbiAgICAgICRzY29wZS5sb2dnaW5nSW4gPSB0cnVlXG4gICAgICAkc2NvcGUucHJpdmF0ZUtleSA9ICR3aW5kb3cuaWRlbnRpZmlMaWIuS2V5LmZyb21Kd2socHJpdmF0ZUtleVNlcmlhbGl6ZWQpXG4gICAgICBsb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldCgnaWRlbnRpZmlLZXknLCBwcml2YXRlS2V5U2VyaWFsaXplZClcbiAgICAgICRzY29wZS5hdXRoZW50aWNhdGlvbi51c2VyID1cbiAgICAgICAgaWRUeXBlOiAna2V5SUQnXG4gICAgICAgIGlkVmFsdWU6ICR3aW5kb3cuaWRlbnRpZmlMaWIuS2V5LmdldElkKCRzY29wZS5wcml2YXRlS2V5KVxuICAgICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnVzZXIudXJsID0gJHNjb3BlLmdldElkVXJsICdrZXlJRCcsICRzY29wZS5hdXRoZW50aWNhdGlvbi51c2VyLmlkVmFsdWVcbiAgICAgICRzY29wZS5sb2dpbk1vZGFsLmNsb3NlKCkgaWYgJHNjb3BlLmxvZ2luTW9kYWxcbiAgICAgIGtleUlEID0gJHdpbmRvdy5pZGVudGlmaUxpYi5LZXkuZ2V0SWQoJHNjb3BlLnByaXZhdGVLZXkpXG4gICAgICAkc2NvcGUudmlld3BvaW50ID0ge3R5cGU6ICdrZXlJRCcsIHZhbHVlOiBrZXlJRH1cbiAgICAgICRzY29wZS5pZHMubGlzdCA9IFtdXG4gICAgICAkc2NvcGUubXNncy5saXN0ID0gW11cbiAgICAgICR3aW5kb3cuaWRlbnRpZmlMaWIuSW5kZXguY3JlYXRlKCRzY29wZS5ndW4sICRzY29wZS5wcml2YXRlS2V5LCB7c2VsZiwgaXBmczogJHNjb3BlLmlwZnN9KS50aGVuIChpKSAtPlxuICAgICAgICBzZXRJbmRleChpKVxuICAgICAgICAkc2NvcGUubG9nZ2luZ0luID0gZmFsc2VcbiAgICAgICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLmlkZW50aXR5ID0gJHNjb3BlLmlkZW50aWZpSW5kZXguZ2V0KCdrZXlJRCcsIGtleUlEKVxuICAgICAgICAkc2NvcGUuYXV0aGVudGljYXRpb24uaWRlbnRpdHkuZ3VuLmdldCgnYXR0cnMnKS5vcGVuICh2YWwsIGtleSwgbXNnLCBldmUpIC0+XG4gICAgICAgICAgbXZhID0gJHdpbmRvdy5pZGVudGlmaUxpYi5JZGVudGl0eS5nZXRNb3N0VmVyaWZpZWRBdHRyaWJ1dGVzKHZhbClcbiAgICAgICAgICAkc2NvcGUuYXV0aGVudGljYXRpb24uaWRlbnRpdHkubXZhID0gbXZhXG4gICAgICAgICAgZXZlLm9mZigpIGlmIG12YS5wcm9maWxlUGhvdG9cbiAgICAgICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLmlkZW50aXR5Lmd1bi5vbiAoZGF0YSkgLT5cbiAgICAgICAgICBpZiBkYXRhLnJlY2VpdmVkUG9zaXRpdmUgYW5kICRzY29wZS5hdXRoZW50aWNhdGlvbi5pZGVudGl0eS5kYXRhIGFuZCBub3QgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLmlkZW50aXR5LmRhdGEucmVjZWl2ZWRQb3NpdGl2ZVxuICAgICAgICAgICAgY29uc29sZS5sb2cgJ2dyZWF0LCB5b3UgZ290IHlvdXIgZmlyc3QgdXB2b3RlISdcbiAgICAgICAgICAgICMgVE9ETzogbm90aWZpY2F0aW9uXG4gICAgICAgICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLmlkZW50aXR5LmRhdGEgPSBkYXRhXG4gICAgICAuY2F0Y2ggKGUpIC0+XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgICAgICAgJHNjb3BlLmxvZ2dpbmdJbiA9IGZhbHNlXG5cbiAgICBwcml2YXRlS2V5ID0gbG9jYWxTdG9yYWdlU2VydmljZS5nZXQoJ2lkZW50aWZpS2V5JylcbiAgICBpZiBwcml2YXRlS2V5XG4gICAgICAkc2NvcGUubG9naW5XaXRoS2V5KHByaXZhdGVLZXkpXG4gICAgZWxzZVxuICAgICAgJHNjb3BlLmxvYWREZWZhdWx0SW5kZXgoKVxuXG4gICAgJHNjb3BlLnVwZGF0ZUlwZnNQZWVycyA9ICgpIC0+XG4gICAgICAkc2NvcGUuaXBmcy5zd2FybS5wZWVycyAoZXJyLCBwZWVySW5mb3MpIC0+XG4gICAgICAgIGlmIGVyclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IgJ2ZhaWxlZCB0byBmZXRjaCBpcGZzIHBlZXJzJywgZXJyXG4gICAgICAgIGVsc2VcbiAgICAgICAgICAkc2NvcGUuJGFwcGx5IC0+XG4gICAgICAgICAgICAkc2NvcGUuaXBmc1BlZXJzID0gcGVlckluZm9zXG5cbiAgICAkc2NvcGUuaXBmcy5vbiAncmVhZHknLCAtPlxuICAgICAgJHNjb3BlLmlwZnNSZWFkeSA9IHRydWVcbiAgICAgICR3aW5kb3cuaXBmcyA9ICRzY29wZS5pcGZzXG4gICAgICAkc2NvcGUudXBkYXRlSXBmc1BlZXJzKClcbiAgICAgIHNldEludGVydmFsICRzY29wZS51cGRhdGVJcGZzUGVlcnMsIDUwMDBcblxuICAgICRzY29wZS5sb2NhbFNldHRpbmdzID0gbG9jYWxTdG9yYWdlU2VydmljZS5nZXQoJ2xvY2FsU2V0dGluZ3MnKSB8fCB7fVxuICAgICRzY29wZS5jbG9zZVByb2ZpbGVVcGxvYWROb3RpZmljYXRpb24gPSAtPlxuICAgICAgJHNjb3BlLmxvY2FsU2V0dGluZ3MucHJvZmlsZVVwbG9hZE5vdGlmaWNhdGlvbkNsb3NlZCA9IHRydWVcbiAgICAgIGxvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0KCdsb2NhbFNldHRpbmdzJywgJHNjb3BlLmxvY2FsU2V0dGluZ3MpXG5cbiAgICAkc2NvcGUub3BlblByb2ZpbGVQaG90b1VwbG9hZE1vZGFsID0gLT5cbiAgICAgIHJldHVybiB1bmxlc3MgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLmlkZW50aXR5XG4gICAgICAkc2NvcGUub3BlblVwbG9hZE1vZGFsKCRzY29wZS51cGxvYWRQcm9maWxlUGhvdG8sICdVcGxvYWQgcHJvZmlsZSBwaG90bycsIHRydWUpXG5cbiAgICAkc2NvcGUudXBsb2FkUHJvZmlsZVBob3RvID0gKGJsb2IpIC0+XG4gICAgICAkc2NvcGUudXBsb2FkRmlsZShibG9iKS50aGVuIChmaWxlcykgLT5cbiAgICAgICAgcmVjaXBpZW50ID1cbiAgICAgICAgICBwcm9maWxlUGhvdG86ICcvaXBmcy8nICsgZmlsZXNbMF0ucGF0aFxuICAgICAgICBpZiAkc3RhdGUuaXMgJ2lkZW50aXRpZXMuc2hvdydcbiAgICAgICAgICByZWNpcGllbnRbJHN0YXRlUGFyYW1zLnR5cGVdID0gJHN0YXRlUGFyYW1zLnZhbHVlXG4gICAgICAgIGVsc2VcbiAgICAgICAgICByZWNpcGllbnQua2V5SUQgPSAkc2NvcGUuYXV0aGVudGljYXRpb24udXNlci5pZFZhbHVlXG4gICAgICAgICAgJHNjb3BlLmNsb3NlUHJvZmlsZVVwbG9hZE5vdGlmaWNhdGlvbigpXG4gICAgICAgICR3aW5kb3cuaWRlbnRpZmlMaWIuTWVzc2FnZS5jcmVhdGVWZXJpZmljYXRpb24oe3JlY2lwaWVudH0sICRzY29wZS5wcml2YXRlS2V5KS50aGVuIChtKSAtPlxuICAgICAgICAgICRzY29wZS5oaWRlUHJvZmlsZVBob3RvID0gdHJ1ZSAjIFRoZXJlJ3MgYSB3ZWlyZCBidWcgd2hlcmUgdGhlIHByb2ZpbGUgaWRlbnRpY29uIGRvZXNuJ3QgdXBkYXRlXG4gICAgICAgICAgJHNjb3BlLmlkZW50aWZpSW5kZXguYWRkTWVzc2FnZShtKS50aGVuIC0+XG4gICAgICAgICAgICAkc2NvcGUuaGlkZVByb2ZpbGVQaG90byA9IGZhbHNlXG4gICAgICAgICAgICBpZiAhJHN0YXRlLmlzICdpZGVudGl0aWVzLnNob3cnXG4gICAgICAgICAgICAgICRzdGF0ZS5nbyAnaWRlbnRpdGllcy5zaG93JywgeyB0eXBlOiAkc2NvcGUuYXV0aGVudGljYXRpb24udXNlci5pZFR5cGUsIHZhbHVlOiAkc2NvcGUuYXV0aGVudGljYXRpb24udXNlci5pZFZhbHVlIH1cbiAgICAgICAgICAkc2NvcGUudXBsb2FkTW9kYWwuY2xvc2UoKVxuXG4gICAgJHNjb3BlLnNldFBhZ2VUaXRsZSA9ICh0aXRsZSkgLT5cbiAgICAgICRyb290U2NvcGUucGFnZVRpdGxlID0gJ0lkZW50aWZpJ1xuICAgICAgaWYgKHRpdGxlKVxuICAgICAgICAkcm9vdFNjb3BlLnBhZ2VUaXRsZSArPSAnIC0gJyArIHRpdGxlXG5cbiAgICAkc2NvcGUuaXBmc0dldCA9ICh1cmksIGdldEpzb24pIC0+XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UgKHJlc29sdmUpIC0+XG4gICAgICAgIGdvID0gLT5cbiAgICAgICAgICAkc2NvcGUuaXBmcy5jYXQodXJpKS50aGVuIChmaWxlKSAtPlxuICAgICAgICAgICAgZmlsZSA9ICRzY29wZS5pcGZzLnR5cGVzLkJ1ZmZlcihmaWxlKVxuICAgICAgICAgICAgaWYgZ2V0SnNvblxuICAgICAgICAgICAgICBmaWxlID0gSlNPTi5wYXJzZShmaWxlLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICByZXNvbHZlIGZpbGVcblxuICAgICAgICBpZiAkc2NvcGUuaXBmc1JlYWR5XG4gICAgICAgICAgZ28oKVxuICAgICAgICBlbHNlXG4gICAgICAgICAgJHNjb3BlLmlwZnMub24gJ3JlYWR5JywgLT5cbiAgICAgICAgICAgIGdvKClcblxuICAgICRzY29wZS5yZXNldE1zZyA9IC0+XG4gICAgICAkc2NvcGUubmV3TWVzc2FnZSA9XG4gICAgICAgIHJhdGluZzogMVxuICAgICAgICBjb21tZW50OiAnJ1xuICAgICAgJHNjb3BlLm5ld1ZlcmlmaWNhdGlvbiA9XG4gICAgICAgIHR5cGU6ICcnXG4gICAgICAgIHZhbHVlOiAnJ1xuICAgICRzY29wZS5yZXNldE1zZygpXG5cbiAgICAjIENyZWF0ZSBuZXcgTWVzc2FnZVxuICAgICRzY29wZS5jcmVhdGVNZXNzYWdlID0gKGV2ZW50LCBwYXJhbXMsIHZlcmlmaWVkQXR0cikgLT5cbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpIGlmIGV2ZW50XG4gICAgICAjIENyZWF0ZSBuZXcgTWVzc2FnZSBvYmplY3RcbiAgICAgIG1lc3NhZ2UgPSBudWxsXG4gICAgICBwYXJhbXMucmVjaXBpZW50ID0gcGFyYW1zLnJlY2lwaWVudCB8fCB7fVxuICAgICAgaWYgJHN0YXRlLmlzICdpZGVudGl0aWVzLnNob3cnXG4gICAgICAgIGlmIHZlcmlmaWVkQXR0ciBhbmQgJHN0YXRlUGFyYW1zLnR5cGUgPT0gdmVyaWZpZWRBdHRyLnR5cGVcbiAgICAgICAgICBwYXJhbXMucmVjaXBpZW50WyRzdGF0ZVBhcmFtcy50eXBlXSA9IFskc3RhdGVQYXJhbXMudmFsdWUsIHZlcmlmaWVkQXR0ci52YWx1ZV1cbiAgICAgICAgZWxzZVxuICAgICAgICAgIHBhcmFtcy5yZWNpcGllbnRbJHN0YXRlUGFyYW1zLnR5cGVdID0gJHN0YXRlUGFyYW1zLnZhbHVlXG4gICAgICAgICAgcGFyYW1zLnJlY2lwaWVudFt2ZXJpZmllZEF0dHIudHlwZV0gPSB2ZXJpZmllZEF0dHIudmFsdWUgaWYgdmVyaWZpZWRBdHRyXG4gICAgICBlbHNlIHVubGVzcyAkc3RhdGUuaXMgJ2lkZW50aXRpZXMuY3JlYXRlJ1xuICAgICAgICBwYXJhbXMucmVjaXBpZW50LmtleUlEID0gJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnVzZXIuaWRWYWx1ZVxuICAgICAgaWYgcGFyYW1zLnR5cGUgPT0gJ3JhdGluZydcbiAgICAgICAgcGFyYW1zLm1heFJhdGluZyB8PSAzXG4gICAgICAgIHBhcmFtcy5taW5SYXRpbmcgfD0gLTNcbiAgICAgICAgbWVzc2FnZSA9ICR3aW5kb3cuaWRlbnRpZmlMaWIuTWVzc2FnZS5jcmVhdGVSYXRpbmcocGFyYW1zLCAkc2NvcGUucHJpdmF0ZUtleSlcbiAgICAgIGVsc2UgaWYgcGFyYW1zLnR5cGUgPT0gJ3ZlcmlmaWNhdGlvbidcbiAgICAgICAgbWVzc2FnZSA9ICR3aW5kb3cuaWRlbnRpZmlMaWIuTWVzc2FnZS5jcmVhdGVWZXJpZmljYXRpb24ocGFyYW1zLCAkc2NvcGUucHJpdmF0ZUtleSlcbiAgICAgIGVsc2VcbiAgICAgICAgbWVzc2FnZSA9ICR3aW5kb3cuaWRlbnRpZmlMaWIuTWVzc2FnZS5jcmVhdGUocGFyYW1zLCAkc2NvcGUucHJpdmF0ZUtleSlcbiAgICAgIG9wdGlvbnMgPSB7fVxuXG4gICAgICBtZXNzYWdlLnRoZW4gKG0pIC0+XG4gICAgICAgIGNvbnNvbGUubG9nIG1cbiAgICAgICAgJHNjb3BlLmlkZW50aWZpSW5kZXguYWRkTWVzc2FnZShtKVxuICAgICAgICBpZiAkc2NvcGUuZmlsdGVycy50eXBlIG5vdCBpbiBbcGFyYW1zLnR5cGUsIG51bGxdXG4gICAgICAgICAgJHNjb3BlLmZpbHRlcnMudHlwZSA9IHBhcmFtcy50eXBlXG4gICAgICAgICRzY29wZS5yZXNldE1zZygpXG4gICAgICAuY2F0Y2ggKGUpIC0+XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgICAgICAgJHNjb3BlLmVycm9yID0gZVxuXG4gICAgJHNjb3BlLmFkZEF0dHJpYnV0ZSA9IC0+XG4gICAgICAkbG9jYXRpb24ucGF0aCAnIy9pZGVudGl0aWVzL2NyZWF0ZS8nICsgJHNjb3BlLnF1ZXJ5LnRlcm1cblxuICAgICRzY29wZS5sb2dpbiA9IC0+XG4gICAgICAkc2NvcGUuZmlsdGVycy5tYXhfZGlzdGFuY2UgPSAtMSAjIGJlY2F1c2UgdGhlIHVzZXIgZG9lc24ndCBoYXZlIGEgdHJ1c3QgaW5kZXggeWV0XG5cbiAgICAkc2NvcGUub3BlbkxvZ2luTW9kYWwgPSAtPlxuICAgICAgJHNjb3BlLmxvZ2luTW9kYWwgPSAkdWliTW9kYWwub3BlbihcbiAgICAgICAgYW5pbWF0aW9uOiAkc2NvcGUuYW5pbWF0aW9uc0VuYWJsZWRcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbWFpbi9sb2dpbi5tb2RhbC5odG1sJ1xuICAgICAgICBzaXplOiAnbGcnXG4gICAgICAgIHNjb3BlOiAkc2NvcGVcbiAgICAgIClcbiAgICAgICRzY29wZS5sb2dpbk1vZGFsLnJlbmRlcmVkLnRoZW4gLT5cbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKClcbiAgICAgICAgZm9jdXMoJ25ld1VzZXInKVxuICAgICAgJHNjb3BlLiRvbiAnJHN0YXRlQ2hhbmdlU3RhcnQnLCAtPlxuICAgICAgICAkc2NvcGUubG9naW5Nb2RhbC5jbG9zZSgpXG5cbiAgICAkc2NvcGUub3BlblVwbG9hZE1vZGFsID0gKGNhbGxiYWNrLCBtb2RhbEJ1dHRvblRleHQsIHNxdWFyaWZ5KSAtPlxuICAgICAgJHNjb3BlLnVwbG9hZE1vZGFsQ2FsbGJhY2sgPSBjYWxsYmFja1xuICAgICAgJHNjb3BlLm1vZGFsQnV0dG9uVGV4dCA9IG1vZGFsQnV0dG9uVGV4dCBvciAnVXBsb2FkJ1xuICAgICAgJHNjb3BlLnNxdWFyaWZ5ID0gc3F1YXJpZnlcbiAgICAgICRzY29wZS51cGxvYWRNb2RhbCA9ICR1aWJNb2RhbC5vcGVuKFxuICAgICAgICBhbmltYXRpb246ICRzY29wZS5hbmltYXRpb25zRW5hYmxlZFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9pZGVudGl0aWVzL3VwbG9hZC5tb2RhbC5odG1sJ1xuICAgICAgICBzaXplOiAnbGcnXG4gICAgICAgIHNjb3BlOiAkc2NvcGVcbiAgICAgIClcbiAgICAgICRzY29wZS51cGxvYWRNb2RhbC5yZW5kZXJlZC50aGVuIC0+XG4gICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpXG4gICAgICAkc2NvcGUuJG9uICckc3RhdGVDaGFuZ2VTdGFydCcsIC0+XG4gICAgICAgICRzY29wZS51cGxvYWRNb2RhbC5jbG9zZSgpXG5cbiAgICAkc2NvcGUuJG9uICckc3RhdGVDaGFuZ2VTdGFydCcsIC0+XG4gICAgICAkc2NvcGUuZmlsdGVycy50eXBlID0gbnVsbFxuXG4gICAgbG9hZE1zZ3MgPSAtPlxuICAgICAgbGltaXQgPSA0MFxuICAgICAgY3Vyc29yID0gbnVsbFxuICAgICAgJHNjb3BlLm1zZ3MubGlzdCA9IFtdXG4gICAgICByZXN1bHRGb3VuZCA9IChtc2cpIC0+XG4gICAgICAgIGNvbnNvbGUubG9nICdnb3QgbXNnJywgbXNnXG4gICAgICAgICRzY29wZS5wcm9jZXNzTWVzc2FnZXMgW21zZ11cbiAgICAgICAgJHNjb3BlLiRhcHBseSAtPlxuICAgICAgICAgICRzY29wZS5tc2dzLmxpc3QucHVzaCBtc2dcbiAgICAgICRzY29wZS5pZGVudGlmaUluZGV4LmdldE1lc3NhZ2VzQnlUaW1lc3RhbXAocmVzdWx0Rm91bmQsIGxpbWl0LCBjdXJzb3IpXG5cbiAgICAkc2NvcGUuJHdhdGNoICdpZGVudGlmaUluZGV4JywgLT5cbiAgICAgIHJldHVybiB1bmxlc3MgJHNjb3BlLmlkZW50aWZpSW5kZXhcbiAgICAgIGxvYWRNc2dzKClcbiAgICAgICRzY29wZS5zZWFyY2goKVxuXG4gICAgJHNjb3BlLnVwbG9hZEZpbGUgPSAoYmxvYikgLT5cbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSAocmVzb2x2ZSwgcmVqZWN0KSAtPlxuICAgICAgICBjb25zb2xlLmxvZyAndXBsb2FkaW5nJywgYmxvYlxuICAgICAgICBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgICAgICBmaWxlUmVhZGVyLm9ubG9hZCA9IChldmVudCkgLT5cbiAgICAgICAgICBidWZmZXIgPSAkc2NvcGUuaXBmcy50eXBlcy5CdWZmZXIuZnJvbShldmVudC50YXJnZXQucmVzdWx0KVxuICAgICAgICAgIGNvbnNvbGUubG9nICdidWZmZXInLCBidWZmZXJcbiAgICAgICAgICAkc2NvcGUuaXBmcy5hZGQgYnVmZmVyLCAoZXJyLCBmaWxlcykgLT5cbiAgICAgICAgICAgIGlmIGVyclxuICAgICAgICAgICAgICByZWplY3QoJ2FkZGluZyB0byBpcGZzIGZhaWxlZCcsIGVycilcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgcmVzb2x2ZShmaWxlcylcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cgJ2RvbmU6JywgZXJyLCBmaWxlc1xuICAgICAgICBmaWxlUmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGJsb2IpXG5cbiAgICAkc2NvcGUuY3JlYXRlVXNlciA9IChuYW1lKSAtPlxuICAgICAgcmV0dXJuIGlmIG5hbWUuaW5kZXhPZigneycpICE9IC0xIG9yIG5hbWUuaW5kZXhPZignfScpICE9IC0xICMgcHJldmVudCBhY2NpZGVudGFsIHByaXZhdGUga2V5IHBhc3RlXG4gICAgICBuYW1lID0gbmFtZS50cmltKClcbiAgICAgICRzY29wZS5jcmVhdGluZ1VzZXIgPSB0cnVlXG4gICAgICBzZWxmID0ge25hbWV9XG4gICAgICAkd2luZG93LmlkZW50aWZpTGliLktleS5nZW5lcmF0ZSgpXG4gICAgICAudGhlbiAoa2V5KSAtPlxuICAgICAgICAkc2NvcGUucHJpdmF0ZUtleSA9IGtleVxuICAgICAgICAkc2NvcGUucHJpdmF0ZUtleVNlcmlhbGl6ZWQgPSAkd2luZG93LmlkZW50aWZpTGliLktleS50b0p3aygkc2NvcGUucHJpdmF0ZUtleSlcbiAgICAgICAgc2VsZi5rZXlJRCA9ICR3aW5kb3cuaWRlbnRpZmlMaWIuS2V5LmdldElkKCRzY29wZS5wcml2YXRlS2V5KVxuICAgICAgICAkc2NvcGUubG9naW5XaXRoS2V5KCRzY29wZS5wcml2YXRlS2V5U2VyaWFsaXplZCwgc2VsZilcbiAgICAgIC50aGVuIChtc2cpIC0+XG4gICAgICAgICRzY29wZS5jcmVhdGluZ1VzZXIgPSBmYWxzZVxuICAgICAgLmNhdGNoIChlKSAtPlxuICAgICAgICBjb25zb2xlLmVycm9yKCdmYWlsZWQgdG8gY3JlYXRlIHVzZXI6JywgZSlcbiAgICAgICAgJHNjb3BlLmNyZWF0aW5nVXNlciA9IGZhbHNlXG5cbiAgICAkc2NvcGUuZ2VuZXJhdGVLZXkgPSAtPlxuICAgICAgJHdpbmRvdy5pZGVudGlmaUxpYi5LZXkuZ2VuZXJhdGUoKS50aGVuIChrZXkpIC0+XG4gICAgICAgICRzY29wZS4kYXBwbHkgLT5cbiAgICAgICAgICAkc2NvcGUucHJpdmF0ZUtleSA9IGtleVxuICAgICAgICAgIGNvbnNvbGUubG9nICRzY29wZS5wcml2YXRlS2V5XG4gICAgICAgICAgJHNjb3BlLnByaXZhdGVLZXlTZXJpYWxpemVkID0gJHdpbmRvdy5pZGVudGlmaUxpYi5LZXkudG9Kd2soJHNjb3BlLnByaXZhdGVLZXkpXG5cbiAgICAkc2NvcGUuZG93bmxvYWRUZXh0ID0gKHRleHQpIC0+XG4gICAgICBoaWRkZW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgICBoaWRkZW5FbGVtZW50LmhyZWYgPSAnZGF0YTp0ZXh0L2NzdjtjaGFyc2V0PXV0Zi04LCcgKyBlbmNvZGVVUkkodGV4dClcbiAgICAgIGhpZGRlbkVsZW1lbnQudGFyZ2V0ID0gJ19ibGFuaydcbiAgICAgIGhpZGRlbkVsZW1lbnQuZG93bmxvYWQgPSAnaWRlbnRpZmlfcHJpdmF0ZV9rZXkudHh0J1xuICAgICAgaGlkZGVuRWxlbWVudC5jbGljaygpXG5cbiAgICAkc2NvcGUub3BlbkxvZ291dE1vZGFsID0gLT5cbiAgICAgICRzY29wZS5sb2dvdXRNb2RhbCA9ICR1aWJNb2RhbC5vcGVuKFxuICAgICAgICBhbmltYXRpb246ICRzY29wZS5hbmltYXRpb25zRW5hYmxlZFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9tYWluL2xvZ291dC5tb2RhbC5odG1sJ1xuICAgICAgICBzaXplOiAnbGcnXG4gICAgICAgIHNjb3BlOiAkc2NvcGVcbiAgICAgIClcbiAgICAgICRzY29wZS5sb2dvdXRNb2RhbC5yZW5kZXJlZC50aGVuIC0+XG4gICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpXG4gICAgICAkc2NvcGUuJG9uICckc3RhdGVDaGFuZ2VTdGFydCcsIC0+XG4gICAgICAgICRzY29wZS5sb2dvdXRNb2RhbC5jbG9zZSgpXG5cbiAgICAkc2NvcGUuY2xvc2VMb2dvdXRNb2RhbCA9IC0+XG4gICAgICAkc2NvcGUubG9nb3V0TW9kYWwuY2xvc2UoKVxuXG4gICAgJHNjb3BlLmxvZ291dCA9IC0+XG4gICAgICAkc2NvcGUuZmlsdGVycy5tYXhfZGlzdGFuY2UgPSAwXG4gICAgICAkc2NvcGUucHJpdmF0ZUtleVNlcmlhbGl6ZWQgPSAnJ1xuICAgICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uID0ge31cbiAgICAgIGxvY2FsU3RvcmFnZVNlcnZpY2UuY2xlYXJBbGwoKVxuICAgICAgJHN0YXRlLmdvKCdpZGVudGl0aWVzLmxpc3QnKVxuICAgICAgJHNjb3BlLnByaXZhdGVLZXkgPSBudWxsXG4gICAgICAkc2NvcGUucHVibGljS2V5ID0gbnVsbFxuICAgICAgJHNjb3BlLmxvZ291dE1vZGFsLmNsb3NlKClcbiAgICAgICRzY29wZS5sb2FkRGVmYXVsdEluZGV4KClcbiAgICAgICRzY29wZS5sb2NhbFNldHRpbmdzID0ge31cblxuICAgICRzY29wZS5tc2dGaWx0ZXIgPSAobXNnLCBpbmRleCwgYXJyYXkpIC0+XG4gICAgICBkYXRhID0gbXNnLnNpZ25lZERhdGFcbiAgICAgIGlmICRzY29wZS5maWx0ZXJzLnR5cGVcbiAgICAgICAgaWYgJHNjb3BlLmZpbHRlcnMudHlwZS5tYXRjaCAvXnJhdGluZy9cbiAgICAgICAgICBpZiBkYXRhLnR5cGUgIT0gJ3JhdGluZydcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgIG5ldXRyYWxSYXRpbmcgPSAoZGF0YS5tYXhSYXRpbmcgKyBkYXRhLm1pblJhdGluZykgLyAyXG4gICAgICAgICAgaWYgJHNjb3BlLmZpbHRlcnMudHlwZSA9PSAncmF0aW5nOnBvc2l0aXZlJyBhbmQgZGF0YS5yYXRpbmcgPD0gbmV1dHJhbFJhdGluZ1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgZWxzZSBpZiAkc2NvcGUuZmlsdGVycy50eXBlID09ICdyYXRpbmc6bmVnYXRpdmUnIGFuZCBkYXRhLnJhdGluZyA+PSBuZXV0cmFsUmF0aW5nXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICBlbHNlIGlmICRzY29wZS5maWx0ZXJzLnR5cGUgPT0gJ3JhdGluZzpuZXV0cmFsJyBhbmQgZGF0YS5yYXRpbmcgIT0gbmV1dHJhbFJhdGluZ1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIGVsc2UgaWYgZGF0YS50eXBlICE9ICRzY29wZS5maWx0ZXJzLnR5cGVcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIGVsc2VcbiAgICAgICAgaWYgZGF0YS50eXBlIGluIFsndmVyaWZpY2F0aW9uJywgJ3VudmVyaWZpY2F0aW9uJ11cbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIGlmICRzY29wZS5maWx0ZXJzLm1heF9kaXN0YW5jZVxuICAgICAgICBpZiAkc2NvcGUuZmlsdGVycy5tYXhfZGlzdGFuY2UgPT0gMCBhbmQgdHlwZW9mIHZhbHVlLmF1dGhvclRydXN0RGlzdGFuY2UgIT0gJ251bWJlcidcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgZWxzZSBpZiAkc2NvcGUuZmlsdGVycy5tYXhfZGlzdGFuY2UgPiAwIGFuZCB2YWx1ZS5hdXRob3JUcnVzdERpc3RhbmNlID4gJHNjb3BlLmZpbHRlcnMubWF4X2Rpc3RhbmNlXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICByZXR1cm4gdHJ1ZVxuXG4gICAgJHNjb3BlLnJlbW92ZUZvY3VzID0gKGV2ZW50KSAtPlxuICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5ibHVyKClcblxuICAgICRzY29wZS5zZXRNc2dSYXdEYXRhID0gKG1zZykgLT5cbiAgICAgIHNob3dSYXdEYXRhID1cbiAgICAgICAgaGFzaDogbXNnLmhhc2hcbiAgICAgICAgZGF0YTogbXNnLnNpZ25lZERhdGFcbiAgICAgICAgcHJpb3JpdHk6IG1zZy5wcmlvcml0eVxuICAgICAgICBqd3M6IG1zZy5qd3NcbiAgICAgIG1zZy5zdHJEYXRhID0gSlNPTi5zdHJpbmdpZnkoc2hvd1Jhd0RhdGEsIHVuZGVmaW5lZCwgMilcblxuICAgICRzY29wZS5vcGVuTWVzc2FnZSA9IChldmVudCwgbWVzc2FnZSwgc2l6ZSkgLT5cbiAgICAgIHQgPSBldmVudC50YXJnZXRcbiAgICAgIHJldHVybiBpZiBhbmd1bGFyLmVsZW1lbnQodCkuY2xvc2VzdCgnYScpLmxlbmd0aFxuICAgICAgJHNjb3BlLnNldE1zZ1Jhd0RhdGEobWVzc2FnZSlcbiAgICAgICRzY29wZS5tZXNzYWdlID0gbWVzc2FnZVxuICAgICAgIyBUT0RPOiBjaGVjayBzaWdcbiAgICAgICRzY29wZS5tZXNzYWdlLnJlY2lwaWVudCA9ICRzY29wZS5tZXNzYWdlLmdldFJlY2lwaWVudCgkc2NvcGUuaWRlbnRpZmlJbmRleClcbiAgICAgICRzY29wZS5tZXNzYWdlLnJlY2lwaWVudC5ndW4uZ2V0KCdhdHRycycpLm9wZW4gKGQpIC0+XG4gICAgICAgIG12YSA9ICR3aW5kb3cuaWRlbnRpZmlMaWIuSWRlbnRpdHkuZ2V0TW9zdFZlcmlmaWVkQXR0cmlidXRlcyhkKVxuICAgICAgICBpZiBtdmEubmFtZVxuICAgICAgICAgICRzY29wZS4kYXBwbHkgLT4gJHNjb3BlLm1lc3NhZ2UucmVjaXBpZW50X25hbWUgPSBtdmEubmFtZS5hdHRyaWJ1dGUudmFsdWVcbiAgICAgICAgZWxzZSBpZiBtdmEubmlja25hbWVcbiAgICAgICAgICAkc2NvcGUuJGFwcGx5IC0+ICRzY29wZS5tZXNzYWdlLnJlY2lwaWVudF9uYW1lID0gbXZhLm5pY2tuYW1lLmF0dHJpYnV0ZS52YWx1ZVxuICAgICAgJHNjb3BlLm1lc3NhZ2Uuc2lnbmVyS2V5SUQgPSAkc2NvcGUubWVzc2FnZS5nZXRTaWduZXJLZXlJRCgpXG4gICAgICAkc2NvcGUubWVzc2FnZS52ZXJpZmllZEJ5ID0gJHNjb3BlLmlkZW50aWZpSW5kZXguZ2V0KCdrZXlJRCcsICRzY29wZS5tZXNzYWdlLnNpZ25lcktleUlEKVxuICAgICAgJHNjb3BlLm1lc3NhZ2UudmVyaWZpZWRCeUF0dHIgPSBuZXcgJHdpbmRvdy5pZGVudGlmaUxpYi5BdHRyaWJ1dGUoJ2tleUlEJywgJHNjb3BlLm1lc3NhZ2Uuc2lnbmVyS2V5SUQpXG4gICAgICAkc2NvcGUubWVzc2FnZU1vZGFsID0gJHVpYk1vZGFsLm9wZW4oXG4gICAgICAgIGFuaW1hdGlvbjogJHNjb3BlLmFuaW1hdGlvbnNFbmFibGVkXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL21lc3NhZ2VzL3Nob3cubW9kYWwuaHRtbCdcbiAgICAgICAgc2l6ZTogc2l6ZVxuICAgICAgICBzY29wZTogJHNjb3BlXG4gICAgICApXG4gICAgICAkc2NvcGUubWVzc2FnZU1vZGFsLnJlbmRlcmVkLnRoZW4gLT5cbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKClcbiAgICAgICRzY29wZS4kb24gJyRzdGF0ZUNoYW5nZVN0YXJ0JywgLT5cbiAgICAgICAgJHNjb3BlLm1lc3NhZ2VNb2RhbC5jbG9zZSgpXG5cbiAgICAkc2NvcGUuZmlsdGVycyA9ICRzY29wZS5maWx0ZXJzIG9yIGNvbmZpZy5kZWZhdWx0RmlsdGVyc1xuXG4gICAgJHNjb3BlLmlzQ29sbGFwc2VkID0gZmFsc2VcbiAgICAjICRzY29wZS5tZW51ID0gTWVudXMuZ2V0TWVudSgndG9wYmFyJylcblxuICAgICRzY29wZS50b2dnbGVDb2xsYXBzaWJsZU1lbnUgPSAtPlxuICAgICAgJHNjb3BlLmlzQ29sbGFwc2VkID0gISRzY29wZS5pc0NvbGxhcHNlZFxuXG4gICAgJHNjb3BlLnByb2Nlc3NNZXNzYWdlcyA9IChtZXNzYWdlcywgbXNnT3B0aW9ucykgLT5cbiAgICAgIHByb2Nlc3NNZXNzYWdlID0gKG1zZykgLT5cbiAgICAgICAgbXNnLmF1dGhvciA9IG1zZy5nZXRBdXRob3IoJHNjb3BlLmlkZW50aWZpSW5kZXgpXG4gICAgICAgIG1zZy5hdXRob3IuZ3VuLmdldCgndHJ1c3REaXN0YW5jZScpLm9uIChkKSAtPiBtc2cuYXV0aG9yVHJ1c3REaXN0YW5jZSA9IGRcbiAgICAgICAgbXNnLmF1dGhvci5ndW4uZ2V0KCdhdHRycycpLm9wZW4gKGQpIC0+XG4gICAgICAgICAgbXZhID0gJHdpbmRvdy5pZGVudGlmaUxpYi5JZGVudGl0eS5nZXRNb3N0VmVyaWZpZWRBdHRyaWJ1dGVzKGQpXG4gICAgICAgICAgaWYgbXZhLm5hbWVcbiAgICAgICAgICAgICRzY29wZS4kYXBwbHkgLT4gbXNnLmF1dGhvcl9uYW1lID0gbXZhLm5hbWUuYXR0cmlidXRlLnZhbHVlXG4gICAgICAgICAgZWxzZSBpZiBtdmEubmlja25hbWVcbiAgICAgICAgICAgICRzY29wZS4kYXBwbHkgLT4gbXNnLmF1dGhvcl9uYW1lID0gbXZhLm5pY2tuYW1lLmF0dHJpYnV0ZS52YWx1ZVxuICAgICAgICBtc2cucmVjaXBpZW50ID0gbXNnLmdldFJlY2lwaWVudCgkc2NvcGUuaWRlbnRpZmlJbmRleClcbiAgICAgICAgbXNnLnJlY2lwaWVudC5ndW4uZ2V0KCdhdHRycycpLm9wZW4gKGQpIC0+XG4gICAgICAgICAgbXZhID0gJHdpbmRvdy5pZGVudGlmaUxpYi5JZGVudGl0eS5nZXRNb3N0VmVyaWZpZWRBdHRyaWJ1dGVzKGQpXG4gICAgICAgICAgaWYgbXZhLm5hbWVcbiAgICAgICAgICAgICRzY29wZS4kYXBwbHkgLT4gbXNnLnJlY2lwaWVudF9uYW1lID0gbXZhLm5hbWUuYXR0cmlidXRlLnZhbHVlXG4gICAgICAgICAgZWxzZSBpZiBtdmEubmlja25hbWVcbiAgICAgICAgICAgICRzY29wZS4kYXBwbHkgLT4gbXNnLnJlY2lwaWVudF9uYW1lID0gbXZhLm5pY2tuYW1lLmF0dHJpYnV0ZS52YWx1ZVxuICAgICAgICAkc2NvcGUuJGFwcGx5IC0+XG4gICAgICAgICAgIyBUT0RPOiBtYWtlIHN1cmUgbWVzc2FnZSBzaWduYXR1cmUgaXMgY2hlY2tlZFxuICAgICAgICAgIGkgPSB1bmRlZmluZWRcbiAgICAgICAgICBpID0gMFxuICAgICAgICAgIHNtYWxsZXN0SW5kZXggPSAxMDAwXG4gICAgICAgICAgbXNnLmF1dGhvckFycmF5ID0gbXNnLmdldEF1dGhvckFycmF5KClcbiAgICAgICAgICBmb3IgYSBpbiBtc2cuYXV0aG9yQXJyYXlcbiAgICAgICAgICAgIG1zZy5saW5rVG9BdXRob3IgPSBhIHVubGVzcyBtc2cubGlua1RvQXV0aG9yXG4gICAgICAgICAgICBpbmRleCA9IE9iamVjdC5rZXlzKCR3aW5kb3cuaWRlbnRpZmlMaWIuQXR0cmlidXRlLmdldFVuaXF1ZUlkVmFsaWRhdG9ycygpKS5pbmRleE9mKGEudHlwZSlcbiAgICAgICAgICAgIGlmIGluZGV4ID4gLTEgYW5kIGluZGV4IDwgc21hbGxlc3RJbmRleFxuICAgICAgICAgICAgICBzbWFsbGVzdEluZGV4ID0gaW5kZXhcbiAgICAgICAgICAgICAgbXNnLmxpbmtUb0F1dGhvciA9IGFcbiAgICAgICAgICAgIGVsc2UgaWYgIW1zZy5hdXRob3JfbmFtZSBhbmQgYS50eXBlIGluIFsnbmFtZScsICduaWNrbmFtZSddXG4gICAgICAgICAgICAgIG1zZy5hdXRob3JfbmFtZSA9IGEudmFsdWVcbiAgICAgICAgICAgIGkrK1xuICAgICAgICAgIGkgPSAwXG4gICAgICAgICAgc21hbGxlc3RJbmRleCA9IDEwMDBcbiAgICAgICAgICBtc2cucmVjaXBpZW50QXJyYXkgPSBtc2cuZ2V0UmVjaXBpZW50QXJyYXkoKVxuICAgICAgICAgIGZvciBhIGluIG1zZy5yZWNpcGllbnRBcnJheVxuICAgICAgICAgICAgbXNnLmxpbmtUb1JlY2lwaWVudCA9IGEgdW5sZXNzIG1zZy5saW5rVG9BdXRob3JcbiAgICAgICAgICAgIGluZGV4ID0gT2JqZWN0LmtleXMoJHdpbmRvdy5pZGVudGlmaUxpYi5BdHRyaWJ1dGUuZ2V0VW5pcXVlSWRWYWxpZGF0b3JzKCkpLmluZGV4T2YoYS50eXBlKVxuICAgICAgICAgICAgaWYgaW5kZXggPiAtMSBhbmQgaW5kZXggPCBzbWFsbGVzdEluZGV4XG4gICAgICAgICAgICAgIHNtYWxsZXN0SW5kZXggPSBpbmRleFxuICAgICAgICAgICAgICBtc2cubGlua1RvUmVjaXBpZW50ID0gYVxuICAgICAgICAgICAgZWxzZSBpZiAhbXNnLnJlY2lwaWVudF9uYW1lIGFuZCBhLnR5cGUgaW4gWyduYW1lJywgJ25pY2tuYW1lJ11cbiAgICAgICAgICAgICAgbXNnLnJlY2lwaWVudF9uYW1lID0gYS52YWx1ZVxuICAgICAgICAgICAgaSsrXG4gICAgICAgICAgaWYgbXNnLmxpbmtUb0F1dGhvci5lcXVhbHMobXNnLmxpbmtUb1JlY2lwaWVudClcbiAgICAgICAgICAgIG1zZy5zYW1lQXV0aG9yQW5kUmVjaXBpZW50ID0gdHJ1ZVxuICAgICAgICAgIGlmICFtc2cuYXV0aG9yX25hbWVcbiAgICAgICAgICAgIG1zZy5hdXRob3JfbmFtZSA9IG1zZy5saW5rVG9BdXRob3IudmFsdWVcbiAgICAgICAgICAgIGlmIG1zZy5saW5rVG9BdXRob3IudHlwZSBpbiBbJ2tleUlEJywgJ3V1aWQnXVxuICAgICAgICAgICAgICBtc2cuYXV0aG9yX25hbWUgPSBtc2cuYXV0aG9yX25hbWUuc2xpY2UoMCwgNikgKyAnLi4uJ1xuICAgICAgICAgIGlmICFtc2cucmVjaXBpZW50X25hbWVcbiAgICAgICAgICAgIG1zZy5yZWNpcGllbnRfbmFtZSA9IG1zZy5saW5rVG9SZWNpcGllbnQudmFsdWVcbiAgICAgICAgICAgIGlmIG1zZy5saW5rVG9BdXRob3IudHlwZSBpbiBbJ2tleUlEJywgJ3V1aWQnXVxuICAgICAgICAgICAgICBtc2cucmVjaXBpZW50X25hbWUgPSBtc2cucmVjaXBpZW50X25hbWUuc2xpY2UoMCwgNikgKyAnLi4uJ1xuICAgICAgICAgIGFscGhhID0gdW5kZWZpbmVkXG4gICAgICAgICAgbXNnLmljb25TdHlsZSA9ICcnXG4gICAgICAgICAgbXNnLmJnQ29sb3IgPSAnJ1xuICAgICAgICAgIG1zZy5pY29uQ291bnQgPSBuZXcgQXJyYXkoMSlcbiAgICAgICAgICBzd2l0Y2ggbXNnLnNpZ25lZERhdGEudHlwZVxuICAgICAgICAgICAgd2hlbiAndmVyaWZ5X2lkZW50aXR5JywgJ3ZlcmlmaWNhdGlvbidcbiAgICAgICAgICAgICAgbXNnLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLW9rLXNpZ24nXG4gICAgICAgICAgICAgIG1zZy5pc1ZlcmlmaWNhdGlvbiA9IHRydWVcbiAgICAgICAgICAgIHdoZW4gJ3VudmVyaWZ5X2lkZW50aXR5JywgJ3VudmVyaWZpY2F0aW9uJ1xuICAgICAgICAgICAgICBtc2cuaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIG5lZ2F0aXZlJ1xuICAgICAgICAgICAgICBtc2cuYmdDb2xvciA9ICdiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGMERFO2JvcmRlci1jb2xvcjojRkZFMkM2OydcbiAgICAgICAgICAgICAgbXNnLmlzVW52ZXJpZmljYXRpb24gPSB0cnVlXG4gICAgICAgICAgICB3aGVuICdwb3N0J1xuICAgICAgICAgICAgICBtc2cuaWNvblN0eWxlID0gJ2ZhIGZhLXBlbmNpbCdcbiAgICAgICAgICAgICAgbXNnLmlzUG9zdCA9IHRydWVcbiAgICAgICAgICAgIHdoZW4gJ3JhdGluZydcbiAgICAgICAgICAgICAgcmF0aW5nID0gbXNnLnNpZ25lZERhdGEucmF0aW5nXG4gICAgICAgICAgICAgIG5ldXRyYWxSYXRpbmcgPSAobXNnLnNpZ25lZERhdGEubWluUmF0aW5nICsgbXNnLnNpZ25lZERhdGEubWF4UmF0aW5nKSAvIDJcbiAgICAgICAgICAgICAgbWF4UmF0aW5nRGlmZiA9IG1zZy5zaWduZWREYXRhLm1heFJhdGluZyAtIG5ldXRyYWxSYXRpbmdcbiAgICAgICAgICAgICAgbWluUmF0aW5nRGlmZiA9IG1zZy5zaWduZWREYXRhLm1pblJhdGluZyAtIG5ldXRyYWxSYXRpbmdcbiAgICAgICAgICAgICAgaWYgcmF0aW5nID4gbmV1dHJhbFJhdGluZ1xuICAgICAgICAgICAgICAgIGlmIG1zZy5zaWduZWREYXRhLmNvbnRleHQgPT0gJ3ZlcmlmaWVyJ1xuICAgICAgICAgICAgICAgICAgbXNnLmljb25TdHlsZSA9ICdmYSBmYS1zaGllbGQgcG9zaXRpdmUnXG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgbXNnLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLXRodW1icy11cCBwb3NpdGl2ZSdcbiAgICAgICAgICAgICAgICAgIG1zZy5pY29uQ291bnQgPSBpZiBtYXhSYXRpbmdEaWZmIDwgMiB0aGVuIG1zZy5pY29uQ291bnQgZWxzZSBuZXcgQXJyYXkoTWF0aC5jZWlsKDMgKiByYXRpbmcgLyBtYXhSYXRpbmdEaWZmKSlcbiAgICAgICAgICAgICAgICBhbHBoYSA9IChyYXRpbmcgLSBuZXV0cmFsUmF0aW5nIC0gMC41KSAvIG1heFJhdGluZ0RpZmYgLyAxLjI1ICsgMC4yXG4gICAgICAgICAgICAgICAgbXNnLmJnQ29sb3IgPSAnYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjMsMjQwLDIxNiwnICsgYWxwaGEgKyAnKTsnXG4gICAgICAgICAgICAgIGVsc2UgaWYgcmF0aW5nIDwgbmV1dHJhbFJhdGluZ1xuICAgICAgICAgICAgICAgIG1zZy5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi10aHVtYnMtZG93biBuZWdhdGl2ZSdcbiAgICAgICAgICAgICAgICBtc2cuaWNvbkNvdW50ID0gaWYgbWluUmF0aW5nRGlmZiA+IC0yIHRoZW4gbXNnLmljb25Db3VudCBlbHNlIG5ldyBBcnJheShNYXRoLmNlaWwoMyAqIHJhdGluZyAvIG1pblJhdGluZ0RpZmYpKVxuICAgICAgICAgICAgICAgIGFscGhhID0gKHJhdGluZyAtIG5ldXRyYWxSYXRpbmcgKyAwLjUpIC8gbWluUmF0aW5nRGlmZiAvIDEuMjUgKyAwLjJcbiAgICAgICAgICAgICAgICBtc2cuYmdDb2xvciA9ICdiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjQyLDIyMiwyMjIsJyArIGFscGhhICsgJyk7J1xuICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgbXNnLmJnQ29sb3IgPSAnYmFja2dyb3VuZC1jb2xvcjogI2ZjZjhlMzsnXG4gICAgICAgICAgICAgICAgbXNnLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLXF1ZXN0aW9uLXNpZ24gbmV1dHJhbCdcblxuICAgICAgYW5ndWxhci5mb3JFYWNoIG1lc3NhZ2VzLCAobXNnLCBrZXkpIC0+XG4gICAgICAgIG1zZ1trXSA9IHYgZm9yIGssIHYgb2YgbXNnT3B0aW9uc1xuICAgICAgICBwcm9jZXNzTWVzc2FnZShtc2cpXG5cbiAgICAjIENvbGxhcHNpbmcgdGhlIG1lbnUgYWZ0ZXIgbmF2aWdhdGlvblxuICAgICRzY29wZS4kb24gJyRzdGF0ZUNoYW5nZVN1Y2Nlc3MnLCAtPlxuICAgICAgJHNjb3BlLmlzQ29sbGFwc2VkID0gZmFsc2VcblxuICAgIHNjcm9sbFRvID0gKGVsKSAtPlxuICAgICAgaWYgIWVsXG4gICAgICAgIHJldHVyblxuICAgICAgcG9zID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgIGlmIHBvcy50b3BcbiAgICAgICAgaWYgcG9zLnRvcCAtIDYwIDwgJHdpbmRvdy5wYWdlWU9mZnNldFxuICAgICAgICAgICR3aW5kb3cuc2Nyb2xsVG8gMCwgcG9zLnRvcCAtIDYwXG4gICAgICAgIGVsc2UgaWYgcG9zLmJvdHRvbSA+ICR3aW5kb3cucGFnZVlPZmZzZXQgKyAoJHdpbmRvdy5pbm5lckhlaWdodCBvciBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KVxuICAgICAgICAgICR3aW5kb3cuc2Nyb2xsVG8gMCwgcG9zLmJvdHRvbSAtICgkd2luZG93LmlubmVySGVpZ2h0IG9yIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpICsgMTVcbiAgICAgIHJldHVyblxuXG4gICAgJHNjb3BlLnNldElkZW50aXR5TmFtZXMgPSAoaSwgaHRtbFNhZmUsIHNldFRpdGxlKSAtPlxuICAgICAgaS52ZXJpZmllZCA9IGZhbHNlXG4gICAgICBpLmd1bi5nZXQoJ2F0dHJzJykub3BlbiAoYXR0cnMpIC0+XG4gICAgICAgICRzY29wZS4kYXBwbHkgLT5cbiAgICAgICAgICBtdmEgPSAkd2luZG93LmlkZW50aWZpTGliLklkZW50aXR5LmdldE1vc3RWZXJpZmllZEF0dHJpYnV0ZXMoYXR0cnMpXG4gICAgICAgICAgaWYgbXZhLm5hbWVcbiAgICAgICAgICAgIGkucHJpbWFyeU5hbWUgPSBtdmEubmFtZS5hdHRyaWJ1dGUudmFsdWVcbiAgICAgICAgICAgIGkuaGFzUHJvcGVyTmFtZSA9IHRydWVcbiAgICAgICAgICAgIGkudmVyaWZpZWQgPSB0cnVlIGlmIG12YS5uYW1lLnZlcmlmaWVkXG4gICAgICAgICAgZWxzZSBpZiBtdmEubmlja25hbWVcbiAgICAgICAgICAgIGkucHJpbWFyeU5hbWUgPSBtdmEubmlja25hbWUuYXR0cmlidXRlLnZhbHVlXG4gICAgICAgICAgICBpLmhhc1Byb3Blck5hbWUgPSB0cnVlXG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgYSA9IE9iamVjdC52YWx1ZXMoYXR0cnMpWzBdXG4gICAgICAgICAgICBpLnByaW1hcnlOYW1lID0gYS52YWx1ZVxuICAgICAgICAgICAgaS5wcmltYXJ5TmFtZSA9IGkucHJpbWFyeU5hbWUuc2xpY2UoMCw2KSArICcuLi4nIGlmIGEudHlwZSBpbiBbJ2tleUlEJywgJ3V1aWQnXVxuICAgICAgICAgIGlmIGkucHJpbWFyeU5hbWVcbiAgICAgICAgICAgIGlmIG12YS5uaWNrbmFtZSBhbmQgbXZhLm5pY2tuYW1lLmF0dHJpYnV0ZS52YWx1ZSAhPSBpLnByaW1hcnlOYW1lXG4gICAgICAgICAgICAgIGkubmlja25hbWUgPSBtdmEubmlja25hbWUuYXR0cmlidXRlLnZhbHVlXG4gICAgICAgICAgICAgIGkubmlja25hbWUgPSBpLm5pY2tuYW1lLnJlcGxhY2UoJzwnLCAnJmx0OycpIGlmIGh0bWxTYWZlXG4gICAgICAgICAgICBpLnByaW1hcnlOYW1lID0gaS5wcmltYXJ5TmFtZS5yZXBsYWNlKCc8JywgJyZsdDsnKSBpZiBodG1sU2FmZVxuICAgICAgICAgICRzY29wZS5zZXRQYWdlVGl0bGUgaS5wcmltYXJ5TmFtZSBpZiBzZXRUaXRsZVxuXG4gICAgJHNjb3BlLnNlYXJjaEtleWRvd24gPSAoZXZlbnQpIC0+XG4gICAgICBzd2l0Y2ggKGlmIGV2ZW50IHRoZW4gZXZlbnQud2hpY2ggZWxzZSAtMSlcbiAgICAgICAgd2hlbiAzOFxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICBpZiAkc2NvcGUuaWRzLmFjdGl2ZUtleSA+IC0xXG4gICAgICAgICAgICAkc2NvcGUuYWRkRW50cnlBY3RpdmUgPSBmYWxzZVxuICAgICAgICAgICAgJHNjb3BlLmlkcy5saXN0WyRzY29wZS5pZHMuYWN0aXZlS2V5XS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICAgICAgJHNjb3BlLmlkcy5hY3RpdmVLZXktLVxuICAgICAgICAgICAgaWYgJHNjb3BlLmlkcy5hY3RpdmVLZXkgPj0gMFxuICAgICAgICAgICAgICAkc2NvcGUuaWRzLmxpc3RbJHNjb3BlLmlkcy5hY3RpdmVLZXldLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICBzY3JvbGxUbyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0JyArICRzY29wZS5pZHMuYWN0aXZlS2V5KVxuICAgICAgICB3aGVuIDQwXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGlmICRzY29wZS5pZHMuYWN0aXZlS2V5IDwgKCRzY29wZS5pZHMubGlzdC5sZW5ndGggfHwgMCkgLSAxXG4gICAgICAgICAgICBpZiAkc2NvcGUuaWRzLmFjdGl2ZUtleSA+PSAwXG4gICAgICAgICAgICAgICRzY29wZS5pZHMubGlzdFskc2NvcGUuaWRzLmFjdGl2ZUtleV0uYWN0aXZlID0gZmFsc2VcbiAgICAgICAgICAgICRzY29wZS5pZHMubGlzdFskc2NvcGUuaWRzLmFjdGl2ZUtleSArIDFdLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgICRzY29wZS5pZHMuYWN0aXZlS2V5KytcbiAgICAgICAgICBzY3JvbGxUbyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0JyArICRzY29wZS5pZHMuYWN0aXZlS2V5KVxuICAgICAgICB3aGVuIDEzXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGlmICRzY29wZS5pZHMuYWN0aXZlS2V5ID09IC0xXG4gICAgICAgICAgICAkc3RhdGUuZ28gJ2lkZW50aXRpZXMuY3JlYXRlJ1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIGlkID0gJHNjb3BlLmlkcy5saXN0WyRzY29wZS5pZHMuYWN0aXZlS2V5XVxuICAgICAgICAgICAgJHN0YXRlLmdvICdpZGVudGl0aWVzLnNob3cnLCB7IHR5cGU6IGlkLmxpbmtUby50eXBlLCB2YWx1ZTogaWQubGlua1RvLnZhbHVlIH1cbiAgICAgICAgd2hlbiAtMVxuICAgICAgICAgIGNsZWFyVGltZW91dCAkc2NvcGUudGltZXJcbiAgICAgICAgICAkc2NvcGUucXVlcnkudGVybSA9ICcnXG4gICAgICAgICAgJHNjb3BlLnNlYXJjaCgpXG4gICAgICAgIHdoZW4gMzMsIDM0LCAzNSwgMzYsIDM3LCAzOVxuICAgICAgICBlbHNlXG4gICAgICAgICAgZWwgPSBhbmd1bGFyLmVsZW1lbnQoZXZlbnQuY3VycmVudFRhcmdldClcbiAgICAgICAgICBjbGVhclRpbWVvdXQgJHNjb3BlLnRpbWVyXG4gICAgICAgICAgd2FpdCA9IHNldFRpbWVvdXQoKC0+XG4gICAgICAgICAgICAkc2NvcGUucXVlcnkudGVybSA9IGVsLnZhbCgpXG4gICAgICAgICAgICAkc2NvcGUuc2VhcmNoKClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICksIDMwMClcbiAgICAgICAgICAkc2NvcGUudGltZXIgPSB3YWl0XG4gICAgICAgICAgYnJlYWtcblxuICAgICRzY29wZS5kcm9wZG93blNlYXJjaFNlbGVjdCA9IChpdGVtKSAtPlxuICAgICAgJHN0YXRlLmdvKCdpZGVudGl0aWVzLnNob3cnLCB7IHR5cGU6IGl0ZW0ubGlua1RvLnR5cGUsIHZhbHVlOiBpdGVtLmxpbmtUby52YWwgfSlcbiAgICAgICRzY29wZS5xdWVyeS50ZXJtID0gJydcblxuICAgICRzY29wZS5hZGRHdW5QZWVyID0gKHVybCkgLT5cbiAgICAgICRzY29wZS5ndW4ub3B0KHtwZWVyczogW3VybF19KTsgIyBUT0RPOiB2YWxpZGF0ZSB1cmxcblxuICAgICRzY29wZS5yZW1vdmVHdW5QZWVyID0gKHVybCkgLT5cbiAgICAgIGNvbnNvbGUubG9nICdyZW1vdmVHdW5QZWVyJyAjIFRPRE86IGhvdyB0byBkbyB0aGlzP1xuXG4gICAgJHNjb3BlLmFkZElwZnNQZWVyID0gKHVybCkgLT5cbiAgICAgICRzY29wZS5pcGZzLnN3YXJtLmNvbm5lY3QodXJsKS50aGVuIC0+XG4gICAgICAgICRzY29wZS51cGRhdGVJcGZzUGVlcnMoKVxuXG4gICAgJHNjb3BlLnJlbW92ZUlwZnNQZWVyID0gKHVybCkgLT5cbiAgICAgICRzY29wZS5pcGZzLnN3YXJtLmRpc2Nvbm5lY3QodXJsKS50aGVuIC0+XG4gICAgICAgICRzY29wZS51cGRhdGVJcGZzUGVlcnMoKVxuXVxuIl19

(function() {
  'use strict';
  // Identities controller
  angular.module('identifiAngular').controller('IdentitiesController', [
    '$scope',
    '$state',
    '$rootScope',
    '$window',
    '$stateParams',
    '$location',
    '$http',
    '$q',
    '$timeout',
    '$uibModal',
    // 'Authentication'
    'config',
    'localStorageService',
    'focus',
    function($scope,
    $state,
    $rootScope,
    $window,
    $stateParams,
    $location,
    $http,
    $q,
    $timeout,
    $uibModal,
    config,
    localStorageService,
    focus) { //, Authentication
      var load,
    thumbsDownObj,
    thumbsUpObj;
      $scope.newEntry = {};
      $scope.activeTab = 1;
      $scope.activateTab = function(tabId) {
        return $scope.activeTab = tabId;
      };
      $scope.sent = [];
      $scope.received = [];
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
          hideLimitLabels: true
        }
      };
      if ($location.search().share) {
        $scope.share = true;
      }
      $scope.$on('MessageAdded',
    function(event,
    args) {
        return $state.reload();
      });
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
          linkTo = $window.identifiLib.Attribute.getUuid();
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
          $scope.newVerification.type = $window.identifiLib.Attribute.guessTypeOf($scope.newVerification.value);
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
          $window.identifiLib.Message.createVerification({recipient},
    $scope.privateKey).then(function(m) {
            return $scope.identifiIndex.addMessage(m);
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
    c,
    connections,
    i,
    len,
    mostConfirmations,
    percentage,
    ref;
          console.log(attrs);
          connections = attrs || [];
          if (connections.length > 0) {
            c = connections[0];
            mostConfirmations = c.conf;
          } else {
            mostConfirmations = 1;
          }
          $scope.attributes = Object.values(connections).sort(function(a,
    b) {
            return (b.conf - 2 * b.ref) - (a.conf - 2 * a.ref);
          });
          ref = $scope.attributes;
          for (i = 0, len = ref.length; i < len; i++) {
            a = ref[i];
            if (!(a.type && a.value)) {
              return;
            }
            a.attr = new $window.identifiLib.Attribute(a.type,
    a.value);
            a.isCurrent = new $window.identifiLib.Attribute($scope.idType,
    $scope.idValue).equals(a.attr);
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
      $scope.getConnectingMsgs = function(id1,
    id2) {
        var getVerifications;
        getVerifications = $q(function(resolve) {
          if (!$scope.verifications.length) {
            if ($scope.receivedIndex) {
              return $scope.receivedIndex.searchText('',
    10000,
    false,
    true).then(function(res) {
                res.forEach(function(row) {
                  var msg,
    ref;
                  msg = $window.identifiLib.Message.fromJws(row.value.jws);
                  if (((ref = msg.signedData.type) === 'verify_identity' || ref === 'verification' || ref === 'unverify_identity' || ref === 'unverification')) {
                    msg.linkToAuthor = msg.signedData.author[0];
                    return $scope.verifications.push(msg);
                  }
                });
                return resolve();
              });
            } else {
              return resolve();
            }
          } else {
            return resolve();
          }
        });
        return getVerifications.then(function() {
          var msgs;
          msgs = [];
          $scope.verifications.forEach(function(msg) {
            var hasId1,
    hasId2,
    i,
    id,
    len,
    ref;
            hasId1 = hasId2 = false;
            ref = msg.signedData.recipient;
            for (i = 0, len = ref.length; i < len; i++) {
              id = ref[i];
              if (id.type === id2.type && id.value === id2.value) {
                return msgs.push(msg);
              }
            }
          });
          return msgs;
        });
      };
      $scope.connectionClicked = function(event,
    id) {
        if (id.connecting_msgs) {
          return id.collapse = !id.collapse;
        } else {
          return $scope.getConnectingMsgs([$scope.idType,
    $scope.idValue],
    id).then(function(msgs) {
            id.connecting_msgs = msgs;
            return id.collapse = !id.collapse;
          });
        }
      };
      $scope.getSentMsgs = function() {
        var cursor,
    resultFound;
        if (!($scope.identity && $scope.identifiIndex)) {
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
        return $scope.identifiIndex.getSentMsgs($scope.identity,
    resultFound,
    $scope.filters.limit);
      };
      $scope.getReceivedMsgs = function() {
        var cursor,
    resultFound;
        if (!($scope.identity && $scope.identifiIndex)) {
          return;
        }
        $scope.received = [];
        cursor = $scope.received.length ? $scope.received[$scope.received.length - 1].cursor : '';
        resultFound = function(msg) {
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
            return $scope.received.push(msg);
          });
        };
        return $scope.identifiIndex.getReceivedMsgs($scope.identity,
    resultFound,
    $scope.filters.limit,
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
          return $window.identifiLib.Message.createVerification({recipient},
    $scope.privateKey).then(function(m) {
            $scope.identifiIndex.addMessage(m);
            return $scope.uploadModal.close();
          });
        });
      };
      $scope.openShareModal = function() {
        $scope.shareModal = $uibModal.open({
          animation: $scope.animationsEnabled,
          templateUrl: 'app/identities/share.modal.html',
          size: 'md',
          scope: $scope
        });
        $scope.shareModal.rendered.then(function() {
          return document.activeElement.blur();
        });
        return $scope.$on('$stateChangeStart',
    function() {
          return $scope.shareModal.close();
        });
      };
      $scope.openReadQRModal = function() {
        $scope.readQRModal = $uibModal.open({
          animation: $scope.animationsEnabled,
          templateUrl: 'app/identities/readqr.modal.html',
          size: 'md',
          scope: $scope
        });
        $scope.readQRModal.rendered.then(function() {
          return document.activeElement.blur();
        });
        return $scope.$on('$stateChangeStart',
    function() {
          return $scope.readQRModal.close();
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
        if (!$scope.identifiIndex) {
          return;
        }
        $scope.idType = $stateParams.type;
        $scope.idValue = $stateParams.value;
        $scope.idAttr = new $window.identifiLib.Attribute($scope.idType,
    $scope.idValue);
        $scope.idUrl = $scope.getIdUrl($scope.idType,
    $scope.idValue);
        $scope.isCurrentUser = $scope.authentication && $scope.authentication.user && $scope.idType === $scope.authentication.user.idType && $scope.idValue === $scope.authentication.user.idValue;
        $scope.isUniqueType = $window.identifiLib.Attribute.isUniqueType($scope.idType);
        if (!$scope.isUniqueType) {
          $state.go('identities.list',
    {
            search: $scope.idValue
          });
          if ($scope.tabs) {
            $scope.tabs[2].active = true;
          }
        }
        $scope.setPageTitle($scope.idValue);
        $scope.identity = $scope.identifiIndex.get($scope.idType,
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
        if ($scope.identifiIndex) {
          if ($state.is('identities.show')) {
            $scope.findOne();
          }
          if ($state.is('identities.create')) {
            focus('idNameFocus');
            return $scope.newEntry.name = $scope.capitalizeWords($scope.query.term);
          }
        }
      };
      $scope.$watch('identifiIndex',
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdGllcy9pZGVudGl0aWVzLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzIjpbImlkZW50aXRpZXMvaWRlbnRpdGllcy5jb250cm9sbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLGFBQUE7O0VBRUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUFpQyxDQUFDLFVBQWxDLENBQTZDLHNCQUE3QyxFQUFxRTtJQUNuRSxRQURtRTtJQUVuRSxRQUZtRTtJQUduRSxZQUhtRTtJQUluRSxTQUptRTtJQUtuRSxjQUxtRTtJQU1uRSxXQU5tRTtJQU9uRSxPQVBtRTtJQVFuRSxJQVJtRTtJQVNuRSxVQVRtRTtJQVVuRSxXQVZtRTs7SUFZbkUsUUFabUU7SUFhbkUscUJBYm1FO0lBY25FLE9BZG1FO0lBZW5FLFFBQUEsQ0FBQyxNQUFEO0lBQVMsTUFBVDtJQUFpQixVQUFqQjtJQUE2QixPQUE3QjtJQUFzQyxZQUF0QztJQUFvRCxTQUFwRDtJQUErRCxLQUEvRDtJQUFzRSxFQUF0RTtJQUEwRSxRQUExRTtJQUFvRixTQUFwRjtJQUErRixNQUEvRjtJQUNBLG1CQURBO0lBQ3FCLEtBRHJCLENBQUEsRUFBQTtBQUVFLFVBQUEsSUFBQTtJQUFBLGFBQUE7SUFBQTtNQUFBLE1BQU0sQ0FBQyxRQUFQLEdBQWtCLENBQUE7TUFDbEIsTUFBTSxDQUFDLFNBQVAsR0FBbUI7TUFDbkIsTUFBTSxDQUFDLFdBQVAsR0FBcUIsUUFBQSxDQUFDLEtBQUQsQ0FBQTtlQUFXLE1BQU0sQ0FBQyxTQUFQLEdBQW1CO01BQTlCO01BQ3JCLE1BQU0sQ0FBQyxJQUFQLEdBQWM7TUFDZCxNQUFNLENBQUMsUUFBUCxHQUFrQjtNQUNsQixNQUFNLENBQUMsVUFBUCxHQUFvQixDQUFBO01BQ3BCLFdBQUEsR0FBYyxDQUFBO01BQ2QsYUFBQSxHQUFnQixDQUFBO01BQ2hCLE1BQU0sQ0FBQyxRQUFQLEdBQWtCO01BQ2xCLE1BQU0sQ0FBQyxVQUFQLEdBQW9CO01BQ3BC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Q0FBQyxNQUFGLEdBQVcsQ0FBWCxDQUFhLENBQUMsS0FBaEIsQ0FBc0IsR0FBdEIsQ0FBMkIsQ0FBQSxDQUFBLENBQTlDO1VBQ1IsT0FBTyxDQUFDLEdBQVIsQ0FBWSxPQUFaO0lBQXFCLEtBQXJCO1VBQ0EsT0FBTyxDQUFDLEdBQVIsQ0FBWSxNQUFaO0lBQW9CLElBQXBCO2lCQUNBLE1BQU0sQ0FBQyxFQUFQLENBQVUsaUJBQVY7SUFBNkIsQ0FBQyxJQUFEO0lBQU8sS0FBUCxDQUE3QixFQUxGO1NBQUEsTUFBQTtpQkFPRSxPQUFPLENBQUMsR0FBUixDQUFZLDJCQUFaO0lBQXlDLElBQXpDLEVBUEY7O01BRnFCO2FBVXZCLE1BQU0sQ0FBQyxXQUFQLEdBQXFCLFFBQUEsQ0FBQyxDQUFELENBQUEsRUFBQTtJQXpUdkIsQ0FmbUU7R0FBckU7O0VBRkE7O0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcbiMgSWRlbnRpdGllcyBjb250cm9sbGVyXG5hbmd1bGFyLm1vZHVsZSgnaWRlbnRpZmlBbmd1bGFyJykuY29udHJvbGxlciAnSWRlbnRpdGllc0NvbnRyb2xsZXInLCBbXG4gICckc2NvcGUnXG4gICckc3RhdGUnXG4gICckcm9vdFNjb3BlJ1xuICAnJHdpbmRvdydcbiAgJyRzdGF0ZVBhcmFtcydcbiAgJyRsb2NhdGlvbidcbiAgJyRodHRwJ1xuICAnJHEnXG4gICckdGltZW91dCdcbiAgJyR1aWJNb2RhbCdcbiAgIyAnQXV0aGVudGljYXRpb24nXG4gICdjb25maWcnXG4gICdsb2NhbFN0b3JhZ2VTZXJ2aWNlJ1xuICAnZm9jdXMnXG4gICgkc2NvcGUsICRzdGF0ZSwgJHJvb3RTY29wZSwgJHdpbmRvdywgJHN0YXRlUGFyYW1zLCAkbG9jYXRpb24sICRodHRwLCAkcSwgJHRpbWVvdXQsICR1aWJNb2RhbCwgY29uZmlnLFxuICBsb2NhbFN0b3JhZ2VTZXJ2aWNlLCBmb2N1cykgLT4gIywgQXV0aGVudGljYXRpb25cbiAgICAkc2NvcGUubmV3RW50cnkgPSB7fVxuICAgICRzY29wZS5hY3RpdmVUYWIgPSAxXG4gICAgJHNjb3BlLmFjdGl2YXRlVGFiID0gKHRhYklkKSAtPiAkc2NvcGUuYWN0aXZlVGFiID0gdGFiSWRcbiAgICAkc2NvcGUuc2VudCA9IFtdXG4gICAgJHNjb3BlLnJlY2VpdmVkID0gW11cbiAgICAkc2NvcGUuYXR0cmlidXRlcyA9IHt9XG4gICAgdGh1bWJzVXBPYmogPSB7fVxuICAgIHRodW1ic0Rvd25PYmogPSB7fVxuICAgICRzY29wZS50aHVtYnNVcCA9IFtdXG4gICAgJHNjb3BlLnRodW1ic0Rvd24gPSBbXVxuICAgICRzY29wZS52ZXJpZmljYXRpb25zID0gW11cbiAgICAkc2NvcGUucXVlcnkudGVybSA9ICRzdGF0ZVBhcmFtcy5zZWFyY2ggaWYgJHN0YXRlUGFyYW1zLnNlYXJjaFxuICAgICRzY29wZS5uZXdWZXJpZmljYXRpb24gPVxuICAgICAgdHlwZTogJydcbiAgICAgIHZhbHVlOiAnJ1xuICAgICRzY29wZS5jb2xsYXBzZUxldmVsID0ge31cbiAgICAkc2NvcGUuY29sbGFwc2VGaWx0ZXJzID0gJHdpbmRvdy5pbm5lcldpZHRoIDwgOTkyXG4gICAgJHNjb3BlLnNsaWRlciA9XG4gICAgICBvcHRpb25zOlxuICAgICAgICBmbG9vcjogLTNcbiAgICAgICAgY2VpbDogM1xuICAgICAgICBoaWRlUG9pbnRlckxhYmVsczogdHJ1ZVxuICAgICAgICBoaWRlTGltaXRMYWJlbHM6IHRydWVcblxuICAgICRzY29wZS5zaGFyZSA9IHRydWUgaWYgJGxvY2F0aW9uLnNlYXJjaCgpLnNoYXJlXG5cbiAgICAkc2NvcGUuJG9uICdNZXNzYWdlQWRkZWQnLCAoZXZlbnQsIGFyZ3MpIC0+XG4gICAgICAkc3RhdGUucmVsb2FkKClcblxuICAgICRzY29wZS5hZGRFbnRyeSA9IChldmVudCwgZW50cnkpIC0+XG4gICAgICBpZiBlbnRyeS5lbWFpbFxuICAgICAgICBsaW5rVG8gPSB7dHlwZTonZW1haWwnLCB2YWx1ZTogZW50cnkuZW1haWx9XG4gICAgICBlbHNlIGlmIGVudHJ5LnVybFxuICAgICAgICBsaW5rVG8gPSB7dHlwZTondXJsJywgdmFsdWU6IGVudHJ5LnVybH1cbiAgICAgIGVsc2VcbiAgICAgICAgbGlua1RvID0gJHdpbmRvdy5pZGVudGlmaUxpYi5BdHRyaWJ1dGUuZ2V0VXVpZCgpXG4gICAgICAgIGVudHJ5LnV1aWQgPSBsaW5rVG8udmFsdWVcbiAgICAgIHBhcmFtcyA9XG4gICAgICAgIHR5cGU6ICd2ZXJpZmljYXRpb24nXG4gICAgICAgIHJlY2lwaWVudDogZW50cnlcbiAgICAgICRzY29wZS5jcmVhdGVNZXNzYWdlKGV2ZW50LCBwYXJhbXMpLnRoZW4gKHJlc3BvbnNlKSAtPlxuICAgICAgICAkc3RhdGUuZ28gJ2lkZW50aXRpZXMuc2hvdycsIGxpbmtUb1xuICAgICAgLCAoZXJyb3IpIC0+XG4gICAgICAgIGNvbnNvbGUubG9nIFwiZXJyb3JcIiwgZXJyb3JcblxuICAgICRzY29wZS5ndWVzc0F0dHJpYnV0ZVR5cGUgPSAtPlxuICAgICAgaWYgJHNjb3BlLm5ld1ZlcmlmaWNhdGlvbi52YWx1ZS5sZW5ndGhcbiAgICAgICAgJHNjb3BlLm5ld1ZlcmlmaWNhdGlvbi50eXBlID0gJHdpbmRvdy5pZGVudGlmaUxpYi5BdHRyaWJ1dGUuZ3Vlc3NUeXBlT2YoJHNjb3BlLm5ld1ZlcmlmaWNhdGlvbi52YWx1ZSlcbiAgICAgICAgdW5sZXNzICRzY29wZS5uZXdWZXJpZmljYXRpb24udHlwZVxuICAgICAgICAgIHVubGVzcyAkc2NvcGUubmV3VmVyaWZpY2F0aW9uLnZhbHVlLm1hdGNoIC9cXGB8XFx+fFxcIXxcXEB8XFwjfFxcJHxcXCV8XFxefFxcJnxcXCp8XFwofFxcKXxcXCt8XFw9fFxcW3xcXHt8XFxdfFxcfXxcXHx8XFxcXHxcXCd8XFw8fFxcLHxcXC58XFw+fFxcP3xcXC98XFxcIlwifFxcO3xcXDovXG4gICAgICAgICAgICAkc2NvcGUubmV3VmVyaWZpY2F0aW9uLnR5cGUgPSAnbmFtZSdcbiAgICAgIGVsc2VcbiAgICAgICAgJHNjb3BlLm5ld1ZlcmlmaWNhdGlvbi50eXBlID0gJydcblxuICAgICRzY29wZS5hZGROYW1lID0gKG5hbWUpIC0+XG4gICAgICBpZiBuYW1lXG4gICAgICAgIHJlY2lwaWVudCA9IHtuYW1lfVxuICAgICAgICByZWNpcGllbnRbJHNjb3BlLmlkVHlwZV0gPSAkc2NvcGUuaWRWYWx1ZVxuICAgICAgICAkd2luZG93LmlkZW50aWZpTGliLk1lc3NhZ2UuY3JlYXRlVmVyaWZpY2F0aW9uKHtyZWNpcGllbnR9LCAkc2NvcGUucHJpdmF0ZUtleSkudGhlbiAobSkgLT5cbiAgICAgICAgICAkc2NvcGUuaWRlbnRpZmlJbmRleC5hZGRNZXNzYWdlKG0pXG4gICAgICAgICRzY29wZS5uYW1lQWRkZWQgPSB0cnVlXG4gICAgICBlbHNlXG4gICAgICAgICRzY29wZS5hZGRpbmdOYW1lID0gdHJ1ZVxuICAgICAgICBmb2N1cygnYWRkTmFtZUZvY3VzJylcblxuICAgICRzY29wZS5nZXRBdHRyaWJ1dGVzID0gLT5cbiAgICAgICRzY29wZS5pZGVudGl0eS5ndW4uZ2V0KCdhdHRycycpLm9wZW4gKGF0dHJzKSAtPlxuICAgICAgICBjb25zb2xlLmxvZyBhdHRyc1xuICAgICAgICBjb25uZWN0aW9ucyA9IGF0dHJzIG9yIFtdXG4gICAgICAgIGlmIGNvbm5lY3Rpb25zLmxlbmd0aCA+IDBcbiAgICAgICAgICBjID0gY29ubmVjdGlvbnNbMF1cbiAgICAgICAgICBtb3N0Q29uZmlybWF0aW9ucyA9IGMuY29uZlxuICAgICAgICBlbHNlXG4gICAgICAgICAgbW9zdENvbmZpcm1hdGlvbnMgPSAxXG4gICAgICAgICRzY29wZS5hdHRyaWJ1dGVzID0gT2JqZWN0LnZhbHVlcyhjb25uZWN0aW9ucykuc29ydCAoYSwgYikgLT5cbiAgICAgICAgICAoYi5jb25mIC0gMiAqIGIucmVmKSAtIChhLmNvbmYgLSAyICogYS5yZWYpXG4gICAgICAgIGZvciBhIGluICRzY29wZS5hdHRyaWJ1dGVzXG4gICAgICAgICAgcmV0dXJuIHVubGVzcyBhLnR5cGUgYW5kIGEudmFsdWVcbiAgICAgICAgICBhLmF0dHIgPSBuZXcgJHdpbmRvdy5pZGVudGlmaUxpYi5BdHRyaWJ1dGUoYS50eXBlLCBhLnZhbHVlKVxuICAgICAgICAgIGEuaXNDdXJyZW50ID0gbmV3ICR3aW5kb3cuaWRlbnRpZmlMaWIuQXR0cmlidXRlKCRzY29wZS5pZFR5cGUsICRzY29wZS5pZFZhbHVlKS5lcXVhbHMoYS5hdHRyKVxuICAgICAgICAgIHN3aXRjaCBhLnR5cGVcbiAgICAgICAgICAgIHdoZW4gJ2VtYWlsJ1xuICAgICAgICAgICAgICBhLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLWVudmVsb3BlJ1xuICAgICAgICAgICAgICBhLmJ0blN0eWxlID0gJ2J0bi1zdWNjZXNzJ1xuICAgICAgICAgICAgICBhLmxpbmsgPSAnbWFpbHRvOicgKyBhLnZhbHVlXG4gICAgICAgICAgICAgIGEucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgICAgd2hlbiAnYml0Y29pbl9hZGRyZXNzJywgJ2JpdGNvaW4nXG4gICAgICAgICAgICAgIGEuaWNvblN0eWxlID0gJ2ZhIGZhLWJpdGNvaW4nXG4gICAgICAgICAgICAgIGEuYnRuU3R5bGUgPSAnYnRuLXByaW1hcnknXG4gICAgICAgICAgICAgIGEubGluayA9ICdodHRwczovL2Jsb2NrY2hhaW4uaW5mby9hZGRyZXNzLycgKyBhLnZhbHVlXG4gICAgICAgICAgICAgIGEucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgICAgd2hlbiAnZ3BnX2ZpbmdlcnByaW50JywgJ2dwZ19rZXlpZCdcbiAgICAgICAgICAgICAgYS5pY29uU3R5bGUgPSAnZmEgZmEta2V5J1xuICAgICAgICAgICAgICBhLmJ0blN0eWxlID0gJ2J0bi1kZWZhdWx0J1xuICAgICAgICAgICAgICBhLmxpbmsgPSAnaHR0cHM6Ly9wZ3AubWl0LmVkdS9wa3MvbG9va3VwP29wPWdldCZzZWFyY2g9MHgnICsgYS52YWx1ZVxuICAgICAgICAgICAgd2hlbiAnYWNjb3VudCdcbiAgICAgICAgICAgICAgYS5pY29uU3R5bGUgPSAnZmEgZmEtYXQnXG4gICAgICAgICAgICB3aGVuICduaWNrbmFtZSdcbiAgICAgICAgICAgICAgJHNjb3BlLmlkZW50aXR5Lmhhc1Byb3Blck5hbWUgPSB0cnVlXG4gICAgICAgICAgICAgIGEuaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tZm9udCdcbiAgICAgICAgICAgIHdoZW4gJ25hbWUnXG4gICAgICAgICAgICAgICRzY29wZS5pZGVudGl0eS5oYXNQcm9wZXJOYW1lID0gdHJ1ZVxuICAgICAgICAgICAgICBhLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLWZvbnQnXG4gICAgICAgICAgICB3aGVuICd0ZWwnLCAncGhvbmUnXG4gICAgICAgICAgICAgIGEuaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tZWFycGhvbmUnXG4gICAgICAgICAgICAgIGEuYnRuU3R5bGUgPSAnYnRuLXN1Y2Nlc3MnXG4gICAgICAgICAgICAgIGEubGluayA9ICd0ZWw6JyArIGEudmFsdWVcbiAgICAgICAgICAgICAgYS5xdWlja0NvbnRhY3QgPSB0cnVlXG4gICAgICAgICAgICB3aGVuICdrZXlJRCdcbiAgICAgICAgICAgICAgYS5pY29uU3R5bGUgPSAnZmEgZmEta2V5J1xuICAgICAgICAgICAgd2hlbiAnY292ZXJQaG90bydcbiAgICAgICAgICAgICAgaWYgYS52YWx1ZS5tYXRjaCAvXlxcL2lwZnNcXC9bMS05QS1aYS16XXs0MCw2MH0kL1xuICAgICAgICAgICAgICAgICRzY29wZS5pcGZzR2V0KGEudmFsdWUpLnRoZW4gKGNvdmVyUGhvdG8pIC0+XG4gICAgICAgICAgICAgICAgICAkc2NvcGUuY292ZXJQaG90byA9ICRzY29wZS5jb3ZlclBob3RvIG9yIHsgJ2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKGRhdGE6aW1hZ2U7YmFzZTY0LCcgKyBjb3ZlclBob3RvLnRvU3RyaW5nKCdiYXNlNjQnKSArICcpJyB9XG4gICAgICAgICAgICB3aGVuICd1cmwnXG4gICAgICAgICAgICAgIGEubGluayA9IGEudmFsdWVcbiAgICAgICAgICAgICAgaWYgYS52YWx1ZS5pbmRleE9mKCdmYWNlYm9vay5jb20vJykgPiAtMVxuICAgICAgICAgICAgICAgIGEuaWNvblN0eWxlID0gJ2ZhIGZhLWZhY2Vib29rJ1xuICAgICAgICAgICAgICAgIGEuYnRuU3R5bGUgPSAnYnRuLWZhY2Vib29rJ1xuICAgICAgICAgICAgICAgIGEubGluayA9IGEudmFsdWVcbiAgICAgICAgICAgICAgICBhLmxpbmtOYW1lID0gYS52YWx1ZS5zcGxpdCgnZmFjZWJvb2suY29tLycpWzFdXG4gICAgICAgICAgICAgICAgYS5xdWlja0NvbnRhY3QgPSB0cnVlXG4gICAgICAgICAgICAgIGVsc2UgaWYgYS52YWx1ZS5pbmRleE9mKCd0d2l0dGVyLmNvbS8nKSA+IC0xXG4gICAgICAgICAgICAgICAgYS5pY29uU3R5bGUgPSAnZmEgZmEtdHdpdHRlcidcbiAgICAgICAgICAgICAgICBhLmJ0blN0eWxlID0gJ2J0bi10d2l0dGVyJ1xuICAgICAgICAgICAgICAgIGEubGluayA9IGEudmFsdWVcbiAgICAgICAgICAgICAgICBhLmxpbmtOYW1lID0gYS52YWx1ZS5zcGxpdCgndHdpdHRlci5jb20vJylbMV1cbiAgICAgICAgICAgICAgICBhLnF1aWNrQ29udGFjdCA9IHRydWVcbiAgICAgICAgICAgICAgZWxzZSBpZiBhLnZhbHVlLmluZGV4T2YoJ3BsdXMuZ29vZ2xlLmNvbS8nKSA+IC0xXG4gICAgICAgICAgICAgICAgYS5pY29uU3R5bGUgPSAnZmEgZmEtZ29vZ2xlLXBsdXMnXG4gICAgICAgICAgICAgICAgYS5idG5TdHlsZSA9ICdidG4tZ29vZ2xlLXBsdXMnXG4gICAgICAgICAgICAgICAgYS5saW5rID0gYS52YWx1ZVxuICAgICAgICAgICAgICAgIGEubGlua05hbWUgPSBhLnZhbHVlLnNwbGl0KCdwbHVzLmdvb2dsZS5jb20vJylbMV1cbiAgICAgICAgICAgICAgICBhLnF1aWNrQ29udGFjdCA9IHRydWVcbiAgICAgICAgICAgICAgZWxzZSBpZiBhLnZhbHVlLmluZGV4T2YoJ2xpbmtlZGluLmNvbS8nKSA+IC0xXG4gICAgICAgICAgICAgICAgYS5pY29uU3R5bGUgPSAnZmEgZmEtbGlua2VkaW4nXG4gICAgICAgICAgICAgICAgYS5idG5TdHlsZSA9ICdidG4tbGlua2VkaW4nXG4gICAgICAgICAgICAgICAgYS5saW5rID0gYS52YWx1ZVxuICAgICAgICAgICAgICAgIGEubGlua05hbWUgPSBhLnZhbHVlLnNwbGl0KCdsaW5rZWRpbi5jb20vJylbMV1cbiAgICAgICAgICAgICAgICBhLnF1aWNrQ29udGFjdCA9IHRydWVcbiAgICAgICAgICAgICAgZWxzZSBpZiBhLnZhbHVlLmluZGV4T2YoJ2dpdGh1Yi5jb20vJykgPiAtMVxuICAgICAgICAgICAgICAgIGEuaWNvblN0eWxlID0gJ2ZhIGZhLWdpdGh1YidcbiAgICAgICAgICAgICAgICBhLmJ0blN0eWxlID0gJ2J0bi1naXRodWInXG4gICAgICAgICAgICAgICAgYS5saW5rID0gYS52YWx1ZVxuICAgICAgICAgICAgICAgIGEubGlua05hbWUgPSBhLnZhbHVlLnNwbGl0KCdnaXRodWIuY29tLycpWzFdXG4gICAgICAgICAgICAgICAgYS5xdWlja0NvbnRhY3QgPSB0cnVlXG4gICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBhLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLWxpbmsnXG4gICAgICAgICAgICAgICAgYS5idG5TdHlsZSA9ICdidG4tZGVmYXVsdCdcbiAgICAgICAgICBpZiBhLnZhbHVlIGFuZCBhLnZhbHVlLm1hdGNoIC9eXFwvaXBmc1xcL1sxLTlBLVphLXpdezQwLDYwfSQvXG4gICAgICAgICAgICBhLmxpbmsgPSAnaHR0cHM6Ly9pcGZzLmlvJyArIGEudmFsdWVcbiAgICAgICAgICAgIGEubGlua05hbWUgPSBhLnZhbHVlXG4gICAgICAgICAgICBhLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLWxpbmsnXG4gICAgICAgICAgICBhLmJ0blN0eWxlID0gJ2J0bi1kZWZhdWx0J1xuICAgICAgICAgIGlmIGEuY29uZiArIGEucmVmID4gMFxuICAgICAgICAgICAgcGVyY2VudGFnZSA9IGEuY29uZiAqIDEwMCAvIChhLmNvbmYgKyBhLnJlZilcbiAgICAgICAgICAgIGlmIHBlcmNlbnRhZ2UgPj0gODBcbiAgICAgICAgICAgICAgYWxwaGEgPSBhLmNvbmYgLyBtb3N0Q29uZmlybWF0aW9ucyAqIDAuNyArIDAuM1xuICAgICAgICAgICAgICAjIGEucm93U3R5bGUgPSAnYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjMsMjQwLDIxNiwnICsgYWxwaGEgKyAnKSdcbiAgICAgICAgICAgIGVsc2UgaWYgcGVyY2VudGFnZSA+PSA2MFxuICAgICAgICAgICAgICBhLnJvd0NsYXNzID0gJ3dhcm5pbmcnXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgIGEucm93Q2xhc3MgPSAnZGFuZ2VyJ1xuICAgICAgICAgICRzY29wZS5oYXNRdWlja0NvbnRhY3RzID0gJHNjb3BlLmhhc1F1aWNrQ29udGFjdHMgb3IgYS5xdWlja0NvbnRhY3RcbiAgICAgICAgJHNjb3BlLmF0dHJpYnV0ZXNMZW5ndGggPSBPYmplY3Qua2V5cygkc2NvcGUuYXR0cmlidXRlcykubGVuZ3RoXG5cblxuICAgICRzY29wZS5nZXRDb25uZWN0aW5nTXNncyA9IChpZDEsIGlkMikgLT5cbiAgICAgIGdldFZlcmlmaWNhdGlvbnMgPSAkcSAocmVzb2x2ZSkgLT5cbiAgICAgICAgaWYgISRzY29wZS52ZXJpZmljYXRpb25zLmxlbmd0aFxuICAgICAgICAgIGlmICRzY29wZS5yZWNlaXZlZEluZGV4XG4gICAgICAgICAgICAkc2NvcGUucmVjZWl2ZWRJbmRleC5zZWFyY2hUZXh0KCcnLCAxMDAwMCwgZmFsc2UsIHRydWUpLnRoZW4gKHJlcykgLT5cbiAgICAgICAgICAgICAgcmVzLmZvckVhY2ggKHJvdykgLT5cbiAgICAgICAgICAgICAgICBtc2cgPSAkd2luZG93LmlkZW50aWZpTGliLk1lc3NhZ2UuZnJvbUp3cyhyb3cudmFsdWUuandzKVxuICAgICAgICAgICAgICAgIGlmIChtc2cuc2lnbmVkRGF0YS50eXBlIGluIFsndmVyaWZ5X2lkZW50aXR5JywgJ3ZlcmlmaWNhdGlvbicsICd1bnZlcmlmeV9pZGVudGl0eScsICd1bnZlcmlmaWNhdGlvbiddKVxuICAgICAgICAgICAgICAgICAgbXNnLmxpbmtUb0F1dGhvciA9IG1zZy5zaWduZWREYXRhLmF1dGhvclswXVxuICAgICAgICAgICAgICAgICAgJHNjb3BlLnZlcmlmaWNhdGlvbnMucHVzaCBtc2dcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpXG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmVzb2x2ZSgpXG4gICAgICAgIGVsc2VcbiAgICAgICAgICByZXNvbHZlKClcbiAgICAgIGdldFZlcmlmaWNhdGlvbnMudGhlbiAtPlxuICAgICAgICBtc2dzID0gW11cbiAgICAgICAgJHNjb3BlLnZlcmlmaWNhdGlvbnMuZm9yRWFjaCAobXNnKSAtPlxuICAgICAgICAgIGhhc0lkMSA9IGhhc0lkMiA9IGZhbHNlXG4gICAgICAgICAgZm9yIGlkIGluIG1zZy5zaWduZWREYXRhLnJlY2lwaWVudFxuICAgICAgICAgICAgcmV0dXJuIG1zZ3MucHVzaCBtc2cgaWYgaWQudHlwZcKgPT0gaWQyLnR5cGUgYW5kIGlkLnZhbHVlID09IGlkMi52YWx1ZVxuICAgICAgICByZXR1cm4gbXNnc1xuXG4gICAgJHNjb3BlLmNvbm5lY3Rpb25DbGlja2VkID0gKGV2ZW50LCBpZCkgLT5cbiAgICAgIGlmIGlkLmNvbm5lY3RpbmdfbXNnc1xuICAgICAgICBpZC5jb2xsYXBzZSA9ICFpZC5jb2xsYXBzZVxuICAgICAgZWxzZVxuICAgICAgICAkc2NvcGUuZ2V0Q29ubmVjdGluZ01zZ3MoWyRzY29wZS5pZFR5cGUsICRzY29wZS5pZFZhbHVlXSwgaWQpLnRoZW4gKG1zZ3MpIC0+XG4gICAgICAgICAgaWQuY29ubmVjdGluZ19tc2dzID0gbXNnc1xuICAgICAgICAgIGlkLmNvbGxhcHNlID0gIWlkLmNvbGxhcHNlXG5cbiAgICAkc2NvcGUuZ2V0U2VudE1zZ3MgPSAtPlxuICAgICAgcmV0dXJuIHVubGVzcyAkc2NvcGUuaWRlbnRpdHkgYW5kICRzY29wZS5pZGVudGlmaUluZGV4XG4gICAgICAkc2NvcGUuc2VudCA9IFtdXG4gICAgICBjdXJzb3IgPSBpZiAkc2NvcGUuc2VudC5sZW5ndGggdGhlbiAkc2NvcGUuc2VudFskc2NvcGUuc2VudC5sZW5ndGggLSAxXS5jdXJzb3IgZWxzZSAnJ1xuICAgICAgcmVzdWx0Rm91bmQgPSAobXNnKSAtPlxuICAgICAgICAkc2NvcGUucHJvY2Vzc01lc3NhZ2VzIFttc2ddLCB7IGF1dGhvcklzU2VsZjogdHJ1ZSB9XG4gICAgICAgICRzY29wZS5zZW50LnB1c2ggbXNnXG5cbiAgICAgICRzY29wZS5pZGVudGlmaUluZGV4LmdldFNlbnRNc2dzKCRzY29wZS5pZGVudGl0eSwgcmVzdWx0Rm91bmQsICRzY29wZS5maWx0ZXJzLmxpbWl0KVxuXG4gICAgJHNjb3BlLmdldFJlY2VpdmVkTXNncyA9IC0+XG4gICAgICByZXR1cm4gdW5sZXNzICRzY29wZS5pZGVudGl0eSBhbmQgJHNjb3BlLmlkZW50aWZpSW5kZXhcbiAgICAgICRzY29wZS5yZWNlaXZlZCA9IFtdXG4gICAgICBjdXJzb3IgPSBpZiAkc2NvcGUucmVjZWl2ZWQubGVuZ3RoIHRoZW4gJHNjb3BlLnJlY2VpdmVkWyRzY29wZS5yZWNlaXZlZC5sZW5ndGggLSAxXS5jdXJzb3IgZWxzZSAnJ1xuICAgICAgcmVzdWx0Rm91bmQgPSAobXNnKSAtPlxuICAgICAgICAkc2NvcGUucHJvY2Vzc01lc3NhZ2VzIFttc2ddLCB7IHJlY2lwaWVudElzU2VsZjogdHJ1ZSB9XG4gICAgICAgICRzY29wZS4kYXBwbHkgLT5cbiAgICAgICAgICBpZiBtc2cuaXNQb3NpdGl2ZSgpXG4gICAgICAgICAgICBpZiAkc2NvcGUudGh1bWJzVXAubGVuZ3RoIDwgMTIgYW5kIG5vdCB0aHVtYnNVcE9ialtKU09OLnN0cmluZ2lmeShtc2cuc2lnbmVkRGF0YS5hdXRob3IpXVxuICAgICAgICAgICAgICB0aHVtYnNVcE9ialtKU09OLnN0cmluZ2lmeShtc2cuc2lnbmVkRGF0YS5hdXRob3IpXSA9IHRydWVcbiAgICAgICAgICAgICAgJHNjb3BlLnRodW1ic1VwLnB1c2ggbXNnXG4gICAgICAgICAgICAgICRzY29wZS5oYXNUaHVtYnNVcCA9IHRydWVcbiAgICAgICAgICBlbHNlIGlmIG1zZy5pc05lZ2F0aXZlKCkgYW5kICRzY29wZS50aHVtYnNEb3duLmxlbmd0aCA8IDEyIGFuZCBub3QgdGh1bWJzRG93bk9ialtKU09OLnN0cmluZ2lmeShtc2cuc2lnbmVkRGF0YS5hdXRob3IpXVxuICAgICAgICAgICAgdGh1bWJzRG93bk9ialtKU09OLnN0cmluZ2lmeShtc2cuc2lnbmVkRGF0YS5hdXRob3IpXSA9IHRydWVcbiAgICAgICAgICAgICRzY29wZS50aHVtYnNEb3duLnB1c2ggbXNnXG4gICAgICAgICAgICAkc2NvcGUuaGFzVGh1bWJzRG93biA9IHRydWVcbiAgICAgICAgICAkc2NvcGUucmVjZWl2ZWQucHVzaCBtc2dcbiAgICAgICRzY29wZS5pZGVudGlmaUluZGV4LmdldFJlY2VpdmVkTXNncygkc2NvcGUuaWRlbnRpdHksIHJlc3VsdEZvdW5kLCAkc2NvcGUuZmlsdGVycy5saW1pdCwgY3Vyc29yKVxuXG4gICAgJHNjb3BlLnNldEZpbHRlcnMgPSAoZmlsdGVycykgLT5cbiAgICAgIGFuZ3VsYXIuZXh0ZW5kICRzY29wZS5maWx0ZXJzLCBmaWx0ZXJzXG5cbiAgICAkc2NvcGUudXBsb2FkQ292ZXJQaG90byA9IChibG9iLCBpZGVudGl0eSkgLT5cbiAgICAgICRzY29wZS51cGxvYWRGaWxlKGJsb2IpLnRoZW4gKGZpbGVzKSAtPlxuICAgICAgICByZWNpcGllbnQgPSB7Y292ZXJQaG90bzogJy9pcGZzLycgKyBmaWxlc1swXS5wYXRofVxuICAgICAgICByZWNpcGllbnRbJHNjb3BlLmlkVHlwZV0gPSAkc2NvcGUuaWRWYWx1ZVxuICAgICAgICAkd2luZG93LmlkZW50aWZpTGliLk1lc3NhZ2UuY3JlYXRlVmVyaWZpY2F0aW9uKHtyZWNpcGllbnR9LCAkc2NvcGUucHJpdmF0ZUtleSkudGhlbiAobSkgLT5cbiAgICAgICAgICAkc2NvcGUuaWRlbnRpZmlJbmRleC5hZGRNZXNzYWdlKG0pXG4gICAgICAgICAgJHNjb3BlLnVwbG9hZE1vZGFsLmNsb3NlKClcblxuICAgICRzY29wZS5vcGVuU2hhcmVNb2RhbCA9ICgpIC0+XG4gICAgICAkc2NvcGUuc2hhcmVNb2RhbCA9ICR1aWJNb2RhbC5vcGVuKFxuICAgICAgICBhbmltYXRpb246ICRzY29wZS5hbmltYXRpb25zRW5hYmxlZFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9pZGVudGl0aWVzL3NoYXJlLm1vZGFsLmh0bWwnXG4gICAgICAgIHNpemU6ICdtZCdcbiAgICAgICAgc2NvcGU6ICRzY29wZVxuICAgICAgKVxuICAgICAgJHNjb3BlLnNoYXJlTW9kYWwucmVuZGVyZWQudGhlbiAtPlxuICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKVxuICAgICAgJHNjb3BlLiRvbiAnJHN0YXRlQ2hhbmdlU3RhcnQnLCAtPlxuICAgICAgICAkc2NvcGUuc2hhcmVNb2RhbC5jbG9zZSgpXG5cbiAgICAkc2NvcGUub3BlblJlYWRRUk1vZGFsID0gKCkgLT5cbiAgICAgICRzY29wZS5yZWFkUVJNb2RhbCA9ICR1aWJNb2RhbC5vcGVuKFxuICAgICAgICBhbmltYXRpb246ICRzY29wZS5hbmltYXRpb25zRW5hYmxlZFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9pZGVudGl0aWVzL3JlYWRxci5tb2RhbC5odG1sJ1xuICAgICAgICBzaXplOiAnbWQnXG4gICAgICAgIHNjb3BlOiAkc2NvcGVcbiAgICAgIClcbiAgICAgICRzY29wZS5yZWFkUVJNb2RhbC5yZW5kZXJlZC50aGVuIC0+XG4gICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpXG4gICAgICAkc2NvcGUuJG9uICckc3RhdGVDaGFuZ2VTdGFydCcsIC0+XG4gICAgICAgICRzY29wZS5yZWFkUVJNb2RhbC5jbG9zZSgpXG5cbiAgICAkc2NvcGUub3BlbkNvdmVyUGhvdG9VcGxvYWRNb2RhbCA9IC0+XG4gICAgICByZXR1cm4gdW5sZXNzICRzY29wZS5hdXRoZW50aWNhdGlvbi5pZGVudGl0eVxuICAgICAgJHNjb3BlLm9wZW5VcGxvYWRNb2RhbCgkc2NvcGUudXBsb2FkQ292ZXJQaG90bywgJ1VwbG9hZCBjb3ZlciBwaG90bycsIGZhbHNlKVxuXG4gICAgJHNjb3BlLmZpbmRPbmUgPSAtPlxuICAgICAgcmV0dXJuIHVubGVzcyAkc2NvcGUuaWRlbnRpZmlJbmRleFxuICAgICAgJHNjb3BlLmlkVHlwZSA9ICRzdGF0ZVBhcmFtcy50eXBlXG4gICAgICAkc2NvcGUuaWRWYWx1ZSA9ICRzdGF0ZVBhcmFtcy52YWx1ZVxuICAgICAgJHNjb3BlLmlkQXR0ciA9IG5ldyAkd2luZG93LmlkZW50aWZpTGliLkF0dHJpYnV0ZSgkc2NvcGUuaWRUeXBlLCAkc2NvcGUuaWRWYWx1ZSlcbiAgICAgICRzY29wZS5pZFVybCA9ICRzY29wZS5nZXRJZFVybCgkc2NvcGUuaWRUeXBlLCAkc2NvcGUuaWRWYWx1ZSlcbiAgICAgICRzY29wZS5pc0N1cnJlbnRVc2VyID0gJHNjb3BlLmF1dGhlbnRpY2F0aW9uIGFuZFxuICAgICAgICAkc2NvcGUuYXV0aGVudGljYXRpb24udXNlciBhbmRcbiAgICAgICAgJHNjb3BlLmlkVHlwZSA9PSAkc2NvcGUuYXV0aGVudGljYXRpb24udXNlci5pZFR5cGUgYW5kXG4gICAgICAgICRzY29wZS5pZFZhbHVlID09ICRzY29wZS5hdXRoZW50aWNhdGlvbi51c2VyLmlkVmFsdWVcbiAgICAgICRzY29wZS5pc1VuaXF1ZVR5cGUgPSAkd2luZG93LmlkZW50aWZpTGliLkF0dHJpYnV0ZS5pc1VuaXF1ZVR5cGUoJHNjb3BlLmlkVHlwZSlcbiAgICAgIGlmICEkc2NvcGUuaXNVbmlxdWVUeXBlXG4gICAgICAgICRzdGF0ZS5nbyAnaWRlbnRpdGllcy5saXN0JywgeyBzZWFyY2g6ICRzY29wZS5pZFZhbHVlIH1cbiAgICAgICAgJHNjb3BlLnRhYnNbMl0uYWN0aXZlID0gdHJ1ZSBpZiAkc2NvcGUudGFic1xuICAgICAgJHNjb3BlLnNldFBhZ2VUaXRsZSAkc2NvcGUuaWRWYWx1ZVxuICAgICAgJHNjb3BlLmlkZW50aXR5ID0gJHNjb3BlLmlkZW50aWZpSW5kZXguZ2V0KCRzY29wZS5pZFR5cGUsICRzY29wZS5pZFZhbHVlKVxuICAgICAgJHNjb3BlLnNldElkZW50aXR5TmFtZXMoJHNjb3BlLmlkZW50aXR5LCBmYWxzZSwgdHJ1ZSlcbiAgICAgICRzY29wZS5pZGVudGl0eS5ndW4ub24gKGRhdGEpIC0+XG4gICAgICAgICRzY29wZS5pZGVudGl0eS5kYXRhID0gZGF0YVxuICAgICAgJHNjb3BlLmdldEF0dHJpYnV0ZXMoKVxuICAgICAgJHNjb3BlLmdldFNlbnRNc2dzKClcbiAgICAgICRzY29wZS5nZXRSZWNlaXZlZE1zZ3MoKVxuICAgICAgJHNjb3BlLmlkZW50aXR5Lmd1bi5nZXQoJ3Njb3JlcycpLm9wZW4gKHNjb3JlcykgLT5cbiAgICAgICAgJHNjb3BlLnNjb3JlcyA9IHNjb3Jlc1xuXG4gICAgbG9hZCA9IC0+XG4gICAgICBpZiAkc2NvcGUuaWRlbnRpZmlJbmRleFxuICAgICAgICBpZiAkc3RhdGUuaXMgJ2lkZW50aXRpZXMuc2hvdydcbiAgICAgICAgICAkc2NvcGUuZmluZE9uZSgpXG5cbiAgICAgICAgaWYgJHN0YXRlLmlzICdpZGVudGl0aWVzLmNyZWF0ZSdcbiAgICAgICAgICBmb2N1cygnaWROYW1lRm9jdXMnKVxuICAgICAgICAgICRzY29wZS5uZXdFbnRyeS5uYW1lID0gJHNjb3BlLmNhcGl0YWxpemVXb3Jkcygkc2NvcGUucXVlcnkudGVybSlcbiAgICAkc2NvcGUuJHdhdGNoICdpZGVudGlmaUluZGV4JywgbG9hZFxuXG4gICAgJHNjb3BlLnFyU2NhblN1Y2Nlc3MgPSAoZGF0YSkgLT5cbiAgICAgIGEgPSBkYXRhLnNwbGl0KCcvJylcbiAgICAgIGlmIGEubGVuZ3RoID4gNFxuICAgICAgICB0eXBlID0gZGVjb2RlVVJJQ29tcG9uZW50KGFbYS5sZW5ndGggLSAyXSlcbiAgICAgICAgdmFsdWUgPSBkZWNvZGVVUklDb21wb25lbnQoYVthLmxlbmd0aCAtIDFdLnNwbGl0KCc/JylbMF0pXG4gICAgICAgIGNvbnNvbGUubG9nICd2YWx1ZScsIHZhbHVlXG4gICAgICAgIGNvbnNvbGUubG9nICdkYXRhJywgZGF0YVxuICAgICAgICAkc3RhdGUuZ28gJ2lkZW50aXRpZXMuc2hvdycsIHt0eXBlLCB2YWx1ZX1cbiAgICAgIGVsc2VcbiAgICAgICAgY29uc29sZS5sb2cgJ1VucmVjb2duaXplZCBpZGVudGl0eSB1cmwnLCBkYXRhXG4gICAgJHNjb3BlLnFyU2NhbkVycm9yID0gKGUpIC0+XG4gICAgICAjIHRoaXMgaXMgY2FsbGVkIGVhY2ggdGltZSBhIFFSIGNvZGUgaXMgbm90IGZvdW5kIG9uIHRoZSBjYW1lcmFcbiAgICAgICMgY29uc29sZS5lcnJvciBlXG5dXG4iXX0=

(function() {
  angular.module('identifiAngular').run(function($log, $rootScope, $state, $stateParams, $window, localStorageService) {
    'ngInject';
    $log.debug('runBlock end');
    return $rootScope.$on('$stateChangeSuccess', function(event, current, previous) {
      $rootScope.pageTitle = $state.current.title || 'Identifi';
      localStorageService.set('state', current.name);
      localStorageService.set('stateParams', $stateParams);
      return $window.scrollTo(0, 0);
    });
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgucnVuLmpzIiwic291cmNlcyI6WyJpbmRleC5ydW4uY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUNFLENBQUMsR0FESCxDQUNPLFFBQUEsQ0FBQyxJQUFELEVBQU8sVUFBUCxFQUFtQixNQUFuQixFQUEyQixZQUEzQixFQUF5QyxPQUF6QyxFQUFrRCxtQkFBbEQsQ0FBQTtJQUNIO0lBQ0EsSUFBSSxDQUFDLEtBQUwsQ0FBVyxjQUFYO1dBQ0EsVUFBVSxDQUFDLEdBQVgsQ0FBZSxxQkFBZixFQUFzQyxRQUFBLENBQUMsS0FBRCxFQUFRLE9BQVIsRUFBaUIsUUFBakIsQ0FBQTtNQUNwQyxVQUFVLENBQUMsU0FBWCxHQUF1QixNQUFNLENBQUMsT0FBTyxDQUFDLEtBQWYsSUFBd0I7TUFDL0MsbUJBQW1CLENBQUMsR0FBcEIsQ0FBd0IsT0FBeEIsRUFBaUMsT0FBTyxDQUFDLElBQXpDO01BQ0EsbUJBQW1CLENBQUMsR0FBcEIsQ0FBd0IsYUFBeEIsRUFBdUMsWUFBdkM7YUFDQSxPQUFPLENBQUMsUUFBUixDQUFpQixDQUFqQixFQUFtQixDQUFuQjtJQUpvQyxDQUF0QztFQUhHLENBRFA7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlICdpZGVudGlmaUFuZ3VsYXInXG4gIC5ydW4gKCRsb2csICRyb290U2NvcGUsICRzdGF0ZSwgJHN0YXRlUGFyYW1zLCAkd2luZG93LCBsb2NhbFN0b3JhZ2VTZXJ2aWNlKSAtPlxuICAgICduZ0luamVjdCdcbiAgICAkbG9nLmRlYnVnICdydW5CbG9jayBlbmQnXG4gICAgJHJvb3RTY29wZS4kb24gJyRzdGF0ZUNoYW5nZVN1Y2Nlc3MnLCAoZXZlbnQsIGN1cnJlbnQsIHByZXZpb3VzKSAtPlxuICAgICAgJHJvb3RTY29wZS5wYWdlVGl0bGUgPSAkc3RhdGUuY3VycmVudC50aXRsZSB8fCAnSWRlbnRpZmknXG4gICAgICBsb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldCgnc3RhdGUnLCBjdXJyZW50Lm5hbWUpXG4gICAgICBsb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldCgnc3RhdGVQYXJhbXMnLCAkc3RhdGVQYXJhbXMpXG4gICAgICAkd2luZG93LnNjcm9sbFRvKDAsMClcbiJdfQ==

(function() {
  angular.module('identifiAngular').config(function($stateProvider, $urlRouterProvider) {
    'ngInject';
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
      title: 'Identifi - Contacts'
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
      title: 'Identifi'
    }).state('messages.show', {
      url: '/messages/:id',
      templateUrl: 'app/messages/show.html',
      controller: 'MessagesController',
      controllerAs: 'messages'
    }).state('about', {
      url: '/about',
      templateUrl: 'app/main/about.html',
      title: 'Identifi - About'
    }).state('settings', {
      url: '/settings',
      templateUrl: 'app/main/settings.html',
      title: 'Identifi - Settings'
    });
    return $urlRouterProvider.otherwise('');
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgucm91dGUuanMiLCJzb3VyY2VzIjpbImluZGV4LnJvdXRlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsaUJBQWYsQ0FDRSxDQUFDLE1BREgsQ0FDVSxRQUFBLENBQUMsY0FBRCxFQUFpQixrQkFBakIsQ0FBQTtJQUNOO0lBQ0EsY0FDRSxDQUFDLEtBREgsQ0FDUyxZQURULEVBRUk7TUFBQSxHQUFBLEVBQUssV0FBTDtNQUNBLFFBQUEsRUFBVSxZQURWO01BRUEsUUFBQSxFQUFVO0lBRlYsQ0FGSixDQUtFLENBQUMsS0FMSCxDQUtTLGlCQUxULEVBTUk7TUFBQSxHQUFBLEVBQUssRUFBTDtNQUNBLFdBQUEsRUFBYSwwQkFEYjtNQUVBLFVBQUEsRUFBWSxzQkFGWjtNQUdBLFlBQUEsRUFBYyxZQUhkO01BSUEsTUFBQSxFQUNFO1FBQUEsTUFBQSxFQUFRO01BQVIsQ0FMRjtNQU1BLEtBQUEsRUFBTztJQU5QLENBTkosQ0FhRSxDQUFDLEtBYkgsQ0FhUyxtQkFiVCxFQWNJO01BQUEsR0FBQSxFQUFLLFNBQUw7TUFDQSxXQUFBLEVBQWEsNEJBRGI7TUFFQSxVQUFBLEVBQVksc0JBRlo7TUFHQSxZQUFBLEVBQWM7SUFIZCxDQWRKLENBa0JFLENBQUMsS0FsQkgsQ0FrQlMsaUJBbEJULEVBbUJJO01BQUEsR0FBQSxFQUFLLGVBQUw7TUFDQSxXQUFBLEVBQWEsMEJBRGI7TUFFQSxVQUFBLEVBQVksc0JBRlo7TUFHQSxZQUFBLEVBQWM7SUFIZCxDQW5CSixDQXVCRSxDQUFDLEtBdkJILENBdUJTLFVBdkJULEVBd0JJO01BQUEsR0FBQSxFQUFLLEVBQUw7TUFDQSxRQUFBLEVBQVUsWUFEVjtNQUVBLFFBQUEsRUFBVTtJQUZWLENBeEJKLENBMkJFLENBQUMsS0EzQkgsQ0EyQlMsZUEzQlQsRUE0Qkk7TUFBQSxHQUFBLEVBQUssRUFBTDtNQUNBLFdBQUEsRUFBYSx3QkFEYjtNQUVBLFVBQUEsRUFBWSxvQkFGWjtNQUdBLFlBQUEsRUFBYyxVQUhkO01BSUEsS0FBQSxFQUFPO0lBSlAsQ0E1QkosQ0FpQ0UsQ0FBQyxLQWpDSCxDQWlDUyxlQWpDVCxFQWtDSTtNQUFBLEdBQUEsRUFBSyxlQUFMO01BQ0EsV0FBQSxFQUFhLHdCQURiO01BRUEsVUFBQSxFQUFZLG9CQUZaO01BR0EsWUFBQSxFQUFjO0lBSGQsQ0FsQ0osQ0FzQ0UsQ0FBQyxLQXRDSCxDQXNDUyxPQXRDVCxFQXVDSTtNQUFBLEdBQUEsRUFBSyxRQUFMO01BQ0EsV0FBQSxFQUFhLHFCQURiO01BRUEsS0FBQSxFQUFPO0lBRlAsQ0F2Q0osQ0EwQ0UsQ0FBQyxLQTFDSCxDQTBDUyxVQTFDVCxFQTJDSTtNQUFBLEdBQUEsRUFBSyxXQUFMO01BQ0EsV0FBQSxFQUFhLHdCQURiO01BRUEsS0FBQSxFQUFPO0lBRlAsQ0EzQ0o7V0ErQ0Esa0JBQWtCLENBQUMsU0FBbkIsQ0FBNkIsRUFBN0I7RUFqRE0sQ0FEVjtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUgJ2lkZW50aWZpQW5ndWxhcidcbiAgLmNvbmZpZyAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikgLT5cbiAgICAnbmdJbmplY3QnXG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSAnaWRlbnRpdGllcycsXG4gICAgICAgIHVybDogJy9jb250YWN0cydcbiAgICAgICAgdGVtcGxhdGU6IFwiPHVpLXZpZXcvPlwiXG4gICAgICAgIGFic3RyYWN0OiB0cnVlXG4gICAgICAuc3RhdGUgJ2lkZW50aXRpZXMubGlzdCcsXG4gICAgICAgIHVybDogJydcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvaWRlbnRpdGllcy9saXN0Lmh0bWwnXG4gICAgICAgIGNvbnRyb2xsZXI6ICdJZGVudGl0aWVzQ29udHJvbGxlcidcbiAgICAgICAgY29udHJvbGxlckFzOiAnaWRlbnRpdGllcydcbiAgICAgICAgcGFyYW1zOlxuICAgICAgICAgIHNlYXJjaDogJydcbiAgICAgICAgdGl0bGU6ICdJZGVudGlmaSAtIENvbnRhY3RzJ1xuICAgICAgLnN0YXRlICdpZGVudGl0aWVzLmNyZWF0ZScsXG4gICAgICAgIHVybDogJy9jcmVhdGUnXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2lkZW50aXRpZXMvY3JlYXRlLmh0bWwnXG4gICAgICAgIGNvbnRyb2xsZXI6ICdJZGVudGl0aWVzQ29udHJvbGxlcidcbiAgICAgICAgY29udHJvbGxlckFzOiAnaWRlbnRpdGllcydcbiAgICAgIC5zdGF0ZSAnaWRlbnRpdGllcy5zaG93JyxcbiAgICAgICAgdXJsOiAnLzp0eXBlLzp2YWx1ZSdcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvaWRlbnRpdGllcy9zaG93Lmh0bWwnXG4gICAgICAgIGNvbnRyb2xsZXI6ICdJZGVudGl0aWVzQ29udHJvbGxlcidcbiAgICAgICAgY29udHJvbGxlckFzOiAnaWRlbnRpdGllcydcbiAgICAgIC5zdGF0ZSAnbWVzc2FnZXMnLFxuICAgICAgICB1cmw6ICcnXG4gICAgICAgIHRlbXBsYXRlOiBcIjx1aS12aWV3Lz5cIlxuICAgICAgICBhYnN0cmFjdDogdHJ1ZVxuICAgICAgLnN0YXRlICdtZXNzYWdlcy5saXN0JyxcbiAgICAgICAgdXJsOiAnJ1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9tZXNzYWdlcy9saXN0Lmh0bWwnXG4gICAgICAgIGNvbnRyb2xsZXI6ICdNZXNzYWdlc0NvbnRyb2xsZXInXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ21lc3NhZ2VzJ1xuICAgICAgICB0aXRsZTogJ0lkZW50aWZpJ1xuICAgICAgLnN0YXRlICdtZXNzYWdlcy5zaG93JyxcbiAgICAgICAgdXJsOiAnL21lc3NhZ2VzLzppZCdcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbWVzc2FnZXMvc2hvdy5odG1sJ1xuICAgICAgICBjb250cm9sbGVyOiAnTWVzc2FnZXNDb250cm9sbGVyJ1xuICAgICAgICBjb250cm9sbGVyQXM6ICdtZXNzYWdlcydcbiAgICAgIC5zdGF0ZSAnYWJvdXQnLFxuICAgICAgICB1cmw6ICcvYWJvdXQnXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL21haW4vYWJvdXQuaHRtbCdcbiAgICAgICAgdGl0bGU6ICdJZGVudGlmaSAtIEFib3V0J1xuICAgICAgLnN0YXRlICdzZXR0aW5ncycsXG4gICAgICAgIHVybDogJy9zZXR0aW5ncydcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbWFpbi9zZXR0aW5ncy5odG1sJ1xuICAgICAgICB0aXRsZTogJ0lkZW50aWZpIC0gU2V0dGluZ3MnXG5cbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlICcnXG4iXX0=

(function() {
  angular.module('identifiAngular').constant('config', {
    defaultFilters: {
      type: null,
      limit: 20,
      max_distance: 0
    }
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29uc3RhbnRzLmpzIiwic291cmNlcyI6WyJpbmRleC5jb25zdGFudHMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUNFLENBQUMsUUFESCxDQUNZLFFBRFosRUFFSTtJQUFBLGNBQUEsRUFDRTtNQUFBLElBQUEsRUFBTSxJQUFOO01BQ0EsS0FBQSxFQUFPLEVBRFA7TUFFQSxZQUFBLEVBQWM7SUFGZDtFQURGLENBRko7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdpZGVudGlmaUFuZ3VsYXInKVxuICAuY29uc3RhbnQgJ2NvbmZpZycsXG4gICAgZGVmYXVsdEZpbHRlcnM6XG4gICAgICB0eXBlOiBudWxsXG4gICAgICBsaW1pdDogMjBcbiAgICAgIG1heF9kaXN0YW5jZTogMFxuIl19

(function() {
  angular.module('identifiAngular').config(function($logProvider) {
    'ngInject';
    // Enable log
    return $logProvider.debugEnabled(true);
  });

  // Set options third-party lib

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29uZmlnLmpzIiwic291cmNlcyI6WyJpbmRleC5jb25maWcuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUNFLENBQUMsTUFESCxDQUNVLFFBQUEsQ0FBQyxZQUFELENBQUE7SUFDTixXQUFBOztXQUVBLFlBQVksQ0FBQyxZQUFiLENBQTBCLElBQTFCO0VBSE0sQ0FEVjs7RUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUgJ2lkZW50aWZpQW5ndWxhcidcbiAgLmNvbmZpZyAoJGxvZ1Byb3ZpZGVyKSAtPlxuICAgICduZ0luamVjdCdcbiAgICAjIEVuYWJsZSBsb2dcbiAgICAkbG9nUHJvdmlkZXIuZGVidWdFbmFibGVkIHRydWVcbiAgICAjIFNldCBvcHRpb25zIHRoaXJkLXBhcnR5IGxpYlxuIl19

angular.module('identifiAngular').run(['$templateCache', function($templateCache) {$templateCache.put('app/identities/create.html','<div class="container mar-bot30" ng-controller=IdentitiesController><div class=row><div class="col-xs-8 col-sm-6 col-sm-offset-2"><h3>Add contact</h3></div><div class="col-xs-4 col-sm-2"><button ng-click=openReadQRModal() class="btn btn-default pull-right"><span class="glyphicon glyphicon-qrcode"></span> Scan QR</button></div></div><div class=row><div class="col-xs-12 col-sm-8 col-sm-offset-2"><div class="panel panel-danger" ng-if=error><div class=panel-heading ng-bind=error></div></div><div class="panel panel-info" ng-hide=authentication.user><div class=panel-heading>Please log in to add contacts.</div></div><form class=form name=addEntryForm ng-submit="addEntry($event, newEntry)"><div class=form-group><label for=idName>Name *</label> <input type=text required autofocus id=idName focus-on=idNameFocus name=idName ng-model=newEntry.name class=form-control></div><div class=form-group ng-class="{ \'has-error\': addEntryForm.idEmail.$invalid }"><label for=idEmail>Email</label> <input type=email id=idEmail name=idEmail ng-model=newEntry.email class=form-control></div><div class=form-group ng-class="{ \'has-error\': addEntryForm.idUrl.$invalid }"><label for=idUrl>Url</label> <input type=url id=idUrl name=idUrl ng-model=newEntry.url class=form-control><p class=help-block>Social media profile or other personal url</p></div><button class="btn btn-primary" ng-disabled="loggingIn || !(authentication.user && !(addEntryForm.idName.$invalid || addEntryForm.idEmail.$invalid || addEntryForm.idPhone.$invalid || addEntryForm.idUrl.$invalid))">Add public contact</button><p class=help-block>More details can be added afterwards.</p></form></div></div></div>');
$templateCache.put('app/identities/list.html','<div class="container no-padding-xs"><section><div class=mar-top25-xs></div><div ng-if=!query.term ng-include="\'app/main/getstarted.partial.html\'"></div><table id=search-results class="table table-hover" infinite-scroll=search(query.term) infinite-scroll-distance=1 infinite-scroll-disabled=true><tbody><tr ng-class="{active: ids.activeKey == -1}" ui-sref=identities.create class=search-result-row><td class="gravatar-col align-center"><span style=line-height:46px class="glyphicon glyphicon-plus"></span></td><td><a ui-sref=identities.create>Add contact<span ng-if=query.term>: <span ng-bind=capitalizeWords(query.term)></span></span></a></td></tr><tr ng-repeat="result in ids.list|orderBy:result.data.trustDistance" id=result{{$index}} ui-sref="identities.show({ type: result.linkTo.type, value: result.linkTo.value })" class=search-result-row ng-class="{active: result.active}"><td class=gravatar-col><identicon identity=result border=3 width=50 positive-score=result.pos negative-score=result.neg ipfs=ipfs></identicon></td><td><span ng-if="result.data.trustDistance == 0" class="label label-default pull-right">viewpoint</span> <span ng-if="result.data.trustDistance > 0" ng-bind="result.data.trustDistance | ordinal" class="label label-default pull-right"></span> <a ng-bind-html=result.primaryName|highlight:query.term ui-sref="identities.show({ type: result.linkTo.type, value: result.linkTo.value })"></a> <span class="glyphicon glyphicon-ok-sign" style=color:#337ab7 ng-if=result.verified></span> <small ng-if=!(result.mostVerifiedAttributes.type||result.mostVerifiedAttributes.nickname) class=list-group-item-text><span ng-bind-html=result.data.attrs.type.type|highlight:query.term></span></small><br><small><span ng-if=result.nickname ng-bind-html=result.nickname|highlight:query.term class=mar-right10></span> <span ng-if=result.profile.email class=mar-right10><span class="glyphicon glyphicon-envelope"></span> <span ng-bind-html=result.profile.email|highlight:query.term></span> </span><span ng-if=result.profile.facebook class=mar-right10><span class="fa fa-facebook"></span> <span ng-bind-html=result.profile.facebook|highlight:query.term></span> </span><span ng-if=result.profile.twitter class=mar-right10><span class="fa fa-twitter"></span> <span ng-bind-html=result.profile.twitter|highlight:query.term></span> </span><span ng-if=result.profile.googlePlus class=mar-right10><span class="fa fa-google-plus"></span> <span ng-bind-html=result.profile.googlePlus|highlight:query.term></span> </span><span ng-if=result.mostVerifiedAttributes.bitcoin class=mar-right10><span class="fa fa-bitcoin"></span> <span ng-bind-html=result.mostVerifiedAttributes.bitcoin.attribute.val|highlight:query.term></span></span></small></td></tr></tbody></table><div class="alert alert-info text-center" ng-if=!ids.list.length>No results</div></section></div>');
$templateCache.put('app/identities/readqr.modal.html','<div class="col-md-10 col-md-offset-1" ng-controller=IdentitiesController><div class="panel panel-default mar-top15"><div class="panel-heading text-center"><div><qr-scanner width=400 height=300 ng-success=qrScanSuccess(data) ng-error=qrScanError(error)></qr-scanner></div><!-- <div class="mar-top15 mar-bot10"><button ng-click="shareModal.close()" class="btn btn-default">Close</button></div> --></div></div></div>');
$templateCache.put('app/identities/share.modal.html','<div class="col-md-10 col-md-offset-1" ng-controller=IdentitiesController><div class="panel panel-default mar-top15"><div class="panel-heading text-center"><p><button ng-click=copyToClipboard(idUrl) class="btn btn-primary mar-top10">Copy link to this page</button></p><div class="mar-top20 mar-bot10"><qrcode data={{idUrl}} size=240></qrcode></div><!-- <div class="mar-top15 mar-bot10"><button ng-click="shareModal.close()" class="btn btn-default">Close</button></div> --></div></div></div>');
$templateCache.put('app/identities/show.html','<section class=cover-container><div ng-click=openCoverPhotoUploadModal() class=cover parallax-background parallax-ratio=-0.2 ng-style=coverPhoto></div><div class="container hidden-xs hidden-sm"><div class="heading-row row"><div class="col-md-8 col-md-offset-3"><h4 ng-show="idType === \'keyID\' || idType === \'uuid\'"><identicon identity=idAttr width=35></identicon><button class="btn btn-default mar-left15" ng-click=openShareModal()><span class="glyphicon glyphicon-qrcode mar-right5"></span> Share</button></h4><h4 ng-hide="idType === \'keyID\' || idType === \'uuid\'"><span ng-bind=idValue class=idValue></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType class=idType></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType class=idType></a> </small><button class="btn btn-default mar-left15" ng-click=openShareModal()><span class="glyphicon glyphicon-qrcode mar-right5"></span> Share</button></h4></div></div><div class=row><div class="col-md-9 col-md-offset-3"><ul class="list-inline tab-list"><li ng-if=isUniqueType><a href="" ng-class="{ active: activeTab == 1 }" ng-click=activateTab(1)><span class=hidden-xs>Received </span>({{0+identity.data.receivedPositive+identity.data.receivedNeutral+identity.data.receivedNegative || received.length}})</a></li><li ng-if=isUniqueType><a href="" ng-class="{ active: activeTab == 2 }" ng-click=activateTab(2)><span class=hidden-xs>Sent </span>({{0+identity.data.sentPositive+identity.data.sentNeutral+identity.data.sentNegative || sent.length}})</a></li><li><a href="" ng-class="{ active: activeTab == 3 }" ng-click=activateTab(3)><span class=hidden-xs>Identity </span>(<span ng-bind="attributesLength || 0"></span>)</a></li></ul></div></div></div></section><div class=container><div><section><div class=row><div class="col-md-3 id-left-column"><div ng-if=isUniqueType><div><p class="hidden-md hidden-lg" ng-hide=!stats.name><span ng-bind=idValue class=idValue></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType class=idType></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType class=idType></a></small></p><div class=stats-box><div class=row><div class=col-xs-12><p class=align-center><identicon ng-click=openProfilePhotoUploadModal() identity=identity ipfs=ipfs border=4 show-distance=0 width=230 ng-if=hideProfilePhoto></identicon><identicon ng-click=openProfilePhotoUploadModal() identity=identity ipfs=ipfs border=4 show-distance=0 width=230 ng-if=!hideProfilePhoto></identicon></p></div></div><div class=row><div class=col-xs-12><h4><span class="visible-xs-inline-block visible-sm-inline-block mar-right15"><span ng-show="idType === \'keyID\' || idType === \'uuid\'"><identicon identity=idAttr width=35></identicon></span><span ng-hide="idType === \'keyID\' || idType === \'uuid\'"><span ng-if=!(identity.data.mostVerifiedAttributes.name||identity.data.mostVerifiedAttributes.nickname)><span ng-bind=idValue class=idValue></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType class=idType></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType class=idType></a> </small></span></span></span><span ng-bind=identity.primaryName></span> <span class="glyphicon glyphicon-ok-sign" style=color:#337ab7 uib-tooltip="Verified by a trusted verifier" ng-if=identity.verified></span> <span ng-hide="!identity.data.mostVerifiedAttributes.nickname || identity.data.mostVerifiedAttributes.nickname == identity.data.mostVerifiedAttributes.primaryName">(<span class=text-muted ng-bind=identity.nickname></span>) </span><button class="mar-left15 visible-xs-inline-block visible-sm-inline-block btn btn-default" ng-click=openShareModal()><span class="glyphicon glyphicon-share mar-right5"></span> Share</button> <span ng-if="identity.data.trustDistance == 0" class="label label-default pull-right">viewpoint</span> <span ng-if="identity.data.trustDistance > 0 && identity.data.trustDistance < 1000" ng-bind="identity.data.trustDistance | ordinal" class="label label-default pull-right"></span></h4></div></div><div class=row><div class="col-xs-12 col-sm-6 col-md-12 mar-bot10 mar-top10"><div class=mar-bot10 ng-if="authentication.user && !identity.hasProperName && !nameAdded"><a href="" ng-click=addName() ng-hide=addingName>Add name</a><form class=form-inline ng-show=addingName ng-submit=addName(name)><div class=form-group><input focus-on=addNameFocus type=text class=form-control ng-model=name placeholder="Add name"></div><button type=submit class="btn btn-default"><span class="glyphicon glyphicon-plus"></span></button></form></div><p><b>Received: <span ng-if="identity.data.receivedPositive || identity.data.receivedNegative"><span ng-bind="identity.data.receivedPositive / (identity.data.receivedPositive+identity.data.receivedNeutral+identity.data.receivedNegative) * 100 | number:0"></span>% positive </span><span ng-if="!(identity.data.receivedPositive || identity.data.receivedNegative)">&mdash;</span></b><br>Sent: <span ng-if="identity.data.sentPositive || identity.data.sentNegative"><span ng-bind="identity.data.sentPositive / (identity.data.sentPositive+identity.data.sentNeutral+identity.data.sentNegative) * 100 | number:0"></span>% positive </span><span ng-if="!(identity.data.sentPositive || identity.data.sentNegative)">&mdash;</span></p><!--\n                <p class="received-stats">\n                  <div><strong>Received</strong></div>\n                  <div>\n                    <strong>\n                      <span class="positive"><span class="glyphicon glyphicon-thumbs-up"></span> <span ng-bind="identity.data.receivedPositive">-</span></span>\n                      <span class="neutral"><span class="glyphicon glyphicon-question-sign"></span> <span ng-bind="identity.data.receivedNeutral">-</span></span>\n                      <span class="negative"><span class="glyphicon glyphicon-thumbs-down"></span> <span ng-bind="identity.data.receivedNegative">-</span></span>\n                    </strong>\n                  </div>\n                </p>\n                <p>\n                  <div>Sent</div>\n                  <div>\n                    <span class="positive"><span class="glyphicon glyphicon-thumbs-up"></span> <span ng-bind="identity.data.sentPositive">-</span></span>\n                    <span class="neutral"><span class="glyphicon glyphicon-question-sign"></span> <span ng-bind="identity.data.sentNeutral">-</span></span>\n                    <span class="negative"><span class="glyphicon glyphicon-thumbs-down"></span> <span ng-bind="identity.data.sentNegative">-</span></span>\n                  </div>\n                </p> --><div ng-if="scores.verifier && scores.verifier.score > 0" class="text-center alert alert-info"><span class="fa fa-shield" style=font-size:2em></span><p>This identity is a <b>trusted verifier</b> in this web of trust. It can grant verification checkmarks.</p></div><div ng-if=isUniqueType class="mar-top10 quick-contact"><ul class=list-unstyled><li ng-repeat="a in attributes" ng-if=a.quickContact><a ng-href={{a.link}}><span ng-class=a.iconStyle></span><span ng-bind="a.linkName || a.value"></span></a></li><li ng-if=stats.first_seen><span class="fa fa-calendar"></span>First seen: <span ng-if=stats.first_seen ng-bind="stats.first_seen|date:\'mediumDate\'"></span> <span ng-if=!stats.first_seen>&mdash;</span></li></ul></div></div><div class="col-xs-12 col-sm-6 col-md-12 mar-top10"><div ng-if="isUniqueType && hasThumbsUp" class="stats-box mar-bot10"><h5>Thumbs up</h5><a ng-repeat="msg in thumbsUp | orderBy:\'authorTrustDistance\'" ng-class="{ \'hidden-xs\': $index > 3, \'hidden-sm\': $index > 4 }" class="mar-right5 mar-bot5" ui-sref="identities.show({ type: msg.linkToAuthor.type, value: msg.linkToAuthor.value })" uib-tooltip="{{ msg.author_name || msg.linkToAuthor.value }}"><identicon ipfs=ipfs identity=msg.author class=no-glow border=3 width=60></identicon></a></div><div ng-if="isUniqueType && hasThumbsDown" class="stats-box mar-bot10"><h5>Thumbs down</h5><a ng-repeat="msg in thumbsDown | orderBy:\'authorTrustDistance\'" ng-class="{ \'hidden-xs\': $index > 3, \'hidden-sm\': $index > 4 }" class="mar-right5 mar-bot5" ui-sref="identities.show({ type: msg.linkToAuthor.type, value: msg.linkToAuthor.value })" uib-tooltip="{{ msg.author_name || msg.linkToAuthor.value }}"><identicon ipfs=ipfs identity=msg.author class=no-glow border=3 width=60></identicon></a></div></div></div></div></div></div><div class=hidden-xs ng-include="\'app/messages/distance-selector.partial.html\'"></div></div><div class="col-md-8 id-right-column"><!-- Nav tabs --><div ng-include="\'app/main/createuser.partial.html\'"></div><uib-tabset active=activeTab><uib-tab index=1 ng-if=isUniqueType><uib-tab-heading><span class=hidden-xs>Received ({{0+identity.data.receivedPositive+identity.data.receivedNeutral+identity.data.receivedNegative}})</span> <span class=visible-xs>Recv ({{0+identity.data.receivedPositive+identity.data.receivedNeutral+identity.data.receivedNegative}})</span></uib-tab-heading><div ng-if=isCurrentUser ng-include="\'app/main/getstarted.partial.html\'"></div><div class="panel panel-info" ng-if="!isCurrentUser && authentication.user && authentication.identity.data && !authentication.identity.data.sentPositive"><div class=panel-heading>Trust this user? Upvote them to see their posts!</div></div><div ng-show="!loggingIn && authentication.user && !isCurrentUser" class="panel panel-default panel-success"><div class=panel-body id=write-feedback><form ng-controller=MessagesController ng-submit="createMessage($event, { type: \'rating\', rating: newMessage.rating, comment: newMessage.comment })"><div class=form-group><textarea name=comment class=form-control id=comment ng-model=newMessage.comment placeholder="Write feedback"></textarea></div><div class=row><div class="col-sm-10 col-xs-12 rating-slider" id=write-msg-slider><rzslider rz-slider-model=newMessage.rating rz-slider-options=slider.options min=-3 max=3 step=1></rzslider><span class="hidden-xs write-msg-icons mar-left5"><span ng-repeat="i in iconCount(newMessage.rating) track by $index" class="write-msg-icon glyphicon glyphicon-thumbs-up mar-left5" ng-class="[iconStyle(newMessage.rating), iconClass(newMessage.rating)]"></span></span></div><div class="col-sm-2 col-xs-12" style=text-align:right><span class="visible-xs pull-left write-msg-icons"><span ng-repeat="i in iconCount(newMessage.rating) track by $index" class="write-msg-icon glyphicon glyphicon-thumbs-up mar-left5" ng-class="[iconStyle(newMessage.rating), iconClass(newMessage.rating)]"></span> </span><button type=submit class="pull-right btn btn-primary" data-style=zoom-out><span><span class="fa fa-edit"></span> Publish</span><span></span></button></div></div></form></div></div><div infinite-scroll=getReceivedMsgs() infinite-scroll-distance=2 infinite-scroll-disabled="true || !identity || activeTab != 1"><div class=panel ng-class="{\'mar-bot5\': (filters.type.indexOf(\'rating\') === 0)}"><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === null) }" ng-click="setFilters({ type: null })"><a>All</a></li><li ng-class="{active: (filters.type === \'rating\') }" ng-click="setFilters({type: \'rating\'})"><a>Rating</a></li><li ng-class="{active: (filters.type === \'verification\') }" ng-click="setFilters({type:\'verification\'})"><a>Verification</a></li></ul></div></div><div class=panel ng-show="filters.type.indexOf(\'rating\') === 0"><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === \'rating:positive\') }" ng-click="setFilters({type: \'rating:positive\'})"><a><span class=positive><span class="visible-xs-inline glyphicon glyphicon-thumbs-up"></span><span class=hidden-xs>Pos<span class=hidden-md>itive</span></span> ({{0+identity.data.receivedPositive}})</span></a></li><li ng-class="{active: (filters.type === \'rating:neutral\') }" ng-click="setFilters({type: \'rating:neutral\'})"><a><span class=neutral><span class="visible-xs-inline glyphicon glyphicon-question-sign"></span><span class=hidden-xs>Neut<span class=hidden-md>ral</span></span> ({{0+identity.data.receivedNeutral}})</span></a></li><li ng-class="{active: (filters.type === \'rating:negative\') }" ng-click="setFilters({type: \'rating:negative\'})"><a><span class=negative><span class="visible-xs-inline glyphicon glyphicon-thumbs-down"></span><span class=hidden-xs>Neg<span class=hidden-md>ative</span></span> ({{0+identity.data.receivedNegative}})</span></a></li></ul></div></div><message ipfs=ipfs msg-data=msg page-info=identity ng-repeat="msg in received | filter:msgFilter | orderBy:\'signedData.timestamp\' : true as receivedFiltered" ng-click="openMessage($event, msg, \'lg\')"></message></div><div ng-if="!isCurrentUser && receivedFiltered.length == 0" class="alert alert-info text-center">No messages yet</div></uib-tab><uib-tab index=2 ng-if=isUniqueType><uib-tab-heading>Sent ({{0+identity.data.sentPositive+identity.data.sentNeutral+identity.data.sentNegative}})</uib-tab-heading><div infinite-scroll=getSentMsgs() infinite-scroll-distance=2 infinite-scroll-disabled="true || !identity ||\xA0activeTab != 2"><div class=panel ng-class="{\'mar-bot5\': (filters.type.indexOf(\'rating\') === 0)}"><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === null) }" ng-click="setFilters({ type: null })"><a>All</a></li><li ng-class="{active: (filters.type === \'rating\') }" ng-click="setFilters({type: \'rating\'})"><a><span class="visible-xs-inline glyphicon glyphicon-thumbs-up"></span>Rating</a></li><li ng-class="{active: (filters.type === \'verification\') }" ng-click="setFilters({type:\'verification\'})"><a>Verification</a></li><!-- <li ><a href="#" data-val="other"><span class="glyphicon glyphicon-question-sign"></span> Other</a></li> --></ul></div></div><div ng-show="filters.type.indexOf(\'rating\') === 0" class=panel><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === \'rating:positive\') }" ng-click="setFilters({type: \'rating:positive\'})"><a><span class=positive><span class="visible-xs-inline glyphicon glyphicon-thumbs-up"></span><span class=hidden-xs>Pos<span class=hidden-md>itive</span></span> ({{0+identity.data.sentPositive}})</span></a></li><li ng-class="{active: (filters.type === \'rating:neutral\') }" ng-click="setFilters({type: \'rating:neutral\'})"><a><span class=neutral><span class="visible-xs-inline glyphicon glyphicon-question-sign"></span><span class=hidden-xs>Neut<span class=hidden-md>ral</span></span> ({{0+identity.data.sentNeutral}})</span></a></li><li ng-class="{active: (filters.type === \'rating:negative\') }" ng-click="setFilters({type: \'rating:negative\'})"><a><span class=negative><span class="visible-xs-inline glyphicon glyphicon-thumbs-down"></span><span class=hidden-xs>Neg<span class=hidden-md>ative</span></span> ({{0+identity.data.sentNegative}})</span></a></li></ul></div></div><message ipfs=ipfs msg-data=msg page-info=identity ng-repeat="msg in sent | filter:msgFilter | orderBy:\'signedData.timestamp\' : true as sentFiltered" ng-click="openMessage($event, msg, \'lg\')"></message></div><div ng-if="sentFiltered.length == 0" class="alert alert-info text-center">No messages yet</div></uib-tab><uib-tab index=3><uib-tab-heading>Id<span class=hidden-xs>entity</span> (<span ng-bind="attributesLength || 0"></span>)</uib-tab-heading><div id=connections><!-- <input id="authenticity_token" name="authenticity_token" type="hidden" value="z1JM7ffnFK7gOv6S3yzG9UFyakukYHikAU94/3TcT2o="> --><table class="table truncated-table table-hover"><tbody><tr ng-repeat-start="a in attributes" style={{a.rowStyle}} ng-class=a.rowClass ng-click="!a.isCurrent && connectionClicked($event, id)" class=id-row><td><div><div class="pull-left mar-right15"><a ng-hide="a.type === \'keyID\' || a.type === \'uuid\'" style=min-width:45px class="btn btn-lg btn-social-icon" ng-class=a.btnStyle ng-href={{a.link}}><span ng-class=a.iconStyle></span> <span ng-if=a.iconStyle&&!a.link class="pull-left btn btn-lg btn-social-icon" ng-class=a.btnStyle ng-href={{a.link}}><span ng-class=a.iconStyle></span></span></a><identicon identity=a.attr ng-show="a.attr && (a.type === \'keyID\' || a.type === \'uuid\')" width=45></identicon></div><div class=pull-left><a ui-sref="identities.show({ type: a.type, value: a.value })" ng-bind="a.linkName || a.value" class=id-link></a><br><small ng-bind=a.type></small></div><!--\n                              <input class="form-control linkedComment" type="text" placeholder="comment" disabled>\n                            --><div class=pull-right ng-if=!a.isCurrent><button autocomplete=off name=confirm class="btn btn-default btn-confirm" ng-click="createMessage($event, { type: \'verification\' }, a)" ng-disabled=!authentication.user uib-tooltip=Verify data-style=zoom-out><span class="positive glyphicon glyphicon-ok"></span> {{a.conf}}</button> <button autocomplete=off name=unverify class="btn btn-default btn-unverify" ng-click="createMessage($event, { type: \'unverification\' }, a)" ng-disabled=!authentication.user uib-tooltip=Unverify data-style=zoom-out><span class="negative glyphicon glyphicon-remove"></span> {{a.ref}}</button></div><div class=clear></div></div></td></tr><tr ng-repeat-end ng-if=!a.isCurrent class="active connectingmsgs"><td class=connectingmsgs data-style=zoom-in data-spinner-color=#000><div uib-collapse=!a.collapse><div ng-repeat="msg in a.connecting_msgs" ng-click="openMessage($event, msg, \'lg\')" class=confirmation-panel><span ng-if="msg.data.type === \'verification\'"><span class="positive glyphicon glyphicon-ok hidden-xs mar-left5 pull-right"></span> <span class="positive glyphicon glyphicon-ok visible-xs-inline-block mar-right10"></span> </span><span ng-if="msg.data.type === \'unverification\'"><span class="negative glyphicon glyphicon-remove hidden-xs mar-left5 pull-right"></span> <span class="negative glyphicon glyphicon-remove visible-xs-inline-block mar-right10"></span> </span><strong><a ui-sref="identities.show({ type: msg.linkToAuthor.type, value: msg.linkToAuthor.value })" class=id-link><identicon ipfs=ipfs identity=msg class=mar-right5 border=3 width=30 positive-score=msg.author_pos negative-score=msg.author_neg></identicon><span ng-bind=msg.author_name||msg.data.author.type.value></span> </a></strong>- <span ng-bind="msg.data.timestamp|date:\'mediumDate\'" class="text-muted small" style=display:inline-block;></span></div></div></td></tr><tr class="active add-row"><td><input id=addValue ng-change=guessAttributeType() ng-model=newVerification.value class=form-control name=linkedValue type=text placeholder="value (e.g. alice@example.com)" ng-disabled=!authentication.user> <input id=addType ng-model=newVerification.type class=form-control name=linkedType type=text placeholder="type (e.g. email)" ng-disabled=!authentication.user><!--<td><input id="addComment" class="form-control" name="linkedComment" type="text" placeholder="comment" disabled></td> --> <button autocomplete=off id=addButton ng-click="createMessage($event, { type: \'verification\' }, newVerification)" class="btn btn-default" data-style=zoom-out ng-disabled="!authentication.user || !(newVerification.type && newVerification.value)"><span class="glyphicon glyphicon-plus"></span> Add</button></td></tr></tbody></table></div></uib-tab></uib-tabset></div></div></section></div></div>');
$templateCache.put('app/identities/upload.modal.html','<div class="col-md-10 col-md-offset-1" ng-controller=IdentitiesController><div class="panel panel-default mar-top15"><div class=panel-heading><form name=form><div class="drop-box mar-bot10" ngf-resize="squarify ? {ratio:\'1:1\',centerCrop:true} : {}" ngf-select ngf-drop ng-model=file name=file ngf-pattern="\'image/*\'" ngf-accept="\'image/*\'" ngf-max-size=5MB ngf-min-height=100 style=width:100%;min-height:300px;text-align:center><div ng-if=!file style="padding:120px 0">Drop file or click</div><img ng-if=file ngf-src=file width=70%></div><button class="btn btn-primary" ng-disabled=!file type=submit ng-click=uploadModalCallback(file)>{{ modalButtonText }}</button></form></div></div></div>');
$templateCache.put('app/main/about.html','<div class="container mar-bot30"><div class=col-md-8><div class="panel panel-default"><div class=panel-body><h3>About Identifi</h3><p class=lead>Identifi is a social networking application that stores everything on its users\' devices which communicate directly with each other &mdash; no corporate gatekeepers needed.</p><h4>Public messaging</h4><p>It\'s a bit like Tw****r.</p><h4>Web of trust</h4><p>You can create new Identifi accounts (technically: cryptographic keypairs) at will, without asking for anyone\'s permission, but only the users whose <b>web of trust</b> upvoted your account will see its posts.</p><p>When you upvote someone, they become your 1st degree contact. The accounts they upvoted become 2nd degree contacts. Then there are 3rd degree contacts and so on. This is the web of trust, which can be used to filter all content on Identifi. Hiding users by downvoting is also possible.</p><p><b>This way we can avoid spam and other unwanted content without giving power to central moderators.</b></p><p>You can also add to your contacts list and rate people and organizations who are not yet on Identifi.</p><p>A decentralized web of trust, unlike certain big brother systems, could be a strong positive social force as envisioned in the blog post <a href=https://medium.com/@mmalmi/learning-to-trust-strangers-167b652a654f>Learning to Trust Strangers</a>.</p><h4>Identity verifications</h4><p>Keep your contact details up-to-date and ask for verifications from peers or specialized verifiers trusted by your WoT. Use your Identifi account for online authentication or identification on services that support it.</p><p>If you lose access to your account (keypair), just create a new one and link it to your existing identity by asking for verifications from your web of trust.</p><h4>Privacy</h4><p>It\'s important to remember that as for now, <b>everything you post on Identifi is public</b>.</p><p>Private chat between users will probably be implemented at some point, and other user permissions and groups maybe later.</p><h4>Available at</h4><ul><li><a href=https://identi.fi>https://identi.fi</a></li><li><a href=https://identifi.github.io/ >https://identifi.github.io/</a></li><li><a href=https://ipfs.io/ipns/QmaiM39ABfBEkb1ajyZ9ebfJXYgfyDNNbUaVZSwezwwoDQ/ >https://ipfs.io/ipns/QmaiM39ABfBEkb1ajyZ9ebfJXYgfyDNNbUaVZSwezwwoDQ/</a></li><li><a href=https://chrome.google.com/webstore/detail/identifi/oelmiikkaikgnmmjaonjlopkmpcahpgh>Chrome extension</a> (<a href="https://github.com/identifi/identifi-angular/blob/master/dist.crx?raw=true">mirror</a>) - use Identifi offline. In the future, can be used to sign in to websites.</li><!-- TODO: add dynamically updated /ipfs url --><li>Upcoming: Electrum desktop app with bluetooth and LAN peerfinding!</li></ul><h4>Technology</h4><p>Identifi uses <a href=https://gun.eco>GUN</a> for indexing and <a href=https://ipfs.io>IPFS</a> for messages, images and other static data.</p><p>Identifi is free and open source software. The project is in alpha development stage. <b>Contributions welcome!</b></p><ul><li><a href=https://github.com/identifi/identifi>Source code</a></li><li><a href=https://cdn.rawgit.com/identifi/identifi-lib/b979abf6/example/browser.html>Technical description of Identifi with live code</a></li></ul><h5>Future tech</h5><p>Currently the weak point of Identifi\'s decentralization is the list of initial peers, which could easily be blocked by governments or ISPs. By default, the application connects to IPFS default peers and a couple GUN peers. You can always add peers manually on the <a ui-sref=settings>settings page</a>, but that is cumbersome for the average user.</p><p>We already have a multicast module prototype for GUN which can find peers on the same local area network. Bluetooth modules are not yet implemented, but will enable a network of peers that need to meet each other only occasionally.</p><p>On the wide area network level, Identifi trusted contacts could exchange network addresses privately to avoid having them blocked or tracked. WebRTC\'s NAT traversal capabilities can enable direct connections between typical network endpoint users, but you still need a firewall-opened/port-forwarded rendez-vous node for them, and in some cases a relay node.</p></div></div></div></div>');
$templateCache.put('app/main/createuser.partial.html','<div class="panel panel-default" ng-if=!authentication.user><div class=panel-body><form class=form-inline ng-submit=createUser(newUserName)><div class=form-group><input autofocus focus-on=newUser style=min-width:200px type=text id=newUserName class=form-control ng-disabled=creatingUser ng-model=newUserName placeholder="What\'s your name?"></div><i class="hidden-xs mar-right5"></i> <button type=submit class="btn btn-primary" ng-disabled="!newUserName || creatingUser">Go!</button> <i class="mar-left15 hidden-xs"></i> <i class="mar-top5 visible-xs"></i><div class=form-group>or <a ng-click=openLoginModal() href="">Log in</a></div></form></div></div>');
$templateCache.put('app/main/custom-search-row.html','<a class=search-result-row><identicon ipfs=$parent.$parent.$parent.$parent.ipfs identity=match.label border=3 width=46 class=mar-right10></identicon><span ng-bind-html="match.label.primaryName | uibTypeaheadHighlight:query"></span></a>');
$templateCache.put('app/main/getstarted.partial.html','<div ng-if="authentication.user && authentication.identity.data && !authentication.identity.data.sentPositive" class="alert alert-info text-center"><p class=h3 style=margin-bottom:15px>Welcome to social networking freedom!</p><p>Start by upvoting your friends: ask for their profile links or scan their QR codes (<b><a ui-sref=identities.create>Add contact</a></b>). That makes their posts visible to you.</p><p>Alternatively, you can upvote this Identifi distribution\'s <b><a ui-sref="identities.show({type:\'keyID\', value:defaultIndexKeyID})">default address book</a></b> as a starting point.</p><br></div><div ng-if="authentication.user && authentication.identity.data && authentication.identity.data.sentPositive && !authentication.identity.data.receivedPositive" class="alert alert-info text-center"><p class=h3 style=margin-bottom:15px>Great, you have trusted contacts!</p><p>Next you should <b>ask your friends to upvote your account</b>, so they and their network will see your messages.</p><p><button ng-click=copyToClipboard(authentication.user.url) class="btn btn-primary mar-top10">Copy link to your profile</button></p><p>Or show them your QR code:</p><div class=mar-top20><qrcode data={{authentication.user.url}} size=240></qrcode></div><br></div><div ng-if="authentication.user && authentication.identity.data && authentication.identity.data.sentPositive && authentication.identity.data.receivedPositive && localSettings && !localSettings.profileUploadNotificationClosed && authentication.identity.mva && !authentication.identity.mva.profilePhoto" class="alert alert-info text-center"><p class=h3 style=margin-bottom:15px>You\'re good to go!</p><p style="margin-bottom: 15px">Set a profile picture?</p><p><button class="btn btn-primary mar-right15" ng-click=openProfilePhotoUploadModal()>Yes</button> <button class="btn btn-default" ng-click=closeProfileUploadNotification()>Not now</button></p><br></div>');
$templateCache.put('app/main/login.modal.html','<div class="col-md-10 col-md-offset-1"><div class="panel panel-default mar-top15"><div class=panel-heading><!--<div class="checkbox">\n        <label>\n          <input type="checkbox" value="" checked="checked">\n          Remember me\n        </label>\n      </div>--><h3>New user</h3><form ng-submit=createUser(newUserName)><input focus-on=newUser type=text class=form-control ng-model=newUserName placeholder="Your name"><br><input type=submit value=Go! class="btn btn-primary" ng-disabled=!newUserName></form><br><h3>Existing user</h3><form><textarea rows=6 class=form-control placeholder="Paste private key or drop file" ng-model=privateKeySerialized></textarea><br><button class="btn btn-primary" ng-disabled=!privateKeySerialized ng-click="loginWithKey(privateKeySerialized, publicKeyPEM)">Log in</button> <a class=pull-right href="" ng-click="lostKey = !lostKey">Lost your key?</a></form><div ng-if=lostKey class="mar-top30 panel panel-info"><div class=panel-heading>Don\'t worry: just go with "New user" and ask your trusted contacts to verify that your new key belongs to the already existing identity.</div></div></div></div></div>');
$templateCache.put('app/main/logout.modal.html','<div class="col-md-10 col-md-offset-1"><div class="panel panel-default mar-top15"><div class=panel-heading>Log out?</div><div class=panel-body><p>You cannot log in back to this account unless you have saved a backup of your private key.</p><a class="btn btn-default" ng-click=$dismiss()>Cancel</a> <a href=# class="btn btn-danger" ng-click=logout()>Log out</a></div></div></div>');
$templateCache.put('app/main/settings.html','<div class=container><div class=col-md-8><h3>Settings</h3><div ng-if=authentication.user><p><b>For normal people</b></p><div class="panel panel-default"><div class=panel-heading>Log out</div><div class=panel-body><p>You cannot log in back to this account unless you have saved a backup of your private key.</p><p><button class="btn btn-danger" ng-click=openLogoutModal()>Log out</button></p></div></div><div class="panel panel-danger"><div class=panel-heading>Private key</div><div class=panel-body><p>Private key is used to log in to your account. Keep your private key safe!</p><p><button class="btn btn-danger" ng-click=copyToClipboard(privateKey|json)>Copy to clipboard</button> <button class="btn btn-danger" ng-click=downloadText(privateKey|json)>Download</button></p></div></div></div><p><b>Geeky stuff</b></p><div class="panel panel-default"><div class=panel-heading>GUN peers</div><div class=panel-body><p><a href=https://gun.eco/ >GUN</a> stores dynamic content: indexes of messages and identities.</p></div><div class=table-responsive><table class="table table-striped"><tbody><tr ng-repeat="(key, value) in gun[\'_\'].opt.peers"><td><span ng-show="value.wire && value.wire.hied" class="positive fa fa-check-circle"></span> <span ng-hide="value.wire && value.wire.hied" class="negative fa fa-times-circle"></span> <small ng-bind=key></small></td><td><button ng-click=removeGunPeer(key) class="pull-right btn btn-danger"><i class="glyphicon glyphicon-trash"></i></button></td></tr><tr><td colspan=2><form class=form-inline ng-submit=addGunPeer(gunUrl)><input class=form-control type=text placeholder="Peer url" ng-model=gunUrl> <input class="btn btn-primary" type=submit value="Add GUN peer"></form></td></tr></tbody></table></div></div><div class="panel panel-default"><div class=panel-heading>IPFS peers</div><div class=panel-body><p><a href=https://ipfs.io>IPFS</a> stores static content: messages and image files.</p><p ng-hide="ipfsPeers && ipfsPeers.length"><small>No IPFS peers</small></p></div><div class=table-responsive><table class="table table-striped"><tbody><tr ng-repeat="peer in ipfsPeers"><td><span class="positive fa fa-check-circle"></span> <small ng-bind=peer.addr.toString()></small></td><td><button ng-click=removeIpfsPeer(peer.addr.toString()) class="pull-right btn btn-danger"><i class="glyphicon glyphicon-trash"></i></button></td></tr><tr><td colspan=2><form class=form-inline ng-submit=addIpfsPeer(ipfsUrl)><input class=form-control type=text placeholder="Peer url" ng-model=ipfsUrl> <input class="btn btn-primary" type=submit value="Add IPFS peer"></form></td></tr></tbody></table></div></div><!--\n    <div class="panel panel-default">\n      <div class="panel-heading">\n        Identifi indexing settings\n      </div>\n      <div class="panel-body">\n        <p>\n          <pre ng-bind="identifiIndex.options|json"></pre>\n        </p>\n      </div>\n    </div>--><p><b>Other stuff</b></p><div class="panel panel-default"><div class=panel-body><p><a ui-sref=about>About Identifi</a></p></div></div></div></div>');
$templateCache.put('app/messages/create.partial.html','<div class="panel panel-default panel-default"><div class=panel-body><form ng-submit="createMessage($event, { type: \'post\', comment: newMessage.comment })"><div class=form-group><textarea style="resize: vertical" ng-disabled="loggingIn || !authentication.user" name=comment class=form-control id=comment ng-model=newMessage.comment placeholder="What\'s on your mind?"></textarea></div><div class=row><div class=col-xs-12><button ng-disabled="loggingIn || !authentication.user || !newMessage.comment" type=submit class="btn btn-primary" data-style=zoom-out><span><span class="fa fa-edit"></span> Publish</span><span></span></button></div></div></form></div></div>');
$templateCache.put('app/messages/distance-selector.partial.html','<div class="text-center alert alert-info">Viewing as:<br class=hidden-sm><span ng-if=viewpoint><a ui-sref="identities.show({ type: viewpoint.type, value: viewpoint.value })" class=id-link><span class="distance-container mar-right5 mar-left5"><identicon ipfs=ipfs identity=viewpoint.identity border=3 width=35></identicon></span><strong ng-bind=viewpoint.mostVerifiedAttributes.name.attribute.value></strong></a></span><br class=hidden-sm>Max distance from viewpoint: <span class="btn-group trust-distance-selector"><button type=button class="btn btn-default" ng-click="setFilters({max_distance: -1})" ng-class="{active: filters.max_distance === -1}" uib-tooltip="Distance filter off">\u2715</button> <button type=button class="btn btn-default" ng-click="setFilters({max_distance: 1})" ng-class="{active: filters.max_distance === 1}">1</button> <button type=button class="btn btn-default" ng-click="setFilters({max_distance: 2})" ng-class="{active: filters.max_distance === 2}">2</button> <button type=button class="btn btn-default" ng-click="setFilters({max_distance: 3})" ng-class="{active: filters.max_distance === 3}">3</button> <button type=button class="btn btn-default" ng-click="setFilters({max_distance: 0})" ng-class="{active: filters.max_distance === 0}" uib-tooltip=Unlimited>\u221E</button></span></div>');
$templateCache.put('app/messages/filters.partial.html','<div class="panel panel-default"><div class="panel-heading visible-xs visible-sm" ng-click="collapseFilters = !collapseFilters"><h4 class=panel-title><a><span class="fa fa-filter"></span> Filters</a></h4></div><div class="panel-body filters" uib-collapse=collapseFilters><ul class="nav nav-pills nav-stacked msg-type-filter"><li ng-class="{active: (filters.type === null) }" ng-click="setFilters({ type: null })"><a><span class="glyphicon glyphicon-home"></span> All</a></li><li ng-class="{active: (filters.type === \'post\') }" ng-click="setFilters({ type: \'post\' })"><a><span class="fa fa-pencil"></span> Post</a></li><li ng-class="{active: (filters.type === \'rating\') }" ng-click="setFilters({type: \'rating\'})"><a><span class="glyphicon glyphicon-thumbs-up"></span> Rating</a></li><ul class="nav nav-pills nav-stacked" style="padding-left: 1em;"><li ng-class="{active: (filters.type === \'rating:positive\') }" ng-click="setFilters({type: \'rating:positive\'})"><a><span class=positive><span class="glyphicon glyphicon-thumbs-up"></span> Positive</span></a></li><li ng-class="{active: (filters.type === \'rating:neutral\') }" ng-click="setFilters({type: \'rating:neutral\'})"><a><span class=neutral><span class="glyphicon glyphicon-question-sign"></span> Neutral</span></a></li><li ng-class="{active: (filters.type === \'rating:negative\') }" ng-click="setFilters({type: \'rating:negative\'})"><a><span class=negative><span class="glyphicon glyphicon-thumbs-down"></span> Negative</span></a></li></ul><li ng-class="{active: (filters.type === \'verification\') }" ng-click="setFilters({type:\'verification\'})"><a><span class="glyphicon glyphicon-ok"></span> Verification</a></li><!-- <li ><a href="#" data-val="other"><span class="glyphicon glyphicon-question-sign"></span> Other</a></li> --></ul><div ng-include="\'app/messages/distance-selector.partial.html\'"></div></div></div>');
$templateCache.put('app/messages/list.html','<div class=container><section><div ng-if=!authentication.user class=jumbotron><div class=align-center><h1>Social networking freedom</h1></div><div class=row><div class=col-sm-4><div class=align-center><i class="hidden-xs fa fa-download fa-5x mar-bot20"></i><p><i class="hidden-sm hidden-md hidden-lg fa fa-download"></i> Everything is stored on users\' devices &mdash; no corporate gatekeepers.</p></div></div><div class=col-sm-4><div class=align-center><i class="hidden-xs fa fa-thumbs-up fa-5x mar-bot20"></i><p><i class="hidden-sm hidden-md hidden-lg fa fa-thumbs-up"></i> Filter all content using your web of trust.</p></div></div><div class=col-sm-4><div class=align-center><i class="hidden-xs fa fa-check fa-5x mar-bot20"></i><p><i class="hidden-sm hidden-md hidden-lg fa fa-check"></i> Keep your contacts and trusted online identity up-to-date.</p></div></div></div><p class="align-center mar-top15" style=margin-bottom:0><a ui-sref=about>Read more</a></p></div><div ng-if=!authentication.user class=mar-top25-xs></div><div id=messages class=row><div class=col-md-4><div class="hidden-xs hidden-sm" ng-include="\'app/messages/filters.partial.html\'"></div></div><div class=col-md-8><div ng-include="\'app/main/createuser.partial.html\'"></div><div ng-include="\'app/main/getstarted.partial.html\'"></div><div ng-include="\'app/messages/create.partial.html\'"></div><div class="visible-xs visible-sm" ng-include="\'app/messages/filters.partial.html\'"></div><div infinite-scroll=find() infinite-scroll-distance=1 infinite-scroll-disabled=true><message ng-repeat="msg in msgs.list | filter:msgFilter | orderBy:\'signedData.timestamp\' : true as filteredMsgs" ipfs=ipfs msg-data=msg ng-click="openMessage($event, msg, \'lg\')"></message></div><div class="alert alert-info text-center" ng-if=!filteredMsgs.length>No messages yet</div></div></div></section></div>');
$templateCache.put('app/messages/show.html','<section><div class="col-md-8 col-md-offset-2 msg-col"><message ipfs=ipfs show-recipient=true msg-data=msg page-info=info ng-repeat="msg in [message]"></message><div class="panel panel-info"><div class=panel-heading>Message origin verified by <span ng-show=message.verifiedByAttr><identicon identity=message.verifiedByAttr class=mar-right5 border=3 width=35></identicon></span>which is associated with <a ng-if=false ng-bind=message.signerName||message.signerKeyID ui-sref="identities.show({type: \'keyID\', value: message.signerKeyID })"></a> <strong><a ui-sref="identities.show({ type: \'keyID\', value: message.signerKeyID })" class=id-link><identicon ipfs=ipfs identity=message.verifiedBy class=mar-right5 border=3 width=35></identicon><span ng-bind=message.verifiedBy.primaryName></span></a></strong></div></div><p ng-if=message.data.context><small>Context: {{message.data.context}}</small></p><p><button class="btn btn-default" ng-click="collapseRawData = !collapseRawData">Show raw data</button></p><pre uib-collapse=!collapseRawData ng-bind=message.strData></pre><!-- <div class="mar-top15 mar-bot10"><button ng-click="messageModal.close()" class="btn btn-default">Close</button></div> --></div></section>');
$templateCache.put('app/messages/show.modal.html','<div ng-include="\'app/messages/show.html\'"></div>');
$templateCache.put('app/components/message/message.template.html','<div class="panel msg" ng-class="{\'panel-info\':$ctrl.msgData.isVerification, \'panel-default\':$ctrl.msgData.isPost}" style={{$ctrl.msgData.bgColor}} ng-if=$ctrl.msgData.signedData><div class=message-panel ng-class="{ \'panel-body\': !$ctrl.msgData.isVerification, \'panel-heading\': $ctrl.msgData.isVerification || $ctrl.msgData.isUnverification }"><p><span class="mar-left5 pull-right" ng-class=$ctrl.msgData.iconStyle ng-repeat="n in $ctrl.msgData.iconCount track by $index"></span> <span class="mar-left5 pull-right fa fa-refresh" uib-tooltip=Pending ng-if=$ctrl.msgData.local></span> <strong><a ui-sref="identities.show({ type: $ctrl.msgData.linkToAuthor.type, value: $ctrl.msgData.linkToAuthor.value })" class=id-link><identicon ipfs=$ctrl.ipfs identity=$ctrl.msgData.author class=mar-right5 border=3 width=35></identicon><span ng-bind=$ctrl.msgData.author_name></span> </a></strong><span ng-show=!$ctrl.msgData.sameAuthorAndRecipient><small><i class="glyphicon glyphicon-play"></i></small> <a ui-sref="identities.show({ type: $ctrl.msgData.linkToRecipient.type, value: $ctrl.msgData.linkToRecipient.value })" class=id-link><identicon ng-if=$ctrl.showRecipient ipfs=$ctrl.ipfs identity=$ctrl.msgData.recipient class=mar-right5 border=3 width=35></identicon><span ng-bind="($ctrl.msgData.recipientIsSelf && $ctrl.pageInfo.primaryName)||$ctrl.msgData.recipient_name"></span> </a></span>- <a ui-sref="messages.show({ id: ($ctrl.msgData.ipfsUri || $ctrl.msgData.hash) })" ng-bind="$ctrl.msgData.signedData.timestamp|date:\'medium\'" class="text-muted small" style=display:inline-block;></a></p><p ng-if="$ctrl.msgData.isVerification || $ctrl.msgData.isUnverification"><small ng-repeat="a in $ctrl.msgData.recipientArray">{{a.type}}: <span ng-if="a.type == \'email\' || a.type == \'url\'" ng-bind-html="a.value | linky"></span> <span ng-if="!(a.type == \'email\' || a.type == \'url\')" ng-bind=a.value></span> <i class="fa fa-link" ng-if="!$last && $ctrl.msgData.isVerification"></i> <i class="fa fa-chain-broken" ng-if="!$last && $ctrl.msgData.isUnverification"></i></small></p><p ng-bind-html=$ctrl.msgData.signedData.comment|linky></p></div></div>');}]);
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
    {
          limit: 10
        },
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMvbWVzc2FnZXMuY29udHJvbGxlci5qcyIsInNvdXJjZXMiOlsibWVzc2FnZXMvbWVzc2FnZXMuY29udHJvbGxlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxhQUFBOztFQUVBLE9BQU8sQ0FBQyxNQUFSLENBQWUsaUJBQWYsQ0FBaUMsQ0FBQyxVQUFsQyxDQUE2QyxvQkFBN0MsRUFBbUU7SUFDakUsUUFEaUU7SUFFakUsWUFGaUU7SUFHakUsU0FIaUU7SUFJakUsY0FKaUU7SUFLakUsV0FMaUU7SUFNakUsT0FOaUU7SUFPakUsUUFQaUU7O0lBU2pFLFFBVGlFO0lBVWpFLFVBVmlFO0lBV2pFLHFCQVhpRTtJQVlqRSxRQUFBLENBQUMsTUFBRDtJQUFTLFVBQVQ7SUFBcUIsT0FBckI7SUFBOEIsWUFBOUI7SUFBNEMsU0FBNUM7SUFBdUQsS0FBdkQ7SUFBOEQsTUFBOUQ7SUFBc0UsUUFBdEU7SUFBZ0YsTUFBaEY7SUFBd0YsUUFBeEY7SUFBa0csbUJBQWxHLENBQUEsRUFBQTtBQUNFLFVBQUE7TUFBQSxNQUFNLENBQUMsTUFBUCxHQUFnQixZQUFZLENBQUM7TUFDN0IsTUFBTSxDQUFDLE9BQVAsR0FBaUIsWUFBWSxDQUFDO01BRTlCLE1BQU0sQ0FBQyxTQUFQLEdBQW1CLFFBQUEsQ0FBQyxNQUFELENBQUE7ZUFDakIsSUFBSSxLQUFKLENBQVUsSUFBSSxDQUFDLEdBQUwsQ0FBUyxDQUFUO0lBQVksSUFBSSxDQUFDLEdBQUwsQ0FBUyxNQUFULENBQVosQ0FBVjtNQURpQjtNQUduQixNQUFNLENBQUMsU0FBUCxHQUFtQixRQUFBLENBQUMsTUFBRCxDQUFBO0FBQ2pCLFlBQUE7UUFBQSxTQUFBLEdBQVk7UUFDWixJQUFHLE1BQUEsR0FBUyxDQUFaO1VBQ0UsU0FBQSxHQUFZLFdBRGQ7U0FBQSxNQUVLLElBQUcsTUFBQSxHQUFTLENBQVo7VUFDSCxTQUFBLEdBQVksV0FEVDs7ZUFFTDtNQU5pQjtNQVFuQixNQUFNLENBQUMs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ZSBzdHJpY3QnXG4jIE1lc3NhZ2VzIGNvbnRyb2xsZXJcbmFuZ3VsYXIubW9kdWxlKCdpZGVudGlmaUFuZ3VsYXInKS5jb250cm9sbGVyICdNZXNzYWdlc0NvbnRyb2xsZXInLCBbXG4gICckc2NvcGUnXG4gICckcm9vdFNjb3BlJ1xuICAnJHdpbmRvdydcbiAgJyRzdGF0ZVBhcmFtcydcbiAgJyRsb2NhdGlvbidcbiAgJyRodHRwJ1xuICAnJHN0YXRlJ1xuICAjICdBdXRoZW50aWNhdGlvbidcbiAgJ2NvbmZpZydcbiAgJyR0aW1lb3V0J1xuICAnbG9jYWxTdG9yYWdlU2VydmljZSdcbiAgKCRzY29wZSwgJHJvb3RTY29wZSwgJHdpbmRvdywgJHN0YXRlUGFyYW1zLCAkbG9jYXRpb24sICRodHRwLCAkc3RhdGUsIE1lc3NhZ2VzLCBjb25maWcsICR0aW1lb3V0LCBsb2NhbFN0b3JhZ2VTZXJ2aWNlKSAtPiAjLCBBdXRoZW50aWNhdGlvblxuICAgICRzY29wZS5pZFR5cGUgPSAkc3RhdGVQYXJhbXMudHlwZVxuICAgICRzY29wZS5pZFZhbHVlID0gJHN0YXRlUGFyYW1zLnZhbHVlXG5cbiAgICAkc2NvcGUuaWNvbkNvdW50ID0gKHJhdGluZykgLT5cbiAgICAgIG5ldyBBcnJheShNYXRoLm1heCgxLCBNYXRoLmFicyhyYXRpbmcpKSlcblxuICAgICRzY29wZS5pY29uU3R5bGUgPSAocmF0aW5nKSAtPlxuICAgICAgaWNvblN0eWxlID0gJ25ldXRyYWwnXG4gICAgICBpZiByYXRpbmcgPiAwXG4gICAgICAgIGljb25TdHlsZSA9ICdwb3NpdGl2ZSdcbiAgICAgIGVsc2UgaWYgcmF0aW5nIDwgMFxuICAgICAgICBpY29uU3R5bGUgPSAnbmVnYXRpdmUnXG4gICAgICBpY29uU3R5bGVcblxuICAgICRzY29wZS5pY29uQ2xhc3MgPSAocmF0aW5nKSAtPlxuICAgICAgaWNvblN0eWxlID0gJ2dseXBoaWNvbi1xdWVzdGlvbi1zaWduJ1xuICAgICAgaWYgcmF0aW5nID4gMFxuICAgICAgICBpY29uU3R5bGUgPSAnZ2x5cGhpY29uLXRodW1icy11cCdcbiAgICAgIGVsc2UgaWYgcmF0aW5nIDwgMFxuICAgICAgICBpY29uU3R5bGUgPSAnZ2x5cGhpY29uLXRodW1icy1kb3duJ1xuICAgICAgaWNvblN0eWxlXG5cbiAgICAkc2NvcGUuY29sbGFwc2VGaWx0ZXJzID0gJHdpbmRvdy5pbm5lcldpZHRoIDwgOTkyXG5cbiAgICAkc2NvcGUuc2V0RmlsdGVycyA9IChmaWx0ZXJzKSAtPlxuICAgICAgYW5ndWxhci5leHRlbmQgJHNjb3BlLmZpbHRlcnMsIHtsaW1pdDogMTB9LCBmaWx0ZXJzXG5cbiAgICAjIEZpbmQgZXhpc3RpbmcgTWVzc2FnZVxuICAgICRzY29wZS5maW5kT25lID0gLT5cbiAgICAgIGlmICRzdGF0ZVBhcmFtcy5pZFxuICAgICAgICBoYXNoID0gJHN0YXRlUGFyYW1zLmlkXG4gICAgICAgIHByb2Nlc3NSZXNwb25zZSA9IC0+XG4gICAgICAgICAgJHNjb3BlLnByb2Nlc3NNZXNzYWdlcyhbJHNjb3BlLm1lc3NhZ2VdLCB7fSlcbiAgICAgICAgICAkc2NvcGUuc2V0UGFnZVRpdGxlICdNZXNzYWdlICcgKyBoYXNoXG4gICAgICAgICAgJHNjb3BlLnNldE1zZ1Jhd0RhdGEoJHNjb3BlLm1lc3NhZ2UpXG4gICAgICAgICAgJHNjb3BlLm1lc3NhZ2Uuc2lnbmVyS2V5SUQgPSAkc2NvcGUubWVzc2FnZS5nZXRTaWduZXJLZXlJRCgpXG4gICAgICAgICAgJHNjb3BlLm1lc3NhZ2UudmVyaWZpZWRCeSA9ICRzY29wZS5pZGVudGlmaUluZGV4LmdldCgna2V5SUQnLCAkc2NvcGUubWVzc2FnZS5zaWduZXJLZXlJRClcbiAgICAgICAgICAkc2NvcGUuc2V0SWRlbnRpdHlOYW1lcygkc2NvcGUubWVzc2FnZS52ZXJpZmllZEJ5LCB0cnVlKVxuICAgICAgICAgICRzY29wZS5tZXNzYWdlLnZlcmlmaWVkQnlBdHRyID0gbmV3ICR3aW5kb3cuaWRlbnRpZmlMaWIuQXR0cmlidXRlKCdrZXlJRCcsICRzY29wZS5tZXNzYWdlLnNpZ25lcktleUlEKVxuICAgICAgICBpZiBoYXNoLm1hdGNoIC9eUW1bMS05QS1aYS16XXs0MCw1MH0kLyAjIGxvb2tzIGxpa2UgYW4gaXBmcyBhZGRyZXNzXG4gICAgICAgICAgJHNjb3BlLmlwZnNHZXQoaGFzaCkudGhlbiAocmVzKSAtPlxuICAgICAgICAgICAgcyA9IEpTT04ucGFyc2UocmVzLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyAnbXNnIGZyb20gaXBmcycsIHJlcywgc1xuICAgICAgICAgICAgJHdpbmRvdy5pZGVudGlmaUxpYi5NZXNzYWdlLmZyb21TaWcocykudGhlbiAocikgLT5cbiAgICAgICAgICAgICAgJHNjb3BlLm1lc3NhZ2UgPSByXG4gICAgICAgICAgICAgICRzY29wZS5tZXNzYWdlLmlwZnNVcmkgPSBoYXNoXG4gICAgICAgICAgICAgIHByb2Nlc3NSZXNwb25zZSgpXG4gICAgICAgICAgLmNhdGNoIChlKSAtPlxuICAgICAgICAgICAgY29uc29sZS5sb2cgZVxuXG4gICAgbG9hZCA9IC0+XG4gICAgICByZXR1cm4gdW5sZXNzICRzY29wZS5pZGVudGlmaUluZGV4XG4gICAgICBpZiAkc3RhdGUuaXMoJ21lc3NhZ2VzLnNob3cnKVxuICAgICAgICAkc2NvcGUuZmluZE9uZSgpXG4gICAgJHNjb3BlLiR3YXRjaCAnaWRlbnRpZmlJbmRleCcsIGxvYWRcbl1cbiJdfQ==

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
    '$transitions',
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
    $transitions,
    $q,
    focus) { // Authentication, Menus, Persona
      var hosts,
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
        list: [],
        seen: {}
      };
      $scope.phoneRegex = /^\+?\d+$/;
      $scope.ipfs = new Ipfs({
        init: true,
        start: true,
        repo: 'ipfs7-identifi'
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
        if (!$scope.identifiIndex) {
          return;
        }
        $scope.ids.activeKey = -1;
        $scope.ids.list = [];
        console.log('search');
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
        $scope.identifiIndex.search(searchKey,
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
        $scope.identifiIndex = results;
        setTimeout(function() {
          return $scope.$broadcast('rzSliderForceRender');
        },
    1000);
        setTimeout(function() {
          return $scope.$broadcast('rzSliderForceRender');
        },
    3000); // :---D
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
        $scope.msgs.seen = {};
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
        $scope.addingMessage = true;
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
          console.log(m);
          $scope.identifiIndex.addMessage(m);
          $scope.msgs.seen[m.getHash()] = true;
          $scope.processMessages([m]);
          return $scope.msgs.list.push(m);
        }).then(function() {
          var ref;
          if ((ref = $scope.filters.type) !== params.type && ref !== null) {
            $scope.filters.type = params.type;
          }
          $scope.resetMsg();
          return $scope.addingMessage = false;
        }).catch(function(e) {
          console.error(e);
          $scope.error = e;
          return $scope.addingMessage = false;
        });
      };
      $scope.addAttribute = function() {
        return $location.path('#/identities/create/' + $scope.query.term);
      };
      $scope.login = function() {
        return $scope.filters.maxDistance = -1; // because the user doesn't have a trust index yet
      };
      $scope.openLoginModal = function() {
        $scope.loginModal = $uibModal.open({
          animation: $scope.animationsEnabled,
          templateUrl: 'app/main/login.modal.html',
          size: 'lg',
          scope: $scope
        });
        $scope.loginModal.result.then((function() {}),
    (function() {})); // avoid backdrop rejection console error
        $scope.loginModal.rendered.then(function() {
          document.activeElement.blur();
          return focus('newUser');
        });
        return $transitions.onStart({},
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
        $scope.uploadModal.result.then((function() {}),
    (function() {})); // avoid backdrop rejection console error
        $scope.uploadModal.rendered.then(function() {
          return document.activeElement.blur();
        });
        return $transitions.onStart({},
    function() {
          return $scope.uploadModal.close();
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
        return $scope.identifiIndex.getMessagesByTimestamp(resultFound,
    limit);
      };
      $scope.$watch('identifiIndex',
    function() {
        if (!$scope.identifiIndex) {
          return;
        }
        $scope.loadMsgs();
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
        $scope.logoutModal.result.then((function() {}),
    (function() {})); // avoid backdrop rejection console error
        $scope.logoutModal.rendered.then(function() {
          return document.activeElement.blur();
        });
        return $transitions.onStart({},
    function() {
          return $scope.logoutModal.close();
        });
      };
      $scope.closeLogoutModal = function() {
        return $scope.logoutModal.close();
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
        $scope.messageModal.result.then((function() {}),
    (function() {})); // avoid backdrop rejection console error
        $scope.messageModal.rendered.then(function() {
          return document.activeElement.blur();
        });
        return $transitions.onStart({},
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi9tYWluLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzIjpbIm1haW4vbWFpbi5jb250cm9sbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBO0VBQ0EsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUFpQyxDQUFDLFVBQWxDLENBQTZDLGdCQUE3QyxFQUErRDtJQUM3RCxRQUQ2RDtJQUU3RCxZQUY2RDtJQUc3RCxXQUg2RDtJQUk3RCxPQUo2RDtJQUs3RCxRQUw2RDtJQU03RCxRQU42RDtJQU83RCxxQkFQNkQ7SUFRN0QsV0FSNkQ7SUFTN0QsV0FUNkQ7SUFVN0QsU0FWNkQ7SUFXN0QsY0FYNkQ7SUFZN0QsY0FaNkQ7SUFhN0QsSUFiNkQ7SUFjN0QsT0FkNkQ7Ozs7SUFtQjdELFFBQUEsQ0FBQyxNQUFEO0lBQVMsVUFBVDtJQUFxQixTQUFyQjtJQUFnQyxLQUFoQztJQUF1QyxNQUF2QztJQUErQyxNQUEvQztJQUNBLG1CQURBO0lBQ3FCLFNBRHJCO0lBQ2dDLFNBRGhDO0lBQzJDLE9BRDNDO0lBQ29ELFlBRHBEO0lBQ2tFLFlBRGxFO0lBQ2dGLEVBRGhGO0lBQ29GLEtBRHBGLENBQUEsRUFBQTtBQUVFLFVBQUEsS0FBQTtJQUFBLFVBQUE7SUFBQSxRQUFBO0lBQUE7TUFBQSxLQUFBLEdBQVEsQ0FBQyxvQ0FBRDtJQUF1QyxxQ0FBdkM7TUFDUixJQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBakIsS0FBNkIsUUFBaEM7UUFDRSxLQUFLLENBQUMsSUFBTixDQUFXLDJCQUFYLEVBREY7O01BR0EsTUFBTSxDQUFDLEdBQVAsR0FBYSxJQUFJLEdBQUosQ0FBUSxLQUFSLEVBSmI7OztNQVFBLE1BQU0sQ0FBQyxjQUFQLEdBQXdCLENBQUEsRUFSeEI7TUFVQSxNQUFNLENBQUMsUUFBUCxHQUFrQixRQUFBLENBQUMsSUFBRDtJQUFPLEtBQVAsQ0FBQTtRQUNoQixJQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQTFC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Q0FBdUMsUUFBQSxDQUFBLENBQUE7aUJBQ3JDLE1BQU0sQ0FBQyxlQUFQLENBQUE7UUFEcUMsQ0FBdkM7TUFEc0I7SUFscUIxQixDQW5CNkQ7R0FBL0Q7QUFEQSIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuYW5ndWxhci5tb2R1bGUoJ2lkZW50aWZpQW5ndWxhcicpLmNvbnRyb2xsZXIgJ01haW5Db250cm9sbGVyJywgW1xuICAnJHNjb3BlJ1xuICAnJHJvb3RTY29wZSdcbiAgJyRsb2NhdGlvbidcbiAgJyRodHRwJ1xuICAnJHN0YXRlJ1xuICAnY29uZmlnJyxcbiAgJ2xvY2FsU3RvcmFnZVNlcnZpY2UnXG4gICdjbGlwYm9hcmQnXG4gICckdWliTW9kYWwnXG4gICckd2luZG93J1xuICAnJHN0YXRlUGFyYW1zJ1xuICAnJHRyYW5zaXRpb25zJ1xuICAnJHEnXG4gICdmb2N1cydcblxuICAjJ0F1dGhlbnRpY2F0aW9uJ1xuICAjJ01lbnVzJ1xuICAjJ1BlcnNvbmEnXG4gICgkc2NvcGUsICRyb290U2NvcGUsICRsb2NhdGlvbiwgJGh0dHAsICRzdGF0ZSwgY29uZmlnLFxuICBsb2NhbFN0b3JhZ2VTZXJ2aWNlLCBjbGlwYm9hcmQsICR1aWJNb2RhbCwgJHdpbmRvdywgJHN0YXRlUGFyYW1zLCAkdHJhbnNpdGlvbnMsICRxLCBmb2N1cykgLT4gIyBBdXRoZW50aWNhdGlvbiwgTWVudXMsIFBlcnNvbmFcbiAgICBob3N0cyA9IFsnaHR0cHM6Ly9pZGVudGlmaS5oZXJva3VhcHAuY29tL2d1bicsICdodHRwczovL2lkZW50aWZpMi5oZXJva3VhcHAuY29tL2d1biddXG4gICAgaWYgJHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCAhPSBcImh0dHBzOlwiXG4gICAgICBob3N0cy5wdXNoKCdodHRwOi8vbG9jYWxob3N0Ojg3NjUvZ3VuJylcblxuICAgICRzY29wZS5ndW4gPSBuZXcgR3VuKGhvc3RzKVxuXG4gICAgIyBUT0RPOiBtb3ZlIGV2ZXJ5dGhpbmcgdG8gbWFpbiBjb250cm9sbGVyP1xuICAgICMgc2V0IGF1dGhlbnRpY2F0aW9uXG4gICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uID0ge30gIyBBdXRoZW50aWNhdGlvblxuXG4gICAgJHNjb3BlLmdldElkVXJsID0gKHR5cGUsIHZhbHVlKSAtPlxuICAgICAgaWYgJHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZS5pbmRleE9mKCcuJykgPiAtMSAjIGRpZmZlcmVudGlhdGUgYmV0d2VlbiBsb2NhbGhvc3QgLyBjaHJvbWUgcGx1Z2luIHVyaSBhbmQgRE5TIG5hbWVcbiAgICAgICAgcmV0dXJuICRzdGF0ZS5ocmVmKCdpZGVudGl0aWVzLnNob3cnLCB7dHlwZSwgdmFsdWV9LCB7YWJzb2x1dGU6IHRydWV9KSArICc/c2hhcmUnXG4gICAgICBlbHNlXG4gICAgICAgIHJldHVybiAnaHR0cHM6Ly9pZGVudGkuZmkvJyArICRzdGF0ZS5ocmVmKCdpZGVudGl0aWVzLnNob3cnLCB7dHlwZSwgdmFsdWV9KSArICc/c2hhcmUnXG5cbiAgICAkc2NvcGUuZ2V0SWRLZXkgPSAoaWQpIC0+XG4gICAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGlkLnR5cGUpICsgJzonICsgZW5jb2RlVVJJQ29tcG9uZW50KGlkLnZhbHVlKVxuXG4gICAgJHNjb3BlLmRlZmF1bHRJbmRleEtleUlEID0gJ2I4QnlhWU5CRENNTE5kWnFNZGFzNW9VRkxDeEJmMlZIMy1OalV1bERhVG8uRFZ6SU5FclJWczZtNXR5akF1eDZmY05mbmRhZGNnWlZONWhMU3dZVENMYydcbiAgICAkc2NvcGUucXVlcnkgPSB7fVxuICAgICRzY29wZS5xdWVyeS50ZXJtID0gJydcbiAgICAkc2NvcGUucHJldmlvdXNTZWFyY2hLZXkgPSAnJ1xuICAgICRzY29wZS5pZHMgPVxuICAgICAgbGlzdDogW11cbiAgICAkc2NvcGUubXNncyA9XG4gICAgICBsaXN0OiBbXVxuICAgICAgc2Vlbjoge31cbiAgICAkc2NvcGUucGhvbmVSZWdleCA9IC9eXFwrP1xcZCskL1xuXG4gICAgJHNjb3BlLmlwZnMgPSBuZXcgSXBmcyhcbiAgICAgIGluaXQ6IHRydWVcbiAgICAgIHN0YXJ0OiB0cnVlXG4gICAgICByZXBvOiAnaXBmczctaWRlbnRpZmknXG4gICAgKVxuXG4gICAgJHNjb3BlLmNhcGl0YWxpemVXb3JkcyA9IChzKSAtPlxuICAgICAgaWYgcyBhbmQgcy5sZW5ndGhcbiAgICAgICAgcmV0dXJuIChzLnRyaW0oKS5zcGxpdCgnICcpLm1hcCAod29yZCkgLT4gd29yZFswXS50b1VwcGVyQ2FzZSgpICsgd29yZFsxLi4tMV0udG9Mb3dlckNhc2UoKSkuam9pbiAnICdcbiAgICAgIGVsc2VcbiAgICAgICAgcmV0dXJuIHNcblxuICAgICRzY29wZS5jb3B5VG9DbGlwYm9hcmQgPSAodGV4dCkgLT5cbiAgICAgIGNsaXBib2FyZC5jb3B5VGV4dCB0ZXh0XG5cbiAgICAkc2NvcGUuc2VhcmNoID0gKHF1ZXJ5LCBsaW1pdCkgLT5cbiAgICAgIHJldHVybiB1bmxlc3MgJHNjb3BlLmlkZW50aWZpSW5kZXhcbiAgICAgICRzY29wZS5pZHMuYWN0aXZlS2V5ID0gLTFcbiAgICAgICRzY29wZS5pZHMubGlzdCA9IFtdXG4gICAgICBjb25zb2xlLmxvZyAnc2VhcmNoJ1xuICAgICAgc2VhcmNoS2V5ID0gKHF1ZXJ5IG9yICRzY29wZS5xdWVyeS50ZXJtIG9yICcnKS50b0xvd2VyQ2FzZSgpLnRyaW0oKVxuICAgICAgJHNjb3BlLnNlYXJjaEtleSA9IHNlYXJjaEtleVxuICAgICAgJHNjb3BlLnByZXZpb3VzU2VhcmNoS2V5ID0gc2VhcmNoS2V5XG4gICAgICBsaW1pdCA9IGxpbWl0IG9yIDEwMDBcbiAgICAgIGN1cnNvciA9IGZhbHNlXG4gICAgICBpZiAkc2NvcGUuaWRzLmxpc3QubGVuZ3RoXG4gICAgICAgIGN1cnNvciA9ICRzY29wZS5pZHMubGlzdFskc2NvcGUuaWRzLmxpc3QubGVuZ3RoIC0gMV0uY3Vyc29yXG4gICAgICBzZWVuID0ge31cblxuICAgICAgcmVzdWx0Rm91bmQgPSAoaSkgLT5cbiAgICAgICAgcmV0dXJuIGlmIHNlYXJjaEtleSAhPSAkc2NvcGUuc2VhcmNoS2V5XG4gICAgICAgIGkuZ3VuLm9uIChkYXRhKSAtPlxuICAgICAgICAgIGkuZGF0YSA9IGRhdGFcbiAgICAgICAgICBpLmd1bi5nZXQoJ2xpbmtUbycpLm9uIChsaW5rVG8pIC0+XG4gICAgICAgICAgICByZXR1cm4gaWYgaS5saW5rVG8gb3IgIWxpbmtUb1xuICAgICAgICAgICAgcyA9IGxpbmtUby50eXBlICsgbGlua1RvLnZhbHVlXG4gICAgICAgICAgICByZXR1cm4gaWYgc2VlbltzXVxuICAgICAgICAgICAgc2VlbltzXSA9IHRydWVcbiAgICAgICAgICAgICRzY29wZS5pZHMubGlzdC5wdXNoIGlcbiAgICAgICAgICAgICRzY29wZS4kYXBwbHkgLT5cbiAgICAgICAgICAgICAgaS5saW5rVG8gPSBsaW5rVG9cbiAgICAgICAgJHNjb3BlLnNldElkZW50aXR5TmFtZXMoaSwgdHJ1ZSlcblxuICAgICAgJHNjb3BlLmlkZW50aWZpSW5kZXguc2VhcmNoKHNlYXJjaEtleSwgdW5kZWZpbmVkLCByZXN1bHRGb3VuZCwgbGltaXQpXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UgKHJlc29sdmUpIC0+ICMgVE9ETzogdWliLXR5cGVhaGVhZCBpcyBsaW1pdGVkLCBidXQgc29tZXRoaW5nIGJldHRlciBwbHNcbiAgICAgICAgc2V0VGltZW91dCAtPlxuICAgICAgICAgIHJlc29sdmUoJHNjb3BlLmlkcy5saXN0KVxuICAgICAgICAsIDEwMDBcblxuICAgIHNldEluZGV4ID0gKHJlc3VsdHMpIC0+XG4gICAgICAkc2NvcGUuaWRzLmxpc3QgPSBbXVxuICAgICAgJHNjb3BlLm1zZ3MubGlzdCA9IFtdXG4gICAgICAkc2NvcGUubXNncy5zZWVuID0ge31cbiAgICAgICRzY29wZS5pZGVudGlmaUluZGV4ID0gcmVzdWx0c1xuICAgICAgc2V0VGltZW91dCAoKSAtPlxuICAgICAgICAkc2NvcGUuJGJyb2FkY2FzdCgncnpTbGlkZXJGb3JjZVJlbmRlcicpXG4gICAgICAsIDEwMDBcbiAgICAgIHNldFRpbWVvdXQgKCkgLT5cbiAgICAgICAgJHNjb3BlLiRicm9hZGNhc3QoJ3J6U2xpZGVyRm9yY2VSZW5kZXInKVxuICAgICAgLCAzMDAwICMgOi0tLURcbiAgICAgIGNvbnNvbGUubG9nICdHb3QgaW5kZXgnLCAkc2NvcGUuaWRlbnRpZmlJbmRleFxuICAgICAgJHNjb3BlLnZpZXdwb2ludC5pZGVudGl0eSA9ICRzY29wZS5pZGVudGlmaUluZGV4LmdldCgkc2NvcGUudmlld3BvaW50LnR5cGUsICRzY29wZS52aWV3cG9pbnQudmFsdWUpXG4gICAgICAkc2NvcGUudmlld3BvaW50LmlkZW50aXR5Lmd1bi5nZXQoJ2F0dHJzJykub3BlbiAoYXR0cnMpIC0+XG4gICAgICAgICRzY29wZS52aWV3cG9pbnQuYXR0cnMgPSBhdHRyc1xuICAgICAgICAkc2NvcGUudmlld3BvaW50Lm1vc3RWZXJpZmllZEF0dHJpYnV0ZXMgPSAkd2luZG93LmlkZW50aWZpTGliLklkZW50aXR5LmdldE1vc3RWZXJpZmllZEF0dHJpYnV0ZXMoYXR0cnMpXG5cbiAgICAkc2NvcGUubG9hZERlZmF1bHRJbmRleCA9IC0+XG4gICAgICAkc2NvcGUudmlld3BvaW50ID0ge3R5cGU6ICdrZXlJRCcsIHZhbHVlOiAkc2NvcGUuZGVmYXVsdEluZGV4S2V5SUR9XG4gICAgICBzZXRJbmRleCBuZXcgJHdpbmRvdy5pZGVudGlmaUxpYi5JbmRleCgkc2NvcGUuZ3VuLnVzZXIoJHNjb3BlLmRlZmF1bHRJbmRleEtleUlEKS5nZXQoJ2lkZW50aWZpJyksIHtpcGZzOiAkc2NvcGUuaXBmc30pXG5cbiAgICAkc2NvcGUubG9naW5XaXRoS2V5ID0gKHByaXZhdGVLZXlTZXJpYWxpemVkLCBzZWxmKSAtPlxuICAgICAgJHNjb3BlLmxvZ2dpbmdJbiA9IHRydWVcbiAgICAgICRzY29wZS5wcml2YXRlS2V5ID0gJHdpbmRvdy5pZGVudGlmaUxpYi5LZXkuZnJvbUp3ayhwcml2YXRlS2V5U2VyaWFsaXplZClcbiAgICAgIGxvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0KCdpZGVudGlmaUtleScsIHByaXZhdGVLZXlTZXJpYWxpemVkKVxuICAgICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnVzZXIgPVxuICAgICAgICBpZFR5cGU6ICdrZXlJRCdcbiAgICAgICAgaWRWYWx1ZTogJHdpbmRvdy5pZGVudGlmaUxpYi5LZXkuZ2V0SWQoJHNjb3BlLnByaXZhdGVLZXkpXG4gICAgICAkc2NvcGUuYXV0aGVudGljYXRpb24udXNlci51cmwgPSAkc2NvcGUuZ2V0SWRVcmwgJ2tleUlEJywgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnVzZXIuaWRWYWx1ZVxuICAgICAgJHNjb3BlLmxvZ2luTW9kYWwuY2xvc2UoKSBpZiAkc2NvcGUubG9naW5Nb2RhbFxuICAgICAga2V5SUQgPSAkd2luZG93LmlkZW50aWZpTGliLktleS5nZXRJZCgkc2NvcGUucHJpdmF0ZUtleSlcbiAgICAgICRzY29wZS52aWV3cG9pbnQgPSB7dHlwZTogJ2tleUlEJywgdmFsdWU6IGtleUlEfVxuICAgICAgJHNjb3BlLmlkcy5saXN0ID0gW11cbiAgICAgICRzY29wZS5tc2dzLmxpc3QgPSBbXVxuICAgICAgJHNjb3BlLm1zZ3Muc2VlbiA9IHt9XG4gICAgICAkd2luZG93LmlkZW50aWZpTGliLkluZGV4LmNyZWF0ZSgkc2NvcGUuZ3VuLCAkc2NvcGUucHJpdmF0ZUtleSwge3NlbGYsIGlwZnM6ICRzY29wZS5pcGZzfSkudGhlbiAoaSkgLT5cbiAgICAgICAgc2V0SW5kZXgoaSlcbiAgICAgICAgJHNjb3BlLmxvZ2dpbmdJbiA9IGZhbHNlXG4gICAgICAgICRzY29wZS5hdXRoZW50aWNhdGlvbi5pZGVudGl0eSA9ICRzY29wZS5pZGVudGlmaUluZGV4LmdldCgna2V5SUQnLCBrZXlJRClcbiAgICAgICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLmlkZW50aXR5Lmd1bi5nZXQoJ2F0dHJzJykub3BlbiAodmFsLCBrZXksIG1zZywgZXZlKSAtPlxuICAgICAgICAgIG12YSA9ICR3aW5kb3cuaWRlbnRpZmlMaWIuSWRlbnRpdHkuZ2V0TW9zdFZlcmlmaWVkQXR0cmlidXRlcyh2YWwpXG4gICAgICAgICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLmlkZW50aXR5Lm12YSA9IG12YVxuICAgICAgICAgIGV2ZS5vZmYoKSBpZiBtdmEucHJvZmlsZVBob3RvXG4gICAgICAgICRzY29wZS5hdXRoZW50aWNhdGlvbi5pZGVudGl0eS5ndW4ub24gKGRhdGEpIC0+XG4gICAgICAgICAgaWYgZGF0YS5yZWNlaXZlZFBvc2l0aXZlIGFuZCAkc2NvcGUuYXV0aGVudGljYXRpb24uaWRlbnRpdHkuZGF0YSBhbmQgbm90ICRzY29wZS5hdXRoZW50aWNhdGlvbi5pZGVudGl0eS5kYXRhLnJlY2VpdmVkUG9zaXRpdmVcbiAgICAgICAgICAgIGNvbnNvbGUubG9nICdncmVhdCwgeW91IGdvdCB5b3VyIGZpcnN0IHVwdm90ZSEnXG4gICAgICAgICAgICAjIFRPRE86IG5vdGlmaWNhdGlvblxuICAgICAgICAgICRzY29wZS5hdXRoZW50aWNhdGlvbi5pZGVudGl0eS5kYXRhID0gZGF0YVxuICAgICAgLmNhdGNoIChlKSAtPlxuICAgICAgICBjb25zb2xlLmVycm9yKGUpXG4gICAgICAgICRzY29wZS5sb2dnaW5nSW4gPSBmYWxzZVxuXG4gICAgcHJpdmF0ZUtleSA9IGxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KCdpZGVudGlmaUtleScpXG4gICAgaWYgcHJpdmF0ZUtleVxuICAgICAgJHNjb3BlLmxvZ2luV2l0aEtleShwcml2YXRlS2V5KVxuICAgIGVsc2VcbiAgICAgICRzY29wZS5sb2FkRGVmYXVsdEluZGV4KClcblxuICAgICRzY29wZS51cGRhdGVJcGZzUGVlcnMgPSAoKSAtPlxuICAgICAgJHNjb3BlLmlwZnMuc3dhcm0ucGVlcnMgKGVyciwgcGVlckluZm9zKSAtPlxuICAgICAgICBpZiBlcnJcbiAgICAgICAgICBjb25zb2xlLmVycm9yICdmYWlsZWQgdG8gZmV0Y2ggaXBmcyBwZWVycycsIGVyclxuICAgICAgICBlbHNlXG4gICAgICAgICAgJHNjb3BlLiRhcHBseSAtPlxuICAgICAgICAgICAgJHNjb3BlLmlwZnNQZWVycyA9IHBlZXJJbmZvc1xuXG4gICAgJHNjb3BlLmlwZnMub24gJ3JlYWR5JywgLT5cbiAgICAgICRzY29wZS5pcGZzUmVhZHkgPSB0cnVlXG4gICAgICAkd2luZG93LmlwZnMgPSAkc2NvcGUuaXBmc1xuICAgICAgJHNjb3BlLnVwZGF0ZUlwZnNQZWVycygpXG4gICAgICBzZXRJbnRlcnZhbCAkc2NvcGUudXBkYXRlSXBmc1BlZXJzLCA1MDAwXG5cbiAgICAkc2NvcGUubG9jYWxTZXR0aW5ncyA9IGxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KCdsb2NhbFNldHRpbmdzJykgfHwge31cbiAgICAkc2NvcGUuY2xvc2VQcm9maWxlVXBsb2FkTm90aWZpY2F0aW9uID0gLT5cbiAgICAgICRzY29wZS5sb2NhbFNldHRpbmdzLnByb2ZpbGVVcGxvYWROb3RpZmljYXRpb25DbG9zZWQgPSB0cnVlXG4gICAgICBsb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldCgnbG9jYWxTZXR0aW5ncycsICRzY29wZS5sb2NhbFNldHRpbmdzKVxuXG4gICAgJHNjb3BlLm9wZW5Qcm9maWxlUGhvdG9VcGxvYWRNb2RhbCA9IC0+XG4gICAgICByZXR1cm4gdW5sZXNzICRzY29wZS5hdXRoZW50aWNhdGlvbi5pZGVudGl0eVxuICAgICAgJHNjb3BlLm9wZW5VcGxvYWRNb2RhbCgkc2NvcGUudXBsb2FkUHJvZmlsZVBob3RvLCAnVXBsb2FkIHByb2ZpbGUgcGhvdG8nLCB0cnVlKVxuXG4gICAgJHNjb3BlLnVwbG9hZFByb2ZpbGVQaG90byA9IChibG9iKSAtPlxuICAgICAgJHNjb3BlLnVwbG9hZEZpbGUoYmxvYikudGhlbiAoZmlsZXMpIC0+XG4gICAgICAgIHJlY2lwaWVudCA9XG4gICAgICAgICAgcHJvZmlsZVBob3RvOiAnL2lwZnMvJyArIGZpbGVzWzBdLnBhdGhcbiAgICAgICAgaWYgJHN0YXRlLmlzICdpZGVudGl0aWVzLnNob3cnXG4gICAgICAgICAgcmVjaXBpZW50WyRzdGF0ZVBhcmFtcy50eXBlXSA9ICRzdGF0ZVBhcmFtcy52YWx1ZVxuICAgICAgICBlbHNlXG4gICAgICAgICAgcmVjaXBpZW50LmtleUlEID0gJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnVzZXIuaWRWYWx1ZVxuICAgICAgICAgICRzY29wZS5jbG9zZVByb2ZpbGVVcGxvYWROb3RpZmljYXRpb24oKVxuICAgICAgICAkd2luZG93LmlkZW50aWZpTGliLk1lc3NhZ2UuY3JlYXRlVmVyaWZpY2F0aW9uKHtyZWNpcGllbnR9LCAkc2NvcGUucHJpdmF0ZUtleSkudGhlbiAobSkgLT5cbiAgICAgICAgICAkc2NvcGUuaGlkZVByb2ZpbGVQaG90byA9IHRydWUgIyBUaGVyZSdzIGEgd2VpcmQgYnVnIHdoZXJlIHRoZSBwcm9maWxlIGlkZW50aWNvbiBkb2Vzbid0IHVwZGF0ZVxuICAgICAgICAgICRzY29wZS5pZGVudGlmaUluZGV4LmFkZE1lc3NhZ2UobSkudGhlbiAtPlxuICAgICAgICAgICAgJHNjb3BlLmhpZGVQcm9maWxlUGhvdG8gPSBmYWxzZVxuICAgICAgICAgICAgaWYgISRzdGF0ZS5pcyAnaWRlbnRpdGllcy5zaG93J1xuICAgICAgICAgICAgICAkc3RhdGUuZ28gJ2lkZW50aXRpZXMuc2hvdycsIHsgdHlwZTogJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnVzZXIuaWRUeXBlLCB2YWx1ZTogJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnVzZXIuaWRWYWx1ZSB9XG4gICAgICAgICAgJHNjb3BlLnVwbG9hZE1vZGFsLmNsb3NlKClcblxuICAgICRzY29wZS5zZXRQYWdlVGl0bGUgPSAodGl0bGUpIC0+XG4gICAgICAkcm9vdFNjb3BlLnBhZ2VUaXRsZSA9ICdJZGVudGlmaSdcbiAgICAgIGlmICh0aXRsZSlcbiAgICAgICAgJHJvb3RTY29wZS5wYWdlVGl0bGUgKz0gJyAtICcgKyB0aXRsZVxuXG4gICAgJHNjb3BlLmlwZnNHZXQgPSAodXJpLCBnZXRKc29uKSAtPlxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIChyZXNvbHZlKSAtPlxuICAgICAgICBnbyA9IC0+XG4gICAgICAgICAgJHNjb3BlLmlwZnMuY2F0KHVyaSkudGhlbiAoZmlsZSkgLT5cbiAgICAgICAgICAgIGZpbGUgPSAkc2NvcGUuaXBmcy50eXBlcy5CdWZmZXIoZmlsZSlcbiAgICAgICAgICAgIGlmIGdldEpzb25cbiAgICAgICAgICAgICAgZmlsZSA9IEpTT04ucGFyc2UoZmlsZS50b1N0cmluZygpKVxuICAgICAgICAgICAgcmVzb2x2ZSBmaWxlXG5cbiAgICAgICAgaWYgJHNjb3BlLmlwZnNSZWFkeVxuICAgICAgICAgIGdvKClcbiAgICAgICAgZWxzZVxuICAgICAgICAgICRzY29wZS5pcGZzLm9uICdyZWFkeScsIC0+XG4gICAgICAgICAgICBnbygpXG5cbiAgICAkc2NvcGUuJHdhdGNoICduZXdNZXNzYWdlLnJhdGluZycsIChyYXRpbmcpIC0+XG4gICAgICBpZiByYXRpbmcgPiAwXG4gICAgICAgIGFscGhhID0gKHJhdGluZyAtIDAuNSkgLyAzIC8gMS4yNSArIDAuMlxuICAgICAgICAkc2NvcGUubmV3TWVzc2FnZS5zdHlsZSA9IHsnYm9yZGVyLWNvbG9yJzogJ3JnYmEoMjIzLDI0MCwyMTYsJyArIGFscGhhICsgJyknfVxuICAgICAgZWxzZSBpZiByYXRpbmcgPCAwXG4gICAgICAgIGFscGhhID0gKHJhdGluZyArIDAuNSkgLyAtMyAvIDEuMjUgKyAwLjJcbiAgICAgICAgJHNjb3BlLm5ld01lc3NhZ2Uuc3R5bGUgPSB7J2JvcmRlci1jb2xvcic6ICdyZ2JhKDI0MiwyMjIsMjIyLCcgKyBhbHBoYSArICcpJ31cbiAgICAgIGVsc2VcbiAgICAgICAgJHNjb3BlLm5ld01lc3NhZ2Uuc3R5bGUgPSB7J2JvcmRlci1jb2xvcic6ICcjZmNmOGUzJ31cblxuICAgICRzY29wZS5yZXNldE1zZyA9IC0+XG4gICAgICAkc2NvcGUubmV3TWVzc2FnZSA9XG4gICAgICAgIHJhdGluZzogMVxuICAgICAgICBjb21tZW50OiAnJ1xuICAgICAgJHNjb3BlLm5ld1ZlcmlmaWNhdGlvbiA9XG4gICAgICAgIHR5cGU6ICcnXG4gICAgICAgIHZhbHVlOiAnJ1xuICAgICRzY29wZS5yZXNldE1zZygpXG5cbiAgICAjIENyZWF0ZSBuZXcgTWVzc2FnZVxuICAgICRzY29wZS5jcmVhdGVNZXNzYWdlID0gKGV2ZW50LCBwYXJhbXMsIHZlcmlmaWVkQXR0cikgLT5cbiAgICAgICRzY29wZS5hZGRpbmdNZXNzYWdlID0gdHJ1ZVxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCkgaWYgZXZlbnRcbiAgICAgICMgQ3JlYXRlIG5ldyBNZXNzYWdlIG9iamVjdFxuICAgICAgbWVzc2FnZSA9IG51bGxcbiAgICAgIHBhcmFtcy5yZWNpcGllbnQgPSBwYXJhbXMucmVjaXBpZW50IHx8IHt9XG4gICAgICBpZiAkc3RhdGUuaXMgJ2lkZW50aXRpZXMuc2hvdydcbiAgICAgICAgaWYgdmVyaWZpZWRBdHRyIGFuZCAkc3RhdGVQYXJhbXMudHlwZSA9PSB2ZXJpZmllZEF0dHIudHlwZVxuICAgICAgICAgIHBhcmFtcy5yZWNpcGllbnRbJHN0YXRlUGFyYW1zLnR5cGVdID0gWyRzdGF0ZVBhcmFtcy52YWx1ZSwgdmVyaWZpZWRBdHRyLnZhbHVlXVxuICAgICAgICBlbHNlXG4gICAgICAgICAgcGFyYW1zLnJlY2lwaWVudFskc3RhdGVQYXJhbXMudHlwZV0gPSAkc3RhdGVQYXJhbXMudmFsdWVcbiAgICAgICAgICBwYXJhbXMucmVjaXBpZW50W3ZlcmlmaWVkQXR0ci50eXBlXSA9IHZlcmlmaWVkQXR0ci52YWx1ZSBpZiB2ZXJpZmllZEF0dHJcbiAgICAgIGVsc2UgdW5sZXNzICRzdGF0ZS5pcyAnaWRlbnRpdGllcy5jcmVhdGUnXG4gICAgICAgIHBhcmFtcy5yZWNpcGllbnQua2V5SUQgPSAkc2NvcGUuYXV0aGVudGljYXRpb24udXNlci5pZFZhbHVlXG4gICAgICBpZiBwYXJhbXMudHlwZSA9PSAncmF0aW5nJ1xuICAgICAgICBwYXJhbXMubWF4UmF0aW5nIHw9IDNcbiAgICAgICAgcGFyYW1zLm1pblJhdGluZyB8PSAtM1xuICAgICAgICBtZXNzYWdlID0gJHdpbmRvdy5pZGVudGlmaUxpYi5NZXNzYWdlLmNyZWF0ZVJhdGluZyhwYXJhbXMsICRzY29wZS5wcml2YXRlS2V5KVxuICAgICAgZWxzZSBpZiBwYXJhbXMudHlwZSA9PSAndmVyaWZpY2F0aW9uJ1xuICAgICAgICBtZXNzYWdlID0gJHdpbmRvdy5pZGVudGlmaUxpYi5NZXNzYWdlLmNyZWF0ZVZlcmlmaWNhdGlvbihwYXJhbXMsICRzY29wZS5wcml2YXRlS2V5KVxuICAgICAgZWxzZVxuICAgICAgICBtZXNzYWdlID0gJHdpbmRvdy5pZGVudGlmaUxpYi5NZXNzYWdlLmNyZWF0ZShwYXJhbXMsICRzY29wZS5wcml2YXRlS2V5KVxuICAgICAgb3B0aW9ucyA9IHt9XG5cbiAgICAgIG1lc3NhZ2UudGhlbiAobSkgLT5cbiAgICAgICAgY29uc29sZS5sb2cgbVxuICAgICAgICAkc2NvcGUuaWRlbnRpZmlJbmRleC5hZGRNZXNzYWdlKG0pXG4gICAgICAgICRzY29wZS5tc2dzLnNlZW5bbS5nZXRIYXNoKCldID0gdHJ1ZVxuICAgICAgICAkc2NvcGUucHJvY2Vzc01lc3NhZ2VzKFttXSlcbiAgICAgICAgJHNjb3BlLm1zZ3MubGlzdC5wdXNoKG0pXG4gICAgICAudGhlbiAtPlxuICAgICAgICBpZiAkc2NvcGUuZmlsdGVycy50eXBlIG5vdCBpbiBbcGFyYW1zLnR5cGUsIG51bGxdXG4gICAgICAgICAgJHNjb3BlLmZpbHRlcnMudHlwZSA9IHBhcmFtcy50eXBlXG4gICAgICAgICRzY29wZS5yZXNldE1zZygpXG4gICAgICAgICRzY29wZS5hZGRpbmdNZXNzYWdlID0gZmFsc2VcbiAgICAgIC5jYXRjaCAoZSkgLT5cbiAgICAgICAgY29uc29sZS5lcnJvcihlKVxuICAgICAgICAkc2NvcGUuZXJyb3IgPSBlXG4gICAgICAgICRzY29wZS5hZGRpbmdNZXNzYWdlID0gZmFsc2VcblxuICAgICRzY29wZS5hZGRBdHRyaWJ1dGUgPSAtPlxuICAgICAgJGxvY2F0aW9uLnBhdGggJyMvaWRlbnRpdGllcy9jcmVhdGUvJyArICRzY29wZS5xdWVyeS50ZXJtXG5cbiAgICAkc2NvcGUubG9naW4gPSAtPlxuICAgICAgJHNjb3BlLmZpbHRlcnMubWF4RGlzdGFuY2UgPSAtMSAjIGJlY2F1c2UgdGhlIHVzZXIgZG9lc24ndCBoYXZlIGEgdHJ1c3QgaW5kZXggeWV0XG5cbiAgICAkc2NvcGUub3BlbkxvZ2luTW9kYWwgPSAtPlxuICAgICAgJHNjb3BlLmxvZ2luTW9kYWwgPSAkdWliTW9kYWwub3BlbihcbiAgICAgICAgYW5pbWF0aW9uOiAkc2NvcGUuYW5pbWF0aW9uc0VuYWJsZWRcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbWFpbi9sb2dpbi5tb2RhbC5odG1sJ1xuICAgICAgICBzaXplOiAnbGcnXG4gICAgICAgIHNjb3BlOiAkc2NvcGVcbiAgICAgIClcbiAgICAgICRzY29wZS5sb2dpbk1vZGFsLnJlc3VsdC50aGVuICgtPiksICgtPikgIyBhdm9pZCBiYWNrZHJvcCByZWplY3Rpb24gY29uc29sZSBlcnJvclxuICAgICAgJHNjb3BlLmxvZ2luTW9kYWwucmVuZGVyZWQudGhlbiAtPlxuICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKVxuICAgICAgICBmb2N1cygnbmV3VXNlcicpXG4gICAgICAkdHJhbnNpdGlvbnMub25TdGFydCB7fSwgLT5cbiAgICAgICAgJHNjb3BlLmxvZ2luTW9kYWwuY2xvc2UoKVxuXG4gICAgJHNjb3BlLm9wZW5VcGxvYWRNb2RhbCA9IChjYWxsYmFjaywgbW9kYWxCdXR0b25UZXh0LCBzcXVhcmlmeSkgLT5cbiAgICAgICRzY29wZS51cGxvYWRNb2RhbENhbGxiYWNrID0gY2FsbGJhY2tcbiAgICAgICRzY29wZS5tb2RhbEJ1dHRvblRleHQgPSBtb2RhbEJ1dHRvblRleHQgb3IgJ1VwbG9hZCdcbiAgICAgICRzY29wZS5zcXVhcmlmeSA9IHNxdWFyaWZ5XG4gICAgICAkc2NvcGUudXBsb2FkTW9kYWwgPSAkdWliTW9kYWwub3BlbihcbiAgICAgICAgYW5pbWF0aW9uOiAkc2NvcGUuYW5pbWF0aW9uc0VuYWJsZWRcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvaWRlbnRpdGllcy91cGxvYWQubW9kYWwuaHRtbCdcbiAgICAgICAgc2l6ZTogJ2xnJ1xuICAgICAgICBzY29wZTogJHNjb3BlXG4gICAgICApXG4gICAgICAkc2NvcGUudXBsb2FkTW9kYWwucmVzdWx0LnRoZW4gKC0+KSwgKC0+KSAjIGF2b2lkIGJhY2tkcm9wIHJlamVjdGlvbiBjb25zb2xlIGVycm9yXG4gICAgICAkc2NvcGUudXBsb2FkTW9kYWwucmVuZGVyZWQudGhlbiAtPlxuICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKVxuICAgICAgJHRyYW5zaXRpb25zLm9uU3RhcnQge30sIC0+XG4gICAgICAgICRzY29wZS51cGxvYWRNb2RhbC5jbG9zZSgpXG5cbiAgICAkdHJhbnNpdGlvbnMub25TdGFydCB7fSwgLT5cbiAgICAgICRzY29wZS5maWx0ZXJzLnR5cGUgPSBudWxsXG5cbiAgICAkc2NvcGUubXNncy5saXN0ID0gW11cbiAgICAkc2NvcGUubXNncy5zZWVuID0ge31cbiAgICAkc2NvcGUuZmlsdGVyZWRNc2dzID0gW11cbiAgICAkc2NvcGUubG9hZE1zZ3MgPSAoY3Vyc29yKSAtPlxuICAgICAgbGltaXQgPSAxMDAwXG4gICAgICBpZiBjdXJzb3IgPT0gdW5kZWZpbmVkIGFuZCAkc2NvcGUubXNncy5saXN0Lmxlbmd0aFxuICAgICAgICBjdXJzb3IgPSAkc2NvcGUubXNncy5saXN0WyRzY29wZS5tc2dzLmxpc3QubGVuZ3RoIC0gMV0uY3Vyc29yXG4gICAgICBmb3VuZCA9IDBcbiAgICAgICRzY29wZS5sb2FkaW5nTXNncyA9IHRydWVcbiAgICAgIGZpbHRlciA9IGZhbHNlXG4gICAgICAjIyNcbiAgICAgIGlmICRzY29wZS5maWx0ZXJzLnR5cGUgPT0gbnVsbFxuICAgICAgICBmaWx0ZXIgPSAobSkgLT5cbiAgICAgICAgICByID0gbS5zaWduZWREYXRhLnR5cGUgbm90IGluIFsndmVyaWZpY2F0aW9uJywgJ3VudmVyaWZpY2F0aW9uJ11cbiAgICAgICAgICBjb25zb2xlLmxvZyAnZmlsdGVyaW4nLCByXG4gICAgICAgICAgcmV0dXJuIHJcbiAgICAgIGVsc2VcbiAgICAgICAgdCA9ICRzY29wZS5maWx0ZXJzLnR5cGUuc3BsaXQoJzonKVswXVxuICAgICAgICBmaWx0ZXIgPSAobSkgLT5cbiAgICAgICAgICByID0gbS5zaWduZWREYXRhLnR5cGUgPT0gdFxuICAgICAgICAgIGNvbnNvbGUubG9nICdmaWx0ZXJpbicsIHJcbiAgICAgICAgICByZXR1cm4gclxuICAgICAgIyMjXG4gICAgICByZXN1bHRGb3VuZCA9IChtc2cpIC0+XG4gICAgICAgIGNvbnNvbGUubG9nICdnb3QgbXNnJywgbXNnXG4gICAgICAgIGZvdW5kICs9IDFcbiAgICAgICAgIyAkc2NvcGUubG9hZGluZ01zZ3MgPSBmYWxzZSBpZiBmb3VuZCA+PSBsaW1pdFxuICAgICAgICByZXR1cm4gaWYgJHNjb3BlLm1zZ3Muc2Vlblttc2cuZ2V0SGFzaCgpXVxuICAgICAgICAkc2NvcGUubXNncy5zZWVuW21zZy5nZXRIYXNoKCldID0gdHJ1ZVxuICAgICAgICAkc2NvcGUucHJvY2Vzc01lc3NhZ2VzIFttc2ddXG4gICAgICAgICRzY29wZS4kYXBwbHkgLT5cbiAgICAgICAgICAkc2NvcGUubXNncy5saXN0LnB1c2ggbXNnXG4gICAgICAkc2NvcGUuaWRlbnRpZmlJbmRleC5nZXRNZXNzYWdlc0J5VGltZXN0YW1wKHJlc3VsdEZvdW5kLCBsaW1pdClcblxuICAgICRzY29wZS4kd2F0Y2ggJ2lkZW50aWZpSW5kZXgnLCAtPlxuICAgICAgcmV0dXJuIHVubGVzcyAkc2NvcGUuaWRlbnRpZmlJbmRleFxuICAgICAgJHNjb3BlLmxvYWRNc2dzKClcbiAgICAgICRzY29wZS5zZWFyY2goKVxuXG4gICAgJHNjb3BlLnVwbG9hZEZpbGUgPSAoYmxvYikgLT5cbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSAocmVzb2x2ZSwgcmVqZWN0KSAtPlxuICAgICAgICBjb25zb2xlLmxvZyAndXBsb2FkaW5nJywgYmxvYlxuICAgICAgICBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgICAgICBmaWxlUmVhZGVyLm9ubG9hZCA9IChldmVudCkgLT5cbiAgICAgICAgICBidWZmZXIgPSAkc2NvcGUuaXBmcy50eXBlcy5CdWZmZXIuZnJvbShldmVudC50YXJnZXQucmVzdWx0KVxuICAgICAgICAgIGNvbnNvbGUubG9nICdidWZmZXInLCBidWZmZXJcbiAgICAgICAgICAkc2NvcGUuaXBmcy5hZGQgYnVmZmVyLCAoZXJyLCBmaWxlcykgLT5cbiAgICAgICAgICAgIGlmIGVyclxuICAgICAgICAgICAgICByZWplY3QoJ2FkZGluZyB0byBpcGZzIGZhaWxlZCcsIGVycilcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgcmVzb2x2ZShmaWxlcylcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cgJ2RvbmU6JywgZXJyLCBmaWxlc1xuICAgICAgICBmaWxlUmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGJsb2IpXG5cbiAgICAkc2NvcGUuY3JlYXRlVXNlciA9IChuYW1lKSAtPlxuICAgICAgcmV0dXJuIGlmIG5hbWUuaW5kZXhPZigneycpICE9IC0xIG9yIG5hbWUuaW5kZXhPZignfScpICE9IC0xICMgcHJldmVudCBhY2NpZGVudGFsIHByaXZhdGUga2V5IHBhc3RlXG4gICAgICBuYW1lID0gbmFtZS50cmltKClcbiAgICAgICRzY29wZS5jcmVhdGluZ1VzZXIgPSB0cnVlXG4gICAgICBzZWxmID0ge25hbWV9XG4gICAgICAkd2luZG93LmlkZW50aWZpTGliLktleS5nZW5lcmF0ZSgpXG4gICAgICAudGhlbiAoa2V5KSAtPlxuICAgICAgICAkc2NvcGUucHJpdmF0ZUtleSA9IGtleVxuICAgICAgICAkc2NvcGUucHJpdmF0ZUtleVNlcmlhbGl6ZWQgPSAkd2luZG93LmlkZW50aWZpTGliLktleS50b0p3aygkc2NvcGUucHJpdmF0ZUtleSlcbiAgICAgICAgc2VsZi5rZXlJRCA9ICR3aW5kb3cuaWRlbnRpZmlMaWIuS2V5LmdldElkKCRzY29wZS5wcml2YXRlS2V5KVxuICAgICAgICAkc2NvcGUubG9naW5XaXRoS2V5KCRzY29wZS5wcml2YXRlS2V5U2VyaWFsaXplZCwgc2VsZilcbiAgICAgIC50aGVuIChtc2cpIC0+XG4gICAgICAgICRzY29wZS5jcmVhdGluZ1VzZXIgPSBmYWxzZVxuICAgICAgLmNhdGNoIChlKSAtPlxuICAgICAgICBjb25zb2xlLmVycm9yKCdmYWlsZWQgdG8gY3JlYXRlIHVzZXI6JywgZSlcbiAgICAgICAgJHNjb3BlLmNyZWF0aW5nVXNlciA9IGZhbHNlXG5cbiAgICAkc2NvcGUuZ2VuZXJhdGVLZXkgPSAtPlxuICAgICAgJHdpbmRvdy5pZGVudGlmaUxpYi5LZXkuZ2VuZXJhdGUoKS50aGVuIChrZXkpIC0+XG4gICAgICAgICRzY29wZS4kYXBwbHkgLT5cbiAgICAgICAgICAkc2NvcGUucHJpdmF0ZUtleSA9IGtleVxuICAgICAgICAgIGNvbnNvbGUubG9nICRzY29wZS5wcml2YXRlS2V5XG4gICAgICAgICAgJHNjb3BlLnByaXZhdGVLZXlTZXJpYWxpemVkID0gJHdpbmRvdy5pZGVudGlmaUxpYi5LZXkudG9Kd2soJHNjb3BlLnByaXZhdGVLZXkpXG5cbiAgICAkc2NvcGUuZG93bmxvYWRUZXh0ID0gKHRleHQpIC0+XG4gICAgICBoaWRkZW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgICBoaWRkZW5FbGVtZW50LmhyZWYgPSAnZGF0YTp0ZXh0L2NzdjtjaGFyc2V0PXV0Zi04LCcgKyBlbmNvZGVVUkkodGV4dClcbiAgICAgIGhpZGRlbkVsZW1lbnQudGFyZ2V0ID0gJ19ibGFuaydcbiAgICAgIGhpZGRlbkVsZW1lbnQuZG93bmxvYWQgPSAnaWRlbnRpZmlfcHJpdmF0ZV9rZXkudHh0J1xuICAgICAgaGlkZGVuRWxlbWVudC5jbGljaygpXG5cbiAgICAkc2NvcGUub3BlbkxvZ291dE1vZGFsID0gLT5cbiAgICAgICRzY29wZS5sb2dvdXRNb2RhbCA9ICR1aWJNb2RhbC5vcGVuKFxuICAgICAgICBhbmltYXRpb246ICRzY29wZS5hbmltYXRpb25zRW5hYmxlZFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9tYWluL2xvZ291dC5tb2RhbC5odG1sJ1xuICAgICAgICBzaXplOiAnbGcnXG4gICAgICAgIHNjb3BlOiAkc2NvcGVcbiAgICAgIClcbiAgICAgICRzY29wZS5sb2dvdXRNb2RhbC5yZXN1bHQudGhlbiAoLT4pLCAoLT4pICMgYXZvaWQgYmFja2Ryb3AgcmVqZWN0aW9uIGNvbnNvbGUgZXJyb3JcbiAgICAgICRzY29wZS5sb2dvdXRNb2RhbC5yZW5kZXJlZC50aGVuIC0+XG4gICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpXG4gICAgICAkdHJhbnNpdGlvbnMub25TdGFydCB7fSwgLT5cbiAgICAgICAgJHNjb3BlLmxvZ291dE1vZGFsLmNsb3NlKClcblxuICAgICRzY29wZS5jbG9zZUxvZ291dE1vZGFsID0gLT5cbiAgICAgICRzY29wZS5sb2dvdXRNb2RhbC5jbG9zZSgpXG5cbiAgICAkc2NvcGUubG9nb3V0ID0gLT5cbiAgICAgICRzY29wZS5maWx0ZXJzLm1heERpc3RhbmNlID0gMFxuICAgICAgJHNjb3BlLnByaXZhdGVLZXlTZXJpYWxpemVkID0gJydcbiAgICAgICRzY29wZS5hdXRoZW50aWNhdGlvbiA9IHt9XG4gICAgICBsb2NhbFN0b3JhZ2VTZXJ2aWNlLmNsZWFyQWxsKClcbiAgICAgICRzdGF0ZS5nbygnaWRlbnRpdGllcy5saXN0JylcbiAgICAgICRzY29wZS5wcml2YXRlS2V5ID0gbnVsbFxuICAgICAgJHNjb3BlLnB1YmxpY0tleSA9IG51bGxcbiAgICAgICRzY29wZS5sb2dvdXRNb2RhbC5jbG9zZSgpXG4gICAgICAkc2NvcGUubG9hZERlZmF1bHRJbmRleCgpXG4gICAgICAkc2NvcGUubG9jYWxTZXR0aW5ncyA9IHt9XG5cbiAgICAkc2NvcGUubXNnRmlsdGVyID0gKG1zZywgaW5kZXgsIGFycmF5KSAtPlxuICAgICAgZGF0YSA9IG1zZy5zaWduZWREYXRhXG4gICAgICBpZiAkc2NvcGUuZmlsdGVycy50eXBlXG4gICAgICAgIGlmICRzY29wZS5maWx0ZXJzLnR5cGUubWF0Y2ggL15yYXRpbmcvXG4gICAgICAgICAgaWYgZGF0YS50eXBlICE9ICdyYXRpbmcnXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICBuZXV0cmFsUmF0aW5nID0gKGRhdGEubWF4UmF0aW5nICsgZGF0YS5taW5SYXRpbmcpIC8gMlxuICAgICAgICAgIGlmICRzY29wZS5maWx0ZXJzLnR5cGUgPT0gJ3JhdGluZzpwb3NpdGl2ZScgYW5kIGRhdGEucmF0aW5nIDw9IG5ldXRyYWxSYXRpbmdcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgIGVsc2UgaWYgJHNjb3BlLmZpbHRlcnMudHlwZSA9PSAncmF0aW5nOm5lZ2F0aXZlJyBhbmQgZGF0YS5yYXRpbmcgPj0gbmV1dHJhbFJhdGluZ1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgZWxzZSBpZiAkc2NvcGUuZmlsdGVycy50eXBlID09ICdyYXRpbmc6bmV1dHJhbCcgYW5kIGRhdGEucmF0aW5nICE9IG5ldXRyYWxSYXRpbmdcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICBlbHNlIGlmIGRhdGEudHlwZSAhPSAkc2NvcGUuZmlsdGVycy50eXBlXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICBlbHNlXG4gICAgICAgIGlmIGRhdGEudHlwZSBpbiBbJ3ZlcmlmaWNhdGlvbicsICd1bnZlcmlmaWNhdGlvbiddXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICBpZiAkc2NvcGUuZmlsdGVycy5tYXhEaXN0YW5jZSA+IC0xXG4gICAgICAgIGlmIHR5cGVvZiBtc2cuYXV0aG9yVHJ1c3REaXN0YW5jZSAhPSAnbnVtYmVyJ1xuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICBpZiAkc2NvcGUuZmlsdGVycy5tYXhEaXN0YW5jZSA+IDAgYW5kIG1zZy5hdXRob3JUcnVzdERpc3RhbmNlID4gJHNjb3BlLmZpbHRlcnMubWF4RGlzdGFuY2VcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgaWYgJHNjb3BlLmZpbHRlcnMubWF4RGlzdGFuY2UgPT0gMCBhbmQgbXNnLmF1dGhvclRydXN0RGlzdGFuY2UgPT0gOTlcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIHJldHVybiB0cnVlXG5cbiAgICAkc2NvcGUucmVtb3ZlRm9jdXMgPSAoZXZlbnQpIC0+XG4gICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmJsdXIoKVxuXG4gICAgJHNjb3BlLnNldE1zZ1Jhd0RhdGEgPSAobXNnKSAtPlxuICAgICAgc2hvd1Jhd0RhdGEgPVxuICAgICAgICBoYXNoOiBtc2cuaGFzaFxuICAgICAgICBkYXRhOiBtc2cuc2lnbmVkRGF0YVxuICAgICAgICBwcmlvcml0eTogbXNnLnByaW9yaXR5XG4gICAgICAgIGp3czogbXNnLmp3c1xuICAgICAgbXNnLnN0ckRhdGEgPSBKU09OLnN0cmluZ2lmeShzaG93UmF3RGF0YSwgdW5kZWZpbmVkLCAyKVxuXG4gICAgJHNjb3BlLm9wZW5NZXNzYWdlID0gKGV2ZW50LCBtZXNzYWdlLCBzaXplKSAtPlxuICAgICAgdCA9IGV2ZW50LnRhcmdldFxuICAgICAgcmV0dXJuIGlmIGFuZ3VsYXIuZWxlbWVudCh0KS5jbG9zZXN0KCdhJykubGVuZ3RoXG4gICAgICAkc2NvcGUuc2V0TXNnUmF3RGF0YShtZXNzYWdlKVxuICAgICAgJHNjb3BlLm1lc3NhZ2UgPSBtZXNzYWdlXG4gICAgICAjIFRPRE86IGNoZWNrIHNpZ1xuICAgICAgJHNjb3BlLm1lc3NhZ2UucmVjaXBpZW50ID0gJHNjb3BlLm1lc3NhZ2UuZ2V0UmVjaXBpZW50KCRzY29wZS5pZGVudGlmaUluZGV4KVxuICAgICAgJHNjb3BlLm1lc3NhZ2UucmVjaXBpZW50Lmd1bi5nZXQoJ2F0dHJzJykub3BlbiAoZCkgLT5cbiAgICAgICAgbXZhID0gJHdpbmRvdy5pZGVudGlmaUxpYi5JZGVudGl0eS5nZXRNb3N0VmVyaWZpZWRBdHRyaWJ1dGVzKGQpXG4gICAgICAgIGlmIG12YS5uYW1lXG4gICAgICAgICAgJHNjb3BlLiRhcHBseSAtPiAkc2NvcGUubWVzc2FnZS5yZWNpcGllbnRfbmFtZSA9IG12YS5uYW1lLmF0dHJpYnV0ZS52YWx1ZVxuICAgICAgICBlbHNlIGlmIG12YS5uaWNrbmFtZVxuICAgICAgICAgICRzY29wZS4kYXBwbHkgLT4gJHNjb3BlLm1lc3NhZ2UucmVjaXBpZW50X25hbWUgPSBtdmEubmlja25hbWUuYXR0cmlidXRlLnZhbHVlXG4gICAgICAkc2NvcGUubWVzc2FnZS5zaWduZXJLZXlJRCA9ICRzY29wZS5tZXNzYWdlLmdldFNpZ25lcktleUlEKClcbiAgICAgICRzY29wZS5tZXNzYWdlLnZlcmlmaWVkQnkgPSAkc2NvcGUuaWRlbnRpZmlJbmRleC5nZXQoJ2tleUlEJywgJHNjb3BlLm1lc3NhZ2Uuc2lnbmVyS2V5SUQpXG4gICAgICAkc2NvcGUubWVzc2FnZS52ZXJpZmllZEJ5QXR0ciA9IG5ldyAkd2luZG93LmlkZW50aWZpTGliLkF0dHJpYnV0ZSgna2V5SUQnLCAkc2NvcGUubWVzc2FnZS5zaWduZXJLZXlJRClcbiAgICAgICRzY29wZS5tZXNzYWdlTW9kYWwgPSAkdWliTW9kYWwub3BlbihcbiAgICAgICAgYW5pbWF0aW9uOiAkc2NvcGUuYW5pbWF0aW9uc0VuYWJsZWRcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbWVzc2FnZXMvc2hvdy5tb2RhbC5odG1sJ1xuICAgICAgICBzaXplOiBzaXplXG4gICAgICAgIHNjb3BlOiAkc2NvcGVcbiAgICAgIClcbiAgICAgICRzY29wZS5tZXNzYWdlTW9kYWwucmVzdWx0LnRoZW4gKC0+KSwgKC0+KSAjIGF2b2lkIGJhY2tkcm9wIHJlamVjdGlvbiBjb25zb2xlIGVycm9yXG4gICAgICAkc2NvcGUubWVzc2FnZU1vZGFsLnJlbmRlcmVkLnRoZW4gLT5cbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKClcbiAgICAgICR0cmFuc2l0aW9ucy5vblN0YXJ0IHt9LCAtPlxuICAgICAgICAkc2NvcGUubWVzc2FnZU1vZGFsLmNsb3NlKClcblxuICAgICRzY29wZS5maWx0ZXJzID0gJHNjb3BlLmZpbHRlcnMgb3IgY29uZmlnLmRlZmF1bHRGaWx0ZXJzXG5cbiAgICAkc2NvcGUuaXNDb2xsYXBzZWQgPSBmYWxzZVxuICAgICMgJHNjb3BlLm1lbnUgPSBNZW51cy5nZXRNZW51KCd0b3BiYXInKVxuXG4gICAgJHNjb3BlLnRvZ2dsZUNvbGxhcHNpYmxlTWVudSA9IC0+XG4gICAgICAkc2NvcGUuaXNDb2xsYXBzZWQgPSAhJHNjb3BlLmlzQ29sbGFwc2VkXG5cbiAgICAkc2NvcGUucHJvY2Vzc01lc3NhZ2VzID0gKG1lc3NhZ2VzLCBtc2dPcHRpb25zKSAtPlxuICAgICAgcHJvY2Vzc01lc3NhZ2UgPSAobXNnKSAtPlxuICAgICAgICBtc2cuYXV0aG9yID0gbXNnLmdldEF1dGhvcigkc2NvcGUuaWRlbnRpZmlJbmRleClcbiAgICAgICAgbXNnLmF1dGhvci5ndW4uZ2V0KCd0cnVzdERpc3RhbmNlJykub24gKGQpIC0+IG1zZy5hdXRob3JUcnVzdERpc3RhbmNlID0gZFxuICAgICAgICBtc2cuYXV0aG9yLmd1bi5nZXQoJ2F0dHJzJykub3BlbiAoZCkgLT5cbiAgICAgICAgICBtdmEgPSAkd2luZG93LmlkZW50aWZpTGliLklkZW50aXR5LmdldE1vc3RWZXJpZmllZEF0dHJpYnV0ZXMoZClcbiAgICAgICAgICBpZiBtdmEubmFtZVxuICAgICAgICAgICAgJHNjb3BlLiRhcHBseSAtPiBtc2cuYXV0aG9yX25hbWUgPSBtdmEubmFtZS5hdHRyaWJ1dGUudmFsdWVcbiAgICAgICAgICBlbHNlIGlmIG12YS5uaWNrbmFtZVxuICAgICAgICAgICAgJHNjb3BlLiRhcHBseSAtPiBtc2cuYXV0aG9yX25hbWUgPSBtdmEubmlja25hbWUuYXR0cmlidXRlLnZhbHVlXG4gICAgICAgIG1zZy5yZWNpcGllbnQgPSBtc2cuZ2V0UmVjaXBpZW50KCRzY29wZS5pZGVudGlmaUluZGV4KVxuICAgICAgICBtc2cucmVjaXBpZW50Lmd1bi5nZXQoJ2F0dHJzJykub3BlbiAoZCkgLT5cbiAgICAgICAgICBtdmEgPSAkd2luZG93LmlkZW50aWZpTGliLklkZW50aXR5LmdldE1vc3RWZXJpZmllZEF0dHJpYnV0ZXMoZClcbiAgICAgICAgICBpZiBtdmEubmFtZVxuICAgICAgICAgICAgJHNjb3BlLiRhcHBseSAtPiBtc2cucmVjaXBpZW50X25hbWUgPSBtdmEubmFtZS5hdHRyaWJ1dGUudmFsdWVcbiAgICAgICAgICBlbHNlIGlmIG12YS5uaWNrbmFtZVxuICAgICAgICAgICAgJHNjb3BlLiRhcHBseSAtPiBtc2cucmVjaXBpZW50X25hbWUgPSBtdmEubmlja25hbWUuYXR0cmlidXRlLnZhbHVlXG4gICAgICAgICRzY29wZS4kYXBwbHkgLT5cbiAgICAgICAgICAjIFRPRE86IG1ha2Ugc3VyZSBtZXNzYWdlIHNpZ25hdHVyZSBpcyBjaGVja2VkXG4gICAgICAgICAgaSA9IHVuZGVmaW5lZFxuICAgICAgICAgIGkgPSAwXG4gICAgICAgICAgc21hbGxlc3RJbmRleCA9IDEwMDBcbiAgICAgICAgICBtc2cuYXV0aG9yQXJyYXkgPSBtc2cuZ2V0QXV0aG9yQXJyYXkoKVxuICAgICAgICAgIGZvciBhIGluIG1zZy5hdXRob3JBcnJheVxuICAgICAgICAgICAgbXNnLmxpbmtUb0F1dGhvciA9IGEgdW5sZXNzIG1zZy5saW5rVG9BdXRob3JcbiAgICAgICAgICAgIGluZGV4ID0gT2JqZWN0LmtleXMoJHdpbmRvdy5pZGVudGlmaUxpYi5BdHRyaWJ1dGUuZ2V0VW5pcXVlSWRWYWxpZGF0b3JzKCkpLmluZGV4T2YoYS50eXBlKVxuICAgICAgICAgICAgaWYgaW5kZXggPiAtMSBhbmQgaW5kZXggPCBzbWFsbGVzdEluZGV4XG4gICAgICAgICAgICAgIHNtYWxsZXN0SW5kZXggPSBpbmRleFxuICAgICAgICAgICAgICBtc2cubGlua1RvQXV0aG9yID0gYVxuICAgICAgICAgICAgZWxzZSBpZiAhbXNnLmF1dGhvcl9uYW1lIGFuZCBhLnR5cGUgaW4gWyduYW1lJywgJ25pY2tuYW1lJ11cbiAgICAgICAgICAgICAgbXNnLmF1dGhvcl9uYW1lID0gYS52YWx1ZVxuICAgICAgICAgICAgaSsrXG4gICAgICAgICAgaSA9IDBcbiAgICAgICAgICBzbWFsbGVzdEluZGV4ID0gMTAwMFxuICAgICAgICAgIG1zZy5yZWNpcGllbnRBcnJheSA9IG1zZy5nZXRSZWNpcGllbnRBcnJheSgpXG4gICAgICAgICAgZm9yIGEgaW4gbXNnLnJlY2lwaWVudEFycmF5XG4gICAgICAgICAgICBtc2cubGlua1RvUmVjaXBpZW50ID0gYSB1bmxlc3MgbXNnLmxpbmtUb0F1dGhvclxuICAgICAgICAgICAgaW5kZXggPSBPYmplY3Qua2V5cygkd2luZG93LmlkZW50aWZpTGliLkF0dHJpYnV0ZS5nZXRVbmlxdWVJZFZhbGlkYXRvcnMoKSkuaW5kZXhPZihhLnR5cGUpXG4gICAgICAgICAgICBpZiBpbmRleCA+IC0xIGFuZCBpbmRleCA8IHNtYWxsZXN0SW5kZXhcbiAgICAgICAgICAgICAgc21hbGxlc3RJbmRleCA9IGluZGV4XG4gICAgICAgICAgICAgIG1zZy5saW5rVG9SZWNpcGllbnQgPSBhXG4gICAgICAgICAgICBlbHNlIGlmICFtc2cucmVjaXBpZW50X25hbWUgYW5kIGEudHlwZSBpbiBbJ25hbWUnLCAnbmlja25hbWUnXVxuICAgICAgICAgICAgICBtc2cucmVjaXBpZW50X25hbWUgPSBhLnZhbHVlXG4gICAgICAgICAgICBpKytcbiAgICAgICAgICBpZiBtc2cubGlua1RvQXV0aG9yLmVxdWFscyhtc2cubGlua1RvUmVjaXBpZW50KVxuICAgICAgICAgICAgbXNnLnNhbWVBdXRob3JBbmRSZWNpcGllbnQgPSB0cnVlXG4gICAgICAgICAgaWYgIW1zZy5hdXRob3JfbmFtZVxuICAgICAgICAgICAgbXNnLmF1dGhvcl9uYW1lID0gbXNnLmxpbmtUb0F1dGhvci52YWx1ZVxuICAgICAgICAgICAgaWYgbXNnLmxpbmtUb0F1dGhvci50eXBlIGluIFsna2V5SUQnLCAndXVpZCddXG4gICAgICAgICAgICAgIG1zZy5hdXRob3JfbmFtZSA9IG1zZy5hdXRob3JfbmFtZS5zbGljZSgwLCA2KSArICcuLi4nXG4gICAgICAgICAgaWYgIW1zZy5yZWNpcGllbnRfbmFtZVxuICAgICAgICAgICAgbXNnLnJlY2lwaWVudF9uYW1lID0gbXNnLmxpbmtUb1JlY2lwaWVudC52YWx1ZVxuICAgICAgICAgICAgaWYgbXNnLmxpbmtUb0F1dGhvci50eXBlIGluIFsna2V5SUQnLCAndXVpZCddXG4gICAgICAgICAgICAgIG1zZy5yZWNpcGllbnRfbmFtZSA9IG1zZy5yZWNpcGllbnRfbmFtZS5zbGljZSgwLCA2KSArICcuLi4nXG4gICAgICAgICAgYWxwaGEgPSB1bmRlZmluZWRcbiAgICAgICAgICBtc2cuaWNvblN0eWxlID0gJydcbiAgICAgICAgICBtc2cuYmdDb2xvciA9ICcnXG4gICAgICAgICAgbXNnLmljb25Db3VudCA9IG5ldyBBcnJheSgxKVxuICAgICAgICAgIHN3aXRjaCBtc2cuc2lnbmVkRGF0YS50eXBlXG4gICAgICAgICAgICB3aGVuICd2ZXJpZnlfaWRlbnRpdHknLCAndmVyaWZpY2F0aW9uJ1xuICAgICAgICAgICAgICBtc2cuaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tb2stc2lnbidcbiAgICAgICAgICAgICAgbXNnLmlzVmVyaWZpY2F0aW9uID0gdHJ1ZVxuICAgICAgICAgICAgd2hlbiAndW52ZXJpZnlfaWRlbnRpdHknLCAndW52ZXJpZmljYXRpb24nXG4gICAgICAgICAgICAgIG1zZy5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgbmVnYXRpdmUnXG4gICAgICAgICAgICAgIG1zZy5iZ0NvbG9yID0gJ2JhY2tncm91bmQtY29sb3I6ICNGRkYwREU7Ym9yZGVyLWNvbG9yOiNGRkUyQzY7J1xuICAgICAgICAgICAgICBtc2cuaXNVbnZlcmlmaWNhdGlvbiA9IHRydWVcbiAgICAgICAgICAgIHdoZW4gJ3Bvc3QnXG4gICAgICAgICAgICAgIG1zZy5pY29uU3R5bGUgPSAnZmEgZmEtcGVuY2lsJ1xuICAgICAgICAgICAgICBtc2cuaXNQb3N0ID0gdHJ1ZVxuICAgICAgICAgICAgd2hlbiAncmF0aW5nJ1xuICAgICAgICAgICAgICByYXRpbmcgPSBtc2cuc2lnbmVkRGF0YS5yYXRpbmdcbiAgICAgICAgICAgICAgbmV1dHJhbFJhdGluZyA9IChtc2cuc2lnbmVkRGF0YS5taW5SYXRpbmcgKyBtc2cuc2lnbmVkRGF0YS5tYXhSYXRpbmcpIC8gMlxuICAgICAgICAgICAgICBtYXhSYXRpbmdEaWZmID0gbXNnLnNpZ25lZERhdGEubWF4UmF0aW5nIC0gbmV1dHJhbFJhdGluZ1xuICAgICAgICAgICAgICBtaW5SYXRpbmdEaWZmID0gbXNnLnNpZ25lZERhdGEubWluUmF0aW5nIC0gbmV1dHJhbFJhdGluZ1xuICAgICAgICAgICAgICBpZiByYXRpbmcgPiBuZXV0cmFsUmF0aW5nXG4gICAgICAgICAgICAgICAgaWYgbXNnLnNpZ25lZERhdGEuY29udGV4dCA9PSAndmVyaWZpZXInXG4gICAgICAgICAgICAgICAgICBtc2cuaWNvblN0eWxlID0gJ2ZhIGZhLXNoaWVsZCBwb3NpdGl2ZSdcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICBtc2cuaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tdGh1bWJzLXVwIHBvc2l0aXZlJ1xuICAgICAgICAgICAgICAgICAgbXNnLmljb25Db3VudCA9IGlmIG1heFJhdGluZ0RpZmYgPCAyIHRoZW4gbXNnLmljb25Db3VudCBlbHNlIG5ldyBBcnJheShNYXRoLmNlaWwoMyAqIHJhdGluZyAvIG1heFJhdGluZ0RpZmYpKVxuICAgICAgICAgICAgICAgIGFscGhhID0gKHJhdGluZyAtIG5ldXRyYWxSYXRpbmcgLSAwLjUpIC8gbWF4UmF0aW5nRGlmZiAvIDEuMjUgKyAwLjJcbiAgICAgICAgICAgICAgICBtc2cuYmdDb2xvciA9ICdiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMywyNDAsMjE2LCcgKyBhbHBoYSArICcpOydcbiAgICAgICAgICAgICAgZWxzZSBpZiByYXRpbmcgPCBuZXV0cmFsUmF0aW5nXG4gICAgICAgICAgICAgICAgbXNnLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLXRodW1icy1kb3duIG5lZ2F0aXZlJ1xuICAgICAgICAgICAgICAgIG1zZy5pY29uQ291bnQgPSBpZiBtaW5SYXRpbmdEaWZmID4gLTIgdGhlbiBtc2cuaWNvbkNvdW50IGVsc2UgbmV3IEFycmF5KE1hdGguY2VpbCgzICogcmF0aW5nIC8gbWluUmF0aW5nRGlmZikpXG4gICAgICAgICAgICAgICAgYWxwaGEgPSAocmF0aW5nIC0gbmV1dHJhbFJhdGluZyArIDAuNSkgLyBtaW5SYXRpbmdEaWZmIC8gMS4yNSArIDAuMlxuICAgICAgICAgICAgICAgIG1zZy5iZ0NvbG9yID0gJ2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDIsMjIyLDIyMiwnICsgYWxwaGEgKyAnKTsnXG4gICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBtc2cuYmdDb2xvciA9ICdiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmOGUzOydcbiAgICAgICAgICAgICAgICBtc2cuaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tcXVlc3Rpb24tc2lnbiBuZXV0cmFsJ1xuXG4gICAgICBhbmd1bGFyLmZvckVhY2ggbWVzc2FnZXMsIChtc2csIGtleSkgLT5cbiAgICAgICAgbXNnW2tdID0gdiBmb3IgaywgdiBvZiBtc2dPcHRpb25zXG4gICAgICAgIHByb2Nlc3NNZXNzYWdlKG1zZylcblxuICAgICMgQ29sbGFwc2luZyB0aGUgbWVudSBhZnRlciBuYXZpZ2F0aW9uXG4gICAgJHNjb3BlLiRvbiAnJHN0YXRlQ2hhbmdlU3VjY2VzcycsIC0+XG4gICAgICAkc2NvcGUuaXNDb2xsYXBzZWQgPSBmYWxzZVxuXG4gICAgc2Nyb2xsVG8gPSAoZWwpIC0+XG4gICAgICBpZiAhZWxcbiAgICAgICAgcmV0dXJuXG4gICAgICBwb3MgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgaWYgcG9zLnRvcFxuICAgICAgICBpZiBwb3MudG9wIC0gNjAgPCAkd2luZG93LnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgJHdpbmRvdy5zY3JvbGxUbyAwLCBwb3MudG9wIC0gNjBcbiAgICAgICAgZWxzZSBpZiBwb3MuYm90dG9tID4gJHdpbmRvdy5wYWdlWU9mZnNldCArICgkd2luZG93LmlubmVySGVpZ2h0IG9yIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpXG4gICAgICAgICAgJHdpbmRvdy5zY3JvbGxUbyAwLCBwb3MuYm90dG9tIC0gKCR3aW5kb3cuaW5uZXJIZWlnaHQgb3IgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkgKyAxNVxuICAgICAgcmV0dXJuXG5cbiAgICAkc2NvcGUuc2V0SWRlbnRpdHlOYW1lcyA9IChpLCBodG1sU2FmZSwgc2V0VGl0bGUpIC0+XG4gICAgICBpLnZlcmlmaWVkID0gZmFsc2VcbiAgICAgIGkuZ3VuLmdldCgnYXR0cnMnKS5vcGVuIChhdHRycykgLT5cbiAgICAgICAgJHNjb3BlLiRhcHBseSAtPlxuICAgICAgICAgIG12YSA9ICR3aW5kb3cuaWRlbnRpZmlMaWIuSWRlbnRpdHkuZ2V0TW9zdFZlcmlmaWVkQXR0cmlidXRlcyhhdHRycylcbiAgICAgICAgICBpZiBtdmEubmFtZVxuICAgICAgICAgICAgaS5wcmltYXJ5TmFtZSA9IG12YS5uYW1lLmF0dHJpYnV0ZS52YWx1ZVxuICAgICAgICAgICAgaS5oYXNQcm9wZXJOYW1lID0gdHJ1ZVxuICAgICAgICAgICAgaS52ZXJpZmllZCA9IHRydWUgaWYgbXZhLm5hbWUudmVyaWZpZWRcbiAgICAgICAgICBlbHNlIGlmIG12YS5uaWNrbmFtZVxuICAgICAgICAgICAgaS5wcmltYXJ5TmFtZSA9IG12YS5uaWNrbmFtZS5hdHRyaWJ1dGUudmFsdWVcbiAgICAgICAgICAgIGkuaGFzUHJvcGVyTmFtZSA9IHRydWVcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBhID0gT2JqZWN0LnZhbHVlcyhhdHRycylbMF1cbiAgICAgICAgICAgIGkucHJpbWFyeU5hbWUgPSBhLnZhbHVlXG4gICAgICAgICAgICBpLnByaW1hcnlOYW1lID0gaS5wcmltYXJ5TmFtZS5zbGljZSgwLDYpICsgJy4uLicgaWYgYS50eXBlIGluIFsna2V5SUQnLCAndXVpZCddXG4gICAgICAgICAgaWYgaS5wcmltYXJ5TmFtZVxuICAgICAgICAgICAgaWYgbXZhLm5pY2tuYW1lIGFuZCBtdmEubmlja25hbWUuYXR0cmlidXRlLnZhbHVlICE9IGkucHJpbWFyeU5hbWVcbiAgICAgICAgICAgICAgaS5uaWNrbmFtZSA9IG12YS5uaWNrbmFtZS5hdHRyaWJ1dGUudmFsdWVcbiAgICAgICAgICAgICAgaS5uaWNrbmFtZSA9IGkubmlja25hbWUucmVwbGFjZSgnPCcsICcmbHQ7JykgaWYgaHRtbFNhZmVcbiAgICAgICAgICAgIGkucHJpbWFyeU5hbWUgPSBpLnByaW1hcnlOYW1lLnJlcGxhY2UoJzwnLCAnJmx0OycpIGlmIGh0bWxTYWZlXG4gICAgICAgICAgJHNjb3BlLnNldFBhZ2VUaXRsZSBpLnByaW1hcnlOYW1lIGlmIHNldFRpdGxlXG5cbiAgICAkc2NvcGUuc2VhcmNoS2V5ZG93biA9IChldmVudCkgLT5cbiAgICAgIHN3aXRjaCAoaWYgZXZlbnQgdGhlbiBldmVudC53aGljaCBlbHNlIC0xKVxuICAgICAgICB3aGVuIDM4XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGlmICRzY29wZS5pZHMuYWN0aXZlS2V5ID4gLTFcbiAgICAgICAgICAgICRzY29wZS5hZGRFbnRyeUFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgICAkc2NvcGUuaWRzLmxpc3RbJHNjb3BlLmlkcy5hY3RpdmVLZXldLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgICAkc2NvcGUuaWRzLmFjdGl2ZUtleS0tXG4gICAgICAgICAgICBpZiAkc2NvcGUuaWRzLmFjdGl2ZUtleSA+PSAwXG4gICAgICAgICAgICAgICRzY29wZS5pZHMubGlzdFskc2NvcGUuaWRzLmFjdGl2ZUtleV0uYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgIHNjcm9sbFRvIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQnICsgJHNjb3BlLmlkcy5hY3RpdmVLZXkpXG4gICAgICAgIHdoZW4gNDBcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgaWYgJHNjb3BlLmlkcy5hY3RpdmVLZXkgPCAoJHNjb3BlLmlkcy5saXN0Lmxlbmd0aCB8fCAwKSAtIDFcbiAgICAgICAgICAgIGlmICRzY29wZS5pZHMuYWN0aXZlS2V5ID49IDBcbiAgICAgICAgICAgICAgJHNjb3BlLmlkcy5saXN0WyRzY29wZS5pZHMuYWN0aXZlS2V5XS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICAgICAgJHNjb3BlLmlkcy5saXN0WyRzY29wZS5pZHMuYWN0aXZlS2V5ICsgMV0uYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgJHNjb3BlLmlkcy5hY3RpdmVLZXkrK1xuICAgICAgICAgIHNjcm9sbFRvIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQnICsgJHNjb3BlLmlkcy5hY3RpdmVLZXkpXG4gICAgICAgIHdoZW4gMTNcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgaWYgJHNjb3BlLmlkcy5hY3RpdmVLZXkgPT0gLTFcbiAgICAgICAgICAgICRzdGF0ZS5nbyAnaWRlbnRpdGllcy5jcmVhdGUnXG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgaWQgPSAkc2NvcGUuaWRzLmxpc3RbJHNjb3BlLmlkcy5hY3RpdmVLZXldXG4gICAgICAgICAgICAkc3RhdGUuZ28gJ2lkZW50aXRpZXMuc2hvdycsIHsgdHlwZTogaWQubGlua1RvLnR5cGUsIHZhbHVlOiBpZC5saW5rVG8udmFsdWUgfVxuICAgICAgICB3aGVuIC0xXG4gICAgICAgICAgY2xlYXJUaW1lb3V0ICRzY29wZS50aW1lclxuICAgICAgICAgICRzY29wZS5xdWVyeS50ZXJtID0gJydcbiAgICAgICAgICAkc2NvcGUuc2VhcmNoKClcbiAgICAgICAgd2hlbiAzMywgMzQsIDM1LCAzNiwgMzcsIDM5XG4gICAgICAgIGVsc2VcbiAgICAgICAgICBlbCA9IGFuZ3VsYXIuZWxlbWVudChldmVudC5jdXJyZW50VGFyZ2V0KVxuICAgICAgICAgIGNsZWFyVGltZW91dCAkc2NvcGUudGltZXJcbiAgICAgICAgICB3YWl0ID0gc2V0VGltZW91dCgoLT5cbiAgICAgICAgICAgICRzY29wZS5xdWVyeS50ZXJtID0gZWwudmFsKClcbiAgICAgICAgICAgICRzY29wZS5zZWFyY2goKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgKSwgMzAwKVxuICAgICAgICAgICRzY29wZS50aW1lciA9IHdhaXRcbiAgICAgICAgICBicmVha1xuXG4gICAgJHNjb3BlLmRyb3Bkb3duU2VhcmNoU2VsZWN0ID0gKGl0ZW0pIC0+XG4gICAgICAkc3RhdGUuZ28oJ2lkZW50aXRpZXMuc2hvdycsIHsgdHlwZTogaXRlbS5saW5rVG8udHlwZSwgdmFsdWU6IGl0ZW0ubGlua1RvLnZhbHVlIH0pXG4gICAgICAkc2NvcGUucXVlcnkudGVybSA9ICcnXG5cbiAgICAkc2NvcGUuYWRkR3VuUGVlciA9ICh1cmwpIC0+XG4gICAgICAkc2NvcGUuZ3VuLm9wdCh7cGVlcnM6IFt1cmxdfSk7ICMgVE9ETzogdmFsaWRhdGUgdXJsXG5cbiAgICAkc2NvcGUucmVtb3ZlR3VuUGVlciA9ICh1cmwpIC0+XG4gICAgICBjb25zb2xlLmxvZyAncmVtb3ZlR3VuUGVlcicgIyBUT0RPOiBob3cgdG8gZG8gdGhpcz9cblxuICAgICRzY29wZS5hZGRJcGZzUGVlciA9ICh1cmwpIC0+XG4gICAgICAkc2NvcGUuaXBmcy5zd2FybS5jb25uZWN0KHVybCkudGhlbiAtPlxuICAgICAgICAkc2NvcGUudXBkYXRlSXBmc1BlZXJzKClcblxuICAgICRzY29wZS5yZW1vdmVJcGZzUGVlciA9ICh1cmwpIC0+XG4gICAgICAkc2NvcGUuaXBmcy5zd2FybS5kaXNjb25uZWN0KHVybCkudGhlbiAtPlxuICAgICAgICAkc2NvcGUudXBkYXRlSXBmc1BlZXJzKClcbl1cbiJdfQ==

(function() {
  'use strict';
  // Identities controller
  angular.module('identifiAngular').controller('IdentitiesController', [
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
    resultFound);
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
        $scope.shareModal.result.then((function() {}),
    (function() {})); // avoid backdrop rejection console error
        $scope.shareModal.rendered.then(function() {
          return document.activeElement.blur();
        });
        return $transitions.onStart({},
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
        $scope.readQRModal.result.then((function() {}),
    (function() {})); // avoid backdrop rejection console error
        $scope.readQRModal.rendered.then(function() {
          return document.activeElement.blur();
        });
        return $transitions.onStart({},
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdGllcy9pZGVudGl0aWVzLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzIjpbImlkZW50aXRpZXMvaWRlbnRpdGllcy5jb250cm9sbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLGFBQUE7O0VBRUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUFpQyxDQUFDLFVBQWxDLENBQTZDLHNCQUE3QyxFQUFxRTtJQUNuRSxRQURtRTtJQUVuRSxRQUZtRTtJQUduRSxZQUhtRTtJQUluRSxTQUptRTtJQUtuRSxjQUxtRTtJQU1uRSxjQU5tRTtJQU9uRSxXQVBtRTtJQVFuRSxPQVJtRTtJQVNuRSxJQVRtRTtJQVVuRSxVQVZtRTtJQVduRSxXQVhtRTs7SUFhbkUsUUFibUU7SUFjbkUscUJBZG1FO0lBZW5FLE9BZm1FO0lBZ0JuRSxRQUFBLENBQUMsTUFBRDtJQUFTLE1BQVQ7SUFBaUIsVUFBakI7SUFBNkIsT0FBN0I7SUFBc0MsWUFBdEM7SUFBb0QsWUFBcEQ7SUFBa0UsU0FBbEU7SUFBNkUsS0FBN0U7SUFBb0YsRUFBcEY7SUFBd0YsUUFBeEY7SUFBa0csU0FBbEc7SUFBNkcsTUFBN0c7SUFDQSxtQkFEQTtJQUNxQixLQURyQixDQUFBLEVBQUE7QUFFRSxVQUFBLElBQUE7SUFBQSxhQUFBO0lBQUE7TUFBQSxNQUFNLENBQUMsUUFBUCxHQUFrQixDQUFBO01BQ2xCLE1BQU0sQ0FBQyxTQUFQLEdBQW1CO01BQ25CLE1BQU0sQ0FBQyxXQUFQLEdBQXFCLFFBQUEsQ0FBQyxLQUFELENBQUE7ZUFBVyxNQUFNLENBQUMsU0FBUCxHQUFtQjtNQUE5QjtNQUNyQixNQUFNLENBQUMsSUFBUCxHQUFjO01BQ2QsTUFBTSxDQUFDLFFBQVAsR0FBa0I7TUFDbEIsTUFBTSxDQUFDLFVBQVAsR0FBb0IsQ0FBQTtNQUNwQixXQUFBLEdBQWMsQ0FBQTtNQUNkLGFBQUEsR0FBZ0IsQ0FBQTtNQUNoQixNQUFNLENBQUMsUUFBUCxHQUFrQjtNQUNsQixN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aEIsR0FBdUIsTUFBTSxDQUFDLGVBQVAsQ0FBdUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFwQyxFQUZ6QjtXQUpGOztNQURLO01BUVAsTUFBTSxDQUFDLE1BQVAsQ0FBYyxlQUFkO0lBQStCLElBQS9CO01BRUEsTUFBTSxDQUFDLGFBQVAsR0FBdUIsUUFBQSxDQUFDLElBQUQsQ0FBQTtBQUNyQixZQUFBLENBQUE7SUFBQSxJQUFBO0lBQUE7UUFBQSxDQUFBLEdBQUksSUFBSSxDQUFDLEtBQUwsQ0FBVyxHQUFYO1FBQ0osSUFBRyxDQUFDLENBQUMsTUFBRixHQUFXLENBQWQ7VUFDRSxJQUFBLEdBQU8sa0JBQUEsQ0FBbUIsQ0FBRSxDQUFBLENBQUMsQ0FBQyxNQUFGLEdBQVcsQ0FBWCxDQUFyQjtVQUNQLEtBQUEsR0FBUSxrQkFBQSxDQUFtQixDQUFFLENBQUEsQ0FBQyxDQUFDLE1BQUYsR0FBVyxDQUFYLENBQWEsQ0FBQyxLQUFoQixDQUFzQixHQUF0QixDQUEyQixDQUFBLENBQUEsQ0FBOUM7VUFDUixPQUFPLENBQUMsR0FBUixDQUFZLE9BQVo7SUFBcUIsS0FBckI7VUFDQSxPQUFPLENBQUMsR0FBUixDQUFZLE1BQVo7SUFBb0IsSUFBcEI7aUJBQ0EsTUFBTSxDQUFDLEVBQVAsQ0FBVSxpQkFBVjtJQUE2QixDQUFDLElBQUQ7SUFBTyxLQUFQLENBQTdCLEVBTEY7U0FBQSxNQUFBO2lCQU9FLE9BQU8sQ0FBQyxHQUFSLENBQVksMkJBQVo7SUFBeUMsSUFBekMsRUFQRjs7TUFGcUI7YUFVdkIsTUFBTSxDQUFDLFdBQVAsR0FBcUIsUUFBQSxDQUFDLENBQUQsQ0FBQSxFQUFBO0lBL1R2QixDQWhCbUU7R0FBckU7O0VBRkE7O0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcbiMgSWRlbnRpdGllcyBjb250cm9sbGVyXG5hbmd1bGFyLm1vZHVsZSgnaWRlbnRpZmlBbmd1bGFyJykuY29udHJvbGxlciAnSWRlbnRpdGllc0NvbnRyb2xsZXInLCBbXG4gICckc2NvcGUnXG4gICckc3RhdGUnXG4gICckcm9vdFNjb3BlJ1xuICAnJHdpbmRvdydcbiAgJyRzdGF0ZVBhcmFtcydcbiAgJyR0cmFuc2l0aW9ucydcbiAgJyRsb2NhdGlvbidcbiAgJyRodHRwJ1xuICAnJHEnXG4gICckdGltZW91dCdcbiAgJyR1aWJNb2RhbCdcbiAgIyAnQXV0aGVudGljYXRpb24nXG4gICdjb25maWcnXG4gICdsb2NhbFN0b3JhZ2VTZXJ2aWNlJ1xuICAnZm9jdXMnXG4gICgkc2NvcGUsICRzdGF0ZSwgJHJvb3RTY29wZSwgJHdpbmRvdywgJHN0YXRlUGFyYW1zLCAkdHJhbnNpdGlvbnMsICRsb2NhdGlvbiwgJGh0dHAsICRxLCAkdGltZW91dCwgJHVpYk1vZGFsLCBjb25maWcsXG4gIGxvY2FsU3RvcmFnZVNlcnZpY2UsIGZvY3VzKSAtPiAjLCBBdXRoZW50aWNhdGlvblxuICAgICRzY29wZS5uZXdFbnRyeSA9IHt9XG4gICAgJHNjb3BlLmFjdGl2ZVRhYiA9IDFcbiAgICAkc2NvcGUuYWN0aXZhdGVUYWIgPSAodGFiSWQpIC0+ICRzY29wZS5hY3RpdmVUYWIgPSB0YWJJZFxuICAgICRzY29wZS5zZW50ID0gW11cbiAgICAkc2NvcGUucmVjZWl2ZWQgPSBbXVxuICAgICRzY29wZS5hdHRyaWJ1dGVzID0ge31cbiAgICB0aHVtYnNVcE9iaiA9IHt9XG4gICAgdGh1bWJzRG93bk9iaiA9IHt9XG4gICAgJHNjb3BlLnRodW1ic1VwID0gW11cbiAgICAkc2NvcGUudGh1bWJzRG93biA9IFtdXG4gICAgJHNjb3BlLnZlcmlmaWNhdGlvbnMgPSBbXVxuICAgICRzY29wZS5xdWVyeS50ZXJtID0gJHN0YXRlUGFyYW1zLnNlYXJjaCBpZiAkc3RhdGVQYXJhbXMuc2VhcmNoXG4gICAgJHNjb3BlLm5ld1ZlcmlmaWNhdGlvbiA9XG4gICAgICB0eXBlOiAnJ1xuICAgICAgdmFsdWU6ICcnXG4gICAgJHNjb3BlLmNvbGxhcHNlTGV2ZWwgPSB7fVxuICAgICRzY29wZS5jb2xsYXBzZUZpbHRlcnMgPSAkd2luZG93LmlubmVyV2lkdGggPCA5OTJcbiAgICAkc2NvcGUuc2xpZGVyID1cbiAgICAgIG9wdGlvbnM6XG4gICAgICAgIGZsb29yOiAtM1xuICAgICAgICBjZWlsOiAzXG4gICAgICAgIGhpZGVQb2ludGVyTGFiZWxzOiB0cnVlXG4gICAgICAgIGhpZGVMaW1pdExhYmVsczogdHJ1ZVxuXG4gICAgJHNjb3BlLnNoYXJlID0gdHJ1ZSBpZiAkbG9jYXRpb24uc2VhcmNoKCkuc2hhcmVcblxuICAgIGlmICRzY29wZS5xdWVyeS50ZXJtLmxlbmd0aCBhbmQgJHN0YXRlLmlzICdpZGVudGl0aWVzLmxpc3QnXG4gICAgICAkc2NvcGUucXVlcnkudGVybSA9ICcnXG4gICAgICAkc2NvcGUuc2VhcmNoKClcblxuICAgIGlmICRzdGF0ZS5pcyAnaWRlbnRpdGllcy5zaG93J1xuICAgICAgJHNjb3BlLmZpbHRlcnMubWF4RGlzdGFuY2UgPSAwXG5cbiAgICAkc2NvcGUuYWRkRW50cnkgPSAoZXZlbnQsIGVudHJ5KSAtPlxuICAgICAgaWYgZW50cnkuZW1haWxcbiAgICAgICAgbGlua1RvID0ge3R5cGU6J2VtYWlsJywgdmFsdWU6IGVudHJ5LmVtYWlsfVxuICAgICAgZWxzZSBpZiBlbnRyeS51cmxcbiAgICAgICAgbGlua1RvID0ge3R5cGU6J3VybCcsIHZhbHVlOiBlbnRyeS51cmx9XG4gICAgICBlbHNlXG4gICAgICAgIGxpbmtUbyA9ICR3aW5kb3cuaWRlbnRpZmlMaWIuQXR0cmlidXRlLmdldFV1aWQoKVxuICAgICAgICBlbnRyeS51dWlkID0gbGlua1RvLnZhbHVlXG4gICAgICBwYXJhbXMgPVxuICAgICAgICB0eXBlOiAndmVyaWZpY2F0aW9uJ1xuICAgICAgICByZWNpcGllbnQ6IGVudHJ5XG4gICAgICAkc2NvcGUuY3JlYXRlTWVzc2FnZShldmVudCwgcGFyYW1zKS50aGVuIChyZXNwb25zZSkgLT5cbiAgICAgICAgJHN0YXRlLmdvICdpZGVudGl0aWVzLnNob3cnLCBsaW5rVG9cbiAgICAgICwgKGVycm9yKSAtPlxuICAgICAgICBjb25zb2xlLmxvZyBcImVycm9yXCIsIGVycm9yXG5cbiAgICAkc2NvcGUuZ3Vlc3NBdHRyaWJ1dGVUeXBlID0gLT5cbiAgICAgIGlmICRzY29wZS5uZXdWZXJpZmljYXRpb24udmFsdWUubGVuZ3RoXG4gICAgICAgICRzY29wZS5uZXdWZXJpZmljYXRpb24udHlwZSA9ICR3aW5kb3cuaWRlbnRpZmlMaWIuQXR0cmlidXRlLmd1ZXNzVHlwZU9mKCRzY29wZS5uZXdWZXJpZmljYXRpb24udmFsdWUpXG4gICAgICAgIHVubGVzcyAkc2NvcGUubmV3VmVyaWZpY2F0aW9uLnR5cGVcbiAgICAgICAgICB1bmxlc3MgJHNjb3BlLm5ld1ZlcmlmaWNhdGlvbi52YWx1ZS5tYXRjaCAvXFxgfFxcfnxcXCF8XFxAfFxcI3xcXCR8XFwlfFxcXnxcXCZ8XFwqfFxcKHxcXCl8XFwrfFxcPXxcXFt8XFx7fFxcXXxcXH18XFx8fFxcXFx8XFwnfFxcPHxcXCx8XFwufFxcPnxcXD98XFwvfFxcXCJcInxcXDt8XFw6L1xuICAgICAgICAgICAgJHNjb3BlLm5ld1ZlcmlmaWNhdGlvbi50eXBlID0gJ25hbWUnXG4gICAgICBlbHNlXG4gICAgICAgICRzY29wZS5uZXdWZXJpZmljYXRpb24udHlwZSA9ICcnXG5cbiAgICAkc2NvcGUuYWRkTmFtZSA9IChuYW1lKSAtPlxuICAgICAgaWYgbmFtZVxuICAgICAgICByZWNpcGllbnQgPSB7bmFtZX1cbiAgICAgICAgcmVjaXBpZW50WyRzY29wZS5pZFR5cGVdID0gJHNjb3BlLmlkVmFsdWVcbiAgICAgICAgJHdpbmRvdy5pZGVudGlmaUxpYi5NZXNzYWdlLmNyZWF0ZVZlcmlmaWNhdGlvbih7cmVjaXBpZW50fSwgJHNjb3BlLnByaXZhdGVLZXkpLnRoZW4gKG0pIC0+XG4gICAgICAgICAgJHNjb3BlLmlkZW50aWZpSW5kZXguYWRkTWVzc2FnZShtKVxuICAgICAgICAkc2NvcGUubmFtZUFkZGVkID0gdHJ1ZVxuICAgICAgZWxzZVxuICAgICAgICAkc2NvcGUuYWRkaW5nTmFtZSA9IHRydWVcbiAgICAgICAgZm9jdXMoJ2FkZE5hbWVGb2N1cycpXG5cbiAgICAkc2NvcGUuZ2V0QXR0cmlidXRlcyA9IC0+XG4gICAgICAkc2NvcGUuaWRlbnRpdHkuZ3VuLmdldCgnYXR0cnMnKS5vcGVuIChhdHRycykgLT5cbiAgICAgICAgY29uc29sZS5sb2cgYXR0cnNcbiAgICAgICAgY29ubmVjdGlvbnMgPSBhdHRycyBvciBbXVxuICAgICAgICBpZiBjb25uZWN0aW9ucy5sZW5ndGggPiAwXG4gICAgICAgICAgYyA9IGNvbm5lY3Rpb25zWzBdXG4gICAgICAgICAgbW9zdENvbmZpcm1hdGlvbnMgPSBjLmNvbmZcbiAgICAgICAgZWxzZVxuICAgICAgICAgIG1vc3RDb25maXJtYXRpb25zID0gMVxuICAgICAgICAkc2NvcGUuYXR0cmlidXRlcyA9IE9iamVjdC52YWx1ZXMoY29ubmVjdGlvbnMpLnNvcnQgKGEsIGIpIC0+XG4gICAgICAgICAgKGIuY29uZiAtIDIgKiBiLnJlZikgLSAoYS5jb25mIC0gMiAqIGEucmVmKVxuICAgICAgICBmb3IgYSBpbiAkc2NvcGUuYXR0cmlidXRlc1xuICAgICAgICAgIHJldHVybiB1bmxlc3MgYS50eXBlIGFuZCBhLnZhbHVlXG4gICAgICAgICAgYS5hdHRyID0gbmV3ICR3aW5kb3cuaWRlbnRpZmlMaWIuQXR0cmlidXRlKGEudHlwZSwgYS52YWx1ZSlcbiAgICAgICAgICBhLmlzQ3VycmVudCA9IG5ldyAkd2luZG93LmlkZW50aWZpTGliLkF0dHJpYnV0ZSgkc2NvcGUuaWRUeXBlLCAkc2NvcGUuaWRWYWx1ZSkuZXF1YWxzKGEuYXR0cilcbiAgICAgICAgICBzd2l0Y2ggYS50eXBlXG4gICAgICAgICAgICB3aGVuICdlbWFpbCdcbiAgICAgICAgICAgICAgYS5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1lbnZlbG9wZSdcbiAgICAgICAgICAgICAgYS5idG5TdHlsZSA9ICdidG4tc3VjY2VzcydcbiAgICAgICAgICAgICAgYS5saW5rID0gJ21haWx0bzonICsgYS52YWx1ZVxuICAgICAgICAgICAgICBhLnF1aWNrQ29udGFjdCA9IHRydWVcbiAgICAgICAgICAgIHdoZW4gJ2JpdGNvaW5fYWRkcmVzcycsICdiaXRjb2luJ1xuICAgICAgICAgICAgICBhLmljb25TdHlsZSA9ICdmYSBmYS1iaXRjb2luJ1xuICAgICAgICAgICAgICBhLmJ0blN0eWxlID0gJ2J0bi1wcmltYXJ5J1xuICAgICAgICAgICAgICBhLmxpbmsgPSAnaHR0cHM6Ly9ibG9ja2NoYWluLmluZm8vYWRkcmVzcy8nICsgYS52YWx1ZVxuICAgICAgICAgICAgICBhLnF1aWNrQ29udGFjdCA9IHRydWVcbiAgICAgICAgICAgIHdoZW4gJ2dwZ19maW5nZXJwcmludCcsICdncGdfa2V5aWQnXG4gICAgICAgICAgICAgIGEuaWNvblN0eWxlID0gJ2ZhIGZhLWtleSdcbiAgICAgICAgICAgICAgYS5idG5TdHlsZSA9ICdidG4tZGVmYXVsdCdcbiAgICAgICAgICAgICAgYS5saW5rID0gJ2h0dHBzOi8vcGdwLm1pdC5lZHUvcGtzL2xvb2t1cD9vcD1nZXQmc2VhcmNoPTB4JyArIGEudmFsdWVcbiAgICAgICAgICAgIHdoZW4gJ2FjY291bnQnXG4gICAgICAgICAgICAgIGEuaWNvblN0eWxlID0gJ2ZhIGZhLWF0J1xuICAgICAgICAgICAgd2hlbiAnbmlja25hbWUnXG4gICAgICAgICAgICAgICRzY29wZS5pZGVudGl0eS5oYXNQcm9wZXJOYW1lID0gdHJ1ZVxuICAgICAgICAgICAgICBhLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLWZvbnQnXG4gICAgICAgICAgICB3aGVuICduYW1lJ1xuICAgICAgICAgICAgICAkc2NvcGUuaWRlbnRpdHkuaGFzUHJvcGVyTmFtZSA9IHRydWVcbiAgICAgICAgICAgICAgYS5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1mb250J1xuICAgICAgICAgICAgd2hlbiAndGVsJywgJ3Bob25lJ1xuICAgICAgICAgICAgICBhLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLWVhcnBob25lJ1xuICAgICAgICAgICAgICBhLmJ0blN0eWxlID0gJ2J0bi1zdWNjZXNzJ1xuICAgICAgICAgICAgICBhLmxpbmsgPSAndGVsOicgKyBhLnZhbHVlXG4gICAgICAgICAgICAgIGEucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgICAgd2hlbiAna2V5SUQnXG4gICAgICAgICAgICAgIGEuaWNvblN0eWxlID0gJ2ZhIGZhLWtleSdcbiAgICAgICAgICAgIHdoZW4gJ2NvdmVyUGhvdG8nXG4gICAgICAgICAgICAgIGlmIGEudmFsdWUubWF0Y2ggL15cXC9pcGZzXFwvWzEtOUEtWmEtel17NDAsNjB9JC9cbiAgICAgICAgICAgICAgICAkc2NvcGUuaXBmc0dldChhLnZhbHVlKS50aGVuIChjb3ZlclBob3RvKSAtPlxuICAgICAgICAgICAgICAgICAgJHNjb3BlLmNvdmVyUGhvdG8gPSAkc2NvcGUuY292ZXJQaG90byBvciB7ICdiYWNrZ3JvdW5kLWltYWdlJzogJ3VybChkYXRhOmltYWdlO2Jhc2U2NCwnICsgY292ZXJQaG90by50b1N0cmluZygnYmFzZTY0JykgKyAnKScgfVxuICAgICAgICAgICAgd2hlbiAndXJsJ1xuICAgICAgICAgICAgICBhLmxpbmsgPSBhLnZhbHVlXG4gICAgICAgICAgICAgIGlmIGEudmFsdWUuaW5kZXhPZignZmFjZWJvb2suY29tLycpID4gLTFcbiAgICAgICAgICAgICAgICBhLmljb25TdHlsZSA9ICdmYSBmYS1mYWNlYm9vaydcbiAgICAgICAgICAgICAgICBhLmJ0blN0eWxlID0gJ2J0bi1mYWNlYm9vaydcbiAgICAgICAgICAgICAgICBhLmxpbmsgPSBhLnZhbHVlXG4gICAgICAgICAgICAgICAgYS5saW5rTmFtZSA9IGEudmFsdWUuc3BsaXQoJ2ZhY2Vib29rLmNvbS8nKVsxXVxuICAgICAgICAgICAgICAgIGEucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgICAgICBlbHNlIGlmIGEudmFsdWUuaW5kZXhPZigndHdpdHRlci5jb20vJykgPiAtMVxuICAgICAgICAgICAgICAgIGEuaWNvblN0eWxlID0gJ2ZhIGZhLXR3aXR0ZXInXG4gICAgICAgICAgICAgICAgYS5idG5TdHlsZSA9ICdidG4tdHdpdHRlcidcbiAgICAgICAgICAgICAgICBhLmxpbmsgPSBhLnZhbHVlXG4gICAgICAgICAgICAgICAgYS5saW5rTmFtZSA9IGEudmFsdWUuc3BsaXQoJ3R3aXR0ZXIuY29tLycpWzFdXG4gICAgICAgICAgICAgICAgYS5xdWlja0NvbnRhY3QgPSB0cnVlXG4gICAgICAgICAgICAgIGVsc2UgaWYgYS52YWx1ZS5pbmRleE9mKCdwbHVzLmdvb2dsZS5jb20vJykgPiAtMVxuICAgICAgICAgICAgICAgIGEuaWNvblN0eWxlID0gJ2ZhIGZhLWdvb2dsZS1wbHVzJ1xuICAgICAgICAgICAgICAgIGEuYnRuU3R5bGUgPSAnYnRuLWdvb2dsZS1wbHVzJ1xuICAgICAgICAgICAgICAgIGEubGluayA9IGEudmFsdWVcbiAgICAgICAgICAgICAgICBhLmxpbmtOYW1lID0gYS52YWx1ZS5zcGxpdCgncGx1cy5nb29nbGUuY29tLycpWzFdXG4gICAgICAgICAgICAgICAgYS5xdWlja0NvbnRhY3QgPSB0cnVlXG4gICAgICAgICAgICAgIGVsc2UgaWYgYS52YWx1ZS5pbmRleE9mKCdsaW5rZWRpbi5jb20vJykgPiAtMVxuICAgICAgICAgICAgICAgIGEuaWNvblN0eWxlID0gJ2ZhIGZhLWxpbmtlZGluJ1xuICAgICAgICAgICAgICAgIGEuYnRuU3R5bGUgPSAnYnRuLWxpbmtlZGluJ1xuICAgICAgICAgICAgICAgIGEubGluayA9IGEudmFsdWVcbiAgICAgICAgICAgICAgICBhLmxpbmtOYW1lID0gYS52YWx1ZS5zcGxpdCgnbGlua2VkaW4uY29tLycpWzFdXG4gICAgICAgICAgICAgICAgYS5xdWlja0NvbnRhY3QgPSB0cnVlXG4gICAgICAgICAgICAgIGVsc2UgaWYgYS52YWx1ZS5pbmRleE9mKCdnaXRodWIuY29tLycpID4gLTFcbiAgICAgICAgICAgICAgICBhLmljb25TdHlsZSA9ICdmYSBmYS1naXRodWInXG4gICAgICAgICAgICAgICAgYS5idG5TdHlsZSA9ICdidG4tZ2l0aHViJ1xuICAgICAgICAgICAgICAgIGEubGluayA9IGEudmFsdWVcbiAgICAgICAgICAgICAgICBhLmxpbmtOYW1lID0gYS52YWx1ZS5zcGxpdCgnZ2l0aHViLmNvbS8nKVsxXVxuICAgICAgICAgICAgICAgIGEucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgYS5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1saW5rJ1xuICAgICAgICAgICAgICAgIGEuYnRuU3R5bGUgPSAnYnRuLWRlZmF1bHQnXG4gICAgICAgICAgaWYgYS52YWx1ZSBhbmQgYS52YWx1ZS5tYXRjaCAvXlxcL2lwZnNcXC9bMS05QS1aYS16XXs0MCw2MH0kL1xuICAgICAgICAgICAgYS5saW5rID0gJ2h0dHBzOi8vaXBmcy5pbycgKyBhLnZhbHVlXG4gICAgICAgICAgICBhLmxpbmtOYW1lID0gYS52YWx1ZVxuICAgICAgICAgICAgYS5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1saW5rJ1xuICAgICAgICAgICAgYS5idG5TdHlsZSA9ICdidG4tZGVmYXVsdCdcbiAgICAgICAgICBpZiBhLmNvbmYgKyBhLnJlZiA+IDBcbiAgICAgICAgICAgIHBlcmNlbnRhZ2UgPSBhLmNvbmYgKiAxMDAgLyAoYS5jb25mICsgYS5yZWYpXG4gICAgICAgICAgICBpZiBwZXJjZW50YWdlID49IDgwXG4gICAgICAgICAgICAgIGFscGhhID0gYS5jb25mIC8gbW9zdENvbmZpcm1hdGlvbnMgKiAwLjcgKyAwLjNcbiAgICAgICAgICAgICAgIyBhLnJvd1N0eWxlID0gJ2JhY2tncm91bmQtY29sb3I6IHJnYmEoMjIzLDI0MCwyMTYsJyArIGFscGhhICsgJyknXG4gICAgICAgICAgICBlbHNlIGlmIHBlcmNlbnRhZ2UgPj0gNjBcbiAgICAgICAgICAgICAgYS5yb3dDbGFzcyA9ICd3YXJuaW5nJ1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICBhLnJvd0NsYXNzID0gJ2RhbmdlcidcbiAgICAgICAgICAkc2NvcGUuaGFzUXVpY2tDb250YWN0cyA9ICRzY29wZS5oYXNRdWlja0NvbnRhY3RzIG9yIGEucXVpY2tDb250YWN0XG4gICAgICAgICRzY29wZS5hdHRyaWJ1dGVzTGVuZ3RoID0gT2JqZWN0LmtleXMoJHNjb3BlLmF0dHJpYnV0ZXMpLmxlbmd0aFxuXG5cbiAgICAkc2NvcGUuZ2V0Q29ubmVjdGluZ01zZ3MgPSAoaWQxLCBpZDIpIC0+XG4gICAgICBnZXRWZXJpZmljYXRpb25zID0gJHEgKHJlc29sdmUpIC0+XG4gICAgICAgIGlmICEkc2NvcGUudmVyaWZpY2F0aW9ucy5sZW5ndGhcbiAgICAgICAgICBpZiAkc2NvcGUucmVjZWl2ZWRJbmRleFxuICAgICAgICAgICAgJHNjb3BlLnJlY2VpdmVkSW5kZXguc2VhcmNoVGV4dCgnJywgMTAwMDAsIGZhbHNlLCB0cnVlKS50aGVuIChyZXMpIC0+XG4gICAgICAgICAgICAgIHJlcy5mb3JFYWNoIChyb3cpIC0+XG4gICAgICAgICAgICAgICAgbXNnID0gJHdpbmRvdy5pZGVudGlmaUxpYi5NZXNzYWdlLmZyb21Kd3Mocm93LnZhbHVlLmp3cylcbiAgICAgICAgICAgICAgICBpZiAobXNnLnNpZ25lZERhdGEudHlwZSBpbiBbJ3ZlcmlmeV9pZGVudGl0eScsICd2ZXJpZmljYXRpb24nLCAndW52ZXJpZnlfaWRlbnRpdHknLCAndW52ZXJpZmljYXRpb24nXSlcbiAgICAgICAgICAgICAgICAgIG1zZy5saW5rVG9BdXRob3IgPSBtc2cuc2lnbmVkRGF0YS5hdXRob3JbMF1cbiAgICAgICAgICAgICAgICAgICRzY29wZS52ZXJpZmljYXRpb25zLnB1c2ggbXNnXG4gICAgICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICBlbHNlXG4gICAgICAgICAgcmVzb2x2ZSgpXG4gICAgICBnZXRWZXJpZmljYXRpb25zLnRoZW4gLT5cbiAgICAgICAgbXNncyA9IFtdXG4gICAgICAgICRzY29wZS52ZXJpZmljYXRpb25zLmZvckVhY2ggKG1zZykgLT5cbiAgICAgICAgICBoYXNJZDEgPSBoYXNJZDIgPSBmYWxzZVxuICAgICAgICAgIGZvciBpZCBpbiBtc2cuc2lnbmVkRGF0YS5yZWNpcGllbnRcbiAgICAgICAgICAgIHJldHVybiBtc2dzLnB1c2ggbXNnIGlmIGlkLnR5cGXCoD09IGlkMi50eXBlIGFuZCBpZC52YWx1ZSA9PSBpZDIudmFsdWVcbiAgICAgICAgcmV0dXJuIG1zZ3NcblxuICAgICRzY29wZS5jb25uZWN0aW9uQ2xpY2tlZCA9IChldmVudCwgaWQpIC0+XG4gICAgICBpZiBpZC5jb25uZWN0aW5nX21zZ3NcbiAgICAgICAgaWQuY29sbGFwc2UgPSAhaWQuY29sbGFwc2VcbiAgICAgIGVsc2VcbiAgICAgICAgJHNjb3BlLmdldENvbm5lY3RpbmdNc2dzKFskc2NvcGUuaWRUeXBlLCAkc2NvcGUuaWRWYWx1ZV0sIGlkKS50aGVuIChtc2dzKSAtPlxuICAgICAgICAgIGlkLmNvbm5lY3RpbmdfbXNncyA9IG1zZ3NcbiAgICAgICAgICBpZC5jb2xsYXBzZSA9ICFpZC5jb2xsYXBzZVxuXG4gICAgJHNjb3BlLmdldFNlbnRNc2dzID0gLT5cbiAgICAgIHJldHVybiB1bmxlc3MgJHNjb3BlLmlkZW50aXR5IGFuZCAkc2NvcGUuaWRlbnRpZmlJbmRleFxuICAgICAgJHNjb3BlLnNlbnQgPSBbXVxuICAgICAgY3Vyc29yID0gaWYgJHNjb3BlLnNlbnQubGVuZ3RoIHRoZW4gJHNjb3BlLnNlbnRbJHNjb3BlLnNlbnQubGVuZ3RoIC0gMV0uY3Vyc29yIGVsc2UgJydcbiAgICAgIHJlc3VsdEZvdW5kID0gKG1zZykgLT5cbiAgICAgICAgJHNjb3BlLnByb2Nlc3NNZXNzYWdlcyBbbXNnXSwgeyBhdXRob3JJc1NlbGY6IHRydWUgfVxuICAgICAgICAkc2NvcGUuc2VudC5wdXNoIG1zZ1xuXG4gICAgICAkc2NvcGUuaWRlbnRpZmlJbmRleC5nZXRTZW50TXNncygkc2NvcGUuaWRlbnRpdHksIHJlc3VsdEZvdW5kKVxuXG4gICAgJHNjb3BlLmdldFJlY2VpdmVkTXNncyA9IC0+XG4gICAgICByZXR1cm4gdW5sZXNzICRzY29wZS5pZGVudGl0eSBhbmQgJHNjb3BlLmlkZW50aWZpSW5kZXhcbiAgICAgICRzY29wZS5yZWNlaXZlZCA9IFtdXG4gICAgICBjdXJzb3IgPSBpZiAkc2NvcGUucmVjZWl2ZWQubGVuZ3RoIHRoZW4gJHNjb3BlLnJlY2VpdmVkWyRzY29wZS5yZWNlaXZlZC5sZW5ndGggLSAxXS5jdXJzb3IgZWxzZSAnJ1xuICAgICAgcmVzdWx0Rm91bmQgPSAobXNnKSAtPlxuICAgICAgICAkc2NvcGUucHJvY2Vzc01lc3NhZ2VzIFttc2ddLCB7IHJlY2lwaWVudElzU2VsZjogdHJ1ZSB9XG4gICAgICAgICRzY29wZS4kYXBwbHkgLT5cbiAgICAgICAgICBpZiBtc2cuaXNQb3NpdGl2ZSgpXG4gICAgICAgICAgICBpZiAkc2NvcGUudGh1bWJzVXAubGVuZ3RoIDwgMTIgYW5kIG5vdCB0aHVtYnNVcE9ialtKU09OLnN0cmluZ2lmeShtc2cuc2lnbmVkRGF0YS5hdXRob3IpXVxuICAgICAgICAgICAgICB0aHVtYnNVcE9ialtKU09OLnN0cmluZ2lmeShtc2cuc2lnbmVkRGF0YS5hdXRob3IpXSA9IHRydWVcbiAgICAgICAgICAgICAgJHNjb3BlLnRodW1ic1VwLnB1c2ggbXNnXG4gICAgICAgICAgICAgICRzY29wZS5oYXNUaHVtYnNVcCA9IHRydWVcbiAgICAgICAgICBlbHNlIGlmIG1zZy5pc05lZ2F0aXZlKCkgYW5kICRzY29wZS50aHVtYnNEb3duLmxlbmd0aCA8IDEyIGFuZCBub3QgdGh1bWJzRG93bk9ialtKU09OLnN0cmluZ2lmeShtc2cuc2lnbmVkRGF0YS5hdXRob3IpXVxuICAgICAgICAgICAgdGh1bWJzRG93bk9ialtKU09OLnN0cmluZ2lmeShtc2cuc2lnbmVkRGF0YS5hdXRob3IpXSA9IHRydWVcbiAgICAgICAgICAgICRzY29wZS50aHVtYnNEb3duLnB1c2ggbXNnXG4gICAgICAgICAgICAkc2NvcGUuaGFzVGh1bWJzRG93biA9IHRydWVcbiAgICAgICAgICAkc2NvcGUucmVjZWl2ZWQucHVzaCBtc2dcbiAgICAgICRzY29wZS5pZGVudGlmaUluZGV4LmdldFJlY2VpdmVkTXNncygkc2NvcGUuaWRlbnRpdHksIHJlc3VsdEZvdW5kLCB1bmRlZmluZWQsIGN1cnNvcilcblxuICAgICRzY29wZS5zZXRGaWx0ZXJzID0gKGZpbHRlcnMpIC0+XG4gICAgICBhbmd1bGFyLmV4dGVuZCAkc2NvcGUuZmlsdGVycywgZmlsdGVyc1xuXG4gICAgJHNjb3BlLnVwbG9hZENvdmVyUGhvdG8gPSAoYmxvYiwgaWRlbnRpdHkpIC0+XG4gICAgICAkc2NvcGUudXBsb2FkRmlsZShibG9iKS50aGVuIChmaWxlcykgLT5cbiAgICAgICAgcmVjaXBpZW50ID0ge2NvdmVyUGhvdG86ICcvaXBmcy8nICsgZmlsZXNbMF0ucGF0aH1cbiAgICAgICAgcmVjaXBpZW50WyRzY29wZS5pZFR5cGVdID0gJHNjb3BlLmlkVmFsdWVcbiAgICAgICAgJHdpbmRvdy5pZGVudGlmaUxpYi5NZXNzYWdlLmNyZWF0ZVZlcmlmaWNhdGlvbih7cmVjaXBpZW50fSwgJHNjb3BlLnByaXZhdGVLZXkpLnRoZW4gKG0pIC0+XG4gICAgICAgICAgJHNjb3BlLmlkZW50aWZpSW5kZXguYWRkTWVzc2FnZShtKVxuICAgICAgICAgICRzY29wZS51cGxvYWRNb2RhbC5jbG9zZSgpXG5cbiAgICAkc2NvcGUub3BlblNoYXJlTW9kYWwgPSAoKSAtPlxuICAgICAgJHNjb3BlLnNoYXJlTW9kYWwgPSAkdWliTW9kYWwub3BlbihcbiAgICAgICAgYW5pbWF0aW9uOiAkc2NvcGUuYW5pbWF0aW9uc0VuYWJsZWRcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvaWRlbnRpdGllcy9zaGFyZS5tb2RhbC5odG1sJ1xuICAgICAgICBzaXplOiAnbWQnXG4gICAgICAgIHNjb3BlOiAkc2NvcGVcbiAgICAgIClcbiAgICAgICRzY29wZS5zaGFyZU1vZGFsLnJlc3VsdC50aGVuICgtPiksICgtPikgIyBhdm9pZCBiYWNrZHJvcCByZWplY3Rpb24gY29uc29sZSBlcnJvclxuICAgICAgJHNjb3BlLnNoYXJlTW9kYWwucmVuZGVyZWQudGhlbiAtPlxuICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKVxuICAgICAgJHRyYW5zaXRpb25zLm9uU3RhcnQge30sIC0+XG4gICAgICAgICRzY29wZS5zaGFyZU1vZGFsLmNsb3NlKClcblxuICAgICRzY29wZS5vcGVuUmVhZFFSTW9kYWwgPSAoKSAtPlxuICAgICAgJHNjb3BlLnJlYWRRUk1vZGFsID0gJHVpYk1vZGFsLm9wZW4oXG4gICAgICAgIGFuaW1hdGlvbjogJHNjb3BlLmFuaW1hdGlvbnNFbmFibGVkXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2lkZW50aXRpZXMvcmVhZHFyLm1vZGFsLmh0bWwnXG4gICAgICAgIHNpemU6ICdtZCdcbiAgICAgICAgc2NvcGU6ICRzY29wZVxuICAgICAgKVxuICAgICAgJHNjb3BlLnJlYWRRUk1vZGFsLnJlc3VsdC50aGVuICgtPiksICgtPikgIyBhdm9pZCBiYWNrZHJvcCByZWplY3Rpb24gY29uc29sZSBlcnJvclxuICAgICAgJHNjb3BlLnJlYWRRUk1vZGFsLnJlbmRlcmVkLnRoZW4gLT5cbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKClcbiAgICAgICR0cmFuc2l0aW9ucy5vblN0YXJ0IHt9LCAtPlxuICAgICAgICAkc2NvcGUucmVhZFFSTW9kYWwuY2xvc2UoKVxuXG4gICAgJHNjb3BlLm9wZW5Db3ZlclBob3RvVXBsb2FkTW9kYWwgPSAtPlxuICAgICAgcmV0dXJuIHVubGVzcyAkc2NvcGUuYXV0aGVudGljYXRpb24uaWRlbnRpdHlcbiAgICAgICRzY29wZS5vcGVuVXBsb2FkTW9kYWwoJHNjb3BlLnVwbG9hZENvdmVyUGhvdG8sICdVcGxvYWQgY292ZXIgcGhvdG8nLCBmYWxzZSlcblxuICAgICRzY29wZS5maW5kT25lID0gLT5cbiAgICAgIHJldHVybiB1bmxlc3MgJHNjb3BlLmlkZW50aWZpSW5kZXhcbiAgICAgICRzY29wZS5pZFR5cGUgPSAkc3RhdGVQYXJhbXMudHlwZVxuICAgICAgJHNjb3BlLmlkVmFsdWUgPSAkc3RhdGVQYXJhbXMudmFsdWVcbiAgICAgICRzY29wZS5pZEF0dHIgPSBuZXcgJHdpbmRvdy5pZGVudGlmaUxpYi5BdHRyaWJ1dGUoJHNjb3BlLmlkVHlwZSwgJHNjb3BlLmlkVmFsdWUpXG4gICAgICAkc2NvcGUuaWRVcmwgPSAkc2NvcGUuZ2V0SWRVcmwoJHNjb3BlLmlkVHlwZSwgJHNjb3BlLmlkVmFsdWUpXG4gICAgICAkc2NvcGUuaXNDdXJyZW50VXNlciA9ICRzY29wZS5hdXRoZW50aWNhdGlvbiBhbmRcbiAgICAgICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnVzZXIgYW5kXG4gICAgICAgICRzY29wZS5pZFR5cGUgPT0gJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnVzZXIuaWRUeXBlIGFuZFxuICAgICAgICAkc2NvcGUuaWRWYWx1ZSA9PSAkc2NvcGUuYXV0aGVudGljYXRpb24udXNlci5pZFZhbHVlXG4gICAgICAkc2NvcGUuaXNVbmlxdWVUeXBlID0gJHdpbmRvdy5pZGVudGlmaUxpYi5BdHRyaWJ1dGUuaXNVbmlxdWVUeXBlKCRzY29wZS5pZFR5cGUpXG4gICAgICBpZiAhJHNjb3BlLmlzVW5pcXVlVHlwZVxuICAgICAgICAkc3RhdGUuZ28gJ2lkZW50aXRpZXMubGlzdCcsIHsgc2VhcmNoOiAkc2NvcGUuaWRWYWx1ZSB9XG4gICAgICAgICRzY29wZS50YWJzWzJdLmFjdGl2ZSA9IHRydWUgaWYgJHNjb3BlLnRhYnNcbiAgICAgICRzY29wZS5zZXRQYWdlVGl0bGUgJHNjb3BlLmlkVmFsdWVcbiAgICAgICRzY29wZS5pZGVudGl0eSA9ICRzY29wZS5pZGVudGlmaUluZGV4LmdldCgkc2NvcGUuaWRUeXBlLCAkc2NvcGUuaWRWYWx1ZSlcbiAgICAgICRzY29wZS5zZXRJZGVudGl0eU5hbWVzKCRzY29wZS5pZGVudGl0eSwgZmFsc2UsIHRydWUpXG4gICAgICAkc2NvcGUuaWRlbnRpdHkuZ3VuLm9uIChkYXRhKSAtPlxuICAgICAgICAkc2NvcGUuaWRlbnRpdHkuZGF0YSA9IGRhdGFcbiAgICAgICRzY29wZS5nZXRBdHRyaWJ1dGVzKClcbiAgICAgICRzY29wZS5nZXRTZW50TXNncygpXG4gICAgICAkc2NvcGUuZ2V0UmVjZWl2ZWRNc2dzKClcbiAgICAgICRzY29wZS5pZGVudGl0eS5ndW4uZ2V0KCdzY29yZXMnKS5vcGVuIChzY29yZXMpIC0+XG4gICAgICAgICRzY29wZS5zY29yZXMgPSBzY29yZXNcblxuICAgIGxvYWQgPSAtPlxuICAgICAgaWYgJHNjb3BlLmlkZW50aWZpSW5kZXhcbiAgICAgICAgaWYgJHN0YXRlLmlzICdpZGVudGl0aWVzLnNob3cnXG4gICAgICAgICAgJHNjb3BlLmZpbmRPbmUoKVxuXG4gICAgICAgIGlmICRzdGF0ZS5pcyAnaWRlbnRpdGllcy5jcmVhdGUnXG4gICAgICAgICAgZm9jdXMoJ2lkTmFtZUZvY3VzJylcbiAgICAgICAgICAkc2NvcGUubmV3RW50cnkubmFtZSA9ICRzY29wZS5jYXBpdGFsaXplV29yZHMoJHNjb3BlLnF1ZXJ5LnRlcm0pXG4gICAgJHNjb3BlLiR3YXRjaCAnaWRlbnRpZmlJbmRleCcsIGxvYWRcblxuICAgICRzY29wZS5xclNjYW5TdWNjZXNzID0gKGRhdGEpIC0+XG4gICAgICBhID0gZGF0YS5zcGxpdCgnLycpXG4gICAgICBpZiBhLmxlbmd0aCA+IDRcbiAgICAgICAgdHlwZSA9IGRlY29kZVVSSUNvbXBvbmVudChhW2EubGVuZ3RoIC0gMl0pXG4gICAgICAgIHZhbHVlID0gZGVjb2RlVVJJQ29tcG9uZW50KGFbYS5sZW5ndGggLSAxXS5zcGxpdCgnPycpWzBdKVxuICAgICAgICBjb25zb2xlLmxvZyAndmFsdWUnLCB2YWx1ZVxuICAgICAgICBjb25zb2xlLmxvZyAnZGF0YScsIGRhdGFcbiAgICAgICAgJHN0YXRlLmdvICdpZGVudGl0aWVzLnNob3cnLCB7dHlwZSwgdmFsdWV9XG4gICAgICBlbHNlXG4gICAgICAgIGNvbnNvbGUubG9nICdVbnJlY29nbml6ZWQgaWRlbnRpdHkgdXJsJywgZGF0YVxuICAgICRzY29wZS5xclNjYW5FcnJvciA9IChlKSAtPlxuICAgICAgIyB0aGlzIGlzIGNhbGxlZCBlYWNoIHRpbWUgYSBRUiBjb2RlIGlzIG5vdCBmb3VuZCBvbiB0aGUgY2FtZXJhXG4gICAgICAjIGNvbnNvbGUuZXJyb3IgZVxuXVxuIl19

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
  angular.module('identifiAngular').config(function($stateProvider, $urlRouterProvider, $locationProvider) {
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
    }).state('privacy', {
      url: '/privacy',
      templateUrl: 'app/main/privacy-policy.html',
      title: 'Identifi - Privacy policy'
    });
    return $urlRouterProvider.otherwise('');
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgucm91dGUuanMiLCJzb3VyY2VzIjpbImluZGV4LnJvdXRlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsaUJBQWYsQ0FDRSxDQUFDLE1BREgsQ0FDVSxRQUFBLENBQUMsY0FBRCxFQUFpQixrQkFBakIsRUFBcUMsaUJBQXJDLENBQUE7SUFDTjtJQUNBLGlCQUFpQixDQUFDLFVBQWxCLENBQTZCLEVBQTdCO0lBQ0EsY0FDRSxDQUFDLEtBREgsQ0FDUyxZQURULEVBRUk7TUFBQSxHQUFBLEVBQUssV0FBTDtNQUNBLFFBQUEsRUFBVSxZQURWO01BRUEsUUFBQSxFQUFVO0lBRlYsQ0FGSixDQUtFLENBQUMsS0FMSCxDQUtTLGlCQUxULEVBTUk7TUFBQSxHQUFBLEVBQUssRUFBTDtNQUNBLFdBQUEsRUFBYSwwQkFEYjtNQUVBLFVBQUEsRUFBWSxzQkFGWjtNQUdBLFlBQUEsRUFBYyxZQUhkO01BSUEsTUFBQSxFQUNFO1FBQUEsTUFBQSxFQUFRO01BQVIsQ0FMRjtNQU1BLEtBQUEsRUFBTztJQU5QLENBTkosQ0FhRSxDQUFDLEtBYkgsQ0FhUyxtQkFiVCxFQWNJO01BQUEsR0FBQSxFQUFLLFNBQUw7TUFDQSxXQUFBLEVBQWEsNEJBRGI7TUFFQSxVQUFBLEVBQVksc0JBRlo7TUFHQSxZQUFBLEVBQWM7SUFIZCxDQWRKLENBa0JFLENBQUMsS0FsQkgsQ0FrQlMsaUJBbEJULEVBbUJJO01BQUEsR0FBQSxFQUFLLGVBQUw7TUFDQSxXQUFBLEVBQWEsMEJBRGI7TUFFQSxVQUFBLEVBQVksc0JBRlo7TUFHQSxZQUFBLEVBQWM7SUFIZCxDQW5CSixDQXVCRSxDQUFDLEtBdkJILENBdUJTLFVBdkJULEVBd0JJO01BQUEsR0FBQSxFQUFLLEVBQUw7TUFDQSxRQUFBLEVBQVUsWUFEVjtNQUVBLFFBQUEsRUFBVTtJQUZWLENBeEJKLENBMkJFLENBQUMsS0EzQkgsQ0EyQlMsZUEzQlQsRUE0Qkk7TUFBQSxHQUFBLEVBQUssRUFBTDtNQUNBLFdBQUEsRUFBYSx3QkFEYjtNQUVBLFVBQUEsRUFBWSxvQkFGWjtNQUdBLFlBQUEsRUFBYyxVQUhkO01BSUEsS0FBQSxFQUFPO0lBSlAsQ0E1QkosQ0FpQ0UsQ0FBQyxLQWpDSCxDQWlDUyxlQWpDVCxFQWtDSTtNQUFBLEdBQUEsRUFBSyxlQUFMO01BQ0EsV0FBQSxFQUFhLHdCQURiO01BRUEsVUFBQSxFQUFZLG9CQUZaO01BR0EsWUFBQSxFQUFjO0lBSGQsQ0FsQ0osQ0FzQ0UsQ0FBQyxLQXRDSCxDQXNDUyxPQXRDVCxFQXVDSTtNQUFBLEdBQUEsRUFBSyxRQUFMO01BQ0EsV0FBQSxFQUFhLHFCQURiO01BRUEsS0FBQSxFQUFPO0lBRlAsQ0F2Q0osQ0EwQ0UsQ0FBQyxLQTFDSCxDQTBDUyxVQTFDVCxFQTJDSTtNQUFBLEdBQUEsRUFBSyxXQUFMO01BQ0EsV0FBQSxFQUFhLHdCQURiO01BRUEsS0FBQSxFQUFPO0lBRlAsQ0EzQ0osQ0E4Q0UsQ0FBQyxLQTlDSCxDQThDUyxTQTlDVCxFQStDSTtNQUFBLEdBQUEsRUFBSyxVQUFMO01BQ0EsV0FBQSxFQUFhLDhCQURiO01BRUEsS0FBQSxFQUFPO0lBRlAsQ0EvQ0o7V0FtREEsa0JBQWtCLENBQUMsU0FBbkIsQ0FBNkIsRUFBN0I7RUF0RE0sQ0FEVjtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUgJ2lkZW50aWZpQW5ndWxhcidcbiAgLmNvbmZpZyAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlciwgJGxvY2F0aW9uUHJvdmlkZXIpIC0+XG4gICAgJ25nSW5qZWN0J1xuICAgICRsb2NhdGlvblByb3ZpZGVyLmhhc2hQcmVmaXgoJycpXG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSAnaWRlbnRpdGllcycsXG4gICAgICAgIHVybDogJy9jb250YWN0cydcbiAgICAgICAgdGVtcGxhdGU6IFwiPHVpLXZpZXcvPlwiXG4gICAgICAgIGFic3RyYWN0OiB0cnVlXG4gICAgICAuc3RhdGUgJ2lkZW50aXRpZXMubGlzdCcsXG4gICAgICAgIHVybDogJydcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvaWRlbnRpdGllcy9saXN0Lmh0bWwnXG4gICAgICAgIGNvbnRyb2xsZXI6ICdJZGVudGl0aWVzQ29udHJvbGxlcidcbiAgICAgICAgY29udHJvbGxlckFzOiAnaWRlbnRpdGllcydcbiAgICAgICAgcGFyYW1zOlxuICAgICAgICAgIHNlYXJjaDogJydcbiAgICAgICAgdGl0bGU6ICdJZGVudGlmaSAtIENvbnRhY3RzJ1xuICAgICAgLnN0YXRlICdpZGVudGl0aWVzLmNyZWF0ZScsXG4gICAgICAgIHVybDogJy9jcmVhdGUnXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2lkZW50aXRpZXMvY3JlYXRlLmh0bWwnXG4gICAgICAgIGNvbnRyb2xsZXI6ICdJZGVudGl0aWVzQ29udHJvbGxlcidcbiAgICAgICAgY29udHJvbGxlckFzOiAnaWRlbnRpdGllcydcbiAgICAgIC5zdGF0ZSAnaWRlbnRpdGllcy5zaG93JyxcbiAgICAgICAgdXJsOiAnLzp0eXBlLzp2YWx1ZSdcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvaWRlbnRpdGllcy9zaG93Lmh0bWwnXG4gICAgICAgIGNvbnRyb2xsZXI6ICdJZGVudGl0aWVzQ29udHJvbGxlcidcbiAgICAgICAgY29udHJvbGxlckFzOiAnaWRlbnRpdGllcydcbiAgICAgIC5zdGF0ZSAnbWVzc2FnZXMnLFxuICAgICAgICB1cmw6ICcnXG4gICAgICAgIHRlbXBsYXRlOiBcIjx1aS12aWV3Lz5cIlxuICAgICAgICBhYnN0cmFjdDogdHJ1ZVxuICAgICAgLnN0YXRlICdtZXNzYWdlcy5saXN0JyxcbiAgICAgICAgdXJsOiAnJ1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9tZXNzYWdlcy9saXN0Lmh0bWwnXG4gICAgICAgIGNvbnRyb2xsZXI6ICdNZXNzYWdlc0NvbnRyb2xsZXInXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ21lc3NhZ2VzJ1xuICAgICAgICB0aXRsZTogJ0lkZW50aWZpJ1xuICAgICAgLnN0YXRlICdtZXNzYWdlcy5zaG93JyxcbiAgICAgICAgdXJsOiAnL21lc3NhZ2VzLzppZCdcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbWVzc2FnZXMvc2hvdy5odG1sJ1xuICAgICAgICBjb250cm9sbGVyOiAnTWVzc2FnZXNDb250cm9sbGVyJ1xuICAgICAgICBjb250cm9sbGVyQXM6ICdtZXNzYWdlcydcbiAgICAgIC5zdGF0ZSAnYWJvdXQnLFxuICAgICAgICB1cmw6ICcvYWJvdXQnXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL21haW4vYWJvdXQuaHRtbCdcbiAgICAgICAgdGl0bGU6ICdJZGVudGlmaSAtIEFib3V0J1xuICAgICAgLnN0YXRlICdzZXR0aW5ncycsXG4gICAgICAgIHVybDogJy9zZXR0aW5ncydcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbWFpbi9zZXR0aW5ncy5odG1sJ1xuICAgICAgICB0aXRsZTogJ0lkZW50aWZpIC0gU2V0dGluZ3MnXG4gICAgICAuc3RhdGUgJ3ByaXZhY3knLFxuICAgICAgICB1cmw6ICcvcHJpdmFjeSdcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbWFpbi9wcml2YWN5LXBvbGljeS5odG1sJ1xuICAgICAgICB0aXRsZTogJ0lkZW50aWZpIC0gUHJpdmFjeSBwb2xpY3knXG5cbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlICcnXG4iXX0=

(function() {
  angular.module('identifiAngular').constant('config', {
    defaultFilters: {
      type: null,
      limit: 10,
      maxDistance: 0
    }
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29uc3RhbnRzLmpzIiwic291cmNlcyI6WyJpbmRleC5jb25zdGFudHMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUNFLENBQUMsUUFESCxDQUNZLFFBRFosRUFFSTtJQUFBLGNBQUEsRUFDRTtNQUFBLElBQUEsRUFBTSxJQUFOO01BQ0EsS0FBQSxFQUFPLEVBRFA7TUFFQSxXQUFBLEVBQWE7SUFGYjtFQURGLENBRko7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdpZGVudGlmaUFuZ3VsYXInKVxuICAuY29uc3RhbnQgJ2NvbmZpZycsXG4gICAgZGVmYXVsdEZpbHRlcnM6XG4gICAgICB0eXBlOiBudWxsXG4gICAgICBsaW1pdDogMTBcbiAgICAgIG1heERpc3RhbmNlOiAwXG4iXX0=

(function() {
  angular.module('identifiAngular').config(function($logProvider) {
    'ngInject';
    // Enable log
    return $logProvider.debugEnabled(true);
  });

  // Set options third-party lib

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29uZmlnLmpzIiwic291cmNlcyI6WyJpbmRleC5jb25maWcuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUNFLENBQUMsTUFESCxDQUNVLFFBQUEsQ0FBQyxZQUFELENBQUE7SUFDTixXQUFBOztXQUVBLFlBQVksQ0FBQyxZQUFiLENBQTBCLElBQTFCO0VBSE0sQ0FEVjs7RUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUgJ2lkZW50aWZpQW5ndWxhcidcbiAgLmNvbmZpZyAoJGxvZ1Byb3ZpZGVyKSAtPlxuICAgICduZ0luamVjdCdcbiAgICAjIEVuYWJsZSBsb2dcbiAgICAkbG9nUHJvdmlkZXIuZGVidWdFbmFibGVkIHRydWVcbiAgICAjIFNldCBvcHRpb25zIHRoaXJkLXBhcnR5IGxpYlxuIl19

angular.module('identifiAngular').run(['$templateCache', function($templateCache) {$templateCache.put('app/identities/create.html','<div class="container mar-bot30" ng-controller=IdentitiesController><div class=row><div class="col-xs-8 col-sm-6 col-sm-offset-2"><h3>Add contact</h3></div><div class="col-xs-4 col-sm-2"><button ng-click=openReadQRModal() class="btn btn-default pull-right"><span class="glyphicon glyphicon-qrcode"></span> Scan QR</button></div></div><div class=row><div class="col-xs-12 col-sm-8 col-sm-offset-2"><div class="panel panel-danger" ng-if=error><div class=panel-heading ng-bind=error></div></div><div class="panel panel-info" ng-hide=authentication.user><div class=panel-heading>Please log in to add contacts.</div></div><form class=form name=addEntryForm ng-submit="addEntry($event, newEntry)"><div class=form-group><label for=idName>Name *</label> <input type=text required autofocus id=idName focus-on=idNameFocus name=idName ng-model=newEntry.name class=form-control></div><div class=form-group ng-class="{ \'has-error\': addEntryForm.idEmail.$invalid }"><label for=idEmail>Email</label> <input type=email id=idEmail name=idEmail ng-model=newEntry.email class=form-control></div><div class=form-group ng-class="{ \'has-error\': addEntryForm.idUrl.$invalid }"><label for=idUrl>Url</label> <input type=url id=idUrl name=idUrl ng-model=newEntry.url class=form-control><p class=help-block>Social media profile or other personal url</p></div><button class="btn btn-primary" ng-disabled="loggingIn || !(authentication.user && !(addEntryForm.idName.$invalid || addEntryForm.idEmail.$invalid || addEntryForm.idPhone.$invalid || addEntryForm.idUrl.$invalid))">Add public contact</button><p class=help-block>More details can be added afterwards.</p><p><a ui-sref=privacy>Privacy policy</a></p></form></div></div></div>');
$templateCache.put('app/identities/list.html','<div class="container no-padding-xs"><section><div class=mar-top25-xs></div><div ng-if=!query.term ng-include="\'app/main/getstarted.partial.html\'"></div><table ng-init="filters.limit = 10" id=search-results class="table table-hover" infinite-scroll="filters.limit = filters.limit + 1" infinite-scroll-distance=1 infinite-scroll-disabled="!identifiIndex || !ids || !ids.list || ids.list.length < filters.limit || filteredIds.length < filters.limit"><tbody><tr ng-class="{active: ids.activeKey == -1}" ui-sref=identities.create class=search-result-row><td class="gravatar-col align-center"><span style=line-height:46px class="glyphicon glyphicon-plus"></span></td><td><a ui-sref=identities.create>Add contact<span ng-if=query.term>: <span ng-bind=capitalizeWords(query.term)></span></span></a></td></tr><tr ng-repeat="result in ids.list | orderBy:result.data.trustDistance | limitTo:filters.limit as filteredIds track by (result.linkTo.value + result.linkTo.type)" id=result{{$index}} ui-sref="identities.show({ type: result.linkTo.type, value: result.linkTo.value })" class=search-result-row ng-class="{active: result.active}"><td class=gravatar-col><identicon identity=result border=3 width=50 positive-score=result.pos negative-score=result.neg ipfs=ipfs></identicon></td><td><span ng-if="result.data.trustDistance == 0" class="label label-default pull-right">viewpoint</span> <span ng-if="result.data.trustDistance > 0 && result.data.trustDistance < 99" ng-bind="result.data.trustDistance | ordinal" class="label label-default pull-right"></span> <span ng-if="result.data.trustDistance == 99" class="label label-default pull-right">unconnected</span> <a ng-bind-html=result.primaryName|highlight:query.term ui-sref="identities.show({ type: result.linkTo.type, value: result.linkTo.value })"></a> <span class="glyphicon glyphicon-ok-sign" style=color:#337ab7 ng-if=result.verified></span> <small ng-if=!(result.mostVerifiedAttributes.type||result.mostVerifiedAttributes.nickname) class=list-group-item-text><span ng-bind-html=result.data.attrs.type.type|highlight:query.term></span></small><br><small><span ng-if=result.nickname ng-bind-html=result.nickname|highlight:query.term class=mar-right10></span> <span ng-if=result.profile.email class=mar-right10><span class="glyphicon glyphicon-envelope"></span> <span ng-bind-html=result.profile.email|highlight:query.term></span> </span><span ng-if=result.profile.facebook class=mar-right10><span class="fa fa-facebook"></span> <span ng-bind-html=result.profile.facebook|highlight:query.term></span> </span><span ng-if=result.profile.twitter class=mar-right10><span class="fa fa-twitter"></span> <span ng-bind-html=result.profile.twitter|highlight:query.term></span> </span><span ng-if=result.profile.googlePlus class=mar-right10><span class="fa fa-google-plus"></span> <span ng-bind-html=result.profile.googlePlus|highlight:query.term></span> </span><span ng-if=result.mostVerifiedAttributes.bitcoin class=mar-right10><span class="fa fa-bitcoin"></span> <span ng-bind-html=result.mostVerifiedAttributes.bitcoin.attribute.val|highlight:query.term></span></span></small></td></tr></tbody></table><div class="alert alert-info text-center" ng-if=!ids.list.length>No results</div></section></div>');
$templateCache.put('app/identities/readqr.modal.html','<div class="col-md-10 col-md-offset-1" ng-controller=IdentitiesController><div class="panel panel-default mar-top15"><div class="panel-heading text-center"><div><qr-scanner width=400 height=300 ng-success=qrScanSuccess(data) ng-error=qrScanError(error)></qr-scanner></div><!-- <div class="mar-top15 mar-bot10"><button ng-click="shareModal.close()" class="btn btn-default">Close</button></div> --></div></div></div>');
$templateCache.put('app/identities/share.modal.html','<div class="col-md-10 col-md-offset-1" ng-controller=IdentitiesController><div class="panel panel-default mar-top15"><div class="panel-heading text-center"><p><button ng-click=copyToClipboard(idUrl) class="btn btn-primary mar-top10">Copy link to this page</button></p><div class="mar-top20 mar-bot10"><qrcode data={{idUrl}} size=240></qrcode></div><!-- <div class="mar-top15 mar-bot10"><button ng-click="shareModal.close()" class="btn btn-default">Close</button></div> --></div></div></div>');
$templateCache.put('app/identities/show.html','<section class=cover-container><div ng-click=openCoverPhotoUploadModal() class=cover parallax-background parallax-ratio=-0.2 ng-style=coverPhoto></div><div class="container hidden-xs hidden-sm"><div class="heading-row row"><div class="col-md-8 col-md-offset-3"><h4 ng-show="idType === \'keyID\' || idType === \'uuid\'"><identicon identity=idAttr width=35></identicon><button class="btn btn-default mar-left15" ng-click=openShareModal()><span class="glyphicon glyphicon-qrcode mar-right5"></span> Share</button></h4><h4 ng-hide="idType === \'keyID\' || idType === \'uuid\'"><span ng-bind=idValue class=idValue></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType class=idType></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType class=idType></a> </small><button class="btn btn-default mar-left15" ng-click=openShareModal()><span class="glyphicon glyphicon-qrcode mar-right5"></span> Share</button></h4></div></div><div class=row><div class="col-md-9 col-md-offset-3"><ul class="list-inline tab-list"><li ng-if=isUniqueType><a href="" ng-class="{ active: activeTab == 1 }" ng-click=activateTab(1)><span class=hidden-xs>Received </span>({{0+identity.data.receivedPositive+identity.data.receivedNeutral+identity.data.receivedNegative || received.length}})</a></li><li ng-if=isUniqueType><a href="" ng-class="{ active: activeTab == 2 }" ng-click=activateTab(2)><span class=hidden-xs>Sent </span>({{0+identity.data.sentPositive+identity.data.sentNeutral+identity.data.sentNegative || sent.length}})</a></li><li><a href="" ng-class="{ active: activeTab == 3 }" ng-click=activateTab(3)><span class=hidden-xs>Identity </span>(<span ng-bind="attributesLength || 0"></span>)</a></li></ul></div></div></div></section><div class=container><div><section><div class=row><div class="col-md-3 id-left-column"><div ng-if=isUniqueType><div><p class="hidden-md hidden-lg" ng-hide=!stats.name><span ng-bind=idValue class=idValue></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType class=idType></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType class=idType></a></small></p><div class=stats-box><div class=row><div class=col-xs-12><p class=align-center><identicon ng-click=openProfilePhotoUploadModal() identity=identity ipfs=ipfs border=4 show-distance=0 width=230 ng-if=hideProfilePhoto></identicon><identicon ng-click=openProfilePhotoUploadModal() identity=identity ipfs=ipfs border=4 show-distance=0 width=230 ng-if=!hideProfilePhoto></identicon></p></div></div><div class=row><div class=col-xs-12><h4><span class="visible-xs-inline-block visible-sm-inline-block mar-right15"><span ng-show="idType === \'keyID\' || idType === \'uuid\'"><identicon identity=idAttr width=35></identicon></span><span ng-hide="idType === \'keyID\' || idType === \'uuid\'"><span ng-if=!(identity.data.mostVerifiedAttributes.name||identity.data.mostVerifiedAttributes.nickname)><span ng-bind=idValue class=idValue></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType class=idType></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType class=idType></a> </small></span></span></span><span ng-bind=identity.primaryName></span> <span class="glyphicon glyphicon-ok-sign" style=color:#337ab7 uib-tooltip="Verified by a trusted verifier" ng-if=identity.verified></span> <span ng-hide="!identity.data.mostVerifiedAttributes.nickname || identity.data.mostVerifiedAttributes.nickname == identity.data.mostVerifiedAttributes.primaryName">(<span class=text-muted ng-bind=identity.nickname></span>) </span><button class="mar-left15 visible-xs-inline-block visible-sm-inline-block btn btn-default" ng-click=openShareModal()><span class="glyphicon glyphicon-share mar-right5"></span> Share</button> <span ng-if="identity.data.trustDistance == 0" class="label label-default pull-right">viewpoint</span> <span ng-if="identity.data.trustDistance > 0 && identity.data.trustDistance < 99" ng-bind="identity.data.trustDistance | ordinal" class="label label-default pull-right"></span> <span ng-if="identity.data.trustDistance == 99" class="label label-default pull-right">unconnected</span></h4></div></div><div class=row><div class="col-xs-12 col-sm-6 col-md-12 mar-bot10 mar-top10"><div class=mar-bot10 ng-if="authentication.user && !identity.hasProperName && !nameAdded"><a href="" ng-click=addName() ng-hide=addingName>Add name</a><form class=form-inline ng-show=addingName ng-submit=addName(name)><div class=form-group><input focus-on=addNameFocus type=text class=form-control ng-model=name placeholder="Add name"></div><button type=submit class="btn btn-default"><span class="glyphicon glyphicon-plus"></span></button></form></div><p><b>Received: <span ng-if="identity.data.receivedPositive || identity.data.receivedNegative"><span ng-bind="identity.data.receivedPositive / (identity.data.receivedPositive+identity.data.receivedNeutral+identity.data.receivedNegative) * 100 | number:0"></span>% positive </span><span ng-if="!(identity.data.receivedPositive || identity.data.receivedNegative)">&mdash;</span></b><br>Sent: <span ng-if="identity.data.sentPositive || identity.data.sentNegative"><span ng-bind="identity.data.sentPositive / (identity.data.sentPositive+identity.data.sentNeutral+identity.data.sentNegative) * 100 | number:0"></span>% positive </span><span ng-if="!(identity.data.sentPositive || identity.data.sentNegative)">&mdash;</span></p><!--\n                <p class="received-stats">\n                  <div><strong>Received</strong></div>\n                  <div>\n                    <strong>\n                      <span class="positive"><span class="glyphicon glyphicon-thumbs-up"></span> <span ng-bind="identity.data.receivedPositive">-</span></span>\n                      <span class="neutral"><span class="glyphicon glyphicon-question-sign"></span> <span ng-bind="identity.data.receivedNeutral">-</span></span>\n                      <span class="negative"><span class="glyphicon glyphicon-thumbs-down"></span> <span ng-bind="identity.data.receivedNegative">-</span></span>\n                    </strong>\n                  </div>\n                </p>\n                <p>\n                  <div>Sent</div>\n                  <div>\n                    <span class="positive"><span class="glyphicon glyphicon-thumbs-up"></span> <span ng-bind="identity.data.sentPositive">-</span></span>\n                    <span class="neutral"><span class="glyphicon glyphicon-question-sign"></span> <span ng-bind="identity.data.sentNeutral">-</span></span>\n                    <span class="negative"><span class="glyphicon glyphicon-thumbs-down"></span> <span ng-bind="identity.data.sentNegative">-</span></span>\n                  </div>\n                </p> --><div ng-if="scores.verifier && scores.verifier.score > 0" class="text-center alert alert-info"><span class="fa fa-shield" style=font-size:2em></span><p>This identity is a <b>trusted verifier</b> in this web of trust. It can grant verification checkmarks.</p></div><div ng-if=isUniqueType class="mar-top10 quick-contact"><ul class=list-unstyled><li ng-repeat="a in attributes" ng-if=a.quickContact><a ng-href={{a.link}}><span ng-class=a.iconStyle></span><span ng-bind="a.linkName || a.value"></span></a></li><li ng-if=stats.first_seen><span class="fa fa-calendar"></span>First seen: <span ng-if=stats.first_seen ng-bind="stats.first_seen|date:\'mediumDate\'"></span> <span ng-if=!stats.first_seen>&mdash;</span></li></ul></div></div><div class="col-xs-12 col-sm-6 col-md-12 mar-top10"><div ng-if="isUniqueType && hasThumbsUp" class="stats-box mar-bot10"><h5>Thumbs up</h5><a ng-repeat="msg in thumbsUp | orderBy:\'authorTrustDistance\'" ng-class="{ \'hidden-xs\': $index > 3, \'hidden-sm\': $index > 4 }" class="mar-right5 mar-bot5" ui-sref="identities.show({ type: msg.linkToAuthor.type, value: msg.linkToAuthor.value })" uib-tooltip="{{ msg.author_name || msg.linkToAuthor.value }}"><identicon ipfs=ipfs identity=msg.author class=no-glow border=3 width=60></identicon></a></div><div ng-if="isUniqueType && hasThumbsDown" class="stats-box mar-bot10"><h5>Thumbs down</h5><a ng-repeat="msg in thumbsDown | orderBy:\'authorTrustDistance\'" ng-class="{ \'hidden-xs\': $index > 3, \'hidden-sm\': $index > 4 }" class="mar-right5 mar-bot5" ui-sref="identities.show({ type: msg.linkToAuthor.type, value: msg.linkToAuthor.value })" uib-tooltip="{{ msg.author_name || msg.linkToAuthor.value }}"><identicon ipfs=ipfs identity=msg.author class=no-glow border=3 width=60></identicon></a></div></div></div></div></div></div><div class=hidden-xs ng-include="\'app/messages/distance-selector.partial.html\'"></div></div><div class="col-md-8 id-right-column"><!-- Nav tabs --><div ng-include="\'app/main/createuser.partial.html\'"></div><uib-tabset active=activeTab><uib-tab index=1 ng-if=isUniqueType><uib-tab-heading><span class=hidden-xs>Received ({{0+identity.data.receivedPositive+identity.data.receivedNeutral+identity.data.receivedNegative}})</span> <span class=visible-xs>Recv ({{0+identity.data.receivedPositive+identity.data.receivedNeutral+identity.data.receivedNegative}})</span></uib-tab-heading><div ng-if=isCurrentUser ng-include="\'app/main/getstarted.partial.html\'"></div><div class="panel panel-info" ng-if="!isCurrentUser && authentication.user && authentication.identity.data && !authentication.identity.data.sentPositive"><div class=panel-heading>Trust this user? Upvote them to see their posts!</div></div><div ng-style=newMessage.style ng-show="!loggingIn && authentication.user && !isCurrentUser" class="panel panel-default panel-success" id=newRatingPanel><div class=panel-body id=write-feedback><form ng-controller=MessagesController ng-submit="createMessage($event, { type: \'rating\', rating: newMessage.rating, comment: newMessage.comment })"><div class=form-group><textarea name=comment class=form-control id=comment ng-model=newMessage.comment ng-disabled=addingMessage placeholder="Write feedback"></textarea></div><div class=row><div class="col-sm-10 col-xs-12 rating-slider" id=write-msg-slider><rzslider rz-slider-model=newMessage.rating rz-slider-options=slider.options min=-3 max=3 step=1></rzslider><span class="hidden-xs write-msg-icons mar-left5"><span ng-repeat="i in iconCount(newMessage.rating) track by $index" class="write-msg-icon glyphicon glyphicon-thumbs-up mar-left5" ng-class="[iconStyle(newMessage.rating), iconClass(newMessage.rating)]"></span></span></div><div class="col-sm-2 col-xs-12" style=text-align:right><span class="visible-xs pull-left write-msg-icons"><span ng-repeat="i in iconCount(newMessage.rating) track by $index" class="write-msg-icon glyphicon glyphicon-thumbs-up mar-left5" ng-class="[iconStyle(newMessage.rating), iconClass(newMessage.rating)]"></span> </span><button ng-disabled=addingMessage type=submit class="pull-right btn btn-primary" data-style=zoom-out><span><span class="fa fa-edit"></span> Publish</span><span></span></button></div></div></form></div></div><div infinite-scroll=getReceivedMsgs() infinite-scroll-distance=2 infinite-scroll-disabled="true || !identity || activeTab != 1"><div class=panel ng-class="{\'mar-bot5\': (filters.type.indexOf(\'rating\') === 0)}"><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === null) }" ng-click="setFilters({ type: null })"><a>All</a></li><li ng-class="{active: (filters.type === \'rating\') }" ng-click="setFilters({type: \'rating\'})"><a>Rating</a></li><li ng-class="{active: (filters.type === \'verification\') }" ng-click="setFilters({type:\'verification\'})"><a>Verification</a></li></ul></div></div><div class=panel ng-show="filters.type.indexOf(\'rating\') === 0"><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === \'rating:positive\') }" ng-click="setFilters({type: \'rating:positive\'})"><a><span class=positive><span class="visible-xs-inline glyphicon glyphicon-thumbs-up"></span><span class=hidden-xs>Pos<span class=hidden-md>itive</span></span> ({{0+identity.data.receivedPositive}})</span></a></li><li ng-class="{active: (filters.type === \'rating:neutral\') }" ng-click="setFilters({type: \'rating:neutral\'})"><a><span class=neutral><span class="visible-xs-inline glyphicon glyphicon-question-sign"></span><span class=hidden-xs>Neut<span class=hidden-md>ral</span></span> ({{0+identity.data.receivedNeutral}})</span></a></li><li ng-class="{active: (filters.type === \'rating:negative\') }" ng-click="setFilters({type: \'rating:negative\'})"><a><span class=negative><span class="visible-xs-inline glyphicon glyphicon-thumbs-down"></span><span class=hidden-xs>Neg<span class=hidden-md>ative</span></span> ({{0+identity.data.receivedNegative}})</span></a></li></ul></div></div><message ipfs=ipfs msg-data=msg page-info=identity ng-repeat="msg in received | filter:msgFilter | orderBy:\'signedData.timestamp\' : true as receivedFiltered" ng-click="openMessage($event, msg, \'lg\')"></message></div><div ng-if="!isCurrentUser && receivedFiltered.length == 0" class="alert alert-info text-center">No messages yet</div></uib-tab><uib-tab index=2 ng-if=isUniqueType><uib-tab-heading>Sent ({{0+identity.data.sentPositive+identity.data.sentNeutral+identity.data.sentNegative}})</uib-tab-heading><div infinite-scroll=getSentMsgs() infinite-scroll-distance=2 infinite-scroll-disabled="true || !identity ||\xA0activeTab != 2"><div class=panel ng-class="{\'mar-bot5\': (filters.type.indexOf(\'rating\') === 0)}"><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === null) }" ng-click="setFilters({ type: null })"><a>All</a></li><li ng-class="{active: (filters.type === \'rating\') }" ng-click="setFilters({type: \'rating\'})"><a>Rating</a></li><li ng-class="{active: (filters.type === \'verification\') }" ng-click="setFilters({type:\'verification\'})"><a>Verification</a></li><!-- <li ><a href="#" data-val="other"><span class="glyphicon glyphicon-question-sign"></span> Other</a></li> --></ul></div></div><div ng-show="filters.type.indexOf(\'rating\') === 0" class=panel><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === \'rating:positive\') }" ng-click="setFilters({type: \'rating:positive\'})"><a><span class=positive><span class="visible-xs-inline glyphicon glyphicon-thumbs-up"></span><span class=hidden-xs>Pos<span class=hidden-md>itive</span></span> ({{0+identity.data.sentPositive}})</span></a></li><li ng-class="{active: (filters.type === \'rating:neutral\') }" ng-click="setFilters({type: \'rating:neutral\'})"><a><span class=neutral><span class="visible-xs-inline glyphicon glyphicon-question-sign"></span><span class=hidden-xs>Neut<span class=hidden-md>ral</span></span> ({{0+identity.data.sentNeutral}})</span></a></li><li ng-class="{active: (filters.type === \'rating:negative\') }" ng-click="setFilters({type: \'rating:negative\'})"><a><span class=negative><span class="visible-xs-inline glyphicon glyphicon-thumbs-down"></span><span class=hidden-xs>Neg<span class=hidden-md>ative</span></span> ({{0+identity.data.sentNegative}})</span></a></li></ul></div></div><message ipfs=ipfs msg-data=msg page-info=identity ng-repeat="msg in sent | filter:msgFilter | orderBy:\'signedData.timestamp\' : true as sentFiltered" ng-click="openMessage($event, msg, \'lg\')"></message></div><div ng-if="sentFiltered.length == 0" class="alert alert-info text-center">No messages yet</div></uib-tab><uib-tab index=3><uib-tab-heading>Id<span class=hidden-xs>entity</span> (<span ng-bind="attributesLength || 0"></span>)</uib-tab-heading><div id=connections><!-- <input id="authenticity_token" name="authenticity_token" type="hidden" value="z1JM7ffnFK7gOv6S3yzG9UFyakukYHikAU94/3TcT2o="> --><table class="table truncated-table table-hover"><tbody><tr ng-repeat-start="a in attributes" style={{a.rowStyle}} ng-class=a.rowClass ng-click="!a.isCurrent && connectionClicked($event, id)" class=id-row><td><div><div class="pull-left mar-right15"><a ng-hide="a.type === \'keyID\' || a.type === \'uuid\'" style=min-width:45px class="btn btn-lg btn-social-icon" ng-class=a.btnStyle ng-href={{a.link}}><span ng-class=a.iconStyle></span> <span ng-if=a.iconStyle&&!a.link class="pull-left btn btn-lg btn-social-icon" ng-class=a.btnStyle ng-href={{a.link}}><span ng-class=a.iconStyle></span></span></a><identicon identity=a.attr ng-show="a.attr && (a.type === \'keyID\' || a.type === \'uuid\')" width=45></identicon></div><div class=pull-left><a ui-sref="identities.show({ type: a.type, value: a.value })" ng-bind="a.linkName || a.value" class=id-link></a><br><small ng-bind=a.type></small></div><!--\n                              <input class="form-control linkedComment" type="text" placeholder="comment" disabled>\n                            --><div class=pull-right ng-if=!a.isCurrent><button autocomplete=off name=confirm class="btn btn-default btn-confirm" ng-click="createMessage($event, { type: \'verification\' }, a)" ng-disabled=!authentication.user uib-tooltip=Verify data-style=zoom-out><span class="positive glyphicon glyphicon-ok"></span> {{a.conf}}</button> <button autocomplete=off name=unverify class="btn btn-default btn-unverify" ng-click="createMessage($event, { type: \'unverification\' }, a)" ng-disabled=!authentication.user uib-tooltip=Unverify data-style=zoom-out><span class="negative glyphicon glyphicon-remove"></span> {{a.ref}}</button></div><div class=clear></div></div></td></tr><tr ng-repeat-end ng-if=!a.isCurrent class="active connectingmsgs"><td class=connectingmsgs data-style=zoom-in data-spinner-color=#000><div uib-collapse=!a.collapse><div ng-repeat="msg in a.connecting_msgs" ng-click="openMessage($event, msg, \'lg\')" class=confirmation-panel><span ng-if="msg.data.type === \'verification\'"><span class="positive glyphicon glyphicon-ok hidden-xs mar-left5 pull-right"></span> <span class="positive glyphicon glyphicon-ok visible-xs-inline-block mar-right10"></span> </span><span ng-if="msg.data.type === \'unverification\'"><span class="negative glyphicon glyphicon-remove hidden-xs mar-left5 pull-right"></span> <span class="negative glyphicon glyphicon-remove visible-xs-inline-block mar-right10"></span> </span><strong><a ui-sref="identities.show({ type: msg.linkToAuthor.type, value: msg.linkToAuthor.value })" class=id-link><identicon ipfs=ipfs identity=msg class=mar-right5 border=3 width=30 positive-score=msg.author_pos negative-score=msg.author_neg></identicon><span ng-bind=msg.author_name||msg.data.author.type.value></span> </a></strong>- <span ng-bind="msg.data.timestamp|date:\'mediumDate\'" class="text-muted small" style=display:inline-block;></span></div></div></td></tr><tr class="active add-row"><td><input id=addValue ng-change=guessAttributeType() ng-model=newVerification.value class=form-control name=linkedValue type=text placeholder="value (e.g. alice@example.com)" ng-disabled=!authentication.user> <input id=addType ng-model=newVerification.type class=form-control name=linkedType type=text placeholder="type (e.g. email)" ng-disabled=!authentication.user><!--<td><input id="addComment" class="form-control" name="linkedComment" type="text" placeholder="comment" disabled></td> --> <button autocomplete=off id=addButton ng-click="createMessage($event, { type: \'verification\' }, newVerification)" class="btn btn-default" data-style=zoom-out ng-disabled="!authentication.user || !(newVerification.type && newVerification.value)"><span class="glyphicon glyphicon-plus"></span> Add</button></td></tr></tbody></table></div></uib-tab></uib-tabset></div></div></section></div></div>');
$templateCache.put('app/identities/upload.modal.html','<div class="col-md-10 col-md-offset-1" ng-controller=IdentitiesController><div class="panel panel-default mar-top15"><div class=panel-heading><form name=form><div class="drop-box mar-bot10" ngf-resize="squarify ? {ratio:\'1:1\',centerCrop:true} : {}" ngf-select ngf-drop ng-model=file name=file ngf-pattern="\'image/*\'" ngf-accept="\'image/*\'" ngf-max-size=5MB ngf-min-height=100 style=width:100%;min-height:300px;text-align:center><div ng-if=!file style="padding:120px 0">Drop file or click</div><img ng-if=file ngf-src=file width=70%></div><button class="btn btn-primary" ng-disabled=!file type=submit ng-click=uploadModalCallback(file)>{{ modalButtonText }}</button></form></div></div></div>');
$templateCache.put('app/messages/create.partial.html','<div class="panel panel-default panel-default"><div class=panel-body><form ng-submit="createMessage($event, { type: \'post\', comment: newMessage.comment })"><div class=form-group><textarea style="resize: vertical" ng-disabled="addingMessage || loggingIn || !authentication.user" name=comment class=form-control id=comment ng-model=newMessage.comment placeholder="What\'s on your mind?"></textarea></div><div class=row><div class=col-xs-12><button ng-disabled="addingMessage || loggingIn || !authentication.user || !newMessage.comment" type=submit class="btn btn-primary" data-style=zoom-out><span><span class="fa fa-edit"></span> Publish</span><span></span></button></div></div></form></div></div>');
$templateCache.put('app/messages/distance-selector.partial.html','<div class="text-center alert alert-info">Viewing as:<br class=hidden-sm><span ng-if=viewpoint><a ui-sref="identities.show({ type: viewpoint.type, value: viewpoint.value })" class=id-link><span class="distance-container mar-right5 mar-left5"><identicon ipfs=ipfs identity=viewpoint.identity border=3 width=35></identicon></span><strong ng-bind=viewpoint.mostVerifiedAttributes.name.attribute.value></strong></a></span><br class=hidden-sm>Max distance from viewpoint: <span class="btn-group trust-distance-selector"><button type=button class="btn btn-default" ng-click="setFilters({maxDistance: -1})" ng-class="{active: filters.maxDistance === -1}" uib-tooltip="Distance filter off">\u2715</button> <button type=button class="btn btn-default" ng-click="setFilters({maxDistance: 1})" ng-class="{active: filters.maxDistance === 1}">1</button> <button type=button class="btn btn-default" ng-click="setFilters({maxDistance: 2})" ng-class="{active: filters.maxDistance === 2}">2</button> <button type=button class="btn btn-default" ng-click="setFilters({maxDistance: 3})" ng-class="{active: filters.maxDistance === 3}">3</button> <button type=button class="btn btn-default" ng-click="setFilters({maxDistance: 0})" ng-class="{active: filters.maxDistance === 0}" uib-tooltip=Unlimited>\u221E</button></span></div>');
$templateCache.put('app/messages/filters.partial.html','<div class="panel panel-default"><div class="panel-heading visible-xs visible-sm" ng-click="collapseFilters = !collapseFilters"><h4 class=panel-title><a><span class="fa fa-filter"></span> Filters</a></h4></div><div class="panel-body filters" uib-collapse=collapseFilters><ul class="nav nav-pills nav-stacked msg-type-filter"><li ng-class="{active: (filters.type === null) }" ng-click="setFilters({ type: null })"><a><span class="glyphicon glyphicon-home"></span> All</a></li><li ng-class="{active: (filters.type === \'post\') }" ng-click="setFilters({ type: \'post\' })"><a><span class="fa fa-pencil"></span> Post</a></li><li ng-class="{active: (filters.type === \'rating\') }" ng-click="setFilters({type: \'rating\'})"><a><span class="glyphicon glyphicon-thumbs-up"></span> Rating</a></li><ul class="nav nav-pills nav-stacked" style="padding-left: 1em;"><li ng-class="{active: (filters.type === \'rating:positive\') }" ng-click="setFilters({type: \'rating:positive\'})"><a><span class=positive><span class="glyphicon glyphicon-thumbs-up"></span> Positive</span></a></li><li ng-class="{active: (filters.type === \'rating:neutral\') }" ng-click="setFilters({type: \'rating:neutral\'})"><a><span class=neutral><span class="glyphicon glyphicon-question-sign"></span> Neutral</span></a></li><li ng-class="{active: (filters.type === \'rating:negative\') }" ng-click="setFilters({type: \'rating:negative\'})"><a><span class=negative><span class="glyphicon glyphicon-thumbs-down"></span> Negative</span></a></li></ul><li ng-class="{active: (filters.type === \'verification\') }" ng-click="setFilters({type:\'verification\'})"><a><span class="glyphicon glyphicon-ok"></span> Verification</a></li><!-- <li ><a href="#" data-val="other"><span class="glyphicon glyphicon-question-sign"></span> Other</a></li> --></ul><div ng-include="\'app/messages/distance-selector.partial.html\'"></div></div></div>');
$templateCache.put('app/messages/list.html','<div class=container><section><div ng-if=!authentication.user class=jumbotron><div class=align-center><h1>Social networking freedom</h1></div><div class=row><div class=col-sm-4><div class=align-center><i class="hidden-xs fa fa-download fa-5x mar-bot20"></i><p><i class="hidden-sm hidden-md hidden-lg fa fa-download"></i> Everything is stored on users\' devices &mdash; no corporate gatekeepers.</p></div></div><div class=col-sm-4><div class=align-center><i class="hidden-xs fa fa-thumbs-up fa-5x mar-bot20"></i><p><i class="hidden-sm hidden-md hidden-lg fa fa-thumbs-up"></i> Filter all content using your web of trust.</p></div></div><div class=col-sm-4><div class=align-center><i class="hidden-xs fa fa-check fa-5x mar-bot20"></i><p><i class="hidden-sm hidden-md hidden-lg fa fa-check"></i> Keep your contacts and trusted online identity up-to-date.</p></div></div></div><p class="align-center mar-top15" style=margin-bottom:0><a ui-sref=about>Read more</a></p></div><div ng-if=!authentication.user class=mar-top25-xs></div><div id=messages class=row><div class=col-md-4><div class="hidden-xs hidden-sm" ng-include="\'app/messages/filters.partial.html\'"></div></div><div class=col-md-8><div ng-include="\'app/main/createuser.partial.html\'"></div><div ng-include="\'app/main/getstarted.partial.html\'"></div><div ng-include="\'app/messages/create.partial.html\'"></div><div class="visible-xs visible-sm" ng-include="\'app/messages/filters.partial.html\'"></div><div ng-init="filters.maxDistance = 0;filters.limit = 10" infinite-scroll="filters.limit = filters.limit + 1" infinite-scroll-distance=1 infinite-scroll-disabled="!msgs || !msgs.list || msgs.list.length < filters.limit || !identifiIndex"><message ng-repeat="msg in msgs.list | filter:msgFilter | orderBy:\'signedData.timestamp\' : true | limitTo:filters.limit as filteredMsgs track by msg.hash" ipfs=ipfs msg-data=msg ng-click="openMessage($event, msg, \'lg\')"></message></div><div class="alert alert-info text-center" ng-if=!filteredMsgs.length>No messages yet</div></div></div></section></div>');
$templateCache.put('app/messages/show.html','<section><div class="col-md-8 col-md-offset-2 msg-col"><message ipfs=ipfs show-recipient=true msg-data=msg page-info=info ng-repeat="msg in [message]"></message><div class="panel panel-info"><div class=panel-heading>Message origin verified by <span ng-show=message.verifiedByAttr><identicon identity=message.verifiedByAttr class=mar-right5 border=3 width=35></identicon></span>which is associated with <a ng-if=false ng-bind=message.signerName||message.signerKeyID ui-sref="identities.show({type: \'keyID\', value: message.signerKeyID })"></a> <strong><a ui-sref="identities.show({ type: \'keyID\', value: message.signerKeyID })" class=id-link><identicon ipfs=ipfs identity=message.verifiedBy class=mar-right5 border=3 width=35></identicon><span ng-bind=message.verifiedBy.primaryName></span></a></strong></div></div><p ng-if=message.data.context><small>Context: {{message.data.context}}</small></p><p><button class="btn btn-default" ng-click="collapseRawData = !collapseRawData">Show raw data</button></p><pre uib-collapse=!collapseRawData ng-bind=message.strData></pre><!-- <div class="mar-top15 mar-bot10"><button ng-click="messageModal.close()" class="btn btn-default">Close</button></div> --></div></section>');
$templateCache.put('app/messages/show.modal.html','<div ng-include="\'app/messages/show.html\'"></div>');
$templateCache.put('app/main/about.html','<div class="container mar-bot30"><div class=col-md-8><div class="panel panel-default"><div class=panel-body><h3>About Identifi</h3><p class=lead>Identifi is a social networking application that stores everything on its users\' devices which communicate directly with each other &mdash; no corporate gatekeepers needed.</p><h4>Public messaging</h4><p>It\'s a bit like Tw****r.</p><h4>Web of trust</h4><p>You can create new Identifi accounts (technically: cryptographic keypairs) at will, without asking for anyone\'s permission, but only the users whose <b>web of trust</b> upvoted your account will see its posts.</p><p>When you upvote someone, they become your 1st degree contact. The accounts they upvoted become 2nd degree contacts. Then there are 3rd degree contacts and so on. This is the web of trust, which can be used to filter all content on Identifi. Hiding users by downvoting is also possible.</p><p><b>This way we can avoid spam and other unwanted content without giving power to central moderators.</b></p><p>You can also add to your contacts list and rate people and organizations who are not yet on Identifi.</p><p>A decentralized web of trust, unlike certain big brother systems, could be a strong positive social force as envisioned in the blog post <a href=https://medium.com/@mmalmi/learning-to-trust-strangers-167b652a654f>Learning to Trust Strangers</a>.</p><h4>Identity verifications</h4><p>Keep your contact details up-to-date and ask for verifications from peers or specialized verifiers trusted by your WoT. Use your Identifi account for online authentication or identification on services that support it.</p><p>If you lose access to your account (keypair), just create a new one and link it to your existing identity by asking for verifications from your web of trust.</p><h4>Privacy</h4><p>It\'s important to remember that as for now, <b>everything you post on Identifi is public</b>.</p><p>Private chat between users will probably be implemented at some point, and other user permissions and groups maybe later.</p><p>See <a ui-sref=privacy>privacy policy</a> for more information.</p><h4>Available at</h4><ul><li><a href=https://identi.fi>https://identi.fi</a></li><li><a href=https://identifi.github.io/ >https://identifi.github.io/</a></li><li><a href=https://ipfs.io/ipns/QmaiM39ABfBEkb1ajyZ9ebfJXYgfyDNNbUaVZSwezwwoDQ/ >https://ipfs.io/ipns/QmaiM39ABfBEkb1ajyZ9ebfJXYgfyDNNbUaVZSwezwwoDQ/</a></li><li><a href=https://chrome.google.com/webstore/detail/identifi/oelmiikkaikgnmmjaonjlopkmpcahpgh>Chrome extension</a> (<a href="https://github.com/identifi/identifi-angular/blob/master/dist.crx?raw=true">mirror</a>) - use Identifi offline. In the future, can be used to sign in to websites.</li><!-- TODO: add dynamically updated /ipfs url --><li>Upcoming: Electrum desktop app with bluetooth and LAN peerfinding!</li></ul><h4>Technology</h4><p>Identifi uses <a href=https://gun.eco>GUN</a> for indexing and <a href=https://ipfs.io>IPFS</a> for messages, images and other static data.</p><p>Identifi is free and open source software. The project is in alpha development stage. <b>Contributions welcome!</b></p><ul><li><a href=https://github.com/identifi/identifi>Source code</a></li><li><a href=https://cdn.rawgit.com/identifi/identifi-lib/b979abf6/example/browser.html>Technical description of Identifi with live code</a></li></ul><h5>Future tech</h5><p>Currently the weak point of Identifi\'s decentralization is the list of initial peers, which could easily be blocked by governments or ISPs. By default, the application connects to IPFS default peers and a couple GUN peers. You can always add peers manually on the <a ui-sref=settings>settings page</a>, but that is cumbersome for the average user.</p><p>We already have a multicast module prototype for GUN which can find peers on the same local area network. Bluetooth modules are not yet implemented, but will enable a network of peers that need to meet each other only occasionally.</p><p>On the wide area network level, Identifi trusted contacts could exchange network addresses privately to avoid having them blocked or tracked. WebRTC\'s NAT traversal capabilities can enable direct connections between typical network endpoint users, but you still need a firewall-opened/port-forwarded rendez-vous node for them, and in some cases a relay node.</p></div></div></div></div>');
$templateCache.put('app/main/createuser.partial.html','<div class="panel panel-default" ng-if=!authentication.user><div class=panel-body><form class=form-inline ng-submit=createUser(newUserName)><div class=form-group><input autofocus focus-on=newUser style=min-width:200px type=text id=newUserName class=form-control ng-disabled=creatingUser ng-model=newUserName placeholder="What\'s your name?"></div><i class="hidden-xs mar-right5"></i> <button type=submit class="btn btn-primary" ng-disabled="!newUserName || creatingUser">Go!</button> <i class="mar-left15 hidden-xs"></i> <i class="mar-top5 visible-xs"></i><div class=form-group>or <a ng-click=openLoginModal() href="">Log in</a></div></form></div></div>');
$templateCache.put('app/main/custom-search-row.html','<a class=search-result-row><identicon ipfs=$parent.$parent.$parent.$parent.ipfs identity=match.label border=3 width=46 class=mar-right10></identicon><span ng-bind-html="match.label.primaryName | uibTypeaheadHighlight:query"></span></a>');
$templateCache.put('app/main/getstarted.partial.html','<div ng-if="authentication.user && authentication.identity.data && !authentication.identity.data.sentPositive" class="alert alert-info text-center"><p class=h3 style=margin-bottom:15px>Welcome to social networking freedom!</p><p>Start by upvoting your friends: ask for their profile links or scan their QR codes (<b><a ui-sref=identities.create>Add contact</a></b>). That makes their posts visible to you.</p><p>Alternatively, you can upvote this Identifi distribution\'s <b><a ui-sref="identities.show({type:\'keyID\', value:defaultIndexKeyID})">default address book</a></b> as a starting point.</p><br></div><div ng-if="authentication.user && authentication.identity.data && authentication.identity.data.sentPositive && !authentication.identity.data.receivedPositive" class="alert alert-info text-center"><p class=h3 style=margin-bottom:15px>Great, you have trusted contacts!</p><p>Next you should <b>ask your friends to upvote your account</b>, so they and their network will see your messages.</p><p><button ng-click=copyToClipboard(authentication.user.url) class="btn btn-primary mar-top10">Copy link to your profile</button></p><p>Or show them your QR code:</p><div class=mar-top20><qrcode data={{authentication.user.url}} size=240></qrcode></div><br></div><div ng-if="authentication.user && authentication.identity.data && authentication.identity.data.sentPositive && authentication.identity.data.receivedPositive && localSettings && !localSettings.profileUploadNotificationClosed && authentication.identity.mva && !authentication.identity.mva.profilePhoto" class="alert alert-info text-center"><p class=h3 style=margin-bottom:15px>You\'re good to go!</p><p style="margin-bottom: 15px">Set a profile picture?</p><p><button class="btn btn-primary mar-right15" ng-click=openProfilePhotoUploadModal()>Yes</button> <button class="btn btn-default" ng-click=closeProfileUploadNotification()>Not now</button></p><br></div>');
$templateCache.put('app/main/login.modal.html','<div class="col-md-10 col-md-offset-1"><div class="panel panel-default mar-top15"><div class=panel-heading><!--<div class="checkbox">\n        <label>\n          <input type="checkbox" value="" checked="checked">\n          Remember me\n        </label>\n      </div>--><h3>New user</h3><form ng-submit=createUser(newUserName)><input focus-on=newUser type=text class=form-control ng-model=newUserName placeholder="Your name"><br><input type=submit value=Go! class="btn btn-primary" ng-disabled=!newUserName></form><br><h3>Existing user</h3><form><textarea rows=6 class=form-control placeholder="Paste private key or drop file" ng-model=privateKeySerialized></textarea><br><button class="btn btn-primary" ng-disabled=!privateKeySerialized ng-click="loginWithKey(privateKeySerialized, publicKeyPEM)">Log in</button> <a class=pull-right href="" ng-click="lostKey = !lostKey">Lost your key?</a></form><div ng-if=lostKey class="mar-top30 panel panel-info"><div class=panel-heading>Don\'t worry: just go with "New user" and ask your trusted contacts to verify that your new key belongs to the already existing identity.</div></div></div></div></div>');
$templateCache.put('app/main/logout.modal.html','<div class="col-md-10 col-md-offset-1"><div class="panel panel-default mar-top15"><div class=panel-heading>Log out?</div><div class=panel-body><p>You cannot log in back to this account unless you have saved a backup of your private key.</p><a class="btn btn-default" ng-click=$dismiss()>Cancel</a> <a href=# class="btn btn-danger" ng-click=logout()>Log out</a></div></div></div>');
$templateCache.put('app/main/privacy-policy.html','<div class="container mar-bot30"><div class=col-md-8><div class="panel panel-default"><div class=panel-body><h3>Privacy policy</h3><p>Identifi is a peer-to-peer application like Bitcoin, not a corporate or other legal entity. All data is stored and indexed by the users who run the application. The application only makes connections to other decentralized network peers.</p><p>Please keep in mind that everything you post or add on Identifi is <b>public</b> unless otherwise stated.</p><p>Identifi\'s contact list feature can be compared to your mobile phone\'s address book, but with synchronization with others. Users can add contact details and attributes of arbitrary type.</p><p>Developers of the application have no control over content added by users and are not responsible for it. It is the user\'s responsibility to comply with applicable laws regarding public messaging and listing of personal information.</p><p>An Identifi "account" is a cryptographic keypair stored locally on your device (in browser or other application). It does not constitute a relationship with any corporate or other entity.</p></div></div></div></div>');
$templateCache.put('app/main/settings.html','<div class=container><div class=col-md-8><h3>Settings</h3><div ng-if=authentication.user><p><b>For normal people</b></p><div class="panel panel-default"><div class=panel-heading>Log out</div><div class=panel-body><p>You cannot log in back to this account unless you have saved a backup of your private key.</p><p><button class="btn btn-danger" ng-click=openLogoutModal()>Log out</button></p></div></div><div class="panel panel-danger"><div class=panel-heading>Private key</div><div class=panel-body><p>Private key is used to log in to your account. Keep your private key safe!</p><p><button class="btn btn-danger" ng-click=copyToClipboard(privateKey|json)>Copy to clipboard</button> <button class="btn btn-danger" ng-click=downloadText(privateKey|json)>Download</button></p></div></div></div><p><b>Geeky stuff</b></p><div class="panel panel-default"><div class=panel-heading>GUN peers</div><div class=panel-body><p><a href=https://gun.eco/ >GUN</a> stores dynamic content: indexes of messages and identities.</p></div><div class=table-responsive><table class="table table-striped"><tbody><tr ng-repeat="(key, value) in gun[\'_\'].opt.peers"><td><span ng-show="value.wire && value.wire.hied" class="positive fa fa-check-circle"></span> <span ng-hide="value.wire && value.wire.hied" class="negative fa fa-times-circle"></span> <small ng-bind=key></small></td><td><button ng-click=removeGunPeer(key) class="pull-right btn btn-danger"><i class="glyphicon glyphicon-trash"></i></button></td></tr><tr><td colspan=2><form class=form-inline ng-submit=addGunPeer(gunUrl)><input class=form-control type=text placeholder="Peer url" ng-model=gunUrl> <input class="btn btn-primary" type=submit value="Add GUN peer"></form></td></tr></tbody></table></div></div><div class="panel panel-default"><div class=panel-heading>IPFS peers</div><div class=panel-body><p><a href=https://ipfs.io>IPFS</a> stores static content: messages and image files.</p><p ng-hide="ipfsPeers && ipfsPeers.length"><small>No IPFS peers</small></p></div><div class=table-responsive><table class="table table-striped"><tbody><tr ng-repeat="peer in ipfsPeers"><td><span class="positive fa fa-check-circle"></span> <small ng-bind=peer.addr.toString()></small></td><td><button ng-click=removeIpfsPeer(peer.addr.toString()) class="pull-right btn btn-danger"><i class="glyphicon glyphicon-trash"></i></button></td></tr><tr><td colspan=2><form class=form-inline ng-submit=addIpfsPeer(ipfsUrl)><input class=form-control type=text placeholder="Peer url" ng-model=ipfsUrl> <input class="btn btn-primary" type=submit value="Add IPFS peer"></form></td></tr></tbody></table></div></div><!--\n    <div class="panel panel-default">\n      <div class="panel-heading">\n        Identifi indexing settings\n      </div>\n      <div class="panel-body">\n        <p>\n          <pre ng-bind="identifiIndex.options|json"></pre>\n        </p>\n      </div>\n    </div>--><p><b>Other stuff</b></p><div class="panel panel-default"><div class=panel-body><p><a ui-sref=about>About Identifi</a></p><p><a ui-sref=privacy>Privacy policy</a></p></div></div></div></div>');
$templateCache.put('app/components/message/message.template.html','<div class="panel msg" ng-class="{\'panel-info\':$ctrl.msgData.isVerification, \'panel-default\':$ctrl.msgData.isPost}" style={{$ctrl.msgData.bgColor}} ng-if=$ctrl.msgData.signedData><div class=message-panel ng-class="{ \'panel-body\': !$ctrl.msgData.isVerification, \'panel-heading\': $ctrl.msgData.isVerification || $ctrl.msgData.isUnverification }"><p><span class="mar-left5 pull-right" ng-class=$ctrl.msgData.iconStyle ng-repeat="n in $ctrl.msgData.iconCount track by $index"></span> <span class="mar-left5 pull-right fa fa-refresh" uib-tooltip=Pending ng-if=$ctrl.msgData.local></span> <strong><a ui-sref="identities.show({ type: $ctrl.msgData.linkToAuthor.type, value: $ctrl.msgData.linkToAuthor.value })" class=id-link><identicon ipfs=$ctrl.ipfs identity=$ctrl.msgData.author class=mar-right5 border=3 width=35></identicon><span ng-bind=$ctrl.msgData.author_name></span> </a></strong><span ng-show=!$ctrl.msgData.sameAuthorAndRecipient><small><i class="glyphicon glyphicon-play"></i></small> <a ui-sref="identities.show({ type: $ctrl.msgData.linkToRecipient.type, value: $ctrl.msgData.linkToRecipient.value })" class=id-link><identicon ng-if=$ctrl.showRecipient ipfs=$ctrl.ipfs identity=$ctrl.msgData.recipient class=mar-right5 border=3 width=35></identicon><span ng-bind="($ctrl.msgData.recipientIsSelf && $ctrl.pageInfo.primaryName)||$ctrl.msgData.recipient_name"></span> </a></span>- <a ui-sref="messages.show({ id: ($ctrl.msgData.ipfsUri || $ctrl.msgData.hash) })" ng-bind="$ctrl.msgData.signedData.timestamp|date:\'medium\'" class="text-muted small" style=display:inline-block;></a></p><p ng-if="$ctrl.msgData.isVerification || $ctrl.msgData.isUnverification"><small ng-repeat="a in $ctrl.msgData.recipientArray">{{a.type}}: <span ng-if="a.type == \'email\' || a.type == \'url\'" ng-bind-html="a.value | linky"></span> <span ng-if="!(a.type == \'email\' || a.type == \'url\')" ng-bind=a.value></span> <i class="fa fa-link" ng-if="!$last && $ctrl.msgData.isVerification"></i> <i class="fa fa-chain-broken" ng-if="!$last && $ctrl.msgData.isUnverification"></i></small></p><p ng-bind-html=$ctrl.msgData.signedData.comment|linky></p></div></div>');}]);
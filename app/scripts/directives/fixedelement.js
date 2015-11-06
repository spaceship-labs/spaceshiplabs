'use strict';

/**
 * @ngdoc directive
 * @name spaceshiplabsApp.directive:fixedElement
 * @description
 * # fixedElement
 */
(function(){
  angular.module('spaceshiplabsApp')
    .directive('fixedElement', function ($window, $timeout) {
      return function(scope, element) {
          //Initial position
          var offsetY = element.offset().top;

          scope.$on('$viewContentLoaded', function() {
            $timeout(function(){
              offsetY = element.offset().top;
              console.log(offsetY);
            },500);
          });

          /*
          scope.$on('$locationChangeSuccess', function() {
            console.log('change');
            offsetY = element.offset().top;
            console.log(offsetY);
          });*/

          angular.element($window).bind("scroll", function() {
              //console.log(offsetY);
              //console.log(this.pageYOffset);
               if (this.pageYOffset >= offsetY) {
                   scope.scrolled = true;
               } else {
                   scope.scrolled = false;
               }
              scope.$apply();
          });
      };
    });

})();

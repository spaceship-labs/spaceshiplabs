'use strict';

/**
 * @ngdoc directive
 * @name spaceshiplabsApp.directive:fixedElement
 * @description
 * # fixedElement
 */
angular.module('spaceshiplabsApp')
  .directive('fixedElement', function ($window) {
    return function(scope, element) {
        //Initial position
        var offsetY = element.offset().top;

        angular.element($window).bind("scroll", function() {
             if (this.pageYOffset >= offsetY) {
                 scope.scrolled = true;
             } else {
                 scope.scrolled = false;
             }
            scope.$apply();
        });
    };
  });

'use strict';

/**
 * @ngdoc directive
 * @name spaceshiplabsApp.directive:fixedHeader
 * @description
 * # fixedHeader
 */
angular.module('spaceshiplabsApp')
  .directive('fixedHeader', function ($window) {
    return function(scope) {
        angular.element($window).bind("scroll", function() {
             if (this.pageYOffset >= 10) {
                 scope.scrolled = true;
             } else {
                 scope.scrolled = false;
             }
            scope.$apply();
        });
    };
  });

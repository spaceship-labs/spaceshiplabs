'use strict';

/**
 * @ngdoc filter
 * @name spaceshiplabsApp.filter:customReverse
 * @function
 * @description
 * # customReverse
 * Filter in the spaceshiplabsApp.
 */
angular.module('spaceshiplabsApp')
  .filter('customReverse', function () {
    return function(items) {
        return items.slice().reverse();
    };
  });

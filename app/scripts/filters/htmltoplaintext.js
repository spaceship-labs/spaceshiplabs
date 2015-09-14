'use strict';

/**
 * @ngdoc filter
 * @name spaceshiplabsApp.filter:htmlToPlainText
 * @function
 * @description
 * # htmlToPlainText
 * Filter in the spaceshiplabsApp.
 */
angular.module('spaceshiplabsApp')
  .filter('htmlToPlainText', function () {
   return function(text) {
      return  text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };
  });

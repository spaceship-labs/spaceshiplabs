'use strict';

/**
 * @ngdoc service
 * @name spaceshiplabsApp.windowSize
 * @description
 * # windowSize
 * Service in the spaceshiplabsApp.
 */
angular.module('spaceshiplabsApp')
  .service('windowSize', function ($rootScope, $window) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var w = angular.element($window);

    this.init = function(){
      return true;
    };

    $rootScope.windowSize = function (){
      return { 'h': w.height(), 'w': w.width() };
    };

    $rootScope.$watch($rootScope.windowSize,function (newValue) {
      var winSize;
      var winSizeSingle;

      if(newValue.w > 900){
        winSize = "large";
        winSizeSingle = "full";
      }
      else if(newValue.w > 600){
        winSize = "large";
        winSizeSingle = "large";
      }
      else if(newValue.w > 300){
        winSize = "medium";
        winSizeSingle = "medium";
      }

      $rootScope.winSize = winSize;
      $rootScope.winSizeSingle = winSizeSingle;

    },true);


    w.bind('resize', function () {
      $rootScope.$apply();
    });
  });

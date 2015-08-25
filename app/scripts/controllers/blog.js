'use strict';

/**
 * @ngdoc function
 * @name spaceshiplabsApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the spaceshiplabsApp
 */
angular.module('spaceshiplabsApp')
  .controller('BlogCtrl', function ($scope, blogService) {
    $scope.entries = [];
    $scope.loadedPosts = false;

    $scope.getRecentPosts = function(){
      blogService.getRecentEntries(5).then(function(entries){
        $scope.entries = entries;
        $scope.loadedPosts = true;
      });
    };
    $scope.getRecentPosts();

  });

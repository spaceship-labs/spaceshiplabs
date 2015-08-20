'use strict';

/**
 * @ngdoc function
 * @name spaceshiplabsApp.controller:PostCtrl
 * @description
 * # PostCtrl
 * Controller of the spaceshiplabsApp
 */
angular.module('spaceshiplabsApp')
  .controller('PostCtrl', function ($scope, $routeParams, blogService) {
    $scope.postSlug = $routeParams.slug || 'down-the-rabbit-hole';
    $scope.entries = [];
    $scope.entry = {};
    $scope.postsLimit = 3;

    $scope.getPost = function(){
      blogService.getSingleEntry($scope.postSlug).then(function(entry){
        $scope.entry = entry;
      });
    };

    $scope.getRecentPosts = function(){
      blogService.getRecentEntries($scope.postsLimit).then(function(entries){
        $scope.entries = entries;
      });
    };

    $scope.getPost();
    $scope.getRecentPosts();

  });

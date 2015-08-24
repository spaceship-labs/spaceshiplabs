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
    $scope.categories = [];

    $scope.getPost = function(){
      blogService.getSingleEntry($scope.postSlug).then(function(entry){
        $scope.entry = entry;
        console.log($scope.entry);
      });
    };

    $scope.getRecentPosts = function(){
      blogService.getRecentEntries($scope.postsLimit).then(function(entries){
        $scope.entries = entries;
      });
    };

    $scope.getCategories = function(){
      blogService.getCategories(10).then(function(categories){
        $scope.categories = categories;
        console.log(categories);
      });
    };

    $scope.getPost();
    $scope.getRecentPosts();
    //$scope.getCategories();

  });

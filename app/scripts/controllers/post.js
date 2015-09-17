'use strict';

/**
 * @ngdoc function
 * @name spaceshiplabsApp.controller:PostCtrl
 * @description
 * # PostCtrl
 * Controller of the spaceshiplabsApp
 */
angular.module('spaceshiplabsApp')
  .controller('PostCtrl', function ($scope, $rootScope, $routeParams, blogService, $location, $filter, metaTagsService) {
    $scope.postSlug = $routeParams.slug || 'down-the-rabbit-hole';
    $scope.entries = [];
    $scope.entry = {};
    $scope.postsLimit = 3;
    $scope.categories = [];
    $scope.loadedPost = false;

    $scope.getPost = function(){
      blogService.getSingleEntry($scope.postSlug).then(function(entry){
        $scope.entry = entry;
        $scope.loadedPost = true;
        var img = '';
        if(entry.thumbnail_images){
          img = entry.thumbnail_images.full.url;
        }else if(entry.attachments){
          img = entry.attachments[0].images.full.url;
        }
        metaTagsService.setMetaTags(
          entry.title,
          $filter('htmlToPlainText')(entry.excerpt),
          img
        );
      });
    };

    $scope.getRecentPosts = function(){
      blogService.getRecentEntries($scope.postsLimit).then(function(entries){
        $scope.entries = entries;
      });
    };

    $scope.getCategories = function(){
      blogService.getCategories().then(function(data){
        $scope.categories = data;
      });
    };

    $scope.getPost();
    $scope.getRecentPosts();
    $scope.getCategories();

  });

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
        $scope.entryImg = '';
        if(entry.featured_image){
          if(entry.featured_image.attachment_meta.sizes.large){
            $scope.entryImg = entry.featured_image.attachment_meta.sizes.large.url;
          }else{
            $scope.entryImg = entry.featured_image.attachment_meta.sizes.blog.url;
          }
        }else{
          $scope.entryImg = entry.attachments[0].large[0];
        }
        metaTagsService.setMetaTags(
          entry.title,
          $filter('htmlToPlainText')(entry.excerpt),
          $scope.entryImg
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

    $scope.getMainPostThumb = function(){
      var post = $scope.entry;
      var size = $rootScope.winSizeSingle || 'large';
      var style = {};
      if(post.secondary_image && post.secondary_image[size]){
        style = {
          'background': 'url(' + post.secondary_image[size] + ') center no-repeat'
        };
      }
      else if(post.featured_image){

        if(size === 'full' && !post.secondary_image){
          style = {
            'background': 'url(' + post.featured_image.source + ') center no-repeat'
          };
        }

        else if(!post.featured_image.attachment_meta.sizes[size]){
          size = 'blog';
        }

        if(size !== 'full'){
          style = {
            'background': 'url(' + post.featured_image.attachment_meta.sizes[size].url + ') center no-repeat'
          };
        }

      }else if(post.attachments){
        if(!post.attachments[0][size]){
          size = 'blog';
        }
        var urlKey = 0;
        style = {
          'background': 'url(' + post.attachments[0][size][urlKey] + ') center no-repeat'
        };
      }
      return style;
    };

    $scope.getPost();
    $scope.getRecentPosts();
    $scope.getCategories();

  });

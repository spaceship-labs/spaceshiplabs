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
        var entryImg = '';
        if(entry.featured_image){
          entryImg = entry.featured_image.attachment_meta.sizes.large.url;
        }else{
          entryImg = entry.attachments[0].large[0];
        }
        metaTagsService.setMetaTags(
          entry.title,
          $filter('htmlToPlainText')(entry.excerpt),
          entryImg
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

    $scope.getMainPostThumb = function(post,thumbSize){
      var size = thumbSize || 'large';
      var style = {};
      if(post.featured_image){
        if(!post.featured_image.attachment_meta.sizes[size]){
          size = 'blog';
        }
        style = {
          'background': 'url(' + post.featured_image.attachment_meta.sizes[size].url + ') center no-repeat'
        };

        if(thumbSize === 'full'){
          style = {
            'background': 'url(' + post.featured_image.source + ') center no-repeat'
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

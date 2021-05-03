'use strict';

/**
 * @ngdoc function
 * @name spaceshiplabsApp.controller:PostCtrl
 * @description
 * # PostCtrl
 * Controller of the spaceshiplabsApp
 */
function PostCtrl($scope, $sce, $rootScope, $routeParams, blogService, $location, $filter, metaTagsService) {

  $scope.postSlug = $routeParams.slug || 'down-the-rabbit-hole';
  $scope.entries = [];
  $scope.entry = {};
  $scope.postThumbnailStyle = {}
  $scope.postsLimit = 3;
  $scope.categories = [];
  $scope.loadedPost = false;

  $scope.getPost = function () {
    blogService.getSingleEntry($scope.postSlug).then(function (entry) {
      if (!entry) {
        console.log('no hay entry');
        $location.path('/');
      }
      $scope.entry = entry;
      if (entry.content) {
        $scope.entry.content = $sce.trustAsHtml(entry.content);
      } else {
        console.log('no hay entry');
        $location.path('/');
      }
      $scope.loadedPost = true;
      $scope.entryImg = '';
      if (entry.featured_image) {
        if (entry.featured_image.attachment_meta.sizes.large) {
          $scope.entryImg = entry.featured_image.attachment_meta.sizes.large.url;
        } else {
          $scope.entryImg = entry.featured_image.attachment_meta.sizes.blog.url;
        }
      } else {
        //$scope.entryImg = entry.attachments[0].large[0];
      }
      var meta = {
        title: entry.title,
        description: $filter('htmlToPlainText')(entry.excerpt),
        image: $scope.entryImg
      };
      metaTagsService.setMetaTags(meta);
      $scope.getMainPostThumb();

    });
  };

  /* Doesn't needed after updated wordpress to 5.7.1
  $scope.formatImageSrc = function (content) {
    var find = '/wp-content/';
    var url = 'https://blog.spaceshiplabs.com/wp-content/';
    var re = new RegExp(find, 'g');
    var res = content.replace(re, url);
    console.log("Res: ",res);
    return res;
  };
  */

  $scope.getRecentPosts = function () {
    blogService.getRecentEntries($scope.postsLimit).then(function (entries) {
      $scope.entries = entries;
    });
  };

  $scope.getCategories = function () {
    blogService.getCategories().then(function (data) {
      $scope.categories = data;
    });
  };

  var getStyle = function (size, mediaResult) {
    var style = {}
    const sizes = mediaResult.media_details.sizes;
    if (!sizes[size] || size === 'full') {
      style = {
        'background': 'url(' + sizes['full'].source_url + ') center no-repeat'
      };
    }
    else if (!sizes['large'] || size === 'large') {
      style = {
        'background': 'url(' + sizes['large'].source_url + ') center no-repeat'
      };
    }
    else {
      style = {
        'background': 'url(' + sizes['large'].source_url + ') center no-repeat'
      };
    }
    return style;
  }
  $scope.getMainPostThumb = function () {
    var post = $scope.entry;
    var size = $rootScope.winSizeSingle || 'full';
    
    if (post.featured_media) {
      return blogService.getSingleMedia(post.featured_media).then(function (mediaResult) {
        const sizes = mediaResult.media_details.sizes;
        if (size === 'full' || !sizes[size]) {
          $scope.postThumbnailStyle = getStyle(size, mediaResult)
        }
        else {
          $scope.postThumbnailStyle = getStyle(size, mediaResult)
        }
      });
    }

  };
  /* TODO: Check if this is needed
  $scope.getMainPostThumb = function(){
    var post = $scope.entry;
    var size = $rootScope.winSizeSingle || 'large';
    var style = {};
    if(post.secondary_image && post.secondary_image[size]){
      style = {
        'background': 'url(' + blogService.blogUrl + post.secondary_image[size] + ') center no-repeat'
      };
    }
    else if(post.featured_image){

      if(size === 'full' && !post.secondary_image){
        style = {
          'background': 'url(' + blogService.blogUrl + post.featured_image.source + ') center no-repeat'
        };
      }

      else if(!post.featured_image.attachment_meta.sizes[size]){
        size = 'blog';
      }

      if(size !== 'full'){
        style = {
          'background': 'url(' + blogService.blogUrl + post.featured_image.attachment_meta.sizes[size].url + ') center no-repeat'
        };
      }

    }else if(post.attachments){
      if(!post.attachments[0][size]){
        size = 'blog';
      }
      var urlKey = 0;
      style = {
        'background': 'url(' + blogService.blogUrl + post.attachments[0][size][urlKey] + ') center no-repeat'
      };
    }
    return style;
  };
  */

  $scope.getPost();
  $scope.getRecentPosts();
  $scope.getCategories();
}

angular.module('spaceshiplabsApp').controller('PostCtrl', PostCtrl);
PostCtrl.$inject = ['$scope', '$sce', '$rootScope', '$routeParams', 'blogService', '$location', '$filter', 'metaTagsService'];

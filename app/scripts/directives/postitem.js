'use strict';

/**
 * @ngdoc directive
 * @name spaceshiplabsApp.directive:postItem
 * @description
 * # postItem
 */
angular.module('spaceshiplabsApp')
  .directive('postItem', function ($rootScope, blogService) {
    return {
      templateUrl: function(element,attrs){
        var url;
        if(attrs.postType === 'thumb'){
          url = 'views/directives/post-thumb-item.html';
        }
        else if(attrs.postType === 'sidebar'){
          url = 'views/directives/post-sidebar-item.html';
        }
        else if(attrs.postType === 'home'){
          url = 'views/directives/post-home-item.html';
        }
        else{
          url = 'views/directives/post-list-item.html';
        }
        return url;
      },
      restrict: 'EA',
      scope:{
        'entry':'=entry',
      },
      link: function postLink(scope) {

        scope.styleThumb = {};
        scope.postThumbnailStyle = {};

        var getStyle = function (size, mediaResult) {
          var style = {}
          const sizes = mediaResult.media_details.sizes;
          if ( !sizes[size] || size === 'full' ) {
            style = {
              'background': 'url(' + sizes['full'].source_url + ') center no-repeat'
            };
          }
          else if ( !sizes[size] || size === 'large' ) {
            style = {
              'background': 'url(' + sizes['large'].source_url + ') center no-repeat'
            };
          }
          else if ( !sizes[size] || size === 'medium' ) {
            style = {
              'background': 'url(' + sizes['medium'].source_url + ') center no-repeat'
            };
          }
          else {
            style = {
              'background': 'url(' + sizes[thumbnail].source_url + ') center no-repeat'
            };
          }
          return style;
        }

        scope.getPostThumb = function(){
          var post = scope.entry;
          var size = $rootScope.winSize;
          if (post.featured_media) {
            blogService.getSingleMedia(post.featured_media).then(function (mediaResult) {
              scope.styleThumb = getStyle(size, mediaResult);
            });
          } else {
            blogService.getPostMedia(post.id).then(function (mediaResult) {
              if (mediaResult[0])
                scope.styleThumb = getStyle(size, mediaResult[0]);
            });
          }
        };
        scope.getMainPostThumb = function(){
          var post = scope.entry;
          var size = $rootScope.winSizeSingle || 'large';
          if( post.featured_media ) {
            return blogService.getSingleMedia(post.featured_media).then(function (mediaResult) { 
              const sizes = mediaResult.media_details.sizes;
              if(size === 'full' || !sizes[size]){
                scope.postThumbnailStyle = getStyle(size,mediaResult)
              }
              else {
                scope.postThumbnailStyle = getStyle(size,mediaResult)
              }
            });
          }
        };
        
        scope.getMainPostThumb()
        scope.getPostThumb()
      }
    };
  });

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
        'entry':'=entry'
      },
      link: function postLink(scope) {

        scope.styleThumb = {};

        var getStyle = function (size, mediaResult) {
          var style = {}
          //console.log('MEDIA', size, mediaResult)
          const sizes = mediaResult.media_details.sizes;
          if (size === 'full' || !sizes[size]) {
            style = {
              'background': 'url(' + blogService.blogUrl + sizes['medium'].source_url + ') center no-repeat'
            };
          }
          else if (size === 'large' && !sizes['large']) {
            style = {
              'background': 'url(' + blogService.blogUrl + sizes['full'].source_url + ') center no-repeat'
            };
          }
          else {
            style = {
              'background': 'url(' + blogService.blogUrl + sizes[size].source_url + ') center no-repeat'
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
              //console.log('MEDIA LIST', mediaResult)
              if (mediaResult[0])
                scope.styleThumb = getStyle(size, mediaResult[0]);
            });
          }
        };

        scope.getMainPostThumb = function(){
          var post = scope.entry;
          var size = $rootScope.winSizeSingle || 'large';
          var style = {};
          if( post.featured_media ) {
            return style;
            return blogService.getSingleMedia(post.featured_media).then(function (mediaResult) { 
            
              //}else if(post.featured_image){
              const sizes = mediaResult.media_details.sizes;
              if(size === 'full' || !sizes[size]){
                style = {
                  'background': 'url(' + blogService.blogUrl + sizes['medium'].source_url + ') center no-repeat'
                };
              }
              else {
                style = {
                  'background': 'url(' + blogService.blogUrl + sizes[size].source_url + ') center no-repeat'
                };
              }
              return style;
            });
          }
          return style;
        };
        scope.getPostThumb()

      }
    };
  });

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



        scope.getPostThumb = function(){
          var post = scope.entry;
          var size = $rootScope.winSize;
          var style = {};
          if(post.featured_image){
            if(!post.featured_image.attachment_meta.sizes[size]){
              style = {
                'background': 'url(' + blogService.blogUrl + post.featured_image.source + ') center no-repeat'
              };
            }else{
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

        scope.getMainPostThumb = function(){
          var post = scope.entry;
          var size = $rootScope.winSizeSingle || 'large';
          var style = {};
          if(post.featured_image){

            if(size === 'full'){
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

      }
    };
  });

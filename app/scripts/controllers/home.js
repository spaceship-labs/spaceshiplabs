'use strict';

/**
 * @ngdoc function
 * @name spaceshiplabsApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the spaceshiplabsApp
 */
angular.module('spaceshiplabsApp')
  .controller('HomeCtrl', function ($scope, blogService) {
    $scope.loadedPosts = false;

    $scope.getRecentPosts = function(){
      blogService.getRecentEntries(3).then(function(entries){
        $scope.entries = entries;
        $scope.loadedPosts = true;
      });
    };

    $scope.scrollTo = function(target){
      setTimeout(
          function(){
              $('html, body').animate({
                  scrollTop: $('#' + target).offset().top
              }, 600);
          },
          300
      );
    };

    $scope.getRecentPosts();

  });

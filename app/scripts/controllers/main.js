'use strict';

/**
 * @ngdoc function
 * @name spaceshiplabsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the spaceshiplabsApp
 */
angular.module('spaceshiplabsApp')
  .controller('MainCtrl', function ($scope, $mdSidenav, $location, metaTagsService, $http, $window) {
    var w = angular.element($window);
    $scope.emailSent = false;
    $scope.contactError = false;
    $scope.contactData = {};
    $scope.winSize = "medium";

	  $scope.toggleSidebar = function() {
      $mdSidenav('left').open();
	  };

	  $scope.closeSidebar = function() {
      $mdSidenav('left').close();
	  };

		$scope.isHome = ($location.path() === '/' ) ? true : false;

    $scope.getAbsUrl = function(){
      return $location.absUrl();
    };

    $scope.doContact = function(){
      $scope.contactError = false;
      $scope.emailSent = false;
      var req = {
        method: 'POST',
        url: '/__/forms/contact',
        //method: 'GET',
        //url: '/json/email-success.json',
        data: {
          email: $scope.contactData.email,
          name: $scope.contactData.name,
          message: $scope.contactData.message
        },
      };
      $http( req ).then(
        function(response) {
          if(response.data.status === 'success'){
            $scope.emailSent = true;
          }else{
            $scope.contactError = true;
          }
        }, function(err) {
          $scope.contactError = true;
          console.log(err);
        }
      );

    };

    $scope.windowSize = function (){
      return { 'h': w.height(), 'w': w.width() };
    };

    $scope.$watch($scope.windowSize,function (newValue) {
      if(newValue.w > 900){
        $scope.winSize = "large";
      }
      else if(newValue.w > 600){
        $scope.winSize = "large";
      }
      else if(newValue.w > 300){
        $scope.winSize = "blog";
      }
    },true);
    w.bind('resize', function () {
      $scope.$apply();
    });

    metaTagsService.setMetaTags();

    $scope.getPostThumb = function(post,thumbSize){
      var size = thumbSize || 'thumbnail';
      var style = {};
      if(post.featured_image){
        if(!post.featured_image.attachment_meta.sizes[size]){
          size = 'blog';
        }
        style = {
          'background': 'url(' + post.featured_image.attachment_meta.sizes[size].url + ') center no-repeat'
        };
      }else{
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

    $scope.getRange = function(n) {
      var arr = new Array(n);
      for(var i=0;i<n;i++){
        arr[i] = i+1;
      }
      return arr;
    };

  });

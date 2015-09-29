'use strict';

/**
 * @ngdoc function
 * @name spaceshiplabsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the spaceshiplabsApp
 */
angular.module('spaceshiplabsApp')
  .controller('MainCtrl', function ($scope, $mdSidenav, $location, metaTagsService, $http, windowSize) {

    $scope.init = function(){
      $scope.emailSent = false;
      $scope.contactError = false;
      $scope.contactData = {};
      $scope.winSize = "medium";
      $scope.winSizeSingle = "medium";
      $scope.redirectCount = 0;
      windowSize.init();
    };

	  $scope.toggleSidebar = function() {
      $mdSidenav('left').open();
	  };

	  $scope.closeSidebar = function() {
      $mdSidenav('left').close();
	  };

    $scope.$on('$locationChangeStart', function() {
      if($scope.redirectCount > 0){
        $scope.closeSidebar();
      }
      $scope.redirectCount++;
    });

		$scope.isHome = ($location.path() === '/' ) ? true : false;

    $scope.getAbsUrl = function(){
      return $location.absUrl();
    };

    $scope.doContact = function(form){
      if(form.$valid){
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
              $scope.contactError = false;
            }else{
              $scope.contactError = true;
            }
          }, function(err) {
            $scope.contactError = true;
            console.log(err);
          }
        );
      }else{
        $scope.contactError = true;
      }
    };



    metaTagsService.setMetaTags();


    $scope.getRange = function(n) {
      var arr = new Array(n);
      for(var i=0;i<n;i++){
        arr[i] = i+1;
      }
      return arr;
    };

    $scope.init();

  });

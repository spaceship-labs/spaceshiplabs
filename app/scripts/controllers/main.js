'use strict';

/**
 * @ngdoc function
 * @name spaceshiplabsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the spaceshiplabsApp
 */
angular.module('spaceshiplabsApp')
  .controller('MainCtrl', function ($scope, $mdSidenav, $location, metaTagsService, $http) {
    $scope.emailSent = false;
    $scope.contactError = false;
    $scope.contactData = {};

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
          console.log(response);
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


    metaTagsService.setMetaTags();

  });

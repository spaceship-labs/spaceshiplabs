'use strict';

/**
 * @ngdoc function
 * @name spaceshiplabsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the spaceshiplabsApp
 */
angular.module('spaceshiplabsApp')
  .controller('MainCtrl', function ($scope, $mdSidenav, $location) {

	  $scope.toggleSidebar = function() {
      $mdSidenav('left').open();
	  };   

	  $scope.closeSidebar = function() {
      $mdSidenav('left').close();
	  }; 

		$scope.isHome = ($location.path() == '/' ) ? true : false;
		console.log( $location.path() );	  
    
  });

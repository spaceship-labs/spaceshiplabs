'use strict';

/**
 * @ngdoc function
 * @name spaceshiplabsApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the spaceshiplabsApp
 */
angular.module('spaceshiplabsApp')
  .controller('HomeCtrl', function ($scope) {

		$scope.bannerGraphImgs = [0,1];
	  $scope.bannerGraphImgsIndex = 0;

	  $scope.carouselNext = function(){
	    $scope.bannerGraphImgsIndex = ++$scope.bannerGraphImgsIndex % $scope.bannerGraphImgs.length;
	  };

	  $scope.carouselBack = function(){
	    $scope.bannerGraphImgsIndex = --$scope.bannerGraphImgsIndex % $scope.bannerGraphImgs.length;
	  };

	  $scope.goToSlide = function(index){
	    $scope.bannerGraphImgsIndex = index;
	  };

  });

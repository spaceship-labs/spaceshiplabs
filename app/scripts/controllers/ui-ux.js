'use strict';

/**
 * @ngdoc function
 * @name spaceshiplabsApp.controller:UiUxCtrl
 * @description
 * # UiUxCtrl
 * Controller of the spaceshiplabsApp
 */
function UiUxCtrl($scope, $interval,metaTagsService){
  $scope.init = function(){
    var meta = {
      title: 'UI/UX & Design | SpaceshipLabs',
      description: 'Un buen software debe ir acompañado de una buena interfaz y una buena marca de una buena imagen visual.',
      image: $scope.domainUrl + '/images/ui-og.jpg'
    };

    metaTagsService.setMetaTags(meta);


    $scope.designSliderIndex = 0;
    $scope.logos = [
      'images/justiti-logo.png',
      'images/travelite-logo.png',
      'images/travcy-logo.png',

    ];

    $scope.brandingSliderIndex = 0;
    $scope.demos = [
      'images/justiti.png',
      'images/airport-mock.png',
    ];
    /*
    $scope.demos = [
      'http://staging.spaceshiplabs.divshot.io/images/justiti.70f07df5.png',
      'http://staging.spaceshiplabs.divshot.io/images/airport-mock.7f588307.png'
    ];*/


    $scope.sketchSliderIndex = 0;
    $scope.sketchs = [
      'images/sketch.jpg',
      'images/sketch1.jpg',
      'images/sketch2.jpg',
    ];
    /*
    $scope.sketchs = [
      'http://staging.spaceshiplabs.divshot.io/images/sketch1.b171c2a5.jpg',
      'http://staging.spaceshiplabs.divshot.io/images/sketch2.51fca493.jpg',
      'http://staging.spaceshiplabs.divshot.io/images/sketch3.45c3e997.jpg',

    ] ;*/

    $scope.designSliderInterval = $interval($scope.moveNextDesignSlider, 5000);
    $scope.brandingSliderInterval = $interval($scope.moveNextBrandingSlider, 5000);
    $scope.sketchSliderInterval = $interval($scope.moveNextSketchSlider, 5000);
  };

  $scope.moveBrandingSlider = function(index){
    $scope.brandingSliderIndex = index;
    $interval.cancel( $scope.brandingSliderInterval );
  };
  $scope.moveNextBrandingSlider = function(){
    if($scope.brandingSliderIndex < $scope.demos.length-1){
      $scope.brandingSliderIndex++;
    }else{
      $scope.brandingSliderIndex  = 0;
    }
  };

  $scope.moveDesignSlider = function(index){
    $scope.designSliderIndex = index;
    $interval.cancel( $scope.designSliderInterval );
  };
  $scope.moveNextDesignSlider = function(){
    if($scope.designSliderIndex < $scope.logos.length-1){
      $scope.designSliderIndex++;
    }else{
      $scope.designSliderIndex  = 0;
    }
  };

  $scope.moveNextSketchSlider = function(){
    if($scope.sketchSliderIndex < $scope.sketchs.length-1){
      $scope.sketchSliderIndex++;
    }else{
      $scope.sketchSliderIndex  = 0;
    }
  };

  $scope.$on(
      "$destroy",
      function() {
          $interval.cancel( $scope.designSliderInterval );
          $interval.cancel( $scope.brandingSliderInterval );
      }
  );

  $scope.init();


}
UiUxCtrl.$inject = ['$scope','$interval','metaTagsService'];
angular.module('spaceshiplabsApp').controller('UiUxCtrl',UiUxCtrl);

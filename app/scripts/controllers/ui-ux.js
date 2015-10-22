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
      title: 'UI/UX | SpaceshipLabs'
    };
    metaTagsService.setMetaTags(meta);
    $scope.designSliderInterval = $interval($scope.moveNextDesignSlider, 5000);
  };

  $scope.designSliderIndex = 0;
  $scope.logos = [
    'images/open_data.png',
    'images/slack.png'
  ];
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

  $scope.$on(
      "$destroy",
      function() {
          $interval.cancel( $scope.designSliderInterval );
      }
  );

  $scope.init();


}
UiUxCtrl.$inject = ['$scope','$interval','metaTagsService'];
angular.module('spaceshiplabsApp').controller('UiUxCtrl',UiUxCtrl);

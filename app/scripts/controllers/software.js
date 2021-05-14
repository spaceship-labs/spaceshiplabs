'use strict';

/**
 * @ngdoc function
 * @name spaceshiplabsApp.controller:SoftwareCtrl
 * @description
 * # SoftwareCtrl
 * Controller of the spaceshiplabsApp
 */
function SoftwareCtrl($scope,metaTagsService,$mdDialog){
  $scope.init = function(){
    var meta = {
      title: 'Desarrollo de software en Spaceship Labs. | SpaceshipLabs',
      description: 'Desarrollo de software usando metodologías ágiles en constante comunicacion con el cliente.',
      image: $scope.domainUrl + '/images/software-og.jpg'
    };
    metaTagsService.setMetaTags(meta);
    
    $scope.showAdvanced = function(ev) {
      $mdDialog.show({
        controller: DialogController,
        templateUrl: 'views/templates/software.tmpl.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
      })
    };
  
    function DialogController($scope, $mdDialog) {
      $scope.hide = function() {
        $mdDialog.hide();
      };
  
      $scope.cancel = function() {
        $mdDialog.cancel();
      };
  
      $scope.answer = function(answer) {
        $mdDialog.hide(answer);
      };
    }  
  };


  $scope.init();
}
SoftwareCtrl.$inject = ['$scope','metaTagsService', '$mdDialog'];
angular.module('spaceshiplabsApp').controller('SoftwareCtrl',SoftwareCtrl);

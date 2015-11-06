'use strict';

/**
 * @ngdoc function
 * @name spaceshiplabsApp.controller:SoftwareCtrl
 * @description
 * # SoftwareCtrl
 * Controller of the spaceshiplabsApp
 */
function SoftwareCtrl($scope,metaTagsService){
  $scope.init = function(){
    var meta = {
      title: 'Desarrollo de software en Spaceship Labs. | SpaceshipLabs',
      description: 'Desarrollo de software usando metodologías ágiles en constante comunicacion con el cliente.',
      image: $scope.domainUrl + '/images/software-og.jpg'
    };
    metaTagsService.setMetaTags(meta);
  };
  $scope.init();
}
SoftwareCtrl.$inject = ['$scope','metaTagsService'];
angular.module('spaceshiplabsApp').controller('SoftwareCtrl',SoftwareCtrl);

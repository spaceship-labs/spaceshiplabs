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
      title: 'Software | SpaceshipLabs'
    };
    metaTagsService.setMetaTags(meta);
  };
  $scope.init();
}
SoftwareCtrl.$inject = ['$scope','metaTagsService'];
angular.module('spaceshiplabsApp').controller('SoftwareCtrl',SoftwareCtrl);

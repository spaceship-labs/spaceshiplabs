'use strict';

/**
 * @ngdoc function
 * @name spaceshiplabsApp.controller:AwardsCtrl
 * @description
 * # AwardsCtrl
 * Controller of the spaceshiplabsApp
 */
function AwardsCtrl($scope,metaTagsService){
  $scope.init = function(){
    var meta = {
      title: 'Reconocimientos | SpaceshipLabs'
    };
    metaTagsService.setMetaTags(meta);
  };
  $scope.init();
}
AwardsCtrl.$inject = ['$scope','metaTagsService'];
angular.module('spaceshiplabsApp').controller('AwardsCtrl',AwardsCtrl);

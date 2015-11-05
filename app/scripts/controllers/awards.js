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
      title: 'Prensa y reconocimientos de Spaceship Labs | SpaceshipLabs',
      description: 'En muy poco tiempo hemos recibido importantes menciones de prensa de nuestro trabajo y obtenido importantes premios a nivel nacional.'
    };
    metaTagsService.setMetaTags(meta);
  };
  $scope.init();
}
AwardsCtrl.$inject = ['$scope','metaTagsService'];
angular.module('spaceshiplabsApp').controller('AwardsCtrl',AwardsCtrl);

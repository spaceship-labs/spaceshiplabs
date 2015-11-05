'use strict';

/**
 * @ngdoc function
 * @name spaceshiplabsApp.controller:SpaceesCtrl
 * @description
 * # SpaceesCtrl
 * Controller of the spaceshiplabsApp
 */
function SpaceesCtrl($scope,metaTagsService){
  $scope.init = function(){
    var meta = {
      title: 'SpaceEs | SpaceshipLabs',
      description: 'Plataforma de gestión empresarial flexible y robusta de última generación que te ayudara a maximizar la eficiencia de tu negocio.'
    };
    metaTagsService.setMetaTags(meta);
  };
  $scope.init();
}
SpaceesCtrl.$inject = ['$scope','metaTagsService'];
angular.module('spaceshiplabsApp').controller('SpaceesCtrl',SpaceesCtrl);



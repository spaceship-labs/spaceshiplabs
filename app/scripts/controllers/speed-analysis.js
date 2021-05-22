'use strict';

/**
 * @ngdoc function
 * @name spaceshiplabsApp.controller:SpeedCtrl
 * @description
 * # SpeedCtrl
 * Controller of the spaceshiplabsApp
 */
function SpeedCtrl($scope, metaTagsService) {
  $scope.init = function(){
    var meta = {
      title: 'Análisis de Desempeño y Asesoría Gratuita | SpaceshipLabs',
      description: 'El desempeño de una página web es crucial para las ventas, la experiencia y satisfacción del usuario.',
    };
    metaTagsService.setMetaTags(meta);
  }
  $scope.init();
}

SpeedCtrl.$inject = ['$scope','metaTagsService'];
angular.module('spaceshiplabsApp').controller('SpeedCtrl', SpeedCtrl);



'use strict';

/**
 * @ngdoc function
 * @name spaceshiplabsApp.controller:AboutUsCtrl
 * @description
 * # AboutUsCtrl
 * Controller of the spaceshiplabsApp
 */
function AboutUsCtrl($scope,metaTagsService){
  $scope.init = function(){
    var meta = {
      title: 'Acerca de Spaceship Labs | SpaceshipLabs',
      description: 'Diseñamos y desarrollamos software para todo tipo de plataformas y dispositivos que no solo funcionan bien, si no que se ve bien',
      image: $scope.domainUrl + '/images/acerca-og.jpg'
    };
    metaTagsService.setMetaTags(meta);
  };
  $scope.init();
}
AboutUsCtrl.$inject = ['$scope','metaTagsService'];
angular.module('spaceshiplabsApp').controller('AboutUsCtrl',AboutUsCtrl);



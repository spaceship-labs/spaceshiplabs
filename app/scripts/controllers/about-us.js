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
      title: 'Acerca de nosotros | SpaceshipLabs'
    };
    metaTagsService.setMetaTags(meta);
  };
  $scope.init();
}
AboutUsCtrl.$inject = ['$scope','metaTagsService'];
angular.module('spaceshiplabsApp').controller('AboutUsCtrl',AboutUsCtrl);



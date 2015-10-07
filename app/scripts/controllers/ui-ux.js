'use strict';

/**
 * @ngdoc function
 * @name spaceshiplabsApp.controller:UiUxCtrl
 * @description
 * # UiUxCtrl
 * Controller of the spaceshiplabsApp
 */
function UiUxCtrl($scope,metaTagsService){
  $scope.init = function(){
    var meta = {
      title: 'UI/UX | SpaceshipLabs'
    };
    metaTagsService.setMetaTags(meta);
  };
  $scope.init();
}
UiUxCtrl.$inject = ['$scope','metaTagsService'];
angular.module('spaceshiplabsApp').controller('UiUxCtrl',UiUxCtrl);

'use strict';

/**
 * @ngdoc function
 * @name spaceshiplabsApp.controller:TeamCtrl
 * @description
 * # TeamCtrl
 * Controller of the spaceshiplabsApp
 */
function TeamCtrl($scope,metaTagsService){
  $scope.init = function(){
    var meta = {
      title: 'Conoce a nuestro equipo espacial',
      description: 'Diseñadores, programadores y community managers listos para llevar a cabo tu proyecto.'
    };
    metaTagsService.setMetaTags(meta);
  };
  $scope.init();
}
TeamCtrl.$inject = ['$scope','metaTagsService'];
angular.module('spaceshiplabsApp').controller('TeamCtrl',TeamCtrl);

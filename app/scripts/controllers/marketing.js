'use strict';

/**
 * @ngdoc function
 * @name spaceshiplabsApp.controller:MarketingCtrl
 * @description
 * # MarketingCtrl
 * Controller of the spaceshiplabsApp
 */
function MarketingCtrl($scope,metaTagsService){
  $scope.init = function(){
    var meta = {
      title: 'Marketing | SpaceshipLabs'
    };
    metaTagsService.setMetaTags(meta);
  };
  $scope.init();
}
MarketingCtrl.$inject = ['$scope','metaTagsService'];
angular.module('spaceshiplabsApp').controller('MarketingCtrl',MarketingCtrl);

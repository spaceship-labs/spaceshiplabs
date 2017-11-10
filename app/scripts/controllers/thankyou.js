'use strict';

/**
 * @ngdoc function
 * @name spaceshiplabsApp.controller:ThankYouCtrl
 * @description
 * # ThankYouCtrl
 * Controller of the spaceshiplabsApp
 */
function ThankYouCtrl($scope,metaTagsService){
  $scope.init = function(){
    /*
    var meta = {
      title: 'Prensa y reconocimientos de Spaceship Labs | SpaceshipLabs',
      description: 'En muy poco tiempo hemos recibido importantes menciones de prensa de nuestro trabajo y obtenido importantes premios a nivel nacional.',
      image: $scope.domainUrl + '/images/prensa-og.jpg'
    };
    metaTagsService.setMetaTags(meta);
  	*/
  };
  $scope.init();
}
ThankYouCtrl.$inject = ['$scope','metaTagsService'];
angular.module('spaceshiplabsApp').controller('ThankYouCtrl',ThankYouCtrl);

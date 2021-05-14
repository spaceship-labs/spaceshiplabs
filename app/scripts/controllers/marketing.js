'use strict';

/**
 * @ngdoc function
 * @name spaceshiplabsApp.controller:MarketingCtrl
 * @description
 * # MarketingCtrl
 * Controller of the spaceshiplabsApp
 */
function MarketingCtrl($scope,metaTagsService,$mdDialog){
  $scope.init = function(){
    var meta = {
      title: 'Marketing para tu empresa | SpaceshipLabs',
      description: 'SEO, Social Media, Branding y campañias creativas para tu empresa.',
      image: $scope.domainUrl + '/images/marketing-og.jpg'
    };
    metaTagsService.setMetaTags(meta);

    $scope.status = '  ';
    
    $scope.showAdvanced = function(ev) {
      $mdDialog.show({
        controller: DialogController,
        templateUrl: 'views/templates/marketing.tmpl.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
      })
    };
  
    function DialogController($scope, $mdDialog) {
      $scope.hide = function() {
        $mdDialog.hide();
      };
  
      $scope.cancel = function() {
        $mdDialog.cancel();
      };
  
      $scope.answer = function(answer) {
        $mdDialog.hide(answer);
      };
    }  

  };

  $scope.init();
}
MarketingCtrl.$inject = ['$scope','metaTagsService', '$mdDialog'];
angular.module('spaceshiplabsApp').controller('MarketingCtrl',MarketingCtrl);

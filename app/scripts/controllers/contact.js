'use strict';
/*global google */

/**
 * @ngdoc function
 * @name spaceshiplabsApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the spaceshiplabsApp
 */
function ContactCtrl($scope, metaTagsService) {


  var initialize = function() {
    var mapOptions = {
     center: { lat: 21.1656951, lng: -86.8210734},
     zoom: 18,
     //scrollwheel: false
    };
    var map = new google.maps.Map(document.getElementById('map-contact'),
       mapOptions);
    var locationLatLng = new google.maps.LatLng(21.1656951,-86.8210734);
    //var image = 'images/logo-og.png';
    var image = 'images/pinmap.png';

    var marker = new google.maps.Marker({
        position: locationLatLng,
        title:"SpaceshipLabs",
        icon: image
    });
    // To add the marker to the map, call setMap();
    marker.setMap(map);
  };

  $scope.init = function(){
    initialize();
    var meta = {
      title: 'Contacta a Spaceship Labs | SpaceshipLabs',
      description: 'Envianos una señal intergalactica y te contestaremos en menos de 24 horas.'
    };
    metaTagsService.setMetaTags(meta);
  };

  $scope.init();

  //google.maps.event.addDomListener(window, 'load', initialize);
}

ContactCtrl.$inject = ['$scope','metaTagsService'];
angular.module('spaceshiplabsApp').controller('ContactCtrl', ContactCtrl);



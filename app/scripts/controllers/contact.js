'use strict';
/*global google */

/**
 * @ngdoc function
 * @name spaceshiplabsApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the spaceshiplabsApp
 */
function ContactCtrl() {

  var initialize = function() {
    var mapOptions = {
     center: { lat: 21.1656951, lng: -86.8210734},
     zoom: 18,
     //scrollwheel: false
    };
    var map = new google.maps.Map(document.getElementById('map-contact'),
       mapOptions);
    var locationLatLng = new google.maps.LatLng(21.1656951,-86.8210734);

    var marker = new google.maps.Marker({
        position: locationLatLng,
        title:"SpaceshipLabs"
    });
    // To add the marker to the map, call setMap();
    marker.setMap(map);
  };

  initialize();
  //google.maps.event.addDomListener(window, 'load', initialize);
}

angular.module('spaceshiplabsApp').controller('ContactCtrl', ContactCtrl);



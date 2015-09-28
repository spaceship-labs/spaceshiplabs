'use strict';

/**
 * @ngdoc service
 * @name spaceshiplabsApp.metaTagsService
 * @description
 * # metaTagsService
 * Service in the spaceshiplabsApp.
 */
angular.module('spaceshiplabsApp')
  .service('metaTagsService', function ($rootScope, $location) {

    this.getBasePath = function(){
      this.path = $location.path();
      return this.path;
    };

    this.setMetaTags = function(generalTitle ,generalDescription, imageUrl){
      var domainUrl = $location.protocol() + "://" + $location.host() + ":" + $location.port();
      var description = generalDescription ||  '¿Tienes alguna idea innovadora, y quieres invertir en internet? cuenta con nosotros para llevarla a cabo. Tenemos la experiencia y las herramientas para que tu proyecto sea todo un éxito.';
      var title =  generalTitle || 'SpaceshipLabs - Diseño de páginas web, aplicaciones móviles, Diseño Gráfico y Software en General';
      var generalName = 'SpaceshipLabs';
      var img = imageUrl ||  domainUrl+'/images/logo-og.png';

      $rootScope.metatags = {
        title: title,
        description: description,
        fb_title: title,
        fb_site_name: generalName ,
        fb_url: domainUrl + this.getBasePath() ,
        fb_description: description,
        fb_type: 'article',
        fb_image: img
      };
    };

  });

'use strict';

/**
 * @ngdoc service
 * @name spaceshiplabsApp.metaTagsService
 * @description
 * # metaTagsService
 * Service in the spaceshiplabsApp.
 */
angular.module('spaceshiplabsApp')
  .service('metaTagsService', function ($rootScope, $location, $filter) {

    this.getBasePath = function(){
      this.path = $location.path();
      return this.path;
    };

    this.setMetaTags = function(params){
      var domainUrl = $location.protocol() + "://" + $location.host() + ":" + $location.port();
      var defaultParams = {
        title:'SpaceshipLabs - Diseño de páginas web, aplicaciones móviles, Diseño Gráfico y Software en General',
        description: 'Desarrollamos software en la nube, aplicaciones moviles y diseño web en general para cualquier tipo de negocio o industria.',
        image: domainUrl+'/images/default-og.png'
      };

      if(!params){
        params = defaultParams;
      }
      var description = $filter('htmlToPlainText')(params.description) || defaultParams.description;
      var title =  params.title || defaultParams.title;
      var generalName = 'SpaceshipLabs';
      var image = params.image ||  defaultParams.image;


      $rootScope.metatags = {
        title: title,
        description: description,
        fb_title: title,
        fb_site_name: generalName ,
        fb_url: domainUrl + this.getBasePath() ,
        fb_description: description,
        fb_type: 'article',
        fb_image: image
      };
    };

  });

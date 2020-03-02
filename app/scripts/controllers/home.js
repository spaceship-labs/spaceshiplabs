'use strict';

/**
 * @ngdoc function
 * @name spaceshiplabsApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the spaceshiplabsApp
 */
function HomeCtrl($scope, $rootScope, blogService, metaTagsService, $timeout){

  metaTagsService.setMetaTags();

  $scope.getRecentPosts = function(){
    blogService.getRecentEntries(3).then(function(entries){
      $scope.entries = entries;
      $scope.loadedPosts = true;
    });
  };

  $scope.init = function(){
    $scope.loadedPosts = false;
    $scope.getRecentPosts();
    var windowDimensions = $rootScope.windowSize();
    if(windowDimensions.w > 600){
      var video = document.getElementById('landing-video');
      var videoLimit = 8;
      video.play();
      video.addEventListener('timeupdate',function(){
        if(video.currentTime > videoLimit){
          video.currentTime = 1;
        }
      },false);

      //Fix for safari
      var $video = $('#landing-video');
      $video.on('canplaythrough', function() {
         this.play();
      });

    }else{
      $('#landing-video').remove();
    }
    $timeout(function () {
      $('.clients-slider').addClass('timeout')
    },1000 )
  };


  $scope.projects = [
    {
      type:'UI/UX Design & Software',
      slug: 'mejora-tu-escuela',
      category: 'ui-ux',
      name:'Mejora tu escuela',
      description:'Plataforma de participación ciudadana para transformar la educación. Desarrollamos un sitio web en el cual es posible buscar, comparar y calificar todas las escuelas de México.',
      url: 'https://www.mejoratuescuela.org/',
      images:['images/projects/mejoratuescuela2.jpg','images/projects/mejoratuescuela3.jpg','images/projects/mejoratuescuela4.jpg']
    },
    {
      type:'UI/UX Design & Software',
      name:'Viajes Claros',
      slug:'viajesclaros',
      category: 'ui-ux',
      description:'Es un proyecto del IFAI donde se manejan datos abiertos para mostrar los viajes y gastos de los servidores púbicos. Fuimos ganadores del 1er lugar en el desarrollo del sitio web el cual permite; buscar, comparar y accesar a dicha información.',
      images:['images/projects/viajesclaros2.jpg','images/projects/viajesclaros3.jpg', 'images/projects/viajesclaros4.jpg']
    },
    {
      type:'Branding',
      name:'Justiti',
      slug:'justiti-branding',
      category: 'branding',
      description:'Es un proyecto para facilitar el acceso a la justicia a los ciudadanos. Implementamos el diseño de la marca y desarrollamos un sitio web que permite fácilmente el acceso a la justicia, mediante la búsqueda orientación y mensajería legal a los ciudadanos.',
      images:['images/projects/justiti3.jpg','images/projects/justiti4.jpg','images/projects/justiti5.jpg']
    },
    {
      type:'Branding',
      name:'Travcy',
      slug:'travcy',
      category: 'branding',
      description:'Elección de nombre y diseño de logotipo para herramienta web desarrollada a la medida para la administración y control comercial para empresas turísticas.',
      images:['images/projects/travcy1.jpg', 'images/projects/travcy2.jpg', 'images/projects/travcy3.jpg']
    },
    {
      type:'UI/UX Design & Software',
      name:'The Juicery Boutique',
      slug:'the-juicery-boutique',
      category: 'ui-ux',
      description:'Es una marca de Jugos cold pressed y productos naturales. Implementamos diseño y solución e-commerce para la venta de jugos, productos y paquetes detox.',
      url: 'https://www.thejuiceryboutique.com/',
      images:['images/projects/juicery2.jpg','images/projects/juicery1.jpg','images/projects/juicery3.jpg']
    },
    {
      type:'Branding',
      name:'AirportCab',
      slug:'airportcab',
      category: 'branding',
      description:'Es una empresa de transportación turistica del Aeropuerto. Creamos la marca y desarrollamos su sitio web.',
      images:['images/projects/airportcab1.jpg', 'images/projects/airportcab2.jpg', 'images/projects/airportcab3.jpg',  'images/projects/airportcab4.jpg', 'images/projects/airportcab6.jpg']
    },
  ];

  $scope.clients = [
    {
      avatar:'images/carloslopez.jpg',
      name: 'Carlos López',
      company: 'CONSEJOSANO',
      quote: 'Trabajamos juntos para un cliente startup y algunos meses despues ese startup reunio 3 millones de usd en inversion todo gracias al trabajo que realizamos juntos. '
    },
    {
      avatar:'images/alexandra.jpg',
      name: 'Allan',
      company: 'YELLOWTRANSFERS',
      quote: 'Spaceship Labs ha sido un aliado por mas de 3 años, convirtiendo nuestra plataforma digital en una parte integral de nuestro negocio.'
    },
    {
      avatar:'images/alexandra.jpg',
      name: 'Cynthia Dehesa',
      company: 'CIUDADANOS POR LA TRANSPARENCIA',
      quote: '¡Gracias a Spaceship Labs por todo su apoyo durante el evento Transformar, el evento no hubiera sido lo mismo sin ustedes !'
    }

  ];

  $scope.init();

}

angular.module('spaceshiplabsApp').controller('HomeCtrl',HomeCtrl);
HomeCtrl.$inject = ['$scope', '$rootScope', 'blogService', 'metaTagsService','$timeout'];


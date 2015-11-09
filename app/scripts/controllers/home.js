'use strict';

/**
 * @ngdoc function
 * @name spaceshiplabsApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the spaceshiplabsApp
 */
function HomeCtrl($scope, $rootScope, blogService, metaTagsService){

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
    }else{
      $('#landing-video').remove();
    }
  };


  $scope.projects = [
    {
      type:'UI/UX Design & Software',
      slug: 'mejora-tu-escuela',
      category: 'ui-ux',
      name:'Mejora tu escuela',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
      url: 'http://www.mejoratuescuela.org/',
      images:['images/projects/mejoratuescuela1.jpg','images/projects/mejoratuescuela2.jpg','images/projects/mejoratuescuela3.jpg','images/projects/mejoratuescuela4.jpg']
    },
    {
      type:'UI/UX Design & Software',
      name:'Viajes Claros',
      slug:'viajesclaros',
      category: 'ui-ux',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
      images:['images/projects/viajesclaros1.jpg','images/projects/viajesclaros2.jpg','images/projects/viajesclaros3.jpg', 'images/projects/viajesclaros4.jpg']
    },
    {
      type:'Branding',
      name:'Justiti',
      slug:'justiti-branding',
      category: 'branding',
      description:'Diseño de Logotipo y Diseño web, para proyecto que facilita el acceso a la justicia, mediante la búsqueda orientación y mensajería legal a los ciudadanos.',
      images:['images/projects/justiti3.jpg','images/projects/justiti4.jpg','images/projects/justiti5.jpg']
    },
    {
      type:'Branding',
      name:'Travcy',
      slug:'travcy',
      category: 'branding',
      description:'Elección de nombre y diseño de logotipo para herramienta web desarrollada a la medida para la administración y control comercial para empresas turísticas.',
      //url: 'http://cancunwatertours.herokuapp.com/',
      images:['images/projects/travcy1.jpg', 'images/projects/travcy2.jpg', 'images/projects/travcy3.jpg']
    },
    {
      type:'UI/UX Design & Software',
      name:'The Juicery Boutique',
      slug:'the-juicery-boutique',
      category: 'ui-ux',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
      url: 'http://www.thejuiceryboutique.com/',
      images:['images/projects/juicery1.jpg','images/projects/juicery2.jpg']
    },
    {
      type:'Branding',
      name:'AirportCab',
      slug:'airportcab',
      category: 'branding',
      description:'Creación y desarrollo de marca para empresa de transportación turística.',
      //url: 'http://cancunwatertours.herokuapp.com/',
      images:['images/projects/airportcab1.jpg', 'images/projects/airportcab2.jpg', 'images/projects/airportcab3.jpg',  'images/projects/airportcab4.jpg']
    }
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
HomeCtrl.$inject = ['$scope', '$rootScope', 'blogService', 'metaTagsService'];


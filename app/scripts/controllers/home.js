'use strict';

/**
 * @ngdoc function
 * @name spaceshiplabsApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the spaceshiplabsApp
 */
function HomeCtrl($scope, $rootScope, blogService){

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
      categories: ['ui-ux','software'],
      name:'Mejora tu escuela',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
      url: 'http://www.mejoratuescuela.org/',
      images:['images/projects/mejora4.jpg','images/projects/mejora3.jpg','images/projects/mejora2.jpg','images/projects/mejora.jpg']
    },
    {
      type:'UI/UX Design & Software',
      categories: ['ui-ux','software','branding'],
      name:'Airportcun',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
      url: 'http://airportcun.com/',
      images:['images/projects/air4.jpg','images/projects/air3.jpg','images/projects/air2.jpg','images/projects/air.jpg']
    },
    {
      type:'UI/UX Design & Software',
      name:'Viajes Claros',
      categories: ['ui-ux','software'],
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
      url: 'http://www.viajesclaros.ifai.mx/',
      images:['images/projects/viajes4.jpg','images/projects/viajes3.jpg','images/projects/viajes2.jpg','images/projects/viajes.jpg']
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
HomeCtrl.$inject = ['$scope', '$rootScope', 'blogService'];


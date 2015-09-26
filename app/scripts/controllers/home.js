'use strict';

/**
 * @ngdoc function
 * @name spaceshiplabsApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the spaceshiplabsApp
 */
angular.module('spaceshiplabsApp')
  .controller('HomeCtrl', function ($scope, blogService) {
    $scope.loadedPosts = false;

    $scope.getRecentPosts = function(){
      blogService.getRecentEntries(3).then(function(entries){
        $scope.entries = entries;
        $scope.loadedPosts = true;
      });
    };

    $scope.init = function(){
      $scope.getRecentPosts();
      var video = document.getElementById('landing-video');
      video.play();
      var videoLimit = 8;
      video.addEventListener('timeupdate',function(){
        if(video.currentTime > videoLimit){
          video.currentTime = 1;
        }
      },false);
    };

    $scope.scrollTo = function(target){
      setTimeout(
          function(){
              $('html, body').animate({
                  scrollTop: $('#' + target).offset().top
              }, 600);
          },
          300
      );
    };

    $scope.projects = [
      {
        type:'UI/UX Design & Software',
        categories: ['ui-ux','software'],
        name:'Mejora tu escuela',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
        url: 'http://www.mejoratuescuela.org/',
        images:['images/projects/mejora2.jpg','images/projects/mejora.jpg']
      },
      {
        type:'UI/UX Design & Software',
        categories: ['ui-ux','software','branding'],
        name:'Airportcun',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
        url: 'http://airportcun.com/',
        images:['images/projects/air2.jpg','images/projects/air.jpg']
      },
      {
        type:'UI/UX Design & Software',
        name:'Viajes Claros',
        categories: ['ui-ux','software'],
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
        url: 'http://www.viajesclaros.ifai.mx/',
        images:['images/projects/viajes2.jpg','images/projects/viajes.jpg']
      },
    ];

    $scope.clients = [
      {
        avatar:'images/carloslopez.jpg',
        name: 'Carlos López',
        company: 'CONSEJOSANO',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur inventore aliquid eligendi, provident quo veritatis vitae consequatur a eum dolorem similique sed laborum.'
      },
      {
        avatar:'images/alexandra.jpg',
        name: 'Alexandra Zapata-Hojel',
        company: 'MEJORA TU ESCUELA',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur inventore aliquid eligendi, provident quo veritatis vitae consequatur a eum dolorem similique sed laborum.'
      },

    ];

    $scope.init();

  });

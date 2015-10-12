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

  $scope.scrollTo = function(target){
    setTimeout(
        function(){
          var headerHeight = 61;
          $('html, body').animate({
            scrollTop: $('#' + target).offset().top - headerHeight
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

}

angular.module('spaceshiplabsApp').controller('HomeCtrl',HomeCtrl);
HomeCtrl.$inject = ['$scope', '$rootScope', 'blogService'];


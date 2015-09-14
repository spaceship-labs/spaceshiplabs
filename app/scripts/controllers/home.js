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
        name:'Yellow Transfers',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
        url: '#',
        images:['images/yellow_proyectos.jpg','images/lap.png']
      },
      {
        type:'UI/UX Design',
        name:'Capshia',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
        url: '#',
        images: ['images/projects/capshia.jpg','images/projects/capshia2.jpg']
      }
    ];

    $scope.getRecentPosts();

  });

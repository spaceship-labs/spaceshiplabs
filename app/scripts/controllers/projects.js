'use strict';

/**
 * @ngdoc function
 * @name spaceshiplabsApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the spaceshiplabsApp
 */
angular.module('spaceshiplabsApp')
  .controller('ProjectsCtrl', function ($scope) {

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

  });

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

    $scope.allProjects = [
      {
        type:'UI/UX Design & Software',
        name:'Mejora tu escuela',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
        url: 'http://www.mejoratuescuela.org/',
        images:['images/projects/mejora2.jpg','images/projects/mejora.jpg']
      },
      {
        type:'UI/UX Design & Software',
        name:'Airportcun',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
        url: 'http://airportcun.com/',
        images:['images/projects/air2.jpg','images/projects/air.jpg']
      },
      {
        type:'UI/UX Design & Software',
        name:'Viajes Claros',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
        url: 'http://www.viajesclaros.ifai.mx/',
        images:['images/projects/viajes2.jpg','images/projects/viajes.jpg']
      },
      {
        type:'UI/UX Design & Software',
        name:'ConsejoSano',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
        url: 'https://www.consejosano.com/',
        images:['images/projects/consejo2.jpg','images/projects/consejo.jpg']
      },
      {
        type:'UI/UX Design & Software',
        name:'Mr. Gotcha',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
        url: 'http://nuevopaintball.com/',
        images:['images/projects/gotcha2.jpg','images/projects/gotcha.jpg']
      },
      {
        type:'UI/UX Design & Software',
        name:'Capshia',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
        url: 'http://capshia.com/',
        images:['images/projects/capshia2.jpg','images/projects/capshia.jpg']
      },
      {
        type:'UI/UX Design & Software',
        name:'Sea Walls',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
        url: 'http://bit.ly/1lD0KLG',
        images:['images/projects/sea2.jpg','images/projects/sea.jpg']
      },

      {
        type:'UI/UX Design & Software',
        name:'Justiti',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
        url: 'http://justiti.projects.spaceshiplabs.com/',
        images:['images/projects/justiti2.jpg','images/projects/justiti.jpg']
      },
      {
        type:'UI/UX Design & Software',
        name:'DR. Bronner',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
        url: 'https://www.drbronner.com.mx/',
        images:['images/projects/consejo2.jpg','images/projects/consejo.jpg']
      },

      {
        type:'UI/UX Design & Software',
        name:'The Juicery Boutique',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
        url: 'http://www.thejuiceryboutique.com/',
        images:['images/projects/jugos2.jpg','images/projects/jugos.jpg']
      },
      {
        type:'UI/UX Design & Software',
        name:'Bosques de playa',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
        url: 'http://www.bosques.projects.spaceshiplabs.com/',
        images:['images/projects/bosques2.jpg','images/projects/bosques.jpg']
      },
      {
        type:'UI/UX Design & Software',
        name:'Caribe Maya',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
        url: 'http://caribemaya.projects.spaceshiplabs.com/',
        images:['images/projects/caribe2.jpg','images/projects/caribe.jpg']
      },

    ];

  });

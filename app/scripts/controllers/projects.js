'use strict';

/**
 * @ngdoc function
 * @name spaceshiplabsApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the spaceshiplabsApp
 */
angular.module('spaceshiplabsApp')
  .controller('ProjectsCtrl',['$scope', function ($scope) {


    $scope.allProjects = [
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
      {
        type:'UI/UX Design & Software',
        name:'ConsejoSano',
        categories: ['ui-ux','software'],
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
        url: 'https://www.consejosano.com/',
        images:['images/projects/consejo2.jpg','images/projects/consejo.jpg']
      },
      {
        type:'UI/UX Design & Software',
        name:'Mr. Gotcha',
        categories: ['ui-ux','software','marketing','branding'],
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
        url: 'http://nuevopaintball.com/',
        images:['images/projects/gotcha2.jpg','images/projects/gotcha.jpg']
      },
      {
        type:'UI/UX Design & Software',
        name:'Capshia',
        categories: ['ui-ux','software','branding'],
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
        url: 'http://capshia.com/',
        images:['images/projects/capshia2.jpg','images/projects/capshia.jpg']
      },
      {
        type:'UI/UX Design & Software',
        name:'Sea Walls',
        categories: ['ui-ux','software'],
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
        url: 'http://bit.ly/1lD0KLG',
        images:['images/projects/sea2.jpg','images/projects/sea.jpg']
      },

      {
        type:'UI/UX Design & Software',
        name:'Justiti',
        categories: ['ui-ux'],
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
        url: 'http://justiti.projects.spaceshiplabs.com/',
        images:['images/projects/justiti2.jpg','images/projects/justiti.jpg']
      },
      {
        type:'UI/UX Design & Software',
        name:'The Juicery Boutique',
        categories: ['ui-ux','software'],
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
        url: 'http://www.thejuiceryboutique.com/',
        images:['images/projects/jugos2.jpg','images/projects/jugos.jpg']
      },
      {
        type:'UI/UX Design & Software',
        name:'Bosques de playa',
        categories: ['ui-ux','software'],
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
        url: 'http://www.bosques.projects.spaceshiplabs.com/',
        images:['images/projects/bosques2.jpg','images/projects/bosques.jpg']
      },
      {
        type:'UI/UX Design & Software',
        name:'Caribe Maya',
        categories: ['ui-ux','software'],
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
        url: 'http://caribemaya.projects.spaceshiplabs.com/',
        images:['images/projects/caribe2.jpg','images/projects/caribe.jpg']
      },
      {
        type:'UI/UX Design & Software',
        name:'Silvia Ascencio',
        categories: ['ui-ux','software'],
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
        url: 'http://www.silvia.projects.spaceshiplabs.com/',
        images:['images/projects/silvia.jpg','images/projects/silvia2.jpg']
      },
      {
        type:'UI/UX Design & Software',
        name:'Water tours',
        categories: ['ui-ux','software'],
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
        url: 'http://cancunwatertours.herokuapp.com/',
        images:['images/projects/water.jpg','images/projects/water2.jpg']
      },

    ];

  }]);

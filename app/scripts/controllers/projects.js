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

    $scope.getProjectsByName = function(name){
      if(name || name !== ''){
        $scope.projectsResult = $scope.allProjects.filter(function(project) {
            var regex = new RegExp( name, 'gi' );
            var matched = project.name.match(regex);
            if(matched){
              return true;
            }
            return false;
        });

        if($scope.projectsResult.length === 0){
          $scope.projectsResult = $scope.allProjects;
        }

      }else{
        $scope.projectsResult = $scope.allProjects;
      }

    };

    $scope.getProjectsByCategory = function(category){
      if(category || category !== ''){
        $scope.projectsResult = $scope.allProjects.filter(function(project) {
          var inCategory = project.categories.indexOf(category);
          if(inCategory > 0){
            return true;
          }
          return false;
        });

        if($scope.projectsResult.length === 0){
          $scope.projectsResult = $scope.allProjects;
          $scope.currentCategory = '';
        }else{
          $scope.currentCategory = category;
        }

      }else{
        $scope.projectsResult = $scope.allProjects;
        $scope.currentCategory = '';
      }

    };

    $scope.$watch('searchTerm', function (newValue, oldValue) {
      if(newValue !== oldValue){
        $scope.getProjectsByName(newValue);
      }

    }, true);

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
        name:'DR. Bronner',
        categories: ['ui-ux','software'],
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
        url: 'https://www.drbronner.com.mx/',
        images:['images/projects/consejo2.jpg','images/projects/consejo.jpg']
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

    ];

    $scope.init = function(){
      $scope.projectsResult = $scope.allProjects;
      $scope.getProjectsByName();
    };

    $scope.init();

  });

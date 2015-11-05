'use strict';

/**
 * @ngdoc function
 * @name spaceshiplabsApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the spaceshiplabsApp
 */

function ProjectsCtrl($scope, metaTagsService){
  $scope.init = function(){
    var meta = {
      title: 'Proyectos de Spaceship Labs | SpaceshipLabs',
      description: 'Conoce nuestro portafolio de proyectos de diseño grafico, branding y Diseño de UI & UX'
    };
    metaTagsService.setMetaTags(meta);
  };

  $scope.allProjects = [
    {
      type:'UI/UX Design & Software',
      slug: 'mejora-tu-escuela',
      categories: ['ui-ux','software'],
      name:'Mejora tu escuela',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
      url: 'http://www.mejoratuescuela.org/',
      images:['images/projects/mejoratuescuela/1.jpg','images/projects/mejoratuescuela/2.jpg','images/projects/mejoratuescuela/3.jpg','images/projects/mejoratuescuela/4.jpg']
    },
    {
      type:'UI/UX Design & Software',
      slug: 'airportcun',
      categories: ['ui-ux','software','branding'],
      name:'Airportcun',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
      url: 'http://airportcun.com/',
      images:['images/projects/airport/1.jpg','images/projects/airport/2.jpg','images/projects/airport/3.jpg','images/projects/airport/4.jpg']
    },
    {
      type:'UI/UX Design & Software',
      name:'Viajes Claros',
      slug:'viajesclaros',
      categories: ['ui-ux','software'],
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
      url: 'http://www.viajesclaros.ifai.mx/',
      images:['images/projects/viajesclaros/1.jpg','images/projects/viajesclaros/2.jpg','images/projects/viajesclaros/3.jpg', 'images/projects/viajesclaros/4.jpg']
    },
    {
      type:'UI/UX Design & Software',
      name:'ConsejoSano',
      slug:'consejosano',
      categories: ['ui-ux','software'],
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
      url: 'https://www.consejosano.com/',
      images:['images/projects/consejosano/1.jpg','images/projects/consejosano/2.jpg','images/projects/consejosano/3.jpg', 'images/projects/consejosano/4.jpg']
    },
    {
      type:'UI/UX Design & Software',
      name:'Mr. Gotcha',
      slug:'mr-gotcha',
      categories: ['ui-ux','software','marketing','branding'],
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
      url: 'http://nuevopaintball.com/',
      images:['images/projects/mrgotcha/1.jpg','images/projects/mrgotcha/2.jpg','images/projects/mrgotcha/3.jpg','images/projects/mrgotcha/4.jpg']
    },
    {
      type:'UI/UX Design & Software',
      name:'Capshia',
      slug:'capshia',
      categories: ['ui-ux','software','branding'],
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
      url: 'http://capshia.com/',
      images:['images/projects/capshia/1.jpg','images/projects/capshia/2.jpg']
    },
    {
      type:'UI/UX Design & Software',
      name:'Sea Walls',
      slug:'sea-walls',
      categories: ['ui-ux','software'],
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
      url: 'http://bit.ly/1lD0KLG',
      images:['images/projects/seawalls/1.jpg', 'images/seawalls/capshia/2.jpg']
    },

    {
      type:'UI/UX Design & Software',
      name:'Justiti',
      slug:'justiti',
      categories: ['ui-ux'],
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
      url: 'http://justiti.projects.spaceshiplabs.com/',
      images:['images/projects/justiti/1.jpg','images/projects/justiti/2.jpg']
    },
    {
      type:'UI/UX Design & Software',
      name:'The Juicery Boutique',
      slug:'the-juicery-boutique',
      categories: ['ui-ux','software'],
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
      url: 'http://www.thejuiceryboutique.com/',
      images:['images/projects/juicery/1.jpg','images/projects/juicery/2.jpg']
    },
    {
      type:'UI/UX Design & Software',
      name:'Bosques de playa',
      slug:'bosques-de-playa',
      categories: ['ui-ux','software'],
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
      url: 'http://www.bosques.projects.spaceshiplabs.com/',
      images:['images/projects/bosques/1.jpg','images/projects/bosques/2.jpg']
    },
    {
      type:'UI/UX Design & Software',
      name:'Caribe Maya',
      slug:'caribemaya',
      categories: ['ui-ux','software'],
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
      url: 'http://caribemaya.projects.spaceshiplabs.com/',
      images:['images/projects/caribemaya/1.jpg', 'images/projects/caribemaya/2.jpg']
    },
    {
      type:'UI/UX Design & Software',
      name:'Silvia Ascencio',
      slug:'silvia-ascencio',
      categories: ['ui-ux','software'],
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
      url: 'http://www.silvia.projects.spaceshiplabs.com/',
      images:['images/projects/silvia/1.jpg','images/projects/silvia/2.jpg','images/projects/silvia/3.jpg','images/projects/silvia/4.jpg','images/projects/silvia/5.jpg','images/projects/silvia/6.jpg']
    },
    {
      type:'UI/UX Design & Software',
      name:'Water tours',
      slug:'water-tours',
      categories: ['ui-ux','software'],
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
      url: 'http://cancunwatertours.herokuapp.com/',
      images:['images/projects/watertours/1.jpg', 'images/projects/watertours/2.jpg']
    },
    {
      type:'UI/UX Design & Software',
      name:'Brightside Solutions',
      slug:'brightside-solutions',
      categories: ['ui-ux','software'],
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
      url: 'http://cancunwatertours.herokuapp.com/',
      images:['images/projects/brightsidesolutions/1.jpg', 'images/projects/brightsidesolutions/2.jpg', 'images/projects/brightsidesolutions/3.jpg']
    },
    {
      type:'UI/UX Design & Software',
      name:'Travcy',
      slug:'travcy',
      categories: ['ui-ux','software'],
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
      url: 'http://cancunwatertours.herokuapp.com/',
      images:['images/projects/travcy/1.jpg', 'images/projects/travcy/2.jpg', 'images/projects/travcy/3.jpg']
    },
    {
      type:'UI/UX Design & Software',
      name:'Travelite',
      slug:'travelite',
      categories: ['ui-ux','software'],
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
      url: 'http://cancunwatertours.herokuapp.com/',
      images:['images/projects/travelite/1.jpg', 'images/projects/travelite/2.jpg', 'images/projects/travelite/3.jpg']
    },
    {
      type:'UI/UX Design & Software',
      name:'AirportCab',
      slug:'AirportCab',
      categories: ['ui-ux','software'],
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
      url: 'http://cancunwatertours.herokuapp.com/',
      images:['images/projects/airportcab/1.jpg', 'images/projects/airportcab/2.jpg', 'images/projects/airportcab/3.jpg']
    },
  ];

  $scope.init();

}

angular.module('spaceshiplabsApp').controller('ProjectsCtrl',ProjectsCtrl);
ProjectsCtrl.$inject = ['$scope','metaTagsService'];

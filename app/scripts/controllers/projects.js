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
      description: 'Conoce nuestro portafolio de proyectos de diseño grafico, branding y Diseño de UI & UX',
      image: $scope.domainUrl + '/images/proyectos-og.jpg'
    };
    metaTagsService.setMetaTags(meta);
  };

  $scope.allProjects = [
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
      slug: 'airportcun',
      category: 'ui-ux',
      name:'Airportcun',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
      //url: 'http://airportcun.com/',
      images:['images/projects/airport1.jpg','images/projects/airport2.jpg','images/projects/airport3.jpg','images/projects/airport4.jpg']
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
      type:'UI/UX Design & Software',
      name:'ConsejoSano',
      slug:'consejosano',
      category: 'ui-ux',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
      url: 'https://www.consejosano.com/',
      images:['images/projects/consejosano1.jpg','images/projects/consejosano2.jpg','images/projects/consejosano3.jpg', 'images/projects/consejosano4.jpg']
    },
    {
      type:'UI/UX Design & Software',
      name:'Mr. Gotcha',
      slug:'mr-gotcha',
      category: 'ui-ux',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
      url: 'http://nuevopaintball.com/',
      images:['images/projects/mrgotcha1.jpg','images/projects/mrgotcha2.jpg','images/projects/mrgotcha3.jpg','images/projects/mrgotcha4.jpg']
    },
    {
      type:'UI/UX Design & Software',
      name:'Capshia',
      slug:'capshia',
      category: 'ui-ux',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
      //url: 'http://capshia.com/',
      images:['images/projects/capshia1.jpg','images/projects/capshia2.jpg']
    },
    {
      type:'UI/UX Design & Software',
      name:'Sea Walls',
      slug:'sea-walls',
      category: 'ui-ux',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
      //url: 'http://bit.ly/1lD0KLG',
      images:['images/projects/seawalls1.jpg', 'images/seawalls/capshia2.jpg']
    },

    {
      type:'UI/UX Design',
      name:'Justiti',
      slug:'justiti',
      category: 'ui-ux',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
      //url: 'http://justiti.projects.spaceshiplabs.com/',
      images:['images/projects/justiti1.jpg','images/projects/justiti2.jpg']
    },
    {
      type:'Branding',
      name:'Justiti',
      slug:'justiti-branding',
      category: 'branding',
      description:'Diseño de Logotipo y Diseño web, para proyecto que facilita el acceso a la justicia, mediante la búsqueda orientación y mensajería legal a los ciudadanos.',
      //url: 'http://justiti.projects.spaceshiplabs.com/',
      images:['images/projects/justiti3.jpg','images/projects/justiti4.jpg','images/projects/justiti5.jpg']
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
      type:'UI/UX Design & Software',
      name:'Bosques de playa',
      slug:'bosques-de-playa',
      category: 'ui-ux',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
      //url: 'http://www.bosques.projects.spaceshiplabs.com/',
      images:['images/projects/bosques1.jpg','images/projects/bosques2.jpg']
    },
    {
      type:'UI/UX Design & Software',
      name:'Caribe Maya',
      slug:'caribemaya',
      category: 'ui-ux',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
      //url: 'http://caribemaya.projects.spaceshiplabs.com/',
      images:['images/projects/caribemaya1.jpg', 'images/projects/caribemaya2.jpg']
    },
    {
      type:'UI/UX Design',
      name:'Silvia Ascencio',
      slug:'silvia-ascencio',
      category: 'ui-ux',
      description:'Especialista en Decoración de Interiores para casa habitacional, en este proyecto logramos rediseñar su Logotipo y crear su sitio web.',
      //url: 'http://www.silvia.projects.spaceshiplabs.com/',
      images:['images/projects/silvia4.jpg','images/projects/silvia5.jpg']
    },
    {
      type:'Branding',
      name:'Silvia Ascencio',
      slug:'silvia-ascencio-branding',
      category: 'branding',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
      //url: 'http://www.silvia.projects.spaceshiplabs.com/',
      images:['images/projects/silvia1.jpg','images/projects/silvia2.jpg','images/projects/silvia3.jpg','images/projects/silvia6.png']
    },
    {
      type:'UI/UX Design & Software',
      name:'Water tours',
      slug:'water-tours',
      category: 'ui-ux',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
      //url: 'http://cancunwatertours.herokuapp.com/',
      images:['images/projects/watertours1.jpg', 'images/projects/watertours2.jpg']
    },
    {
      type:'Branding',
      name:'Brightside Solutions',
      slug:'brightside-solutions',
      category: 'branding',
      description:'Creación de nombre e Identidad Corporativa para empresa que ofrece soluciones de energía sustentable.',
      images:['images/projects/brightsidesolutions1.jpg', 'images/projects/brightsidesolutions2.jpg', 'images/projects/brightsidesolutions3.jpg']
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
      type:'Branding',
      name:'Travelite',
      slug:'travelite',
      category: 'branding',
      description:'Diseño de Logotipo para agencia de viajes especializada en experiencias premium para tarjetahabientes.',
      //url: 'http://cancunwatertours.herokuapp.com/',
      images:['images/projects/travelite1.jpg', 'images/projects/travelite2.jpg', 'images/projects/travelite3.jpg']
    },
    {
      type:'Branding',
      name:'AirportCab',
      slug:'airportcab',
      category: 'branding',
      description:'Creación y desarrollo de marca para empresa de transportación turística.',
      //url: 'http://cancunwatertours.herokuapp.com/',
      images:['images/projects/airportcab1.jpg', 'images/projects/airportcab2.jpg', 'images/projects/airportcab3.jpg',  'images/projects/airportcab4.jpg']
    },
  ];

  $scope.init();

}

angular.module('spaceshiplabsApp').controller('ProjectsCtrl',ProjectsCtrl);
ProjectsCtrl.$inject = ['$scope','metaTagsService'];

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
      description:'Plataforma de participación ciudadana para transformar la educación. Desarrollamos un sitio web en el cual es posible buscar, comparar y calificar todas las escuelas de México.',
      url: 'http://www.mejoratuescuela.org/',
      images:['images/projects/mejoratuescuela2.jpg','images/projects/mejoratuescuela3.jpg','images/projects/mejoratuescuela4.jpg']
    },
    {
      type:'UI/UX Design & Software',
      slug: 'airportcun',
      category: 'ui-ux',
      name:'Airportcun',
      description:'Es un sitio web del aeropuerto de Cancún en la cual desarrollamos una plataforma dónde se pueden consultar vuelos en tiempo real, buscar transportación y tours en distintos destinos.',
      images:['images/projects/airport2.jpg','images/projects/airport3.jpg','images/projects/airport4.jpg']
    },
    {
      type:'UI/UX Design & Software',
      name:'Viajes Claros',
      slug:'viajesclaros',
      category: 'ui-ux',
      description:'Es un proyecto del IFAI donde se manejan datos abiertos para mostrar los viajes y gastos de los servidores púbicos. Fuimos ganadores del 1er lugar en el desarrollo del sitio web el cual permite; buscar, comparar y accesar a dicha información.',
      images:['images/projects/viajesclaros2.jpg','images/projects/viajesclaros3.jpg', 'images/projects/viajesclaros4.jpg']
    },
    {
      type:'UI/UX Design & Software',
      name:'ConsejoSano',
      slug:'consejosano',
      category: 'ui-ux',
      description:'Es una empresa líder en servicios de telemedicina para los Hispanos en los Estados Unidos. Implementamos un sitio web para atención y consultas médicas las 24 horas.',
      url: 'https://www.consejosano.com/',
      images:['images/projects/consejosano2.jpg','images/projects/consejosano3.jpg', 'images/projects/consejosano4.jpg']
    },
    {
      type:'UI/UX Design & Software',
      name:'Mr. Gotcha',
      slug:'mr-gotcha',
      category: 'ui-ux',
      description:'Es el nuevo paintball de cancún, En este proyecto implementamos un sitio web el cual permite ver los paquetes y promociones así como visualizar la galería del campo de batalla y áreas de actividades, también se puede contactar y reservar directamente desde el sitio.',
      url: 'http://nuevopaintball.com/',
      images:['images/projects/mrgotcha2.jpg','images/projects/mrgotcha3.jpg','images/projects/mrgotcha4.jpg']
    },
    {
      type:'UI/UX Design & Software',
      name:'Capshia',
      slug:'capshia',
      category: 'ui-ux',
      description:'Es una Marca de Moda y Accesorios creada por 2 diseñadoras Mexicanas, Diseñamos y desarrollamos la tienda en linea, la cual permite consultar y comprar la colección de temporada de la marca.',
      images:['images/projects/capshia2.jpg','images/projects/capshia1.jpg','images/projects/capshia3.jpg']
    },
    {
      type:'UI/UX Design & Software',
      name:'Sea Walls',
      slug:'sea-walls',
      category: 'ui-ux',
      description:'Es un proyecto de arte urbano inovador creado por los miembros de PangeaSeed. Implementamos un sitio web para fomentar el apoyo de artistas internacionales para ayudar a plasmar la belleza de los océanos en las calles de todo el mundo a través del arte y el activismo.',
      images:['images/projects/seawalls2.jpg', 'images/projects/seawalls1.jpg', 'images/projects/seawalls3.jpg']
    },

    {
      type:'UI/UX Design',
      name:'Justiti',
      slug:'justiti',
      category: 'ui-ux',
      description:'Es un proyecto para facilitar el acceso a la justicia a los ciudadanos. Implementamos el diseño de la marca y desarrollamos un sitio web que permite fácilmente el acceso a la justicia, mediante la búsqueda orientación y mensajería legal a los ciudadanos.',
      images:['images/projects/justiti2.jpg','images/projects/justiti1.jpg','images/projects/justiti6.jpg']
    },
    {
      type:'Branding',
      name:'Justiti',
      slug:'justiti-branding',
      category: 'branding',
      description:'Es un proyecto para facilitar el acceso a la justicia a los ciudadanos. Implementamos el diseño de la marca y desarrollamos un sitio web que permite fácilmente el acceso a la justicia, mediante la búsqueda orientación y mensajería legal a los ciudadanos.',
      images:['images/projects/justiti3.jpg','images/projects/justiti4.jpg','images/projects/justiti5.jpg']
    },
    {
      type:'UI/UX Design & Software',
      name:'The Juicery Boutique',
      slug:'the-juicery-boutique',
      category: 'ui-ux',
      description:'Es una marca de Jugos cold pressed y productos naturales. Implementamos diseño y solución e-commerce para la venta de jugos, productos y paquetes detox.',
      url: 'http://www.thejuiceryboutique.com/',
      images:['images/projects/juicery2.jpg','images/projects/juicery1.jpg','images/projects/juicery3.jpg']
    },
    {
      type:'UI/UX Design & Software',
      name:'Bosques de playa',
      slug:'bosques-de-playa',
      category: 'ui-ux',
      description:'Es un nuevo desarrollo inmobiliario en playa del Carmen que brinda a inversionistas nacionales y extranjeros la armonía entre naturaleza y planeación urbana. Desarrollamos un sitio web para consultar todo acerca del proyecto, desde la venta de lotes, galería y contacto.',
      images:['images/projects/bosques2.jpg','images/projects/bosques3.jpg','images/projects/bosques4.jpg']
    },
    {
      type:'UI/UX Design & Software',
      name:'Caribe Maya',
      slug:'caribemaya',
      category: 'ui-ux',
      description:'Compañía de administración de destinos turísticos, Desarrollamos un sitio web que ofrece servicios, traslados, actividades e información en diferentes destinos en Cancún y La Riviera Maya.',
      images:['images/projects/caribemaya2.jpg', 'images/projects/caribemaya3.jpg','images/projects/caribemaya4.jpg']
    },
    {
      type:'UI/UX Design',
      name:'Silvia Ascencio',
      slug:'silvia-ascencio',
      category: 'ui-ux',
      description:'Especialista en Decoración de Interiores para casa habitacional, en este proyecto logramos rediseñar su Logotipo y crear su sitio web.',
      images:['images/projects/silvia4.jpg','images/projects/silvia5.jpg','images/projects/silvia6.jpg']
    },
    {
      type:'Branding',
      name:'Silvia Ascencio',
      slug:'silvia-ascencio-branding',
      category: 'branding',
      description:'Especialista en Decoración de Interiores para casa habitacional, en este proyecto logramos rediseñar su Logotipo y crear su sitio web.',
      images:['images/projects/silvia1.jpg','images/projects/silvia2.jpg','images/projects/silvia3.jpg','images/projects/silvia6.png','images/projects/silvia7.png']
    },
    {
      type:'UI/UX Design & Software',
      name:'Water tours',
      slug:'water-tours',
      category: 'ui-ux',
      description:'Es una empresa dedicada a la venta de tours acuáticos, Creamos la marca desde cero e implementamos un sitio web en el cual se puede comprar y reservar una gran variedad de actividades acuáticas.',
      //url: 'http://cancunwatertours.herokuapp.com/',
      images:['images/projects/watertours2.jpg', 'images/projects/watertours1.jpg']
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
      images:['images/projects/travcy1.jpg', 'images/projects/travcy2.jpg', 'images/projects/travcy3.jpg']
    },
    {
      type:'Branding',
      name:'Travelite',
      slug:'travelite',
      category: 'branding',
      description:'Diseño de Logotipo para agencia de viajes especializada en experiencias premium para tarjetahabientes.',
      images:['images/projects/travelite1.jpg', 'images/projects/travelite2.jpg', 'images/projects/travelite3.jpg']
    },
    {
      type:'Branding',
      name:'AirportCab',
      slug:'airportcab',
      category: 'branding',
      description:'Es una empresa de transportación turistica del Aeropuerto. Creamos la marca y desarrollamos su sitio web.',
      images:['images/projects/airportcab1.jpg', 'images/projects/airportcab2.jpg', 'images/projects/airportcab3.jpg', 'images/projects/airportcab4.jpg', 'images/projects/airportcab6.jpg']
    },
    {
      type:'Branding',
      name:'Bluecore',
      slug:'bluecore',
      category: 'branding',
      description:'Es una organización (ONG) dedicada a generar una cultura de conservación marina. Contribuimos en el diseño y desarrollo de su sitio web.',
      images:['images/projects/bluecore1.jpg', 'images/projects/bluecore2.jpg', 'images/projects/bluecore3.jpg']
    },
    {
      type:'Branding',
      name:'Cancun Unlimited',
      slug:'cancun-unlimited',
      category: 'branding',
      description:'',
      images:['images/projects/cancununlimited1.jpg', 'images/projects/cancununlimited2.jpg', 'images/projects/cancununlimited4.jpg']
    },
  ];

  $scope.init();

}

angular.module('spaceshiplabsApp').controller('ProjectsCtrl',ProjectsCtrl);
ProjectsCtrl.$inject = ['$scope','metaTagsService'];

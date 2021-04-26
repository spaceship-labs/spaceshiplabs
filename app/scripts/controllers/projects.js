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
      slug: 'bcjb',
      category: 'ui-ux',
      name:'AirBetter',
      description:'Consiste en una plataforma de gestión de vacation rental properties, con un catálogo amplio de bienes raíces para rentas. Realizamos el diseño y desarrollo web de algunas secciones con el fin de mejorar el rendimiento del administrador de la plataforma. Esto, ayuda a agilizar el proceso interno de operación, consiguiendo así un portal más rápido, fluido y navegable para el usuario final.',
      //url: 'https://www.bordercenter.net/',
      images:['images/projects/airbetter1.jpg','images/projects/airbetter2.jpg']
    },
    {
      type:'UI/UX Design & Software',
      slug: 'bcjb',
      category: 'ui-ux',
      name:'BCJB',
      description:'Border Center for Journalists and Bloggers, ONG y sin fines de lucro que busca mejorar la calidad periodística, promover prácticas seguras y fomentar la cooperación e innovación entre fronteras. Desarrollamos la página web, y la plataforma completa donde se suben oportunidades como talleres o cursos, notas y datos periodísticas, así como información de interés para periodistas. El diseño es responsive, la plataforma es ágil y compatible con navegadores.',
      url: 'https://www.bordercenter.net/',
      images:['images/projects/bordercenter1.jpg']
    },
    {
      type:'UI/UX Design & Software',
      slug: 'econopet',
      category: 'ui-ux',
      name:'Econopet',
      description:'Realizamos el diseño web y creación de tienda en línea para productos de mascotas (comida, accesorios, medicamentos, etc.). La tienda en línea está integrada con Shopify, una de las mejores plataformas de ecommerce del mundo, donde pueden llevar un control de las ventas, gestión de pagos y analíticas (entre otros beneficios). Es una página web responsive, ágil y compatible con todos los navegadores.',
      //url: 'https://www.bordercenter.net/',
      images:['images/projects/econopet1.jpg','images/projects/econopet2.jpg']
    },
    {
      type:'UI/UX Design & Software',
      slug: 'rcd-analytics',
      category: 'ui-ux',
      name:'RCD Analytics',
      description:'Realizamos el diseño web y desarrollo de software analítico y de inteligencia para RCD Hotels. El objetivo de dicha plataforma es registrar la data de las operaciones de los diversos hoteles de la cadena, y así ver las gráficas y reportes de crecimiento y rendimiento en tiempo real, o por fechas establecidas,  de cada hotel.',
      //url: 'https://www.bordercenter.net/',
      images:['images/projects/rcdanalytics1.jpg','images/projects/rcdanalytics2.jpg']
    },
    {
      type:'UI/UX Design & Software',
      slug: 'actual-group',
      category: 'ui-ux',
      name:'Actual Group',
      description:'Cluster de mueblerías en la Península de Yucatán. Este proyecto está compuesto por el diseño y desarrollo de frontend y backend: diseñamos y desarrollamos desde la plataforma de ventas, inventarios, registro de personal para control interno, así como las diversas páginas webs de las marcas: Actual Studio, Actual Home, Actual Kids.',
      //url: 'https://www.bordercenter.net/',
      images:['images/projects/actual1.png']
    },
    {
      type:'UI/UX Design & Software',
      slug: 'reparakit',
      category: 'ui-ux',
      name:'Reparakit',
      description:'Una aplicación que une a usuarios con proveedores de servicios. Reparakit es una base de datos de plomeros, electricistas, personal de limpieza desde la cual puedes solicitar un servicio, agendarlo y pagar en la app. Cuenta con un sistema de reviews, pago seguro, formas de contacto directo en la app, entre otros beneficios tanto para proveedores de servicio como clientes.',
      //url: 'https://www.bordercenter.net/',
      images:['images/projects/reparakit1.png']
    },
    {
      type:'UI/UX Design & Software',
      slug: 'day-tour-bacalar',
      category: 'ui-ux',
      name:'Day Tour Bacalar',
      description:'Agencia de tours en la zona de Bacalar y alrededores. Realizamos el branding de la marca con diversas aplicaciones -tanto impresas como digitales-, diseño y desarrollo web, con ecommerce. Hicimos la integración del sistema de reservas y pagos en línea en la página, de tal manera que el usuario puede tanto visualizar la información, reservar y pagar directo.',
      //url: 'https://www.bordercenter.net/',
      images:['images/projects/daytourbacalar1.png','images/projects/daytourbacalar2.jpg']
    },
    {
      type:'UI/UX Design & Software',
      slug: 'interjet',
      category: 'ui-ux',
      name:'Interjet',
      description:'Desarrollamos y diseñamos un administrador de transportación terrestre en todo México para Interjet, el cual permite que los choferes vean -en tiempo real- la información sobre rutas y pasajeros. Asimismo, incluye un sistema de reportes de ingresos para el control de los mismos.',
      //url: 'https://www.bordercenter.net/',
      images:['images/projects/interjet1.jpg']
    },
    {
      type:'UI/UX Design & Software',
      slug: 'ascentec',
      category: 'ui-ux',
      name:'Ascentec',
      description:'Empresa líder en el ramo de la tecnología vertical: ascensores, escaleras y rampas eléctricas, montacoches, montacamas. Realizamos el diseño y desarrollo web, mismo que incluye el catálogo de productos, formularios de contacto, descripciones y contenido audiovisual. La página web es ágil, responsive, y adaptada a diversos navegadores y plataformas.',
      //url: 'https://www.bordercenter.net/',
      images:['images/projects/ascentec1.jpg']
    },
    {
      type:'UI/UX Design & Software',
      slug: 'david-vazquez',
      category: 'ui-ux',
      name:'David Vázquez',
      description:'Diseñador industrial con amplia trayectoria, quien diseña y crea mobiliario y carpintería para showrooms, edificios, proyectos de renovación urbana y casas privadas, así como interiores de tiendas, oficinas, cafeterías y restaurantes. Realizamos el diseño y desarrollo web, con el fin de mostrar sus trabajos, por lo que es una plataforma 100% visual. Es ágil, responsiva, adaptada para diversos navegadores y con suficientes formularios de contacto para clientes potenciales.',
      //url: 'https://www.bordercenter.net/',
      images:['images/projects/davidvazquez1.jpg','images/projects/davidvazquez2.jpg']
    },
    {
      type:'Branding',
      slug: 'tripbu',
      category: 'branding',
      name:'TRIPBU',
      description:'Empresa dedicada a las rentas vacacionales. Tripbu administra las propiedades de diversas personas, y al mismo tiempo cuenta con un catálogo de rentas vacacionales para viajeros y turistas. Realizamos el branding completo para Tripbu: diseño de logo, gráficos, colores, catálogos, tarjetas de presentación, para diversas aplicaciones tanto impresas como digitales.',
      //url: 'https://www.bordercenter.net/',
      images:['images/projects/tripbu1.jpg','images/projects/tripbu2.jpg']
    },
    {
      type:'UI/UX Design & Software',
      slug: 'dezain',
      category: 'ui-ux',
      name:'DEZAIN',
      description:'Tienda de muebles de madera fina para el hogar y oficina. Realizamos el diseño y desarrollo web de la página, la cual cuenta con ecommerce mediante la integración con Shopify -una de las mejores plataformas de ecommerce del mundo, para procesamiento de pagos, registro de ventas y analíticas. La página web es responsive, ágil y compatible con todos los navegadores.',
      //url: 'https://www.bordercenter.net/',
      images:['images/projects/dezain1.jpg','images/projects/dezain2.jpg']
    },
    {
      type:'UI/UX Design & Software',
      slug: 'ment',
      category: 'ui-ux',
      name:'MENT',
      description:'Marca de ropa deportiva personalizada. Realizamos el diseño de la página web y tienda en línea, misma que incluye el catálogo de productos, gestión de pagos y registro de ventas. La página web es responsive, ágil y compatible con todos los navegadores.',
      //url: 'https://www.bordercenter.net/',
      images:['images/projects/ment1.jpg']
    },
    {
      type:'UI/UX Design & Software',
      slug: 'treign',
      category: 'ui-ux',
      name:'TREIGN',
      description:'Desarrollamos una plataforma ágil, responsive y compatible con todos los navegadores para Treign, una marca que se dedica a la venta de entrenamientos y planes alimenticios en línea. Dicho sitio web incluye el catálogo de productos de la empresa, ropa deportiva, planes de entrenamiento y alimentación y pagos en línea.',
      //url: 'https://www.bordercenter.net/',
      images:['images/projects/treign1.jpg','images/projects/treign2.jpg']
    },
    {
      type:'UI/UX Design & Software',
      slug: 'mejora-tu-escuela',
      category: 'ui-ux',
      name:'Mejora tu escuela',
      description:'Plataforma de participación ciudadana para transformar la educación. Desarrollamos un sitio web en el cual es posible buscar, comparar y calificar todas las escuelas de México.',
      url: 'https://www.mejoratuescuela.org/',
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
      url: 'https://nuevopaintball.com/',
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
      url: 'https://www.thejuiceryboutique.com/',
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
      //url: 'https://cancunwatertours.herokuapp.com/',
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
      slug:'airportcab-branding',
      category: 'branding',
      description:'Es una empresa de transportación turistica del Aeropuerto. Creamos la marca y desarrollamos su sitio web.',
      images:['images/projects/airportcab1.jpg', 'images/projects/airportcab2.jpg', 'images/projects/airportcab4.jpg']
    },
    {
      type:'UI/UX Design',
      name:'AirportCab',
      slug:'airportcab',
      category: 'ui-ux',
      description:'Es una empresa de transportación turistica del Aeropuerto. Creamos la marca y desarrollamos su sitio web.',
      images:['images/projects/airportcab3.jpg', 'images/projects/airportcab5.jpg', 'images/projects/airportcab6.jpg']
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
      images:['images/projects/cancun-unlimited1.jpg', 'images/projects/cancun-unlimited2.jpg', 'images/projects/cancun-unlimited4.jpg']
    },
  ];

  $scope.init();

}

angular.module('spaceshiplabsApp').controller('ProjectsCtrl',ProjectsCtrl);
ProjectsCtrl.$inject = ['$scope','metaTagsService'];

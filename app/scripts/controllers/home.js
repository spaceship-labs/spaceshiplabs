'use strict';

/**
 * @ngdoc function
 * @name spaceshiplabsApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the spaceshiplabsApp
 */
function HomeCtrl($scope, $rootScope, blogService, metaTagsService, $timeout){

  metaTagsService.setMetaTags();

  $scope.getRecentPosts = function(){
    blogService.getRecentEntries(6).then(function(entries){
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

      //Fix for safari
      var $video = $('#landing-video');
      $video.on('canplaythrough', function() {
         this.play();
      });

    }else{
      $('#landing-video').remove();
    }
    $timeout(function () {
      $('.clients-slider').addClass('timeout')
    },1000 )
  };


  $scope.projects = [
    {
      type:'UI/UX Design & Software',
      slug: 'airbetter',
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
      images:['images/projects/bordercenter1.jpg','images/projects/bordercenter1.jpg']
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
      images:['images/projects/actual1.png','images/projects/actual1.png']
    },
    {
      type:'UI/UX Design & Software',
      slug: 'reparakit',
      category: 'ui-ux',
      name:'Reparakit',
      description:'Una aplicación que une a usuarios con proveedores de servicios. Reparakit es una base de datos de plomeros, electricistas, personal de limpieza desde la cual puedes solicitar un servicio, agendarlo y pagar en la app. Cuenta con un sistema de reviews, pago seguro, formas de contacto directo en la app, entre otros beneficios tanto para proveedores de servicio como clientes.',
      //url: 'https://www.bordercenter.net/',
      images:['images/projects/reparakit1.png','images/projects/reparakit1.png']
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
  ];

  $scope.clients = [
    {
      avatar:'images/carloslopez.jpg',
      name: 'Carlos López',
      company: 'CONSEJOSANO',
      quote: 'Trabajamos juntos para un cliente startup y algunos meses despues ese startup reunio 3 millones de usd en inversion todo gracias al trabajo que realizamos juntos. '
    },
    {
      avatar:'images/alexandra.jpg',
      name: 'Allan',
      company: 'YELLOWTRANSFERS',
      quote: 'Spaceship Labs ha sido un aliado por mas de 3 años, convirtiendo nuestra plataforma digital en una parte integral de nuestro negocio.'
    },
    {
      avatar:'images/alexandra.jpg',
      name: 'Cynthia Dehesa',
      company: 'CIUDADANOS POR LA TRANSPARENCIA',
      quote: '¡Gracias a Spaceship Labs por todo su apoyo durante el evento Transformar, el evento no hubiera sido lo mismo sin ustedes !'
    }

  ];

  $scope.init();

}

angular.module('spaceshiplabsApp').controller('HomeCtrl',HomeCtrl);
HomeCtrl.$inject = ['$scope', '$rootScope', 'blogService', 'metaTagsService','$timeout'];


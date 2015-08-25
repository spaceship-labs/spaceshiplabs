'use strict';

/**
 * @ngdoc overview
 * @name spaceshiplabsApp
 * @description
 * # spaceshiplabsApp
 *
 * Main module of the application.
 */
angular
  .module('spaceshiplabsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'angular-carousel',
    //'contentful',
    'btford.markdown',
    'metatags'
  ])
  .config(function ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .when('/about-us', {
        templateUrl: 'views/about-us.html',
        controller: 'AboutUsCtrl',
        controllerAs: 'aboutUs'
      })
      .when('/awards', {
        templateUrl: 'views/awards.html',
        controller: 'AwardsCtrl',
        controllerAs: 'awards'
      })
      .when('/blog', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl',
        controllerAs: 'blog'
      })
      .when('/ui-ux', {
        templateUrl: 'views/ui-ux.html',
        controller: 'UiUxCtrl',
        controllerAs: 'uiUx'
      })
      .when('/single', {
        templateUrl: 'views/single.html',
        controller: 'SingleCtrl',
        controllerAs: 'single'
      })
      .when('/team', {
        templateUrl: 'views/team.html',
        controller: 'TeamCtrl',
        controllerAs: 'team'
      })
      .when('/projects', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl',
        controllerAs: 'projects'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/:slug', {
        templateUrl: 'views/post.html',
        controller: 'PostCtrl',
        controllerAs: 'post'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.hashPrefix('!');

    /*contentfulProvider.setOptions({
        space: '3w73jmlpbmx4',
        accessToken: '13e3b2302d52cfddc539a661274f356bb61a201121d77918faad10e4c415f653'
    });*/

  })


  .run(function($rootScope, $location){
    var domainUrl = $location.protocol() + "://" + $location.host() + ":" + $location.port();
    var generalDescription = 'Tienes alguna idea innovadora, y quieres invertir en internet ? cuenta con nosotros para llevarla a cabo. Tenemos la experiencia y las herramientas para que tu proyecto sea todo un éxito.';
    var generalTitle = 'Spaceship Labs - Diseño de páginas web, aplicaciones móviles, Diseño Gráfico y Software en General';
    var generalName = 'SpaceshipLabs';
    var logoImg = 'images/logo-og.png';

    $rootScope.metatags = {
      title: generalTitle,
      description: generalDescription,
      fb_title: generalTitle,
      fb_site_name: generalName ,
      fb_url: domainUrl ,
      fb_description: generalDescription,
      fb_type: 'article',
      fb_image: domainUrl + '/' + logoImg
    };

  });




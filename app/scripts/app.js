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
  .config(function ($routeProvider, $locationProvider, $mdThemingProvider) {

    $mdThemingProvider.theme('default')
      .primaryPalette('light-blue',{
        'default': '400',
      });

    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .when('/acerca-de-nosotros', {
        templateUrl: 'views/about-us.html',
        controller: 'AboutUsCtrl',
        controllerAs: 'aboutUs'
      })
      .when('/prensa', {
        templateUrl: 'views/awards.html',
        controller: 'AwardsCtrl',
        controllerAs: 'awards'
      })
      .when('/blog', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl',
        controllerAs: 'blog'
      })
      .when('/blog/category/:category', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl',
        controllerAs: 'blog'
      })
      .when('/blog/tag/:tag', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl',
        controllerAs: 'blog'
      })
      .when('/blog/page/:page', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl',
        controllerAs: 'blog'
      })
      .when('/blog/category/:category/page/:page', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl',
        controllerAs: 'blog'
      })
      .when('/blog/tag/:tag/page/:page', {
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
      .when('/nuestro-equipo', {
        templateUrl: 'views/team.html',
        controller: 'TeamCtrl',
        controllerAs: 'team'
      })
      .when('/proyectos', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl',
        controllerAs: 'projects'
      })
      .when('/proyectos/:slug', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl',
        controllerAs: 'projects'
      })
      .when('/proyectos/categoria/:category', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl',
        controllerAs: 'projects'
      })
      .when('/proyectos/categoria/:category/:slug', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl',
        controllerAs: 'projects'
      })
      .when('/contacto', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/spacees', {
        templateUrl: 'views/spacees.html',
        controller: 'SpaceesCtrl',
        controllerAs: 'spacees'
      })
      .when('/software', {
        templateUrl: 'views/software.html',
        controller: 'SoftwareCtrl',
        controllerAs: 'software'
      })
      .when('/marketing', {
        templateUrl: 'views/marketing.html',
        controller: 'MarketingCtrl',
        controllerAs: 'marketing'
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
        space: '',
        accessToken: ''
    });*/

  });




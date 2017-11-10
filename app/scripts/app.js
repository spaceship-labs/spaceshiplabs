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
    'metatags',
    'angularLazyImg',
    'slick',
    '720kb.socialshare'
  ])
  .config(function ($routeProvider, $locationProvider, $mdThemingProvider,lazyImgConfigProvider) {

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
      .when('/thankyou', {
        templateUrl: 'views/thankyoupage.html',
        controller: 'ThankYouCtrl',
        controllerAs: 'thankyou'
      })
      .when('/advice', {
        templateUrl: 'views/advice.html',
        controller: 'AdviceCtrl',
        controllerAs: 'advice'
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

    lazyImgConfigProvider.setOptions({
      offset: 100, // how early you want to load image (default = 100)
      errorClass: 'error', // in case of loading image failure what class should be added (default = null)
      successClass: 'lazy-load-complete', // in case of loading image success what class should be added (default = null)
      /*onError: function(image){}, // function fired on loading error
      onSuccess: function(image){
        console.log('done');
        console.log(image.$elem.attr('src'));
        console.log(image);
      }, // function fired on loading success
      */
    });

  });




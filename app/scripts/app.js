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
        space: '',
        accessToken: ''
    });*/

  });




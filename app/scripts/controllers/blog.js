'use strict';

/**
 * @ngdoc function
 * @name spaceshiplabsApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the spaceshiplabsApp
 */
function BlogCtrl($scope, $routeParams, blogService, metaTagsService){

  $scope.getRecentPosts = function(params){
    blogService.getEntries(params).then(function(data){
      $scope.pages = data.pages;
      $scope.entries = data.entries;
      $scope.loadedPosts = true;
    });
  };

  $scope.getCategories = function(){
    blogService.getCategories().then(function(data){
      $scope.categories = data;
    });
  };

  $scope.incrementPage = function(page){ return parseInt(page)+1; };

  $scope.init = function(){
    var meta = {
      title: 'Noticias del mundo Spaceship Labs | SpaceshipLabs',
      description: 'Conoce todo lo que rodea al mundo Spaceship Labs en nuestro blog'
    };
    metaTagsService.setMetaTags(meta);

    $scope.entries = [];
    $scope.loadedPosts = false;
    $scope.endPagination = 8;
    $scope.itemsPagination = 8;
    $scope.entriesLimit = 10;
    $scope.page = $routeParams.page || 1;

    var params = {
      limit: $scope.entriesLimit,
      page: $scope.page,
    };

    $scope.baseUrl = '/blog';
    $scope.searchTerm = '';
    $scope.term = '';
    $scope.blogSection = 'blog';

    if($routeParams.category){
      params.category = $routeParams.category;
      $scope.baseUrl = '/blog/category/' + $routeParams.category;
      $scope.blogSection = 'category';
      $scope.term = $routeParams.category;
    }
    else if($routeParams.tag){
      params.tag = $routeParams.tag;
      $scope.baseUrl = '/blog/tag/' + $routeParams.tag;
      $scope.blogSection = 'tag';
      $scope.term = $routeParams.tag;
    }
    else if($routeParams.s){
      params.searchTerm = $routeParams.s;
      $scope.searchTerm = '?s=' + $routeParams.s;
      $scope.blogSection = 'search';
      $scope.term = $routeParams.s;
    }

    $scope.getRecentPosts(params);
    $scope.getCategories();
  };

  $scope.init();
}

angular.module('spaceshiplabsApp').controller('BlogCtrl',BlogCtrl);
BlogCtrl.$inject = ['$scope','$routeParams','blogService','metaTagsService'];


'use strict';

/**
 * @ngdoc function
 * @name spaceshiplabsApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the spaceshiplabsApp
 */
angular.module('spaceshiplabsApp')
  .controller('BlogCtrl', function ($scope, $routeParams, blogService) {

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

      if($routeParams.category){
        params.category = $routeParams.category;
        $scope.baseUrl = '/blog/category' + $routeParams.category;
      }
      else if($routeParams.tag){
        params.tag = $routeParams.tag;
        $scope.baseUrl = '/blog/tag' + $routeParams.tag;
      }
      else if($routeParams.s){
        params.searchTerm = $routeParams.s;
        $scope.searchTerm = '?s=' + $routeParams.s;
      }

      $scope.getRecentPosts(params);
      $scope.getCategories();
    };

    $scope.init();


  });

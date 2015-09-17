'use strict';

/**
 * @ngdoc service
 * @name spaceshiplabsApp.blogService
 * @description
 * # blogService
 * Service in the spaceshiplabsApp.
 */
angular.module('spaceshiplabsApp')
  .service('blogService', function ($http, $q) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    //var postType = '2wKn6yEnZewu2SCCkus4as';
    var baseUrl = 'http://spaceshiplabs.com/wp-json';

    //var categoryType = '5KMiN6YPvi42icqAUQMCQe';
    //var postType = 'post';


    this.getCategoriesQuery = function(postSlug){
      var resource = '/posts';
      var entriesLimit = 1;
      var query = baseUrl + resource + '?post_status=publish&filter[posts_per_page]=' + entriesLimit + '&filter[name]=' + postSlug;
      return query;
    };

    this.getSingleEntryQuery = function(postSlug){
      var resource = '/posts';
      var entriesLimit = 1;
      var query = baseUrl + resource + '?post_status=publish&filter[posts_per_page]=' + entriesLimit + '&filter[name]=' + postSlug;
      return query;
    };

    this.getRecentEntriesQuery = function(entriesLimit){
      entriesLimit = entriesLimit || 3;
      var resource = '/posts';
      var query = baseUrl + resource + '?post_status=publish&filter[posts_per_page]=' + entriesLimit;
      return query;
    };

    this.getEntriesQuery = function(params){
      var page = params.page || 1;
      var limit = params.limit || 3;
      var resource = '/posts';
      var query = baseUrl + resource;
      query += '?post_status=publish';
      query += '&filter[posts_per_page]=' + limit;
      query += '&page=' + page;
      query += '&paged=' + page;
      if(params.category){
        query += '&filter[category_name]=' + params.category;
      }
      if(params.tag){
        query += '&filter[tag]=' + params.tag;
      }
      if(params.searchTerm){
        query += '&filter[s]=' + params.searchTerm;
      }

      return query;
    };

    this.getSingleEntry = function(postSlug){

      var queryUrl = this.getSingleEntryQuery(postSlug);
      var req = {
        method: 'GET',
        url: queryUrl
      };
      return $http( req ).then(function(response) {
          if(response.status === 200){
            return response.data[0];
          }else{
            return {};
          }
        }, function(err) {
          //error
          console.log(err);
          return {};
        });

    };

    this.getRecentEntries = function(entriesLimit){

      var queryUrl = this.getRecentEntriesQuery(entriesLimit);
      var req = {
        method: 'GET',
        url: queryUrl
      };
      return $http( req ).then(function(response) {
          if( response.data ){
            return response.data;
          }else{
            return [];
          }
        }, function(err) {
          //error
          console.log(err);
        });

    };

    this.getEntries = function(params){
      var queryUrl = this.getEntriesQuery(params);
      var req = {
        method: 'GET',
        url: queryUrl
      };
      var deferred = $q.defer();
      $http( req )
        .success(function(response, status, headers) {
          var data = {
            pages: headers('x-wp-totalpages'),
            entries: response
          };
          deferred.resolve(data);
        })
        .error(function(err) {
          //error
          console.log(err);
          deferred.reject(err);
        });

      return deferred.promise;
    };

    this.getCategories = function(){

      var queryUrl = baseUrl + '/posts/types/posts/taxonomies/category/terms';
      var req = {
        method: 'GET',
        url: queryUrl
      };
      return $http( req ).then(function(response) {
          if(response.status === 200){
            return response.data;
          }else{
            return {};
          }
        }, function(err) {
          //error
          console.log(err);
          return {};
        });

    };

  });

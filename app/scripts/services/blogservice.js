'use strict';

/**
 * @ngdoc service
 * @name spaceshiplabsApp.blogService
 * @description
 * # blogService
 * Service in the spaceshiplabsApp.
 */
angular.module('spaceshiplabsApp')
  .service('blogService', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    //var postType = '2wKn6yEnZewu2SCCkus4as';
    var baseUrl = 'http://spaceshiplabs.com/wp-json';

    //var categoryType = '5KMiN6YPvi42icqAUQMCQe';
    //var postType = 'post';

    /*
    this.getCategories = function(limit){
      limit = limit || 10;
      var query = 'content_type='+ categoryType + '&limit='+limit;
      return contentful.entries( query ).then(function(response){
          if(response.status === 200){
            if(response.data.items.length > 0){
              var categories = response.data.items;
              console.log(categories);
              return categories;
            }
          }
        });
    };
    */

    this.getSingleEntryQuery = function(postSlug){
      var resource = '/posts';
      var count = 1;
      var query = baseUrl + resource + '?filter[posts_per_page]=' + count + '&filter[name]=' + postSlug;
      return query;
    };

    this.getRecentEntriesQuery = function(entriesLimit){
      entriesLimit = entriesLimit || 3;
      var resource = '/posts';
      var count = entriesLimit;
      var query = baseUrl + resource + '?filter[posts_per_page]=' + count;
      return query;
    };

    this.getSingleEntry = function(postSlug){

      var queryUrl = this.getSingleEntryQuery(postSlug);
      //queryUrl += '&callback=JSON_CALLBACK';
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
      //queryUrl += '&callback=JSON_CALLBACK';
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

  });

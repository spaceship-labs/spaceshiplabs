'use strict';

/**
 * @ngdoc service
 * @name spaceshiplabsApp.blogService
 * @description
 * # blogService
 * Service in the spaceshiplabsApp.
 */
angular.module('spaceshiplabsApp')
  .service('blogService', function ($q, contentful) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var postType = '2wKn6yEnZewu2SCCkus4as';

    this.getSingleEntryQuery = function(postSlug){
      var query = 'content_type='+ postType + '&fields.slug=' + postSlug + '&limit=1';
      return query;
    };

    this.getRecentEntriesQuery = function(entriesLimit){
      entriesLimit = entriesLimit || 3;
      var query = 'content_type='+ postType + '&limit=' + entriesLimit + '&order=fields.date';
      return query;
    };


    this.getSingleEntry = function(postSlug){

      return contentful.entries( this.getSingleEntryQuery(postSlug) ).then(function(response){
          if(response.status === 200){
            if(response.data.items.length > 0){
              var entry = response.data.items[0];
              return entry;
            }
          }
        });
    };

    this.getRecentEntries = function(entriesLimit){
      return contentful.entries( this.getRecentEntriesQuery(entriesLimit) ).then(function(response){
          if(response.status === 200){
            if(response.data.items.length > 0){
              var entries = response.data.items;
              return entries;
            }
          }
        });
    };


  });

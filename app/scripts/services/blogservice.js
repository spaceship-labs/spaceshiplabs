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
    var gifsCategory = 4;
    var baseUrl = 'https://blog.spaceshiplabs.com/wp-json/wp/v2';
    this.blogUrl = 'https://blog.spaceshiplabs.com';

    //var categoryType = '5KMiN6YPvi42icqAUQMCQe';

    var formatEntry = function (entry) {
      return {
        id: entry.id,
        date: entry.date,
        type: entry.type,
        link: entry.link,
        slug: entry.slug,
        title: entry.title.rendered,
        content: entry.content.rendered,
        excerpt: entry.excerpt.rendered,
        featured_media: entry.featured_media,
      };
    };
    var formatEntries = function (data) {
      var result = [];
      //var formatEntry = this.formatEntry;
      result = data.map(function (entry, index) {
        return formatEntry(entry);
      })
      return result;
    };

    this.getCategoriesQuery = function (postSlug) {
      var resource = '/posts';
      var entriesLimit = 1;
      var query = baseUrl + resource + '?post_status=publish&filter[posts_per_page]=' + entriesLimit + '&filter[name]=' + postSlug;
      return query;
    };

    this.getSingleEntryQuery = function (postSlug) {
      var resource = '/posts';
      var entriesLimit = 1;
      var query = baseUrl + resource + '?post_status=publish&filter[posts_per_page]=' + entriesLimit + '&slug=' + postSlug;
      return query;
    };

    this.getRecentEntriesQuery = function (entriesLimit) {
      entriesLimit = entriesLimit || 3;
      var resource = '/posts';
      var query = baseUrl + resource + '?post_status=publish&per_page=' + entriesLimit;
      query += '&filter[cat]=-' + gifsCategory;
      return query;
    };

    this.getEntriesQuery = function (params) {
      var page = params.page || 1;
      var limit = params.limit || 3;
      var resource = '/posts';
      var query = baseUrl + resource;
      query += '?post_status=publish';
      query += '&per_page=' + limit;
      query += '&page=' + page;
      query += '&paged=' + page;
      if (params.category) {
        query += '&filter[category_name]=' + params.category;
      }
      if (params.tag) {
        query += '&filter[tag]=' + params.tag;
      }
      if (params.searchTerm) {
        query += '&filter[s]=' + params.searchTerm;
      }

      if (!params.searchTerm && !params.tag && !params.category) {
        query += '&filter[cat]=-' + gifsCategory;
      }

      return query;
    };

    this.getSingleEntry = function (postSlug) {

      var queryUrl = this.getSingleEntryQuery(postSlug);
      var req = {
        method: 'GET',
        url: queryUrl
      };
      //var formatEntry = this.formatEntry
      return $http(req).then(function (response) {
        console.log(response);
        if (response.status === 200 && response.data.length > 0) {
          return formatEntry(response.data[0]);
        } else {
          return {};
        }
      }, function (err) {
        //error
        console.log(err);
        return {};
      });

    };

    this.getPostMedia = function (postId) {
      var req = {
        method: 'GET',
        url: baseUrl + "/media?parent" + postId
      };
      //var formatEntry = this.formatEntry
      return $http(req).then(function (response) {
        if (response.status === 200 && response.data.length > 0) {
          return response.data;
        } else {
          return [];
        }
      }, function (err) {
        //error
        console.log(err);
        return {};
      });
    }
    this.getSingleMedia = function (id) {

      var req = {
        method: 'GET',
        url: baseUrl + "/media/" + id
      };
      //var formatEntry = this.formatEntry
      return $http(req).then(function (response) {
        if (response.status === 200 && response.data) {
          return response.data;
        } else {
          return {};
        }
      }, function (err) {
        //error
        console.log(err);
        return {};
      });

    };

    this.getRecentEntries = function (entriesLimit) {

      var queryUrl = this.getRecentEntriesQuery(entriesLimit);
      //var formatEntries = this.formatEntries;
      var req = {
        method: 'GET',
        url: queryUrl
      };
      return $http(req).then(function (response) {
        if (response.data) {
          return formatEntries(response.data);
        } else {
          return [];
        }
      }, function (err) {
        //error
        console.log(err);
      });

    };
    this.getEntries = function (params) {
      var queryUrl = this.getEntriesQuery(params);
      var req = {
        method: 'GET',
        url: queryUrl
      };
      var deferred = $q.defer();
      //var formatEntries = this.formatEntries;
      $http(req)
        .then(function (response, status, headers) {
          //console.log('response', response);
          var data = {
            pages: response.headers('x-wp-totalpages'),
            entries: formatEntries(response.data)
          };
          deferred.resolve(data);
        })
        .catch(function (err) {
          //error
          console.log(err);
          deferred.reject(err);
        });

      return deferred.promise;
    };

    this.getCategories = function () {

      //var queryUrl = baseUrl + '/posts/types/posts/taxonomies/category/terms';
      var queryUrl = baseUrl + '/categories';
      var req = {
        method: 'GET',
        url: queryUrl
      };
      return $http(req).then(function (response) {
        if (response.status === 200) {
          return response.data;
        } else {
          return {};
        }
      }, function (err) {
        //error
        console.log(err);
        return {};
      });

    };

  });

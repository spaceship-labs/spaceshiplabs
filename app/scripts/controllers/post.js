'use strict';

/**
 * @ngdoc function
 * @name spaceshiplabsApp.controller:PostCtrl
 * @description
 * # PostCtrl
 * Controller of the spaceshiplabsApp
 */
angular.module('spaceshiplabsApp')
  .controller('PostCtrl', function ($scope, $routeParams,  contentful) {
    console.log($routeParams.slug);
    $scope.postSlug = $routeParams.slug || 'down-the-rabbit-hole';
    //$scope.postSlug = 'down-the-rabbit-hole';
    $scope.postType = '2wKn6yEnZewu2SCCkus4as';

    $scope.getSingleEntryQuery = function(){
      var query = 'content_type='+ $scope.postType + '&fields.slug=' + $scope.postSlug + '&limit=1';
      return query;
    };

    $scope.getRecentEntriesQuery = function(){
      var query = 'content_type='+ $scope.postType + '&limit=3&order=fields.date';
      return query;
    };


    $scope.getSingleEntry = function(){
      contentful.entries( $scope.getSingleEntryQuery() ).then(function(response){
        if(response.status === 200){
          if(response.data.items.length > 0){
            $scope.entry = response.data.items[0];
            console.log($scope.entry);
          }
        }
      });
    };

    $scope.getRecentEntries = function(){
      contentful.entries( $scope.getRecentEntriesQuery() ).then(function(response){
        if(response.status === 200){
          if(response.data.items.length > 0){
            $scope.entries = response.data.items;
          }
        }
      });
    };

    $scope.getSingleEntry();
    $scope.getRecentEntries();


    /*contentful.entry('1asN98Ph3mUiCYIYiiqwko').then(function(response){
      console.log(response);

    });*/

  });

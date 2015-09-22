'use strict';

/**
 * @ngdoc directive
 * @name spaceshiplabsApp.directive:clientsSlider
 * @description
 * # clientsSlider
 */
angular.module('spaceshiplabsApp')
  .directive('clientsSlider', function ($interval, $timeout) {
    return {
      templateUrl: 'views/directives/clients-slider.html',
      restrict: 'EA',
      link: function postLink(scope) {

        scope.getMovingOutIndex = function (selectedIndex, totalItems){
          var movingOutIndex = -1;
          if(selectedIndex > 0){
            movingOutIndex = selectedIndex - 1;
          }else{
            movingOutIndex = totalItems-1;
          }

          return movingOutIndex;

        };

        scope.setUp = function(){
          scope.itemsCount = 2;
        	scope.selectedIndex = 0;
        	scope.leftReel = 0;
          scope.movingOutIndex = -1;
          scope.clientSliderInterval = $interval(scope.moveNext, 4000);
          scope.duration = 400;
        };

				scope.$watch('selectedIndex', function (newValue) {
          scope.movingOutIndex = scope.getMovingOutIndex(newValue, scope.itemsCount);
          $timeout(function(){
            scope.movingOutIndex = -1;
          }, scope.duration);

				}, true);

      	scope.moveNext = function(){
      		if(scope.selectedIndex < (scope.itemsCount-1)){
	      		scope.selectedIndex++;
  				}else{
            scope.selectedIndex = 0;
          }

          $interval.cancel(scope.clientSliderInterval);
      	};

      	scope.movePrev = function(){
      		if(scope.selectedIndex > 0){
	      		scope.selectedIndex--;
  				}else{
            scope.selectedIndex = scope.itemsCount - 1;
          }
          $interval.cancel(scope.clientSliderInterval);
      	};

        scope.moveTo = function(index){
          scope.selectedIndex = index;
          $interval.cancel(scope.clientSliderInterval);
        };

        scope.getNumber = function(num) {
            return new Array(num);
        };

        scope.setUp();

      }
    };
  });

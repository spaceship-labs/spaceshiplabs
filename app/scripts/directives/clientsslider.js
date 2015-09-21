'use strict';

/**
 * @ngdoc directive
 * @name spaceshiplabsApp.directive:clientsSlider
 * @description
 * # clientsSlider
 */
angular.module('spaceshiplabsApp')
  .directive('clientsSlider', function ($interval) {
    return {
      templateUrl: 'views/directives/clients-slider.html',
      restrict: 'EA',
      link: function postLink(scope) {
        scope.setUp = function(){
        	scope.selectedIndex = 0;
        	scope.itemsCount = 2;
        	scope.leftReel = 0;
          scope.clientSliderInterval = $interval(scope.moveNext, 4000);
        };

				scope.$watch('selectedIndex', function (newValue) {
					scope.leftReel = newValue * (-100);
					scope.widthReel = scope.itemsCount * 100;
					scope.widthSlide = 100 / scope.itemsCount;
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

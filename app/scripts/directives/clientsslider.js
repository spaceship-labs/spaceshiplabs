'use strict';

/**
 * @ngdoc directive
 * @name spaceshiplabsApp.directive:clientsSlider
 * @description
 * # clientsSlider
 */
angular.module('spaceshiplabsApp')
  .directive('clientsSlider', function () {
    return {
      templateUrl: 'views/directives/clients-slider.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
      	scope.selectedIndex = 0;
      	scope.itemsCount = 2;
      	scope.leftReel = 0;

				scope.$watch('selectedIndex', function (newValue, oldValue) {
					scope.leftReel = scope.selectedIndex * (-100);
					scope.widthReel = scope.itemsCount * 100;
					scope.widthSlide = 100 / scope.itemsCount;
				}, true);       	

      	scope.moveNext = function(){
      		if(scope.selectedIndex < (scope.itemsCount-1)){
	      		scope.selectedIndex++;
  				}else{
            scope.selectedIndex = 0;
          }
      	};

      	scope.movePrev = function(){
      		if(scope.selectedIndex > 0){
	      		scope.selectedIndex--;
  				}else{
            scope.selectedIndex = scope.itemsCount - 1;
          }
      	}; 

        scope.moveTo = function(index){
          scope.selectedIndex = index;
        };      	

        scope.getNumber = function(num) {
            return new Array(num);   
        };      	

      }
    };
  });

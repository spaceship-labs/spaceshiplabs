'use strict';

/**
 * @ngdoc directive
 * @name spaceshiplabsApp.directive:projectsSlider
 * @description
 * # projectsSlider
 */
angular.module('spaceshiplabsApp')
  .directive('projectsSlider', function () {
    return {
      templateUrl: 'views/projects-slider.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      	scope.selectedIndex = 0;
        scope.selectedProjectPhoto = 0;
      	scope.itemsCount = 2;
        scope.projectsPhotos = [
          ['images/yellow_proyectos.jpg','images/lap.png'],
          ['images/aboutus.jpg','images/imagen6.png']
        ];

        scope.getNumber = function(num) {
            return new Array(num);   
        }        

				scope.$watch('selectedIndex', function (newValue, oldValue) {
					var topImages = 0;
          var topContent = 0;
          console.log(newValue);
          if(newValue === oldValue || newValue === 0){ 
            topContent = ( newValue * (-100) ) + '%';
            topImages = ( (scope.itemsCount-1) * (-100) ) + '%';
            $('.projects-slider-images-reel').css('top', topImages);
            $('.projects-slider-content-reel').css('top', topContent);
            return;
          }
					topContent = ( newValue * (-100) ) + '%';
          topImages = ( ( ( scope.itemsCount - newValue ) -1 )  * (-100) ) + '%';
          console.log(topImages);
					$('.projects-slider-images-reel').css('top', topImages);
          $('.projects-slider-content-reel').css('top', topContent);
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
          console.log(scope.selectedIndex);
          scope.selectedIndex = index;
        }

        scope.moveNextPhoto = function(){
          var photosCount = scope.projectsPhotos[scope.selectedIndex].length;
          if(scope.selectedProjectPhoto < (photosCount-1)){
            scope.selectedProjectPhoto++;
          }else{
            scope.selectedProjectPhoto = 0;
          }

          console.log(scope.selectedProjectPhoto);

        }

        scope.movePrevPhoto = function(){
          var photosCount = scope.projectsPhotos[scope.selectedIndex].length;
          if(scope.selectedProjectPhoto > 0){
            scope.selectedProjectPhoto--;
          }else{
            scope.selectedProjectPhoto = photosCount - 1;
          }
        }; 

      }
    };
  });

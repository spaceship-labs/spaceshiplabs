'use strict';

/**
 * @ngdoc directive
 * @name spaceshiplabsApp.directive:projectsSlider
 * @description
 * # projectsSlider
 */
angular.module('spaceshiplabsApp')
  .directive('projectsSlider', function ($interval) {
    return {
      templateUrl: 'views/directives/projects-slider.html',
      restrict: 'E',
      scope: {
        preview: '=',
        projects: '='
      },
      link: function postLink(scope) {

        scope.setUp = function(){
          scope.selectedIndexSlide = 0;
          scope.selectedProjectPhoto = 0;
          /*scope.projects = [
            {
              type:'UI/UX Design & Software',
              name:'Yellow Transfers',
              description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
              url: '#',
              images:['images/yellow_proyectos.jpg','images/lap.png']
            },
            {
              type:'UI/UX Design',
              name:'Capshia',
              description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusamus fugit, saepe, earum, illum esse sed obcaecati molestiae ducimus illo omnis! Dolores reiciendis sed non iure dolore tempore sit facere!',
              url: '#',
              images: ['images/projects/capshia.jpg','images/projects/capshia2.jpg']
            }
          ];*/
          scope.itemsCount = scope.projects.length;
          console.log(scope.projects);
          scope.sliderInterval = $interval(scope.moveNextProject, 6000);
        };

        scope.getNumber = function(num) {
            return new Array(num);
        };

				scope.$watch('selectedIndexSlide', function (newValue, oldValue) {
					var topImages = 0;
          var topContent = 0;
          if(newValue === oldValue || newValue === 0){
            topContent = ( newValue * (-100) ) + '%';
            topImages = ( (scope.itemsCount-1) * (-100) ) + '%';
            $('.projects-slider-images-reel').css('top', topImages);
            $('.projects-slider-content-reel').css('top', topContent);
            return;
          }
					topContent = ( newValue * (-100) ) + '%';
          topImages = ( ( ( scope.itemsCount - newValue ) -1 )  * (-100) ) + '%';
					$('.projects-slider-images-reel').css('top', topImages);
          $('.projects-slider-content-reel').css('top', topContent);
				}, true);

      	scope.moveNextProject = function(){
      		if(scope.selectedIndexSlide < (scope.itemsCount-1)){
	      		scope.selectedIndexSlide++;
  				}else{
            scope.selectedIndexSlide = 0;
          }
          $interval.cancel(scope.sliderInterval);
          scope.sliderInterval = $interval(scope.moveNextProject, 6000);
      	};

      	scope.movePrev = function(){
      		if(scope.selectedIndexSlide > 0){
	      		scope.selectedIndexSlide--;
  				}else{
            scope.selectedIndexSlide = scope.itemsCount - 1;
          }
          $interval.cancel(scope.sliderInterval);
          scope.sliderInterval = $interval(scope.moveNextProject, 6000);
      	};

        scope.moveToProject = function(index){
          scope.selectedIndexSlide = index;
          $interval.cancel(scope.sliderInterval);
          scope.sliderInterval = $interval(scope.moveNextProject, 6000);
        };

        scope.moveNextPhoto = function(){
          var photosCount = scope.projects[scope.selectedIndexSlide].images.length;
          if(scope.selectedProjectPhoto < (photosCount-1)){
            scope.selectedProjectPhoto++;
          }else{
            scope.selectedProjectPhoto = 0;
          }
        };

        scope.movePrevPhoto = function(){
          var photosCount = scope.projects[scope.selectedIndexSlide].photos.length;
          if(scope.selectedProjectPhoto > 0){
            scope.selectedProjectPhoto--;
          }else{
            scope.selectedProjectPhoto = photosCount - 1;
          }
        };

        scope.setUp();

      }
    };
  });

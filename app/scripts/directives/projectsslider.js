'use strict';

/**
 * @ngdoc directive
 * @name spaceshiplabsApp.directive:projectsSlider
 * @description
 * # projectsSlider
 */
angular.module('spaceshiplabsApp')
  .directive('projectsSlider', function ($interval, $timeout) {
    return {
      templateUrl: 'views/directives/projects-slider.html',
      restrict: 'E',
      scope: {
        preview: '=',
        projects: '=',
        winSize: '='
      },
      link: function postLink(scope) {

        /*scope.$watch('winSize', function (newValue, oldValue) {
          if(newValue !== 'blog' && newValue !== oldValue){
            scope.sliderInterval = $interval(scope.moveNextProject, 6000);
          }else{
            $interval.cancel(scope.sliderInterval);
          }
        });*/

        scope.getMovingOutIndexSlide = function (selectedIndex, totalItems){
          var movingOutIndex = -1;
          if(selectedIndex > 0){
            movingOutIndex = selectedIndex - 1;
          }else{
            movingOutIndex = totalItems-1;
          }

          return movingOutIndex;

        };

        scope.setUp = function(){
          scope.winSize = scope.winSize || 'large';
          scope.projectsCount = scope.projects.length;
          scope.movingOutIndexSlide = -1;
          scope.selectedIndexSlide = 0;
          scope.selectedProjectPhoto = 0;
          scope.durationMovement = 400;

          $interval.cancel(scope.sliderInterval);

          if(scope.winSize !== 'blog'){
            scope.sliderInterval = $interval(scope.moveNextProject, 6000);
          }
        };

        scope.getNumber = function(num) {
            return new Array(num);
        };

				scope.$watch('selectedIndexSlide', function (newValue) {

          scope.movingOutIndexSlide = scope.getMovingOutIndexSlide(newValue, scope.projectsCount);
          $timeout(function(){
            scope.movingOutIndexSlide = -1;
          }, scope.durationMovement);

				}, true);

      	scope.moveNextProject = function(){
      		if(scope.selectedIndexSlide < (scope.projectsCount-1)){
	      		scope.selectedIndexSlide++;
  				}else{
            scope.selectedIndexSlide = 0;
          }

      	};

        scope.moveNextProjectAction = function(){
          $interval.cancel(scope.sliderInterval);
          scope.moveNextProject();

        };

      	scope.movePrev = function(){
      		if(scope.selectedIndexSlide > 0){
	      		scope.selectedIndexSlide--;
  				}else{
            scope.selectedIndexSlide = scope.projectsCount - 1;
          }

          $interval.cancel(scope.sliderInterval);
      	};

        scope.moveToProject = function(index){
          scope.selectedIndexSlide = index;
          $interval.cancel(scope.sliderInterval);

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

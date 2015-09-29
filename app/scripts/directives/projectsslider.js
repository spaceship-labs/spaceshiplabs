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
        allProjects: '=projects',
        winSize: '='
      },
      link: function postLink(scope,element) {

        scope.init = function(){
          scope.projects = scope.allProjects;
          scope.setUp();

          //Hiding elements on preview mode
          if(scope.preview || typeof scope.preview !== 'undefined'){
            var nav = $(element).find('.projects-categories-wrapper');
            nav.hide();
          }
        };

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
          console.log('setUp');
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

				});

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

        scope.$watchCollection('projects', function (newValue, oldValue) {
          if(newValue !== oldValue && newValue){
            scope.setUp();
          }
        });

        scope.getProjectsByName = function(name){
          if(name || name !== ''){
            scope.projects = scope.allProjects.filter(function(project) {
                var regex = new RegExp( name, 'gi' );
                var matched = project.name.match(regex);
                if(matched){
                  return true;
                }
                return false;
            });

            console.log(scope.projects);

            if(scope.projects.length === 0){
              scope.projects = scope.allProjects;
            }

          }else{
            scope.projects = scope.allProjects;
          }

        };

        scope.getProjectsByCategory = function(category){
          if(category || category !== ''){
            scope.projects = scope.allProjects.filter(function(project) {
              var inCategory = project.categories.indexOf(category);
              if(inCategory > 0){
                return true;
              }
              return false;
            });

            if(scope.projects.length === 0){
              scope.projects = scope.allProjects;
              scope.currentCategory = '';
            }else{
              scope.currentCategory = category;
            }

          }else{
            scope.projects = scope.allProjects;
            scope.currentCategory = '';
          }

        };

        scope.$watch('searchTerm', function (newValue, oldValue) {
          if(newValue !== oldValue){
            scope.getProjectsByName(newValue);
          }

        });

        scope.init();

        scope.$on(
            "$destroy",
            function() {
                $interval.cancel( scope.sliderInterval );
            }
        );

      }
    };
  });

'use strict';

/**
 * @ngdoc directive
 * @name spaceshiplabsApp.directive:projectsSlider
 * @description
 * # projectsSlider
 */
angular.module('spaceshiplabsApp')
  .directive('projectsSlider', function ($interval, $timeout, $window, $location, $routeParams) {
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

          var projectSlug = $routeParams.slug || false;
          var params = $location.search();

          scope.currentCategory = $routeParams.category || false;
          scope.autoLoop = (params.move === 'false' || params.move === false) ? false : true;

          //Hiding elements on preview mode
          if(scope.preview || typeof scope.preview !== 'undefined'){
            var nav = $(element).find('.projects-categories-wrapper');
            nav.hide();
            projectSlug = false;
          }

          scope.setUpCounter = 0;
          scope.projects = scope.allProjects;
          scope.setUp(projectSlug);
        };

        scope.setUp = function(projectSlug){
          var projectIndex = false;
          scope.winSize = scope.winSize || 'large';
          //scope.projects.length = scope.projects.length;

          if(scope.currentCategory){
            scope.getProjectsByCategory(scope.currentCategory);
          }

          projectIndex = scope.getProjectBySlug(projectSlug);

          if(projectIndex){
            scope.movingOutIndexSlide = scope.getMovingOutIndexSlide(projectIndex);
            scope.selectedIndexSlide = projectIndex;
          }else{
            scope.movingOutIndexSlide = -1;
            scope.selectedIndexSlide = 0;
          }

          scope.selectedProjectPhoto = 0;
          scope.durationMovement = 400;

          $interval.cancel(scope.sliderInterval);

          /*
          //if(scope.winSize !== 'blog'){
          if(!projectSlug){
            //console.log()
            //scope.sliderInterval = $interval(scope.moveNextProject, 6000);
          }*/

          if(scope.autoLoop){
            scope.sliderInterval = $interval(scope.moveNextProject, 6000);
          }

          /*if(scope.setUpCounter > 0){
            $interval.cancel(scope.sliderInterval);
          }*/

          scope.setUpCounter++;

        };

        scope.getProjectBySlug = function(slug){
          for (var i = 0; i < scope.projects.length; i++) {
            if (scope.projects[i].slug === slug) {
              return i;
            }
          }
          return false;
        };

        /*$window.onfocus = function (){
          if(scope.winSize !== 'blog'){
            scope.sliderInterval = $interval(scope.moveNextProject, 6000);
          }
        };

        $window.onblur = function (){
          $interval.cancel(scope.sliderInterval);
        };*/

        scope.getMovingOutIndexSlide = function (selectedIndex, totalItems){
          var movingOutIndex = -1;
          if(selectedIndex > 0){
            movingOutIndex = selectedIndex - 1;
          }else{
            movingOutIndex = totalItems-1;
          } 

          return movingOutIndex;

        };

        scope.getNumber = function(num) {
            return new Array(num);
        };

				scope.$watch('selectedIndexSlide', function (newValue, oldValue) {
          if( !scope.preview && oldValue !== newValue) {
            if(scope.currentCategory && scope.currentCategory !== ''){
              $location.path('/proyectos/' + 'categoria/' + scope.currentCategory + '/' + scope.projects[newValue].slug );
            }else{
              if(scope.btnTriggered){
                $location.path('/proyectos/' + scope.projects[newValue].slug).search('move',false);
              }else{
                $location.path('/proyectos/' + scope.projects[newValue].slug);
              }
            }
          }

          scope.movingOutIndexSlide = scope.getMovingOutIndexSlide(newValue, scope.projects.length);

          $timeout(function(){
            scope.movingOutIndexSlide = -1;
          }, scope.durationMovement);

				});

      	scope.moveNextProject = function(){
      		if(scope.selectedIndexSlide < (scope.projects.length-1)){
	      		scope.selectedIndexSlide++;
  				}else{
            scope.selectedIndexSlide = 0;
          }

      	};

        scope.moveNextProjectAction = function(){
          scope.btnTriggered = true;
          $interval.cancel(scope.sliderInterval);
          scope.moveNextProject();

        };

      	scope.movePrev = function(){
          scope.btnTriggered = true;
      		if(scope.selectedIndexSlide > 0){
	      		scope.selectedIndexSlide--;
  				}else{
            scope.selectedIndexSlide = scope.projects.length - 1;
          }

          $interval.cancel(scope.sliderInterval);
      	};

        scope.moveToProject = function(index){
          scope.btnTriggered = true;
          scope.selectedIndexSlide = index;
          $interval.cancel(scope.sliderInterval);

        };

        scope.moveNextPhoto = function(){
          $interval.cancel(scope.sliderInterval);
          var photosCount = scope.projects[scope.selectedIndexSlide].images.length;
          if(scope.selectedProjectPhoto < (photosCount-1)){
            scope.selectedProjectPhoto++;
          }else{
            scope.selectedProjectPhoto = 0;
          }
        };

        scope.movePrevPhoto = function(){
          $interval.cancel(scope.sliderInterval);
          var photosCount = scope.projects[scope.selectedIndexSlide].images.length;
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
              if (project.category === category){
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

        scope.scrollTo = function (target) {
          var height = 60;
          $('html, body').animate({
            scrollTop: $('#' + target).offset().top - height
          }, 90);
        };
      }
    };
  });

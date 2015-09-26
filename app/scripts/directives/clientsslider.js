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
      scope:{
        clients:'='
      },
      link: function postLink(scope) {

        scope.init = function(){
          scope.removeClasses();
          scope.initLocations();
        };

        scope.getNextIndex = function (selectedIndex, totalItems){
          var nextIndex;
          selectedIndex = scope.selectedIndex;
          totalItems = scope.itemsCount;

          if(selectedIndex < (totalItems-1) ){
            nextIndex = selectedIndex + 1;
          }else{
            nextIndex = 0;
          }
          return nextIndex;
        };

        scope.getPrevIndex = function (selectedIndex, totalItems){
          selectedIndex = scope.selectedIndex;
          totalItems = scope.itemsCount;
          var prevIndex;
          if(selectedIndex > 0){
            prevIndex = selectedIndex - 1;
          }else{
            prevIndex = totalItems-1;
          }
          return prevIndex;
        };

        scope.groupClients = function(clients){
          var arrSize = clients.length;
          var i = 0;
          var collection = [];
          var size = 2;
          while (i < arrSize) {
            var limit = i + size;
            var slide = clients.slice(i,limit);
            i = limit;
            collection.push(slide);
          }
          return collection;
        };



        scope.setUp = function(){
          scope.slides = scope.clients;
          scope.itemsCount = scope.slides.length;
        	scope.selectedIndex = 0;
          if(scope.clientSliderInterval){
            $interval.cancel(scope.clientSliderInterval);
          }
          scope.clientSliderInterval = $interval(scope.moveNextAction, 4000);
          scope.duration = 1400;
          scope.movement = 'next';
          scope.activeAnimation = false;
        };


        scope.initLocations = function(){
          var selectedIndex = scope.selectedIndex;
          var classActive = 'clients-slide-active clients-slide-animated';
          $('.clients-slide[data-slide-index="'+selectedIndex+'"]').addClass(classActive);
        };

        scope.removeClasses = function(movingInIndex){
          $('.clients-slide').removeClass('clients-slide-animated');
          $('.clients-slide').each(function(){
            var index = parseInt($(this).attr('data-slide-index'));
            if( index !== movingInIndex ){
              $(this).removeClass('clients-slide-active');
            }
          });
          $('.clients-slide').removeClass('clients-slide-left');
          $('.clients-slide').removeClass('clients-slide-right');
        };

        scope.updateLocations = function(movingOutIndex, movingInIndex){
          /*console.log('out:' + movingOutIndex);
          console.log('in: ' + movingInIndex);*/

          scope.removeClasses();
          var classAnimated = 'clients-slide-animated';
          var classActive = 'clients-slide-active clients-slide-animated';
          var classLeft = 'clients-slide-left';
          var classRight = 'clients-slide-right';


          if(scope.movement === 'next'){
            classLeft += ' clients-slide-animated';
            $('.clients-slide[data-slide-index="'+movingOutIndex+'"]').addClass(classLeft);
            $('.clients-slide[data-slide-index="'+movingInIndex+'"]').addClass(classActive);
          }else{
            classRight += ' clients-slide-animated';
            //Begins from left
            $('.clients-slide[data-slide-index="'+movingInIndex+'"]').removeClass(classAnimated);
            $('.clients-slide[data-slide-index="'+movingInIndex+'"]').addClass(classLeft);

            $('.clients-slide[data-slide-index="'+movingOutIndex+'"]').addClass(classRight);

            $timeout(function(){
              $('.clients-slide[data-slide-index="'+movingInIndex+'"]').addClass(classActive);
            },100);
          }

          $timeout(function(){
            scope.removeClasses(movingInIndex);
            scope.activeAnimation = false;
          }, scope.duration + 100);

        };

        scope.moveNextAction = function(){
          if(!scope.activeAnimation){
            scope.activeAnimation = true;
            scope.movement = 'next';
            var movingInIndex = scope.getNextIndex();
            var movingOutIndex = scope.selectedIndex;

            scope.updateLocations(movingOutIndex, movingInIndex);

            if(scope.selectedIndex < (scope.itemsCount-1)){
              scope.selectedIndex++;
            }else{
              scope.selectedIndex = 0;
            }
          }
        };

      	scope.moveNext = function(){
          scope.moveNextAction();
          $interval.cancel(scope.clientSliderInterval);
      	};

      	scope.movePrev = function(){
          if(!scope.activeAnimation){
            scope.activeAnimation = true;
            scope.movement = 'prev';
            var movingInIndex = scope.getPrevIndex();
            var movingOutIndex = scope.selectedIndex;
            scope.updateLocations(movingOutIndex, movingInIndex);

        		if(scope.selectedIndex > 0){
  	      		scope.selectedIndex--;
    				}else{
              scope.selectedIndex = scope.itemsCount - 1;
            }

            $interval.cancel(scope.clientSliderInterval);
          }
      	};

        scope.moveTo = function(index){
          if(index !== scope.selectedIndex && !scope.activeAnimation){
            var movingInIndex;
            var movingOutIndex;
            scope.activeAnimation = true;

            if(index > scope.selectedIndex){
              scope.movement = 'next';
              movingInIndex = scope.getNextIndex();
            }else{
              scope.movement = 'prev';
              movingInIndex = scope.getPrevIndex();
            }

            movingOutIndex = scope.selectedIndex;

            scope.updateLocations(movingOutIndex, movingInIndex);

            if(index > scope.selectedIndex){
              scope.movement = 'next';
            }else{
              scope.movement = 'prev';
            }
            scope.selectedIndex = index;

            $interval.cancel(scope.clientSliderInterval);
          }
        };

        scope.getNumber = function(num) {
            return new Array(num);
        };

        scope.setUp();

        $timeout(function(){
          scope.init();
        },0);

        scope.$on(
            "$destroy",
            function() {
                $interval.cancel( scope.clientSliderInterval );
            }
        );


      }
    };
  });

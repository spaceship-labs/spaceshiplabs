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
      link: function postLink(scope, element) {

        scope.getNextIndex = function (selectedIndex, totalItems){
          var nextIndex;
          var selectedIndex = scope.selectedIndex;
          var totalItems = scope.itemsCount;
          var movement = scope.movement;

          if(selectedIndex < (totalItems-1) ){
            nextIndex = selectedIndex + 1;
          }else{
            nextIndex = 0;
          }
          return nextIndex;
        };

        scope.getPrevIndex = function (selectedIndex, totalItems){
          var prevIndex;
          var selectedIndex = scope.selectedIndex;
          var totalItems = scope.itemsCount;
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
          scope.clients = [
            {
              avatar:'images/carloslopez.jpg',
              name: 'Carlos López UNO',
              company: 'CONSEJOSANO',
              quote: '"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur inventore aliquid eligendi, provident quo veritatis vitae consequatur a eum dolorem similique sed laborum."'
            },
            {
              avatar:'images/alexandra.jpg',
              name: 'Alexandra Zapata-Hojel UNO',
              company: 'MEJORA TU ESCUELA',
              quote: '"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur inventore aliquid eligendi, provident quo veritatis vitae consequatur a eum dolorem similique sed laborum."'
            },
            {
              avatar:'images/carloslopez.jpg',
              name: 'Carlos López DOS',
              company: 'CONSEJOSANO',
              quote: '"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur inventore aliquid eligendi, provident quo veritatis vitae consequatur a eum dolorem similique sed laborum."'
            },
            {
              avatar:'images/alexandra.jpg',
              name: 'Alexandra Zapata-Hojel DOS',
              company: 'MEJORA TU ESCUELA',
              quote: '"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur inventore aliquid eligendi, provident quo veritatis vitae consequatur a eum dolorem similique sed laborum."'
            },
            {
              avatar:'images/carloslopez.jpg',
              name: 'Carlos López TREs',
              company: 'CONSEJOSANO',
              quote: '"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur inventore aliquid eligendi, provident quo veritatis vitae consequatur a eum dolorem similique sed laborum."'
            },
            {
              avatar:'images/alexandra.jpg',
              name: 'Alexandra Zapata-Hojel TREs',
              company: 'MEJORA TU ESCUELA',
              quote: '"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur inventore aliquid eligendi, provident quo veritatis vitae consequatur a eum dolorem similique sed laborum."'
            },

          ];
          scope.slides = scope.groupClients(scope.clients);
          scope.itemsCount = scope.slides.length;
        	scope.selectedIndex = 0;
          scope.clientSliderInterval = $interval(scope.moveNextAction, 4000);
          scope.duration = 1400;
          scope.movement = 'next';
          scope.activeAnimation = false;
        };

				scope.$watch('selectedIndex', function (newValue, oldValue) {

				}, true);

        scope.initLocations = function(){
          var selectedIndex = scope.selectedIndex;
          var classActive = 'clients-slide-active clients-slide-animated';
          $('.clients-slide[data-slide-index="'+selectedIndex+'"]').addClass(classActive);
        }

        scope.removeClasses = function(movingInIndex){
          $('.clients-slide').removeClass('clients-slide-animated');
          $('.clients-slide').each(function(){
            if( $(this).attr('data-slide-index') != movingInIndex ){
              $(this).removeClass('clients-slide-active');
            }
          });
          $('.clients-slide').removeClass('clients-slide-left');
          $('.clients-slide').removeClass('clients-slide-right');
        }

        scope.updateLocations = function(movingOutIndex, movingInIndex){
          console.log('out:' + movingOutIndex);
          console.log('in: ' + movingInIndex);

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
            console.log('moviendo prev');
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
          if(!scope.moveNextAction){
            $interval.cancel(scope.clientSliderInterval);
          }
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

            scope.activeAnimation = true;

            if(index > scope.selectedIndex){
              scope.movement = 'next';
              var movingInIndex = scope.getNextIndex();
            }else{
              scope.movement = 'prev';
              var movingInIndex = scope.getPrevIndex();
            }

            var movingOutIndex = scope.selectedIndex;

            scope.updateLocations(movingOutIndex, movingInIndex);

            var movingOutIndex = scope.selectedIndex;
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
          scope.initLocations();
        },0)


      }
    };
  });

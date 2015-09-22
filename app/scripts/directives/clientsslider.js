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

        scope.getNextIndex = function (selectedIndex, totalItems){
          var nextIndex;
          if(selectedIndex < (totalItems-1) ){
            nextIndex = selectedIndex + 1;
          }else{
            nextIndex = 0;
          }
          return nextIndex;
        };

        scope.getPrevIndex = function (selectedIndex, totalItems){
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

        scope.isAnimated = function(index){
          var animated = false;
          if(scope.activeAnimation){
            if( (index == scope.prevIndex && scope.movement !== 'prev')
                || (index == scope.nextIndex && scope.movement !== 'next')
                || (index == scope.selectedIndex)
             ){
              animated = true;
            }
          }
          return animated;
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
            /*{
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
            },*/

          ];
          scope.slides = scope.groupClients(scope.clients);
          console.log(scope.slides);
          scope.itemsCount = scope.slides.length;
        	scope.selectedIndex = 0;
          scope.prevIndex = scope.getPrevIndex(scope.selectedIndex, scope.itemsCount);
          scope.nextIndex = scope.getNextIndex(scope.selectedIndex, scope.itemsCount);
          //scope.clientSliderInterval = $interval(scope.moveNext, 4000);
          scope.duration = 1400;
          scope.movement = 'next';
          scope.activeAnimation = false;
        };

				scope.$watch('selectedIndex', function (newValue, oldValue) {
          scope.activeAnimation = true;
          scope.prevIndex = scope.getPrevIndex(scope.selectedIndex, scope.itemsCount);
          scope.nextIndex = scope.getNextIndex(scope.selectedIndex, scope.itemsCount);
          if(newValue != oldValue){
            console.log('prev: ' + scope.prevIndex);
            console.log('next: ' + scope.nextIndex);
            console.log('selected: ' + newValue);
          }

          if(scope.animationTimeout){
            $timeout.cancel(scope.animationTimeout);
          }

          scope.animationTimeout = $timeout(function(){
            scope.activeAnimation = false;
          }, scope.duration);

				}, true);

      	scope.moveNext = function(){
          scope.movement = 'next';
      		if(scope.selectedIndex < (scope.itemsCount-1)){
	      		scope.selectedIndex++;
  				}else{
            scope.selectedIndex = 0;
          }

          $interval.cancel(scope.clientSliderInterval);
      	};

      	scope.movePrev = function(){
          scope.movement = 'prev';
      		if(scope.selectedIndex > 0){
	      		scope.selectedIndex--;
  				}else{
            scope.selectedIndex = scope.itemsCount - 1;
          }
          $interval.cancel(scope.clientSliderInterval);
      	};

        scope.moveTo = function(index){
          if(index > scope.selectedIndex){
            scope.movement = 'next';
          }else{
            scope.movement = 'prev';
          }
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

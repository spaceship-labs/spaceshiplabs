'use strict';

/**
 * @ngdoc directive
 * @name spaceshiplabsApp.directive:fullScreenWrapper
 * @description
 * # fullScreenWrapper
 */
 angular.module('spaceshiplabsApp')
 .directive('fullScreenWrapper', function($window){


 	return function (scope, element) {// jshint ignore:line
 		var w = angular.element($window);

 		scope.getWindowDimensions = function () {

 			return { 'h': w.height(), 'w': w.width() };
 		};

 		scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {// jshint ignore:line

 			scope.windowHeight = newValue.h;
 			scope.windowWidth = newValue.w;

 			scope.style = function (screenType) {
 				var header = $('.toolbar-head');// jshint ignore:line
 				var customHeight;
 				screenType = typeof screenType !== 'undefined' ? screenType : 'normal';

 				if(screenType === 'firstScreen'){
 					customHeight = newValue.h - header.outerHeight();
 				}else{
 					customHeight = newValue.h;
 				}

 				return {
 					'height': (customHeight) + 'px',
 					'width': (newValue.w) + 'px'
 				};
 			};
 		}, true);

 		w.bind('resize', function () {
 			scope.$apply();
 		});
 	};

 });

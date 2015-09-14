'use strict';

/**
 * @ngdoc directive
 * @name spaceshiplabsApp.directive:countTo
 * @description
 * # countTo
 */
angular.module('spaceshiplabsApp')
  .directive('countTo', ['$timeout','$filter', function ($timeout,$filter) {
    return {
        replace: false,
        scope: true,
        link: function (scope, element, attrs) {

            var e = element[0];
            var num, refreshInterval, duration, steps, step, countTo, increment;
            var filterVal = attrs.filter ? attrs.filter : 'number';

            var calculate = function () {
                refreshInterval = 30;
                step = 0;
                scope.timoutId = null;
                countTo = parseInt(attrs.countTo) || 0;
                scope.value = parseInt(attrs.value, 10) || 0;
                if (attrs.type === 'int'){
                    duration = (parseInt(attrs.duration) * 1000) || 0;
                }
                else{
                    duration = (parseFloat(attrs.duration) * 1000) || 0;
                }
                steps = parseInt( Math.ceil(duration / refreshInterval) );
                if (attrs.type === 'int'){
                    increment = parseInt( Math.ceil((countTo - scope.value) / steps) );
                }
                else{
                    increment = parseInt((countTo - scope.value) / steps);
                }
                num = parseInt( Math.ceil(scope.value) );
            };

            var tick = function () {
                scope.timoutId = $timeout(function () {
                    num += increment;
                    step++;
                    if (step >= steps) {
                        $timeout.cancel(scope.timoutId);
                        num = countTo;
                        e.textContent = $filter(filterVal)(countTo);
                    } else {
                        e.textContent = $filter(filterVal)(num);
                        tick();
                    }
                }, refreshInterval);

            };

            var start = function () {
                if (scope.timoutId) {
                    $timeout.cancel(scope.timoutId);
                }
                calculate();
                tick();
            };

            attrs.$observe('countTo', function (val) {
                if (val) {
                    start();
                }
            });

            attrs.$observe('value', function () {
                start();
            });

            return true;
        }
    };
  }]);

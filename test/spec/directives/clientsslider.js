'use strict';

describe('Directive: clientsSlider', function () {

  // load the directive's module
  beforeEach(module('spaceshiplabsApp'));

  //var element,
  var scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  /*it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<clients-slider></clients-slider>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the clientsSlider directive');
  }));*/
});

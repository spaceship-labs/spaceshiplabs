'use strict';

describe('Directive: fixedElement', function () {

  // load the directive's module
  beforeEach(module('spaceshiplabsApp'));

  var scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  /*it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<fixed-element></fixed-element>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the fixedElement directive');
  }));*/
});

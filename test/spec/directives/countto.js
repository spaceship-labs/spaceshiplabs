'use strict';

describe('Directive: countTo', function () {

  // load the directive's module
  beforeEach(module('spaceshiplabsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<count-to></count-to>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the countTo directive');
  }));
});

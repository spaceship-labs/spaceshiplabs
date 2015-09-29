'use strict';

describe('Directive: postItem', function () {

  // load the directive's module
  beforeEach(module('spaceshiplabsApp'));

  /*var element,
    scope;*/
  var scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  /*it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<div post-item></post-item>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the postItem directive');
  }));*/
});

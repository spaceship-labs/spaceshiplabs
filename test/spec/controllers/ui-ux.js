'use strict';

describe('Controller: UiUxCtrl', function () {

  // load the controller's module
  beforeEach(module('spaceshiplabsApp'));

  var UiUxCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UiUxCtrl = $controller('UiUxCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    //expect(UiUxCtrl.awesomeThings.length).toBe(3);
  });
});

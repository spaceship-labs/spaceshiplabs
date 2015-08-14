'use strict';

describe('Controller: SingleCtrl', function () {

  // load the controller's module
  beforeEach(module('spaceshiplabsApp'));

  var SingleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SingleCtrl = $controller('SingleCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    //expect(SingleCtrl.awesomeThings.length).toBe(3);
  });
});

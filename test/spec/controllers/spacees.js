'use strict';

describe('Controller: SpaceesCtrl', function () {

  // load the controller's module
  beforeEach(module('spaceshiplabsApp'));

  var SpaceesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SpaceesCtrl = $controller('SpaceesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

});

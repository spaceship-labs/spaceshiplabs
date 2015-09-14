'use strict';

describe('Controller: AwardsCtrl', function () {

  // load the controller's module
  beforeEach(module('spaceshiplabsApp'));

  var AwardsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AwardsCtrl = $controller('AwardsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

});

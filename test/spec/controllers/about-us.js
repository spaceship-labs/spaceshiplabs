'use strict';

describe('Controller: AboutUsCtrl', function () {

  // load the controller's module
  beforeEach(module('spaceshiplabsApp'));

  var AboutUsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutUsCtrl = $controller('AboutUsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

});

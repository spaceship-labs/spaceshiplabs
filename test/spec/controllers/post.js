'use strict';

describe('Controller: PostCtrl', function () {

  // load the controller's module
  beforeEach(module('spaceshiplabsApp'));

  var PostCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PostCtrl = $controller('PostCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

});

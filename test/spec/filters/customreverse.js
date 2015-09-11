'use strict';

describe('Filter: customReverse', function () {

  // load the filter's module
  beforeEach(module('spaceshiplabsApp'));

  // initialize a new instance of the filter before each test
  var customReverse;
  beforeEach(inject(function ($filter) {
    customReverse = $filter('customReverse');
  }));

  it('should return the input prefixed with "customReverse filter:"', function () {
    var text = 'angularjs';
    expect(customReverse(text)).toBe('customReverse filter: ' + text);
  });

});

'use strict';

describe('Service: transportation', function () {

  // load the service's module
  beforeEach(module('tagbgroupApp'));

  // instantiate service
  var transportation;
  beforeEach(inject(function (_transportation_) {
    transportation = _transportation_;
  }));

  it('should do something', function () {
    expect(!!transportation).toBe(true);
  });

});

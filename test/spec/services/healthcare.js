'use strict';

describe('Service: healthcare', function () {

  // load the service's module
  beforeEach(module('tagbgroupApp'));

  // instantiate service
  var healthcare;
  beforeEach(inject(function (_healthcare_) {
    healthcare = _healthcare_;
  }));

  it('should do something', function () {
    expect(!!healthcare).toBe(true);
  });

});

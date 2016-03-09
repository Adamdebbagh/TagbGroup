'use strict';

describe('Service: career', function () {

  // load the service's module
  beforeEach(module('tagbgroupApp'));

  // instantiate service
  var career;
  beforeEach(inject(function (_career_) {
    career = _career_;
  }));

  it('should do something', function () {
    expect(!!career).toBe(true);
  });

});

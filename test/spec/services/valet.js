'use strict';

describe('Service: valet', function () {

  // load the service's module
  beforeEach(module('tagbgroupApp'));

  // instantiate service
  var valet;
  beforeEach(inject(function (_valet_) {
    valet = _valet_;
  }));

  it('should do something', function () {
    expect(!!valet).toBe(true);
  });

});

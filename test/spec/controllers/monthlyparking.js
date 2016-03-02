'use strict';

describe('Controller: MonthlyparkingCtrl', function () {

  // load the controller's module
  beforeEach(module('tagbgroupApp'));

  var MonthlyparkingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MonthlyparkingCtrl = $controller('MonthlyparkingCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MonthlyparkingCtrl.awesomeThings.length).toBe(3);
  });
});

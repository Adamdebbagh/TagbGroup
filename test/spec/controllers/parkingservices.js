'use strict';

describe('Controller: ParkingservicesCtrl', function () {

  // load the controller's module
  beforeEach(module('tagbgroupApp'));

  var ParkingservicesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ParkingservicesCtrl = $controller('ParkingservicesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ParkingservicesCtrl.awesomeThings.length).toBe(3);
  });
});

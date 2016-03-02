'use strict';

describe('Controller: HealthcareservicesCtrl', function () {

  // load the controller's module
  beforeEach(module('tagbgroupApp'));

  var HealthcareservicesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HealthcareservicesCtrl = $controller('HealthcareservicesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HealthcareservicesCtrl.awesomeThings.length).toBe(3);
  });
});

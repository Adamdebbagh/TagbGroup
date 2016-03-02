'use strict';

describe('Controller: ValetservicesCtrl', function () {

  // load the controller's module
  beforeEach(module('tagbgroupApp'));

  var ValetservicesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ValetservicesCtrl = $controller('ValetservicesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ValetservicesCtrl.awesomeThings.length).toBe(3);
  });
});

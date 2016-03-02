'use strict';

describe('Controller: ManagementteamCtrl', function () {

  // load the controller's module
  beforeEach(module('tagbgroupApp'));

  var ManagementteamCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ManagementteamCtrl = $controller('ManagementteamCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ManagementteamCtrl.awesomeThings.length).toBe(3);
  });
});

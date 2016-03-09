'use strict';

/**
 * @ngdoc function
 * @name tagbgroupApp.controller:LocationsCtrl
 * @description
 * # LocationsCtrl
 * Controller of the tagbgroupApp
 */
angular.module('tagbgroupApp')
  .controller('LocationsCtrl',['$scope','location', function ($scope,location) {


    $scope.locationSetting = location.getLocationSetting;
    $scope.counter = $scope.locationSetting.counter;
    $scope.locations = location.getLocations();
    $scope.selectLocation = function (locationId) {
      location.selectLocation(locationId);
      $scope.location = $scope.locationSetting.location;
      console.log("Location look: " +$scope.locationSetting.locationOpened);
      console.log("Map look: " +$scope.locationSetting.mapOpened);
    };
    $scope.count = function () {
      location.likesCounter();
      $scope.counter = $scope.locationSetting.counter;
    };
    $scope.getDirection = function () {
      $scope.locationSetting.mapOpened = true;
      $scope.locationSetting.locationOpened = false;
    };
    $scope.closeMap = function () {
      $scope.locationSetting.mapOpened = false;
    };

  }]);

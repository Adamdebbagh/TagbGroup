'use strict';

/**
 * @ngdoc function
 * @name tagbgroupApp.controller:ParkingservicesCtrl
 * @description
 * # ParkingservicesCtrl
 * Controller of the tagbgroupApp
 */
angular.module('tagbgroupApp')
  .controller('ParkingServicesCtrl',['$scope','parking', function ($scope, parking) {

    $scope.parkingServices = parking.getParkingServices();

  }]);

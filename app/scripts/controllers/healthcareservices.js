'use strict';

/**
 * @ngdoc function
 * @name tagbgroupApp.controller:HealthcareservicesCtrl
 * @description
 * # HealthcareservicesCtrl
 * Controller of the tagbgroupApp
 */
angular.module('tagbgroupApp')
  .controller('HealthcareServicesCtrl',['$scope','healthcare', function ($scope, healthcare) {

    $scope.healthcareServices = healthcare.getHealthcareServices();

  }]);

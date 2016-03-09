'use strict';

/**
 * @ngdoc function
 * @name tagbgroupApp.controller:ParkingformsCtrl
 * @description
 * # ParkingformsCtrl
 * Controller of the tagbgroupApp
 */
angular.module('tagbgroupApp')
  .controller('ParkingFormsCtrl', ['$scope','form', function ($scope,form) {

    $scope.forms = form.formGuideLine();

  }]);

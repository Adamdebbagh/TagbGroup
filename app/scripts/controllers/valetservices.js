'use strict';

/**
 * @ngdoc function
 * @name tagbgroupApp.controller:ValetservicesCtrl
 * @description
 * # ValetservicesCtrl
 * Controller of the tagbgroupApp
 */
angular.module('tagbgroupApp')
  .controller('ValetServicesCtrl',['$scope','valet', function ($scope,valet) {
    $scope.valetServices = valet.getValetServices() ;
  }]);

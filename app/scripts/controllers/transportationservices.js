'use strict';

/**
 * @ngdoc function
 * @name tagbgroupApp.controller:TransportationservicesCtrl
 * @description
 * # TransportationservicesCtrl
 * Controller of the tagbgroupApp
 */
angular.module('tagbgroupApp')
  .controller('TransportationServicesCtrl',['$scope','transportation', function ($scope, transportation) {

    $scope.transportationServices = transportation.getTransportationServices() ;
  }]);

'use strict';

/**
 * @ngdoc function
 * @name tagbgroupApp.controller:CareerCtrl
 * @description
 * # CareerCtrl
 * Controller of the tagbgroupApp
 */
angular.module('tagbgroupApp')
  .controller('CareerCtrl',['$scope','career', function ($scope, career) {

    $scope.employmentGuideline = career.getEmploymentGuideline();
    $scope.employmentStatement=  career.getEmploymentStatement();

  }]);

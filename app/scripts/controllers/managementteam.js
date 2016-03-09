'use strict';

/**
 * @ngdoc function
 * @name tagbgroupApp.controller:ManagementteamCtrl
 * @description
 * # ManagementteamCtrl
 * Controller of the tagbgroupApp
 */
angular.module('tagbgroupApp')
  .controller('ManagementTeamCtrl', ['$scope','team', function ($scope, team) {
    $scope.header = team.getHeader();
    $scope.team = team.getTeam();

  }]);

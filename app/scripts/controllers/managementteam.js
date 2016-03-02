'use strict';

/**
 * @ngdoc function
 * @name tagbgroupApp.controller:ManagementteamCtrl
 * @description
 * # ManagementteamCtrl
 * Controller of the tagbgroupApp
 */
angular.module('tagbgroupApp')
  .controller('ManagementTeamCtrl', ['$scope', function ($scope) {

    $scope.header = {title:'Our Management Team', intro:'Tag-B’s executive team combines decades of successful experience to deliver its mission to provide “services at a higher level”.'};
    $scope.team = [
      {image: './images/user.png', name:'Taweke ‘Bennie’ Alemayehu', position:'President', email:'Bennie@Tagbgroup.com'},
      {image: './images/user.png', name:'Moss Belkessam', position:'Vice President', email:'Moss@Tagbgroup.com'},
      {image: './images/user.png', name:'Million Desta', position:'Operations Manager ', email:'Million@Tagbgroup.com'},
      {image: './images/user.png', name:'Nebyou', position:'Area manager', email:'Nebyou@Tagbgroup.com'},
      {image: './images/user.png', name:'Blen', position:'Accountant', email:'Blen@Tagbgroup.com'},
      {image: './images/user.png', name:'Adam Debbagh', position:'IT Operations', email:'Adam@Tagbgroup.com'}

    ];














  }]);

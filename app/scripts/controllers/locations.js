'use strict';

/**
 * @ngdoc function
 * @name tagbgroupApp.controller:LocationsCtrl
 * @description
 * # LocationsCtrl
 * Controller of the tagbgroupApp
 */
angular.module('tagbgroupApp')
  .controller('LocationsCtrl',['$scope', function ($scope) {
    $scope.locations = [
      {name:"66 New York Ave NE", options:"Monthly,Daily",address:'66 New York Ave NE Washington, DC 20002'},
      {name:"645 New York Ave NE", options:"Monthly,Daily",address:'645 New York Ave NW Washington DC 20001'},
      {name:"601 K St NW Washington", options:"Monthly,Daily",address:'601 K St NW Washington, DC 20001'},
      {name:"400 K St NW", options:"Monthly,Daily",address:'400 K St NW Washington, DC 20001'},
      {name:"300 K St NW", options:"Monthly,Daily",address:'300 K St NW Washington, DC 20001'},
      {name:"2240 25th Place NE", options:"Valet,Daily",address:'2240 25th Place NE Washington DC'},
      {name:"2210 Adams Place NE", options:"Valet,Daily",address:'2210 Adams Place NE Washington DC'},
      {name:"Howard Center", options:"Monthly,Daily",address:'2204 Georgia Avenue, Washington DC 20001'},
      {name:"2145 Queens Chapel", options:"Valet,Daily",address:'2145 Queens Chapel Washington, DC 20018'},
      {name:"Howard University Hospital", options:"Monthly,Daily",address:'2041 Georgia Ave NW, Washington, DC 20060'},
      {name:"1140 3rd St NE", options:"Monthly,Daily",address:'1140 3rd St NE Washington, DC 20002'}

    ];
  }]);

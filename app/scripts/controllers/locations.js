'use strict';

/**
 * @ngdoc function
 * @name tagbgroupApp.controller:LocationsCtrl
 * @description
 * # LocationsCtrl
 * Controller of the tagbgroupApp
 */
angular.module('tagbgroupApp')
  .controller('LocationsCtrl',['$scope','NgMap', function ($scope) {
    $scope.counter = 26;
    $scope.monthlyfee = true;
    $scope.valetfee = false;
    $scope.locations = [
      {name:"66 New York Ave NE", options:"Monthly,Daily",address:'66 New York Ave NE Washington, DC 20002',dailyrate:'8', monthlyrate: 160, valetrate: 0, description:'Lorem ipsum dolor sit amet, iste deleniti eveniet numquam recusandae, deserunt temporibus enim', slides: [{image:'./images/parkingservices.jpg'},{image:'./images/STK1.jpg'},{image:'./images/valet_services.jpg'}]},
      {name:"645 New York Ave NE", options:"Monthly,Daily",address:'645 New York Ave NW Washington DC 20001',dailyrate:'10', monthlyrate: 200, valetrate: 0 , description:'Lorem ipsum dolor sit amet, iste deleniti eveniet numquam recusandae, deserunt temporibus enim', slides: [{image:'./images/parkingservices.jpg'},{image:'./images/STK1.jpg'},{image:'./images/valet_services.jpg'}]},
      {name:"601 K St NW Washington", options:"Monthly,Daily",address:'601 K St NW Washington, DC 20001',dailyrate:'8', monthlyrate: 160, valetrate: 0, description:'Lorem ipsum dolor sit amet, iste deleniti eveniet numquam recusandae, deserunt temporibus enim', slides: [{image:'./images/parkingservices.jpg'},{image:'./images/STK1.jpg'},{image:'./images/valet_services.jpg'}]},
      {name:"400 K St NW", options:"Monthly,Daily",address:'400 K St NW Washington, DC 20001',dailyrate:'9', monthlyrate: 160, valetrate: 0, description:'Lorem ipsum dolor sit amet, iste deleniti eveniet numquam recusandae, deserunt temporibus enim', slides: [{image:'./images/parkingservices.jpg'},{image:'./images/STK1.jpg'},{image:'./images/valet_services.jpg'}]},
      {name:"300 K St NW", options:"Monthly,Daily",address:'300 K St NW Washington, DC 20001',dailyrate:'9', monthlyrate: 160, valetrate: 0, description:'Lorem ipsum dolor sit amet, iste deleniti eveniet numquam recusandae, deserunt temporibus enim', slides: [{image:'./images/parkingservices.jpg'},{image:'./images/STK1.jpg'},{image:'./images/valet_services.jpg'}]},
      {name:"2240 25th Place NE", options:"Valet,Daily",address:'2240 25th Place NE Washington DC',dailyrate:'10', monthlyrate: 0, valetrate: 10, description:'Lorem ipsum dolor sit amet, iste deleniti eveniet numquam recusandae, deserunt temporibus enim', slides: [{image:'./images/parkingservices.jpg'},{image:'./images/STK1.jpg'},{image:'./images/valet_services.jpg'}]},
      {name:"2210 Adams Place NE", options:"Valet,Daily",address:'2210 Adams Place NE Washington DC',dailyrate:'10', monthlyrate: 0, valetrate: 10, description:'Lorem ipsum dolor sit amet, iste deleniti eveniet numquam recusandae, deserunt temporibus enim', slides: [{image:'./images/parkingservices.jpg'},{image:'./images/STK1.jpg'},{image:'./images/valet_services.jpg'}]},
      {name:"Howard Center", options:"Monthly,Daily",address:'2204 Georgia Avenue, Washington DC 20001',dailyrate:'8', monthlyrate: '140', valetrate: 0, description:'Lorem ipsum dolor sit amet, iste deleniti eveniet numquam recusandae, deserunt temporibus enim', slides: [{image:'./images/parkingservices.jpg'},{image:'./images/STK1.jpg'},{image:'./images/valet_services.jpg'}]},
      {name:"2145 Queens Chapel", options:"Valet,Daily",address:'2145 Queens Chapel Washington, DC 20018',dailyrate:'10', monthlyrate: 0, valetrate: 10, description:'Lorem ipsum dolor sit amet, iste deleniti eveniet numquam recusandae, deserunt temporibus enim', slides: [{image:'./images/parkingservices.jpg'},{image:'./images/STK1.jpg'},{image:'./images/valet_services.jpg'}]},
      {name:"Howard University Hospital", options:"Monthly,Daily",address:'2041 Georgia Ave NW, Washington, DC 20060',dailyfee:'8', monthlyrate: '140', valetrate: 0, description:'Lorem ipsum dolor sit amet, iste deleniti eveniet numquam recusandae, deserunt temporibus enim', slides: [{image:'./images/parkingservices.jpg'},{image:'./images/STK1.jpg'},{image:'./images/valet_services.jpg'}]},
      {name:"1140 3rd St NE", options:"Monthly,Daily",address:'1140 3rd St NE Washington, DC 20002',dailyrate:'8', monthlyrate: 0, valetrate: 0, description:'Lorem ipsum dolor sit amet, iste deleniti eveniet numquam recusandae, deserunt temporibus enim', slides: [{image:'./images/parkingservices.jpg'},{image:'./images/STK1.jpg'},{image:'./images/valet_services.jpg'}]}

    ];

    $scope.mapOpened = false;
    $scope.locationOpened = false;

    $scope.count = function(){
      $scope.counter++ ;
    };

    $scope.selectLocation = function (locationId) {
      $scope.locationOpened = true;
      $scope.location = $scope.locations[locationId];
      $scope.monthlyfee = $scope.location.monthlyrate != 0;
      $scope.valetfee = $scope.location.valetrate != 0;

    };


    $scope.getDirection = function () {
      $scope.mapOpened = true;
      $scope.locationOpened = false;
    };
    $scope.closeMap = function () {
      $scope.mapOpened = false;



    };




  }]);

'use strict';

/**
 * @ngdoc function
 * @name tagbgroupApp.controller:ParkingformsCtrl
 * @description
 * # ParkingformsCtrl
 * Controller of the tagbgroupApp
 */
angular.module('tagbgroupApp')
  .controller('ParkingFormsCtrl', ['$scope', function ($scope) {
    $scope.forms = {
        intro:'Welcome to our online Parking Forms page.  Below you will find a list of locations where we offer monthly parking.' +
        '  If you are interested in monthly parking at one of these locations, please click on the hyperlink and download the form.' +
        '  You will need to fill this out and either fax the information to (202) 234-3426 , email the form to info@tagbgroup.com' +
        ' or give the form and your payment to the attendant on duty.',
        list: [
          {monthlyfee:'18 M Street NE, WDC 20002 – $120.00'},
          {monthlyfee:'1140 3rd Street NE, WDC 20002 – $100.00'},
          {monthlyfee:'636 L Street, NW, WDC 20001 – $120.00'},
          {monthlyfee:'400 K Street NW WDC 20001 – $160.00'},
          {monthlyfee:'300 K Street NW WDC 20001 – $160.00'}
        ]
    };
  }]);

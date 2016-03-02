'use strict';

/**
 * @ngdoc function
 * @name tagbgroupApp.controller:ParkingservicesCtrl
 * @description
 * # ParkingservicesCtrl
 * Controller of the tagbgroupApp
 */
angular.module('tagbgroupApp')
  .controller('ParkingServicesCtrl',['$scope', function ($scope) {
    $scope.parkingServices = {
      intro: 'Tag-B Parking Management provides full service parking management under lease and management agreements for buildings, property owners and investors. We work with the most qualified suppliers to the professional parking industry for equipment as well as design and installation. Each location is outfitted with the necessary equipment to provide services of a higher level. We have worked with a large number of our partners with the installation of overhead door and key-card or AVI entry systems, revenue control computers, ticket dispensers, gates, safety and security systems and HVAC systems. Tag-B Parking Management does not stop at just providing parking equipment and services, we also provide regular garage maintenance and security checks to ensure your customers are given the highest quality of services. We currently provide services to (but are not limited to):',
      servicesProvided: [
        {service: 'Commercial garages and lots'},
        {service: 'Secure government garages'},
        {service: 'Universities and campuses'}
      ],
      text: 'We assure you that Tag-B Parking Management managers, supervisors, cashiers,attendants, and valets will provide:',
      excellency: [
        {at:'Excellence in customer service'},
        {at:'Excellence in business management'},
        {at:'Excellence in daily operations'},
        {at:'Excellence in safety and quality control'},
        {at:'Excellence in financial management and accountability'},
        {at:'Excellence in understanding and supporting the investor’s goals'}
      ],
      conclusion: 'Tag-B’s commitment to property owners is to work with their property managers and agents to add value to the property. In addition to safe, clean, and customer based operations, Tag-B will add value to the property through accurately billing, regularly collecting, and perfectly recording and reporting revenues while minimizing expenses.'
    };
  }]);

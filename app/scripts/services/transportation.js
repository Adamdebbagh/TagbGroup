'use strict';

/**
 * @ngdoc service
 * @name tagbgroupApp.transportation
 * @description
 * # transportation
 * Factory in the tagbgroupApp.
 */
angular.module('tagbgroupApp')
  .factory('transportation', function () {

   var transportationServices = {
      intro: 'Tag-B transportation supplies transportation services such as taxi, limo, sedan, van, shuttle, bus and private car options within the DC Metropolitan area. Our most commonly used transportation services are:',
      services: [
        {service:'transfers'},
        {service:'Taxi and chauffeured sedans'},
        {service:'Shuttle bus systems'},
        {service:'Conventional and special events'}
      ],
      content: 'Our professional team will be happy to design and plan the appropriate transportation ' +
      'program to support your needs. Please feel free to fill out the inquiry form found below with ' +
      'your information as well as a description of what type of services you would like. You are ' +
      'welcome to ask for multiple quotes if you are undecided on what type of services you would like.' +
      ' You are also welcome to go to our Contact Us page and email us from there or use our other ' +
      'contact details listed to receive a quote for the professional transportation services you ' +
      'deserve and a price that is right.We also offer handicap accessible services upon request.' +
      ' Please make a note of any specific requirements in your request for a quote so that we can ' +
      'provide you the most accurate information possible.Our Subsidiary, Maine Cab Company,' +
      ' provides taxi rentals to licensed taxi drivers in the DC metropolitan area. Leases are ' +
      'drawn up after background checks have been cleared and our partner insurance company has ' +
      'approved coverage for the driver.'
    };

    return {
      getTransportationServices: function () {
        return transportationServices;
      }
    };
  });

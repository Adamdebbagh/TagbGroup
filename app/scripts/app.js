'use strict';

/**
 * @ngdoc overview
 * @name tagbgroupApp
 * @description
 * # tagbgroupApp
 *
 * Main module of the application.
 */
angular
  .module('tagbgroupApp', ['ui.router','ngMap'])
  .constant("baseURL", "http://localhost:3000/")
  .config(function($stateProvider, $urlRouterProvider) {

    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/");
    //
    // Now set up the states
    $stateProvider
      .state('/', {
        url: "/",
        templateUrl: "./views/templates/main.html",
        controller: 'MainCtrl'
      })
      .state('about-tagb', {
        url: "/aboutus/about-tagb",
        templateUrl: "./views/templates/aboutus/about-tagb.html",
        controller: 'AboutCtrl'
      })
      .state('company-news', {
        url: "/aboutus/company-news",
        templateUrl: "./views/templates/aboutus/companynews.html",
        controller: 'CompanyNewsCtrl'
      })
      .state('management-team', {
        url: "/aboutus/management-team",
        templateUrl: "./views/templates/aboutus/management-team.html",
        controller: 'ManagementTeamCtrl'
      })
      .state('career', {
        url: "/aboutus/career",
        templateUrl: "./views/templates/aboutus/career.html",
        controller: 'CareerCtrl'
      })
      .state('parking-services', {
        url: "/services/parking-services",
        templateUrl: "./views/templates/services/parking-services.html",
        controller: 'ParkingServicesCtrl'
      })
      .state('valet-services', {
        url: "/services/valet-services",
        templateUrl: "./views/templates/services/valet-services.html",
        controller: 'ValetServicesCtrl'
      })
      .state('transportation-services', {
        url: "/services/transportation-services",
        templateUrl: "./views/templates/services/transportation-services.html",
        controller: 'TransportationServicesCtrl'
      })
      .state('healthcare-services', {
        url: "/services/healthcare-services",
        templateUrl: "./views/templates/services/healthcare-services.html",
        controller: 'HealthcareServicesCtrl'
      })
      .state('locations', {
        url: "/findparking/locations",
        templateUrl: "./views/templates/findparking/locations.html",
        controller: 'LocationsCtrl'
      })
      .state('make-payment', {
        url: "/findparking/make-payment",
        templateUrl: "./views/templates/findparking/make-payment.html",
        controller: 'MakePaymentCtrl'
      })
      .state('monthly-parking', {
        url: "/findparking/monthly-parking",
        templateUrl: "./views/templates/findparking/monthly-parking.html",
        controller: 'MonthlyParkingCtrl'
      })
      .state('parking-forms', {
        url: "/services/parking-forms",
        templateUrl: "./views/templates/findparking/parking-forms.html",
        controller: 'ParkingFormsCtrl'
      })
      .state('contactus', {
        url: "/contactus",
        templateUrl: "./views/templates/contactus.html",
        controller: 'ContactusCtrl'
      })



    ;

  });



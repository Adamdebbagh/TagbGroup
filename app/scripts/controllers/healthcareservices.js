'use strict';

/**
 * @ngdoc function
 * @name tagbgroupApp.controller:HealthcareservicesCtrl
 * @description
 * # HealthcareservicesCtrl
 * Controller of the tagbgroupApp
 */
angular.module('tagbgroupApp')
  .controller('HealthcareServicesCtrl',['$scope', function ($scope) {
    $scope.healthcareServices = {
      intro: 'Tag-B Parking Hospitality has a range of patient-centered services geared to increase patient/customer satisfaction and loyalty. We deliver unique valet parking services focused on not only the vehicles, but more importantly, the patients and guests whom we extend the highest level of care and compassion to from the moment they arrival to their departure.',
      title: 'A THOUGHTFUL FOCUS ON HEALTH CARE PARKING',
      body:'Tag-B recognizes the importance of providing a renowned four-star valet approach your health care facility; helping your business achieve the perfect balance of patient satisfaction,' +
      ' and improved operational efficiency.We believe in the total patience experience,' +
      ' our warm attendants will go above and beyond to ensure every patient and visitor is greeted and served with exceptional care.',
      list : [
        {
          title:'Tag B and Healthcare Parking',
          content:'We entered the healthcare industry with a clear goal in mind; take a highly personal, patient-focused approach to valet parking and hospitality. As such, over the years we have developed a deep understanding of the industry and the keys to creating a warm, successful patient experience. We tailor our programs to address the specific needs of our hospital clients, with a broad portfolio of services, we are equipped to offer complex parking solutions to patient discharge services.'
        },
        {
          title:'Our Understanding',
          content:"We understand the importance of delivering a stress-free service environment" +
          " for the patients arriving in need of immediate care.  Our warm attendants will go " +
          "above and beyond to ensure every patient and visitor is greeted and served with " +
          "quality and care.We understand our business can only be as successful as our employees," +
          " so we hire the most caring, friendly and solution-oriented attendants with a passion for" +
          " service.  Every Tag-B valet attendant is also trained to assist elderly or handicapped" +
          " patients out of their vehicles, unloading any form of walker or wheelchair," +
          " and assisting with luggage, boxes, or special gifts."
        }
      ]
    };
  }]);

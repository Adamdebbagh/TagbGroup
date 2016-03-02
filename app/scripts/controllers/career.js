'use strict';

/**
 * @ngdoc function
 * @name tagbgroupApp.controller:CareerCtrl
 * @description
 * # CareerCtrl
 * Controller of the tagbgroupApp
 */
angular.module('tagbgroupApp')
  .controller('CareerCtrl',['$scope', function ($scope) {
    $scope.employmentGuideline = {
      title : 'Tag-B Group Employment',
      guideline: 'Welcome to Tag-B Group’s employment page. We are flattered that you are interested in working with our team. Before submitting your resume and filling out our application found below, please look over our website to decide if you are a perfect candidate for our company. It is especially important to review our Mission Statement and Core Values located in our About Us section of our website. Why should you be interested in working with Tag-B Group? Let us start by referring you to two of our Core Values- We Recognize our Staff and We Value Diversity. If you enjoy being recognized by your employers and believe you have a unique set of skills and a great story that you can offer our team and partner companies you are one step closer to employment with us. We look forward to reviewing your resume and application. Please follow the instructions outlined below.'
    };
    $scope.employmentStatement=  {
      title:'Equal Opportunity Employer Statement',
      statement:'Tag-B Group is an Equal Opportunity Employer (EOE) in compliance with federal, state and local laws. Our business does not and will not discriminate in employment and personnel practices on the basis of veteran status, race, gender, age, disability, religion, sexual orientation, amnesty, marital status, national origin or any other basis prohibited by law. Hiring, transferring, promotion, layoff, compensation, training and termination practices are performed without regard to the above listed items. Tag-B Group prohibits and will not tolerate any employee unlawfully harassing customers, clients, partners or fellow employees with regards to the above outlined discrimination guidelines. Download this form, save it to your word file, complete the form, and return it by Email attachment or Fax it Tag-B. (202) 234-3426. Print clearly in black or blue ink. Answer all questions. Sign and date the form.'
    };
  }]);

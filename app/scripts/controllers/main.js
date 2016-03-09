'use strict';

/**
 * @ngdoc function
 * @name tagbgroupApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tagbgroupApp
 */
angular.module('tagbgroupApp')
  .controller('MainCtrl', ['$scope','main', function ($scope,main) {

    //Carousel autoplay
    angular.element('.carousel').carousel();

    $scope.links = main.getSlides();
    $scope.aboutus = main.getAboutus();
    $scope.ourServices = main.getOurServices();

    //Contact
    $scope.feedback = {mychannel:'', customerName:'', email:'',tel:'', agree:false };

    $scope.channels = [{value: "tel", label: "Tel."}, {value: "Email", label: "Email"}];
    $scope.invalidChannelSelection = false;

    $scope.sendFeedback = function() {
      console.log("The Feedback object : "+ $scope.feedback);

      if ($scope.feedback.agree && ($scope.feedback.mychannel == "")&& !$scope.feedback.mychannel) {

        $scope.invalidChannelSelection = true;
        console.log('incorrect');
      }
      else {
        $scope.invalidChannelSelection = false;
        $scope.feedback = {mychannel:"", customerName:"",email:"", tel:'', agree:false  };
        $scope.feedback.mychannel="";

        $scope.feedbackForm.$setPristine();
        console.log($scope.feedback);
      }
    };

  }]);

























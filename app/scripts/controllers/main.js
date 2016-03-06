'use strict';

/**
 * @ngdoc function
 * @name tagbgroupApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tagbgroupApp
 */
angular.module('tagbgroupApp')
  .controller('MainCtrl', ['$scope','$timeout',function ($scope) {

    //Carousel autoplay
    angular.element('.carousel').carousel();

    $scope.main = {
      links: [
        {src:'./images/slide1.png'},
        {src:'./images/slide2.png'},
        {src:'./images/slide3.png'},
        {src:'./images/slide4.png'},
        {src:'./images/slide5.png'},
        {src:'./images/slide6.png'}

      ],
      aboutus : {
        title:'Tag-B Is Here To Serve You',
        intro: 'With over two decades of experience, Tag-B Group has become of one of the most recognizable franchises for professional transportation, parking management, garage management, and valet services in the Washington D.C area.',
        readmore: 'about-tagb'
      },
      ourServices: {
        title: 'Our Services',
        cards: [
          {image:'./images/parkingservices.jpg', link:'parking-services', text:'Tag-B Parking Management provides full service parking management under lease and management agreements.' },
          {image:'./images/valet_services.jpg', link:'valet-services', text:'We manage event parking professionally & efficiently to ensure your guests enjoy the entire experience.'},
          {image:'./images/transporationservices.jpg', link:'transportation-services', text:'We will be happy to design and plan the appropriate transportation program to support your needs.' }
        ]
      }

    };

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

























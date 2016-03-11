'use strict';
angular.module('tagbgroupApp')
  .controller('AboutCtrl', ['$scope','about',function ($scope, about) {

        $scope.aboutus = {};
        $scope.coreValues ={};
        $scope.missions = {};
        $scope.showaboutus = false;
        $scope.showCoreValues = false;
        $scope.showMissions = false;
        $scope.message = "./views/templates/messages/loading_message.html";

        $scope.tabs = about.getTabs();
        $scope.currentTab = about.getCurrentTab();

        $scope.onClickTab = function(tab){
          $scope.currentTab = about.onClickTab(tab);
        };

        $scope.isActiveTab = function(tabUrl) {
          return about.isActiveTab(tabUrl);
        };



        about.getAboutUs()
          .then(
            function (response) {
              $scope.aboutus = response.data;
              $scope.showaboutus = true;
          }, function (response) {
              $scope.message = "./views/templates/messages/error_message.html";
            }
          );

         about.getCoreValues()
          .then(function (response) {
              $scope.coreValues = response.data;
              $scope.showCoreValues = true;
          },  function (response) {
                $scope.message = "./views/templates/messages/error_message.html";
            }
          );

         about.getMissions()
          .then(function (response) {
              $scope.missions = response.data;
              $scope.showMissions = true;
          },  function (response) {
                $scope.message = "./views/templates/messages/error_message.html";
            }
          );













}]);

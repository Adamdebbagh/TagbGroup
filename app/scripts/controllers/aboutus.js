'use strict';
angular.module('tagbgroupApp')
  .controller('AboutCtrl', ['$scope','about',function ($scope, about) {

        $scope.tabs = about.getTabs();
        $scope.currentTab = about.getCurrentTab();

        $scope.aboutus = about.getAboutUs();

        $scope.coreValues = about.getCoreValues();

        $scope.missions = about.getMissions();

        $scope.onClickTab = function(tab){
          $scope.currentTab = about.onClickTab(tab);
        };

        $scope.isActiveTab = function(tabUrl) {
          return about.isActiveTab(tabUrl);
        };








}]);

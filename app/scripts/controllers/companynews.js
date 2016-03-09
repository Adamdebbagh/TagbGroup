'use strict';
angular.module('tagbgroupApp')
  .controller('CompanyNewsCtrl', ['$scope','news', function ($scope, news) {

    $scope.posts = news.getPosts();
  }]);

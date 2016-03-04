'use strict';

/**
 * @ngdoc directive
 * @name tagbgroupApp.directive:quote
 * @description
 * # sideBarWidget
 */
angular.module('tagbgroupApp')
  .directive('sideBarWidget', function () {
    return {
      restrict: 'E',
      templateUrl: './views/templates/directives/sidebarwidget.html',
    };
  });

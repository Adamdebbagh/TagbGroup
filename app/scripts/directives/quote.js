'use strict';

/**
 * @ngdoc directive
 * @name tagbgroupApp.directive:quote
 * @description
 * # quote
 */
angular.module('tagbgroupApp')
  .directive('quote', function () {
    return {
      restrict: 'E',
      templateUrl: './views/templates/directives/quote.html',
    };
  });

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
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the quote directive');
      }
    };
  });

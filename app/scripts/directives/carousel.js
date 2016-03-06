'use strict';

/**
 * @ngdoc directive
 * @name tagbgroupApp.directive:carousel
 * @description
 * # carousel
 */
angular.module('tagbgroupApp')
  .directive('carousel', function ($timeout) {
    return {
      restrict: 'E',
      scope: {
        links: '='
      },
      templateUrl: './views/templates/directives/carousel.html',
      link: function(scope, element) {
        $timeout(function() {
          $('.carousel-indicators li',element).first().addClass('active');
          $('.carousel-inner .item',element).first().addClass('active');
        });
      },
      controller: 'MainCtrl'
    };
  });





















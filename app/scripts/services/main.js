'use strict';

/**
 * @ngdoc service
 * @name tagbgroupApp.main
 * @description
 * # main
 * Factory in the tagbgroupApp.
 */
angular.module('tagbgroupApp')
  .factory('main', function () {
    var main = {
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

    return {
      getSlides: function () {
        return main.links;
      },
      getAboutus: function(){
        return main.aboutus;

      },
      getOurServices: function(){
        return main.ourServices;
      }
    };
  });

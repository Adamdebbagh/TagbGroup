'use strict';

/**
 * @ngdoc service
 * @name tagbgroupApp.valet
 * @description
 * # valet
 * Factory in the tagbgroupApp.
 */
angular.module('tagbgroupApp')
  .factory('valet', function () {

    var valetServices ={
      intro:'Tag-B Valet is the founding entity of the Tag-B Group family. We offer valet services to the Washington DC metropolitan area and will park your guests’ cars for a dinner party for 10 or a reception for 1,000. With decades of experience we can manage your event parking professionally and efficiently to ensure your guests enjoy the entire experience. Our valet services include, but are not limited to:',
      list : [
        {
          title: 'special events valet parking services',
          content: 'We offer valet services for intimate special events such as weddings, birthdays, anniversary and funerals. We also offer large venue special event valet and will work in collaboration with local authorities when necessary such as for international music festivals and sporting events. We also have experience working with the federal government for presidential and congressional affairs.'
        },
        {
          title: 'private and commercial valet parking services',
          content: 'Tag-B Valet has an extensive portfolio of commercial and private valet parking in the DC, MD and VA area. We hold regular contracts with a large variety of night clubs, bars and restaurants. We also hire services for specific events at your business and provide on-call services to both private and commercial properties.'
        },
        {
          title: 'healthcare and institutions valet parking services',
          content: 'Our team is highly trained in aiding mobility-impaired clients, including those who are in need of wheel chair services. This training not only helps Tag-B Group shine through as the best valet service in the DC, MD and VA area, but it also falls perfectly in line with our core values of training and providing the best quality of services on the market.'
        },
        {
          title: 'restaurant and nightlife valet parking Services',
          content: ''
        },
        {
          title: 'hotel Valet parking services',
          content: ''
        }
      ]
    } ;


    return {
     getValetServices : function () {
        return valetServices;
      }
    };
  });

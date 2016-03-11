'use strict';

/**
 * @ngdoc service
 * @name tagbgroupApp.about
 * @description
 * # about
 * Factory in the tagbgroupApp.
 */
angular.module('tagbgroupApp')
  .factory('about',['$http','baseURL', function ($http,baseURL) {

   /* /!*var aboutus = {
      title:'About Tag B Group',
      intro: 'With over two decades of experience, Tag-B Group has become of one of the most recognizable franchises for professional transportation, parking management, garage management, and valet services in Washington D.C. Founded by Taweke Alemayehu, Tag-B Group has become an incorporated business compiled of six successful companies in the Washington D.C. Metropolitan area including:',
      companies: [
        {
          title: 'Tag-B Valet ',
          content:'offering valet services at special events, commercial and private establishments, as well as hospitals and healthcare buildings.'
        },
        {
          title: 'Tag-B Parking Management',
          content:'providing garage management as well as special event, private party, commercial, hospital and healthcare parking services'
        },
        {
          title: 'Tag-B Transportation',
          content:'supplying transportation services such as taxi, limo, van, shuttle, bus and private car options within the DC Metropolitan area. Handicap accessible services are also available.'
        },
        {
          title: 'Tag-B Ventures',
          content:'bringing entertainment to the residents of the DC metropolitan area through bars, night clubs, lounges and restaurants.'
        },
        {
          title: 'Tag-B Financial ',
          content:'offering financial services on a global scale with a focus on remittances between the United States and the international community.'
        },
        {
          title: 'Tag-B Consulting',
          content:'providing business consulting services for businesses of all sizes both domestically and internationally.'
        }
      ]

    };*!/
    var coreValues = [
      {
        title:'We Offer Quality First',
        content:'We are committed to the highest level of quality services- or as we would like to call it ‘services of a higher level’. Tag-B continually conducts research on all running programs in order to be at the forefront of our field and provide the highest quality options to our clients and partners.'
      },
      {
        title:'We Beleive in People',
        content:'Tag-B group believes in the need for human dynamics and a personal touch. We honor our customers, partners and staff by providing services of the highest quality with great customer service. Utilizing the positive aspects of globalization, we work to ensure our services reach everyone equally around the world as well as at our doorstep.'
      },
      {
        title:'We Recognize Our Stuff',
        content:'The Tag-B Team believes that the best level of service can only come from employees who are trained, mentored, managed and acknowledged. Tag-B recognizes employee performance because we know that employee acknowledgement generates a positive work atmosphere, great employee attitudes and high moral to ensure our team cares for the needs of our clients and partners as they would their own friends and family.'
      },
      {
        title:'We Value Diversity',
        content:'Diversity is the way forward. As a minority run company, we truly value diversity and the cultural wealth it spreads to our staff, customers and partners. We welcome the exchange of ideas, culture, values and beliefs because we know that an open environment to exchange information and knowledge will only strengthen our team and thus our company.'
      },
      {
        title:'We are Partners',
        content:'We approach all of our partnerships with one guiding principal- to deliver the highest standard of service to the most important people in our professional life –you our customer. We understand that the impression made by our staff is a reflection of you as well as ourselves. We are committed to ensuring a positive lasting impression so that the image of our partners is upheld if not bettered by their choice to work with Tag-B Group.'
      },
      {
        title:'We Believe in accountablity',
        content:'Many of our resources are provided to us by investors who entrust us to utilize these funds appropriately. We demand of ourselves high standards of professional competence and financial accountability to ensure we meet the contractual agreements of our partners, investors and clients.'
      }
    ];
    var missions = {
      title:'Mission Statement',
      intro:'Tag-B strives to provide ‘services at a higher level’ to clients in the Washington D.C. metropolitan area. We mean to achieve this by:',
      list: [
        {mission:" Focusing on the customer's needs"},
        {mission:' Consistent Best Business Practices'},
        {mission:' Maintaining the Best work force'},
        {mission:' Providing revenue control'},
        {mission:' Innovating to improve service'}
      ]
    };*/
    var tabs = [
      {
        title: 'About Us',
        url: './views/templates/aboutus/_aboutus.html'
      },
      {
        title: 'Core Values',
        url: './views/templates/aboutus/_corevalues.html'
      },
      {
        title: 'Our Mission',
        url: './views/templates/aboutus/_mission.html'
      }];

    var currentTab = './views/templates/aboutus/_aboutus.html';

    return {

      // Tabs Manipulation

      getTabs: function(){
        return tabs;
      },
      getCurrentTab: function () {

        return currentTab;
      },
      onClickTab: function (tab) {
        return tab.url;
      },
      isActiveTab: function(tabUrl) {
        return tabUrl == currentTab;
      },


      // Retrieve Data from the Server

      getAboutUs: function () {
        return $http.get(baseURL+"aboutus");
      },
      getCoreValues: function(){
        return $http.get(baseURL+"coreValues");
      },
      getMissions: function(){
        return $http.get(baseURL+"missions");
      }


    };
  }]);

'use strict';

/**
 * @ngdoc service
 * @name tagbgroupApp.news
 * @description
 * # news
 * Factory in the tagbgroupApp.
 */
angular.module('tagbgroupApp')
  .factory('news', function () {
    var posts = [
      {title:'Chic and sexy STK Steakhouse',
        author:'Bennie',
        date: new Date(),
        image:'./images/STK1.jpg',
        excerpt:'Tag B is honored to be the new valet service provider for the chic and sexy STK Steakhouse in DuPont Circle! 1250 Connecticut Avenue Washington, DC. Reserve your table or special request valet service today! Cheers!',
        content:'Tag B is honored to be the new valet service provider for the chic and sexy STK Steakhouse in DuPont Circle! 1250 Connecticut Avenue Washington, DC. Reserve your table or special request valet service today! Cheers! Tag B is honored to be the new valet service provider for the chic and sexy STK Steakhouse in DuPont Circle! 1250 Connecticut Avenue Washington, DC. Reserve your table or special request valet service today! Cheers! Tag B is honored to be the new valet service provider for the chic and sexy STK Steakhouse in DuPont Circle! 1250 Connecticut Avenue Washington, DC. Reserve your table or special request valet service today! Cheers!'
      },
      {title:'The Beatles U.S. Invasion',
        author:'Moss',
        date:new Date(),
        image:'./images/beatles.png',
        excerpt:'The Beatles U.S. Invasion: 50th Anniversary Concert” taking place at Tag-B’s very own Uline Arena , Feb. 11th 2014!',
        content:'The Beatles U.S. Invasion: 50th Anniversary Concert” taking place at Tag-B’s very own Uline Arena , Feb. 11th 2014! The Beatles U.S. Invasion: 50th Anniversary Concert” taking place at Tag-B’s very own Uline Arena , Feb. 11th 2014! The Beatles U.S. Invasion: 50th Anniversary Concert” taking place at Tag-B’s very own Uline Arena , Feb. 11th 2014!'
      },
      {title:'Community Health Day',
        author:'Moss',
        date:new Date(),
        image:'./images/parkingservices.jpg',
        excerpt:"Our parking facility at 1140 3rd Street, NE was recently featured in the news."+
        "The facility, which is also known as the historic Uline Arena, was the venue for the first " +
        "Beatles concert in the United States. Tag-B Parking Management currently offers daily parking" +
        " at this location for $5 and monthly parking permits for $85. " ,
        content:"Our parking facility at 1140 3rd Street, NE was recently featured in the news." +
        "The facility, which is also known as the historic Uline Arena, was the venue for the first " +
        "Beatles concert in the United States. Tag-B Parking Management currently offers daily parking" +
        " at this location for $5 and monthly parking permits for $85. The facility is also available for short term " +
        "events and productions, most recently playing backdrop to Swampoodle, a production by the Solas Nua theater group. If" +
        " you are interested in purchasing a permit at one of these locations, please see the attendant on staff, email info@tagbgroup.com " +
        "or visit the Parking Forms page on our website to apply." +
        "If you would like more information on arranging for a special event at the Uline Arena, " +
        "contact us at info@tagbgroup.com. To see what the media had to say about our facility," +
        " click on the following links: TBD & DCNoMa.comOn June 18, Tag-B Valet Parking was proud " +
        "to provide valet services for the Community Health Day at the United Medical Center, " +
        "formerly known as the Greater Southeast Community Hospital."
      }

    ];

    return {
      getPosts: function () {
        return posts;
      }
    };
  });

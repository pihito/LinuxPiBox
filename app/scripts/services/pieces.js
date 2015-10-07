'use strict';

/**
 * @ngdoc service
 * @name linuxBoxApp.pieces
 * @description
 * # pieces
 * Factory in the linuxBoxApp.
 */
angular.module('linuxBoxApp')
  .factory('pieces', function () {
    // Service logic
    // ...

    var data = [{name:"Chambre Hugo ",temp:23,hum:20},
                {name:"Chambre Florentin ",temp:30,hum:12},
               {name:"Chambre Theotime",temp:23,hum:20},
                {name:"Salle de bain",temp:30,hum:12},
               {name:"Salon",temp:23,hum:20},
                {name:"Extension",temp:30,hum:12}];

    // Public API here
    return {
      getData: function () {
        return data;
      }
    };
  });

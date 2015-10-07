'use strict';

/**
 * @ngdoc function
 * @name linuxBoxApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the linuxBoxApp
 */
angular.module('linuxBoxApp')
  .controller('MainCtrl', function ($scope,pieces) {
      this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
        
    $scope.pieces = pieces.getData(); 
  });

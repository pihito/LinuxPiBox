'use strict';

/**
 * @ngdoc overview
 * @name linuxBoxApp
 * @description
 * # linuxBoxApp
 *
 * Main module of the application.
 */
angular
  .module('linuxBoxApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/mqttlog', {
        templateUrl: 'views/mqttlog.html',
        controller: 'MqttlogCtrl',
        controllerAs: 'mqttlog'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

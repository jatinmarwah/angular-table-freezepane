'use strict';

/**
 * @ngdoc overview
 * @name tablefreezepaneApp
 * @description
 * # tablefreezepaneApp
 *
 * Main module of the application.
 */
angular
  .module('tablefreezepaneApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngTouch', 'freezepaneModule'
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
      .when('/usage', {
        templateUrl: 'views/usage.html',
        controller: 'UsageCtrl',
        controllerAs: 'usage'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

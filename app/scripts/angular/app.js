'use strict';

angular.module('ngTractor', [])
  .config(function ($locationProvider, $routeProvider) {
    //$locationProvider.html5Mode(true);
    $routeProvider.
      when('/', {
        templateUrl: 'views/landing.html'
      }).
      when('/:name', {
        templateUrl: function($routeParams) {
               return 'views/' + $routeParams.name + '.html';
             },
      }).
      when('/:section/:name', {
        templateUrl: function($routeParams) {
               return 'views/' + $routeParams.section + '/' + $routeParams.name + '.html';
             },
      }).
      otherwise({
        redirectTo: '/'
      });
  });




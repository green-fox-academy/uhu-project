'use strict';

var UHU = angular.module('UHU', ['ui.router']);
var localURL = 'http://localhost:3000/';

UHU.controller('MainController', function($scope) {
});

UHU.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('all', {
      url: '/all' ,
      templateUrl: 'all.html'
    })
    .state('past', {
      url: '/past' ,
      templateUrl: 'past.html'
    })
    .state('ongoing', {
      url: '/ongoing' ,
      templateUrl: 'ongoing.html'
    })
});

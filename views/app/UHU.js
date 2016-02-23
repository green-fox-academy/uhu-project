'use strict';

var UHU = require('./app');
require('./controllers/listController');

UHU.controller('MainController', function($scope, $http) {
    $http.post('/api/log', {url: window.location.origin}).then();
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
  });
});

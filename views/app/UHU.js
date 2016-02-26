'use strict';

var UHU = require('./app');
require('./controllers/listController');
require('./controllers/newCallService');


UHU.controller('MainController', function($scope, $http, $location, newCallService) {
  $scope.$on(
    '$locationChangeSuccess',
    function handleLocationChangeEvent() {
      console.log( 'Page view:', location.href );
      $http.post('/api/log', { url: location.href }).then();
    }
  );
  $scope.$on(
    '$stateChangeSuccess',
    function handleRouteChangeEvent() {
      console.log( 'Route Changed:', $location.path());
      $http.post('/api/log', { route: $location.path() }).then();
    }
  );
   $scope.addNewCall = function (call) {
    newCallService.newCall(call);
  }  
});

UHU.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
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
  $locationProvider.html5Mode(true);
});

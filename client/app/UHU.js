'use strict';

var UHU = require('./app');
require('./controllers/listController');
require('./controllers/newCallService');
require('./controllers/addNewCallController');
require('./controllers/chartController');
require('./directives/statusChangerDirective');
require('./directives/listCallsDirective');

UHU.controller('MainController', function ($scope, $http, $location, newCallService) {

  $scope.successCbLoc = function () {
    console.log('Page view:', location.href);
  };

  $scope.successCbRoute = function () {
    console.log('Route Changed:', $location.path());
  };

  $scope.errorCbLoc = function () {
    console.log('Error at:', location.href);
  };

  $scope.errorCbRoute = function () {
    console.log('Route change ERROR at:', $location.path());
  };

  $scope.$on(
    '$locationChangeSuccess',
    function handleLocationChangeEvent() {
      var locUrl = { url: location.href };
      $http.post('/api/log', locUrl).then($scope.successCbLoc,
                                          $scope.errorCbLoc);
    }
  );
  $scope.$on(
    '$stateChangeSuccess',
    function handleRouteChangeEvent() {
      var routeUrl = { route: $location.path() };
      $http.post('/api/log', routeUrl).then($scope.successCbRoute,
                                            $scope.errorCbRoute);
    }
  );

  $scope.addNewCall = function (call) {
    newCallService.newCall(call);
  };
});

UHU.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('template/index.html');

  $stateProvider
  .state('all', {
    url: '/',
    templateUrl: 'template/all.html'
  })
  .state('past', {
    url: '/past',
    templateUrl: 'template/past.html'
  })
  .state('incoming', {
    url: '/incoming',
    templateUrl: 'template/incoming.html'
  })
  .state('ongoing', {
    url: '/ongoing',
    templateUrl: 'template/ongoing.html'
  })
  .state('stats', {
    url: '/stats',
    templateUrl: 'template/stats.html'
  });
  $locationProvider.html5Mode(true);
});

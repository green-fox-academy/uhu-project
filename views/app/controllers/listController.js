'use strict';

var moment = require('moment');
var UHU = require('../app');
var numeral = require('numeral');
var start = moment();
var end = moment().add(1, 'H');

UHU.controller('ListCtrl', function($scope, $interval) {
  $scope.calls = calls;
  $scope.statusChanger = function(call) {
    var statusImageSrc = '/images/' + call.status + '.svg';
    return statusImageSrc;
  };
  $scope.timeFormatter = function(callTime) {
    if (callTime != '') {
      return callTime = callTime.format('DD/MM/YYYY HH:MM');
    }
  };
  var elapsedTimer = $interval(function() {
    $scope.calls.forEach(function(call) {
      if (call.status === 'ended') {
        var elapsedTime = (end - start)/1000;
        call.elapsedTime = numeral(elapsedTime).format('00:00:00');
      } else if (call.status === 'incoming') {
        call.elapsedTime = 'incoming';
      } else {
        var timeNow = new Date()
        var diff = (timeNow - start)/1000
        call.elapsedTime = numeral(diff).format('00:00:00');
      }
    });
  }, 100);

  $scope.$on("$destroy", function() {
    if (elapsedTimer) {
        $interval.cancel(elapsedTimer);
    }
  });

  $scope.sortAllUsers = function () {
    var allUsers = new Set();
    $scope.calls.forEach(function(call) {
      allUsers.add(call.userId);
    });
    console.log(allUsers);
    return Array.from(allUsers);
  }
});


var calls = [
    {status: 'ongoing',
     startTime: start,
     elapsedTime: 0,
     endTime: '',
     source: '555-777-4',
     destination: '888-999-0',
     userId: 'mcdonalds',
     gateway: 'PannonGSM',
     id: 1},

    {status: 'ended',
     startTime: start,
     elapsedTime: 0,
     endTime: end,
     source: '555-777-5',
     destination: '888-999-0',
     userId: 'burger king',
     gateway: 'Westel',
     id: 2},

    {status: 'ended',
     startTime: start,
     elapsedTime: 0,
     endTime: end,
     source: '555-777-1',
     destination: '888-999-0',
     userId: 'kfc',
     gateway: 'TescoMobile',
     id: 3},

    {status: 'incoming',
     startTime: '',
     elapsedTime: 0,
     endTime: '',
     source: '555-717-2',
     destination: '888-999-0',
     userId: 'kfc',
     gateway: 'UPCMobile',
     id: 4}
];

UHU.value('calls', calls);

'use strict';

var moment = require('moment');
var UHU = require('../app');
var numeral = require('numeral');
var count = 0;
var start = moment().add(1, 'H');
var end = moment().add(2, 'H');

UHU.controller('ListCtrl', function($scope, $interval) {
  $scope.calls = calls;
  $scope.statusChanger = function(call) {
    var statusImageSrc = '/images/' + call.status + '.svg';
    return statusImageSrc;
  };
  $scope.myFilter = function(call, callStatus) {
    return call.status.match(/callStatus/) ? true : false;
  };
  $scope.timeFormatter = function(callTime) {
    if (callTime != '') {
      return callTime = callTime.format('DD/MM/YYYY HH:MM');
    }
  };
  var ellapsedTimer = $interval(function() {
    $scope.calls.forEach(function(call) {
      if (call.status === 'ended') {
        var elapsedTime = (end - start)/1000;
        var formattedElapsedTime = numeral(elapsedTime).format('00:00:00');
        call.elapsedTime = formattedElapsedTime;
      } else if (call.status === 'incoming') {
        call.elapsedTime = 'incoming';
      } else {
        count += 1;
        call.elapsedTime = numeral(count).format('00:00:00');
      }
    });
  }, 1000);

  $scope.$on("$destroy", function() {
    if (ellapsedTimer) {
        $interval.cancel(ellapsedTimer);
    }
  });
});


var calls = [
    {status: 'ongoing',
     startTime: start,
     elapsedTime: start,
     endTime: '',
     id: 1},

    {status: 'ended',
     startTime: start,
     elapsedTime: start,
     endTime: end,
     id: 2},

    {status: 'ended',
     startTime: start,
     elapsedTime: start,
     endTime: end,
     id: 3},

    {status: 'incoming',
     startTime: '',
     elapsedTime: 0,
     endTime: '',
     id: 4}
];

UHU.value('calls', calls);

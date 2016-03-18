'use strict';

var moment = require('moment');
var UHU = require('../app');
var numeral = require('numeral');

UHU.controller('ListCtrl', function ($scope, $interval, $location) {
  $scope.calls = calls;
  var elapsedTimer = $interval(updateTimes, 100);

  function updateTimes() {
    $scope.calls.forEach(updateCallTime);
  }

  function updateCallTime(call) {
    if (call.status === 'past') {
      pastCallTimer(call);
    } else if (call.status === 'incoming') {
      incomingCallTimer(call);
    } else if (call.status === 'ongoing') {
      ongoingCallTimer(call);
    }
  };

  function timer(start, end) {
    var momentStart = moment(start);
    var momentEnd = moment(end);
    var elapsedTime = (momentEnd - momentStart) / 1000;
    return numeral(elapsedTime).format('00:00:00');
  };

  function pastCallTimer(call) {
    call.ringingTime = timer(call.callbegin, call.callanswer);
    call.elapsedTime = timer(call.callanswer, call.endTime);
  }

  function incomingCallTimer(call) {
    var timeNow = new Date();
    call.ringingTime = timer(call.callbegin, timeNow);
  }

  function ongoingCallTimer(call) {
    var timeNow = new Date();
    call.ringingTime = timer(call.callbegin, call.callanswer);
    call.elapsedTime = timer(call.callanswer, timeNow);
  }

  $scope.$on('$destroy', function () {
    if (elapsedTimer) {
      $interval.cancel(elapsedTimer);
    }
  });

  $scope.callFilter =  {
    userId: '',
    status: $location.path().substring(1),
  };
});

var calls = [
    { status: 'ongoing',
     callbegin: '03/11/2016 09:40',
     callanswer: '03/11/2016 09:41',
     elapsedTime: 0,
     endTime: '',
     source: '555-777-4',
     destination: '888-999-0',
     userId: 'mcdonalds',
     gateway: 'PannonGSM',
     id: 1},

    { status: 'past',
     callbegin: '03/17/2016 13:40',
     callanswer: '03/17/2016 13:40',
     elapsedTime: 0,
     endTime: '03/17/2016 16:23',
     source: '555-777-5',
     destination: '888-999-0',
     userId: 'burger king',
     gateway: 'Westel',
     id: 2},

    { status: 'past',
     callbegin: '03/17/2016 13:19',
     callanswer: '03/17/2016 13:20',
     elapsedTime: 0,
     endTime: '03/17/2016 15:42',
     source: '555-777-1',
     destination: '888-999-0',
     userId: 'kfc',
     gateway: 'TescoMobile',
     id: 3},

    { status: 'incoming',
     callbegin: '03/10/2016 11:02',
     callanswer: '',
     elapsedTime: 0,
     endTime: '',
     source: '555-717-2',
     destination: '888-999-0',
     userId: 'kfc',
     gateway: 'UPCMobile',
     id: 4},

     { status: 'past',
      callbegin: '03/17/2016 13:04',
      callanswer: '03/17/2016 13:05',
      elapsedTime: 0,
      endTime: '03/17/2016 13:11',
      source: '555-717-2',
      destination: '888-999-0',
      userId: 'kfc',
      gateway: 'UPCMobile',
      id: 5},

      { status: 'past',
       callbegin: '03/17/2016 13:09',
       callanswer: '03/17/2016 13:10',
       elapsedTime: 0,
       endTime: '03/17/2016 13:20',
       source: '555-717-2',
       destination: '888-999-0',
       userId: 'kfc',
       gateway: 'UPCMobile',
       id: 6},
];

UHU.value('calls', calls);

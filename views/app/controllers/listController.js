'use strict';

var moment = require('moment');
var UHU = require('../app');
var numeral = require('numeral');

UHU.controller('ListCtrl', function($scope, $interval, $location) {
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
    } else if (call.status === 'ongoing'){
        ongoingCallTimer(call);
    }
  };

  function timer(start, end) {
    var momentStart = moment(start);
    var momentEnd = moment(end);
    var elapsedTime = (momentEnd - momentStart)/1000;
    return numeral(elapsedTime).format('00:00:00');
  };

  function pastCallTimer(call){
    call.ringingTime = timer(call.callbegin, call.callanswer);
    call.elapsedTime = timer(call.callanswer, call.endTime);
  }

  function incomingCallTimer(call) {
    var timeNow = new Date();
    call.ringingTime = timer(call.callbegin, timeNow);
  }

  function ongoingCallTimer(call){
    var timeNow = new Date();
    call.ringingTime = timer(call.callbegin, call.callanswer);
    call.elapsedTime = timer(call.callanswer, timeNow);
  }

  $scope.$on("$destroy", function() {
    if (elapsedTimer) {
        $interval.cancel(elapsedTimer);
    }
  });

  $scope.callFilter =  {
    userId: '',
    status: $location.path().substring(1)
  };

  });

var calls = [
    {status: 'ongoing',
     callbegin: '03/10/2016 14:20:19',
     callanswer: '03/10/2016 13:22:12',
     elapsedTime: 0,
     endTime: '03/10/2016 14:26:12',
     source: '555-777-4',
     destination: '888-999-0',
     userId: 'mcdonalds',
     gateway: 'PannonGSM',
     id: 1},

    {status: 'past',
     callbegin: '03/10/2016 13:40:22',
     callanswer: '03/10/2016 14:40',
     elapsedTime: 0,
     endTime: '03/10/2016 13:44',
     source: '555-777-5',
     destination: '888-999-0',
     userId: 'burger king',
     gateway: 'Westel',
     id: 2},

    {status: 'past',
     callbegin: '01/03/2016 12:19:42',
     callanswer: '01/03/2016 12:20',
     elapsedTime: 0,
     endTime: '01/03/2016 12:42',
     source: '555-777-1',
     destination: '888-999-0',
     userId: 'kfc',
     gateway: 'TescoMobile',
     id: 3},

    {status: 'ongoing',
     callbegin: '03/10/2016 11:02:14',
     callanswer: '',
     elapsedTime: 0,
     endTime: '03/10/2016 11:03:14',
     source: '555-717-2',
     destination: '888-999-0',
     userId: 'kfc',
     gateway: 'UPCMobile',
     id: 4},

     {status: 'ongoing',
      callbegin: '03/10/2016 11:04:14',
      callanswer: '',
      elapsedTime: 0,
      endTime: '03/10/2016 11:05:14',
      source: '555-717-2',
      destination: '888-999-0',
      userId: 'kfc',
      gateway: 'UPCMobile',
      id: 5},

      {status: 'ongoing',
       callbegin: '03/10/2016 13:09:14',
       callanswer: '',
       elapsedTime: 0,
       endTime: '03/10/2016 13:10:14',
       source: '555-717-2',
       destination: '888-999-0',
       userId: 'kfc',
       gateway: 'UPCMobile',
       id: 6},
];

UHU.value('calls', calls);

'use strict';

var moment = require('moment');
var UHU = require('../app');
var numeral = require('numeral');

UHU.controller('ListCtrl', function($scope, $interval, $location) {
  $scope.calls = calls;
  var whichTimer = $interval(updateTimes, 100);

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
    call.elapsedTime = timer(call.callanswer, call.callend);
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
    status: window.location.pathname.substring(1)
  };
});

var calls = [
    {status: 'ongoing',
     callbegin: '03/07/2016 10:20:19',
     callanswer: '03/07/2016 10:24',
     elapsedTime: 0,
     endTime: '',
     source: '555-777-4',
     destination: '888-999-0',
     userId: 'mcdonalds',
     gateway: 'PannonGSM',
     id: 1},

    {status: 'past',
     callbegin: '02/12/2016 13:38:22',
     callanswer: '02/12/2016 13:43',
     elapsedTime: 0,
     endTime: '02/12/2016 15:53',
     source: '555-777-5',
     destination: '888-999-0',
     userId: 'burger king',
     gateway: 'Westel',
     id: 2},

    {status: 'past',
     callbegin: '01/03/2016 11:19:42',
     callanswer: '01/03/2016 11:20',
     elapsedTime: 0,
     endTime: '01/03/2016 12:42',
     source: '555-777-1',
     destination: '888-999-0',
     userId: 'kfc',
     gateway: 'TescoMobile',
     id: 3},

    {status: 'incoming',
     callbegin: '03/07/2016 14:02:14',
     callanswer: '',
     elapsedTime: 0,
     endTime: '',
     source: '555-717-2',
     destination: '888-999-0',
     userId: 'kfc',
     gateway: 'UPCMobile',
     id: 4}
];

UHU.value('calls', calls);

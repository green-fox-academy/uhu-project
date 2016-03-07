'use strict';

var moment = require('moment');
var UHU = require('../app');
var numeral = require('numeral');

UHU.controller('ListCtrl', function($scope, $interval, $location) {
  $scope.calls = calls;
  var elapsedTimer = $interval(function() {
    $scope.calls.forEach(function(call) {
      if (call.status === 'past') {
        var start = moment(call.callanswer);
        var end = moment(call.endTime);
        var elapsedTime = (end - start)/1000;
        call.elapsedTime = numeral(elapsedTime).format('00:00:00');
      } else if (call.status === 'incoming') {
        call.elapsedTime = 'incoming';
      } else {
        var timeNow = new Date()
        var start = moment(call.callanswer);
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

  $scope.callFilter =  {
    userId: '',
    status: window.location.pathname.substring(1)
  }
});

var calls = [
<<<<<<< HEAD
    {status: 'ongoing',
     callanswer: '03/03/2016 10:24',
=======
    {status: 'ongoing' ,
     startTime: '03/03/2016 10:24',
>>>>>>> c26236c77d7d720e989304370169a565c391f8f0
     elapsedTime: 0,
     endTime: '',
     source: '555-777-4',
     destination: '888-999-0',
     userId: 'mcdonalds',
     gateway: 'PannonGSM',
     id: 1},

<<<<<<< HEAD
    {status: 'ended',
     callanswer: '12/02/2016 13:43',
=======
    {status: 'past',
     startTime: '12/02/2016 13:43',
>>>>>>> c26236c77d7d720e989304370169a565c391f8f0
     elapsedTime: 0,
     endTime: '12/02/2016 15:53',
     source: '555-777-5',
     destination: '888-999-0',
     userId: 'burger king',
     gateway: 'Westel',
     id: 2},

<<<<<<< HEAD
    {status: 'ended',
     callanswer: '01/03/2016 11:20',
=======
    {status: 'past',
     startTime: '01/03/2016 11:20',
>>>>>>> c26236c77d7d720e989304370169a565c391f8f0
     elapsedTime: 0,
     endTime: '01/03/2016 12:42',
     source: '555-777-1',
     destination: '888-999-0',
     userId: 'kfc',
     gateway: 'TescoMobile',
     id: 3},

    {status: 'incoming',
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

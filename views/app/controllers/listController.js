'use strict';

var moment = require('moment');
var UHU = require('../app');
var numeral = require('numeral');

UHU.controller('ListCtrl', function($scope, $interval, $location) {
  $scope.calls = calls;
  var whichTimer = $interval(function() {


    $scope.calls.forEach(function(call) {
    var callbegin = moment(call.callbegin);
    var callanswer = moment(call.callanswer);
    var callend = moment(call.endTime);
    var timeNow = new Date();
      if (call.status === 'past') {
        timer('ringing', callbegin, callanswer);
        timer('elapsed', callanswer, callend);
      } else if (call.status === 'incoming') {
        timer('ringing', callbegin, timeNow);
      } else if (call.status === 'ongoing'){
        timer('ringing', callbegin, callanswer);
        timer('elapsed', callanswer, timeNow);
      }
      function timer(type, start, end) {
        var elapsedTime = (end - start)/1000;
        if (type === 'elapsed') {
            call.elapsedTime = numeral(elapsedTime).format('00:00:00');
        }
        else if(type === 'ringing') {
            call.ringingTime = numeral(elapsedTime).format('00:00:00');
        }
      };
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
     endTime: '12/02/2016 15:53',
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

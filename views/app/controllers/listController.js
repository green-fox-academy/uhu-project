'use strict';
var moment = require('moment');
var UHU = require('../app');
var numeral = require('numeral');
var count = 0;

UHU.controller('ListCtrl', function($scope, $interval) {
  $scope.calls = calls;
  $scope.statusChanger = function(call) {
    var statusImageSrc = '/images/' + call.status + '.svg';
    return statusImageSrc;
  };
  $scope.myFilter = function(call, callStatus) {
    return call.status.match(/callStatus/) ? true : false;
  };
  $interval(function() {
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
});

var start = moment().add(1, 'H');
var end = moment().add(2, 'H');

var calls = [
    {status: 'ongoing',
     startTime: start, //.format('DD/MM/YYYY HH:MM'),
     elapsedTime: start,
     endTime: '',
     id: 1},

    {status: 'ended',
     startTime: start, //.format('DD/MM/YYYY HH:MM'),
     elapsedTime: start,
     endTime: end, //.format('DD/MM/YYYY HH:MM'),
     id: 2},

    {status: 'ended',
     startTime: start, //.format('DD/MM/YYYY HH:MM'),
     elapsedTime: start,
     endTime: end,// .format('DD/MM/YYYY HH:MM'),
     id: 3},
  
    {status: 'incoming',
     startTime: start,
     elapsedTime: 0,    
     id: 4}
];
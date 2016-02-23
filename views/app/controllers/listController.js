'use strict';
var moment = require('moment');
var UHU = require('../app');

UHU.controller('ListCtrl', function($scope) {
  $scope.calls = calls;
  $scope.statusChanger = function(call) {
    var statusImageSrc = '/images/' + call.status + '.svg';
    return statusImageSrc;
  }
});

var start = moment().format('DD/MM/YYYY HH:MM');
var end = moment().format('DD/MM/YYYY HH:MM');

var calls = [
    {status: 'ongoing',
     startTime: start,
     elapsedTime:'03:04:11',
     endTime: '',
     id: 1},

    {status: 'ended',
     startTime: start,
     elapsedTime:'10:05:20',
     endTime: end,
     id: 2},

    {status: 'ended',
     startTime: start,
     elapsedTime:'1:03:1',
     endTime: end,
     id: 3},

    {status: 'incoming',
     id: 4}
];

'use strict';

var UHU = angular.module('UHU').controller('ListCtrl', function($scope) {
  $scope.calls = call;
});

var now = moment('12-25-1995', 'MM-DD-YYYY');

var call = [
    {status: 'ongoing', startTime: now, elapsedTime:'03:04:11', endTime: now, id: 1},
    {status: 'ended', startTime: '02/11/2016 14:34', elapsedTime:'10:05:20', endTime: '02/11/2016 15:34', id: 2},
    {status: 'ongoing', startTime: '02/12/2016 16:34', elapsedTime:'1:03:1', endTime: '02/12/2016 17:34', id: 3}
];

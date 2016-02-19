'use strict';

var UHU = angular.module('UHU').controller('ListCtrl', function($scope) {
  $scope.calls = call;
});

var call = [
    {status: 'ongoing', startTime: '02/10/2016 13:34', elapsedTime:'03:04:11', endTime: '02/10/2016 13:40', id: 1},
    {status: 'ended', startTime: '02/11/2016 14:34', elapsedTime:'10:05:20', endTime: '02/11/2016 15:34', id: 2},
    {status: 'ongoing', startTime: '02/12/2016 16:34', elapsedTime:'1:03:1', endTime: '02/12/2016 17:34', id: 3}
];

moment.locale();

'use strict';

var UHU = angular.module('UHU').controller('ListCtrl', function($scope) {
  $scope.calls = calls;
  $scope.statusChanger = function(call) {
    var statusImageSrc = '/images/' + call.status + '.svg';
    return statusImageSrc; 
}
});

var now = moment().format('DD/MM/YYYY HH:MM');

var calls = [
    {status: 'ongoing', startTime: now, elapsedTime:'03:04:11', endTime: now, id: 1},
    {status: 'ended', startTime: now, elapsedTime:'10:05:20', endTime: now, id: 2},
    {status: 'ended'  , startTime: now, elapsedTime:'1:03:1', endTime: now, id: 3}
];



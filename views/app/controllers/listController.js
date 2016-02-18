'use strict';

var calls = [
    {status: 'ongoing', startTime: 2, endTime: 3, id: 1},
    {status: 'ended', startTime: 4, endTime: 6, id: 2},
    {status: 'ongoing', startTime: 1, endTime: 3, id: 3}
];

UHU.controller('ListCtrl', function($scope) {
  $scope.call = calls;
});

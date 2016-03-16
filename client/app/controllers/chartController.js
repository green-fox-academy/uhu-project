'use strict';

var UHU = require('../app');
var angularChart = require('angular-chart.js');
var moment = require('moment');

UHU.config(function (ChartJsProvider) {
  ChartJsProvider.setOptions({
    colours: ['#FF5252', '#FF8A80'],
    responsive: false
});
  ChartJsProvider.setOptions('Line', {
    datasetFill: false
  });
});

UHU.controller('chartCtrl', function ($scope, newCallService) {
  $scope.calls = newCallService.getCalls();
  $scope.labels = ['Seven hours before', 'Six hours before', 'Five hours before', 'Four hours before', 'Three hours before', 'Two hours before', 'One hours before'];
  $scope.series = ['Incoming Calls', 'Ended calls'];
  arrayTransformator();

  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };

  function arrayTransformator() {
    $scope.data = newCallService.getCalls().reduce(function(prev, call) {
      var callBeginCounter = 0;
      var callEndTimeCounter = 0;
      var hourCounter = [1, 2, 3, 4, 5, 6, 7];
      hourCounter.forEach(function (hour) {
        var timeStatement = moment().subtract(hour, 'hours').isSame(call.callbegin, 'hours')
        if (timeStatement) {
          callBeginCounter++;
        } if (timeStatement) {

          callEndTimeCounter++;
        }
      });

      prev[0].push(callBeginCounter);
      prev[1].push(callEndTimeCounter);
      return prev;
    }, [[], []]);
  }
});

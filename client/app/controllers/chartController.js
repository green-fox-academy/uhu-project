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
  $scope.labels = ['Seven hours before', 'Six hours before', 'Five hours before',
  'Four hours before', 'Three hours before', 'Two hours before', 'One hours before'];
  $scope.series = ['Incoming Calls', 'Ended calls'];
  arrayTransformator();

  $scope.onClick = function (points, evt) {
    points, evt;
  };

  function arrayTransformator() {
    $scope.data = newCallService.getCalls().reduce(function (prev, call) {
      var hourCounter = [7, 6, 5, 4, 3, 2, 1];
      hourCounter.forEach(function (hour, index) {
        var beginTimeStatement = moment().subtract(hour, 'hours').isSame(call.callbegin, 'hours');
        var endTimeStatement = moment().subtract(hour, 'hours').isSame(call.endTime, 'hours');
        if (beginTimeStatement) {
          prev[0][index]++;
        }

        if (endTimeStatement) {
          prev[1][index]++;
        }
      });

      return prev;
    }, [Array(7).fill(0), Array(7).fill(0)]);
  }
});

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
  $scope.labels = ['Six hours before', 'Five hours before',
  'Four hours before', 'Three hours before', 'Two hours before', 'One hours before', 'Fresh calls'];
  $scope.series = ['Incoming Calls', 'Ended calls'];
  $scope.chartdata = arrayTransformator();
  //location.reload();

  $scope.onClick = function (points, evt) {
    points, evt;
  };

  $scope.type = 'LineChart';
  $scope.toggle = function () {
   $scope.type = $scope.type === 'LineChart' ?
     'Line' : 'LineChart';
 };

  function arrayTransformator() {
    var filledArrays = [Array(7).fill(0), Array(7).fill(0)];
    var allCalls =  newCallService.getCalls();
    var chartData = allCalls.reduce(function (prev, call) {
      var hourCounter = [6, 5, 4, 3, 2, 1, 0];
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
    }, filledArrays);

    return chartData;
  }
});

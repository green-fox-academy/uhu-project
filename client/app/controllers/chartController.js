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
  'Four hours before', 'Three hours before', 'Two hours before', 'Fresh calls'];
  $scope.chartdata = arrayTransformator(), angularChart.lineChart;
  $scope.checkboxModel = {
    incoming: true,
    ended: true
  };

  $scope.onClick = function (points, evt) {
    points, evt;
  };

  $scope.$on('create', function (event, chart) {
   console.log(chart);
   angularChart.lineChart = chart;
 });

  $scope.clear = function () {
   console.log('clear chart');
   angularChart.lineChart.destroy();
 };

  function arrayTransformator() {
    var filledArrays = [Array(7).fill(0), Array(7).fill(0)];
    var allCalls = newCallService.getCalls();
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

  $scope.mitmutassak = undefined;

  $scope.incoming = function (boolean) {
    $scope.checkboxModel.incoming = boolean;
    console.log($scope.checkboxModel.incoming);
  };

  $scope.ended = function (boolean) {
    $scope.checkboxModel.ended = boolean;
  };

  $scope.getData = function () {
    console.log($scope.checkboxModel);

    // console.log($scope.mitmutassak, 'ezt kapta');
    if ($scope.checkboxModel.incoming === true && $scope.checkboxModel.ended === false) {
      console.log($scope.chartdata[0]);
      return $scope.chartdata[0];
    } else if ($scope.checkboxModel.incoming === false && $scope.checkboxModel.ended === true) {
      console.log($scope.chartdata[1]);
      return $scope.chartdata[1];
    } else if ($scope.checkboxModel.incoming === false && $scope.checkboxModel.ended === false) {
      console.log('return egyiksem');
      return $scope.chartdata;
    } else {
      console.log('return mindketto');
      return $scope.chartdata;
    }
  };

  //$scope.getData = function () {
  //console.log($scope.mitmutassak, 'ezt kapta');
  //if ($scope.mitmutassak === 'incoming') {
  //console.log($scope.chartdata[0]);
  //     return $scope.chartdata[0];
  //   } else if ($scope.mitmutassak === 'ended') {
  //     console.log($scope.chartdata[1]);
  //     return $scope.chartdata[1];
  //   } else if ($scope.mitmutassak === 'egyiksem') {
  //     console.log('return egyiksem');
  //     return $scope.chartdata;
  //   } else {
  //     console.log('return mindketto');
  //     return $scope.chartdata;
  //   }
  // };

  // $scope.faszom = function (checkboxModel) {
  //   console.log(checkboxModel);
  //   if (checkboxModel.incoming === true && checkboxModel.ended === false) {
  //     console.log('incoming');
  //     $scope.mitmutassak = 'incoming';
  //   } else if (checkboxModel.incoming === false && checkboxModel.ended === true) {
  //     console.log('ended');
  //     $scope.mitmutassak = 'ended';
  //     console.log($scope.mitmutassak);
  //   } else if (checkboxModel.incoming === false && checkboxModel.ended === false) {
  //     $scope.mitmutassak = 'egyiksem';
  //     console.log('egyiksem');
  //   } else if (checkboxModel.incoming === true && checkboxModel.ended === true) {
  //     console.log('mindketto');
  //     $scope.mitmutassak = 'mindkettooooo';
  //   };
  // };
});

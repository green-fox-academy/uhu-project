var UHU = require('../app');
var angularChart = require('angular-chart.js');

UHU.config( function (ChartJsProvider) {
    ChartJsProvider.setOptions({
      colours: ['#FF5252', '#FF8A80'],
      responsive: false
    });
    ChartJsProvider.setOptions('Line', {
      datasetFill: false
    });
});

UHU.controller('chartCtrl', function($scope, newCallService) {
$scope.calls = newCallService.getCalls();
$scope.labels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
$scope.series = ['call begin', 'call end', 'aborted calls', "unsuccesful calls" ];
arrayTransformator();

  function arrayTransformator () {
    $scope.data = newCallService.getCalls().reduce(function(prev, call) {
      prev[0].push(call.callbegin)
      prev[1].push(call.callanswer);
    return prev}, [[],[]]);
  }
});

var UHU = require('../app');
var angularChart = require('angular-chart.js');
var moment = require('moment');

UHU.config( function (ChartJsProvider) {
    ChartJsProvider.setOptions({
      colours: ['#FF5252', '#FF8A80'],
      responsive: false
    });
    ChartJsProvider.setOptions('Line', {
      datasetFill: false
    });
});

UHU.controller('chartCtrl', function($scope) {
//$scope.calls = newCallService.getCalls();
$scope.labels = ["Seven hours before", "Six hours before", "Five hours before", "Four hours before", "Three hours before", "Two hours before", "One hours before"];
$scope.series = ['Incoming Calls', 'Ended calls'];
$scope.data = [
  [65, 59, 80, 81, 56, 55, 40],
  [28, 48, 40, 19, 86, 27, 90]
];
$scope.onClick = function (points, evt) {
    console.log(points, evt);
};
/*arrayTransformator();

  function arrayTransformator () {
    $scope.data = newCallService.getCalls().reduce(function(prev, call) {
      prev[0].push(call.callbegin)
      prev[1].push(call.endTime);
    return prev}, [[],[]]);
  }*/

});

var UHU = require('../app');
var angularChart = require('angular-chart.js');

UHU.config( function (ChartJsProvider) {
    // Configure all charts
    ChartJsProvider.setOptions({
      colours: ['#FF5252', '#FF8A80'],
      responsive: false
    });
    // Configure all line charts
    ChartJsProvider.setOptions('Line', {
      datasetFill: false
    });
});
UHU.controller('chartCtrl', function($scope) {

$scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
$scope.series = ['Series A', 'Series B'];
$scope.data = [
  [65, 59, 80, 81, 56, 0, 40],
  [28, 48, 0, 19, 86, 27, 90]
];
$scope.onClick = function (points, evt) {
  console.log(points, evt);
  };
});

var UHU = require('../app');

UHU.directive('listcalls', function () {
  return {
    restrict: 'E',
    scope: { calls: '=calls', callFilter: '=callFilter'},
    templateUrl: '../../template/listCalls.html'
  };
});

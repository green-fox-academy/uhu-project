var UHU = require('../app');

UHU.directive('listcalls', function () {
  return {
    restrict: 'E',
    scope: { calls: '=calls', callFilter: '=callFilter'},
    templateUrl: '../../template/listCalls.html',
    link: function(scope) {
      scope.ordering = function(columnName) {
        scope.orderer.value = columnName;
        scope.orderer.reverse = !scope.orderer.reverse;
      }
    }
  };   
});

var UHU = require('../app');

UHU.directive('listcalls', function () {
  return {
    restrict: 'E',
    scope: { calls: '=calls', callFilter: '=callFilter'},
    templateUrl: '../../template/listCalls.html',
    link: function(scope) {
      scope.orderer = {value: '',
                      isReverse: false};
      scope.ordering = function(columnName) {
        scope.orderer.value = columnName;
        console.log(scope.orderer);
        scope.orderer.isReverse = !scope.orderer.isReverse;
      }
    }
  };   
});

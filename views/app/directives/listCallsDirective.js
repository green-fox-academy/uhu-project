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
        var icons = document.querySelectorAll('.icon');
        scope.orderer.value = columnName;
        console.log(scope.orderer);
        scope.orderer.isReverse = !scope.orderer.isReverse;
        icons.innerText = scope.orderer.isReverse ? '▼' : '▲';
      }
    }
  };   
});

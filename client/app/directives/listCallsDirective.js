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
        var selectedCol = document.querySelector('.active > .icon');
        scope.orderer.value = columnName;
        scope.orderer.isReverse = !scope.orderer.isReverse;
        selectedCol.innerText = scope.orderer.isReverse ? '▼' : '▲';  
      }
    }
  };   
});

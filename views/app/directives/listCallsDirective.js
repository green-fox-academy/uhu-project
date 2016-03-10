var UHU = require('../app');

UHU.directive('listcalls', function () {
  return {
    restrict: 'E',
    
    templateUrl: '../../template/listCalls.html',
    link: function(scope) {
      scope.orderer = {value: 'blinky bill'};
      scope.ordering = function(columnName) {
        console.log(scope.orderer);
        scope.orderer.value = columnName;
        
        console.log(scope);
      }
    }
  };   
});

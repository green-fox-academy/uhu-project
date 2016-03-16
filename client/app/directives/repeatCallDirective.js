var UHU = require('../app');
var moment = require('moment');

UHU.directive('call', function () {
  return {
    restrict: 'E',
    scope: { call: '=call' },
    templateUrl: '../../template/repeatCalls.html',
    link: function (scope) {
      scope.statusChanger = function (call) {
        var statusImageSrc = '/images/' + call.status + '.svg';
        return statusImageSrc;
      };
    }
  };
});

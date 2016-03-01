'use strict';

var UHU = require('../app');

UHU.controller('addNewCall', function($scope, newCallService) {
  $scope.newCall = function (calls) {
    var call = {};
    newCallService.newCall(call);
  };
});

'use strict';

var UHU = require('../app');

UHU.controller('addNewCall', function($scope, newCallService) {
  var call = {};
  $scope.newCall = function (calls) {
    newCallService.newCall(call);
  }
});

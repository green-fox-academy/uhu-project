'use strict';

var UHU = require('../app');
var moment = require('moment');

UHU.service('newCallService', function(calls) {
    this.calls = calls;
    this.getCalls = function() {
      return this.calls;
    }
    this.newCall = function(call) {
      this.calls.push(call);
    }
  });

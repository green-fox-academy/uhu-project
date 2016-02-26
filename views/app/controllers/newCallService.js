'use strict';

var UHU = require('../app');
var moment = require('moment');
var start = moment().add(1, 'H');
var end = moment().add(2, 'H');

UHU.service('newCallService', function(calls) {
    this.calls = calls;
    this.getCalls = function() {
      return this.calls;
    }
    this.newCall = function(call) {
      this.calls.push(call);
    }
  });

'use strict';

var UHU = require('../app');
var moment = require('moment');

UHU.service('newCallService', function(calls) {
    this.calls = calls;
    this.getCalls = function() {
      return this.calls;
    }
    this.newCall = function(call) {
      call.id = this.calls.length + 1;
      call.status = 'incoming';
      this.calls.push(call);
    }
  });

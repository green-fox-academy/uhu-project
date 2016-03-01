'use strict';

var UHU = require('../app');
var moment = require('moment');

UHU.service('newCallService', function(calls) {
    this.calls = calls;
    this.getCalls = function() {
      return this.calls;
    }
    this.newCall = function(newCall) { 
      var call = {};
      if ((calls.filter(function (call) { return call.id === newCall.id})).length === 0) {
      call.startTime = newCall.callbegin;
      call.id = newCall.callid;
      call.status = 'incoming';
      call.suorce = newCall.source;
      call.destination = newCall.destination;
      call.gateway = newCall.gateway;
      call.user = newCall.user;
      call.ellapsedTime = 0;
      this.calls.push(call);
      }
    }
  });

'use strict';

var UHU = require('../app');
var moment = require('moment');

UHU.service('newCallService', function(calls, $rootScope) {
    var _this = this;
    this.calls = calls;
    this.getCalls = function() {
      return this.calls;
    };
    this.newCall = function(newCall) { 
      var filteredCalls = calls.filter(function (call) { return call.id === newCall.callid });
      if (filteredCalls.length === 0) {
        var call = {};
        call.id = newCall.callid;
        call.startTime = newCall.callbegin;
        call.status = 'incoming';
        call.source = newCall.source;
        call.destination = newCall.destination;
        call.gateway = newCall.gateway;
        call.userId = newCall.userId;
        call.ellapsedTime = 0;
        this.calls.push(call);
      } else {
        (filteredCalls[0]) = newCall;
      }
    };
    var socket = io.connect(window.location.href);
    socket.on('calls', function(data) {
      $rootScope.$apply(function () {
        _this.newCall(data);
      });
    });
  });
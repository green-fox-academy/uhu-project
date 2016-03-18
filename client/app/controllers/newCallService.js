'use strict';

var UHU = require('../app');
var moment = require('moment');


UHU.service('newCallService', function (calls, $rootScope, $location) {
    var _this = this;
    this.calls = calls;
    this.getCalls = function () {
      return this.calls;
    };

    this.newCall = function (newCall) {
      var filteredCalls = calls.filter(function (call) { return call.id === newCall.callid; });
      
      var actualCallId = filteredCalls.length > 0 ? ((filteredCalls[0].id)-1) : 0;

      if (filteredCalls.length === 0) {
        this.calls.push(this.createACall(newCall));
      } else if (filteredCalls.length != 0 && newCall.callanswer && !newCall.callend){
        calls[actualCallId].status = 'ongoing';
        calls[actualCallId].callanswer = newCall.callanswer;       
      } else if (filteredCalls.length != 0 && newCall.callanswer && newCall.callend){ 
        calls[actualCallId].status = 'past';
        calls[actualCallId].endTime = newCall.callend;
      }
    };
  
   this.createACall = function(newCall) {
     var call = {};
     call.id = newCall.callid;
     call.callbegin = newCall.callbegin;
     call.status = 'incoming';
     call.source = newCall.source;
     call.destination = newCall.destination;
     call.gateway = newCall.gateway;
     call.userId = newCall.userId;
     return call;
   };
    

    function getBaseUrl() {
      return $location.protocol() + '://' + $location.host();
    }

    var socket = io.connect(getBaseUrl() + ':4200');
    socket.on('calls', function (data) {
      $rootScope.$apply(function () {
        _this.newCall(data);
      });
    });
  });

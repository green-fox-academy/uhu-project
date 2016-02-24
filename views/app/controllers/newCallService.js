'use strict';

var UHU = require('../app');

var calls = [
    {status: 'ongoing',
     startTime: start, //.format('DD/MM/YYYY HH:MM'),
     elapsedTime: start,
     endTime: '',
     id: 1},

    {status: 'ended',
     startTime: start, //.format('DD/MM/YYYY HH:MM'),
     elapsedTime: start,
     endTime: end, //.format('DD/MM/YYYY HH:MM'),
     id: 2},

    {status: 'ended',
     startTime: start, //.format('DD/MM/YYYY HH:MM'),
     elapsedTime: start,
     endTime: end,// .format('DD/MM/YYYY HH:MM'),
     id: 3},
  
    {status: 'incoming',
     startTime: start,
     elapsedTime: 0,    
     id: 4}
];

UHU.service('newCallService', function(calls) {
    this.calls = calls;
    this.getCalls = function() {
      return this.calls;
    }
    this.newCall = function(call) {
      this.calls.push(call);
    }
  });
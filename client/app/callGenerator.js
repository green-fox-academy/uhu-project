'use strict';

var moment = require('moment');
var dateFormat = 'YYYY-MM-DD HH:mm:ss';
var uniqueId = 21;
var dates = ['callbegin', 'callanswer', 'callend'];
var newCall = {};

function* callGenerator() {
  while (true) {   
    var rest = uniqueId % 3;
    if (rest === 0) { 
      newCall.callid = Math.floor(uniqueId++/3);
      newCall[dates[rest]] = moment().format(dateFormat);
      newCall.source = '555-777-4';
      newCall.destination = '888-999-0';
      newCall.gateway = 'T-Mobile';
      newCall.userId = 'kfc';
    } else if ( rest === 1) {
      newCall.callid = Math.floor(uniqueId++/3);
      newCall.callend = '';
      newCall[dates[rest]] = moment().format(dateFormat);
    } else if ( rest === 2) {
      newCall.callid = Math.floor(uniqueId++/3);
      newCall[dates[rest]] = moment().format(dateFormat);
    } 
    console.log(newCall);
    yield newCall;
  }
}

module.exports = callGenerator;
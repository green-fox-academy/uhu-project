'use strict';

var moment = require('moment');
var dateFormat = 'YYYY-MM-DD HH:mm:ss';
var uniqueId = 21;

function* callGenerator() {
  var dates = ['callbegin', 'callanswer', 'callend'];

  while (true) {   
    var rest = uniqueId % 3;
    if (rest === 0) { 
      var newCall = {};
      newCall.callid = Math.floor(uniqueId++/3);
      newCall[dates[rest]] = moment().format(dateFormat);
      newCall.source = '555-777-4';
      newCall.destination = '888-999-0';
      newCall.gateway = 'T-Mobile';
      newCall.userId = 'kfc';
    } else if ( rest === 1) {
      newCall[dates[rest]] = moment().format(dateFormat);
    } else if ( rest === 2) {
      newCall[dates[rest]] = moment().format(dateFormat);
    } 
    console.log(newCall);
    yield newCall;
  }
}

module.exports = callGenerator;
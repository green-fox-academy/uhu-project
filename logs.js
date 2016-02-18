'use strict';

var defaultLevel = require('./config.js').DEFAULT_LOGGINGLEVEL;

function Logs(loggerFunction, InnerDate) {

  var loggerFunction = loggerFunction || console.log;
  var InnerDate = InnerDate || Date;

  this.logCreator = function(message, status, loggingLevel) {
    var loggingLevel = loggingLevel || defaultLevel;
    var levels = ['INFO', 'DEBUG', 'WARN', 'ERROR'];

    var date = new InnerDate();
    var logEvent = [loggingLevel, date.toISOString(), message, status];
    loggerFunction(logEvent.join(' '));
  };
}

module.exports = Logs;
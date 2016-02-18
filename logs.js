'use strict';

var defaultLevel = require('./config.js').DEFAULT_LOGGINGLEVEL;

function Logs(loggerFunction, InnerDate, loggingLevel) {

  var loggerFunction = loggerFunction || console.log;
  var InnerDate = InnerDate || Date;
  var loggingLevel = loggingLevel || defaultLevel;

  this.logDebug = function(message, status) {
    logCreator('DEBUG', message, status);
  };

  this.logInfo = function(message, status) {
    logCreator('INFO', message, status);
  };

  this.logWarn = function(message, status) {
    logCreator('WARN', message, status);
  };

  this.logError = function(message, error) {
    logCreator('ERROR', message, error);
  };

  var logCreator = function(logMethod, message, status) {
    var levels = ['DEBUG', 'INFO', 'WARN', 'ERROR'];
    if (levels.indexOf(logMethod) >= levels.indexOf(loggingLevel)) {
      var date = new InnerDate();
      var logEvent = [logMethod, date.toISOString(), message, status];
      loggerFunction(logEvent.join(' '));
    }
  };
}
module.exports = Logs;
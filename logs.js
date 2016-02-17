'use strict';

function Logs(loggerFunction, InnerDate) {

  loggerFunction = loggerFunction || console.log;
  InnerDate = InnerDate || Date;

  this.logRequest = function(req, res, next) {
    var date = new InnerDate();
    var logEvent = ['LOG REQUEST', date.toISOString(), req.method, req.originalUrl];
    loggerFunction(logEvent.join(' '));
    next();
  };

  this.logDebug = function(message, status) {
    var date = new InnerDate();
    var logEvent = ['DEBUG', date.toISOString(), message, status];
    loggerFunction(logEvent.join(' '));
  };

  this.logInfo = function(message, status) {
    var date = new InnerDate();
    var logEvent = ['INFO', date.toISOString(), message, status];
    loggerFunction(logEvent.join(' '));
  };

  this.logWarn = function(message, status) {
    var date = new InnerDate();
    var logEvent = ['WARN', date.toISOString(), message, status];
    loggerFunction(logEvent.join(' '));
  };

  this.logErrors = function(message, error) {
    var date = new innerDate();
    var logEvent = ['ERROR', date.toISOString(), message, error];
    loggerFunction(logEvent.join(' '));
  };

  // return {
  //   logRequest: logRequest,
  //   logDebug: logDebug,
  //   logInfo: logInfo,
  //   logWarn: logWarn,
  //   logErrors: logErrors
  // };
}

module.exports = Logs;
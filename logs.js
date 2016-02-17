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
    logCreator('DEBUG', message, status);
  };

  this.logInfo = function(message, status) {
    logCreator('INFO', message, status);
  };

  this.logWarn = function(message, status) {
    logCreator('WARN', message, status);
  };

  this.logErrors = function(message, error) {
    logCreator('ERROR', message, error);
  };

  var logCreator = function(logMethod, message, status) {
    var date = new InnerDate();
    var logEvent = [logMethod, date.toISOString(), message, status];
    loggerFunction(logEvent.join(' '));
  };
}

module.exports = Logs;
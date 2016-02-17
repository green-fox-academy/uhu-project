'use strict';

function Logs() {
  var date = new Date();

  this.logRequest = function(req, res, next) {
    var logEvent = [new Date(), req.method, req.originalUrl];
    console.log(logEvent);
    next();
  };

  this.logDebug = function(message, status) {
    var date = new Date();
    var logEvent = ['DEBUG', date.toISOString(), message, status];
    console.log(logEvent.join(' '));
  };

  this.logInfo = function(message, status) {
    var date = new Date();
    var logEvent = ['INFO', date.toISOString(), message, status];
    console.log(logEvent.join(' '));
  };

  this.logWarn = function(message, status) {
    var date = new Date();
    var logEvent = ['WARN', date.toISOString(), message, status];
    console.log(logEvent.join(' '));
  };

  this.logErrors = function(message, error) {
    var date = new Date();
    var logEvent = ['ERROR', date.toISOString(), message, error];
    console.log(logEvent.join(' '));
  };
}

module.exports = Logs;
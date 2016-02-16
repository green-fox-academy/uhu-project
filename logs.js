'use strict';

function Logs() {
  var date = new Date();

  this.logRequest = function(req, res, next) {
    var logEvent = [new Date(), req.method, req.originalUrl];
    console.log(logEvent);
  }

  this.logDebug = function(message, status) {
    console.log('DEBUG: ', date, '\n', message, '\n', 'status:', status);
  };

  this.logInfo = function(message, status) {
    console.log('INFO: ', date, '\n', message, '\n', 'status:', status);
  };

  this.logWarn = function(message, status) {
    console.log('WARN: ', date, '\n', message, '\n', 'status:', status);
  };

  this.logErrors = function(error, status) {
    console.log('ERROR: ', date, '\n', error, '\n', 'status:', status);
  };
};

module.exports = Logs;
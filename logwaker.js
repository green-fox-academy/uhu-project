'use strict';

var defaultLoggingLevel = require('./config.js').DEFAULT_LOGGINGLEVEL;
var logger = require('./logWriter.js');

function LogWaker(method, loggingLevel){
  this.method = method;
  this.time = new Date();
  this.layer = 'FRONTEND';
  this.loggingLevel = loggingLevel || defaultLoggingLevel;
}

LogWaker.prototype.logCreator = function () {
  var logText = this.loggingLevel + ' | '
              + this.layer + ' | '
              + this.method + ' | '
              + this.time;

  return logText;
};

function newLogWaker(method, loggingLevel){
  var newLog = new LogWaker(method, loggingLevel);
  logger.writeLogsToFile(newLog.logCreator());
  console.log(newLog.logCreator());

}

module.exports = {
  newLogWaker: newLogWaker
};

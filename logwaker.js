'use strict';

function LogWaker(method){
  this.method = method;
  this.time = new Date();
  this.layer = 'FRONTEND';
}

LogWaker.prototype.logCreator = function () {
  var logText = this.layer + ' | ' + this.method + ' | ' + this.time;
  return logText;
};

function newLogWaker(method){
  var newLog = new LogWaker(method);
  console.log(newLog.logCreator());
}

module.exports = {
  newLogWaker: newLogWaker
};

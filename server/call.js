'use strict';

var Logs = require('./logs.js');
var logger = new Logs();

function NewCall(data) {
  this.callBone = {
    callid: data.callid,
    callbegin: data.callbegin,
    callanswer: data.callanswer,
    callend: data.callend,
    source: data.source,
    destination: data.destination,
    user: data.user,
    gateway: data.gateway,
    status: '', };
}

NewCall.prototype.isUndefined = function (key) {
  return key === '' || key === undefined;
};

NewCall.prototype.isValidObject = function () {
  var _this = this;

  function isNotInteger() {
    return typeof _this.callBone.callid !== 'number';
  }

  function checkObjectIsUndefined() {
    var objectIndex = 0;
    var isItTrue = false;

    for (let list of this.callBone) {
      if (objectIndex != 2 && objectIndex != 3) {
        isItTrue =  _this.isUndefined(list);
      }

      if (isItTrue = true) {
        return true;
      }

      objectIndex++;
    }

    return false;
  }

  this.setStatus();

  return checkObjectIsUndefined() || isNotInteger() ? false : true;
};

NewCall.prototype.setStatus = function () {

  var incomingcall = !this.isUndefined(this.callBone.callbegin) &&
                    this.isUndefined(this.callBone.callanswer) &&
                    this.isUndefined(this.callBone.callend);

  var ongoingcall = !this.isUndefined(this.callBone.callbegin) &&
                    !this.isUndefined(this.callBone.callanswer) &&
                     this.isUndefined(this.callBone.callend);

  var pastcall = !this.isUndefined(this.callBone.callbegin) &&
                 !this.isUndefined(this.callBone.callanswer) &&
                 !this.isUndefined(this.callBone.callend);

  if (incomingcall) {
    this.callBone.status = 'incoming';
  } else if (ongoingcall) {
    this.callBone.status = 'ongoing';
  } else if (pastcall) {
    this.callBone.status = 'ended';
  } else {
    logger.logError('cant evaluate the call status');
  }

  return this.callBone.status;

};

NewCall.prototype.returnCall = function () {
  return this.isValidObject() && this.callBone;
};

module.exports = NewCall;

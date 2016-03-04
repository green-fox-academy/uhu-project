'use strict';

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
    status: ''
  };
}

NewCall.prototype.isValidObject =  function() {
  var _this = this;

  function isUndefined(key) {
    return key === '' || key === undefined;
  }

  function isNotInteger(){
    return typeof _this.callBone.callid !== 'number';
  }

  function checkObjectIsUndefined(){
    return isUndefined(_this.callBone.callid) ||
           isUndefined(_this.callBone.callbegin) ||
           isUndefined(_this.callBone.source) ||
           isUndefined(_this.callBone.destination) ||
           isUndefined(_this.callBone.user) ||
           isUndefined(_this.callBone.gateway);
  }

  this.setStatus();
  if (checkObjectIsUndefined() || isNotInteger()) {
    return false;
  } else return true;

};

NewCall.prototype.returnCall = function() {
  return this.isValidObject() && this.callBone;
};

NewCall.prototype.setStatus = function() {

  function isUndefined(key) {
    return key === '' || key === undefined;
  }

  var incomingcall = !isUndefined(this.callBone.callbegin) &&
                      isUndefined(this.callBone.callanswer) &&
                      isUndefined(this.callBone.callend);

  var ongoingcall = !isUndefined(this.callBone.callbegin) &&
                    !isUndefined(this.callBone.callanswer) &&
                     isUndefined(this.callBone.callend);

  var pastcall = !isUndefined(this.callBone.callbegin) &&
                 !isUndefined(this.callBone.callanswer) &&
                 !isUndefined(this.callBone.callend);

  if(incomingcall) {
    this.callBone.status = 'incoming';
  } else if (ongoingcall) {
    this.callBone.status = 'ongoing';
  } else if (pastcall) {
    this.callBone.status = 'ended';
  } else {
    console.log('something went wrong');
  }

  return this.callBone.status;

};

module.exports = NewCall;

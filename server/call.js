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
NewCall.prototype.isUndefined = function (key) {
    return key === '' || key === undefined;
};

NewCall.prototype.isValidObject =  function() {
  var _this = this;

  function isNotInteger(){
    return typeof _this.callBone.callid !== 'number';
  }

  function checkObjectIsUndefined(){
    return _this.isUndefined(_this.callBone.callid) ||
           _this.isUndefined(_this.callBone.callbegin) ||
           _this.isUndefined(_this.callBone.source) ||
           _this.isUndefined(_this.callBone.destination) ||
           _this.isUndefined(_this.callBone.user) ||
           _this.isUndefined(_this.callBone.gateway);
  }

  this.setStatus();
  if (checkObjectIsUndefined() || isNotInteger()) {
    return false;
  } else return true;

};

NewCall.prototype.setStatus = function() {

  var incomingcall = !this.isUndefined(this.callBone.callbegin) &&
                    this.isUndefined(this.callBone.callanswer) &&
                    this.isUndefined(this.callBone.callend);

  var ongoingcall = !this.isUndefined(this.callBone.callbegin) &&
                    !this.isUndefined(this.callBone.callanswer) &&
                     this.isUndefined(this.callBone.callend);

  var pastcall = !this.isUndefined(this.callBone.callbegin) &&
                 !this.isUndefined(this.callBone.callanswer) &&
                 !this.isUndefined(this.callBone.callend);

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

NewCall.prototype.returnCall = function() {
  return this.isValidObject() && this.callBone;
};

module.exports = NewCall;

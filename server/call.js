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
    state: ''
  };
}

NewCall.prototype.isValidObject =  function() {
  var _this = this;

  function isUndefined(key) {
    return key === '' || key === undefined;
  }

  function isInteger(){
    return typeof _this.callBone.callid === 'number';
  }

  function checkObjectIsUndefined(){
    return isUndefined(_this.callBone.callid) ||
           isUndefined(_this.callBone.callbegin) ||
           isUndefined(_this.callBone.source) ||
           isUndefined(_this.callBone.destination) ||
           isUndefined(_this.callBone.user) ||
           isUndefined(_this.callBone.gateway);
  }

  this.setState();
  console.log(isInteger());
  if (checkObjectIsUndefined() || isInteger()) {
    return false;
  } else return true;

};

NewCall.prototype.returnCall = function() {
  return this.isValidObject() && this.callBone;
};

NewCall.prototype.setState = function() {

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
    this.callBone.state = 'incomingcall';
  } else if (ongoingcall) {
    this.callBone.state = 'ongoingcall';
  } else if (pastcall) {
    this.callBone.state = 'pastcall';
  } else {
    console.log('something went wrong');
  }

  return this.callBone.state;

};

module.exports = NewCall;

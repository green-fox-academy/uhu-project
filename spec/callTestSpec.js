'use strict';

var NewCall = require('./../server/call.js');

describe('new call tests', function () {
  var testObject = {
    callid: 4,
    callbegin: 'test',
    callanswer: 'test',
    callend: 'test',
    source: 'test',
    destination: 'test',
    user: 'test',
    gateway: 'test',
    status: 'ended'
  };

  var ongoingCallObject = {
    callid: 'test',
    callbegin: 'test',
    callanswer: 'test',
    source: 'test',
    destination: 'test',
    user: 'test',
    gateway: 'test'
  };

  var incomingCallObject = {
    callid: 'test',
    callbegin: 'test',
    source: 'test',
    destination: 'test',
    user: 'test',
    gateway: 'test'
  };

  var call = new NewCall(testObject);
  var badcall = new NewCall({});
  var ongoingcall = new NewCall(ongoingCallObject);
  var incomingcall = new NewCall(incomingCallObject);

  it('the test should work', function () {
    expect(true).toBe(true);
    expect(true).not.toBe(false);
  });

  it('should be functions', function () {
    expect(typeof call.isValidObject).toBe('function');
    expect(typeof call.isUndefined).toBe('function');
    expect(typeof call.returnCall).toBe('function');
    expect(typeof call.setStatus).toBe('function');
  });

  it('should have a pastcall status', function () {
    expect(call.setStatus()).toEqual('ended');
    expect(ongoingcall.setStatus()).toEqual('ongoing');
    expect(incomingcall.setStatus()).toEqual('incoming');
  });

  it('should be undefined', function () {
    expect(call.isUndefined('')).toEqual(true);
  });

  it('is an undefined object', function () {
    expect(badcall.returnCall()).toBe(false);
  });

  it('is a valid object', function () {
    expect(call.returnCall()).toEqual(testObject);
  });
});

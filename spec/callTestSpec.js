'use strict';

var NewCall = require('./../server/call.js');

describe('new call tests', function() {
  var testObject = {
    callid: 4,
    callbegin: 'test',
    callanswer: 'test',
    callend: 'test',
    source: 'test',
    destination: 'test',
    user: 'test',
    gateway: 'test',
    state: 'past'
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

  it('the test should work', function() {
    expect(true).toBe(true);
    expect(true).not.toBe(false);
  });

  it('should be functions', function() {
    expect(typeof call.isValidObject).toBe('function');
    expect(typeof call.returnCall).toBe('function');
    expect(typeof call.setState).toBe('function');
  });

  it('should have a pastcall state', function() {
    expect(call.setState()).toEqual('past');
    expect(ongoingcall.setState()).toEqual('ongoing');
    expect(incomingcall.setState()).toEqual('incoming');
  });

  it('is an undefined object', function() {
    expect(badcall.returnCall()).toBe(false);
  });

  it('is a valid object', function() {
    expect(call.returnCall()).toEqual(testObject);
  });
});

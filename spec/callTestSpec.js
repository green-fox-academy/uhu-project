'use strict';

var NewCall = require('./../server/call.js');

describe('new call tests', function() {
  var testObject = {
    callid: 'ize',
    callbegin: 'ize',
    callanswer: 'ize',
    callend: 'ize',
    source: 'ize',
    destination: 'ize',
    user: 'ize',
    gateway: 'ize'
  };

  var badcall = new NewCall({});
  var call = new NewCall(testObject);

  it('the test should work', function() {
    expect(true).toBe(true);
    expect(true).not.toBe(false);
  });

  it('should be functions', function() {
    expect(typeof call.isValidObject).toBe('function');
    expect(typeof call.returnCall).toBe('function');
    expect(typeof call.setState).toBe('function');
  });

  it('is an undefined object', function() {
    expect(badcall.returnCall()).toBe(false);
  });

  it('is a valid object', function() {
    expect(call.returnCall()).toEqual(testObject);
  });
});

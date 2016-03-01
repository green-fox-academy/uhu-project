'use strict';

var NewCall = require('./../server/call.js');

describe('new call is ok', function() {
  var newcall = new NewCall({});

  it('is undefined', function() {
    expect(newcall.returnCall()).toBe(false);
  });
});

'use strict';

var Logs = require('../logs.js');

describe('Logger', function() {
  it("logMethods shuld be defined", function() {
  var logger = new Logs();
  expect(logger.logInfo).toBeDefined();
  });

  it("tests console.log and date", function() {
    function fakeConsoleLog(log) {
      expect(log).toEqual('INFO date message status');
    }
    function FakeDate() {
      FakeDate.prototype.toISOString = function() {
        return 'date';
      }
    }
    var logger = new Logs(fakeConsoleLog, FakeDate);
    logger.logInfo('message', 'status')
  });
});
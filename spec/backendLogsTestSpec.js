'use strict';

var Logs = require('../logs.js');

describe('Logger', function() {
  it("logCreator shuld be defined", function() {
  var logger = new Logs();
  expect(logger.logCreator).toBeDefined();
  });

  it("tests console.log and date with default log level", function() {
    function fakeConsoleLog(log) {
      expect(log).toEqual('INFO date message status');
    }
    function FakeDate() {
      FakeDate.prototype.toISOString = function() {
        return 'date';
      }
    }
    var logger = new Logs(fakeConsoleLog, FakeDate);
    logger.logCreator('message', 'status')
  });
});
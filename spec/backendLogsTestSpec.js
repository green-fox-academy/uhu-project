'use strict';

var Logs = require('../server/logs.js');

describe('Logger', function() {
  it("logMethodes shuld be defined", function() {
  var logger = new Logs();
  expect(logger.logDebug).toBeDefined();
  expect(logger.logInfo).toBeDefined();
  expect(logger.logWarn).toBeDefined();
  expect(logger.logError).toBeDefined();
  });

  it("should test console.log and date with default log level", function() {
    function fakeConsoleLog(log) {
      expect(log).toEqual('INFO date message status');
    }

    function FakeDate() {
      FakeDate.prototype.toISOString = function() {
        return 'date';
      };
    }
    var logger = new Logs(fakeConsoleLog, FakeDate);
    logger.logInfo('message', 'status');
  });

  it("should test log level is ok", function() {
    function fakeConsoleLog(log) {
      expect(log).toEqual('WARN date message status');
    }
    function FakeDate() {
      FakeDate.prototype.toISOString = function() {
        return 'date';
      };
    }

    var FakeLoggingLevel = 'INFO';

    var logger = new Logs(fakeConsoleLog, FakeDate, FakeLoggingLevel);
    logger.logWarn('message', 'status');
  });

  it("should test log method is above log level", function() {
    var FakeLoggingLevel = 'ERROR';
    var fakeConsole = {
      log: function() {}
    };
    spyOn(fakeConsole, 'log');

    var logger = new Logs(fakeConsole.log, FakeDate, FakeLoggingLevel);
    logger.logInfo('INFO date message status');
    function FakeDate() {
      FakeDate.prototype.toISOString = function() {
        return 'date';
      };
    }
    expect(fakeConsole.log).not.toHaveBeenCalled();
  });
});
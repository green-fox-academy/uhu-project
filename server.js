'use strict';

var frontendLog = require('./logwaker.js');

function myServer(db) {
  var bodyParser = require('body-parser');
  var express = require('express');
  var app = express();
  var heartbeat = require('./heartbeat.js');
  var Logs = require('./logs.js');
  var logger = new Logs();

  app.use(logRequest);
  app.use(bodyParser.json());
  app.use(express.static('view'));

  app.get('/', helloWorld);
  app.get('/heartbeat', heartbeat.heartBeat(db));
  app.post('/api/log', postLogs);

  function helloWorld(req, res) {
    res.send('Hello World');
    frontendLog.newLogWaker('PAGE VIEW AT /');
  }

  function postLogs(req, res) {
    res.send('logs');
  }

  function logRequest(req, res, next) {
    logger.logInfo(req.method, req.originalUrl);
    next();
  }

  return app;
}

module.exports = {
  myServer: myServer
};

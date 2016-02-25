'use strict';

function myServer(db) {
  var bodyParser = require('body-parser');
  var express = require('express');
  var app = express();
  var heartbeat = require('./heartbeat.js');
  var Logs = require('./logs.js');
  var logger = new Logs();

  app.use(logRequest);
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../views'));

  app.get('/heartbeat', heartbeat.heartBeat(db));
  app.post('/api/log', postLogs);

  function postLogs(req, res) {
    logger.logInfo('FRONTEND', JSON.stringify(req.body));
    res.send(req.body);
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

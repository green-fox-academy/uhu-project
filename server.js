'use strict';

function myServer(db) {
  var bodyParser = require('body-parser');
  var express = require('express');
  var app = express();
  var heartbeat = require('./heartbeat.js');
  var Logs = require('./logs.js');
  var logger = new Logs();

  app.use(logger.logRequest);
  app.use(bodyParser.json());
  app.use(express.static('view'));
  app.get('/', helloWorld);
  app.get('/heartbeat', heartbeat.heartBeat(db));

  function helloWorld(req, res) {
    res.send('Hello World');
  };

  return app;
}

module.exports = {
  myServer: myServer
};

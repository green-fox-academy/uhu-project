'use strict';

function myServer() {
  var bodyParser = require('body-parser');
  var express = require('express');
  var app = express();
  var heartBeat = require('./heartbeat.js');
  var Logs = require('./logs.js');
  var logger = new Logs();

  app.use(logger.logRequest);
  app.use(bodyParser.json());
  app.use(express.static('view'));
  app.get('/', helloWorld);
  app.get('/heartbeat', heartBeat.heartBeat);

  function helloWorld(req, res) {
    res.send('Hello World');
  };

  return app;
}

module.exports = {
  myServer: myServer
};

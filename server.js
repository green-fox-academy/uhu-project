'use strict';

function myServer() {
  var bodyParser = require('body-parser');
  var express = require('express');
  var app = express();
  var heartBeat = require('./heartbeat.js');
  app.use(logRequest);
  app.use(bodyParser.json());
  app.use(express.static('view'));
  app.get('/', helloWorld);
  app.get('/heartbeat', heartBeat.heartBeat);

  function helloWorld(req, res) {
    res.send('Hello World');
  };

  function logRequest(req, res, next) {
    var logEvent = [new Date(), req.method, req.originalUrl];
    console.log(logEvent);
    next();
  };
  return app;
}

module.exports = {
  myServer: myServer
}
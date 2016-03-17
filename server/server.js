'use strict';

function myServer(db) {
  var bodyParser = require('body-parser');
  var express = require('express');
  var app = express();
  var heartbeat = require('./heartbeat.js');
  var Logs = require('./logs.js');
  var logger = new Logs();
  var path = require('path');
  var server = require('http').createServer(app);
  var io = require('socket.io').listen(server);
  var NewCall = require('./call.js');

  app.use(logRequest);
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../client'));

  app.get('/heartbeat', heartbeat.heartBeat(db));
  app.post('/api/log', postLogs);
  app.post('/api/call', newCall);

  app.route('/*').get(function (req, res) {
    res.sendFile(path.resolve(__dirname + '/../client/template/index.html'));
  });

  function newCall(req, res) {
    logger.logInfo('CALL', JSON.stringify(req.body));
    var newcall = new NewCall(req.body);
    res.send(newcall.returnCall());
    io.emit('calls', req.body);
    console.log(newcall.returnCall());
  }

  function postLogs(req, res) {
    logger.logInfo('FRONTEND', JSON.stringify(req.body));
    res.send(req.body);
  }

  function logRequest(req, res, next) {
    logger.logInfo(req.method, req.originalUrl);
    next();
  }

  return { app: app, server: server };
}

module.exports = { myServer: myServer };

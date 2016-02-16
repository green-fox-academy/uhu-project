'use strict';

require('newrelic');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var port = require('./config.js').DEFAULT_PORT;
var heartBeat = require('./heartbeat.js');

app.use(express.static('views'));
app.use(bodyParser.json());
app.use(logRequest);

function helloWorld(req, res) {
  res.send('Hello World');
}

app.get('/', helloWorld);
app.get('/heartbeat', heartBeat.heartBeat);

app.listen(port, function () {
  console.log('Listening on port', port);
});

function logRequest(req, res, next) {
  var parts = [
    new Date(),
    req.method,
    req.originalUrl,
  ];
  console.log(parts);
  next();
};

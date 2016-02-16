'use strict';

var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var port = require('./config.js').DEFAULT_PORT;
var heartbeat = require('./heartbeat.js');

app.use(express.static('views'));
app.use(bodyParser.json());

function helloWorld(req, res) {
  res.send('Hello World');
}

app.get('/', helloWorld);
app.get('/heartbeat', function (req, res) {
  res.send(res);
});

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
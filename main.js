'use strict';

<<<<<<< HEAD
var server = require('./server.js');
var app = server.myServer();
=======
require('newrelic');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
>>>>>>> 4a786fddbd3deb833c821d7b9ae341f689d67e9b
var port = require('./config.js').DEFAULT_PORT;

app.listen(port, function () {
  console.log('Listening on port', port);
});

<<<<<<< HEAD
=======
function logRequest(req, res, next) {
  var parts = [
    new Date(),
    req.method,
    req.originalUrl,
  ];
  console.log(parts);
  next();
};
>>>>>>> 4a786fddbd3deb833c821d7b9ae341f689d67e9b

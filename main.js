'use strict';

var express = require('express');
var app = express();
var defaultPort = 3000;

//app.use(express.static('views'));

function helloWorld(req, res) {
  res.send('Hello World');
}

app.get('/', helloWorld);
app.get('/heartbeat', function (req, res) {
  res.send(res);
});

app.listen(process.env.PORT | defaultPort);

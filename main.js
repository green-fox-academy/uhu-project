'use strict';

var express = require('express');
var app = express();
var defaultPort = 3000;

app.use(express.static('views'));

function serverMessage() {
  console.log('The server started.');
}

function helloWorld(req, res) {
  res.send('Hello World');
}

app.get('/', helloWorld);
app.get('/heartbeat', function(req, res){

});

app.listen(defaultPort, serverMessage);

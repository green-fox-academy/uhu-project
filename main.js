'use strict';

var express = require('express');
var app = express();
var defaultPort = 3000; 

app.use(express.static('views'));

function serverMessage() {
  console.log('The server started.');
}

function helloWorld() {
  console.log('Hello World');
}

app.get('/', helloWorld());
app.listen(defaultPort, serverMessage);

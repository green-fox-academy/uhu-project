'use strict';

require('newrelic');
var server = require('./server.js');
var app = server.myServer();
var port = require('./config.js').DEFAULT_PORT;

app.listen(port, function () {
  console.log('Listening on port', port);
});



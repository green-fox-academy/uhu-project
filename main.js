'use strict';

require('newrelic');
var server = require('./server.js');
var app = server.myServer();
var port = require('./config.js').DEFAULT_PORT;
var Logs = require('./logs.js');

app.listen(port, function () {
  var logger = new Logs();
  logger.logInfo('Listening on port', port);
});
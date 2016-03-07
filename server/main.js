'use strict';

require('newrelic');
var server = require('./server.js');
var pg = require('pg');
var url = require('./config.js').DATABASE_URL;

function heartBeatQueryConnect(query, cb) {
  pg.connect(url, function(err, client, done) {
    client.query(query, function(err, result) {
      cb(err, result);
      done();
    });
  });
}

var app = server.myServer(heartBeatQueryConnect);
var port = require('./config.js').DEFAULT_PORT;
var Logs = require('./logs.js');

app.app.listen(port, function () {
  var logger = new Logs();
  logger.logInfo('Listening on port', port);
});

// app.server.listen(process.env.PORT || 4200);
app.server.listen(5000);

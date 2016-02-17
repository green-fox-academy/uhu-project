'use strict';

var pg = require('pg');
var url = require('./config.js').DATABASE_URL;
var Logs = require('./logs.js');

function heartBeat(req, res) {
  pg.connect(url, function(err, client, done) {
    client.query('SELECT ok FROM heartbeat;', heartBeatQueryCB(err, result));
  });
};

var heartBeatQueryCB = function(err, result) {
      done();
      var logger = new Logs();
      logger.logInfo('heartBeatQueryCB result:', result);
      if (err)
      {
         logger.logErrors('heartBeatQueryCB error', err);
         res.status(500).json({error: err});
      }
      else
      {
         res.status(200).json(result.rows);
      }
    };

module.exports = {
  heartBeat: heartBeat
};
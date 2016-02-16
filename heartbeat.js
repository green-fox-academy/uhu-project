'use strict';

var pg = require('pg');
var url = require('./config.js').DATABASE_URL;

function heartBeat(req, res) {
  pg.connect(url, function(err, client, done) {
    client.query('SELECT ok FROM heartbeat;', heartBeatQueryCB(err, result));
  });
};

var heartBeatQueryCB = function(err, result) {
      done();
      console.log(result);
      if (err)
      {
         console.error(err);
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
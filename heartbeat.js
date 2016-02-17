'use strict';

var pg = require('pg');
var url = require('./config.js').DATABASE_URL;
var Logs = require('./logs.js');

function heartBeat(req, res, cb) {
  heartBeatQueryConnect('SELECT ok FROM heartbeat;', function(err, result) {
    if (err)
      {
         logger.logErrors('heartBeatQueryConnect error', err);
         res.status(500).json({error: err});
      }
      else
      {
         res.status(200).json(result.rows);
      }
    });
  }



             
function heartBeatQueryConnect(query, cb) {
    pg.connect(url, function(err, client, done) {
      client.query(query, function(err, result) {
        cb(err, result);
        done();
      });
    });
  }

module.exports = {
  heartBeat: heartBeat
};
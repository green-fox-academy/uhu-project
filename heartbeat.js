'use strict';

var pg = require('pg');
var url = require('./config.js').DATABASE_URL;

function heartBeat(req, res) {
  heartBeatQueryConnect('SELECT ok FROM heartbeat;', function(err, result) {
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
    })
};
             
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
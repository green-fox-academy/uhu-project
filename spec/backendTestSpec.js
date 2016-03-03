'use strict';

var request = require('supertest');
var server = require('../server/server.js');
var app = server.myServer(heartBeatQueryConnect).app;
var appError = server.myServer(errorHeartBeatQueryConnect).app;

function heartBeatQueryConnect(query, cb) {
  cb(null, [{}]);
}
var err = {status: 500};
function errorHeartBeatQueryConnect(query, cb) {
  cb(err, [{}]);
}

describe('GET /heartbeat', function(){
  it('should response with 500', function(done){
    request(appError)
    .get('/heartbeat')
    .expect('Content-Type', /json/)
    .expect(500)
    .end(function(err, res) {
      if (err) throw err;
      done();
      });
    });
});

describe('GET /heartbeat', function(){
  it('should response with 500', function(done){
    request(app)
    .get('/heartbeat')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err, res) {
      if (err) throw err;
      done();
      });
    });
});

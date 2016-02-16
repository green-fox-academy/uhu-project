'use strict';

var request = require('supertest'),
express = require('express');
var app = express();

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
});

app.get('/heartbeat', function(req, res){
  res.status(200).send({});
});

describe('GET /heartbeat', function(){
  it('should response with 200', function(done){
    request(app)
      .get('/heartbeat')
      .set('Accept', 'application/json')
      .expect('Content-Type', 'json')
      .expect(200, done)
      .end(function(err, res) {
        if (err) throw err;
      });
  });
});

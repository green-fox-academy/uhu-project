'use strict';


describe('testing frontend logging', function() {
  beforeEach(module('UHU'));

  describe('MainController', function() {
    var scope, httpBackend, createController, newCallEndpoint;

    beforeEach(inject(function($rootScope, $httpBackend, $controller, $injector) {
      scope = $rootScope.$new();
      httpBackend = $injector.get('$httpBackend');

      newCallEndpoint = $httpBackend.when('POST', '/api/call').respond(200, 'ok');
      createController = $controller('MainController', {$scope:scope});
    }));

    afterEach(function() {
      httpBackend.verifyNoOutstandingExpectation();
      httpBackend.verifyNoOutstandingRequest();
    });

    it('should post ok message', function() {
      httpBackend.expect('POST', '/api/log').respond(200, 'ok');
      httpBackend.flush();
    });

    it('function is defined', function() {
      expect(scope.addNewCall).toBeDefined();
      httpBackend.flush();
    });

  });
});

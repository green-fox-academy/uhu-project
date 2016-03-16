'use strict';

describe('testing frontend logging', function () {
  beforeEach(module('UHU'));

  describe('MainController', function () {
    var scope;
    var httpBackend;
    var createController;
    var newCallEndpoint;

    beforeEach(inject(function ($rootScope, $httpBackend, $controller, $injector) {
      scope = $rootScope.$new();
      httpBackend = $injector.get('$httpBackend');

      newCallEndpoint = $httpBackend.when('POST', '/api/log').respond(200, 'ok');
      createController = $controller('MainController', { $scope:scope });
    }));

    it('the test should work', function () {
      expect(true).toBe(true);
      expect(true).not.toBe(false);
    });

    it('test existence of functions', function () {
      expect(scope.successCbLoc).toBeDefined();
      expect(scope.successCbRoute).toBeDefined();
      expect(scope.errorCbLoc).toBeDefined();
      expect(scope.errorCbRoute).toBeDefined();
      expect(scope.addNewCall).toBeDefined();
    });

    it('should be a function', function () {
      expect(typeof scope.successCbLoc).toBe('function');
      expect(typeof scope.successCbRoute).toBe('function');
      expect(typeof scope.errorCbRoute).toBe('function');
      expect(typeof scope.errorCbLoc).toBe('function');
    });

    it('should post ok message', function () {
      httpBackend.expect('POST', '/api/log').respond(200, 'ok');
      httpBackend.flush();
    });
  });
});

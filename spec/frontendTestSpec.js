'use stict';

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
});

describe('MainController', function() {

  var $scope, $controller, MainController;

  beforeEach(module('UHU'));

  beforeEach(inject(function($controller){
      $scope = $scope.$new();
      $controller = $controller;

  MainController = $controller('MainController', {'$scope': $scope});
}));

  it('should exist', function() {
      expect(MainController).toBeDefined()
      expect(MainController).toBe();
    });
  });

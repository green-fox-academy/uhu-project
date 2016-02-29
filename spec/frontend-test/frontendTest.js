'use stict';



describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
});

describe('MainController', function () {
  var $scope, $controller, MainController;

  beforeEach(module('UHU'));

  beforeEach(inject(function(_$controller_, $rootScope){
    $scope = $rootScope.$new();
    $controller = _$controller_;
    MainController = $controller('MainController', {'$scope': $scope});
  }));

  it('should exist', function () {
    expect(MainController).toBeDefined();
  });
});

describe('newCallService test', function () {
  var newCallService;
  beforeEach(module('UHU'));
  beforeEach(inject(function(_newCallService_) {
      newCallService = _newCallService_;
    }));

  it('should exist', function () {
    expect(newCallService).toBeDefined();
  });
});

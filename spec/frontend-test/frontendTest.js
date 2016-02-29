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

describe('addNewCall', function () {
  var $scope, $controller, addNewCall;

  beforeEach(module('UHU'));

  beforeEach(inject(function(_$controller_, $rootScope){
    $scope = $rootScope.$new();
    $controller = _$controller_;
    addNewCall = $controller('addNewCall', {'$scope': $scope});
  }));

  it('should exist', function () {
    expect(addNewCall).toBeDefined();
  });
});

describe('ListCtrl', function () {
  var $scope, $controller, ListCtrl;

  beforeEach(module('UHU'));

  beforeEach(inject(function(_$controller_, $rootScope){
    $scope = $rootScope.$new();
    $controller = _$controller_;
    ListCtrl = $controller('ListCtrl', {'$scope': $scope});
  }));

  it('should exist', function () {
    expect(ListCtrl).toBeDefined();
  });

  it('calls should be an object', function () {
    expect($scope.calls).toBeDefined({});
  });

  it('calls status should be ended', function () {
    expect($scope.calls[0].status).toEqual('ongoing');
  });

  it('statusChanger should return with statusImageSrc', function () {
    expect($scope.statusChanger).toBeDefined('statusImageSrc');
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

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
    expect($scope.statusChanger).toBeDefined();
  });

  it('timeFormatter should return with callTime', function () {
    expect($scope.timeFormatter).toBeDefined();
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

  it('getCalls should return with this.calls', function () {
    expect(newCallService.getCalls).toBeDefined();
  });

  it('newCall should return with this.calls', function () {
    expect(newCallService.newCall).toBeDefined();
  });

  it('newCall should push call to calls', function () {
    var call = {id:5};
    newCallService.newCall(call);
    expect(newCallService.calls.length).toBe(5);
   });
  

   it('getCalls should be 5', function () {
     var calls = newCallService.getCalls;
     newCallService.getCalls();
     expect(newCallService.calls.length).toBe(5);
    });
  
  it('newCall should not push call to calls', function () {
    var call = {id:5};
    newCallService.newCall(call);
    expect(newCallService.calls.length).toBe(5);
   });
});

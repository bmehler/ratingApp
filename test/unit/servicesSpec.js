describe('Unit testing services', function () {
    var EmployeeService, httpBackend;

    beforeEach(module('application'));

    beforeEach(inject(function (_EmployeeService_, $httpBackend, $http) {
        EmployeeService = _EmployeeService_;
        httpBackend = $httpBackend;
        http = $http;
    }));

    it('should have EmployeeService', function () {
        expect(EmployeeService).toBeDefined();
    });

    it('should have the function getEmployee', function () {
        expect(EmployeeService.getEmployee).toBeDefined();
    });

    it('should call $http.get in getEmployee', function () {
        httpBackend.expectGET('data/storage.json').respond({
            name: 'Daisy Dougles'
        });
        EmployeeService.getEmployee();
        httpBackend.flush();
    });

    it('should call getEmployee once', function () {
        spyOn(EmployeeService, 'getEmployee').andCallThrough();
        EmployeeService.getEmployee();
        expect(EmployeeService.getEmployee).toHaveBeenCalled();
        expect(EmployeeService.getEmployee.calls.length).toEqual(1);
    });

    it('should call getEmployee and return a result', function () {
        spyOn(EmployeeService, 'getEmployee').andCallThrough();
        var result = EmployeeService.getEmployee();
        expect(result).not.toBe(null);
    });

    it('should call $http.get in getEmployee', inject(function () {
        spyOn(http, 'get');
        EmployeeService.getEmployee();
        expect(http.get).toHaveBeenCalled();
      }));
});

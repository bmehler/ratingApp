describe('Unit testing controllers', function () {

    beforeEach(module('application'));

    var controller;

    it('should have an EmployeeListCtrl controller', function () {
        expect(EmployeeListCtrl).toBeDefined();
    });

    it('should have a property orderProp which is name',
        inject( function($controller, $rootScope) {
            scope = $rootScope.$new();

            controller = $controller('EmployeeListCtrl', {
                $scope: scope
            });

            expect(controller.orderProp).toBe('name');
        })
    );

    it('should fetch list of employees',
        inject(function($controller, $rootScope, _$httpBackend_) {

          scope = $rootScope.$new();
          httpBackend = _$httpBackend_;

          httpBackend.when('GET', 'data/storage.json')
              .respond(
                    { name: 'Daisy Dougles' }
              );

          controller = $controller('EmployeeListCtrl', {
              $scope: scope
          });

          httpBackend.flush();

          expect(controller.employees.name).toBeDefined();
          expect(controller.employees).toEqual({ name: 'Daisy Dougles' });
          expect(controller.employees.name.length).toBe(13);
      })
  );

    it('should have an EmployeeDetailCtrl controller', function () {
        expect(EmployeeDetailCtrl).toBeDefined();
    });

    it('should have correct css class',
        inject( function($controller, $rootScope) {

            scope = $rootScope.$new();

            controller = $controller('EmployeeDetailCtrl', {
                $scope: scope
            });

           expect(scope.classChange(24)).toBe('progress-bar progress-bar-danger');
           expect(scope.classChange(74)).toBe('progress-bar progress-bar-warning');
           expect(scope.classChange(75)).toBe('progress-bar progress-bar-success');
           expect(scope.classChange(24)).not.toBe('progress-bar progress-bar-success');
           expect(scope.classChange(74)).not.toBe('progress-bar progress-bar-success');
           expect(scope.classChange(75)).not.toBe('progress-bar progress-bar-danger');
        })
    );

    it('should take id as specified',
        inject( function($controller, $rootScope) {

            scope = $rootScope.$new();

            controller = $controller('EmployeeDetailCtrl', {
                $scope: scope,
                $routeParams:  { 'id' : 1 }
            });

            expect(scope.routeId).toEqual(1);
        })
    );
});

angular
      .module('employee', [
        'employee.config',
      ])
      .controller('EmployeeListCtrl', EmployeeListCtrl);

EmployeeListCtrl.$inject = ['$scope', 'EmployeeService'];

function EmployeeListCtrl ($scope, EmployeeService) {
    var employee = this;
    employee.employees = [ ];
    employee.orderProp = 'name';

    getEmployees();

    function getEmployees () {
        EmployeeService.getEmployee()
              .success(function (data) {
                    employee.employees = data;
                    return employee.employees;
              })
              .error(function (error) {
                  console.log('Unable to read data' + error);
              });
      };
};

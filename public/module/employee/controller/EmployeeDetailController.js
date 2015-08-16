angular
  .module('employee.detail', [
    'employee.config',
  ])
  .controller('EmployeeDetailCtrl', EmployeeDetailCtrl);

EmployeeDetailCtrl.$inject = ['$scope', '$routeParams', 'EmployeeService'];

function EmployeeDetailCtrl ($scope, $routeParams, EmployeeService) {
  var id = $routeParams.id;
  $scope.routeId = id;

  var detail = this;
  detail.employees = [ ];

  getEmployees();

  function getEmployees() {
    EmployeeService.getEmployee()
      .success(function (data) {
        detail.employees = data;
        return detail.employees;
      })
      .error(function (error) {
        console.log('Unable to read data' + error);
      });
  };

  var classChange = function (progress) {
    if (progress < 25) {
      return "progress-bar progress-bar-danger"
    } else if (progress < 75) {
      return "progress-bar progress-bar-warning"
    } else {
      return "progress-bar progress-bar-success"
    }
  }

  $scope.classChange = classChange;

  var percentageStyle = function (percent) {
    return {
      width: percent + '%'
    }
  }

  $scope.percentageStyle = percentageStyle;

  var total = function (employee) {
    return result = (
      employee.rating.quality +
      employee.rating.quantity +
      employee.rating.knowledge +
      employee.rating.initiative +
      employee.rating.communication +
      employee.rating.team +
      employee.rating.learning +
      employee.rating.motivation +
      employee.rating.performance +
      employee.rating.organization
    ) / 10;
  }

  $scope.total = total;
};

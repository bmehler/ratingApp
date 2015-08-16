angular
  .module('employee.config',  [
      'data.storage',
      'ngRoute'
  ])
  .config(config);

function config ($routeProvider) {
  $routeProvider
  .when('/employees', {
    templateUrl: 'module/employee/view/employee-list.tpl.html',
    controller: 'EmployeeListCtrl',
    controllerAs: 'employee'
  })
  .when('/employee/rating/:id', {
    templateUrl: 'module/employee/view/employee-detail.tpl.html',
    controller: 'EmployeeDetailCtrl',
    controllerAs: 'detail'
  })
  .otherwise({
    redirectTo: '/employees'
  });
};

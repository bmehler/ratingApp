angular
  .module('data.storage', [ ] )
  .service('EmployeeService', EmployeeService);

EmployeeService.$inject = ['$http'];

var urlBase = 'data/storage.json';

function EmployeeService ($http) {
  return {
    getEmployee: getEmployee
  };

  function getEmployee () {
    return $http.get(urlBase);
  }
}

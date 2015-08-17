angular
  .module('employee.directive', [
    'employee.config',
  ])
  .directive('ratingTotal', ratingTotal)
  .directive('ratingAverage', ratingAverage);

ratingTotal.$inject = [ ];
ratingAverage.$inject = [ ];

function ratingTotal () {
  return {
    restrict: 'E',
    scope: {
      data: '=',
      classChange: '&',
      percentageStyle: '&',
    },
    template: [
      '<div ng-class="classChange(value)" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" ng-style="percentageStyle(value)">',
        '{{data}}%',
      '</div>'
    ].join('')
  };
}

function ratingAverage() {
  return {
    restrict: 'E',
    scope: {
      data: '='
    },
    template: '<span>Average: {{ data }}%</span>',
    controller: function($scope) {
      var sum = 0;
      angular.forEach($scope.data, function (value, key) {
        sum = sum + value;
      })
      total = (sum / 10);
      $scope.data = total;
    }
  };
}

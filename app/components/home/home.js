'use strict';

angular.module('GodHasAPlan.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'components/home/home.html',
    controller: 'HomeController'
  });
}])

.controller('HomeController', ['$scope', function($scope) {
        $scope.title = "God Has a Plan";
}]);

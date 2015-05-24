'use strict';

angular.module('GodHasAPlan.bible', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/bible', {
    templateUrl: 'components/bible/bible.html',
    controller: 'BibleController'
  });
}])

.controller('BibleController', ['$scope', function($scope) {
      
}]);

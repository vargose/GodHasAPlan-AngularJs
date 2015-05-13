'use strict';

// Declare app level module which depends on views, and components
angular.module('GodHasAPlan', [
  'ngRoute',
  'GodHasAPlan.view1',
  'GodHasAPlan.view2',
  'GodHasAPlan.home',
  'GodHasAPlan.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
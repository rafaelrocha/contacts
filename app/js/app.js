'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/list', 
  	{templateUrl: 'partials/list.html', controller: 'List'});
  $routeProvider.when('/create', 
  	{templateUrl: 'partials/create.html', controller: 'Create'});
  $routeProvider.when('/edit/:id', 
  	{templateUrl: 'partials/edit.html', controller: 'Edit'});
  $routeProvider.otherwise({redirectTo: '/list'});
}]);
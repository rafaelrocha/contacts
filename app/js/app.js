'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/list', {templateUrl: 'partials/list.html', controller: 'List'});
  $routeProvider.when('/form', {templateUrl: 'partials/form.html', controller: 'Form'});
  $routeProvider.otherwise({redirectTo: '/list'});
}]);
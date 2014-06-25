'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('List', ['$scope', function($scope) {
  	$scope.contacts = [{
  			id: 0,
  			name: 'Arlindo',
  			number: '35 223 4444',
  			address: '34 Marcy Avenue - NY'
  		},{
  			id: 2,
  			name: 'Rafael',
  			number: '39 223 6666',
  			address: '39 Brasil Avenue - NY'
  		},{
  			id: 3,
  			name: 'Rhahsd',
  			number: '37 223 6666',
  			address: '39 Pernambuco Avenue - NY'
  		}
  	]

  }])
  .controller('Form', ['$scope', function($scope) {

  }]);

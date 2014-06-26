'use strict';

angular.module('myApp.controllers', [])

  .controller('List', ['$scope', 'contact', function($scope, Contact) {
  	$scope.contacts = Contact.getAll();

  }])

  .controller('Create', ['$scope', 'contact', function($scope, Contact) {    
    $scope.create = function () {
      Contact.create({
        name: $scope.name,
        number: $scope.number,
        address: $scope.address
      });
    };
  }])

  .controller('Edit', ['$scope', '$routeParams', 'contact', function($scope, $routeParams, Contact) {
    var contact = Contact.get($routeParams.id);

    //TODO: improve it - make clear
    $scope.name = contact.name;
    $scope.number = contact.number;
    $scope.address = contact.address;

    $scope.edit = function() {
      //TODO: improve it - make clear
      Contact.edit({
        id: $routeParams.id,
        name: $scope.name,
        number: $scope.number,
        address: $scope.address
      })
    };

  }]);

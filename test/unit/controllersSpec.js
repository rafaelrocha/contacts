'use strict';

describe('edit controller', function(){
  var $scope = {}, $routeParams = {};

  var contactMock;

  beforeEach(function (){    
    module('myApp');
    
    inject(function($injector) {
      contactMock = $injector.get('contact');
    })
  });
 
  it('should show contact data to edit', 
    inject(function($controller) {
    
    //setup - data
    $routeParams.id = 1;

    var contact = {
      name: 'Rafael',
      number: '3543434343',
      address: 'Rua zezim'
    };

    //setup - expectations
    spyOn(contactMock, 'get').and.returnValue(contact);

    //exercise
    var list = $controller('Edit', { 
      $scope: $scope,
      $routeParams: $routeParams, 
      Contact: contactMock
    });

    //verify
    expect($scope.name).toEqual(contact.name);
    expect($scope.number).toEqual(contact.number);
    expect($scope.address).toEqual(contact.address);
  }));

  it('should save new contact data after edited', 
    inject(function($controller) {

    //setup - data
    $routeParams.id = 1;
    $scope = {
      name: 'Rafael',
      number: '3543434343',
      address: 'Rua zezim'
    };

    //setup - expectations
    spyOn(contactMock, 'get').and.returnValue($scope);
    spyOn(contactMock, 'edit');

    //exercise
    var list = $controller('Edit', { 
      $scope: $scope,
      $routeParams: $routeParams, 
      Contact: contactMock
    });
    $scope.edit();

    //verify
    expect(contactMock.edit.calls.any()).toEqual(true);
  }));

});

'use strict';

angular.module('myApp.services', []).
  service('contact', [function() {

    var sequenceId = 1;
    var contacts = [{
  			id: 0,
  			name: 'Arlindo',
  			number: '35 223 4444',
  			address: '34 Marcy Avenue - NY'
  		}]

    this.getAll = function() {
    	return contacts;
    };

		this.get = function(id) {
      return contacts[id];
		};

		this.create = function(contact) {
      contact.id =  sequenceId;
      sequenceId = sequenceId + 1;
			contacts.push(contact);
		};

    this.edit = function(contact) {
      contacts[contact.id] = contact;
    };

  }]);
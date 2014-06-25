'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /list when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/list");
  });


  describe('list', function() {

    beforeEach(function() {
      browser.get('index.html#/list');
    });


    it('should render list when user navigates to /list', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('form', function() {

    beforeEach(function() {
      browser.get('index.html#/form');
    });


    it('should render form when user navigates to /form', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});

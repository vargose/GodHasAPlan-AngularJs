'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('God Has A Plan', function() {

  browser.get('index.html');

  it('should automatically redirect to /home when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/home");
  });


  describe('view1', function() {

    beforeEach(function() {
      browser.get('index.html#/view1');
    });


    it('should render view1 when user navigates to /view1', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('view2', function() {

    beforeEach(function() {
      browser.get('index.html#/view2');
    });


    it('should render view2 when user navigates to /view2', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
  
  describe('home', function() {

    beforeEach(function() {
      browser.get('index.html#/home');
    });

    it('should have the Title God Has a Plan', function() {
      expect(browser.getTitle()).
        toEqual("God Has a Plan");
    });
    
    it('should have the Title God Has a Plan', function() {
      expect(browser.getTitle()).
        toEqual("God Has a Plan");
    });
    
    it('should have the text "God Has a Plan"', function() {
        expect(element(by.id('title')).getText()).toEqual("God Has a Plan");
    });

  });
});

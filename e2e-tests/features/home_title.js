'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('God Has A Plan', function() {

  browser.get('index.html');

  it('should automatically redirect to /home when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/home");
  });  
  
  describe('home_title', function() {

    beforeEach(function() {
      browser.get('index.html#/home');
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

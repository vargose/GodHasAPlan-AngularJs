'use strict';

describe('home_navbar_mobile', function() {

    beforeEach(function() {
        browser.get('index.html#/home');
        browser.manage().window().setSize(240, 640);
        element(by.id('mainmenu-expander')).click();
    });

    it('should have a home link with God Has a Plan', function() {
        expect(element(by.id('mainmenu-home-link')).getText()).toEqual("God Has a Plan");
    });

    it('should have a link for the Bible page', function() {
        expect(element(by.id('mainmenu-bible-link')).getText()).toEqual("Bible");
    });

    it('should have a link for the Studies page"', function() {
        var studiesLink = element(by.id('mainmenu-studies-link'));
        browser.driver.wait(protractor.until.elementIsVisible(studiesLink));
        expect(studiesLink.getText()).toEqual("Studies");
    });
    
    it('should have a link for the Devotionals page"', function() {
        var devotionalsLink = element(by.id('mainmenu-devotionals-link'));
        browser.driver.wait(protractor.until.elementIsVisible(devotionalsLink));
        expect(devotionalsLink.getText()).toEqual("Devotionals");
    });
    
    it('should navigate to /home when I click "God Has a Plan" home link', function() {
        element(by.id('mainmenu-home-link')).click();
        expect(browser.getLocationAbsUrl()).toMatch("/home");
    });
    
    it('should navigate to /bible when I click the "Bible" link', function() {
        element(by.id('mainmenu-bible-link')).click();
        expect(browser.getLocationAbsUrl()).toMatch("/bible");
    });

});

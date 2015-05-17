'use strict';

describe('home_navbar_mobile', function() {

    beforeEach(function() {
        browser.get('index.html#/home');
        browser.manage().window().setSize(1024, 768);        
    });

    it('should have a home link with God Has a Plan', function() {
        expect(element(by.id('mainmenu-home-link')).getText()).toEqual("God Has a Plan");
    });

    it('should have a link for the Bible page', function() {
        expect(element(by.id('mainmenu-bible-link')).getText()).toEqual("Bible");
    });

    it('should have a link for the Studies page"', function() {
        expect(element(by.id('mainmenu-studies-link')).getText()).toEqual("Studies");
    });
    
    it('should have a link for the Devotionals page"', function() {
        expect(element(by.id('mainmenu-devotionals-link')).getText()).toEqual("Devotionals");
    });
    
    it('should navigate to /home when I click "God Has a Plan" home link', function() {
        element(by.id('mainmenu-home-link')).click();
        expect(browser.getLocationAbsUrl()).toMatch("/home");
    });

});

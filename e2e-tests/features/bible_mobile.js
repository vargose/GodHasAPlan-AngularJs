'use strict';

describe('bible', function() {

    beforeEach(function() {
        browser.get('index.html#/bible');
        browser.manage().window().setSize(240, 640);
    });

    it('should have a version selector', function() {
        expect(element(by.id('version-selector')).isPresent()).toBe(true);
    });
    
    it('should have a default version selection of "Version"', function() {
        expect(element(by.id('version-selector')).$('option:checked').getText()).toEqual('Version');
    });

    

});

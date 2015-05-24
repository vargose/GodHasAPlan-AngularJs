'use strict';

describe('bible', function() {

    beforeEach(function() {
        browser.get('index.html#/bible');
        browser.manage().window().setSize(240, 400);
    });

    it('should have a version selector', function() {
        expect(element(by.id('version-selector')).isPresent()).toBe(true);
    });

    

});

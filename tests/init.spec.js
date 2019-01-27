describe('Webdriver.io -', () => {

    it('should do some chai assertions', () => {
        browser.url('https://webdriver.io');

        const browserTitle = browser.getTitle();
        
        browserTitle.should.be.equal('WebdriverIO · Next-gen WebDriver test framework for Node.js');
    });
});
describe('Banners list page -', () => {

    before(() => {
        browser.url(`${browser.config.baseUrl}/AdsManagementUI`);
    });

    it('should have correct title', () => {
        const browserTitle = browser.getTitle();
        
        browserTitle.should.be.equal('Banners - Adform');
    });
});
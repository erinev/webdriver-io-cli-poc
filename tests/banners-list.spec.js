const AdsOverviewPageClass = require('../page-objects/ads-overview-page');
const AdsOverviewPage = new AdsOverviewPageClass();

describe('Ads overview page -', () => {

    before(() => {
        AdsOverviewPage.open();
    });

    it('should have correct title', () => {
        const pageTitle = AdsOverviewPage.getTitle();
        
        pageTitle.should.be.equal('Banners - Adform');
    });
});
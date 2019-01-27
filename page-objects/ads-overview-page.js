const BasePageClass = require('./base-page');
const PageUtil = require('../utils/page-util');

module.exports = class AdsOverviewPage extends BasePageClass {

    get loadingScreen() { return $('#loading-screen'); }
    get adsTableHeader() { return $('#adsTableHeader'); }

    open() {
        super.open(`${browser.config.baseUrl}/AdsManagementUI`);

        PageUtil.waitUntilElementIsNoLongerDisplayed(this.loadingScreen);
        PageUtil.waitUntilElementIsDisplayed(this.adsTableHeader);
    }
}

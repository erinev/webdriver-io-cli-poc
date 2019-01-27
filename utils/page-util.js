module.exports = class PageUtil {

    static waitUntilElementIsDisplayed(element) {
        element.waitForDisplayed(browser.config.waitforTimeout);
    };

    static waitUntilElementIsNoLongerDisplayed(element) {
        const reverseCondition = true;
        
        element.waitForDisplayed(browser.config.waitforTimeout, reverseCondition);
    };
}

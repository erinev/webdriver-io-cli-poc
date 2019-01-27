module.exports = class PageUtil {

    static waitUntilElementIsDisplayed(element) {
        element.waitForDisplayed(browser.config.waitforTimeout);
    };

    static waitUntilElementIsNoLongerDisplayed(element) {
        const reverseCondition = true;
        
        element.waitForDisplayed(browser.config.waitforTimeout, reverseCondition);
    };

    static getExistingElement(selector, element) {
        let returnedElement;
        if (element) {
            browser.waitUntil(
                () => element.$(selector).isExisting() && element.$(selector).value, 
                null, 
                `$(${element.selector}).$(${selector}) does not exist`);
            returnedElement = element.$(selector);
        } else {
            browser.waitUntil(
                () => $(selector).isExisting() && $(selector).value, 
                null, 
                `$(${selector}) does not exist`);
            returnedElement = $(selector);
        }
        return returnedElement;
    };
    
    static getExistingVisibleElement(selector, elem) {
        const el = getExistingElement(selector, elem);
        el.waitForVisible();
        return el;
    };
}

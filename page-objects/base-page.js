module.exports = class BasePage {

    open(url) {
        browser.url(url);
    }

    getTitle() {
        return browser.getTitle();
    }

    getUrl() {
        return browser.getUrl();
    }
}

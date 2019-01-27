const BasePageClass = require('./base-page');
const PageUtil = require('../utils/page-util');

module.exports = class LoginPage extends BasePageClass {

    get usernameInput() { return $('input[name="username"]'); }
    get passwordInput() { return $('input[name="password"]'); }
    get loginButton() { return $('button.sign-in'); }

    open() {
        super.open(`${browser.config.baseUrl}/passport`);

        PageUtil.waitUntilElementIsDisplayed(this.loginButton);
    }

    login(username, password) {
        this.open();

        this.usernameInput.setValue(username);
        this.passwordInput.setValue(password);

        this.loginButton.click();

        PageUtil.waitUntilElementIsNoLongerDisplayed(this.loginButton);
    }
}

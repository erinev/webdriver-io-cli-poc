exports.config = {
    runner: 'local',
    sync: true,

    protocol: 'http',
    hostname: 'localhost',
    port: 4444,
    path: '/wd/hub',

    baseUrl: 'http://localhost',

    maxInstances: 1,
    capabilities: [
        {
            maxInstances: 1,
            browserName: 'chrome'
        }
    ],

    logLevel: 'error',
    deprecationWarnings: true,
    bail: 1,

    waitforTimeout: 60 * 1000,
    waitforInterval: 500,
    connectionRetryTimeout: 90 * 1000,
    connectionRetryCount: 3,

    specs: [
        './tests/**/*.spec.js'
    ],
    exclude: [

    ],

    framework: 'mocha',
    mochaOpts: {
        timeout: 60 * 1000,
    },

    reporters: ['spec'],
    
    /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    before: function (capabilities, specs) {
        // Chai assertion lib initialization
        const chai = require('chai');
        global.expect = chai.expect;
        chai.Should();
    },
    /**
     * Function to be executed after a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
     * @param {Object} test test details
     */
    afterTest: function (test) {
        if(!test.passed) {
            browser.saveScreenshot(`./failed-tests-screenshots/${test.fullTitle}.png`);
        }
    }
}

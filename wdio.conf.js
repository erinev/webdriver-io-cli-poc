const chai = require('chai');
const mkdirp = require('mkdirp');
const rimraf = require('rimraf');

exports.config = {
    runner: 'local',
    sync: true,

    protocol: 'http',
    hostname: 'localhost',
    port: 4444,
    path: '/wd/hub',

    baseUrl: 'http://localhost',
    failedTestsScreenshotDirectoryName: './failed-tests-screenshots',

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
        ui: 'bdd',
        timeout: 60 * 1000,
        compilers: ['js:@babel/register']
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
        global.expect = chai.expect;
        chai.Should();

        // Prepare failed tests screenshots folder
        rimraf(this.failedTestsScreenshotDirectoryName, () => {});
        mkdirp(this.failedTestsScreenshotDirectoryName, () => {})
    },
    /**
     * Function to be executed after a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
     * @param {Object} test test details
     */
    afterTest: function (test) {
        // Take a screenshot of page after failed test
        if(!test.passed) {
            browser.saveScreenshot(`${this.failedTestsScreenshotDirectoryName}/${test.fullTitle}.png`);
        }
    }
}

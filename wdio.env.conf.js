const args = require('yargs').argv;
const config = require('./wdio.conf.js').config;

if (args.username) {
    config.username = args.username;
} else {
    throw `Required argument '-- username' value was not provided!`;
}

if (args.password) {
    config.password = args.password;
} else {
    throw `Required argument '-- password' value was not provided!`;
}

const environments = {
    dev1: {
        baseUrl: 'https://www.dev1.adform.com'
    },
    dev3: {
        baseUrl: 'https://www.dev3.adform.com'
    },
    preprod: {
        baseUrl: 'https://www.pre1.root.adform.com'
    },
    prod: {
        baseUrl: 'https://www.adform.com'
    }
};

config.environment = 'prod';
//config.environment = args.environment || 'prod'; //TODO: after all ENV's will be supported

const environment = environments[config.environment] || {};
if (environment == {}) {
    throw `Not supported argument '-- enviroment' value was provided! Supported values ['dev1', 'dev3', 'preprod', 'prod']`;
}

Object.assign(config, environment);

exports.config = config;

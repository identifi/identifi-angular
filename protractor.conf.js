'use strict';

var paths = require('./.yo-rc.json')['generator-gulp-angular'].props.paths;

// An example configuration file.
exports.config = {
  // The address of a running selenium server.
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  //seleniumServerJar: deprecated, this should be set on node_modules/protractor/config.json
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
       args: ["--disable-gpu", "--window-size=800,600" ]
     }
  },

  baseUrl: 'file://' + __dirname + '/dist/index.html',
  onPrepare: function() {
      // By default, Protractor use data:text/html,<html></html> as resetUrl, but
      // location.replace from the data: to the file: protocol is not allowed
      // (we'll get ‘not allowed local resource’ error), so we replace resetUrl with one
      // with the file: protocol (this particular one will open system's root folder)
      browser.resetUrl = 'file://';
  },

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: [paths.e2e + '/**/*.js'],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};

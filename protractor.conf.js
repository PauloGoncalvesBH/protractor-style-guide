"use strict";

const SpecReporter = require("jasmine-spec-reporter").SpecReporter;
const AllureReporter = require("jasmine-allure-reporter");

const constants = require("./samplePage/constant.js");

module.exports.config = {
  baseUrl: constants.BASE_URL,
  specs: ["specs/*.spec.js"],
  capabilities: {
    browserName: "chrome"
  },
  onPrepare: () => {
    browser.waitForAngularEnabled(false);
    jasmine.getEnv().addReporter(
      new SpecReporter({
        suite: {
          displayNumber: true
        },
        spec: {
          displayFailed: true,
          displayPending: true,
          displayDuration: true,
          displayStackTrace: true
        },
        summary: {
          displayFailed: true
        }
      })
    );
    jasmine.getEnv().addReporter(new AllureReporter());
    jasmine.getEnv().afterEach(function(done) {
      browser.takeScreenshot().then(function(png) {
        allure.createAttachment(
          "Screenshot",
          function() {
            return new Buffer(png, "base64");
          },
          "image/png"
        )();
        done();
      });
    });
  },
  jasmineNodeOpts: {
    random: true,
    print: function() {}
  }
};

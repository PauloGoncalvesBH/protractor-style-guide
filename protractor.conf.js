"use strict";

const SpecReporter = require("jasmine-spec-reporter").SpecReporter;
const AllureReporter = require("jasmine-allure-reporter");

module.exports.config = {
  baseUrl: "http://homologacao.4yousee.com.br/admin/",
  specs: ["specs/*.spec.js"],
  capabilities: {
    browserName: "chrome",
    chromeOptions: {
      args: ["--headless", "--disable-gpu", "--window-size=1024,768"]
    }
  },
  params: {
    login: {
      usuario: "avaliacao",
      senha: "4yousee"
    }
  },
  onPrepare: () => {
    browser.ignoreSynchronization = true;
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

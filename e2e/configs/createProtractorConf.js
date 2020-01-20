const SpecReporter = require('jasmine-spec-reporter').SpecReporter;

module.exports = providedConfig => {
  const defaultConfig = {
    baseUrl: 'http://automationpractice.com/index.php',
    directConnect: true,
    specs: ['../spec/*.spec.js'],
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
      afterEach(() => {
        browser.manage().deleteAllCookies();
        return browser.executeScript('sessionStorage.clear(); localStorage.clear();');
      });
    },
    jasmineNodeOpts: {
      print: function() {}
    }
  };

  return Object.assign({}, defaultConfig, providedConfig);
};

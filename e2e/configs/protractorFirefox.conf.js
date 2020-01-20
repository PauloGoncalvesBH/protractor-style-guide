module.exports.config = require('./createProtractorConf.js')({
  capabilities: {
    browserName: 'firefox',
    marionette: true
  }
});

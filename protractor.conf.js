'use strict'

const SpecReporter = require('jasmine-spec-reporter').SpecReporter
const AllureReporter = require('jasmine-allure-reporter');

module.exports.config = {
  baseUrl: 'http://homologacao.4yousee.com.br/admin/',
  specs: ['specs/*.spec.js'],
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: [
        '--headless',
        '--disable-gpu',
        '--window-size=1024,768'
      ]
    }
  },
  params: {
    // Os valores de USUARIO e SENHA são definidos como variável de ambiente do usuário.
    // Isso é para garantir segurança, não versionando informações privadas.
    login: {
      usuario: process.env.USUARIO,
      senha: process.env.SENHA
    }
  },
  // highlightDelay: 1000,
  onPrepare: () => {
    browser.ignoreSynchronization = true
    jasmine.getEnv().addReporter(new SpecReporter({
      displayFailuresSummary: true,
      displayFailedSpec: true,
      displaySuiteNumber: true,
      displaySpecDuration: true
    }))
    jasmine.getEnv().addReporter(new AllureReporter());
    jasmine.getEnv().afterEach(function(done){
      browser.takeScreenshot().then(function (png) {
        allure.createAttachment('Screenshot', function () {
          return new Buffer(png, 'base64')
        }, 'image/png')();
        done();
      })
    });
  },
  jasmineNodeOpts: {
    random: true
  }
}

"use strict"

const SpecReporter = require("jasmine-spec-reporter").SpecReporter;
const Jasmine2HtmlReporter = require("protractor-jasmine2-html-reporter");

module.exports.config = {
	baseUrl: "http://homologacao.4yousee.com.br/admin/",
	specs: ["specs/*.spec.js"],
	capabilities: {
		browserName: "chrome",
		chromeOptions: {
			args: [
				"--headless",
				"--disable-gpu",
				"--window-size=1024,768",
			],
		},
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
		browser.ignoreSynchronization = true;
		jasmine.getEnv().addReporter(new SpecReporter({
			displayFailuresSummary: true,
			displayFailedSpec: true,
			displaySuiteNumber: true,
			displaySpecDuration: true
		}));
		jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
			takeScreenshots: true,
			savePath: "report/",
			fileNameDateSuffix: true,
			cleanDestination: true,
			takeScreenshotsOnlyOnFailures: true
		}));
	},
	jasmineNodeOpts: {
		random: true
	},
};
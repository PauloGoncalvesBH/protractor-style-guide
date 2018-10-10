"use strict"

const SpecReporter = require("jasmine-spec-reporter").SpecReporter;
const Jasmine2HtmlReporter = require("protractor-jasmine2-html-reporter");

module.exports.config = {

	directConnect: true,
	
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
	
	baseUrl: "http://homologacao.4yousee.com.br/admin/",
	
	specs: ["specs/*.spec.js"],
	
	params: {
		Login: {
            Usuario: "avaliacao",
            Senha: "4yousee"
		}
	},

	onPrepare: () => {
		// Organiza os resultados no Prompt de Comando.
		jasmine.getEnv().addReporter(new SpecReporter({
			displayFailuresSummary: true,
			displayFailedSpec: true,
			displaySuiteNumber: true,
			displaySpecDuration: true
		}));
		
		// Gera relatório de resultados no diretório especificado.
		jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
			takeScreenshots: true,
			savePath: "report/",
			fileNamePrefix: "Automação Paulo Gonçalves",
			fileNameSeparator: "-",
			fileNameDateSuffix: true,
			cleanDestination: true,
			takeScreenshotsOnlyOnFailures: true
		}));

		browser.driver.manage().window().maximize();

		browser.waitForAngularEnabled(false);
	},

	// highlightDelay: 3000,
	
};
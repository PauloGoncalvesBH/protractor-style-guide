'use strict'

const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
const Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

module.exports.config =
{
	directConnect: true,	
	
	multiCapabilities:
	[
		{'browserName': 'chrome'}
		// ,{'browserName': 'firefox'}
	],
	maxSessions: 1,
	
	baseUrl: 'http://homologacao.4yousee.com.br/admin/',
	
	suites:
	{
		// Testes
		QueroMeCadastrar: 'specs/ClienteAgencia.spec.js'
	},
	
	params:
	{
		/* Tempo utilizado em: 
		1 - No ImplicitlyWait no onPrepare do Conf.js
		2 - No método AguardarElemento no helper.js */
		TempoEmMilissegundosTimeout: 10000,
	},

	onPrepare: function()
	{
		// Organiza os resultados no Prompt de Comando.
		jasmine.getEnv().addReporter(new SpecReporter(
		{
			displayFailuresSummary: true,
			displayFailedSpec: true,
			displaySuiteNumber: true,
			displaySpecDuration: true
		}));
		
		// Gera relatório de resultados no diretório especificado.
		jasmine.getEnv().addReporter(new Jasmine2HtmlReporter(
		{
			takeScreenshots: true,
			savePath: 'report/',
			fileNamePrefix: 'Automação Paulo Gonçalves',
			fileNameSeparator: '-',
			fileNameDateSuffix: true,
			cleanDestination: false,
			takeScreenshotsOnlyOnFailures: false
		}));
		
    	browser.manage().timeouts().implicitlyWait(browser.params.TempoEmMilissegundosTimeout)
		browser.driver.manage().window().maximize();

		// Para garantir a sincronia do script de teste com a página a ser automatizada. A página não foi feita em Angular JS.
		browser.waitForAngularEnabled(false);
	},
};
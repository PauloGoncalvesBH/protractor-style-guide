'use strict'

const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
const Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

module.exports.config =
{
	directConnect: true,	
	
   	multiCapabilities:
	[
		{'browserName': 'chrome'}
	],
	maxSessions: 1,
	
	baseUrl: 'http://homologacao.4yousee.com.br/admin/',
	
	suites:
	{
		// Testes
		QueroMeCadastrar: 'specs/teste.spec.js'
	},
	
	params:
	{
		/* Tempo utilizado em: 
		1 - No ImplicitlyWait no onPrepare do Conf.js
		2 - No método AguardarElemento no helper.js */
		TempoEmMilissegundosTimeout: 5000,
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
			fileNamePrefix: 'Cadastro de Clientes e Agências',
			fileNameSeparator: '-',
			fileNameDateSuffix: true,
			cleanDestination: false,
			takeScreenshotsOnlyOnFailures: true
		}));
		
    	browser.manage().timeouts().implicitlyWait(browser.params.TempoEmMilissegundosTimeout)
		// browser.driver.manage().window().maximize();
		browser.waitForAngularEnabled(false);
	},
};
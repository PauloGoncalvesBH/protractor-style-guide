'use strict'

const shortid = require('shortid');
require('./ElementFinder.js');

class Helper {

	constructor() {
	}

	AguardarElementoEScrollAteElemento(elemento) {
		this.AguardarElemento(elemento);
		this.ScrollAteElemento(elemento);
	}

	AguardarElemento(elemento) {
		browser.wait(protractor.ExpectedConditions.elementToBeClickable(elemento), browser.params.TempoEmMilissegundosTimeout)
	}

	ScrollAteElemento(elemento) {
		browser.executeScript('arguments[0].scrollIntoView(true);', elemento); 
	}
    
	RecarregarPagina() {
		browser.refresh();
	}

	GerarCaracteres() {
		return shortid.generate();
	}

	GerarEmail() {
		return this.GerarCaracteres() + '@4yousee.com.br';
	}

	GerarUsuario() {
		return this.GerarCaracteres() + this.GerarCaracteres();
	}

}

module.exports = Helper;
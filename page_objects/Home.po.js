"use strict"

const protractorHelper = require("protractor-helper");

class Home {

	constructor() {
		this.ConteudoButton = element(by.cssContainingText(
			"a[href='#']",
			"Conteúdo"
		));
		this.conteudoClienteAgenciaButton = element(by.css(
			"a[href='"
			+ browser.baseUrl +
			"cliente.php?ac=listar']"
		));
	};

	acessarClienteAgencia() {
		protractorHelper.clickWhenClickable(this.ConteudoButton);
		protractorHelper.clickWhenClickable(this.conteudoClienteAgenciaButton);
	};

};

module.exports = new Home();
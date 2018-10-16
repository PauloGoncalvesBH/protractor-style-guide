"use strict"

const helper = require("protractor-helper");

class Home {
	constructor() {
		this.ConteudoButton = element(by.cssContainingText(
			"a[href='#']",
			"Conteúdo"
		));
		this.conteudoClienteAgenciaButton = element(by.css(
			"a[href='" +
			browser.baseUrl +
			"cliente.php?ac=listar']"
		));
	};

	acessarClienteAgencia() {
		helper.clickWhenClickable(this.ConteudoButton);
		helper.clickWhenClickable(this.conteudoClienteAgenciaButton);
	};
};

module.exports = new Home();
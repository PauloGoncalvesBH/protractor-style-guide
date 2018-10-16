"use strict"

const helper = require("protractor-helper");

class Login {
	constructor() {
		this.usuarioInput = element(by.name("usr_log"));
		this.senhaInput = element(by.name("usr_sen"));
		this.entrarButton = element(by.css("[value='Entrar']"));
	}

	visit() {
		browser.get("index.php");
	}

	fillFormAndSubmit(usuario = "", senha = "") {
		helper.fillFieldWithTextWhenVisible(this.usuarioInput, usuario);
		helper.fillFieldWithTextWhenVisible(this.senhaInput, senha);
		helper.clickWhenClickable(this.entrarButton);
	}
}

module.exports = new Login();
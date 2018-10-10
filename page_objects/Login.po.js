"use strict"

const protractorHelper = require("protractor-helper");
const helper = require("../helper");

class Login {
	
	constructor() {
		this.usuarioInput = element(by.name("usr_log"));
		this.senhaInput = element(by.name("usr_sen"));
		this.entrarButton = element(by.css("[value='Entrar']"));
	}

	visit() {
		browser.get("index.php");
	}

	login(
		usuario = helper.requiredParam(login, "usuario"),
		senha = helper.requiredParam(login, "senha")
	) {
		protractorHelper.fillFieldWithTextWhenVisible(this.usuarioInput, usuario);
		protractorHelper.fillFieldWithTextWhenVisible(this.senhaInput, senha);
		protractorHelper.clickWhenClickable(this.entrarButton);
	}

	logout() {
		browser.get("index.php?ac=logout");
	}

}

module.exports = new Login();
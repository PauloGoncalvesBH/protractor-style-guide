'use strict'

require('../ElementFinder.js');

class Login {

	constructor() {
		// Elementos para login
		this.Usuario = element(by.name('usr_log'));
		this.Senha = element(by.name('usr_sen'));
		this.EntrarButton = element(by.css('[value="Entrar"]'));
	}

	Visita() {
		browser.get('index.php');
	}

	Login(usuario, senha) {
		this.Usuario.EnviarTexto(usuario);
		this.Senha.EnviarTexto(senha);
		this.EntrarButton.Clicar();
	}

	Logout() {
		browser.get('index.php?ac=logout');
	}
	
}

module.exports = Login;
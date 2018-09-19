'use strict'

require('../ElementFinder.js');

class PesquisarClienteAgencia {

	constructor() {
		this.NomeFantasia = element(by.name('nome_fantasia'));
		this.CNPJ = element(by.id('cnpj'));
		
		this.PesquisarButton = element(by.css('[value="Pesquisar"]'));
	}

	Pesquisar(NomeFantasia, CNPJ) {
		this.NomeFantasia.Limpar();
		this.NomeFantasia.EnviarTexto(NomeFantasia);

		this.CNPJ.Limpar();
		this.CNPJ.EnviarTexto(CNPJ);

		this.PesquisarButton.Clicar();
	}
	
}

module.exports = PesquisarClienteAgencia;
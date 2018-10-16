"use strict"

const helper = require("protractor-helper");

class ClienteAgencia {
	constructor() {
		this.adicionarClienteAgenciaButton = element(by.css(
			"a[href='/admin/cliente.php?ac=adicionar']"
		));
		this.agenciaRadio = element(by.css("[value='A']"));
		this.razaoSocialInput = element(by.id("empRazao"));
		this.nomeFantasiaInput = element(by.id("empFantasia"));
		this.emailInput = element(by.id("email"));
		this.adicionarButton = element(by.id("Adicionar"));
		this.pesquisaNomeFantasiaInput = element(by.name("nome_fantasia"));
		this.pesquisaCNPJInput = element(by.id("cnpj"));
		this.pesquisarButton = element(by.css("[value='Pesquisar']"));
	};

	preencherCamposDeCadastroClienteAgencia(razaoSocial = "", nomeFantasia = "", email = "") {
		helper.fillFieldWithTextWhenVisible(this.razaoSocialInput, razaoSocial);
		helper.fillFieldWithTextWhenVisible(this.nomeFantasiaInput, nomeFantasia);
		helper.fillFieldWithTextWhenVisible(this.emailInput, email);
		helper.clickWhenClickable(this.adicionarButton);
	};

	acessarAdicionarClienteAgencia() {
		helper.clickWhenClickable(this.adicionarClienteAgenciaButton);
	};

	cadastrarCliente(razaoSocial = "", nomeFantasia = "", email = "") {
		this.acessarAdicionarClienteAgencia();
		this.preencherCamposDeCadastroClienteAgencia(razaoSocial, nomeFantasia, email);
	};

	cadastrarAgencia(razaoSocial = "", nomeFantasia = "", email = "") {
		this.acessarAdicionarClienteAgencia();
		helper.clickWhenClickable(this.agenciaRadio);
		this.preencherCamposDeCadastroClienteAgencia(razaoSocial, nomeFantasia, email);
	};

	pesquisarClienteAgencia(NomeFantasia = "", CNPJ = "") {
		helper.clearFieldWhenVisibleAndFillItWithText(
            this.pesquisaNomeFantasiaInput,
            NomeFantasia
        );
		helper.clearFieldWhenVisibleAndFillItWithText(
			this.pesquisaCNPJInput,
			CNPJ
		);
		helper.clickWhenClickable(this.pesquisarButton);
	};
};

module.exports = new ClienteAgencia();
"use strict"

const protractorHelper = require("protractor-helper");
const helper = require("../helper");

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

	preencherCamposDeCadastroClienteAgencia(
			razaoSocial = helper.requiredParam(preencherCamposDeCadastroClienteAgencia, "razaoSocial"),
			nomeFantasia = helper.requiredParam(preencherCamposDeCadastroClienteAgencia, "nomeFantasia"),
			email = helper.requiredParam(preencherCamposDeCadastroClienteAgencia, "email")
		) {
		protractorHelper.fillFieldWithTextWhenVisible(this.razaoSocialInput, razaoSocial);
		protractorHelper.fillFieldWithTextWhenVisible(this.nomeFantasiaInput, nomeFantasia);
		protractorHelper.fillFieldWithTextWhenVisible(this.emailInput, email);
		protractorHelper.clickWhenClickable(this.adicionarButton);
	};

	acessarAdicionarClienteAgencia() {
		protractorHelper.clickWhenClickable(
			this.adicionarClienteAgenciaButton
		);
	};

	cadastrarCliente(razaoSocial = "", nomeFantasia = "", email = "") {
		this.acessarAdicionarClienteAgencia();
		this.preencherCamposDeCadastroClienteAgencia(razaoSocial, nomeFantasia, email);
	};

	cadastrarAgencia(razaoSocial = "", nomeFantasia = "", email = "") {
		this.acessarAdicionarClienteAgencia();
		protractorHelper.clickWhenClickable(this.agenciaRadio);
		this.preencherCamposDeCadastroClienteAgencia(razaoSocial, nomeFantasia, email);
	};

	pesquisarClienteAgencia(
		NomeFantasia = helper.requiredParam(
				pesquisarClienteAgencia,
				"NomeFantasia"
			),
		CNPJ = ""
	) {
		protractorHelper.clearFieldWhenVisibleAndFillItWithText(
            this.pesquisaNomeFantasiaInput,
            NomeFantasia
        );
		protractorHelper.clearFieldWhenVisibleAndFillItWithText(
			this.pesquisaCNPJInput,
			CNPJ
		);
		protractorHelper.clickWhenClickable(this.pesquisarButton);
	};
	
};

module.exports = new ClienteAgencia();
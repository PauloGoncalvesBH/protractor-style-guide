"use strict"

const Helper = require("protractor-helper");
const ShortId = require("shortid");

const ClienteAgenciaPage = require("../page_objects/ClienteAgencia.po.js");
const HomePage = require("../page_objects/Home.po.js");
const LoginPage = require("../page_objects/Login.po.js");

describe("Testes de Cadastro de Agência e Cliente", () => {
	beforeEach(() => {
        LoginPage.visit();
        LoginPage.fillFormAndSubmit(browser.params.login.usuario, browser.params.login.senha);
        HomePage.acessarClienteAgencia();
    });
    
    afterEach(() => browser.driver.manage().deleteAllCookies());
	
	it("Validar que o cadastro de um cliente utilizando apenas campos obrigatórios é realizado com sucesso", () => {
        const caracterAleatorio = ShortId.generate();

        ClienteAgenciaPage.cadastrarCliente("Razão Social " + caracterAleatorio, "Nome Fantasia " + caracterAleatorio)
        ClienteAgenciaPage.pesquisarClienteAgencia("Nome Fantasia Automação" + caracterAleatorio);
	});
	
	it("Validar que é impedido de cadastrar um cliente ao deixar de preencher o campo obrigatório 'Nome Fantasia'", () => {
        ClienteAgenciaPage.cadastrarCliente("Razão Social Automação")

        Helper.waitForElementVisibility(ClienteAgenciaPage.nomeFantasiaNaoPreenchidoMessage);
	});
	
	it("Validar que é impedido de cadastrar um cliente ao deixar de preencher o campo obrigatório 'Razão Social'", () => {
        ClienteAgenciaPage.cadastrarCliente(undefined, "Nome Fantasia Automação");

        Helper.waitForElementVisibility(ClienteAgenciaPage.razaoSocialNaoPreenchidaMessage);
	});
	
    it("Validar que é impedido de cadastrar um cliente ao deixar de preencher todos os campos obrigatório", () => {
        ClienteAgenciaPage.cadastrarCliente(undefined, undefined, ShortId.generate() + "@4yousee.com.br");

        Helper.waitForElementVisibility(ClienteAgenciaPage.razaoSocialNaoPreenchidaMessage);
        Helper.waitForElementVisibility(ClienteAgenciaPage.nomeFantasiaNaoPreenchidoMessage);
	});
});
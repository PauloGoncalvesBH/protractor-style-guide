"use strict"

const helper = require("protractor-helper");
const shortid = require("shortid");

const clienteAgenciaPage = require("../page_objects/ClienteAgencia.po.js");
const homePage = require("../page_objects/Home.po.js");
const login = require("../page_objects/Login.po.js");
const mensagens = require("../page_objects/Mensagens.po.js");

describe("Testes de Cadastro de Agência e Cliente", () => {
	beforeEach(() => {
        login.visit();
        login.fillFormAndSubmit(browser.params.login.usuario, browser.params.login.senha);
        homePage.acessarClienteAgencia();
    });
    
    afterEach(() => browser.driver.manage().deleteAllCookies());
	
	it("Validar que o cadastro de um cliente utilizando apenas campos obrigatórios é realizado com sucesso", () => {
        const caracterAleatorio = shortid.generate();

        clienteAgenciaPage.cadastrarCliente("Razão Social " + caracterAleatorio, "Nome Fantasia " + caracterAleatorio)
        clienteAgenciaPage.pesquisarClienteAgencia("Nome Fantasia Automação" + caracterAleatorio);
	});
	
	it("Validar que é impedido de cadastrar um cliente ao deixar de preencher o campo obrigatório 'Nome Fantasia'", () => {
        clienteAgenciaPage.cadastrarCliente("Razão Social Automação")

        helper.waitForElementVisibility(mensagens.nomeFantasiaNaoPreenchido);
	});
	
	it("Validar que é impedido de cadastrar um cliente ao deixar de preencher o campo obrigatório 'Razão Social'", () => {
        clienteAgenciaPage.cadastrarCliente(undefined, "Nome Fantasia Automação");

        helper.waitForElementVisibility(mensagens.razaoSocialNaoPreenchida);
	});
	
    it("Validar que é impedido de cadastrar um cliente ao deixar de preencher todos os campos obrigatório", () => {
        clienteAgenciaPage.cadastrarCliente(undefined, undefined, shortid.generate() + "@4yousee.com.br");

        helper.waitForElementVisibility(mensagens.razaoSocialNaoPreenchida);
        helper.waitForElementVisibility(mensagens.nomeFantasiaNaoPreenchido);
	});
});
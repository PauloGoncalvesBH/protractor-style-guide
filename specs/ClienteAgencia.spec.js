"use strict"

const login = require("../page_objects/Login.po.js");
const clienteAgencia = require("../page_objects/ClienteAgencia.po.js");
const helper = require("../helper.js");
const home = require("../page_objects/Home.po.js");
const mensagens = require("../page_objects/Mensagens.po.js");
const protractorHelper = require("protractor-helper");

describe("Testes de Cadastro de Agência e Cliente", () => {

	beforeEach(() => {
        login.visit();
        login.login(browser.params.Login.Usuario, browser.params.Login.Senha);
        home.acessarClienteAgencia();
    });
    
    afterEach(() => login.logout());
	
	it("Validar que o cadastro de um cliente utilizando apenas campos obrigatórios é realizado com sucesso", () => {
        const caracterAleatorio = helper.gerarCaracteres();

        clienteAgencia.cadastrarCliente("Razão Social " + caracterAleatorio, "Nome Fantasia " + caracterAleatorio)
        clienteAgencia.pesquisarClienteAgencia("Nome Fantasia Automação" + caracterAleatorio);
	});
	
	fit("Validar que é impedido de cadastrar um cliente ao deixar de preencher o campo obrigatório 'Nome Fantasia'", () => {
        clienteAgencia.cadastrarCliente("Razão Social Automação")

        protractorHelper.waitForElementVisibility(mensagens.nomeFantasiaNaoPreenchido);
	});
	
	it("Validar que é impedido de cadastrar um cliente ao deixar de preencher o campo obrigatório 'Razão Social'", () => {
        clienteAgencia.cadastrarCliente(undefined, "Nome Fantasia Automação");

        protractorHelper.waitForElementVisibility(mensagens.razaoSocialNaoPreenchida);
	});
	
    it("Validar que é impedido de cadastrar um cliente ao deixar de preencher todos os campos obrigatório", () => {
        clienteAgencia.cadastrarCliente(undefined, undefined, helper.gerarEmail());

        protractorHelper.waitForElementVisibility(mensagens.razaoSocialNaoPreenchida);
        protractorHelper.waitForElementVisibility(mensagens.nomeFantasiaNaoPreenchido);
	});
	
});
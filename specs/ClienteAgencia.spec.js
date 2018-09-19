'use strict'

const Login = require('../page_objects/Login.po.js');
const ClienteAgencia = require('../page_objects/ClienteAgencia.po.js');
const Helper = require('../helper.js');
const Home = require('../page_objects/Home.po.js');
const Mensagens = require('../page_objects/Mensagens.po.js');

describe('Testes de Cadastro de Agência e Cliente', ()=>
{
    const login = new Login();
    const clienteAgencia = new ClienteAgencia();
    const helper = new Helper();
    const home = new Home();
    const mensagens = new Mensagens();
	
	beforeEach(function()
	{
		// arrange
        login.Visita();
        login.Login('avaliacao', '4yousee')
        home.AcessarClienteAgencia();
    });
    
    afterEach(function()
    {
        login.Logout();
    });

    afterAll(function(){
        browser.close();
    });
	
	it('Validar que o cadastro de um cliente utilizando apenas campos obrigatórios é realizado com sucesso', ()=> {
        // act		        
        const caracterAleatorio = helper.GerarCaracteres();
        const objCliente = {razaosocial: 'Razão Social ' + caracterAleatorio, nomefantasia: 'Nome Fantasia ' + caracterAleatorio};

        clienteAgencia.CadastrarCliente(objCliente);

        clienteAgencia.PesquisarClienteAgencia('Nome Fantasia Automação' + caracterAleatorio, '');
	});
	
	it('Validar que é impedido de cadastrar um cliente ao deixar de preencher o campo obrigatório "Nome Fantasia"', ()=> {
        // act
        const objCliente = {razaosocial: 'Razão Social Automação'};

        clienteAgencia.CadastrarCliente(objCliente);

		// assert
		expect(mensagens.NomeFantasiaNaoPreenchido.isDisplayed()).toBe(true);
	});
	
	it('Validar que é impedido de cadastrar um cliente ao deixar de preencher o campo obrigatório "Razão Social"', ()=> {
        // act
        const objCliente = {nomefantasia: 'Nome Fantasia Automação'};

        clienteAgencia.CadastrarCliente(objCliente);

		// assert
		expect(mensagens.RazaoSocialNaoPreenchida.isDisplayed()).toBe(true);
	});
	
    it('Validar que é impedido de cadastrar um cliente ao deixar de preencher todos os campos obrigatório', ()=> {
        // act
        const objCliente = {email: helper.GerarEmail()};
        clienteAgencia.CadastrarCliente(objCliente);

		// assert
		expect(mensagens.RazaoSocialNaoPreenchida.isDisplayed()).toBe(true);
		expect(mensagens.NomeFantasiaNaoPreenchido.isDisplayed()).toBe(true);
	});
	
});
'use strict'

const Login = require('../page_objects/Login.po.js');
const ClienteAgencia = require('../page_objects/ClienteAgencia.po.js');
const Helper = require('../helper.js');
const Home = require('../page_objects/Home.po.js');

describe('Testes de Cadastro de Agência e Cliente', ()=>
{
    const login = new Login();
    const clienteAgencia = new ClienteAgencia();
    const helper = new Helper();
    const home = new Home();
	
	beforeEach(function()
	{
		// arrange
        login.Visita();
        login.Login('avaliacao', '4yousee')
    });
    
    afterEach(function()
    {
        login.Logout();
    });

    afterAll(function(){
        browser.close();
    });
	
	it('Validar com sucesso o cadastro de um cliente utilizando apenas campos obrigatórios', ()=> {
        // act		
        home.AcessarClienteAgencia();
        
        const caracterAleatorio = helper.GerarCaracteres();
        const objCliente = {razaosocial: 'Razão Social Automação' + caracterAleatorio, nomefantasia: 'Nome Fantasia Automação' + caracterAleatorio};

        clienteAgencia.CadastrarCliente(objCliente);

        clienteAgencia.PesquisarClienteAgencia('Nome Fantasia Automação' + caracterAleatorio, '');
        // browser.sleep(4000);
	});
	
});
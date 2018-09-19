'use strict'

const Login = require('../page_objects/Login.po.js');
const AdicionarClienteAgencia = require('../page_objects/AdicionarClienteAgencia.po.js');
const PesquisarClienteAgencia = require('../page_objects/PesquisarClienteAgencia.po');
const Helper = require('../helper.js');

describe('Testes de Cadastro de Agência e Cliente', ()=>
{
    const login = new Login();
    const adicionarClienteAgencia = new AdicionarClienteAgencia();
    const pesquisarClienteAgencia = new PesquisarClienteAgencia();
    const helper = new Helper();
	
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
	
	it('Validar com sucesso o cadastro de um cliente utilziando apenas campos obrigatórios', ()=> {
		// act		
		adicionarClienteAgencia.Visita();
        
        const caracterAleatorio = helper.GerarCaracteres();
        const objCliente = {razaosocial: 'Razão Social Automação' + caracterAleatorio, nomefantasia: 'Nome Fantasia Automação' + caracterAleatorio};

        adicionarClienteAgencia.CadastroCliente(objCliente);

        pesquisarClienteAgencia.Pesquisar('Nome Fantasia Automação' + caracterAleatorio, '');
        browser.sleep(4000);
	});
	
});
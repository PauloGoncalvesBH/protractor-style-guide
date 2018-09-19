'use strict'

require('../ElementFinder.js');

class ClienteAgencia {

	constructor() {
		// Botão de acesso a telas
		this.AdicionarClienteAgencia = element(by.css('a[href="/admin/cliente.php?ac=adicionar"]'));

		// Cadastro de Cliente e Agência
		this.ClienteRadio = element(by.css('[value="C"]'));
		this.AgenciaRadio = element(by.css('[value="A"]'));

		this.RazaoSocial = element(by.id('empRazao'));
		this.NomeFantasia = element(by.id('empFantasia'));
		this.CNPJ = element(by.id('empCNPJ'));
		this.Atuacao = element(by.id('empAtuacao'));
		this.Endereco = element(by.id('endLogradouro'));
		this.Numero = element(by.id('endNumero'));
		this.Complemento = element(by.id('endComplemento'));
		this.Bairro = element(by.id('endBairro'));
		this.Cidade = element(by.id('endCidade'));
		this.CEP = element(by.id('endCEP'));
		this.Estado = element(by.id('endEstado'));
		this.Email = element(by.id('email'));
		this.NomeContato = element(by.id('nomeContato'));
		this.TelefoneContatoDDD = element(by.id('telContato_ddd'));
		this.TelefoneContato = element(by.id('telContato'));
		this.TelefoneCelularDDD = element(by.id('telCelular_ddd'));
		this.TelefoneCelular = element(by.id('telCelular'));

		this.AdicionarButton = element(by.id('Adicionar'));

		// Pesquisar Cliente e Agência
		this.PesquisaNomeFantasia = element(by.name('nome_fantasia'));
		this.PesquisaCNPJ = element(by.id('cnpj'));
		
		this.PesquisarButton = element(by.css('[value="Pesquisar"]'));
	}

	AcessarAdicionarClienteAgencia() {
		this.AdicionarClienteAgencia.Clicar();
	}

	CadastrarCliente(objeto)
	{
		this.AcessarAdicionarClienteAgencia();
		this._PreencherCamposDeCadastroClienteAgencia(objeto);
	}

	CadastrarAgencia(objeto)
	{
		this.AcessarAdicionarClienteAgencia();
		this.AgenciaRadio.Clicar();
		this._PreencherCamposDeCadastroClienteAgencia(objeto);
	}

	_PreencherCamposDeCadastroClienteAgencia(objetoCadastro) {
		this.RazaoSocial.EnviarTexto(objetoCadastro.razaosocial);
		this.NomeFantasia.EnviarTexto(objetoCadastro.nomefantasia);
		this.CNPJ.EnviarTexto(objetoCadastro.cnpj);
		this.Atuacao.EnviarTexto(objetoCadastro.atuacao);
		this.Endereco.EnviarTexto(objetoCadastro.endereco);
		this.Numero.EnviarTexto(objetoCadastro.numero);
		this.Complemento.EnviarTexto(objetoCadastro.complemento);
		this.Bairro.EnviarTexto(objetoCadastro.bairro);
		this.Cidade.EnviarTexto(objetoCadastro.cidade);
		this.CEP.EnviarTexto(objetoCadastro.cep);
		this.Estado.EnviarTexto(objetoCadastro.estado);
		this.Email.EnviarTexto(objetoCadastro.email);
		this.NomeContato.EnviarTexto(objetoCadastro.nomecontato);
		this.TelefoneContatoDDD.EnviarTexto(objetoCadastro.telefonecontatoddd);
		this.TelefoneContato.EnviarTexto(objetoCadastro.telefonecontato);
		this.TelefoneCelularDDD.EnviarTexto(objetoCadastro.telefonecelularddd);
		this.TelefoneCelular.EnviarTexto(objetoCadastro.telefonecelular);

		this.AdicionarButton.Clicar();
	}

	PesquisarClienteAgencia(NomeFantasia, CNPJ) {
		this.PesquisaNomeFantasia.Limpar();
		this.PesquisaNomeFantasia.EnviarTexto(NomeFantasia);

		this.PesquisaCNPJ.Limpar();
		this.PesquisaCNPJ.EnviarTexto(CNPJ);

		this.PesquisarButton.Clicar();
	}
	
}

module.exports = ClienteAgencia;
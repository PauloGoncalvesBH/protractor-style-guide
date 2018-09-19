'use strict'

require('../ElementFinder.js');

class AdicionarClienteAgencia {

	constructor() {
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
	}

	Visita() {
		browser.get('cliente.php?ac=adicionar');
	}

	CadastroCliente(objeto)
	{
		this.CamposDeCadastro(objeto);
	}

	CadastroAgencia(objeto)
	{
		this.AgenciaRadio.Clicar();
		this.CamposDeCadastro(objeto);
	}

	CamposDeCadastro(objeto) {
		this.RazaoSocial.EnviarTexto(objeto.razaosocial);
		this.NomeFantasia.EnviarTexto(objeto.nomefantasia);
		this.CNPJ.EnviarTexto(objeto.cnpj);
		this.Atuacao.EnviarTexto(objeto.atuacao);
		this.Endereco.EnviarTexto(objeto.endereco);
		this.Numero.EnviarTexto(objeto.numero);
		this.Complemento.EnviarTexto(objeto.complemento);
		this.Bairro.EnviarTexto(objeto.bairro);
		this.Cidade.EnviarTexto(objeto.cidade);
		this.CEP.EnviarTexto(objeto.cep);
		this.Estado.EnviarTexto(objeto.estado);
		this.Email.EnviarTexto(objeto.email);
		this.NomeContato.EnviarTexto(objeto.nomecontato);
		this.TelefoneContatoDDD.EnviarTexto(objeto.telefonecontatoddd);
		this.TelefoneContato.EnviarTexto(objeto.telefonecontato);
		this.TelefoneCelularDDD.EnviarTexto(objeto.telefonecelularddd);
		this.TelefoneCelular.EnviarTexto(objeto.telefonecelular);

		this.AdicionarButton.Clicar();
	}
	
}

module.exports = AdicionarClienteAgencia;
'use strict'

const Helper = require('protractor-helper')

class ClienteAgencia {
  constructor () {
    this.adicionarClienteAgenciaButton = element(by.css(
      "a[href='/admin/cliente.php?ac=adicionar']"
    ))
    this.agenciaRadio = element(by.css("[value='A']"))
    this.razaoSocialInput = element(by.id('empRazao'))
    this.nomeFantasiaInput = element(by.id('empFantasia'))
    this.emailInput = element(by.id('email'))
    this.adicionarButton = element(by.id('Adicionar'))
    this.pesquisaNomeFantasiaInput = element(by.name('nome_fantasia'))
    this.pesquisaCNPJInput = element(by.id('cnpj'))
    this.pesquisarButton = element(by.css("[value='Pesquisar']"))
    this.nomeFantasiaNaoPreenchidoMessage = element(by.cssContainingText(
      'p',
      'O campo Nome fantasia não foi preenchido.'
    ))
    this.razaoSocialNaoPreenchidaMessage = element(by.cssContainingText(
      'p',
      'O campo Razão social não foi preenchido.'
    ))
  };

  preencherCamposDeCadastroClienteAgencia (razaoSocial = '', nomeFantasia = '', email = '') {
    Helper.fillFieldWithTextWhenVisible(this.razaoSocialInput, razaoSocial)
    Helper.fillFieldWithTextWhenVisible(this.nomeFantasiaInput, nomeFantasia)
    Helper.fillFieldWithTextWhenVisible(this.emailInput, email)
    Helper.clickWhenClickable(this.adicionarButton)
  };

  acessarAdicionarClienteAgencia () {
    Helper.clickWhenClickable(this.adicionarClienteAgenciaButton)
  };

  cadastrarCliente ({razaoSocial = '', nomeFantasia = '', email = ''}) {
    this.acessarAdicionarClienteAgencia()
    this.preencherCamposDeCadastroClienteAgencia(razaoSocial, nomeFantasia, email)
  };

  cadastrarAgencia (razaoSocial = '', nomeFantasia = '', email = '') {
    this.acessarAdicionarClienteAgencia()
    Helper.clickWhenClickable(this.agenciaRadio)
    this.preencherCamposDeCadastroClienteAgencia(razaoSocial, nomeFantasia, email)
  };

  pesquisarClienteAgencia (NomeFantasia = '', CNPJ = '') {
    Helper.clearFieldWhenVisibleAndFillItWithText(
      this.pesquisaNomeFantasiaInput,
      NomeFantasia
    )
    Helper.clearFieldWhenVisibleAndFillItWithText(
      this.pesquisaCNPJInput,
      CNPJ
    )
    Helper.clickWhenClickable(this.pesquisarButton)
  };
};

module.exports = new ClienteAgencia()

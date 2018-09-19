'use strict'

require('../ElementFinder.js');

class Home {

	constructor() {
        // Menu lateral
        this.Conteudo = element(by.cssContainingText('a[href="#"]', 'Conteúdo'));

		// Opções de 'Conteúdo'
		this.ConteudoClienteAgencia = element(by.css('a[href="http://homologacao.4yousee.com.br/admin/cliente.php?ac=listar"]'));
	}

    _AbrirMenuConteudo() {
        this.Conteudo.Clicar();
    }

	AcessarClienteAgencia() {
        this._AbrirMenuConteudo();
		this.ConteudoClienteAgencia.Clicar();
	}
	
}

module.exports = Home;
'use strict'

require('../ElementFinder.js');

class Mensagens {

	constructor() {
        // Mensagens de Clientes e Agências
        this.NomeFantasiaNaoPreenchido = element(by.cssContainingText('p', 'O campo Nome fantasia não foi preenchido.'));
        this.RazaoSocialNaoPreenchida = element(by.cssContainingText('p', 'O campo Razão social não foi preenchido.'));
	}
	
}

module.exports = Mensagens;
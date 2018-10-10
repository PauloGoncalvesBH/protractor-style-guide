"use strict"

class Mensagens {
    
    constructor() {
        this.nomeFantasiaNaoPreenchido = element(by.cssContainingText(
            "p",
            "O campo Nome fantasia não foi preenchido."
        ));
        this.razaoSocialNaoPreenchida = element(by.cssContainingText(
            "p",
            "O campo Razão social não foi preenchido." 
        ));
    };

};

module.exports = new Mensagens();
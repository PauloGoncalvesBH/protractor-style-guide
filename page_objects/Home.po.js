"use strict";

const Helper = require("protractor-helper");

class Home {
  constructor() {
    this.ConteudoButton = element(
      by.cssContainingText("a[href='#']", "Conteúdo")
    );
    this.conteudoClienteAgenciaButton = element(
      by.css("a[href='" + browser.baseUrl + "cliente.php?ac=listar']")
    );
  }

  acessarClienteAgencia() {
    Helper.clickWhenClickable(this.ConteudoButton);
    Helper.clickWhenClickable(this.conteudoClienteAgenciaButton);
  }
}

module.exports = new Home();

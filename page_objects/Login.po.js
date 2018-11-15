"use strict";

const Helper = require("protractor-helper");

class Login {
  constructor() {
    this.usuarioInput = element(by.name("usr_log"));
    this.senhaInput = element(by.name("usr_sen"));
    this.entrarButton = element(by.css("[value='Entrar']"));
  }

  visit() {
    browser.get("index.php");
  }

  fillFormAndSubmit(usuario = "", senha = "") {
    Helper.fillFieldWithTextWhenVisible(this.usuarioInput, usuario);
    Helper.fillFieldWithTextWhenVisible(this.senhaInput, senha);
    Helper.clickWhenClickable(this.entrarButton);
  }
}

module.exports = new Login();

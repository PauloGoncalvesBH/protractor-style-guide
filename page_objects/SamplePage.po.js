"use strict";

const Helper = require("protractor-helper");

class SamplePage {
  constructor() {
    this.firstNameInput = element(by.name("firstName"));
    this.lastNameInput = element(by.name("lastName"));
    this.messageTextarea = element(by.name("message"));
    this.submitButton = element(by.buttonText("SUBMIT"));
    this.alertFirstName = element(
      by.cssContainingText(
        ".error.nameError.show",
        "Should be 3-20 characters long, can not contain symbols"
      )
    );
    this.alertLastName = element(
      by.cssContainingText(
        ".error.lastNameError.show",
        "Should be 3-20 characters long, can not contain symbols"
      )
    );
    this.alertMessage = element(
      by.cssContainingText(
        ".error.msgError.show",
        "Should be 30-150 characters long, can not contain symbols"
      )
    );
  }

  visit() {
    browser.get("");
  }

  fillFormAndSubmit(firstName, lastName, message) {
    Helper.fillFieldWithTextWhenVisible(this.firstNameInput, firstName);
    Helper.fillFieldWithTextWhenVisible(this.lastNameInput, lastName);
    Helper.fillFieldWithTextWhenVisible(this.messageTextarea, message);
    Helper.clickWhenClickable(this.submitButton);
  }
}

module.exports = new SamplePage();

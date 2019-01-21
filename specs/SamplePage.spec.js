"use strict";

const Helper = require("protractor-helper");

const SamplePage = require("../page_objects/SamplePage.po.js");

describe("'Sign up to win 1 million' form", () => {
  const userData = {
    firstName: "Paulo",
    lastName: "Goncalves",
    message: "Lorem ipsum dolor sit amet consectetur adipiscing elit"
  };

  beforeEach(() => {
    browser.driver.manage().deleteAllCookies();
    SamplePage.visit();
  });

  it("Submit filling all fields", () => {
    SamplePage.fillFormAndSubmit(userData.firstName, userData.lastName, userData.message);

    Helper.waitForElementNotToBePresent(SamplePage.alertFirstName);
    Helper.waitForElementNotToBePresent(SamplePage.alertLastName);
    Helper.waitForElementNotToBePresent(SamplePage.alertMessage);
  });

  it("Submit without fill field", () => {
    Helper.click(SamplePage.submitButton);

    Helper.waitForElementVisibility(SamplePage.alertFirstName);
    Helper.waitForElementVisibility(SamplePage.alertLastName);
    Helper.waitForElementVisibility(SamplePage.alertMessage);
  });

  it("Submit filling only 'Message' field", () => {
    Helper.fillFieldWithText(SamplePage.messageTextarea, userData.message);
    Helper.click(SamplePage.submitButton);

    Helper.waitForElementVisibility(SamplePage.alertFirstName);
    Helper.waitForElementVisibility(SamplePage.alertLastName);
    Helper.waitForElementNotToBePresent(SamplePage.alertMessage);
  });

  it("Fill 'First name' field with 2 characters", () => {
    Helper.fillFieldWithTextAndPressEnter(SamplePage.firstNameInput, "ab");

    Helper.waitForElementVisibility(SamplePage.alertFirstName);
  });

  it("Fill 'First name' field with 21 characters", () => {
    Helper.fillFieldWithTextAndPressEnter(SamplePage.firstNameInput, "Lorem ipsum dolor sit ame");
  });
});

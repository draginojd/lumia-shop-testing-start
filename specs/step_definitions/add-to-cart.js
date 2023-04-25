import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that Im on the start page', () => {
  cy.visit("/");
});

Given('entered the letter {string}', (letter) => {
  cy.get("#search").type(letter);
});

When('I click on buy button of the first product', () => {
  cy.get(".content button").eq(0).click();
});

Then('{string} item should be added to cart', (amount) => {
  cy.get("#cart li")
    .contains(amount + "st")
    .should("exist");
});

Given('I click on go to Cart', () => {
  cy.get("#cart button").click();
});

Then('I enter {string} as my name',() => {
  cy.get("#name").click().type("Peterpan Gustavsson");
});

Then('I enter {string} as my home adress',  () => {
  cy.get("#street").click().type("Fifth Avenue");
});

Then('I enter {string} as my postal code', () => {
  cy.get("#zip").click().type("402 25");
});

Then('I enter {string} as my state', () => {
  cy.get("#city").click().type("New York City");
});

Then('I enter {string} Card Number as my card Number', () => {
  cy.get("#card-nr").click().type("403 1525 3525 2535");
});

Then('I enter {string} Date of validation', () => {
  cy.get("#card-date").click().type("03/26");
});

Then('I enter {string} as my CCV code', () => {
  cy.get("#card-ccv").click().type("979");
});
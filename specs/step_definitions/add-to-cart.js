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
    .should("exist")
});

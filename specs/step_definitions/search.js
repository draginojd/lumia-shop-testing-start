import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


/* Scenario: Searching for products including "t"
    Given that I am on the start page
    When I enter the letter "t" in the search field
    Then I should see the product "Taklampa"
    And I should see the product "Lampett"

Scenario: Searching for products including "s"
    Given that I am on the start page
    When I enter the letter "s" in the search field
    Then I should see the product "Bordslampa"
    And I should see the product "Spotlight" */

Given('that I am on the start page', () => {
  // Goto the start page
  cy.visit('/');
});

When('I enter the letter {string} in the search field', (letter) => {
  // Type the letter from our feature file in the search field
  cy.get('#search').type(letter);
});

Then('I should see the product {string}', (productName) => {
  // Grab a h2, check that it contains the product name
  // and then "go up" to the product div that the h2 is inside
  // and check that the product is visible
  cy.get('div.product h2')
    .contains(productName)
    .parentsUntil('div.product')
    .should('be.visible');
});

Then('I should see no products', (letter) => {
  cy.get('.product').should('be.hidden');
});
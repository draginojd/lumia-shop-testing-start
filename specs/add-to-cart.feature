Feature: Add to cart  

Scenario: Add a product to cart
  Given  that Im on the start page
  And  entered the letter "t"
  When  I click on buy button of the first product
  Then "1" item should be added to cart
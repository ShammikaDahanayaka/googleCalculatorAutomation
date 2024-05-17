const { numbers } = require("../../PageObject");

describe("Verify the visibility of calculator elements and perform math operations", () => {
  beforeEach(() => {
    cy.visit("/"); // Navigate to the configured root URL
  });

  it("Performs subtraction operation: 8 - 3", () => {
    cy.mathOperations(numbers.eight, numbers.subtract, numbers.three);
  });

  it("Performs multiplication operation: 9 * 9", () => {
    cy.mathOperations(numbers.nine, numbers.multiply, numbers.nine);
  });

  it("Performs division operation: 8 / 2", () => {
    cy.mathOperations(numbers.eight, numbers.divide, numbers.two);
  });

  it("Performs addition operation: 2 + 3", () => {
    cy.mathOperations(numbers.two, numbers.add, numbers.three);
  });

  it("Verifies the visibility and input of numbers", () => {
    cy.verifyNumberButtonInput(numbers.one.idLocator, numbers.one.value);
    cy.verifyNumberButtonInput(numbers.two.idLocator, numbers.two.value);
    cy.verifyNumberButtonInput(numbers.three.idLocator, numbers.three.value);
    cy.verifyNumberButtonInput(numbers.four.idLocator, numbers.four.value);
    cy.verifyNumberButtonInput(numbers.five.idLocator, numbers.five.value);
    cy.verifyNumberButtonInput(numbers.six.idLocator, numbers.six.value);
    cy.verifyNumberButtonInput(numbers.seven.idLocator, numbers.seven.value);
    cy.verifyNumberButtonInput(numbers.eight.idLocator, numbers.eight.value);
    cy.verifyNumberButtonInput(numbers.nine.idLocator, numbers.nine.value);
    cy.verifyNumberButtonInput(numbers.zero.idLocator, numbers.zero.value);
  });
});

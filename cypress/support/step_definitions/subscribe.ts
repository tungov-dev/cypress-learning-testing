import { When, Then, Given, DataTable } from "@badeball/cypress-cucumber-preprocessor";

When("I input {string} into the subscribe form and click submit button", (text) => {
    cy.getByData("email-input").type(`${text}`)
    cy.getByData("submit-button").click()
});

Then("I receive a success message contains the email {string}", (text) => {
    cy.getByData("success-message").should("exist").contains(
        `${text}`
    )
});

Then("I dont receive the success message", () => {
    cy.getByData("success-message").should("not.exist")
});

Then("I receive an error message contains the email {string}", (text) => {
    cy.getByData("server-error-message").should("exist").contains(`${text}`)
});

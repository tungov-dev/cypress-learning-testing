import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("User on the Text Box Page", () => {
    cy.visit("https://demoqa.com/text-box");
});

When('Input a full name: {string}', (fullname: string) => {
    cy.get("#userName").type(`${fullname}{backspace}`);
});
When('Input an email: {string}', (email: string) => {
    cy.get("#userEmail").type(`${email}{backspace}`);
})
When('Input a current_address: {string}', (currentAddress: string) => {
    cy.get("#currentAddress").type(`${currentAddress}{backspace}`);
})
When('Input a permanent_address: {string}', (permanentAddress: string) => {
    cy.get("#permanentAddress").type(`${permanentAddress}{backspace}`);
})
When('Click on Submit button', () => {
    cy.get('#submit').click();
})
Then("The result display on screen", () => {
    return true;
})

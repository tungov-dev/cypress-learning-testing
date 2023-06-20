import { When, Then, Given, DataTable } from "@badeball/cypress-cucumber-preprocessor";

Given("I visit AM device page", () => {
    cy.visit("http://10.0.0.75:3000/")
    cy.get('#normal_login_userId').type('teamIT')
    cy.get('#normal_login_password').type('1111{enter}')
    cy.get('.ant-menu-title-content').contains('Inventory').trigger('mouseover').get('a').contains('Device Management').click()
    cy.location("pathname").should("equal", '/device')
});

When("I click to select Category field in DeviceManagement filter", () => {
    cy.get('#categoryId').click()
});

Then("Category dropdown contains Mouse option", () => {
    cy.get('.rc-virtual-list-holder-inner')
        .invoke('css', 'transform: translateY(672px)')
        .trigger('change')
    cy.get('[title="Camera"]').should('be.visible')
    // .click().get('[title="Camera"]').should('exist')
});
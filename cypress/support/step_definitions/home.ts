import { When, Then, Given, DataTable } from "@badeball/cypress-cucumber-preprocessor";

Given("I visit home page", () => {
  cy.visit("/")
});

When("I see the hero heading", () => {
  cy.getByData("hero-heading").should('exist')
});

Then("The hero heading contains {string}", (text: string) => {
  cy.getByData("hero-heading").contains(
    `${text}`
  )
});

When("I see there are 3 features", () => {
  cy.get("dt").should("have.length", 3)
});

Then("I see they have correct naming", (table: DataTable) => {
  for (let i = 0, len = table.raw()[0].length; i < (len - 1); i++) {
    cy.get("dt").eq(i).contains(`${table.raw()[0][i]}`)
  }
});

When("I click to the course: {string}", (courseName: string) => {
  cy.getByData("course-title").contains(`${courseName}`).parent().find("a").contains("Get started").click()
});

Then("I should be redirected to the pathname {string}", (pathname: string) => {
  cy.location("pathname").should("equal", `${pathname}`)
});

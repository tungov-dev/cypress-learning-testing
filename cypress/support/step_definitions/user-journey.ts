import { When, Then, Given, DataTable } from "@badeball/cypress-cucumber-preprocessor";

When("I click get started to the course: {string}", (text) => {
  cy.getByData("course-title").contains(`${text}`).parent().find("a").contains("Get started").click()
});

When("I will be redirected to the pathname {string}", (text) => {
  cy.location("pathname").should("eq", `${text}`)
});

When("I click to Start Course button", () => {
  cy.getByData("next-lesson-button").contains(`Start Course`).click()
})

When("I pick the {string} checkbox then click next lesson", (text) => {
  cy.getByData("challenge-answer-0").click()
  cy.getByData("next-lesson-button").should("exist").click()
})

Then("I see Course Completed and the groupBox are all checked", () => {
  cy.getByData("next-lesson-button").contains(`Course Completed`).should("exist")
  cy.getByData("lesson-complete-2").should("have.class", "group-hover\:bg-blue-800")
})

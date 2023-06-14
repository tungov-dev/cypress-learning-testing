Feature: User Journey

    Scenario: a user can find a course on the home page and complete the courses lessons
        Given I visit home page
        When I click get started to the course: "Testing Your First Next.js Application"
        And I will be redirected to the pathname "/testing-your-first-application"
        And I click to Start Course button
        And I will be redirected to the pathname "/testing-your-first-application/app-install-and-overview"
        And I pick the "true" checkbox then click next lesson
        And I will be redirected to the pathname "/testing-your-first-application/installing-cypress-and-writing-our-first-test"
        And I pick the "true" checkbox then click next lesson
        And I will be redirected to the pathname "/testing-your-first-application/setting-up-data-before-each-test"
        And I pick the "true" checkbox then click next lesson
        And I will be redirected to the pathname "/"
        And I click get started to the course: "Testing Your First Next.js Application"
        And I will be redirected to the pathname "/testing-your-first-application"
        Then I see Course Completed and the groupBox are all checked
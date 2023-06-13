Feature: Home page

    Scenario: the h1 contains the correct text
        Given I visit home page
        When I see the hero heading
        Then The hero heading contains "Testing Next.js Applications with Cypress"

    Scenario: the features on the homepage are correct
        Given I visit home page
        When I see there are 3 features
        Then I see they have correct naming
            | 4 Courses | 25+ Lessons | Free and Open Source | Jam |

    Scenario: Course section
        Given I visit home page
        When I click to the course: "<courseName>"
        Then I should be redirected to the pathname "<pathname>"

        Examples:
            | courseName                             | pathname                        |
            | Testing Your First Next.js Application | /testing-your-first-application |
            | Testing Foundations                    | /testing-foundations            |
            | Cypress Fundamentals                   | /cypress-fundamentals           |
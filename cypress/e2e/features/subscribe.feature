Feature: Newsletter Subscribe Form

    Background:
        Given I visit home page
    Scenario: allows users to subscribe to the email list
        When I input "tom@aol.com" into the subscribe form and click submit button
        Then I receive a success message contains the email "tom@aol.com"

    Scenario: does NOT allow an invalid email address
        When I input "tom" into the subscribe form and click submit button
        Then I dont receive the success message

    Scenario: does NOT allow an invalid email address
        When I input "john@example.com" into the subscribe form and click submit button
        Then I receive an error message contains the email "already exists. Please use a different email address."
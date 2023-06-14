Feature: Newsletter Subscribe Form

    Scenario: allows users to subscribe to the email list
        Given I visit home page
        When I input "tom@aol.com" into the subscribe form and click submit button
        Then I receive a success message contains the email "tom@aol.com" 

    Scenario: does NOT allow an invalid email address
        Given I visit home page
        When I input "tom" into the subscribe form and click submit button
        Then I dont receive the success message

    Scenario: does NOT allow an invalid email address
        Given I visit home page
        When I input "john@example.com" into the subscribe form and click submit button
        Then I receive an error message contains the email "already exists. Please use a different email address."
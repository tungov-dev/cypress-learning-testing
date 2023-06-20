Feature: AM device page

    Scenario: Category field have Mouse option
        Given I visit AM device page
        When I click to select Category field in DeviceManagement filter
        Then Category dropdown contains Mouse option

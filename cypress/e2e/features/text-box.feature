Feature: Users can input on the text box and the result displays the correct data

    Background: User go to the Text Box Page
        Given User on the Text Box Page

    Scenario Outline: User can enter data on text box
        When Input a full name: "<full_name>"
        And Input an email: "<email>"
        And Input a current_address: "<current_address>"
        And Input a permanent_address: "<permanent_address>"
        And Click on Submit button
        Then The result display on screen
        Examples:
            | full_name | email                 | current_address | permanent_address |
            | Ame       | mailto:ame@gmail.com  | 123             | 456               |
            |           | mailto:ame1@gmail.com | abc             | xyz               |
            | ame1      |                       | qwe             | 789               |
            | ame2      | mailto:ame2@gmail.com |                 | 456               |
            | ame3      | mailto:ame3@gmail.com | qwe             |                   |


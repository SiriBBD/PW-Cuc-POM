Feature: User Authentication tests

  Background:
    Given User navigates to the application
       
@test
  Scenario: Login should be success
    Then User enter the username as "<username>"
    Then User enter the password as "<password>"
    Then User click on the login button
    Then Login should be success

Examples:
      | username | password | 
      | Taylor   | @Password1 |
     
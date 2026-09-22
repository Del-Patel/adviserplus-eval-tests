Feature: Todo management

  Background:
    Given the user has navigated to the Todo page

  Scenario: Add a Task
    When the user adds "Buy milk" as a Task
    Then "Buy milk - Task" should be displayed in the todo list

  Scenario: Add a Reminder
    When the user adds "Call dentist" as a Reminder
    Then "Call dentist - Reminder" should be displayed in the todo list

  Scenario: Add multiple todos and preserve order
    When the user adds "Buy milk" as a Task
    And the user adds "Call dentist" as a Reminder
    Then "Buy milk - Task" should be displayed in the todo list at position 0
    And "Call dentist - Reminder" should be displayed in the todo list at position 1

  Scenario: Navigate back to home
    When the user clicks the back to home link
    Then the user should be on the home page
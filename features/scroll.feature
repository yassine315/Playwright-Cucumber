Feature: Hotel page navigation visibility
  As a user visiting the hotel page
  I want the hotel navigation to behave based on my scroll direction
  So that my browsing experience is intuitive

  Scenario Outline: Navigation visibility when scrolling
    Given I am on the hotel page
    When I scroll "<direction>" on the page
    Then the hotel navigation should "<visibility>" be displayed

    Examples:
      | direction | visibility |
      | down      | not        |
      | up        |            |


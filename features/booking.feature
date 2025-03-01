Feature: Hotel Room Booking

  Scenario: Search for a hotel and book a room
    Given I am on the hotel booking homepage
    When I search for a hotel with the destination "ibis Paris Porte d'Italie"
    And I select check-in date "2025-03-25" and check-out date "2025-03-29"
    And I click on the search button
    Then I should see a list of available hotels

    When I select the first available hotel
    And I click in Continue
    And I skip next step
    Then I should see the booking confirmation page
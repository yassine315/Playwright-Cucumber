Feature: Booking a hotel on the Ibis website

  Scenario: Book an Ibis hotel from March 2 to March 4
    Given I am on the Ibis hotel booking page
    When I select the hotel "Ibis Paris Montmartre"
    And I choose the check-in date "Sun Mar 02 2025"
    And I choose the check-out date "Tue Mar 04 2025"
    And I select a room type "Standard Double Room"
    And I proceed to the reservation summary
    Then I should see the booking confirmation page
    And The booking details should display:
      | Hotel Name             | Check-in Date | Check-out Date | Room Type            |
      | Ibis Paris Montmartre  | 2 March 2025 | 4 March 2025    | Standard Double Room |
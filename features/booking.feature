Feature: Hotel Room Booking

  @book
  Scenario: Search for a hotel and book a room
    Given I am on the hotel booking homepage
    When I search for a hotel with the destination "ibis Paris"
    And I select check-in date "2025-03-25" and check-out date "2025-03-29"
    And I click on the search button
    Then I should see a list of available hotels

    When I select the first available hotel
    And I click in Continue
    And I skip next step
    And I fill the information of confirmation page
      | Champ               | Valeur                      |
      | Title               | Ms.                         |
      | First name          | Yassine                     |
      | Last name           | EL-MAHI                     |
      | Nationality         | French                      |
      | Email address       | yassine.elmahi77@gmail.com  |
      | Phone country code  | France (+33)                |
      | Phone number        | 06 65 78 01 60              |
      | Billing address     | 28 rue danielle Casanova    |
      | Additional address  | Yassine elmahi              |
      | Zip code            | 95100                       |
      | City                | ARGENTEUIL                  |
      | Country or region   | France                      |
    Then I am on the payment Page
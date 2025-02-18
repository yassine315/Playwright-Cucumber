import {Given, When, Then, Before, After, setDefaultTimeout } from '@cucumber/cucumber'; 
import { HotelPage } from './pages/hotelPage.js';
import { chromium } from '@playwright/test';


let hotelPage : HotelPage;

Before(async function () {
  const browser = await chromium.launch( {
     headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  hotelPage = new HotelPage(page);
})

Given('I am on the Ibis hotel booking page', {timeout : 10000}, async function () {
  // Write code here that turns the phrase above into concrete actions
  await hotelPage.visit();
});
       
When('I select the hotel {string}',{timeout : 10000}, async function (string) {
  // Write code here that turns the phrase above into concrete actions
  await hotelPage.typeDestination(string);
  await hotelPage.selectHotelDestination();
});
       

When('I choose the check-in date {string}',{timeout : 10000}, async function (date) {
  // Write code here that turns the phrase above into concrete actions
  await hotelPage.selectDate(date);
});
       
When('I choose the check-out date {string}',{timeout : 10000}, async function (date) {
  // Write code here that turns the phrase above into concrete actions
  await hotelPage.selectDate(date);
});
       

When('I select a room type {string}', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});
       

When('I proceed to the reservation summary', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});
       

Then('I should see the booking confirmation page', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});
       

Then('The booking details should display:', function (dataTable) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});


  After(async function () {
    (await hotelPage.getPage()).close()
  })


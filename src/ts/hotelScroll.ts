import {Given, When, Then } from '@cucumber/cucumber'; 
import { HotelPage } from './pages/hotelPage.js';
import { expect, Locator, Page } from '@playwright/test';
import { chromium } from '@playwright/test';
import { ResultPage } from './pages/resultPage.js';

const browser = await chromium.launch( {
  headless: false
});;
const context = await browser.newContext();
const page = await context.newPage();
const hotelPage = new HotelPage(page);
let resultPage: ResultPage ;

Given('I am on the hotel booking homepage',{timeout: 10000}, async function () {
  await hotelPage.visit();
});

When('I search for a hotel with the destination {string}',{timeout: 10000}, async function (destination) {
  await hotelPage.putDestination(destination);
  await hotelPage.selectDestination()
});

When('I select check-in date {string} and check-out date {string}',{timeout: 10000}, async function (checkIn, checkOut) {
  await hotelPage.addDate(checkIn, checkOut);
});

When('I click on the search button',{timeout: 10000}, async function () {
  await hotelPage.scrollUp();
  await hotelPage.search()
});

Then('I should see a list of available hotels',{timeout: 10000}, async function () {
    resultPage = new ResultPage(hotelPage.page);
    resultPage.isResultPage()
    resultPage.clickSeeRooms()
    resultPage.hasAvailableRooms()
});

When('I select the first available hotel',{timeout: 10000}, async function () {
   await resultPage.chooseRoom();
});

When('I click in Continue',{timeout: 10000}, async function () {
  await resultPage.clickContinueButton()
});

When('I skip next step', async function () {
  await resultPage.clickSkipStepButton()
});


Then('I should see the booking confirmation page', async function () {
  
});
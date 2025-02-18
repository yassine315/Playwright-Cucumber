import {Given, When, Then, Before, After, setDefaultTimeout } from '@cucumber/cucumber'; 
import { HotelPage } from './pages/hotelPage.js';
import { expect, Locator, Page } from '@playwright/test';
import { chromium } from '@playwright/test';


let hotelPage : HotelPage;
Before(async function () {
  const browser = await chromium.launch( {
    // headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  hotelPage = new HotelPage(page);
})

Given('I am on the hotel page', async function () {
    await hotelPage.visit()
  });

When('I scroll {string} on the page', async function (direction) {
  console.log("direction : ", direction)
  if(direction === "down")
    await hotelPage.scrollDown()
  if(direction === "up"){
    await hotelPage.scrollDown()
    await hotelPage.scrollUp()
  }
  });

Then('the hotel navigation should {string} be displayed', async function (visibilite) {
    console.log("visibilite : ", visibilite)
  if(visibilite === "not")
    await hotelPage.navigationNotVisible()
    if(visibilite === "")
    await hotelPage.navigationVisible()

  });

  After(async function () {
    (await hotelPage.getPage()).close()
  })


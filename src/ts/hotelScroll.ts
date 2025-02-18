import {Given, When, Then } from '@cucumber/cucumber'; 
import { HotelPage } from './pages/hotelPage.js';
import { expect, Locator, Page } from '@playwright/test';
import { chromium } from '@playwright/test';


const browser = await chromium.launch();
const context = await browser.newContext();
const page = await context.newPage();
const hotelPage = new HotelPage(page);

Given('I am on the hotel page', async function () {
    await hotelPage.visit()
  });

When('I scroll down on the page', async function () {
    await hotelPage.scrollDown()
  });

Then('the hotel navigation should not be displayed', async function () {
    await hotelPage.navigationNotVisible()
  });


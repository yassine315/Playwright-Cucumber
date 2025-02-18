import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import { HotelPage } from './pages/hotelPage.js';
import { chromium } from '@playwright/test';
let hotelPage;
Before(async function () {
    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    hotelPage = new HotelPage(page);
});
Given('I am on the hotel page', { timeout: 10000 }, async function () {
    await hotelPage.visit();
});
When('I scroll {string} on the page', { timeout: 10000 }, async function (direction) {
    console.log("direction : ", direction);
    if (direction === "down")
        await hotelPage.scrollDown();
    if (direction === "up") {
        await hotelPage.scrollDown();
        await hotelPage.scrollUp();
    }
});
Then('the hotel navigation should {string} be displayed', { timeout: 10000 }, async function (visibilite) {
    console.log("visibilite : ", visibilite);
    if (visibilite === "not")
        await hotelPage.navigationNotVisible();
    if (visibilite === "")
        await hotelPage.navigationVisible();
});
After(async function () {
    (await hotelPage.getPage()).close();
});

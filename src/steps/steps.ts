import {Given, When, Then } from '@cucumber/cucumber'; 
import { HotelPage } from '../pom/hotelPage.js';
import { chromium } from '@playwright/test';
import { ResultPage } from '../pom/resultPage.js';
import { CheckoutPage } from '../pom/checkoutPage.js';
import { PaymentPage } from '../pom/paiementPage.js';

const browser = await chromium.launch( {
  headless: false
});
const context = await browser.newContext();
const page = await context.newPage();
const hotelPage = new HotelPage(page);
let resultPage: ResultPage ;
let checkoutPage : CheckoutPage;
let paymentPage : PaymentPage;

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
    resultPage.scrollDown()
    resultPage.scrollDown()
    resultPage.hasAvailableRooms()
});

When('I select the first available hotel',{timeout: 10000}, async function () {
   await resultPage.chooseRoom();
});

When('I click in Continue',{timeout: 10000}, async function () {
  await resultPage.clickContinueButton()
});

When('I skip next step', {timeout: 20000}, async function () {
  await resultPage.clickSkipStepButton()
});


When('I fill the information of confirmation page', {timeout:20000}, async function (dataTable) {
  console.log("data ", dataTable)
  checkoutPage = new CheckoutPage(page);

  const formData = dataTable.rowsHash();

    await checkoutPage.selectPublicRate();
    await checkoutPage.selectTitle(formData.Title);
    await checkoutPage.fillFirstName(formData['First name']);
    await checkoutPage.fillLastName(formData['Last name']);
    await checkoutPage.selectNationality(formData.Nationality);
    await checkoutPage.fillEmail(formData['Email address']);
    await checkoutPage.selectPhoneCountryCode(formData['Phone country code']);
    await checkoutPage.fillPhoneNumber(formData['Phone number']);
    await checkoutPage.fillBillingAddress(formData['Billing address']);
    await checkoutPage.fillAdditionalAddress(formData['Additional address']);
    await checkoutPage.fillZipCode(formData['Zip code']);
    await checkoutPage.fillCity(formData.City);
    await checkoutPage.selectCountry(formData['Country or region']);

    if (formData['Accept terms']?.toLowerCase() === 'yes') {
        await checkoutPage.acceptTerms();
    }

    await checkoutPage.submitForm();
});

Then('I am on the payment Page', {timeout: 10000}, async function() {
  paymentPage = new PaymentPage(page)
  await paymentPage.isPaymentPage();
})


// scroll steps


Given('I am on the hotel page', {timeout:10000}, async function () {
  await hotelPage.visit()
});

When('I scroll down on the page',{timeout:10000}, async function () {
  await hotelPage.scrollDown()
});

Then('the hotel navigation should be displayed',{timeout:10000}, async function () {
  await hotelPage.navigationVisible()
});

When('I scroll up on the page',{timeout:10000}, async function () {
    await hotelPage.scrollDown()
    await hotelPage.scrollUp()
  });
  
  Then('the hotel navigation should not be displayed',{timeout:10000}, async function () {
    await hotelPage.navigationNotVisible()
  });


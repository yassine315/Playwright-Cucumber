import { Page } from '@playwright/test';

export class CheckoutPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async selectPublicRate() {
        await this.page.check('#public-rates');
    }

    async selectTitle(title: string) {
        await this.page.selectOption('#civility', title);
    }

    async fillFirstName(firstName: string) {
        await this.page.fill('#firstName', firstName);
    }

    async fillLastName(lastName: string) {
        await this.page.fill('#lastName', lastName);
    }

    async selectNationality(nationality: string) {
        await this.page.selectOption('#nationality', nationality);
    }

    async fillEmail(email: string) {
        await this.page.fill('#email', email);
    }

    async selectPhoneCountryCode(code: string) {
        await this.page.selectOption('#phonePrefix', code);
    }

    async fillPhoneNumber(number: string) {
        await this.page.fill('#localNumber', number);
    }

    async fillBillingAddress(address: string) {
        await this.page.fill('#billingAddress0', address);
    }

    async fillAdditionalAddress(address: string) {
        await this.page.fill('#billingAddress1', address);
    }

    async fillZipCode(zip: string) {
        await this.page.fill('#zipCode', zip);
    }

    async fillCity(city: string) {
        await this.page.fill('#city', city);
    }

    async selectCountry(country: string) {
        await this.page.selectOption('#country', country);
    }

    async acceptTerms() {
        await this.page.check('#consent-all-checkbox');
        await this.page.check('#consent-brand-checkbox');
    }

    async submitForm() {
        await this.page.click('.summary__btn--validation');
    }
}

export class CheckoutPage {
    constructor(page) {
        this.page = page;
    }
    async selectPublicRate() {
        await this.page.check('#public-rates');
    }
    async selectTitle(title) {
        await this.page.selectOption('#civility', title);
    }
    async fillFirstName(firstName) {
        await this.page.fill('#firstName', firstName);
    }
    async fillLastName(lastName) {
        await this.page.fill('#lastName', lastName);
    }
    async selectNationality(nationality) {
        await this.page.selectOption('#nationality', nationality);
    }
    async fillEmail(email) {
        await this.page.fill('#email', email);
    }
    async selectPhoneCountryCode(code) {
        await this.page.selectOption('#phonePrefix', code);
    }
    async fillPhoneNumber(number) {
        await this.page.fill('#localNumber', number);
    }
    async fillBillingAddress(address) {
        await this.page.fill('#billingAddress0', address);
    }
    async fillAdditionalAddress(address) {
        await this.page.fill('#billingAddress1', address);
    }
    async fillZipCode(zip) {
        await this.page.fill('#zipCode', zip);
    }
    async fillCity(city) {
        await this.page.fill('#city', city);
    }
    async selectCountry(country) {
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

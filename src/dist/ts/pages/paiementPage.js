import { expect } from "@playwright/test";
export class PaymentPage {
    constructor(page) {
        this.page = page;
        this.pageTitle = page.locator("h1.page-title-container__title");
    }
    async isPaymentPage() {
        const titleText = await this.pageTitle.textContent();
        const isOnPaymentPage = titleText?.includes("Pay your entire booking online") ?? false;
        return expect(isOnPaymentPage).toBeTruthy();
    }
}

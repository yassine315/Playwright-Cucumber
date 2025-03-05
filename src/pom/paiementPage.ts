import { Page, Locator, expect } from "@playwright/test";

export class PaymentPage {
  private page: Page;
  private pageTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.locator("h1.page-title-container__title");
  }

  async isPaymentPage(): Promise<void> {
    const titleText = await this.pageTitle.textContent();
    const isOnPaymentPage =  titleText?.includes("Pay your entire booking online") ?? false;
    return expect(isOnPaymentPage).toBeTruthy()
  }
}

import { expect } from '@playwright/test';
export class ResultPage {
    constructor(page) {
        this.page = page;
        this.buttonSeeRooms = this.page.locator('button', { hasText: 'See the rooms' });
    }
    async isResultPage() {
        const url = this.page.url();
        expect(this.page.url()).toContain('all.accor.com/ssr/app/ibis');
    }
    async hasAvailableRooms() {
        await this.page.waitForSelector('.room-list .list-complete-item');
        this.roomList = await this.page.locator('.room-list .list-complete-item');
        await expect(this.roomList.first()).toBeVisible(); // Vérifie qu'il y a au moins une chambre affichée
    }
    async scrollDown() {
        await this.page.evaluate(() => window.scrollBy(0, window.innerHeight));
    }
    async scrollUp() {
        await this.page.evaluate(() => window.scrollBy(0, -window.innerHeight));
    }
    async clickSeeRooms() {
        await this.buttonSeeRooms.click();
    }
    async chooseRoom() {
        const firstRoomButton = this.page.locator('button.room-info__button', { hasText: 'Choose this room' }).first();
        await firstRoomButton.click();
    }
    async clickContinueButton() {
        const continueButton = this.page.locator('button.validation-btn', { hasText: 'Continue' });
        await continueButton.click();
    }
    async clickSkipStepButton() {
        await this.page.waitForSelector('button.validation-btn', { timeout: 10000 });
        const skipStepButton = this.page.locator('button.validation-btn', { hasText: 'Skip this step' });
        await skipStepButton.click();
    }
}

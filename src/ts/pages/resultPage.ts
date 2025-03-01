import { expect, Locator, Page } from '@playwright/test';

export class ResultPage {
    private page: Page;
    private roomList : any;
    private buttonSeeRooms : Locator;
    

    constructor(page: Page) {
        this.page = page;
        
        this.buttonSeeRooms = this.page.locator('button', { hasText: 'See the rooms' })
    }

    async isResultPage(): Promise<void> {
        const url = this.page.url()
        expect(this.page.url()).toContain('all.accor.com/ssr/app/ibis');
    }

    async hasAvailableRooms(): Promise<void> {
        await this.page.waitForSelector('.room-list .list-complete-item')
        this.roomList = this.page.locator('.room-list .list-complete-item'); 
        await expect(this.roomList.first()).toBeVisible(); // Vérifie qu'il y a au moins une chambre affichée
    }

    async scrollDown(): Promise<void> {
        await this.page.evaluate(() => window.scrollBy(0, window.innerHeight));
    }

    async scrollUp(): Promise<void> {
        await this.page.evaluate(() => window.scrollBy(0, -window.innerHeight));
    }

    async clickSeeRooms(): Promise<void> {
        await this.buttonSeeRooms.click();
    }

    async chooseRoom(): Promise<void> {
        const firstRoomButton = this.page.locator('button.room-info__button', { hasText: 'Choose this room' }).first();
        await firstRoomButton.click();
    }

    async clickContinueButton(): Promise<void> {
        const continueButton = this.page.locator('button.validation-btn', { hasText: 'Continue' });
        await continueButton.click();
    }

    async clickSkipStepButton(): Promise<void> {
        await this.page.waitForSelector('button.validation-btn', { timeout: 5000 });
        const skipStepButton = this.page.locator('button.validation-btn', { hasText: 'Skip this step' });
        await skipStepButton.click();
    }

}
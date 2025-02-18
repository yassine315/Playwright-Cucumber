import { expect } from '@playwright/test';
export class HotelPage {
    constructor(page) {
        this.page = page;
        this.navigationBar = page.getByRole('navigation', { name: 'Main navigation' }).getByRole('list');
        this.signup = page.getByRole('button', { name: 'Open My account & Rewards menu' });
        this.bookingEngineOverlay = page.locator('.sticky-booking-engine');
    }
    async visit() {
        await this.page.goto("https://ibis.accor.com/en/ibis-styles.html");
        await this.page.waitForSelector('#onetrust-accept-btn-handler', { timeout: 5000 });
        await this.page.getByRole('button', { name: 'Accept all' }).click();
    }
    // Méthode pour vérifier si la navigation est visible
    async navigationVisible() {
        const isVisible = await this.isElementVisibleBasedOnZIndexAndPosition();
        console.log(isVisible);
        return await expect(isVisible).toBeTruthy();
    }
    async navigationNotVisible() {
        const isVisible = await this.isElementVisibleBasedOnZIndexAndPosition();
        console.log(isVisible);
        return await expect(isVisible).toBeFalsy();
    }
    // Vérifie si l'élément `navigationBar` est visible en comparant le z-index de `signup` et de `bookingEngineOverlay`
    async isElementVisibleBasedOnZIndexAndPosition() {
        const navigationBarBox = await this.navigationBar.boundingBox();
        const overlayBox = await this.bookingEngineOverlay.boundingBox();
        if (!navigationBarBox || !overlayBox) {
            console.log('One of the elements is not present in the viewport.');
            return false;
        }
        const navigationBarZIndex = await this.getZIndex(this.navigationBar);
        const overlayZIndex = await this.getZIndex(this.bookingEngineOverlay);
        console.log(`Signup z-index: ${navigationBarZIndex}, Overlay z-index: ${overlayZIndex}`);
        // Vérifie si `navigationBar` est recouvert en comparant les positions
        const isOverlapping = navigationBarBox.x < overlayBox.x + overlayBox.width &&
            navigationBarBox.x + navigationBarBox.width > overlayBox.x &&
            navigationBarBox.y < overlayBox.y + overlayBox.height &&
            navigationBarBox.y + navigationBarBox.height > overlayBox.y;
        if (isOverlapping && overlayZIndex >= navigationBarZIndex) {
            console.log('Signup is hidden by the overlay.');
            return false;
        }
        console.log('Signup is visible.');
        return true;
    }
    // Méthode utilitaire pour récupérer le z-index d'un élément
    async getZIndex(locator) {
        const zIndex = await locator.evaluate((element) => {
            const style = window.getComputedStyle(element);
            return parseInt(style.zIndex) || 0; // Retourne 0 si le z-index n’est pas défini
        });
        return zIndex;
    }
    // Méthode pour scroller vers le bas
    async scrollDown() {
        await this.page.evaluate(() => window.scrollBy(0, window.innerHeight));
    }
    // Méthode pour scroller vers le haut
    async scrollUp() {
        await this.page.evaluate(() => window.scrollBy(0, -window.innerHeight));
    }
    async getPage() {
        return await this.page;
    }
}

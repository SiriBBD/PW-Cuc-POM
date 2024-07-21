import { expect,Page } from "@playwright/test";
import { fixture } from "../hooks/pageFixture";

export default class CommonFunctions {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async clickOnUserMenu(menulocator: string) {
        await fixture.page.locator(menulocator).click()
    }

    async clickLogOut(locator: string) {
        const element = fixture.page.locator(locator);
        await element.click();
    }

    async assertText(text: string) {
        await expect(fixture.page).toHaveTitle(text);
    }


}
import { Page } from "@playwright/test";
import * as data from "../helper/util/locators.json";
import { fixture } from "../hooks/pageFixture";


export default class LoginPage {

    constructor(public page: Page) { }

    async navigateToUrl() {       
      await fixture.page.goto("https://preprod.mifusion.co.za/User/Login");             
    }

    async loginUserName(userName: string) {       
              
        await fixture.page.fill(data.usernameInput,userName);       
    }

    async loginPassword(password: string) {
        await fixture.page.fill(data.passwordInput, password);    
    }

    async clickButton() {          
        const logBtn = fixture.page.locator(data.loginButton);
        await logBtn.click();
    }

}


import { Page } from "@playwright/test";
import * as data from "../helper/util/locators.json";
import { fixture } from "../hooks/pageFixture";
import CommonFunctions from "./commonFunctions"

export default class LoginPage {

        private comm: CommonFunctions;
        constructor(public page: Page
        ) {
            this.comm = new CommonFunctions(page);
        }

    async navigateToUrl() {       
      await fixture.page.goto("https://preprod.mifusion.co.za/User/Login");             
    }

    async loginUserName(userName: string) {       
              
        await fixture.page.fill(data.usernameInput,userName);       
    }

    async loginPassword(password: string) {
        await fixture.page.fill(data.passwordInput, password);    
    }

    async logoutUser() {
        await this.comm.clickOnUserMenu(data.userMenu);
        await this.comm.clickLogOut(data.logOutlink);
    }

    async clickButton() {          
        const logBtn = fixture.page.locator(data.loginButton);
        await logBtn.click();
    }

}


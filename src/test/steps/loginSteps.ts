import { Given, Then, When ,  setDefaultTimeout} from "@cucumber/cucumber";
import LoginPage from "../../pages/loginPage";
import { fixture } from "../../hooks/pageFixture";
import { expect } from "@playwright/test";
import * as data from "../../helper/util/test-data/userdata.json";
setDefaultTimeout(60 * 1000 * 2)

let loginPage: LoginPage;
loginPage = new LoginPage(fixture.page);

         Given('User navigates to the application', async function () {  
          //await fixture.page.goto(process.env.BASEURL);
          await loginPage.navigateToUrl();            
         });

              
         Then('User enter the username as {string}', async function (string) {  
             await loginPage.loginUserName(data.username);
         });

         Then('User enter the password as {string}', async function (string) {
          await loginPage.loginPassword(data.password);
         });

        When('User click on the login button', async function () {
           await loginPage.clickButton();
           await fixture.page.waitForTimeout(8000);
         });

         Then('Login should be success', async function () {
          const heading = fixture.page.locator("#spnPageHeaderTitle");
          await expect(heading).toBeVisible();          
         });

      
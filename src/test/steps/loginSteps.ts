import { Given, Then, When ,  setDefaultTimeout} from "@cucumber/cucumber";
import LoginPage from "../../pages/loginPage";
import { fixture } from "../../hooks/pageFixture";
import { expect } from "@playwright/test";

setDefaultTimeout(60 * 1000 * 2)

let loginPage: LoginPage;
loginPage = new LoginPage(fixture.page);

         Given('User navigates to the application', async function () { 
            await fixture.page.goto(process.env.BASEURL as string);
            await fixture.page.waitForTimeout(3000);  
            fixture.logger.info("Navigated to the application")        
         });

              
         Then('User enter the username as {string}', async function (username) {  
             await loginPage.loginUserName(username);
         });

         Then('User enter the password as {string}', async function (password) {
          await loginPage.loginPassword(password);
         });

        When('User click on the login button', async function () {
           await loginPage.clickButton();
           await fixture.page.waitForTimeout(8000);
           fixture.logger.info("Logged into the application")
         });

         Then('Login should be success', async function () {
          const heading = fixture.page.locator("#spnPageHeaderTitle");
          await expect(heading).toBeVisible();  
          await fixture.page.waitForTimeout(2000);
          await loginPage.logoutUser();    
          fixture.logger.info("Logged out the application")                                  
         });

      
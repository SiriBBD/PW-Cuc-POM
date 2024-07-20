import { BeforeAll, AfterAll, Before, After, Status } from "@cucumber/cucumber";
import { Browser, BrowserContext } from "@playwright/test";
import { fixture } from "./pageFixture";
import { invokeBrowser } from "../helper/browsers/browserManager";
import { getEnv } from "../helper/env/env";
//import { createLogger } from "winston";
//import { options } from "../helper/util/logger";
//onst fs = require("fs-extra");

let browser: Browser;

BeforeAll(async function () {
    getEnv();
    browser = await invokeBrowser();
    const context = await browser.newContext();
    const page = await context.newPage();
    fixture.page = page;
});


AfterAll(async function () {
    await browser.close();
})



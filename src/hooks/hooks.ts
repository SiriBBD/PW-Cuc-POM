import { Before, After, BeforeAll, AfterAll, Status } from "@cucumber/cucumber";
import { Browser, Page, BrowserContext, chromium } from "@playwright/test";
import { fixture } from "./pageFixture";
import { invokeBrowser } from "../helper/browsers/browserManager";
import { getEnv } from "../helper/env/env";
import { createLogger } from "winston";
import {options} from "../helper/util/logger";


let browser:Browser;
let context:BrowserContext;

BeforeAll(async function () {
  getEnv();
  browser= await invokeBrowser();  
})

Before(async function({pickle}){    
    const scenarioName=pickle.name + pickle.id;
    context=await browser.newContext({
      recordVideo:{
        dir:"test-results/videos",
      },
    });  
    const page = await context.newPage();
    fixture.page = page;
    fixture.logger=createLogger(options(scenarioName))

  });
 
After(async function({pickle, result}){
    let videopath: string;
    let img: Buffer;
    
    const path = `./test-results/trace/${pickle.id}.zip`;
    if (result?.status == Status.FAILED) {
        img = await fixture.page.screenshot(
            { path: `./test-results/screenshots/${pickle.name}.png`, type: "png" });       
                
    }
    await fixture.page.close();
    await context.close();
  

});

AfterAll(async function() {
   await browser.close();   
});
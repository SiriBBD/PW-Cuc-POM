import { Before, After, BeforeAll, AfterAll, Status } from "@cucumber/cucumber";
import { Browser, Page, BrowserContext, Video } from "@playwright/test";
import { fixture } from "./pageFixture";
import { invokeBrowser } from "../helper/browsers/browserManager";
import { getEnv } from "../helper/env/env";
import { createLogger } from "winston";
import {options} from "../helper/util/logger";
const fs = require("fs-extra");

let page:Page;
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
    page = await context.newPage();
    fixture.page = page;
    fixture.logger=createLogger(options(scenarioName))

  });
 
After(async function({pickle, result}){
  const video = fixture.page.video();
  let videopath: string;
    let img: Buffer;
    videopath = '';
    console.log(result?.duration);
    console.log(result?.status);
    if(result?.status==Status.FAILED){
      img =await fixture.page.screenshot({path:`./test-results/screenshots/${pickle.name}.png`});
       this.attach(
         img, "image/png"
       );
       if(video)  videopath = await video.path();        
     }

     await fixture.page.close();
     await context.close();
     if(result?.status==Status.FAILED){
      
    this.attach(
         fs.readFileSync(videopath),
         'video/webm'
       ); 
      } 
});

AfterAll(async function() {
   await browser.close();   
});
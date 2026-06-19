import {test, expect ,Locator, Page, chromium } from "@playwright/test";
test("Handle tabs",async()=>{

    const browser=await chromium.launch();
    const context=await browser.newContext();

  //creating  2 page
  const parentPage=await context.newPage();
 
 await parentPage.goto("https://testautomationpractice.blogspot.com/");
const [child_Page]=await Promise.all([context.waitForEvent('page'),parentPage.locator("button:has-text('New Tab')").click()]); // it will wait till both statement work sucessfully


//Approach 1: switch between pages and get titles // when you have more than two pages

   const pages=context.pages(); // return array
   const url2="https://www.pavantestingtools.com/";
    for(const pp of pages)
    {
        if(await pp.url()===url2)
        {
          await pp.locator("input[name='q']").fill("akshay");
         await pp.locator("input[type='submit']").click();
      
        }
    }
    await parentPage.bringToFront();
  await  parentPage.locator("#Wikipedia1_wikipedia-search-input").fill("akshay");
 await   parentPage.waitForTimeout(2000);
})
import {test, expect ,Locator, Page} from "@playwright/test";
test("Authenticated POPs",async({browser})=>{

    
/*

 const context=await browser.newContext();
  const page=await context.newPage();

  //Approach 1 - directly pass login and pass 
  await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");

 //https://the-internet.herokuapp.com/basic_auth
 //https://username:password@the-internet.herokuapp.com/basic_auth
 await page.waitForLoadState(); //wait for page loaded completely
 
 expect(page.locator(".example")).toBeVisible();
*/

//approach 2 ; pass the login along with browser context  // use this approach

 const context=await browser.newContext({httpCredentials:{username:'admin', password:'admin'}});

  const page=await context.newPage();

 await page.goto("https://the-internet.herokuapp.com/basic_auth");
 
})
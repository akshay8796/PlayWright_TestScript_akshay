import {test, expect ,Locator, Page, chromium } from "@playwright/test";
test("Handle tabs",async()=>{

    const browser=await chromium.launch();
    const context=await browser.newContext();

  //creating  2 page
  const parentPage=await context.newPage();
 
 await parentPage.goto("https://testautomationpractice.blogspot.com/");

 await parentPage.waitForTimeout(3000);
//  both statement should run parallely
//  context.waitForEvent('page');
//  parentPage.locator("button:has-text('New Tab')").click(); // open new page/Tab
const [child_Page]=await Promise.all([context.waitForEvent('page'),parentPage.locator("button:has-text('New Tab')").click()]); // it will wait till both statement work sucessfully

//Approach 1: switch between pages and get titles // when you have more than two pages

   const pages=context.pages(); // return array
console.log("Number of pages created :",pages.length);

console.log("Title of Parent pages :",await pages[0].title());
console.log("Title of Parent pages :",await pages[1].title());

//Approach 2: alternate  // if you have only two tabs only

console.log("Title of Parent pages :",await parentPage.title());
console.log("Title of Parent pages :",await child_Page.title());
})
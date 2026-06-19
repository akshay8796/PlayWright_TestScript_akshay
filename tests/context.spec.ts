import {test, expect ,Locator, Page, chromium } from "@playwright/test";

test("Browser context demo",async()=>
{ 
    const browser=await chromium.launch();
    const context=await browser.newContext();

  //creating  2 page
  const page1=await context.newPage();
  const page2=await context.newPage();
  console.log("No of pages created :",context.pages().length);
await page1.goto("https://testautomationpractice.blogspot.com/");
await expect(page1).toHaveTitle("Automation Testing Practice");
await page2.goto("https://www.selenium.dev/");
await expect(page2).toHaveTitle("Selenium");

await page2.waitForTimeout(2000);
})
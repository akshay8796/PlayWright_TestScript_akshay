import {test,expect,Locator } from "@playwright/test";

test("Dynamic element handle by Xpath",async({page})=>{
 await page.goto("https://testautomationpractice.blogspot.com/");
    const button:Locator= page.locator("//button[@class='stop' or @class='start']");

    // let button:Locator= page.locator("//button[starts-with(@name,'st')]");
    // let button:Locator= page.locator("//button[contains(@name,'st')]");

    await expect(button).toBeVisible();
   // await button.click(); // for single click operation

    for(let i=1;i<=5;i++)
    {
       await button.click();
        await page.waitForTimeout(2000);
   }
       
})
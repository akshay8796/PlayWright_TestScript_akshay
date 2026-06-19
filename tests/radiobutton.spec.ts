import { test,expect,Locator } from "@playwright/test";


test(' Input box',async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

 const Radiobutton=page.locator('input#male');
 
 await expect(Radiobutton).toBeVisible();
 await expect(Radiobutton).toBeEnabled();
    const radio= await Radiobutton.isChecked(); // this will check whether radio button check or not
    expect(radio).toBe(false);
    
    const  radio_selected= await Radiobutton.check(); // this will click on the radio button              
    expect(radio_selected).toBe(true); 
   await expect(Radiobutton).toBeChecked(); // this is direct Assertion method 
 
 await   page.waitForTimeout(1000);

})
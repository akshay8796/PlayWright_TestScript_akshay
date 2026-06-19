import { test,expect,Locator } from "@playwright/test";

test(' Input box',async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

 const textBox=page.locator('input#name');
  
await expect(textBox).toBeVisible();
 await expect(textBox).toBeEnabled(); 

const maxlength=await textBox.getAttribute("maxlength"); // returns value of  maxlength attribute of the element
 console.log(maxlength);
 expect(maxlength).toBe('15');
 
 await textBox.fill("Prabha")
 // console.log("text content of firstName :", await textBox.textContent()); //return empty
      const  insertedvalue=await textBox.inputValue();
 console.log("text content of firstName :",await textBox.inputValue()); //it return the live values we entered
await  page.waitForTimeout(2000);
expect(insertedvalue).toBe("Prabha"); // equal
})
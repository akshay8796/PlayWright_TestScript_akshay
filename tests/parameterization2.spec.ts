import {test, expect ,Locator, Page } from "@playwright/test";
const loginData = [
    ["laura.taylor1234@example.com", "test123", "valid"],
    ["test2@gmail.com", "pass456", "invalid"],
    ["test3@gmail.com", "pass789", "invalid"],
     ["", "", "invalid"]
];


test.describe('Login data driven',async()=>{
for(const [email,password,validity] of loginData)
{
test(`login test for ${email} and ${password}`,async({page})=>{
 await page.goto("https://demowebshop.tricentis.com/login");
 await page.locator("#Email").fill(email);
 await page.locator("#Password").fill(password);
 await page.locator("input[value='Log in']").click();
      
      if( validity.toLowerCase()==='valid')
      {
               const logoutLink=page.locator("a[href='/logout']");
          await expect(logoutLink).toBeVisible({timeout:500});
      }
      else
      {
            const errorMessage=page.locator(".validation-summary-errors");
            await expect(errorMessage).toBeVisible({timeout:500});
            //Assert user still on the login page
            await expect(page).toHaveURL("https://demowebshop.tricentis.com/login");  
      }

})
}

})








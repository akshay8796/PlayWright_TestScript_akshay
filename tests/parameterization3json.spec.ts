import {test, expect ,Locator, Page } from "@playwright/test";

import fs from 'fs';

//Reading data from json
const jsonPath="D:\\Akshay Dhanedhar\\playwrite demo\\testdata\\Credential_json.json";
//const jsonPath='testdata/Credential_json.json";'
const logindata=JSON.parse(fs.readFileSync(jsonPath,'utf-8')); 

test.describe('Login data driven',()=>{


for(const {email,password,validity} of logindata)
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

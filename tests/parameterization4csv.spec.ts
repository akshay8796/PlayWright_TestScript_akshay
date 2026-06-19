// to use Excel file or csv file we use thrid party tool 
// In terminal type==> npm install csv-parse


import {test, expect ,Locator, Page } from "@playwright/test";

import fs from 'fs';
import { parse } from 'csv-parse/sync';

//Reading data from CSV
const CSV_Path="D:\\Akshay Dhanedhar\\playwrite demo\\testdata\\Credential_CSV.csv";
//const CSV_path='testdata/Credential_CSV.csv";'
const filecontent=fs.readFileSync(CSV_Path,'utf-8'); 
const record = parse(filecontent, {
  columns: true,
  skip_empty_lines: true,
}) as any[];


test.describe('Login data driven',()=>{


for(const data of record)
{
test(`login test for ${data.email} and ${data.password}`,async({page})=>{
 await page.goto("https://demowebshop.tricentis.com/login");
 await page.locator("#Email").fill(data.email);
 await page.locator("#Password").fill(data.password);
 await page.locator("input[value='Log in']").click();
      
      if( data.validity.toLowerCase()==='valid')
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

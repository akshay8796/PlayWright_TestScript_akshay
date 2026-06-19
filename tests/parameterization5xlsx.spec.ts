// to use Excel file or csv file we use thrid party tool 
// In terminal type==>  npm  install xlsx


import {test, expect ,Locator, Page } from "@playwright/test";

import fs from 'fs';
import * as XLSX from 'xlsx';

//Reading excel

const excelpath="testdata/credentialxlsx.xlsx";

const workbook=XLSX.readFile(excelpath);
const sheetname=workbook.SheetNames[0];
   const worksheet=workbook.Sheets[sheetname];
 //convert sheet into json
 const  logindata=XLSX.utils.sheet_to_json(worksheet) as any[];
 console.log(logindata);
test.describe('Login data driven',()=>{


for(const {email,password,validity}  of logindata)
{
test(`login test for ${email} and ${password}`,async({page})=>{
 await page.goto("https://demowebshop.tricentis.com/login");
 await page.locator("#Email").fill(email);
 await page.locator("#Password").fill(password);
 await page.locator("input[value='Log in']").click();
      
      if( validity.toLowerCase()==='valid')
      {
               const logoutLink=page.locator("a[href='/logout']");
          await expect(logoutLink).toBeVisible({timeout:5000});
      }
      else
      {
            const errorMessage=page.locator(".validation-summary-errors");
            await expect(errorMessage).toBeVisible({timeout:5000});
            //Assert user still on the login page
            await expect(page).toHaveURL("https://demowebshop.tricentis.com/login");  
      }

})
}

})


import {test, expect ,Locator, Page } from "@playwright/test";


import path from "path";
 import{readExcelFile} from '../../src/utils/ExcelHelper';
 const filepath=path.join(__dirname,'../../testdata/QA/testdataExcel1.xlsx')
 const records=readExcelFile(filepath);
 
for(const  rec of records)
{
        
test(`Data Drivern Testing Using csv file:${rec.Skill1}`, async ({ page }) => {

await page.goto("https://testautomationpractice.blogspot.com/");

  await page.locator("#name").fill(rec.Skill2);
  await page.locator("#email").fill(rec.Skill1);

  await page.locator("#male").check();
await page.waitForTimeout(4000);
  await expect(page).toHaveTitle("Automation Testing Practice");

});    
}




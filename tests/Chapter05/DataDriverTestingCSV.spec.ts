import {test, expect ,Locator, Page } from "@playwright/test";
import {parse} from "csv-parse/sync";
import fs from 'fs';

import path from "path";
type testRecords={
  Skill1:string,
  Skill2:string
}
 const records= parse(
   fs.readFileSync(path.join(__dirname,'../../testdata/QA/testdataCSV.csv')),
   {
    columns:true,
    skip_empty_lines:true
   }
  ) as testRecords[];

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




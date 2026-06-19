import {test, expect ,Locator, Page } from "@playwright/test";
import testDatajson from '../../testdata/QA/testDatajson.json'

type TestData={
     TestDateSet1:{
     "Skill1":string,
     "Skill2":string
 },
  TestDataSet2:{
  "Skill1":string,
     "Skill2":string

 }

}
const typeTestData=testDatajson as TestData;

for(const  dataSetName in typeTestData)
{
          const skill=typeTestData[dataSetName as keyof TestData];
test(`Data Drivern Testing Using JSON file:${skill.Skill1}`, async ({ page }) => {

await page.goto("https://testautomationpractice.blogspot.com/");

  await page.locator("#name").fill(skill.Skill1);
  await page.locator("#email").fill(skill.Skill2);

  await page.locator("#male").check();
await page.waitForTimeout(2000);
  await expect(page).toHaveTitle("Automation Testing Practice");

});    
}




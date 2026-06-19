import {test, expect ,Locator, Page } from "@playwright/test";

test.beforeEach("launching app",async({page})=>{

await page.goto("https://demowebshop.tricentis.com/");

})


test("LogoTest _____ 1", async({page})=>
{
 await expect(page.locator("img[alt='Tricentis Demo Web Shop']")).toBeVisible();

})
test("Title test_____ 2",async({page})=>
{
   expect(await page.title()).toContain("Demo Web Shop")
})

test("search test_______3",async({page})=>{
   await page.locator("input[id='small-searchterms']").fill("laptop");
    await page.locator("input[class='button-1 search-box-button']").click();
   
    await expect.soft(page.locator("h2[class='product-title'] a").nth(0)).toContainText("laptop",{ignoreCase:true});

})

/* 
Step 1:
npm install -D allure-playwright

Step 2:
playwright.config.ts me add karo

reporter: [
  ['allure-playwright']
]

Step 3:
Install Allure Command Line

npm install -g allure-commandline

Step 4:
Run the tests

npx playwright test

Iske baad allure-results folder create hoga.

Step 5:
Generate the report

allure generate ./allure-results -o ./allure-report --clean

Step 6:
Open the report

allure open ./allure-reportallure serve allure-results
*/
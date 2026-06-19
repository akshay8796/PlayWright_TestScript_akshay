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
1. if you want to generate report always wheather test pass or fail write below command inside the playwright.config.ts

reporter:[['html',{open:'always'}]], this will generate html report always
reporter:[['html',{open:'always',outputFolder: 'my-report'}]], this will generate report in html-report folder 
reporter:[ ['html',{open:'always',outputFolder: 'my-report'}] , ['list'] ,['dot'] ],  this will print report in console aswell in the html report
                         ye upper wala individual bhi likh sakte hai^^^^   
reporter: [['list']]
reporter: [['dot']]

reporter: [
  ['html', { open: 'always', outputFolder: 'my-report' }],['list'] ,['dot'] 
  ['json', { outputFile: 'results.json' }],  for json report to specific folder
  ['junit', { outputFile: 'results.xml' }]   for junit report to specific folder
]
2. if you use custom folder and you want to open report manually
 
npx playwright show-report my-report                                                                

*/
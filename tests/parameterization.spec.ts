import {test,expect } from "@playwright/test";



const searchItem:string[]=['gift card','phone','laptop','desktop'];

// Using  for of loop
for(const item of searchItem)
{
      
test(`search test for ${ item }`,async({page})=>
    { 
           await page.goto("https://demowebshop.tricentis.com/search?q=desktop");
           await page.locator("input[value='Search store']").fill(item);
           await page.locator("input[class='button-1 search-box-button'][value='Search']").click();
           await expect.soft(page.locator("h2 a").nth(0)).toContainText(item ,{ignoreCase:true});
    })
}

// Using for Each
searchItem.forEach((item)=>{

test(`search test for ${ item }`,async({page})=>
    { 
           await page.goto("https://demowebshop.tricentis.com/search?q=desktop");
           await page.locator("input[value='Search store']").fill(item);
           await page.locator("input[class='button-1 search-box-button'][value='Search']").click();
           await expect.soft(page.locator("h2 a").nth(0)).toContainText(item ,{ignoreCase:true});
    });

})

//Using Describe
test.describe("search Items",async()=>{

    searchItem.forEach((item)=>{

test(`search test for ${ item }`,async({page})=>
    { 
           await page.goto("https://demowebshop.tricentis.com/search?q=desktop");
           await page.locator("input[value='Search store']").fill(item);
           await page.locator("input[class='button-1 search-box-button'][value='Search']").click();
           await expect.soft(page.locator("h2 a").nth(0)).toContainText(item ,{ignoreCase:true});
    });

})
})
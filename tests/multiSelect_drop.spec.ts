import {test,Locator,expect  } from "@playwright/test";
test("Multi select from the list box",async({page})=>{
  await page.goto("https://testautomationpractice.blogspot.com/");
// 1. Select option from the drop down (4 ways)  

// await page.locator("#colors").selectOption(['Red','Blue','Green']); //using visible text
// await page.locator("#colors").selectOption(['red','blue','green']);  //using value attribute 
// await page.locator("#colors").selectOption([{label:'Red'},{label:'Green'},{label:'Yellow'}]); //using label
// await page.locator("#colors").selectOption([{index:2},{index:4}]);

//2. Check number of options in the dropdown(count)
 const Multiple= page.locator("#colors>option");
        await expect(Multiple).toHaveCount(7);

 //3. check an option present in the dropdown
      const  AlltextOption=(await Multiple.allTextContents()).map(text=>text.trim());
           console.log(AlltextOption)   // it print in the form of Array

           expect(AlltextOption).toContain('Green');        
await page.waitForTimeout(3000);

   //4.printing option from the drop dropdown 
     
   for(const opt of AlltextOption)
   {
     console.log(opt)
   }
})
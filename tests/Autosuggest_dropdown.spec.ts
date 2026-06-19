import {test,expect,Locator  } from "@playwright/test";

test("Autosuggest dropdown",async({page})=>{

      await  page.goto("https://www.flipkart.com/mobile-phone-ab-at-store?pageUID=1778155416790");
       const popupClose = page.locator('span[role="button"]');

if (await popupClose.isVisible()) {
  await popupClose.click();
} 
         const searchBox = page.locator('input[name="q"]').first();
               await searchBox.fill("smart");
              await page.waitForTimeout(2000);
          
               // Get all the suggest options --> Ctrl +shift + Pon DIm -->emulate focused page
        const    options=page.locator("ul>li");   
       const    counT=await  options.count();
                 console.log("Total count ="+ counT);

   //printing all the suggested options in the console
    for(const opt of await options.all())
    {
            console.log(await opt.innerText());
    }
   // print specific element 
    console.log('5th option : '+ await options.nth(5).innerText());
       for(let i=0;i<await options.count();i++)
        {    const text=await options.nth(i).textContent();
             if(text=='smart watch charger')
             {
                 await options.nth(i).click();
              break;
                }
         
       }


    })
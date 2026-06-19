import {test,expect,Locator  } from "@playwright/test";

test("Autowait ",async({page})=>{

    page.goto("https://demowebshop.tricentis.com/");
   // for project level 
   // goto this file playwright.config.ts  inside defineConfig  manualy type timeout:6000 <- applicable for all test()
   // for all assertion use     //expect:{timeout:1000},
   test.setTimeout(6000); //60 sec  specific scope 
   // test.slow(); //90 sec by default
    // assertion auto wait works
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/",{timeout:6000}); //for specific assertion timeout 
    await expect(page.locator("img[alt='Tricentis Demo Web Shop']")).toBeVisible({timeout:6000}); // for specific assertion timeout

        // auto wait works on actions
        //defaultly wait for 30 sec
        await page.locator("input[type='text']").first().fill("akshay");
        await page.locator("input[type='submit']").click();

 // if you dont want to autowait you can perform action forcefully
         await page.locator("input[type='text']").first().fill("akshay",{force:true});
        await page.locator("input[type='submit']").click({force:true});
})
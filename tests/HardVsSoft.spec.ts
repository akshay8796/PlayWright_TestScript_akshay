import {test,expect,Locator  } from "@playwright/test";

test("Autowait ",async({page})=>{

    page.goto("https://demowebshop.tricentis.com/");
  // hard assert
    await    expect(page).toHaveTitle("Demo Web Shop");
    await    expect(page).toHaveURL("https://demowebshop.tricentis.com/");
        const logo= page.locator("img[alt='Tricentis Demo Web Shop']");
    await    expect(logo).toBeVisible();
    
   
    await page.waitForTimeout(5000);
    
    // Soft Assert
    await    expect.soft(page).toHaveTitle("Demo Web Shop");
    await    expect.soft(page).toHaveURL("https://demowebshop.tricentis.com/");
        const logoo= page.locator("img[alt='Tricentis Demo Web Shop']");
    await    expect.soft(logoo).toBeVisible();
    

    })
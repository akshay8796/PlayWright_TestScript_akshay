import {test, expect ,Locator, Page} from "@playwright/test";
test("Handle POPs",async({browser})=>{

  const context=await browser.newContext();
  const page=await context.newPage();
 await page.goto("https://testautomationpractice.blogspot.com/");
 
 //Multiple pops
await Promise.all([page.waitForEvent('popup'),page.locator("#PopUp").click()])
await page.waitForTimeout(2000);
  const allPopsWindows=context.pages();
 console.log("Number of pages/windows ",allPopsWindows.length);    
   console.log("page usr 1= ", allPopsWindows[0].url()); // return url of mainpage
  console.log("page usr 2= ",allPopsWindows[1].url());  //return url of pops
  console.log("page usr 3= ",allPopsWindows[2].url());  //return url of pops

  for(const pg of allPopsWindows)
  {
      const title=await pg.title();
      if(title.includes("Selenium"))
        { 
            const text =  pg.locator("div[class='d-flex justify-content-center td-box--100 pt-5'] h2");
           await  pg.waitForTimeout(2000);
            await expect(text).toHaveText("Getting Started");
            console.log(await text.textContent());
            await pg.close(); // this will close selenium window
        }       
  }
})
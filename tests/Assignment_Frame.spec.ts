import { test, expect, Page } from "@playwright/test";

test("frame demo", async ({ page }) => {

  await page.goto("https://ui.vision/demo/webtest/frames/");

           const framelist=page.frames();
           console.log("Total frame =", framelist.length);
          const frame=page.frame({ url:"https://ui.vision/demo/webtest/frames/frame_1.html"});
          const inputtext= frame?.locator("input[name='mytext1']");
         if(inputtext)
         {
          await   inputtext?.fill("akshay");
          await   expect(inputtext).toHaveValue("akshay");
         }
        
      await  page.waitForTimeout(3000);

           const frame3=page.frameLocator("[src='frame_3.html']");
           const frame4=frame3.frameLocator("[src='https://docs.google.com/forms/d/1yfUq-GO9BEssafd6TvHhf0D6QLDVG3q5InwNE2FFFFQ/viewform?embedded=true']");
          //  const select=frame4.getByLabel("Web Testing");
           const  select= frame4.locator("#i9");
           await select.check();
          expect(select).toBeChecked();
        await  page.waitForTimeout(3000);


       const frame5= page.frame({ url:"https://ui.vision/demo/webtest/frames/frame_5.html"});  
        
         if(frame5)
         { 
           const ff=frame5.locator("[name='mytext5']");
           const enter =await ff.fill("hi all of u ");
        await     expect(ff).toHaveValue("hi all of u ");
          await   frame5.locator("a[href='https://a9t9.com']").click();
            const title=await page.title();
               console.log("frame page title ",title);
                await  page.waitForTimeout(4000);
         }
    
    });
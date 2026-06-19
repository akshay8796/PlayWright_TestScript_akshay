import {test,expect,Locator  } from "@playwright/test";

test("Hidden bootstrap dropdown",async({page})=>{

      await  page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

            const username=await page.locator("input[name='username']").fill("Admin");
              const userpassword=await page.locator("input[name='password']").fill("admin123");
                const loginbutton=await page.locator("button[type='submit']").click();

                //click on  the PIM 

                await page.getByText("PIM").click();

                // click on the job title dropdown
                await page.locator("form i").nth(2).click();
                await page.waitForTimeout(2000);
                const Option=page.locator("div[role='listbox'] span");
               const counT=await Option.count();
               console.log("Number of options in the dropdown ="+ counT);

               console.log("All the text content =", await Option.allTextContents());
            //   print all the options
           for(let i=0;i<counT;i++)
            {
               //  console.log(await Option.nth(i).innerText());
                 console.log(await Option.nth(i).textContent());
            }  

              for(let i=0;i<counT;i++)
            { 
              const  text= await Option.nth(i).textContent();
              if(text==="Automaton Tester")
              {
                await Option.nth(i).click();
              }
            } 
            await page.waitForTimeout(2000);
})
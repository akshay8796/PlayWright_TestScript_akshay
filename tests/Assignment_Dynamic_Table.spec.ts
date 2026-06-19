import {test, expect ,Locator } from "@playwright/test";
import { text } from "node:stream/consumers";

test("Assignments Dynamic Tabele", async({page})=>
{
    await  page.goto("https://testautomationpractice.blogspot.com/");
        const Table=page.locator("#taskTable tbody");
        expect(Table).toBeVisible(); // verify the table is visible 
  
            const rows=await  Table.locator("tr").all();
              let cpu="";
              let Firefox_Memory_MB="";
              let Network="";
              let Firefox_Disk_space ="";
          for(const row of rows)
            {
                   const NamesList =await row.locator("td").nth(0).innerText();
            
                   if(NamesList?.trim()==="Chrome")   
                    {  
                               cpu=await row.locator("td",{hasText:'%'}).innerText();
                               // CPU = await row.locator("td").filter({ hasText: "%" }).innerText();
                                Network=await row.locator("td",{hasText:'Mbps'}).innerText();
                   console.log(" cpu chrome = ",cpu ," Network Chrome =",Network);
                    }  
                   if(NamesList?.trim()==="Firefox")
                      { 
                               Firefox_Memory_MB= await row.locator("td", { hasText: /\d+\s*MB\b$/ }).first().innerText();
                               Firefox_Disk_space =await row.locator("td",{hasText:'MB/s'}).first().innerText();
                               console.log(" memory firefox = ",Firefox_Memory_MB," Disk Firefox =",Firefox_Disk_space);
                        } 
            }

          const   ChromeCPU=await page.locator(".chrome-cpu").first().innerText();
          const   ChromeNetworkSpeed=await page.locator(".chrome-network").first().innerText();

          const   Memory_Size_Firefox_process =await page.locator(".firefox-memory").first().innerText();
           const   firefox_disk=await page.locator(".firefox-disk").first().innerText();
          
         expect(ChromeCPU).toBe(cpu);
         expect(ChromeNetworkSpeed).toBe(Network);
       expect(Firefox_Memory_MB).toBe(Memory_Size_Firefox_process);
          expect(firefox_disk).toBe(Firefox_Disk_space);





})

test("Assignments Pageination_table", async({page})=>
{
    await  page.goto("https://testautomationpractice.blogspot.com/");
            const Table= page.locator("#productTable tbody");
     expect(Table).toBeVisible();


         page.locator("#pagination li")


           const rows= await page.locator("#productTable tbody tr").all();
          const    buttons=await page.locator("#pagination li").all();
 
          
            let totalRow=0;
       
         for(let but of buttons)
         {    
         
         if(await but.isEnabled())
          {         
          await but.click();
            for(let  row of rows)
            {
               console.log("Rows =>", await row.innerText());
            await   row.locator("td").nth(3).locator('input').click();
               totalRow ++;
            }
           
              await page.waitForTimeout(2000);   
          }
          else
          {
            console.log(" Pageination button is disabled");
          }
             
         }
         expect(totalRow).toBe(20);
         console.log("Total count row ="+ totalRow);
             
       
     
    
})

test("Verify the user click on the specific check box", async({page})=>
{
    await  page.goto("https://testautomationpractice.blogspot.com/");
            const Table= page.locator("#productTable tbody");
     expect(Table).toBeVisible();

           const rows= await page.locator("#productTable tbody tr").all();
          const    buttons=await page.locator("#pagination li").all();
 
          
       let found=false;
         for(let but of buttons)
         {    
         
         if(await but.isEnabled())
          {         
           await but.click();

            for(let  row of rows)
            {       const text= await row.locator("td").nth(1).innerText();
                   if(text==="Router")
                   {
                          await   row.locator("td").nth(3).locator('input').click();
                          console.log(await row.innerText()); 
                           await page.waitForTimeout(500);   
                                  found = true; 
                                  break;     
                   }
                  
             
              
            }  
             if (found) {
                break; // ✅ outer loop break
            }
           
              await page.waitForTimeout(2000);   
          }
          else
          {
            console.log(" Pageination button is disabled");
          }
             
         }
       
             
       
     
    
})

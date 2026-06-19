import {test, expect ,Locator, Page } from "@playwright/test";


async function SelectDate(targetYear:String,targetMonth:String,targetDate:String,page:Page,isFuture:boolean) 
{

while(true)
{         
             const  CurrentMonth=await page.locator('.ui-datepicker-month').textContent();
             const  CurrentYear=await page.locator('.ui-datepicker-year').textContent();
             
            if(CurrentMonth===targetMonth && CurrentYear===targetYear)
             {
          break;
             }

             if(isFuture)
             {
                  await page.locator('.ui-datepicker-next').click();
             }
             else
            {
                await page.locator('.ui-datepicker-prev').click();
            }
        
 
}

   const alldate=await page.locator(".ui-datepicker-calendar td").all();
 for(let datee of  alldate)
 {
    const datetext= await datee.innerText();
  if(datetext===targetDate)
  {
        await datee.click();
        break;
  }
 
}



    
}



test("Assignments Dynamic Tabele", async({page})=>
{

    await page.goto("https://testautomationpractice.blogspot.com/");
    
    const  datePicker=page.locator('#datepicker').first();
   
   await expect(datePicker).toBeVisible();

    // fill method
//   await     datePicker.fill('05/14/2026'); // mm/dd/yyyy

datePicker.click();
//select Future target date
const year='2027';
const month='June';
const date='10';

// //select past target date
// const year='2024';
// const month='June';
// const date='10';

SelectDate(year,month,date,page,true);
 const expectedDate='06/10/2027' // mm/dd/yyyy
await expect(datePicker).toHaveValue(expectedDate);
    await page.waitForTimeout(2000);
})
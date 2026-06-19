import {test, expect ,Locator, Page } from "@playwright/test";
test("Assignments Dynamic Tabele", async({page})=>
{
   await page.goto("https://www.booking.com/");

 


try {
    const cross=page.locator("button[aria-label='Dismiss sign-in info.']");
 await   cross.click();
    
}  catch (err) {
    console.log("Could not click dismiss button:", err);
}
  const searchBox_button= page.locator("button[data-testid='searchbox-dates-container']");
    await searchBox_button.click();

 const check_In=page.locator("#calendar-searchboxdatepicker table tbody ").first();
 


   let CheckInYear="2027";
   let check_InMonth="June";
   let check_InDay="2";

while(true)
{
      const  Month_Year_One_text=await page.locator("h3[id*='bui-calendar-month']").first().innerText();
         const    current_month=Month_Year_One_text.split(" ")[0];
         const    current_Year=Month_Year_One_text.split(" ")[1];    
       
         if(current_month.trim()===check_InMonth && current_Year.trim()===CheckInYear)
         {    console.log(" Month ", current_month.trim())
             console.log(" Year ", current_Year.trim())
                break;
         }
      else{
                 const next_button= page.locator("button[aria-label='Next month']");
               await  next_button.click();
   
            } 
          
 }
 const    AllDate_table_1=await check_In.locator("td").all();
 let checkinDateSelected=false;
 for(let date of AllDate_table_1)
 {  
     if((await date.innerText()).trim()===check_InDay)
     {
              await  date.click();
                checkinDateSelected=true;
                break;
     }

 }
///////////////////////////////////////////////////////////////////
   await  page.waitForTimeout(2000);
   const check_Out=page.locator("#calendar-searchboxdatepicker table tbody ").last();


   let CheckOutYear="2027";
   let check_OutMonth="July";
   let check_OutDay="3";

while(true)
{
      const  Month_Year_One_text=await page.locator("h3[id*='bui-calendar-month']").last().innerText();
         const    current_month=Month_Year_One_text.split(" ")[0];
         const    current_Year=Month_Year_One_text.split(" ")[1];    
       
         if(current_month.trim()===check_OutMonth && current_Year.trim()===CheckOutYear)
         {    console.log(" Month ", current_month.trim())
             console.log(" Year ", current_Year.trim())
                break;
         }
      else{
                 const next_button= page.locator("button[aria-label='Next month']");
               await  next_button.click();
   
            } 
          
 }
 const    AllDate_table_2=await check_Out.locator("td").all();
 let checkOutDateSelected=false;
 for(let date of AllDate_table_2)
 {  
     if((await date.innerText()).trim()===check_OutDay)
     {
            await   date.click();
                checkOutDateSelected=true;
                break;
     }

 }
await expect(checkOutDateSelected).toBeTruthy();
await expect(checkinDateSelected).toBeTruthy();
 
   await  page.waitForTimeout(3000);
   


    })
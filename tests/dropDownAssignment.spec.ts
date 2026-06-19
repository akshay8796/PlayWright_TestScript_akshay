import {test,Locator,expect  } from "@playwright/test";
import { text } from "node:stream/consumers";
test("Verify dropdown  assignment question ",async({page})=>
    {
 //1. navigate to the website 
         await page.goto("https://bstackdemo.com/");
       
  // locate the "Order by" dropdown     
         const  sortDropDown= page.locator("div.sort select");
  //Verify dropdown "order by" is Displayed   and Enabled     
     await     expect(sortDropDown).toBeEnabled();
      await    expect(sortDropDown).toBeVisible();
 // select the options "Highest to lowest"   

      await sortDropDown.selectOption("Highest to lowest")
          await    page.waitForTimeout(3000);
    
//Retrieve the list of product price element and name 
         const phoneList= page.locator(".shelf-item");
         const  phoneTitle= page.locator(".shelf-item__title");
               
         const  PhonePrize= page.locator(".val");

// Retrieve each product name and their correseponding prize   

 expect(await phoneTitle.count()).toBe(await PhonePrize.count());
         
            for(let i=0; i<await phoneTitle.count() ;i++)
            {
                   const phonetitleText=await phoneTitle.nth(i).textContent();
                   const phoneprizeText=await PhonePrize.nth(i).textContent();
                   console.log(phonetitleText + " " +phoneprizeText);

            }
           
    // print Highest product prize and their correseponding product    
            console.log( await phoneTitle.first().textContent() +" "+ await PhonePrize.first().textContent())

                       
    
     })
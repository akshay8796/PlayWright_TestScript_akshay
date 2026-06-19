import {test,Locator,expect  } from "@playwright/test";
import { text } from "node:stream/consumers";

test("Single select dropdown",async({page})=>
    {

         await page.goto("https://testautomationpractice.blogspot.com/");
         
     //select option from the dropdown  4 diffrent ways
      const single= page.locator("select#country");
          //await single.selectOption("France"); //visible text 
         //await single.selectOption({value:'uk'}); //by using value attribute
          await single.selectOption({label:'Australia'}); // by using label
          //await single.selectOption({index:3}); //by using index 
        
           

    //2. check number of option in the dropdown(count)
     const Multiple= page.locator("#country>option");
        await expect(Multiple).toHaveCount(10);


    //3. check an option present in the dropdown
      const  AlltextOption=(await Multiple.allTextContents()).map(text=>text.trim());
           console.log(AlltextOption)   // it print in the form of Array

           expect(AlltextOption).toContain('Australia');
    
   //4.printing option from the drop dropdown 
     
   for(const opt of AlltextOption)
   {
     console.log(opt)
   }

    })
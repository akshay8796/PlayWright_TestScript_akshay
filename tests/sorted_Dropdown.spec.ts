import {test,Locator,expect  } from "@playwright/test";
test("verify the sorted dropdown list ",async({page})=>
    {

         await page.goto("https://testautomationpractice.blogspot.com/");
        const dropdownAction=page.locator("#animals>option");
       
      console.log(await dropdownAction.allTextContents());
        const option=(await dropdownAction.allTextContents()).map(text=>text.trim());
         
        //const original=option; 
         //const sortedList=option.sort(); // ays likh ne se option ko ki mutable have uss may bhi sort hoga,
                                           // jis k karan hum compare nahe kar paynegay original or sorted list may.

      const original=[...option]; 
      const sortedList=[...option].sort();// ... spreade operator 
      // ... operator k sath use karne se sort upper wale original option ko effect nahe karega
      // ab original seprate list hogi or sorted list alg hoga.
     
      expect(original).toEqual(sortedList);
      console.log("original list :", original);
      console.log("Sorted list :", sortedList);
    


    })
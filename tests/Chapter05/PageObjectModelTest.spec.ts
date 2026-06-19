import {test,expect,Locator  } from "@playwright/test";
import { HomePage } from "../../src/pages/Homepage";
import { ResultPage } from "../../src/pages/ResultPage";
import { flipkart } from "../../src/pages/flipkart";

test("Page Object Model Test in playwright ",async({page})=>{
        
console.log("Test execution started...")

//create object of the homepage
      const home=new HomePage(page);
 await home.goToURL();
 await home.searchwithKeyword("flipkart"); 
     //await home.searchwithKeyword('${process.env.search}'); // if .env file contain "search"        


//create object of the Resultpage
     const result= new ResultPage(page);
     await result.clickOnPlayList();


//create object of the flipkart
       const flip=new flipkart(page);
   await flip.clickOnPlayList();
  
   await flip.ValidatePageTitle("Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!");
await page.waitForTimeout(4000);
})
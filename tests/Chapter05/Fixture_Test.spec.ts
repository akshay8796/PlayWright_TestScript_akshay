

import {test} from '../../src/fixture/TestFixture'


test("Implementing fixture in playwright ",async({page,HomePage,ResultPage,flipkart})=>{
 // page references in the  testfixute file       
console.log("Test execution started...")

//create object of the homepage
  
 await HomePage.goToURL();
 await HomePage.searchwithKeyword("flipkart"); 
     //await home.searchwithKeyword('${process.env.search}'); // if .env file contain "search"        


//create object of the Resultpage
  
     await ResultPage.clickOnPlayList();


//create object of the flipkart
  
   await flipkart.clickOnPlayList();
  
   await flipkart.ValidatePageTitle("Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!");
await page.waitForTimeout(4000);
console.log("Test ended")
})
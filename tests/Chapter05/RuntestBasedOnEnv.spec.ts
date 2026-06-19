// // Spec file – Use reference in test title then access data
// await homePage.searchWithKeywords(String(testData.Module1TestData?.Skill1));



import {test} from '../../src/fixture/TestFixture'


test("Implementing fixture in playwright ",async({page,HomePage,ResultPage,flipkart,TestData})=>{
 // page references in the  testfixute file       
console.log("Test execution started...")
console.log("Full Data:", JSON.stringify(TestData, null, 2));
console.log("Keys:", Object.keys(TestData));

//create object of the homepage
  
 await HomePage.goToURL();
 await HomePage.searchwithKeyword(String(TestData.Module1TestData?.Skill1)); 
     //await home.searchwithKeyword('${process.env.search}'); // if .env file contain "search"        


//create object of the Resultpage
  
     await ResultPage.clickOnPlayList();


//create object of the flipkart
  
   await flipkart.clickOnPlayList();
  
   await flipkart.ValidatePageTitle(String(TestData.Module1TestData?.Skill2));
await page.waitForTimeout(4000);
console.log("Test ended")
})
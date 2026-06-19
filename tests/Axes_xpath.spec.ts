import {test,expect,Locator  } from "@playwright/test";
import { table } from "node:console";

test("Xpath Axes demo ",async({page})=>{
 await page.goto("https://www.w3schools.com/html/html_tables.asp");

 //1. self axis -Select <td> element that contains "Germany"
  const germanySelf= page.locator("//td[text()='Germany']/self::td")
   
  await expect(germanySelf).toHaveText("Germany");

//2. parent axis - get parent <tr> of the "Germany" cell
       
const parentRow=page.locator("//td[text()='Germany']/parent::tr");
await expect(parentRow).toContainText("Alfreds Futterkiste")  ;     
 console.log(await parentRow.textContent());       // <===========================
 /*
 toContainText() partial substring match karta hai.
  Matlab agar actual text "Alfreds Futterkiste" hai,
   to uske andar "lfreds Futterkiste" bhi mil jata hai
 */

// await expect(parentRow).toHaveText("Alfreds Futterkiste");    <===========================
/*
Ek simple analogy:

parentRow = ek poora sentence
"Alfreds Futterkiste" = us sentence ka ek word/part

toHaveText() bolta hai: “poora sentence exactly yehi hai kya?” — isliye fail.

toContainText() bolta hai: “ye text andar kahin hai kya?” — isliye pass.
*/

// 3. child axix get all <td> children of the second <tr> in the html_table
 const secondRow=page.locator("//table[@id='customers']//tr[3]/child::td");
 await expect(secondRow).toHaveCount(3);

 // 4. Ancestor axis 

 const table =page.locator("//td[text()='Germany']/ancestor::table");
 await expect(table).toHaveAttribute('id','customers');

 // 5. Descendant axis
       const     alltd=page.locator("//table[@id='customers']/descendant::td");
     await expect(alltd).toHaveCount(18);
     
     
     
// 6. Following axis get the <td> that comes after "germany" in document order   

 const     following_td=page.locator("//td[text()='Germany']/following::td");
     await expect(following_td).toHaveCount(35);

// 7. Following-sibling axis get the <td> that comes afte the "Maria Anders" in the document
     const     following_sibling_td=page.locator("//td[text()='Maria Anders']/following-sibling::td");
     await expect(following_sibling_td).toHaveCount(1);

//8. preceding axis get <td> just Element before "Germany"
       const precedingCell=page.locator("//td[text()='Germany']/preceding::td[1]");
       await expect(precedingCell).toHaveCount(1);

//8. preceding-sibling axis get <td> just Element before "Germany"
       const left_sibling=page.locator("//td[text()='Germany']/preceding-sibling::td");
       await expect(left_sibling).toHaveCount(2); 

       await expect(left_sibling.nth(0)).toHaveText("Alfreds Futterkiste")   // individual find Element 
      await expect(left_sibling.nth(1)).toHaveText("Maria Anders")   // individual find Element  

})
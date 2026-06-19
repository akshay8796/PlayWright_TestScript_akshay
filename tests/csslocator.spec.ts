import {test,expect,Locator } from "@playwright/test";

test("Css Locator type",async({page})=>{

 await page.goto("https://demowebshop.tricentis.com/");
 const searchbox=page.locator("input#small-searchterms");
 //1. tag#id

 // const searchbox=page.locator("#small-searchterms");
 // await expect(searchbox).toBeVisible();
 // await searchbox.fill("T-shirt");


 // 2.tag.class 
    // const searchboxClass=page.locator("input.search-box-text");
    // await expect(searchboxClass).toBeVisible;
    // await  searchbox.fill("T shirt");
 
 
 
//3. tag[attribute='value']   
//    const searchboxClass=page.locator("input[class='search-box-text ui-autocomplete-input']");
//     const searchboxClass=page.locator("[class='search-box-text ui-autocomplete-input']"); // other way to identify
// const searchboxClass=page.locator("[class=search-box-text ui-autocomplete-input]"); // other way to identify
//     await expect(searchboxClass).toBeVisible;
//     await  searchbox.fill("T shirt");

//4 tag.class[attribute='value']
    const searchboxClass=page.locator("input.search-box-text[name='q']");
    await expect(searchboxClass).toBeVisible;
    await  searchbox.fill("T c shirt");

// 5 tag[class^=substring start letter]  // ^ symbol represent "start with" 
   // input[class^=sear]  search box css selector 

// 6 tag[class$=substring end letter]  // $ symbol represent "ends with"
   //  input[class$=put]

// 7 tag[class*= attribute value substring]  // * symbol represent "contains"
   //  input[class*=ui] 
  await page.waitForTimeout(2000);
 
 // 8 tag[attribute= attribute value][attribute=value]  //  works like "AND " wahen both cond  true 
                                                       //   it will match.
  //input[class*=ui][id=small-searchterms]

 //9 tag[attribute= attribute value]:not([attribute=value])
  
   //input[class='search-box-text ui-autocomplete-input']:not([id='small-searchterm'])
                              // id=  small-searchterms => :not ka use As a "OR" hai dynamic element jaise
                              // example button jaise start click karne se same button stop ho jata hai                          

//10 tag:not([attribute= attribute value])[attribute=value]
//11 tag:not([attribute= attribute value]):not([attribute=value])
//12 p[id='para1']+p     p[id='para1']+*   perform like  sibling                              
})


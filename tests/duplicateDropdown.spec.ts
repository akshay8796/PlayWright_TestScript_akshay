import {test,Locator,expect  } from "@playwright/test";
test("Verify dropdown contains duplicates",async({page})=>
    {

         await page.goto("https://testautomationpractice.blogspot.com/");
       // const dropdownoption=page.locator("#animals>option");
        const   DropDownOptions=page.locator('#colors>option');
     const options=(await DropDownOptions.allTextContents()).map(text=>text.trim());

     const myset=new Set<String>(); //set duplicate not allow
     const duplicates=[]; // array can allow the duplicate  
     
     for(const text of options)
     {
        if(myset.has(text))
          {
            duplicates.push(text);
          }
          else
          {
            myset.add(text);
          }
      }
console.log("Duplicated options are =",duplicates);
//expect(duplicates.length).toBe(0);
 if(duplicates.length>0)  
{
    console.log("Duplicate option ", duplicates)
}
})
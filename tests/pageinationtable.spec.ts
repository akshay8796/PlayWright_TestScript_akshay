import {test, expect ,Locator } from "@playwright/test";

test("Verify Chrome CPU load in dynamic table ", async({page})=>
{
    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");  
    

     let hasmorepages=true;
     while(hasmorepages)
     {
        const rows=await page.locator("#example tbody tr").all();
      for(let row of rows)
      {
              console.log(await row.innerText());
      }
      //button[aria-label="Next"]
      //button[aria-controls="example"]:has-text("›")
      //button[aria-controls="example"]:nth-child(9)
      const nextbutton= page.locator('button[aria-label="Next"]');
            const isDisabled= await nextbutton.getAttribute('class');
            if(isDisabled?.includes('disabled'))
            {
             hasmorepages=false;
            }
            else
            {
                await nextbutton.click();
            }


    }

})

test.only("Filter the rows and check the rows count ", async({page})=>
{
    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");  
    

    const dropdown=page.locator("#dt-length-0");
    await dropdown.selectOption({label: '25'});
      const rows= await page.locator('#example tbody tr').all(); // appraoch 1
      expect(rows.length).toBe(25); // assertion
  const rows2= page.locator('#example tbody tr'); //approach 2
   expect(rows2).toHaveCount(25);

})


test.only("Search for specific data in a table ", async({page})=>
{
    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");  
    

    const dropdown=page.locator("#dt-length-0");
        const  searchBox= page.locator("#dt-search-0");
        await searchBox.fill("Paul Byrd");
 const rows= await page.locator('#example tbody tr').all();
 if(rows.length>=1)
 {  let matchFound=false;
   for(let r of rows)
   {
        const text=await r.innerText();
      if(text.includes("paul Byrd"))
      {
        console.log("record found ");
       matchFound=true;
       break; 
      
      }
    }
 //expect(matchFound).toBe(true); // approach 1
 expect(matchFound).toBeTruthy(); //approach 2
 }
 else
 {
    console.log("No record found with search text");
 }
})
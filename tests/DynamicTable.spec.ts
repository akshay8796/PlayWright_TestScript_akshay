import {test, expect ,Locator } from "@playwright/test";

test("Verify Chrome CPU load in dynamic table ", async({page})=>
{

await page.goto("https://practice.expandtesting.com/dynamic-table");

const table=page.locator("table.table tbody");

await expect(table).toBeVisible();
//select all the rows,then find number of rows

const rows=await table.locator("tr").all();
console.log("Number of rows in the table ="+rows.length);
expect(rows).toHaveLength(4);
//Step=1 : 
//Read each row to check chrome presence
let CpuLoad='';
for(const ro of rows)
{
  const processName=await ro.locator("td").nth(0).innerText();
 if(processName==="Chrome")
 {
    //const CpuLoad  =await ro.locator('td:has-text("%")').innerText(); to get cpu using css selector
          CpuLoad =await ro.locator("td",{hasText:"%"}).innerText(); // to get cpu other approach using javascript syntax
        console.log("CPU load of chrome :",CpuLoad);
        break;
        }

}

//Step2:compare it with value in the yellow label
let yellowboxtext=await page.locator("#chrome-cpu").innerText();

console.log("Chrome CPU load from yellow box :",yellowboxtext);

if(yellowboxtext.includes(CpuLoad))
{
   console.log("Cpu load of chrome is equal ");
}
else 
{
    console.log("CPU load of chrome is not equal");
}
expect(yellowboxtext).toContain(CpuLoad);
 await page.waitForTimeout(5000);

})
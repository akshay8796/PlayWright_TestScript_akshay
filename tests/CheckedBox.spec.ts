import { test,expect,Locator } from "@playwright/test";
test(' Check box  ',async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");
// 1. select specific checkbox (sunday) using get bylabel and assert 
 const Sundaycheckbox=page.getByLabel('Sunday');
await Sundaycheckbox.check();
await expect(Sundaycheckbox).toBeChecked();



// 2. Capture all the checkboxes (days of the week)

const listOfdays=page.locator("input.form-check-input[type='checkbox']");
       const  listCount=await listOfdays.count();
       expect(listCount).toBe(7);
       
       
// 3. Check the checkbox using for each loop  and for loop

// for(let i=0;i<listCount;i++)
//  {
//        await listOfdays.nth(i).check();
//      expect(listOfdays.nth(i)).toBeChecked();
//  } 

  for( const day of (await listOfdays.all()))
  {
      await  day.check();
      await expect(day).toBeChecked();
  }
// 4 check the last 3 check box from the end using slice() and assert

    for( const day of (await listOfdays.all()).slice(-3))
  {
      await  day.check();
      await expect(day).toBeChecked();
  }

// 5 check the check box "unchecked or not"
for( const day of await listOfdays.all())
  {
    if(await day.isChecked())
    {

      await day.uncheck();                   // uncheck represent that  check box should not be check
       await expect(day).not.toBeChecked();  //      "not"  ka use  check nahe hona chaiye
    }
    else 
    {
       await day.check();
       await expect(day).toBeChecked();
    }
     
  }

// 6. Randomely select check boxes -select checkboxes by index (1,3,6) and assert
 const index=[1,3,6];
 //const days = await listOfdays.all();
  for(const a of index)
  { //  await days[i].check();
    const day = listOfdays.nth(a);
  await day.check();
  await expect(day).toBeChecked();
 
  }


  // 7. Select check box based on the label 
  const weekname="Friday";
  const week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];


for (const day of week) {
  if (day.toUpperCase()=== weekname.toUpperCase()) {
    await page.getByLabel(day).check();
    await expect(page.getByLabel(day)).toBeChecked();
    break;
  }
  await page.waitForTimeout(2000);
});
/*
slice()  = extract/copy elements (original unchanged)
splice() = add/remove/replace elements (original changed)
*/
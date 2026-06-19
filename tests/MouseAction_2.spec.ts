import { test, expect } from '@playwright/test';

test('Mouse Actions Demo', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
   
    await page.locator("text='Point Me'").hover();  // mouse hover
    await page.locator("text='Copy Text'").dblclick(); // double Click mouse Actions
   
   // Drag And Drop 
  //  await page.locator("#draggable").first().dragTo(page.locator("#droppable")); // type 1

   const source = page.locator("#draggable").first();                // type 2
   const destination = page.locator("#droppable").first();
   source.dragTo(destination);

   await page.dragAndDrop("#droppable","#draggable");         //type 3 -- this take string type

  


//  Mouse wheel Scroll Action and Page up down
 
   await page.locator("input[placeholder='Select an item']").click();
      
        await page.locator("#dropdown").hover();
       await page.mouse.wheel(0, 900); //  + for down
    
   await page.waitForTimeout(4000);

// Right Click

   await page.locator("text='Copy Text'").click({button:'right'});
   await page.waitForTimeout(4000);

   
    });
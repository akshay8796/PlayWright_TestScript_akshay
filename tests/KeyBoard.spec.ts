import { test, expect } from '@playwright/test';


test('KeyBoard Actions Demo', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    
    
    await page.locator("#field1").click();

     // Select All
    await page.keyboard.press('Control+A');

      // Copy
    await page.keyboard.press('Control+C');
    await page.waitForTimeout(4000);
    // Cut
   // await page.keyboard.press('Control+X');
   
    await page.locator("#field2").click();


    // Paste
    await page.keyboard.press('Control+V');

    await page.keyboard.press('Control+A');

    // Enter
    await page.keyboard.press('Enter');

        // Delete
    await page.keyboard.press('Delete');


    await page.waitForTimeout(4000);

})
/*

    // Arrow Keys
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowUp');
    await page.keyboard.press('ArrowLeft');
    await page.keyboard.press('ArrowRight');

    Useful Mouse Methods
Method	         Purpose
click()	         Single click
dblclick()	     Double click
hover()	         Mouse hover
dragTo()	     Drag & Drop
mouse.move()	 Move cursor
mouse.down()	 Press mouse button
mouse.up()	     Release mouse button
mouse.wheel()	 Scroll

Useful Keyboard Methods

Method	          Purpose
keyboard.type()	    Type text
keyboard.press()	Press key
keyboard.down()	    Hold key
keyboard.up()	    Release key
locator.press()	    Enter text quickly
*/
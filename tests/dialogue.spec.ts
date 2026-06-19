import {test, expect ,Locator, Page } from "@playwright/test";
import { text } from "node:stream/consumers";
test("Simple Dialogue box", async({page})=>
{
   await page.goto("https://testautomationpractice.blogspot.com/");
   // Register a dialog handler
   page.on('dialog',(dialog)=>
        { console.log("Dialog type is:",dialog.type()); //return type of the dialog 
           expect(dialog.type()).toContain('alert');
           console.log("dialog Text :",dialog.message()); //return message from dialog
           expect(dialog.message()).toContain("I am an alert box");
           dialog.accept();     

        })
        await page.locator("button[onclick='myFunctionAlert()']").click();
await page.waitForTimeout(3000);
})

test("Confirm Dialogue box", async({page})=>
{
   await page.goto("https://testautomationpractice.blogspot.com/");
   page.on('dialog',(dialog)=>
        { console.log("Dialog type is:",dialog.type()); //return type of the dialog 
           expect(dialog.type()).toContain('confirm');
           console.log("dialog Text :",dialog.message()); //return message from dialog
           expect(dialog.message()).toContain("Press a button!");
        //   dialog.accept(); // close dialog by accepting
           dialog.dismiss(); //close dialog by dismissing    

        });

        await page.locator("button[id=confirmBtn]").click();
       
      expect(page.locator("#demo")).toHaveText("You pressed Cancel!");
await page.waitForTimeout(3000);
})

test.only("Prompt Dialogue box", async({page})=>
{
   await page.goto("https://testautomationpractice.blogspot.com/");
   page.on('dialog',(dialog)=>
        { console.log("Dialog type is:",dialog.type()); //return type of the dialog 
           expect(dialog.type()).toContain('prompt');
           console.log("dialog Text :",dialog.message()); //return message from dialog
           expect(dialog.message()).toContain("Please enter your name:");
           expect(  dialog.defaultValue()).toContain("Harry Potter"); // default text value present 
          dialog.accept(' ABCDEFG '); // close dialog by accepting
         //  dialog.dismiss(); //close dialog by dismissing    

        });
        
        await page.locator("button[id='promptBtn']").click();
      const text=await page.locator("#demo").innerText();
      console.log("Output text ",text);
      expect(page.locator("#demo")).toHaveText("Hello  ABCDEFG ! How are you today?");
await page.waitForTimeout(3000);
})
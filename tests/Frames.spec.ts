import {test, expect ,Locator, Page } from "@playwright/test";
test("frame demo", async({page})=>
{
   await page.goto("https://ui.vision/demo/webtest/frames/");
      const frames=page.frames();
 console.log("Number of frame ", frames.length);

//-----Approach 1:using page.frame()

  const   frame =page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"}); //using url
                        // url as it is  mandatory to  written  { } 
  //   const frame = page.frame({ name: "bato" });   using name  If the <iframe> has name="bato"
  if(frame)
    {
        frame.locator("input[name='mytext1']").fill("Hello"); // mostlty use then below Approach
    // await    frame.fill("input[name='mytext1']","Hello");
    //                 // ("locator ","value")
    //     await       frame.check("locator","label of radio button") //for radio     
    }      
    else{
    console.log("From is not availabel")
    }                

 await page.waitForTimeout(2000);

 //
})


test("frame demo Approach 2", async({page})=>
{
   await page.goto("https://ui.vision/demo/webtest/frames/");
      const frames=page.frames();
 console.log("Number of frame ", frames.length);

//-----Approach 2:using page.frameLocator 

  const   inputbox =page.frameLocator("[src='frame_1.html']").locator("[name='mytext1']");
                        //^^^^Inside the parentheses, you must provide a CSS selector that identifies the iframe 

          inputbox.fill("John");     

 await page.waitForTimeout(2000);

 
})
test.only("Inner frame", async({page})=>
{
   await page.goto("https://ui.vision/demo/webtest/frames/");
     
   const frame3= page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});
   //frame3?.locator("input[name='mytext3']").fill("welcome"); // to avoid ? we can use if condition 
          if(frame3)
          {
        const  childFrame=  frame3.childFrames();
        console.log("child frames inside the frame 3 :",childFrame.length);// only 1 child 
            const radio=childFrame[0].getByLabel("I am a human");
        await   radio.check();  //select radio button 
        await   expect(radio).toBeChecked(); //assertion
          }
         else
            {
                console.log("Frame 3 is not found ..");
            }

 await page.waitForTimeout(3000);

 
})


import { test,Locator,expect } from "@playwright/test";

test("Comparing method ", async({page})=>{

         await page.goto("https://demowebshop.tricentis.com/");
         const products= page.locator(".product-title");

         //1) innertext()  vs textContent() 
       // console.log( await products.nth(1).innerText()); // Extract plain text and "Eliminate" the whitespace and line breaks
       // console.log( await products.nth(1).textContent());
   
       for(let i=0;i<await products.count();i++)
       {
        // const text=await products.nth(i).innerText();// Extract plain text and "Eliminate" the whitespace and line breaks
        //     const     text=await   products.nth(i).textContent(); // Extract text with whitespace,hidden element,line breaks which is not recommended    
             const     text=await products.nth(i).textContent(); //  so to avoid white space we need to use trim() with textconstent()
         console.log(text?.trim());

        }

})
 test("Comparing method allInnertext() vs alltextContent() ", async({page})=>{

         await page.goto("https://demowebshop.tricentis.com/");
         const products= page.locator(".product-title");

        // const productnames=await products.allInnerTexts();
        //  console.log("Product Names Captured by allInnertext() :", productnames)
           
           const  productname=await products.allTextContents(); 
            console.log("Product Names Captured by alltextContent() :", productname)
                       const  productnamesTrimed= productname.map(text =>text.trim());
               console.log("Product name after Trime :"+ productnamesTrimed)
                    }


                    
)
 // All method = Convert Locator ==>locattor[]
 //return array of locators
 //return array of locators (stores locators of products)/converts locator  to array of locator (for iteration)
test.only("method all()", async({page})=>{

         await page.goto("https://demowebshop.tricentis.com/");
         const products= page.locator(".product-title");

        
           
           const  productLocator=await products.all(); 
           console.log("Product Names Captured by all) :", productLocator)
        //   console.log(await productLocator[1].innerText()); 
        
        for(let produc of productLocator)
        {
           console.log(await produc.innerText());
        }
         for(let i in productLocator) // when ever we use in this represent an index
                        // from locator we expract the index then use it in and then text
            {
             console.log(await productLocator[i].innerText());
            }           
                   
    
    }

)
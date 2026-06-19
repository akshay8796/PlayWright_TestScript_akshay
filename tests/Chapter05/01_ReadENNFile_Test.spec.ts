import { test, expect, Page } from "@playwright/test";



/* 
 0> ${process.env.URL} ye syntax hai .env se data lene k liye

 1>  .env file data lene k liye apko config file may niche diye code ko uncomment karna padega
 import dotenv from 'dotenv';
 import path from 'path';
 dotenv.config({ path: path.resolve(__dirname, '.env') }); 
 
 2> npm install dotenv --save        <=== ye run karne ka terminal may one time

     
*/
          test("method all()", async({page})=>{

         await page.goto(`${process.env.URL}`);
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
import {test,expect,Locator  } from "@playwright/test";

test("Static Table ",async({page})=>{

      await  page.goto("https://testautomationpractice.blogspot.com/");

      //capture the table 
       const table = page.locator("table[name='BookTable'] tbody");
       await expect(table).toBeVisible();

       //1) count number of rows in the table
     const row=  table.locator("tr"); // return all the rows including header
  await expect(row).toHaveCount(7);
   const rowcount =await row.count();
        console.log("number of rows in a table ", rowcount);
     expect(rowcount).toBe(7);  
       
       //2. count number of header /columns
      const columns= row.locator("th");
      const columnCount= await columns.count();
      console.log("Number of column/headers :",columnCount);

     expect(columnCount).toBe(4); //approach 2

      //3. Read all data from 2nd row(index 2 means row including header)
    const  secondRowCell=row.nth(2).locator("td");
   
    const secondRowsText=await secondRowCell.allInnerTexts();
    
    console.log("second row data ",secondRowsText);
     await expect(secondRowCell).toHaveText([ 'Learn Java', 'Mukesh', 'Java', '500' ]);

     // 4.Read all data from the table (excluding header)
         const allRowdata=await row.all();// get all row locator //all return array of locator 
      console.log(" BookName Authod "," Subject ", " Price ")
      for(let row of allRowdata.slice(1))  //skip heaer row
      {
           const columns= await row.locator("td").allInnerTexts();
           console.log(columns);
      }
      
     //
    //5. Print book name where author is mukesh  

              console.log("================== Books  return by mukesh ==============")
              const mukeshBook:string[]=[];
      for(let ro of allRowdata.slice(1))  //slice skip  the row and start from row 1 to till end
      {
              const cell=await ro.locator("td").allInnerTexts();
                const  author=cell[1];
                   const book=cell[0];
            
    if (author === "Mukesh") 
     {

        console.log(`${author} \t ${book}`);
        mukeshBook.push(book);

    }
    
     }
     expect(mukeshBook).toHaveLength(2);
    
     //6. calculate total prize of book 
   let TotalPrize=0;
             
      for(let ro of allRowdata.slice(1))  //slice skip  the row and start from row 1 to till end
      {
              const cell=await ro.locator("td").allInnerTexts();
              const Prize=cell[3];
            
       TotalPrize=TotalPrize+parseInt(Prize);
     }
     console.log("total prize ",TotalPrize);

expect(TotalPrize).toBe(7100);
})
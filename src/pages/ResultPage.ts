import { Locator, Page } from "@playwright/test";


export class ResultPage
{
    readonly page:Page;
   readonly ClickOnlink:Locator;
   
 constructor(page:Page)
 {
       this.page=page;
     //Element
     this.ClickOnlink=page.locator("a[href='https://www.flipkart.com/']");  
 }

 //Methods


async clickOnPlayList()
{
     await this.ClickOnlink.first().click()
}
}



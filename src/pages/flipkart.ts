import { expect, Locator, Page } from "@playwright/test";


export class flipkart
{
    readonly page:Page;
   readonly ClickOn_X:Locator;

 constructor(page:Page)
 {
       this.page=page;
     //Element
     this.ClickOn_X=page.getByRole('button', { name: "✕" }); 
 }

 //Methods
async clickOnPlayList()
{
     try {
    await this.ClickOn_X.click({ timeout: 3000 });
} catch {
    console.log("Popup not present");
}
}

async ValidatePageTitle(title:string)
{ 
    await expect(this.page).toHaveTitle(title);
}
}


//await page.getByText('X').click();w
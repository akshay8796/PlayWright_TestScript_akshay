import { Locator, Page } from "@playwright/test";


export class HomePage
{
    readonly page:Page;
    readonly searchTextbox:Locator;
 constructor(page:Page)
 {
       this.page=page;
     //Element
     this.searchTextbox=page.locator("textarea[title='Search']");  
 }

 //Methods
 async goToURL()
 {
    //await this.page.goto('https://www.google.com/');
    // Fetch URL Based on Env.

if (process.env.Test_Execution_env == 'qa') {

    await this.page.goto(`${process.env.GOOGLE_URL}`);
    console.log(`Tests are running in ${process.env.Test_Execution_env} env.`);

} else if (process.env.Test_Execution_env == 'dev') {

    await this.page.goto(`${process.env.GOOGLE_URL}`);
    console.log(`Tests are running in ${process.env.Test_Execution_env} env.`);

}
 }

async searchwithKeyword(keyword:string)
{
    await this.searchTextbox.click();
    await this.searchTextbox.fill(keyword);
    await this.searchTextbox.press('Enter');

}
}

//await page.getByText('X').click();
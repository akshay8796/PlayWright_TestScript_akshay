import{ test,expect } from "@playwright/test";

test("Verify page title",async ({page})=>{

await page.goto("https://code.visualstudio.com/thank-you?dv=win64user");
const title:string =await page.title();
console.log("title",title);
await expect(page).toHaveTitle("Thanks for downloading Visual Studio Code");

});

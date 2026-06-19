import{ test,expect } from "@playwright/test";

test("Verify page URL",async ({page})=>{

await page.goto("https://code.visualstudio.com/thank-you?dv=win64user");
const url:string =await page.url();
console.log("page URL ",url);
await expect(page).toHaveURL("https://code.visualstudio.com/thank-you?dv=win64user");

});
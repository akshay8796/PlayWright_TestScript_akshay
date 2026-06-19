/* open app  --before all
  1.      login  --before each
             find no. of product
       logout
 2. 
       login
         add product to cart
       logout
close app
*/
import { test, expect,Page } from '@playwright/test';
let page:Page; // page globally use kiya gaya hai taki conflict na ho
               // assign that page inside every test method
test.beforeAll('App open',async({browser})=>
{
    page=await browser.newPage();
 await page.goto('https://demoblaze.com/');


})
test.afterAll('App close',async({})=>
{
  await page.close();
 

})

test.beforeEach('login ',async()=>{
 await page.locator('#login2').click();
 await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').fill('test@123');
  await page.locator("button[onclick='logIn()']").click();
  await page.waitForTimeout(2000);
})

test.afterEach('login ',async()=>{
 await page.locator('#logout2').click();

})


test.describe('mygroup',async()=>{
test('Find number of products',async()=>
{
    const products=page.locator('#tbodyid .hrefch');
    const count=await products.count();
    console.log('Number of products :',count);
    await expect(products).toHaveCount(9);
})

test('Add product to cart ',async()=>
{
 await page.locator("text='Samsung galaxy s6'").click();
 //handle alert before the click
page.once('dialog', async (dialog) => {
  expect(dialog.message()).toContain('Product added.');
  await dialog.accept();
}
);

await page.locator('.btn.btn-success.btn-lg').click();
})
})



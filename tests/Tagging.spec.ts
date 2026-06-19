import { test, expect,Page } from '@playwright/test';

/*
test1 -sanity
test 2-regression,sanity
test 3-regression


*/

/*
 test('@sanity @regression Check title of the home page  ', async ({ page }) => {
    await page.goto('https://demoblaze.com/');
    await expect(page).toHaveTitle('STORE');
});
*/
//use mostly VVVVVVVvvv

//sanity
 test('Check title of the home page  ',{tag:'@sanity'}, async ({ page }) => {
    await page.goto('https://demoblaze.com/');
    await expect(page).toHaveTitle('STORE');
});

//regression
 test('check Navigate to store page  ',{tag:'@regression'}, async ({ page }) => {
    await page.goto('https://www.google.com/');
    await page.locator("text='Store'").click();
    await expect(page).toHaveTitle('Google Store for Google Made Devices & Accessories');
});

// sanity and regression 
 test('check the text    ',{tag:['@sanity','@regression']}, async ({ page }) => {
    await page.goto('https://www.google.com/');
    await page.locator("text='Store'").click();
   
    await expect(page.locator("text='Popular on the Google Store.'")).toHaveText('Popular on the Google Store.');
});

/* Run test which belongs to   specific tag test method contain example '@sanity'
   ======= npx playwright test Tagging.spec.ts --grep "@sanity"  --headed 

2. Run test which belongs to   both tags sanity and regression
    =======npx playwright test Tagging.spec.ts --grep "(?=.*@sanity)(?=.*@regression)"   --headed 

3. Run test which belongs to   either tags sanity , regression
  ======== npx playwright test Tagging.spec.ts --grep "@sanity|@regression"  --headed

4. Run sanity test which are not belongs to regression  
 ========= npx playwright test Tagging.spec.ts --grep "@sanity" --grep-invert "@regression"  --headed

5. Test case which belong to regression will not run
 ==========npx playwright test --grep-invert @regression
 you can perform above all tags in playwright.config.ts 
 in defineConfig({
  testDir: './test',
  grep:/@sanity/,             <==== for sanity
 })

 grep:/(?=.*@sanity)(?=.*@regression)/,  <=== for both regression and sanity
  grepInvert:/@regression/ ,             <=== test belong to regression will not run
*/
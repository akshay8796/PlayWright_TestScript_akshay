import { test, expect } from '@playwright/test';

test('screenshot', async ({ page }) => {
 await page.goto("https://demoblaze.com/");
  const timestamp=Date.now();
  await page.screenshot({path:'Screenshots/'+'homepage'+timestamp+'.png'})

});
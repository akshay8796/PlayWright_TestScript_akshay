import { test, expect,Page } from '@playwright/test';
/*
only == specific test run
skip == if you have multiple test and you want skip some test  use test.skip()
 skip using some condition
fail == intentionally want to fail test method
fixme == test is not implement completely
slow  == it will increase the execution time
*/

// only
 test.only('test 1  ', async ({ page }) => {
    await page.goto('https://demoblaze.com/');
    await expect(page).toHaveTitle('STORE');
});

// skip
 test.skip('test 2  ', async ({ page }) => {
    await page.goto('https://demoblaze.com/');
    await expect(page).toHaveTitle('STORE');
});

// skip the test based on some condition
 test.skip('test 3  ', async ({ page,browserName }) => {
    test.skip( browserName ==='firefox','this test skipped if browser is firefox');
    await page.goto('https://demoblaze.com/');
    await expect(page).toHaveTitle('STORE');
});
// fail  for Flaky test
 test.fail('test 4  ', async ({ page }) => {
    await page.goto('https://demoblaze.com/');
    await expect(page).toHaveTitle('STORE');
});

// fixme
 test.fixme('test 4  ', async ({ page }) => {
    await page.goto('https://demoblaze.com/');
    // scenario - we added test but test is not yet completed or completly implemented
});

// Slow 
 test('test 5', async ({ page }) => {
    test.slow(); // triple the default timeout (default :30 sec after tripling :90 secs) //optional
    await page.goto('https://demoblaze.com/');
    await expect(page).toHaveTitle('STORE');
});

import { test, expect } from '@playwright/test';
test.describe('Group1',async()=>
{
test('test 1', async ({ page }) => {
    console.log("this is test 1");
});
test('test 2', async ({ page }) => {
    console.log("this is test 2");
});

})

test.describe('Group2',async()=>
{
test('test 3', async ({ page }) => {
    console.log("this is test 3");
});

test('test 4', async ({ page }) => {
    console.log("this is test 4");
});
test('test 5', async ({ page }) => {
    console.log("this is test 5");
});
})
//npx playwright test grouping.spec.ts --grep Group1  --headed
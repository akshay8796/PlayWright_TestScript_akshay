import { test, expect } from '@playwright/test';

test.beforeEach('Before each',async()=>{
    console.log("this is before each");
 
})
test.afterEach('After each',async()=>{
    console.log("this is After each");
 
})

test('test 1', async ({ page }) => {
    //login
    console.log("this is test 1");
    //logout
});
test('test 2', async ({ page }) => {
     //login
    console.log("this is test 2");
     //logout
});

test('test 3', async ({ page }) => {
     //login
    console.log("this is test 3");
     //logout
});

test('test 4', async ({ page }) => {
     //login
    console.log("this is test 4");
     //logout
});
test('test 5', async ({ page }) => {
     //login
    console.log("this is test 5");
     //logout
});

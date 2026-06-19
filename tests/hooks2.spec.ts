import { test, expect } from '@playwright/test';
//Execute only once
test.beforeAll('Before All',async()=> 
{
    console.log("Before all ....."); // login ,setup connection database, read excel xml file
})
//Execute only once
test.afterAll('Before All',async()=>
{
    console.log("After all .....");// logout ,disconnect database,close read excel xml file
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

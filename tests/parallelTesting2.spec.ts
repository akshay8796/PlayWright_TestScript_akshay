import { test, expect,Page } from '@playwright/test';
test.describe.configure({mode:'parallel'}) 
/*
 we can decide worker size at run time using below command even though configure file have worker value
 it still take worker size from terminal using below command 

 npx playwright test --workers 2

 if worker size is 1 then it will execute the test in series even in parallel mode
*/
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

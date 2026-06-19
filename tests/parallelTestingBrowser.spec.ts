import { test, expect,Page } from '@playwright/test';
test.describe.configure({mode:'parallel'}) // by default config file se hota hai but testclass level pe karna hai to
                                         //fullyParallel: true, iss may worker count kam nahe karega , jitne test unte worker default kam karenge
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
/*

 {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      fullyParallel: true,  <==== ye add karne ka chrome may jis karan sirf chrome may parallel execution hoga
                                     fire fox may nahe, use may series may he run hoga
    },
    {
       name: 'firefox',
       use: { ...devices['Desktop Firefox'] },
    }

*/
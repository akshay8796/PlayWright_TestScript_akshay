import { test, expect,Page } from '@playwright/test';

test.describe.configure({mode:'serial'}) // by default config file se hota hai but testclass level pe karna hai to
                                         //fullyParallel: false, workers:3,
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
test.describe('Serial Tests', () => {

    test.describe.configure({ mode: 'serial' });

    test('Login', async () => {});
    test('Search', async () => {});
    test('Checkout', async () => {});
});

test.describe('Parallel Tests', () => {

    test.describe.configure({ mode: 'parallel' });

    test('Login2', async () => {});
    test('Search2', async () => {});
});
*/
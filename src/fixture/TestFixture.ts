import { test as base } from '@playwright/test';
import { HomePage } from '../pages/Homepage';
import { ResultPage } from '../pages/ResultPage';
import { flipkart } from '../pages/flipkart';

import {loadTestData} from '../utils/JsonHelper';
import { TestData } from '../Interface/Module1_testdata.interface';

export const test = base.extend<{
    saveLogs: void;
    HomePage: HomePage;
    ResultPage:ResultPage;
   flipkart :flipkart;
   TestData:TestData
   
   
}>({
  saveLogs: [async ({}, use) => {

    console.log("Global before is running...");

    await use();

    console.log("Global afterEach is running...");

  }, 
  { auto: true }],


    HomePage: async ({ page }, use) => {

        const homePage = new HomePage(page);

        await use(homePage);

    },


    ResultPage: async ({ page }, use) => {

        const resultPage = new ResultPage(page);

        await use(resultPage);

    },


    flipkart: async ({ page }, use) => {

        const flipkartPage = new flipkart(page);

        await use(flipkartPage);

    },

    TestData: async ({}, use) => {

    const data = await loadTestData();

    await use(data);

}
});
export{expect} from "@playwright/test";
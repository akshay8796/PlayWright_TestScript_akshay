import {test,Locator,expect} from "@playwright/test";

test("Xpath test locator", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/desktops");

  const logo: Locator = page.locator("//img[@alt='Tricentis Demo Web Shop']");
  await expect(logo).toBeVisible();

  const list: Locator = page.locator("//h2[@class='product-title']//a");
  const listCount: number = await list.count();

  console.log("Total number of elements " + listCount);

  expect(listCount).toBeGreaterThan(0);
 console.log("=============== Text using innerText=========");

  console.log("First element", await list.first().innerText());
  console.log("Last element", await list.last().innerText());
  console.log("Specific element", await list.nth(3).innerText());

 console.log("=============== Text using text Content  =========");
   console.log("First element", await list.first().textContent());
  console.log("Last element", await list.last().textContent());
  console.log("Specific element", await list.nth(3).textContent());

  console.log("=============== Text from given list using innerText =========");

  for (let i = 0; i < listCount; i++) {
    const text = await list.nth(i).innerText();
    console.log(i, text);
  }

  console.log("=============== Text from given list using all text constain =========");
   const ProductTitle=await list.allTextContents();
   for(let a of ProductTitle)
   {
 console.log(a);
   }

});
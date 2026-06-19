import {test,expect,Locator  } from "@playwright/test";

test("Autowait ",async({page})=>{

    page.goto("https://demowebshop.tricentis.com/");

    //1. Auto retrying assertion(Automatically retries until it pass or timeout)
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/"); 
    await expect(page.locator("img[alt='Tricentis Demo Web Shop']")).toBeVisible();
 
    await expect(page.locator("div[class='product-grid home-page-product-grid'] strong")).toHaveText("Featured products");
  
    //2. Non retrying Assertion 

       const  title=await page.title();
       expect(title.includes("Demo Web Shop")).toBeTruthy(); //no auto retry

    const welcome =await page.locator("h2.topic-html-content-header").textContent();
    expect(welcome).toContain("Welcome"); // no retrying 

    // 3. negative matcher (applicable for both Auto retry and retry)
await   expect(page.locator("img[alt='Tricentis Demo Web Shop']")).not.toBeVisible();
             expect(welcome).not.toContain("Welcome");
await  page.waitForTimeout(3000);
})
/*

| Assertion           | Syntax                                                  | Short Explanation              |
| ------------------- | ------------------------------------------------------- | ------------------------------ |
| `toBeVisible()`     | `await expect(locator).toBeVisible();`                  | Verify element is visible      |
| `toHaveText()`      | `await expect(locator).toHaveText("Login");`            | Verify exact text              |
| `toContainText()`   | `await expect(locator).toContainText("Login");`         | Verify partial text            |
| `toHaveURL()`       | `await expect(page).toHaveURL("https://example.com");`  | Verify page URL                |
| `toHaveTitle()`     | `await expect(page).toHaveTitle("Home");`               | Verify page title              |
| `toBeEnabled()`     | `await expect(locator).toBeEnabled();`                  | Verify element is enabled      |
| `toBeDisabled()`    | `await expect(locator).toBeDisabled();`                 | Verify element is disabled     |
| `toHaveValue()`     | `await expect(locator).toHaveValue("admin");`           | Verify input value             |
| `toHaveCount()`     | `await expect(locator).toHaveCount(5);`                 | Verify element count           |
| `toBe()`            | `expect(actual).toBe(expected);`                        | Verify exact value             |
| `toEqual()`         | `expect(data).toEqual(expected);`                       | Verify objects/arrays          |
| `toBeTruthy()`      | `expect(value).toBeTruthy();`                           | Verify value is truthy         |
| `toBeFalsy()`       | `expect(value).toBeFalsy();`                            | Verify value is falsy          |
| `toBeNull()`        | `expect(value).toBeNull();`                             | Verify value is null           |
| `toBeUndefined()`   | `expect(value).toBeUndefined();`                        | Verify value is undefined      |
| `toBeChecked()`     | `await expect(locator).toBeChecked();`                  | Verify checkbox/radio selected |
| `toHaveAttribute()` | `await expect(locator).toHaveAttribute("type","text");` | Verify attribute value         |
| `toHaveClass()`     | `await expect(locator).toHaveClass("btn");`             | Verify CSS class               |

*/
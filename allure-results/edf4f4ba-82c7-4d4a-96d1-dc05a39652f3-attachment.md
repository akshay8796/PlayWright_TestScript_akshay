# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: practice.spec.ts >> Dynamic table 
- Location: tests\practice.spec.ts:4:5

# Error details

```
Error: page.waitForTimeout: Test ended.
```

# Test source

```ts
  1  | import{ test, expect,Page } from "@playwright/test"
  2  | import { text } from "node:stream/consumers";
  3  | 
  4  | test("Dynamic table ",async({page})=>{
  5  |  await  page.goto("https://vinothqaacademy.com/iframe/");
  6  |       const  frame=page.frame("https://vinothqaacademy.com/webtable/");
  7  | 
  8  |    await  frame?.locator("#nameInput").fill("akshay");
> 9  |        page.waitForTimeout(2000);
     |             ^ Error: page.waitForTimeout: Test ended.
  10 | 
  11 | })
  12 | 
  13 | 
```
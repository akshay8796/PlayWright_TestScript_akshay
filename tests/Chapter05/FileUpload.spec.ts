import {test, expect ,Locator, Page } from "@playwright/test";
import { text } from "node:stream/consumers";
test("Simple Dialogue box", async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");
await page.locator("input[type='file']").first().setInputFiles("C:/Users/lenovo/Desktop/P2.jpg");
await page.locator("input[id='multipleFilesInput']").setInputFiles(["C:/Users/lenovo/Desktop/P2.jpg","C:/Users/lenovo/Desktop/igp-Copy.txt"]);
await page.waitForTimeout(4000);
})
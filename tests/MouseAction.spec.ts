import { test, expect } from '@playwright/test';

test('Mouse Actions Demo', async ({ page }) => {


    // Single Click
    await page.click("button[name='start']");

    // Double Click
    await page.dblclick("button");

    // Right Click
    await page.click("button", { button: 'right' });

    // Hover
    await page.locator(".dropbtn").hover();

    // Mouse Move
    await page.mouse.move(200, 300);

    // Mouse Down
    await page.mouse.down();

    // Mouse Up
    await page.mouse.up();

    // Drag and Drop
    await page.locator("#draggable").dragTo(
        page.locator("#droppable")
    );

    // Scroll using mouse wheel
    await page.mouse.wheel(0, 500);
});
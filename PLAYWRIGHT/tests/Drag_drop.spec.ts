import {test, expect} from '@playwright/test';
test('drag and grop title', async ({page}) => {
    await page.goto('https://practice.expandtesting.com/drag-and-drop');
    //await expect(page).toHaveTitle('Drag and Drop');
    await expect(page.title()).resolves.toMatch(/Drag and Drop/);
})
test('drag and grop test', async ({page}) => {
    await page.goto('https://practice.expandtesting.com/drag-and-drop');
    await page.locator('#coloumn-A').click();
    await page.locator('#coloumn-B').click();
    const drag = await page.locator('#coloumn-A');
    const drop = await page.locator('#coloumn-B');


})
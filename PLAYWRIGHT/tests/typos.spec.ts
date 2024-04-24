import {test, expect} from '@playwright/test';
test('typo title', async ({page}) => {
    await page.goto('https://practice.expandtesting.com/typos');
    await expect(page).toHaveTitle(/Typos/);  
})
import { test, expect } from '@playwright/test';

test('File Downloader title', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/download');
  await expect(page).toHaveTitle(/File Downloader/);
});  

test('downloading files', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/download');  
  const downloadPromise = page.waitForEvent('download');
  await page.getByTestId('1713349339148_pic').click();
  const download1 = await downloadPromise;
  await page.getByTestId('xpath-css.png').click();
  const download2 = await downloadPromise;
});
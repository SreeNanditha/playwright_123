import { test, expect } from '@playwright/test';
test('fingress title', async ({ page }) => {
  await page.goto('https://192.168.1.49:8086/');
  await expect(page).toHaveTitle(/Fingress/);
});
test('fingress url link', async ({ page }) => {
    await page.goto('https://192.168.1.49:8086/');
    await expect(page).toHaveURL('https://192.168.1.49:8086/');
    await page.close();
  });
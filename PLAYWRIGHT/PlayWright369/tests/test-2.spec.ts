import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/my-browser');
  await page.getByRole('button', { name: 'Show Browser Information' }).click();
  await page.getByRole('button', { name: 'Hide Browser Information' }).click();
});
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/checkboxes');
  await page.getByLabel('Checkbox 1').check();
  await page.getByLabel('Checkbox 1').uncheck();
  await page.getByLabel('Checkbox 2').check();
  await page.getByLabel('Checkbox 2').uncheck();
});
import { test, expect } from '@playwright/test';
  test('fingress sign in button', async ({ page }) => {
    await page.goto('https://192.168.1.49:8086/');
    await page.locator('[class*="fa fa-circle"]').nth(1).click();
    await page.getByText('Login').click();
      await page.locator('[placeholder="Domain Id"]').fill('Fingress');
      await page.locator('[placeholder="Login Id"]').fill('Maker');
      await page.locator('[placeholder="Password"]').fill('1234');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.locator('text="Insurance"').click();
  await page.locator('text="Reports"').click();
  await page.getByText('Test').nth(0).click();
  const downloadPromise = page.waitForEvent('download');
await page.getByText('Save as PDF').click();
const download = await downloadPromise;

await page.locator('[class*="mdc-button__ripple"]').nth(9).click();
const downloadPromise1 = page.waitForEvent('download');
await page.getByText('Save as CVS').click();
const download1 = await downloadPromise;


  


       //await page.close();
  });
  
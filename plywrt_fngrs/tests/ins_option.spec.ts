import { test, expect } from '@playwright/test';
test('Insurance option', async ({ page }) => {
    await page.goto('https://192.168.1.49:8086/app/login?logout=true');
      await page.locator('[placeholder="Domain Id"]').fill('Fingress');
      await page.locator('[placeholder="Login Id"]').fill('Master');
      await page.locator('[placeholder="Password"]').fill('1234');
      await page.getByRole('button', { name: 'Sign in' }).click();
    await page.goto('https://192.168.1.49:8086/launcher'); 
    await page.getByText('Insurance').click();
       //await page.close();
  });
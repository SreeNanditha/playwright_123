import { test, expect } from '@playwright/test';
test('Insurance option', async ({ page }) => {
    await page.goto('https://192.168.1.49:8086/app/login?logout=true');
      await page.locator('[placeholder="Domain Id"]').fill('Fingress');
      await page.locator('[placeholder="Login Id"]').fill('Maker');
      await page.locator('[placeholder="Password"]').fill('1234');
      await page.getByRole('button', { name: 'Sign in' }).click();

    await page.goto('https://192.168.1.49:8086/launcher'); 
    await page.locator('[class="mdc-button__label"]').nth(4).click();
    await page.getByText('Insurance').click();
       
    await page.goto('https://192.168.1.49:8086/page/8aab879b-dd90-4c97-9554-7b15cad8891d/1c25d1b6-96de-48f5-bc6e-b2cab70a35d4'); 
    await page.getByText('Reports').click();

    await page.goto('https://192.168.1.49:8086/fgReport/list/1c25d1b6-96de-48f5-bc6e-b2cab70a35d4'); 
    await page.getByText('Test').click();
       

  });
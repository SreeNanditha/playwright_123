import { test, expect } from '@playwright/test';
test('fingress log in redirect to form', async ({ page }) => {
  await page.locator('[placeholder="Domain Id"]').fill('Fingress');
  await page.locator('[placeholder="Login Id"]').fill('Master');
  await page.locator('[placeholder="Password"]').fill('1234');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByText('Insurance').click();
  await page.getByText('Reports').click();
});
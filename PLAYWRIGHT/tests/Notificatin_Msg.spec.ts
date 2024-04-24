import { test, expect } from '@playwright/test';

test('Notification Message title test', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/notification-message-rendered');
  await expect(page).toHaveTitle('Notification Message');
});
test('Notification Message button', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/notification-message-rendered');
  await page.getByRole('link', { name: 'Click here' }).click();
  const text = await page.locator('[id="flash"]').innerText();
  console.log(text);
  
});
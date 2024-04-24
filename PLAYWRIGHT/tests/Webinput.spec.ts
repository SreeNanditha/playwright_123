import { test, expect} from '@playwright/test';
test('web input title', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/inputs');
    await expect(page).toHaveTitle('Web inputs');
});

test('web input Url', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/inputs');
    await expect(page).toHaveURL('https://practice.expandtesting.com/inputs');
});

test('web input form', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/inputs');
    await page.getByLabel('Input: Number').click();
    await page.getByLabel('Input: Number').fill('');
    await page.getByLabel('Input: Text').click();
    await page.getByLabel('Input: Text').fill('');
    await page.getByLabel('Input: Password').click();
    await page.getByLabel('Input: Password').fill('');
    await page.getByLabel('Input: Date').fill('');
  });

  test('button test', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/inputs');
  await page.getByRole('button', { name: 'Display Inputs' }).click();
    await page.getByRole('button', { name: 'Clear Inputs' }).click();
  });
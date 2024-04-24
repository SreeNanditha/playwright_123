import { test, expect } from '@playwright/test';

test('web input', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/inputs');

  // const pageTitle = await page.title();
  // console.log('page title is:', pageTitle);

  await expect(page).toHaveTitle('Web inputs');

  const pageURL = page.url();
  console.log('page URL is:', pageURL);

  await expect(page).toHaveURL('https://practice.expandtesting.com/inputs');

  const inputSelector = 'input[type="text"]';

  const inputElement = await page.$(inputSelector);

  await page.fill(inputSelector, 'Test Input');

  const inputValue = await page.$eval(inputSelector, input => (input as HTMLInputElement).value);

  await expect(inputValue).toEqual('Test Input');

  await page.close();
});
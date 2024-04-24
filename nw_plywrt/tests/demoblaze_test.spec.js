const { test, expect } = require('@playwright/test');

test('home page', async ({ page }) => {

  await page.goto('https://www.demoblaze.com/index.html');

  const pageTitle = await page.title();
  console.log('page title is:',pageTitle);

  await expect(page).toHaveTitle('STORE');
  
  const pageURL = page.url();
  console.log('page URL is:', pageURL);
 // should get an error bcoz the url is same as above url//
  await expect(page).toHaveURL('https://www.demoblaze.com/index.html');

  await page.close();


})


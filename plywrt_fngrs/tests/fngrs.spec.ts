import { test, expect } from '@playwright/test';
//import { url } from 'inspector';

test('fingress title', async ({ page }) => {
  await page.goto('https://192.168.1.49:8086/');
  await expect(page).toHaveTitle(/Fingress/);
});

test('fingress url link', async ({ page }) => {
  await page.goto('https://192.168.1.49:8086/');
  await expect(page).toHaveURL('https://192.168.1.49:8086/');
  await page.close();
});
test('fingress log in profile', async ({ page }) => {
  await page.goto('https://192.168.1.49:8086/');
  await page.locator('[class="fa fa-circle fa-stack-2x fg-value-fl-circle"]').nth(1).click();
});

test('fingress log in redirect to form', async ({ page }) => {
  await page.goto('https://192.168.1.49:8086/'); 
  await page.locator('[class="mdc-button__label"]').nth(4).click();
});

test('fingress login form', async ({ page }) => {
  await page.goto('https://192.168.1.49:8086/app/login?logout=true');
    await page.locator('[placeholder="Domain Id"]').click();
    await page.locator('[placeholder="Domain Id"]').fill('Fingress');
    await page.locator('[placeholder="Login Id"]').click();
    await page.locator('[placeholder="Login Id"]').fill('Master');
    await page.locator('[placeholder="Password"]').click();
    await page.locator('[placeholder="Password"]').fill('1234');
     await page.close();
}); 
test('fingress sign in button', async ({ page }) => {
  await page.goto('https://192.168.1.49:8086/app/login?logout=true');
  await page.locator('[placeholder="Domain Id"]').click();
    await page.locator('[placeholder="Domain Id"]').fill('Fingress');
    await page.locator('[placeholder="Login Id"]').click();
    await page.locator('[placeholder="Login Id"]').fill('Master');
    await page.locator('[placeholder="Password"]').click();
    await page.locator('[placeholder="Password"]').fill('1234');
await page.getByRole('button', { name: 'Sign in' }).click();
     await page.close();
});
test('fingress launch page url', async ({ page }) => {
  await page.goto('https://192.168.1.49:8086/app/login?logout=true');
  await expect(page).toHaveURL('https://192.168.1.49:8086/launcher');
     await page.close();
});
test('fingress launch page url', async ({ page }) => {
  await page.goto('https://192.168.1.49:8086/launcher');
  await expect(page).toHaveURL('https://192.168.1.49:8086/launcher');
     await page.close();
});
test('Insurance option', async ({ page }) => {
  await page.goto('https://192.168.1.49:8086/launcher'); 
  // await page.getByPlaceholder('Search').click();
  // await page.getByPlaceholder('Search').fill('Insurence');
  // await page.getByPlaceholder('Search').press('Enter');
  // await page.locator('[class="app-name app-title"]').nth(23).click();
  await page.getByText('Insurance').click();
  
  //await page.getByLabel('Home', { exact: true }).click();
  // await page.getByRole('button', {name:'Insurance'}).click();
 //await page.getByLabel('Input: Insurance').click();
     await page.close();
});
test('Insurance page url', async ({ page }) => {
  await page.goto('https://192.168.1.49:8086/page/8aab879b-dd90-4c97-9554-7b15cad8891d/1c25d1b6-96de-48f5-bc6e-b2cab70a35d4');
  await expect(page).toHaveURL('https://192.168.1.49:8086/page/8aab879b-dd90-4c97-9554-7b15cad8891d/1c25d1b6-96de-48f5-bc6e-b2cab70a35d4');
  await page.close();
});
test('report option in insurance', async ({ page }) => {
  await page.goto('https://192.168.1.49:8086/page/8aab879b-dd90-4c97-9554-7b15cad8891d/1c25d1b6-96de-48f5-bc6e-b2cab70a35d4');
  await page.click('[placeholder="Domain Id"]');
  await page.fill('[placeholder="Domain Id"]', 'Fingress');
  await page.click('[placeholder="Login Id"]');
  await page.fill('[placeholder="Login Id"]', 'Master');
  await page.click('[placeholder="Password"]');
  await page.fill('[placeholder="Password"]', '1234');
  await page.click('button:has-text("Sign in")');
  await page.click('button:has-text("Reports")');
     await page.close();
});
test('downloading files from fingress', async ({ page }) => {
  await page.goto('https://192.168.1.49:8086/fgReport/list/1c25d1b6-96de-48f5-bc6e-b2cab70a35d4'); 
  await page.locator('[class="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-name mat-column-name ng-star-inserted"]').first().click(); 
  // await page.getByRole('button', { name: 'PDF' }).click();
  // await page.getByRole('button', { name: 'CVS' }).click();
  // await page.getByRole('button', { name: 'XLSX' }).click();
// const downloadPromise = page.waitForEvent('download');
await page.getByText('test').click();
// const download1 = await downloadPromise;
// await page.getByTestId('Test (1)').click();
// const download2 = await downloadPromise;
await page.close();
});
// test('test fn', async ({ page }) => {
//   await page.goto('https://192.168.1.49:8086/launcher');
//   await page.getByRole('button', { name: 'Insurance' }).click();
//   await page.getByRole('heading', { name: 'Insurance' }).click();
//   await page.getByRole('button', { name: 'Reports' }).click();
//     await page.locator('button').filter({ hasText: 'view_comfy' }).click();
//     await page.locator('.cdk-overlay-backdrop').click();
//   });

import { test, expect } from '@playwright/test';

test('dragAndDrop', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/drag-and-drop-circles');
  await page.locator('#source div').first().click();
  await page.locator('#source div').nth(1).click();
  await page.locator('#source div').nth(2).click();


    const locator = page.locator('# source div');
await locator.selectOption(['red', 'green', 'blue']);
await expect(locator).toHaveValues([/red/, /green/, /blue/]);

const sourceLocator = page.locator('#source div');
  const targetLocator = page.locator('#target');
  
  await sourceLocator.dragTo(targetLocator);

  await expect(page.locator('#target')).toHaveText('red green blue');
    
})
//   const drag=page.locator('# source div');
//   const drop=page.locator('# target div');
//   await page.locator('#source div').first().click
//        button: 'right'
//     console.log('drop=drag',drop)
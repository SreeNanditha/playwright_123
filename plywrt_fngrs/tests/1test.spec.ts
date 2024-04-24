import { test, expect } from '@playwright/test';
import { url } from 'inspector';
test('report option in insurance', async ({ page }) => {
  await page.goto('https://192.168.1.49:8086/page/8aab879b-dd90-4c97-9554-7b15cad8891d/1c25d1b6-96de-48f5-bc6e-b2cab70a35d4');
  await page.click('[placeholder="Domain Id"]');
  await page.fill('[placeholder="Domain Id"]', 'Fingress');
  await page.click('[placeholder="Login Id"]');
  await page.fill('[placeholder="Login Id"]', 'Master');
  await page.click('[placeholder="Password"]');
  await page.fill('[placeholder="Password"]', '1234');
  await page.click('button:has-text("Sign in")');
  // await page.click('button:has-text("Reports")');
  await page.close();
});

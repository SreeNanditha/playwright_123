import { test, expect} from '@playwright/test';

test('Add/Remove Elements title and URL', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/add-remove-elements');
    //await expect(page).toHaveTitle('Add/Remove Elements');
    //await expect(page.title()).resolves.toMatch('Add/Remove Elements');
    await expect(page).toHaveURL('https://practice.expandtesting.com/add-remove-elements');
});    

    test('Add/Remove Elements button', async ({ page }) => {
        await page.goto('https://practice.expandtesting.com/add-remove-elements');
    await page.getByRole('heading', { name: 'Add/Remove Elements' });
    await page.getByRole('button', { name: 'Add Element' }).click();
    await page.getByRole('button', { name: 'Delete' }).click();
});
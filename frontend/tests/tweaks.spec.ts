import { expect, test, } from 'playwright-test-coverage';

test.beforeEach(async ({ page, }) => {
    await page.goto('/#/win/packages');

    await page.getByRole('button').nth(2).click();
});

test.describe('tweaks', () => {
    test('suggested tweaks should be visible', async ({ page, }) => {
        const item = page.getByRole('button', {
            name : 'Change Launchpad',
        });
        await item.scrollIntoViewIfNeeded();

        await expect(item).toBeVisible();
    });

    test('tweak details should be visible when clicked', async ({ page, }) => {
        const item = page.getByRole('button', {
            name : 'Change Launchpad',
        });
        await item.scrollIntoViewIfNeeded();

        await item.click();
        await expect(page.getByRole('dialog').getByText('Change the number of columns')).toBeVisible();
    });

    test('shopping cart details should be visible when the first tweak is clicked', async ({ page, }) => {
        const item = page.getByRole('button', {
            name : 'Change Launchpad',
        });
        await item.scrollIntoViewIfNeeded();

        await page.locator('.MuiCardActions-root > .MuiButtonBase-root').first().click();
        await expect(page.getByRole('heading', {
            name : 'Total selected:',
        })).toBeVisible();
    });

    test('should generate an installation command', async ({ page, }) => {
        const item = page.getByRole('button', {
            name : 'Change Launchpad',
        });
        await item.scrollIntoViewIfNeeded();

        await page.locator('.MuiCardActions-root > .MuiButtonBase-root').first().click();
        await page.getByRole('button', {
            name : 'Next',
        }).click();

        await expect(page.getByRole('textbox')).toBeVisible();
    });

    test('should show 1 item in the shopping cart', async ({ page, }) => {
        const item = page.getByRole('button', {
            name : 'Change Launchpad',
        });
        await item.scrollIntoViewIfNeeded();

        await page.locator('.MuiCardActions-root > .MuiButtonBase-root').first().click();
        await page.locator('.MuiDrawer-root > .MuiPaper-root').press('Escape');

        await expect(page.getByLabel('View cart')).toContainText('1');
    });

    test('should empty the shopping cart when the delete button is clicked', async ({ page, }) => {
        const item = page.getByRole('button', {
            name : 'Change Launchpad',
        });
        await item.scrollIntoViewIfNeeded();

        await page.locator('.MuiCardActions-root > .MuiButtonBase-root').first().click();
        await page.getByTestId('delete-button').click();

        await expect(page.getByRole('heading', {
            name : 'Your cart is empty',
        })).toBeVisible();
    });

    test('should persist the updated value of a tweak', async ({ page, }) => {
        const item = page.getByRole('button', {
            name : 'Change Launchpad',
        });
        await item.scrollIntoViewIfNeeded();

        await item.click();

        const textBox = page.getByRole('textbox').first();
        await expect(textBox).toHaveValue('7');

        await textBox.click();
        await textBox.fill('8');

        const button = page.getByRole('button', {
            name : 'Save',
        });
        await button.click();

        await item.click();
        await expect(textBox).toHaveValue('8');
    });

    test('should persist the updated value of a selected tweak', async ({ page, }) => {
        const item = page.getByRole('button', {
            name : 'Change Launchpad',
        });
        await item.scrollIntoViewIfNeeded();
        await page.locator('.MuiCardActions-root > .MuiButtonBase-root').first().click();
        await page.locator('.MuiDrawer-root > .MuiPaper-root').press('Escape');

        await item.click();

        const textBox = page.getByRole('textbox').first();
        await expect(textBox).toHaveValue('7');

        await textBox.click();
        await textBox.fill('8');

        const button = page.getByRole('button', {
            name : 'Save',
        });
        await button.click();

        await item.click();
        await expect(textBox).toHaveValue('8');
    });
});

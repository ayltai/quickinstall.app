import { expect, test, } from 'playwright-test-coverage';

test.beforeEach(async ({ page, }) => {
    await page.goto('/#/win/packages');

    await page.getByRole('button').nth(1).click();
});

test.describe('packages', () => {
    test('suggested packages should be visible', async ({ page, }) => {
        const item = page.getByRole('button', {
            name : 'Google Chrome',
        });
        await item.scrollIntoViewIfNeeded();

        await expect(item).toBeVisible();
    });

    test('package details should be visible when clicked', async ({ page, }) => {
        const item = page.getByRole('button', {
            name : 'Google Chrome',
        });
        await item.scrollIntoViewIfNeeded();

        await item.click();
        await expect(page.getByRole('dialog').getByText('Chrome is the official web')).toBeVisible();
    });

    test('shopping cart details should be visible when the first package is clicked', async ({ page, }) => {
        const item = page.getByRole('button', {
            name : 'Google Chrome',
        });
        await item.scrollIntoViewIfNeeded();

        await page.locator('.MuiCardActions-root > .MuiButtonBase-root').first().click();
        await expect(page.getByRole('heading', {
            name : 'Total selected:',
        })).toBeVisible();
    });

    test('should generate an installation command', async ({ page, }) => {
        const item = page.getByRole('button', {
            name : 'Google Chrome',
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
            name : 'Google Chrome',
        });
        await item.scrollIntoViewIfNeeded();

        await page.locator('.MuiCardActions-root > .MuiButtonBase-root').first().click();
        await page.locator('.MuiDrawer-root > .MuiPaper-root > div').dragTo(page.locator('.MuiPaper-root > div > div:nth-child(2) > div').first());

        await expect(page.getByLabel('View cart')).toContainText('1');
    });

    test('should empty the shopping cart when the delete button is clicked', async ({ page, }) => {
        const item = page.getByRole('button', {
            name : 'Google Chrome',
        });
        await item.scrollIntoViewIfNeeded();

        await page.locator('.MuiCardActions-root > .MuiButtonBase-root').first().click();
        await page.getByTestId('delete-button').click();

        await expect(page.getByRole('heading', {
            name : 'Your cart is empty',
        })).toBeVisible();
    });

    test('should show disclaimer page when the disclaimer link is clicked', async ({ page, }) => {
        const item = page.getByRole('button', {
            name : 'Turbo Boost Switcher',
        });
        await item.scrollIntoViewIfNeeded();

        await page.evaluate(() => window.scrollBy(0, window.innerHeight));

        const link = page.getByRole('link', {
            name : 'Disclaimer',
        });
        await link.scrollIntoViewIfNeeded();
        await link.click();

        await expect(page.getByText('Last updated')).toBeVisible();
    });
});

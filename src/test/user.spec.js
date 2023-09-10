const { expect, test } = require('@playwright/test');

test.describe('User feature', () => {

    test('Login as User with no image loaded', async ({ page }) => {
        await page.goto("/");
        await page.click("#signin", { delay: 100 });
        await page.fill("#react-select-2-input", "image_not_loading_user");
        await page.press("#react-select-2-input", "Enter");
        await page.fill("#react-select-3-input", "testingisfun99");
        await page.press("#react-select-3-input", "Enter");
        await page.click("#login-btn");

        const loc = page.locator("img[alt='iPhone 12']")
        await expect(loc).toHaveAttribute('src','')

    });

    test('Login as User with existing Orders', async ({ page }) => {
        await page.goto("/");
        await page.click("#signin", { delay: 100 });
        await page.fill("#react-select-2-input", "existing_orders_user");
        await page.press("#react-select-2-input", "Enter");
        await page.fill("#react-select-3-input", "testingisfun99");
        await page.press("#react-select-3-input", "Enter");
        await page.click("#login-btn");
        await page.waitForNavigation();

        await page.click('text=Orders')

        const loc = page.locator('.a-box-inner')
        await expect(loc).toHaveCount(10)
    });

})

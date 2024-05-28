const {expect } = require('@playwright/test');
const { test } = require('../../fixtures');
const percySnapshot = require('@percy/playwright');

test.describe('Login feature', () => {

    test('Simple Login test', async ({ page }) => {
        
        await page.goto("/");
        await page.click("#signin", { delay: 100 });
        await percySnapshot(page, 'Example Site');
        await page.fill("#react-select-2-input", "fav_user");
        await page.press("#react-select-2-input", "Enter");
        await page.fill("#react-select-3-input", "testingisfun99");
        await page.press("#react-select-3-input", "Enter");
        await page.click("#login-btn");

        const username = await page.textContent('.username');
        expect(username).toBe('fav_user')
    });

    test('LockedLogin test', async ({ page }) => {

        await page.goto("/");
        await page.click("#signin", { delay: 100 });
        await page.fill("#react-select-2-input", "locked_user");
        await page.press("#react-select-2-input", "Enter");
        await page.fill("#react-select-3-input", "testingisfun99");
        await page.press("#react-select-3-input", "Enter");
        await page.click("#login-btn");

        const text = await page.textContent('.api-error');
        expect(text).toBe('Your account has been locked.')
    });
})

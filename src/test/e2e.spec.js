const { expect, test} = require('@playwright/test');

test.describe("End to End Tests", ()=>{
  test('End to End test', async ({ page }) => {
    await page.goto("/");

    await page.click("#signin", { delay: 100 });
    await page.fill("#react-select-2-input", "fav_user");
    await page.press("#react-select-2-input", "Enter");
    await page.fill("#react-select-3-input", "testingisfun99");
    await page.press("#react-select-3-input", "Enter");
    await page.click("#login-btn");
    await page.waitForNavigation();

    await page.click('#\\31 > .shelf-item__buy-btn');
    await page.click('div.float-cart__close-btn');
    await page.click('#\\32 > .shelf-item__buy-btn');
    await page.click('.buy-btn');

    await page.fill("#firstNameInput", "first");
    await page.fill("#lastNameInput", "last");
    await page.fill("#addressLine1Input", "address");
    await page.fill("#provinceInput", "province");
    await page.fill("#postCodeInput", "pincode");

    await page.click('#checkout-shipping-continue');
    await page.click('text=Continue')
    await page.click('text=Orders')

    const list = page.locator('.a-fixed-left-grid-inner');
    await expect(list).toHaveCount(2);
    
  });
})


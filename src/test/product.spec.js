const { expect, test} = require('@playwright/test');

test.describe('Product feature', () => {

    test('Apply Apple Vendor Filter', async ({ page }) => {
        await page.goto("/");

        await page.click('.filters-available-size:nth-child(2) .checkmark')


        const loc =  page.locator('.shelf-item__title')
        await expect(loc).toHaveCount(9)

    });

    test('Apply Lowest to Highest Order By', async ({ page }) => {
        await page.goto("/");
        
        await page.selectOption('select', 'lowestprice');

        await page.waitForTimeout(5000)
        
        const prices = page.locator('.shelf-item__price > div.val > b')

        let flag = true
        await prices.evaluateAll((priceArray)=>{
            if(parseInt(priceArray[0].innerHTML) > parseInt(priceArray[1].innerHTML)){
                flag = false
            }
        })

        expect(flag).toBe(true, "Prices arn't sorted")

    });

})

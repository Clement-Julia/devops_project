const { test, expect } = require('@playwright/test');

module.exports = {
    Redirect: async function (page)
    {
        test.step(`Go on describe page`, async () => {
            const div = await page.locator("div.character").first();
            await expect(div).toBeVisible();
            await div.click();
        })
    },
    RedirectBack: async function (page)
    {
        test.step(`Go back on home page`, async () => {
            const button = await page.locator("button.retour").first();
            await expect(button).toBeVisible();
            await button.click();
        })
    }
}
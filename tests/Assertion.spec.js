const {test, expect }= require('@playwright/test');

test.only('Test1', async ({ page })=> {
    
    await page.goto('https://www.nopcommerce.com/en/register');

    // to have url
    await expect(page).toHaveURL('https://www.nopcommerce.com/en/register');

    // to have title
    await expect(page).toHaveTitle("Register - nopCommerce")

    // Element is visible or not
    const logoelement = await page.locator(".desktop-logo > img:nth-child(1)")
    await expect(logoelement).toBeVisible();


        // to be enabled
    const inputelement = await page.locator("#FirstName");
    await expect(inputelement).toBeEnabled();

    // to be checked()
    const checkbox = await page.locator("/html/body/div[7]/section/div/div/div/div/div/div[2]/form/div/div[1]/div[2]/div[8]/div")
    // await checkbox.click()
    await expect(checkbox).toBeChecked();



    await page.waitForTimeout(3000);
})
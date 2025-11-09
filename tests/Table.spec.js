const {test, expect }= require('@playwright/test');

test('Test1', async ({ page })=> {
    await page.goto('https://testautomationpractice.blogspot.com/');
    
    await page.locator("")

})
// const {test, expect }= require('@playwright/test');

// test('Test3', async({page}) =>{
//     await page.goto('https://ui.vision/demo/webtest/frames/');
//     const frame_2 = await page.frameLocator('.frame_2.html')
//     await frame_2.Locator('/html/body/form/div/input', 'Test data');

//     page.waitForTimeout(5000);
// })




const { test, expect } = require('@playwright/test');

test('Test3', async ({ page }) => {
  await page.goto('https://ui.vision/demo/webtest/frames/');

  const frame_2 = page.frameLocator('iframe[src="frame_2.html"]');
  await page.waitForEvent();
  await frame_2.locator('#id2 > div:nth-child(1) > input:nth-child(1)').fill('Test data');

  await page.waitForTimeout(5000);
});

// const{test, expect}=require ('@playwright/test')

// test('Single File', async ({page})=>{
    
//     await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");

//     await page.locator('#filesToUpload').setInputFiles(['files/one.sample-local-pdf.pdf', 'files/two.sample.pdf'])
    
//     await page.waitForTimeout(3000);

//     expect( page.locator('xpath=/html/body/div[3]/div/main/div/ul/li[1]')).toHaveText('one.sample-local-pdf.pdf');
//     expect( page.locator('xpath=/html/body/div[3]/div/main/div/ul/li[2]')).toHaveText('two.sample.pdf');

//     // Removing uploaded file
//     await page.locator('#filesToUpload').setInputFiles([]);

// })



//  **********************Production verison************************

const { test, expect } = require('@playwright/test');

test.describe('File Upload Feature', () => {
  const filesToUpload = [
    'files/one.sample-local-pdf.pdf',
    'files/two.sample.pdf'
  ];

  test('should upload multiple PDF files successfully', async ({ page }) => {
    // Navigate to upload page
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

    // Upload files
    await page.locator('#filesToUpload').setInputFiles(filesToUpload);

    // Assert uploaded file names appear in the list
    await expect(page.locator('#fileList li').nth(0)).toHaveText('one.sample-local-pdf.pdf');
    await expect(page.locator('#fileList li').nth(1)).toHaveText('two.sample.pdf');


    await page.waitForTimeout(3000);
    // Clean up: remove uploaded files
    await page.locator('#filesToUpload').setInputFiles([]);
  });
});

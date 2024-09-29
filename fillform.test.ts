import { chromium } from 'playwright/test';
(async () => {
 console.log('Script started');  // Logs the message when the script starts
// Launch browser
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://practice.expandtesting.com/');    // Navigates to the given URL 
  await page.goto('https://practice.expandtesting.com/inputs'); // Navigate to the page
    
  // Fill inputs with example data
  await page.fill('input[type="number"]', '123');
  await page.fill('input[type="text"]', 'Sample Text');
  await page.fill('input[type="password"]', 'password123');
  await page.fill('input[type="date"]', '2023-09-28');  // Format: yyyy-mm-dd

  // Click on the "Display Inputs" button
  await page.click('button:has-text("Display Inputs")');
  await page.waitForTimeout(5000);
  // Optionally, clear inputs by clicking the "Clear Inputs" button
  await page.click('button:has-text("Clear Inputs")');
  await page.waitForTimeout(5000);
  // Close the browser
  await browser.close();
})();

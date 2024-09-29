import { chromium } from 'playwright/test';

(async () => {
  console.log('Script started');  // Logs the message when the script starts

  // Launch browser
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  // Navigate to the dynamic table page
  await page.goto('https://practice.expandtesting.com/dynamic-table');

  // Run the extraction multiple times after refreshing the page
  for (let i = 0; i < 5; i++) {
    console.log(`Reloading page... (${i + 1})`);
    await page.reload();  // Reload the page
    await page.waitForTimeout(2000); // Wait for 2 seconds before the next reload
  }

  // Close browser
  await browser.close();
})();


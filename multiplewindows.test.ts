import { chromium } from 'playwright/test';

(async () => {
    console.log('Script started');  // Logs the message when the script starts
    
    const browser = await chromium.launch({ headless: false }); 
    const context = await browser.newContext();
      // Open the first page (original tab)
    const page = await context.newPage(); // Creates a new browser tab/page
    await page.goto('https://practice.expandtesting.com/');    // Navigates to the given URL 
    await page.goto('https://practice.expandtesting.com/windows'); 
    
    await page.waitForTimeout(2000);

    // Open a new tab
    const newPage = await context.newPage();
    await newPage.goto('https://practice.expandtesting.com/windows/new');
    await newPage.waitForTimeout(4000);
     // Optional: Close the browser after the interactions
     await browser.close();                                   // Closes the browser after the title is logged
    })();

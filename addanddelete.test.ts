import { chromium } from 'playwright/test';

(async () => {
    // Launch the browser
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    
    await page.goto('https://practice.expandtesting.com/'); 
    // Navigate to the Add/Remove Elements page
    await page.goto('https://practice.expandtesting.com/add-remove-elements');

    // Click the "Add Element" button to add a delete button
    for (let i = 0; i < 3; i++) {
        await page.click('text=Add Element');
        
        // Optional: Wait for the delete button to be visible after each addition
        await page.waitForSelector('text=Delete');
    }
    await page.waitForTimeout(3000);

    // Click the "Delete" button to remove the added element
    await page.click('text=Delete');
    await page.waitForTimeout(3000);
    // Close the browser
    await browser.close();
})();
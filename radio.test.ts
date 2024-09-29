import { chromium } from 'playwright/test';

(async () => {
    console.log('Script started');  // Logs the message when the script starts
    
    const browser = await chromium.launch({ headless: false });  // Launches the browser in non-headless mode (visible)
    const page = await browser.newPage();                        // Creates a new browser tab/page
    await page.goto('https://practice.expandtesting.com/');    // Navigates to the given URL 
    await page.goto('https://practice.expandtesting.com/radio-buttons'); 
    // Wait for the radio buttons to be visible and clickable
    await page.waitForSelector('input[value="yellow"]');
    
    // Click the "Yellow" radio button in the "Select your favorite color" section
    await page.click('input[type="radio"][value="yellow"]');

    // Wait for the "Football" radio button to be visible and clickable
    await page.waitForSelector('input[value="football"]');
    
    // Click the "Football" radio button in the "Select your favorite sport" section
    await page.check('input[type="radio"][value="football"]');
    await page.waitForTimeout(3000);

    // Log a success message after selections
    console.log('Radio buttons selected!');

    // Optional: Close the browser after the interactions
    await browser.close();                                   // Closes the browser after the title is logged
})();

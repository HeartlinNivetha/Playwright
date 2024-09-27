import { chromium } from 'playwright/test';

(async () => {
    console.log('Script started');  // Logs the message when the script starts
    
    const browser = await chromium.launch({ headless: false });  // Launches the browser in non-headless mode (visible)
    const page = await browser.newPage();                        // Creates a new browser tab/page
    await page.goto('https://practice.expandtesting.com/');    // Navigates to the given URL 
    await page.goto('https://practice.expandtesting.com/drag-and-drop'); 
    await page.dragAndDrop('xpath=//*[@id="column-a"]', 'xpath=//*[@id="column-b"]');
    //await page.waitForTimeout(2000); // Wait to observe the result
    //await browser.close();                                   // Closes the browser after the title is logged
})()
import { chromium } from 'playwright/test';

(async () => {
    console.log('Script started');  // Logs the message when the script starts
    
    const browser = await chromium.launch({ headless: false });  // Launch browser in non-headless mode (visible)
    const page = await browser.newPage();                        // Creates a new browser tab/page
    await page.goto('https://practice.expandtesting.com/');      // Navigates to the given URL
    await page.click('a.my-link[href="/radio-buttons"]');

    try {
        // Attempt to click a button (or any other element)
        await page.click('button[type="green"]');  // Replace with the actual button selector you want to click
        console.log('Button clicked successfully!');
    } catch (error) {
        console.log('Button is not clickable. Taking screenshot...');
        
        // Take a screenshot and save it when the button is not clickable
        await page.screenshot({ path: 'C:\\Users\\Sathish\\Desktop\\test playwright\\sample.png' });
        console.log('Screenshot saved as sample.png');
    }

    //await browser.close();  // Closes the browser
})();

Output:
$ npx ts-node tests/filename.test.ts
Script started
Button is not clickable. Taking screenshot...
Screenshot saved as sample.png

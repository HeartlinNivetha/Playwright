import { chromium } from 'playwright/test';

(async () => {
    console.log('Script started');  // Logs the message when the script starts
    
    const browser = await chromium.launch({ headless: false });  // Launches the browser in non-headless mode (visible)
    const page = await browser.newPage();                        // Creates a new browser tab/page
    await page.goto('https://practice.expandtesting.com/');      // Navigates to the given URL

    // Click the "Radio Buttons" link
    await page.click('a.my-link[href="/radio-buttons"]');

    // Wait for the radio buttons and click them one by one
    await page.click('input[type="radio"][value="blue"]');       // Select "Blue"
    await page.click('input[type="radio"][value="yellow"]');     // Select "Yellow"
    await page.click('input[type="radio"][value="black"]');      // Select "Black"
    await page.click('input[type="radio"][value="red"]');        // Select "Red"

    // Click sports options in the second section
    await page.check('input[type="radio"][value="football"]');   // Select "Football"
    await page.check('input[type="radio"][value="basketball"]'); // Select "Basketball"
    await page.check('input[type="radio"][value="tennis"]');     // Select "Tennis"

    // Wait for a few seconds to see the final result
    await page.waitForTimeout(7000);

    console.log('Radio buttons selected!');  // Log a success message after selections

    await browser.close();  // Closes the browser
})();

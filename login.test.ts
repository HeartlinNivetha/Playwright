import { chromium } from 'playwright/test';

(async () => {
    console.log('Script started');  // Logs the message when the script starts
    
    const browser = await chromium.launch({ headless: false });  // Launches the browser in non-headless mode (visible)
    const page = await browser.newPage();                        // Creates a new browser tab/page
    await page.goto('https://practice.expandtesting.com/');    // Navigates to the given URL 
    await page.goto('https://practice.expandtesting.com/login'); 
    await page.fill('input[name="username"]', 'practice');
    await page.fill('input[name="password"]', 'SuperSecretPassword!');
  
    // Click the login button
   await page.click('button[type="submit"]'); // Or adjust to match the button selector if different
   //await page.click('input[type="button"][value="submit"]'); 
    // Optionally, wait for a navigation or element to confirm login
    await page.waitForNavigation();
  
    // You can add further actions here or take screenshots to confirm successful login
    // await page.screenshot({ path: 'login-success.png' });
  
    // Close the browser
    await browser.close();
  })();
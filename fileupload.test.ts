import { chromium } from 'playwright/test';

(async () => {
    console.log('Script started');  // Logs the message when the script starts
    
    const browser = await chromium.launch({ headless: false });  // Launches the browser in non-headless mode (visible)
    const page = await browser.newPage();                        // Creates a new browser tab/page
    await page.goto('https://practice.expandtesting.com/');    // Navigates to the given URL 
    await page.goto('https://practice.expandtesting.com/upload'); 
    
     // Upload the file
  await page.setInputFiles('input[type="file"]', 'C:\\Users\\Sathish\\Desktop\\test playwright\\new.png');

  // Click the upload button (if necessary)
  await page.click('button:has-text("Upload")');
  //await page.click('button[type="fileSubmit"]');
   // Optional: Close the browser after the interactions
   //await browser.close();                                   // Closes the browser after the title is logged
})();
   

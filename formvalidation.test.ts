import { chromium } from 'playwright/test';

(async () => {
    console.log('Script started');  // Logs the message when the script starts
    
    const browser = await chromium.launch({ headless: false });  // Launches the browser in non-headless mode (visible)
    const page = await browser.newPage();                   // Creates a new page
    await page.goto('https://practice.expandtesting.com/'); 
  // Navigate to the form validation page
  await page.goto('https://practice.expandtesting.com/form-validation');

  // Click the 'Register' button without filling any mandatory fields
  await page.click('button[type="submit"]');

  // Capture error messages or validation feedback
  // Assuming the validation errors are displayed after clicking the submit button
  const contactNameError = await page.textContent('input[name="ContactName"] ~ .invalid-feedback'); // Adjust the selector to match the error message
  const contactNumberError = await page.textContent('input[name="contactnumber"] ~ .invalid-feedback'); // Adjust the selector for contact error
  const paymentMethodError = await page.textContent('select[name="payment"] ~ .invalid-feedback'); // Adjust for payment method error

  // Log the validation error messages
 console.log("Contact Name Error: ", contactNameError);
  console.log("Contact Number Error: ", contactNumberError);
  console.log("Payment Method Error: ", paymentMethodError);

  // Wait for a few seconds to observe the result before closing the browser
  await page.waitForTimeout(3000);

  // Close the browser
  await browser.close();
})();

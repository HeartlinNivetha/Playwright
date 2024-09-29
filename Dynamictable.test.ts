import { chromium } from 'playwright/test';

(async () => {
  console.log('Script started');  // Logs the message when the script starts

  // Launch browser
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  // Navigate to the dynamic table page
  await page.goto('https://practice.expandtesting.com/dynamic-table');

  // Function to extract CPU values from the table
  const extractCpuValues = async () => {
    // Wait for the table to load
    await page.waitForSelector('table');

    // Get all CPU values from the second column of the table
    const cpuValues = await page.$$eval('table tbody tr', rows => 
      rows.map(row => {
        const cells = row.getElementsByTagName('td'); // Access cells directly
        return cells.length > 1 ? cells[1].innerText.trim() : null; // Get CPU value
      }).filter(value => value !== null) // Filter out null values
    );

    console.log("Current CPU Values:", cpuValues);
  };

  // Run the extraction multiple times after refreshing the page
  for (let i = 0; i < 5; i++) {
    console.log(`Reloading page... (${i + 1})`);
    await page.reload();  // Reload the page
    await extractCpuValues();  // Extract and log CPU values
    await page.waitForTimeout(2000); // Wait for 2 seconds before the next reload
  }

  // Close browser
  await browser.close();
})();

import { test } from '@playwright/test';

test('locator_Practice', async ({ page }) => {
    await page.goto('https://demoqa.com/automation-practice-form');
    await page.locator("[placeholder='First Name']").fill('Ragu');
    await page.locator("#lastName").fill("M");
    await page.locator('#userEmail').fill("ragunath4076@gmail.com");
    //getByRole
    await page.getByRole('radio', { name: "Male", exact: true }).click();
    //await page.locator('//input[@value="Male"]').click();
    //getByPlaceholder
    await page.getByPlaceholder('Mobile Number').fill("9994327480")
    //await page.locator("#userNumber").fill("9629877376");
    // await page.locator("//input[@id='subjectsInput']").fill("English").click();
    //getByLabel
    await page.getByLabel('Sports').check();
    //await page.locator("//input[@id='hobbies-checkbox-1']").check();
    await page.locator("//textarea[@id='currentAddress']").fill("Bargur");
 console.log("updated by ragu");
 console.log("updated by ragunath");
})
import { test } from "@playwright/test";
test("navigator", async ({ page }) => {

    await page.goto("https://www.amazon.com/");
    await page.goForward();
    await page.goto("https://www.instagram.com/");
    await page.goForward();
    await page.goto("https://www.facebook.com/");
    await page.goBack();
    await page.reload();
   await page.waitForLoadState("laod");
})
//update by ragu
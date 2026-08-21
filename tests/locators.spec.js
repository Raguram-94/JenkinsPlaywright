import{test} from "@playwright/test";
test("idlocator",async({page})=>{
    await page.goto('https://www.amazon.com/');
    await page.locator('#twotabsearchtextbox').fill('mobiles');
    await page.locator('#nav-search-submit-button').click;
    await page.close;
})
import {test,expect} from '@playwright/test'

test.beforeAll(async()=>{
    console.log("Before each Test")
})
test.describe("My grouped Cases", async()=>{

    test("My first script",async ({page})=>{

        //const context = await browser.newContext();
        //const page = await context.newPage()
        await page.goto("https://magento.softwaretestingboard.com/")
        //await page.pause()
        console.log(await page.title())
        await expect(await page.title()).toBe("Home Page")
     
     })
     
     test("Verify user is able to login to application using valid credentails",{tag:'@regression'} ,async ({page})=>{
     
         await page.goto("https://magento.softwaretestingboard.com/")
         await page.locator("//div[@class='panel header']//a[contains(text(),'Sign In')]").click()
         await page.locator('id=email').fill("prutheel@getnada.com")
         await page.locator("id=pass").fill("Test@1234")
     })

})


test.afterAll(async ()=>{
    console.log("After Each")
})
import {test,expect} from '@playwright/test'

// test.beforeEach("",async ({page})=>{
//     await page.goto("https://magento.softwaretestingboard.com/")
//     await page.locator("//div[@class='panel header']//a[contains(text(),'Sign In')]").click()
//     await page.locator('id=email').fill("prutheel@getnada.com")
//     await page.locator("id=pass").fill("Test@123")
//     await page.locator("(//div[@class='actions-toolbar']//button[@id='send2'])[1]").click()
//     //let username = await page.locator("(//li[@class='greet welcome']//span[@class='logged-in'])[1]").innerText()
//    // console.log(username)
//    // await expect(await page.locator("(//li[@class='greet welcome']//span[@class='logged-in'])[1]")).toHaveText("Welcome, Prutheel Baleshwaria!")

// })

test.skip("order placement",async({page})=>{

// Hover over Men dropdown
await page.locator("//span[normalize-space()='Men']").hover()

//Hover over Tops menu
await page.locator("//a[@id='ui-id-17']//span[contains(text(),'Tops')]").hover()

//Hover over Jakcets and clicking on it
await page.locator("//a[@id='ui-id-19']//span[contains(text(),'Jackets')]").click()

//select the M size of Hyperion Element Jacket
await page.locator("//div[@class='swatch-opt-270']//div[@id='option-label-size-143-item-168']").click()

//selecting the Green Colour
await page.locator("//div[@class='swatch-opt-286']//div[@id='option-label-color-93-item-53']").click()
//click on the Add to cart for the same jacket
await page.locator("//li[10]//div[1]//div[1]//div[4]//div[1]//div[1]//form[1]//button[1]").click()

//clicking on the Cart button
await page.locator("//a[@class='action showcart']").click()

//click on proceed to checkout
await page.locator("//button[@id='top-cart-btn-checkout']").click()

//selecting the Shiiping method with $5
await page.locator("//input[@name='ko_unique_2']").check()

// click on next button
await page.locator("//button[@class='button action continue primary']").click()

//clicking on Place Order button
await page.locator("//button[@title='Place Order']").click()

//assert the thank you message
await expect(await page.locator("//span[@class='base']")).toHaveText("Thank you for your purchase!")

})


test("Sauce Checkout",{tag:'@regression'}, async({page})=>{

    await page.goto("https://www.saucedemo.com/")
    await page.locator("//input[@id='user-name']").fill("standard_user")
    await page.locator("//input[@id='password']").fill("secret_sauce")
    await page.locator("//input[@id='login-button']").click()

    //adding product to cart
    await page.locator("//button[@id='add-to-cart-sauce-labs-bike-light']").click()

    //clicking on cart button
    await page.locator("//a[@class='shopping_cart_link']").click()

    //clicking on checkout button
    await page.locator("//button[@id='checkout']").click()

    //Fill first name
    await page.locator("//input[@id='first-name']").fill("Prutheel")

    //first Last Name
    await page.locator("//input[@id='last-name']").fill("Baleswharia")

    //Fill Zipcode
    await page.locator("//input[@id='postal-code']").fill("123123")

    //clicking on cotinue button
    await page.locator("//input[@id='continue']").click()

    //clicking on Finisha Button
    await page.locator("//button[@id='finish']").click()

    //assert the thank you message
    await expect(await page.locator("//h2[@class='complete-header']")).toHaveText("Thank you for your order!")

})

test("Console log",{tag:'@smoke'},async()=>{

    console.log("This test case is marked as smoke")
} )
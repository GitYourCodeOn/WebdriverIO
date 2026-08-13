describe("Sauce Demo checkout", () => {
  it("logs in, adds a backpack, and completes checkout", async () => {
    await browser.url("https://www.saucedemo.com/");

    await $("#user-name").setValue("standard_user");
    await $("#password").setValue("secret_sauce");
    await $("#login-button").click();

    await expect($(".title")).toHaveText("Products");

    await $('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await $(".shopping_cart_link").click();

    await expect($(".cart_item")).toBeDisplayed();
    await expect($(".inventory_item_name")).toHaveText("Sauce Labs Backpack");

    await $('[data-test="checkout"]').click();
    await $('[data-test="firstName"]').setValue("Yande");
    await $('[data-test="lastName"]').setValue("Tester");
    await $('[data-test="postalCode"]').setValue("SW1A 1AA");
    await $('[data-test="continue"]').click();
    await $('[data-test="finish"]').click();

    await expect($(".complete-header")).toHaveText("Thank you for your order!");
  });
});

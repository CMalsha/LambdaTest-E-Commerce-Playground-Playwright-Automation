import { expect,type Locator,type Page  } from "@playwright/test";
export class CartPage{
    readonly page:Page;
    readonly shippingSection:Locator;
    readonly country:Locator;
    readonly paymentZone:Locator;
    readonly postcode:Locator;
    readonly getQuotesButton:Locator;
    readonly shippingRate:Locator;
    readonly applyShippingButton:Locator;
    readonly checkoutButton:Locator;

    constructor(page:Page){
        this.page=page;
        this.shippingSection= page.getByText('Estimate Shipping & Taxes', { exact: true });
        this.country = page.locator('#input-country');
        this.paymentZone = page.locator('#input-payment-zone');
        this.postcode = page.getByPlaceholder("Post Code");
        this.getQuotesButton = page.getByRole('button',{name:'Get Quotes'});
        this.shippingRate = page.getByLabel('Flat Shipping Rate - $5.00');
        this.applyShippingButton =page.getByRole('button',{name:'Apply Shipping'});
        this.checkoutButton = page.getByRole('link',{name:'Checkout'});


    }
    async goto(){
        await this.page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=checkout/cart");
    } 

        async openShippingSection() {

        await this.shippingSection.scrollIntoViewIfNeeded();

        await expect(this.shippingSection ).toBeVisible();

        await this.shippingSection.click();
    }
       async calculateShipping() {

        await this.country.selectOption({label: "Sri Lanka" });

        await expect(this.paymentZone ).toBeVisible();

        await this.paymentZone.selectOption({ label: "Central"});

        await this.postcode.fill("10230");

        await this.getQuotesButton.click();

        await this.shippingRate.check();

        await this.applyShippingButton.click();
    }

    async proceedToCheckout() {
        await this.checkoutButton.click();
    }
}

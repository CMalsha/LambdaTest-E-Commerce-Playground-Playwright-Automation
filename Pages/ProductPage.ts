import { expect, type Locator,type Page} from "@playwright/test";
export class ProductPage{
    readonly page:Page;
    readonly htcProduct:Locator;
    readonly addToCartButton:Locator;
    readonly closeButton:Locator;
    readonly shoppingCart:Locator;

    constructor(page:Page){
        this.page=page;
        this.htcProduct=page.getByRole('link', { name: /HTC Touch HD/ }).first();
        this.addToCartButton=page.getByRole('button',{name:'Add to Cart'});
        this.closeButton=page.getByRole('button', { name: /close/i });
        this.shoppingCart=page.getByRole('link', { name:'Shopping Cart' });
    }
    async selectHTCProduct(){
        await this.htcProduct.click();
    }
    async addToCartButtonclick(){
        await this.addToCartButton.click();
    }
    async closeCartPopUp(){
        await this.closeButton.click();
    }
    async clickShoppingtCart(){
        await this.shoppingCart.click();

    }

}
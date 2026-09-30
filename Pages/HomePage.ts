import{expect,type Locator,type Page} from "@playwright/test";
export class HomePage{
    readonly page: Page ;
    readonly logo:Locator;
    readonly trendingCatergories:Locator;
    readonly myAccountButton:Locator;
    readonly registerLink:Locator;
    readonly shopByCategoryButton: Locator;
    readonly laptopsandNoteBooks:Locator;

    constructor(page : Page){
        this.page = page;
        this.logo= page.getByAltText("Poco Electro");
        this.trendingCatergories=page.getByText("Top Trending Categories");
        this.myAccountButton = page.getByRole('button', { name: 'My account' });
        this.registerLink = page.getByRole('link',{name:'Register'});
        this.shopByCategoryButton =page.getByRole('button', { name: "Shop by Category" });
        this.laptopsandNoteBooks=page.getByText('Laptops & Notebooks');


    }
    async goto(){
        await this.page.goto("https://ecommerce-playground.lambdatest.io/");
    } 
    async verifyHomePage(){
        await expect(this.logo).toBeVisible();
        await expect(this.trendingCatergories).toBeVisible();

    }
    async openRegisterPage(){
        await this.myAccountButton.hover();
        await this.registerLink.click();
    }
    async openShopByCategory(){
        await this.shopByCategoryButton.click();
        await this.laptopsandNoteBooks.click();

    }


}

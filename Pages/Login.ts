import { expect,type Locator, type Page } from "@playwright/test";

export class LoginPage{

    readonly page: Page;
    readonly myAccountButton:Locator;
    readonly Login:Locator;
    readonly emailladdress: Locator;
    readonly password: Locator;
    readonly loginButton:Locator;

    constructor(page:Page){
        this.page = page;
        this.myAccountButton = page.getByRole('button', { name: 'My account' });
        this.Login = page.getByText("Login");
        this.emailladdress= page.getByPlaceholder("E-Mail Address");
        this.password = page.getByPlaceholder("Password");
        this.loginButton=page.getByRole('button',{name:'Login'});

    }
    async goto(){
        await this.page.goto("https://ecommerce-playground.lambdatest.io/");
    }

     async openLoginPage(){
        await this.myAccountButton.hover();
        await this.Login.click();
     }
        

    async login(
        emailaddress:string,
        password:string,
    )
    {
        await this.emailladdress.fill(emailaddress);
        await this.password.fill(password);
        await this.loginButton.click();
       


    }
    


}
import { expect,type Locator,type Page} from "@playwright/test";
export class Logoutpage{
    readonly page:Page;
    readonly myAccountButton:Locator;
    readonly LogoutButton:Locator;
    readonly logoutmessage:Locator;


    constructor(page:Page){
    this.page= page;
    this.myAccountButton = page.getByRole('button', { name: 'My account' });
    this.LogoutButton = page.getByRole('link', {name: 'Logout',exact: true });
    this.logoutmessage=page.getByRole('heading',{name:' Account Logout'});

    }
   

    async navigatetoLogoutPage(){
       await this.myAccountButton.hover();
       await this.LogoutButton.click();

    }

    async verifylogousuccessmessage(){
        await expect(this.logoutmessage).toBeVisible();

    }

}
import {expect ,type Locator,type Page} from "@playwright/test";

export class forgotPasswordPage {
 readonly page:Page;
 readonly forgotemail:Locator;
 readonly forgotpasswordlink:Locator;
 readonly emailaddress:Locator;
 readonly submitbutton:Locator;
 readonly emailconfirmationlink:Locator;
 readonly loginButton:Locator;

 constructor(page:Page){
    this.page =page;
    this.forgotpasswordlink=page.getByRole('link',{name:'Forgotten Password' });
    this.forgotemail =page.getByPlaceholder("E-Mail Address");
    this.emailaddress = page.getByPlaceholder("E-Mail Address");
    this.submitbutton=page.getByText("Continue");
    this.forgotpasswordlink = page.getByRole('link', { name: 'Forgotten Password', exact: true });
    this.emailconfirmationlink = page.getByText( 'An email with a confirmation link has been sent your email address.',
        { exact: true }
    );
    this.loginButton=page.getByRole('button',{name:'Login'});

 }

 async enterforgotEmail(
    forgotemail:string,
 ){
    await this.forgotemail.fill(forgotemail);
    await this.forgotemail.click();
 }

 async clickLoginButton(){
    await this.loginButton.click();
 }

 async clickForgotPasswordLink(){
    await this.forgotpasswordlink.click();
 }
 async forgotpasswordlogin(
    emailaddress:string,
 )
 {
    await this.emailaddress.fill(emailaddress);
 }
 async clicksubmitButton(){
    await this.submitbutton.click();
 }
 async verifyemailconfirmationmessage(){
    await expect (this.emailconfirmationlink).toBeVisible();
 }
 
}
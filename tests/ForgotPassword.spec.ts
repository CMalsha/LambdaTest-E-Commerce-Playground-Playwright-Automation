import {test,expect} from "@playwright/test";
import {LoginPage} from "../Pages/LoginPage";
import { forgotPasswordPage } from "../Pages/forgotPasswordPage";


test("Forgot password verfication",async({page})=>{
const loginpage = new LoginPage(page);
const forgotpasswordpage=new forgotPasswordPage(page);
await loginpage.goto();
await loginpage.openLoginPage();
await forgotpasswordpage.enterforgotEmail(
    "shamen@gmail.com"
)
await forgotpasswordpage. clickForgotPasswordLink();
await forgotpasswordpage.forgotpasswordlogin(
    "shamen@gmail.com"
)
await forgotpasswordpage.clicksubmitButton();
await forgotpasswordpage.verifyemailconfirmationmessage();

});
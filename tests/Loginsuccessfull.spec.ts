import { test, expect } from "@playwright/test";
import { LoginPage } from "../Pages/LoginPage";


test("Sucessfull Login",async({page})=>{

    const loginpage = new LoginPage(page)

    await loginpage.goto();

    await loginpage.openLoginPage();

    await loginpage.login(
        "shamen@gmail.com",
        "shamen@123"
    )


});
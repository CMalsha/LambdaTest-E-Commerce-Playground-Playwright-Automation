import {test,expect} from "@playwright/test";
import { LoginPage } from "../Pages/LoginPage";

test("Unsucessfull Login",async({page})=>{

    const loginpage = new LoginPage(page)

    await loginpage.goto();

    await loginpage.openLoginPage();

    await loginpage.login(
        "jkl12@gmail.com",
        "123"
    )

  


});


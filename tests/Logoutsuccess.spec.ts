import {test,expect} from "@playwright/test";
import { LoginPage} from "../Pages/LoginPage";
import { Logoutpage} from "../Pages/LogoutPage";

test("Successfull Logout", async({page})=>{
const logoutpage= new Logoutpage(page);
const loginpage = new LoginPage(page);

await loginpage.goto();
await loginpage.openLoginPage();
await loginpage.login(
        "shamen@gmail.com",
        "shamen123"
    )
  

await logoutpage.navigatetoLogoutPage();
await logoutpage.verifylogousuccessmessage();
});






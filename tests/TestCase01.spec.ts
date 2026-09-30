import { test, expect } from "@playwright/test";
import { HomePage } from "../Pages/HomePage";
import { RegistrationPage } from "../Pages/RegistrationPage";
import { CartPage } from "../Pages/CartPage";
import { ProductPage } from "../Pages/ProductPage";
import { CheckoutPage } from "../Pages/CheckoutPage";

test("Register, purchase product and proceed to checkout",async ({ page }) => {

        const homepage = new HomePage(page);
        const registrationpage = new RegistrationPage(page);
        const cartpage = new CartPage(page);
        const productpage = new ProductPage(page);
        const checkoutpage= new CheckoutPage(page);

        await homepage.goto();

        await homepage.verifyHomePage();

        await homepage.openRegisterPage();

        await registrationpage.register(
            "Maneesha",
            "Fernando",
            "Manesha78714@gmail.com",
            "0775612345",
            "Mane@123",
            "Mane@123"
        );

       await registrationpage.verifyRegistrationSuccess();

       await homepage.openShopByCategory();

       await productpage.selectHTCProduct();
       await productpage.closeCartPopUp();
       await productpage.clickShoppingtCart()

       await cartpage.goto();
       await cartpage.openShippingSection();
       await cartpage.calculateShipping();
       await cartpage.proceedToCheckout();
       await checkoutpage.fillBillingdetails();
       await checkoutpage.agreeToTerms();
       await checkoutpage.continueButtonClick();

    });

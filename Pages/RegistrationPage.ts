import { expect, type Page, type Locator } from "@playwright/test";

export class RegistrationPage {

    readonly page: Page;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly email: Locator;
    readonly telephone: Locator;
    readonly password: Locator;
    readonly confirmPassword: Locator;
    readonly agreeCheckBox: Locator;
    readonly continueButton: Locator;
    readonly accountCreatedHeading: Locator;

    constructor(page: Page) {

        this.page = page;

        this.firstName = page.getByPlaceholder("First Name");
        this.lastName = page.getByPlaceholder("Last Name");
        this.email = page.getByPlaceholder("E-Mail");
        this.telephone = page.getByPlaceholder("Telephone");
        this.password = page.getByPlaceholder("Password", { exact: true });
        this.confirmPassword = page.getByPlaceholder("Password Confirm");
        this.agreeCheckBox =page.locator('label[for="input-agree"]');
        this.continueButton =page.getByRole("button", {name: "Continue"});
        this.accountCreatedHeading = page.getByRole("heading", { name: "Your Account Has Been Created!"});
    }

    async register(
        firstName: string,
        lastName: string,
        email: string,
        telephone: string,
        password: string,
        confirmPassword: string
    ) {

        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.email.fill(email);
        await this.telephone.fill(telephone);
        await this.password.fill(password);
        await this.confirmPassword.fill(confirmPassword);

        await this.agreeCheckBox.click();
        await this.continueButton.click();
    }

    async verifyRegistrationSuccess() {

        await expect(
            this.accountCreatedHeading
        ).toBeVisible();
    }
}
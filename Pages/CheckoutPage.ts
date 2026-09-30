import{expect,type Locator,type Page} from "@playwright/test";

export class CheckoutPage{

    readonly page:Page;
    readonly firstName:Locator;
    readonly lastName:Locator;
    readonly company:Locator;
    readonly address:Locator;
    readonly city:Locator;
    readonly postcode:Locator;
    readonly country:Locator;
    readonly zone:Locator;
    readonly comment:Locator;
    readonly privacyPolicy:Locator;
    readonly termsAndConditions:Locator;
    readonly continueButton:Locator;

    constructor(page:Page){
        this.page=page;
        this.firstName =page.locator('#input-payment-firstname');
        this.lastName = page.locator('#input-payment-lastname');
        this.company= page.locator('#input-payment-company');
        this.address = page.getByRole('textbox',{ name:'Address 1'});
        this.city=page.getByRole('textbox', { name:'City' });
        this.postcode =page.getByRole('textbox', {name: 'Post Code' });
        this.country = page.locator("#input-payment-country");
        this.zone = page.locator('#input-payment-zone');
        this.comment = page.locator('#input-comment');
        this.privacyPolicy = page.locator('#input-account-agree');
        this.termsAndConditions= page.locator('label[for="input-agree"]');
        this.continueButton = page.getByRole('button',{name:'Continue'});

    }

    async fillBillingdetails(){
        await this.firstName.fill("Maneesha");
        await this.lastName.fill("Fernando");
        await this.company.fill("ABC");
        await this.address.fill("No 62, Colombo 2");
        await this.city.fill("Colombo");
        await this.postcode.fill("10230");
        await this.country.selectOption({ label: "Sri Lanka" });
        await this.zone.selectOption({ label: "Central" });
        await this.comment.fill("Please deliver the order carefully!");

    }
    async agreeToTerms(){

        await this.privacyPolicy.check();

        await this.page.locator('label[for="input-agree"]') .click();
    }
    async continueButtonClick(){
        await this.continueButton.click();
    }
    }



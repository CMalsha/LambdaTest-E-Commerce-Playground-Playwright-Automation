import{chromium, Locator, test,expect} from "@playwright/test"
test("Login test demo",async({page})=>{
await page.goto("https://ecommerce-playground.lambdatest.io/");
const logo:Locator=page.getByAltText("Poco Electro")
await expect(logo).toBeVisible();

/*const text:Locator=page.getByText("Top Trending Categories")
await expect(text).toBeVisible();
*/
await expect(page.getByText("Top Trending Categories")).toBeVisible();

await page.getByRole('button', { name: 'My account' }).hover();
await page.getByRole('link',{name:'Register'}).click();

await page.getByPlaceholder('First Name').fill("Manesha");
await page.getByPlaceholder('Last Name').fill('Fernando');
await page.getByPlaceholder('E-Mail').fill('Manesha7821@gmail.com')
await page.getByPlaceholder('Telephone').fill('0775612345');
await page.getByPlaceholder('Password', { exact: true }).fill('Mane@123');
await page.getByPlaceholder('Password Confirm').fill('Mane@123');
await page.locator('label[for="input-agree"]').click();
await page.getByRole('button',{name:'Continue'}).click();
await expect(page.getByRole('heading', { name: 'Your Account Has Been Created!' })).toBeVisible();
//await expect(page.getByText("Top Trending ")).toBeVisible();
//await expect(page.getByText("/Top\s+Trending\s+Categories/i")).toBeVisible();
await page.getByRole('button', { name: 'Shop by Category' }).click();
await page.getByText('Laptops & Notebooks').click();
await page.getByRole('link', { name: /HTC Touch HD/ }).first().click();
//await expect(page.getByText('In Stock', { exact: true })).toBeVisible();
//await expect(page.getByRole('tab', { name: 'Description' })).toBeVisible();
await page.getByRole('button',{name:'Add to Cart'}).click();
await page.getByRole('button', { name: /close/i }).click();
await page.getByRole('link', { name:'Shopping Cart' }).click();
//await page.getByRole('button', { name:'Edit cart' }).click();
await page.goto( 'https://ecommerce-playground.lambdatest.io/index.php?route=checkout/cart');
const shipping = page.getByText('Estimate Shipping & Taxes', { exact: true });
await shipping.scrollIntoViewIfNeeded();
await expect(shipping).toBeVisible();
await shipping.click();
await page.locator('#input-country').selectOption({label:'Sri Lanka'});
//await expect(page.getByText('Estimate Shipping & Taxes', { exact: true })).toBeVisible();
//await page.getByText('Estimate Shipping & Taxes', { exact: true }).click();
await expect(page.locator('#input-payment-zone')).toBeVisible();
await page.locator('#input-payment-zone') .selectOption({ label: 'Central' });
await page.getByPlaceholder("Post Code").fill('10230');
await page.getByRole('button',{name:'Get Quotes'}).click();
await page.getByLabel('Flat Shipping Rate - $5.00').check();
await page.getByRole('button',{name:'Apply Shipping'}).click();
await page.getByRole('link',{name:'Checkout'}).click();
await page.locator('#input-payment-firstname').fill('Manesha');
await page.locator('#input-payment-lastname').fill('Fernando');
await page.locator('#input-payment-company').fill('ABC');
await page.getByRole('textbox',{ name:'Address 1'}).fill('No 62,Colombo2');
await page.getByRole('textbox', { name:'City' }).fill('Colombo');
await page.getByRole('textbox', {name: 'Post Code' }).fill('10230');
await page.locator("#input-payment-country").selectOption({label:'Sri Lanka'});
await page.locator('#input-payment-zone').selectOption({label:'Central'});
await page.locator('#input-comment').fill('Please deliver the order carefully!');
await page.locator('#input-account-agree').check();
await page.locator('label[for="input-agree"]').click();
await page.getByRole('button',{name:'Continue'}).click();
})
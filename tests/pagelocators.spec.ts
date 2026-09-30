import{test,expect, Locator} from "@playwright/test"
test("verify playwright Locators",async({page})=>{
    await page.goto("https://demo.nopcommerce.com/")

  //getByAltText
    const logo:Locator =page.getByAltText("nopCommerce demo store")
    await expect(logo).toBeVisible()

   /*const text:Locator= page.getByText("Welcome to our store");
   await expect(text).toBeVisible();
   */
  //getByText
  await expect(page.getByText("Welcome to our store")).toBeVisible();

  //getByRole
  await page.getByRole('link',{name: 'Register'}).click();

  //getbyLabel
  await page.getByLabel('First name').fill('John');
  await page.getByLabel('LastName').fill('Nura');
  await page.getByLabel('Email').fill('john123@gmail.com');

 //getByPlaceholder
  await page.getByPlaceholder('Search store').fill('computers');  


})
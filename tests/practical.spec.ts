// import{test,Locator,expect} from "@playwright/test";
// test("Google search",async({page})=>{
//     await page.goto("https://www.google.com");
//     await page.getByRole('combobox',{name:'Search'}).fill("chatgpt");
//     await page.getByRole('combobox',{name:'Search'}).press("Enter");
//     expect 
// });

import{test,Locator,expect} from "@playwright/test";
test("page navigation", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/");
    await expect (page.getByRole('heading',{name:'Welcome to the-internet'})).toBeVisible();
    await page.getByRole('link',{name: 'Checkboxes'}).click();
    await page.getByRole('checkbox').first().check();
    
    await page.goto("https://the-internet.herokuapp.com/");
    await page.getByRole('link', { name: 'Dropdown' }).click();
    await page.locator("#dropdown").click(); 
    await page.locator("#dropdown").selectOption('1');

    await page.goto("https://the-internet.herokuapp.com/");
    await page.getByRole('link',{name: 'File Upload'}).click();
    await page.getByRole('button', { name: 'Choose File' }).setInputFiles("C:/Users/DELL/Downloads/QA_Interview_Prep_Chathuni.docx");
    await page.getByRole('button',{name:'upload'}).click();
    await expect (page.getByRole('heading',{name:'File Uploaded!'})).toBeVisible();

    await page.goto("https://the-internet.herokuapp.com/");
    await page.getByRole('link', { name: 'File Download', exact: true }).click();
    await page.getByRole('heading',{name:"File Downloader"}).click();
    await page.getByRole('link', { name: 'dinner.txt' }).click();

    await page.goto("https://the-internet.herokuapp.com/");
    await page.getByRole('link',{name:'Drag and Drop'}).click();
    await page.locator("#column-a").dragTo (page.locator("#column-b"));
    await expect (page.locator("#column-a")).toHaveText("B");
    await expect (page.locator("#column-b")).toHaveText("A");

});
const { test, expect } = require('@playwright/test');
var common = require('./common');

test.beforeAll(async ({ browser }) => {
  var page = await browser.newPage();
  await page.goto('localhost:3000/');

  await common.Redirect(page);
});

test.describe('Check all pages', () => {
  test('Get page character', async ({ page }) => {
    await page.goto('localhost:3000/');
    
    await expect(page.locator("div.character").first()).toHaveCount(1);
  
    await expect(page.locator("input#searchBar").first()).toHaveCount(1);
    await expect(page.locator("select#searchType").first()).toHaveCount(1);
    await expect(page.locator("button.btnSearchBar").first()).toHaveCount(1);
    await expect(page.locator("div#next").first()).toHaveCount(1);
    await expect(page.locator("div#previous").first()).toHaveCount(1);
  });
  
  test('Get describe page character', async ({ page}) => {
    await page.goto('localhost:3000/');
  
    await common.Redirect(page);
    await expect(page.locator("div.character").first()).toHaveCount(0);
    await expect(page.locator("div.cardPerso").first()).toHaveCount(1);
    await expect(page.locator("button.retour").first()).toHaveCount(1);
  });
});

test.describe("Check filter characters", () => {
  test('Get character by filter name', async ({ page }) => {
    await page.goto('localhost:3000/');
  
    await page.locator("select#searchType").first().selectOption('name');
    await page.locator("input#searchBar").first().fill('morty');
    await page.locator("button.btnSearchBar").first().click();
    await expect(page.locator("div.character").first()).toHaveCount(1);
    await expect(page.locator("div.character > p").first()).toContainText('Morty');
  });
  
  test('Get character by filter status', async ({ page }) => {
    await page.goto('localhost:3000/');
  
    await page.locator("select#searchType").first().selectOption('status');
    await page.locator("input#searchBar").first().fill('dead');
    await page.locator("button.btnSearchBar").first().click();
    await expect(page.locator("div.character").first()).toHaveCount(1);
  
    await common.Redirect(page);
  
    await expect(page.getByText('Dead')).toBeVisible();
  });
  
  test('Get character by filter species', async ({ page }) => {
    await page.goto('localhost:3000/');
  
    await page.locator("select#searchType").first().selectOption('species');
    await page.locator("input#searchBar").first().fill('Alien');
    await page.locator("button.btnSearchBar").first().click();
    await expect(page.locator("div.character").first()).toHaveCount(1);
  
    // await common.Redirect(page);
  
    // await expect(page.locator("button.retour").first()).toBeVisible();
    // await expect(page.getByText('Alien')).toBeVisible();
    await expect(page.locator("div.character > p").first()).toContainText('Abadango');
  });
  
  test('Get character by filter gender', async ({ page }) => {
    await page.goto('localhost:3000/');
  
    await page.locator("select#searchType").first().selectOption('gender');
    await page.locator("input#searchBar").first().fill('female');
    await page.locator("button.btnSearchBar").first().click();
    await expect(page.locator("div.character").first()).toHaveCount(1);
  
    // common.Redirect(page);
  
    // await expect(page.getByText('Female')).toBeVisible();
    await expect(page.locator("div.character > p").first()).toContainText('Summer');
  });
});
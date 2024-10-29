import { test, expect } from "@playwright/test";
import { login } from "../pages/utils/authHelper";
import Product from "../pages/Product";
import ProfilePic from "../pages/ProfilePic";

test.describe("Daily Finance Automation", () => {
  test.beforeEach(async ({ page }) => {
    await login(page);
  });

  test("User can add Cost successfully", async ({ page }) => {
    const product = new Product(page);

    await product.addCostBtn.click();
    await product.itemNameInput.fill("Mouse");
    await product.incrementBtn.click();
    await product.amountInput.fill("1500");
    await product.purchaseDateInput.fill("2024-10-31");
    await product.selectMonth.selectOption("October");
    await product.submitBtn.click();
  });

  test("User can upload profile picture successfully", async ({ page }) => {
    const uploadImg = new ProfilePic(page);

    await uploadImg.accountBtn.click();
    await uploadImg.profileBtn.click();
    await uploadImg.editProfileBtn.click();
    await uploadImg.selectImage.setInputFiles("./resources/goku.png");
    await uploadImg.uploadBtn.click();
    await uploadImg.updateBtn.click();
    await page.waitForTimeout(3000);
  });

  test.only("User can logout successfully", async ({ page }) => {
    await page.getByLabel("account of current user").click();
    await page.getByRole("menuitem", { name: "Logout" }).click();
    await page.waitForTimeout(3000);
  });
});

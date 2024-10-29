import { test, expect } from "@playwright/test";
import { login } from "../pages/utils/authHelper";
import Product from "../pages/Product";

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
});

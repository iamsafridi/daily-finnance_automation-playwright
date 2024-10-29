import { test, expect } from "@playwright/test";
import Registration from "../pages/Registration";
import { writeToJSONFile } from "../pages/utils/utils";

test("User can register successfully", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: "Welcome to daily finance" })
  ).toBeVisible();

  const reg = new Registration(page);

  const userData = {
    firstName: "new",
    lastName: "user",
    email: "newuser@gmail.com",
    password: "user1234",
    phoneNumber: "01555555555",
    address: "gulshan",
  };

  await reg.registerUser(userData);

  // Save the user data to a JSON file
  writeToJSONFile(userData);
});

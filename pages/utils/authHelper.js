import { test, expect } from "@playwright/test";
import { readFromJSONFile } from "./utils";
import LoginPage from "../LoginPage";

export const login = async (page) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: "Welcome to daily finance" })
  ).toBeVisible();

  const registeredUser = readFromJSONFile();
  if (registeredUser) {
    const login = new LoginPage(page);
    await login.loginUser(registeredUser.email, registeredUser.password);
  } else {
    console.error("No user data found in JSON for login.");
  }
};

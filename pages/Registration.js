class Registration {
  constructor(page) {
    this.page = page;
    this.registerLink = page.getByRole("link", { name: "Register" });
    this.firstNameInput = page.getByLabel("First Name *");
    this.lastNameInput = page.getByLabel("Last Name");
    this.emailInput = page.getByLabel("Email *");
    this.passwordInput = page.getByLabel("Password *");
    this.phoneNumberInput = page.getByLabel("Phone Number *");
    this.addressInput = page.getByLabel("Address");
    this.gender = page.getByRole("radio");
    this.terms = page.getByRole("checkbox");
    this.registerBtn = page.getByRole("button", { name: "Register" });
  }

  async registerUser(user) {
    await this.registerLink.click();
    await this.firstNameInput.fill(user.firstName);
    await this.lastNameInput.fill(user.lastName);
    await this.emailInput.fill(user.email);
    await this.passwordInput.fill(user.password);
    await this.phoneNumberInput.fill(user.phoneNumber);
    await this.addressInput.fill(user.address);
    await this.gender.first().check();
    await this.terms.check();
    await this.registerBtn.click();
  }
}
export default Registration;

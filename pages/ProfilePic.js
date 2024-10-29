class ProfilePic {
  constructor(page) {
    this.page = page;
    this.accountBtn = page.getByLabel("account of current user");
    this.profileBtn = page.getByRole("menuitem", { name: "Profile" });
    this.editProfileBtn = page.getByRole("button", { name: "Edit" });
    this.selectImage = page.locator('input[type="file"]');
    this.uploadBtn = page.getByRole("button", { name: "Upload Image" });
    this.updateBtn = page.getByRole("button", { name: "Update" });
  }
}
export default ProfilePic;

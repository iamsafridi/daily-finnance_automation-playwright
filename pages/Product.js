class Product {
  constructor(page) {
    this.page = page;
    this.addCostBtn = page.getByRole("button", { name: "Add Cost" });
    this.itemNameInput = page.getByLabel("Item Name");
    this.incrementBtn = page.getByRole("button", { name: "+" });
    this.amountInput = page.getByLabel("Amount");
    this.purchaseDateInput = page.getByLabel("Purchase Date");
    this.selectMonth = page.getByLabel("Month");
    this.submitBtn = page.getByRole("button", { name: "Submit" });
  }
}
export default Product;

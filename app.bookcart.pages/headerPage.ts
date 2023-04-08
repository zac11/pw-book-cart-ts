import { Page } from "@playwright/test";
import baseFunction from "../app.book.base/baseFunctions";

export default class headerPage {
  constructor(private page: Page, private base: baseFunction) {}

  private headerPageElements = {
    searchInput: `Search books or authors`,
    cartBtn: `shopping_cart`,
    cartValue: `#mat-badge-content-0`,
    loginLink: `Login`,
    order_dropDown: `arrow_drop_down`,
    myOrdersName: `My Orders`,
    logout: `Logout`,
  };

  private pageRoles = {
    button: "button",
    menuitem: "menuitem",
  };

  async enterBookName(bookname: string) {
    await this.page
      .getByPlaceholder(this.headerPageElements.searchInput)
      .fill(bookname);
  }

  async clickOnCart() {
    await this.page
      .getByRole(`button`)
      .filter({ hasText: `${this.headerPageElements.cartBtn}` })
      .click();
  }

  async getCartValue() {
    await this.page.locator(this.headerPageElements.cartValue).textContent();
  }

  async clickOnLoginLink() {
    await this.base.waitAndClickonRoleWithName(
      this.headerPageElements.loginLink,
      "button"
    );
  }

  async clickOnMenuList() {
    await this.base.clickOnRolewithName(
      this.headerPageElements.order_dropDown,
      "button"
    );
  }

  async goToUserMenu() {
    await this.base.clickOnRolewithName(
      this.headerPageElements.myOrdersName,
      "menuitem"
    );
  }

  async clickOnLogout() {
    await this.base.clickOnRolewithName(
      this.headerPageElements.logout,
      "menuitem"
    );
  }
}

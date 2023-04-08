import { Page } from "@playwright/test";

export default class baseFunction {
  constructor(private page: Page) {}



  async waitAndClickonRoleWithName(locator: string, role: "alert"|"button"|"menuitem") {
   const element = this.page.getByRole(role).filter({hasText: `${locator}`});
    await element.waitFor({
      state: "visible",
    });
    await element.click();
  }

  async waitAndClickRoleByFilter(locator: string, role: "alert"|"button"|"menuitem"){
    const element = this.page.getByRole(role, { name: `${locator}` });
    await element.waitFor({
      state: "visible",
    });
    await element.click();
  }


async clickOnRolewithName(locator: string, role: "button"| "menuitem"| "alert"){
    await this.page.getByRole(role,{name: `${locator}`}).click()
}
}

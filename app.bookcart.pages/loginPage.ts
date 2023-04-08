import { Page } from "@playwright/test";
import baseFunction from "../app.book.base/baseFunctions";

export default class loginPage{

    constructor(private page: Page, private base: baseFunction){ }

    private loginElements = {
        username: "input[formcontrolname='username']",
        password: "input[formcontrolname='password']",
        loginBtn: "button[color='primary']",
        error: "alert"
    }

    async enterUserName(user: string){
        await this.page.locator(this.loginElements.username).fill(user);
    }

    async enterPassword(pass:string){
        await this.page.locator(this.loginElements.password).fill(pass);
    }

    async clickLoginButton(){
       await this.base.navigateTo(this.loginElements.loginBtn);
       
    }

    async getErrorMessage(){
        return this.page.locator(this.loginElements.error);
    }

    async loginUser(user: string, password: string){
        await this.enterUserName(user);
        await this.enterPassword(password);
        await this.clickLoginButton();

    }





}
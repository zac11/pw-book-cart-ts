import { expect, Expect, Page } from "@playwright/test";

export default class asserts{
    constructor(private page: Page){}

    async assertTitle(expectedTitle: string){
        await expect(this.page).toHaveTitle(expectedTitle);
    }

    async assertTitleContains(partTitle: string){
        const pageTitle = await this.page.title();
        await (expect(pageTitle).toContain(partTitle));
    }

    async assertUrl(url:string){
        await (expect(this.page).toHaveURL(`/.*${url}/`));
    }

    async assertUrlContains(urlwords:string){
        const pageUrl = await this.page.url();
       await (expect(pageUrl).toContain(urlwords));
    }

}
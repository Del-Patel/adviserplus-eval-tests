import { Page, Locator } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly todoLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.todoLink = page.locator('#todo-link');
    }

    async goto() {
        await this.page.goto('/');
    }

    async goToTodoList() {
        await this.todoLink.click();
    }
}
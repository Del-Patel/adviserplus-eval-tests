import { Page, Locator } from '@playwright/test';
import { ToDoType } from './ToDoType';

export class ToDoPage {
    readonly page: Page;
    readonly typeSelect: Locator;
    readonly newTodoInput: Locator;
    readonly addButton: Locator;
    readonly backToHomeLink: Locator;
    readonly todoList: Locator;

    constructor(page: Page) {
        this.page = page;
        this.typeSelect = page.locator('#todo-type-select');
        this.newTodoInput = page.locator('#new-todo-input');
        this.addButton = page.locator('#add-todo-button');
        this.backToHomeLink = page.locator('#back-to-home-link');
        this.todoList = page.locator('#todo-list li');
    }

    async addTodo(text: string, type: ToDoType = ToDoType.Task): Promise<void> {
        await this.typeSelect.selectOption(type);
        await this.newTodoInput.fill(text);
        await this.addButton.click();
    }

    async goBackToHome(): Promise<void> {
        await this.backToHomeLink.click();
    }

    todoItem(index: number): Locator {
        return this.page.locator(`#todo-item-${index}`);
    }
}
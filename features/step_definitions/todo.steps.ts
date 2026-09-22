import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { ToDoPage } from '../../pages/toDoPage';
import { ToDoType } from '../../pages/ToDoType';

const { Given, When, Then } = createBdd();

Given('the user has navigated to the Todo page', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await homePage.goToTodoList();
});

When('the user adds {string} as a Task', async ({ page }, text: string) => {
  const todoPage = new ToDoPage(page);
  await todoPage.addTodo(text, ToDoType.Task);
});

When('the user adds {string} as a Reminder', async ({ page }, text: string) => {
  const todoPage = new ToDoPage(page);
  await todoPage.addTodo(text, ToDoType.Reminder);
});

When('the user clicks the back to home link', async ({ page }) => {
  const todoPage = new ToDoPage(page);
  await todoPage.goBackToHome();
});

Then('{string} should be displayed in the todo list', async ({ page }, expected: string) => {
  const todoPage = new ToDoPage(page);
  await expect(todoPage.todoItem(0)).toHaveText(expected);
});

Then('{string} should be displayed in the todo list at position {int}', async ({ page }, expected: string, position: number) => {
  const todoPage = new ToDoPage(page);
  await expect(todoPage.todoItem(position)).toHaveText(expected);
});

Then('the user should be on the home page', async ({ page }) => {
  await expect(page).toHaveURL('/');
});
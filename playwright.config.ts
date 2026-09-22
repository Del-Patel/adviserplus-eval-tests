import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: 'features/**/*.feature',
  steps: 'features/step_definitions/**/*.ts',
});

export default defineConfig({
  testDir,
  use: {
    ...devices['Desktop Chrome'],
    baseURL: 'https://kind-grass-0d8b5e503.5.azurestaticapps.net',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
});